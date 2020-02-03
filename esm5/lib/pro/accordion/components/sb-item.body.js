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
var SBItemBodyComponent = /** @class */ (function () {
    function SBItemBodyComponent(el, _cdRef, router) {
        this.el = el;
        this._cdRef = _cdRef;
        this.router = router;
        this.animationStateChange = new EventEmitter();
        this.id = "mdb-accordion-";
        this.height = '0';
        this._destroy$ = new Subject();
        this.expandAnimationState = 'collapsed';
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
        if (typeof window !== 'undefined' && window) {
            /** @type {?} */
            var pathStrategyUrl_1 = window.location.pathname;
            /** @type {?} */
            var hashStrategyUrl_1 = window.location.hash;
            /** @type {?} */
            var activeLink = this.routerLinks.find((/**
             * @param {?} link
             * @return {?}
             */
            function (link) {
                /** @type {?} */
                var params = link.href.split('?')[1];
                if (params) {
                    return (link.href.split('?')[0] === pathStrategyUrl_1 ||
                        link.href.split('?')[0] === hashStrategyUrl_1);
                }
                else {
                    return link.href === pathStrategyUrl_1 || link.href === hashStrategyUrl_1;
                }
            }));
            /** @type {?} */
            var sbItem_1 = this.el.nativeElement.parentNode;
            if (activeLink) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.expandAnimationState = 'expanded';
                    if (sbItem_1) {
                        sbItem_1.classList.add('active');
                        sbItem_1.classList.remove('is-collapsed');
                    }
                    _this._cdRef.markForCheck();
                }), 10);
            }
            else if (this.expandAnimationState !== 'collapsed' && activeLink) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.expandAnimationState = 'collapsed';
                    if (sbItem_1) {
                        sbItem_1.classList.remove('active');
                        sbItem_1.classList.add('is-collapsed');
                    }
                    _this._cdRef.markForCheck();
                }), 10);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFFakIsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFL0IsOENBR0M7OztJQUZDLHlDQUFjOztJQUNkLCtDQUF3Qjs7QUFHMUI7SUFpQ0UsNkJBQ1MsRUFBYyxFQUNiLE1BQXlCLEVBQ2IsTUFBYztRQUYzQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBcEIxQix5QkFBb0IsR0FBMkMsSUFBSSxZQUFZLEVBRXRGLENBQUM7UUFPRyxPQUFFLEdBQUcsZ0JBQWdCLENBQUM7UUFDdEIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUVaLGNBQVMsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVqRCx5QkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDbkMsbUJBQWMsR0FBRyxFQUFFLENB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Q2hFLFVBQVUsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7eUJBQzVELENBQUM7cUJBQ0g7aUJBQ0Y7Ozs7Z0JBbkNDLFVBQVU7Z0JBUVYsaUJBQWlCO2dCQU1VLE1BQU0sdUJBNkM5QixRQUFROzs7OEJBdEJWLEtBQUs7dUNBRUwsTUFBTTs4QkFHTixlQUFlLFNBQUMsa0JBQWtCO3lCQUVsQyxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7SUFpR3JDLDBCQUFDO0NBQUEsQUF0SEQsSUFzSEM7U0F6R1ksbUJBQW1COzs7SUFDOUIsMENBQTZCOztJQUU3QixtREFFSTs7SUFDSiwwQ0FBZ0Y7O0lBRWhGLHFDQUF3RDs7SUFFeEQseUNBQTJCOztJQUMzQix3Q0FBMEI7O0lBQzFCLGlDQUE2Qjs7SUFDN0IscUNBQW9COzs7OztJQUVwQix3Q0FBaUQ7O0lBRWpELG1EQUFtQzs7SUFDbkMsNkNBQW9COztJQUdsQixpQ0FBcUI7Ozs7O0lBQ3JCLHFDQUFpQzs7Ozs7SUFDakMscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT3B0aW9uYWwsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzdGF0ZSwgc3R5bGUsIHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFJvdXRlckxpbmtXaXRoSHJlZiwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvcmRpb25BbmltYXRpb25TdGF0ZSB7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGFjY29yZGlvbkVsOiBFbGVtZW50UmVmO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW1Cb2R5JyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbS1ib2R5LCBtZGItYWNjb3JkaW9uLWl0ZW0tYm9keScsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5ib2R5Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZEJvZHknLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonLCB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzUwMG1zIGVhc2UnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBhbmltYXRpb25TdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPElBY2NvcmRpb25BbmltYXRpb25TdGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFxuICAgIElBY2NvcmRpb25BbmltYXRpb25TdGF0ZVxuICA+KCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGlua1dpdGhIcmVmKSByb3V0ZXJMaW5rczogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XG5cbiAgQFZpZXdDaGlsZCgnYm9keScsIHsgc3RhdGljOiB0cnVlIH0pIGJvZHlFbDogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgYXV0b0V4cGFuZDogYm9vbGVhbjtcbiAgcHVibGljIGNvbGxhcHNlZDogYm9vbGVhbjtcbiAgcHVibGljIGlkID0gYG1kYi1hY2NvcmRpb24tYDtcbiAgcHVibGljIGhlaWdodCA9ICcwJztcblxuICBwcml2YXRlIF9kZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgYXJpYUxhYmVsbGVkQnkgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIHRvZ2dsZShjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbGxhcHNlZFxuICAgICAgICA/ICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCcpXG4gICAgICAgIDogKHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnKTtcblxuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBhbmltYXRpb25DYWxsYmFjaygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlLmVtaXQoe1xuICAgICAgc3RhdGU6IHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUsXG4gICAgICBhY2NvcmRpb25FbDogdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpIHtcbiAgICAgIGNvbnN0IHBhdGhTdHJhdGVneVVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgIGNvbnN0IGhhc2hTdHJhdGVneVVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgY29uc3QgYWN0aXZlTGluayA9IHRoaXMucm91dGVyTGlua3MuZmluZCgobGluazogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGxpbmsuaHJlZi5zcGxpdCgnPycpWzFdO1xuXG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbGluay5ocmVmLnNwbGl0KCc/JylbMF0gPT09IHBhdGhTdHJhdGVneVVybCB8fFxuICAgICAgICAgICAgbGluay5ocmVmLnNwbGl0KCc/JylbMF0gPT09IGhhc2hTdHJhdGVneVVybFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGxpbmsuaHJlZiA9PT0gcGF0aFN0cmF0ZWd5VXJsIHx8IGxpbmsuaHJlZiA9PT0gaGFzaFN0cmF0ZWd5VXJsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHNiSXRlbSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgaWYgKGFjdGl2ZUxpbmspIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgICAgICAgaWYgKHNiSXRlbSkge1xuICAgICAgICAgICAgc2JJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgc2JJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNvbGxhcHNlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlICE9PSAnY29sbGFwc2VkJyAmJiBhY3RpdmVMaW5rKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgICAgICAgICBpZiAoc2JJdGVtKSB7XG4gICAgICAgICAgICBzYkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBzYkl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtY29sbGFwc2VkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jb2xsYXBzZWRcbiAgICAgICAgPyAodGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnKVxuICAgICAgICA6ICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJyk7XG5cbiAgICAgIGlmICh0aGlzLnJvdXRlciAmJiB0aGlzLmF1dG9FeHBhbmQpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpLFxuICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19