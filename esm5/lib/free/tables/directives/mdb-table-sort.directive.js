/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective() {
        // tslint:disable-next-line:no-input-rename
        this.dataSource = [];
        this.sorted = false;
    }
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this.sortDataBy(this.sortBy.toString().toLowerCase());
    };
    /**
     * @param {?} key
     * @return {?}
     */
    MdbTableSortDirective.prototype.sortDataBy = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        this.dataSource.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            if (a[key] < b[key]) {
                return _this.sorted ? 1 : -1;
            }
            if (a[key] > b[key]) {
                return _this.sorted ? -1 : 1;
            }
            return 0;
        }));
        this.sorted = !this.sorted;
    };
    MdbTableSortDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableSort]'
                },] }
    ];
    /** @nocollapse */
    MdbTableSortDirective.ctorParameters = function () { return []; };
    MdbTableSortDirective.propDecorators = {
        dataSource: [{ type: Input, args: ['mdbTableSort',] }],
        sortBy: [{ type: Input }],
        onclick: [{ type: HostListener, args: ['click',] }]
    };
    return MdbTableSortDirective;
}());
export { MdbTableSortDirective };
if (false) {
    /** @type {?} */
    MdbTableSortDirective.prototype.dataSource;
    /** @type {?} */
    MdbTableSortDirective.prototype.sortBy;
    /** @type {?} */
    MdbTableSortDirective.prototype.sorted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0Q7SUFlRTs7UUFUdUIsZUFBVSxHQUFlLEVBQUUsQ0FBQztRQUluRCxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBS0MsQ0FBQzs7OztJQUhNLHVDQUFPOzs7SUFBOUI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUdELDBDQUFVOzs7O0lBQVYsVUFBVyxHQUFpQjtRQUE1QixpQkFhQztRQVhDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTs7Ozs7UUFBQyxVQUFDLENBQU0sRUFBRSxDQUFNO1lBQ2xDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQixPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7Z0JBOUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7Ozs7NkJBSUUsS0FBSyxTQUFDLGNBQWM7eUJBRXBCLEtBQUs7MEJBSUwsWUFBWSxTQUFDLE9BQU87O0lBbUJ2Qiw0QkFBQztDQUFBLEFBL0JELElBK0JDO1NBNUJZLHFCQUFxQjs7O0lBR2hDLDJDQUFtRDs7SUFFbkQsdUNBQXdCOztJQUV4Qix1Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVGFibGVTb3J0XSdcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVTb3J0RGlyZWN0aXZlIHtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbWRiVGFibGVTb3J0JykgZGF0YVNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG4gIEBJbnB1dCgpIHNvcnRCeTogc3RyaW5nO1xuXG4gIHNvcnRlZCA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLnNvcnREYXRhQnkodGhpcy5zb3J0QnkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNvcnREYXRhQnkoa2V5OiBzdHJpbmcgfCBhbnkpOiB2b2lkIHtcblxuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgaWYgKGFba2V5XSA8IGJba2V5XSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWQgPyAxIDogLTE7XG4gICAgICB9XG4gICAgICBpZiAoYVtrZXldID4gYltrZXldKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZCA/IC0xIDogMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb3J0ZWQgPSAhdGhpcy5zb3J0ZWQ7XG4gIH1cbn1cbiJdfQ==