/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, ContentChildren, QueryList, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { RouterLinkWithHref } from '@angular/router';
import { window } from '../../../free/utils/facade/browser';
/**
 * @record
 */
export function IAccordionAnimationState() { }
if (false) {
    /** @type {?} */
    IAccordionAnimationState.prototype.state;
    /** @type {?} */
    IAccordionAnimationState.prototype.accordionEl;
}
var SBItemBodyComponent = /** @class */ (function () {
    function SBItemBodyComponent(el, _cdRef) {
        this.el = el;
        this._cdRef = _cdRef;
        this.animationStateChange = new EventEmitter();
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
            collapsed
                ? (_this.expandAnimationState = 'collapsed')
                : (_this.expandAnimationState = 'expanded');
            _this._cdRef.markForCheck();
        }), 0);
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.animationCallback = /**
     * @return {?}
     */
    function () {
        this.animationStateChange.emit({
            state: this.expandAnimationState,
            accordionEl: this.el.nativeElement.parentElement.parentElement,
        });
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.openSidenavOnActiveLink = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var pathStrategyUrl = window.location.pathname;
        /** @type {?} */
        var hashStrategyUrl = window.location.hash;
        /** @type {?} */
        var activeLink = this.routerLinks.find((/**
         * @param {?} link
         * @return {?}
         */
        function (link) {
            return link.href === pathStrategyUrl || link.href === hashStrategyUrl;
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
        this.openSidenavOnActiveLink();
    };
    SBItemBodyComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'sbItemBody',
                    selector: 'mdb-item-body, mdb-accordion-item-body',
                    template: "<div #body class=\"sb-item-body\"\n     [style.height]=\"height\"\n     (@expandBody.done)=\"animationCallback()\"\n     [@expandBody]=\"expandAnimationState\"\n     [id]=\"id\"\n     role=\"region\"\n     [attr.aria-labelledby]=\"ariaLabelledBy\">\n    <div class=\"card-body {{ customClass }}\">\n    \t<ng-content></ng-content>\n    </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('expandBody', [
                            state('collapsed', style({ height: '0px', visibility: 'hidden' })),
                            state('expanded', style({ height: '*', visibility: 'visible' })),
                            transition('expanded <=> collapsed', animate('500ms ease')),
                        ]),
                    ]
                }] }
    ];
    /** @nocollapse */
    SBItemBodyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SBItemBodyComponent.propDecorators = {
        customClass: [{ type: Input }],
        animationStateChange: [{ type: Output }],
        routerLinks: [{ type: ContentChildren, args: [RouterLinkWithHref,] }],
        bodyEl: [{ type: ViewChild, args: ['body', { static: true },] }]
    };
    return SBItemBodyComponent;
}());
export { SBItemBodyComponent };
if (false) {
    /** @type {?} */
    SBItemBodyComponent.prototype.customClass;
    /** @type {?} */
    SBItemBodyComponent.prototype.animationStateChange;
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
    /**
     * @type {?}
     * @private
     */
    SBItemBodyComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SBItemBodyComponent.prototype._cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUVmLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFFNUQsOENBR0M7OztJQUZDLHlDQUFjOztJQUNkLCtDQUF3Qjs7QUFHMUI7SUE0QkUsNkJBQW9CLEVBQWMsRUFBVSxNQUF5QjtRQUFqRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFiM0QseUJBQW9CLEdBQTJDLElBQUksWUFBWSxFQUV0RixDQUFDO1FBR0csV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNwQix5QkFBb0IsR0FBRyxXQUFXLENBQUM7UUFFNUIsT0FBRSxHQUFHLGdCQUFnQixDQUFDO1FBQzdCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0lBSW9ELENBQUM7Ozs7O0lBRXpFLG9DQUFNOzs7O0lBQU4sVUFBTyxTQUFrQjtRQUF6QixpQkFRQztRQVBDLFVBQVU7OztRQUFDO1lBQ1QsU0FBUztnQkFDUCxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFFN0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDOzs7O0lBRUQsK0NBQWlCOzs7SUFBakI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQ2hDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYTtTQUMvRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQscURBQXVCOzs7SUFBdkI7UUFBQSxpQkFhQzs7WUFaTyxlQUFlLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFROztZQUMxQyxlQUFlLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJOztZQUV0QyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxJQUFTO1lBQ2pELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUM7UUFDeEUsQ0FBQyxFQUFDO1FBRUYsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVOzs7WUFBQztnQkFDVCxLQUFJLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxDQUFDO1lBQ3pDLENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztTQUNSO0lBQ0gsQ0FBQzs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHdDQUF3QztvQkFDbEQsNFdBQWdDO29CQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsVUFBVSxFQUFFO3dCQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7NEJBQ3BCLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQzs0QkFDbEUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDOzRCQUNoRSxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO3lCQUM1RCxDQUFDO3FCQUNIO2lCQUNGOzs7O2dCQWhDQyxVQUFVO2dCQVNWLGlCQUFpQjs7OzhCQXlCaEIsS0FBSzt1Q0FDTCxNQUFNOzhCQUdOLGVBQWUsU0FBQyxrQkFBa0I7eUJBUWxDLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXVDckMsMEJBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQXBEWSxtQkFBbUI7OztJQUM5QiwwQ0FBNkI7O0lBQzdCLG1EQUVJOztJQUNKLDBDQUFnRjs7SUFFaEYscUNBQW9COztJQUNwQixtREFBbUM7O0lBRW5DLGlDQUE2Qjs7SUFDN0IsNkNBQW9COztJQUVwQixxQ0FBd0Q7Ozs7O0lBRTVDLGlDQUFzQjs7Ozs7SUFBRSxxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgUXVlcnlMaXN0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0YXRlLCBzdHlsZSwgdHJpZ2dlciwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgUm91dGVyTGlua1dpdGhIcmVmIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IHdpbmRvdyB9IGZyb20gJy4uLy4uLy4uL2ZyZWUvdXRpbHMvZmFjYWRlL2Jyb3dzZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvcmRpb25BbmltYXRpb25TdGF0ZSB7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGFjY29yZGlvbkVsOiBFbGVtZW50UmVmO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW1Cb2R5JyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbS1ib2R5LCBtZGItYWNjb3JkaW9uLWl0ZW0tYm9keScsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5ib2R5Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZEJvZHknLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonLCB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzUwMG1zIGVhc2UnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZztcbiAgQE91dHB1dCgpIGFuaW1hdGlvblN0YXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SUFjY29yZGlvbkFuaW1hdGlvblN0YXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgSUFjY29yZGlvbkFuaW1hdGlvblN0YXRlXG4gID4oKTtcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYpIHJvdXRlckxpbmtzOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcblxuICBwdWJsaWMgaGVpZ2h0ID0gJzAnO1xuICBleHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnO1xuXG4gIHB1YmxpYyBpZCA9IGBtZGItYWNjb3JkaW9uLWA7XG4gIGFyaWFMYWJlbGxlZEJ5ID0gJyc7XG5cbiAgQFZpZXdDaGlsZCgnYm9keScsIHsgc3RhdGljOiB0cnVlIH0pIGJvZHlFbDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgdG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sbGFwc2VkXG4gICAgICAgID8gKHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJylcbiAgICAgICAgOiAodGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCcpO1xuXG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGFuaW1hdGlvbkNhbGxiYWNrKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2UuZW1pdCh7XG4gICAgICBzdGF0ZTogdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSxcbiAgICAgIGFjY29yZGlvbkVsOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgIH0pO1xuICB9XG5cbiAgb3BlblNpZGVuYXZPbkFjdGl2ZUxpbmsoKSB7XG4gICAgY29uc3QgcGF0aFN0cmF0ZWd5VXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGNvbnN0IGhhc2hTdHJhdGVneVVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gICAgY29uc3QgYWN0aXZlTGluayA9IHRoaXMucm91dGVyTGlua3MuZmluZCgobGluazogYW55KSA9PiB7XG4gICAgICByZXR1cm4gbGluay5ocmVmID09PSBwYXRoU3RyYXRlZ3lVcmwgfHwgbGluay5ocmVmID09PSBoYXNoU3RyYXRlZ3lVcmw7XG4gICAgfSk7XG5cbiAgICBpZiAoYWN0aXZlTGluaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgICAgfSwgNDApO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLm9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKCk7XG4gIH1cbn1cbiJdfQ==