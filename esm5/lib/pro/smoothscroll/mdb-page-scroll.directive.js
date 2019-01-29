/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, EventEmitter, Inject, Optional, HostListener } from '@angular/core';
import { Router, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from './mdb-page-scroll.service';
import { PageScrollInstance } from './mdb-page-scroll.instance';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
var PageScrollDirective = /** @class */ (function () {
    function PageScrollDirective(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollHorizontal = null;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollSpeed = null;
        this.pageScrollEasing = null;
        this.pageScrollAdjustHash = false;
        this.pageScroll = null;
        this.pageScrollFinish = new EventEmitter();
        this.document = (/** @type {?} */ (document));
    }
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // Some inputs changed, reset the pageScrollInstance
        this.pageScrollInstance = undefined;
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    };
    // private generatePageScrollInstance(): PageScrollInstance {
    // private generatePageScrollInstance(): PageScrollInstance {
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.generatePageScrollInstance = 
    // private generatePageScrollInstance(): PageScrollInstance {
    /**
     * @private
     * @return {?}
     */
    function () {
        if (Util.isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = PageScrollInstance.newInstance({
                document: this.document,
                scrollTarget: this.href,
                scrollingViews: null,
                namespace: this.pageScroll,
                verticalScrolling: !this.pageScrollHorizontal,
                pageScrollOffset: this.pageScrollOffset,
                pageScrollInterruptible: this.pageScrollInterruptible,
                pageScrollEasingLogic: this.pageScrollEasing,
                pageScrollDuration: this.pageScrollDuration,
                pageScrollSpeed: this.pageScrollSpeed,
                pageScrollFinishListener: this.pageScrollFinish
            });
        }
        return this.pageScrollInstance;
    };
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.pushRouterState = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.pageScrollAdjustHash && typeof this.pageScrollInstance.scrollTarget === 'string'
            && this.pageScrollInstance.scrollTarget.substr(0, 1) === '#') {
            // "Navigate" to the current route again and this time set the fragment/hash
            this.router.navigate([], {
                fragment: (/** @type {?} */ (this.pageScrollInstance.scrollTarget.substr(1))),
                queryParamsHandling: 'preserve'
            });
        }
    };
    /**
     * @private
     * @return {?}
     */
    PageScrollDirective.prototype.scroll = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.handleClick = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            /** @type {?} */
            var urlTree = void 0;
            if (typeof this.routerLink === 'string') {
                urlTree = this.router.parseUrl(this.routerLink);
            }
            else {
                urlTree = this.router.createUrlTree(this.routerLink);
            }
            if (!this.router.isActive(urlTree, true)) {
                // We need to navigate their first.
                // Navigation is handled by the routerLink directive
                // so we only need to listen for route change
                /** @type {?} */
                var subscription_1 = (/** @type {?} */ (this.router.events.subscribe(function (routerEvent) {
                    if (routerEvent instanceof NavigationEnd) {
                        subscription_1.unsubscribe();
                        _this.scroll();
                    }
                    else if (routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel) {
                        subscription_1.unsubscribe();
                    }
                })));
                return false; // to preventDefault()
            }
        }
        this.scroll();
        return false; // to preventDefault()
    };
    PageScrollDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbPageScroll]'
                },] }
    ];
    /** @nocollapse */
    PageScrollDirective.ctorParameters = function () { return [
        { type: PageScrollService },
        { type: Router, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    PageScrollDirective.propDecorators = {
        routerLink: [{ type: Input }],
        href: [{ type: Input }],
        pageScrollHorizontal: [{ type: Input }],
        pageScrollOffset: [{ type: Input }],
        pageScrollDuration: [{ type: Input }],
        pageScrollSpeed: [{ type: Input }],
        pageScrollEasing: [{ type: Input }],
        pageScrollInterruptible: [{ type: Input }],
        pageScrollAdjustHash: [{ type: Input }],
        pageScroll: [{ type: Input }],
        pageScrollFinish: [{ type: Output }],
        handleClick: [{ type: HostListener, args: ['click',] }]
    };
    return PageScrollDirective;
}());
export { PageScrollDirective };
if (false) {
    /** @type {?} */
    PageScrollDirective.prototype.routerLink;
    /** @type {?} */
    PageScrollDirective.prototype.href;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollHorizontal;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollOffset;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollDuration;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollSpeed;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollEasing;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollInterruptible;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollAdjustHash;
    /** @type {?} */
    PageScrollDirective.prototype.pageScroll;
    /** @type {?} */
    PageScrollDirective.prototype.pageScrollFinish;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.pageScrollInstance;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.document;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.pageScrollService;
    /**
     * @type {?}
     * @private
     */
    PageScrollDirective.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNOLFFBQVEsRUFFUixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE1BQU0sRUFDTixhQUFhLEVBQ2IsZUFBZSxFQUNmLGdCQUFnQixFQUVqQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUl6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMscUJBQXFCLElBQUksSUFBSSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFHN0U7SUFnREUsNkJBQW9CLGlCQUFvQyxFQUFzQixNQUFjLEVBQW9CLFFBQWE7UUFBekcsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUFzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBbkNyRix5QkFBb0IsR0FBa0IsSUFBSSxDQUFDO1FBSTNDLHFCQUFnQixHQUFpQixJQUFJLENBQUM7UUFJdEMsdUJBQWtCLEdBQWlCLElBQUksQ0FBQztRQUl4QyxvQkFBZSxHQUFpQixJQUFJLENBQUM7UUFJckMscUJBQWdCLEdBQXNCLElBQUksQ0FBQztRQU0zQyx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFJN0IsZUFBVSxHQUFpQixJQUFJLENBQUM7UUFHdkMscUJBQWdCLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFPcEUs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OztJQUd0RSxpREFBcUQ7Ozs7O0lBQ3JELHVDQUEyQjs7Ozs7SUFFZixnREFBNEM7Ozs7O0lBQUUscUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgT25DaGFuZ2VzLFxuICBIb3N0TGlzdGVuZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBSb3V0ZXIsXG4gIE5hdmlnYXRpb25FbmQsXG4gIE5hdmlnYXRpb25FcnJvcixcbiAgTmF2aWdhdGlvbkNhbmNlbCxcbiAgVXJsVHJlZVxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge1BhZ2VTY3JvbGxTZXJ2aWNlfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7UGFnZVNjcm9sbEluc3RhbmNlfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5pbnN0YW5jZSc7XG5pbXBvcnQge1BhZ2VTY3JvbGxVdGlsU2VydmljZSBhcyBVdGlsfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC11dGlsLnNlcnZpY2UnO1xuaW1wb3J0IHtFYXNpbmdMb2dpY30gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuY29uZmlnJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlBhZ2VTY3JvbGxdJ1xufSlcbmV4cG9ydCBjbGFzcyBQYWdlU2Nyb2xsRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3V0ZXJMaW5rOiBhbnk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGhyZWY6IHN0cmluZztcblxuICBASW5wdXQoKVxuICAvLyBwdWJsaWMgcGFnZVNjcm9sbEhvcml6b250YWw6IGJvb2xlYW4gPSBudWxsO1xuICBwdWJsaWMgcGFnZVNjcm9sbEhvcml6b250YWw6IGJvb2xlYW4gfCBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIC8vIHB1YmxpYyBwYWdlU2Nyb2xsT2Zmc2V0OiBudW1iZXIgPSBudWxsO1xuICBwdWJsaWMgcGFnZVNjcm9sbE9mZnNldDogbnVtYmVyIHwgYW55ID0gbnVsbDtcblxuICBASW5wdXQoKVxuICAvLyBwdWJsaWMgcGFnZVNjcm9sbER1cmF0aW9uOiBudW1iZXIgPSBudWxsO1xuICBwdWJsaWMgcGFnZVNjcm9sbER1cmF0aW9uOiBudW1iZXIgfCBhbnkgPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIC8vIHB1YmxpYyBwYWdlU2Nyb2xsU3BlZWQ6IG51bWJlciA9IG51bGw7XG4gIHB1YmxpYyBwYWdlU2Nyb2xsU3BlZWQ6IG51bWJlciB8IGFueSA9IG51bGw7XG5cbiAgQElucHV0KClcbiAgLy8gcHVibGljIHBhZ2VTY3JvbGxFYXNpbmc6IEVhc2luZ0xvZ2ljID0gbnVsbDtcbiAgcHVibGljIHBhZ2VTY3JvbGxFYXNpbmc6IEVhc2luZ0xvZ2ljIHwgYW55ID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGFnZVNjcm9sbEludGVycnVwdGlibGU6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBhZ2VTY3JvbGxBZGp1c3RIYXNoID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgLy8gcHVibGljIHBhZ2VTY3JvbGw6IHN0cmluZyA9IG51bGw7XG4gIHB1YmxpYyBwYWdlU2Nyb2xsOiBzdHJpbmcgfCBhbnkgPSBudWxsO1xuXG4gIEBPdXRwdXQoKVxuICBwYWdlU2Nyb2xsRmluaXNoOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgLy8gcHJpdmF0ZSBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZTtcbiAgcHJpdmF0ZSBwYWdlU2Nyb2xsSW5zdGFuY2U6IFBhZ2VTY3JvbGxJbnN0YW5jZSB8IGFueTtcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlU2Nyb2xsU2VydmljZTogUGFnZVNjcm9sbFNlcnZpY2UsIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIEBJbmplY3QoRE9DVU1FTlQpIGRvY3VtZW50OiBhbnkpIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gPERvY3VtZW50PiBkb2N1bWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIC8vIFNvbWUgaW5wdXRzIGNoYW5nZWQsIHJlc2V0IHRoZSBwYWdlU2Nyb2xsSW5zdGFuY2VcbiAgICB0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZSkge1xuICAgICAgICB0aGlzLnBhZ2VTY3JvbGxTZXJ2aWNlLnN0b3AodGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBnZW5lcmF0ZVBhZ2VTY3JvbGxJbnN0YW5jZSgpOiBQYWdlU2Nyb2xsSW5zdGFuY2Uge1xuICAgIHByaXZhdGUgZ2VuZXJhdGVQYWdlU2Nyb2xsSW5zdGFuY2UoKTogUGFnZVNjcm9sbEluc3RhbmNlIHwgYW55IHtcbiAgICBpZiAoVXRpbC5pc1VuZGVmaW5lZE9yTnVsbCh0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZSkpIHtcbiAgICAgIHRoaXMucGFnZVNjcm9sbEluc3RhbmNlID0gUGFnZVNjcm9sbEluc3RhbmNlLm5ld0luc3RhbmNlKHtcbiAgICAgICAgICBkb2N1bWVudDogdGhpcy5kb2N1bWVudCxcbiAgICAgICAgICBzY3JvbGxUYXJnZXQ6IHRoaXMuaHJlZixcbiAgICAgICAgICBzY3JvbGxpbmdWaWV3czogbnVsbCxcbiAgICAgICAgICBuYW1lc3BhY2U6IHRoaXMucGFnZVNjcm9sbCxcbiAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbGluZzogIXRoaXMucGFnZVNjcm9sbEhvcml6b250YWwsXG4gICAgICAgICAgcGFnZVNjcm9sbE9mZnNldDogdGhpcy5wYWdlU2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgIHBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlOiB0aGlzLnBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlLFxuICAgICAgICAgIHBhZ2VTY3JvbGxFYXNpbmdMb2dpYzogdGhpcy5wYWdlU2Nyb2xsRWFzaW5nLFxuICAgICAgICAgIHBhZ2VTY3JvbGxEdXJhdGlvbjogdGhpcy5wYWdlU2Nyb2xsRHVyYXRpb24sXG4gICAgICAgICAgcGFnZVNjcm9sbFNwZWVkOiB0aGlzLnBhZ2VTY3JvbGxTcGVlZCxcbiAgICAgICAgICBwYWdlU2Nyb2xsRmluaXNoTGlzdGVuZXI6IHRoaXMucGFnZVNjcm9sbEZpbmlzaFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgcHVzaFJvdXRlclN0YXRlKCkge1xuICAgIGlmICh0aGlzLnBhZ2VTY3JvbGxBZGp1c3RIYXNoICYmIHR5cGVvZiB0aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxUYXJnZXQgPT09ICdzdHJpbmcnXG4gICAgICAgICYmIHRoaXMucGFnZVNjcm9sbEluc3RhbmNlLnNjcm9sbFRhcmdldC5zdWJzdHIoMCwgMSkgPT09ICcjJykge1xuICAgICAgICAvLyBcIk5hdmlnYXRlXCIgdG8gdGhlIGN1cnJlbnQgcm91dGUgYWdhaW4gYW5kIHRoaXMgdGltZSBzZXQgdGhlIGZyYWdtZW50L2hhc2hcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgICAgICBmcmFnbWVudDogPHN0cmluZz50aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxUYXJnZXQuc3Vic3RyKDEpLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdwcmVzZXJ2ZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGwoKTogdm9pZCB7XG4gICAgY29uc3QgcGFnZVNjcm9sbEluc3RhbmNlID0gdGhpcy5nZW5lcmF0ZVBhZ2VTY3JvbGxJbnN0YW5jZSgpO1xuICAgIHRoaXMucHVzaFJvdXRlclN0YXRlKCk7XG4gICAgdGhpcy5wYWdlU2Nyb2xsU2VydmljZS5zdGFydChwYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBwdWJsaWMgaGFuZGxlQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMucm91dGVyTGluayAmJiB0aGlzLnJvdXRlciAhPT0gbnVsbCAmJiB0aGlzLnJvdXRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCB1cmxUcmVlOiBVcmxUcmVlO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucm91dGVyTGluayA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHVybFRyZWUgPSB0aGlzLnJvdXRlci5wYXJzZVVybCh0aGlzLnJvdXRlckxpbmspO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsVHJlZSA9IHRoaXMucm91dGVyLmNyZWF0ZVVybFRyZWUodGhpcy5yb3V0ZXJMaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucm91dGVyLmlzQWN0aXZlKHVybFRyZWUsIHRydWUpKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIG5hdmlnYXRlIHRoZWlyIGZpcnN0LlxuICAgICAgICAgICAgLy8gTmF2aWdhdGlvbiBpcyBoYW5kbGVkIGJ5IHRoZSByb3V0ZXJMaW5rIGRpcmVjdGl2ZVxuICAgICAgICAgICAgLy8gc28gd2Ugb25seSBuZWVkIHRvIGxpc3RlbiBmb3Igcm91dGUgY2hhbmdlXG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IDxTdWJzY3JpcHRpb24+dGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgocm91dGVyRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocm91dGVyRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm91dGVyRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IgfHwgcm91dGVyRXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyB0byBwcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zY3JvbGwoKTtcbiAgICByZXR1cm4gZmFsc2U7IC8vIHRvIHByZXZlbnREZWZhdWx0KClcbiAgfVxuXG59XG4iXX0=