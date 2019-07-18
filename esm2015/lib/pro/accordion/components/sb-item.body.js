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
export class SBItemBodyComponent {
    /**
     * @param {?} el
     * @param {?} _cdRef
     */
    constructor(el, _cdRef) {
        this.el = el;
        this._cdRef = _cdRef;
        this.animationStateChange = new EventEmitter();
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
            collapsed
                ? (this.expandAnimationState = 'collapsed')
                : (this.expandAnimationState = 'expanded');
            this._cdRef.markForCheck();
        }), 0);
    }
    /**
     * @return {?}
     */
    animationCallback() {
        this.animationStateChange.emit({
            state: this.expandAnimationState,
            accordionEl: this.el.nativeElement.parentElement.parentElement,
        });
    }
    /**
     * @return {?}
     */
    openSidenavOnActiveLink() {
        /** @type {?} */
        const pathStrategyUrl = window.location.pathname;
        /** @type {?} */
        const hashStrategyUrl = window.location.hash;
        /** @type {?} */
        const activeLink = this.routerLinks.find((/**
         * @param {?} link
         * @return {?}
         */
        (link) => {
            return link.href === pathStrategyUrl || link.href === hashStrategyUrl;
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
        this.openSidenavOnActiveLink();
    }
}
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
SBItemBodyComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
SBItemBodyComponent.propDecorators = {
    customClass: [{ type: Input }],
    animationStateChange: [{ type: Output }],
    routerLinks: [{ type: ContentChildren, args: [RouterLinkWithHref,] }],
    bodyEl: [{ type: ViewChild, args: ['body', { static: true },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUVmLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7Ozs7QUFFNUQsOENBR0M7OztJQUZDLHlDQUFjOztJQUNkLCtDQUF3Qjs7QUFnQjFCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBZTlCLFlBQW9CLEVBQWMsRUFBVSxNQUF5QjtRQUFqRCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFiM0QseUJBQW9CLEdBQTJDLElBQUksWUFBWSxFQUV0RixDQUFDO1FBR0csV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNwQix5QkFBb0IsR0FBRyxXQUFXLENBQUM7UUFFNUIsT0FBRSxHQUFHLGdCQUFnQixDQUFDO1FBQzdCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0lBSW9ELENBQUM7Ozs7O0lBRXpFLE1BQU0sQ0FBQyxTQUFrQjtRQUN2QixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxTQUFTO2dCQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxXQUFXLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLENBQUMsQ0FBQztZQUU3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzdCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQ2hDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYTtTQUMvRCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsdUJBQXVCOztjQUNmLGVBQWUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVE7O2NBQzFDLGVBQWUsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUk7O2NBRXRDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQ3JELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxlQUFlLENBQUM7UUFDeEUsQ0FBQyxFQUFDO1FBRUYsSUFBSSxVQUFVLEVBQUU7WUFDZCxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQztZQUN6QyxDQUFDLEdBQUUsRUFBRSxDQUFDLENBQUM7U0FDUjtJQUNILENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDakMsQ0FBQzs7O1lBaEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLHdDQUF3QztnQkFDbEQsNFdBQWdDO2dCQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7d0JBQ3BCLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO3dCQUNoRSxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUM1RCxDQUFDO2lCQUNIO2FBQ0Y7Ozs7WUFoQ0MsVUFBVTtZQVNWLGlCQUFpQjs7OzBCQXlCaEIsS0FBSzttQ0FDTCxNQUFNOzBCQUdOLGVBQWUsU0FBQyxrQkFBa0I7cUJBUWxDLFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O0lBWm5DLDBDQUE2Qjs7SUFDN0IsbURBRUk7O0lBQ0osMENBQWdGOztJQUVoRixxQ0FBb0I7O0lBQ3BCLG1EQUFtQzs7SUFFbkMsaUNBQTZCOztJQUM3Qiw2Q0FBb0I7O0lBRXBCLHFDQUF3RDs7Ozs7SUFFNUMsaUNBQXNCOzs7OztJQUFFLHFDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBRdWVyeUxpc3QsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFjY29yZGlvbkFuaW1hdGlvblN0YXRlIHtcbiAgc3RhdGU6IHN0cmluZztcbiAgYWNjb3JkaW9uRWw6IEVsZW1lbnRSZWY7XG59XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbUJvZHknLFxuICBzZWxlY3RvcjogJ21kYi1pdGVtLWJvZHksIG1kYi1hY2NvcmRpb24taXRlbS1ib2R5JyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmJvZHkuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZXhwYW5kQm9keScsIFtcbiAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7IGhlaWdodDogJzBweCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnNTAwbXMgZWFzZScpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uU3RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJQWNjb3JkaW9uQW5pbWF0aW9uU3RhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxcbiAgICBJQWNjb3JkaW9uQW5pbWF0aW9uU3RhdGVcbiAgPigpO1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmtXaXRoSHJlZikgcm91dGVyTGlua3M6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rV2l0aEhyZWY+O1xuXG4gIHB1YmxpYyBoZWlnaHQgPSAnMCc7XG4gIGV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCc7XG5cbiAgcHVibGljIGlkID0gYG1kYi1hY2NvcmRpb24tYDtcbiAgYXJpYUxhYmVsbGVkQnkgPSAnJztcblxuICBAVmlld0NoaWxkKCdib2R5JywgeyBzdGF0aWM6IHRydWUgfSkgYm9keUVsOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICB0b2dnbGUoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb2xsYXBzZWRcbiAgICAgICAgPyAodGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnKVxuICAgICAgICA6ICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJyk7XG5cbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgYW5pbWF0aW9uQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZUNoYW5nZS5lbWl0KHtcbiAgICAgIHN0YXRlOiB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlLFxuICAgICAgYWNjb3JkaW9uRWw6IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsXG4gICAgfSk7XG4gIH1cblxuICBvcGVuU2lkZW5hdk9uQWN0aXZlTGluaygpIHtcbiAgICBjb25zdCBwYXRoU3RyYXRlZ3lVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgY29uc3QgaGFzaFN0cmF0ZWd5VXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cbiAgICBjb25zdCBhY3RpdmVMaW5rID0gdGhpcy5yb3V0ZXJMaW5rcy5maW5kKChsaW5rOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBsaW5rLmhyZWYgPT09IHBhdGhTdHJhdGVneVVybCB8fCBsaW5rLmhyZWYgPT09IGhhc2hTdHJhdGVneVVybDtcbiAgICB9KTtcblxuICAgIGlmIChhY3RpdmVMaW5rKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgICB9LCA0MCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMub3BlblNpZGVuYXZPbkFjdGl2ZUxpbmsoKTtcbiAgfVxufVxuIl19