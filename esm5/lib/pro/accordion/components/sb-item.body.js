/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, ContentChildren, QueryList } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { RouterLinkWithHref } from '@angular/router';
import { window } from '../../../free/utils/facade/browser';
var SBItemBodyComponent = /** @class */ (function () {
    function SBItemBodyComponent() {
        this.height = '0';
        this.expandAnimationState = 'collapsed';
        this.id = "mdb-accordion-";
        this.ariaLabelledBy = '';
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemBodyComponent.prototype.toggle = /**
     * @param {?} collapsed
     * @return {?}
     */
    function (collapsed) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            collapsed ? _this.expandAnimationState = 'collapsed' : _this.expandAnimationState = 'expanded';
        }), 0);
    };
    /**
     * @param {?} activeUrl
     * @return {?}
     */
    SBItemBodyComponent.prototype.openSidenavOnActiveLink = /**
     * @param {?} activeUrl
     * @return {?}
     */
    function (activeUrl) {
        var _this = this;
        /** @type {?} */
        var activeLink = this.routerLinks.find((/**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            return link.href === activeUrl;
        }));
        if (activeLink) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.expandAnimationState = 'expanded';
            }), 40);
        }
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.openSidenavOnActiveLink(window.location.pathname);
    };
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
    SBItemBodyComponent.ctorParameters = function () { return []; };
    SBItemBodyComponent.propDecorators = {
        customClass: [{ type: Input }],
        routerLinks: [{ type: ContentChildren, args: [RouterLinkWithHref,] }],
        bodyEl: [{ type: ViewChild, args: ['body',] }]
    };
    return SBItemBodyComponent;
}());
export { SBItemBodyComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFvQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckgsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHNUQ7SUF3QkU7UUFSTyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLHlCQUFvQixHQUFHLFdBQVcsQ0FBQztRQUU1QixPQUFFLEdBQUcsZ0JBQWdCLENBQUM7UUFDN0IsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFJTCxDQUFDOzs7OztJQUVoQixvQ0FBTTs7OztJQUFOLFVBQU8sU0FBa0I7UUFBekIsaUJBSUM7UUFIQyxVQUFVOzs7UUFBQztZQUNULFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLG9CQUFvQixHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztRQUMvRixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7OztJQUVELHFEQUF1Qjs7OztJQUF2QixVQUF3QixTQUFpQjtRQUF6QyxpQkFTQzs7WUFSTyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJOzs7O1FBQUUsVUFBQyxJQUFTO1lBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUM7UUFDakMsQ0FBQyxFQUFDO1FBQ0YsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO1lBQ3pDLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztTQUNSO0lBQ0gsQ0FBQzs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsNlJBQWdDO29CQUNoQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFlBQVksRUFBRTs0QkFDcEIsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDOzRCQUNoRSxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7NEJBQzlELFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7eUJBQzVELENBQUM7cUJBQ0g7aUJBQ0Y7Ozs7OzhCQUVFLEtBQUs7OEJBQ0wsZUFBZSxTQUFDLGtCQUFrQjt5QkFRbEMsU0FBUyxTQUFDLE1BQU07O0lBeUJuQiwwQkFBQztDQUFBLEFBL0NELElBK0NDO1NBbkNZLG1CQUFtQjs7O0lBQzlCLDBDQUE2Qjs7SUFDN0IsMENBQWdGOztJQUVoRixxQ0FBb0I7O0lBQ3BCLG1EQUFtQzs7SUFFbkMsaUNBQTZCOztJQUM3Qiw2Q0FBb0I7O0lBRXBCLHFDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIEFmdGVyQ29udGVudEluaXQsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5cblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc2JJdGVtQm9keScsXG4gIHNlbGVjdG9yOiAnbWRiLWl0ZW0tYm9keSwgbWRiLWFjY29yZGlvbi1pdGVtLWJvZHknLFxuICB0ZW1wbGF0ZVVybDogJ3NiLWl0ZW0uYm9keS5odG1sJyxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZEJvZHknLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoe2hlaWdodDogJzBweCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nfSkpLFxuICAgICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoe2hlaWdodDogJyonLCB2aXNpYmlsaXR5OiAndmlzaWJsZSd9KSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnNTAwbXMgZWFzZScpKSxcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZztcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYpIHJvdXRlckxpbmtzOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcblxuICBwdWJsaWMgaGVpZ2h0ID0gJzAnO1xuICBleHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnO1xuXG4gIHB1YmxpYyBpZCA9IGBtZGItYWNjb3JkaW9uLWA7XG4gIGFyaWFMYWJlbGxlZEJ5ID0gJyc7XG5cbiAgQFZpZXdDaGlsZCgnYm9keScpIGJvZHlFbDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgdG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sbGFwc2VkID8gdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnIDogdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgfSwgMCk7XG4gIH1cblxuICBvcGVuU2lkZW5hdk9uQWN0aXZlTGluayhhY3RpdmVVcmw6IHN0cmluZykge1xuICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSB0aGlzLnJvdXRlckxpbmtzLmZpbmQoIChsaW5rOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBsaW5rLmhyZWYgPT09IGFjdGl2ZVVybDtcbiAgICB9KTtcbiAgICBpZiAoYWN0aXZlTGluaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgICAgfSwgNDApO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cblxufVxuIl19