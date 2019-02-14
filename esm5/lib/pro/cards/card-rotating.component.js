/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var CardRotatingComponent = /** @class */ (function () {
    function CardRotatingComponent() {
        this.rotate = false;
    }
    /**
     * @return {?}
     */
    CardRotatingComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.rotate = !this.rotate;
    };
    CardRotatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-card-rotating, mdb-flipping-card',
                    template: "<div class=\"flip-container card-wrapper\" [ngClass]=\"{'rotate': rotate}\">\n  <div class=\"flipper card-rotating effect__click tp-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
                }] }
    ];
    return CardRotatingComponent;
}());
export { CardRotatingComponent };
if (false) {
    /** @type {?} */
    CardRotatingComponent.prototype.rotate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yb3RhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2NhcmRzL2NhcmQtcm90YXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDO0lBQUE7UUFNUyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBS3hCLENBQUM7Ozs7SUFIQyxzQ0FBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQseU1BQTJDO2lCQUM1Qzs7SUFRRCw0QkFBQztDQUFBLEFBWEQsSUFXQztTQU5ZLHFCQUFxQjs7O0lBQ2hDLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItY2FyZC1yb3RhdGluZywgbWRiLWZsaXBwaW5nLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtcm90YXRpbmcuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FyZFJvdGF0aW5nQ29tcG9uZW50IHtcbiAgcHVibGljIHJvdGF0ZSA9IGZhbHNlO1xuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnJvdGF0ZSA9ICF0aGlzLnJvdGF0ZTtcbiAgfVxufVxuIl19