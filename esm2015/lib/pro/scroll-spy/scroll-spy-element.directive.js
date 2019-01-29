/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, NgZone, Input } from '@angular/core';
import { ScrollSpyService } from './scroll-spy.service';
export class ScrollSpyElementDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} scrollSpyService
     */
    constructor(el, renderer, ngZone, scrollSpyService) {
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
        const scrollTop = this.el.nativeElement.parentElement.scrollTop;
        /** @type {?} */
        const elTop = this.el.nativeElement.offsetTop - this.offset;
        /** @type {?} */
        const elHeight = this.el.nativeElement.offsetHeight;
        return (scrollTop >= elTop && scrollTop < elTop + elHeight);
    }
    /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    updateActiveState(scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.removeActiveLinks(scrollSpyId);
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
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
        this.renderer.listen(this.el.nativeElement.parentElement, 'scroll', () => {
            this.onScroll();
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.id = this.el.nativeElement.id;
        this.renderer.setStyle(this.el.nativeElement.parentElement, 'position', 'relative');
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
ScrollSpyElementDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbScrollSpyElement]'
            },] }
];
/** @nocollapse */
ScrollSpyElementDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ScrollSpyService }
];
ScrollSpyElementDirective.propDecorators = {
    scrollSpyId: [{ type: Input, args: ['mdbScrollSpyElement',] }],
    offset: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype.id;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype._scrollSpyId;
    /** @type {?} */
    ScrollSpyElementDirective.prototype.offset;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    ScrollSpyElementDirective.prototype.scrollSpyService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS1lbGVtZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc2Nyb2xsLXNweS9zY3JvbGwtc3B5LWVsZW1lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUt4RCxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBY3BDLFlBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLE1BQWMsRUFDZCxnQkFBa0M7UUFIbEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFObkMsV0FBTSxHQUFHLENBQUMsQ0FBQztJQU9qQixDQUFDOzs7O0lBaEJKLElBQ0ksV0FBVyxLQUFhLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ3ZELElBQUksV0FBVyxDQUFDLEtBQWE7UUFDM0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFZRCxtQkFBbUI7O2NBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTOztjQUN6RCxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNOztjQUNyRCxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWTtRQUVuRCxPQUFPLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxTQUFTLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLFdBQW1CLEVBQUUsRUFBVTtRQUMvQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN2RSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7WUE1REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7YUFDbEM7Ozs7WUFYQyxVQUFVO1lBRVYsU0FBUztZQUNULE1BQU07WUFJQyxnQkFBZ0I7OzswQkFRdEIsS0FBSyxTQUFDLHFCQUFxQjtxQkFTM0IsS0FBSzs7Ozs7OztJQVhOLHVDQUFtQjs7Ozs7SUFTbkIsaURBQTZCOztJQUU3QiwyQ0FBb0I7Ozs7O0lBR2xCLHVDQUFzQjs7Ozs7SUFDdEIsNkNBQTJCOzs7OztJQUMzQiwyQ0FBc0I7Ozs7O0lBQ3RCLHFEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY3JvbGxTcHlTZXJ2aWNlIH0gZnJvbSAnLi9zY3JvbGwtc3B5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU2Nyb2xsU3B5RWxlbWVudF0nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNweUVsZW1lbnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIGlkOiBzdHJpbmc7XG5cbiAgQElucHV0KCdtZGJTY3JvbGxTcHlFbGVtZW50JylcbiAgZ2V0IHNjcm9sbFNweUlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zY3JvbGxTcHlJZDsgfVxuICBzZXQgc2Nyb2xsU3B5SWQobmV3SWQ6IHN0cmluZykge1xuICAgIGlmIChuZXdJZCkge1xuICAgICAgdGhpcy5fc2Nyb2xsU3B5SWQgPSBuZXdJZDtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfc2Nyb2xsU3B5SWQ6IHN0cmluZztcblxuICBASW5wdXQoKSBvZmZzZXQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgcHJpdmF0ZSBzY3JvbGxTcHlTZXJ2aWNlOiBTY3JvbGxTcHlTZXJ2aWNlXG4gICkge31cblxuICBpc0VsZW1lbnRJblZpZXdwb3J0KCkge1xuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICBjb25zdCBlbFRvcCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRUb3AgLSB0aGlzLm9mZnNldDtcbiAgICBjb25zdCBlbEhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICByZXR1cm4gKHNjcm9sbFRvcCA+PSBlbFRvcCAmJiBzY3JvbGxUb3AgPCBlbFRvcCArIGVsSGVpZ2h0KTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZVN0YXRlKHNjcm9sbFNweUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0KCkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsU3B5U2VydmljZS5yZW1vdmVBY3RpdmVMaW5rcyhzY3JvbGxTcHlJZCk7XG4gICAgICB0aGlzLnNjcm9sbFNweVNlcnZpY2UudXBkYXRlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQsIGlkKTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZVN0YXRlKHRoaXMuc2Nyb2xsU3B5SWQsIHRoaXMuaWQpO1xuICB9XG5cbiAgbGlzdGVuVG9TY3JvbGwoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsICdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uU2Nyb2xsKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlkID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlkO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIodGhpcy5saXN0ZW5Ub1Njcm9sbC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQWN0aXZlU3RhdGUodGhpcy5zY3JvbGxTcHlJZCwgdGhpcy5pZCk7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==