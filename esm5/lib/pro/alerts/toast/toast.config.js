/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
/**
 * Configuration for an individual toast.
 * @record
 */
export function IndividualConfig() { }
if (false) {
    /**
     * toast time to live in milliseconds
     * default: 5000
     * @type {?|undefined}
     */
    IndividualConfig.prototype.timeOut;
    /**
     * toast show close button
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.closeButton;
    /**
     * show toast progress bar
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.extendedTimeOut;
    /**
     * show toast progress bar
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.progressBar;
    /**
     * render html in toast message (possibly unsafe)
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.enableHtml;
    /**
     * css class on toast component
     * default: toast
     * @type {?|undefined}
     */
    IndividualConfig.prototype.toastClass;
    /**
     * css class on toast container
     * default: toast-top-right
     * @type {?|undefined}
     */
    IndividualConfig.prototype.positionClass;
    /**
     * css class on to toast title
     * default: toast-title
     * @type {?|undefined}
     */
    IndividualConfig.prototype.titleClass;
    /**
     * css class on to toast title
     * default: toast-title
     * @type {?|undefined}
     */
    IndividualConfig.prototype.messageClass;
    /**
     * clicking on toast dismisses it
     * default: true
     * @type {?|undefined}
     */
    IndividualConfig.prototype.tapToDismiss;
    /**
     * Angular toast component to be shown
     * default: Toast
     * @type {?|undefined}
     */
    IndividualConfig.prototype.toastComponent;
    /**
     * Helps show toast from a websocket or from event outside Angular
     * default: false
     * @type {?|undefined}
     */
    IndividualConfig.prototype.onActivateTick;
    /** @type {?|undefined} */
    IndividualConfig.prototype.actionButton;
}
/**
 * @record
 */
export function ToastIconClasses() { }
if (false) {
    /** @type {?|undefined} */
    ToastIconClasses.prototype.error;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.info;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.success;
    /** @type {?|undefined} */
    ToastIconClasses.prototype.warning;
}
// WARNING: interface has both a type and a value, skipping emit
/**
 * Remove warning message from angular-cli
 */
var /**
 * Remove warning message from angular-cli
 */
GlobalConfig = /** @class */ (function () {
    function GlobalConfig() {
    }
    return GlobalConfig;
}());
/**
 * Remove warning message from angular-cli
 */
export { GlobalConfig };
/**
 * Everything a toast needs to launch
 */
var /**
 * Everything a toast needs to launch
 */
ToastPackage = /** @class */ (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
    }
    /** Fired on click */
    /**
     * Fired on click
     * @return {?}
     */
    ToastPackage.prototype.triggerTap = /**
     * Fired on click
     * @return {?}
     */
    function () {
        this._onTap.next();
        this._onTap.complete();
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onTap = /**
     * @return {?}
     */
    function () {
        return this._onTap.asObservable();
    };
    /** available for use in custom toast */
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    ToastPackage.prototype.triggerAction = /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        this._onAction.next(action);
        this._onAction.complete();
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onAction = /**
     * @return {?}
     */
    function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());
/**
 * Everything a toast needs to launch
 */
export { ToastPackage };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToastPackage.prototype._onTap;
    /**
     * @type {?}
     * @private
     */
    ToastPackage.prototype._onAction;
    /** @type {?} */
    ToastPackage.prototype.toastId;
    /** @type {?} */
    ToastPackage.prototype.config;
    /** @type {?} */
    ToastPackage.prototype.message;
    /** @type {?} */
    ToastPackage.prototype.title;
    /** @type {?} */
    ToastPackage.prototype.toastType;
    /** @type {?} */
    ToastPackage.prototype.toastRef;
}
/** @type {?} */
export var tsConfig = {
    serviceInstance: new Object()
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFRNUMsc0NBa0VBOzs7Ozs7O0lBNURDLG1DQUF1Qjs7Ozs7O0lBS3ZCLHVDQUFzQjs7Ozs7O0lBT3RCLDJDQUErQjs7Ozs7O0lBSy9CLHVDQUFzQjs7Ozs7O0lBS3RCLHNDQUFxQjs7Ozs7O0lBS3JCLHNDQUFvQjs7Ozs7O0lBS3BCLHlDQUE2Qjs7Ozs7O0lBSzdCLHNDQUFvQjs7Ozs7O0lBS3BCLHdDQUFzQjs7Ozs7O0lBS3RCLHdDQUF1Qjs7Ozs7O0lBS3ZCLDBDQUEwQzs7Ozs7O0lBSzFDLDBDQUF5Qjs7SUFFekIsd0NBQXNCOzs7OztBQUd4QixzQ0FLQzs7O0lBSkMsaUNBQWU7O0lBQ2YsZ0NBQWM7O0lBQ2QsbUNBQWlCOztJQUNqQixtQ0FBaUI7Ozs7OztBQWtDbkI7Ozs7SUFBQTtJQUEyQixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCOzs7Ozs7OztBQUk1Qjs7OztJQUlFLHNCQUNTLE9BQWUsRUFDZixNQUF3QixFQUN4QixPQUEwQixFQUMxQixLQUFhLEVBQ2IsU0FBaUIsRUFDakIsUUFBdUI7UUFMdkIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFUeEIsV0FBTSxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLGNBQVMsR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQVM1QyxDQUFDO0lBRUwscUJBQXFCOzs7OztJQUNyQixpQ0FBVTs7OztJQUFWO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCw0QkFBSzs7O0lBQUw7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELHdDQUF3Qzs7Ozs7O0lBQ3hDLG9DQUFhOzs7OztJQUFiLFVBQWMsTUFBWTtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCwrQkFBUTs7O0lBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQzs7Ozs7Ozs7OztJQWhDQyw4QkFBNkM7Ozs7O0lBQzdDLGlDQUFnRDs7SUFHOUMsK0JBQXNCOztJQUN0Qiw4QkFBK0I7O0lBQy9CLCtCQUFpQzs7SUFDakMsNkJBQW9COztJQUNwQixpQ0FBd0I7O0lBQ3hCLGdDQUE4Qjs7O0FBMEJsQyxNQUFNLEtBQU8sUUFBUSxHQUFHO0lBQ3RCLGVBQWUsRUFBRSxJQUFJLE1BQU0sRUFBRTtDQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWluZmVycmFibGUtdHlwZXMgKi9cbmltcG9ydCB7IFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7IFN1YmplY3QgLCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAnLi4vcG9ydGFsL3BvcnRhbCc7XG5pbXBvcnQgeyBUb2FzdFJlZiB9IGZyb20gJy4vdG9hc3QuaW5qZWN0b3InO1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gZm9yIGFuIGluZGl2aWR1YWwgdG9hc3QuXG4gKi9cbiBleHBvcnQgaW50ZXJmYWNlIEluZGl2aWR1YWxDb25maWcge1xuICAvKipcbiAgKiB0b2FzdCB0aW1lIHRvIGxpdmUgaW4gbWlsbGlzZWNvbmRzXG4gICogZGVmYXVsdDogNTAwMFxuICAqL1xuICAvLyB0aW1lT3V0PzogbnVtYmVyO1xuICB0aW1lT3V0PzogbnVtYmVyIHwgYW55O1xuICAvKipcbiAgKiB0b2FzdCBzaG93IGNsb3NlIGJ1dHRvblxuICAqIGRlZmF1bHQ6IGZhbHNlXG4gICovXG4gIGNsb3NlQnV0dG9uPzogYm9vbGVhbjtcbiAgLyoqIHRpbWUgdG8gY2xvc2UgYWZ0ZXIgYSB1c2VyIGhvdmVycyBvdmVyIHRvYXN0ICovXG4gIC8qKlxuICAgKiBzaG93IHRvYXN0IHByb2dyZXNzIGJhclxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgLy8gZXh0ZW5kZWRUaW1lT3V0PzogbnVtYmVyO1xuICBleHRlbmRlZFRpbWVPdXQ/OiBudW1iZXIgfCBhbnk7XG4gIC8qKlxuICAgKiBzaG93IHRvYXN0IHByb2dyZXNzIGJhclxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgcHJvZ3Jlc3NCYXI/OiBib29sZWFuO1xuICAvKipcbiAgICogcmVuZGVyIGh0bWwgaW4gdG9hc3QgbWVzc2FnZSAocG9zc2libHkgdW5zYWZlKVxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgZW5hYmxlSHRtbD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgY29tcG9uZW50XG4gICAqIGRlZmF1bHQ6IHRvYXN0XG4gICAqL1xuICB0b2FzdENsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogY3NzIGNsYXNzIG9uIHRvYXN0IGNvbnRhaW5lclxuICAgKiBkZWZhdWx0OiB0b2FzdC10b3AtcmlnaHRcbiAgICovXG4gIHBvc2l0aW9uQ2xhc3M/OiBzdHJpbmcgfCBhbnk7XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG8gdG9hc3QgdGl0bGVcbiAgICogZGVmYXVsdDogdG9hc3QtdGl0bGVcbiAgICovXG4gIHRpdGxlQ2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG8gdG9hc3QgdGl0bGVcbiAgICogZGVmYXVsdDogdG9hc3QtdGl0bGVcbiAgICovXG4gIG1lc3NhZ2VDbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGNsaWNraW5nIG9uIHRvYXN0IGRpc21pc3NlcyBpdFxuICAgKiBkZWZhdWx0OiB0cnVlXG4gICAqL1xuICB0YXBUb0Rpc21pc3M/OiBib29sZWFuO1xuICAvKipcbiAgICogQW5ndWxhciB0b2FzdCBjb21wb25lbnQgdG8gYmUgc2hvd25cbiAgICogZGVmYXVsdDogVG9hc3RcbiAgICovXG4gIHRvYXN0Q29tcG9uZW50PzogQ29tcG9uZW50VHlwZTxhbnk+IHwgYW55O1xuICAvKipcbiAgICogSGVscHMgc2hvdyB0b2FzdCBmcm9tIGEgd2Vic29ja2V0IG9yIGZyb20gZXZlbnQgb3V0c2lkZSBBbmd1bGFyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBvbkFjdGl2YXRlVGljaz86IGJvb2xlYW47XG5cbiAgYWN0aW9uQnV0dG9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0SWNvbkNsYXNzZXMge1xuICBlcnJvcj86IHN0cmluZztcbiAgaW5mbz86IHN0cmluZztcbiAgc3VjY2Vzcz86IHN0cmluZztcbiAgd2FybmluZz86IHN0cmluZztcbn1cblxuLyoqXG4gKiBHbG9iYWwgVG9hc3QgY29uZmlndXJhdGlvblxuICogSW5jbHVkZXMgYWxsIEluZGl2aWR1YWxDb25maWdcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBHbG9iYWxDb25maWcgZXh0ZW5kcyBJbmRpdmlkdWFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIG1heCB0b2FzdHMgb3BlbmVkLiBUb2FzdHMgd2lsbCBiZSBxdWV1ZWRcbiAgICogWmVybyBpcyB1bmxpbWl0ZWRcbiAgICogZGVmYXVsdDogMFxuICAgKi9cbiAgbWF4T3BlbmVkPzogbnVtYmVyO1xuICAvKipcbiAgICogZGlzbWlzcyBjdXJyZW50IHRvYXN0IHdoZW4gbWF4IGlzIHJlYWNoZWRcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIGF1dG9EaXNtaXNzPzogYm9vbGVhbjtcbiAgaWNvbkNsYXNzZXM/OiBUb2FzdEljb25DbGFzc2VzO1xuICAvKipcbiAgICogTmV3IHRvYXN0IHBsYWNlbWVudFxuICAgKiBkZWZhdWx0OiB0cnVlXG4gICAqL1xuICBuZXdlc3RPblRvcD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBibG9jayBkdXBsaWNhdGUgbWVzc2FnZXNcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIHByZXZlbnREdXBsaWNhdGVzPzogYm9vbGVhbjtcbn1cbi8qKlxuICogUmVtb3ZlIHdhcm5pbmcgbWVzc2FnZSBmcm9tIGFuZ3VsYXItY2xpXG4gKi9cbmV4cG9ydCBjbGFzcyBHbG9iYWxDb25maWcge31cbi8qKlxuICogRXZlcnl0aGluZyBhIHRvYXN0IG5lZWRzIHRvIGxhdW5jaFxuICovXG5leHBvcnQgY2xhc3MgVG9hc3RQYWNrYWdlIHtcbiAgcHJpdmF0ZSBfb25UYXA6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gIHByaXZhdGUgX29uQWN0aW9uOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0b2FzdElkOiBudW1iZXIsXG4gICAgcHVibGljIGNvbmZpZzogSW5kaXZpZHVhbENvbmZpZyxcbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nIHwgU2FmZUh0bWwsXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcsXG4gICAgcHVibGljIHRvYXN0VHlwZTogc3RyaW5nLFxuICAgIHB1YmxpYyB0b2FzdFJlZjogVG9hc3RSZWY8YW55PixcbiAgKSB7IH1cblxuICAvKiogRmlyZWQgb24gY2xpY2sgKi9cbiAgdHJpZ2dlclRhcCgpIHtcbiAgICB0aGlzLl9vblRhcC5uZXh0KCk7XG4gICAgdGhpcy5fb25UYXAuY29tcGxldGUoKTtcbiAgfVxuXG4gIG9uVGFwKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX29uVGFwLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqIGF2YWlsYWJsZSBmb3IgdXNlIGluIGN1c3RvbSB0b2FzdCAqL1xuICB0cmlnZ2VyQWN0aW9uKGFjdGlvbj86IGFueSkge1xuICAgIHRoaXMuX29uQWN0aW9uLm5leHQoYWN0aW9uKTtcbiAgICB0aGlzLl9vbkFjdGlvbi5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25BY3Rpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb25BY3Rpb24uYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxufVxuXG5cbmV4cG9ydCBjb25zdCB0c0NvbmZpZyA9IHtcbiAgc2VydmljZUluc3RhbmNlOiBuZXcgT2JqZWN0KClcbn07XG4iXX0=