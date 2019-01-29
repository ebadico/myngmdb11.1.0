/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            setTimeout(function () {
                _this.collapsed ? _this.body.expandAnimationState = 'collapsed' : _this.body.expandAnimationState = 'expanded';
            }, 0);
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
        setTimeout(function () {
            if (_this.body && _this.body.expandAnimationState === 'expanded') {
                _this.collapsed = false;
            }
        }, 40);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc2ItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXZDO0lBY0U7UUFMZ0IsY0FBUyxHQUFHLElBQUksQ0FBQztRQU0vQixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVELHlDQUFlOzs7SUFBZjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO1lBQzlHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7SUFFRCw0Q0FBa0I7OztJQUFsQjtRQUFBLGlCQU1DO1FBTEMsVUFBVSxDQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEtBQUssVUFBVSxFQUFFO2dCQUM5RCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7Ozs7O0lBRUQsZ0NBQU07Ozs7SUFBTixVQUFPLFNBQWtCO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxxQ0FBVzs7OztJQUFYLFVBQVksU0FBa0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM3QjtJQUNILENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLHVKQUEyQjtpQkFDNUI7Ozs7OzRCQUtFLEtBQUs7OEJBQ0wsS0FBSzt1QkFFTCxZQUFZLFNBQUMsbUJBQW1COztJQWtDbkMsc0JBQUM7Q0FBQSxBQTlDRCxJQThDQztTQXpDWSxlQUFlOzs7Ozs7SUFFMUIscUNBQXdCOztJQUV4QixvQ0FBaUM7O0lBQ2pDLHNDQUE2Qjs7SUFFN0IsK0JBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTQkl0ZW1Cb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9zYi1pdGVtLmJvZHknO1xuaW1wb3J0IHsgc2JDb25maWcgfSBmcm9tICcuL3NiLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbScsXG4gIHNlbGVjdG9yOiAnbWRiLWl0ZW0sIG1kYi1hY2NvcmRpb24taXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTQkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICBwcml2YXRlIHNxdWVlemVib3g6IGFueTtcblxuICBASW5wdXQoKSBwdWJsaWMgY29sbGFwc2VkID0gdHJ1ZTtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZztcblxuICBAQ29udGVudENoaWxkKFNCSXRlbUJvZHlDb21wb25lbnQpIGJvZHk6IFNCSXRlbUJvZHlDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zcXVlZXplYm94ID0gc2JDb25maWcuc2VydmljZUluc3RhbmNlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmJvZHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID8gdGhpcy5ib2R5LmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCcgOiB0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgICAgfSwgMCk7XG4gICAgICB0aGlzLmJvZHkudG9nZ2xlKHRoaXMuY29sbGFwc2VkKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ib2R5ICYmIHRoaXMuYm9keS5leHBhbmRBbmltYXRpb25TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIDQwKTtcbiAgfVxuXG4gIHRvZ2dsZShjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNxdWVlemVib3guZGlkSXRlbVRvZ2dsZWQodGhpcyk7XG4gICAgdGhpcy5hcHBseVRvZ2dsZShjb2xsYXBzZWQpO1xuICB9XG5cbiAgYXBwbHlUb2dnbGUoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuYm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZCA9IGNvbGxhcHNlZDtcbiAgICAgIHRoaXMuYm9keS50b2dnbGUoY29sbGFwc2VkKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==