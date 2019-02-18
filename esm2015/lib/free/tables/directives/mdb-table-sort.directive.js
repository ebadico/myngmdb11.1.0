/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.dataSource.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            if (a[key] < b[key]) {
                return this.sorted ? 1 : -1;
            }
            if (a[key] > b[key]) {
                return this.sorted ? -1 : 1;
            }
            return 0;
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLL0QsTUFBTSxPQUFPLHFCQUFxQjtJQVloQzs7UUFUdUIsZUFBVSxHQUFlLEVBQUUsQ0FBQztRQUluRCxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBS0MsQ0FBQzs7OztJQUhNLE9BQU87UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFHRCxVQUFVLENBQUMsR0FBaUI7UUFFMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7OztRQUFDLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7O1lBOUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7Ozt5QkFJRSxLQUFLLFNBQUMsY0FBYztxQkFFcEIsS0FBSztzQkFJTCxZQUFZLFNBQUMsT0FBTzs7OztJQU5yQiwyQ0FBbUQ7O0lBRW5ELHVDQUF3Qjs7SUFFeEIsdUNBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlRhYmxlU29ydF0nXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlU29ydERpcmVjdGl2ZSB7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ21kYlRhYmxlU29ydCcpIGRhdGFTb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuICBASW5wdXQoKSBzb3J0Qnk6IHN0cmluZztcblxuICBzb3J0ZWQgPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgdGhpcy5zb3J0RGF0YUJ5KHRoaXMuc29ydEJ5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBzb3J0RGF0YUJ5KGtleTogc3RyaW5nIHwgYW55KTogdm9pZCB7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIGlmIChhW2tleV0gPCBiW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydGVkID8gMSA6IC0xO1xuICAgICAgfVxuICAgICAgaWYgKGFba2V5XSA+IGJba2V5XSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWQgPyAtMSA6IDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIHRoaXMuc29ydGVkID0gIXRoaXMuc29ydGVkO1xuICB9XG59XG4iXX0=