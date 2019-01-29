/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector, Inject, SecurityContext } from '@angular/core';
import { Overlay } from '../overlay/overlay';
import { ComponentPortal } from '../portal/portal';
import { ToastPackage, tsConfig } from './toast.config';
import { ToastInjector, ToastRef } from './toast.injector';
import { TOAST_CONFIG } from './toast.token';
import { ToastComponent } from './toast.component';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * @record
 */
export function ActiveToast() { }
if (false) {
    /** @type {?|undefined} */
    ActiveToast.prototype.toastId;
    /** @type {?|undefined} */
    ActiveToast.prototype.message;
    /** @type {?|undefined} */
    ActiveToast.prototype.portal;
    /** @type {?|undefined} */
    ActiveToast.prototype.toastRef;
    /** @type {?|undefined} */
    ActiveToast.prototype.onShown;
    /** @type {?|undefined} */
    ActiveToast.prototype.onHidden;
    /** @type {?|undefined} */
    ActiveToast.prototype.onTap;
    /** @type {?|undefined} */
    ActiveToast.prototype.onAction;
}
var ToastService = /** @class */ (function () {
    function ToastService(toastConfig, overlay, _injector, sanitizer) {
        this.toastConfig = toastConfig;
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.index = 0;
        this.previousToastMessage = '';
        this.currentlyActive = 0;
        this.toasts = [];
        tsConfig.serviceInstance = this;
        /**
         * @template T
         * @param {?} source
         * @param {?} defaultValue
         * @return {?}
         */
        function use(source, defaultValue) {
            return toastConfig && source !== undefined ? source : defaultValue;
        }
        this.toastConfig = this.applyConfig(toastConfig);
        // Global
        this.toastConfig.maxOpened = use(this.toastConfig.maxOpened, 0);
        this.toastConfig.autoDismiss = use(this.toastConfig.autoDismiss, false);
        this.toastConfig.newestOnTop = use(this.toastConfig.newestOnTop, true);
        this.toastConfig.preventDuplicates = use(this.toastConfig.preventDuplicates, false);
        if (!this.toastConfig.iconClasses) {
            this.toastConfig.iconClasses = {};
        }
        this.toastConfig.iconClasses.error = this.toastConfig.iconClasses.error || 'md-toast-error';
        this.toastConfig.iconClasses.info = this.toastConfig.iconClasses.info || 'md-toast-info';
        this.toastConfig.iconClasses.success = this.toastConfig.iconClasses.success || 'md-toast-success';
        this.toastConfig.iconClasses.warning = this.toastConfig.iconClasses.warning || 'md-toast-warning';
        // Individual
        this.toastConfig.timeOut = use(this.toastConfig.timeOut, 5000);
        this.toastConfig.closeButton = use(this.toastConfig.closeButton, false);
        this.toastConfig.extendedTimeOut = use(this.toastConfig.extendedTimeOut, 1000);
        this.toastConfig.progressBar = use(this.toastConfig.progressBar, false);
        this.toastConfig.enableHtml = use(this.toastConfig.enableHtml, false);
        this.toastConfig.toastClass = use(this.toastConfig.toastClass, 'md-toast');
        this.toastConfig.positionClass = use(this.toastConfig.positionClass, 'md-toast-top-right');
        this.toastConfig.titleClass = use(this.toastConfig.titleClass, 'md-toast-title');
        this.toastConfig.messageClass = use(this.toastConfig.messageClass, 'md-toast-message');
        this.toastConfig.tapToDismiss = use(this.toastConfig.tapToDismiss, true);
        this.toastConfig.toastComponent = use(this.toastConfig.toastComponent, ToastComponent);
        this.toastConfig.onActivateTick = use(this.toastConfig.onActivateTick, false);
        this.toastConfig.actionButton = use(this.toastConfig.actionButton, '');
    }
    /** show successful toast */
    // show(message: string, title?: string, override?: IndividualConfig, type = '') {
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    // show(message: string, title?: string, override?: IndividualConfig, type = '') {
    ToastService.prototype.show = /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    // show(message: string, title?: string, override?: IndividualConfig, type = '') {
    function (message, title, override, type) {
        if (type === void 0) { type = ''; }
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show successful toast */
    // success(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // success(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.success = /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // success(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.success;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show error toast */
    // error(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show error toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // error(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.error = /**
     * show error toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // error(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.error;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show info toast */
    // info(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show info toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // info(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.info = /**
     * show info toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // info(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.info;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /** show warning toast */
    // warning(message: string, title?: string, override?: IndividualConfig) {
    /**
     * show warning toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // warning(message: string, title?: string, override?: IndividualConfig) {
    ToastService.prototype.warning = /**
     * show warning toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // warning(message: string, title?: string, override?: IndividualConfig) {
    function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.warning;
        /** @type {?} */
        var type = this.toastConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * Remove all or a single toast by id
     */
    /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    ToastService.prototype.clear = /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    function (toastId) {
        var e_1, _a;
        // Call every toastRef manualClose function
        /** @type {?} */
        var toast;
        try {
            for (var _b = tslib_1.__values(this.toasts), _c = _b.next(); !_c.done; _c = _b.next()) {
                toast = _c.value;
                if (toastId !== undefined) {
                    if (toast.toastId === toastId) {
                        toast.toastRef.manualClose();
                        return;
                    }
                }
                else {
                    toast.toastRef.manualClose();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Remove and destroy a single toast by id
     */
    /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    ToastService.prototype.remove = /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    function (toastId) {
        // const found = this._findToast(toastId);
        /** @type {?} */
        var found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive <= +this.toastConfig.maxOpened && this.toasts[this.currentlyActive]) {
            // const p = this.toasts[this.currentlyActive].toastRef;
            /** @type {?} */
            var p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    /**
     * Determines if toast message is already shown
     */
    /**
     * Determines if toast message is already shown
     * @param {?} message
     * @return {?}
     */
    ToastService.prototype.isDuplicate = /**
     * Determines if toast message is already shown
     * @param {?} message
     * @return {?}
     */
    function (message) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    };
    /** create a clone of global config and apply individual settings */
    /**
     * create a clone of global config and apply individual settings
     * @private
     * @param {?=} override
     * @return {?}
     */
    ToastService.prototype.applyConfig = /**
     * create a clone of global config and apply individual settings
     * @private
     * @param {?=} override
     * @return {?}
     */
    function (override) {
        if (override === void 0) { override = {}; }
        /**
         * @template T
         * @param {?} source
         * @param {?} defaultValue
         * @return {?}
         */
        function use(source, defaultValue) {
            return override && source !== undefined ? source : defaultValue;
        }
        /** @type {?} */
        var current = tslib_1.__assign({}, this.toastConfig);
        current.closeButton = use(override.closeButton, current.closeButton);
        current.extendedTimeOut = use(override.extendedTimeOut, current.extendedTimeOut);
        current.progressBar = use(override.progressBar, current.progressBar);
        current.timeOut = use(override.timeOut, current.timeOut);
        current.enableHtml = use(override.enableHtml, current.enableHtml);
        current.toastClass = use(override.toastClass, current.toastClass);
        current.positionClass = use(override.positionClass, current.positionClass);
        current.titleClass = use(override.titleClass, current.titleClass);
        current.messageClass = use(override.messageClass, current.messageClass);
        current.tapToDismiss = use(override.tapToDismiss, current.tapToDismiss);
        current.toastComponent = use(override.toastComponent, current.toastComponent);
        current.onActivateTick = use(override.onActivateTick, current.onActivateTick);
        current.actionButton = use(override.actionButton, current.actionButton);
        return current;
    };
    /**
     * Find toast object by id
     */
    /**
     * Find toast object by id
     * @private
     * @param {?} toastId
     * @return {?}
     */
    ToastService.prototype._findToast = /**
     * Find toast object by id
     * @private
     * @param {?} toastId
     * @return {?}
     */
    function (toastId) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    };
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     */
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @private
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    ToastService.prototype._buildNotification = /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @private
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    function (toastType, message, title, config) {
        var _this = this;
        // max opened and auto dismiss = true
        if (this.toastConfig.preventDuplicates && this.isDuplicate(message)) {
            return null;
        }
        this.previousToastMessage = message;
        /** @type {?} */
        var keepInactive = false;
        if (this.toastConfig.maxOpened && this.currentlyActive >= this.toastConfig.maxOpened) {
            keepInactive = true;
            if (this.toastConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        /** @type {?} */
        var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        // let sanitizedMessage = message;
        /** @type {?} */
        var sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
        }
        /** @type {?} */
        var toastRef = new ToastRef(overlayRef);
        /** @type {?} */
        var toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        // const ins: ActiveToast = {
        /** @type {?} */
        var ins = {
            toastId: this.index,
            message: message,
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
        };
        /** @type {?} */
        var toastInjector = new ToastInjector(toastPackage, this._injector);
        /** @type {?} */
        var component = new ComponentPortal(config.toastComponent, toastInjector);
        ins.portal = overlayRef.attach(component, this.toastConfig.newestOnTop);
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    ToastService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [TOAST_CONFIG,] }] },
        { type: Overlay },
        { type: Injector },
        { type: DomSanitizer }
    ]; };
    return ToastService;
}());
export { ToastService };
if (false) {
    /** @type {?} */
    ToastService.prototype.index;
    /** @type {?} */
    ToastService.prototype.previousToastMessage;
    /** @type {?} */
    ToastService.prototype.currentlyActive;
    /** @type {?} */
    ToastService.prototype.toasts;
    /** @type {?} */
    ToastService.prototype.overlayContainer;
    /** @type {?} */
    ToastService.prototype.toastConfig;
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    ToastService.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWxlcnRzL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBa0MsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRXpELGlDQVNDOzs7SUFSQyw4QkFBaUI7O0lBQ2pCLDhCQUFpQjs7SUFDakIsNkJBQTJCOztJQUMzQiwrQkFBeUI7O0lBQ3pCLDhCQUEwQjs7SUFDMUIsK0JBQTJCOztJQUMzQiw0QkFBd0I7O0lBQ3hCLCtCQUEyQjs7QUFHN0I7SUFRRSxzQkFFK0IsV0FBK0IsRUFDcEQsT0FBZ0IsRUFDaEIsU0FBbUIsRUFDbkIsU0FBdUI7UUFIRixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDcEQsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFYakMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztR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QU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqRixPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRSxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5RSxPQUFPLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5RSxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZ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QyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixVQUFVLENBQUM7Z0JBQ1QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztnQkF2T0YsVUFBVTs7OztnREFVTixNQUFNLFNBQUMsWUFBWTtnQkE5QmYsT0FBTztnQkFISyxRQUFRO2dCQVVwQixZQUFZOztJQXFQckIsbUJBQUM7Q0FBQSxBQXhPRCxJQXdPQztTQXZPWSxZQUFZOzs7SUFDdkIsNkJBQVU7O0lBQ1YsNENBQTBCOztJQUMxQix1Q0FBb0I7O0lBQ3BCLDhCQUEyQjs7SUFDM0Isd0NBQTBDOztJQUl4QyxtQ0FBNEQ7Ozs7O0lBQzVELCtCQUF3Qjs7Ozs7SUFDeEIsaUNBQTJCOzs7OztJQUMzQixpQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBJbmplY3QsIFNlY3VyaXR5Q29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5JztcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuaW1wb3J0IHsgR2xvYmFsQ29uZmlnLCBJbmRpdmlkdWFsQ29uZmlnLCBUb2FzdFBhY2thZ2UsIHRzQ29uZmlnIH0gZnJvbSAnLi90b2FzdC5jb25maWcnO1xuaW1wb3J0IHsgVG9hc3RJbmplY3RvciwgVG9hc3RSZWYgfSBmcm9tICcuL3RvYXN0LmluamVjdG9yJztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b2FzdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVE9BU1RfQ09ORklHIH0gZnJvbSAnLi90b2FzdC50b2tlbic7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVRvYXN0IHtcbiAgdG9hc3RJZD86IG51bWJlcjtcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgcG9ydGFsPzogQ29tcG9uZW50UmVmPGFueT47XG4gIHRvYXN0UmVmPzogVG9hc3RSZWY8YW55PjtcbiAgb25TaG93bj86IE9ic2VydmFibGU8YW55PjtcbiAgb25IaWRkZW4/OiBPYnNlcnZhYmxlPGFueT47XG4gIG9uVGFwPzogT2JzZXJ2YWJsZTxhbnk+O1xuICBvbkFjdGlvbj86IE9ic2VydmFibGU8YW55Pjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG4gIGluZGV4ID0gMDtcbiAgcHJldmlvdXNUb2FzdE1lc3NhZ2UgPSAnJztcbiAgY3VycmVudGx5QWN0aXZlID0gMDtcbiAgdG9hc3RzOiBBY3RpdmVUb2FzdFtdID0gW107XG4gIG92ZXJsYXlDb250YWluZXI6IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIEBJbmplY3QoVE9BU1RfQ09ORklHKSBwdWJsaWMgdG9hc3RDb25maWc6IEdsb2JhbENvbmZpZyxcbiAgICBASW5qZWN0KFRPQVNUX0NPTkZJRykgcHVibGljIHRvYXN0Q29uZmlnOiBHbG9iYWxDb25maWcgfCBhbnksXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICApIHtcbiAgICB0c0NvbmZpZy5zZXJ2aWNlSW5zdGFuY2UgPSB0aGlzO1xuXG5cbiAgICBmdW5jdGlvbiB1c2U8VD4oc291cmNlOiBULCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcbiAgICAgIHJldHVybiB0b2FzdENvbmZpZyAmJiBzb3VyY2UgIT09IHVuZGVmaW5lZCA/IHNvdXJjZSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgdGhpcy50b2FzdENvbmZpZyA9IHRoaXMuYXBwbHlDb25maWcodG9hc3RDb25maWcpO1xuICAgIC8vIEdsb2JhbFxuICAgIHRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkID0gdXNlKHRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkLCAwKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmF1dG9EaXNtaXNzID0gdXNlKHRoaXMudG9hc3RDb25maWcuYXV0b0Rpc21pc3MsIGZhbHNlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLm5ld2VzdE9uVG9wID0gdXNlKHRoaXMudG9hc3RDb25maWcubmV3ZXN0T25Ub3AsIHRydWUpO1xuICAgIHRoaXMudG9hc3RDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB1c2UodGhpcy50b2FzdENvbmZpZy5wcmV2ZW50RHVwbGljYXRlcywgZmFsc2UpO1xuICAgIGlmICghdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcykge1xuICAgICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3NlcyA9IHt9O1xuICAgIH1cbiAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmVycm9yID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5lcnJvciB8fCAnbWQtdG9hc3QtZXJyb3InO1xuICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuaW5mbyA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuaW5mbyB8fCAnbWQtdG9hc3QtaW5mbyc7XG4gICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5zdWNjZXNzID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5zdWNjZXNzIHx8ICdtZC10b2FzdC1zdWNjZXNzJztcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLndhcm5pbmcgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLndhcm5pbmcgfHwgJ21kLXRvYXN0LXdhcm5pbmcnO1xuXG4gICAgLy8gSW5kaXZpZHVhbFxuICAgIHRoaXMudG9hc3RDb25maWcudGltZU91dCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnRpbWVPdXQsIDUwMDApO1xuICAgIHRoaXMudG9hc3RDb25maWcuY2xvc2VCdXR0b24gPSB1c2UodGhpcy50b2FzdENvbmZpZy5jbG9zZUJ1dHRvbiwgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcuZXh0ZW5kZWRUaW1lT3V0ID0gdXNlKHRoaXMudG9hc3RDb25maWcuZXh0ZW5kZWRUaW1lT3V0LCAxMDAwKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnByb2dyZXNzQmFyID0gdXNlKHRoaXMudG9hc3RDb25maWcucHJvZ3Jlc3NCYXIsIGZhbHNlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmVuYWJsZUh0bWwgPSB1c2UodGhpcy50b2FzdENvbmZpZy5lbmFibGVIdG1sLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy50b2FzdENsYXNzID0gdXNlKHRoaXMudG9hc3RDb25maWcudG9hc3RDbGFzcywgJ21kLXRvYXN0Jyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5wb3NpdGlvbkNsYXNzID0gdXNlKHRoaXMudG9hc3RDb25maWcucG9zaXRpb25DbGFzcywgJ21kLXRvYXN0LXRvcC1yaWdodCcpO1xuICAgIHRoaXMudG9hc3RDb25maWcudGl0bGVDbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnRpdGxlQ2xhc3MsICdtZC10b2FzdC10aXRsZScpO1xuICAgIHRoaXMudG9hc3RDb25maWcubWVzc2FnZUNsYXNzID0gdXNlKHRoaXMudG9hc3RDb25maWcubWVzc2FnZUNsYXNzLCAnbWQtdG9hc3QtbWVzc2FnZScpO1xuICAgIHRoaXMudG9hc3RDb25maWcudGFwVG9EaXNtaXNzID0gdXNlKHRoaXMudG9hc3RDb25maWcudGFwVG9EaXNtaXNzLCB0cnVlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRvYXN0Q29tcG9uZW50ID0gdXNlKHRoaXMudG9hc3RDb25maWcudG9hc3RDb21wb25lbnQsIFRvYXN0Q29tcG9uZW50KTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLm9uQWN0aXZhdGVUaWNrID0gdXNlKHRoaXMudG9hc3RDb25maWcub25BY3RpdmF0ZVRpY2ssIGZhbHNlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmFjdGlvbkJ1dHRvbiA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmFjdGlvbkJ1dHRvbiwgJycpO1xuICB9XG4gIC8qKiBzaG93IHN1Y2Nlc3NmdWwgdG9hc3QgKi9cbiAgLy8gc2hvdyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcsIHR5cGUgPSAnJykge1xuICAgIHNob3cobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnLCB0eXBlID0gJycpIHtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuICAvKiogc2hvdyBzdWNjZXNzZnVsIHRvYXN0ICovXG4gIC8vIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIHwgYW55LCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5zdWNjZXNzO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcztcbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuICAvKiogc2hvdyBlcnJvciB0b2FzdCAqL1xuICAvLyBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIHwgYW55LCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5lcnJvcjtcbiAgICBjb25zdCB0eXBlOiBhbnkgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmVycm9yO1xuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0eXBlLCBtZXNzYWdlLCB0aXRsZSwgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSkpO1xuICB9XG4gIC8qKiBzaG93IGluZm8gdG9hc3QgKi9cbiAgLy8gaW5mbyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcgfCBhbnksIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAvLyAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmluZm87XG4gICAgY29uc3QgdHlwZTogYW55ID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5pbmZvO1xuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0eXBlLCBtZXNzYWdlLCB0aXRsZSwgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSkpO1xuICB9XG4gIC8qKiBzaG93IHdhcm5pbmcgdG9hc3QgKi9cbiAgLy8gd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgICB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcgfCBhbnksIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAvLyAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLndhcm5pbmc7XG4gICAgY29uc3QgdHlwZTogYW55ID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nO1xuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0eXBlLCBtZXNzYWdlLCB0aXRsZSwgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSkpO1xuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIG9yIGEgc2luZ2xlIHRvYXN0IGJ5IGlkXG4gICAqL1xuICBjbGVhcih0b2FzdElkPzogbnVtYmVyKSB7XG4gICAgLy8gQ2FsbCBldmVyeSB0b2FzdFJlZiBtYW51YWxDbG9zZSBmdW5jdGlvblxuICAgIGxldCB0b2FzdDogYW55O1xuICAgIGZvciAodG9hc3Qgb2YgdGhpcy50b2FzdHMpIHtcbiAgICAgIGlmICh0b2FzdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRvYXN0LnRvYXN0SWQgPT09IHRvYXN0SWQpIHtcbiAgICAgICAgICB0b2FzdC50b2FzdFJlZi5tYW51YWxDbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9hc3QudG9hc3RSZWYubWFudWFsQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBhbmQgZGVzdHJveSBhIHNpbmdsZSB0b2FzdCBieSBpZFxuICAgKi9cbiAgcmVtb3ZlKHRvYXN0SWQ6IG51bWJlcikge1xuICAgIC8vIGNvbnN0IGZvdW5kID0gdGhpcy5fZmluZFRvYXN0KHRvYXN0SWQpO1xuICAgIGNvbnN0IGZvdW5kOiBhbnkgPSB0aGlzLl9maW5kVG9hc3QodG9hc3RJZCk7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3VuZC5hY3RpdmVUb2FzdC50b2FzdFJlZi5jbG9zZSgpO1xuICAgIHRoaXMudG9hc3RzLnNwbGljZShmb3VuZC5pbmRleCwgMSk7XG4gICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPSB0aGlzLmN1cnJlbnRseUFjdGl2ZSAtIDE7XG4gICAgaWYgKCF0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCB8fCAhdGhpcy50b2FzdHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRseUFjdGl2ZSA8PSArdGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQgJiYgdGhpcy50b2FzdHNbdGhpcy5jdXJyZW50bHlBY3RpdmVdKSB7XG4gICAgICAvLyBjb25zdCBwID0gdGhpcy50b2FzdHNbdGhpcy5jdXJyZW50bHlBY3RpdmVdLnRvYXN0UmVmO1xuICAgICAgY29uc3QgcDogYW55ID0gdGhpcy50b2FzdHNbdGhpcy5jdXJyZW50bHlBY3RpdmVdLnRvYXN0UmVmO1xuICAgICAgaWYgKCFwLmlzSW5hY3RpdmUoKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlICsgMTtcbiAgICAgICAgcC5hY3RpdmF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIGlmIHRvYXN0IG1lc3NhZ2UgaXMgYWxyZWFkeSBzaG93blxuICAgKi9cbiAgaXNEdXBsaWNhdGUobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvYXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudG9hc3RzW2ldLm1lc3NhZ2UgPT09IG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKiBjcmVhdGUgYSBjbG9uZSBvZiBnbG9iYWwgY29uZmlnIGFuZCBhcHBseSBpbmRpdmlkdWFsIHNldHRpbmdzICovXG4gIHByaXZhdGUgYXBwbHlDb25maWcob3ZlcnJpZGU6IEluZGl2aWR1YWxDb25maWcgPSB7fSk6IEdsb2JhbENvbmZpZyB7XG4gICAgZnVuY3Rpb24gdXNlPFQ+KHNvdXJjZTogVCwgZGVmYXVsdFZhbHVlOiBUKTogVCB7XG4gICAgICByZXR1cm4gb3ZlcnJpZGUgJiYgc291cmNlICE9PSB1bmRlZmluZWQgPyBzb3VyY2UgOiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IGN1cnJlbnQ6IEdsb2JhbENvbmZpZyA9IHsgLi4udGhpcy50b2FzdENvbmZpZyB9O1xuICAgIGN1cnJlbnQuY2xvc2VCdXR0b24gPSB1c2Uob3ZlcnJpZGUuY2xvc2VCdXR0b24sIGN1cnJlbnQuY2xvc2VCdXR0b24pO1xuICAgIGN1cnJlbnQuZXh0ZW5kZWRUaW1lT3V0ID0gdXNlKG92ZXJyaWRlLmV4dGVuZGVkVGltZU91dCwgY3VycmVudC5leHRlbmRlZFRpbWVPdXQpO1xuICAgIGN1cnJlbnQucHJvZ3Jlc3NCYXIgPSB1c2Uob3ZlcnJpZGUucHJvZ3Jlc3NCYXIsIGN1cnJlbnQucHJvZ3Jlc3NCYXIpO1xuICAgIGN1cnJlbnQudGltZU91dCA9IHVzZShvdmVycmlkZS50aW1lT3V0LCBjdXJyZW50LnRpbWVPdXQpO1xuICAgIGN1cnJlbnQuZW5hYmxlSHRtbCA9IHVzZShvdmVycmlkZS5lbmFibGVIdG1sLCBjdXJyZW50LmVuYWJsZUh0bWwpO1xuICAgIGN1cnJlbnQudG9hc3RDbGFzcyA9IHVzZShvdmVycmlkZS50b2FzdENsYXNzLCBjdXJyZW50LnRvYXN0Q2xhc3MpO1xuICAgIGN1cnJlbnQucG9zaXRpb25DbGFzcyA9IHVzZShvdmVycmlkZS5wb3NpdGlvbkNsYXNzLCBjdXJyZW50LnBvc2l0aW9uQ2xhc3MpO1xuICAgIGN1cnJlbnQudGl0bGVDbGFzcyA9IHVzZShvdmVycmlkZS50aXRsZUNsYXNzLCBjdXJyZW50LnRpdGxlQ2xhc3MpO1xuICAgIGN1cnJlbnQubWVzc2FnZUNsYXNzID0gdXNlKG92ZXJyaWRlLm1lc3NhZ2VDbGFzcywgY3VycmVudC5tZXNzYWdlQ2xhc3MpO1xuICAgIGN1cnJlbnQudGFwVG9EaXNtaXNzID0gdXNlKG92ZXJyaWRlLnRhcFRvRGlzbWlzcywgY3VycmVudC50YXBUb0Rpc21pc3MpO1xuICAgIGN1cnJlbnQudG9hc3RDb21wb25lbnQgPSB1c2Uob3ZlcnJpZGUudG9hc3RDb21wb25lbnQsIGN1cnJlbnQudG9hc3RDb21wb25lbnQpO1xuICAgIGN1cnJlbnQub25BY3RpdmF0ZVRpY2sgPSB1c2Uob3ZlcnJpZGUub25BY3RpdmF0ZVRpY2ssIGN1cnJlbnQub25BY3RpdmF0ZVRpY2spO1xuICAgIGN1cnJlbnQuYWN0aW9uQnV0dG9uID0gdXNlKG92ZXJyaWRlLmFjdGlvbkJ1dHRvbiwgY3VycmVudC5hY3Rpb25CdXR0b24pO1xuICAgIHJldHVybiBjdXJyZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdG9hc3Qgb2JqZWN0IGJ5IGlkXG4gICAqL1xuICBwcml2YXRlIF9maW5kVG9hc3QodG9hc3RJZDogbnVtYmVyKTogeyBpbmRleDogbnVtYmVyLCBhY3RpdmVUb2FzdDogQWN0aXZlVG9hc3QgfSB8IG51bGwge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b2FzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRvYXN0c1tpXS50b2FzdElkID09PSB0b2FzdElkKSB7XG4gICAgICAgIHJldHVybiB7IGluZGV4OiBpLCBhY3RpdmVUb2FzdDogdGhpcy50b2FzdHNbaV0gfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbmQgYXR0YWNoZXMgdG9hc3QgZGF0YSB0byBjb21wb25lbnRcbiAgICogcmV0dXJucyBudWxsIGlmIHRvYXN0IGlzIGR1cGxpY2F0ZSBhbmQgcHJldmVudER1cGxpY2F0ZXMgPT0gVHJ1ZVxuICAgKi9cbiAgcHJpdmF0ZSBfYnVpbGROb3RpZmljYXRpb24oXG4gICAgdG9hc3RUeXBlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY29uZmlnOiBHbG9iYWxDb25maWcsXG4gICk6IEFjdGl2ZVRvYXN0IHwgbnVsbCB8IGFueSB7XG4gICAgLy8gbWF4IG9wZW5lZCBhbmQgYXV0byBkaXNtaXNzID0gdHJ1ZVxuICAgIGlmICh0aGlzLnRvYXN0Q29uZmlnLnByZXZlbnREdXBsaWNhdGVzICYmIHRoaXMuaXNEdXBsaWNhdGUobWVzc2FnZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLnByZXZpb3VzVG9hc3RNZXNzYWdlID0gbWVzc2FnZTtcbiAgICBsZXQga2VlcEluYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKHRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkICYmIHRoaXMuY3VycmVudGx5QWN0aXZlID49IHRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkKSB7XG4gICAgICBrZWVwSW5hY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMudG9hc3RDb25maWcuYXV0b0Rpc21pc3MpIHtcbiAgICAgICAgdGhpcy5jbGVhcih0aGlzLnRvYXN0c1t0aGlzLnRvYXN0cy5sZW5ndGggLSAxXS50b2FzdElkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnLnBvc2l0aW9uQ2xhc3MsIHRoaXMub3ZlcmxheUNvbnRhaW5lcik7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuaW5kZXggKyAxO1xuICAgIC8vIGxldCBzYW5pdGl6ZWRNZXNzYWdlID0gbWVzc2FnZTtcbiAgICBsZXQgc2FuaXRpemVkTWVzc2FnZTogYW55ID0gbWVzc2FnZTtcbiAgICBpZiAobWVzc2FnZSAmJiBjb25maWcuZW5hYmxlSHRtbCkge1xuICAgICAgc2FuaXRpemVkTWVzc2FnZSA9IHRoaXMuc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgY29uc3QgdG9hc3RSZWYgPSBuZXcgVG9hc3RSZWYob3ZlcmxheVJlZik7XG4gICAgY29uc3QgdG9hc3RQYWNrYWdlID0gbmV3IFRvYXN0UGFja2FnZShcbiAgICAgIHRoaXMuaW5kZXgsXG4gICAgICBjb25maWcsXG4gICAgICBzYW5pdGl6ZWRNZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0b2FzdFR5cGUsXG4gICAgICB0b2FzdFJlZixcbiAgICApO1xuICAgIC8vIGNvbnN0IGluczogQWN0aXZlVG9hc3QgPSB7XG4gICAgICBjb25zdCBpbnM6IEFjdGl2ZVRvYXN0IHwgYW55ID0ge1xuICAgICAgdG9hc3RJZDogdGhpcy5pbmRleCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0b2FzdFJlZixcbiAgICAgIG9uU2hvd246IHRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKSxcbiAgICAgIG9uSGlkZGVuOiB0b2FzdFJlZi5hZnRlckNsb3NlZCgpLFxuICAgICAgb25UYXA6IHRvYXN0UGFja2FnZS5vblRhcCgpLFxuICAgICAgb25BY3Rpb246IHRvYXN0UGFja2FnZS5vbkFjdGlvbigpLFxuICAgIH07XG4gICAgY29uc3QgdG9hc3RJbmplY3RvciA9IG5ldyBUb2FzdEluamVjdG9yKHRvYXN0UGFja2FnZSwgdGhpcy5faW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29uZmlnLnRvYXN0Q29tcG9uZW50LCB0b2FzdEluamVjdG9yKTtcbiAgICBpbnMucG9ydGFsID0gb3ZlcmxheVJlZi5hdHRhY2goY29tcG9uZW50LCB0aGlzLnRvYXN0Q29uZmlnLm5ld2VzdE9uVG9wKTtcbiAgICBpZiAoIWtlZXBJbmFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlucy50b2FzdFJlZi5hY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRvYXN0cy5wdXNoKGlucyk7XG4gICAgcmV0dXJuIGlucztcbiAgfVxufVxuIl19