/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Input, Output, ElementRef, Renderer2, } from '@angular/core';
/** @enum {string} */
const SortDirection = {
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
export class MdbTableSortDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
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
    onclick() {
        this.sortDataBy(this.trimWhiteSigns(this.sortBy.toString()));
        this.sortEnd.emit(this.dataSource);
        this.sorted.emit({
            data: this.dataSource,
            sortOrder: this.order,
            sortBy: this.sortBy,
        });
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
            while (k-- + 1) {
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
                this.renderer.setAttribute(this.el.nativeElement, 'aria-sort', 'ascending');
                this.renderer.setAttribute(this.el.nativeElement, 'aria-label', `${key}: activate to sort column descending`);
                this.order = SortDirection.ASC;
                return this.sortedInto ? 1 : -1;
            }
            else if (a > b) {
                this.renderer.setAttribute(this.el.nativeElement, 'aria-sort', 'descending');
                this.renderer.setAttribute(this.el.nativeElement, 'aria-label', `${key}: activate to sort column ascending`);
                this.order = SortDirection.DESC;
                return this.sortedInto ? -1 : 1;
            }
            else if (a == null || b == null) {
                return 1;
            }
            else {
                return 0;
            }
        }));
        this.sortedInto = !this.sortedInto;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const key = this.trimWhiteSigns(this.sortBy.toString()).split('.');
        this.renderer.setAttribute(this.el.nativeElement, 'aria-label', `${key}: activate to sort column descending`);
    }
}
MdbTableSortDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTableSort]',
            },] }
];
/** @nocollapse */
MdbTableSortDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbTableSortDirective.propDecorators = {
    dataSource: [{ type: Input, args: ['mdbTableSort',] }],
    sortBy: [{ type: Input }],
    sortEnd: [{ type: Output }],
    sorted: [{ type: Output }],
    onclick: [{ type: HostListener, args: ['click',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDOzs7SUFHckIsS0FBTSxXQUFXO0lBQ2pCLE1BQU8sWUFBWTs7Ozs7QUFHckIsZ0NBSUM7OztJQUhDLDBCQUFZOztJQUNaLCtCQUFrQjs7SUFDbEIsNEJBQWU7O0FBTWpCLE1BQU0sT0FBTyxxQkFBcUI7Ozs7O0lBU2hDLFlBQW9CLEVBQWMsRUFBVSxRQUFtQjtRQUEzQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVIvRCxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBR0ssZUFBVSxHQUFlLEVBQUUsQ0FBQztRQUd6QyxZQUFPLEdBQXdCLElBQUksWUFBWSxFQUFTLENBQUM7UUFDekQsV0FBTSxHQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO0lBQ1YsQ0FBQzs7OztJQUU1QyxPQUFPO1FBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3JCLE1BQU0sRUFBRSxJ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LENBQUM7YUFDVjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0EsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUNyQixZQUFZLEVBQ1osR0FBRyxHQUFHLHNDQUFzQyxDQUM3QyxDQUFDO0lBQ0osQ0FBQzs7O1lBN0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBbEJDLFVBQVU7WUFDVixTQUFTOzs7eUJBc0JSLEtBQUssU0FBQyxjQUFjO3FCQUNwQixLQUFLO3NCQUVMLE1BQU07cUJBQ04sTUFBTTtzQkFHTixZQUFZLFNBQUMsT0FBTzs7OztJQVZyQiwyQ0FBa0I7O0lBQ2xCLHNDQUFjOztJQUVkLDJDQUFtRDs7SUFDbkQsdUNBQXdCOztJQUV4Qix3Q0FBbUU7O0lBQ25FLHVDQUE0RTs7Ozs7SUFDaEUsbUNBQXNCOzs7OztJQUFFLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZW51bSBTb3J0RGlyZWN0aW9uIHtcbiAgQVNDID0gJ2FzY2VuZGluZycsXG4gIERFU0MgPSAnZGVzY2VuZGluZycsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydGVkRGF0YSB7XG4gIGRhdGE6IGFueVtdO1xuICBzb3J0T3JkZXI6IHN0cmluZztcbiAgc29ydEJ5OiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJUYWJsZVNvcnRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGFibGVTb3J0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgc29ydGVkSW50byA9IHRydWU7XG4gIG9yZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KCdtZGJUYWJsZVNvcnQnKSBkYXRhU291cmNlOiBBcnJheTxhbnk+ID0gW107XG4gIEBJbnB1dCgpIHNvcnRCeTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBzb3J0RW5kOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIHNvcnRlZDogRXZlbnRFbWl0dGVyPFNvcnRlZERhdGE+ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0ZWREYXRhPigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuc29ydERhdGFCeSh0aGlzLnRyaW1XaGl0ZVNpZ25zKHRoaXMuc29ydEJ5LnRvU3RyaW5nKCkpKTtcbiAgICB0aGlzLnNvcnRFbmQuZW1pdCh0aGlzLmRhdGFTb3VyY2UpO1xuICAgIHRoaXMuc29ydGVkLmVtaXQoe1xuICAgICAgZGF0YTogdGhpcy5kYXRhU291cmNlLFxuICAgICAgc29ydE9yZGVyOiB0aGlzLm9yZGVyLFxuICAgICAgc29ydEJ5OiB0aGlzLnNvcnRCeSxcbiAgICB9KTtcbiAgfVxuXG4gIHRyaW1XaGl0ZVNpZ25zKGhlYWRFbGVtZW50OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybiBoZWFkRWxlbWVudC5yZXBsYWNlKC8gL2csICcnKTtcbiAgfVxuXG4gIHB1YmxpYyBtb3ZlQXJyYXlJdGVtKGFycjogYW55LCBvbGRJbmRleDogbnVtYmVyLCBuZXdJbmRleDogbnVtYmVyKSB7XG4gICAgd2hpbGUgKG9sZEluZGV4IDwgMCkge1xuICAgICAgb2xkSW5kZXggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgd2hpbGUgKG5ld0luZGV4IDwgMCkge1xuICAgICAgbmV3SW5kZXggKz0gYXJyLmxlbmd0aDtcbiAgICB9XG4gICAgaWYgKG5ld0luZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgIGxldCBrID0gbmV3SW5kZXggLSBhcnIubGVuZ3RoO1xuICAgICAgd2hpbGUgKGstLSArIDEpIHtcbiAgICAgICAgYXJyLnB1c2gobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIGFyci5zcGxpY2UobmV3SW5kZXgsIDAsIGFyci5zcGxpY2Uob2xkSW5kZXgsIDEpWzBdKTtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgc29ydERhdGFCeShrZXk6IHN0cmluZyB8IGFueSkge1xuICAgIGtleSA9IGtleS5zcGxpdCgnLicpO1xuXG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICBsZXQgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IGtleS5sZW5ndGgpIHtcbiAgICAgICAgYSA9IGFba2V5W2ldXTtcbiAgICAgICAgYiA9IGJba2V5W2ldXTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYXJpYS1zb3J0JywgJ2FzY2VuZGluZycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnLFxuICAgICAgICAgIGAke2tleX06IGFjdGl2YXRlIHRvIHNvcnQgY29sdW1uIGRlc2NlbmRpbmdgXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMub3JkZXIgPSBTb3J0RGlyZWN0aW9uLkFTQztcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRJbnRvID8gMSA6IC0xO1xuICAgICAgfSBlbHNlIGlmIChhID4gYikge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhcmlhLXNvcnQnLCAnZGVzY2VuZGluZycpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnLFxuICAgICAgICAgIGAke2tleX06IGFjdGl2YXRlIHRvIHNvcnQgY29sdW1uIGFzY2VuZGluZ2BcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5vcmRlciA9IFNvcnREaXJlY3Rpb24uREVTQztcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3J0ZWRJbnRvID8gLTEgOiAxO1xuICAgICAgfSBlbHNlIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNvcnRlZEludG8gPSAhdGhpcy5zb3J0ZWRJbnRvO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy50cmltV2hpdGVTaWducyh0aGlzLnNvcnRCeS50b1N0cmluZygpKS5zcGxpdCgnLicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ2FyaWEtbGFiZWwnLFxuICAgICAgYCR7a2V5fTogYWN0aXZhdGUgdG8gc29ydCBjb2x1bW4gZGVzY2VuZGluZ2BcbiAgICApO1xuICB9XG59XG4iXX0=