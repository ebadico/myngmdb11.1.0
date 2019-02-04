/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild, Input } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { sbConfig } from './sb.config';
export class SBItemComponent {
    constructor() {
        this.collapsed = true;
        this.squeezebox = sbConfig.serviceInstance;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.body !== undefined) {
            setTimeout(() => {
                this.collapsed ? this.body.expandAnimationState = 'collapsed' : this.body.expandAnimationState = 'expanded';
            }, 0);
            this.body.toggle(this.collapsed);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        setTimeout(() => {
            if (this.body && this.body.expandAnimationState === 'expanded') {
                this.collapsed = false;
            }
        }, 40);
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    toggle(collapsed) {
        this.squeezebox.didItemToggled(this);
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
SBItemComponent.ctorParameters = () => [];
SBItemComponent.propDecorators = {
    collapsed: [{ type: Input }],
    customClass: [{ type: Input }],
    body: [{ type: ContentChild, args: [SBItemBodyComponent,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc2ItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBT3ZDLE1BQU0sT0FBTyxlQUFlO0lBUzFCO1FBTGdCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFNL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztZQUM5RyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxVQUFVLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3hCO1FBQ0gsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsU0FBa0I7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxTQUFrQjtRQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsdUpBQTJCO2FBQzVCOzs7Ozt3QkFLRSxLQUFLOzBCQUNMLEtBQUs7bUJBRUwsWUFBWSxTQUFDLG1CQUFtQjs7Ozs7OztJQUxqQyxxQ0FBd0I7O0lBRXhCLG9DQUFpQzs7SUFDakMsc0NBQTZCOztJQUU3QiwrQkFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIEFmdGVyQ29udGVudEluaXQsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNCSXRlbUJvZHlDb21wb25lbnQgfSBmcm9tICcuL3NiLWl0ZW0uYm9keSc7XG5pbXBvcnQgeyBzYkNvbmZpZyB9IGZyb20gJy4vc2IuY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc2JJdGVtJyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbSwgbWRiLWFjY29yZGlvbi1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIEFmdGVyQ29udGVudEluaXQge1xuXG4gIHByaXZhdGUgc3F1ZWV6ZWJveDogYW55O1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBjb2xsYXBzZWQgPSB0cnVlO1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuXG4gIEBDb250ZW50Q2hpbGQoU0JJdGVtQm9keUNvbXBvbmVudCkgYm9keTogU0JJdGVtQm9keUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNxdWVlemVib3ggPSBzYkNvbmZpZy5zZXJ2aWNlSW5zdGFuY2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuYm9keSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPyB0aGlzLmJvZHkuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJyA6IHRoaXMuYm9keS5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgICB9LCAwKTtcbiAgICAgIHRoaXMuYm9keS50b2dnbGUodGhpcy5jb2xsYXBzZWQpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJvZHkgJiYgdGhpcy5ib2R5LmV4cGFuZEFuaW1hdGlvblN0YXRlID09PSAnZXhwYW5kZWQnKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSwgNDApO1xuICB9XG5cbiAgdG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuc3F1ZWV6ZWJveC5kaWRJdGVtVG9nZ2xlZCh0aGlzKTtcbiAgICB0aGlzLmFwcGx5VG9nZ2xlKGNvbGxhcHNlZCk7XG4gIH1cblxuICBhcHBseVRvZ2dsZShjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5ib2R5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY29sbGFwc2VkID0gY29sbGFwc2VkO1xuICAgICAgdGhpcy5ib2R5LnRvZ2dsZShjb2xsYXBzZWQpO1xuICAgIH1cbiAgfVxufVxuIl19