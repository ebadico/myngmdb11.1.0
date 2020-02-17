/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy, } from '@angular/core';
import { Utils } from '../utils';
export class MdbIconComponent {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.fab = false;
        this.far = false;
        this.fal = false;
        this.fad = false;
        this.fas = true;
        this.sizeClass = '';
        this.utils = new Utils();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.size) {
            this.sizeClass = `fa-${this.size}`;
        }
        /** @type {?} */
        const classList = this._el.nativeElement.classList;
        this.fab = classList.contains('fab');
        this.far = classList.contains('far');
        this.fas = classList.contains('fas');
        this.fal = classList.contains('fal');
        this.fad = classList.contains('fad');
        /** @type {?} */
        const formWrapper = this.utils.getClosestEl(this._el.nativeElement, '.md-form') ||
            this.utils.getClosestEl(this._el.nativeElement, '.md-outline');
        if (formWrapper) {
            formWrapper.childNodes.forEach((/**
             * @param {?} el
             * @return {?}
             */
            (el) => {
                if (el.tagName === 'INPUT' || 'TEXTAREA') {
                    this._renderer.listen(el, 'focus', (/**
                     * @return {?}
                     */
                    () => {
                        this._renderer.addClass(this._el.nativeElement, 'active');
                    }));
                    this._renderer.listen(el, 'blur', (/**
                     * @return {?}
                     */
                    () => {
                        this._renderer.removeClass(this._el.nativeElement, 'active');
                    }));
                }
            }));
        }
    }
}
MdbIconComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-icon',
                template: "<i\n  [ngClass]=\"{ fas: fas, far: far, fab: fab, fal: fal, fad: fad }\"\n  class=\"fa-{{ icon }} {{ class }} {{ classInside }} {{ sizeClass }}\"\n></i>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MdbIconComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbIconComponent.propDecorators = {
    icon: [{ type: Input }],
    size: [{ type: Input }],
    class: [{ type: Input }],
    classInside: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MdbIconComponent.prototype.icon;
    /** @type {?} */
    MdbIconComponent.prototype.size;
    /** @type {?} */
    MdbIconComponent.prototype.class;
    /** @type {?} */
    MdbIconComponent.prototype.classInside;
    /** @type {?} */
    MdbIconComponent.prototype.fab;
    /** @type {?} */
    MdbIconComponent.prototype.far;
    /** @type {?} */
    MdbIconComponent.prototype.fal;
    /** @type {?} */
    MdbIconComponent.prototype.fad;
    /** @type {?} */
    MdbIconComponent.prototype.fas;
    /** @type {?} */
    MdbIconComponent.prototype.sizeClass;
    /** @type {?} */
    MdbIconComponent.prototype.utils;
    /**
     * @type {?}
     * @private
     */
    MdbIconComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbIconComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pY29ucy9pY29uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFDVCx1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQU9qQyxNQUFNLE9BQU8sZ0JBQWdCOzs7OztJQWdCM0IsWUFBb0IsR0FBZSxFQUFVLFNBQW9CO1FBQTdDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBVmpFLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixRQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osUUFBRyxHQUFHLEtBQUssQ0FBQztRQUNaLFFBQUcsR0FBRyxLQUFLLENBQUM7UUFDWixRQUFHLEdBQUcsSUFBSSxDQUFDO1FBRVgsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLFVBQUssR0FBVSxJQUFJLEtBQUssRUFBRSxDQUFDO0lBRXlDLENBQUM7Ozs7SUFFckUsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEM7O2NBRUssU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Y0FFL0IsV0FBVyxHQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQztZQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7UUFFaEUsSUFBSSxXQUFXLEVBQUU7WUFDZixXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEVBQU8sRUFBRSxFQUFFO2dCQUN6QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUFJLFVBQVUsRUFBRTtvQkFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU87OztvQkFBRSxHQUFHLEVBQUU7d0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUM1RCxDQUFDLEVBQUMsQ0FBQztvQkFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTTs7O29CQUFFLEdBQUcsRUFBRTt3QkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQy9ELENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHNLQUFvQztnQkFDcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFYQyxVQUFVO1lBRVYsU0FBUzs7O21CQVdSLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFITixnQ0FBc0I7O0lBQ3RCLGdDQUFzQjs7SUFDdEIsaUNBQXVCOztJQUN2Qix1Q0FBNkI7O0lBRTdCLCtCQUFZOztJQUNaLCtCQUFZOztJQUNaLCtCQUFZOztJQUNaLCtCQUFZOztJQUNaLCtCQUFXOztJQUVYLHFDQUFlOztJQUVmLGlDQUEyQjs7Ozs7SUFFZiwrQkFBdUI7Ozs7O0lBQUUscUNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1kYkljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3NJbnNpZGU6IHN0cmluZztcblxuICBmYWIgPSBmYWxzZTtcbiAgZmFyID0gZmFsc2U7XG4gIGZhbCA9IGZhbHNlO1xuICBmYWQgPSBmYWxzZTtcbiAgZmFzID0gdHJ1ZTtcblxuICBzaXplQ2xhc3MgPSAnJztcblxuICB1dGlsczogVXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zaXplKSB7XG4gICAgICB0aGlzLnNpemVDbGFzcyA9IGBmYS0ke3RoaXMuc2l6ZX1gO1xuICAgIH1cblxuICAgIGNvbnN0IGNsYXNzTGlzdCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHRoaXMuZmFiID0gY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWInKTtcbiAgICB0aGlzLmZhciA9IGNsYXNzTGlzdC5jb250YWlucygnZmFyJyk7XG4gICAgdGhpcy5mYXMgPSBjbGFzc0xpc3QuY29udGFpbnMoJ2ZhcycpO1xuICAgIHRoaXMuZmFsID0gY2xhc3NMaXN0LmNvbnRhaW5zKCdmYWwnKTtcbiAgICB0aGlzLmZhZCA9IGNsYXNzTGlzdC5jb250YWlucygnZmFkJyk7XG5cbiAgICBjb25zdCBmb3JtV3JhcHBlciA9XG4gICAgICB0aGlzLnV0aWxzLmdldENsb3Nlc3RFbCh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnLm1kLWZvcm0nKSB8fFxuICAgICAgdGhpcy51dGlscy5nZXRDbG9zZXN0RWwodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJy5tZC1vdXRsaW5lJyk7XG5cbiAgICBpZiAoZm9ybVdyYXBwZXIpIHtcbiAgICAgIGZvcm1XcmFwcGVyLmNoaWxkTm9kZXMuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZWwudGFnTmFtZSA9PT0gJ0lOUFVUJyB8fCAnVEVYVEFSRUEnKSB7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIubGlzdGVuKGVsLCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fcmVuZGVyZXIubGlzdGVuKGVsLCAnYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=