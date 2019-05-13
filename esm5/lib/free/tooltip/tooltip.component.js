/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, HostBinding, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TooltipConfig } from './tooltip.service';
import { isBs3 } from '../utils/ng2-bootstrap-config';
var TooltipContainerComponent = /** @class */ (function () {
    function TooltipContainerComponent(config, r, elem) {
        this.r = r;
        this.show = !this.isBs3;
        this.el = elem;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.alignArrow();
        }), 0);
    };
    /**
     * @param {?=} placement
     * @return {?}
     */
    TooltipContainerComponent.prototype.alignArrow = /**
     * @param {?=} placement
     * @return {?}
     */
    function (placement) {
        /** @type {?} */
        var arrowClassList = this.tooltipArrow.nativeElement.classList;
        /** @type {?} */
        var tooltipHeight = this.tooltipInner.nativeElement.clientHeight;
        if (placement) {
            this.r.addClass(this.tooltipArrow.nativeElement, placement);
        }
        if (arrowClassList.contains('top')) {
            this.r.setStyle(this.tooltipArrow.nativeElement, 'top', tooltipHeight + 6 + 'px');
        }
        else if (arrowClassList.contains('left')) {
            this.r.setStyle(this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
        }
        else if (arrowClassList.contains('right')) {
            this.r.setStyle(this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
        }
    };
    TooltipContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-tooltip-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
                    },
                    template: "\n    <div #tooltipArrow class=\"tooltip-arrow\"\n         [ngClass]=\"{'left': placement == 'left', 'right': placement == 'right', 'top': placement == 'top'}\"></div>\n    <div #tooltipInner class=\"tooltip-inner\">\n      <ng-content></ng-content>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: TooltipConfig },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    TooltipContainerComponent.propDecorators = {
        tooltipInner: [{ type: ViewChild, args: ['tooltipInner',] }],
        tooltipArrow: [{ type: ViewChild, args: ['tooltipArrow',] }],
        show: [{ type: HostBinding, args: ['class.show',] }]
    };
    return TooltipContainerComponent;
}());
export { TooltipContainerComponent };
if (false) {
    /** @type {?} */
    TooltipContainerComponent.prototype.classMap;
    /** @type {?} */
    TooltipContainerComponent.prototype.placement;
    /** @type {?} */
    TooltipContainerComponent.prototype.popupClass;
    /** @type {?} */
    TooltipContainerComponent.prototype.animation;
    /** @type {?} */
    TooltipContainerComponent.prototype.el;
    /** @type {?} */
    TooltipContainerComponent.prototype.tooltipInner;
    /** @type {?} */
    TooltipContainerComponent.prototype.tooltipArrow;
    /** @type {?} */
    TooltipContainerComponent.prototype.show;
    /**
     * @type {?}
     * @private
     */
    TooltipContainerComponent.prototype.r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRDtJQTRCRSxtQ0FBbUIsTUFBcUIsRUFBVSxDQUFZLEVBQUUsSUFBZ0I7UUFBOUIsTUFBQyxHQUFELENBQUMsQ0FBVztRQU5uQyxTQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBTzVDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQVBELHNCQUFXLDRDQUFLOzs7O1FBQWhCO1lBQ0UsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDOzs7T0FBQTs7OztJQU9NLG1EQUFlOzs7SUFBdEI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3ZDO1FBQ0QsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFTSw4Q0FBVTs7OztJQUFqQixVQUFrQixTQUFrQjs7WUFDNUIsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFNBQVM7O1lBQzFELGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxZQUFZO1FBRWxFLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDbkY7YUFBTSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ3JGO2FBQU0sSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUNyRjtJQUNILENBQUM7O2dCQWxFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsa0RBQWtEO3FCQUM5RDtvQkFDRCxRQUFRLEVBQUUsMlFBTVQ7aUJBQ0Y7Ozs7Z0JBaEJPLGFBQWE7Z0JBRm5CLFNBQVM7Z0JBRFQsVUFBVTs7OytCQTBCVCxTQUFTLFNBQUMsY0FBYzsrQkFDeEIsU0FBUyxTQUFDLGNBQWM7dUJBQ3hCLFdBQVcsU0FBQyxZQUFZOztJQTZDM0IsZ0NBQUM7Q0FBQSxBQW5FRCxJQW1FQztTQXJEWSx5QkFBeUI7OztJQUNwQyw2Q0FBcUI7O0lBQ3JCLDhDQUF5Qjs7SUFDekIsK0NBQTBCOztJQUMxQiw4Q0FBMEI7O0lBQzFCLHVDQUFzQjs7SUFDdEIsaURBQW9EOztJQUNwRCxpREFBb0Q7O0lBQ3BELHlDQUE4Qzs7Ozs7SUFNSixzQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBIb3N0QmluZGluZyxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rvb2x0aXBDb25maWd9IGZyb20gJy4vdG9vbHRpcC5zZXJ2aWNlJztcbmltcG9ydCB7aXNCczN9IGZyb20gJy4uL3V0aWxzL25nMi1ib290c3RyYXAtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXRvb2x0aXAtY29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzXSc6ICdcInRvb2x0aXAtZmFkZUluIHRvb2x0aXAgaW4gdG9vbHRpcC1cIiArIHBsYWNlbWVudCdcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICN0b29sdGlwQXJyb3cgY2xhc3M9XCJ0b29sdGlwLWFycm93XCJcbiAgICAgICAgIFtuZ0NsYXNzXT1cInsnbGVmdCc6IHBsYWNlbWVudCA9PSAnbGVmdCcsICdyaWdodCc6IHBsYWNlbWVudCA9PSAncmlnaHQnLCAndG9wJzogcGxhY2VtZW50ID09ICd0b3AnfVwiPjwvZGl2PlxuICAgIDxkaXYgI3Rvb2x0aXBJbm5lciBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBjbGFzc01hcDogYW55O1xuICBwdWJsaWMgcGxhY2VtZW50OiBzdHJpbmc7XG4gIHB1YmxpYyBwb3B1cENsYXNzOiBzdHJpbmc7XG4gIHB1YmxpYyBhbmltYXRpb246IGJvb2xlYW47XG4gIHB1YmxpYyBlbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcElubmVyJykgdG9vbHRpcElubmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0b29sdGlwQXJyb3cnKSB0b29sdGlwQXJyb3c6IEVsZW1lbnRSZWY7XG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2hvdycpIHNob3cgPSAhdGhpcy5pc0JzMztcblxuICBwdWJsaWMgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0JzMygpO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogVG9vbHRpcENvbmZpZywgcHJpdmF0ZSByOiBSZW5kZXJlcjIsIGVsZW06IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsID0gZWxlbTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7aW46IGZhbHNlLCBmYWRlOiBmYWxzZX07XG4gICAgdGhpcy5jbGFzc01hcFt0aGlzLnBsYWNlbWVudF0gPSB0cnVlO1xuICAgIHRoaXMuY2xhc3NNYXBbJ3Rvb2x0aXAtJyArIHRoaXMucGxhY2VtZW50XSA9IHRydWU7XG5cbiAgICB0aGlzLmNsYXNzTWFwLmluID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAuZmFkZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9wdXBDbGFzcykge1xuICAgICAgdGhpcy5jbGFzc01hcFt0aGlzLnBvcHVwQ2xhc3NdID0gdHJ1ZTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmFsaWduQXJyb3coKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBhbGlnbkFycm93KHBsYWNlbWVudD86IHN0cmluZykge1xuICAgIGNvbnN0IGFycm93Q2xhc3NMaXN0ID0gdGhpcy50b29sdGlwQXJyb3cubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgY29uc3QgdG9vbHRpcEhlaWdodCA9IHRoaXMudG9vbHRpcElubmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gICAgaWYgKHBsYWNlbWVudCkge1xuICAgICAgdGhpcy5yLmFkZENsYXNzKHRoaXMudG9vbHRpcEFycm93Lm5hdGl2ZUVsZW1lbnQsIHBsYWNlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKGFycm93Q2xhc3NMaXN0LmNvbnRhaW5zKCd0b3AnKSkge1xuICAgICAgdGhpcy5yLnNldFN0eWxlKHRoaXMudG9vbHRpcEFycm93Lm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB0b29sdGlwSGVpZ2h0ICsgNiArICdweCcpO1xuICAgIH0gZWxzZSBpZiAoYXJyb3dDbGFzc0xpc3QuY29udGFpbnMoJ2xlZnQnKSkge1xuICAgICAgdGhpcy5yLnNldFN0eWxlKHRoaXMudG9vbHRpcEFycm93Lm5hdGl2ZUVsZW1lbnQsICd0b3AnLCAodG9vbHRpcEhlaWdodCAvIDIpICsgJ3B4Jyk7XG4gICAgfSBlbHNlIGlmIChhcnJvd0NsYXNzTGlzdC5jb250YWlucygncmlnaHQnKSkge1xuICAgICAgdGhpcy5yLnNldFN0eWxlKHRoaXMudG9vbHRpcEFycm93Lm5hdGl2ZUVsZW1lbnQsICd0b3AnLCAodG9vbHRpcEhlaWdodCAvIDIpICsgJ3B4Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=