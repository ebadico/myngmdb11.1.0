/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, ContentChildren, QueryList } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { RouterLinkWithHref } from '@angular/router';
import { window } from '../../../free/utils/facade/browser';
export class SBItemBodyComponent {
    constructor() {
        this.height = '0';
        this.expandAnimationState = 'collapsed';
        this.id = `mdb-accordion-`;
        this.ariaLabelledBy = '';
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    toggle(collapsed) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            collapsed ? this.expandAnimationState = 'collapsed' : this.expandAnimationState = 'expanded';
        }), 0);
    }
    /**
     * @param {?} activeUrl
     * @return {?}
     */
    openSidenavOnActiveLink(activeUrl) {
        /** @type {?} */
        const activeLink = this.routerLinks.find((/**
         * @param {?} link
         * @return {?}
         */
        (link) => {
            return link.href === activeUrl;
        }));
        if (activeLink) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.expandAnimationState = 'expanded';
            }), 40);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.openSidenavOnActiveLink(window.location.pathname);
    }
}
SBItemBodyComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemBody',
                selector: 'mdb-item-body, mdb-accordion-item-body',
                template: "<div #body class=\"sb-item-body\" [style.height]=\"height\" [@expandBody]=\"expandAnimationState\" [id]=\"id\" role=\"region\" [attr.aria-labelledby]=\"ariaLabelledBy\">\n    <div class=\"card-body {{ customClass }}\">\n    \t<ng-content></ng-content>\n    </div>\n</div>\n",
                animations: [
                    trigger('expandBody', [
                        state('collapsed', style({ height: '0px', visibility: 'hidden' })),
                        state('expanded', style({ height: '*', visibility: 'visible' })),
                        transition('expanded <=> collapsed', animate('500ms ease')),
                    ])
                ]
            }] }
];
/** @nocollapse */
SBItemBodyComponent.ctorParameters = () => [];
SBItemBodyComponent.propDecorators = {
    customClass: [{ type: Input }],
    routerLinks: [{ type: ContentChildren, args: [RouterLinkWithHref,] }],
    bodyEl: [{ type: ViewChild, args: ['body',] }]
};
if (false) {
    /** @type {?} */
    SBItemBodyComponent.prototype.customClass;
    /** @type {?} */
    SBItemBodyComponent.prototype.routerLinks;
    /** @type {?} */
    SBItemBodyComponent.prototype.height;
    /** @type {?} */
    SBItemBodyComponent.prototype.expandAnimationState;
    /** @type {?} */
    SBItemBodyComponent.prototype.id;
    /** @type {?} */
    SBItemBodyComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    SBItemBodyComponent.prototype.bodyEl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFvQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFlNUQsTUFBTSxPQUFPLG1CQUFtQjtJQVk5QjtRQVJPLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDcEIseUJBQW9CLEdBQUcsV0FBVyxDQUFDO1FBRTVCLE9BQUUsR0FBRyxnQkFBZ0IsQ0FBQztRQUM3QixtQkFBYyxHQUFHLEVBQUUsQ0FBQztJQUlMLENBQUM7Ozs7O0lBRWhCLE1BQU0sQ0FBQyxTQUFrQjtRQUN2QixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUM7UUFDL0YsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxTQUFpQjs7Y0FDakMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSTs7OztRQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztRQUNqQyxDQUFDLEVBQUM7UUFDRixJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO1lBQ3pDLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztTQUNSO0lBQ0gsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCw2UkFBZ0M7Z0JBQ2hDLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsWUFBWSxFQUFFO3dCQUNwQixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7d0JBQ2hFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQzt3QkFDOUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDNUQsQ0FBQztpQkFDSDthQUNGOzs7OzswQkFFRSxLQUFLOzBCQUNMLGVBQWUsU0FBQyxrQkFBa0I7cUJBUWxDLFNBQVMsU0FBQyxNQUFNOzs7O0lBVGpCLDBDQUE2Qjs7SUFDN0IsMENBQWdGOztJQUVoRixxQ0FBb0I7O0lBQ3BCLG1EQUFtQzs7SUFFbkMsaUNBQTZCOztJQUM3Qiw2Q0FBb0I7O0lBRXBCLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5cblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc2JJdGVtQm9keScsXG4gIHNlbGVjdG9yOiAnbWRiLWl0ZW0tYm9keSwgbWRiLWFjY29yZGlvbi1pdGVtLWJvZHknLFxuICB0ZW1wbGF0ZVVybDogJ3NiLWl0ZW0uYm9keS5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZEJvZHknLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoe2hlaWdodDogJzBweCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nfSkpLFxuICAgICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoe2hlaWdodDogJyonLCB2aXNpYmlsaXR5OiAndmlzaWJsZSd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnNTAwbXMgZWFzZScpKSxcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZztcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYpIHJvdXRlckxpbmtzOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcblxuICBwdWJsaWMgaGVpZ2h0ID0gJzAnO1xuICBleHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnO1xuXG4gIHB1YmxpYyBpZCA9IGBtZGItYWNjb3JkaW9uLWA7XG4gIGFyaWFMYWJlbGxlZEJ5ID0gJyc7XG5cbiAgQFZpZXdDaGlsZCgnYm9keScpIGJvZHlFbDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgdG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sbGFwc2VkID8gdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnIDogdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgfSwgMCk7XG4gIH1cblxuICBvcGVuU2lkZW5hdk9uQWN0aXZlTGluayhhY3RpdmVVcmw6IHN0cmluZykge1xuICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSB0aGlzLnJvdXRlckxpbmtzLmZpbmQoIChsaW5rOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBsaW5rLmhyZWYgPT09IGFjdGl2ZVVybDtcbiAgICB9KTtcbiAgICBpZiAoYWN0aXZlTGluaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgICAgfSwgNDApO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cblxufVxuIl19