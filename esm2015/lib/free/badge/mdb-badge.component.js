/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, Input, HostBinding } from '@angular/core';
export class MDBBadgeComponent {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            /** @type {?} */
            const customClassArr = this.color.split(' ');
            customClassArr.forEach((el) => {
                this._renderer.addClass(this._el.nativeElement, el);
            });
        }
    }
}
MDBBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-badge',
                template: "<span [attr.class]=\"class\">\n  <ng-content></ng-content>\n</span>\n"
            }] }
];
/** @nocollapse */
MDBBadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MDBBadgeComponent.propDecorators = {
    default: [{ type: Input }, { type: HostBinding, args: ['class.badge-default',] }],
    primary: [{ type: Input }, { type: HostBinding, args: ['class.badge-primary',] }],
    success: [{ type: Input }, { type: HostBinding, args: ['class.badge-success',] }],
    info: [{ type: Input }, { type: HostBinding, args: ['class.badge-info',] }],
    warning: [{ type: Input }, { type: HostBinding, args: ['class.badge-warning',] }],
    danger: [{ type: Input }, { type: HostBinding, args: ['class.badge-danger',] }],
    pill: [{ type: Input }, { type: HostBinding, args: ['class.badge-pill',] }],
    color: [{ type: Input }],
    class: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MDBBadgeComponent.prototype.default;
    /** @type {?} */
    MDBBadgeComponent.prototype.primary;
    /** @type {?} */
    MDBBadgeComponent.prototype.success;
    /** @type {?} */
    MDBBadgeComponent.prototype.info;
    /** @type {?} */
    MDBBadgeComponent.prototype.warning;
    /** @type {?} */
    MDBBadgeComponent.prototype.danger;
    /** @type {?} */
    MDBBadgeComponent.prototype.pill;
    /** @type {?} */
    MDBBadgeComponent.prototype.color;
    /** @type {?} */
    MDBBadgeComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    MDBBadgeComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MDBBadgeComponent.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2JhZGdlL21kYi1iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTdGLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBWTFCLFlBQW9CLEdBQWUsRUFBVSxTQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFJLENBQUM7Ozs7SUFFdEUsUUFBUTtRQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7a0JBQ04sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUU1QyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBVSxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1NBQ047SUFFTCxDQUFDOzs7WUE1QkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixpRkFBeUM7YUFDNUM7Ozs7WUFMMkIsVUFBVTtZQUFFLFNBQVM7OztzQkFPNUMsS0FBSyxZQUFJLFdBQVcsU0FBQyxxQkFBcUI7c0JBQzFDLEtBQUssWUFBSSxXQUFXLFNBQUMscUJBQXFCO3NCQUMxQyxLQUFLLFlBQUksV0FBVyxTQUFDLHFCQUFxQjttQkFDMUMsS0FBSyxZQUFJLFdBQVcsU0FBQyxrQkFBa0I7c0JBQ3ZDLEtBQUssWUFBSSxXQUFXLFNBQUMscUJBQXFCO3FCQUMxQyxLQUFLLFlBQUksV0FBVyxTQUFDLG9CQUFvQjttQkFFekMsS0FBSyxZQUFJLFdBQVcsU0FBQyxrQkFBa0I7b0JBRXZDLEtBQUs7b0JBQ0wsS0FBSzs7OztJQVZOLG9DQUE4RDs7SUFDOUQsb0NBQThEOztJQUM5RCxvQ0FBOEQ7O0lBQzlELGlDQUF3RDs7SUFDeEQsb0NBQThEOztJQUM5RCxtQ0FBNEQ7O0lBRTVELGlDQUF3RDs7SUFFeEQsa0NBQXVCOztJQUN2QixrQ0FBdUI7Ozs7O0lBQ1gsZ0NBQXVCOzs7OztJQUFFLHNDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21kYi1iYWRnZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL21kYi1iYWRnZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTURCQmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtZGVmYXVsdCcpIGRlZmF1bHQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1wcmltYXJ5JykgcHJpbWFyeTogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXN1Y2Nlc3MnKSBzdWNjZXNzOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtaW5mbycpIGluZm86IGJvb2xlYW47XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS13YXJuaW5nJykgd2FybmluZzogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWRhbmdlcicpIGRhbmdlcjogYm9vbGVhbjtcblxuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtcGlsbCcpIHBpbGw6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdiYWRnZScpO1xuICAgICAgICBpZiAodGhpcy5jb2xvcikge1xuICAgICAgICAgICAgY29uc3QgY3VzdG9tQ2xhc3NBcnIgPSB0aGlzLmNvbG9yLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIGN1c3RvbUNsYXNzQXJyLmZvckVhY2goKGVsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=