/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, ContentChildren, QueryList, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Optional, } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { RouterLinkWithHref, Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
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
     * @param {?} router
     */
    constructor(el, _cdRef, router) {
        this.el = el;
        this._cdRef = _cdRef;
        this.router = router;
        this.animationStateChange = new EventEmitter();
        this.id = `mdb-accordion-`;
        this.height = '0';
        this._destroy$ = new Subject();
        this.expandAnimationState = 'collapsed';
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
        if (typeof window !== 'undefined' && window) {
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
                /** @type {?} */
                const params = link.href.split('?')[1];
                if (params) {
                    return (link.href.split('?')[0] === pathStrategyUrl ||
                        link.href.split('?')[0] === hashStrategyUrl);
                }
                else {
                    return link.href === pathStrategyUrl || link.href === hashStrategyUrl;
                }
            }));
            /** @type {?} */
            const sbItem = this.el.nativeElement.parentNode;
            if (activeLink) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.expandAnimationState = 'expanded';
                    if (sbItem) {
                        sbItem.classList.add('active');
                        sbItem.classList.remove('is-collapsed');
                    }
                    this._cdRef.markForCheck();
                }), 10);
            }
            else if (this.expandAnimationState !== 'collapsed' && activeLink) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.expandAnimationState = 'collapsed';
                    if (sbItem) {
                        sbItem.classList.remove('active');
                        sbItem.classList.add('is-collapsed');
                    }
                    this._cdRef.markForCheck();
                }), 10);
            }
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
            this.collapsed
                ? (this.expandAnimationState = 'collapsed')
                : (this.expandAnimationState = 'expanded');
            if (this.router && this.autoExpand) {
                this.router.events
                    .pipe(takeUntil(this._destroy$), filter((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => event instanceof NavigationEnd)))
                    .subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.openSidenavOnActiveLink();
                }));
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.unsubscribe();
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
    { type: ChangeDetectorRef },
    { type: Router, decorators: [{ type: Optional }] }
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
    SBItemBodyComponent.prototype.bodyEl;
    /** @type {?} */
    SBItemBodyComponent.prototype.autoExpand;
    /** @type {?} */
    SBItemBodyComponent.prototype.collapsed;
    /** @type {?} */
    SBItemBodyComponent.prototype.id;
    /** @type {?} */
    SBItemBodyComponent.prototype.height;
    /**
     * @type {?}
     * @private
     */
    SBItemBodyComponent.prototype._destroy$;
    /** @type {?} */
    SBItemBodyComponent.prototype.expandAnimationState;
    /** @type {?} */
    SBItemBodyComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    SBItemBodyComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SBItemBodyComponent.prototype._cdRef;
    /**
     * @type {?}
     * @private
     */
    SBItemBodyComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFFakIsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFL0IsOENBR0M7OztJQUZDLHlDQUFjOztJQUNkLCtDQUF3Qjs7QUFnQjFCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQW9COUIsWUFDUyxFQUFjLEVBQ2IsTUFBeUIsRUFDYixNQUFjO1FBRjNCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNiLFdBQU0sR0FBTixNQUFNLENBQVE7UUFwQjFCLHlCQUFvQixHQUEyQyxJQUFJLFlBQVksRUFFdEYsQ0FBQztRQU9HLE9BQUUsR0FBRyxnQkFBZ0IsQ0FBQztRQUN0QixXQUFNLEdBQUcsR0FBRyxDQUFDO1FBRVosY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWpELHlCQUFvQixHQUFHLFdBQVcsQ0FBQztR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QUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUM1RCxDQUFDO2lCQUNIO2FBQ0Y7Ozs7WUFuQ0MsVUFBVTtZQVFWLGlCQUFpQjtZQU1VLE1BQU0sdUJBNkM5QixRQUFROzs7MEJBdEJWLEtBQUs7bUNBRUwsTUFBTTswQkFHTixlQUFlLFNBQUMsa0JBQWtCO3FCQUVsQyxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQVBuQywwQ0FBNkI7O0lBRTdCLG1EQUVJOztJQUNKLDBDQUFnRjs7SUFFaEYscUNBQXdEOztJQUV4RCx5Q0FBMkI7O0lBQzNCLHdDQUEwQjs7SUFDMUIsaUNBQTZCOztJQUM3QixxQ0FBb0I7Ozs7O0lBRXBCLHdDQUFpRDs7SUFFakQsbURBQW1DOztJQUNuQyw2Q0FBb0I7O0lBR2xCLGlDQUFxQjs7Ozs7SUFDckIscUNBQWlDOzs7OztJQUNqQyxxQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPcHRpb25hbCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0YXRlLCBzdHlsZSwgdHJpZ2dlciwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgUm91dGVyTGlua1dpdGhIcmVmLCBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFjY29yZGlvbkFuaW1hdGlvblN0YXRlIHtcbiAgc3RhdGU6IHN0cmluZztcbiAgYWNjb3JkaW9uRWw6IEVsZW1lbnRSZWY7XG59XG5cbkBDb21wb25lbnQoe1xuICBleHBvcnRBczogJ3NiSXRlbUJvZHknLFxuICBzZWxlY3RvcjogJ21kYi1pdGVtLWJvZHksIG1kYi1hY2NvcmRpb24taXRlbS1ib2R5JyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmJvZHkuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZXhwYW5kQm9keScsIFtcbiAgICAgIHN0YXRlKCdjb2xsYXBzZWQnLCBzdHlsZSh7IGhlaWdodDogJzBweCcsIHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pKSxcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHZpc2liaWxpdHk6ICd2aXNpYmxlJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnNTAwbXMgZWFzZScpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU0JJdGVtQm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIGFuaW1hdGlvblN0YXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8SUFjY29yZGlvbkFuaW1hdGlvblN0YXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgSUFjY29yZGlvbkFuaW1hdGlvblN0YXRlXG4gID4oKTtcbiAgQENvbnRlbnRDaGlsZHJlbihSb3V0ZXJMaW5rV2l0aEhyZWYpIHJvdXRlckxpbmtzOiBRdWVyeUxpc3Q8Um91dGVyTGlua1dpdGhIcmVmPjtcblxuICBAVmlld0NoaWxkKCdib2R5JywgeyBzdGF0aWM6IHRydWUgfSkgYm9keUVsOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBhdXRvRXhwYW5kOiBib29sZWFuO1xuICBwdWJsaWMgY29sbGFwc2VkOiBib29sZWFuO1xuICBwdWJsaWMgaWQgPSBgbWRiLWFjY29yZGlvbi1gO1xuICBwdWJsaWMgaGVpZ2h0ID0gJzAnO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3QoKTtcblxuICBleHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICBhcmlhTGFiZWxsZWRCeSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgdG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29sbGFwc2VkXG4gICAgICAgID8gKHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJylcbiAgICAgICAgOiAodGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCcpO1xuXG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGFuaW1hdGlvbkNhbGxiYWNrKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhdGVDaGFuZ2UuZW1pdCh7XG4gICAgICBzdGF0ZTogdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSxcbiAgICAgIGFjY29yZGlvbkVsOiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LFxuICAgIH0pO1xuICB9XG5cbiAgb3BlblNpZGVuYXZPbkFjdGl2ZUxpbmsoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdykge1xuICAgICAgY29uc3QgcGF0aFN0cmF0ZWd5VXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgY29uc3QgaGFzaFN0cmF0ZWd5VXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICBjb25zdCBhY3RpdmVMaW5rID0gdGhpcy5yb3V0ZXJMaW5rcy5maW5kKChsaW5rOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbGluay5ocmVmLnNwbGl0KCc/JylbMV07XG5cbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBsaW5rLmhyZWYuc3BsaXQoJz8nKVswXSA9PT0gcGF0aFN0cmF0ZWd5VXJsIHx8XG4gICAgICAgICAgICBsaW5rLmhyZWYuc3BsaXQoJz8nKVswXSA9PT0gaGFzaFN0cmF0ZWd5VXJsXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbGluay5ocmVmID09PSBwYXRoU3RyYXRlZ3lVcmwgfHwgbGluay5ocmVmID09PSBoYXNoU3RyYXRlZ3lVcmw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3Qgc2JJdGVtID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICBpZiAoYWN0aXZlTGluaykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJztcbiAgICAgICAgICBpZiAoc2JJdGVtKSB7XG4gICAgICAgICAgICBzYkl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBzYkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtY29sbGFwc2VkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgIT09ICdjb2xsYXBzZWQnICYmIGFjdGl2ZUxpbmspIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICAgICAgICAgIGlmIChzYkl0ZW0pIHtcbiAgICAgICAgICAgIHNiSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHNiSXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1jb2xsYXBzZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0sIDEwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbGxhcHNlZFxuICAgICAgICA/ICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCcpXG4gICAgICAgIDogKHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnKTtcblxuICAgICAgaWYgKHRoaXMucm91dGVyICYmIHRoaXMuYXV0b0V4cGFuZCkge1xuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCksXG4gICAgICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlblNpZGVuYXZPbkFjdGl2ZUxpbmsoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=