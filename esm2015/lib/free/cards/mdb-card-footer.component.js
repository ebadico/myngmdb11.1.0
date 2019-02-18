/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
export class MdbCardFooterComponent {
    /**
     * @param {?} _el
     * @param {?} _r
     */
    constructor(_el, _r) {
        this._el = _el;
        this._r = _r;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._r.addClass(this._el.nativeElement, 'card-footer');
        if (this.class) {
            this.class.split(' ').forEach((/**
             * @param {?} element
             * @return {?}
             */
            (element) => {
                this._r.addClass(this._el.nativeElement, element);
            }));
        }
    }
}
MdbCardFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-footer',
                template: "<ng-content></ng-content>\n"
            }] }
];
/** @nocollapse */
MdbCardFooterComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
MdbCardFooterComponent.propDecorators = {
    class: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MdbCardFooterComponent.prototype.class;
    /**
     * @type {?}
     * @private
     */
    MdbCardFooterComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    MdbCardFooterComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWNhcmQtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2NhcmRzL21kYi1jYXJkLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPaEYsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFFL0IsWUFBb0IsR0FBZSxFQUFVLEVBQWE7UUFBdEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDOzs7O0lBRS9ELFFBQVE7UUFDSixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4RCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdEQsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7OztZQWhCSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsdUNBQStDO2FBQ2xEOzs7O1lBTDBCLFVBQVU7WUFBRSxTQUFTOzs7b0JBUTNDLEtBQUs7Ozs7SUFBTix1Q0FBdUI7Ozs7O0lBQ1gscUNBQXVCOzs7OztJQUFFLG9DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbWRiLWNhcmQtZm9vdGVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWRiLWNhcmQtZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZGJDYXJkRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yOiBSZW5kZXJlcjIpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX3IuYWRkQ2xhc3ModGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2NhcmQtZm9vdGVyJyk7XG4gICAgICAgIGlmICh0aGlzLmNsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19