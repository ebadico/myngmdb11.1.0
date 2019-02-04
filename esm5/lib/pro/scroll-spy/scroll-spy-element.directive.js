/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, NgZone, Input } from '@angular/core';
import { ScrollSpyService } from './scroll-spy.service';
var ScrollSpyElementDirective = /** @class */ (function () {
    function ScrollSpyElementDirective(el, renderer, ngZone, scrollSpyService) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.scrollSpyService = scrollSpyService;
        this.offset = 0;
    }
    Object.defineProperty(ScrollSpyElementDirective.prototype, "scrollSpyId", {
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
    ScrollSpyElementDirective.prototype.isElementInViewport = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollTop = this.el.nativeElement.parentElement.scrollTop;
        /** @type {?} */
        var elTop = this.el.nativeElement.offsetTop - this.offset;
        /** @type {?} */
        var elHeight = this.el.nativeElement.offsetHeight;
        return (scrollTop >= elTop && scrollTop < elTop + elHeight);
    };
    /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.updateActiveState = /**
     * @param {?} scrollSpyId
     * @param {?} id
     * @return {?}
     */
    function (scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.removeActiveLinks(scrollSpyId);
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
        }
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        this.updateActiveState(this.scrollSpyId, this.id);
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.listenToScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.el.nativeElement.parentElement, 'scroll', function () {
            _this.onScroll();
        });
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.id = this.el.nativeElement.id;
        this.renderer.setStyle(this.el.nativeElement.parentElement, 'position', 'relative');
        this.ngZone.runOutsideAngular(this.listenToScroll.bind(this));
    };
    /**
     * @return {?}
     */
    ScrollSpyElementDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.updateActiveState(_this.scrollSpyId, _this.id);
        }, 0);
    };
    ScrollSpyElementDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbScrollSpyElement]'
                },] }
    ];
    /** @nocollapse */
    ScrollSpyElementDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NgZone },
        { type: ScrollSpyService }
    ]; };
    ScrollSpyElementDirective.propDecorators = {
        scrollSpyId: [{ type: Input, args: ['mdbScrollSpyElement',] }],
        offset: [{ type: Input }]
    };
    return ScrollSpyElementDirective;
}());
export { ScrollSpyElementDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS1lbGVtZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc2Nyb2xsLXNweS9zY3JvbGwtc3B5LWVsZW1lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFFVixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RDtJQWlCRSxtQ0FDVSxFQUFjLEVBQ2QsUUFBbUIsRUFDbkIsTUFBYyxFQUNkLGdCQUFrQztRQUhsQyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU5uQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBT2pCLENBQUM7SUFoQkosc0JBQ0ksa0RBQVc7Ozs7UUFEZixjQUM0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOzs7OztRQUN2RCxVQUFnQixLQUFhO1lBQzNCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQzs7O09BTHNEOzs7O0lBaUJ2RCx1REFBbUI7OztJQUFuQjs7WUFDUSxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVM7O1lBQ3pELEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU07O1lBQ3JELFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZO1FBRW5ELE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQscURBQWlCOzs7OztJQUFqQixVQUFrQixXQUFtQixFQUFFLEVBQVU7UUFDL0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztTQUMxRDtJQUNILENBQUM7Ozs7SUFFRCw0Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVELGtEQUFjOzs7SUFBZDtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRTtZQUNsRSxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVwRixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELG1EQUFlOzs7SUFBZjtRQUFBLGlCQUlDO1FBSEMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7O2dCQTVERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtpQkFDbEM7Ozs7Z0JBWEMsVUFBVTtnQkFFVixTQUFTO2dCQUNULE1BQU07Z0JBSUMsZ0JBQWdCOzs7OEJBUXRCLEtBQUssU0FBQyxxQkFBcUI7eUJBUzNCLEtBQUs7O0lBOENSLGdDQUFDO0NBQUEsQUE3REQsSUE2REM7U0ExRFkseUJBQXlCOzs7Ozs7SUFDcEMsdUNBQW1COzs7OztJQVNuQixpREFBNkI7O0lBRTdCLDJDQUFvQjs7Ozs7SUFHbEIsdUNBQXNCOzs7OztJQUN0Qiw2Q0FBMkI7Ozs7O0lBQzNCLDJDQUFzQjs7Ozs7SUFDdEIscURBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbFNweVNlcnZpY2UgfSBmcm9tICcuL3Njcm9sbC1zcHkuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJTY3JvbGxTcHlFbGVtZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsU3B5RWxlbWVudERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgaWQ6IHN0cmluZztcblxuICBASW5wdXQoJ21kYlNjcm9sbFNweUVsZW1lbnQnKVxuICBnZXQgc2Nyb2xsU3B5SWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3Njcm9sbFNweUlkOyB9XG4gIHNldCBzY3JvbGxTcHlJZChuZXdJZDogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0lkKSB7XG4gICAgICB0aGlzLl9zY3JvbGxTcHlJZCA9IG5ld0lkO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9zY3JvbGxTcHlJZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIG9mZnNldCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHNjcm9sbFNweVNlcnZpY2U6IFNjcm9sbFNweVNlcnZpY2VcbiAgKSB7fVxuXG4gIGlzRWxlbWVudEluVmlld3BvcnQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGVsVG9wID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIHRoaXMub2Zmc2V0O1xuICAgIGNvbnN0IGVsSGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIHJldHVybiAoc2Nyb2xsVG9wID49IGVsVG9wICYmIHNjcm9sbFRvcCA8IGVsVG9wICsgZWxIZWlnaHQpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmlzRWxlbWVudEluVmlld3BvcnQoKSkge1xuICAgICAgdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLnJlbW92ZUFjdGl2ZUxpbmtzKHNjcm9sbFNweUlkKTtcbiAgICAgIHRoaXMuc2Nyb2xsU3B5U2VydmljZS51cGRhdGVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZCwgaWQpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2Nyb2xsKCkge1xuICAgIHRoaXMudXBkYXRlQWN0aXZlU3RhdGUodGhpcy5zY3JvbGxTcHlJZCwgdGhpcy5pZCk7XG4gIH1cblxuICBsaXN0ZW5Ub1Njcm9sbCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCwgJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIHRoaXMub25TY3JvbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcih0aGlzLmxpc3RlblRvU2Nyb2xsLmJpbmQodGhpcykpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVTdGF0ZSh0aGlzLnNjcm9sbFNweUlkLCB0aGlzLmlkKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIl19