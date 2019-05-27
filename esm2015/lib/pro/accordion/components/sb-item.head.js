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
            this.ariaControls = this.sbItem.body.id;
            this.sbItem.body.ariaLabelledBy = this.id;
        }), 0);
    }
}
SBItemHeadComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemHead',
                selector: 'mdb-item-head, mdb-accordion-item-head',
                template: "<div class=\"card-header {{ customClass }}\" [ngClass]=\"{ 'item-disabled': isDisabled }\" (click)=\"toggleClick($event)\" [id]=\"id\">\n  <a role=\"button\" href=\"\" [attr.aria-expanded]=\"ariaExpanded\" [attr.aria-controls]=\"ariaControls\">\n    <h5 class=\"mb-0 d-flex justify-content-between align-items-center\">\n    <ng-content></ng-content>\n    <i *ngIf=\"indicator\" class=\"mdb-accordion-indicator rotate-icon\" aria-hidden=\"true\"></i>\n    </h5>\n  </a>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5oZWFkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmhlYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQU8xQyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBUzlCLFlBQW9CLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBUmxDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFFLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0IsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFHaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxzQkFBc0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVvQyxTQUFTLENBQUMsS0FBb0I7UUFDakUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBVTtRQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM1QyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCwyZUFBZ0M7YUFDakM7Ozs7WUFOTyxlQUFlOzs7eUJBUXBCLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQVVMLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFabkMseUNBQTRCOztJQUM1QiwwQ0FBNkI7O0lBQzdCLHdDQUEwQjs7SUFFMUIsaUNBQTZCOztJQUM3QiwyQ0FBcUI7O0lBQ3JCLDJDQUFrQjs7Ozs7SUFFTixxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1NCSXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zYi1pdGVtJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc2JJdGVtSGVhZCcsXG4gIHNlbGVjdG9yOiAnbWRiLWl0ZW0taGVhZCwgbWRiLWFjY29yZGlvbi1pdGVtLWhlYWQnLFxuICB0ZW1wbGF0ZVVybDogJ3NiLWl0ZW0uaGVhZC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTQkl0ZW1IZWFkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdHtcbiAgQElucHV0KCkgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpbmRpY2F0b3IgPSB0cnVlO1xuXG4gIHB1YmxpYyBpZCA9IGBtZGItYWNjb3JkaW9uLWA7XG4gIGFyaWFFeHBhbmRlZCA9IGZhbHNlO1xuICBhcmlhQ29udHJvbHMgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNiSXRlbTogU0JJdGVtQ29tcG9uZW50KSB7XG4gICAgdGhpcy5pZCA9IGBtZGItYWNjb3JkaW9uLWhlYWQtJHt0aGlzLnNiSXRlbS5pZE1vZGlmaWVyfWA7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICB0aGlzLnRvZ2dsZUNsaWNrKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVDbGljayhldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5zYkl0ZW0uY29sbGFwc2VkID0gIXRoaXMuc2JJdGVtLmNvbGxhcHNlZDtcbiAgICAgIHRoaXMuc2JJdGVtLnRvZ2dsZSh0aGlzLnNiSXRlbS5jb2xsYXBzZWQpO1xuICAgICAgdGhpcy5hcmlhRXhwYW5kZWQgPSAhdGhpcy5hcmlhRXhwYW5kZWQ7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hcmlhQ29udHJvbHMgPSB0aGlzLnNiSXRlbS5ib2R5LmlkO1xuICAgICAgdGhpcy5zYkl0ZW0uYm9keS5hcmlhTGFiZWxsZWRCeSA9IHRoaXMuaWQ7XG4gICAgfSwgMCk7XG4gIH1cbn1cbiJdfQ==