/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective() {
        this.dataSource = [];
        this.sorted = true;
    }
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString().toLowerCase()));
    };
    /**
     * @param {?} headElement
     * @return {?}
     */
    MdbTableSortDirective.prototype.trimWhiteSigns = /**
     * @param {?} headElement
     * @return {?}
     */
    function (headElement) {
        return headElement.replace(/ /g, '');
    };
    /**
     * @param {?} arr
     * @param {?} oldIndex
     * @param {?} newIndex
     * @return {?}
     */
    MdbTableSortDirective.prototype.moveArrayItem = /**
     * @param {?} arr
     * @param {?} oldIndex
     * @param {?} newIndex
     * @return {?}
     */
    function (arr, oldIndex, newIndex) {
        while (oldIndex < 0) {
            oldIndex += arr.length;
        }
        while (newIndex < 0) {
            newIndex += arr.length;
        }
        if (newIndex >= arr.length) {
            /** @type {?} */
            var k = newIndex - arr.length;
            while ((k--) + 1) {
                arr.push(null);
            }
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr;
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
        key = key.split('.');
        this.dataSource.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            /** @type {?} */
            var i = 0;
            while (i < key.length) {
                a = a[key[i]];
                b = b[key[i]];
                i++;
            }
            if (a < b) {
                return _this.sorted ? 1 : -1;
            }
            else if (a > b) {
                return _this.sorted ? -1 : 1;
            }
            else if (a == null || b == null) {
                return 1;
            }
            else {
                return 0;
            }
        }));
        this.sorted = !this.sorted;
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0Q7SUFBQTtRQUt5QixlQUFVLEdBQWUsRUFBRSxDQUFDO1FBSW5ELFdBQU0sR0FBRyxJQUFJLENBQUM7SUFtRGhCLENBQUM7Ozs7SUFsRHdCLHVDQUFPOzs7SUFBOUI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFFRCw4Q0FBYzs7OztJQUFkLFVBQWUsV0FBZ0I7UUFDN0IsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7Ozs7O0lBRU0sNkNBQWE7Ozs7OztJQUFwQixVQUFxQixHQUFRLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQjtRQUMvRCxPQUFPLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDbkIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDeEI7UUFDRCxPQUFPLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDbkIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUM7U0FDeEI7UUFDRCxJQUFJLFFBQVEsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFOztnQkFDdEIsQ0FBQyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUMsTUFBTTtZQUM3QixPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEI7U0FDRjtRQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsR0FBaUI7UUFBNUIsaUJBd0JDO1FBdkJDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTs7Ozs7UUFBQyxVQUFDLENBQU0sRUFBRSxDQUFNOztnQkFDOUIsQ0FBQyxHQUFHLENBQUM7WUFDVCxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFO2dCQUNyQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxFQUFFLENBQUM7YUFDTDtZQUVELElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDVCxPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNoQixPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDNUI7aUJBQ0ksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7aUJBQ0k7Z0JBQ0gsT0FBTyxDQUFDLENBQUM7YUFDVjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OzZCQUdFLEtBQUssU0FBQyxjQUFjO3lCQUVwQixLQUFLOzBCQUdMLFlBQVksU0FBQyxPQUFPOztJQWtEdkIsNEJBQUM7Q0FBQSxBQTVERCxJQTREQztTQXpEWSxxQkFBcUI7OztJQUVoQywyQ0FBbUQ7O0lBRW5ELHVDQUF3Qjs7SUFFeEIsdUNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJUYWJsZVNvcnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJUYWJsZVNvcnREaXJlY3RpdmUge1xuXG4gIEBJbnB1dCgnbWRiVGFibGVTb3J0JykgZGF0YVNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG4gIEBJbnB1dCgpIHNvcnRCeTogc3RyaW5nO1xuXG4gIHNvcnRlZCA9IHRydWU7XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJykgb25jbGljaygpIHtcbiAgICB0aGlzLnNvcnREYXRhQnkodGhpcy50cmltV2hpdGVTaWducyh0aGlzLnNvcnRCeS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpKTtcbiAgfVxuXG4gIHRyaW1XaGl0ZVNpZ25zKGhlYWRFbGVtZW50OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBoZWFkRWxlbWVudC5yZXBsYWNlKC8gL2csICcnKTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlQXJyYXlJdGVtKGFycjogYW55LCBvbGRJbmRleDogbnVtYmVyLCBuZXdJbmRleDogbnVtYmVyKSB7XG4gICAgd2hpbGUgKG9sZEluZGV4IDwgMCkge1xuICAgICAgb2xkSW5kZXggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgd2hpbGUgKG5ld0luZGV4IDwgMCkge1xuICAgICAgbmV3SW5kZXggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKG5ld0luZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgIGxldCBrID0gbmV3SW5kZXggLSBhcnIubGVuZ3RoO1xuICAgICAgd2hpbGUgKChrLS0pICsgMSkge1xuICAgICAgICBhcnIucHVzaChudWxsKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXJyLnNwbGljZShuZXdJbmRleCwgMCwgYXJyLnNwbGljZShvbGRJbmRleCwgMSlbMF0pO1xuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICBzb3J0RGF0YUJ5KGtleTogc3RyaW5nIHwgYW55KSB7XG4gICAga2V5ID0ga2V5LnNwbGl0KCcuJyk7XG5cbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwga2V5Lmxlbmd0aCkge1xuICAgICAgICBhID0gYVtrZXlbaV1dO1xuICAgICAgICBiID0gYltrZXlbaV1dO1xuICAgICAgICBpKys7XG4gICAgICB9XG5cbiAgICAgIGlmIChhIDwgYikge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWQgPyAxIDogLTE7XG4gICAgICB9IGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZCA/IC0xIDogMVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNvcnRlZCA9ICF0aGlzLnNvcnRlZDtcbiAgfVxufVxuIl19