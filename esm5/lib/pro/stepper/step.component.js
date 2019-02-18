/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, TemplateRef, ElementRef, } from '@angular/core';
import { FormGroup } from '@angular/forms';
var MdbStepComponent = /** @class */ (function () {
    function MdbStepComponent(el) {
        this.el = el;
        this._isActive = false;
    }
    Object.defineProperty(MdbStepComponent.prototype, "isDone", {
        get: /**
         * @return {?}
         */
        function () { return this._isDone; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isDone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbStepComponent.prototype, "isWrong", {
        get: /**
         * @return {?}
         */
        function () { return this._isWrong; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isWrong = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbStepComponent.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () { return this._isActive; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._isActive = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    MdbStepComponent.prototype._removeClasses = /**
     * @private
     * @return {?}
     */
    function () {
        this.isActive = false;
        this.isDone = false;
        this.isWrong = false;
    };
    /**
     * @return {?}
     */
    MdbStepComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        if (this.stepForm) {
            this.stepForm.reset();
        }
        this._removeClasses();
    };
    /**
     * @return {?}
     */
    MdbStepComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    MdbStepComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-step',
                    exportAs: 'mdbStep',
                    template: '<ng-template><ng-content></ng-content></ng-template>'
                }] }
    ];
    /** @nocollapse */
    MdbStepComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MdbStepComponent.propDecorators = {
        content: [{ type: ViewChild, args: [TemplateRef,] }],
        name: [{ type: Input }],
        label: [{ type: Input }],
        stepForm: [{ type: Input }]
    };
    return MdbStepComponent;
}());
export { MdbStepComponent };
if (false) {
    /** @type {?} */
    MdbStepComponent.prototype.content;
    /** @type {?} */
    MdbStepComponent.prototype.name;
    /** @type {?} */
    MdbStepComponent.prototype.label;
    /** @type {?} */
    MdbStepComponent.prototype.stepForm;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isDone;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isWrong;
    /**
     * @type {?}
     * @private
     */
    MdbStepComponent.prototype._isActive;
    /** @type {?} */
    MdbStepComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxHQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQVdFLDBCQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQWtCekIsY0FBUyxHQUFHLEtBQUssQ0FBQztJQWxCVSxDQUFDO0lBRXJDLHNCQUFJLG9DQUFNOzs7O1FBQVYsY0FBZSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7OztRQUNyQyxVQUFXLEtBQWM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSG9DO0lBTXJDLHNCQUFJLHFDQUFPOzs7O1FBQVgsY0FBZ0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDdkMsVUFBWSxLQUFjO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUhzQztJQU12QyxzQkFBSSxzQ0FBUTs7OztRQUFaLGNBQWlCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ3pDLFVBQWEsS0FBYztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FId0M7Ozs7O0lBTWpDLHlDQUFjOzs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELGdDQUFLOzs7SUFBTDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7SUFFQSxDQUFDOztnQkE5Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLHNEQUFzRDtpQkFDakU7Ozs7Z0JBVEMsVUFBVTs7OzBCQVdULFNBQVMsU0FBQyxXQUFXO3VCQUNyQixLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFzQ1IsdUJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTFDWSxnQkFBZ0I7OztJQUMzQixtQ0FBa0Q7O0lBQ2xELGdDQUFzQjs7SUFDdEIsaUNBQXVCOztJQUN2QixvQ0FBNkI7Ozs7O0lBUTdCLG1DQUF5Qjs7Ozs7SUFNekIsb0NBQTBCOzs7OztJQU0xQixxQ0FBMEI7O0lBbEJkLDhCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zdGVwJyxcbiAgZXhwb3J0QXM6ICdtZGJTdGVwJyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIGNvbnRlbnQ6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgc3RlcEZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgZ2V0IGlzRG9uZSgpIHsgcmV0dXJuIHRoaXMuX2lzRG9uZTsgfVxuICBzZXQgaXNEb25lKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNEb25lID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfaXNEb25lOiBib29sZWFuO1xuXG4gIGdldCBpc1dyb25nKCkgeyByZXR1cm4gdGhpcy5faXNXcm9uZzsgfVxuICBzZXQgaXNXcm9uZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzV3JvbmcgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9pc1dyb25nOiBib29sZWFuO1xuXG4gIGdldCBpc0FjdGl2ZSgpIHsgcmV0dXJuIHRoaXMuX2lzQWN0aXZlOyB9XG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfaXNBY3RpdmUgPSBmYWxzZTtcblxuICBwcml2YXRlIF9yZW1vdmVDbGFzc2VzKCkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNXcm9uZyA9IGZhbHNlO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgaWYgKHRoaXMuc3RlcEZvcm0pIHtcbiAgICAgIHRoaXMuc3RlcEZvcm0ucmVzZXQoKTtcbiAgICB9XG4gICAgdGhpcy5fcmVtb3ZlQ2xhc3NlcygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxufVxuIl19