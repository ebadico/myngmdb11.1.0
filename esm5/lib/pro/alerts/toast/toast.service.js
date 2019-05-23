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
        this.toastConfig.actionButtonClass = use(this.toastConfig.actionButtonClass, '');
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
        current.actionButtonClass = use(override.actionButtonClass, current.actionButtonClass);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWxlcnRzL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBZ0IsTUFBTSxFQUFFLGVBQWUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUcxRixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBaUMsWUFBWSxFQUFFLFFBQVEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RGLE9BQU8sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFFekQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7O0FBRXZELGlDQVNDOzs7SUFSQyw4QkFBaUI7O0lBQ2pCLDhCQUFpQjs7SUFDakIsNkJBQTJCOztJQUMzQiwrQkFBeUI7O0lBQ3pCLDhCQUEwQjs7SUFDMUIsK0JBQTJCOztJQUMzQiw0QkFBd0I7O0lBQ3hCLCtCQUEyQjs7QUFHN0I7SUFRRSxzQkFFK0IsV0FBK0IsRUFDcEQsT0FBZ0IsRUFDaEIsU0FBbUIsRUFDbkIsU0FBdUI7UUFIRixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDcEQsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFYakMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLHlCQUFvQixHQUFHLEVBQUUsQ0FBQztR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QyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2pGLE9BQU8sQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlFLE9BQU8sQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVB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LGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFDL0QsU0FBUyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsYUFBYSxDQUFDO1FBQzNFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2pCLFVBQVU7OztZQUFDO2dCQUNULEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Z0JBbFBGLFVBQVU7Ozs7Z0RBVU4sTUFBTSxTQUFDLFlBQVk7Z0JBOUJoQixPQUFPO2dCQUhLLFFBQVE7Z0JBVXBCLFlBQVk7O0lBZ1FwQixtQkFBQztDQUFBLEFBblBELElBbVBDO1NBbFBZLFlBQVk7OztJQUN2Qiw2QkFBVTs7SUFDViw0Q0FBMEI7O0lBQzFCLHVDQUFvQjs7SUFDcEIsOEJBQTJCOztJQUMzQix3Q0FBMEM7O0lBSXhDLG1DQUE0RDs7Ozs7SUFDNUQsK0JBQXdCOzs7OztJQUN4QixpQ0FBMkI7Ozs7O0lBQzNCLGlDQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgSW5qZWN0LCBTZWN1cml0eUNvbnRleHR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtPdmVybGF5fSBmcm9tICcuLi9vdmVybGF5L292ZXJsYXknO1xuaW1wb3J0IHtDb21wb25lbnRQb3J0YWx9IGZyb20gJy4uL3BvcnRhbC9wb3J0YWwnO1xuaW1wb3J0IHtHbG9iYWxDb25maWcsIEluZGl2aWR1YWxDb25maWcsIFRvYXN0UGFja2FnZSwgdHNDb25maWd9IGZyb20gJy4vdG9hc3QuY29uZmlnJztcbmltcG9ydCB7VG9hc3RJbmplY3RvciwgVG9hc3RSZWZ9IGZyb20gJy4vdG9hc3QuaW5qZWN0b3InO1xuaW1wb3J0IHtUb2FzdENvbnRhaW5lckRpcmVjdGl2ZX0gZnJvbSAnLi90b2FzdC5kaXJlY3RpdmUnO1xuaW1wb3J0IHtUT0FTVF9DT05GSUd9IGZyb20gJy4vdG9hc3QudG9rZW4nO1xuaW1wb3J0IHtUb2FzdENvbXBvbmVudH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xuaW1wb3J0IHtEb21TYW5pdGl6ZXJ9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVRvYXN0IHtcbiAgdG9hc3RJZD86IG51bWJlcjtcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgcG9ydGFsPzogQ29tcG9uZW50UmVmPGFueT47XG4gIHRvYXN0UmVmPzogVG9hc3RSZWY8YW55PjtcbiAgb25TaG93bj86IE9ic2VydmFibGU8YW55PjtcbiAgb25IaWRkZW4/OiBPYnNlcnZhYmxlPGFueT47XG4gIG9uVGFwPzogT2JzZXJ2YWJsZTxhbnk+O1xuICBvbkFjdGlvbj86IE9ic2VydmFibGU8YW55Pjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0U2VydmljZSB7XG4gIGluZGV4ID0gMDtcbiAgcHJldmlvdXNUb2FzdE1lc3NhZ2UgPSAnJztcbiAgY3VycmVudGx5QWN0aXZlID0gMDtcbiAgdG9hc3RzOiBBY3RpdmVUb2FzdFtdID0gW107XG4gIG92ZXJsYXlDb250YWluZXI6IFRvYXN0Q29udGFpbmVyRGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIC8vIEBJbmplY3QoVE9BU1RfQ09ORklHKSBwdWJsaWMgdG9hc3RDb25maWc6IEdsb2JhbENvbmZpZyxcbiAgICBASW5qZWN0KFRPQVNUX0NPTkZJRykgcHVibGljIHRvYXN0Q29uZmlnOiBHbG9iYWxDb25maWcgfCBhbnksXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICApIHtcbiAgICB0c0NvbmZpZy5zZXJ2aWNlSW5zdGFuY2UgPSB0aGlzO1xuXG5cbiAgICBmdW5jdGlvbiB1c2U8VD4oc291cmNlOiBULCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcbiAgICAgIHJldHVybiB0b2FzdENvbmZpZyAmJiBzb3VyY2UgIT09IHVuZGVmaW5lZCA/IHNvdXJjZSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnRvYXN0Q29uZmlnID0gdGhpcy5hcHBseUNvbmZpZyh0b2FzdENvbmZpZyk7XG4gICAgLy8gR2xvYmFsXG4gICAgdGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQgPSB1c2UodGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQsIDApO1xuICAgIHRoaXMudG9hc3RDb25maWcuYXV0b0Rpc21pc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy5hdXRvRGlzbWlzcywgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcubmV3ZXN0T25Ub3AgPSB1c2UodGhpcy50b2FzdENvbmZpZy5uZXdlc3RPblRvcCwgdHJ1ZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnByZXZlbnREdXBsaWNhdGVzLCBmYWxzZSk7XG4gICAgaWYgKCF0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzKSB7XG4gICAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzID0ge307XG4gICAgfVxuICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuZXJyb3IgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmVycm9yIHx8ICdtZC10b2FzdC1lcnJvcic7XG4gICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5pbmZvID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5pbmZvIHx8ICdtZC10b2FzdC1pbmZvJztcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLnN1Y2Nlc3MgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLnN1Y2Nlc3MgfHwgJ21kLXRvYXN0LXN1Y2Nlc3MnO1xuICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMud2FybmluZyA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMud2FybmluZyB8fCAnbWQtdG9hc3Qtd2FybmluZyc7XG5cbiAgICAvLyBJbmRpdmlkdWFsXG4gICAgdGhpcy50b2FzdENvbmZpZy50aW1lT3V0ID0gdXNlKHRoaXMudG9hc3RDb25maWcudGltZU91dCwgNTAwMCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5jbG9zZUJ1dHRvbiA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmNsb3NlQnV0dG9uLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5leHRlbmRlZFRpbWVPdXQgPSB1c2UodGhpcy50b2FzdENvbmZpZy5leHRlbmRlZFRpbWVPdXQsIDEwMDApO1xuICAgIHRoaXMudG9hc3RDb25maWcucHJvZ3Jlc3NCYXIgPSB1c2UodGhpcy50b2FzdENvbmZpZy5wcm9ncmVzc0JhciwgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcuZW5hYmxlSHRtbCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmVuYWJsZUh0bWwsIGZhbHNlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRvYXN0Q2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy50b2FzdENsYXNzLCAnbWQtdG9hc3QnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnBvc2l0aW9uQ2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy5wb3NpdGlvbkNsYXNzLCAnbWQtdG9hc3QtdG9wLXJpZ2h0Jyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy50aXRsZUNsYXNzID0gdXNlKHRoaXMudG9hc3RDb25maWcudGl0bGVDbGFzcywgJ21kLXRvYXN0LXRpdGxlJyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5tZXNzYWdlQ2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy5tZXNzYWdlQ2xhc3MsICdtZC10b2FzdC1tZXNzYWdlJyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy50YXBUb0Rpc21pc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy50YXBUb0Rpc21pc3MsIHRydWUpO1xuICAgIHRoaXMudG9hc3RDb25maWcudG9hc3RDb21wb25lbnQgPSB1c2UodGhpcy50b2FzdENvbmZpZy50b2FzdENvbXBvbmVudCwgVG9hc3RDb21wb25lbnQpO1xuICAgIHRoaXMudG9hc3RDb25maWcub25BY3RpdmF0ZVRpY2sgPSB1c2UodGhpcy50b2FzdENvbmZpZy5vbkFjdGl2YXRlVGljaywgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcuYWN0aW9uQnV0dG9uID0gdXNlKHRoaXMudG9hc3RDb25maWcuYWN0aW9uQnV0dG9uLCAnJyk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5hY3Rpb25CdXR0b25DbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmFjdGlvbkJ1dHRvbkNsYXNzLCAnJyk7XG4gIH1cblxuICAvKiogc2hvdyBzdWNjZXNzZnVsIHRvYXN0ICovXG4gIC8vIHNob3cobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnLCB0eXBlID0gJycpIHtcbiAgc2hvdyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIHwgYW55LCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcsIHR5cGUgPSAnJykge1xuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0eXBlLCBtZXNzYWdlLCB0aXRsZSwgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSkpO1xuICB9XG5cbiAgLyoqIHNob3cgc3VjY2Vzc2Z1bCB0b2FzdCAqL1xuICAvLyBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcgfCBhbnksIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAgIC8vICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcztcbiAgICBjb25zdCB0eXBlOiBhbnkgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLnN1Y2Nlc3M7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cblxuICAvKiogc2hvdyBlcnJvciB0b2FzdCAqL1xuICAvLyBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5lcnJvcjtcbiAgICBjb25zdCB0eXBlOiBhbnkgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmVycm9yO1xuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0eXBlLCBtZXNzYWdlLCB0aXRsZSwgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSkpO1xuICB9XG5cbiAgLyoqIHNob3cgaW5mbyB0b2FzdCAqL1xuICAvLyBpbmZvKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcgfCBhbnksIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAgIC8vICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuaW5mbztcbiAgICBjb25zdCB0eXBlOiBhbnkgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmluZm87XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cblxuICAvKiogc2hvdyB3YXJuaW5nIHRvYXN0ICovXG4gIC8vIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMud2FybmluZztcbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIG9yIGEgc2luZ2xlIHRvYXN0IGJ5IGlkXG4gICAqL1xuICBjbGVhcih0b2FzdElkPzogbnVtYmVyKSB7XG4gICAgLy8gQ2FsbCBldmVyeSB0b2FzdFJlZiBtYW51YWxDbG9zZSBmdW5jdGlvblxuICAgIGxldCB0b2FzdDogYW55O1xuICAgIGZvciAodG9hc3Qgb2YgdGhpcy50b2FzdHMpIHtcbiAgICAgIGlmICh0b2FzdElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRvYXN0LnRvYXN0SWQgPT09IHRvYXN0SWQpIHtcbiAgICAgICAgICB0b2FzdC50b2FzdFJlZi5tYW51YWxDbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdG9hc3QudG9hc3RSZWYubWFudWFsQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFuZCBkZXN0cm95IGEgc2luZ2xlIHRvYXN0IGJ5IGlkXG4gICAqL1xuICByZW1vdmUodG9hc3RJZDogbnVtYmVyKSB7XG4gICAgLy8gY29uc3QgZm91bmQgPSB0aGlzLl9maW5kVG9hc3QodG9hc3RJZCk7XG4gICAgY29uc3QgZm91bmQ6IGFueSA9IHRoaXMuX2ZpbmRUb2FzdCh0b2FzdElkKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvdW5kLmFjdGl2ZVRvYXN0LnRvYXN0UmVmLmNsb3NlKCk7XG4gICAgdGhpcy50b2FzdHMuc3BsaWNlKGZvdW5kLmluZGV4LCAxKTtcbiAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlIC0gMTtcbiAgICBpZiAoIXRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkIHx8ICF0aGlzLnRvYXN0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudGx5QWN0aXZlIDw9ICt0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCAmJiB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0pIHtcbiAgICAgIC8vIGNvbnN0IHAgPSB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0udG9hc3RSZWY7XG4gICAgICBjb25zdCBwOiBhbnkgPSB0aGlzLnRvYXN0c1t0aGlzLmN1cnJlbnRseUFjdGl2ZV0udG9hc3RSZWY7XG4gICAgICBpZiAoIXAuaXNJbmFjdGl2ZSgpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgKyAxO1xuICAgICAgICBwLmFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdG9hc3QgbWVzc2FnZSBpcyBhbHJlYWR5IHNob3duXG4gICAqL1xuICBpc0R1cGxpY2F0ZShtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0ubWVzc2FnZSA9PT0gbWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqIGNyZWF0ZSBhIGNsb25lIG9mIGdsb2JhbCBjb25maWcgYW5kIGFwcGx5IGluZGl2aWR1YWwgc2V0dGluZ3MgKi9cbiAgcHJpdmF0ZSBhcHBseUNvbmZpZyhvdmVycmlkZTogSW5kaXZpZHVhbENvbmZpZyA9IHt9KTogR2xvYmFsQ29uZmlnIHtcbiAgICBmdW5jdGlvbiB1c2U8VD4oc291cmNlOiBULCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcbiAgICAgIHJldHVybiBvdmVycmlkZSAmJiBzb3VyY2UgIT09IHVuZGVmaW5lZCA/IHNvdXJjZSA6IGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50OiBHbG9iYWxDb25maWcgPSB7Li4udGhpcy50b2FzdENvbmZpZ307XG4gICAgY3VycmVudC5jbG9zZUJ1dHRvbiA9IHVzZShvdmVycmlkZS5jbG9zZUJ1dHRvbiwgY3VycmVudC5jbG9zZUJ1dHRvbik7XG4gICAgY3VycmVudC5leHRlbmRlZFRpbWVPdXQgPSB1c2Uob3ZlcnJpZGUuZXh0ZW5kZWRUaW1lT3V0LCBjdXJyZW50LmV4dGVuZGVkVGltZU91dCk7XG4gICAgY3VycmVudC5wcm9ncmVzc0JhciA9IHVzZShvdmVycmlkZS5wcm9ncmVzc0JhciwgY3VycmVudC5wcm9ncmVzc0Jhcik7XG4gICAgY3VycmVudC50aW1lT3V0ID0gdXNlKG92ZXJyaWRlLnRpbWVPdXQsIGN1cnJlbnQudGltZU91dCk7XG4gICAgY3VycmVudC5lbmFibGVIdG1sID0gdXNlKG92ZXJyaWRlLmVuYWJsZUh0bWwsIGN1cnJlbnQuZW5hYmxlSHRtbCk7XG4gICAgY3VycmVudC50b2FzdENsYXNzID0gdXNlKG92ZXJyaWRlLnRvYXN0Q2xhc3MsIGN1cnJlbnQudG9hc3RDbGFzcyk7XG4gICAgY3VycmVudC5wb3NpdGlvbkNsYXNzID0gdXNlKG92ZXJyaWRlLnBvc2l0aW9uQ2xhc3MsIGN1cnJlbnQucG9zaXRpb25DbGFzcyk7XG4gICAgY3VycmVudC50aXRsZUNsYXNzID0gdXNlKG92ZXJyaWRlLnRpdGxlQ2xhc3MsIGN1cnJlbnQudGl0bGVDbGFzcyk7XG4gICAgY3VycmVudC5tZXNzYWdlQ2xhc3MgPSB1c2Uob3ZlcnJpZGUubWVzc2FnZUNsYXNzLCBjdXJyZW50Lm1lc3NhZ2VDbGFzcyk7XG4gICAgY3VycmVudC50YXBUb0Rpc21pc3MgPSB1c2Uob3ZlcnJpZGUudGFwVG9EaXNtaXNzLCBjdXJyZW50LnRhcFRvRGlzbWlzcyk7XG4gICAgY3VycmVudC50b2FzdENvbXBvbmVudCA9IHVzZShvdmVycmlkZS50b2FzdENvbXBvbmVudCwgY3VycmVudC50b2FzdENvbXBvbmVudCk7XG4gICAgY3VycmVudC5vbkFjdGl2YXRlVGljayA9IHVzZShvdmVycmlkZS5vbkFjdGl2YXRlVGljaywgY3VycmVudC5vbkFjdGl2YXRlVGljayk7XG4gICAgY3VycmVudC5hY3Rpb25CdXR0b24gPSB1c2Uob3ZlcnJpZGUuYWN0aW9uQnV0dG9uLCBjdXJyZW50LmFjdGlvbkJ1dHRvbik7XG4gICAgY3VycmVudC5hY3Rpb25CdXR0b25DbGFzcyA9IHVzZShvdmVycmlkZS5hY3Rpb25CdXR0b25DbGFzcywgY3VycmVudC5hY3Rpb25CdXR0b25DbGFzcyk7XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0b2FzdCBvYmplY3QgYnkgaWRcbiAgICovXG4gIHByaXZhdGUgX2ZpbmRUb2FzdCh0b2FzdElkOiBudW1iZXIpOiB7IGluZGV4OiBudW1iZXIsIGFjdGl2ZVRvYXN0OiBBY3RpdmVUb2FzdCB9IHwgbnVsbCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvYXN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMudG9hc3RzW2ldLnRvYXN0SWQgPT09IHRvYXN0SWQpIHtcbiAgICAgICAgcmV0dXJuIHtpbmRleDogaSwgYWN0aXZlVG9hc3Q6IHRoaXMudG9hc3RzW2ldfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbmQgYXR0YWNoZXMgdG9hc3QgZGF0YSB0byBjb21wb25lbnRcbiAgICogcmV0dXJucyBudWxsIGlmIHRvYXN0IGlzIGR1cGxpY2F0ZSBhbmQgcHJldmVudER1cGxpY2F0ZXMgPT0gVHJ1ZVxuICAgKi9cbiAgcHJpdmF0ZSBfYnVpbGROb3RpZmljYXRpb24oXG4gICAgdG9hc3RUeXBlOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY29uZmlnOiBHbG9iYWxDb25maWcsXG4gICk6IEFjdGl2ZVRvYXN0IHwgbnVsbCB8IGFueSB7XG4gICAgLy8gbWF4IG9wZW5lZCBhbmQgYXV0byBkaXNtaXNzID0gdHJ1ZVxuICAgIGlmICh0aGlzLnRvYXN0Q29uZmlnLnByZXZlbnREdXBsaWNhdGVzICYmIHRoaXMuaXNEdXBsaWNhdGUobWVzc2FnZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLnByZXZpb3VzVG9hc3RNZXNzYWdlID0gbWVzc2FnZTtcbiAgICBsZXQga2VlcEluYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKHRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkICYmIHRoaXMuY3VycmVudGx5QWN0aXZlID49IHRoaXMudG9hc3RDb25maWcubWF4T3BlbmVkKSB7XG4gICAgICBrZWVwSW5hY3RpdmUgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMudG9hc3RDb25maWcuYXV0b0Rpc21pc3MpIHtcbiAgICAgICAgdGhpcy5jbGVhcih0aGlzLnRvYXN0c1t0aGlzLnRvYXN0cy5sZW5ndGggLSAxXS50b2FzdElkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoY29uZmlnLnBvc2l0aW9uQ2xhc3MsIHRoaXMub3ZlcmxheUNvbnRhaW5lcik7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuaW5kZXggKyAxO1xuICAgIC8vIGxldCBzYW5pdGl6ZWRNZXNzYWdlID0gbWVzc2FnZTtcbiAgICBsZXQgc2FuaXRpemVkTWVzc2FnZTogYW55ID0gbWVzc2FnZTtcbiAgICBpZiAobWVzc2FnZSAmJiBjb25maWcuZW5hYmxlSHRtbCkge1xuICAgICAgc2FuaXRpemVkTWVzc2FnZSA9IHRoaXMuc2FuaXRpemVyLnNhbml0aXplKFNlY3VyaXR5Q29udGV4dC5IVE1MLCBtZXNzYWdlKTtcbiAgICB9XG4gICAgY29uc3QgdG9hc3RSZWYgPSBuZXcgVG9hc3RSZWYob3ZlcmxheVJlZik7XG4gICAgY29uc3QgdG9hc3RQYWNrYWdlID0gbmV3IFRvYXN0UGFja2FnZShcbiAgICAgIHRoaXMuaW5kZXgsXG4gICAgICBjb25maWcsXG4gICAgICBzYW5pdGl6ZWRNZXNzYWdlLFxuICAgICAgdGl0bGUsXG4gICAgICB0b2FzdFR5cGUsXG4gICAgICB0b2FzdFJlZixcbiAgICApO1xuICAgIC8vIGNvbnN0IGluczogQWN0aXZlVG9hc3QgPSB7XG4gICAgY29uc3QgaW5zOiBBY3RpdmVUb2FzdCB8IGFueSA9IHtcbiAgICAgIHRvYXN0SWQ6IHRoaXMuaW5kZXgsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdG9hc3RSZWYsXG4gICAgICBvblNob3duOiB0b2FzdFJlZi5hZnRlckFjdGl2YXRlKCksXG4gICAgICBvbkhpZGRlbjogdG9hc3RSZWYuYWZ0ZXJDbG9zZWQoKSxcbiAgICAgIG9uVGFwOiB0b2FzdFBhY2thZ2Uub25UYXAoKSxcbiAgICAgIG9uQWN0aW9uOiB0b2FzdFBhY2thZ2Uub25BY3Rpb24oKSxcbiAgICB9O1xuICAgIGNvbnN0IHRvYXN0SW5qZWN0b3IgPSBuZXcgVG9hc3RJbmplY3Rvcih0b2FzdFBhY2thZ2UsIHRoaXMuX2luamVjdG9yKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbmZpZy50b2FzdENvbXBvbmVudCwgdG9hc3RJbmplY3Rvcik7XG4gICAgaW5zLnBvcnRhbCA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbXBvbmVudCwgdGhpcy50b2FzdENvbmZpZy5uZXdlc3RPblRvcCk7XG4gICAgaWYgKCFrZWVwSW5hY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbnMudG9hc3RSZWYuYWN0aXZhdGUoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPSB0aGlzLmN1cnJlbnRseUFjdGl2ZSArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50b2FzdHMucHVzaChpbnMpO1xuICAgIHJldHVybiBpbnM7XG4gIH1cbn1cbiJdfQ==