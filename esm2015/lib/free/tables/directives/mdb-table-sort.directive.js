/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
export class MdbTableSortDirective {
    constructor() {
        // tslint:disable-next-line:no-input-rename
        this.dataSource = [];
        this.sorted = false;
    }
    /**
     * @return {?}
     */
    onclick() {
        this.sortDataBy(this.sortBy.toString().toLowerCase());
    }
    /**
     * @param {?} key
     * @return {?}
     */
    sortDataBy(key) {
        this.dataSource.sort((a, b) => {
            if (a[key] < b[key]) {
                return this.sorted ? 1 : -1;
            }
            if (a[key] > b[key]) {
                return this.sorted ? -1 : 1;
            }
            return 0;
        });
        this.sorted = !this.sorted;
    }
}
MdbTableSortDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTableSort]'
            },] }
];
/** @nocollapse */
MdbTableSortDirective.ctorParameters = () => [];
MdbTableSortDirective.propDecorators = {
    dataSource: [{ type: Input, args: ['mdbTableSort',] }],
    sortBy: [{ type: Input }],
    onclick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    MdbTableSortDirective.prototype.dataSource;
    /** @type {?} */
    MdbTableSortDirective.prototype.sortBy;
    /** @type {?} */
    MdbTableSortDirective.prototype.sorted;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLL0QsTUFBTSxPQUFPLHFCQUFxQjtJQVloQzs7UUFUdUIsZUFBVSxHQUFlLEVBQUUsQ0FBQztRQUluRCxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBS0MsQ0FBQzs7OztJQUhNLE9BQU87UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFHRCxVQUFVLENBQUMsR0FBaUI7UUFFMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QjtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOzs7WUE5QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7O3lCQUlFLEtBQUssU0FBQyxjQUFjO3FCQUVwQixLQUFLO3NCQUlMLFlBQVksU0FBQyxPQUFPOzs7O0lBTnJCLDJDQUFtRDs7SUFFbkQsdUNBQXdCOztJQUV4Qix1Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVGFibGVTb3J0XSdcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVTb3J0RGlyZWN0aXZlIHtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW5wdXQtcmVuYW1lXG4gIEBJbnB1dCgnbWRiVGFibGVTb3J0JykgZGF0YVNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG4gIEBJbnB1dCgpIHNvcnRCeTogc3RyaW5nO1xuXG4gIHNvcnRlZCA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLnNvcnREYXRhQnkodGhpcy5zb3J0QnkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHNvcnREYXRhQnkoa2V5OiBzdHJpbmcgfCBhbnkpOiB2b2lkIHtcblxuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgaWYgKGFba2V5XSA8IGJba2V5XSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWQgPyAxIDogLTE7XG4gICAgICB9XG4gICAgICBpZiAoYVtrZXldID4gYltrZXldKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZCA/IC0xIDogMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zb3J0ZWQgPSAhdGhpcy5zb3J0ZWQ7XG4gIH1cbn1cbiJdfQ==