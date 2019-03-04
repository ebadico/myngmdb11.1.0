/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFN0Q7SUFlRTtRQVZ1QixlQUFVLEdBQWUsRUFBRSxDQUFDO1FBSW5ELFdBQU0sR0FBRyxLQUFLLENBQUM7SUFPZixDQUFDOzs7O0lBTHNCLHVDQUFPOzs7SUFBOUI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Ozs7SUFLRCw4Q0FBYzs7OztJQUFkLFVBQWUsV0FBZ0I7UUFDN0IsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7OztJQUVELDBDQUFVOzs7O0lBQVYsVUFBVyxHQUFpQjtRQUE1QixpQkFhQztRQVhDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTs7Ozs7UUFBQyxVQUFDLENBQU0sRUFBRSxDQUFNO1lBQ2xDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkIsT0FBTyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQixPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0I7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7Ozs7NkJBR0UsS0FBSyxTQUFDLGNBQWM7eUJBRXBCLEtBQUs7MEJBSUwsWUFBWSxTQUFDLE9BQU87O0lBeUJ2Qiw0QkFBQztDQUFBLEFBcENELElBb0NDO1NBakNZLHFCQUFxQjs7O0lBRWhDLDJDQUFtRDs7SUFFbkQsdUNBQXdCOztJQUV4Qix1Q0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlRhYmxlU29ydF0nXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRhYmxlU29ydERpcmVjdGl2ZSB7XG5cbiAgQElucHV0KCdtZGJUYWJsZVNvcnQnKSBkYXRhU291cmNlOiBBcnJheTxhbnk+ID0gW107XG5cbiAgQElucHV0KCkgc29ydEJ5OiBzdHJpbmc7XG5cbiAgc29ydGVkID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuc29ydERhdGFCeSh0aGlzLnRyaW1XaGl0ZVNpZ25zKHRoaXMuc29ydEJ5LnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICB0cmltV2hpdGVTaWducyhoZWFkRWxlbWVudDogYW55KSB7XG4gICAgcmV0dXJuIGhlYWRFbGVtZW50LnJlcGxhY2UoLyAvZywgJycpO1xuICB9XG5cbiAgc29ydERhdGFCeShrZXk6IHN0cmluZyB8IGFueSk6IHZvaWQge1xuXG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBpZiAoYVtrZXldIDwgYltrZXldKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvcnRlZCA/IDEgOiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChhW2tleV0gPiBiW2tleV0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydGVkID8gLTEgOiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvcnRlZCA9ICF0aGlzLnNvcnRlZDtcbiAgfVxufVxuIl19