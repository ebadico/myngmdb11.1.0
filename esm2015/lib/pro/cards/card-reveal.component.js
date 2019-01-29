/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { socialsState } from '../animations/animations.component';
export class CardRevealComponent {
    /**
     * @param {?} _r
     */
    constructor(_r) {
        this._r = _r;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.show = !this.show;
        this.socials = (this.socials === 'active') ? 'inactive' : 'active';
        setTimeout(() => {
            try {
                /** @type {?} */
                const height = this.cardFront.nativeElement.offsetHeight;
                this._r.setStyle(this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
                this._r.setStyle(this.cardOverflow.nativeElement, 'height', height + 'px');
            }
            catch (error) { }
        }, 0);
    }
}
CardRevealComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-reveal',
                template: "<div #cardOverflow class=\"card-overflow col-12\" >\n  <div #cardFront class=\"card-front\">\n    <ng-content select=\".card-front\" ></ng-content>\n  </div>\n  <div #cardReveal class=\"card-reveal\" *ngIf=\"show\"  [@socialsState]=\"socials\">\n    <ng-content select=\".card-reveal\"></ng-content>\n  </div>\n</div>\n",
                animations: [socialsState]
            }] }
];
/** @nocollapse */
CardRevealComponent.ctorParameters = () => [
    { type: Renderer2 }
];
CardRevealComponent.propDecorators = {
    cardReveal: [{ type: ViewChild, args: ['cardReveal',] }],
    cardFront: [{ type: ViewChild, args: ['cardFront',] }],
    cardOverflow: [{ type: ViewChild, args: ['cardOverflow',] }]
};
if (false) {
    /** @type {?} */
    CardRevealComponent.prototype.cardReveal;
    /** @type {?} */
    CardRevealComponent.prototype.cardFront;
    /** @type {?} */
    CardRevealComponent.prototype.cardOverflow;
    /** @type {?} */
    CardRevealComponent.prototype.socials;
    /** @type {?} */
    CardRevealComponent.prototype.show;
    /**
     * @type {?}
     * @private
     */
    CardRevealComponent.prototype._r;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yZXZlYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9jYXJkcy9jYXJkLXJldmVhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBUWxFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFPOUIsWUFBb0IsRUFBYTtRQUFiLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDOzs7O0lBQ3RDLE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDbkUsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUk7O3NCQUNJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxZQUFZO2dCQUN4RCxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUMzRixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzVFO1lBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRztRQUNyQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7WUF4QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDJVQUF5QztnQkFDekMsVUFBVSxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQzNCOzs7O1lBUDBDLFNBQVM7Ozt5QkFVakQsU0FBUyxTQUFDLFlBQVk7d0JBQ3RCLFNBQVMsU0FBQyxXQUFXOzJCQUNyQixTQUFTLFNBQUMsY0FBYzs7OztJQUZ6Qix5Q0FBZ0Q7O0lBQ2hELHdDQUE4Qzs7SUFDOUMsMkNBQW9EOztJQUNwRCxzQ0FBb0I7O0lBQ3BCLG1DQUFxQjs7Ozs7SUFFVCxpQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzb2NpYWxzU3RhdGUgfSBmcm9tICcuLi9hbmltYXRpb25zL2FuaW1hdGlvbnMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWNhcmQtcmV2ZWFsJyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJkLXJldmVhbC5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtzb2NpYWxzU3RhdGVdXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FyZFJldmVhbENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ2NhcmRSZXZlYWwnKSBjYXJkUmV2ZWFsOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjYXJkRnJvbnQnKSBjYXJkRnJvbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NhcmRPdmVyZmxvdycpIGNhcmRPdmVyZmxvdzogRWxlbWVudFJlZjtcbiAgcHVibGljIHNvY2lhbHM6IGFueTtcbiAgcHVibGljIHNob3c6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfcjogUmVuZGVyZXIyKSB7IH1cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XG4gICAgdGhpcy5zb2NpYWxzID0gKHRoaXMuc29jaWFscyA9PT0gJ2FjdGl2ZScpID8gJ2luYWN0aXZlJyA6ICdhY3RpdmUnO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5jYXJkRnJvbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMuX3Iuc2V0U3R5bGUodGhpcy5jYXJkUmV2ZWFsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQsICdoZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgICAgdGhpcy5fci5zZXRTdHlsZSh0aGlzLmNhcmRPdmVyZmxvdy5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikgeyB9XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==