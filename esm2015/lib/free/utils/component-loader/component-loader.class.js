/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: add delay support
// todo: merge events onShow, onShown, etc...
// todo: add global positioning configuration?
import { ElementRef, EventEmitter, Injector, TemplateRef } from '@angular/core';
import { listenToTriggers } from '../triggers';
import { ContentRef } from './content-ref.class';
/**
 * @record
 */
export function ListenOptions() { }
if (false) {
    /** @type {?|undefined} */
    ListenOptions.prototype.target;
    /** @type {?|undefined} */
    ListenOptions.prototype.triggers;
    /** @type {?|undefined} */
    ListenOptions.prototype.show;
    /** @type {?|undefined} */
    ListenOptions.prototype.hide;
    /** @type {?|undefined} */
    ListenOptions.prototype.toggle;
}
/**
 * @template T
 */
export class ComponentLoader {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * \@internal
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _injector
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _applicationRef
     * @param {?} _posService
     */
    // tslint:disable-next-line
    constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new EventEmitter();
        this.onShown = new EventEmitter();
        this.shown = new EventEmitter();
        this.onBeforeHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this.hidden = new EventEmitter();
        this._providers = [];
    }
    /**
     * @return {?}
     */
    get isShown() {
        return !!this._componentRef;
    }
    /**
     * @param {?} compType
     * @return {?}
     */
    attach(compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    }
    // todo: add behaviour: to target element, `body`, custom element
    /**
     * @param {?=} container
     * @return {?}
     */
    to(container) {
        this.container = container || this.container;
        return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    position(opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = (/** @type {?} */ (opts.target)) || this._elementRef;
        return this;
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    provide(provider) {
        this._providers.push(provider);
        return this;
    }
    // todo: appendChild to element or document.querySelector(this.container)
    /**
     * @param {?=} opts
     * @return {?}
     */
    show(opts = {}) {
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content, opts.data);
            /** @type {?} */
            const injector = Injector.create({ providers: this._providers, parent: this._injector });
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof ElementRef) {
                this.container.nativeElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                document.querySelector((/** @type {?} */ (this.container)))
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        /** @type {?} */
        const componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        this._contentRef = null;
        this._componentRef = null;
        this.onHidden.emit();
        return this;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * @return {?}
     */
    dispose() {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    }
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    listen(listenOpts) {
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (() => this.show());
        listenOpts.hide = listenOpts.hide || (() => this.hide());
        listenOpts.toggle = listenOpts.toggle || (() => this.isShown
            ? listenOpts.hide()
            : listenOpts.show());
        this._unregisterListenersFn = listenToTriggers(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    }
    /**
     * @return {?}
     */
    getInnerComponent() {
        return this._innerComponent;
    }
    /**
     * @private
     * @return {?}
     */
    _subscribePositioning() {
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(() => {
            if (!this._componentRef) {
                return;
            }
            this._posService.position({
                element: this._componentRef.location,
                target: this._elementRef,
                attachment: this.attachment,
                appendToBody: this.container === 'body'
            });
        });
    }
    /**
     * @private
     * @return {?}
     */
    _unsubscribePositioning() {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    }
    /**
     * @private
     * @param {?} content
     * @param {?=} data
     * @return {?}
     */
    _getContentRef(content, data) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof TemplateRef) {
            if (this._viewContainerRef) {
                /** @type {?} */
                const viewRef = this._viewContainerRef.createEmbeddedView(content);
                return new ContentRef([viewRef.rootNodes], viewRef);
            }
            /** @type {?} */
            const viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            /** @type {?} */
            const contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            /** @type {?} */
            const modalContentInjector = Injector.create({ providers: this._providers, parent: this._injector });
            /** @type {?} */
            const componentRef = contentCmptFactory.create(modalContentInjector);
            Object.assign(componentRef.instance, data);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
}
if (false) {
    /** @type {?} */
    ComponentLoader.prototype.onBeforeShow;
    /** @type {?} */
    ComponentLoader.prototype.onShown;
    /** @type {?} */
    ComponentLoader.prototype.shown;
    /** @type {?} */
    ComponentLoader.prototype.onBeforeHide;
    /** @type {?} */
    ComponentLoader.prototype.onHidden;
    /** @type {?} */
    ComponentLoader.prototype.hidden;
    /** @type {?} */
    ComponentLoader.prototype.instance;
    /** @type {?} */
    ComponentLoader.prototype._componentRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._providers;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._componentFactory;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._zoneSubscription;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._contentRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._innerComponent;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._unregisterListenersFn;
    /**
     * Placement of a component. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.attachment;
    /**
     * A selector specifying the element the popover should be appended to.
     * Currently only supports "body".
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.container;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     * @private
     */
    ComponentLoader.prototype.triggers;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._injector;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._applicationRef;
    /**
     * @type {?}
     * @private
     */
    ComponentLoader.prototype._posService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvY29tcG9uZW50LWxvYWRlci5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBR0EsT0FBTyxFQUtMLFVBQVUsRUFDVixZQUFZLEVBQ1osUUFBUSxFQUdSLFdBQVcsRUFJWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRWpELG1DQU1DOzs7SUFMQywrQkFBb0I7O0lBQ3BCLGlDQUFrQjs7SUFDbEIsNkJBQXNCOztJQUN0Qiw2QkFBc0I7O0lBQ3RCLCtCQUFrQjs7Ozs7QUFHcEIsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7Ozs7Ozs7OztJQThDdkIsWUFBMkIsaUJBQW1DLEVBQ3BELFNBQW9CLEVBQ3BCLFdBQXVCLEVBQ3ZCLFNBQW1CLEVBQ25CLHlCQUFtRCxFQUNuRCxPQUFlLEVBQ2YsZUFBK0IsRUFDL0IsV0FBK0I7UUFQZCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ3BELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVTtRQUNuQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBcERyQyxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNoRCxVQUFLLEdBQXNCLElBQUksWUFB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OztJQU03QyxtQ0FBeUI7Ozs7O0lBUU4sNENBQTJDOzs7OztJQUM1RCxvQ0FBNEI7Ozs7O0lBQzVCLHNDQUErQjs7Ozs7SUFDL0Isb0NBQTJCOzs7OztJQUMzQixvREFBMkQ7Ozs7O0lBQzNELGtDQUF1Qjs7Ozs7SUFDdkIsMENBQXVDOzs7OztJQUN2QyxzQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b2RvOiBhZGQgZGVsYXkgc3VwcG9ydFxuLy8gdG9kbzogbWVyZ2UgZXZlbnRzIG9uU2hvdywgb25TaG93biwgZXRjLi4uXG4vLyB0b2RvOiBhZGQgZ2xvYmFsIHBvc2l0aW9uaW5nIGNvbmZpZ3VyYXRpb24/XG5pbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0b3IsXG4gIE5nWm9uZSxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVHlwZSxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgU3RhdGljUHJvdmlkZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3NpdGlvbmluZ09wdGlvbnMsIFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJy4uL3Bvc2l0aW9uaW5nL3Bvc2l0aW9uaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgbGlzdGVuVG9UcmlnZ2VycyB9IGZyb20gJy4uL3RyaWdnZXJzJztcbmltcG9ydCB7IENvbnRlbnRSZWYgfSBmcm9tICcuL2NvbnRlbnQtcmVmLmNsYXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBMaXN0ZW5PcHRpb25zIHtcbiAgdGFyZ2V0PzogRWxlbWVudFJlZjtcbiAgdHJpZ2dlcnM/OiBzdHJpbmc7XG4gIHNob3c/OiBGdW5jdGlvbiB8IGFueTtcbiAgaGlkZT86IEZ1bmN0aW9uIHwgYW55O1xuICB0b2dnbGU/OiBGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudExvYWRlcjxUPiB7XG4gIHB1YmxpYyBvbkJlZm9yZVNob3c6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBzaG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyBvbkJlZm9yZUhpZGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgaGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgaW5zdGFuY2U6IFQ7XG4gIHB1YmxpYyBfY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8VD4gfCBhbnk7XG5cbiAgcHJpdmF0ZSBfcHJvdmlkZXJzOiBTdGF0aWNQcm92aWRlcltdID0gW107XG4gIHByaXZhdGUgX2NvbXBvbmVudEZhY3Rvcnk6IENvbXBvbmVudEZhY3Rvcnk8VD47XG4gIHByaXZhdGUgX3pvbmVTdWJzY3JpcHRpb246IGFueTtcbiAgcHJpdmF0ZSBfY29udGVudFJlZjogQ29udGVudFJlZiB8IGFueTtcbiAgcHJpdmF0ZSBfaW5uZXJDb21wb25lbnQ6IENvbXBvbmVudFJlZjxUPiB8IGFueSA7XG5cbiAgcHJpdmF0ZSBfdW5yZWdpc3Rlckxpc3RlbmVyc0ZuOiBGdW5jdGlvbjtcblxuICBwdWJsaWMgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5fY29tcG9uZW50UmVmO1xuICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZW1lbnQgb2YgYSBjb21wb25lbnQuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcbiAgICAgKi9cbiAgICAgcHJpdmF0ZSBhdHRhY2htZW50OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgICAqL1xuICAgICBwcml2YXRlIGNvbnRhaW5lcjogc3RyaW5nIHwgRWxlbWVudFJlZiB8IGFueTtcblxuICAgIC8qKlxuICAgICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxuICAgICAqIGV2ZW50IG5hbWVzLlxuICAgICAqL1xuICAgICBwcml2YXRlIHRyaWdnZXJzOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBEbyBub3QgdXNlIHRoaXMgZGlyZWN0bHksIGl0IHNob3VsZCBiZSBpbnN0YW5jZWQgdmlhXG4gICAgICogYENvbXBvbmVudExvYWRGYWN0b3J5LmF0dGFjaGBcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICBwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3IsXG4gICAgICAgcHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgcHJpdmF0ZSBfYXBwbGljYXRpb25SZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgIHByaXZhdGUgX3Bvc1NlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZSkge1xuICAgICB9XG5cbiAgICAgcHVibGljIGF0dGFjaChjb21wVHlwZTogVHlwZTxUPik6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgICAgdGhpcy5fY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxUPihjb21wVHlwZSk7XG4gICAgICAgcmV0dXJuIHRoaXM7XG4gICAgIH1cblxuICAgICAvLyB0b2RvOiBhZGQgYmVoYXZpb3VyOiB0byB0YXJnZXQgZWxlbWVudCwgYGJvZHlgLCBjdXN0b20gZWxlbWVudFxuICAgICBwdWJsaWMgdG8oY29udGFpbmVyPzogc3RyaW5nKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lciB8fCB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICByZXR1cm4gdGhpcztcbiAgICAgfVxuXG4gICAgIHB1YmxpYyBwb3NpdGlvbihvcHRzPzogUG9zaXRpb25pbmdPcHRpb25zIHwgYW55KTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICAgICB0aGlzLmF0dGFjaG1lbnQgPSBvcHRzLmF0dGFjaG1lbnQgfHwgdGhpcy5hdHRhY2htZW50O1xuICAgICAgIHRoaXMuX2VsZW1lbnRSZWYgPSBvcHRzLnRhcmdldCBhcyBFbGVtZW50UmVmIHx8IHRoaXMuX2VsZW1lbnRSZWY7XG4gICAgICAgcmV0dXJuIHRoaXM7XG4gICAgIH1cblxuICAgICBwdWJsaWMgcHJvdmlkZShwcm92aWRlcjogU3RhdGljUHJvdmlkZXIpOiBDb21wb25lbnRMb2FkZXI8VD4ge1xuICAgICAgIHRoaXMuX3Byb3ZpZGVycy5wdXNoKHByb3ZpZGVyKTtcbiAgICAgICByZXR1cm4gdGhpcztcbiAgICAgfVxuXG4gICAgIC8vIHRvZG86IGFwcGVuZENoaWxkIHRvIGVsZW1lbnQgb3IgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmNvbnRhaW5lcilcbiAgICAgcHVibGljIHNob3cob3B0czogeyBjb250ZW50Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiwgZGF0YT86IGFueSwgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fSk6IENvbXBvbmVudFJlZjxUPiB7XG4gICAgICAgdGhpcy5fc3Vic2NyaWJlUG9zaXRpb25pbmcoKTtcbiAgICAgICB0aGlzLl9pbm5lckNvbXBvbmVudCA9IG51bGw7XG5cbiAgICAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgICAgdGhpcy5vbkJlZm9yZVNob3cuZW1pdCgpO1xuICAgICAgICAgdGhpcy5fY29udGVudFJlZiA9IHRoaXMuX2dldENvbnRlbnRSZWYob3B0cy5jb250ZW50LCBvcHRzLmRhdGEpO1xuICAgICAgICAgY29uc3QgaW5qZWN0b3IgPSBJbmplY3Rvci5jcmVhdGUoe3Byb3ZpZGVyczogdGhpcy5fcHJvdmlkZXJzLCBwYXJlbnQ6IHRoaXMuX2luamVjdG9yfSk7XG5cbiAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnkuY3JlYXRlKGluamVjdG9yLCB0aGlzLl9jb250ZW50UmVmLm5vZGVzKTtcbiAgICAgICAgIHRoaXMuX2FwcGxpY2F0aW9uUmVmLmF0dGFjaFZpZXcodGhpcy5fY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcbiAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLl9jb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cbiAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlLCBvcHRzKTtcblxuICAgICAgICAgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgRWxlbWVudFJlZikge1xuICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuY29udGFpbmVyIGFzIHN0cmluZyB8IGFueSlcbiAgICAgICAgICAgLmFwcGVuZENoaWxkKHRoaXMuX2NvbXBvbmVudFJlZi5sb2NhdGlvbi5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgIH1cblxuICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lciAmJiB0aGlzLl9lbGVtZW50UmVmICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgICAgICAgIC5hcHBlbmRDaGlsZCh0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICB9XG5cbiAgICAgICAgIC8vIHdlIG5lZWQgdG8gbWFudWFsbHkgaW52b2tlIGNoYW5nZSBkZXRlY3Rpb24gc2luY2UgZXZlbnRzIHJlZ2lzdGVyZWRcbiAgICAgICAgIC8vIHZpYVxuICAgICAgICAgLy8gUmVuZGVyZXI6Omxpc3RlbigpIGFyZSBub3QgcGlja2VkIHVwIGJ5IGNoYW5nZSBkZXRlY3Rpb24gd2l0aCB0aGVcbiAgICAgICAgIC8vIE9uUHVzaCBzdHJhdGVneVxuICAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmKSB7XG4gICAgICAgICAgIHRoaXMuX2lubmVyQ29tcG9uZW50ID0gdGhpcy5fY29udGVudFJlZi5jb21wb25lbnRSZWYuaW5zdGFuY2U7XG4gICAgICAgICAgIHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICB9XG4gICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICB0aGlzLl9jb21wb25lbnRSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgdGhpcy5vblNob3duLmVtaXQodGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlKTtcbiAgICAgICB9XG4gICAgICAgcmV0dXJuIHRoaXMuX2NvbXBvbmVudFJlZjtcbiAgICAgfVxuXG4gICAgIHB1YmxpYyBoaWRlKCk6IENvbXBvbmVudExvYWRlcjxUPiB7XG4gICAgICAgaWYgKCF0aGlzLl9jb21wb25lbnRSZWYpIHtcbiAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgIH1cblxuICAgICAgIHRoaXMub25CZWZvcmVIaWRlLmVtaXQodGhpcy5fY29tcG9uZW50UmVmLmluc3RhbmNlKTtcblxuICAgICAgIGNvbnN0IGNvbXBvbmVudEVsID0gdGhpcy5fY29tcG9uZW50UmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgY29tcG9uZW50RWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb21wb25lbnRFbCk7XG4gICAgICAgaWYgKHRoaXMuX2NvbnRlbnRSZWYuY29tcG9uZW50UmVmKSB7XG4gICAgICAgICB0aGlzLl9jb250ZW50UmVmLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgfVxuICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZi5kZXN0cm95KCk7XG4gICAgICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYgJiYgdGhpcy5fY29udGVudFJlZi52aWV3UmVmKSB7XG4gICAgICAgICB0aGlzLl92aWV3Q29udGFpbmVyUmVmLnJlbW92ZSh0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluZGV4T2YodGhpcy5fY29udGVudFJlZi52aWV3UmVmKSk7XG4gICAgICAgfVxuXG4gICAgICAgICB0aGlzLl9jb250ZW50UmVmID0gbnVsbDtcbiAgICAgICAgIHRoaXMuX2NvbXBvbmVudFJlZiA9IG51bGw7XG5cbiAgICAgICAgIHRoaXMub25IaWRkZW4uZW1pdCgpO1xuICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgfVxuXG4gICAgICAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHwgYW55IHtcbiAgICAgICAgIGlmICh0aGlzLmlzU2hvd24pIHtcbiAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cblxuICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgfVxuXG4gICAgICAgcHVibGljIGRpc3Bvc2UoKTogdm9pZCB7XG4gICAgICAgICBpZiAodGhpcy5pc1Nob3duKSB7XG4gICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgfVxuXG4gICAgICAgICB0aGlzLl91bnN1YnNjcmliZVBvc2l0aW9uaW5nKCk7XG5cbiAgICAgICAgIGlmICh0aGlzLl91bnJlZ2lzdGVyTGlzdGVuZXJzRm4pIHtcbiAgICAgICAgICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuKCk7XG4gICAgICAgICB9XG4gICAgICAgfVxuXG4gICAgICAgcHVibGljIGxpc3RlbihsaXN0ZW5PcHRzOiBMaXN0ZW5PcHRpb25zKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcbiAgICAgICAgIHRoaXMudHJpZ2dlcnMgPSBsaXN0ZW5PcHRzLnRyaWdnZXJzIHx8IHRoaXMudHJpZ2dlcnM7XG5cbiAgICAgICAgIGxpc3Rlbk9wdHMudGFyZ2V0ID0gbGlzdGVuT3B0cy50YXJnZXQgfHwgdGhpcy5fZWxlbWVudFJlZjtcbiAgICAgICAgIGxpc3Rlbk9wdHMuc2hvdyA9IGxpc3Rlbk9wdHMuc2hvdyB8fCAoKCkgPT4gdGhpcy5zaG93KCkpO1xuICAgICAgICAgbGlzdGVuT3B0cy5oaWRlID0gbGlzdGVuT3B0cy5oaWRlIHx8ICgoKSA9PiB0aGlzLmhpZGUoKSk7XG4gICAgICAgICBsaXN0ZW5PcHRzLnRvZ2dsZSA9IGxpc3Rlbk9wdHMudG9nZ2xlIHx8ICgoKSA9PiB0aGlzLmlzU2hvd25cbiAgICAgICAgICAgPyBsaXN0ZW5PcHRzLmhpZGUoKVxuICAgICAgICAgICA6IGxpc3Rlbk9wdHMuc2hvdygpKTtcblxuICAgICAgICAgdGhpcy5fdW5yZWdpc3Rlckxpc3RlbmVyc0ZuID0gbGlzdGVuVG9UcmlnZ2VycyhcbiAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIsXG4gICAgICAgICAgIGxpc3Rlbk9wdHMudGFyZ2V0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgIHRoaXMudHJpZ2dlcnMsXG4gICAgICAgICAgIGxpc3Rlbk9wdHMuc2hvdyxcbiAgICAgICAgICAgbGlzdGVuT3B0cy5oaWRlLFxuICAgICAgICAgICBsaXN0ZW5PcHRzLnRvZ2dsZSk7XG5cbiAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgIH1cblxuICAgICAgIHB1YmxpYyBnZXRJbm5lckNvbXBvbmVudCgpOiBDb21wb25lbnRSZWY8VD4ge1xuICAgICAgICAgcmV0dXJuIHRoaXMuX2lubmVyQ29tcG9uZW50O1xuICAgICAgIH1cblxuICAgICAgIHByaXZhdGUgX3N1YnNjcmliZVBvc2l0aW9uaW5nKCk6IHZvaWQgfCBhbnkge1xuICAgICAgICAgaWYgKHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gfHwgIXRoaXMuYXR0YWNobWVudCkge1xuICAgICAgICAgICByZXR1cm47XG4gICAgICAgICB9XG5cbiAgICAgICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSB0aGlzLl9uZ1pvbmVcbiAgICAgICAgIC5vblN0YWJsZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICBpZiAoIXRoaXMuX2NvbXBvbmVudFJlZikge1xuICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgfVxuICAgICAgICAgICB0aGlzLl9wb3NTZXJ2aWNlLnBvc2l0aW9uKHtcbiAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLl9jb21wb25lbnRSZWYubG9jYXRpb24sXG4gICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLl9lbGVtZW50UmVmLFxuICAgICAgICAgICAgIGF0dGFjaG1lbnQ6IHRoaXMuYXR0YWNobWVudCxcbiAgICAgICAgICAgICBhcHBlbmRUb0JvZHk6IHRoaXMuY29udGFpbmVyID09PSAnYm9keSdcbiAgICAgICAgICAgfSk7XG4gICAgICAgICB9KTtcbiAgICAgICB9XG5cbiAgICAgICBwcml2YXRlIF91bnN1YnNjcmliZVBvc2l0aW9uaW5nKCk6IHZvaWQgfCBhbnkge1xuICAgICAgICAgaWYgKCF0aGlzLl96b25lU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH1cbiAgICAgICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgIHRoaXMuX3pvbmVTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgIH1cblxuICAgICAgIHByaXZhdGUgX2dldENvbnRlbnRSZWYoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PiB8IGFueSwgZGF0YT86IGFueSk6IENvbnRlbnRSZWYge1xuICAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbXSk7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGlmIChjb250ZW50IGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcbiAgICAgICAgICAgaWYgKHRoaXMuX3ZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgICAgICBjb25zdCB2aWV3UmVmID0gdGhpcy5fdmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXc8VGVtcGxhdGVSZWY8VD4+KGNvbnRlbnQpO1xuICAgICAgICAgICAgIHJldHVybiBuZXcgQ29udGVudFJlZihbdmlld1JlZi5yb290Tm9kZXNdLCB2aWV3UmVmKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBjb25zdCB2aWV3UmVmID0gY29udGVudC5jcmVhdGVFbWJlZGRlZFZpZXcoe30pO1xuICAgICAgICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZi5hdHRhY2hWaWV3KHZpZXdSZWYpO1xuICAgICAgICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW3ZpZXdSZWYucm9vdE5vZGVzXSwgdmlld1JlZik7XG4gICAgICAgICB9XG5cbiAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICBjb25zdCBjb250ZW50Q21wdEZhY3RvcnkgPSB0aGlzLl9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoY29udGVudCk7XG4gICAgICAgICAgIGNvbnN0IG1vZGFsQ29udGVudEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHsgcHJvdmlkZXJzOiB0aGlzLl9wcm92aWRlcnMsIHBhcmVudDogdGhpcy5faW5qZWN0b3J9KTtcbiAgICAgICAgICAgY29uc3QgY29tcG9uZW50UmVmID0gY29udGVudENtcHRGYWN0b3J5LmNyZWF0ZShtb2RhbENvbnRlbnRJbmplY3Rvcik7XG4gICAgICAgICAgIE9iamVjdC5hc3NpZ24oY29tcG9uZW50UmVmLmluc3RhbmNlLCBkYXRhKTtcbiAgICAgICAgICAgdGhpcy5fYXBwbGljYXRpb25SZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuICAgICAgICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW1tjb21wb25lbnRSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudF1dLCBjb21wb25lbnRSZWYuaG9zdFZpZXcsIGNvbXBvbmVudFJlZik7XG4gICAgICAgICB9XG4gICAgICAgICByZXR1cm4gbmV3IENvbnRlbnRSZWYoW1t0aGlzLl9yZW5kZXJlci5jcmVhdGVUZXh0KGAke2NvbnRlbnR9YCldXSk7XG4gICAgICAgfVxuICAgICB9XG4iXX0=