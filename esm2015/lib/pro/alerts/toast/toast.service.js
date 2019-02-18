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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWxlcnRzL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFnQixNQUFNLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzVGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbkQsT0FBTyxFQUFrQyxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFFekQsaUNBU0M7OztJQVJDLDhCQUFpQjs7SUFDakIsOEJBQWlCOztJQUNqQiw2QkFBMkI7O0lBQzNCLCtCQUF5Qjs7SUFDekIsOEJBQTBCOztJQUMxQiwrQkFBMkI7O0lBQzNCLDRCQUF3Qjs7SUFDeEIsK0JBQTJCOztBQUk3QixNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQU92QixZQUUrQixXQUErQixFQUNwRCxPQUFnQixFQUNoQixTQUFtQixFQUNuQixTQUF1QjtRQUhGLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUNwRCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDbkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQVhqQyxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YseUJB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QzNCLHdDQUEwQzs7SUFJeEMsbUNBQTREOzs7OztJQUM1RCwrQkFBd0I7Ozs7O0lBQ3hCLGlDQUEyQjs7Ozs7SUFDM0IsaUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIENvbXBvbmVudFJlZiwgSW5qZWN0LCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgT3ZlcmxheSB9IGZyb20gJy4uL292ZXJsYXkvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwgfSBmcm9tICcuLi9wb3J0YWwvcG9ydGFsJztcbmltcG9ydCB7IEdsb2JhbENvbmZpZywgSW5kaXZpZHVhbENvbmZpZywgVG9hc3RQYWNrYWdlLCB0c0NvbmZpZyB9IGZyb20gJy4vdG9hc3QuY29uZmlnJztcbmltcG9ydCB7IFRvYXN0SW5qZWN0b3IsIFRvYXN0UmVmIH0gZnJvbSAnLi90b2FzdC5pbmplY3Rvcic7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZSB9IGZyb20gJy4vdG9hc3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRPQVNUX0NPTkZJRyB9IGZyb20gJy4vdG9hc3QudG9rZW4nO1xuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuZXhwb3J0IGludGVyZmFjZSBBY3RpdmVUb2FzdCB7XG4gIHRvYXN0SWQ/OiBudW1iZXI7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHBvcnRhbD86IENvbXBvbmVudFJlZjxhbnk+O1xuICB0b2FzdFJlZj86IFRvYXN0UmVmPGFueT47XG4gIG9uU2hvd24/OiBPYnNlcnZhYmxlPGFueT47XG4gIG9uSGlkZGVuPzogT2JzZXJ2YWJsZTxhbnk+O1xuICBvblRhcD86IE9ic2VydmFibGU8YW55PjtcbiAgb25BY3Rpb24/OiBPYnNlcnZhYmxlPGFueT47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUb2FzdFNlcnZpY2Uge1xuICBpbmRleCA9IDA7XG4gIHByZXZpb3VzVG9hc3RNZXNzYWdlID0gJyc7XG4gIGN1cnJlbnRseUFjdGl2ZSA9IDA7XG4gIHRvYXN0czogQWN0aXZlVG9hc3RbXSA9IFtdO1xuICBvdmVybGF5Q29udGFpbmVyOiBUb2FzdENvbnRhaW5lckRpcmVjdGl2ZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAvLyBASW5qZWN0KFRPQVNUX0NPTkZJRykgcHVibGljIHRvYXN0Q29uZmlnOiBHbG9iYWxDb25maWcsXG4gICAgQEluamVjdChUT0FTVF9DT05GSUcpIHB1YmxpYyB0b2FzdENvbmZpZzogR2xvYmFsQ29uZmlnIHwgYW55LFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgKSB7XG4gICAgdHNDb25maWcuc2VydmljZUluc3RhbmNlID0gdGhpcztcblxuXG4gICAgZnVuY3Rpb24gdXNlPFQ+KHNvdXJjZTogVCwgZGVmYXVsdFZhbHVlOiBUKTogVCB7XG4gICAgICByZXR1cm4gdG9hc3RDb25maWcgJiYgc291cmNlICE9PSB1bmRlZmluZWQgPyBzb3VyY2UgOiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuICAgIHRoaXMudG9hc3RDb25maWcgPSB0aGlzLmFwcGx5Q29uZmlnKHRvYXN0Q29uZmlnKTtcbiAgICAvLyBHbG9iYWxcbiAgICB0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCwgMCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5hdXRvRGlzbWlzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmF1dG9EaXNtaXNzLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5uZXdlc3RPblRvcCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm5ld2VzdE9uVG9wLCB0cnVlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnByZXZlbnREdXBsaWNhdGVzID0gdXNlKHRoaXMudG9hc3RDb25maWcucHJldmVudER1cGxpY2F0ZXMsIGZhbHNlKTtcbiAgICBpZiAoIXRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMpIHtcbiAgICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5lcnJvciA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuZXJyb3IgfHwgJ21kLXRvYXN0LWVycm9yJztcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmluZm8gPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLmluZm8gfHwgJ21kLXRvYXN0LWluZm8nO1xuICAgIHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcyA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcyB8fCAnbWQtdG9hc3Qtc3VjY2Vzcyc7XG4gICAgdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nIHx8ICdtZC10b2FzdC13YXJuaW5nJztcblxuICAgIC8vIEluZGl2aWR1YWxcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRpbWVPdXQgPSB1c2UodGhpcy50b2FzdENvbmZpZy50aW1lT3V0LCA1MDAwKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmNsb3NlQnV0dG9uID0gdXNlKHRoaXMudG9hc3RDb25maWcuY2xvc2VCdXR0b24sIGZhbHNlKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLmV4dGVuZGVkVGltZU91dCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLmV4dGVuZGVkVGltZU91dCwgMTAwMCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5wcm9ncmVzc0JhciA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnByb2dyZXNzQmFyLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5lbmFibGVIdG1sID0gdXNlKHRoaXMudG9hc3RDb25maWcuZW5hYmxlSHRtbCwgZmFsc2UpO1xuICAgIHRoaXMudG9hc3RDb25maWcudG9hc3RDbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnRvYXN0Q2xhc3MsICdtZC10b2FzdCcpO1xuICAgIHRoaXMudG9hc3RDb25maWcucG9zaXRpb25DbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnBvc2l0aW9uQ2xhc3MsICdtZC10b2FzdC10b3AtcmlnaHQnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRpdGxlQ2xhc3MgPSB1c2UodGhpcy50b2FzdENvbmZpZy50aXRsZUNsYXNzLCAnbWQtdG9hc3QtdGl0bGUnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLm1lc3NhZ2VDbGFzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm1lc3NhZ2VDbGFzcywgJ21kLXRvYXN0LW1lc3NhZ2UnKTtcbiAgICB0aGlzLnRvYXN0Q29uZmlnLnRhcFRvRGlzbWlzcyA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnRhcFRvRGlzbWlzcywgdHJ1ZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy50b2FzdENvbXBvbmVudCA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLnRvYXN0Q29tcG9uZW50LCBUb2FzdENvbXBvbmVudCk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5vbkFjdGl2YXRlVGljayA9IHVzZSh0aGlzLnRvYXN0Q29uZmlnLm9uQWN0aXZhdGVUaWNrLCBmYWxzZSk7XG4gICAgdGhpcy50b2FzdENvbmZpZy5hY3Rpb25CdXR0b24gPSB1c2UodGhpcy50b2FzdENvbmZpZy5hY3Rpb25CdXR0b24sICcnKTtcbiAgfVxuICAvKiogc2hvdyBzdWNjZXNzZnVsIHRvYXN0ICovXG4gIC8vIHNob3cobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnLCB0eXBlID0gJycpIHtcbiAgICBzaG93KG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcgfCBhbnksIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZywgdHlwZSA9ICcnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cbiAgLyoqIHNob3cgc3VjY2Vzc2Z1bCB0b2FzdCAqL1xuICAvLyBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG92ZXJyaWRlPzogSW5kaXZpZHVhbENvbmZpZykge1xuICAgIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gIC8vICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuc3VjY2VzcztcbiAgICBjb25zdCB0eXBlOiBhbnkgPSB0aGlzLnRvYXN0Q29uZmlnLmljb25DbGFzc2VzLnN1Y2Nlc3M7XG4gICAgcmV0dXJuIHRoaXMuX2J1aWxkTm90aWZpY2F0aW9uKHR5cGUsIG1lc3NhZ2UsIHRpdGxlLCB0aGlzLmFwcGx5Q29uZmlnKG92ZXJyaWRlKSk7XG4gIH1cbiAgLyoqIHNob3cgZXJyb3IgdG9hc3QgKi9cbiAgLy8gZXJyb3IobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZyB8IGFueSwgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gIC8vICAgY29uc3QgdHlwZSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuZXJyb3I7XG4gICAgY29uc3QgdHlwZTogYW55ID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5lcnJvcjtcbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuICAvKiogc2hvdyBpbmZvIHRvYXN0ICovXG4gIC8vIGluZm8obWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgaW5mbyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIHwgYW55LCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy5pbmZvO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMuaW5mbztcbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuICAvKiogc2hvdyB3YXJuaW5nIHRvYXN0ICovXG4gIC8vIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgb3ZlcnJpZGU/OiBJbmRpdmlkdWFsQ29uZmlnKSB7XG4gICAgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nIHwgYW55LCBvdmVycmlkZT86IEluZGl2aWR1YWxDb25maWcpIHtcbiAgLy8gICBjb25zdCB0eXBlID0gdGhpcy50b2FzdENvbmZpZy5pY29uQ2xhc3Nlcy53YXJuaW5nO1xuICAgIGNvbnN0IHR5cGU6IGFueSA9IHRoaXMudG9hc3RDb25maWcuaWNvbkNsYXNzZXMud2FybmluZztcbiAgICByZXR1cm4gdGhpcy5fYnVpbGROb3RpZmljYXRpb24odHlwZSwgbWVzc2FnZSwgdGl0bGUsIHRoaXMuYXBwbHlDb25maWcob3ZlcnJpZGUpKTtcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBvciBhIHNpbmdsZSB0b2FzdCBieSBpZFxuICAgKi9cbiAgY2xlYXIodG9hc3RJZD86IG51bWJlcikge1xuICAgIC8vIENhbGwgZXZlcnkgdG9hc3RSZWYgbWFudWFsQ2xvc2UgZnVuY3Rpb25cbiAgICBsZXQgdG9hc3Q6IGFueTtcbiAgICBmb3IgKHRvYXN0IG9mIHRoaXMudG9hc3RzKSB7XG4gICAgICBpZiAodG9hc3RJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0b2FzdC50b2FzdElkID09PSB0b2FzdElkKSB7XG4gICAgICAgICAgdG9hc3QudG9hc3RSZWYubWFudWFsQ2xvc2UoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRvYXN0LnRvYXN0UmVmLm1hbnVhbENsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZW1vdmUgYW5kIGRlc3Ryb3kgYSBzaW5nbGUgdG9hc3QgYnkgaWRcbiAgICovXG4gIHJlbW92ZSh0b2FzdElkOiBudW1iZXIpIHtcbiAgICAvLyBjb25zdCBmb3VuZCA9IHRoaXMuX2ZpbmRUb2FzdCh0b2FzdElkKTtcbiAgICBjb25zdCBmb3VuZDogYW55ID0gdGhpcy5fZmluZFRvYXN0KHRvYXN0SWQpO1xuICAgIGlmICghZm91bmQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm91bmQuYWN0aXZlVG9hc3QudG9hc3RSZWYuY2xvc2UoKTtcbiAgICB0aGlzLnRvYXN0cy5zcGxpY2UoZm91bmQuaW5kZXgsIDEpO1xuICAgIHRoaXMuY3VycmVudGx5QWN0aXZlID0gdGhpcy5jdXJyZW50bHlBY3RpdmUgLSAxO1xuICAgIGlmICghdGhpcy50b2FzdENvbmZpZy5tYXhPcGVuZWQgfHwgIXRoaXMudG9hc3RzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50bHlBY3RpdmUgPD0gK3RoaXMudG9hc3RDb25maWcubWF4T3BlbmVkICYmIHRoaXMudG9hc3RzW3RoaXMuY3VycmVudGx5QWN0aXZlXSkge1xuICAgICAgLy8gY29uc3QgcCA9IHRoaXMudG9hc3RzW3RoaXMuY3VycmVudGx5QWN0aXZlXS50b2FzdFJlZjtcbiAgICAgIGNvbnN0IHA6IGFueSA9IHRoaXMudG9hc3RzW3RoaXMuY3VycmVudGx5QWN0aXZlXS50b2FzdFJlZjtcbiAgICAgIGlmICghcC5pc0luYWN0aXZlKCkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPSB0aGlzLmN1cnJlbnRseUFjdGl2ZSArIDE7XG4gICAgICAgIHAuYWN0aXZhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0b2FzdCBtZXNzYWdlIGlzIGFscmVhZHkgc2hvd25cbiAgICovXG4gIGlzRHVwbGljYXRlKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b2FzdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLnRvYXN0c1tpXS5tZXNzYWdlID09PSBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKiogY3JlYXRlIGEgY2xvbmUgb2YgZ2xvYmFsIGNvbmZpZyBhbmQgYXBwbHkgaW5kaXZpZHVhbCBzZXR0aW5ncyAqL1xuICBwcml2YXRlIGFwcGx5Q29uZmlnKG92ZXJyaWRlOiBJbmRpdmlkdWFsQ29uZmlnID0ge30pOiBHbG9iYWxDb25maWcge1xuICAgIGZ1bmN0aW9uIHVzZTxUPihzb3VyY2U6IFQsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuICAgICAgcmV0dXJuIG92ZXJyaWRlICYmIHNvdXJjZSAhPT0gdW5kZWZpbmVkID8gc291cmNlIDogZGVmYXVsdFZhbHVlO1xuICAgIH1cbiAgICBjb25zdCBjdXJyZW50OiBHbG9iYWxDb25maWcgPSB7IC4uLnRoaXMudG9hc3RDb25maWcgfTtcbiAgICBjdXJyZW50LmNsb3NlQnV0dG9uID0gdXNlKG92ZXJyaWRlLmNsb3NlQnV0dG9uLCBjdXJyZW50LmNsb3NlQnV0dG9uKTtcbiAgICBjdXJyZW50LmV4dGVuZGVkVGltZU91dCA9IHVzZShvdmVycmlkZS5leHRlbmRlZFRpbWVPdXQsIGN1cnJlbnQuZXh0ZW5kZWRUaW1lT3V0KTtcbiAgICBjdXJyZW50LnByb2dyZXNzQmFyID0gdXNlKG92ZXJyaWRlLnByb2dyZXNzQmFyLCBjdXJyZW50LnByb2dyZXNzQmFyKTtcbiAgICBjdXJyZW50LnRpbWVPdXQgPSB1c2Uob3ZlcnJpZGUudGltZU91dCwgY3VycmVudC50aW1lT3V0KTtcbiAgICBjdXJyZW50LmVuYWJsZUh0bWwgPSB1c2Uob3ZlcnJpZGUuZW5hYmxlSHRtbCwgY3VycmVudC5lbmFibGVIdG1sKTtcbiAgICBjdXJyZW50LnRvYXN0Q2xhc3MgPSB1c2Uob3ZlcnJpZGUudG9hc3RDbGFzcywgY3VycmVudC50b2FzdENsYXNzKTtcbiAgICBjdXJyZW50LnBvc2l0aW9uQ2xhc3MgPSB1c2Uob3ZlcnJpZGUucG9zaXRpb25DbGFzcywgY3VycmVudC5wb3NpdGlvbkNsYXNzKTtcbiAgICBjdXJyZW50LnRpdGxlQ2xhc3MgPSB1c2Uob3ZlcnJpZGUudGl0bGVDbGFzcywgY3VycmVudC50aXRsZUNsYXNzKTtcbiAgICBjdXJyZW50Lm1lc3NhZ2VDbGFzcyA9IHVzZShvdmVycmlkZS5tZXNzYWdlQ2xhc3MsIGN1cnJlbnQubWVzc2FnZUNsYXNzKTtcbiAgICBjdXJyZW50LnRhcFRvRGlzbWlzcyA9IHVzZShvdmVycmlkZS50YXBUb0Rpc21pc3MsIGN1cnJlbnQudGFwVG9EaXNtaXNzKTtcbiAgICBjdXJyZW50LnRvYXN0Q29tcG9uZW50ID0gdXNlKG92ZXJyaWRlLnRvYXN0Q29tcG9uZW50LCBjdXJyZW50LnRvYXN0Q29tcG9uZW50KTtcbiAgICBjdXJyZW50Lm9uQWN0aXZhdGVUaWNrID0gdXNlKG92ZXJyaWRlLm9uQWN0aXZhdGVUaWNrLCBjdXJyZW50Lm9uQWN0aXZhdGVUaWNrKTtcbiAgICBjdXJyZW50LmFjdGlvbkJ1dHRvbiA9IHVzZShvdmVycmlkZS5hY3Rpb25CdXR0b24sIGN1cnJlbnQuYWN0aW9uQnV0dG9uKTtcbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRvYXN0IG9iamVjdCBieSBpZFxuICAgKi9cbiAgcHJpdmF0ZSBfZmluZFRvYXN0KHRvYXN0SWQ6IG51bWJlcik6IHsgaW5kZXg6IG51bWJlciwgYWN0aXZlVG9hc3Q6IEFjdGl2ZVRvYXN0IH0gfCBudWxsIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy50b2FzdHNbaV0udG9hc3RJZCA9PT0gdG9hc3RJZCkge1xuICAgICAgICByZXR1cm4geyBpbmRleDogaSwgYWN0aXZlVG9hc3Q6IHRoaXMudG9hc3RzW2ldIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW5kIGF0dGFjaGVzIHRvYXN0IGRhdGEgdG8gY29tcG9uZW50XG4gICAqIHJldHVybnMgbnVsbCBpZiB0b2FzdCBpcyBkdXBsaWNhdGUgYW5kIHByZXZlbnREdXBsaWNhdGVzID09IFRydWVcbiAgICovXG4gIHByaXZhdGUgX2J1aWxkTm90aWZpY2F0aW9uKFxuICAgIHRvYXN0VHlwZTogc3RyaW5nLFxuICAgIG1lc3NhZ2U6IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGNvbmZpZzogR2xvYmFsQ29uZmlnLFxuICApOiBBY3RpdmVUb2FzdCB8IG51bGwgfCBhbnkge1xuICAgIC8vIG1heCBvcGVuZWQgYW5kIGF1dG8gZGlzbWlzcyA9IHRydWVcbiAgICBpZiAodGhpcy50b2FzdENvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyAmJiB0aGlzLmlzRHVwbGljYXRlKG1lc3NhZ2UpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5wcmV2aW91c1RvYXN0TWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgbGV0IGtlZXBJbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCAmJiB0aGlzLmN1cnJlbnRseUFjdGl2ZSA+PSB0aGlzLnRvYXN0Q29uZmlnLm1heE9wZW5lZCkge1xuICAgICAga2VlcEluYWN0aXZlID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLnRvYXN0Q29uZmlnLmF1dG9EaXNtaXNzKSB7XG4gICAgICAgIHRoaXMuY2xlYXIodGhpcy50b2FzdHNbdGhpcy50b2FzdHMubGVuZ3RoIC0gMV0udG9hc3RJZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKGNvbmZpZy5wb3NpdGlvbkNsYXNzLCB0aGlzLm92ZXJsYXlDb250YWluZXIpO1xuICAgIHRoaXMuaW5kZXggPSB0aGlzLmluZGV4ICsgMTtcbiAgICAvLyBsZXQgc2FuaXRpemVkTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgbGV0IHNhbml0aXplZE1lc3NhZ2U6IGFueSA9IG1lc3NhZ2U7XG4gICAgaWYgKG1lc3NhZ2UgJiYgY29uZmlnLmVuYWJsZUh0bWwpIHtcbiAgICAgIHNhbml0aXplZE1lc3NhZ2UgPSB0aGlzLnNhbml0aXplci5zYW5pdGl6ZShTZWN1cml0eUNvbnRleHQuSFRNTCwgbWVzc2FnZSk7XG4gICAgfVxuICAgIGNvbnN0IHRvYXN0UmVmID0gbmV3IFRvYXN0UmVmKG92ZXJsYXlSZWYpO1xuICAgIGNvbnN0IHRvYXN0UGFja2FnZSA9IG5ldyBUb2FzdFBhY2thZ2UoXG4gICAgICB0aGlzLmluZGV4LFxuICAgICAgY29uZmlnLFxuICAgICAgc2FuaXRpemVkTWVzc2FnZSxcbiAgICAgIHRpdGxlLFxuICAgICAgdG9hc3RUeXBlLFxuICAgICAgdG9hc3RSZWYsXG4gICAgKTtcbiAgICAvLyBjb25zdCBpbnM6IEFjdGl2ZVRvYXN0ID0ge1xuICAgICAgY29uc3QgaW5zOiBBY3RpdmVUb2FzdCB8IGFueSA9IHtcbiAgICAgIHRvYXN0SWQ6IHRoaXMuaW5kZXgsXG4gICAgICBtZXNzYWdlLFxuICAgICAgdG9hc3RSZWYsXG4gICAgICBvblNob3duOiB0b2FzdFJlZi5hZnRlckFjdGl2YXRlKCksXG4gICAgICBvbkhpZGRlbjogdG9hc3RSZWYuYWZ0ZXJDbG9zZWQoKSxcbiAgICAgIG9uVGFwOiB0b2FzdFBhY2thZ2Uub25UYXAoKSxcbiAgICAgIG9uQWN0aW9uOiB0b2FzdFBhY2thZ2Uub25BY3Rpb24oKSxcbiAgICB9O1xuICAgIGNvbnN0IHRvYXN0SW5qZWN0b3IgPSBuZXcgVG9hc3RJbmplY3Rvcih0b2FzdFBhY2thZ2UsIHRoaXMuX2luamVjdG9yKTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbmZpZy50b2FzdENvbXBvbmVudCwgdG9hc3RJbmplY3Rvcik7XG4gICAgaW5zLnBvcnRhbCA9IG92ZXJsYXlSZWYuYXR0YWNoKGNvbXBvbmVudCwgdGhpcy50b2FzdENvbmZpZy5uZXdlc3RPblRvcCk7XG4gICAgaWYgKCFrZWVwSW5hY3RpdmUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpbnMudG9hc3RSZWYuYWN0aXZhdGUoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50bHlBY3RpdmUgPSB0aGlzLmN1cnJlbnRseUFjdGl2ZSArIDE7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy50b2FzdHMucHVzaChpbnMpO1xuICAgIHJldHVybiBpbnM7XG4gIH1cbn1cbiJdfQ==