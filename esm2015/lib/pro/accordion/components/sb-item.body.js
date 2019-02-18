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
                template: "<div #body class=\"sb-item-body\" [style.height]=\"height\" [@expandBody]=\"expandAnimationState\">\n    <div class=\"card-body {{ customClass }}\">\n    \t<ng-content></ng-content>\n    </div>\n</div>",
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
    SBItemBodyComponent.prototype.bodyEl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFvQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFlNUQsTUFBTSxPQUFPLG1CQUFtQjtJQVM5QjtRQUxPLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFDcEIseUJBQW9CLEdBQUcsV0FBVyxDQUFDO0lBSXBCLENBQUM7Ozs7O0lBRWhCLE1BQU0sQ0FBQyxTQUFrQjtRQUN2QixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUM7UUFDL0YsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCx1QkFBdUIsQ0FBQyxTQUFpQjs7Y0FDakMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSTs7OztRQUFFLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDdEQsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztRQUNqQyxDQUFDLEVBQUM7UUFDRixJQUFJLFVBQVUsRUFBRTtZQUNkLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO1lBQ3pDLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztTQUNSO0lBQ0gsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsd0NBQXdDO2dCQUNsRCxxTkFBZ0M7Z0JBQ2hDLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsWUFBWSxFQUFFO3dCQUNwQixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7d0JBQ2hFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQzt3QkFDOUQsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztxQkFDNUQsQ0FBQztpQkFDSDthQUNGOzs7OzswQkFFRSxLQUFLOzBCQUNMLGVBQWUsU0FBQyxrQkFBa0I7cUJBS2xDLFNBQVMsU0FBQyxNQUFNOzs7O0lBTmpCLDBDQUE2Qjs7SUFDN0IsMENBQWdGOztJQUVoRixxQ0FBb0I7O0lBQ3BCLG1EQUFtQzs7SUFFbkMscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgQWZ0ZXJDb250ZW50SW5pdCwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzdGF0ZSwgc3R5bGUsIHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFJvdXRlckxpbmtXaXRoSHJlZiB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuLi8uLi8uLi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcblxuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW1Cb2R5JyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbS1ib2R5LCBtZGItYWNjb3JkaW9uLWl0ZW0tYm9keScsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5ib2R5Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZXhwYW5kQm9keScsIFtcbiAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgdmlzaWJpbGl0eTogJ2hpZGRlbid9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJ30pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCc1MDBtcyBlYXNlJykpLFxuICAgIF0pXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmtXaXRoSHJlZikgcm91dGVyTGlua3M6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rV2l0aEhyZWY+O1xuXG4gIHB1YmxpYyBoZWlnaHQgPSAnMCc7XG4gIGV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCc7XG5cbiAgQFZpZXdDaGlsZCgnYm9keScpIGJvZHlFbDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgdG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sbGFwc2VkID8gdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnIDogdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgfSwgMCk7XG4gIH1cblxuICBvcGVuU2lkZW5hdk9uQWN0aXZlTGluayhhY3RpdmVVcmw6IHN0cmluZykge1xuICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSB0aGlzLnJvdXRlckxpbmtzLmZpbmQoIChsaW5rOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBsaW5rLmhyZWYgPT09IGFjdGl2ZVVybDtcbiAgICB9KTtcbiAgICBpZiAoYWN0aXZlTGluaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgICAgfSwgNDApO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cblxufVxuIl19