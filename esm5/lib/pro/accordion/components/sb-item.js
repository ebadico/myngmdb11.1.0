/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { sbConfig } from './sb.config';
var SBItemComponent = /** @class */ (function () {
    function SBItemComponent() {
        this.collapsed = true;
        this.squeezebox = sbConfig.serviceInstance;
    }
    /**
     * @return {?}
     */
    SBItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.body !== undefined) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.collapsed ? _this.body.expandAnimationState = 'collapsed' : _this.body.expandAnimationState = 'expanded';
            }), 0);
            this.body.toggle(this.collapsed);
        }
    };
    /**
     * @return {?}
     */
    SBItemComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.body && _this.body.expandAnimationState === 'expanded') {
                _this.collapsed = false;
            }
        }), 40);
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemComponent.prototype.toggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        this.squeezebox.didItemToggled(this);
        this.applyToggle(collapsed);
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemComponent.prototype.applyToggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        if (this.body !== undefined) {
            this.collapsed = collapsed;
            this.body.toggle(collapsed);
        }
    };
    SBItemComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItem',
                    selector: 'mdb-item, mdb-accordion-item',
                    template: "<div class=\"card {{ customClass }}\" [ngClass]=\"{'is-collapsed': collapsed, 'active': !collapsed}\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    SBItemComponent.ctorParameters = function () { return []; };
    SBItemComponent.propDecorators = {
        collapsed: [{ type: Input }],
        customClass: [{ type: Input }],
        body: [{ type: ContentChild, args: [SBItemBodyComponent,] }]
    };
    return SBItemComponent;
}());
export { SBItemComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SBItemComponent.prototype.squeezebox;
    /** @type {?} */
    SBItemComponent.prototype.collapsed;
    /** @type {?} */
    SBItemComponent.prototype.customClass;
    /** @type {?} */
    SBItemComponent.prototype.body;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc2ItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDO0lBY0U7UUFMZ0IsY0FBUyxHQUFHLElBQUksQ0FBQztRQU0vQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELHlDQUFlOzs7SUFBZjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUM7WUFDOUcsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7OztJQUVELDRDQUFrQjs7O0lBQWxCO1FBQUEsaUJBTUM7UUFMQyxVQUFVOzs7UUFBQztZQUNULElBQUksS0FBSSxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixLQUFLLFVBQVUsRUFBRTtnQkFDOUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDOzs7OztJQUVELGdDQUFNOzs7O0lBQU4sVUFBTyxTQUFrQjtRQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLFNBQWtCO1FBQzVCLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0I7SUFDSCxDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsOEJBQThCO29CQUN4Qyx1SkFBMkI7aUJBQzVCOzs7Ozs0QkFLRSxLQUFLOzhCQUNMLEtBQUs7dUJBRUwsWUFBWSxTQUFDLG1CQUFtQjs7SUFrQ25DLHNCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0F6Q1ksZUFBZTs7Ozs7O0lBRTFCLHFDQUF3Qjs7SUFFeEIsb0NBQWlDOztJQUNqQyxzQ0FBNkI7O0lBRTdCLCtCQUE2RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkLCBJbnB1dCwgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU0JJdGVtQm9keUNvbXBvbmVudCB9IGZyb20gJy4vc2ItaXRlbS5ib2R5JztcbmltcG9ydCB7IHNiQ29uZmlnIH0gZnJvbSAnLi9zYi5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW0nLFxuICBzZWxlY3RvcjogJ21kYi1pdGVtLCBtZGItYWNjb3JkaW9uLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJ3NiLWl0ZW0uaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgcHJpdmF0ZSBzcXVlZXplYm94OiBhbnk7XG5cbiAgQElucHV0KCkgcHVibGljIGNvbGxhcHNlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG5cbiAgQENvbnRlbnRDaGlsZChTQkl0ZW1Cb2R5Q29tcG9uZW50KSBib2R5OiBTQkl0ZW1Cb2R5Q29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc3F1ZWV6ZWJveCA9IHNiQ29uZmlnLnNlcnZpY2VJbnN0YW5jZTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5ib2R5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA/IHRoaXMuYm9keS5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnIDogdGhpcy5ib2R5LmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJztcbiAgICAgIH0sIDApO1xuICAgICAgdGhpcy5ib2R5LnRvZ2dsZSh0aGlzLmNvbGxhcHNlZCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYm9keSAmJiB0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPT09ICdleHBhbmRlZCcpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCA0MCk7XG4gIH1cblxuICB0b2dnbGUoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5zcXVlZXplYm94LmRpZEl0ZW1Ub2dnbGVkKHRoaXMpO1xuICAgIHRoaXMuYXBwbHlUb2dnbGUoY29sbGFwc2VkKTtcbiAgfVxuXG4gIGFwcGx5VG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmJvZHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jb2xsYXBzZWQgPSBjb2xsYXBzZWQ7XG4gICAgICB0aGlzLmJvZHkudG9nZ2xlKGNvbGxhcHNlZCk7XG4gICAgfVxuICB9XG59XG4iXX0=