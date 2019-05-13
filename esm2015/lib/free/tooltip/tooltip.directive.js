/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            show: (/**
             * @return {?}
             */
            () => this.show())
        });
        this.tooltipChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            if (!value) {
                this._tooltip.hide();
            }
        }));
        this.shown.subscribe((/**
         * @return {?}
         */
        () => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (this._tooltip.instance.placement !== this.placement && this.isOpen) {
                    this._tooltip.instance.alignArrow(this.placement);
                }
            }), 0);
        }));
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
     * @param {?=} event
     * @return {?}
     */
    show(event) {
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        /** @type {?} */
        const showTooltip = (/**
         * @return {?}
         */
        () => this._tooltip
            .attach(TooltipContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbTooltip,
            placement: this.placement
        }));
        this.showTooltip(showTooltip);
        /** @type {?} */
        const elPosition = event ? event.target.getBoundingClientRect() : this._elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const tooltipEl = this._tooltip.instance['el'].nativeElement;
        this.getCorrectAlignment(tooltipEl, elPosition);
        this.showTooltip(showTooltip);
    }
    /**
     * @private
     * @param {?} tooltipEl
     * @param {?} elPosition
     * @return {?}
     */
    getCorrectAlignment(tooltipEl, elPosition) {
        /** @type {?} */
        const right = window.innerWidth - elPosition.width - elPosition.left;
        /** @type {?} */
        const position = ['left', 'right', 'bottom', 'top'];
        /** @type {?} */
        const heightForTop = this.customHeight ? (parseInt(this.customHeight, 10) + 16) : 40;
        /** @type {?} */
        const heightForBottom = this.customHeight ? (parseInt(this.customHeight, 10) + 32) : 60;
        if (this.placement == 'left') {
            [
                elPosition.left >= tooltipEl.clientWidth,
                elPosition.left <= tooltipEl.clientWidth && right > tooltipEl.clientWidth,
                elPosition.left <= tooltipEl.clientWidth && right <= tooltipEl.clientWidth && (/** @type {?} */ (this.getBottomOffset())) >= heightForBottom,
                elPosition.left <= tooltipEl.clientWidth && right <= tooltipEl.clientWidth && (/** @type {?} */ (this.getBottomOffset())) < heightForBottom && elPosition.top >= heightForTop
            ].forEach((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            (el, index) => {
                if (el) {
                    this.placement = position[index];
                }
            }));
        }
        if (this.placement == 'right') {
            [
                right <= tooltipEl.clientWidth && elPosition.left > tooltipEl.clientWidth,
                right >= tooltipEl.clientWidth,
                right <= tooltipEl.clientWidth && elPosition.left <= tooltipEl.clientWidth && (/** @type {?} */ (this.getBottomOffset())) >= heightForBottom,
                right <= tooltipEl.clientWidth && elPosition.left <= tooltipEl.clientWidth && (/** @type {?} */ (this.getBottomOffset())) < heightForBottom && elPosition.top >= heightForTop
            ].forEach((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            (el, index) => {
                if (el) {
                    this.placement = position[index];
                }
            }));
        }
        if (this.placement == 'top') {
            [
                elPosition.top < heightForTop && (/** @type {?} */ (this.getBottomOffset())) < heightForBottom && elPosition.left >= tooltipEl.clientWidth,
                elPosition.top < heightForTop && (/** @type {?} */ (this.getBottomOffset())) < heightForBottom && elPosition.left < tooltipEl.clientWidth && right >= tooltipEl.clientWidth,
                elPosition.top < heightForTop && (/** @type {?} */ (this.getBottomOffset())) >= heightForBottom,
                elPosition.top >= heightForTop
            ].forEach((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            (el, index) => {
                if (el) {
                    this.placement = position[index];
                }
            }));
        }
        if (this.placement == 'bottom') {
            [
                (/** @type {?} */ (this.getBottomOffset())) < heightForBottom && elPosition.top < heightForTop && elPosition.left >= tooltipEl.clientWidth,
                (/** @type {?} */ (this.getBottomOffset())) < heightForBottom && elPosition.top < heightForTop && elPosition.left < tooltipEl.clientWidth && right >= tooltipEl.clientWidth,
                (/** @type {?} */ (this.getBottomOffset())) < heightForBottom && elPosition.top >= heightForTop,
                (/** @type {?} */ (this.getBottomOffset())) <= heightForTop
            ].forEach((/**
             * @param {?} el
             * @param {?} index
             * @return {?}
             */
            (el, index) => {
                if (el) {
                    this.placement = position[index];
                }
            }));
        }
    }
    /**
     * @private
     * @param {?} fn
     * @return {?}
     */
    showTooltip(fn) {
        if (this.delay) {
            this._delayTimeoutId = setTimeout((/**
             * @return {?}
             */
            () => {
                fn();
            }), this.delay);
        }
        else {
            fn();
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._tooltip.hide();
        }), this.fadeDuration);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUdULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFFMUYsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBTWxELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7OztJQWdFM0IsWUFDRSxpQkFBbUMsRUFDbkMsU0FBb0IsRUFDWixXQUF1QixFQUMvQixHQUEyQixFQUMzQixNQUFxQixFQUNRLFVBQWtCO1FBSHZDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBR0YsZUFBVSxHQUFWLFVBQVUsQ0FBUTs7OztRQS9EaEMsa0JBQWEsR0FBNEMsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWlEN0UsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUVWLGlCQUFZLEdBQUcsR0FBRyxDQUFDO1FBR25DLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFXckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcs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QWM7Z0JBQ3hCLFFBQVEsRUFBRSxhQUFhO2FBQ3hCOzs7O1lBWkMsZ0JBQWdCO1lBSGhCLFNBQVM7WUFWVCxVQUFVO1lBaUJKLHNCQUFzQjtZQUR0QixhQUFhO3lDQWdGaEIsTUFBTSxTQUFDLFdBQVc7Ozt5QkFqRXBCLEtBQUs7NEJBRUwsTUFBTTt3QkFLTixLQUFLO3VCQUtMLEtBQUs7d0JBS0wsS0FBSztxQkFLTCxLQUFLO3lCQWdCTCxLQUFLO3NCQUtMLE1BQU07b0JBQ04sTUFBTTt1QkFJTixNQUFNO3FCQUNOLE1BQU07b0JBRU4sS0FBSzsyQkFDTCxLQUFLOzJCQUNMLEtBQUs7c0JBNEJMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBT2hDLFlBQVksU0FBQyxjQUFjOztBQXhGbkI7SUFEUixRQUFRLEVBQUU7O29EQUMyQzs7Ozs7O0lBRHRELHNDQUNzRDs7Ozs7SUFFdEQseUNBQTZGOzs7OztJQUs3RixxQ0FBa0M7Ozs7OztJQUtsQyxvQ0FBaUM7Ozs7OztJQUtqQyxxQ0FBa0M7Ozs7O0lBcUJsQyxzQ0FBb0M7Ozs7O0lBS3BDLG1DQUE0Qzs7SUFDNUMsaUNBQTBDOzs7OztJQUkxQyxvQ0FBNkM7O0lBQzdDLGtDQUEyQzs7SUFFM0MsaUNBQTBCOztJQUMxQix3Q0FBcUM7O0lBQ3JDLHdDQUFtQzs7Ozs7SUFFbkMsMkNBQStCOztJQUMvQixxQ0FBdUI7Ozs7O0lBQ3ZCLG9DQUE2RDs7Ozs7SUFLM0QsdUNBQStCOzs7OztJQUcvQixzQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50fSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7VG9vbHRpcENvbmZpZ30gZnJvbSAnLi90b29sdGlwLnNlcnZpY2UnO1xuaW1wb3J0IHtDb21wb25lbnRMb2FkZXJGYWN0b3J5fSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuZmFjdG9yeSc7XG5pbXBvcnQge0NvbXBvbmVudExvYWRlcn0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50LWxvYWRlci9jb21wb25lbnQtbG9hZGVyLmNsYXNzJztcbmltcG9ydCB7T25DaGFuZ2V9IGZyb20gJy4uL3V0aWxzL2RlY29yYXRvcnMnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlRvb2x0aXBdJyxcbiAgZXhwb3J0QXM6ICdtZGItdG9vbHRpcCdcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuICAvKipcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgdG9vbHRpcC5cbiAgICovXG4gIEBPbkNoYW5nZSgpXG4gIEBJbnB1dCgpIHB1YmxpYyBtZGJUb29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xuICAvKiogRmlyZWQgd2hlbiB0b29sdGlwIGNvbnRlbnQgY2hhbmdlcyAqL1xuICBAT3V0cHV0KCkgcHVibGljIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogUGxhY2VtZW50IG9mIGEgdG9vbHRpcC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHBsYWNlbWVudDogc3RyaW5nO1xuICAvKipcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXG4gICAqIGV2ZW50IG5hbWVzLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIHRyaWdnZXJzOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBjb250YWluZXI6IHN0cmluZztcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdG9vbHRpcCBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl90b29sdGlwLmlzU2hvd247XG4gIH1cblxuICBwdWJsaWMgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gZGlzYWJsZSB0b29sdGlwXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgaXNEaXNhYmxlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93blxuICAgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIHB1YmxpYyBzaG93bjogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIGhpZGRlblxuICAgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBPdXRwdXQoKSBwdWJsaWMgaGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBASW5wdXQoKSBwdWJsaWMgZGVsYXkgPSAwO1xuICBASW5wdXQoKSBwdWJsaWMgY3VzdG9tSGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBmYWRlRHVyYXRpb24gPSAxNTA7XG5cbiAgcHJvdGVjdGVkIF9kZWxheVRpbWVvdXRJZDogYW55O1xuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuICBwcml2YXRlIF90b29sdGlwOiBDb21wb25lbnRMb2FkZXI8VG9vbHRpcENvbnRhaW5lckNvbXBvbmVudD47XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxuICAgIGNvbmZpZzogVG9vbHRpcENvbmZpZyxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IHN0cmluZykge1xuXG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcigodGhpcy5wbGF0Zm9ybUlkKSk7XG4gICAgdGhpcy5fdG9vbHRpcCA9IGNpc1xuICAgICAgLmNyZWF0ZUxvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50Pih0aGlzLl9lbGVtZW50UmVmLCBfdmlld0NvbnRhaW5lclJlZiwgX3JlbmRlcmVyKVxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IFRvb2x0aXBDb25maWcsIHVzZVZhbHVlOiBjb25maWd9KTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl90b29sdGlwLm9uU2hvd247XG4gICAgdGhpcy5zaG93biA9IHRoaXMuX3Rvb2x0aXAub25TaG93bjtcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fdG9vbHRpcC5vbkhpZGRlbjtcbiAgICB0aGlzLmhpZGRlbiA9IHRoaXMuX3Rvb2x0aXAub25IaWRkZW47XG5cblxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKSBvbmNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy50cmlnZ2Vycy50b1N0cmluZygpLmluY2x1ZGVzKCdmb2N1cycpKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpjbGljaycpIG9uYmx1cigpIHtcbiAgICBpZiAodGhpcy50cmlnZ2Vycy50b1N0cmluZygpLmluY2x1ZGVzKCdmb2N1cycpICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fdG9vbHRpcC5saXN0ZW4oe1xuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxuICAgIH0pO1xuXG4gICAgdGhpcy50b29sdGlwQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2hvd24uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fdG9vbHRpcC5pbnN0YW5jZS5wbGFjZW1lbnQgIT09IHRoaXMucGxhY2VtZW50ICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgdGhpcy5fdG9vbHRpcC5pbnN0YW5jZS5hbGlnbkFycm93KHRoaXMucGxhY2VtZW50KTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKCFjaGFuZ2VzWydtZGJUb29sdGlwJ10uaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICB0aGlzLnRvb2x0aXBDaGFuZ2UuZW1pdCh0aGlzLm1kYlRvb2x0aXApO1xuICAgIH1cbiAgfVxuXG4gIGdldEJvdHRvbU9mZnNldCgpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IGJvdHRvbSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICByZXR1cm4gd2luZG93SGVpZ2h0IC0gYm90dG9tO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgcHVibGljIHRvZ2dsZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPcGVucyBhbiBlbGVtZW504oCZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxuICAgKiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHB1YmxpYyBzaG93KGV2ZW50PzogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNPcGVuIHx8IHRoaXMuaXNEaXNhYmxlZCB8fCB0aGlzLl9kZWxheVRpbWVvdXRJZCB8fCAhdGhpcy5tZGJUb29sdGlwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1Rvb2x0aXAgPSAoKSA9PiB0aGlzLl90b29sdGlwXG4gICAgICAuYXR0YWNoKFRvb2x0aXBDb250YWluZXJDb21wb25lbnQpXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcbiAgICAgIC5zaG93KHtcbiAgICAgICAgY29udGVudDogdGhpcy5tZGJUb29sdGlwLFxuICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50XG4gICAgICB9KTtcbiAgICB0aGlzLnNob3dUb29sdGlwKHNob3dUb29sdGlwKTtcblxuICAgIGNvbnN0IGVsUG9zaXRpb24gPSBldmVudCA/IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB0b29sdGlwRWwgPSB0aGlzLl90b29sdGlwLmluc3RhbmNlWydlbCddLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLmdldENvcnJlY3RBbGlnbm1lbnQodG9vbHRpcEVsLCBlbFBvc2l0aW9uKTtcbiAgICB0aGlzLnNob3dUb29sdGlwKHNob3dUb29sdGlwKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29ycmVjdEFsaWdubWVudCh0b29sdGlwRWw6IGFueSwgZWxQb3NpdGlvbjogQ2xpZW50UmVjdCkge1xuICAgIGNvbnN0IHJpZ2h0ID0gd2luZG93LmlubmVyV2lkdGggLSBlbFBvc2l0aW9uLndpZHRoIC0gZWxQb3NpdGlvbi5sZWZ0O1xuICAgIGNvbnN0IHBvc2l0aW9uID0gWydsZWZ0JywgJ3JpZ2h0JywgJ2JvdHRvbScsICd0b3AnXTtcbiAgICBjb25zdCBoZWlnaHRGb3JUb3AgPSB0aGlzLmN1c3RvbUhlaWdodCA/IChwYXJzZUludCh0aGlzLmN1c3RvbUhlaWdodCwgMTApICsgMTYpIDogNDA7XG4gICAgY29uc3QgaGVpZ2h0Rm9yQm90dG9tID0gdGhpcy5jdXN0b21IZWlnaHQgPyAocGFyc2VJbnQodGhpcy5jdXN0b21IZWlnaHQsIDEwKSArIDMyKSA6IDYwO1xuXG4gICAgaWYgKHRoaXMucGxhY2VtZW50ID09ICdsZWZ0Jykge1xuICAgICAgW1xuICAgICAgICBlbFBvc2l0aW9uLmxlZnQgPj0gdG9vbHRpcEVsLmNsaWVudFdpZHRoLFxuICAgICAgICBlbFBvc2l0aW9uLmxlZnQgPD0gdG9vbHRpcEVsLmNsaWVudFdpZHRoICYmIHJpZ2h0ID4gdG9vbHRpcEVsLmNsaWVudFdpZHRoLFxuICAgICAgICBlbFBvc2l0aW9uLmxlZnQgPD0gdG9vbHRpcEVsLmNsaWVudFdpZHRoICYmIHJpZ2h0IDw9IHRvb2x0aXBFbC5jbGllbnRXaWR0aCAmJiB0aGlzLmdldEJvdHRvbU9mZnNldCgpIGFzIGFueSA+PSBoZWlnaHRGb3JCb3R0b20sXG4gICAgICAgIGVsUG9zaXRpb24ubGVmdCA8PSB0b29sdGlwRWwuY2xpZW50V2lkdGggJiYgcmlnaHQgPD0gdG9vbHRpcEVsLmNsaWVudFdpZHRoICYmIHRoaXMuZ2V0Qm90dG9tT2Zmc2V0KCkgYXMgYW55IDwgaGVpZ2h0Rm9yQm90dG9tICYmIGVsUG9zaXRpb24udG9wID49IGhlaWdodEZvclRvcFxuICAgICAgXS5mb3JFYWNoKChlbDogYm9vbGVhbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICB0aGlzLnBsYWNlbWVudCA9IHBvc2l0aW9uW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGxhY2VtZW50ID09ICdyaWdodCcpIHtcbiAgICAgIFtcbiAgICAgICAgcmlnaHQgPD0gdG9vbHRpcEVsLmNsaWVudFdpZHRoICYmIGVsUG9zaXRpb24ubGVmdCA+IHRvb2x0aXBFbC5jbGllbnRXaWR0aCxcbiAgICAgICAgcmlnaHQgPj0gdG9vbHRpcEVsLmNsaWVudFdpZHRoLFxuICAgICAgICByaWdodCA8PSB0b29sdGlwRWwuY2xpZW50V2lkdGggJiYgZWxQb3NpdGlvbi5sZWZ0IDw9IHRvb2x0aXBFbC5jbGllbnRXaWR0aCAmJiB0aGlzLmdldEJvdHRvbU9mZnNldCgpIGFzIGFueSA+PSBoZWlnaHRGb3JCb3R0b20sXG4gICAgICAgIHJpZ2h0IDw9IHRvb2x0aXBFbC5jbGllbnRXaWR0aCAmJiBlbFBvc2l0aW9uLmxlZnQgPD0gdG9vbHRpcEVsLmNsaWVudFdpZHRoICYmIHRoaXMuZ2V0Qm90dG9tT2Zmc2V0KCkgYXMgYW55IDwgaGVpZ2h0Rm9yQm90dG9tICYmIGVsUG9zaXRpb24udG9wID49IGhlaWdodEZvclRvcFxuICAgICAgXS5mb3JFYWNoKChlbDogYm9vbGVhbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICB0aGlzLnBsYWNlbWVudCA9IHBvc2l0aW9uW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGxhY2VtZW50ID09ICd0b3AnKSB7XG4gICAgICBbXG4gICAgICAgIGVsUG9zaXRpb24udG9wIDwgaGVpZ2h0Rm9yVG9wICYmIHRoaXMuZ2V0Qm90dG9tT2Zmc2V0KCkgYXMgYW55IDwgaGVpZ2h0Rm9yQm90dG9tICYmIGVsUG9zaXRpb24ubGVmdCA+PSB0b29sdGlwRWwuY2xpZW50V2lkdGgsXG4gICAgICAgIGVsUG9zaXRpb24udG9wIDwgaGVpZ2h0Rm9yVG9wICYmIHRoaXMuZ2V0Qm90dG9tT2Zmc2V0KCkgYXMgYW55IDwgaGVpZ2h0Rm9yQm90dG9tICYmIGVsUG9zaXRpb24ubGVmdCA8IHRvb2x0aXBFbC5jbGllbnRXaWR0aCAmJiByaWdodCA+PSB0b29sdGlwRWwuY2xpZW50V2lkdGgsXG4gICAgICAgIGVsUG9zaXRpb24udG9wIDwgaGVpZ2h0Rm9yVG9wICYmIHRoaXMuZ2V0Qm90dG9tT2Zmc2V0KCkgYXMgYW55ID49IGhlaWdodEZvckJvdHRvbSxcbiAgICAgICAgZWxQb3NpdGlvbi50b3AgPj0gaGVpZ2h0Rm9yVG9wXG4gICAgICBdLmZvckVhY2goKGVsOiBib29sZWFuLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIHRoaXMucGxhY2VtZW50ID0gcG9zaXRpb25baW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT0gJ2JvdHRvbScpIHtcbiAgICAgIFtcbiAgICAgICAgdGhpcy5nZXRCb3R0b21PZmZzZXQoKSBhcyBhbnkgPCBoZWlnaHRGb3JCb3R0b20gJiYgZWxQb3NpdGlvbi50b3AgPCBoZWlnaHRGb3JUb3AgJiYgZWxQb3NpdGlvbi5sZWZ0ID49IHRvb2x0aXBFbC5jbGllbnRXaWR0aCxcbiAgICAgICAgdGhpcy5nZXRCb3R0b21PZmZzZXQoKSBhcyBhbnkgPCBoZWlnaHRGb3JCb3R0b20gJiYgZWxQb3NpdGlvbi50b3AgPCBoZWlnaHRGb3JUb3AgJiYgZWxQb3NpdGlvbi5sZWZ0IDwgdG9vbHRpcEVsLmNsaWVudFdpZHRoICYmIHJpZ2h0ID49IHRvb2x0aXBFbC5jbGllbnRXaWR0aCxcbiAgICAgICAgdGhpcy5nZXRCb3R0b21PZmZzZXQoKSBhcyBhbnkgPCBoZWlnaHRGb3JCb3R0b20gJiYgZWxQb3NpdGlvbi50b3AgPj0gaGVpZ2h0Rm9yVG9wLFxuICAgICAgICB0aGlzLmdldEJvdHRvbU9mZnNldCgpIGFzIGFueSA8PSBoZWlnaHRGb3JUb3BcbiAgICAgIF0uZm9yRWFjaCgoZWw6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBwb3NpdGlvbltpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvd1Rvb2x0aXAoZm46IEZ1bmN0aW9uKSB7XG4gICAgaWYgKHRoaXMuZGVsYXkpIHtcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9LCB0aGlzLmRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgcHVibGljIGhpZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2RlbGF5VGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5fZGVsYXlUaW1lb3V0SWQpO1xuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl90b29sdGlwLmlzU2hvd24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90b29sdGlwLmluc3RhbmNlLmNsYXNzTWFwLmluID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcbiAgICB9LCB0aGlzLmZhZGVEdXJhdGlvbik7XG4gIH1cblxuICBwdWJsaWMgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl90b29sdGlwLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl90b29sdGlwLmRpc3Bvc2UoKTtcbiAgfVxufVxuIl19