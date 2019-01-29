/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, HostBinding, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { TooltipConfig } from './tooltip.service';
import { isBs3 } from '../utils/ng2-bootstrap-config';
export class TooltipContainerComponent {
    /**
     * @param {?} config
     * @param {?} r
     */
    constructor(config, r) {
        this.r = r;
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
        setTimeout(() => {
            /** @type {?} */
            const arrowClassList = this.tooltipArrow.nativeElement.classList;
            /** @type {?} */
            const tooltipHeight = this.tooltipInner.nativeElement.clientHeight;
            if (arrowClassList.contains('top')) {
                this.r.setStyle(this.tooltipArrow.nativeElement, 'top', tooltipHeight + 6 + 'px');
            }
            else if (arrowClassList.contains('left')) {
                this.r.setStyle(this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
            }
            else if (arrowClassList.contains('right')) {
                this.r.setStyle(this.tooltipArrow.nativeElement, 'top', (tooltipHeight / 2) + 'px');
            }
        }, 0);
    }
}
TooltipContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-tooltip-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
                },
                template: `
  <div #tooltipArrow class="tooltip-arrow" [ngClass]="{'left': placement == 'left', 'right': placement == 'right', 'top': placement == 'top'}"></div>
  <div #tooltipInner class="tooltip-inner"><ng-content></ng-content></div>
  `
            }] }
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig },
    { type: Renderer2 }
];
TooltipContainerComponent.propDecorators = {
    tooltipInner: [{ type: ViewChild, args: ['tooltipInner',] }],
    tooltipArrow: [{ type: ViewChild, args: ['tooltipArrow',] }],
    show: [{ type: HostBinding, args: ['class.show',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQWN0RCxNQUFNLE9BQU8seUJBQXlCOzs7OztJQWFwQyxZQUFtQixNQUFxQixFQUFVLENBQVk7UUFBWixNQUFDLEdBQUQsQ0FBQyxDQUFXO1FBTm5DLFNBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFPNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQU5ELElBQVcsS0FBSztRQUNkLE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQU1NLGVBQWU7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUN2QztRQUNELFVBQVUsQ0FBQyxHQUFHLEVBQUU7O2tCQUNSLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxTQUFTOztrQkFDMUQsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFlBQVk7WUFDbEUsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsYUFBYSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNuRjtpQkFBTSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUN0RjtpQkFBTSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQzthQUN0RjtRQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVSLENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2dCQUUvQyxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLGtEQUFrRDtpQkFDOUQ7Z0JBQ0QsUUFBUSxFQUFFOzs7R0FHVDthQUNGOzs7O1lBZFEsYUFBYTtZQUQwRSxTQUFTOzs7MkJBcUJ0RyxTQUFTLFNBQUMsY0FBYzsyQkFDeEIsU0FBUyxTQUFDLGNBQWM7bUJBQ3hCLFdBQVcsU0FBQyxZQUFZOzs7O0lBTnpCLDZDQUFxQjs7SUFDckIsOENBQXlCOztJQUN6QiwrQ0FBMEI7O0lBQzFCLDhDQUEwQjs7SUFDMUIsaURBQW9EOztJQUNwRCxpREFBb0Q7O0lBQ3BELHlDQUE4Qzs7Ozs7SUFNSixzQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBIb3N0QmluZGluZywgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRvb2x0aXBDb25maWcgfSBmcm9tICcuL3Rvb2x0aXAuc2VydmljZSc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJy4uL3V0aWxzL25nMi1ib290c3RyYXAtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXRvb2x0aXAtY29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICBob3N0OiB7XG4gICAgJ1tjbGFzc10nOiAnXCJ0b29sdGlwLWZhZGVJbiB0b29sdGlwIGluIHRvb2x0aXAtXCIgKyBwbGFjZW1lbnQnXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgI3Rvb2x0aXBBcnJvdyBjbGFzcz1cInRvb2x0aXAtYXJyb3dcIiBbbmdDbGFzc109XCJ7J2xlZnQnOiBwbGFjZW1lbnQgPT0gJ2xlZnQnLCAncmlnaHQnOiBwbGFjZW1lbnQgPT0gJ3JpZ2h0JywgJ3RvcCc6IHBsYWNlbWVudCA9PSAndG9wJ31cIj48L2Rpdj5cbiAgPGRpdiAjdG9vbHRpcElubmVyIGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBjbGFzc01hcDogYW55O1xuICBwdWJsaWMgcGxhY2VtZW50OiBzdHJpbmc7XG4gIHB1YmxpYyBwb3B1cENsYXNzOiBzdHJpbmc7XG4gIHB1YmxpYyBhbmltYXRpb246IGJvb2xlYW47XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBJbm5lcicpIHRvb2x0aXBJbm5lcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcEFycm93JykgdG9vbHRpcEFycm93OiBFbGVtZW50UmVmO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKSBzaG93ID0gIXRoaXMuaXNCczM7XG5cbiAgcHVibGljIGdldCBpc0JzMygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gaXNCczMoKTtcbiAgfVxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IFRvb2x0aXBDb25maWcsIHByaXZhdGUgcjogUmVuZGVyZXIyKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0geyBpbjogZmFsc2UsIGZhZGU6IGZhbHNlIH07XG4gICAgdGhpcy5jbGFzc01hcFt0aGlzLnBsYWNlbWVudF0gPSB0cnVlO1xuICAgIHRoaXMuY2xhc3NNYXBbJ3Rvb2x0aXAtJyArIHRoaXMucGxhY2VtZW50XSA9IHRydWU7XG5cbiAgICB0aGlzLmNsYXNzTWFwLmluID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuY2xhc3NNYXAuZmFkZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucG9wdXBDbGFzcykge1xuICAgICAgdGhpcy5jbGFzc01hcFt0aGlzLnBvcHVwQ2xhc3NdID0gdHJ1ZTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBhcnJvd0NsYXNzTGlzdCA9IHRoaXMudG9vbHRpcEFycm93Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgICAgY29uc3QgdG9vbHRpcEhlaWdodCA9IHRoaXMudG9vbHRpcElubmVyLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgaWYgKGFycm93Q2xhc3NMaXN0LmNvbnRhaW5zKCd0b3AnKSkge1xuICAgICAgICB0aGlzLnIuc2V0U3R5bGUodGhpcy50b29sdGlwQXJyb3cubmF0aXZlRWxlbWVudCwgJ3RvcCcsIHRvb2x0aXBIZWlnaHQgKyA2ICsgJ3B4Jyk7XG4gICAgICB9IGVsc2UgaWYgKGFycm93Q2xhc3NMaXN0LmNvbnRhaW5zKCdsZWZ0JykpIHtcbiAgICAgICAgdGhpcy5yLnNldFN0eWxlKHRoaXMudG9vbHRpcEFycm93Lm5hdGl2ZUVsZW1lbnQsICd0b3AnLCAgKHRvb2x0aXBIZWlnaHQgLyAyKSArICdweCcpO1xuICAgICAgfSBlbHNlIGlmIChhcnJvd0NsYXNzTGlzdC5jb250YWlucygncmlnaHQnKSkge1xuICAgICAgICB0aGlzLnIuc2V0U3R5bGUodGhpcy50b29sdGlwQXJyb3cubmF0aXZlRWxlbWVudCwgJ3RvcCcsICAodG9vbHRpcEhlaWdodCAvIDIpICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgfSwgMCk7XG5cbiAgfVxufVxuIl19