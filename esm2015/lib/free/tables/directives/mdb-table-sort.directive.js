/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
export class MdbTableSortDirective {
    constructor() {
        this.dataSource = [];
        this.sorted = true;
    }
    /**
     * @return {?}
     */
    onclick() {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString().toLowerCase()));
    }
    /**
     * @param {?} headElement
     * @return {?}
     */
    trimWhiteSigns(headElement) {
        return headElement.replace(/ /g, '');
    }
    /**
     * @param {?} arr
     * @param {?} oldIndex
     * @param {?} newIndex
     * @return {?}
     */
    moveArrayItem(arr, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += arr.length;
        }
        while (newIndex < 0) {
            newIndex += arr.length;
        }
        if (newIndex >= arr.length) {
            /** @type {?} */
            let k = newIndex - arr.length;
            while ((k--) + 1) {
                arr.push(null);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    sortDataBy(key) {
        key = key.split('.');
        this.dataSource.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => {
            /** @type {?} */
            let i = 0;
            while (i < key.length) {
                a = a[key[i]];
                b = b[key[i]];
                i++;
            }
            if (a < b) {
                return this.sorted ? 1 : -1;
            }
            else if (a > b) {
                return this.sorted ? -1 : 1;
            }
            else if (a == null || b == null) {
                return 1;
            }
            else {
                return 0;
            }
        }));
        this.sorted = !this.sorted;
    }
}
MdbTableSortDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTableSort]'
            },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFLN0QsTUFBTSxPQUFPLHFCQUFxQjtJQUhsQztRQUt5QixlQUFVLEdBQWUsRUFBRSxDQUFDO1FBSW5ELFdBQU0sR0FBRyxJQUFJLENBQUM7SUFtRGhCLENBQUM7Ozs7SUFsRHdCLE9BQU87UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQWdCO1FBQzdCLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7OztJQUVNLGFBQWEsQ0FBQyxHQUFRLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQjtRQUMvRCxPQUFPLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDbkIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDeEI7UUFDRCxPQUFPLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDbkIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDeEI7UUFDRCxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFOztnQkFDdEIsQ0FBQyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTTtZQUM3QixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEI7U0FDRjtRQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsR0FBaUI7UUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJOzs7OztRQUFDLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBRSxFQUFFOztnQkFDbEMsQ0FBQyxHQUFHLENBQUM7WUFDVCxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUVELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDNUI7aUJBQ0ksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7aUJBQ0k7Z0JBQ0gsT0FBTyxDQUFDLENBQUM7YUFDVjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7eUJBR0UsS0FBSyxTQUFDLGNBQWM7cUJBRXBCLEtBQUs7c0JBR0wsWUFBWSxTQUFDLE9BQU87Ozs7SUFMckIsMkNBQW1EOztJQUVuRCx1Q0FBd0I7O0lBRXhCLHVDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVGFibGVTb3J0XSdcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVTb3J0RGlyZWN0aXZlIHtcblxuICBASW5wdXQoJ21kYlRhYmxlU29ydCcpIGRhdGFTb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuICBASW5wdXQoKSBzb3J0Qnk6IHN0cmluZztcblxuICBzb3J0ZWQgPSB0cnVlO1xuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgdGhpcy5zb3J0RGF0YUJ5KHRoaXMudHJpbVdoaXRlU2lnbnModGhpcy5zb3J0QnkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSk7XG4gIH1cblxuICB0cmltV2hpdGVTaWducyhoZWFkRWxlbWVudDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm4gaGVhZEVsZW1lbnQucmVwbGFjZSgvIC9nLCAnJyk7XG4gIH1cblxuICBwdWJsaWMgbW92ZUFycmF5SXRlbShhcnI6IGFueSwgb2xkSW5kZXg6IG51bWJlciwgbmV3SW5kZXg6IG51bWJlcikge1xuICAgIHdoaWxlIChvbGRJbmRleCA8IDApIHtcbiAgICAgIG9sZEluZGV4ICs9IGFyci5sZW5ndGg7XG4gICAgfVxuICAgIHdoaWxlIChuZXdJbmRleCA8IDApIHtcbiAgICAgIG5ld0luZGV4ICs9IGFyci5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChuZXdJbmRleCA+PSBhcnIubGVuZ3RoKSB7XG4gICAgICBsZXQgayA9IG5ld0luZGV4IC0gYXJyLmxlbmd0aDtcbiAgICAgIHdoaWxlICgoay0tKSArIDEpIHtcbiAgICAgICAgYXJyLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGFyci5zcGxpY2UobmV3SW5kZXgsIDAsIGFyci5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdKTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgc29ydERhdGFCeShrZXk6IHN0cmluZyB8IGFueSkge1xuICAgIGtleSA9IGtleS5zcGxpdCgnLicpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IGtleS5sZW5ndGgpIHtcbiAgICAgICAgYSA9IGFba2V5W2ldXTtcbiAgICAgICAgYiA9IGJba2V5W2ldXTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydGVkID8gMSA6IC0xO1xuICAgICAgfSBlbHNlIGlmIChhID4gYikge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWQgPyAtMSA6IDFcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zb3J0ZWQgPSAhdGhpcy5zb3J0ZWQ7XG4gIH1cbn1cbiJdfQ==