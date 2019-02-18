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
export class GlobalConfig {
}
/**
 * Everything a toast needs to launch
 */
export class ToastPackage {
    /**
     * @param {?} toastId
     * @param {?} config
     * @param {?} message
     * @param {?} title
     * @param {?} toastType
     * @param {?} toastRef
     */
    constructor(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
    }
    /**
     * Fired on click
     * @return {?}
     */
    triggerTap() {
        this._onTap.next();
        this._onTap.complete();
    }
    /**
     * @return {?}
     */
    onTap() {
        return this._onTap.asObservable();
    }
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    triggerAction(action) {
        this._onAction.next(action);
        this._onAction.complete();
    }
    /**
     * @return {?}
     */
    onAction() {
        return this._onAction.asObservable();
    }
}
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
export const tsConfig = {
    serviceInstance: new Object()
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFRNUMsc0NBa0VBOzs7Ozs7O0lBNURDLG1DQUF1Qjs7Ozs7O0lBS3ZCLHVDQUFzQjs7Ozs7O0lBT3RCLDJDQUErQjs7Ozs7O0lBSy9CLHVDQUFzQjs7Ozs7O0lBS3RCLHNDQUFxQjs7Ozs7O0lBS3JCLHNDQUFvQjs7Ozs7O0lBS3BCLHlDQUE2Qjs7Ozs7O0lBSzdCLHNDQUFvQjs7Ozs7O0lBS3BCLHdDQUFzQjs7Ozs7O0lBS3RCLHdDQUF1Qjs7Ozs7O0lBS3ZCLDBDQUEwQzs7Ozs7O0lBSzFDLDBDQUF5Qjs7SUFFekIsd0NBQXNCOzs7OztBQUd4QixzQ0FLQzs7O0lBSkMsaUNBQWU7O0lBQ2YsZ0NBQWM7O0lBQ2QsbUNBQWlCOztJQUNqQixtQ0FBaUI7Ozs7OztBQWtDbkIsTUFBTSxPQUFPLFlBQVk7Q0FBRzs7OztBQUk1QixNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7O0lBSXZCLFlBQ1MsT0FBZSxFQUNmLE1BQXdCLEVBQ3hCLE9BQTBCLEVBQzFCLEtBQWEsRUFDYixTQUFpQixFQUNqQixRQUF1QjtRQUx2QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBZTtRQVR4QixXQUFNLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDckMsY0FBUyxHQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO0lBUzVDLENBQUM7Ozs7O0lBR0wsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7SUFHRCxhQUFhLENBQUMsTUFBWTtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Q0FFRjs7Ozs7O0lBaENDLDhCQUE2Qzs7Ozs7SUFDN0MsaUNBQWdEOztJQUc5QywrQkFBc0I7O0lBQ3RCLDhCQUErQjs7SUFDL0IsK0JBQWlDOztJQUNqQyw2QkFBb0I7O0lBQ3BCLGlDQUF3Qjs7SUFDeEIsZ0NBQThCOzs7QUEwQmxDLE1BQU0sT0FBTyxRQUFRLEdBQUc7SUFDdEIsZUFBZSxFQUFFLElBQUksTUFBTSxFQUFFO0NBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGU6bm8taW5mZXJyYWJsZS10eXBlcyAqL1xuaW1wb3J0IHsgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHsgU3ViamVjdCAsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsJztcbmltcG9ydCB7IFRvYXN0UmVmIH0gZnJvbSAnLi90b2FzdC5pbmplY3Rvcic7XG5cbi8qKlxuICogQ29uZmlndXJhdGlvbiBmb3IgYW4gaW5kaXZpZHVhbCB0b2FzdC5cbiAqL1xuIGV4cG9ydCBpbnRlcmZhY2UgSW5kaXZpZHVhbENvbmZpZyB7XG4gIC8qKlxuICAqIHRvYXN0IHRpbWUgdG8gbGl2ZSBpbiBtaWxsaXNlY29uZHNcbiAgKiBkZWZhdWx0OiA1MDAwXG4gICovXG4gIC8vIHRpbWVPdXQ/OiBudW1iZXI7XG4gIHRpbWVPdXQ/OiBudW1iZXIgfCBhbnk7XG4gIC8qKlxuICAqIHRvYXN0IHNob3cgY2xvc2UgYnV0dG9uXG4gICogZGVmYXVsdDogZmFsc2VcbiAgKi9cbiAgY2xvc2VCdXR0b24/OiBib29sZWFuO1xuICAvKiogdGltZSB0byBjbG9zZSBhZnRlciBhIHVzZXIgaG92ZXJzIG92ZXIgdG9hc3QgKi9cbiAgLyoqXG4gICAqIHNob3cgdG9hc3QgcHJvZ3Jlc3MgYmFyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICAvLyBleHRlbmRlZFRpbWVPdXQ/OiBudW1iZXI7XG4gIGV4dGVuZGVkVGltZU91dD86IG51bWJlciB8IGFueTtcbiAgLyoqXG4gICAqIHNob3cgdG9hc3QgcHJvZ3Jlc3MgYmFyXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBwcm9ncmVzc0Jhcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiByZW5kZXIgaHRtbCBpbiB0b2FzdCBtZXNzYWdlIChwb3NzaWJseSB1bnNhZmUpXG4gICAqIGRlZmF1bHQ6IGZhbHNlXG4gICAqL1xuICBlbmFibGVIdG1sPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0b2FzdCBjb21wb25lbnRcbiAgICogZGVmYXVsdDogdG9hc3RcbiAgICovXG4gIHRvYXN0Q2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBjc3MgY2xhc3Mgb24gdG9hc3QgY29udGFpbmVyXG4gICAqIGRlZmF1bHQ6IHRvYXN0LXRvcC1yaWdodFxuICAgKi9cbiAgcG9zaXRpb25DbGFzcz86IHN0cmluZyB8IGFueTtcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0byB0b2FzdCB0aXRsZVxuICAgKiBkZWZhdWx0OiB0b2FzdC10aXRsZVxuICAgKi9cbiAgdGl0bGVDbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICAqIGNzcyBjbGFzcyBvbiB0byB0b2FzdCB0aXRsZVxuICAgKiBkZWZhdWx0OiB0b2FzdC10aXRsZVxuICAgKi9cbiAgbWVzc2FnZUNsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogY2xpY2tpbmcgb24gdG9hc3QgZGlzbWlzc2VzIGl0XG4gICAqIGRlZmF1bHQ6IHRydWVcbiAgICovXG4gIHRhcFRvRGlzbWlzcz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBbmd1bGFyIHRvYXN0IGNvbXBvbmVudCB0byBiZSBzaG93blxuICAgKiBkZWZhdWx0OiBUb2FzdFxuICAgKi9cbiAgdG9hc3RDb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPGFueT4gfCBhbnk7XG4gIC8qKlxuICAgKiBIZWxwcyBzaG93IHRvYXN0IGZyb20gYSB3ZWJzb2NrZXQgb3IgZnJvbSBldmVudCBvdXRzaWRlIEFuZ3VsYXJcbiAgICogZGVmYXVsdDogZmFsc2VcbiAgICovXG4gIG9uQWN0aXZhdGVUaWNrPzogYm9vbGVhbjtcblxuICBhY3Rpb25CdXR0b24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVG9hc3RJY29uQ2xhc3NlcyB7XG4gIGVycm9yPzogc3RyaW5nO1xuICBpbmZvPzogc3RyaW5nO1xuICBzdWNjZXNzPzogc3RyaW5nO1xuICB3YXJuaW5nPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEdsb2JhbCBUb2FzdCBjb25maWd1cmF0aW9uXG4gKiBJbmNsdWRlcyBhbGwgSW5kaXZpZHVhbENvbmZpZ1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEdsb2JhbENvbmZpZyBleHRlbmRzIEluZGl2aWR1YWxDb25maWcge1xuICAvKipcbiAgICogbWF4IHRvYXN0cyBvcGVuZWQuIFRvYXN0cyB3aWxsIGJlIHF1ZXVlZFxuICAgKiBaZXJvIGlzIHVubGltaXRlZFxuICAgKiBkZWZhdWx0OiAwXG4gICAqL1xuICBtYXhPcGVuZWQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBkaXNtaXNzIGN1cnJlbnQgdG9hc3Qgd2hlbiBtYXggaXMgcmVhY2hlZFxuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgYXV0b0Rpc21pc3M/OiBib29sZWFuO1xuICBpY29uQ2xhc3Nlcz86IFRvYXN0SWNvbkNsYXNzZXM7XG4gIC8qKlxuICAgKiBOZXcgdG9hc3QgcGxhY2VtZW50XG4gICAqIGRlZmF1bHQ6IHRydWVcbiAgICovXG4gIG5ld2VzdE9uVG9wPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIGJsb2NrIGR1cGxpY2F0ZSBtZXNzYWdlc1xuICAgKiBkZWZhdWx0OiBmYWxzZVxuICAgKi9cbiAgcHJldmVudER1cGxpY2F0ZXM/OiBib29sZWFuO1xufVxuLyoqXG4gKiBSZW1vdmUgd2FybmluZyBtZXNzYWdlIGZyb20gYW5ndWxhci1jbGlcbiAqL1xuZXhwb3J0IGNsYXNzIEdsb2JhbENvbmZpZyB7fVxuLyoqXG4gKiBFdmVyeXRoaW5nIGEgdG9hc3QgbmVlZHMgdG8gbGF1bmNoXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2FzdFBhY2thZ2Uge1xuICBwcml2YXRlIF9vblRhcDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcbiAgcHJpdmF0ZSBfb25BY3Rpb246IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRvYXN0SWQ6IG51bWJlcixcbiAgICBwdWJsaWMgY29uZmlnOiBJbmRpdmlkdWFsQ29uZmlnLFxuICAgIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgfCBTYWZlSHRtbCxcbiAgICBwdWJsaWMgdGl0bGU6IHN0cmluZyxcbiAgICBwdWJsaWMgdG9hc3RUeXBlOiBzdHJpbmcsXG4gICAgcHVibGljIHRvYXN0UmVmOiBUb2FzdFJlZjxhbnk+LFxuICApIHsgfVxuXG4gIC8qKiBGaXJlZCBvbiBjbGljayAqL1xuICB0cmlnZ2VyVGFwKCkge1xuICAgIHRoaXMuX29uVGFwLm5leHQoKTtcbiAgICB0aGlzLl9vblRhcC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgb25UYXAoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb25UYXAuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKiogYXZhaWxhYmxlIGZvciB1c2UgaW4gY3VzdG9tIHRvYXN0ICovXG4gIHRyaWdnZXJBY3Rpb24oYWN0aW9uPzogYW55KSB7XG4gICAgdGhpcy5fb25BY3Rpb24ubmV4dChhY3Rpb24pO1xuICAgIHRoaXMuX29uQWN0aW9uLmNvbXBsZXRlKCk7XG4gIH1cblxuICBvbkFjdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9vbkFjdGlvbi5hc09ic2VydmFibGUoKTtcbiAgfVxuXG59XG5cblxuZXhwb3J0IGNvbnN0IHRzQ29uZmlnID0ge1xuICBzZXJ2aWNlSW5zdGFuY2U6IG5ldyBPYmplY3QoKVxufTtcbiJdfQ==