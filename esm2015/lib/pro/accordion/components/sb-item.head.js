/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { SBItemComponent } from './sb-item';
export class SBItemHeadComponent {
    /**
     * @param {?} sbItem
     */
    constructor(sbItem) {
        this.sbItem = sbItem;
        this.isDisabled = false;
        this.indicator = true;
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
        }
    }
}
SBItemHeadComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemHead',
                selector: 'mdb-item-head, mdb-accordion-item-head',
                template: "<div class=\"card-header {{ customClass }}\" [ngClass]=\"{ 'item-disabled': isDisabled }\" (click)=\"toggleClick($event)\">\n  <a role=\"button\">\n    <h5 class=\"mb-0\">\n    <ng-content></ng-content>\n    <i *ngIf=\"indicator\" class=\"fas fa-angle-down rotate-icon\"></i>\n    </h5>\n  </a>\n</div>\n"
            }] }
];
/** @nocollapse */
SBItemHeadComponent.ctorParameters = () => [
    { type: SBItemComponent }
];
SBItemHeadComponent.propDecorators = {
    isDisabled: [{ type: Input }],
    customClass: [{ type: Input }],
    indicator: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SBItemHeadComponent.prototype.isDisabled;
    /** @type {?} */
    SBItemHeadComponent.prototype.customClass;
    /** @type {?} */
    SBItemHeadComponent.prototype.indicator;
    /**
     * @type {?}
     * @private
     */
    SBItemHeadComponent.prototype.sbItem;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5oZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFPMUMsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUs5QixZQUFvQixNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUpsQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRW5CLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFFb0IsQ0FBQzs7Ozs7SUFFL0MsV0FBVyxDQUFDLEtBQVU7UUFDcEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSx3Q0FBd0M7Z0JBQ2xELDRUQUFnQzthQUNqQzs7OztZQU5PLGVBQWU7Ozt5QkFRcEIsS0FBSzswQkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7SUFGTix5Q0FBNEI7O0lBQzVCLDBDQUE2Qjs7SUFDN0Isd0NBQTBCOzs7OztJQUVkLHFDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NCSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zYi1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc2JJdGVtSGVhZCcsXG4gIHNlbGVjdG9yOiAnbWRiLWl0ZW0taGVhZCwgbWRiLWFjY29yZGlvbi1pdGVtLWhlYWQnLFxuICB0ZW1wbGF0ZVVybDogJ3NiLWl0ZW0uaGVhZC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTQkl0ZW1IZWFkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpbmRpY2F0b3IgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2JJdGVtOiBTQkl0ZW1Db21wb25lbnQpIHt9XG5cbiAgdG9nZ2xlQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2JJdGVtLmNvbGxhcHNlZCA9ICF0aGlzLnNiSXRlbS5jb2xsYXBzZWQ7XG4gICAgICB0aGlzLnNiSXRlbS50b2dnbGUodGhpcy5zYkl0ZW0uY29sbGFwc2VkKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==