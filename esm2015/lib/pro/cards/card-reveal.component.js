/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            try {
                /** @type {?} */
                const height = this.cardFront.nativeElement.offsetHeight;
                this._r.setStyle(this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
                this._r.setStyle(this.cardOverflow.nativeElement, 'height', height + 'px');
            }
            catch (error) { }
        }), 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yZXZlYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9jYXJkcy9jYXJkLXJldmVhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBUWxFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFPOUIsWUFBb0IsRUFBYTtRQUFiLE9BQUUsR0FBRixFQUFFLENBQVc7SUFBSSxDQUFDOzs7O0lBQ3RDLE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDbkUsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSTs7c0JBQ0ksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVk7Z0JBQ3hELElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7Z0JBQzNGLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDNUU7WUFBQyxPQUFPLEtBQUssRUFBRSxHQUFHO1FBQ3JCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsMlVBQXlDO2dCQUN6QyxVQUFVLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDM0I7Ozs7WUFQMEMsU0FBUzs7O3lCQVVqRCxTQUFTLFNBQUMsWUFBWTt3QkFDdEIsU0FBUyxTQUFDLFdBQVc7MkJBQ3JCLFNBQVMsU0FBQyxjQUFjOzs7O0lBRnpCLHlDQUFnRDs7SUFDaEQsd0NBQThDOztJQUM5QywyQ0FBb0Q7O0lBQ3BELHNDQUFvQjs7SUFDcEIsbUNBQXFCOzs7OztJQUVULGlDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNvY2lhbHNTdGF0ZSB9IGZyb20gJy4uL2FuaW1hdGlvbnMvYW5pbWF0aW9ucy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItY2FyZC1yZXZlYWwnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtcmV2ZWFsLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uczogW3NvY2lhbHNTdGF0ZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBDYXJkUmV2ZWFsQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnY2FyZFJldmVhbCcpIGNhcmRSZXZlYWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NhcmRGcm9udCcpIGNhcmRGcm9udDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY2FyZE92ZXJmbG93JykgY2FyZE92ZXJmbG93OiBFbGVtZW50UmVmO1xuICBwdWJsaWMgc29jaWFsczogYW55O1xuICBwdWJsaWMgc2hvdzogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yOiBSZW5kZXJlcjIpIHsgfVxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcbiAgICB0aGlzLnNvY2lhbHMgPSAodGhpcy5zb2NpYWxzID09PSAnYWN0aXZlJykgPyAnaW5hY3RpdmUnIDogJ2FjdGl2ZSc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLmNhcmRGcm9udC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgdGhpcy5fci5zZXRTdHlsZSh0aGlzLmNhcmRSZXZlYWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuICAgICAgICB0aGlzLl9yLnNldFN0eWxlKHRoaXMuY2FyZE92ZXJmbG93Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBoZWlnaHQgKyAncHgnKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cbiAgICB9LCAwKTtcbiAgfVxufVxuIl19