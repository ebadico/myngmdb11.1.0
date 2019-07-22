/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input, ChangeDetectorRef, } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { MdbAccordionService } from '../mdb-accordion.service';
var SBItemComponent = /** @class */ (function () {
    function SBItemComponent(accordionService, _cdRef) {
        this.accordionService = accordionService;
        this._cdRef = _cdRef;
        this.collapsed = true;
        this.idModifier = Math.floor(Math.random() * 1000);
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
                _this.collapsed
                    ? (_this.body.expandAnimationState = 'collapsed')
                    : (_this.body.expandAnimationState = 'expanded');
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
        if (this.body) {
            this.body.id = "mdb-accordion-body-" + this.idModifier;
        }
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
            this._cdRef.markForCheck();
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
        { type: MdbAccordionService },
        { type: ChangeDetectorRef }
    ]; };
    SBItemComponent.propDecorators = {
        collapsed: [{ type: Input }],
        customClass: [{ type: Input }],
        body: [{ type: ContentChild, args: [SBItemBodyComponent, { static: false },] }]
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
    SBItemComponent.prototype.idModifier;
    /** @type {?} */
    SBItemComponent.prototype.body;
    /**
     * @type {?}
     * @private
     */
    SBItemComponent.prototype.accordionService;
    /**
     * @type {?}
     * @private
     */
    SBItemComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc2ItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUvRDtJQWFFLHlCQUFvQixnQkFBcUMsRUFBVSxNQUF5QjtRQUF4RSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXFCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFQNUUsY0FBUyxHQUFHLElBQUksQ0FBQztRQUcxQixlQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFJMEMsQ0FBQzs7OztJQUVoRyx5Q0FBZTs7O0lBQWY7UUFBQSxpQkFTQztRQVJDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsVUFBVTs7O1lBQUM7Z0JBQ1QsS0FBSSxDQUFDLFNBQVM7b0JBQ1osQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7b0JBQ2hELENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7OztJQUVELDRDQUFrQjs7O0lBQWxCO1FBQUEsaUJBU0M7UUFSQyxVQUFVOzs7UUFBQztZQUNULElBQUksS0FBSSxDQUFDLElBQUksSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixLQUFLLFVBQVUsRUFBRTtnQkFDOUQsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyx3QkFBc0IsSUFBSSxDQUFDLFVBQVksQ0FBQztTQUN4RDtJQUNILENBQUM7Ozs7O0lBRUQsZ0NBQU07Ozs7SUFBTixVQUFPLFNBQWtCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxTQUFrQjtRQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixRQUFRLEVBQUUsOEJBQThCO29CQUN4Qyx1SkFBMkI7aUJBQzVCOzs7O2dCQU5RLG1CQUFtQjtnQkFIMUIsaUJBQWlCOzs7NEJBV2hCLEtBQUs7OEJBQ0wsS0FBSzt1QkFJTCxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQXNDdEQsc0JBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTVDWSxlQUFlOzs7SUFDMUIsb0NBQWlDOztJQUNqQyxzQ0FBNkI7O0lBRTdCLHFDQUFxRDs7SUFFckQsK0JBQWdGOzs7OztJQUVwRSwyQ0FBNkM7Ozs7O0lBQUUsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIElucHV0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTQkl0ZW1Cb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9zYi1pdGVtLmJvZHknO1xuaW1wb3J0IHsgTWRiQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uL21kYi1hY2NvcmRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbScsXG4gIHNlbGVjdG9yOiAnbWRiLWl0ZW0sIG1kYi1hY2NvcmRpb24taXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xsYXBzZWQgPSB0cnVlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuXG4gIHB1YmxpYyBpZE1vZGlmaWVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG5cbiAgQENvbnRlbnRDaGlsZChTQkl0ZW1Cb2R5Q29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgYm9keTogU0JJdGVtQm9keUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY29yZGlvblNlcnZpY2U6IE1kYkFjY29yZGlvblNlcnZpY2UsIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuYm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRcbiAgICAgICAgICA/ICh0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJylcbiAgICAgICAgICA6ICh0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnKTtcbiAgICAgIH0sIDApO1xuICAgICAgdGhpcy5ib2R5LnRvZ2dsZSh0aGlzLmNvbGxhcHNlZCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYm9keSAmJiB0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPT09ICdleHBhbmRlZCcpIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCA0MCk7XG4gICAgaWYgKHRoaXMuYm9keSkge1xuICAgICAgdGhpcy5ib2R5LmlkID0gYG1kYi1hY2NvcmRpb24tYm9keS0ke3RoaXMuaWRNb2RpZmllcn1gO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZShjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFjY29yZGlvblNlcnZpY2UuZGlkSXRlbVRvZ2dsZWQodGhpcyk7XG4gICAgdGhpcy5hcHBseVRvZ2dsZShjb2xsYXBzZWQpO1xuICB9XG5cbiAgYXBwbHlUb2dnbGUoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuYm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvbGxhcHNlZCA9IGNvbGxhcHNlZDtcbiAgICAgIHRoaXMuYm9keS50b2dnbGUoY29sbGFwc2VkKTtcbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxufVxuIl19