/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { MdbAccordionService } from '../mdb-accordion.service';
export class SBItemComponent {
    /**
     * @param {?} accordionService
     */
    constructor(accordionService) {
        this.accordionService = accordionService;
        this.collapsed = true;
        this.idModifier = Math.floor(Math.random() * 1000);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.body !== undefined) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.collapsed ? this.body.expandAnimationState = 'collapsed' : this.body.expandAnimationState = 'expanded';
            }), 0);
            this.body.toggle(this.collapsed);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.body && this.body.expandAnimationState === 'expanded') {
                this.collapsed = false;
            }
        }), 40);
        this.body.id = `mdb-accordion-body-${this.idModifier}`;
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    toggle(collapsed) {
        this.accordionService.didItemToggled(this);
        this.applyToggle(collapsed);
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    applyToggle(collapsed) {
        if (this.body !== undefined) {
            this.collapsed = collapsed;
            this.body.toggle(collapsed);
        }
    }
}
SBItemComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItem',
                selector: 'mdb-item, mdb-accordion-item',
                template: "<div class=\"card {{ customClass }}\" [ngClass]=\"{'is-collapsed': collapsed, 'active': !collapsed}\">\n  <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
SBItemComponent.ctorParameters = () => [
    { type: MdbAccordionService }
];
SBItemComponent.propDecorators = {
    collapsed: [{ type: Input }],
    customClass: [{ type: Input }],
    body: [{ type: ContentChild, args: [SBItemBodyComponent,] }]
};
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc2ItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQU8vRCxNQUFNLE9BQU8sZUFBZTs7OztJQVMxQixZQUFvQixnQkFBcUM7UUFBckMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQVB6QyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRzFCLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUlPLENBQUM7Ozs7SUFFN0QsZUFBZTtRQUNiLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDM0IsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztZQUM5RyxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixLQUFLLFVBQVUsRUFBRTtnQkFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxzQkFBc0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFNBQWtCO1FBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxTQUFrQjtRQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsdUpBQTJCO2FBQzVCOzs7O1lBTlEsbUJBQW1COzs7d0JBU3pCLEtBQUs7MEJBQ0wsS0FBSzttQkFJTCxZQUFZLFNBQUMsbUJBQW1COzs7O0lBTGpDLG9DQUFpQzs7SUFDakMsc0NBQTZCOztJQUU3QixxQ0FBcUQ7O0lBRXJELCtCQUE2RDs7Ozs7SUFFakQsMkNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIElucHV0LCBBZnRlckNvbnRlbnRJbml0LCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTQkl0ZW1Cb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9zYi1pdGVtLmJvZHknO1xuaW1wb3J0IHsgTWRiQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uL21kYi1hY2NvcmRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbScsXG4gIHNlbGVjdG9yOiAnbWRiLWl0ZW0sIG1kYi1hY2NvcmRpb24taXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTQkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICBASW5wdXQoKSBwdWJsaWMgY29sbGFwc2VkID0gdHJ1ZTtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZztcblxuICBwdWJsaWMgaWRNb2RpZmllciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApO1xuXG4gIEBDb250ZW50Q2hpbGQoU0JJdGVtQm9keUNvbXBvbmVudCkgYm9keTogU0JJdGVtQm9keUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY29yZGlvblNlcnZpY2U6IE1kYkFjY29yZGlvblNlcnZpY2UpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLmJvZHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID8gdGhpcy5ib2R5LmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCcgOiB0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgICAgfSwgMCk7XG4gICAgICB0aGlzLmJvZHkudG9nZ2xlKHRoaXMuY29sbGFwc2VkKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ib2R5ICYmIHRoaXMuYm9keS5leHBhbmRBbmltYXRpb25TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIDQwKTtcbiAgICB0aGlzLmJvZHkuaWQgPSBgbWRiLWFjY29yZGlvbi1ib2R5LSR7dGhpcy5pZE1vZGlmaWVyfWA7XG4gIH1cblxuICB0b2dnbGUoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgdGhpcy5hY2NvcmRpb25TZXJ2aWNlLmRpZEl0ZW1Ub2dnbGVkKHRoaXMpO1xuICAgIHRoaXMuYXBwbHlUb2dnbGUoY29sbGFwc2VkKTtcbiAgfVxuXG4gIGFwcGx5VG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLmJvZHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jb2xsYXBzZWQgPSBjb2xsYXBzZWQ7XG4gICAgICB0aGlzLmJvZHkudG9nZ2xlKGNvbGxhcHNlZCk7XG4gICAgfVxuICB9XG59XG4iXX0=