import { Directive, Input, Output, EventEmitter, Renderer2, ElementRef, ViewContainerRef, HostListener, } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { PopoverContainerComponent } from './popover-container.component';
import { PositioningService } from '../utils/positioning/positioning.service';
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
export class PopoverDirective {
    constructor(_elementRef, _renderer, _viewContainerRef, _config, cis, _positionService) {
        this._positionService = _positionService;
        this.dynamicPosition = true;
        this.outsideClick = false;
        this.popoverDisabled = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.shown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        this.hidden = this._popover.onHidden;
    }
    /**
     * Returns whether or not the popover is currently being shown
     */
    get isOpen() {
        return this._popover.isShown;
    }
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    get hasContent() {
        if (typeof this.mdbPopover === 'string') {
            return this.mdbPopover.length > 0;
        }
        return true;
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    show() {
        if (this._popover.isShown || this.popoverDisabled || !this.hasContent) {
            return;
        }
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.dynamicPosition,
                },
                preventOverflow: {
                    enabled: this.dynamicPosition,
                },
            },
        });
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbPopover,
            placement: this.placement,
            title: this.mdbPopoverHeader || this.popoverTitle,
            containerClass: this.containerClass ? this.containerClass : '',
            bodyClass: this.bodyClass ? this.bodyClass : '',
            headerClass: this.headerClass ? this.headerClass : '',
        });
        this.isOpen = true;
        if (!this.dynamicPosition) {
            this._positionService.calcPosition();
            this._positionService.deletePositionElement(this._popover._componentRef.location);
        }
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    hide() {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    onclick(event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    }
    onblur() {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    }
    // fix(popover): popover with outsideClick='true' will now close after clicking in document on iPad Safari
    onTouchStart(event) {
        if (this.outsideClick && !event.target.classList.contains('popover-body')) {
            this.hide();
        }
    }
    ngOnInit() {
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: () => this.show(),
        });
    }
    dispose() {
        this._popover.dispose();
    }
    ngOnDestroy() {
        this._popover.dispose();
    }
}
PopoverDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] }
];
PopoverDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ViewContainerRef },
    { type: PopoverConfig },
    { type: ComponentLoaderFactory },
    { type: PositioningService }
];
PopoverDirective.propDecorators = {
    containerClass: [{ type: Input }],
    bodyClass: [{ type: Input }],
    headerClass: [{ type: Input }],
    mdbPopover: [{ type: Input }],
    mdbPopoverHeader: [{ type: Input }],
    popoverTitle: [{ type: Input }],
    placement: [{ type: Input }],
    triggers: [{ type: Input }],
    container: [{ type: Input }],
    isOpen: [{ type: Input }],
    dynamicPosition: [{ type: Input }],
    outsideClick: [{ type: Input }],
    popoverDisabled: [{ type: Input }],
    onShown: [{ type: Output }],
    shown: [{ type: Output }],
    onHidden: [{ type: Output }],
    hidden: [{ type: Output }],
    onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onblur: [{ type: HostListener, args: ['window:click',] }],
    onTouchStart: [{ type: HostListener, args: ['document:touchstart', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy11aWtpdC1wcm8tc3RhbmRhcmQvc3JjL2xpYi9mcmVlL3BvcG92ZXIvcG9wb3Zlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFHWixTQUFTLEVBQ1QsVUFBVSxFQUVWLGdCQUFnQixFQUNoQixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRTVGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTlFOztHQUVHO0FBRUgsTUFBTSxPQUFPLGdCQUFnQjtJQThEM0IsWUFDRSxXQUF1QixFQUN2QixTQUFvQixFQUNwQixpQkFBbUMsRUFDbkMsT0FBc0IsRUFDdEIsR0FBMkIsRUFDbkIsZ0JBQW9DO1FBQXBDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBb0I7UUF4QnJDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBd0IvQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUc7YUFDaEIsWUFBWSxDQUE0QixXQUFXLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxDQUFDO2FBQ2xGLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxD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QUUsQ0FBQztJQUMxQixDQUFDOzs7WUExTEYsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFOzs7WUFkaEUsVUFBVTtZQURWLFNBQVM7WUFHVCxnQkFBZ0I7WUFHVCxhQUFhO1lBQ2Isc0JBQXNCO1lBR3RCLGtCQUFrQjs7OzZCQU94QixLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFJTCxLQUFLOytCQUlMLEtBQUs7MkJBQ0wsS0FBSzt3QkFJTCxLQUFLO3VCQUtMLEtBQUs7d0JBS0wsS0FBSztxQkFLTCxLQUFLOzhCQWFMLEtBQUs7MkJBQ0wsS0FBSzs4QkFDTCxLQUFLO3NCQUtMLE1BQU07b0JBQ04sTUFBTTt1QkFLTixNQUFNO3FCQUNOLE1BQU07c0JBNkZOLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBT2hDLFlBQVksU0FBQyxjQUFjOzJCQU8zQixZQUFZLFNBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbiAgRWxlbWVudFJlZixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BvdmVyQ29uZmlnIH0gZnJvbSAnLi9wb3BvdmVyLmNvbmZpZyc7XG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmNsYXNzJztcbmltcG9ydCB7IFBvcG92ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXItY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICcuLi91dGlscy9wb3NpdGlvbmluZy9wb3NpdGlvbmluZy5zZXJ2aWNlJztcblxuLyoqXG4gKiBBIGxpZ2h0d2VpZ2h0LCBleHRlbnNpYmxlIGRpcmVjdGl2ZSBmb3IgZmFuY3kgcG9wb3ZlciBjcmVhdGlvbi5cbiAqL1xuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW21kYlBvcG92ZXJdJywgZXhwb3J0QXM6ICdicy1tZGJQb3BvdmVyJyB9KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb250YWluZXJDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgYm9keUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDbGFzczogc3RyaW5nO1xuICAvKipcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgcG9wb3Zlci5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBtZGJQb3BvdmVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKipcbiAgICogVGl0bGUgb2YgYSBwb3BvdmVyLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIG1kYlBvcG92ZXJIZWFkZXI6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIHBvcG92ZXJUaXRsZTogc3RyaW5nO1xuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgcG9wb3Zlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgdHJpZ2dlcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBwb3BvdmVyIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3BvcG92ZXIuaXNTaG93bjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgZHluYW1pY1Bvc2l0aW9uID0gdHJ1ZTtcbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gIEBJbnB1dCgpIHBvcG92ZXJEaXNhYmxlZCA9IGZhbHNlO1xuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBzaG93blxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIHB1YmxpYyBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIHB1YmxpYyBzaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBwb3BvdmVyIGlzIGhpZGRlblxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBwdWJsaWMgaGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBwcml2YXRlIF9wb3BvdmVyOiBDb21wb25lbnRMb2FkZXI8UG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIF9jb25maWc6IFBvcG92ZXJDb25maWcsXG4gICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgIHByaXZhdGUgX3Bvc2l0aW9uU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuX3BvcG92ZXIgPSBjaXNcbiAgICAgIC5jcmVhdGVMb2FkZXI8UG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudD4oX2VsZW1lbnRSZWYsIF92aWV3Q29udGFpbmVyUmVmLCBfcmVuZGVyZXIpXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IFBvcG92ZXJDb25maWcsIHVzZVZhbHVlOiBfY29uZmlnIH0pO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgX2NvbmZpZyk7XG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fcG9wb3Zlci5vblNob3duO1xuICAgIHRoaXMuc2hvd24gPSB0aGlzLl9wb3BvdmVyLm9uU2hvd247XG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX3BvcG92ZXIub25IaWRkZW47XG4gICAgdGhpcy5oaWRkZW4gPSB0aGlzLl9wb3BvdmVyLm9uSGlkZGVuO1xuICB9XG5cbiAgZ2V0IGhhc0NvbnRlbnQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm1kYlBvcG92ZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZGJQb3BvdmVyLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHBvcG92ZXIuXG4gICAqL1xuICBwdWJsaWMgc2hvdygpOiB2b2lkIHwgYW55IHtcbiAgICBpZiAodGhpcy5fcG9wb3Zlci5pc1Nob3duIHx8IHRoaXMucG9wb3ZlckRpc2FibGVkIHx8ICF0aGlzLmhhc0NvbnRlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XG4gICAgICBtb2RpZmllcnM6IHtcbiAgICAgICAgZmxpcDoge1xuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuZHluYW1pY1Bvc2l0aW9uLFxuICAgICAgICB9LFxuICAgICAgICBwcmV2ZW50T3ZlcmZsb3c6IHtcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLmR5bmFtaWNQb3NpdGlvbixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB0aGlzLl9wb3BvdmVyXG4gICAgICAuYXR0YWNoKFBvcG92ZXJDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAucG9zaXRpb24oeyBhdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudCB9KVxuICAgICAgLnNob3coe1xuICAgICAgICBjb250ZW50OiB0aGlzLm1kYlBvcG92ZXIsXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgICAgIHRpdGxlOiB0aGlzLm1kYlBvcG92ZXJIZWFkZXIgfHwgdGhpcy5wb3BvdmVyVGl0bGUsXG4gICAgICAgIGNvbnRhaW5lckNsYXNzOiB0aGlzLmNvbnRhaW5lckNsYXNzID8gdGhpcy5jb250YWluZXJDbGFzcyA6ICcnLFxuICAgICAgICBib2R5Q2xhc3M6IHRoaXMuYm9keUNsYXNzID8gdGhpcy5ib2R5Q2xhc3MgOiAnJyxcbiAgICAgICAgaGVhZGVyQ2xhc3M6IHRoaXMuaGVhZGVyQ2xhc3MgPyB0aGlzLmhlYWRlckNsYXNzIDogJycsXG4gICAgICB9KTtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICBpZiAoIXRoaXMuZHluYW1pY1Bvc2l0aW9uKSB7XG4gICAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuY2FsY1Bvc2l0aW9uKCk7XG4gICAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuZGVsZXRlUG9zaXRpb25FbGVtZW50KHRoaXMuX3BvcG92ZXIuX2NvbXBvbmVudFJlZi5sb2NhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBhbiBlbGVtZW504oCZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgcG9wb3Zlci5cbiAgICovXG4gIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5fcG9wb3Zlci5oaWRlKCk7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSBwb3BvdmVyLlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25jbGljayhldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlcnMudG9TdHJpbmcoKS5pbmNsdWRlcygnZm9jdXMnKSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snKSBvbmJsdXIoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlcnMudG9TdHJpbmcoKS5pbmNsdWRlcygnZm9jdXMnKSAmJiB0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4KHBvcG92ZXIpOiBwb3BvdmVyIHdpdGggb3V0c2lkZUNsaWNrPSd0cnVlJyB3aWxsIG5vdyBjbG9zZSBhZnRlciBjbGlja2luZyBpbiBkb2N1bWVudCBvbiBpUGFkIFNhZmFyaVxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaHN0YXJ0JywgWyckZXZlbnQnXSkgb25Ub3VjaFN0YXJ0KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5vdXRzaWRlQ2xpY2sgJiYgIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcG92ZXItYm9keScpKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogYW55IHtcbiAgICB0aGlzLl9wb3BvdmVyLmxpc3Rlbih7XG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgIHRoaXMuX3BvcG92ZXIuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IGFueSB7XG4gICAgdGhpcy5fcG9wb3Zlci5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdfQ==