/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, ElementRef, Renderer2, forwardRef, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
/** @type {?} */
export var TIME_PIRCKER_VALUE_ACCESSOT = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return ClockPickerComponent; })),
    multi: true
};
var ClockPickerComponent = /** @class */ (function () {
    function ClockPickerComponent(elem, renderer, platformId) {
        var _this = this;
        this.elem = elem;
        this.renderer = renderer;
        this.twelvehour = false;
        this.darktheme = false;
        this.placeholder = '';
        this.label = '';
        this.duration = 300;
        this.showClock = false;
        this.disabled = false;
        this.isMobile = null;
        this.touchDevice = ('ontouchstart' in ((/** @type {?} */ (document.documentElement))));
        this.showHours = false;
        this.elements = document.getElementsByClassName('clockpicker');
        this.dialRadius = 135;
        this.outerRadius = 110;
        this.innerRadius = 80;
        this.tickRadius = 20;
        this.diameter = this.dialRadius * 2;
        this.isBrowser = false;
        this.hoursTicks = [];
        this.minutesTicks = [];
        this.selectedHours = { 'h': '12', 'm': '00', 'ampm': 'AM' };
        this.endHours = '';
        this.touchSupported = 'ontouchstart' in window;
        this.mousedownEvent = 'mousedown' + (this.touchSupported ? ' touchstart' : '');
        this.mousemoveEvent = 'mousemove' + (this.touchSupported ? ' touchmove' : '');
        this.mouseupEvent = 'mouseup' + (this.touchSupported ? ' touchend' : '');
        this.onChangeCb = (/**
         * @return {?}
         */
        function () { });
        this.onTouchedCb = (/**
         * @return {?}
         */
        function () { });
        this.isBrowser = isPlatformBrowser(platformId);
        renderer.listen(this.elem.nativeElement, 'click', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.showClock &&
                event.target &&
                _this.elem.nativeElement !== event.target &&
                !_this.elem.nativeElement.contains(event.target)) {
                _this.showClock = false;
            }
            if (event.target.classList.contains('picker__holder')) {
                _this.showClock = false;
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ClockPickerComponent.prototype.ontouchmove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Rotating Time Picker on mobile
        if (event.target.parentElement.classList.contains('clockpicker-dial')) {
            ((/** @type {?} */ (this.elem.nativeElement.querySelectorAll('.clockpicker-tick')))).forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                _this.renderer.setStyle(element, 'background-color', 'rgba(0, 150, 136, 0');
            }));
            this.mousedown(event);
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.generateTick();
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.renderer.listen(this.elem.nativeElement.querySelector('.clockpicker-plate'), 'mousedown', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.mousedown(event, false);
        }));
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isBrowser) {
            // Fix for visible date / time picker input when picker plate is visible.
            try {
                /** @type {?} */
                var openedPicker = document.querySelector('.picker--opened');
                /** @type {?} */
                var allPickers = document.querySelectorAll('.picker');
                allPickers.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                function (element) {
                    _this.renderer.setStyle(element, 'z-index', '0');
                }));
                this.renderer.setStyle(openedPicker, 'z-index', '1000');
            }
            catch (error) { }
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.checkDraw = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value;
        /** @type {?} */
        var isHours = this.showHours;
        if (isHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        /** @type {?} */
        var unit = Math.PI / (isHours ? 6 : 30);
        /** @type {?} */
        var radian = value * unit;
        /** @type {?} */
        var radius = isHours && value > 0 && value < 13 ? this.innerRadius : this.outerRadius;
        /** @type {?} */
        var xd = Math.sin(radian) * radius;
        /** @type {?} */
        var yd = -Math.cos(radian) * radius;
        this.setHand(xd, yd, false);
    };
    /**
     * @param {?} e
     * @param {?=} space
     * @return {?}
     */
    ClockPickerComponent.prototype.mousedown = /**
     * @param {?} e
     * @param {?=} space
     * @return {?}
     */
    function (e, space) {
        var _this = this;
        /** @type {?} */
        var offset = this.plate.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var isTouch = /^touch/.test(e.type);
        /** @type {?} */
        var x0 = offset.left + this.dialRadius;
        /** @type {?} */
        var y0 = offset.top + this.dialRadius;
        /** @type {?} */
        var dx = (isTouch ? e.touches[0] : e).clientX - x0;
        /** @type {?} */
        var dy = (isTouch ? e.touches[0] : e).clientY - y0;
        /** @type {?} */
        var z = Math.sqrt(dx * dx + dy * dy);
        /** @type {?} */
        var moved = false;
        if (space && (z < this.outerRadius - this.tickRadius || z > this.outerRadius + this.tickRadius)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this.showHours) {
            this.setHand(dx, dy, true);
        }
        else {
            this.setHand(dx, dy, false);
        }
        /** @type {?} */
        var mousemoveEventMethod = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.preventDefault();
            event.stopPropagation();
            /** @type {?} */
            var x = event.clientX - x0;
            /** @type {?} */
            var y = event.clientY - y0;
            if (!moved && x === dx && y === dy) {
                return;
            }
            moved = true;
            _this.setHand(x, y, false);
        });
        /** @type {?} */
        var mouseupEventMethod = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            document.removeEventListener(_this.mousemoveEvent, mousemoveEventMethod);
            e.preventDefault();
            /** @type {?} */
            var x = event.clientX - x0;
            /** @type {?} */
            var y = event.clientX - y0;
            if ((space || moved) && x === dx && y === dy) {
                _this.setHand(x, y, false);
            }
            _this.showMinutesClock();
            document.removeEventListener(_this.mouseupEvent, mouseupEventMethod);
        });
        document.addEventListener(this.mousemoveEvent, mousemoveEventMethod);
        document.addEventListener('mouseup', mouseupEventMethod);
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.hideKeyboard = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // this set timeout needed for case when hideKeyborad
        // is called inside of 'onfocus' event handler
        try {
            setTimeout((/**
             * @return {?}
             */
            function () {
                // creating temp field
                // const field = document.createElement('input');
                /** @type {?} */
                var field = _this.renderer.createElement('input');
                _this.renderer.appendChild(_this.elem.nativeElement, field);
                /** @type {?} */
                var inputReference = _this.elem.nativeElement.lastElementChild;
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setStyle(inputReference, 'opacity', '0');
                _this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                // // hiding temp field from peoples eyes
                // // -webkit-user-modify is nessesary for Android 4.x
                // adding onfocus event handler for out temp field
                field.onfocus = (/**
                 * @return {?}
                 */
                function () {
                    // this timeout of 200ms is nessasary for Android 2.3.x
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.renderer.setStyle(field, 'display', 'none');
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this.renderer.removeChild(_this.elem.nativeElement, field);
                            document.body.focus();
                        }), 0);
                    }), 0);
                });
                // focusing it
                field.focus();
            }), 0);
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.openBtnClicked = /**
     * @return {?}
     */
    function () {
        this.showClock = true;
        this.showHours = true;
        this.checkDraw();
        if (this.isMobile) {
            this.hideKeyboard();
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.closeBtnClicked = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var h = this.selectedHours.h;
        /** @type {?} */
        var m = this.selectedHours.m;
        /** @type {?} */
        var ampm = this.selectedHours.ampm;
        if (this.twelvehour) {
            this.endHours = h + ':' + m + ampm;
        }
        else {
            this.endHours = h + ':' + m;
        }
        this.onChangeCb(this.endHours);
        this.onTouchedCb();
        this.showClock = false;
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.clearTimeInput = /**
     * @return {?}
     */
    function () {
        this.selectedHours = { 'h': '12', 'm': '00', 'ampm': 'AM' };
        this.endHours = '';
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    ClockPickerComponent.prototype.setHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.selectedHours.h = hour;
    };
    /**
     * @param {?} min
     * @return {?}
     */
    ClockPickerComponent.prototype.setMinute = /**
     * @param {?} min
     * @return {?}
     */
    function (min) {
        // event.stopPropagation();
        this.selectedHours.m = min;
    };
    /**
     * @param {?} ampm
     * @return {?}
     */
    ClockPickerComponent.prototype.setAmPm = /**
     * @param {?} ampm
     * @return {?}
     */
    function (ampm) {
        // event.stopPropagation();
        this.selectedHours.ampm = ampm;
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.showHoursClock = /**
     * @return {?}
     */
    function () {
        this.showHours = true;
        this.checkDraw();
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.showMinutesClock = /**
     * @return {?}
     */
    function () {
        this.showHours = false;
        this.checkDraw();
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.generateTick = /**
     * @return {?}
     */
    function () {
        if (this.twelvehour) {
            for (var i = 1; i < 13; i++) {
                /** @type {?} */
                var radian = i / 6 * Math.PI;
                /** @type {?} */
                var radius = this.outerRadius;
                /** @type {?} */
                var tick = {
                    'hour': i,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        else {
            for (var i = 0; i < 24; i++) {
                /** @type {?} */
                var radian = i / 6 * Math.PI;
                /** @type {?} */
                var inner = i > 0 && i < 13;
                /** @type {?} */
                var radius = inner ? this.innerRadius : this.outerRadius;
                /** @type {?} */
                var h = void 0;
                if (i === 0) {
                    h = '0' + i.toString();
                }
                else {
                    h = i;
                }
                /** @type {?} */
                var tick = {
                    'hour': h,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        for (var i = 0; i < 60; i += 5) {
            /** @type {?} */
            var radian = i / 30 * Math.PI;
            /** @type {?} */
            var min = i.toString();
            if (i < 10) {
                min = '0' + i.toString();
            }
            /** @type {?} */
            var tick = {
                'min': min,
                'left': this.dialRadius + Math.sin(radian) * this.outerRadius - this.tickRadius,
                'top': this.dialRadius - Math.cos(radian) * this.outerRadius - this.tickRadius,
            };
            this.minutesTicks.push(tick);
        }
    };
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} roundBy5
     * @return {?}
     */
    ClockPickerComponent.prototype.setHand = /**
     * @param {?} x
     * @param {?} y
     * @param {?} roundBy5
     * @return {?}
     */
    function (x, y, roundBy5) {
        /** @type {?} */
        var radian = Math.atan2(x, -y);
        /** @type {?} */
        var isHours = this.showHours;
        /** @type {?} */
        var unit = Math.PI / (isHours || roundBy5 ? 6 : 30);
        /** @type {?} */
        var z = Math.sqrt(x * x + y * y);
        /** @type {?} */
        var inner = isHours && z < (this.outerRadius + this.innerRadius) / 2;
        /** @type {?} */
        var radius = inner ? this.innerRadius : this.outerRadius;
        /** @type {?} */
        var value;
        if (this.showHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        if (this.twelvehour) {
            radius = this.outerRadius;
        }
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        value = Math.round(radian / unit);
        radian = value * unit;
        if (this.twelvehour) {
            if (isHours) {
                if (value === 0) {
                    value = 12;
                }
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        else {
            if (isHours) {
                value = !inner ? value + 12 : value;
                value = value === 24 ? 0 : value;
                value = (inner && value === 0) ? 12 : value;
                value = (!inner && value === 12) ? 0 : value;
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        if (isHours) {
            this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
        }
        else {
            if (value % 5 === 0) {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
            }
            else {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg active');
            }
        }
        /** @type {?} */
        var cx1 = Math.sin(radian) * (radius - this.tickRadius);
        /** @type {?} */
        var cy1 = -Math.cos(radian) * (radius - this.tickRadius);
        /** @type {?} */
        var cx2 = Math.sin(radian) * radius;
        /** @type {?} */
        var cy2 = -Math.cos(radian) * radius;
        this.hand.nativeElement.setAttribute('x2', cx1);
        this.hand.nativeElement.setAttribute('y2', cy1);
        this.bg.nativeElement.setAttribute('cx', cx2);
        this.bg.nativeElement.setAttribute('cy', cy2);
        this.fg.nativeElement.setAttribute('cx', cx2);
        this.fg.nativeElement.setAttribute('cy', cy2);
        if (this.showHours) {
            if (value < 10) {
                this.setHour('0' + value.toString());
            }
            else {
                this.setHour(value.toString());
            }
        }
        else {
            if (value < 10) {
                this.setMinute('0' + value.toString());
            }
            else {
                this.setMinute(value.toString());
            }
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    ClockPickerComponent.prototype.offset = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        /** @type {?} */
        var left = 0;
        /** @type {?} */
        var top = 0;
        if (obj.offsetParent) {
            do {
                left += obj.offsetLeft;
                top += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return { left: left, top: top };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ClockPickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.endHours = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ClockPickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeCb = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ClockPickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCb = fn;
    };
    ClockPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-time-picker',
                    template: "<div class=\"tp\">\n  <div class=\"md-form\">\n    <label class=\"active\">{{ label }}</label>\n    <input [disabled]=\"disabled\" [tabindex]=\"tabIndex\" [placeholder]=\"placeholder\" [value]=\"endHours\" type=\"text\" class=\"form-control timepicker\" (click)=\"openBtnClicked()\" [(ngModel)]=\"endHours\">\n  </div>\n  <div class=\"clockpicker picker\" [hidden]=\"!showClock\" [ngClass]=\"{'picker--opened': showClock, 'darktheme': darktheme}\">\n    <div class=\"picker__holder\">\n      <div class=\"picker__frame\">\n        <div class=\"picker__wrap\">\n          <div class=\"picker__box\">\n            <div class=\"picker__date-display\">\n              <div class=\"clockpicker-display\">\n                <div class=\"clockpicker-display-column\">\n                  <span class=\"clockpicker-span-hours text-primary\" [ngClass]=\"{'text-primary': showHours}\" (click)=\"showHoursClock()\">\n                    {{ selectedHours.h }}</span>:<span class=\"clockpicker-span-minutes\" [ngClass]=\"{'text-primary': !showHours}\"\n                      (click)=\"showMinutesClock()\">{{selectedHours.m }}</span>\n                </div>\n                <div class=\"clockpicker-display-column clockpicker-display-am-pm\" *ngIf=\"twelvehour\">\n                  <div class=\"clockpicker-span-am-pm\">{{ selectedHours.ampm }}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"picker__calendar-container\">\n              <div class=\"clockpicker-plate\" #plate>\n                  <div class=\"clockpicker-canvas\">\n                  <svg class=\"clockpicker-svg\" width=\"270\" height=\"270\" #svg>\n                      <g transform=\"translate(135,135)\" #g>\n                      <line x1=\"0\" y1=\"0\" x2=\"77.94228634059948\" y2=\"-45.00000000000001\" #hand></line>\n                      <circle class=\"clockpicker-canvas-fg\" r=\"5\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #fg></circle>\n                      <circle class=\"clockpicker-canvas-bg\" r=\"20\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #bg></circle>\n                      <circle class=\"clockpicker-canvas-bearing\" cx=\"0\" cy=\"0\" r=\"2\" #bearing></circle>\n                      </g>\n                  </svg>\n                  </div>\n                  <div class=\"clockpicker-dial clockpicker-hours\" #hoursPlate [ngClass]=\"{'clockpicker-dial-out': !showHours}\" [ngStyle]=\"{'visibility': !showHours ? 'hidden' : 'visible'}\">\n                  <div *ngFor=\"let tick of hoursTicks\" class=\"clockpicker-tick\" style=\"font-size: 140%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\"\n                      id=\"{{ tick.hour }}\">\n                      {{ tick.hour }}\n                  </div>\n                  </div>\n                  <div class=\"clockpicker-dial clockpicker-minutes\" #minutesPlate [ngClass]=\"{'clockpicker-dial-out': showHours}\" [ngStyle]=\"{'visibility': showHours ? 'hidden' : 'visible'}\">\n                  <div *ngFor=\"let tick of minutesTicks\" class=\"clockpicker-tick\" style=\"font-size: 120%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\">\n                      {{ tick.min }}\n                  </div>\n                  </div>\n              </div>\n              <div class=\"clockpicker-am-pm-block\" *ngIf=\"twelvehour\">\n                <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button am-button\" [ngClass]=\"{'active': selectedHours.ampm=='AM'}\"\n                  (click)=\"setAmPm('AM')\">\n                  AM\n                </button>\n                <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button pm-button\" [ngClass]=\"{'active': selectedHours.ampm=='PM'}\"\n                  (click)=\"setAmPm('PM')\">\n                  PM\n                </button>\n              </div>\n            </div>\n            <div class=\"picker__footer\">\n              <button type=\"button\" *ngIf=\"buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\">\n                {{buttonLabel}}\n              </button>\n              <button type=\"button\" *ngIf=\"!buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\">\n                Done\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                    providers: [TIME_PIRCKER_VALUE_ACCESSOT]
                }] }
    ];
    /** @nocollapse */
    ClockPickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ClockPickerComponent.propDecorators = {
        hoursPlate: [{ type: ViewChild, args: ['hoursPlate',] }],
        minutesPlate: [{ type: ViewChild, args: ['minutesPlate',] }],
        plate: [{ type: ViewChild, args: ['plate',] }],
        svg: [{ type: ViewChild, args: ['svg',] }],
        g: [{ type: ViewChild, args: ['g',] }],
        hand: [{ type: ViewChild, args: ['hand',] }],
        fg: [{ type: ViewChild, args: ['fg',] }],
        bg: [{ type: ViewChild, args: ['bg',] }],
        bearing: [{ type: ViewChild, args: ['bearing',] }],
        twelvehour: [{ type: Input, args: ['twelvehour',] }],
        darktheme: [{ type: Input, args: ['darktheme',] }],
        placeholder: [{ type: Input, args: ['placeholder',] }],
        label: [{ type: Input, args: ['label',] }],
        duration: [{ type: Input, args: ['duration',] }],
        showClock: [{ type: Input, args: ['showClock',] }],
        buttonLabel: [{ type: Input }],
        disabled: [{ type: Input }],
        tabIndex: [{ type: Input }],
        ontouchmove: [{ type: HostListener, args: ['touchmove', ['$event'],] }]
    };
    return ClockPickerComponent;
}());
export { ClockPickerComponent };
if (false) {
    /** @type {?} */
    ClockPickerComponent.prototype.hoursPlate;
    /** @type {?} */
    ClockPickerComponent.prototype.minutesPlate;
    /** @type {?} */
    ClockPickerComponent.prototype.plate;
    /** @type {?} */
    ClockPickerComponent.prototype.svg;
    /** @type {?} */
    ClockPickerComponent.prototype.g;
    /** @type {?} */
    ClockPickerComponent.prototype.hand;
    /** @type {?} */
    ClockPickerComponent.prototype.fg;
    /** @type {?} */
    ClockPickerComponent.prototype.bg;
    /** @type {?} */
    ClockPickerComponent.prototype.bearing;
    /** @type {?} */
    ClockPickerComponent.prototype.twelvehour;
    /** @type {?} */
    ClockPickerComponent.prototype.darktheme;
    /** @type {?} */
    ClockPickerComponent.prototype.placeholder;
    /** @type {?} */
    ClockPickerComponent.prototype.label;
    /** @type {?} */
    ClockPickerComponent.prototype.duration;
    /** @type {?} */
    ClockPickerComponent.prototype.showClock;
    /** @type {?} */
    ClockPickerComponent.prototype.buttonLabel;
    /** @type {?} */
    ClockPickerComponent.prototype.disabled;
    /** @type {?} */
    ClockPickerComponent.prototype.tabIndex;
    /** @type {?} */
    ClockPickerComponent.prototype.isMobile;
    /** @type {?} */
    ClockPickerComponent.prototype.touchDevice;
    /** @type {?} */
    ClockPickerComponent.prototype.showHours;
    /** @type {?} */
    ClockPickerComponent.prototype.elements;
    /** @type {?} */
    ClockPickerComponent.prototype.elementNumber;
    /** @type {?} */
    ClockPickerComponent.prototype.dialRadius;
    /** @type {?} */
    ClockPickerComponent.prototype.outerRadius;
    /** @type {?} */
    ClockPickerComponent.prototype.innerRadius;
    /** @type {?} */
    ClockPickerComponent.prototype.tickRadius;
    /** @type {?} */
    ClockPickerComponent.prototype.diameter;
    /** @type {?} */
    ClockPickerComponent.prototype.isBrowser;
    /** @type {?} */
    ClockPickerComponent.prototype.hoursTicks;
    /** @type {?} */
    ClockPickerComponent.prototype.minutesTicks;
    /** @type {?} */
    ClockPickerComponent.prototype.selectedHours;
    /** @type {?} */
    ClockPickerComponent.prototype.endHours;
    /** @type {?} */
    ClockPickerComponent.prototype.touchSupported;
    /** @type {?} */
    ClockPickerComponent.prototype.mousedownEvent;
    /** @type {?} */
    ClockPickerComponent.prototype.mousemoveEvent;
    /** @type {?} */
    ClockPickerComponent.prototype.mouseupEvent;
    /** @type {?} */
    ClockPickerComponent.prototype.onChangeCb;
    /** @type {?} */
    ClockPickerComponent.prototype.onTouchedCb;
    /** @type {?} */
    ClockPickerComponent.prototype.elem;
    /** @type {?} */
    ClockPickerComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3RpbWUtcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFHVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFFWCxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVwRCxNQUFNLEtBQU8sMkJBQTJCLEdBQVE7SUFDNUMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixFQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ2Q7QUFHRDtJQXFESSw4QkFBbUIsSUFBZ0IsRUFBUyxRQUFtQixFQUF1QixVQUFrQjtRQUF4RyxpQkFlQztRQWZrQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQW5DbkMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQy9CLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDUixhQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVwQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRzFCLGFBQVEsR0FBUSxJQUFJLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxlQUFl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QUMsYUFBYTt3QkFDbkIsS0FBSyxTQUFDLE9BQU87MkJBQ2IsS0FBSyxTQUFDLFVBQVU7NEJBQ2hCLEtBQUssU0FBQyxXQUFXOzhCQUNqQixLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzs4QkE2Q0wsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFxWHpDLDJCQUFDO0NBQUEsQUE1YkQsSUE0YkM7U0F0Ylksb0JBQW9COzs7SUFDN0IsMENBQXVEOztJQUN2RCw0Q0FBMkQ7O0lBRTNELHFDQUE2Qzs7SUFDN0MsbUNBQXlDOztJQUN6QyxpQ0FBcUM7O0lBQ3JDLG9DQUEyQzs7SUFDM0Msa0NBQXVDOztJQUN2QyxrQ0FBdUM7O0lBQ3ZDLHVDQUFpRDs7SUFFakQsMENBQStDOztJQUMvQyx5Q0FBNkM7O0lBQzdDLDJDQUFzRDs7SUFDdEQscUNBQWtDOztJQUNsQyx3Q0FBeUM7O0lBQ3pDLHlDQUE2Qzs7SUFDN0MsMkNBQW9DOztJQUNwQyx3Q0FBMEI7O0lBQzFCLHdDQUF1Qjs7SUFFdkIsd0NBQXFCOztJQUNyQiwyQ0FBb0U7O0lBQ3BFLHlDQUFrQjs7SUFFbEIsd0NBQWlFOztJQUNqRSw2Q0FBMEI7O0lBRTFCLDBDQUFpQjs7SUFDakIsMkNBQWtCOztJQUNsQiwyQ0FBaUI7O0lBQ2pCLDBDQUFnQjs7SUFDaEIsd0NBQStCOztJQUMvQix5Q0FBdUI7O0lBRXZCLDBDQUFxQjs7SUFDckIsNENBQXVCOztJQUN2Qiw2Q0FBNEQ7O0lBQzVELHdDQUFjOztJQUdkLDhDQUErQzs7SUFDL0MsOENBQStFOztJQUMvRSw4Q0FBOEU7O0lBQzlFLDRDQUF5RTs7SUEyWHpFLDBDQUF5Qzs7SUFDekMsMkNBQW9DOztJQTFYeEIsb0NBQXVCOztJQUFFLHdDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbiAgICBJbnB1dCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBSZW5kZXJlcjIsXHJcbiAgICBPbkluaXQsXHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgZm9yd2FyZFJlZixcclxuICAgIEluamVjdCxcclxuICAgIFBMQVRGT1JNX0lELFxyXG4gICAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICAgIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBUSU1FX1BJUkNLRVJfVkFMVUVfQUNDRVNTT1Q6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2xvY2tQaWNrZXJDb21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWRiLXRpbWUtcGlja2VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90aW1lcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHByb3ZpZGVyczogW1RJTUVfUElSQ0tFUl9WQUxVRV9BQ0NFU1NPVF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDbG9ja1BpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gICAgQFZpZXdDaGlsZCgnaG91cnNQbGF0ZScpIHB1YmxpYyBob3Vyc1BsYXRlOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnbWludXRlc1BsYXRlJykgcHVibGljIG1pbnV0ZXNQbGF0ZTogRWxlbWVudFJlZjtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdwbGF0ZScpIHB1YmxpYyBwbGF0ZTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3N2ZycpIHB1YmxpYyBzdmc6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdnJykgcHVibGljIGc6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdoYW5kJykgcHVibGljIGhhbmQ6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdmZycpIHB1YmxpYyBmZzogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ2JnJykgcHVibGljIGJnOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnYmVhcmluZycpIHB1YmxpYyBiZWFyaW5nOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIEBJbnB1dCgndHdlbHZlaG91cicpIHB1YmxpYyB0d2VsdmVob3VyID0gZmFsc2U7XHJcbiAgICBASW5wdXQoJ2Rhcmt0aGVtZScpIHB1YmxpYyBkYXJrdGhlbWUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgncGxhY2Vob2xkZXInKSBwdWJsaWMgcGxhY2Vob2xkZXI6IFN0cmluZyA9ICcnO1xyXG4gICAgQElucHV0KCdsYWJlbCcpIHB1YmxpYyBsYWJlbCA9ICcnO1xyXG4gICAgQElucHV0KCdkdXJhdGlvbicpIHB1YmxpYyBkdXJhdGlvbiA9IDMwMDtcclxuICAgIEBJbnB1dCgnc2hvd0Nsb2NrJykgcHVibGljIHNob3dDbG9jayA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcHVibGljIGJ1dHRvbkxhYmVsOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgdGFiSW5kZXg6IGFueTtcclxuXHJcbiAgICBpc01vYmlsZTogYW55ID0gbnVsbDtcclxuICAgIHRvdWNoRGV2aWNlID0gKCdvbnRvdWNoc3RhcnQnIGluIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgYW55KSk7XHJcbiAgICBzaG93SG91cnMgPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9ja3BpY2tlcicpO1xyXG4gICAgcHVibGljIGVsZW1lbnROdW1iZXI6IGFueTtcclxuXHJcbiAgICBkaWFsUmFkaXVzID0gMTM1O1xyXG4gICAgb3V0ZXJSYWRpdXMgPSAxMTA7XHJcbiAgICBpbm5lclJhZGl1cyA9IDgwO1xyXG4gICAgdGlja1JhZGl1cyA9IDIwO1xyXG4gICAgZGlhbWV0ZXIgPSB0aGlzLmRpYWxSYWRpdXMgKiAyO1xyXG4gICAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcclxuXHJcbiAgICBob3Vyc1RpY2tzOiBhbnkgPSBbXTtcclxuICAgIG1pbnV0ZXNUaWNrczogYW55ID0gW107XHJcbiAgICBzZWxlY3RlZEhvdXJzOiBhbnkgPSB7ICdoJzogJzEyJywgJ20nOiAnMDAnLCAnYW1wbSc6ICdBTScgfTtcclxuICAgIGVuZEhvdXJzID0gJyc7XHJcblxyXG5cclxuICAgIHRvdWNoU3VwcG9ydGVkOiBhbnkgPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XHJcbiAgICBtb3VzZWRvd25FdmVudDogYW55ID0gJ21vdXNlZG93bicgKyAodGhpcy50b3VjaFN1cHBvcnRlZCA/ICcgdG91Y2hzdGFydCcgOiAnJyk7XHJcbiAgICBtb3VzZW1vdmVFdmVudDogYW55ID0gJ21vdXNlbW92ZScgKyAodGhpcy50b3VjaFN1cHBvcnRlZCA/ICcgdG91Y2htb3ZlJyA6ICcnKTtcclxuICAgIG1vdXNldXBFdmVudDogYW55ID0gJ21vdXNldXAnICsgKHRoaXMudG91Y2hTdXBwb3J0ZWQgPyAnIHRvdWNoZW5kJyA6ICcnKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbTogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XHJcbiAgICAgICAgcmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvd0Nsb2NrICYmXHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcclxuICAgICAgICAgICAgICAgICF0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q2xvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGlja2VyX19ob2xkZXInKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q2xvY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCd0b3VjaG1vdmUnLCBbJyRldmVudCddKSBvbnRvdWNobW92ZShldmVudDogYW55KSB7XHJcbiAgICAgICAgLy8gUm90YXRpbmcgVGltZSBQaWNrZXIgb24gbW9iaWxlXHJcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY2xvY2twaWNrZXItZGlhbCcpKSB7XHJcbiAgICAgICAgICAgICh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvY2twaWNrZXItdGljaycpIGFzIGFueSkuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoMCwgMTUwLCAxMzYsIDAnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2Vkb3duKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVRpY2soKTtcclxuICAgICAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNsb2NrcGlja2VyLXBsYXRlJyksICdtb3VzZWRvd24nLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlZG93bihldmVudCwgZmFsc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgICAgICAgLy8gRml4IGZvciB2aXNpYmxlIGRhdGUgLyB0aW1lIHBpY2tlciBpbnB1dCB3aGVuIHBpY2tlciBwbGF0ZSBpcyB2aXNpYmxlLlxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BlbmVkUGlja2VyOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGlja2VyLS1vcGVuZWQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFBpY2tlcnM6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waWNrZXInKTtcclxuICAgICAgICAgICAgICAgIGFsbFBpY2tlcnMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnei1pbmRleCcsICcwJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUob3BlbmVkUGlja2VyLCAnei1pbmRleCcsICcxMDAwJyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tEcmF3KCkge1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICBjb25zdCBpc0hvdXJzID0gdGhpcy5zaG93SG91cnM7XHJcbiAgICAgICAgaWYgKGlzSG91cnMpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh0aGlzLnNlbGVjdGVkSG91cnMuaCwgMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh0aGlzLnNlbGVjdGVkSG91cnMubSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgdW5pdCA9IE1hdGguUEkgLyAoaXNIb3VycyA/IDYgOiAzMCksXHJcbiAgICAgICAgICAgIHJhZGlhbiA9IHZhbHVlICogdW5pdCxcclxuICAgICAgICAgICAgcmFkaXVzID0gaXNIb3VycyAmJiB2YWx1ZSA+IDAgJiYgdmFsdWUgPCAxMyA/IHRoaXMuaW5uZXJSYWRpdXMgOiB0aGlzLm91dGVyUmFkaXVzLFxyXG4gICAgICAgICAgICB4ZCA9IE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMsXHJcbiAgICAgICAgICAgIHlkID0gLSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzO1xyXG4gICAgICAgIHRoaXMuc2V0SGFuZCh4ZCwgeWQsIGZhbHNlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbW91c2Vkb3duKGU6IGFueSwgc3BhY2U/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLnBsYXRlLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgIGlzVG91Y2ggPSAvXnRvdWNoLy50ZXN0KGUudHlwZSksXHJcbiAgICAgICAgICAgIHgwID0gb2Zmc2V0LmxlZnQgKyB0aGlzLmRpYWxSYWRpdXMsXHJcbiAgICAgICAgICAgIHkwID0gb2Zmc2V0LnRvcCArIHRoaXMuZGlhbFJhZGl1cyxcclxuICAgICAgICAgICAgZHggPSAoaXNUb3VjaCA/IGUudG91Y2hlc1swXSA6IGUpLmNsaWVudFggLSB4MCxcclxuICAgICAgICAgICAgZHkgPSAoaXNUb3VjaCA/IGUudG91Y2hlc1swXSA6IGUpLmNsaWVudFkgLSB5MCxcclxuICAgICAgICAgICAgeiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICAgICAgbGV0IG1vdmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChzcGFjZSAmJiAoeiA8IHRoaXMub3V0ZXJSYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMgfHwgeiA+IHRoaXMub3V0ZXJSYWRpdXMgKyB0aGlzLnRpY2tSYWRpdXMpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93SG91cnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIYW5kKGR4LCBkeSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRIYW5kKGR4LCBkeSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW91c2Vtb3ZlRXZlbnRNZXRob2QgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0geDAsXHJcbiAgICAgICAgICAgICAgICB5ID0gZXZlbnQuY2xpZW50WSAtIHkwO1xyXG4gICAgICAgICAgICBpZiAoIW1vdmVkICYmIHggPT09IGR4ICYmIHkgPT09IGR5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRIYW5kKHgsIHksIGZhbHNlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBtb3VzZXVwRXZlbnRNZXRob2QgPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW91c2Vtb3ZlRXZlbnQsIG1vdXNlbW92ZUV2ZW50TWV0aG9kKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHgwLFxyXG4gICAgICAgICAgICAgICAgeSA9IGV2ZW50LmNsaWVudFggLSB5MDtcclxuICAgICAgICAgICAgaWYgKChzcGFjZSB8fCBtb3ZlZCkgJiYgeCA9PT0gZHggJiYgeSA9PT0gZHkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SGFuZCh4LCB5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaG93TWludXRlc0Nsb2NrKCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3VzZXVwRXZlbnQsIG1vdXNldXBFdmVudE1ldGhvZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW91c2Vtb3ZlRXZlbnQsIG1vdXNlbW92ZUV2ZW50TWV0aG9kKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2V1cEV2ZW50TWV0aG9kKTtcclxuICAgIH1cclxuICAgIGhpZGVLZXlib2FyZCgpIHtcclxuICAgICAgICAvLyB0aGlzIHNldCB0aW1lb3V0IG5lZWRlZCBmb3IgY2FzZSB3aGVuIGhpZGVLZXlib3JhZFxyXG4gICAgICAgIC8vIGlzIGNhbGxlZCBpbnNpZGUgb2YgJ29uZm9jdXMnIGV2ZW50IGhhbmRsZXJcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0aW5nIHRlbXAgZmllbGRcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRSZWZlcmVuY2UgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXRSZWZlcmVuY2UsICd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0UmVmZXJlbmNlLCAndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlucHV0UmVmZXJlbmNlLCAnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlucHV0UmVmZXJlbmNlLCAnLXdlYmtpdC11c2VyLW1vZGlmeScsICdyZWFkLXdyaXRlLXBsYWludGV4dC1vbmx5Jyk7XHJcbiAgICAgICAgICAgICAgICAvLyAvLyBoaWRpbmcgdGVtcCBmaWVsZCBmcm9tIHBlb3BsZXMgZXllc1xyXG4gICAgICAgICAgICAgICAgLy8gLy8gLXdlYmtpdC11c2VyLW1vZGlmeSBpcyBuZXNzZXNhcnkgZm9yIEFuZHJvaWQgNC54XHJcbiAgICAgICAgICAgICAgICAvLyBhZGRpbmcgb25mb2N1cyBldmVudCBoYW5kbGVyIGZvciBvdXQgdGVtcCBmaWVsZFxyXG4gICAgICAgICAgICAgICAgZmllbGQub25mb2N1cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHRpbWVvdXQgb2YgMjAwbXMgaXMgbmVzc2FzYXJ5IGZvciBBbmRyb2lkIDIuMy54XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGZpZWxkLCAnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgLy8gZm9jdXNpbmcgaXRcclxuICAgICAgICAgICAgICAgIGZpZWxkLmZvY3VzKCk7XHJcblxyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zaG93Q2xvY2sgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd0hvdXJzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrRHJhdygpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUtleWJvYXJkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbG9zZUJ0bkNsaWNrZWQoKSB7XHJcbiAgICAgICAgY29uc3QgaCA9IHRoaXMuc2VsZWN0ZWRIb3Vycy5oO1xyXG4gICAgICAgIGNvbnN0IG0gPSB0aGlzLnNlbGVjdGVkSG91cnMubTtcclxuICAgICAgICBjb25zdCBhbXBtID0gdGhpcy5zZWxlY3RlZEhvdXJzLmFtcG07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRIb3VycyA9IGggKyAnOicgKyBtICsgYW1wbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEhvdXJzID0gaCArICc6JyArIG07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYih0aGlzLmVuZEhvdXJzKTtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICAgICAgdGhpcy5zaG93Q2xvY2sgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclRpbWVJbnB1dCgpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSG91cnMgPSB7ICdoJzogJzEyJywgJ20nOiAnMDAnLCAnYW1wbSc6ICdBTScgfTtcclxuICAgICAgICB0aGlzLmVuZEhvdXJzID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SG91cihob3VyOiBTdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSG91cnMuaCA9IGhvdXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWludXRlKG1pbjogU3RyaW5nKSB7XHJcbiAgICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEhvdXJzLm0gPSBtaW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW1QbShhbXBtOiBTdHJpbmcpIHtcclxuICAgICAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSG91cnMuYW1wbSA9IGFtcG07XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0hvdXJzQ2xvY2soKSB7XHJcbiAgICAgICAgdGhpcy5zaG93SG91cnMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tEcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd01pbnV0ZXNDbG9jaygpIHtcclxuICAgICAgICB0aGlzLnNob3dIb3VycyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hlY2tEcmF3KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdlbmVyYXRlVGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy50d2VsdmVob3VyKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaWFuID0gaSAvIDYgKiBNYXRoLlBJO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gdGhpcy5vdXRlclJhZGl1cztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICdob3VyJzogaSxcclxuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6IHRoaXMuZGlhbFJhZGl1cyArIE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6IHRoaXMuZGlhbFJhZGl1cyAtIE1hdGguY29zKHJhZGlhbikgKiByYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3Vyc1RpY2tzLnB1c2godGljayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlhbiA9IGkgLyA2ICogTWF0aC5QSTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyID0gaSA+IDAgJiYgaSA8IDEzO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gaW5uZXIgPyB0aGlzLmlubmVyUmFkaXVzIDogdGhpcy5vdXRlclJhZGl1cztcclxuICAgICAgICAgICAgICAgIGxldCBoO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9ICcwJyArIGkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaCA9IGk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGljayA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnaG91cic6IGgsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiB0aGlzLmRpYWxSYWRpdXMgKyBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiB0aGlzLmRpYWxSYWRpdXMgLSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG91cnNUaWNrcy5wdXNoKHRpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpICs9IDUpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaWFuID0gaSAvIDMwICogTWF0aC5QSTtcclxuICAgICAgICAgICAgbGV0IG1pbiA9IGkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKGkgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgbWluID0gJzAnICsgaS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRpY2sgPSB7XHJcbiAgICAgICAgICAgICAgICAnbWluJzogbWluLFxyXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiB0aGlzLmRpYWxSYWRpdXMgKyBNYXRoLnNpbihyYWRpYW4pICogdGhpcy5vdXRlclJhZGl1cyAtIHRoaXMudGlja1JhZGl1cyxcclxuICAgICAgICAgICAgICAgICd0b3AnOiB0aGlzLmRpYWxSYWRpdXMgLSBNYXRoLmNvcyhyYWRpYW4pICogdGhpcy5vdXRlclJhZGl1cyAtIHRoaXMudGlja1JhZGl1cyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5taW51dGVzVGlja3MucHVzaCh0aWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEhhbmQoeDogYW55LCB5OiBhbnksIHJvdW5kQnk1OiBhbnkpIHtcclxuICAgICAgICBsZXQgcmFkaWFuID0gTWF0aC5hdGFuMih4LCAtIHkpO1xyXG4gICAgICAgIGNvbnN0IGlzSG91cnMgPSB0aGlzLnNob3dIb3VycztcclxuICAgICAgICBjb25zdCB1bml0ID0gTWF0aC5QSSAvIChpc0hvdXJzIHx8IHJvdW5kQnk1ID8gNiA6IDMwKTtcclxuICAgICAgICBjb25zdCB6ID0gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xyXG4gICAgICAgIGNvbnN0IGlubmVyID0gaXNIb3VycyAmJiB6IDwgKHRoaXMub3V0ZXJSYWRpdXMgKyB0aGlzLmlubmVyUmFkaXVzKSAvIDI7XHJcbiAgICAgICAgbGV0IHJhZGl1cyA9IGlubmVyID8gdGhpcy5pbm5lclJhZGl1cyA6IHRoaXMub3V0ZXJSYWRpdXM7XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0hvdXJzKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodGhpcy5zZWxlY3RlZEhvdXJzLmgsIDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodGhpcy5zZWxlY3RlZEhvdXJzLm0sIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudHdlbHZlaG91cikge1xyXG4gICAgICAgICAgICByYWRpdXMgPSB0aGlzLm91dGVyUmFkaXVzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJhZGlhbiA8IDApIHtcclxuICAgICAgICAgICAgcmFkaWFuID0gTWF0aC5QSSAqIDIgKyByYWRpYW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YWx1ZSA9IE1hdGgucm91bmQocmFkaWFuIC8gdW5pdCk7XHJcbiAgICAgICAgcmFkaWFuID0gdmFsdWUgKiB1bml0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy50d2VsdmVob3VyKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0hvdXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDEyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvdW5kQnk1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKj0gNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gNjApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXNIb3Vycykge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAhaW5uZXIgPyB2YWx1ZSArIDEyIDogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSAyNCA/IDAgOiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gKGlubmVyICYmIHZhbHVlID09PSAwKSA/IDEyIDogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICghaW5uZXIgJiYgdmFsdWUgPT09IDEyKSA/IDAgOiB2YWx1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3VuZEJ5NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICo9IDU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IDYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaXNIb3Vycykge1xyXG4gICAgICAgICAgICB0aGlzLmZnLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjbG9ja3BpY2tlci1jYW52YXMtZmcnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgJSA1ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZnLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjbG9ja3BpY2tlci1jYW52YXMtZmcnKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmcubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nsb2NrcGlja2VyLWNhbnZhcy1mZyBhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3gxID0gTWF0aC5zaW4ocmFkaWFuKSAqIChyYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMpLFxyXG4gICAgICAgICAgICBjeTEgPSAtIE1hdGguY29zKHJhZGlhbikgKiAocmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzKSxcclxuICAgICAgICAgICAgY3gyID0gTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyxcclxuICAgICAgICAgICAgY3kyID0gLSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3gyJywgY3gxKTtcclxuICAgICAgICB0aGlzLmhhbmQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3kyJywgY3kxKTtcclxuICAgICAgICB0aGlzLmJnLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeCcsIGN4Mik7XHJcbiAgICAgICAgdGhpcy5iZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3knLCBjeTIpO1xyXG4gICAgICAgIHRoaXMuZmcubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N4JywgY3gyKTtcclxuICAgICAgICB0aGlzLmZnLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeScsIGN5Mik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dIb3Vycykge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRIb3VyKCcwJyArIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRIb3VyKHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWludXRlKCcwJyArIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNaW51dGUodmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2Zmc2V0KG9iajogYW55KSB7XHJcbiAgICAgICAgbGV0IGxlZnQgPSAwLFxyXG4gICAgICAgICAgICB0b3AgPSAwO1xyXG5cclxuICAgICAgICBpZiAob2JqLm9mZnNldFBhcmVudCkge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IG9iai5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgdG9wICs9IG9iai5vZmZzZXRUb3A7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKG9iaiA9IG9iai5vZmZzZXRQYXJlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBsZWZ0LCB0b3AgfTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG9uQ2hhbmdlQ2I6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcbiAgICBvblRvdWNoZWRDYjogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmVuZEhvdXJzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNiID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaGVkQ2IgPSBmbjtcclxuICAgIH1cclxufVxyXG4iXX0=