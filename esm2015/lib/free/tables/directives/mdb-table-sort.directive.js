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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFLN0QsTUFBTSxPQUFPLHFCQUFxQjtJQVloQztRQVZ1QixlQUFVLEdBQWUsRUFBRSxDQUFDO1FBSW5ELFdBQU0sR0FBRyxJQUFJLENBQUM7SUFNRSxDQUFDOzs7O0lBSk0sT0FBTztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFJRCxjQUFjLENBQUMsV0FBZ0I7UUFDN0IsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxHQUFpQjtRQUMxQixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7O1FBQUMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLEVBQUU7O2dCQUNsQyxDQUFDLEdBQUcsQ0FBQztZQUNULE9BQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxDQUFDLEVBQUUsQ0FBQzthQUNMO1lBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QjtpQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUM1QjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsQ0FBQzthQUNWO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7O3lCQUdFLEtBQUssU0FBQyxjQUFjO3FCQUVwQixLQUFLO3NCQUlMLFlBQVksU0FBQyxPQUFPOzs7O0lBTnJCLDJDQUFtRDs7SUFFbkQsdUNBQXdCOztJQUV4Qix1Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlRhYmxlU29ydF0nXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlU29ydERpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCdtZGJUYWJsZVNvcnQnKSBkYXRhU291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cbiAgQElucHV0KCkgc29ydEJ5OiBzdHJpbmc7XG5cbiAgc29ydGVkID0gdHJ1ZTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgdGhpcy5zb3J0RGF0YUJ5KHRoaXMudHJpbVdoaXRlU2lnbnModGhpcy5zb3J0QnkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHRyaW1XaGl0ZVNpZ25zKGhlYWRFbGVtZW50OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBoZWFkRWxlbWVudC5yZXBsYWNlKC8gL2csICcnKTtcbiAgfVxuXG4gIHNvcnREYXRhQnkoa2V5OiBzdHJpbmcgfCBhbnkpIHtcbiAgICBrZXkgPSBrZXkuc3BsaXQoJy4nKTtcblxuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgbGV0IGkgPSAwO1xuICAgICAgd2hpbGUgKCBpIDwga2V5Lmxlbmd0aCkge1xuICAgICAgICBhID0gYVtrZXlbaV1dO1xuICAgICAgICBiID0gYltrZXlbaV1dO1xuICAgICAgICBpKys7XG4gICAgICB9XG5cbiAgICAgIGlmIChhIDwgYikge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWQgPyAxIDogLTE7XG4gICAgICB9IGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZCA/IC0xIDogMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zb3J0ZWQgPSAhdGhpcy5zb3J0ZWQ7XG4gIH1cbn1cbiJdfQ==