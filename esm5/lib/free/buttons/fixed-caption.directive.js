/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
var FixedButtonCaptionDirective = /** @class */ (function () {
    function FixedButtonCaptionDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    FixedButtonCaptionDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createCaptionElement();
    };
    /**
     * @return {?}
     */
    FixedButtonCaptionDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.collapseButtonActivator, 'click', (/**
         * @return {?}
         */
        function () {
            _this.renderer.addClass(_this.paragraphEl, 'fixed-button-caption');
            _this.renderer.setStyle(_this.paragraphEl, 'position', 'absolute');
            _this.renderer.setStyle(_this.paragraphEl, 'right', "60px");
            _this.renderer.setStyle(_this.paragraphEl, 'top', '10px');
            _this.renderer.setStyle(_this.el.nativeElement, 'overflow', 'visible');
        }));
    };
    /**
     * @return {?}
     */
    FixedButtonCaptionDirective.prototype.createCaptionElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var paragraph = this.renderer.createElement('p');
        /** @type {?} */
        var text = this.renderer.createText(this.caption);
        this.renderer.appendChild(paragraph, text);
        this.renderer.appendChild(this.el.nativeElement, paragraph);
        this.paragraphEl = paragraph;
    };
    FixedButtonCaptionDirective.decorators = [
        { type: Directive, args: [{ selector: '[mdbFixedCaption]' },] }
    ];
    /** @nocollapse */
    FixedButtonCaptionDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    FixedButtonCaptionDirective.propDecorators = {
        caption: [{ type: Input, args: ['mdbFixedCaption',] }],
        collapseButtonActivator: [{ type: Input, args: ['collapseButton',] }]
    };
    return FixedButtonCaptionDirective;
}());
export { FixedButtonCaptionDirective };
if (false) {
    /** @type {?} */
    FixedButtonCaptionDirective.prototype.caption;
    /** @type {?} */
    FixedButtonCaptionDirective.prototype.collapseButtonActivator;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.paragraphEl;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    FixedButtonCaptionDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZml4ZWQtY2FwdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9idXR0b25zL2ZpeGVkLWNhcHRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RjtJQUtFLHFDQUNVLFFBQW1CLEVBQ25CLEVBQWM7UUFEZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDeEIsQ0FBQzs7OztJQUVELDhDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxxREFBZTs7O0lBQWY7UUFBQSxpQkFRQztRQVBDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxPQUFPOzs7UUFBRTtZQUMxRCxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLHNCQUFzQixDQUFDLENBQUM7WUFDakUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDMUQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELDBEQUFvQjs7O0lBQXBCOztZQUNRLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7O1lBQzVDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDOztnQkE5QkYsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFDOzs7O2dCQUZtQixTQUFTO2dCQUFwQyxVQUFVOzs7MEJBSXpDLEtBQUssU0FBQyxpQkFBaUI7MENBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7O0lBNEJ6QixrQ0FBQztDQUFBLEFBL0JELElBK0JDO1NBOUJZLDJCQUEyQjs7O0lBQ3RDLDhDQUEwQzs7SUFDMUMsOERBQXNEOzs7OztJQUN0RCxrREFBeUI7Ozs7O0lBRXZCLCtDQUEyQjs7Ozs7SUFDM0IseUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW21kYkZpeGVkQ2FwdGlvbl0nfSlcbmV4cG9ydCBjbGFzcyBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoJ21kYkZpeGVkQ2FwdGlvbicpIGNhcHRpb246IHN0cmluZztcbiAgQElucHV0KCdjb2xsYXBzZUJ1dHRvbicpIGNvbGxhcHNlQnV0dG9uQWN0aXZhdG9yOiBhbnk7XG4gIHByaXZhdGUgcGFyYWdyYXBoRWw6IGFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3JlYXRlQ2FwdGlvbkVsZW1lbnQoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmNvbGxhcHNlQnV0dG9uQWN0aXZhdG9yLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMucGFyYWdyYXBoRWwsICdmaXhlZC1idXR0b24tY2FwdGlvbicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnBhcmFncmFwaEVsLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5wYXJhZ3JhcGhFbCwgJ3JpZ2h0JywgYDYwcHhgKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5wYXJhZ3JhcGhFbCwgJ3RvcCcsICcxMHB4Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNhcHRpb25FbGVtZW50KCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZVRleHQodGhpcy5jYXB0aW9uKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCwgdGV4dCk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHBhcmFncmFwaCk7XG4gICAgdGhpcy5wYXJhZ3JhcGhFbCA9IHBhcmFncmFwaDtcbiAgfVxufVxuIl19