/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, HostBinding, ChangeDetectionStrategy, Input, ElementRef, NgZone, Renderer2, Directive } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
// TODO(josephperrott): Benchpress tests.
/**
 * A single degree in radians.
 * @type {?}
 */
var DEGREE_IN_RADIANS = Math.PI / 180;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
var DURATION_INDETERMINATE = 667;
/**
 * Duration of the indeterminate animation.
 * @type {?}
 */
var DURATION_DETERMINATE = 225;
/**
 * Start animation value of the indeterminate animation
 * @type {?}
 */
var startIndeterminate = 3;
/**
 * End animation value of the indeterminate animation
 * @type {?}
 */
var endIndeterminate = 80;
/* Maximum angle for the arc. The angle can't be exactly 360, because the arc becomes hidden. */
/** @type {?} */
var MAX_ANGLE = 359.99 / 100;
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MdProgressSpinnerCssMatStylerDirective = /** @class */ (function () {
    function MdProgressSpinnerCssMatStylerDirective() {
    }
    MdProgressSpinnerCssMatStylerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbSpinners], mat-progress-spinner'
                },] }
    ];
    MdProgressSpinnerCssMatStylerDirective.propDecorators = {
        true: [{ type: HostBinding, args: ['class.mat-progress-spinner',] }]
    };
    return MdProgressSpinnerCssMatStylerDirective;
}());
export { MdProgressSpinnerCssMatStylerDirective };
if (false) {
    /** @type {?} */
    MdProgressSpinnerCssMatStylerDirective.prototype.true;
}
/**
 * <md-progress-spinner> component.
 */
var MdProgressSpinnerComponent = /** @class */ (function () {
    function MdProgressSpinnerComponent(_ngZone, _elementRef, _renderer, platformId) {
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * The id of the last requested animation.
         */
        this._lastAnimationId = 0;
        this._mode = 'determinate';
        this._color = 'primary';
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMin", {
        /**
        * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
        * because voiceover does not report the progress indicator as indeterminate if the aria min
        * and/or max value are number values.
        */
        get: /**
         * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
         * because voiceover does not report the progress indicator as indeterminate if the aria min
         * and/or max value are number values.
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? 0 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMax", {
        get: /**
         * @return {?}
         */
        function () {
            return this.mode === 'determinate' ? 100 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "interdeterminateInterval", {
        /** @docs-private */
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () {
            return this._interdeterminateInterval;
        },
        /** @docs-private */
        set: /**
         * \@docs-private
         * @param {?} interval
         * @return {?}
         */
        function (interval) {
            clearInterval(this._interdeterminateInterval);
            this._interdeterminateInterval = interval;
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Clean up any animations that were running.
    */
    /**
     * Clean up any animations that were running.
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype.ngOnDestroy = /**
     * Clean up any animations that were running.
     * @return {?}
     */
    function () {
        this._cleanupIndeterminateAnimation();
    };
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "color", {
        /** The color of the progress-spinner. Can be primary, accent, or warn. */
        get: /**
         * The color of the progress-spinner. Can be primary, accent, or warn.
         * @return {?}
         */
        function () { return this._color; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "value", {
        /** Value of the progress circle. It is bound to the host as the attribute aria-valuenow. */
        get: /**
         * Value of the progress circle. It is bound to the host as the attribute aria-valuenow.
         * @return {?}
         */
        function () {
            if (this.mode === 'determinate') {
                return this._value;
            }
            return;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v != null && this.mode === 'determinate') {
                /** @type {?} */
                var newValue = clamp(v);
                this._animateCircle(this.value || 0, newValue);
                this._value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "mode", {
        /**
        * Mode of the progress circle
        *
        * Input must be one of the values from ProgressMode, defaults to 'determinate'.
        * mode is bound to the host as the attribute host.
        */
        get: /**
         * Mode of the progress circle
         *
         * Input must be one of the values from ProgressMode, defaults to 'determinate'.
         * mode is bound to the host as the attribute host.
         * @return {?}
         */
        function () {
            return this._mode;
        },
        set: /**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (mode !== this._mode) {
                if (mode === 'indeterminate') {
                    this._startIndeterminateAnimation();
                }
                else {
                    this._cleanupIndeterminateAnimation();
                    this._animateCircle(0, this._value);
                }
                this._mode = mode;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
    * Animates the circle from one percentage value to another.
    *
    * @param animateFrom The percentage of the circle filled starting the animation.
    * @param animateTo The percentage of the circle filled ending the animation.
    * @param ease The easing function to manage the pace of change in the animation.
    * @param duration The length of time to show the animation, in milliseconds.
    * @param rotation The starting angle of the circle fill, with 0° represented at the top center
    *    of the circle.
    */
    /**
     * Animates the circle from one percentage value to another.
     *
     * @private
     * @param {?} animateFrom The percentage of the circle filled starting the animation.
     * @param {?} animateTo The percentage of the circle filled ending the animation.
     * @param {?=} ease The easing function to manage the pace of change in the animation.
     * @param {?=} duration The length of time to show the animation, in milliseconds.
     * @param {?=} rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._animateCircle = /**
     * Animates the circle from one percentage value to another.
     *
     * @private
     * @param {?} animateFrom The percentage of the circle filled starting the animation.
     * @param {?} animateTo The percentage of the circle filled ending the animation.
     * @param {?=} ease The easing function to manage the pace of change in the animation.
     * @param {?=} duration The length of time to show the animation, in milliseconds.
     * @param {?=} rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     * @return {?}
     */
    function (animateFrom, animateTo, ease, duration, rotation) {
        var _this = this;
        if (ease === void 0) { ease = linearEase; }
        if (duration === void 0) { duration = DURATION_DETERMINATE; }
        if (rotation === void 0) { rotation = 0; }
        /** @type {?} */
        var id = ++this._lastAnimationId;
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var changeInValue = animateTo - animateFrom;
        // No need to animate it if the values are the same
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            /** @type {?} */
            var animation_1 = function () {
                /** @type {?} */
                var elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                _this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                // Prevent overlapping animations by checking if a new animation has been called for and
                // if the animation has lasted longer than the animation duration.
                if (id === _this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation_1);
                }
            };
            // Run the animation outside of Angular's zone, in order to avoid
            // hitting ZoneJS and change detection on each frame.
            this._ngZone.runOutsideAngular(animation_1);
        }
    };
    /**
    * Starts the indeterminate animation interval, if it is not already running.
    */
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @private
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._startIndeterminateAnimation = /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var rotationStartPoint = 0;
        /** @type {?} */
        var start = startIndeterminate;
        /** @type {?} */
        var end = endIndeterminate;
        /** @type {?} */
        var duration = DURATION_INDETERMINATE;
        /** @type {?} */
        var animate = function () {
            _this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
            rotationStartPoint = (rotationStartPoint + end) % 100;
            /** @type {?} */
            var temp = start;
            start = -end;
            end = -temp;
        };
        if (this.isBrowser) {
            if (!this.interdeterminateInterval) {
                this._ngZone.runOutsideAngular(function () {
                    _this.interdeterminateInterval = setInterval(animate, duration + 50, 0, false);
                    animate();
                });
            }
        }
    };
    /**
    * Removes interval, ending the animation.
    */
    /**
     * Removes interval, ending the animation.
     * @private
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._cleanupIndeterminateAnimation = /**
     * Removes interval, ending the animation.
     * @private
     * @return {?}
     */
    function () {
        this.interdeterminateInterval = null;
    };
    /**
    * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
    * DOM attribute on the `<path>`.
    */
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @private
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._renderArc = /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @private
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    function (currentValue, rotation) {
        if (rotation === void 0) { rotation = 0; }
        // Caches the path reference so it doesn't have to be looked up every time.
        /** @type {?} */
        var path = this._path = this._path || this._elementRef.nativeElement.querySelector('path');
        // Ensure that the path was found. This may not be the case if the
        // animation function fires too early.
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    };
    /**
    * Updates the color of the progress-spinner by adding the new palette class to the element
    * and removing the old one.
    */
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @private
     * @param {?} newColor
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._updateColor = /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @private
     * @param {?} newColor
     * @return {?}
     */
    function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    /** Sets the given palette class on the component element. */
    /**
     * Sets the given palette class on the component element.
     * @private
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._setElementColor = /**
     * Sets the given palette class on the component element.
     * @private
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    function (color, isAdd) {
        if (color != null && color !== '') {
            // this._renderer.setElementClass(this._elementRef.nativeElement, `mat-${color}`, isAdd);
            if (isAdd) {
                this._renderer.addClass(this._elementRef.nativeElement, "mat-" + color);
            }
        }
    };
    MdProgressSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-Spinners, mat-progress-spinner',
                    template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MdProgressSpinnerComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdProgressSpinnerComponent.propDecorators = {
        platformId: [{ type: Inject, args: [PLATFORM_ID,] }],
        color: [{ type: Input }],
        value: [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] }],
        mode: [{ type: HostBinding, args: ['attr.mode',] }, { type: Input }]
    };
    return MdProgressSpinnerComponent;
}());
export { MdProgressSpinnerComponent };
if (false) {
    /**
     * The id of the last requested animation.
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._lastAnimationId;
    /**
     * The id of the indeterminate interval.
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._interdeterminateInterval;
    /**
     * The SVG <path> node that is used to draw the circle.
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._path;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._mode;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._value;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._color;
    /** @type {?} */
    MdProgressSpinnerComponent.prototype.isBrowser;
    /** @type {?} */
    MdProgressSpinnerComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    MdProgressSpinnerComponent.prototype._renderer;
}
/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-spinner> instance.
 */
var MdSpinnerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MdSpinnerComponent, _super);
    function MdSpinnerComponent(elementRef, ngZone, renderer) {
        var _this = _super.call(this, ngZone, elementRef, renderer) || this;
        _this.mode = 'indeterminate';
        return _this;
    }
    /**
     * @return {?}
     */
    MdSpinnerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // The `ngOnDestroy` from `MdProgressSpinner` should be called explicitly, because
        // in certain cases Angular won't call it (e.g. when using AoT and in unit tests).
        _super.prototype.ngOnDestroy.call(this);
    };
    MdSpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-spinners, mat-spinner, mdb-progress-spinner',
                    template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
                    styles: [":host{display:block;height:100px;width:100px;overflow:hidden}:host svg{height:100%;width:100%;-webkit-transform-origin:center;transform-origin:center}:host path{fill:transparent;stroke-width:10px;transition:stroke .3s cubic-bezier(.35,0,.25,1)}:host[mode=indeterminate] svg{-webkit-animation-duration:5.25s,2.887s;animation-duration:5.25s,2.887s;-webkit-animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;-webkit-animation-timing-function:cubic-bezier(.35,0,.25,1),linear;animation-timing-function:cubic-bezier(.35,0,.25,1),linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;transition:none}@-webkit-keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes mat-progress-spinner-linear-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}@keyframes mat-progress-spinner-sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}100%{-webkit-transform:rotate(1080deg);transform:rotate(1080deg)}}"]
                }] }
    ];
    /** @nocollapse */
    MdSpinnerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Renderer2 }
    ]; };
    MdSpinnerComponent.propDecorators = {
        true: [{ type: HostBinding, args: ['class.mat-spinner',] }]
    };
    return MdSpinnerComponent;
}(MdProgressSpinnerComponent));
export { MdSpinnerComponent };
if (false) {
    /** @type {?} */
    MdSpinnerComponent.prototype.true;
}
/**
* Module functions.
*/
/**
 * Clamps a value to be between 0 and 100.
 * @param {?} v
 * @return {?}
 */
function clamp(v) {
    return Math.max(0, Math.min(100, v));
}
/**
 * Converts Polar coordinates to Cartesian.
 * @param {?} radius
 * @param {?} pathRadius
 * @param {?} angleInDegrees
 * @return {?}
 */
function polarToCartesian(radius, pathRadius, angleInDegrees) {
    /** @type {?} */
    var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    return (radius + (pathRadius * Math.cos(angleInRadians))) +
        ',' + (radius + (pathRadius * Math.sin(angleInRadians)));
}
/**
 * Easing function for linear animation.
 * @param {?} currentTime
 * @param {?} startValue
 * @param {?} changeInValue
 * @param {?} duration
 * @return {?}
 */
function linearEase(currentTime, startValue, changeInValue, duration) {
    return changeInValue * currentTime / duration + startValue;
}
/**
 * Easing function to match material design indeterminate animation.
 * @param {?} currentTime
 * @param {?} startValue
 * @param {?} changeInValue
 * @param {?} duration
 * @return {?}
 */
function materialEase(currentTime, startValue, changeInValue, duration) {
    /** @type {?} */
    var time = currentTime / duration;
    /** @type {?} */
    var timeCubed = Math.pow(time, 3);
    /** @type {?} */
    var timeQuad = Math.pow(time, 4);
    /** @type {?} */
    var timeQuint = Math.pow(time, 5);
    return startValue + changeInValue * ((6 * timeQuint) + (-15 * timeQuad) + (10 * timeCubed));
}
/**
 * Determines the path value to define the arc.  Converting percentage values to to polar
 * coordinates on the circle, and then to cartesian coordinates in the viewport.
 *
 * @param {?} currentValue The current percentage value of the progress circle, the percentage of the
 *    circle to fill.
 * @param {?} rotation The starting point of the circle with 0 being the 0 degree point.
 * @return {?} A string for an SVG path representing a circle filled from the starting point to the
 *    percentage value provided.
 */
function getSvgArc(currentValue, rotation) {
    /** @type {?} */
    var startPoint = rotation || 0;
    /** @type {?} */
    var radius = 50;
    /** @type {?} */
    var pathRadius = 40;
    /** @type {?} */
    var startAngle = startPoint * MAX_ANGLE;
    /** @type {?} */
    var endAngle = currentValue * MAX_ANGLE;
    /** @type {?} */
    var start = polarToCartesian(radius, pathRadius, startAngle);
    /** @type {?} */
    var end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    /** @type {?} */
    var arcSweep = endAngle < 0 ? 0 : 1;
    /** @type {?} */
    var largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return "M" + start + "A" + pathRadius + "," + pathRadius + " 0 " + largeArcFlag + "," + arcSweep + " " + end;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLW1vZHVsZS9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsV0FBVyxFQUNYLHVCQUF1QixFQUV2QixLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQUUsU0FBUyxFQUN2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lBSTlDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRzs7Ozs7SUFFakMsc0JBQXNCLEdBQUcsR0FBRzs7Ozs7SUFFNUIsb0JBQW9CLEdBQUcsR0FBRzs7Ozs7SUFFMUIsa0JBQWtCLEdBQUcsQ0FBQzs7Ozs7SUFFdEIsZ0JBQWdCLEdBQUcsRUFBRTs7O0lBRXJCLFNBQVMsR0FBRyxNQUFNLEdBQUcsR0FBRzs7Ozs7QUFZOUI7SUFBQTtJQUtBLENBQUM7O2dCQUxBLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUscUNBQXFDO2lCQUNsRDs7O3VCQUVJLFdBQVcsU0FBQyw0QkFBNEI7O0lBQzdDLDZDQUFDO0NBQUEsQUFMRCxJQUtDO1NBRlksc0NBQXNDOzs7SUFDL0Msc0RBQXFEOzs7OztBQU96RDtJQW1HSSxvQ0FDWSxPQUFlLEVBQ2YsV0FBdUIsRUFDdkIsU0FBb0IsRUFDUCxVQUF5QjtRQUh0QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FB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QixDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxHQUFHLFVBQVUsQ0FBQzs7UUFDakUsUUFBUSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFDakMsWUFBb0I7SUFFeEIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1FBQ2QsWUFBWSxHQUFHLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDM0M7U0FBTTtRQUNILFlBQVksR0FBRyxRQUFRLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxQztJQUVELE9BQU8sTUFBSSxLQUFLLFNBQUksVUFBVSxTQUFJLFVBQVUsV0FBTSxZQUFZLFNBQUksUUFBUSxTQUFJLEdBQUssQ0FBQztBQUN4RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgT25EZXN0cm95LFxuICAgIElucHV0LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgTmdab25lLFxuICAgIFJlbmRlcmVyMiwgRGlyZWN0aXZlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogQmVuY2hwcmVzcyB0ZXN0cy5cblxuLyoqIEEgc2luZ2xlIGRlZ3JlZSBpbiByYWRpYW5zLiAqL1xuY29uc3QgREVHUkVFX0lOX1JBRElBTlMgPSBNYXRoLlBJIC8gMTgwO1xuLyoqIER1cmF0aW9uIG9mIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbi4gKi9cbmNvbnN0IERVUkFUSU9OX0lOREVURVJNSU5BVEUgPSA2Njc7XG4vKiogRHVyYXRpb24gb2YgdGhlIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uLiAqL1xuY29uc3QgRFVSQVRJT05fREVURVJNSU5BVEUgPSAyMjU7XG4vKiogU3RhcnQgYW5pbWF0aW9uIHZhbHVlIG9mIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbiAqL1xuY29uc3Qgc3RhcnRJbmRldGVybWluYXRlID0gMztcbi8qKiBFbmQgYW5pbWF0aW9uIHZhbHVlIG9mIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbiAqL1xuY29uc3QgZW5kSW5kZXRlcm1pbmF0ZSA9IDgwO1xuLyogTWF4aW11bSBhbmdsZSBmb3IgdGhlIGFyYy4gVGhlIGFuZ2xlIGNhbid0IGJlIGV4YWN0bHkgMzYwLCBiZWNhdXNlIHRoZSBhcmMgYmVjb21lcyBoaWRkZW4uICovXG5jb25zdCBNQVhfQU5HTEUgPSAzNTkuOTkgLyAxMDA7XG5cbmV4cG9ydCB0eXBlIFByb2dyZXNzU3Bpbm5lck1vZGUgPSAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnO1xuXG5cbnR5cGUgRWFzaW5nRm4gPSAoY3VycmVudFRpbWU6IG51bWJlciwgc3RhcnRWYWx1ZTogbnVtYmVyLFxuICAgIGNoYW5nZUluVmFsdWU6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikgPT4gbnVtYmVyO1xuXG4vKipcbiogRGlyZWN0aXZlIHdob3NlIHB1cnBvc2UgaXMgdG8gYWRkIHRoZSBtYXQtIENTUyBzdHlsaW5nIHRvIHRoaXMgc2VsZWN0b3IuXG4qIEBkb2NzLXByaXZhdGVcbiovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1ttZGJTcGlubmVyc10sIG1hdC1wcm9ncmVzcy1zcGlubmVyJ1xufSlcbmV4cG9ydCBjbGFzcyBNZFByb2dyZXNzU3Bpbm5lckNzc01hdFN0eWxlckRpcmVjdGl2ZSB7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lcicpIHRydWU6IGFueTtcbn1cblxuXG4vKipcbiogPG1kLXByb2dyZXNzLXNwaW5uZXI+IGNvbXBvbmVudC5cbiovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21kYi1TcGlubmVycywgbWF0LXByb2dyZXNzLXNwaW5uZXInLFxuICAgIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuXG5leHBvcnQgY2xhc3MgTWRQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAgIC8qKiBUaGUgaWQgb2YgdGhlIGxhc3QgcmVxdWVzdGVkIGFuaW1hdGlvbi4gKi9cbiAgICBwcml2YXRlIF9sYXN0QW5pbWF0aW9uSWQgPSAwO1xuXG4gICAgLyoqIFRoZSBpZCBvZiB0aGUgaW5kZXRlcm1pbmF0ZSBpbnRlcnZhbC4gKi9cbiAgICBwcml2YXRlIF9pbnRlcmRldGVybWluYXRlSW50ZXJ2YWw6IGFueTtcblxuICAgIC8qKiBUaGUgU1ZHIDxwYXRoPiBub2RlIHRoYXQgaXMgdXNlZCB0byBkcmF3IHRoZSBjaXJjbGUuICovXG4gICAgcHJpdmF0ZSBfcGF0aDogU1ZHUGF0aEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIF9tb2RlOiBQcm9ncmVzc1NwaW5uZXJNb2RlID0gJ2RldGVybWluYXRlJztcbiAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2NvbG9yID0gJ3ByaW1hcnknO1xuXG4gICAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgKiBWYWx1ZXMgZm9yIGFyaWEgbWF4IGFuZCBtaW4gYXJlIG9ubHkgZGVmaW5lZCBhcyBudW1iZXJzIHdoZW4gaW4gYSBkZXRlcm1pbmF0ZSBtb2RlLiAgV2UgZG8gdGhpc1xuICAgICogYmVjYXVzZSB2b2ljZW92ZXIgZG9lcyBub3QgcmVwb3J0IHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IgYXMgaW5kZXRlcm1pbmF0ZSBpZiB0aGUgYXJpYSBtaW5cbiAgICAqIGFuZC9vciBtYXggdmFsdWUgYXJlIG51bWJlciB2YWx1ZXMuXG4gICAgKi9cbiAgICBnZXQgX2FyaWFWYWx1ZU1pbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ2RldGVybWluYXRlJyA/IDAgOiBudWxsO1xuICAgIH1cblxuICAgIGdldCBfYXJpYVZhbHVlTWF4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnID8gMTAwIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKiogQGRvY3MtcHJpdmF0ZSAqL1xuICAgIGdldCBpbnRlcmRldGVybWluYXRlSW50ZXJ2YWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcmRldGVybWluYXRlSW50ZXJ2YWw7XG4gICAgfVxuICAgIC8qKiBAZG9jcy1wcml2YXRlICovXG4gICAgc2V0IGludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbChpbnRlcnZhbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCk7XG4gICAgICAgIHRoaXMuX2ludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCA9IGludGVydmFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ2xlYW4gdXAgYW55IGFuaW1hdGlvbnMgdGhhdCB3ZXJlIHJ1bm5pbmcuXG4gICAgKi9cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fY2xlYW51cEluZGV0ZXJtaW5hdGVBbmltYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKiogVGhlIGNvbG9yIG9mIHRoZSBwcm9ncmVzcy1zcGlubmVyLiBDYW4gYmUgcHJpbWFyeSwgYWNjZW50LCBvciB3YXJuLiAqL1xuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9jb2xvcjsgfVxuICAgIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogVmFsdWUgb2YgdGhlIHByb2dyZXNzIGNpcmNsZS4gSXQgaXMgYm91bmQgdG8gdGhlIGhvc3QgYXMgdGhlIGF0dHJpYnV0ZSBhcmlhLXZhbHVlbm93LiAqL1xuICAgIEBJbnB1dCgpXG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtdmFsdWVub3cnKVxuICAgIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXQgdmFsdWUodjogbnVtYmVyIHwgYW55KSB7XG4gICAgICAgIGlmICh2ICE9IG51bGwgJiYgdGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGNsYW1wKHYpO1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0ZUNpcmNsZSh0aGlzLnZhbHVlIHx8IDAsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIE1vZGUgb2YgdGhlIHByb2dyZXNzIGNpcmNsZVxuICAgICpcbiAgICAqIElucHV0IG11c3QgYmUgb25lIG9mIHRoZSB2YWx1ZXMgZnJvbSBQcm9ncmVzc01vZGUsIGRlZmF1bHRzIHRvICdkZXRlcm1pbmF0ZScuXG4gICAgKiBtb2RlIGlzIGJvdW5kIHRvIHRoZSBob3N0IGFzIHRoZSBhdHRyaWJ1dGUgaG9zdC5cbiAgICAqL1xuICAgIEBIb3N0QmluZGluZygnYXR0ci5tb2RlJylcbiAgICBASW5wdXQoKVxuICAgIGdldCBtb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgICB9XG4gICAgc2V0IG1vZGUobW9kZTogUHJvZ3Jlc3NTcGlubmVyTW9kZSkge1xuICAgICAgICBpZiAobW9kZSAhPT0gdGhpcy5fbW9kZSkge1xuICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdpbmRldGVybWluYXRlJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0SW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jbGVhbnVwSW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdGVDaXJjbGUoMCwgdGhpcy5fdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXG4gICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ/OiBzdHJpbmcgfCBhbnlcbiAgICApIHtcbiAgICAgICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICogQW5pbWF0ZXMgdGhlIGNpcmNsZSBmcm9tIG9uZSBwZXJjZW50YWdlIHZhbHVlIHRvIGFub3RoZXIuXG4gICAgKlxuICAgICogQHBhcmFtIGFuaW1hdGVGcm9tIFRoZSBwZXJjZW50YWdlIG9mIHRoZSBjaXJjbGUgZmlsbGVkIHN0YXJ0aW5nIHRoZSBhbmltYXRpb24uXG4gICAgKiBAcGFyYW0gYW5pbWF0ZVRvIFRoZSBwZXJjZW50YWdlIG9mIHRoZSBjaXJjbGUgZmlsbGVkIGVuZGluZyB0aGUgYW5pbWF0aW9uLlxuICAgICogQHBhcmFtIGVhc2UgVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtYW5hZ2UgdGhlIHBhY2Ugb2YgY2hhbmdlIGluIHRoZSBhbmltYXRpb24uXG4gICAgKiBAcGFyYW0gZHVyYXRpb24gVGhlIGxlbmd0aCBvZiB0aW1lIHRvIHNob3cgdGhlIGFuaW1hdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgICogQHBhcmFtIHJvdGF0aW9uIFRoZSBzdGFydGluZyBhbmdsZSBvZiB0aGUgY2lyY2xlIGZpbGwsIHdpdGggMMKwIHJlcHJlc2VudGVkIGF0IHRoZSB0b3AgY2VudGVyXG4gICAgKiAgICBvZiB0aGUgY2lyY2xlLlxuICAgICovXG4gICAgcHJpdmF0ZSBfYW5pbWF0ZUNpcmNsZShhbmltYXRlRnJvbTogbnVtYmVyLCBhbmltYXRlVG86IG51bWJlciwgZWFzZTogRWFzaW5nRm4gPSBsaW5lYXJFYXNlLFxuICAgICAgICBkdXJhdGlvbiA9IERVUkFUSU9OX0RFVEVSTUlOQVRFLCByb3RhdGlvbiA9IDApOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBpZCA9ICsrdGhpcy5fbGFzdEFuaW1hdGlvbklkO1xuICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBjaGFuZ2VJblZhbHVlID0gYW5pbWF0ZVRvIC0gYW5pbWF0ZUZyb207XG5cbiAgICAgICAgLy8gTm8gbmVlZCB0byBhbmltYXRlIGl0IGlmIHRoZSB2YWx1ZXMgYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChhbmltYXRlVG8gPT09IGFuaW1hdGVGcm9tKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJBcmMoYW5pbWF0ZVRvLCByb3RhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZFRpbWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihEYXRlLm5vdygpIC0gc3RhcnRUaW1lLCBkdXJhdGlvbikpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyQXJjKFxuICAgICAgICAgICAgICAgICAgICBlYXNlKGVsYXBzZWRUaW1lLCBhbmltYXRlRnJvbSwgY2hhbmdlSW5WYWx1ZSwgZHVyYXRpb24pLFxuICAgICAgICAgICAgICAgICAgICByb3RhdGlvblxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBQcmV2ZW50IG92ZXJsYXBwaW5nIGFuaW1hdGlvbnMgYnkgY2hlY2tpbmcgaWYgYSBuZXcgYW5pbWF0aW9uIGhhcyBiZWVuIGNhbGxlZCBmb3IgYW5kXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGFuaW1hdGlvbiBoYXMgbGFzdGVkIGxvbmdlciB0aGFuIHRoZSBhbmltYXRpb24gZHVyYXRpb24uXG4gICAgICAgICAgICAgICAgaWYgKGlkID09PSB0aGlzLl9sYXN0QW5pbWF0aW9uSWQgJiYgZWxhcHNlZFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBSdW4gdGhlIGFuaW1hdGlvbiBvdXRzaWRlIG9mIEFuZ3VsYXIncyB6b25lLCBpbiBvcmRlciB0byBhdm9pZFxuICAgICAgICAgICAgLy8gaGl0dGluZyBab25lSlMgYW5kIGNoYW5nZSBkZXRlY3Rpb24gb24gZWFjaCBmcmFtZS5cbiAgICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcihhbmltYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAqIFN0YXJ0cyB0aGUgaW5kZXRlcm1pbmF0ZSBhbmltYXRpb24gaW50ZXJ2YWwsIGlmIGl0IGlzIG5vdCBhbHJlYWR5IHJ1bm5pbmcuXG4gICAgKi9cbiAgICBwcml2YXRlIF9zdGFydEluZGV0ZXJtaW5hdGVBbmltYXRpb24oKTogdm9pZCB7XG4gICAgICAgIGxldCByb3RhdGlvblN0YXJ0UG9pbnQgPSAwO1xuICAgICAgICBsZXQgc3RhcnQgPSBzdGFydEluZGV0ZXJtaW5hdGU7XG4gICAgICAgIGxldCBlbmQgPSBlbmRJbmRldGVybWluYXRlO1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IERVUkFUSU9OX0lOREVURVJNSU5BVEU7XG4gICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRlQ2lyY2xlKHN0YXJ0LCBlbmQsIG1hdGVyaWFsRWFzZSwgZHVyYXRpb24sIHJvdGF0aW9uU3RhcnRQb2ludCk7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IHJvdGF0aW9uIGZyb20gcmVhY2hpbmcgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIuXG4gICAgICAgICAgICByb3RhdGlvblN0YXJ0UG9pbnQgPSAocm90YXRpb25TdGFydFBvaW50ICsgZW5kKSAlIDEwMDtcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBzdGFydDtcbiAgICAgICAgICAgIHN0YXJ0ID0gLWVuZDtcbiAgICAgICAgICAgIGVuZCA9IC10ZW1wO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoYW5pbWF0ZSwgZHVyYXRpb24gKyA1MCwgMCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgKiBSZW1vdmVzIGludGVydmFsLCBlbmRpbmcgdGhlIGFuaW1hdGlvbi5cbiAgICAqL1xuICAgIHByaXZhdGUgX2NsZWFudXBJbmRldGVybWluYXRlQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZW5kZXJzIHRoZSBhcmMgb250byB0aGUgU1ZHIGVsZW1lbnQuIFByb3hpZXMgYGdldEFyY2Agd2hpbGUgc2V0dGluZyB0aGUgcHJvcGVyXG4gICAgKiBET00gYXR0cmlidXRlIG9uIHRoZSBgPHBhdGg+YC5cbiAgICAqL1xuICAgIHByaXZhdGUgX3JlbmRlckFyYyhjdXJyZW50VmFsdWU6IG51bWJlciwgcm90YXRpb24gPSAwKTogdm9pZCB7XG4gICAgICAgIC8vIENhY2hlcyB0aGUgcGF0aCByZWZlcmVuY2Ugc28gaXQgZG9lc24ndCBoYXZlIHRvIGJlIGxvb2tlZCB1cCBldmVyeSB0aW1lLlxuICAgICAgICBjb25zdCBwYXRoID0gdGhpcy5fcGF0aCA9IHRoaXMuX3BhdGggfHwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3BhdGgnKTtcblxuICAgICAgICAvLyBFbnN1cmUgdGhhdCB0aGUgcGF0aCB3YXMgZm91bmQuIFRoaXMgbWF5IG5vdCBiZSB0aGUgY2FzZSBpZiB0aGVcbiAgICAgICAgLy8gYW5pbWF0aW9uIGZ1bmN0aW9uIGZpcmVzIHRvbyBlYXJseS5cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgZ2V0U3ZnQXJjKGN1cnJlbnRWYWx1ZSwgcm90YXRpb24pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogVXBkYXRlcyB0aGUgY29sb3Igb2YgdGhlIHByb2dyZXNzLXNwaW5uZXIgYnkgYWRkaW5nIHRoZSBuZXcgcGFsZXR0ZSBjbGFzcyB0byB0aGUgZWxlbWVudFxuICAgICogYW5kIHJlbW92aW5nIHRoZSBvbGQgb25lLlxuICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29sb3IobmV3Q29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9zZXRFbGVtZW50Q29sb3IodGhpcy5fY29sb3IsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5fc2V0RWxlbWVudENvbG9yKG5ld0NvbG9yLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fY29sb3IgPSBuZXdDb2xvcjtcbiAgICB9XG5cbiAgICAvKiogU2V0cyB0aGUgZ2l2ZW4gcGFsZXR0ZSBjbGFzcyBvbiB0aGUgY29tcG9uZW50IGVsZW1lbnQuICovXG4gICAgcHJpdmF0ZSBfc2V0RWxlbWVudENvbG9yKGNvbG9yOiBzdHJpbmcsIGlzQWRkOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChjb2xvciAhPSBudWxsICYmIGNvbG9yICE9PSAnJykge1xuICAgICAgICAgICAgLy8gdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG1hdC0ke2NvbG9yfWAsIGlzQWRkKTtcbiAgICAgICAgICAgIGlmIChpc0FkZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG1hdC0ke2NvbG9yfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKlxuICogPG1kLXNwaW5uZXI+IGNvbXBvbmVudC5cbiAqXG4gKiBUaGlzIGlzIGEgY29tcG9uZW50IGRlZmluaXRpb24gdG8gYmUgdXNlZCBhcyBhIGNvbnZlbmllbmNlIHJlZmVyZW5jZSB0byBjcmVhdGUgYW5cbiAqIGluZGV0ZXJtaW5hdGUgPG1kLXByb2dyZXNzLXNwaW5uZXI+IGluc3RhbmNlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ21kYi1zcGlubmVycywgbWF0LXNwaW5uZXIsIG1kYi1wcm9ncmVzcy1zcGlubmVyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWydwcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgTWRTcGlubmVyQ29tcG9uZW50IGV4dGVuZHMgTWRQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtc3Bpbm5lcicpIHRydWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIG5nWm9uZTogTmdab25lLCByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgICAgIHN1cGVyKG5nWm9uZSwgZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuICAgICAgICB0aGlzLm1vZGUgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIC8vIFRoZSBgbmdPbkRlc3Ryb3lgIGZyb20gYE1kUHJvZ3Jlc3NTcGlubmVyYCBzaG91bGQgYmUgY2FsbGVkIGV4cGxpY2l0bHksIGJlY2F1c2VcbiAgICAgICAgLy8gaW4gY2VydGFpbiBjYXNlcyBBbmd1bGFyIHdvbid0IGNhbGwgaXQgKGUuZy4gd2hlbiB1c2luZyBBb1QgYW5kIGluIHVuaXQgdGVzdHMpLlxuICAgICAgICBzdXBlci5uZ09uRGVzdHJveSgpO1xuICAgIH1cbn1cblxuXG4vKipcbiogTW9kdWxlIGZ1bmN0aW9ucy5cbiovXG5cbi8qKiBDbGFtcHMgYSB2YWx1ZSB0byBiZSBiZXR3ZWVuIDAgYW5kIDEwMC4gKi9cbmZ1bmN0aW9uIGNsYW1wKHY6IG51bWJlcikge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsIHYpKTtcbn1cblxuXG4vKipcbiogQ29udmVydHMgUG9sYXIgY29vcmRpbmF0ZXMgdG8gQ2FydGVzaWFuLlxuKi9cbmZ1bmN0aW9uIHBvbGFyVG9DYXJ0ZXNpYW4ocmFkaXVzOiBudW1iZXIsIHBhdGhSYWRpdXM6IG51bWJlciwgYW5nbGVJbkRlZ3JlZXM6IG51bWJlcikge1xuICAgIGNvbnN0IGFuZ2xlSW5SYWRpYW5zID0gKGFuZ2xlSW5EZWdyZWVzIC0gOTApICogREVHUkVFX0lOX1JBRElBTlM7XG5cbiAgICByZXR1cm4gKHJhZGl1cyArIChwYXRoUmFkaXVzICogTWF0aC5jb3MoYW5nbGVJblJhZGlhbnMpKSkgK1xuICAgICAgICAnLCcgKyAocmFkaXVzICsgKHBhdGhSYWRpdXMgKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucykpKTtcbn1cblxuXG4vKipcbiogRWFzaW5nIGZ1bmN0aW9uIGZvciBsaW5lYXIgYW5pbWF0aW9uLlxuKi9cbmZ1bmN0aW9uIGxpbmVhckVhc2UoY3VycmVudFRpbWU6IG51bWJlciwgc3RhcnRWYWx1ZTogbnVtYmVyLFxuICAgIGNoYW5nZUluVmFsdWU6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgIHJldHVybiBjaGFuZ2VJblZhbHVlICogY3VycmVudFRpbWUgLyBkdXJhdGlvbiArIHN0YXJ0VmFsdWU7XG59XG5cblxuLyoqXG4gKiBFYXNpbmcgZnVuY3Rpb24gdG8gbWF0Y2ggbWF0ZXJpYWwgZGVzaWduIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRlcmlhbEVhc2UoY3VycmVudFRpbWU6IG51bWJlciwgc3RhcnRWYWx1ZTogbnVtYmVyLFxuICAgIGNoYW5nZUluVmFsdWU6IG51bWJlciwgZHVyYXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IHRpbWUgPSBjdXJyZW50VGltZSAvIGR1cmF0aW9uO1xuICAgIGNvbnN0IHRpbWVDdWJlZCA9IE1hdGgucG93KHRpbWUsIDMpO1xuICAgIGNvbnN0IHRpbWVRdWFkID0gTWF0aC5wb3codGltZSwgNCk7XG4gICAgY29uc3QgdGltZVF1aW50ID0gTWF0aC5wb3codGltZSwgNSk7XG4gICAgcmV0dXJuIHN0YXJ0VmFsdWUgKyBjaGFuZ2VJblZhbHVlICogKCg2ICogdGltZVF1aW50KSArICgtMTUgKiB0aW1lUXVhZCkgKyAoMTAgKiB0aW1lQ3ViZWQpKTtcbn1cblxuXG4vKipcbiogRGV0ZXJtaW5lcyB0aGUgcGF0aCB2YWx1ZSB0byBkZWZpbmUgdGhlIGFyYy4gIENvbnZlcnRpbmcgcGVyY2VudGFnZSB2YWx1ZXMgdG8gdG8gcG9sYXJcbiogY29vcmRpbmF0ZXMgb24gdGhlIGNpcmNsZSwgYW5kIHRoZW4gdG8gY2FydGVzaWFuIGNvb3JkaW5hdGVzIGluIHRoZSB2aWV3cG9ydC5cbipcbiogQHBhcmFtIGN1cnJlbnRWYWx1ZSBUaGUgY3VycmVudCBwZXJjZW50YWdlIHZhbHVlIG9mIHRoZSBwcm9ncmVzcyBjaXJjbGUsIHRoZSBwZXJjZW50YWdlIG9mIHRoZVxuKiAgICBjaXJjbGUgdG8gZmlsbC5cbiogQHBhcmFtIHJvdGF0aW9uIFRoZSBzdGFydGluZyBwb2ludCBvZiB0aGUgY2lyY2xlIHdpdGggMCBiZWluZyB0aGUgMCBkZWdyZWUgcG9pbnQuXG4qIEByZXR1cm4gQSBzdHJpbmcgZm9yIGFuIFNWRyBwYXRoIHJlcHJlc2VudGluZyBhIGNpcmNsZSBmaWxsZWQgZnJvbSB0aGUgc3RhcnRpbmcgcG9pbnQgdG8gdGhlXG4qICAgIHBlcmNlbnRhZ2UgdmFsdWUgcHJvdmlkZWQuXG4qL1xuZnVuY3Rpb24gZ2V0U3ZnQXJjKGN1cnJlbnRWYWx1ZTogbnVtYmVyLCByb3RhdGlvbjogbnVtYmVyKSB7XG4gICAgY29uc3Qgc3RhcnRQb2ludCA9IHJvdGF0aW9uIHx8IDA7XG4gICAgY29uc3QgcmFkaXVzID0gNTA7XG4gICAgY29uc3QgcGF0aFJhZGl1cyA9IDQwO1xuXG4gICAgY29uc3Qgc3RhcnRBbmdsZSA9IHN0YXJ0UG9pbnQgKiBNQVhfQU5HTEU7XG4gICAgY29uc3QgZW5kQW5nbGUgPSBjdXJyZW50VmFsdWUgKiBNQVhfQU5HTEU7XG4gICAgY29uc3Qgc3RhcnQgPSBwb2xhclRvQ2FydGVzaWFuKHJhZGl1cywgcGF0aFJhZGl1cywgc3RhcnRBbmdsZSk7XG4gICAgY29uc3QgZW5kID0gcG9sYXJUb0NhcnRlc2lhbihyYWRpdXMsIHBhdGhSYWRpdXMsIGVuZEFuZ2xlICsgc3RhcnRBbmdsZSk7XG4gICAgY29uc3QgYXJjU3dlZXAgPSBlbmRBbmdsZSA8IDAgPyAwIDogMTtcbiAgICBsZXQgbGFyZ2VBcmNGbGFnOiBudW1iZXI7XG5cbiAgICBpZiAoZW5kQW5nbGUgPCAwKSB7XG4gICAgICAgIGxhcmdlQXJjRmxhZyA9IGVuZEFuZ2xlID49IC0xODAgPyAwIDogMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsYXJnZUFyY0ZsYWcgPSBlbmRBbmdsZSA8PSAxODAgPyAwIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gYE0ke3N0YXJ0fUEke3BhdGhSYWRpdXN9LCR7cGF0aFJhZGl1c30gMCAke2xhcmdlQXJjRmxhZ30sJHthcmNTd2VlcH0gJHtlbmR9YDtcbn1cbiJdfQ==