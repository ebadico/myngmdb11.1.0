/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, Input, ContentChildren, QueryList, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Optional, } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { RouterLinkWithHref, Router, NavigationEnd } from '@angular/router';
import { window } from '../../../free/utils/facade/browser';
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
var SBItemBodyComponent = /** @class */ (function () {
    function SBItemBodyComponent(el, _cdRef, router) {
        this.el = el;
        this._cdRef = _cdRef;
        this.router = router;
        this.animationStateChange = new EventEmitter();
        this.height = '0';
        this.expandAnimationState = 'collapsed';
        this._destroy$ = new Subject();
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
        /** @type {?} */
        var sbItem = this.el.nativeElement.parentNode;
        if (activeLink) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.expandAnimationState = 'expanded';
                if (sbItem) {
                    sbItem.classList.add('active');
                    sbItem.classList.remove('is-collapsed');
                }
                _this._cdRef.markForCheck();
            }), 0);
        }
        else if (this.expandAnimationState !== 'collapsed') {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.expandAnimationState = 'collapsed';
                if (sbItem) {
                    sbItem.classList.remove('active');
                    sbItem.classList.add('is-collapsed');
                }
                _this._cdRef.markForCheck();
            }), 0);
        }
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.collapsed
                ? (_this.expandAnimationState = 'collapsed')
                : (_this.expandAnimationState = 'expanded');
            if (_this.router && _this.autoExpand) {
                _this.router.events
                    .pipe(takeUntil(_this._destroy$), filter((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) { return event instanceof NavigationEnd; })))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.openSidenavOnActiveLink();
                }));
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    SBItemBodyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy$.next();
        this._destroy$.unsubscribe();
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
        { type: ChangeDetectorRef },
        { type: Router, decorators: [{ type: Optional }] }
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
    SBItemBodyComponent.prototype.autoExpand;
    /** @type {?} */
    SBItemBodyComponent.prototype.collapsed;
    /** @type {?} */
    SBItemBodyComponent.prototype.height;
    /** @type {?} */
    SBItemBodyComponent.prototype.expandAnimationState;
    /**
     * @type {?}
     * @private
     */
    SBItemBodyComponent.prototype._destroy$;
    /** @type {?} */
    SBItemBodyComponent.prototype.id;
    /** @type {?} */
    SBItemBodyComponent.prototype.ariaLabelledBy;
    /** @type {?} */
    SBItemBodyComponent.prototype.bodyEl;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFFakIsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRS9CLDhDQUdDOzs7SUFGQyx5Q0FBYzs7SUFDZCwrQ0FBd0I7O0FBRzFCO0lBOEJFLDZCQUNTLEVBQWMsRUFDYixNQUF5QixFQUNiLE1BQWM7UUFGM0IsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNiLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWpCMUIseUJBQW9CLEdBQTJDLElBQUksWUFBWSxFQUV0RixDQUFDO1FBSUcsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNwQix5QkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDM0IsY0FBUyxHQUFrQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzFDLE9B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OztJQUNoRix5Q0FBMkI7O0lBQzNCLHdDQUEwQjs7SUFDMUIscUNBQW9COztJQUNwQixtREFBbUM7Ozs7O0lBQ25DLHdDQUFpRDs7SUFDakQsaUNBQTZCOztJQUM3Qiw2Q0FBb0I7O0lBRXBCLHFDQUF3RDs7SUFHdEQsaUNBQXFCOzs7OztJQUNyQixxQ0FBaUM7Ozs7O0lBQ2pDLHFDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9wdGlvbmFsLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rV2l0aEhyZWYsIFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuLi8uLi8uLi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvcmRpb25BbmltYXRpb25TdGF0ZSB7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGFjY29yZGlvbkVsOiBFbGVtZW50UmVmO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW1Cb2R5JyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbS1ib2R5LCBtZGItYWNjb3JkaW9uLWl0ZW0tYm9keScsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5ib2R5Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZEJvZHknLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonLCB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzUwMG1zIGVhc2UnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBhbmltYXRpb25TdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPElBY2NvcmRpb25BbmltYXRpb25TdGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFxuICAgIElBY2NvcmRpb25BbmltYXRpb25TdGF0ZVxuICA+KCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGlua1dpdGhIcmVmKSByb3V0ZXJMaW5rczogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XG4gIHB1YmxpYyBhdXRvRXhwYW5kOiBib29sZWFuO1xuICBwdWJsaWMgY29sbGFwc2VkOiBib29sZWFuO1xuICBwdWJsaWMgaGVpZ2h0ID0gJzAnO1xuICBleHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICBwcml2YXRlIF9kZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG4gIHB1YmxpYyBpZCA9IGBtZGItYWNjb3JkaW9uLWA7XG4gIGFyaWFMYWJlbGxlZEJ5ID0gJyc7XG5cbiAgQFZpZXdDaGlsZCgnYm9keScsIHsgc3RhdGljOiB0cnVlIH0pIGJvZHlFbDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIHRvZ2dsZShjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbGxhcHNlZFxuICAgICAgICA/ICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCcpXG4gICAgICAgIDogKHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnKTtcblxuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBhbmltYXRpb25DYWxsYmFjaygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlLmVtaXQoe1xuICAgICAgc3RhdGU6IHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUsXG4gICAgICBhY2NvcmRpb25FbDogdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKCkge1xuICAgIGNvbnN0IHBhdGhTdHJhdGVneVVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBjb25zdCBoYXNoU3RyYXRlZ3lVcmwgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuICAgIGNvbnN0IGFjdGl2ZUxpbmsgPSB0aGlzLnJvdXRlckxpbmtzLmZpbmQoKGxpbms6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIGxpbmsuaHJlZiA9PT0gcGF0aFN0cmF0ZWd5VXJsIHx8IGxpbmsuaHJlZiA9PT0gaGFzaFN0cmF0ZWd5VXJsO1xuICAgIH0pO1xuICAgIGNvbnN0IHNiSXRlbSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGlmIChhY3RpdmVMaW5rKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgICAgIGlmIChzYkl0ZW0pIHtcbiAgICAgICAgICBzYkl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgc2JJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNvbGxhcHNlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlICE9PSAnY29sbGFwc2VkJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgICAgICAgaWYgKHNiSXRlbSkge1xuICAgICAgICAgIHNiSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICBzYkl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtY29sbGFwc2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbGxhcHNlZFxuICAgICAgICA/ICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCcpXG4gICAgICAgIDogKHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnKTtcblxuICAgICAgaWYgKHRoaXMucm91dGVyICYmIHRoaXMuYXV0b0V4cGFuZCkge1xuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95JCksXG4gICAgICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKVxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlblNpZGVuYXZPbkFjdGl2ZUxpbmsoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19