/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return MaterialChipsComponent; }),
    multi: true
};
var MaterialChipsComponent = /** @class */ (function () {
    function MaterialChipsComponent() {
        this.placeholder = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange = new EventEmitter();
        this.labelsChange = new EventEmitter();
        this.onTouchedCallback = this.noop;
        this.onChangeCallback = this.noop;
        this.onTouchedCallback = this.onTouchedCallback === undefined ? this.noop : this.onTouchedCallback;
        this.onChangeCallback = this.onChangeCallback === undefined ? this.noop : this.onChangeCallback;
    }
    Object.defineProperty(MaterialChipsComponent.prototype, "tagsfocused", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isTagsFocused;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    MaterialChipsComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onChangeCallback = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaterialChipsComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouchedCallback = fn; };
    /**
     * @param {?} value
     * @return {?}
     */
    MaterialChipsComponent.prototype.removeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var index = this.values.indexOf(value, 0);
        if (index !== undefined) {
            this.values.splice(index, 1);
            this.labelsChange.emit(this.values);
        }
    };
    /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    MaterialChipsComponent.prototype.addValue = /**
     * @param {?} value
     * @param {?} event
     * @return {?}
     */
    function (value, event) {
        event.preventDefault();
        if (!value || value.trim() === '') {
            return;
        }
        this.values.push(value);
        this.labelsChange.emit(this.values);
        this.labelToAdd = '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaterialChipsComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value !== this.values) {
            this.values = value;
        }
    };
    /**
     * @return {?}
     */
    MaterialChipsComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        this.focused = 'md-focused';
        this.isTagsFocused = true;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    /**
     * @return {?}
     */
    MaterialChipsComponent.prototype.focusOutFunction = /**
     * @return {?}
     */
    function () {
        this.focused = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    MaterialChipsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-material-chips',
                    template: "<div *ngIf=\"values && values.length\" class=\"md-chip-list\"  [ngClass]=\"focused\">\n  <span *ngFor=\"let value of values\" class=\"md-chip\" selected >         \n    {{value}} <i class=\"close fas fa-times\" aria-hidden=\"true\" (click)=\"removeValue(value)\" ></i>\n  </span>\n\n  <span>\n    <input  [(ngModel)]=\"labelToAdd\" \n            (keyup.enter)=\"addValue(box.value, $event)\"\n            (focus)=\"onFocus()\" \n            (focusout)=\"focusOutFunction()\"  \n            #box />\n  </span>\n</div>\n<div *ngIf=\"!values || !values.length\">\n  <input class=\"md-chips-input\" placeholder=\"{{ placeholder }}\" #tbox \n    (keyup.enter)=\"addValue(tbox.value, $event)\"/>\n</div>\n",
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    MaterialChipsComponent.ctorParameters = function () { return []; };
    MaterialChipsComponent.propDecorators = {
        placeholder: [{ type: Input, args: ['placeholder',] }],
        tagsfocusedChange: [{ type: Output }],
        labelsChange: [{ type: Output }],
        tagsfocused: [{ type: Input }]
    };
    return MaterialChipsComponent;
}());
export { MaterialChipsComponent };
if (false) {
    /** @type {?} */
    MaterialChipsComponent.prototype.placeholder;
    /** @type {?} */
    MaterialChipsComponent.prototype.addAreaDisplayed;
    /** @type {?} */
    MaterialChipsComponent.prototype.isTagsFocused;
    /** @type {?} */
    MaterialChipsComponent.prototype.values;
    /** @type {?} */
    MaterialChipsComponent.prototype.labelToAdd;
    /** @type {?} */
    MaterialChipsComponent.prototype.focused;
    /** @type {?} */
    MaterialChipsComponent.prototype.selected;
    /** @type {?} */
    MaterialChipsComponent.prototype.noop;
    /** @type {?} */
    MaterialChipsComponent.prototype.tagsfocusedChange;
    /** @type {?} */
    MaterialChipsComponent.prototype.labelsChange;
    /**
     * @type {?}
     * @private
     */
    MaterialChipsComponent.prototype.onTouchedCallback;
    /**
     * @type {?}
     * @private
     */
    MaterialChipsComponent.prototype.onChangeCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby90YWdzL2NoaXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR25ELE1BQU0sS0FBTyxtQ0FBbUMsR0FBUTtJQUN0RCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixDQUFDO0lBQ3JELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFFRDtJQThCRTtRQXRCNkIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFHOUMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFPWixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLGlCQUFZLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFPdEUsc0JBQWlCLEdBQWUsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMxQyxxQkFBZ0IsR0FBcUIsSUFBSSxDQUFDLElBQUksQ0FBQztRQUlyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ25HLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDbEcsQ0FBQztJQVpELHNCQUNJLCtDQUFXOzs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7O0lBSUQsaURBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU8sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFDekQsa0RBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU8sSUFBSSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFNM0QsNENBQVc7Ozs7SUFBWCxVQUFZLEtBQWE7O1lBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQseUNBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsS0FBVTtRQUNoQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELDJDQUFVOzs7O0lBQVYsVUFBVyxLQUFlO1FBQ3hCLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztJQUNELGlEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBbEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qix1c0JBQW1DO29CQUNuQyxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztpQkFDakQ7Ozs7OzhCQUlFLEtBQUssU0FBQyxhQUFhO29DQVVuQixNQUFNOytCQUNOLE1BQU07OEJBRU4sS0FBSzs7SUE4Q1IsNkJBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQTdEWSxzQkFBc0I7OztJQUVqQyw2Q0FBOEM7O0lBRTlDLGtEQUEwQjs7SUFDMUIsK0NBQXNCOztJQUN0Qix3Q0FBaUI7O0lBQ2pCLDRDQUFtQjs7SUFDbkIseUNBQWdCOztJQUNoQiwwQ0FBaUI7O0lBQ2pCLHNDQUFVOztJQUVWLG1EQUFpRDs7SUFDakQsOENBQThFOzs7OztJQU85RSxtREFBa0Q7Ozs7O0lBQ2xELGtEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1hdGVyaWFsQ2hpcHNDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLW1hdGVyaWFsLWNoaXBzJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcblxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQ2hpcHNDb21wb25lbnQge1xuXG4gIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwdWJsaWMgcGxhY2Vob2xkZXIgPSAnJztcblxuICBhZGRBcmVhRGlzcGxheWVkOiBib29sZWFuO1xuICBpc1RhZ3NGb2N1c2VkID0gZmFsc2U7XG4gIHZhbHVlczogc3RyaW5nW107XG4gIGxhYmVsVG9BZGQ6IHN0cmluZztcbiAgZm9jdXNlZDogc3RyaW5nO1xuICBzZWxlY3RlZDogc3RyaW5nO1xuICBub29wOiBhbnk7XG5cbiAgQE91dHB1dCgpIHRhZ3Nmb2N1c2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbGFiZWxzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcblxuICBASW5wdXQoKVxuICBnZXQgdGFnc2ZvY3VzZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNUYWdzRm9jdXNlZDtcbiAgfVxuXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSB0aGlzLm5vb3A7XG4gIHByaXZhdGUgb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IHRoaXMubm9vcDtcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7IHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IGZuOyB9XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHsgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuOyB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPSB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID09PSB1bmRlZmluZWQgPyB0aGlzLm5vb3AgOiB0aGlzLm9uVG91Y2hlZENhbGxiYWNrO1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IHRoaXMub25DaGFuZ2VDYWxsYmFjayA9PT0gdW5kZWZpbmVkID8gdGhpcy5ub29wIDogdGhpcy5vbkNoYW5nZUNhbGxiYWNrO1xuICB9XG5cbiAgcmVtb3ZlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy52YWx1ZXMuaW5kZXhPZih2YWx1ZSwgMCk7XG4gICAgaWYgKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLmxhYmVsc0NoYW5nZS5lbWl0KHRoaXMudmFsdWVzKTtcbiAgICB9XG4gIH1cblxuICBhZGRWYWx1ZSh2YWx1ZTogc3RyaW5nLCBldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKSA9PT0gJycpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy52YWx1ZXMucHVzaCh2YWx1ZSk7XG4gICAgdGhpcy5sYWJlbHNDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlcyk7XG4gICAgdGhpcy5sYWJlbFRvQWRkID0gJyc7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZXMpIHtcbiAgICAgIHRoaXMudmFsdWVzID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSAnbWQtZm9jdXNlZCc7XG4gICAgdGhpcy5pc1RhZ3NGb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLnRhZ3Nmb2N1c2VkQ2hhbmdlLmVtaXQodGhpcy5pc1RhZ3NGb2N1c2VkKTtcbiAgfVxuICBmb2N1c091dEZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9ICcnO1xuICAgIHRoaXMuaXNUYWdzRm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMudGFnc2ZvY3VzZWRDaGFuZ2UuZW1pdCh0aGlzLmlzVGFnc0ZvY3VzZWQpO1xuICB9XG59XG4iXX0=