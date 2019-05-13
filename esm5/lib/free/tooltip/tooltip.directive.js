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
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config, platformId) {
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
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        function () {
            return this._tooltip.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    TooltipDirective.prototype.onclick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.triggers.toString().includes('focus')) {
            event.stopPropagation();
            this.show();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.onblur = /**
     * @return {?}
     */
    function () {
        if (this.triggers.toString().includes('focus') && this.isOpen) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: (/**
             * @return {?}
             */
            function () { return _this.show(); })
        });
        this.tooltipChange.subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        }));
        this.shown.subscribe((/**
         * @return {?}
         */
        function () {
            setTimeout((/**
             * @return {?}
             */
            function () {
                if (_this._tooltip.instance.placement !== _this.placement && _this.isOpen) {
                    _this._tooltip.instance.alignArrow(_this.placement);
                }
            }), 0);
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TooltipDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!changes['mdbTooltip'].isFirstChange()) {
            this.tooltipChange.emit(this.mdbTooltip);
        }
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.getBottomOffset = /**
     * @return {?}
     */
    function () {
        if (this.isBrowser) {
            /** @type {?} */
            var windowHeight = window.innerHeight;
            /** @type {?} */
            var bottom = this._elementRef.nativeElement.getBoundingClientRect().bottom;
            return windowHeight - bottom;
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @param {?=} event
     * @return {?}
     */
    TooltipDirective.prototype.show = /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        /** @type {?} */
        var showTooltip = (/**
         * @return {?}
         */
        function () { return _this._tooltip
            .attach(TooltipContainerComponent)
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.mdbTooltip,
            placement: _this.placement
        }); });
        this.showTooltip(showTooltip);
        /** @type {?} */
        var elPosition = event ? event.target.getBoundingClientRect() : this._elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var tooltipEl = this._tooltip.instance['el'].nativeElement;
        this.getCorrectAlignment(tooltipEl, elPosition);
        this.showTooltip(showTooltip);
    };
    /**
     * @private
     * @param {?} tooltipEl
     * @param {?} elPosition
     * @return {?}
     */
    TooltipDirective.prototype.getCorrectAlignment = /**
     * @private
     * @param {?} tooltipEl
     * @param {?} elPosition
     * @return {?}
     */
    function (tooltipEl, elPosition) {
        var _this = this;
        /** @type {?} */
        var right = window.innerWidth - elPosition.width - elPosition.left;
        /** @type {?} */
        var position = ['left', 'right', 'bottom', 'top'];
        /** @type {?} */
        var heightForTop = this.customHeight ? (parseInt(this.customHeight, 10) + 16) : 40;
        /** @type {?} */
        var heightForBottom = this.customHeight ? (parseInt(this.customHeight, 10) + 32) : 60;
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
            function (el, index) {
                if (el) {
                    _this.placement = position[index];
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
            function (el, index) {
                if (el) {
                    _this.placement = position[index];
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
            function (el, index) {
                if (el) {
                    _this.placement = position[index];
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
            function (el, index) {
                if (el) {
                    _this.placement = position[index];
                }
            }));
        }
    };
    /**
     * @private
     * @param {?} fn
     * @return {?}
     */
    TooltipDirective.prototype.showTooltip = /**
     * @private
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (this.delay) {
            this._delayTimeoutId = setTimeout((/**
             * @return {?}
             */
            function () {
                fn();
            }), this.delay);
        }
        else {
            fn();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    function () {
        var _this = this;
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
        function () {
            _this._tooltip.hide();
        }), this.fadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.dispose = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbTooltip]',
                    exportAs: 'mdb-tooltip'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Renderer2 },
        { type: ElementRef },
        { type: ComponentLoaderFactory },
        { type: TooltipConfig },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
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
    return TooltipDirective;
}());
export { TooltipDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUlMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUdULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sb0RBQW9ELENBQUM7QUFFMUYsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWxEO0lBb0VFLDBCQUNFLGlCQUFtQyxFQUNuQyxTQUFvQixFQUNaLFdBQXVCLEVBQy9CLEdBQTJCLEVBQzNCLE1BQXFCLEVBQ1EsVUFBa0I7UUFIdkMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFHRixlQUFVLEdBQVYsVUFBVSxDQUFROzs7O1FBL0RoQyxrQkFBYSxHQUE0QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBaUQ3RSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRVYsaUJBQVksR0FBRyxHQUFHLENBQUM7UUFHbkMsY0FBUyxHQUFRLEtBQUssQ0FBQztRQVdyQixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHO2FBQ2hCLFlBQVksQ0FBNEIsSUFB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QzFCLENBQUM7Ozs7SUFFTSxzQ0FBVzs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkEvUUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsYUFBYTtpQkFDeEI7Ozs7Z0JBWkMsZ0JBQWdCO2dCQUhoQixTQUFTO2dCQVZULFVBQVU7Z0JBaUJKLHNCQUFzQjtnQkFEdEIsYUFBYTs2Q0FnRmhCLE1BQU0sU0FBQyxXQUFXOzs7NkJBakVwQixLQUFLO2dDQUVMLE1BQU07NEJBS04sS0FBSzsyQkFLTCxLQUFLOzRCQUtMLEtBQUs7eUJBS0wsS0FBSzs2QkFnQkwsS0FBSzswQkFLTCxNQUFNO3dCQUNOLE1BQU07MkJBSU4sTUFBTTt5QkFDTixNQUFNO3dCQUVOLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQTRCTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO3lCQU9oQyxZQUFZLFNBQUMsY0FBYzs7SUF4Rm5CO1FBRFIsUUFBUSxFQUFFOzt3REFDMkM7SUF1UXhELHVCQUFDO0NBQUEsQUFoUkQsSUFnUkM7U0E1UVksZ0JBQWdCOzs7Ozs7SUFJM0Isc0NBQ3NEOzs7OztJQUV0RCx5Q0FBNkY7Ozs7O0lBSzdGLHFDQUFrQzs7Ozs7O0lBS2xDLG9DQUFpQzs7Ozs7O0lBS2pDLHFDQUFrQzs7Ozs7SUFxQmxDLHNDQUFvQzs7Ozs7SUFLcEMsbUNBQTRDOztJQUM1QyxpQ0FBMEM7Ozs7O0lBSTFDLG9DQUE2Qzs7SUFDN0Msa0NBQTJDOztJQUUzQyxpQ0FBMEI7O0lBQzFCLHdDQUFxQzs7SUFDckMsd0NBQW1DOzs7OztJQUVuQywyQ0FBK0I7O0lBQy9CLHFDQUF1Qjs7Ozs7SUFDdkIsb0NBQTZEOzs7OztJQUszRCx1Q0FBK0I7Ozs7O0lBRy9CLHNDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Rvb2x0aXBDb250YWluZXJDb21wb25lbnR9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHtUb29sdGlwQ29uZmlnfSBmcm9tICcuL3Rvb2x0aXAuc2VydmljZSc7XG5pbXBvcnQge0NvbXBvbmVudExvYWRlckZhY3Rvcnl9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudC1sb2FkZXIvY29tcG9uZW50LWxvYWRlci5mYWN0b3J5JztcbmltcG9ydCB7Q29tcG9uZW50TG9hZGVyfSBmcm9tICcuLi91dGlscy9jb21wb25lbnQtbG9hZGVyL2NvbXBvbmVudC1sb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHtPbkNoYW5nZX0gZnJvbSAnLi4vdXRpbHMvZGVjb3JhdG9ycyc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVG9vbHRpcF0nLFxuICBleHBvcnRBczogJ21kYi10b29sdGlwJ1xufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyB0b29sdGlwLlxuICAgKi9cbiAgQE9uQ2hhbmdlKClcbiAgQElucHV0KCkgcHVibGljIG1kYlRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XG4gIC8qKiBGaXJlZCB3aGVuIHRvb2x0aXAgY29udGVudCBjaGFuZ2VzICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgdG9vbHRpcENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBQbGFjZW1lbnQgb2YgYSB0b29sdGlwLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgcGxhY2VtZW50OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcbiAgICogZXZlbnQgbmFtZXMuXG4gICAqL1xuICBASW5wdXQoKSBwdWJsaWMgdHJpZ2dlcnM6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdG9vbHRpcCBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxuICAgKi9cbiAgQElucHV0KCkgcHVibGljIGNvbnRhaW5lcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0b29sdGlwIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXAuaXNTaG93bjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFsbG93cyB0byBkaXNhYmxlIHRvb2x0aXBcbiAgICovXG4gIEBJbnB1dCgpIHB1YmxpYyBpc0Rpc2FibGVkOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSB0b29sdGlwIGlzIHNob3duXG4gICAqL1xuICBAT3V0cHV0KCkgcHVibGljIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgcHVibGljIHNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgaGlkZGVuXG4gICAqL1xuICBAT3V0cHV0KCkgcHVibGljIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIHB1YmxpYyBoaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gIEBJbnB1dCgpIHB1YmxpYyBkZWxheSA9IDA7XG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21IZWlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGZhZGVEdXJhdGlvbiA9IDE1MDtcblxuICBwcm90ZWN0ZWQgX2RlbGF5VGltZW91dElkOiBhbnk7XG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gIHByaXZhdGUgX3Rvb2x0aXA6IENvbXBvbmVudExvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PjtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXG4gICAgY29uZmlnOiBUb29sdGlwQ29uZmlnLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG5cbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKCh0aGlzLnBsYXRmb3JtSWQpKTtcbiAgICB0aGlzLl90b29sdGlwID0gY2lzXG4gICAgICAuY3JlYXRlTG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+KHRoaXMuX2VsZW1lbnRSZWYsIF92aWV3Q29udGFpbmVyUmVmLCBfcmVuZGVyZXIpXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogVG9vbHRpcENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZ30pO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICAgIHRoaXMub25TaG93biA9IHRoaXMuX3Rvb2x0aXAub25TaG93bjtcbiAgICB0aGlzLnNob3duID0gdGhpcy5fdG9vbHRpcC5vblNob3duO1xuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl90b29sdGlwLm9uSGlkZGVuO1xuICAgIHRoaXMuaGlkZGVuID0gdGhpcy5fdG9vbHRpcC5vbkhpZGRlbjtcblxuXG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uY2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGlmICh0aGlzLnRyaWdnZXJzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2ZvY3VzJykpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmNsaWNrJykgb25ibHVyKCkge1xuICAgIGlmICh0aGlzLnRyaWdnZXJzLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2ZvY3VzJykgJiYgdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl90b29sdGlwLmxpc3Rlbih7XG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXG4gICAgfSk7XG5cbiAgICB0aGlzLnRvb2x0aXBDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zaG93bi5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl90b29sdGlwLmluc3RhbmNlLnBsYWNlbWVudCAhPT0gdGhpcy5wbGFjZW1lbnQgJiYgdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICB0aGlzLl90b29sdGlwLmluc3RhbmNlLmFsaWduQXJyb3codGhpcy5wbGFjZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoIWNoYW5nZXNbJ21kYlRvb2x0aXAnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMudG9vbHRpcENoYW5nZS5lbWl0KHRoaXMubWRiVG9vbHRpcCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Qm90dG9tT2Zmc2V0KCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY29uc3QgYm90dG9tID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICAgIHJldHVybiB3aW5kb3dIZWlnaHQgLSBib3R0b207XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuc2hvdygpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXG4gICAqIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgcHVibGljIHNob3coZXZlbnQ/OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc09wZW4gfHwgdGhpcy5pc0Rpc2FibGVkIHx8IHRoaXMuX2RlbGF5VGltZW91dElkIHx8ICF0aGlzLm1kYlRvb2x0aXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzaG93VG9vbHRpcCA9ICgpID0+IHRoaXMuX3Rvb2x0aXBcbiAgICAgIC5hdHRhY2goVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudClcbiAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxuICAgICAgLnNob3coe1xuICAgICAgICBjb250ZW50OiB0aGlzLm1kYlRvb2x0aXAsXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnRcbiAgICAgIH0pO1xuICAgIHRoaXMuc2hvd1Rvb2x0aXAoc2hvd1Rvb2x0aXApO1xuXG4gICAgY29uc3QgZWxQb3NpdGlvbiA9IGV2ZW50ID8gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRvb2x0aXBFbCA9IHRoaXMuX3Rvb2x0aXAuaW5zdGFuY2VbJ2VsJ10ubmF0aXZlRWxlbWVudDtcblxuICAgIHRoaXMuZ2V0Q29ycmVjdEFsaWdubWVudCh0b29sdGlwRWwsIGVsUG9zaXRpb24pO1xuICAgIHRoaXMuc2hvd1Rvb2x0aXAoc2hvd1Rvb2x0aXApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb3JyZWN0QWxpZ25tZW50KHRvb2x0aXBFbDogYW55LCBlbFBvc2l0aW9uOiBDbGllbnRSZWN0KSB7XG4gICAgY29uc3QgcmlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGVsUG9zaXRpb24ud2lkdGggLSBlbFBvc2l0aW9uLmxlZnQ7XG4gICAgY29uc3QgcG9zaXRpb24gPSBbJ2xlZnQnLCAncmlnaHQnLCAnYm90dG9tJywgJ3RvcCddO1xuICAgIGNvbnN0IGhlaWdodEZvclRvcCA9IHRoaXMuY3VzdG9tSGVpZ2h0ID8gKHBhcnNlSW50KHRoaXMuY3VzdG9tSGVpZ2h0LCAxMCkgKyAxNikgOiA0MDtcbiAgICBjb25zdCBoZWlnaHRGb3JCb3R0b20gPSB0aGlzLmN1c3RvbUhlaWdodCA/IChwYXJzZUludCh0aGlzLmN1c3RvbUhlaWdodCwgMTApICsgMzIpIDogNjA7XG5cbiAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT0gJ2xlZnQnKSB7XG4gICAgICBbXG4gICAgICAgIGVsUG9zaXRpb24ubGVmdCA+PSB0b29sdGlwRWwuY2xpZW50V2lkdGgsXG4gICAgICAgIGVsUG9zaXRpb24ubGVmdCA8PSB0b29sdGlwRWwuY2xpZW50V2lkdGggJiYgcmlnaHQgPiB0b29sdGlwRWwuY2xpZW50V2lkdGgsXG4gICAgICAgIGVsUG9zaXRpb24ubGVmdCA8PSB0b29sdGlwRWwuY2xpZW50V2lkdGggJiYgcmlnaHQgPD0gdG9vbHRpcEVsLmNsaWVudFdpZHRoICYmIHRoaXMuZ2V0Qm90dG9tT2Zmc2V0KCkgYXMgYW55ID49IGhlaWdodEZvckJvdHRvbSxcbiAgICAgICAgZWxQb3NpdGlvbi5sZWZ0IDw9IHRvb2x0aXBFbC5jbGllbnRXaWR0aCAmJiByaWdodCA8PSB0b29sdGlwRWwuY2xpZW50V2lkdGggJiYgdGhpcy5nZXRCb3R0b21PZmZzZXQoKSBhcyBhbnkgPCBoZWlnaHRGb3JCb3R0b20gJiYgZWxQb3NpdGlvbi50b3AgPj0gaGVpZ2h0Rm9yVG9wXG4gICAgICBdLmZvckVhY2goKGVsOiBib29sZWFuLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIHRoaXMucGxhY2VtZW50ID0gcG9zaXRpb25baW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT0gJ3JpZ2h0Jykge1xuICAgICAgW1xuICAgICAgICByaWdodCA8PSB0b29sdGlwRWwuY2xpZW50V2lkdGggJiYgZWxQb3NpdGlvbi5sZWZ0ID4gdG9vbHRpcEVsLmNsaWVudFdpZHRoLFxuICAgICAgICByaWdodCA+PSB0b29sdGlwRWwuY2xpZW50V2lkdGgsXG4gICAgICAgIHJpZ2h0IDw9IHRvb2x0aXBFbC5jbGllbnRXaWR0aCAmJiBlbFBvc2l0aW9uLmxlZnQgPD0gdG9vbHRpcEVsLmNsaWVudFdpZHRoICYmIHRoaXMuZ2V0Qm90dG9tT2Zmc2V0KCkgYXMgYW55ID49IGhlaWdodEZvckJvdHRvbSxcbiAgICAgICAgcmlnaHQgPD0gdG9vbHRpcEVsLmNsaWVudFdpZHRoICYmIGVsUG9zaXRpb24ubGVmdCA8PSB0b29sdGlwRWwuY2xpZW50V2lkdGggJiYgdGhpcy5nZXRCb3R0b21PZmZzZXQoKSBhcyBhbnkgPCBoZWlnaHRGb3JCb3R0b20gJiYgZWxQb3NpdGlvbi50b3AgPj0gaGVpZ2h0Rm9yVG9wXG4gICAgICBdLmZvckVhY2goKGVsOiBib29sZWFuLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChlbCkge1xuICAgICAgICAgIHRoaXMucGxhY2VtZW50ID0gcG9zaXRpb25baW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wbGFjZW1lbnQgPT0gJ3RvcCcpIHtcbiAgICAgIFtcbiAgICAgICAgZWxQb3NpdGlvbi50b3AgPCBoZWlnaHRGb3JUb3AgJiYgdGhpcy5nZXRCb3R0b21PZmZzZXQoKSBhcyBhbnkgPCBoZWlnaHRGb3JCb3R0b20gJiYgZWxQb3NpdGlvbi5sZWZ0ID49IHRvb2x0aXBFbC5jbGllbnRXaWR0aCxcbiAgICAgICAgZWxQb3NpdGlvbi50b3AgPCBoZWlnaHRGb3JUb3AgJiYgdGhpcy5nZXRCb3R0b21PZmZzZXQoKSBhcyBhbnkgPCBoZWlnaHRGb3JCb3R0b20gJiYgZWxQb3NpdGlvbi5sZWZ0IDwgdG9vbHRpcEVsLmNsaWVudFdpZHRoICYmIHJpZ2h0ID49IHRvb2x0aXBFbC5jbGllbnRXaWR0aCxcbiAgICAgICAgZWxQb3NpdGlvbi50b3AgPCBoZWlnaHRGb3JUb3AgJiYgdGhpcy5nZXRCb3R0b21PZmZzZXQoKSBhcyBhbnkgPj0gaGVpZ2h0Rm9yQm90dG9tLFxuICAgICAgICBlbFBvc2l0aW9uLnRvcCA+PSBoZWlnaHRGb3JUb3BcbiAgICAgIF0uZm9yRWFjaCgoZWw6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSBwb3NpdGlvbltpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBsYWNlbWVudCA9PSAnYm90dG9tJykge1xuICAgICAgW1xuICAgICAgICB0aGlzLmdldEJvdHRvbU9mZnNldCgpIGFzIGFueSA8IGhlaWdodEZvckJvdHRvbSAmJiBlbFBvc2l0aW9uLnRvcCA8IGhlaWdodEZvclRvcCAmJiBlbFBvc2l0aW9uLmxlZnQgPj0gdG9vbHRpcEVsLmNsaWVudFdpZHRoLFxuICAgICAgICB0aGlzLmdldEJvdHRvbU9mZnNldCgpIGFzIGFueSA8IGhlaWdodEZvckJvdHRvbSAmJiBlbFBvc2l0aW9uLnRvcCA8IGhlaWdodEZvclRvcCAmJiBlbFBvc2l0aW9uLmxlZnQgPCB0b29sdGlwRWwuY2xpZW50V2lkdGggJiYgcmlnaHQgPj0gdG9vbHRpcEVsLmNsaWVudFdpZHRoLFxuICAgICAgICB0aGlzLmdldEJvdHRvbU9mZnNldCgpIGFzIGFueSA8IGhlaWdodEZvckJvdHRvbSAmJiBlbFBvc2l0aW9uLnRvcCA+PSBoZWlnaHRGb3JUb3AsXG4gICAgICAgIHRoaXMuZ2V0Qm90dG9tT2Zmc2V0KCkgYXMgYW55IDw9IGhlaWdodEZvclRvcFxuICAgICAgXS5mb3JFYWNoKChlbDogYm9vbGVhbiwgaW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICB0aGlzLnBsYWNlbWVudCA9IHBvc2l0aW9uW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93VG9vbHRpcChmbjogRnVuY3Rpb24pIHtcbiAgICBpZiAodGhpcy5kZWxheSkge1xuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0sIHRoaXMuZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcbiAgICogdGhlIHRvb2x0aXAuXG4gICAqL1xuICBwdWJsaWMgaGlkZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZGVsYXlUaW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheVRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9kZWxheVRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3Rvb2x0aXAuaXNTaG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3Rvb2x0aXAuaW5zdGFuY2UuY2xhc3NNYXAuaW4gPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xuICAgIH0sIHRoaXMuZmFkZUR1cmF0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNwb3NlKCkge1xuICAgIHRoaXMuX3Rvb2x0aXAuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3Rvb2x0aXAuZGlzcG9zZSgpO1xuICB9XG59XG4iXX0=