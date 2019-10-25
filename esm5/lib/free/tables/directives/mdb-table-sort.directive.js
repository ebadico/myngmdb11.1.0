/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output, ElementRef, Renderer2, } from '@angular/core';
/** @enum {string} */
var SortDirection = {
    ASC: 'ascending',
    DESC: 'descending',
};
/**
 * @record
 */
export function SortedData() { }
if (false) {
    /** @type {?} */
    SortedData.prototype.data;
    /** @type {?} */
    SortedData.prototype.sortOrder;
    /** @type {?} */
    SortedData.prototype.sortBy;
}
var MdbTableSortDirective = /** @class */ (function () {
    function MdbTableSortDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.sortedInto = true;
        this.dataSource = [];
        this.sortEnd = new EventEmitter();
        this.sorted = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
        this.sortEnd.emit(this.dataSource);
        this.sorted.emit({
            data: this.dataSource,
            sortOrder: this.order,
            sortBy: this.sortBy,
        });
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
            while (k-- + 1) {
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
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', 'ascending');
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
                _this.order = SortDirection.ASC;
                return _this.sortedInto ? 1 : -1;
            }
            else if (a > b) {
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-sort', 'descending');
                _this.renderer.setAttribute(_this.el.nativeElement, 'aria-label', key + ": activate to sort column ascending");
                _this.order = SortDirection.DESC;
                return _this.sortedInto ? -1 : 1;
            }
            else if (a == null || b == null) {
                return 1;
            }
            else {
                return 0;
            }
        }));
        this.sortedInto = !this.sortedInto;
    };
    /**
     * @return {?}
     */
    MdbTableSortDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-label', key + ": activate to sort column descending");
    };
    MdbTableSortDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTableSort]',
                },] }
    ];
    /** @nocollapse */
    MdbTableSortDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    MdbTableSortDirective.propDecorators = {
        dataSource: [{ type: Input, args: ['mdbTableSort',] }],
        sortBy: [{ type: Input }],
        sortEnd: [{ type: Output }],
        sorted: [{ type: Output }],
        onclick: [{ type: HostListener, args: ['click',] }]
    };
    return MdbTableSortDirective;
}());
export { MdbTableSortDirective };
if (false) {
    /** @type {?} */
    MdbTableSortDirective.prototype.sortedInto;
    /** @type {?} */
    MdbTableSortDirective.prototype.order;
    /** @type {?} */
    MdbTableSortDirective.prototype.dataSource;
    /** @type {?} */
    MdbTableSortDirective.prototype.sortBy;
    /** @type {?} */
    MdbTableSortDirective.prototype.sortEnd;
    /** @type {?} */
    MdbTableSortDirective.prototype.sorted;
    /**
     * @type {?}
     * @private
     */
    MdbTableSortDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbTableSortDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDOzs7SUFHckIsS0FBTSxXQUFXO0lBQ2pCLE1BQU8sWUFBWTs7Ozs7QUFHckIsZ0NBSUM7OztJQUhDLDBCQUFZOztJQUNaLCtCQUFrQjs7SUFDbEIsNEJBQWU7O0FBR2pCO0lBWUUsK0JBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVIvRCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBR0ssZUFBVSxHQUFlLEVBQUUsQ0FBQztRQUd6QyxZQUFPLEdBQXdCLElBQUksWUFBWSxFQUFTLENBQUM7UUFDekQsV0FBTSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO0lBQ1YsQ0FBQzs7OztJQUU1Qyx1Q0FBTzs7O0lBQTlCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFN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TCxPQUFPLENBQUMsQ0FBQzthQUNWO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSOztZQUNRLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUN4QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsWUFBWSxFQUNULEdBQUcseUNBQXNDLENBQzdDLENBQUM7SUFDSixDQUFDOztnQkE3RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQWxCQyxVQUFVO2dCQUNWLFNBQVM7Ozs2QkFzQlIsS0FBSyxTQUFDLGNBQWM7eUJBQ3BCLEtBQUs7MEJBRUwsTUFBTTt5QkFDTixNQUFNOzBCQUdOLFlBQVksU0FBQyxPQUFPOztJQWdGdkIsNEJBQUM7Q0FBQSxBQTlGRCxJQThGQztTQTNGWSxxQkFBcUI7OztJQUNoQywyQ0FBa0I7O0lBQ2xCLHNDQUFjOztJQUVkLDJDQUFtRDs7SUFDbkQsdUNBQXdCOztJQUV4Qix3Q0FBbUU7O0lBQ25FLHVDQUE0RTs7Ozs7SUFDaEUsbUNBQXNCOzs7OztJQUFFLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZW51bSBTb3J0RGlyZWN0aW9uIHtcbiAgQVNDID0gJ2FzY2VuZGluZycsXG4gIERFU0MgPSAnZGVzY2VuZGluZycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydGVkRGF0YSB7XG4gIGRhdGE6IGFueVtdO1xuICBzb3J0T3JkZXI6IHN0cmluZztcbiAgc29ydEJ5OiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJUYWJsZVNvcnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVTb3J0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc29ydGVkSW50byA9IHRydWU7XG4gIG9yZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KCdtZGJUYWJsZVNvcnQnKSBkYXRhU291cmNlOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHNvcnRCeTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBzb3J0RW5kOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIHNvcnRlZDogRXZlbnRFbWl0dGVyPFNvcnRlZERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0ZWREYXRhPigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuc29ydERhdGFCeSh0aGlzLnRyaW1XaGl0ZVNpZ25zKHRoaXMuc29ydEJ5LnRvU3RyaW5nKCkpKTtcbiAgICB0aGlzLnNvcnRFbmQuZW1pdCh0aGlzLmRhdGFTb3VyY2UpO1xuICAgIHRoaXMuc29ydGVkLmVtaXQoe1xuICAgICAgZGF0YTogdGhpcy5kYXRhU291cmNlLFxuICAgICAgc29ydE9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgc29ydEJ5OiB0aGlzLnNvcnRCeSxcbiAgICB9KTtcbiAgfVxuXG4gIHRyaW1XaGl0ZVNpZ25zKGhlYWRFbGVtZW50OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBoZWFkRWxlbWVudC5yZXBsYWNlKC8gL2csICcnKTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlQXJyYXlJdGVtKGFycjogYW55LCBvbGRJbmRleDogbnVtYmVyLCBuZXdJbmRleDogbnVtYmVyKSB7XG4gICAgd2hpbGUgKG9sZEluZGV4IDwgMCkge1xuICAgICAgb2xkSW5kZXggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgd2hpbGUgKG5ld0luZGV4IDwgMCkge1xuICAgICAgbmV3SW5kZXggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKG5ld0luZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgIGxldCBrID0gbmV3SW5kZXggLSBhcnIubGVuZ3RoO1xuICAgICAgd2hpbGUgKGstLSArIDEpIHtcbiAgICAgICAgYXJyLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGFyci5zcGxpY2UobmV3SW5kZXgsIDAsIGFyci5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdKTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgc29ydERhdGFCeShrZXk6IHN0cmluZyB8IGFueSkge1xuICAgIGtleSA9IGtleS5zcGxpdCgnLicpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IGtleS5sZW5ndGgpIHtcbiAgICAgICAgYSA9IGFba2V5W2ldXTtcbiAgICAgICAgYiA9IGJba2V5W2ldXTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYXJpYS1zb3J0JywgJ2FzY2VuZGluZycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnLFxuICAgICAgICAgIGAke2tleX06IGFjdGl2YXRlIHRvIHNvcnQgY29sdW1uIGRlc2NlbmRpbmdgXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMub3JkZXIgPSBTb3J0RGlyZWN0aW9uLkFTQztcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRJbnRvID8gMSA6IC0xO1xuICAgICAgfSBlbHNlIGlmIChhID4gYikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLXNvcnQnLCAnZGVzY2VuZGluZycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnLFxuICAgICAgICAgIGAke2tleX06IGFjdGl2YXRlIHRvIHNvcnQgY29sdW1uIGFzY2VuZGluZ2BcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uREVTQztcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRJbnRvID8gLTEgOiAxO1xuICAgICAgfSBlbHNlIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvcnRlZEludG8gPSAhdGhpcy5zb3J0ZWRJbnRvO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy50cmltV2hpdGVTaWducyh0aGlzLnNvcnRCeS50b1N0cmluZygpKS5zcGxpdCgnLicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2FyaWEtbGFiZWwnLFxuICAgICAgYCR7a2V5fTogYWN0aXZhdGUgdG8gc29ydCBjb2x1bW4gZGVzY2VuZGluZ2BcbiAgICApO1xuICB9XG59XG4iXX0=