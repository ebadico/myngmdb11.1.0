/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, Input, HostBinding } from '@angular/core';
var MDBBadgeComponent = /** @class */ (function () {
    function MDBBadgeComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    MDBBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            /** @type {?} */
            var customClassArr = this.color.split(' ');
            customClassArr.forEach(function (el) {
                _this._renderer.addClass(_this._el.nativeElement, el);
            });
        }
    };
    MDBBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-badge',
                    template: "<span [attr.class]=\"class\">\n  <ng-content></ng-content>\n</span>\n"
                }] }
    ];
    /** @nocollapse */
    MDBBadgeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return MDBBadgeComponent;
}());
export { MDBBadgeComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2JhZGdlL21kYi1iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGO0lBZ0JJLDJCQUFvQixHQUFlLEVBQVUsU0FBb0I7UUFBN0MsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBSSxDQUFDOzs7O0lBRXRFLG9DQUFROzs7SUFBUjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztnQkFDTixjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBRTVDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFVO2dCQUM5QixLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBRUwsQ0FBQzs7Z0JBNUJKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsaUZBQXlDO2lCQUM1Qzs7OztnQkFMMkIsVUFBVTtnQkFBRSxTQUFTOzs7MEJBTzVDLEtBQUssWUFBSSxXQUFXLFNBQUMscUJBQXFCOzBCQUMxQyxLQUFLLFlBQUksV0FBVyxTQUFDLHFCQUFxQjswQkFDMUMsS0FBSyxZQUFJLFdBQVcsU0FBQyxxQkFBcUI7dUJBQzFDLEtBQUssWUFBSSxXQUFXLFNBQUMsa0JBQWtCOzBCQUN2QyxLQUFLLFlBQUksV0FBVyxTQUFDLHFCQUFxQjt5QkFDMUMsS0FBSyxZQUFJLFdBQVcsU0FBQyxvQkFBb0I7dUJBRXpDLEtBQUssWUFBSSxXQUFXLFNBQUMsa0JBQWtCO3dCQUV2QyxLQUFLO3dCQUNMLEtBQUs7O0lBZVYsd0JBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTFCWSxpQkFBaUI7OztJQUMxQixvQ0FBOEQ7O0lBQzlELG9DQUE4RDs7SUFDOUQsb0NBQThEOztJQUM5RCxpQ0FBd0Q7O0lBQ3hELG9DQUE4RDs7SUFDOUQsbUNBQTREOztJQUU1RCxpQ0FBd0Q7O0lBRXhELGtDQUF1Qjs7SUFDdkIsa0NBQXVCOzs7OztJQUNYLGdDQUF1Qjs7Ozs7SUFBRSxzQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdtZGItYmFkZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9tZGItYmFkZ2UuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE1EQkJhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWRlZmF1bHQnKSBkZWZhdWx0OiBib29sZWFuO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtcHJpbWFyeScpIHByaW1hcnk6IGJvb2xlYW47XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1zdWNjZXNzJykgc3VjY2VzczogYm9vbGVhbjtcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLWluZm8nKSBpbmZvOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2Utd2FybmluZycpIHdhcm5pbmc6IGJvb2xlYW47XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1kYW5nZXInKSBkYW5nZXI6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLmJhZGdlLXBpbGwnKSBwaWxsOiBib29sZWFuO1xuXG4gICAgQElucHV0KCkgY29sb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnYmFkZ2UnKTtcbiAgICAgICAgaWYgKHRoaXMuY29sb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNsYXNzQXJyID0gdGhpcy5jb2xvci5zcGxpdCgnICcpO1xuXG4gICAgICAgICAgICBjdXN0b21DbGFzc0Fyci5mb3JFYWNoKChlbDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19