/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { socialsState } from '../animations/animations.component';
var CardRevealComponent = /** @class */ (function () {
    function CardRevealComponent(_r) {
        this._r = _r;
    }
    /**
     * @return {?}
     */
    CardRevealComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.show = !this.show;
        this.socials = (this.socials === 'active') ? 'inactive' : 'active';
        setTimeout(function () {
            try {
                /** @type {?} */
                var height = _this.cardFront.nativeElement.offsetHeight;
                _this._r.setStyle(_this.cardReveal.nativeElement.firstElementChild, 'height', height + 'px');
                _this._r.setStyle(_this.cardOverflow.nativeElement, 'height', height + 'px');
            }
            catch (error) { }
        }, 0);
    };
    CardRevealComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-reveal',
                    template: "<div #cardOverflow class=\"card-overflow col-12\" >\n  <div #cardFront class=\"card-front\">\n    <ng-content select=\".card-front\" ></ng-content>\n  </div>\n  <div #cardReveal class=\"card-reveal\" *ngIf=\"show\"  [@socialsState]=\"socials\">\n    <ng-content select=\".card-reveal\"></ng-content>\n  </div>\n</div>\n",
                    animations: [socialsState]
                }] }
    ];
    /** @nocollapse */
    CardRevealComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    CardRevealComponent.propDecorators = {
        cardReveal: [{ type: ViewChild, args: ['cardReveal',] }],
        cardFront: [{ type: ViewChild, args: ['cardFront',] }],
        cardOverflow: [{ type: ViewChild, args: ['cardOverflow',] }]
    };
    return CardRevealComponent;
}());
export { CardRevealComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yZXZlYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9jYXJkcy9jYXJkLXJldmVhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRWxFO0lBYUUsNkJBQW9CLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO0lBQUksQ0FBQzs7OztJQUN0QyxvQ0FBTTs7O0lBQU47UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNuRSxVQUFVLENBQUM7WUFDVCxJQUFJOztvQkFDSSxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFBWTtnQkFDeEQsS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDM0YsS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQzthQUM1RTtZQUFDLE9BQU8sS0FBSyxFQUFFLEdBQUc7UUFDckIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwyVUFBeUM7b0JBQ3pDLFVBQVUsRUFBRSxDQUFDLFlBQVksQ0FBQztpQkFDM0I7Ozs7Z0JBUDBDLFNBQVM7Ozs2QkFVakQsU0FBUyxTQUFDLFlBQVk7NEJBQ3RCLFNBQVMsU0FBQyxXQUFXOytCQUNyQixTQUFTLFNBQUMsY0FBYzs7SUFnQjNCLDBCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FuQlksbUJBQW1COzs7SUFDOUIseUNBQWdEOztJQUNoRCx3Q0FBOEM7O0lBQzlDLDJDQUFvRDs7SUFDcEQsc0NBQW9COztJQUNwQixtQ0FBcUI7Ozs7O0lBRVQsaUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc29jaWFsc1N0YXRlIH0gZnJvbSAnLi4vYW5pbWF0aW9ucy9hbmltYXRpb25zLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1jYXJkLXJldmVhbCcsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1yZXZlYWwuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbc29jaWFsc1N0YXRlXVxufSlcblxuZXhwb3J0IGNsYXNzIENhcmRSZXZlYWxDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCdjYXJkUmV2ZWFsJykgY2FyZFJldmVhbDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY2FyZEZyb250JykgY2FyZEZyb250OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjYXJkT3ZlcmZsb3cnKSBjYXJkT3ZlcmZsb3c6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBzb2NpYWxzOiBhbnk7XG4gIHB1YmxpYyBzaG93OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3I6IFJlbmRlcmVyMikgeyB9XG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xuICAgIHRoaXMuc29jaWFscyA9ICh0aGlzLnNvY2lhbHMgPT09ICdhY3RpdmUnKSA/ICdpbmFjdGl2ZScgOiAnYWN0aXZlJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuY2FyZEZyb250Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB0aGlzLl9yLnNldFN0eWxlKHRoaXMuY2FyZFJldmVhbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLCAnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMuX3Iuc2V0U3R5bGUodGhpcy5jYXJkT3ZlcmZsb3cubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxuICAgIH0sIDApO1xuICB9XG59XG4iXX0=