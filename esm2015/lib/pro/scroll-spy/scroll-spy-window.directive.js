/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Inject, Renderer2, NgZone, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollSpyService } from './scroll-spy.service';
export class ScrollSpyWindowDirective {
    /**
     * @param {?} document
     * @param {?} el
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} scrollSpyService
     */
    constructor(document, el, renderer, ngZone, scrollSpyService) {
        this.document = document;
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.scrollSpyService = scrollSpyService;
        this.offset = 0;
    }
    /**
     * @return {?}
     */
    get scrollSpyId() { return this._scrollSpyId; }
    /**
     * @param {?} newId
     * @return {?}
     */
    set scrollSpyId(newId) {
        if (newId) {
            this._scrollSpyId = newId;
        }
    }
    /**
     * @return {?}
     */
    isElementInViewport() {
        /** @type {?} */
        const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        /** @type {?} */
        const elHeight = this.el.nativeElement.offsetHeight;
        /** @type {?} */
        const elTop = this.el.nativeElement.offsetTop - this.offset;
        /** @type {?} */
        const elBottom = elTop + elHeight;
        return (scrollTop >= elTop && scrollTop <= elBottom);
    }
    /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    updateActiveState(scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
        }
        else {
            this.scrollSpyService.removeActiveState(scrollSpyId, id);
        }
    }
    /**
     * @return {?}
     */
    onScroll() {
        this.updateActiveState(this.scrollSpyId, this.id);
    }
    /**
     * @return {?}
     */
    listenToScroll() {
        this.renderer.listen(window, 'scroll', () => {
            this.onScroll();
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.id = this.el.nativeElement.id;
        this.ngZone.runOutsideAngular(this.listenToScroll.bind(this));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout(() => {
            this.updateActiveState(this.scrollSpyId, this.id);
        }, 0);
    }
}
ScrollSpyWindowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbScrollSpyWindow]'
            },] }
];
/** @nocollapse */
ScrollSpyWindowDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ScrollSpyService }
];
ScrollSpyWindowDirective.propDecorators = {
    scrollSpyId: [{ type: Input, args: ['mdbScrollSpyWindow',] }],
    offset: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.id;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype._scrollSpyId;
    /** @type {?} */
    ScrollSpyWindowDirective.prototype.offset;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.document;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyWindowDirective.prototype.scrollSpyService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS13aW5kb3cuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zY3JvbGwtc3B5L3Njcm9sbC1zcHktd2luZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUt4RCxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7OztJQWNuQyxZQUM0QixRQUFhLEVBQy9CLEVBQWMsRUFDZCxRQUFtQixFQUNuQixNQUFjLEVBQ2QsZ0JBQWtDO1FBSmhCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0IsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFQbkMsV0FBTSxHQUFHLENBQUMsQ0FBQztJQVFqQixDQUFDOzs7O0lBakJKLElBQ0ksV0FBVyxLQUFhLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ3ZELElBQUksV0FBVyxDQUFDLEtBQWE7UUFDM0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFhRCxtQkFBbUI7O2NBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTOztjQUNuRixRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWTs7Y0FDN0MsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTTs7Y0FDckQsUUFBUSxHQUFHLEtBQUssR0FBRyxRQUFRO1FBRWpDLE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLFNBQVMsSUFBSSxRQUFRLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQixFQUFFLEVBQVU7UUFDL0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7O1lBOURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOzs7OzRDQWdCSSxNQUFNLFNBQUMsUUFBUTtZQTdCbEIsVUFBVTtZQUdWLFNBQVM7WUFDVCxNQUFNO1lBS0MsZ0JBQWdCOzs7MEJBUXRCLEtBQUssU0FBQyxvQkFBb0I7cUJBUzFCLEtBQUs7Ozs7Ozs7SUFYTixzQ0FBbUI7Ozs7O0lBU25CLGdEQUE2Qjs7SUFFN0IsMENBQW9COzs7OztJQUdsQiw0Q0FBdUM7Ozs7O0lBQ3ZDLHNDQUFzQjs7Ozs7SUFDdEIsNENBQTJCOzs7OztJQUMzQiwwQ0FBc0I7Ozs7O0lBQ3RCLG9EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBJbmplY3QsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNjcm9sbFNweVNlcnZpY2UgfSBmcm9tICcuL3Njcm9sbC1zcHkuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJTY3JvbGxTcHlXaW5kb3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxTcHlXaW5kb3dEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIGlkOiBzdHJpbmc7XG5cbiAgQElucHV0KCdtZGJTY3JvbGxTcHlXaW5kb3cnKVxuICBnZXQgc2Nyb2xsU3B5SWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3Njcm9sbFNweUlkOyB9XG4gIHNldCBzY3JvbGxTcHlJZChuZXdJZDogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0lkKSB7XG4gICAgICB0aGlzLl9zY3JvbGxTcHlJZCA9IG5ld0lkO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9zY3JvbGxTcHlJZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIG9mZnNldCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBzY3JvbGxTcHlTZXJ2aWNlOiBTY3JvbGxTcHlTZXJ2aWNlXG4gICkge31cblxuICBpc0VsZW1lbnRJblZpZXdwb3J0KCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGVsSGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICBjb25zdCBlbFRvcCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLSB0aGlzLm9mZnNldDtcbiAgICBjb25zdCBlbEJvdHRvbSA9IGVsVG9wICsgZWxIZWlnaHQ7XG5cbiAgICByZXR1cm4gKHNjcm9sbFRvcCA+PSBlbFRvcCAmJiBzY3JvbGxUb3AgPD0gZWxCb3R0b20pO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmlzRWxlbWVudEluVmlld3BvcnQoKSkge1xuICAgICAgdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLnVwZGF0ZUFjdGl2ZVN0YXRlKHNjcm9sbFNweUlkLCBpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2Nyb2xsU3B5U2VydmljZS5yZW1vdmVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZCwgaWQpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2Nyb2xsKCkge1xuICAgIHRoaXMudXBkYXRlQWN0aXZlU3RhdGUodGhpcy5zY3JvbGxTcHlJZCwgdGhpcy5pZCk7XG4gIH1cblxuICBsaXN0ZW5Ub1Njcm9sbCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih3aW5kb3csICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2Nyb2xsKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIodGhpcy5saXN0ZW5Ub1Njcm9sbC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlU3RhdGUodGhpcy5zY3JvbGxTcHlJZCwgdGhpcy5pZCk7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==