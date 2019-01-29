/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter, RendererFactory2 } from '@angular/core';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { ModalBackdropComponent } from './modalBackdrop.component';
import { ModalContainerComponent } from './modalContainer.component';
import { MDBModalRef, ClassName, modalConfigDefaults, ModalOptions, TransitionDurations } from './modal.options';
import { msConfig } from './modalService.config';
var MDBModalService = /** @class */ (function () {
    // public constructor(private clf: ComponentLoaderFactory) {
    function MDBModalService(rendererFactory, clf) {
        this.clf = clf;
        // constructor props
        this.config = modalConfigDefaults;
        this.open = new EventEmitter();
        this.opened = new EventEmitter();
        this.close = new EventEmitter();
        this.closed = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        // private lastDismissReason = '';
        this.lastDismissReason = '';
        this.loaders = [];
        //   this._backdropLoader = this.clf.createLoader<ModalBackdropComponent>(null, null, null);
        this._backdropLoader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.renderer = rendererFactory.createRenderer(null, null);
        msConfig.serviceInstance = this;
    }
    /** Shows a modal */
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    MDBModalService.prototype.show = /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.hide = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? TransitionDurations.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._showBackdrop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        /** @type {?} */
        var isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._hideBackdrop = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        /** @type {?} */
        var duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    MDBModalService.prototype._showModal = /**
     * @param {?} content
     * @return {?}
     */
    function (content) {
        /** @type {?} */
        var modalLoader = this.loaders[this.loaders.length - 1];
        /** @type {?} */
        var mdbModalRef = new MDBModalRef();
        /** @type {?} */
        var modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated, data: this.config.data });
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype._hideModal = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        /** @type {?} */
        var modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getModalsCount = /**
     * @return {?}
     */
    function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    MDBModalService.prototype.setDismissReason = /**
     * @param {?} reason
     * @return {?}
     */
    function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @protected
     * @return {?}
     */
    MDBModalService.prototype.removeBackdrop = /**
     * @protected
     * @return {?}
     */
    function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /** @internal */
    /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    MDBModalService.prototype.checkScrollbar = /** AFTER PR MERGE MODAL.COMPONENT WILL BE USING THIS CODE*/
    /** Scroll bar tricks */
    /**
     * \@internal
     * @return {?}
     */
    function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.setScrollbar = /**
     * @return {?}
     */
    function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype.resetScrollbar = /**
     * @private
     * @return {?}
     */
    function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    // thx d.walsh
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype.getScrollbarWidth = 
    // thx d.walsh
    /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var scrollDiv = this.renderer.createElement('div');
        this.renderer.addClass(scrollDiv, ClassName.SCROLLBAR_MEASURER);
        this.renderer.appendChild(document.body, scrollDiv);
        /** @type {?} */
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @private
     * @return {?}
     */
    MDBModalService.prototype._createLoaders = /**
     * @private
     * @return {?}
     */
    function () {
        // const loader = this.clf.createLoader<ModalContainerComponent>(null, null, null);
        /** @type {?} */
        var loader = this.clf.createLoader(this.el, this.vcr, this.renderer);
        this.copyEvent(loader.onBeforeShow, this.open);
        this.copyEvent(loader.onShown, this.opened);
        this.copyEvent(loader.onBeforeHide, this.close);
        this.copyEvent(loader.onHidden, this.closed);
        this.loaders.push(loader);
    };
    /**
     * @private
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.removeLoaders = /**
     * @private
     * @param {?} level
     * @return {?}
     */
    function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    MDBModalService.prototype.copyEvent = /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    MDBModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MDBModalService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: ComponentLoaderFactory }
    ]; };
    return MDBModalService;
}());
export { MDBModalService };
if (false) {
    /** @type {?} */
    MDBModalService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.vcr;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.el;
    /** @type {?} */
    MDBModalService.prototype.open;
    /** @type {?} */
    MDBModalService.prototype.opened;
    /** @type {?} */
    MDBModalService.prototype.close;
    /** @type {?} */
    MDBModalService.prototype.closed;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.isBodyOverflowing;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.originalBodyPadding;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.scrollbarWidth;
    /**
     * @type {?}
     * @protected
     */
    MDBModalService.prototype.backdropRef;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype._backdropLoader;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.modalsCount;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.lastDismissReason;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.loaders;
    /**
     * @type {?}
     * @private
     */
    MDBModalService.prototype.clf;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL21vZGFscy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsVUFBVSxFQUVWLFlBQVksRUFFWixnQkFBZ0IsRUFFSixNQUFNLGVBQWUsQ0FBQztBQUdwQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHakQ7SUEwQkUsNERBQTREO0lBQzFELHlCQUFtQixlQUFpQyxFQUFVLEdBQTJCO1FBQTNCLFFBQUcsR0FBSCxHQUFHLENBQXdCOztRQXhCcEYsV0FBTSxHQUFpQixtQkFBbUIsQ0FBQztRQUszQyxTQUFJLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0MsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9DLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QyxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUV4QixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUtyQixnQkFBVyxHQUFHLENBQUMsQ0FBQzs7UUFFaEIsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRTVCLFlBQU8sR0FBK0MsRUFBRSxD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LFxuICBJbmplY3RhYmxlLFxuICBUZW1wbGF0ZVJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG4gIFJlbmRlcmVyRmFjdG9yeTIsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmNsYXNzJztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuZmFjdG9yeSc7XG5pbXBvcnQgeyBNb2RhbEJhY2tkcm9wQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbEJhY2tkcm9wLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWxDb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1EQk1vZGFsUmVmLCBDbGFzc05hbWUsIG1vZGFsQ29uZmlnRGVmYXVsdHMsIE1vZGFsT3B0aW9ucywgVHJhbnNpdGlvbkR1cmF0aW9ucyB9IGZyb20gJy4vbW9kYWwub3B0aW9ucyc7XG5pbXBvcnQgeyBtc0NvbmZpZyB9IGZyb20gJy4vbW9kYWxTZXJ2aWNlLmNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1EQk1vZGFsU2VydmljZSB7XG4gIC8vIGNvbnN0cnVjdG9yIHByb3BzXG4gIHB1YmxpYyBjb25maWc6IE1vZGFsT3B0aW9ucyA9IG1vZGFsQ29uZmlnRGVmYXVsdHM7XG4gIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWY7XG4gIHByaXZhdGUgZWw6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIG9wZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgb3BlbmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIGNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJvdGVjdGVkIGlzQm9keU92ZXJmbG93aW5nID0gZmFsc2U7XG4gIHByb3RlY3RlZCBvcmlnaW5hbEJvZHlQYWRkaW5nID0gMDtcblxuICBwcm90ZWN0ZWQgc2Nyb2xsYmFyV2lkdGggPSAwO1xuXG4gIC8vIHByb3RlY3RlZCBiYWNrZHJvcFJlZjogQ29tcG9uZW50UmVmPE1vZGFsQmFja2Ryb3BDb21wb25lbnQ+O1xuICBwcm90ZWN0ZWQgYmFja2Ryb3BSZWY6IENvbXBvbmVudFJlZjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PiB8IGFueTtcbiAgcHJpdmF0ZSBfYmFja2Ryb3BMb2FkZXI6IENvbXBvbmVudExvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PjtcbiAgcHJpdmF0ZSBtb2RhbHNDb3VudCA9IDA7XG4gIC8vIHByaXZhdGUgbGFzdERpc21pc3NSZWFzb24gPSAnJztcbiAgcHJpdmF0ZSBsYXN0RGlzbWlzc1JlYXNvbjogYW55ID0gJyc7XG5cbiAgcHJpdmF0ZSBsb2FkZXJzOiBDb21wb25lbnRMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+W10gPSBbXTtcbiAgLy8gcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgY2xmOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MiwgcHJpdmF0ZSBjbGY6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcbiAgLy8gICB0aGlzLl9iYWNrZHJvcExvYWRlciA9IHRoaXMuY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50PihudWxsLCBudWxsLCBudWxsKTtcbiAgICB0aGlzLl9iYWNrZHJvcExvYWRlciA9IHRoaXMuY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbEJhY2tkcm9wQ29tcG9uZW50Pih0aGlzLmVsLCB0aGlzLnZjciwgdGhpcy5yZW5kZXJlcik7XG4gICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgICBtc0NvbmZpZy5zZXJ2aWNlSW5zdGFuY2UgPSB0aGlzO1xuICB9XG5cbiAgLyoqIFNob3dzIGEgbW9kYWwgKi9cbiAgc2hvdyhjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+IHwgYW55LCBjb25maWc/OiBhbnkpOiBNREJNb2RhbFJlZiB7XG4gICAgdGhpcy5tb2RhbHNDb3VudCsrO1xuICAgIHRoaXMuX2NyZWF0ZUxvYWRlcnMoKTtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIG1vZGFsQ29uZmlnRGVmYXVsdHMsIGNvbmZpZyk7XG4gICAgdGhpcy5fc2hvd0JhY2tkcm9wKCk7XG4gICAgdGhpcy5sYXN0RGlzbWlzc1JlYXNvbiA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dNb2RhbChjb250ZW50KTtcbiAgfVxuXG4gIGhpZGUobGV2ZWw6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm1vZGFsc0NvdW50ID09PSAxKSB7XG4gICAgICB0aGlzLl9oaWRlQmFja2Ryb3AoKTtcbiAgICAgIHRoaXMucmVzZXRTY3JvbGxiYXIoKTtcbiAgICB9XG4gICAgdGhpcy5tb2RhbHNDb3VudCA9IHRoaXMubW9kYWxzQ291bnQgPj0gMSA/IHRoaXMubW9kYWxzQ291bnQgLSAxIDogMDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVNb2RhbChsZXZlbCk7XG4gICAgICB0aGlzLnJlbW92ZUxvYWRlcnMobGV2ZWwpO1xuICAgIH0sIHRoaXMuY29uZmlnLmFuaW1hdGVkID8gVHJhbnNpdGlvbkR1cmF0aW9ucy5CQUNLRFJPUCA6IDApO1xuICB9XG5cbiAgX3Nob3dCYWNrZHJvcCgpOiB2b2lkIHtcbiAgICBjb25zdCBpc0JhY2tkcm9wRW5hYmxlZCA9IHRoaXMuY29uZmlnLmJhY2tkcm9wIHx8IHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJztcbiAgICBjb25zdCBpc0JhY2tkcm9wSW5ET00gPSAhdGhpcy5iYWNrZHJvcFJlZiB8fCAhdGhpcy5iYWNrZHJvcFJlZi5pbnN0YW5jZS5pc1Nob3duO1xuXG4gICAgaWYgKHRoaXMubW9kYWxzQ291bnQgPT09IDEpIHtcbiAgICAgIHRoaXMucmVtb3ZlQmFja2Ryb3AoKTtcblxuICAgICAgaWYgKGlzQmFja2Ryb3BFbmFibGVkICYmIGlzQmFja2Ryb3BJbkRPTSkge1xuICAgICAgICB0aGlzLl9iYWNrZHJvcExvYWRlclxuICAgICAgICAuYXR0YWNoKE1vZGFsQmFja2Ryb3BDb21wb25lbnQpXG4gICAgICAgIC50bygnYm9keScpXG4gICAgICAgIC5zaG93KHtpc0FuaW1hdGVkOiB0aGlzLmNvbmZpZy5hbmltYXRlZH0pO1xuICAgICAgICB0aGlzLmJhY2tkcm9wUmVmID0gdGhpcy5fYmFja2Ryb3BMb2FkZXIuX2NvbXBvbmVudFJlZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaGlkZUJhY2tkcm9wKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5iYWNrZHJvcFJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJhY2tkcm9wUmVmLmluc3RhbmNlLmlzU2hvd24gPSBmYWxzZTtcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuY29uZmlnLmFuaW1hdGVkID8gVHJhbnNpdGlvbkR1cmF0aW9ucy5CQUNLRFJPUCA6IDA7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZUJhY2tkcm9wKCksIGR1cmF0aW9uKTtcbiAgfVxuXG4gIF9zaG93TW9kYWwoY29udGVudDogYW55KTogTURCTW9kYWxSZWYge1xuICAgIGNvbnN0IG1vZGFsTG9hZGVyID0gdGhpcy5sb2FkZXJzW3RoaXMubG9hZGVycy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBtZGJNb2RhbFJlZiA9IG5ldyBNREJNb2RhbFJlZigpO1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyUmVmID0gbW9kYWxMb2FkZXJcbiAgICAucHJvdmlkZSh7cHJvdmlkZTogTW9kYWxPcHRpb25zLCB1c2VWYWx1ZTogdGhpcy5jb25maWd9KVxuICAgIC5wcm92aWRlKHtwcm92aWRlOiBNREJNb2RhbFJlZiwgdXNlVmFsdWU6IG1kYk1vZGFsUmVmfSlcbiAgICAuYXR0YWNoKE1vZGFsQ29udGFpbmVyQ29tcG9uZW50KVxuICAgIC50bygnYm9keScpXG4gICAgLnNob3coe2NvbnRlbnQsIGlzQW5pbWF0ZWQ6IHRoaXMuY29uZmlnLmFuaW1hdGVkLCBkYXRhOiB0aGlzLmNvbmZpZy5kYXRhfSk7XG4gICAgbW9kYWxDb250YWluZXJSZWYuaW5zdGFuY2UubGV2ZWwgPSB0aGlzLmdldE1vZGFsc0NvdW50KCk7XG4gICAgbWRiTW9kYWxSZWYuaGlkZSA9ICgpID0+IHtcbiAgICAgIG1vZGFsQ29udGFpbmVyUmVmLmluc3RhbmNlLmhpZGUoKTtcbiAgICB9O1xuICAgIG1kYk1vZGFsUmVmLmNvbnRlbnQgPSBtb2RhbExvYWRlci5nZXRJbm5lckNvbXBvbmVudCgpIHx8IG51bGw7XG4gICAgcmV0dXJuIG1kYk1vZGFsUmVmO1xuICB9XG5cbiAgX2hpZGVNb2RhbChsZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSB0aGlzLmxvYWRlcnNbbGV2ZWwgLSAxXTtcbiAgICBpZiAobW9kYWxMb2FkZXIpIHtcbiAgICAgIG1vZGFsTG9hZGVyLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXRNb2RhbHNDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm1vZGFsc0NvdW50O1xuICB9XG5cbiAgc2V0RGlzbWlzc1JlYXNvbihyZWFzb246IHN0cmluZykge1xuICAgIHRoaXMubGFzdERpc21pc3NSZWFzb24gPSByZWFzb247XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVtb3ZlQmFja2Ryb3AoKTogdm9pZCB7XG4gICAgdGhpcy5fYmFja2Ryb3BMb2FkZXIuaGlkZSgpO1xuICAgIHRoaXMuYmFja2Ryb3BSZWYgPSBudWxsO1xuICB9XG5cbiAgLyoqIEFGVEVSIFBSIE1FUkdFIE1PREFMLkNPTVBPTkVOVCBXSUxMIEJFIFVTSU5HIFRISVMgQ09ERSovXG4gIC8qKiBTY3JvbGwgYmFyIHRyaWNrcyAqL1xuICAvKiogQGludGVybmFsICovXG4gIHB1YmxpYyBjaGVja1Njcm9sbGJhcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzQm9keU92ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuc2Nyb2xsYmFyV2lkdGggPSB0aGlzLmdldFNjcm9sbGJhcldpZHRoKCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIGlmICghZG9jdW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykgfHwgJzAnLCAxMCk7XG5cbiAgICBpZiAodGhpcy5pc0JvZHlPdmVyZmxvd2luZykge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBgJHt0aGlzLm9yaWdpbmFsQm9keVBhZGRpbmcgKyB0aGlzLnNjcm9sbGJhcldpZHRofXB4YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc2V0U2Nyb2xsYmFyKCk6IHZvaWQge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gdGhpcy5vcmlnaW5hbEJvZHlQYWRkaW5nICsgJ3B4JztcbiAgfVxuXG4gIC8vIHRoeCBkLndhbHNoXG4gIHByaXZhdGUgZ2V0U2Nyb2xsYmFyV2lkdGgoKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY3JvbGxEaXYgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc2Nyb2xsRGl2LCBDbGFzc05hbWUuU0NST0xMQkFSX01FQVNVUkVSKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHksIHNjcm9sbERpdik7XG4gICAgY29uc3Qgc2Nyb2xsYmFyV2lkdGggPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5LCBzY3JvbGxEaXYpO1xuXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuXG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVMb2FkZXJzKCk6IHZvaWQge1xuICAgIC8vIGNvbnN0IGxvYWRlciA9IHRoaXMuY2xmLmNyZWF0ZUxvYWRlcjxNb2RhbENvbnRhaW5lckNvbXBvbmVudD4obnVsbCwgbnVsbCwgbnVsbCk7XG4gICAgY29uc3QgbG9hZGVyID0gdGhpcy5jbGYuY3JlYXRlTG9hZGVyPE1vZGFsQ29udGFpbmVyQ29tcG9uZW50Pih0aGlzLmVsLCB0aGlzLnZjciwgdGhpcy5yZW5kZXJlcik7XG4gICAgdGhpcy5jb3B5RXZlbnQobG9hZGVyLm9uQmVmb3JlU2hvdywgdGhpcy5vcGVuKTtcbiAgICB0aGlzLmNvcHlFdmVudChsb2FkZXIub25TaG93biwgdGhpcy5vcGVuZWQpO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkJlZm9yZUhpZGUsIHRoaXMuY2xvc2UpO1xuICAgIHRoaXMuY29weUV2ZW50KGxvYWRlci5vbkhpZGRlbiwgdGhpcy5jbG9zZWQpO1xuICAgIHRoaXMubG9hZGVycy5wdXNoKGxvYWRlcik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxvYWRlcnMobGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubG9hZGVycy5zcGxpY2UobGV2ZWwgLSAxLCAxKTtcbiAgICB0aGlzLmxvYWRlcnMuZm9yRWFjaCgobG9hZGVyOiBDb21wb25lbnRMb2FkZXI8TW9kYWxDb250YWluZXJDb21wb25lbnQ+LCBpOiBudW1iZXIpID0+IHtcbiAgICAgIGxvYWRlci5pbnN0YW5jZS5sZXZlbCA9IGkgKyAxO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb3B5RXZlbnQoZnJvbTogRXZlbnRFbWl0dGVyPGFueT4sIHRvOiBFdmVudEVtaXR0ZXI8YW55Pikge1xuICAgIGZyb20uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRvLmVtaXQodGhpcy5sYXN0RGlzbWlzc1JlYXNvbik7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==