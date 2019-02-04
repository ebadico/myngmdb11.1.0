/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Inject, Renderer2, NgZone, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollSpyService } from './scroll-spy.service';
var ScrollSpyWindowDirective = /** @class */ (function () {
    function ScrollSpyWindowDirective(document, el, renderer, ngZone, scrollSpyService) {
        this.document = document;
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.scrollSpyService = scrollSpyService;
        this.offset = 0;
    }
    Object.defineProperty(ScrollSpyWindowDirective.prototype, "scrollSpyId", {
        get: /**
         * @return {?}
         */
        function () { return this._scrollSpyId; },
        set: /**
         * @param {?} newId
         * @return {?}
         */
        function (newId) {
            if (newId) {
                this._scrollSpyId = newId;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.isElementInViewport = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        /** @type {?} */
        var elHeight = this.el.nativeElement.offsetHeight;
        /** @type {?} */
        var elTop = this.el.nativeElement.offsetTop - this.offset;
        /** @type {?} */
        var elBottom = elTop + elHeight;
        return (scrollTop >= elTop && scrollTop <= elBottom);
    };
    /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.updateActiveState = /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    function (scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
        }
        else {
            this.scrollSpyService.removeActiveState(scrollSpyId, id);
        }
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        this.updateActiveState(this.scrollSpyId, this.id);
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.listenToScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(window, 'scroll', function () {
            _this.onScroll();
        });
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.id = this.el.nativeElement.id;
        this.ngZone.runOutsideAngular(this.listenToScroll.bind(this));
    };
    /**
     * @return {?}
     */
    ScrollSpyWindowDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.updateActiveState(_this.scrollSpyId, _this.id);
        }, 0);
    };
    ScrollSpyWindowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbScrollSpyWindow]'
                },] }
    ];
    /** @nocollapse */
    ScrollSpyWindowDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ScrollSpyService }
    ]; };
    ScrollSpyWindowDirective.propDecorators = {
        scrollSpyId: [{ type: Input, args: ['mdbScrollSpyWindow',] }],
        offset: [{ type: Input }]
    };
    return ScrollSpyWindowDirective;
}());
export { ScrollSpyWindowDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS13aW5kb3cuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zY3JvbGwtc3B5L3Njcm9sbC1zcHktd2luZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBRVYsTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQWlCRSxrQ0FDNEIsUUFBYSxFQUMvQixFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsTUFBYyxFQUNkLGdCQUFrQztRQUpoQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQy9CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUG5DLFdBQU0sR0FBRyxDQUFDLENBQUM7SUFRakIsQ0FBQztJQWpCSixzQkFDSSxpREFBVzs7OztRQURmLGNBQzRCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Ozs7O1FBQ3ZELFVBQWdCLEtBQWE7WUFDM0IsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDM0I7UUFDSCxDQUFDOzs7T0FMc0Q7Ozs7SUFrQnZELHNEQUFtQjs7O0lBQW5COztZQUNRLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUzs7WUFDbkYsUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVk7O1lBQzdDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU07O1lBQ3JELFFBQVEsR0FBRyxLQUFLLEdBQUcsUUFBUTtRQUVqQyxPQUFPLENBQUMsU0FBUyxJQUFJLEtBQUssSUFBSSxTQUFTLElBQUksUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsb0RBQWlCOzs7OztJQUFqQixVQUFrQixXQUFtQixFQUFFLEVBQVU7UUFDL0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsaURBQWM7OztJQUFkO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFO1lBQ3JDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztRQUVuQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELGtEQUFlOzs7SUFBZjtRQUFBLGlCQUlDO1FBSEMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7Ozs7Z0RBZ0JJLE1BQU0sU0FBQyxRQUFRO2dCQTdCbEIsVUFBVTtnQkFHVixTQUFTO2dCQUNULE1BQU07Z0JBS0MsZ0JBQWdCOzs7OEJBUXRCLEtBQUssU0FBQyxvQkFBb0I7eUJBUzFCLEtBQUs7O0lBZ0RSLCtCQUFDO0NBQUEsQUEvREQsSUErREM7U0E1RFksd0JBQXdCOzs7Ozs7SUFDbkMsc0NBQW1COzs7OztJQVNuQixnREFBNkI7O0lBRTdCLDBDQUFvQjs7Ozs7SUFHbEIsNENBQXVDOzs7OztJQUN2QyxzQ0FBc0I7Ozs7O0lBQ3RCLDRDQUEyQjs7Ozs7SUFDM0IsMENBQXNCOzs7OztJQUN0QixvREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIE5nWm9uZSxcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTY3JvbGxTcHlTZXJ2aWNlIH0gZnJvbSAnLi9zY3JvbGwtc3B5LnNlcnZpY2UnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU2Nyb2xsU3B5V2luZG93XSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsU3B5V2luZG93RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgnbWRiU2Nyb2xsU3B5V2luZG93JylcbiAgZ2V0IHNjcm9sbFNweUlkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zY3JvbGxTcHlJZDsgfVxuICBzZXQgc2Nyb2xsU3B5SWQobmV3SWQ6IHN0cmluZykge1xuICAgIGlmIChuZXdJZCkge1xuICAgICAgdGhpcy5fc2Nyb2xsU3B5SWQgPSBuZXdJZDtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfc2Nyb2xsU3B5SWQ6IHN0cmluZztcblxuICBASW5wdXQoKSBvZmZzZXQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgc2Nyb2xsU3B5U2VydmljZTogU2Nyb2xsU3B5U2VydmljZVxuICApIHt9XG5cbiAgaXNFbGVtZW50SW5WaWV3cG9ydCgpIHtcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBjb25zdCBlbEhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgY29uc3QgZWxUb3AgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIC0gdGhpcy5vZmZzZXQ7XG4gICAgY29uc3QgZWxCb3R0b20gPSBlbFRvcCArIGVsSGVpZ2h0O1xuXG4gICAgcmV0dXJuIChzY3JvbGxUb3AgPj0gZWxUb3AgJiYgc2Nyb2xsVG9wIDw9IGVsQm90dG9tKTtcbiAgfVxuXG4gIHVwZGF0ZUFjdGl2ZVN0YXRlKHNjcm9sbFNweUlkOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pc0VsZW1lbnRJblZpZXdwb3J0KCkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsU3B5U2VydmljZS51cGRhdGVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZCwgaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcm9sbFNweVNlcnZpY2UucmVtb3ZlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQsIGlkKTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICB0aGlzLnVwZGF0ZUFjdGl2ZVN0YXRlKHRoaXMuc2Nyb2xsU3B5SWQsIHRoaXMuaWQpO1xuICB9XG5cbiAgbGlzdGVuVG9TY3JvbGwoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5saXN0ZW4od2luZG93LCAnc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblNjcm9sbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5pZDtcblxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKHRoaXMubGlzdGVuVG9TY3JvbGwuYmluZCh0aGlzKSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVN0YXRlKHRoaXMuc2Nyb2xsU3B5SWQsIHRoaXMuaWQpO1xuICAgIH0sIDApO1xuICB9XG59XG4iXX0=