/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, HostListener, ApplicationRef, } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { ToastPackage, tsConfig } from './toast.config';
var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastPackage, appRef) {
        var _this = this;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /**
         * width of progress bar
         */
        this.width = -1;
        /**
         * a combination of toast type and options.toastClass
         */
        this.toastClasses = '';
        /**
         * controls animation
         */
        this.state = 'inactive';
        this.toastService = tsConfig.serviceInstance;
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe((/**
         * @return {?}
         */
        function () {
            _this.activateToast();
        }));
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe((/**
         * @return {?}
         */
        function () {
            _this.remove();
        }));
    }
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    ToastComponent.prototype.activateToast = /**
     * activates toast and sets timeout
     * @return {?}
     */
    function () {
        var _this = this;
        this.state = 'active';
        if (this.options.timeOut !== 0) {
            this.timeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.remove();
            }), this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval((/**
                 * @return {?}
                 */
                function () { return _this.updateProgress(); }), 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    /**
     * updates progress bar width
     */
    /**
     * updates progress bar width
     * @return {?}
     */
    ToastComponent.prototype.updateProgress = /**
     * updates progress bar width
     * @return {?}
     */
    function () {
        if (this.width === 0) {
            return;
        }
        /** @type {?} */
        var now = new Date().getTime();
        /** @type {?} */
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.width <= 0) {
            this.width = 0;
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     */
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    ToastComponent.prototype.remove = /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () {
            return _this.toastService.remove(_this.toastPackage.toastId);
        }), 300);
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.onActionClick = /**
     * @return {?}
     */
    function () {
        this.toastPackage.triggerAction();
        this.remove();
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.tapToast = /**
     * @return {?}
     */
    function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.stickAround = /**
     * @return {?}
     */
    function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.delayedHideToast = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout((/**
         * @return {?}
         */
        function () { return _this.remove(); }), this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
        this.width = 100;
        if (this.options.progressBar) {
            this.intervalId = setInterval((/**
             * @return {?}
             */
            function () { return _this.updateProgress(); }), 10);
        }
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-toast-component',
                    template: "<button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"md-toast-close-button\">\n  &times;\n</button>\n<div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">\n  {{title}}\n</div>\n<div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\">\n</div>\n<div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n  {{message}}\n</div>\n<button *ngIf=\"options.actionButton\" class=\"btn btn-block md-toast-action mt-2\" (click)=\"onActionClick()\">{{ options.actionButton }}</button>\n<div *ngIf=\"options.progressBar\">\n  <div class=\"md-toast-progress\" [style.width.%]=\"width\"></div>\n</div>\n",
                    animations: [
                        trigger('flyInOut', [
                            state('inactive', style({
                                display: 'none',
                                opacity: 0
                            })),
                            state('active', style({ opacity: .5 })),
                            state('removed', style({ opacity: 0 })),
                            transition('inactive => active', animate('300ms ease-in')),
                            transition('active => removed', animate('300ms ease-in')),
                        ]),
                    ]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: ToastPackage },
        { type: ApplicationRef }
    ]; };
    ToastComponent.propDecorators = {
        toastClasses: [{ type: HostBinding, args: ['class',] }],
        state: [{ type: HostBinding, args: ['@flyInOut',] }],
        tapToast: [{ type: HostListener, args: ['click',] }],
        stickAround: [{ type: HostListener, args: ['mouseenter',] }],
        delayedHideToast: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return ToastComponent;
}());
export { ToastComponent };
if (false) {
    /** @type {?} */
    ToastComponent.prototype.message;
    /** @type {?} */
    ToastComponent.prototype.title;
    /** @type {?} */
    ToastComponent.prototype.options;
    /**
     * width of progress bar
     * @type {?}
     */
    ToastComponent.prototype.width;
    /**
     * a combination of toast type and options.toastClass
     * @type {?}
     */
    ToastComponent.prototype.toastClasses;
    /**
     * controls animation
     * @type {?}
     */
    ToastComponent.prototype.state;
    /** @type {?} */
    ToastComponent.prototype.timeout;
    /** @type {?} */
    ToastComponent.prototype.intervalId;
    /** @type {?} */
    ToastComponent.prototype.hideTime;
    /** @type {?} */
    ToastComponent.prototype.sub;
    /** @type {?} */
    ToastComponent.prototype.sub1;
    /**
     * @type {?}
     * @protected
     */
    ToastComponent.prototype.toastService;
    /** @type {?} */
    ToastComponent.prototype.toastPackage;
    /**
     * @type {?}
     * @protected
     */
    ToastComponent.prototype.appRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxZQUFZLEVBQ1osY0FBYyxHQUNmLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsS0FBSyxFQUNOLE1BQU0scUJBQXFCLENBQUM7QUFLN0IsT0FBTyxFQUFnQixZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEU7SUFrQ0Usd0JBQ1MsWUFBMEIsRUFDdkIsTUFBc0I7UUFGbEMsaUJBZ0JDO1FBZlEsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7Ozs7UUFmbEMsVUFBSyxHQUFHLENBQUMsQ0FBQyxDQUFDOzs7O1FBRVcsaUJBQVksR0FBRyxFQUFFLENBQUM7Ozs7UUFFZCxVQUFLLEdBQUcsVUFBVSxDQUFDO1FBYTNDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUU3QyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFNLFlBQVksQ0FBQyxTQUFTLFNBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFZLENBQUM7UUFDbEYsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLFNBQVM7OztRQUFDO1lBQ3pELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTOzs7UUFBQztZQUN6RCxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hCLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ0Q7O09BRUc7Ozs7O0lBQ0gsc0NBQWE7Ozs7SUFBYjtRQUFBLGlCQWNDO1FBYkMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVOzs7WUFBQztnQkFDeEIsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLENBQUMsR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUM1RCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVc7OztnQkFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsRUFBRSxFQUFyQixDQUFxQixHQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2hFO1NBQ0Y7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBQ0Q7O09BRUc7Ozs7O0lBQ0gsdUNBQWM7Ozs7SUFBZDtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTztTQUNSOztZQUNLLEdBQUcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFDMUIsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3RELElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsK0JBQU07Ozs7SUFBTjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVTs7O1FBQUM7WUFDeEIsT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQztRQUFuRCxDQUFtRCxHQUNuRCxHQUFHLENBQ0osQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxzQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7O0lBR0QsaUNBQVE7OztJQURSO1FBRUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQURYO1FBRUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFDRCxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUVsQixzQkFBc0I7UUFDdEIsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQseUNBQWdCOzs7SUFEaEI7UUFBQSxpQkFZQztRQVZDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDbkUsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENBQWEsR0FBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXOzs7WUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGNBQWMsRUFBRSxFQUFyQixDQUFxQixHQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQzs7Z0JBbEpGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQix5dUJBQXFDO29CQUNyQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFVBQVUsRUFBRTs0QkFDbEIsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7Z0NBQ3RCLE9BQU8sRUFBRSxNQUFNO2dDQUNmLE9BQU8sRUFBRSxDQUFDOzZCQUNYLENBQUMsQ0FBQzs0QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzRCQUN2QyxLQUFLLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUN2QyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRCQUMxRCxVQUFVLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO3lCQUMxRCxDQUFDO3FCQUNIO2lCQUNGOzs7O2dCQWpCc0IsWUFBWTtnQkFkakMsY0FBYzs7OytCQXVDYixXQUFXLFNBQUMsT0FBTzt3QkFFbkIsV0FBVyxTQUFDLFdBQVc7MkJBc0Z2QixZQUFZLFNBQUMsT0FBTzs4QkFVcEIsWUFBWSxTQUFDLFlBQVk7bUNBYXpCLFlBQVksU0FBQyxZQUFZOztJQWE1QixxQkFBQztDQUFBLEFBbkpELElBbUpDO1NBbklZLGNBQWM7OztJQUN6QixpQ0FBMkI7O0lBQzNCLCtCQUFjOztJQUNkLGlDQUFzQjs7Ozs7SUFFdEIsK0JBQVc7Ozs7O0lBRVgsc0NBQXdDOzs7OztJQUV4QywrQkFBNkM7O0lBQzVDLGlDQUFhOztJQUNiLG9DQUFnQjs7SUFDaEIsa0NBQWlCOztJQUNqQiw2QkFBa0I7O0lBQ2xCLDhCQUFtQjs7Ozs7SUFFbkIsc0NBQTRCOztJQUczQixzQ0FBaUM7Ozs7O0lBQ2pDLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBBcHBsaWNhdGlvblJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0YXRlLFxuICB0cmFuc2l0aW9uLFxuICBhbmltYXRlLFxuICBzdHlsZVxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBHbG9iYWxDb25maWcsIFRvYXN0UGFja2FnZSwgdHNDb25maWcgfSBmcm9tICcuL3RvYXN0LmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi10b2FzdC1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignZmx5SW5PdXQnLCBbXG4gICAgICBzdGF0ZSgnaW5hY3RpdmUnLCBzdHlsZSh7XG4gICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2FjdGl2ZScsIHN0eWxlKHsgb3BhY2l0eTogLjUgfSkpLFxuICAgICAgc3RhdGUoJ3JlbW92ZWQnLCBzdHlsZSh7IG9wYWNpdHk6IDAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiByZW1vdmVkJywgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbicpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBtZXNzYWdlOiBzdHJpbmcgfCBTYWZlSHRtbDtcbiAgdGl0bGU6IHN0cmluZztcbiAgb3B0aW9uczogR2xvYmFsQ29uZmlnO1xuICAvKiogd2lkdGggb2YgcHJvZ3Jlc3MgYmFyICovXG4gIHdpZHRoID0gLTE7XG4gIC8qKiBhIGNvbWJpbmF0aW9uIG9mIHRvYXN0IHR5cGUgYW5kIG9wdGlvbnMudG9hc3RDbGFzcyAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgdG9hc3RDbGFzc2VzID0gJyc7XG4gIC8qKiBjb250cm9scyBhbmltYXRpb24gKi9cbiAgQEhvc3RCaW5kaW5nKCdAZmx5SW5PdXQnKSBzdGF0ZSA9ICdpbmFjdGl2ZSc7XG4gICB0aW1lb3V0OiBhbnk7XG4gICBpbnRlcnZhbElkOiBhbnk7XG4gICBoaWRlVGltZTogbnVtYmVyO1xuICAgc3ViOiBTdWJzY3JpcHRpb247XG4gICBzdWIxOiBTdWJzY3JpcHRpb247XG5cbiAgIHByb3RlY3RlZCB0b2FzdFNlcnZpY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdG9hc3RQYWNrYWdlOiBUb2FzdFBhY2thZ2UsXG4gICAgcHJvdGVjdGVkIGFwcFJlZjogQXBwbGljYXRpb25SZWZcbiAgKSB7XG4gICAgdGhpcy50b2FzdFNlcnZpY2UgPSB0c0NvbmZpZy5zZXJ2aWNlSW5zdGFuY2U7XG5cbiAgICB0aGlzLm1lc3NhZ2UgPSB0b2FzdFBhY2thZ2UubWVzc2FnZTtcbiAgICB0aGlzLnRpdGxlID0gdG9hc3RQYWNrYWdlLnRpdGxlO1xuICAgIHRoaXMub3B0aW9ucyA9IHRvYXN0UGFja2FnZS5jb25maWc7XG4gICAgdGhpcy50b2FzdENsYXNzZXMgPSBgJHt0b2FzdFBhY2thZ2UudG9hc3RUeXBlfSAke3RvYXN0UGFja2FnZS5jb25maWcudG9hc3RDbGFzc31gO1xuICAgIHRoaXMuc3ViID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0ZVRvYXN0KCk7XG4gICAgfSk7XG4gICAgdGhpcy5zdWIxID0gdG9hc3RQYWNrYWdlLnRvYXN0UmVmLm1hbnVhbENsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnN1YjEudW5zdWJzY3JpYmUoKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH1cbiAgLyoqXG4gICAqIGFjdGl2YXRlcyB0b2FzdCBhbmQgc2V0cyB0aW1lb3V0XG4gICAqL1xuICBhY3RpdmF0ZVRvYXN0KCkge1xuICAgIHRoaXMuc3RhdGUgPSAnYWN0aXZlJztcbiAgICBpZiAodGhpcy5vcHRpb25zLnRpbWVPdXQgIT09IDApIHtcbiAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgfSwgdGhpcy5vcHRpb25zLnRpbWVPdXQpO1xuICAgICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5vcHRpb25zLnRpbWVPdXQ7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlUHJvZ3Jlc3MoKSwgMTApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLm9uQWN0aXZhdGVUaWNrKSB7XG4gICAgICB0aGlzLmFwcFJlZi50aWNrKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiB1cGRhdGVzIHByb2dyZXNzIGJhciB3aWR0aFxuICAgKi9cbiAgdXBkYXRlUHJvZ3Jlc3MoKSB7XG4gICAgaWYgKHRoaXMud2lkdGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgcmVtYWluaW5nID0gdGhpcy5oaWRlVGltZSAtIG5vdztcbiAgICB0aGlzLndpZHRoID0gKHJlbWFpbmluZyAvIHRoaXMub3B0aW9ucy50aW1lT3V0KSAqIDEwMDtcbiAgICBpZiAodGhpcy53aWR0aCA8PSAwKSB7XG4gICAgICB0aGlzLndpZHRoID0gMDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogdGVsbHMgdG9hc3RyU2VydmljZSB0byByZW1vdmUgdGhpcyB0b2FzdCBhZnRlciBhbmltYXRpb24gdGltZVxuICAgKi9cbiAgcmVtb3ZlKCkge1xuICAgIGlmICh0aGlzLnN0YXRlID09PSAncmVtb3ZlZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy5zdGF0ZSA9ICdyZW1vdmVkJztcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+XG4gICAgICB0aGlzLnRvYXN0U2VydmljZS5yZW1vdmUodGhpcy50b2FzdFBhY2thZ2UudG9hc3RJZCksXG4gICAgICAzMDBcbiAgICApO1xuICB9XG5cbiAgb25BY3Rpb25DbGljaygpIHtcbiAgICB0aGlzLnRvYXN0UGFja2FnZS50cmlnZ2VyQWN0aW9uKCk7XG4gICAgdGhpcy5yZW1vdmUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgdGFwVG9hc3QoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRvYXN0UGFja2FnZS50cmlnZ2VyVGFwKCk7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50YXBUb0Rpc21pc3MpIHtcbiAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgfVxuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBzdGlja0Fyb3VuZCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gMDtcbiAgICB0aGlzLmhpZGVUaW1lID0gMDtcblxuICAgIC8vIGRpc2FibGUgcHJvZ3Jlc3NCYXJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XG4gICAgdGhpcy53aWR0aCA9IDA7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpXG4gIGRlbGF5ZWRIaWRlVG9hc3QoKSB7XG4gICAgaWYgKCt0aGlzLm9wdGlvbnMuZXh0ZW5kZWRUaW1lT3V0ID09PSAwIHx8IHRoaXMuc3RhdGUgPT09ICdyZW1vdmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmVtb3ZlKCksIHRoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQpO1xuICAgIHRoaXMub3B0aW9ucy50aW1lT3V0ID0gK3RoaXMub3B0aW9ucy5leHRlbmRlZFRpbWVPdXQ7XG4gICAgdGhpcy5oaWRlVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgdGhpcy5vcHRpb25zLnRpbWVPdXQ7XG4gICAgdGhpcy53aWR0aCA9IDEwMDtcbiAgICBpZiAodGhpcy5vcHRpb25zLnByb2dyZXNzQmFyKSB7XG4gICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZVByb2dyZXNzKCksIDEwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==