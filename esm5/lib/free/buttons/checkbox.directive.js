/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, HostListener, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// TODO: config: activeClass - Class to apply to the checked buttons
/** @type {?} */
export var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    // view -> model
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = 
    // view -> model
    /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = 
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] }
    ];
    ButtonCheckboxDirective.propDecorators = {
        btnCheckboxTrue: [{ type: Input }],
        btnCheckboxFalse: [{ type: Input }],
        state: [{ type: HostBinding, args: ['class.active',] }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return ButtonCheckboxDirective;
}());
export { ButtonCheckboxDirective };
if (false) {
    /**
     * Truthy value, will be set to ngModel
     * @type {?}
     */
    ButtonCheckboxDirective.prototype.btnCheckboxTrue;
    /**
     * Falsy value, will be set to ngModel
     * @type {?}
     */
    ButtonCheckboxDirective.prototype.btnCheckboxFalse;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.state;
    /**
     * @type {?}
     * @protected
     */
    ButtonCheckboxDirective.prototype.value;
    /**
     * @type {?}
     * @protected
     */
    ButtonCheckboxDirective.prototype.isDisabled;
    /**
     * @type {?}
     * @protected
     */
    ButtonCheckboxDirective.prototype.onChange;
    /**
     * @type {?}
     * @protected
     */
    ButtonCheckboxDirective.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvYnV0dG9ucy9jaGVja2JveC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSXpFLE1BQU0sS0FBTywrQkFBK0IsR0FBUTtJQUNsRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixDQUFDO0lBQ3RELEtBQUssRUFBRSxJQUFJO0NBQ1o7Ozs7QUFLRDtJQUFBOzs7O1FBR2tCLG9CQUFlLEdBQVEsSUFBSSxDQUFDOzs7O1FBRTVCLHFCQUFnQixHQUFRLEtBQUssQ0FBQztRQUVWLFVBQUssR0FBRyxLQUFLLENBQUM7UUFLeEMsYUFBUSxHQUFRLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDbkMsY0FBUyxHQUFRLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFvRGhELENBQUM7SUFsREMsZ0JBQWdCOzs7OztJQUVULHlDQUFPOzs7OztJQURkO1FBRUUsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVNLDBDQUFROzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHNCQUFjLDhDQUFTOzs7OztRQUF2QjtZQUNFLE9BQU8sT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLFdBQVc7Z0JBQ2xELENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZTtnQkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNULENBQUM7OztPQUFBO0lBRUQsc0JBQWMsK0NBQVU7Ozs7O1FBQXhCO1lBQ0UsT0FBTyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXO2dCQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtnQkFDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNWLENBQUM7OztPQUFBOzs7OztJQUVNLHdDQUFNOzs7O0lBQWIsVUFBYyxLQUFjO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsdUJBQXVCO0lBQ3ZCLGdCQUFnQjs7Ozs7OztJQUNULDRDQUFVOzs7Ozs7O0lBQWpCLFVBQWtCLEtBQVU7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVNLGtEQUFnQjs7OztJQUF2QixVQUF3QixVQUFtQjtRQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDOzs7OztJQUVNLGtEQUFnQjs7OztJQUF2QixVQUF3QixFQUFrQjtRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVNLG1EQUFpQjs7OztJQUF4QixVQUF5QixFQUFZO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQWhFRixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDLEVBQUM7OztrQ0FHakYsS0FBSzttQ0FFTCxLQUFLO3dCQUVMLFdBQVcsU0FBQyxjQUFjOzBCQVMxQixZQUFZLFNBQUMsT0FBTzs7SUFpRHZCLDhCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FoRVksdUJBQXVCOzs7Ozs7SUFFbEMsa0RBQTRDOzs7OztJQUU1QyxtREFBOEM7O0lBRTlDLHdDQUFrRDs7Ozs7SUFFbEQsd0NBQXFCOzs7OztJQUNyQiw2Q0FBOEI7Ozs7O0lBRTlCLDJDQUE2Qzs7Ozs7SUFDN0MsNENBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8vIFRPRE86IGNvbmZpZzogYWN0aXZlQ2xhc3MgLSBDbGFzcyB0byBhcHBseSB0byB0aGUgY2hlY2tlZCBidXR0b25zXG5cbmV4cG9ydCBjb25zdCBDSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCdXR0b25DaGVja2JveERpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlXG59O1xuXG4vKipcbiogQWRkIGNoZWNrYm94IGZ1bmN0aW9uYWxpdHkgdG8gYW55IGVsZW1lbnRcbiovXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1ttZGJDaGVja2JveF0nLCBwcm92aWRlcnM6IFtDSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXX0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgLyoqIFRydXRoeSB2YWx1ZSwgd2lsbCBiZSBzZXQgdG8gbmdNb2RlbCAqL1xuICBASW5wdXQoKSBwdWJsaWMgYnRuQ2hlY2tib3hUcnVlOiBhbnkgPSB0cnVlO1xuICAvKiogRmFsc3kgdmFsdWUsIHdpbGwgYmUgc2V0IHRvIG5nTW9kZWwgKi9cbiAgQElucHV0KCkgcHVibGljIGJ0bkNoZWNrYm94RmFsc2U6IGFueSA9IGZhbHNlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJykgcHVibGljIHN0YXRlID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHZhbHVlOiBhbnk7XG4gIHByb3RlY3RlZCBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCBvbkNoYW5nZTogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwcm90ZWN0ZWQgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbiAgLy8gdmlldyAtPiBtb2RlbFxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRvZ2dsZSghdGhpcy5zdGF0ZSk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiBhbnkge1xuICAgIHRoaXMudG9nZ2xlKHRoaXMudHJ1ZVZhbHVlID09PSB0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgdHJ1ZVZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5idG5DaGVja2JveFRydWUgIT09ICd1bmRlZmluZWQnXG4gICAgPyB0aGlzLmJ0bkNoZWNrYm94VHJ1ZVxuICAgIDogdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgZmFsc2VWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuYnRuQ2hlY2tib3hGYWxzZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHRoaXMuYnRuQ2hlY2tib3hGYWxzZVxuICAgIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0YXRlID8gdGhpcy50cnVlVmFsdWUgOiB0aGlzLmZhbHNlVmFsdWU7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxuICAvLyBtb2RlbCAtPiB2aWV3XG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy50cnVlVmFsdWUgPT09IHZhbHVlO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSA/IHRoaXMudHJ1ZVZhbHVlIDogdGhpcy5mYWxzZVZhbHVlO1xuICB9XG5cbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19