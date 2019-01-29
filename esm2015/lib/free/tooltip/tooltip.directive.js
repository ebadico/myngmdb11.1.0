/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewContainerRef } from '@angular/core';
import { TooltipContainerComponent } from './tooltip.component';
import { TooltipConfig } from './tooltip.service';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';
import { OnChange } from '../utils/decorators';
import { isPlatformBrowser } from '@angular/common';
export class TooltipDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} cis
     * @param {?} config
     * @param {?} platformId
     */
    constructor(_viewContainerRef, _renderer, _elementRef, cis, config, platformId) {
        this._elementRef = _elementRef;
        this.platformId = platformId;
        /**
         * Fired when tooltip content changes
         */
        this.tooltipChange = new EventEmitter();
        this.delay = 0;
        this.fadeDuration = 150;
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser((this.platformId));
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.shown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
        this.hidden = this._tooltip.onHidden;
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._tooltip.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onclick(event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    }
    /**
     * @return {?}
     */
    onblur() {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: () => this.show()
        });
        this.tooltipChange.subscribe((value) => {
            if (!value) {
                this._tooltip.hide();
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!changes['mdbTooltip'].isFirstChange()) {
            this.tooltipChange.emit(this.mdbTooltip);
        }
    }
    /**
     * @return {?}
     */
    changePositionIfNotFit() {
        if (this.placement === 'top' && this._elementRef.nativeElement.offsetTop < (parseInt(this.customHeight, 10) + 16)) {
            this.placement = 'bottom';
        }
        if (this.placement === 'bottom' && ((/** @type {?} */ (this.getBottomOffset()))) < (parseInt(this.customHeight, 10) + 32)) {
            this.placement = 'top';
        }
    }
    /**
     * @return {?}
     */
    getBottomOffset() {
        if (this.isBrowser) {
            /** @type {?} */
            const windowHeight = window.innerHeight;
            /** @type {?} */
            const bottom = this._elementRef.nativeElement.getBoundingClientRect().bottom;
            return windowHeight - bottom;
        }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    show() {
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        if (!this.customHeight) {
            if (this.placement === 'top' && this._elementRef.nativeElement.offsetTop < 40) {
                this.placement = 'bottom';
            }
            if (this.placement === 'bottom' && (/** @type {?} */ (this.getBottomOffset())) < 60) {
                this.placement = 'top';
            }
        }
        else if (this.customHeight) {
            this.changePositionIfNotFit();
        }
        /** @type {?} */
        const showTooltip = () => this._tooltip
            .attach(TooltipContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbTooltip,
            placement: this.placement
        });
        if (this.delay) {
            this._delayTimeoutId = setTimeout(() => {
                showTooltip();
            }, this.delay);
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(() => {
            this._tooltip.hide();
        }, this.fadeDuration);
    }
    /**
     * @return {?}
     */
    dispose() {
        this._tooltip.dispose();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tooltip.dispose();
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTooltip]',
                exportAs: 'mdb-tooltip'
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: ComponentLoaderFactory },
    { type: TooltipConfig },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
TooltipDirective.propDecorators = {
    mdbTooltip: [{ type: Input }],
    tooltipChange: [{ type: Output }],
    placement: [{ type: Input }],
    triggers: [{ type: Input }],
    container: [{ type: Input }],
    isOpen: [{ type: Input }],
    isDisabled: [{ type: Input }],
    onShown: [{ type: Output }],
    shown: [{ type: Output }],
    onHidden: [{ type: Output }],
    hidden: [{ type: Output }],
    delay: [{ type: Input }],
    customHeight: [{ type: Input }],
    fadeDuration: [{ type: Input }],
    onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onblur: [{ type: HostListener, args: ['window:click',] }]
};
tslib_1.__decorate([
    OnChange(),
    tslib_1.__metadata("design:type", Object)
], TooltipDirective.prototype, "mdbTooltip", void 0);
if (false) {
    /**
     * Content to be displayed as tooltip.
     * @type {?}
     */
    TooltipDirective.prototype.mdbTooltip;
    /**
     * Fired when tooltip content changes
     * @type {?}
     */
    TooltipDirective.prototype.tooltipChange;
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    TooltipDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    TooltipDirective.prototype.triggers;
    /**
     * A selector specifying the element the tooltip should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    TooltipDirective.prototype.container;
    /**
     * Allows to disable tooltip
     * @type {?}
     */
    TooltipDirective.prototype.isDisabled;
    /**
     * Emits an event when the tooltip is shown
     * @type {?}
     */
    TooltipDirective.prototype.onShown;
    /** @type {?} */
    TooltipDirective.prototype.shown;
    /**
     * Emits an event when the tooltip is hidden
     * @type {?}
     */
    TooltipDirective.prototype.onHidden;
    /** @type {?} */
    TooltipDirective.prototype.hidden;
    /** @type {?} */
    TooltipDirective.prototype.delay;
    /** @type {?} */
    TooltipDirective.prototype.customHeight;
    /** @type {?} */
    TooltipDirective.prototype.fadeDuration;
    /**
     * @type {?}
     * @protected
     */
    TooltipDirective.prototype._delayTimeoutId;
    /** @type {?} */
    TooltipDirective.prototype.isBrowser;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._tooltip;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TooltipDirective.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUFFLFlBQVksRUFDMUIsTUFBTSxFQUNOLEtBQUssRUFJTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFHVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDOUQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBRTFGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQU1sRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUFnRTNCLFlBQW1CLGlCQUFtQyxFQUNuQyxTQUFvQixFQUNaLFdBQXVCLEVBQy9CLEdBQTJCLEVBQzNCLE1BQXFCLEVBQ1EsVUFBa0I7UUFIdkMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFHRixlQUFVLEdBQVYsVUFBVSxDQUFROzs7O1FBOURqRCxrQkFBYSxHQUE0QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBaUQ3RSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsaUJBQVksR0FBRyxHQUFHLENBQUM7UUFHbkMsY0FBUyxHQUFRLEtBQUssQ0FBQztRQVNyQixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FB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LFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsYUFBYTthQUN4Qjs7OztZQVpDLGdCQUFnQjtZQUhoQixTQUFTO1lBVFQsVUFBVTtZQWdCSixzQkFBc0I7WUFEdEIsYUFBYTt5Q0ErRUMsTUFBTSxTQUFDLFdBQVc7Ozt5QkFoRXJDLEtBQUs7NEJBRUwsTUFBTTt3QkFLTixLQUFLO3VCQUtMLEtBQUs7d0JBS0wsS0FBSztxQkFLTCxLQUFLO3lCQWdCTCxLQUFLO3NCQUtMLE1BQU07b0JBQ04sTUFBTTt1QkFJTixNQUFNO3FCQUNOLE1BQU07b0JBRU4sS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7c0JBd0JMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBT2hDLFlBQVksU0FBQyxjQUFjOztBQXBGbkI7SUFEUixRQUFRLEVBQUU7O29EQUMyQzs7Ozs7O0lBRHRELHNDQUNzRDs7Ozs7SUFFdEQseUNBQTZGOzs7OztJQUs3RixxQ0FBa0M7Ozs7OztJQUtsQyxvQ0FBaUM7Ozs7OztJQUtqQyxxQ0FBa0M7Ozs7O0lBcUJsQyxzQ0FBb0M7Ozs7O0lBS3BDLG1DQUE0Qzs7SUFDNUMsaUNBQTBDOzs7OztJQUkxQyxvQ0FBNkM7O0lBQzdDLGtDQUEyQzs7SUFFM0MsaUNBQTBCOztJQUMxQix3Q0FBcUM7O0lBQ3JDLHdDQUFtQzs7Ozs7SUFFbkMsMkNBQStCOztJQUMvQixxQ0FBdUI7Ozs7O0lBQ3ZCLG9DQUE2RDs7Ozs7SUFJMUMsdUNBQStCOzs7OztJQUcvQixzQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7VG9vbHRpcENvbmZpZ30gZnJvbSAnLi90b29sdGlwLnNlcnZpY2UnO1xuaW1wb3J0IHtDb21wb25lbnRMb2FkZXJGYWN0b3J5fSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuZmFjdG9yeSc7XG5pbXBvcnQge0NvbXBvbmVudExvYWRlcn0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmNsYXNzJztcbmltcG9ydCB7T25DaGFuZ2V9IGZyb20gJy4uL3V0aWxzL2RlY29yYXRvcnMnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICdtZGItdG9vbHRpcCdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgdG9vbHRpcC5cbiAgICovXG4gIEBPbkNoYW5nZSgpXG4gIEBJbnB1dCgpIHB1YmxpYyBtZGJUb29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogRmlyZWQgd2hlbiB0b29sdGlwIGNvbnRlbnQgY2hhbmdlcyAqL1xuICBAT3V0cHV0KCkgcHVibGljIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgdG9vbHRpcC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHBsYWNlbWVudDogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHRyaWdnZXJzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBjb250YWluZXI6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdG9vbHRpcCBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwLmlzU2hvd247XG4gIH1cblxuICBwdWJsaWMgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gZGlzYWJsZSB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93blxuICAgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIHB1YmxpYyBzaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIGhpZGRlblxuICAgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBwdWJsaWMgaGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBASW5wdXQoKSBwdWJsaWMgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tSGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBmYWRlRHVyYXRpb24gPSAxNTA7XG5cbiAgcHJvdGVjdGVkIF9kZWxheVRpbWVvdXRJZDogYW55O1xuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuICBwcml2YXRlIF90b29sdGlwOiBDb21wb25lbnRMb2FkZXI8VG9vbHRpcENvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgICAgICAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICAgICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBUb29sdGlwQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKCh0aGlzLnBsYXRmb3JtSWQpKTtcbiAgICB0aGlzLl90b29sdGlwID0gY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+KHRoaXMuX2VsZW1lbnRSZWYsIF92aWV3Q29udGFpbmVyUmVmLCBfcmVuZGVyZXIpXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogVG9vbHRpcENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZ30pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX3Rvb2x0aXAub25TaG93bjtcbiAgICB0aGlzLnNob3duID0gdGhpcy5fdG9vbHRpcC5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl90b29sdGlwLm9uSGlkZGVuO1xuICAgIHRoaXMuaGlkZGVuID0gdGhpcy5fdG9vbHRpcC5vbkhpZGRlbjtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSkgb25jbGljayhldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlcnMudG9TdHJpbmcoKS5pbmNsdWRlcygnZm9jdXMnKSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6Y2xpY2snKSBvbmJsdXIoKSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlcnMudG9TdHJpbmcoKS5pbmNsdWRlcygnZm9jdXMnKSAmJiB0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rvb2x0aXAubGlzdGVuKHtcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcbiAgICB9KTtcbiAgICB0aGlzLnRvb2x0aXBDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghY2hhbmdlc1snbWRiVG9vbHRpcCddLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy50b29sdGlwQ2hhbmdlLmVtaXQodGhpcy5tZGJUb29sdGlwKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VQb3NpdGlvbklmTm90Rml0KCk6IHZvaWQge1xuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSAndG9wJyAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0VG9wIDwgKHBhcnNlSW50KHRoaXMuY3VzdG9tSGVpZ2h0LCAxMCkgKyAxNikpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSAnYm90dG9tJztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiAodGhpcy5nZXRCb3R0b21PZmZzZXQoKSBhcyBhbnkpIDwgKHBhcnNlSW50KHRoaXMuY3VzdG9tSGVpZ2h0LCAxMCkgKyAzMikpIHtcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSAndG9wJztcbiAgICAgIH1cbiAgfVxuXG4gIGdldEJvdHRvbU9mZnNldCgpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICByZXR1cm4gd2luZG93SGVpZ2h0IC0gYm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW504oCZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHB1YmxpYyBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLmlzRGlzYWJsZWQgfHwgdGhpcy5fZGVsYXlUaW1lb3V0SWQgfHwgIXRoaXMubWRiVG9vbHRpcCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jdXN0b21IZWlnaHQpIHtcbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCA8IDQwKSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gJ2JvdHRvbSc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgdGhpcy5nZXRCb3R0b21PZmZzZXQoKSBhcyBhbnkgPCA2MCkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9ICd0b3AnO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5jdXN0b21IZWlnaHQpIHtcbiAgICAgIHRoaXMuY2hhbmdlUG9zaXRpb25JZk5vdEZpdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3dUb29sdGlwID0gKCkgPT4gdGhpcy5fdG9vbHRpcFxuICAgICAgLmF0dGFjaChUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50KVxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXG4gICAgICAuc2hvdyh7XG4gICAgICAgIGNvbnRlbnQ6IHRoaXMubWRiVG9vbHRpcCxcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudFxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5kZWxheSkge1xuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd1Rvb2x0aXAoKTtcbiAgICAgIH0sIHRoaXMuZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93VG9vbHRpcCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGVsYXlUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9kZWxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3Rvb2x0aXAuaXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Rvb2x0aXAuaW5zdGFuY2UuY2xhc3NNYXAuaW4gPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xuICAgIH0sIHRoaXMuZmFkZUR1cmF0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgIHRoaXMuX3Rvb2x0aXAuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rvb2x0aXAuZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=