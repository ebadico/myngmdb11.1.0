/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { MdbAccordionService } from '../mdb-accordion.service';
var SBItemComponent = /** @class */ (function () {
    function SBItemComponent(accordionService) {
        this.accordionService = accordionService;
        this.collapsed = true;
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
        this.accordionService.didItemToggled(this);
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
    SBItemComponent.ctorParameters = function () { return [
        { type: MdbAccordionService }
    ]; };
    SBItemComponent.propDecorators = {
        collapsed: [{ type: Input }],
        customClass: [{ type: Input }],
        body: [{ type: ContentChild, args: [SBItemBodyComponent,] }]
    };
    return SBItemComponent;
}());
export { SBItemComponent };
if (false) {
    /** @type {?} */
    SBItemComponent.prototype.collapsed;
    /** @type {?} */
    SBItemComponent.prototype.customClass;
    /** @type {?} */
    SBItemComponent.prototype.body;
    /**
     * @type {?}
     * @private
     */
    SBItemComponent.prototype.accordionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc2ItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUvRDtJQVlFLHlCQUFvQixnQkFBcUM7UUFBckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQUx6QyxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBSzJCLENBQUM7Ozs7SUFFN0QseUNBQWU7OztJQUFmO1FBQUEsaUJBT0M7UUFOQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLFVBQVU7OztZQUFDO2dCQUNULEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztZQUM5RyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsNENBQWtCOzs7SUFBbEI7UUFBQSxpQkFNQztRQUxDLFVBQVU7OztRQUFDO1lBQ1QsSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEtBQUssVUFBVSxFQUFFO2dCQUM5RCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUN4QjtRQUNILENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7Ozs7O0lBRUQsZ0NBQU07Ozs7SUFBTixVQUFPLFNBQWtCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxTQUFrQjtRQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Z0JBekNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsdUpBQTJCO2lCQUM1Qjs7OztnQkFOUSxtQkFBbUI7Ozs0QkFTekIsS0FBSzs4QkFDTCxLQUFLO3VCQUVMLFlBQVksU0FBQyxtQkFBbUI7O0lBZ0NuQyxzQkFBQztDQUFBLEFBMUNELElBMENDO1NBckNZLGVBQWU7OztJQUUxQixvQ0FBaUM7O0lBQ2pDLHNDQUE2Qjs7SUFFN0IsK0JBQTZEOzs7OztJQUVqRCwyQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNCSXRlbUJvZHlDb21wb25lbnQgfSBmcm9tICcuL3NiLWl0ZW0uYm9keSc7XG5pbXBvcnQgeyBNZGJBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vbWRiLWFjY29yZGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc2JJdGVtJyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbSwgbWRiLWFjY29yZGlvbi1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xsYXBzZWQgPSB0cnVlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuXG4gIEBDb250ZW50Q2hpbGQoU0JJdGVtQm9keUNvbXBvbmVudCkgYm9keTogU0JJdGVtQm9keUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY29yZGlvblNlcnZpY2U6IE1kYkFjY29yZGlvblNlcnZpY2UpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmJvZHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID8gdGhpcy5ib2R5LmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCcgOiB0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgICAgfSwgMCk7XG4gICAgICB0aGlzLmJvZHkudG9nZ2xlKHRoaXMuY29sbGFwc2VkKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ib2R5ICYmIHRoaXMuYm9keS5leHBhbmRBbmltYXRpb25TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIDQwKTtcbiAgfVxuXG4gIHRvZ2dsZShjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFjY29yZGlvblNlcnZpY2UuZGlkSXRlbVRvZ2dsZWQodGhpcyk7XG4gICAgdGhpcy5hcHBseVRvZ2dsZShjb2xsYXBzZWQpO1xuICB9XG5cbiAgYXBwbHlUb2dnbGUoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuYm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZCA9IGNvbGxhcHNlZDtcbiAgICAgIHRoaXMuYm9keS50b2dnbGUoY29sbGFwc2VkKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==