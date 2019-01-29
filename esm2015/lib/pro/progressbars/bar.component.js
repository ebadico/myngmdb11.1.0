/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Host, Input } from '@angular/core';
import { ProgressDirective } from './progress.directive';
// todo: number pipe
// todo: use query from progress?
export class BarComponent {
    /**
     * @param {?} progress
     */
    constructor(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    /**
     * current value of progress bar
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (!v && v !== 0) {
            return;
        }
        this._value = v;
        this.recalculatePercentage();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.progress.addBar(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.progress.removeBar(this);
    }
    /**
     * @return {?}
     */
    recalculatePercentage() {
        this.percent = +(100 * this.value / this.progress.max).toFixed(2);
        /** @type {?} */
        const totalPercentage = this.progress.bars.reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    }
}
BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-bar',
                template: "<div class=\"progress-bar\"\nstyle=\"min-width: 0;\"\nrole=\"progressbar\"\n[ngClass]=\"type && 'progress-bar-' + type\"\n[ngStyle]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\"\naria-valuemin=\"0\"\n[attr.aria-valuenow]=\"value\"\n[attr.aria-valuetext]=\"percent.toFixed(0) + '%'\"\n[attr.aria-valuemax]=\"max\">\n  <ng-content></ng-content>\n</div>\n"
            }] }
];
/** @nocollapse */
BarComponent.ctorParameters = () => [
    { type: ProgressDirective, decorators: [{ type: Host }] }
];
BarComponent.propDecorators = {
    type: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    BarComponent.prototype.max;
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @type {?}
     */
    BarComponent.prototype.type;
    /** @type {?} */
    BarComponent.prototype.percent;
    /** @type {?} */
    BarComponent.prototype.transition;
    /** @type {?} */
    BarComponent.prototype.progress;
    /**
     * @type {?}
     * @protected
     */
    BarComponent.prototype._value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vcHJvZ3Jlc3NiYXJzL2Jhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQVF6RCxNQUFNLE9BQU8sWUFBWTs7OztJQXlCdkIsWUFBMkIsUUFBMkI7UUFOL0MsWUFBTyxHQUFHLENBQUMsQ0FBQztRQU9qQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDOzs7OztJQXJCRCxJQUNXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxJQUFXLEtBQUssQ0FBQyxDQUFTO1FBQ3hCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFZTSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVNLHFCQUFxQjtRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FFNUQsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQWEsRUFBRSxHQUFpQjtZQUN4RixPQUFPLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQy9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFTCxJQUFJLGVBQWUsR0FBRyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sSUFBSSxlQUFlLEdBQUcsR0FBRyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIseVlBQW1DO2FBQ3BDOzs7O1lBUFEsaUJBQWlCLHVCQWlDSixJQUFJOzs7bUJBckJ2QixLQUFLO29CQUVMLEtBQUs7Ozs7SUFMTiwyQkFBbUI7Ozs7O0lBR25CLDRCQUE2Qjs7SUFlN0IsK0JBQW1COztJQUNuQixrQ0FBMEI7O0lBQzFCLGdDQUFtQzs7Ozs7SUFFbkMsOEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHJvZ3Jlc3NEaXJlY3RpdmUgfSBmcm9tICcuL3Byb2dyZXNzLmRpcmVjdGl2ZSc7XG5cbi8vIHRvZG86IG51bWJlciBwaXBlXG4vLyB0b2RvOiB1c2UgcXVlcnkgZnJvbSBwcm9ncmVzcz9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYmFyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHB1YmxpYyBtYXg6IG51bWJlcjtcblxuICAvKiogcHJvdmlkZSBvbmUgb2YgdGhlIGZvdXIgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAgKi9cbiAgQElucHV0KCkgcHVibGljIHR5cGU6IHN0cmluZztcbiAgLyoqIGN1cnJlbnQgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHZhbHVlKHY6IG51bWJlcikge1xuICAgIGlmICghdiAmJiB2ICE9PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgIHRoaXMucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XG4gIH1cblxuICBwdWJsaWMgcGVyY2VudCA9IDA7XG4gIHB1YmxpYyB0cmFuc2l0aW9uOiBzdHJpbmc7XG4gIHB1YmxpYyBwcm9ncmVzczogUHJvZ3Jlc3NEaXJlY3RpdmU7XG5cbiAgcHJvdGVjdGVkIF92YWx1ZTogbnVtYmVyO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihASG9zdCgpIHByb2dyZXNzOiBQcm9ncmVzc0RpcmVjdGl2ZSkge1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2dyZXNzLmFkZEJhcih0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2dyZXNzLnJlbW92ZUJhcih0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyByZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5wZXJjZW50ID0gKygxMDAgKiB0aGlzLnZhbHVlIC8gdGhpcy5wcm9ncmVzcy5tYXgpLnRvRml4ZWQoMik7XG5cbiAgICBjb25zdCB0b3RhbFBlcmNlbnRhZ2UgPSB0aGlzLnByb2dyZXNzLmJhcnMucmVkdWNlKGZ1bmN0aW9uICh0b3RhbDogbnVtYmVyLCBiYXI6IEJhckNvbXBvbmVudCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0b3RhbCArIGJhci5wZXJjZW50O1xuICAgIH0sIDApO1xuXG4gICAgaWYgKHRvdGFsUGVyY2VudGFnZSA+IDEwMCkge1xuICAgICAgICB0aGlzLnBlcmNlbnQgLT0gdG90YWxQZXJjZW50YWdlIC0gMTAwO1xuICAgIH1cbiAgfVxufVxuIl19