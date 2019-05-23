/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Input } from '@angular/core';
import { SBItemComponent } from './sb-item';
export class SBItemHeadComponent {
    /**
     * @param {?} sbItem
     */
    constructor(sbItem) {
        this.sbItem = sbItem;
        this.isDisabled = false;
        this.indicator = true;
        this.id = `mdb-accordion-`;
        this.ariaExpanded = false;
        this.ariaControls = '';
        this.id = `mdb-accordion-head-${this.sbItem.idModifier}`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (event.keyCode === 32) {
            this.toggleClick(event);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleClick(event) {
        event.preventDefault();
        if (!this.isDisabled) {
            this.sbItem.collapsed = !this.sbItem.collapsed;
            this.sbItem.toggle(this.sbItem.collapsed);
            this.ariaExpanded = !this.ariaExpanded;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.sbItem.body) {
                this.ariaControls = this.sbItem.body.id;
                this.sbItem.body.ariaLabelledBy = this.id;
            }
        }), 0);
    }
}
SBItemHeadComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemHead',
                selector: 'mdb-item-head, mdb-accordion-item-head',
                template: "<div class=\"card-header {{ customClass }}\" [ngClass]=\"{ 'item-disabled': isDisabled }\" (click)=\"toggleClick($event)\"\n     [id]=\"id\">\n  <a role=\"button\" href=\"javascript:;\" [attr.aria-expanded]=\"ariaExpanded\"\n     [attr.aria-controls]=\"ariaControls\">\n    <h5 class=\"mb-0 d-flex justify-content-between align-items-center\">\n      <span class=\"d-flex align-self-start align-items-center\">\n        <ng-content></ng-content>\n      </span>\n      <i *ngIf=\"indicator\" class=\"mdb-accordion-indicator rotate-icon\" aria-hidden=\"true\"></i>\n    </h5>\n  </a>\n</div>\n"
            }] }
];
/** @nocollapse */
SBItemHeadComponent.ctorParameters = () => [
    { type: SBItemComponent }
];
SBItemHeadComponent.propDecorators = {
    isDisabled: [{ type: Input }],
    customClass: [{ type: Input }],
    indicator: [{ type: Input }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    SBItemHeadComponent.prototype.isDisabled;
    /** @type {?} */
    SBItemHeadComponent.prototype.customClass;
    /** @type {?} */
    SBItemHeadComponent.prototype.indicator;
    /** @type {?} */
    SBItemHeadComponent.prototype.id;
    /** @type {?} */
    SBItemHeadComponent.prototype.ariaExpanded;
    /** @type {?} */
    SBItemHeadComponent.prototype.ariaControls;
    /**
     * @type {?}
     * @private
     */
    SBItemHeadComponent.prototype.sbItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5oZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQU8xQyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBUzlCLFlBQW9CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBUmxDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFFLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFHaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxzQkFBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVvQyxTQUFTLENBQUMsS0FBb0I7UUFDakUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBVTtRQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDM0M7UUFDSCxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCwybEJBQWdDO2FBQ2pDOzs7O1lBTk8sZUFBZTs7O3lCQVFwQixLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFVTCxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBWm5DLHlDQUE0Qjs7SUFDNUIsMENBQTZCOztJQUM3Qix3Q0FBMEI7O0lBRTFCLGlDQUE2Qjs7SUFDN0IsMkNBQXFCOztJQUNyQiwyQ0FBa0I7Ozs7O0lBRU4scUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTQkl0ZW1Db21wb25lbnR9IGZyb20gJy4vc2ItaXRlbSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbUhlYWQnLFxuICBzZWxlY3RvcjogJ21kYi1pdGVtLWhlYWQsIG1kYi1hY2NvcmRpb24taXRlbS1oZWFkJyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmhlYWQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtSGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXR7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaW5kaWNhdG9yID0gdHJ1ZTtcblxuICBwdWJsaWMgaWQgPSBgbWRiLWFjY29yZGlvbi1gO1xuICBhcmlhRXhwYW5kZWQgPSBmYWxzZTtcbiAgYXJpYUNvbnRyb2xzID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYkl0ZW06IFNCSXRlbUNvbXBvbmVudCkge1xuICAgIHRoaXMuaWQgPSBgbWRiLWFjY29yZGlvbi1oZWFkLSR7dGhpcy5zYkl0ZW0uaWRNb2RpZmllcn1gO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgdGhpcy50b2dnbGVDbGljayhldmVudCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2JJdGVtLmNvbGxhcHNlZCA9ICF0aGlzLnNiSXRlbS5jb2xsYXBzZWQ7XG4gICAgICB0aGlzLnNiSXRlbS50b2dnbGUodGhpcy5zYkl0ZW0uY29sbGFwc2VkKTtcbiAgICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gIXRoaXMuYXJpYUV4cGFuZGVkO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnNiSXRlbS5ib2R5KSB7XG4gICAgICAgIHRoaXMuYXJpYUNvbnRyb2xzID0gdGhpcy5zYkl0ZW0uYm9keS5pZDtcbiAgICAgICAgdGhpcy5zYkl0ZW0uYm9keS5hcmlhTGFiZWxsZWRCeSA9IHRoaXMuaWQ7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==