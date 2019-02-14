/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            setTimeout((/**
             * @return {?}
             */
            function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWxlcnRzL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ25ELE9BQU8sRUFBa0MsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRXpELGlDQVNDOzs7SUFSQyw4QkFBaUI7O0lBQ2pCLDhCQUFpQjs7SUFDakIsNkJBQTJCOztJQUMzQiwrQkFBeUI7O0lBQ3pCLDhCQUEwQjs7SUFDMUIsK0JBQTJCOztJQUMzQiw0QkFBd0I7O0lBQ3hCLCtCQUEyQjs7QUFHN0I7SUFRRSxzQkFFK0IsV0FBK0IsRUFDcEQsT0FBZ0IsRUFDaEIsU0FBbUIsRUFDbkIsU0FBdUI7UUFIRixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDcEQsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFYakMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztR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QU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqRixPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRSxPQUFPLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzRSxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RSxPQUFPLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5RSxPQUFPLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM5RSxPQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZ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QyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQixVQUFVOzs7WUFBQztnQkFDVCxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN4QixLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1lBQ2xELENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2dCQXZPRixVQUFVOzs7O2dEQVVOLE1BQU0sU0FBQyxZQUFZO2dCQTlCZixPQUFPO2dCQUhLLFFBQVE7Z0JBVXBCLFlBQVk7O0lBcVByQixtQkFBQztDQUFBLEFBeE9ELElBd09DO1NBdk9ZLFlBQVk7OztJQUN2Qiw2QkFBVTs7SUFDViw0Q0FBMEI7O0lBQzFCLHVDQUFvQjs7SUFDcEIsOEJBQTJCOztJQUMzQix3Q0FBMEM7O0lBSXhDLG1DQUE0RDs7Ozs7SUFDNUQsK0JBQXdCOzs7OztJQUN4QixpQ0FBMkI7Ozs7O0lBQzNCLGlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBDb21wb25lbnRSZWYsIEluamVjdCwgU2VjdXJpdHlDb250ZXh0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICcuLi9vdmVybGF5L292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsIH0gZnJvbSAnLi4vcG9ydGFsL3BvcnRhbCc7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcsIEluZGl2aWR1YWxDb25maWcsIFRvYXN0UGFja2FnZSwgdHNDb25maWcgfSBmcm9tICcuL3RvYXN0LmNvbmZpZyc7XG5pbXBvcnQgeyBUb2FzdEluamVjdG9yLCBUb2FzdFJlZiB9IGZyb20gJy4vdG9hc3QuaW5qZWN0b3InO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXJEaXJlY3RpdmUgfSBmcm9tICcuL3RvYXN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUT0FTVF9DT05GSUcgfSBmcm9tICcuL3RvYXN0LnRva2VuJztcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlVG9hc3Qge1xuICB0b2FzdElkPzogbnVtYmVyO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBwb3J0YWw/OiBDb21wb25lbnRSZWY8YW55PjtcbiAgdG9hc3RSZWY/OiBUb2FzdFJlZjxhbnk+O1xuICBvblNob3duPzogT2JzZXJ2YWJsZTxhbnk+O1xuICBvbkhpZGRlbj86IE9ic2VydmFibGU8YW55PjtcbiAgb25UYXA/OiBPYnNlcnZhYmxlPGFueT47XG4gIG9uQWN0aW9uPzogT2JzZXJ2YWJsZTxhbnk+O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcbiAgaW5kZXggPSAwO1xuICBwcmV2aW91c1RvYXN0TWVzc2FnZSA9ICcnO1xuICBjdXJyZW50bHlBY3RpdmUgPSAwO1xuICB0b2FzdHM6IEFjdGl2ZVRvYXN0W10gPSBbXTtcbiAgb3ZlcmxheUNvbnRhaW5lcjogVG9hc3RDb250YWluZXJEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gQEluamVjdChUT0FTVF9DT05GSUcpIHB1YmxpYyB0b2FzdENvbmZpZzogR2xvYmFsQ29uZmlnLFxuICAgIEBJbmplY3QoVE9BU1RfQ09ORklHKSBwdWJsaWMgdG9hc3RDb25maWc6IEdsb2JhbENvbmZpZyB8IGFueSxcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICkge1xuICAgIHRzQ29uZmlnLnNlcnZpY2VJbnN0YW5jZSA9IHRoaXM7XG5cblxuICAgIGZ1bmN0aW9uIHVzZTxUPihzb3VyY2U6IFQsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuICAgICAgcmV0dXJuIHRvYXN0Q29uZmlnICYmIHNvdXJjZSAhPT0gdW5kZWZpbmVkID8gc291cmNlIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnRvYXN0Q29uZmlnID0gdGhpcy5hcHBseUNvbmZpZyh0b2FzdENvbmZpZyk7XG4gICAgLy8gR2xvYmFsXG4gICAgdGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQgPSB1c2UodGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQsIDApO1xuICAgIHRoaXMudG9hc3RDb25maWcuYXV0b0Rpc21pc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy5hdXRvRGlzbWlzcywgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcubmV3ZXN0T25Ub3AgPSB1c2UodGhpcy50b2FzdENvbmZpZy5uZXdlc3RPblRvcCwgdHJ1ZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnByZXZlbnREdXBsaWNhdGVzLCBmYWxzZSk7XG4gICAgaWYgKCF0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzKSB7XG4gICAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzID0ge307XG4gICAgfVxuICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuZXJyb3IgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmVycm9yIHx8ICdtZC10b2FzdC1lcnJvcic7XG4gICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5pbmZvID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5pbmZvIHx8ICdtZC10b2FzdC1pbmZvJztcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLnN1Y2Nlc3MgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLnN1Y2Nlc3MgfHwgJ21kLXRvYXN0LXN1Y2Nlc3MnO1xuICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMud2FybmluZyA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMud2FybmluZyB8fCAnbWQtdG9hc3Qtd2FybmluZyc7XG5cbiAgICAvLyBJbmRpdmlkdWFsXG4gICAgdGhpcy50b2FzdENvbmZpZy50aW1lT3V0ID0gdXNlKHRoaXMudG9hc3RDb25maWcudGltZU91dCwgNTAwMCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5jbG9zZUJ1dHRvbiA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmNsb3NlQnV0dG9uLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5leHRlbmRlZFRpbWVPdXQgPSB1c2UodGhpcy50b2FzdENvbmZpZy5leHRlbmRlZFRpbWVPdXQsIDEwMDApO1xuICAgIHRoaXMudG9hc3RDb25maWcucHJvZ3Jlc3NCYXIgPSB1c2UodGhpcy50b2FzdENvbmZpZy5wcm9ncmVzc0JhciwgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcuZW5hYmxlSHRtbCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmVuYWJsZUh0bWwsIGZhbHNlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRvYXN0Q2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy50b2FzdENsYXNzLCAnbWQtdG9hc3QnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnBvc2l0aW9uQ2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy5wb3NpdGlvbkNsYXNzLCAnbWQtdG9hc3QtdG9wLXJpZ2h0Jyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy50aXRsZUNsYXNzID0gdXNlKHRoaXMudG9hc3RDb25maWcudGl0bGVDbGFzcywgJ21kLXRvYXN0LXRpdGxlJyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5tZXNzYWdlQ2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy5tZXNzYWdlQ2xhc3MsICdtZC10b2FzdC1tZXNzYWdlJyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy50YXBUb0Rpc21pc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy50YXBUb0Rpc21pc3MsIHRydWUpO1xuICAgIHRoaXMudG9hc3RDb25maWcudG9hc3RDb21wb25lbnQgPSB1c2UodGhpcy50b2FzdENvbmZpZy50b2FzdENvbXBvbmVudCwgVG9hc3RDb21wb25lbnQpO1xuICAgIHRoaXMudG9hc3RDb25maWcub25BY3RpdmF0ZVRpY2sgPSB1c2UodGhpcy50b2FzdENvbmZpZy5vbkFjdGl2YXRlVGljaywgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcuYWN0aW9uQnV0dG9uID0gdXNlKHRoaXMudG9hc3RDb25maWcuYWN0aW9uQnV0dG9uLCAnJyk7XG4gIH1cbiAgLyoqIHNob3cgc3VjY2Vzc2Z1bCB0b2FzdCAqL1xuICAvLyBzaG93KG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZywgdHlwZSA9ICcnKSB7XG4gICAgc2hvdyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIHwgYW55LCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcsIHR5cGUgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0eXBlLCBtZXNzYWdlLCB0aXRsZSwgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSkpO1xuICB9XG4gIC8qKiBzaG93IHN1Y2Nlc3NmdWwgdG9hc3QgKi9cbiAgLy8gc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcgfCBhbnksIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAvLyAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLnN1Y2Nlc3M7XG4gICAgY29uc3QgdHlwZTogYW55ID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5zdWNjZXNzO1xuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0eXBlLCBtZXNzYWdlLCB0aXRsZSwgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSkpO1xuICB9XG4gIC8qKiBzaG93IGVycm9yIHRvYXN0ICovXG4gIC8vIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcgfCBhbnksIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAvLyAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmVycm9yO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuZXJyb3I7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cbiAgLyoqIHNob3cgaW5mbyB0b2FzdCAqL1xuICAvLyBpbmZvKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAgIGluZm8obWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gIC8vICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuaW5mbztcbiAgICBjb25zdCB0eXBlOiBhbnkgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmluZm87XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cbiAgLyoqIHNob3cgd2FybmluZyB0b2FzdCAqL1xuICAvLyB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAgIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gIC8vICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMud2FybmluZztcbiAgICBjb25zdCB0eXBlOiBhbnkgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLndhcm5pbmc7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgb3IgYSBzaW5nbGUgdG9hc3QgYnkgaWRcbiAgICovXG4gIGNsZWFyKHRvYXN0SWQ/OiBudW1iZXIpIHtcbiAgICAvLyBDYWxsIGV2ZXJ5IHRvYXN0UmVmIG1hbnVhbENsb3NlIGZ1bmN0aW9uXG4gICAgbGV0IHRvYXN0OiBhbnk7XG4gICAgZm9yICh0b2FzdCBvZiB0aGlzLnRvYXN0cykge1xuICAgICAgaWYgKHRvYXN0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodG9hc3QudG9hc3RJZCA9PT0gdG9hc3RJZCkge1xuICAgICAgICAgIHRvYXN0LnRvYXN0UmVmLm1hbnVhbENsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdC50b2FzdFJlZi5tYW51YWxDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGFuZCBkZXN0cm95IGEgc2luZ2xlIHRvYXN0IGJ5IGlkXG4gICAqL1xuICByZW1vdmUodG9hc3RJZDogbnVtYmVyKSB7XG4gICAgLy8gY29uc3QgZm91bmQgPSB0aGlzLl9maW5kVG9hc3QodG9hc3RJZCk7XG4gICAgY29uc3QgZm91bmQ6IGFueSA9IHRoaXMuX2ZpbmRUb2FzdCh0b2FzdElkKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvdW5kLmFjdGl2ZVRvYXN0LnRvYXN0UmVmLmNsb3NlKCk7XG4gICAgdGhpcy50b2FzdHMuc3BsaWNlKGZvdW5kLmluZGV4LCAxKTtcbiAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlIC0gMTtcbiAgICBpZiAoIXRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkIHx8ICF0aGlzLnRvYXN0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudGx5QWN0aXZlIDw9ICt0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCAmJiB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0pIHtcbiAgICAgIC8vIGNvbnN0IHAgPSB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0udG9hc3RSZWY7XG4gICAgICBjb25zdCBwOiBhbnkgPSB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0udG9hc3RSZWY7XG4gICAgICBpZiAoIXAuaXNJbmFjdGl2ZSgpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgKyAxO1xuICAgICAgICBwLmFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdG9hc3QgbWVzc2FnZSBpcyBhbHJlYWR5IHNob3duXG4gICAqL1xuICBpc0R1cGxpY2F0ZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0ubWVzc2FnZSA9PT0gbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIGNyZWF0ZSBhIGNsb25lIG9mIGdsb2JhbCBjb25maWcgYW5kIGFwcGx5IGluZGl2aWR1YWwgc2V0dGluZ3MgKi9cbiAgcHJpdmF0ZSBhcHBseUNvbmZpZyhvdmVycmlkZTogSW5kaXZpZHVhbENvbmZpZyA9IHt9KTogR2xvYmFsQ29uZmlnIHtcbiAgICBmdW5jdGlvbiB1c2U8VD4oc291cmNlOiBULCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcbiAgICAgIHJldHVybiBvdmVycmlkZSAmJiBzb3VyY2UgIT09IHVuZGVmaW5lZCA/IHNvdXJjZSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgY29uc3QgY3VycmVudDogR2xvYmFsQ29uZmlnID0geyAuLi50aGlzLnRvYXN0Q29uZmlnIH07XG4gICAgY3VycmVudC5jbG9zZUJ1dHRvbiA9IHVzZShvdmVycmlkZS5jbG9zZUJ1dHRvbiwgY3VycmVudC5jbG9zZUJ1dHRvbik7XG4gICAgY3VycmVudC5leHRlbmRlZFRpbWVPdXQgPSB1c2Uob3ZlcnJpZGUuZXh0ZW5kZWRUaW1lT3V0LCBjdXJyZW50LmV4dGVuZGVkVGltZU91dCk7XG4gICAgY3VycmVudC5wcm9ncmVzc0JhciA9IHVzZShvdmVycmlkZS5wcm9ncmVzc0JhciwgY3VycmVudC5wcm9ncmVzc0Jhcik7XG4gICAgY3VycmVudC50aW1lT3V0ID0gdXNlKG92ZXJyaWRlLnRpbWVPdXQsIGN1cnJlbnQudGltZU91dCk7XG4gICAgY3VycmVudC5lbmFibGVIdG1sID0gdXNlKG92ZXJyaWRlLmVuYWJsZUh0bWwsIGN1cnJlbnQuZW5hYmxlSHRtbCk7XG4gICAgY3VycmVudC50b2FzdENsYXNzID0gdXNlKG92ZXJyaWRlLnRvYXN0Q2xhc3MsIGN1cnJlbnQudG9hc3RDbGFzcyk7XG4gICAgY3VycmVudC5wb3NpdGlvbkNsYXNzID0gdXNlKG92ZXJyaWRlLnBvc2l0aW9uQ2xhc3MsIGN1cnJlbnQucG9zaXRpb25DbGFzcyk7XG4gICAgY3VycmVudC50aXRsZUNsYXNzID0gdXNlKG92ZXJyaWRlLnRpdGxlQ2xhc3MsIGN1cnJlbnQudGl0bGVDbGFzcyk7XG4gICAgY3VycmVudC5tZXNzYWdlQ2xhc3MgPSB1c2Uob3ZlcnJpZGUubWVzc2FnZUNsYXNzLCBjdXJyZW50Lm1lc3NhZ2VDbGFzcyk7XG4gICAgY3VycmVudC50YXBUb0Rpc21pc3MgPSB1c2Uob3ZlcnJpZGUudGFwVG9EaXNtaXNzLCBjdXJyZW50LnRhcFRvRGlzbWlzcyk7XG4gICAgY3VycmVudC50b2FzdENvbXBvbmVudCA9IHVzZShvdmVycmlkZS50b2FzdENvbXBvbmVudCwgY3VycmVudC50b2FzdENvbXBvbmVudCk7XG4gICAgY3VycmVudC5vbkFjdGl2YXRlVGljayA9IHVzZShvdmVycmlkZS5vbkFjdGl2YXRlVGljaywgY3VycmVudC5vbkFjdGl2YXRlVGljayk7XG4gICAgY3VycmVudC5hY3Rpb25CdXR0b24gPSB1c2Uob3ZlcnJpZGUuYWN0aW9uQnV0dG9uLCBjdXJyZW50LmFjdGlvbkJ1dHRvbik7XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0b2FzdCBvYmplY3QgYnkgaWRcbiAgICovXG4gIHByaXZhdGUgX2ZpbmRUb2FzdCh0b2FzdElkOiBudW1iZXIpOiB7IGluZGV4OiBudW1iZXIsIGFjdGl2ZVRvYXN0OiBBY3RpdmVUb2FzdCB9IHwgbnVsbCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvYXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudG9hc3RzW2ldLnRvYXN0SWQgPT09IHRvYXN0SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgaW5kZXg6IGksIGFjdGl2ZVRvYXN0OiB0aGlzLnRvYXN0c1tpXSB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCBhdHRhY2hlcyB0b2FzdCBkYXRhIHRvIGNvbXBvbmVudFxuICAgKiByZXR1cm5zIG51bGwgaWYgdG9hc3QgaXMgZHVwbGljYXRlIGFuZCBwcmV2ZW50RHVwbGljYXRlcyA9PSBUcnVlXG4gICAqL1xuICBwcml2YXRlIF9idWlsZE5vdGlmaWNhdGlvbihcbiAgICB0b2FzdFR5cGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBjb25maWc6IEdsb2JhbENvbmZpZyxcbiAgKTogQWN0aXZlVG9hc3QgfCBudWxsIHwgYW55IHtcbiAgICAvLyBtYXggb3BlbmVkIGFuZCBhdXRvIGRpc21pc3MgPSB0cnVlXG4gICAgaWYgKHRoaXMudG9hc3RDb25maWcucHJldmVudER1cGxpY2F0ZXMgJiYgdGhpcy5pc0R1cGxpY2F0ZShtZXNzYWdlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRoaXMucHJldmlvdXNUb2FzdE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIGxldCBrZWVwSW5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQgJiYgdGhpcy5jdXJyZW50bHlBY3RpdmUgPj0gdGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQpIHtcbiAgICAgIGtlZXBJbmFjdGl2ZSA9IHRydWU7XG4gICAgICBpZiAodGhpcy50b2FzdENvbmZpZy5hdXRvRGlzbWlzcykge1xuICAgICAgICB0aGlzLmNsZWFyKHRoaXMudG9hc3RzW3RoaXMudG9hc3RzLmxlbmd0aCAtIDFdLnRvYXN0SWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcucG9zaXRpb25DbGFzcywgdGhpcy5vdmVybGF5Q29udGFpbmVyKTtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5pbmRleCArIDE7XG4gICAgLy8gbGV0IHNhbml0aXplZE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIGxldCBzYW5pdGl6ZWRNZXNzYWdlOiBhbnkgPSBtZXNzYWdlO1xuICAgIGlmIChtZXNzYWdlICYmIGNvbmZpZy5lbmFibGVIdG1sKSB7XG4gICAgICBzYW5pdGl6ZWRNZXNzYWdlID0gdGhpcy5zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBjb25zdCB0b2FzdFJlZiA9IG5ldyBUb2FzdFJlZihvdmVybGF5UmVmKTtcbiAgICBjb25zdCB0b2FzdFBhY2thZ2UgPSBuZXcgVG9hc3RQYWNrYWdlKFxuICAgICAgdGhpcy5pbmRleCxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHNhbml0aXplZE1lc3NhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIHRvYXN0VHlwZSxcbiAgICAgIHRvYXN0UmVmLFxuICAgICk7XG4gICAgLy8gY29uc3QgaW5zOiBBY3RpdmVUb2FzdCA9IHtcbiAgICAgIGNvbnN0IGluczogQWN0aXZlVG9hc3QgfCBhbnkgPSB7XG4gICAgICB0b2FzdElkOiB0aGlzLmluZGV4LFxuICAgICAgbWVzc2FnZSxcbiAgICAgIHRvYXN0UmVmLFxuICAgICAgb25TaG93bjogdG9hc3RSZWYuYWZ0ZXJBY3RpdmF0ZSgpLFxuICAgICAgb25IaWRkZW46IHRvYXN0UmVmLmFmdGVyQ2xvc2VkKCksXG4gICAgICBvblRhcDogdG9hc3RQYWNrYWdlLm9uVGFwKCksXG4gICAgICBvbkFjdGlvbjogdG9hc3RQYWNrYWdlLm9uQWN0aW9uKCksXG4gICAgfTtcbiAgICBjb25zdCB0b2FzdEluamVjdG9yID0gbmV3IFRvYXN0SW5qZWN0b3IodG9hc3RQYWNrYWdlLCB0aGlzLl9pbmplY3Rvcik7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudFBvcnRhbChjb25maWcudG9hc3RDb21wb25lbnQsIHRvYXN0SW5qZWN0b3IpO1xuICAgIGlucy5wb3J0YWwgPSBvdmVybGF5UmVmLmF0dGFjaChjb21wb25lbnQsIHRoaXMudG9hc3RDb25maWcubmV3ZXN0T25Ub3ApO1xuICAgIGlmICgha2VlcEluYWN0aXZlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaW5zLnRvYXN0UmVmLmFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgKyAxO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMudG9hc3RzLnB1c2goaW5zKTtcbiAgICByZXR1cm4gaW5zO1xuICB9XG59XG4iXX0=