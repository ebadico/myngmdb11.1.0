/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewContainerRef } from '@angular/core';
import { TooltipContainerComponent } from './tooltip.component';
import { TooltipConfig } from './tooltip.service';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { OnChange } from '../utils/decorators';
import { isPlatformBrowser } from '@angular/common';
export class TooltipDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} cis
     * @param {?} config
     * @param {?} platformId
     */
    constructor(_viewContainerRef, _renderer, _elementRef, cis, config, platformId) {
        this._elementRef = _elementRef;
        this.platformId = platformId;
        /**
         * Fired when tooltip content changes
         */
        this.tooltipChange = new EventEmitter();
        this.delay = 0;
        this.fadeDuration = 150;
        this.isBrowser = false;
        this.xxx = _viewContainerRef;
        this.yyy = cis;
        this.isBrowser = isPlatformBrowser((this.platformId));
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.shown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
        this.hidden = this._tooltip.onHidden;
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._tooltip.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onclick(event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    }
    /**
     * @return {?}
     */
    onblur() {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: () => this.show()
        });
        this.tooltipChange.subscribe((value) => {
            if (!value) {
                this._tooltip.hide();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!changes['mdbTooltip'].isFirstChange()) {
            this.tooltipChange.emit(this.mdbTooltip);
        }
    }
    /**
     * @return {?}
     */
    changePositionIfNotFit() {
        if (this.placement === 'top' && this._elementRef.nativeElement.offsetTop < (parseInt(this.customHeight, 10) + 16)) {
            this.placement = 'bottom';
        }
        if (this.placement === 'bottom' && ((/** @type {?} */ (this.getBottomOffset()))) < (parseInt(this.customHeight, 10) + 32)) {
            this.placement = 'top';
        }
    }
    /**
     * @return {?}
     */
    getBottomOffset() {
        if (this.isBrowser) {
            /** @type {?} */
            const windowHeight = window.innerHeight;
            /** @type {?} */
            const bottom = this._elementRef.nativeElement.getBoundingClientRect().bottom;
            return windowHeight - bottom;
        }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @param {?=} event
     * @return {?}
     */
    show(event) {
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        if (!this.customHeight) {
            /** @type {?} */
            const elPosition = event ? event.target.getBoundingClientRect() : this._elementRef.nativeElement.getBoundingClientRect();
            if (this.placement === 'top' && elPosition.top < 40) {
                this.placement = 'bottom';
            }
            if (this.placement === 'bottom' && (/** @type {?} */ (this.getBottomOffset())) < 60) {
                this.placement = 'top';
            }
        }
        else if (this.customHeight) {
            this.changePositionIfNotFit();
        }
        /** @type {?} */
        const showTooltip = () => this._tooltip
            .attach(TooltipContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbTooltip,
            placement: this.placement
        });
        if (this.delay) {
            this._delayTimeoutId = setTimeout(() => {
                showTooltip();
            }, this.delay);
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(() => {
            this._tooltip.hide();
        }, this.fadeDuration);
    }
    /**
     * @return {?}
     */
    dispose() {
        this._tooltip.dispose();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tooltip.dispose();
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTooltip]',
                exportAs: 'mdb-tooltip'
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ComponentLoaderFactory },
    { type: TooltipConfig },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
TooltipDirective.propDecorators = {
    mdbTooltip: [{ type: Input }],
    tooltipChange: [{ type: Output }],
    placement: [{ type: Input }],
    triggers: [{ type: Input }],
    container: [{ type: Input }],
    isOpen: [{ type: Input }],
    isDisabled: [{ type: Input }],
    onShown: [{ type: Output }],
    shown: [{ type: Output }],
    onHidden: [{ type: Output }],
    hidden: [{ type: Output }],
    delay: [{ type: Input }],
    customHeight: [{ type: Input }],
    fadeDuration: [{ type: Input }],
    onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onblur: [{ type: HostListener, args: ['window:click',] }]
};
tslib_1.__decorate([
    OnChange(),
    tslib_1.__metadata("design:type", Object)
], TooltipDirective.prototype, "mdbTooltip", void 0);
if (false) {
    /**
     * Content to be displayed as tooltip.
     * @type {?}
     */
    TooltipDirective.prototype.mdbTooltip;
    /**
     * Fired when tooltip content changes
     * @type {?}
     */
    TooltipDirective.prototype.tooltipChange;
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    TooltipDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    TooltipDirective.prototype.triggers;
    /**
     * A selector specifying the element the tooltip should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    TooltipDirective.prototype.container;
    /**
     * Allows to disable tooltip
     * @type {?}
     */
    TooltipDirective.prototype.isDisabled;
    /**
     * Emits an event when the tooltip is shown
     * @type {?}
     */
    TooltipDirective.prototype.onShown;
    /** @type {?} */
    TooltipDirective.prototype.shown;
    /**
     * Emits an event when the tooltip is hidden
     * @type {?}
     */
    TooltipDirective.prototype.onHidden;
    /** @type {?} */
    TooltipDirective.prototype.hidden;
    /** @type {?} */
    TooltipDirective.prototype.delay;
    /** @type {?} */
    TooltipDirective.prototype.customHeight;
    /** @type {?} */
    TooltipDirective.prototype.fadeDuration;
    /**
     * @type {?}
     * @protected
     */
    TooltipDirective.prototype._delayTimeoutId;
    /** @type {?} */
    TooltipDirective.prototype.isBrowser;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._tooltip;
    /** @type {?} */
    TooltipDirective.prototype.xxx;
    /** @type {?} */
    TooltipDirective.prototype.yyy;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUFFLFlBQVksRUFDMUIsTUFBTSxFQUNOLEtBQUssRUFJTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFHVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBRTFGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQU1sRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUFrRTNCLFlBQW1CLGlCQUFtQyxFQUNuQyxTQUFvQixFQUNaLFdBQXVCLEVBQy9CLEdBQTJCLEVBQzNCLE1BQXFCLEVBQ1EsVUFBa0I7UUFIdkMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFHRixlQUFVLEdBQVYsVUFBVSxDQUFROzs7O1FBaEVqRCxrQkFBYSxHQUE0QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBaUQ3RSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsaUJBQVksR0FBRyxHQUFHLENBQUM7UUFHbkMsY0FBUyxHQUFRLEtBQUssQ0FBQztRQVdyQixJQUFJLENBQUMsR0FBRyxHQUFHLGlCQUFpQixDQUFDO1FBQzdCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsR0FB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dGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7VG9vbHRpcENvbmZpZ30gZnJvbSAnLi90b29sdGlwLnNlcnZpY2UnO1xuaW1wb3J0IHtDb21wb25lbnRMb2FkZXJGYWN0b3J5fSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuZmFjdG9yeSc7XG5pbXBvcnQge0NvbXBvbmVudExvYWRlcn0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmNsYXNzJztcbmltcG9ydCB7T25DaGFuZ2V9IGZyb20gJy4uL3V0aWxzL2RlY29yYXRvcnMnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICdtZGItdG9vbHRpcCdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgdG9vbHRpcC5cbiAgICovXG4gIEBPbkNoYW5nZSgpXG4gIEBJbnB1dCgpIHB1YmxpYyBtZGJUb29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogRmlyZWQgd2hlbiB0b29sdGlwIGNvbnRlbnQgY2hhbmdlcyAqL1xuICBAT3V0cHV0KCkgcHVibGljIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgdG9vbHRpcC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHBsYWNlbWVudDogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHRyaWdnZXJzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBjb250YWluZXI6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdG9vbHRpcCBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwLmlzU2hvd247XG4gIH1cblxuICBwdWJsaWMgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gZGlzYWJsZSB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93blxuICAgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIHB1YmxpYyBzaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIGhpZGRlblxuICAgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBwdWJsaWMgaGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBASW5wdXQoKSBwdWJsaWMgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tSGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBmYWRlRHVyYXRpb24gPSAxNTA7XG5cbiAgcHJvdGVjdGVkIF9kZWxheVRpbWVvdXRJZDogYW55O1xuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuICBwcml2YXRlIF90b29sdGlwOiBDb21wb25lbnRMb2FkZXI8VG9vbHRpcENvbnRhaW5lckNvbXBvbmVudD47XG4gIHh4eDogYW55O1xuICB5eXk6IGFueTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgICAgICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgICAgICAgICAgICAgICAgICBjb25maWc6IFRvb2x0aXBDb25maWcsXG4gICAgICAgICAgICAgICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZykge1xuICAgIHRoaXMueHh4ID0gX3ZpZXdDb250YWluZXJSZWY7XG4gICAgdGhpcy55eXkgPSBjaXM7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcigodGhpcy5wbGF0Zm9ybUlkKSk7XG4gICAgdGhpcy5fdG9vbHRpcCA9IGNpc1xuICAgICAgLmNyZWF0ZUxvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50Pih0aGlzLl9lbGVtZW50UmVmLCBfdmlld0NvbnRhaW5lclJlZiwgX3JlbmRlcmVyKVxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IFRvb2x0aXBDb25maWcsIHVzZVZhbHVlOiBjb25maWd9KTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl90b29sdGlwLm9uU2hvd247XG4gICAgdGhpcy5zaG93biA9IHRoaXMuX3Rvb2x0aXAub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fdG9vbHRpcC5vbkhpZGRlbjtcbiAgICB0aGlzLmhpZGRlbiA9IHRoaXMuX3Rvb2x0aXAub25IaWRkZW47XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uY2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGlmICh0aGlzLnRyaWdnZXJzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2ZvY3VzJykpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJykgb25ibHVyKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXJzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2ZvY3VzJykgJiYgdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl90b29sdGlwLmxpc3Rlbih7XG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG4gICAgdGhpcy50b29sdGlwQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIWNoYW5nZXNbJ21kYlRvb2x0aXAnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMudG9vbHRpcENoYW5nZS5lbWl0KHRoaXMubWRiVG9vbHRpcCk7XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlUG9zaXRpb25JZk5vdEZpdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09ICd0b3AnICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgPCAocGFyc2VJbnQodGhpcy5jdXN0b21IZWlnaHQsIDEwKSArIDE2KSkge1xuICAgICAgdGhpcy5wbGFjZW1lbnQgPSAnYm90dG9tJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09ICdib3R0b20nICYmICh0aGlzLmdldEJvdHRvbU9mZnNldCgpIGFzIGFueSkgPCAocGFyc2VJbnQodGhpcy5jdXN0b21IZWlnaHQsIDEwKSArIDMyKSkge1xuICAgICAgdGhpcy5wbGFjZW1lbnQgPSAndG9wJztcbiAgICB9XG4gIH1cblxuICBnZXRCb3R0b21PZmZzZXQoKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjb25zdCBib3R0b20gPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgICAgcmV0dXJuIHdpbmRvd0hlaWdodCAtIGJvdHRvbTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW504oCZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHB1YmxpYyB0b2dnbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaG93KCk7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICBwdWJsaWMgc2hvdyhldmVudD86IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLmlzRGlzYWJsZWQgfHwgdGhpcy5fZGVsYXlUaW1lb3V0SWQgfHwgIXRoaXMubWRiVG9vbHRpcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jdXN0b21IZWlnaHQpIHtcbiAgICAgIGNvbnN0IGVsUG9zaXRpb24gPSBldmVudCA/IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgZWxQb3NpdGlvbi50b3AgPCA0MCkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9ICdib3R0b20nO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT09ICdib3R0b20nICYmIHRoaXMuZ2V0Qm90dG9tT2Zmc2V0KCkgYXMgYW55IDwgNjApIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSAndG9wJztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuY3VzdG9tSGVpZ2h0KSB7XG4gICAgICB0aGlzLmNoYW5nZVBvc2l0aW9uSWZOb3RGaXQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93VG9vbHRpcCA9ICgpID0+IHRoaXMuX3Rvb2x0aXBcbiAgICAgIC5hdHRhY2goVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudClcbiAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxuICAgICAgLnNob3coe1xuICAgICAgICBjb250ZW50OiB0aGlzLm1kYlRvb2x0aXAsXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnRcbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuZGVsYXkpIHtcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNob3dUb29sdGlwKCk7XG4gICAgICB9LCB0aGlzLmRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RlbGF5VGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXlUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl90b29sdGlwLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90b29sdGlwLmluc3RhbmNlLmNsYXNzTWFwLmluID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcbiAgICB9LCB0aGlzLmZhZGVEdXJhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl90b29sdGlwLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl90b29sdGlwLmRpc3Bvc2UoKTtcbiAgfVxufVxuIl19