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
        this.height = '0';
        this.expandAnimationState = 'collapsed';
        this._destroy$ = new Subject();
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
            }), 0);
        }
        else if (this.expandAnimationState !== 'collapsed') {
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
            }), 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFFakIsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDakYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDNUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRS9CLDhDQUdDOzs7SUFGQyx5Q0FBYzs7SUFDZCwrQ0FBd0I7O0FBZ0IxQixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFpQjlCLFlBQ1MsRUFBYyxFQUNiLE1BQXlCLEVBQ2IsTUFBYztRQUYzQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBakIxQix5QkFBb0IsR0FBMkMsSUFBSSxZQUFZLEVBRXRGLENBQUM7UUFJRyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLHlCQUFvQixHQUFHLFdBQVcsQ0FBQztRQUMzQixjQUFTLEdBQWtCLElBQUks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QW1DOzs7OztJQUNuQyx3Q0FBaUQ7O0lBQ2pELGlDQUE2Qjs7SUFDN0IsNkNBQW9COztJQUVwQixxQ0FBd0Q7O0lBR3RELGlDQUFxQjs7Ozs7SUFDckIscUNBQWlDOzs7OztJQUNqQyxxQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPcHRpb25hbCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN0YXRlLCBzdHlsZSwgdHJpZ2dlciwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgUm91dGVyTGlua1dpdGhIcmVmLCBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBJQWNjb3JkaW9uQW5pbWF0aW9uU3RhdGUge1xuICBzdGF0ZTogc3RyaW5nO1xuICBhY2NvcmRpb25FbDogRWxlbWVudFJlZjtcbn1cblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc2JJdGVtQm9keScsXG4gIHNlbGVjdG9yOiAnbWRiLWl0ZW0tYm9keSwgbWRiLWFjY29yZGlvbi1pdGVtLWJvZHknLFxuICB0ZW1wbGF0ZVVybDogJ3NiLWl0ZW0uYm9keS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdleHBhbmRCb2R5JywgW1xuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JywgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSkpLFxuICAgICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoeyBoZWlnaHQ6ICcqJywgdmlzaWJpbGl0eTogJ3Zpc2libGUnIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCc1MDBtcyBlYXNlJykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTQkl0ZW1Cb2R5Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHN0cmluZztcblxuICBAT3V0cHV0KCkgYW5pbWF0aW9uU3RhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxJQWNjb3JkaW9uQW5pbWF0aW9uU3RhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxcbiAgICBJQWNjb3JkaW9uQW5pbWF0aW9uU3RhdGVcbiAgPigpO1xuICBAQ29udGVudENoaWxkcmVuKFJvdXRlckxpbmtXaXRoSHJlZikgcm91dGVyTGlua3M6IFF1ZXJ5TGlzdDxSb3V0ZXJMaW5rV2l0aEhyZWY+O1xuICBwdWJsaWMgYXV0b0V4cGFuZDogYm9vbGVhbjtcbiAgcHVibGljIGNvbGxhcHNlZDogYm9vbGVhbjtcbiAgcHVibGljIGhlaWdodCA9ICcwJztcbiAgZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgcHJpdmF0ZSBfZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuICBwdWJsaWMgaWQgPSBgbWRiLWFjY29yZGlvbi1gO1xuICBhcmlhTGFiZWxsZWRCeSA9ICcnO1xuXG4gIEBWaWV3Q2hpbGQoJ2JvZHknLCB7IHN0YXRpYzogdHJ1ZSB9KSBib2R5RWw6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICB0b2dnbGUoY29sbGFwc2VkOiBib29sZWFuKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb2xsYXBzZWRcbiAgICAgICAgPyAodGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnKVxuICAgICAgICA6ICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJyk7XG5cbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgYW5pbWF0aW9uQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZUNoYW5nZS5lbWl0KHtcbiAgICAgIHN0YXRlOiB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlLFxuICAgICAgYWNjb3JkaW9uRWw6IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsXG4gICAgfSk7XG4gIH1cblxuICBvcGVuU2lkZW5hdk9uQWN0aXZlTGluaygpIHtcbiAgICBjb25zdCBwYXRoU3RyYXRlZ3lVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgY29uc3QgaGFzaFN0cmF0ZWd5VXJsID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cbiAgICBjb25zdCBhY3RpdmVMaW5rID0gdGhpcy5yb3V0ZXJMaW5rcy5maW5kKChsaW5rOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBsaW5rLmhyZWYgPT09IHBhdGhTdHJhdGVneVVybCB8fCBsaW5rLmhyZWYgPT09IGhhc2hTdHJhdGVneVVybDtcbiAgICB9KTtcbiAgICBjb25zdCBzYkl0ZW0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBpZiAoYWN0aXZlTGluaykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnO1xuICAgICAgICBpZiAoc2JJdGVtKSB7XG4gICAgICAgICAgc2JJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgIHNiSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1jb2xsYXBzZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0sIDApO1xuICAgIH0gZWxzZSBpZiAodGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSAhPT0gJ2NvbGxhcHNlZCcpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCc7XG4gICAgICAgIGlmIChzYkl0ZW0pIHtcbiAgICAgICAgICBzYkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgc2JJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWNvbGxhcHNlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jb2xsYXBzZWRcbiAgICAgICAgPyAodGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnKVxuICAgICAgICA6ICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJyk7XG5cbiAgICAgIGlmICh0aGlzLnJvdXRlciAmJiB0aGlzLmF1dG9FeHBhbmQpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpLFxuICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kkLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==