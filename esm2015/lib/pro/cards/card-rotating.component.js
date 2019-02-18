/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class CardRotatingComponent {
    constructor() {
        this.rotate = false;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.rotate = !this.rotate;
    }
}
CardRotatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-rotating, mdb-flipping-card',
                template: "<div class=\"flip-container card-wrapper\" [ngClass]=\"{'rotate': rotate}\">\n  <div class=\"flipper card-rotating effect__click tp-box\">\n    <ng-content></ng-content>\n  </div>\n</div>\n"
            }] }
];
if (false) {
    /** @type {?} */
    CardRotatingComponent.prototype.rotate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1yb3RhdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2NhcmRzL2NhcmQtcm90YXRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzFDLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNUyxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBS3hCLENBQUM7Ozs7SUFIQyxNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELHlNQUEyQzthQUM1Qzs7OztJQUdDLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItY2FyZC1yb3RhdGluZywgbWRiLWZsaXBwaW5nLWNhcmQnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtcm90YXRpbmcuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FyZFJvdGF0aW5nQ29tcG9uZW50IHtcbiAgcHVibGljIHJvdGF0ZSA9IGZhbHNlO1xuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLnJvdGF0ZSA9ICF0aGlzLnJvdGF0ZTtcbiAgfVxufVxuIl19