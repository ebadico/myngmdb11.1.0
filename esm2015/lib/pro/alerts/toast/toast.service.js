/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ToastService {
    /**
     * @param {?} toastConfig
     * @param {?} overlay
     * @param {?} _injector
     * @param {?} sanitizer
     */
    constructor(toastConfig, overlay, _injector, sanitizer) {
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
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    // show(message: string, title?: string, override?: IndividualConfig, type = '') {
    show(message, title, override, type = '') {
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // success(message: string, title?: string, override?: IndividualConfig) {
    success(message, title, override) {
        //   const type = this.toastConfig.iconClasses.success;
        /** @type {?} */
        const type = this.toastConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show error toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // error(message: string, title?: string, override?: IndividualConfig) {
    error(message, title, override) {
        //   const type = this.toastConfig.iconClasses.error;
        /** @type {?} */
        const type = this.toastConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show info toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // info(message: string, title?: string, override?: IndividualConfig) {
    info(message, title, override) {
        //   const type = this.toastConfig.iconClasses.info;
        /** @type {?} */
        const type = this.toastConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show warning toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    // warning(message: string, title?: string, override?: IndividualConfig) {
    warning(message, title, override) {
        //   const type = this.toastConfig.iconClasses.warning;
        /** @type {?} */
        const type = this.toastConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    clear(toastId) {
        // Call every toastRef manualClose function
        /** @type {?} */
        let toast;
        for (toast of this.toasts) {
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
    /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    remove(toastId) {
        // const found = this._findToast(toastId);
        /** @type {?} */
        const found = this._findToast(toastId);
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
            const p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    }
    /**
     * Determines if toast message is already shown
     * @param {?} message
     * @return {?}
     */
    isDuplicate(message) {
        for (let i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    }
    /**
     * create a clone of global config and apply individual settings
     * @private
     * @param {?=} override
     * @return {?}
     */
    applyConfig(override = {}) {
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
        const current = Object.assign({}, this.toastConfig);
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
    }
    /**
     * Find toast object by id
     * @private
     * @param {?} toastId
     * @return {?}
     */
    _findToast(toastId) {
        for (let i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    }
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
    _buildNotification(toastType, message, title, config) {
        // max opened and auto dismiss = true
        if (this.toastConfig.preventDuplicates && this.isDuplicate(message)) {
            return null;
        }
        this.previousToastMessage = message;
        /** @type {?} */
        let keepInactive = false;
        if (this.toastConfig.maxOpened && this.currentlyActive >= this.toastConfig.maxOpened) {
            keepInactive = true;
            if (this.toastConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        /** @type {?} */
        const overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        // let sanitizedMessage = message;
        /** @type {?} */
        let sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
        }
        /** @type {?} */
        const toastRef = new ToastRef(overlayRef);
        /** @type {?} */
        const toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        // const ins: ActiveToast = {
        /** @type {?} */
        const ins = {
            toastId: this.index,
            message,
            toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
        };
        /** @type {?} */
        const toastInjector = new ToastInjector(toastPackage, this._injector);
        /** @type {?} */
        const component = new ComponentPortal(config.toastComponent, toastInjector);
        ins.portal = overlayRef.attach(component, this.toastConfig.newestOnTop);
        if (!keepInactive) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                ins.toastRef.activate();
                this.currentlyActive = this.currentlyActive + 1;
            }));
        }
        this.toasts.push(ins);
        return ins;
    }
}
ToastService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ToastService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [TOAST_CONFIG,] }] },
    { type: Overlay },
    { type: Injector },
    { type: DomSanitizer }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWxlcnRzL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFnQixNQUFNLEVBQUUsZUFBZSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRzFGLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFpQyxZQUFZLEVBQUUsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEYsT0FBTyxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUV6RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFdkQsaUNBU0M7OztJQVJDLDhCQUFpQjs7SUFDakIsOEJBQWlCOztJQUNqQiw2QkFBMkI7O0lBQzNCLCtCQUF5Qjs7SUFDekIsOEJBQTBCOztJQUMxQiwrQkFBMkI7O0lBQzNCLDRCQUF3Qjs7SUFDeEIsK0JBQTJCOztBQUk3QixNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQU92QixZQUUrQixXQUErQixFQUNwRCxPQUFnQixFQUNoQixTQUFtQixFQUNuQixTQUF1QjtRQUhGLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUNwRCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQVhqQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YseUJB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QUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7OztZQWxQRixVQUFVOzs7OzRDQVVOLE1BQU0sU0FBQyxZQUFZO1lBOUJoQixPQUFPO1lBSEssUUFBUTtZQVVwQixZQUFZOzs7O0lBZWxCLDZCQUFVOztJQUNWLDRDQUEwQjs7SUFDMUIsdUNBQW9COztJQUNwQiw4QkFBMkI7O0lBQzNCLHdDQUEwQzs7SUFJeEMsbUNBQTREOzs7OztJQUM1RCwrQkFBd0I7Ozs7O0lBQ3hCLGlDQUEyQjs7Ozs7SUFDM0IsaUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBJbmplY3RvciwgQ29tcG9uZW50UmVmLCBJbmplY3QsIFNlY3VyaXR5Q29udGV4dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQge092ZXJsYXl9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheSc7XG5pbXBvcnQge0NvbXBvbmVudFBvcnRhbH0gZnJvbSAnLi4vcG9ydGFsL3BvcnRhbCc7XG5pbXBvcnQge0dsb2JhbENvbmZpZywgSW5kaXZpZHVhbENvbmZpZywgVG9hc3RQYWNrYWdlLCB0c0NvbmZpZ30gZnJvbSAnLi90b2FzdC5jb25maWcnO1xuaW1wb3J0IHtUb2FzdEluamVjdG9yLCBUb2FzdFJlZn0gZnJvbSAnLi90b2FzdC5pbmplY3Rvcic7XG5pbXBvcnQge1RvYXN0Q29udGFpbmVyRGlyZWN0aXZlfSBmcm9tICcuL3RvYXN0LmRpcmVjdGl2ZSc7XG5pbXBvcnQge1RPQVNUX0NPTkZJR30gZnJvbSAnLi90b2FzdC50b2tlbic7XG5pbXBvcnQge1RvYXN0Q29tcG9uZW50fSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlVG9hc3Qge1xuICB0b2FzdElkPzogbnVtYmVyO1xuICBtZXNzYWdlPzogc3RyaW5nO1xuICBwb3J0YWw/OiBDb21wb25lbnRSZWY8YW55PjtcbiAgdG9hc3RSZWY/OiBUb2FzdFJlZjxhbnk+O1xuICBvblNob3duPzogT2JzZXJ2YWJsZTxhbnk+O1xuICBvbkhpZGRlbj86IE9ic2VydmFibGU8YW55PjtcbiAgb25UYXA/OiBPYnNlcnZhYmxlPGFueT47XG4gIG9uQWN0aW9uPzogT2JzZXJ2YWJsZTxhbnk+O1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcbiAgaW5kZXggPSAwO1xuICBwcmV2aW91c1RvYXN0TWVzc2FnZSA9ICcnO1xuICBjdXJyZW50bHlBY3RpdmUgPSAwO1xuICB0b2FzdHM6IEFjdGl2ZVRvYXN0W10gPSBbXTtcbiAgb3ZlcmxheUNvbnRhaW5lcjogVG9hc3RDb250YWluZXJEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgLy8gQEluamVjdChUT0FTVF9DT05GSUcpIHB1YmxpYyB0b2FzdENvbmZpZzogR2xvYmFsQ29uZmlnLFxuICAgIEBJbmplY3QoVE9BU1RfQ09ORklHKSBwdWJsaWMgdG9hc3RDb25maWc6IEdsb2JhbENvbmZpZyB8IGFueSxcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICkge1xuICAgIHRzQ29uZmlnLnNlcnZpY2VJbnN0YW5jZSA9IHRoaXM7XG5cblxuICAgIGZ1bmN0aW9uIHVzZTxUPihzb3VyY2U6IFQsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuICAgICAgcmV0dXJuIHRvYXN0Q29uZmlnICYmIHNvdXJjZSAhPT0gdW5kZWZpbmVkID8gc291cmNlIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMudG9hc3RDb25maWcgPSB0aGlzLmFwcGx5Q29uZmlnKHRvYXN0Q29uZmlnKTtcbiAgICAvLyBHbG9iYWxcbiAgICB0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCwgMCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5hdXRvRGlzbWlzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmF1dG9EaXNtaXNzLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5uZXdlc3RPblRvcCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm5ld2VzdE9uVG9wLCB0cnVlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdXNlKHRoaXMudG9hc3RDb25maWcucHJldmVudER1cGxpY2F0ZXMsIGZhbHNlKTtcbiAgICBpZiAoIXRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMpIHtcbiAgICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5lcnJvciA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuZXJyb3IgfHwgJ21kLXRvYXN0LWVycm9yJztcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmluZm8gPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmluZm8gfHwgJ21kLXRvYXN0LWluZm8nO1xuICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcyA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcyB8fCAnbWQtdG9hc3Qtc3VjY2Vzcyc7XG4gICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nIHx8ICdtZC10b2FzdC13YXJuaW5nJztcblxuICAgIC8vIEluZGl2aWR1YWxcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRpbWVPdXQgPSB1c2UodGhpcy50b2FzdENvbmZpZy50aW1lT3V0LCA1MDAwKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmNsb3NlQnV0dG9uID0gdXNlKHRoaXMudG9hc3RDb25maWcuY2xvc2VCdXR0b24sIGZhbHNlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmV4dGVuZGVkVGltZU91dCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmV4dGVuZGVkVGltZU91dCwgMTAwMCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5wcm9ncmVzc0JhciA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnByb2dyZXNzQmFyLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5lbmFibGVIdG1sID0gdXNlKHRoaXMudG9hc3RDb25maWcuZW5hYmxlSHRtbCwgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcudG9hc3RDbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnRvYXN0Q2xhc3MsICdtZC10b2FzdCcpO1xuICAgIHRoaXMudG9hc3RDb25maWcucG9zaXRpb25DbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnBvc2l0aW9uQ2xhc3MsICdtZC10b2FzdC10b3AtcmlnaHQnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRpdGxlQ2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy50aXRsZUNsYXNzLCAnbWQtdG9hc3QtdGl0bGUnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLm1lc3NhZ2VDbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm1lc3NhZ2VDbGFzcywgJ21kLXRvYXN0LW1lc3NhZ2UnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRhcFRvRGlzbWlzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnRhcFRvRGlzbWlzcywgdHJ1ZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy50b2FzdENvbXBvbmVudCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnRvYXN0Q29tcG9uZW50LCBUb2FzdENvbXBvbmVudCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5vbkFjdGl2YXRlVGljayA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm9uQWN0aXZhdGVUaWNrLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5hY3Rpb25CdXR0b24gPSB1c2UodGhpcy50b2FzdENvbmZpZy5hY3Rpb25CdXR0b24sICcnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmFjdGlvbkJ1dHRvbkNsYXNzID0gdXNlKHRoaXMudG9hc3RDb25maWcuYWN0aW9uQnV0dG9uQ2xhc3MsICcnKTtcbiAgfVxuXG4gIC8qKiBzaG93IHN1Y2Nlc3NmdWwgdG9hc3QgKi9cbiAgLy8gc2hvdyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcsIHR5cGUgPSAnJykge1xuICBzaG93KG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcgfCBhbnksIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZywgdHlwZSA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cblxuICAvKiogc2hvdyBzdWNjZXNzZnVsIHRvYXN0ICovXG4gIC8vIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5zdWNjZXNzO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcztcbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuXG4gIC8qKiBzaG93IGVycm9yIHRvYXN0ICovXG4gIC8vIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIHwgYW55LCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgICAvLyAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmVycm9yO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuZXJyb3I7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cblxuICAvKiogc2hvdyBpbmZvIHRvYXN0ICovXG4gIC8vIGluZm8obWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gIGluZm8obWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5pbmZvO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuaW5mbztcbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuXG4gIC8qKiBzaG93IHdhcm5pbmcgdG9hc3QgKi9cbiAgLy8gd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIHwgYW55LCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgICAvLyAgIGNvbnN0IHR5cGUgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLndhcm5pbmc7XG4gICAgY29uc3QgdHlwZTogYW55ID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nO1xuICAgIHJldHVybiB0aGlzLl9idWlsZE5vdGlmaWNhdGlvbih0eXBlLCBtZXNzYWdlLCB0aXRsZSwgdGhpcy5hcHBseUNvbmZpZyhvdmVycmlkZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgb3IgYSBzaW5nbGUgdG9hc3QgYnkgaWRcbiAgICovXG4gIGNsZWFyKHRvYXN0SWQ/OiBudW1iZXIpIHtcbiAgICAvLyBDYWxsIGV2ZXJ5IHRvYXN0UmVmIG1hbnVhbENsb3NlIGZ1bmN0aW9uXG4gICAgbGV0IHRvYXN0OiBhbnk7XG4gICAgZm9yICh0b2FzdCBvZiB0aGlzLnRvYXN0cykge1xuICAgICAgaWYgKHRvYXN0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodG9hc3QudG9hc3RJZCA9PT0gdG9hc3RJZCkge1xuICAgICAgICAgIHRvYXN0LnRvYXN0UmVmLm1hbnVhbENsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdC50b2FzdFJlZi5tYW51YWxDbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYW5kIGRlc3Ryb3kgYSBzaW5nbGUgdG9hc3QgYnkgaWRcbiAgICovXG4gIHJlbW92ZSh0b2FzdElkOiBudW1iZXIpIHtcbiAgICAvLyBjb25zdCBmb3VuZCA9IHRoaXMuX2ZpbmRUb2FzdCh0b2FzdElkKTtcbiAgICBjb25zdCBmb3VuZDogYW55ID0gdGhpcy5fZmluZFRvYXN0KHRvYXN0SWQpO1xuICAgIGlmICghZm91bmQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm91bmQuYWN0aXZlVG9hc3QudG9hc3RSZWYuY2xvc2UoKTtcbiAgICB0aGlzLnRvYXN0cy5zcGxpY2UoZm91bmQuaW5kZXgsIDEpO1xuICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgLSAxO1xuICAgIGlmICghdGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQgfHwgIXRoaXMudG9hc3RzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50bHlBY3RpdmUgPD0gK3RoaXMudG9hc3RDb25maWcubWF4T3BlbmVkICYmIHRoaXMudG9hc3RzW3RoaXMuY3VycmVudGx5QWN0aXZlXSkge1xuICAgICAgLy8gY29uc3QgcCA9IHRoaXMudG9hc3RzW3RoaXMuY3VycmVudGx5QWN0aXZlXS50b2FzdFJlZjtcbiAgICAgIGNvbnN0IHA6IGFueSA9IHRoaXMudG9hc3RzW3RoaXMuY3VycmVudGx5QWN0aXZlXS50b2FzdFJlZjtcbiAgICAgIGlmICghcC5pc0luYWN0aXZlKCkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPSB0aGlzLmN1cnJlbnRseUFjdGl2ZSArIDE7XG4gICAgICAgIHAuYWN0aXZhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0b2FzdCBtZXNzYWdlIGlzIGFscmVhZHkgc2hvd25cbiAgICovXG4gIGlzRHVwbGljYXRlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b2FzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRvYXN0c1tpXS5tZXNzYWdlID09PSBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogY3JlYXRlIGEgY2xvbmUgb2YgZ2xvYmFsIGNvbmZpZyBhbmQgYXBwbHkgaW5kaXZpZHVhbCBzZXR0aW5ncyAqL1xuICBwcml2YXRlIGFwcGx5Q29uZmlnKG92ZXJyaWRlOiBJbmRpdmlkdWFsQ29uZmlnID0ge30pOiBHbG9iYWxDb25maWcge1xuICAgIGZ1bmN0aW9uIHVzZTxUPihzb3VyY2U6IFQsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuICAgICAgcmV0dXJuIG92ZXJyaWRlICYmIHNvdXJjZSAhPT0gdW5kZWZpbmVkID8gc291cmNlIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnQ6IEdsb2JhbENvbmZpZyA9IHsuLi50aGlzLnRvYXN0Q29uZmlnfTtcbiAgICBjdXJyZW50LmNsb3NlQnV0dG9uID0gdXNlKG92ZXJyaWRlLmNsb3NlQnV0dG9uLCBjdXJyZW50LmNsb3NlQnV0dG9uKTtcbiAgICBjdXJyZW50LmV4dGVuZGVkVGltZU91dCA9IHVzZShvdmVycmlkZS5leHRlbmRlZFRpbWVPdXQsIGN1cnJlbnQuZXh0ZW5kZWRUaW1lT3V0KTtcbiAgICBjdXJyZW50LnByb2dyZXNzQmFyID0gdXNlKG92ZXJyaWRlLnByb2dyZXNzQmFyLCBjdXJyZW50LnByb2dyZXNzQmFyKTtcbiAgICBjdXJyZW50LnRpbWVPdXQgPSB1c2Uob3ZlcnJpZGUudGltZU91dCwgY3VycmVudC50aW1lT3V0KTtcbiAgICBjdXJyZW50LmVuYWJsZUh0bWwgPSB1c2Uob3ZlcnJpZGUuZW5hYmxlSHRtbCwgY3VycmVudC5lbmFibGVIdG1sKTtcbiAgICBjdXJyZW50LnRvYXN0Q2xhc3MgPSB1c2Uob3ZlcnJpZGUudG9hc3RDbGFzcywgY3VycmVudC50b2FzdENsYXNzKTtcbiAgICBjdXJyZW50LnBvc2l0aW9uQ2xhc3MgPSB1c2Uob3ZlcnJpZGUucG9zaXRpb25DbGFzcywgY3VycmVudC5wb3NpdGlvbkNsYXNzKTtcbiAgICBjdXJyZW50LnRpdGxlQ2xhc3MgPSB1c2Uob3ZlcnJpZGUudGl0bGVDbGFzcywgY3VycmVudC50aXRsZUNsYXNzKTtcbiAgICBjdXJyZW50Lm1lc3NhZ2VDbGFzcyA9IHVzZShvdmVycmlkZS5tZXNzYWdlQ2xhc3MsIGN1cnJlbnQubWVzc2FnZUNsYXNzKTtcbiAgICBjdXJyZW50LnRhcFRvRGlzbWlzcyA9IHVzZShvdmVycmlkZS50YXBUb0Rpc21pc3MsIGN1cnJlbnQudGFwVG9EaXNtaXNzKTtcbiAgICBjdXJyZW50LnRvYXN0Q29tcG9uZW50ID0gdXNlKG92ZXJyaWRlLnRvYXN0Q29tcG9uZW50LCBjdXJyZW50LnRvYXN0Q29tcG9uZW50KTtcbiAgICBjdXJyZW50Lm9uQWN0aXZhdGVUaWNrID0gdXNlKG92ZXJyaWRlLm9uQWN0aXZhdGVUaWNrLCBjdXJyZW50Lm9uQWN0aXZhdGVUaWNrKTtcbiAgICBjdXJyZW50LmFjdGlvbkJ1dHRvbiA9IHVzZShvdmVycmlkZS5hY3Rpb25CdXR0b24sIGN1cnJlbnQuYWN0aW9uQnV0dG9uKTtcbiAgICBjdXJyZW50LmFjdGlvbkJ1dHRvbkNsYXNzID0gdXNlKG92ZXJyaWRlLmFjdGlvbkJ1dHRvbkNsYXNzLCBjdXJyZW50LmFjdGlvbkJ1dHRvbkNsYXNzKTtcbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRvYXN0IG9iamVjdCBieSBpZFxuICAgKi9cbiAgcHJpdmF0ZSBfZmluZFRvYXN0KHRvYXN0SWQ6IG51bWJlcik6IHsgaW5kZXg6IG51bWJlciwgYWN0aXZlVG9hc3Q6IEFjdGl2ZVRvYXN0IH0gfCBudWxsIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0udG9hc3RJZCA9PT0gdG9hc3RJZCkge1xuICAgICAgICByZXR1cm4ge2luZGV4OiBpLCBhY3RpdmVUb2FzdDogdGhpcy50b2FzdHNbaV19O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuZCBhdHRhY2hlcyB0b2FzdCBkYXRhIHRvIGNvbXBvbmVudFxuICAgKiByZXR1cm5zIG51bGwgaWYgdG9hc3QgaXMgZHVwbGljYXRlIGFuZCBwcmV2ZW50RHVwbGljYXRlcyA9PSBUcnVlXG4gICAqL1xuICBwcml2YXRlIF9idWlsZE5vdGlmaWNhdGlvbihcbiAgICB0b2FzdFR5cGU6IHN0cmluZyxcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBjb25maWc6IEdsb2JhbENvbmZpZyxcbiAgKTogQWN0aXZlVG9hc3QgfCBudWxsIHwgYW55IHtcbiAgICAvLyBtYXggb3BlbmVkIGFuZCBhdXRvIGRpc21pc3MgPSB0cnVlXG4gICAgaWYgKHRoaXMudG9hc3RDb25maWcucHJldmVudER1cGxpY2F0ZXMgJiYgdGhpcy5pc0R1cGxpY2F0ZShtZXNzYWdlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHRoaXMucHJldmlvdXNUb2FzdE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIGxldCBrZWVwSW5hY3RpdmUgPSBmYWxzZTtcbiAgICBpZiAodGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQgJiYgdGhpcy5jdXJyZW50bHlBY3RpdmUgPj0gdGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQpIHtcbiAgICAgIGtlZXBJbmFjdGl2ZSA9IHRydWU7XG4gICAgICBpZiAodGhpcy50b2FzdENvbmZpZy5hdXRvRGlzbWlzcykge1xuICAgICAgICB0aGlzLmNsZWFyKHRoaXMudG9hc3RzW3RoaXMudG9hc3RzLmxlbmd0aCAtIDFdLnRvYXN0SWQpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcucG9zaXRpb25DbGFzcywgdGhpcy5vdmVybGF5Q29udGFpbmVyKTtcbiAgICB0aGlzLmluZGV4ID0gdGhpcy5pbmRleCArIDE7XG4gICAgLy8gbGV0IHNhbml0aXplZE1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIGxldCBzYW5pdGl6ZWRNZXNzYWdlOiBhbnkgPSBtZXNzYWdlO1xuICAgIGlmIChtZXNzYWdlICYmIGNvbmZpZy5lbmFibGVIdG1sKSB7XG4gICAgICBzYW5pdGl6ZWRNZXNzYWdlID0gdGhpcy5zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIG1lc3NhZ2UpO1xuICAgIH1cbiAgICBjb25zdCB0b2FzdFJlZiA9IG5ldyBUb2FzdFJlZihvdmVybGF5UmVmKTtcbiAgICBjb25zdCB0b2FzdFBhY2thZ2UgPSBuZXcgVG9hc3RQYWNrYWdlKFxuICAgICAgdGhpcy5pbmRleCxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHNhbml0aXplZE1lc3NhZ2UsXG4gICAgICB0aXRsZSxcbiAgICAgIHRvYXN0VHlwZSxcbiAgICAgIHRvYXN0UmVmLFxuICAgICk7XG4gICAgLy8gY29uc3QgaW5zOiBBY3RpdmVUb2FzdCA9IHtcbiAgICBjb25zdCBpbnM6IEFjdGl2ZVRvYXN0IHwgYW55ID0ge1xuICAgICAgdG9hc3RJZDogdGhpcy5pbmRleCxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICB0b2FzdFJlZixcbiAgICAgIG9uU2hvd246IHRvYXN0UmVmLmFmdGVyQWN0aXZhdGUoKSxcbiAgICAgIG9uSGlkZGVuOiB0b2FzdFJlZi5hZnRlckNsb3NlZCgpLFxuICAgICAgb25UYXA6IHRvYXN0UGFja2FnZS5vblRhcCgpLFxuICAgICAgb25BY3Rpb246IHRvYXN0UGFja2FnZS5vbkFjdGlvbigpLFxuICAgIH07XG4gICAgY29uc3QgdG9hc3RJbmplY3RvciA9IG5ldyBUb2FzdEluamVjdG9yKHRvYXN0UGFja2FnZSwgdGhpcy5faW5qZWN0b3IpO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29uZmlnLnRvYXN0Q29tcG9uZW50LCB0b2FzdEluamVjdG9yKTtcbiAgICBpbnMucG9ydGFsID0gb3ZlcmxheVJlZi5hdHRhY2goY29tcG9uZW50LCB0aGlzLnRvYXN0Q29uZmlnLm5ld2VzdE9uVG9wKTtcbiAgICBpZiAoIWtlZXBJbmFjdGl2ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlucy50b2FzdFJlZi5hY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRseUFjdGl2ZSA9IHRoaXMuY3VycmVudGx5QWN0aXZlICsgMTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnRvYXN0cy5wdXNoKGlucyk7XG4gICAgcmV0dXJuIGlucztcbiAgfVxufVxuIl19