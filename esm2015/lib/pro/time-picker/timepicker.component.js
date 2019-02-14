/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, ElementRef, Renderer2, forwardRef, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
/** @type {?} */
export const TIME_PIRCKER_VALUE_ACCESSOT = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => ClockPickerComponent)),
    multi: true
};
export class ClockPickerComponent {
    /**
     * @param {?} elem
     * @param {?} renderer
     * @param {?} platformId
     */
    constructor(elem, renderer, platformId) {
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
        () => { });
        this.onTouchedCb = (/**
         * @return {?}
         */
        () => { });
        this.isBrowser = isPlatformBrowser(platformId);
        renderer.listen(this.elem.nativeElement, 'click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this.showClock &&
                event.target &&
                this.elem.nativeElement !== event.target &&
                !this.elem.nativeElement.contains(event.target)) {
                this.showClock = false;
            }
            if (event.target.classList.contains('picker__holder')) {
                this.showClock = false;
            }
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ontouchmove(event) {
        // Rotating Time Picker on mobile
        if (event.target.parentElement.classList.contains('clockpicker-dial')) {
            ((/** @type {?} */ (this.elem.nativeElement.querySelectorAll('.clockpicker-tick')))).forEach((/**
             * @param {?} element
             * @return {?}
             */
            (element) => {
                this.renderer.setStyle(element, 'background-color', 'rgba(0, 150, 136, 0');
            }));
            this.mousedown(event);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.generateTick();
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderer.listen(this.elem.nativeElement.querySelector('.clockpicker-plate'), 'mousedown', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.mousedown(event, false);
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.isBrowser) {
            // Fix for visible date / time picker input when picker plate is visible.
            try {
                /** @type {?} */
                const openedPicker = document.querySelector('.picker--opened');
                /** @type {?} */
                const allPickers = document.querySelectorAll('.picker');
                allPickers.forEach((/**
                 * @param {?} element
                 * @return {?}
                 */
                (element) => {
                    this.renderer.setStyle(element, 'z-index', '0');
                }));
                this.renderer.setStyle(openedPicker, 'z-index', '1000');
            }
            catch (error) { }
        }
    }
    /**
     * @return {?}
     */
    checkDraw() {
        /** @type {?} */
        let value;
        /** @type {?} */
        const isHours = this.showHours;
        if (isHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        /** @type {?} */
        const unit = Math.PI / (isHours ? 6 : 30);
        /** @type {?} */
        const radian = value * unit;
        /** @type {?} */
        const radius = isHours && value > 0 && value < 13 ? this.innerRadius : this.outerRadius;
        /** @type {?} */
        const xd = Math.sin(radian) * radius;
        /** @type {?} */
        const yd = -Math.cos(radian) * radius;
        this.setHand(xd, yd, false);
    }
    /**
     * @param {?} e
     * @param {?=} space
     * @return {?}
     */
    mousedown(e, space) {
        /** @type {?} */
        const offset = this.plate.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const isTouch = /^touch/.test(e.type);
        /** @type {?} */
        const x0 = offset.left + this.dialRadius;
        /** @type {?} */
        const y0 = offset.top + this.dialRadius;
        /** @type {?} */
        const dx = (isTouch ? e.touches[0] : e).clientX - x0;
        /** @type {?} */
        const dy = (isTouch ? e.touches[0] : e).clientY - y0;
        /** @type {?} */
        const z = Math.sqrt(dx * dx + dy * dy);
        /** @type {?} */
        let moved = false;
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
        const mousemoveEventMethod = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            event.preventDefault();
            event.stopPropagation();
            /** @type {?} */
            const x = event.clientX - x0;
            /** @type {?} */
            const y = event.clientY - y0;
            if (!moved && x === dx && y === dy) {
                return;
            }
            moved = true;
            this.setHand(x, y, false);
        });
        /** @type {?} */
        const mouseupEventMethod = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            document.removeEventListener(this.mousemoveEvent, mousemoveEventMethod);
            e.preventDefault();
            /** @type {?} */
            const x = event.clientX - x0;
            /** @type {?} */
            const y = event.clientX - y0;
            if ((space || moved) && x === dx && y === dy) {
                this.setHand(x, y, false);
            }
            this.showMinutesClock();
            document.removeEventListener(this.mouseupEvent, mouseupEventMethod);
        });
        document.addEventListener(this.mousemoveEvent, mousemoveEventMethod);
        document.addEventListener('mouseup', mouseupEventMethod);
    }
    /**
     * @return {?}
     */
    hideKeyboard() {
        // this set timeout needed for case when hideKeyborad
        // is called inside of 'onfocus' event handler
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                // creating temp field
                // const field = document.createElement('input');
                /** @type {?} */
                const field = this.renderer.createElement('input');
                this.renderer.appendChild(this.elem.nativeElement, field);
                /** @type {?} */
                const inputReference = this.elem.nativeElement.lastElementChild;
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setStyle(inputReference, 'opacity', '0');
                this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                // // hiding temp field from peoples eyes
                // // -webkit-user-modify is nessesary for Android 4.x
                // adding onfocus event handler for out temp field
                field.onfocus = (/**
                 * @return {?}
                 */
                () => {
                    // this timeout of 200ms is nessasary for Android 2.3.x
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.renderer.setStyle(field, 'display', 'none');
                        setTimeout((/**
                         * @return {?}
                         */
                        () => {
                            this.renderer.removeChild(this.elem.nativeElement, field);
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
    }
    /**
     * @return {?}
     */
    openBtnClicked() {
        this.showClock = true;
        this.showHours = true;
        this.checkDraw();
        if (this.isMobile) {
            this.hideKeyboard();
        }
    }
    /**
     * @return {?}
     */
    closeBtnClicked() {
        /** @type {?} */
        const h = this.selectedHours.h;
        /** @type {?} */
        const m = this.selectedHours.m;
        /** @type {?} */
        const ampm = this.selectedHours.ampm;
        if (this.twelvehour) {
            this.endHours = h + ':' + m + ampm;
        }
        else {
            this.endHours = h + ':' + m;
        }
        this.onChangeCb(this.endHours);
        this.onTouchedCb();
        this.showClock = false;
    }
    /**
     * @return {?}
     */
    clearTimeInput() {
        this.selectedHours = { 'h': '12', 'm': '00', 'ampm': 'AM' };
        this.endHours = '';
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    setHour(hour) {
        this.selectedHours.h = hour;
    }
    /**
     * @param {?} min
     * @return {?}
     */
    setMinute(min) {
        // event.stopPropagation();
        this.selectedHours.m = min;
    }
    /**
     * @param {?} ampm
     * @return {?}
     */
    setAmPm(ampm) {
        // event.stopPropagation();
        this.selectedHours.ampm = ampm;
    }
    /**
     * @return {?}
     */
    showHoursClock() {
        this.showHours = true;
        this.checkDraw();
    }
    /**
     * @return {?}
     */
    showMinutesClock() {
        this.showHours = false;
        this.checkDraw();
    }
    /**
     * @return {?}
     */
    generateTick() {
        if (this.twelvehour) {
            for (let i = 1; i < 13; i++) {
                /** @type {?} */
                const radian = i / 6 * Math.PI;
                /** @type {?} */
                const radius = this.outerRadius;
                /** @type {?} */
                const tick = {
                    'hour': i,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        else {
            for (let i = 0; i < 24; i++) {
                /** @type {?} */
                const radian = i / 6 * Math.PI;
                /** @type {?} */
                const inner = i > 0 && i < 13;
                /** @type {?} */
                const radius = inner ? this.innerRadius : this.outerRadius;
                /** @type {?} */
                let h;
                if (i === 0) {
                    h = '0' + i.toString();
                }
                else {
                    h = i;
                }
                /** @type {?} */
                const tick = {
                    'hour': h,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        for (let i = 0; i < 60; i += 5) {
            /** @type {?} */
            const radian = i / 30 * Math.PI;
            /** @type {?} */
            let min = i.toString();
            if (i < 10) {
                min = '0' + i.toString();
            }
            /** @type {?} */
            const tick = {
                'min': min,
                'left': this.dialRadius + Math.sin(radian) * this.outerRadius - this.tickRadius,
                'top': this.dialRadius - Math.cos(radian) * this.outerRadius - this.tickRadius,
            };
            this.minutesTicks.push(tick);
        }
    }
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} roundBy5
     * @return {?}
     */
    setHand(x, y, roundBy5) {
        /** @type {?} */
        let radian = Math.atan2(x, -y);
        /** @type {?} */
        const isHours = this.showHours;
        /** @type {?} */
        const unit = Math.PI / (isHours || roundBy5 ? 6 : 30);
        /** @type {?} */
        const z = Math.sqrt(x * x + y * y);
        /** @type {?} */
        const inner = isHours && z < (this.outerRadius + this.innerRadius) / 2;
        /** @type {?} */
        let radius = inner ? this.innerRadius : this.outerRadius;
        /** @type {?} */
        let value;
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
        const cx1 = Math.sin(radian) * (radius - this.tickRadius);
        /** @type {?} */
        const cy1 = -Math.cos(radian) * (radius - this.tickRadius);
        /** @type {?} */
        const cx2 = Math.sin(radian) * radius;
        /** @type {?} */
        const cy2 = -Math.cos(radian) * radius;
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
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    offset(obj) {
        /** @type {?} */
        let left = 0;
        /** @type {?} */
        let top = 0;
        if (obj.offsetParent) {
            do {
                left += obj.offsetLeft;
                top += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return { left, top };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.endHours = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCb = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
}
ClockPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-time-picker',
                template: "<div class=\"tp\">\n  <div class=\"md-form\">\n    <label class=\"active\">{{ label }}</label>\n    <input [disabled]=\"disabled\" [tabindex]=\"tabIndex\" [placeholder]=\"placeholder\" [value]=\"endHours\" type=\"text\" class=\"form-control timepicker\" (click)=\"openBtnClicked()\" [(ngModel)]=\"endHours\">\n  </div>\n  <div class=\"clockpicker picker\" [hidden]=\"!showClock\" [ngClass]=\"{'picker--opened': showClock, 'darktheme': darktheme}\">\n    <div class=\"picker__holder\">\n      <div class=\"picker__frame\">\n        <div class=\"picker__wrap\">\n          <div class=\"picker__box\">\n            <div class=\"picker__date-display\">\n              <div class=\"clockpicker-display\">\n                <div class=\"clockpicker-display-column\">\n                  <span class=\"clockpicker-span-hours text-primary\" [ngClass]=\"{'text-primary': showHours}\" (click)=\"showHoursClock()\">\n                    {{ selectedHours.h }}</span>:<span class=\"clockpicker-span-minutes\" [ngClass]=\"{'text-primary': !showHours}\"\n                      (click)=\"showMinutesClock()\">{{selectedHours.m }}</span>\n                </div>\n                <div class=\"clockpicker-display-column clockpicker-display-am-pm\" *ngIf=\"twelvehour\">\n                  <div class=\"clockpicker-span-am-pm\">{{ selectedHours.ampm }}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"picker__calendar-container\">\n              <div class=\"clockpicker-plate\" #plate>\n                  <div class=\"clockpicker-canvas\">\n                  <svg class=\"clockpicker-svg\" width=\"270\" height=\"270\" #svg>\n                      <g transform=\"translate(135,135)\" #g>\n                      <line x1=\"0\" y1=\"0\" x2=\"77.94228634059948\" y2=\"-45.00000000000001\" #hand></line>\n                      <circle class=\"clockpicker-canvas-fg\" r=\"5\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #fg></circle>\n                      <circle class=\"clockpicker-canvas-bg\" r=\"20\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #bg></circle>\n                      <circle class=\"clockpicker-canvas-bearing\" cx=\"0\" cy=\"0\" r=\"2\" #bearing></circle>\n                      </g>\n                  </svg>\n                  </div>\n                  <div class=\"clockpicker-dial clockpicker-hours\" #hoursPlate [ngClass]=\"{'clockpicker-dial-out': !showHours}\" [ngStyle]=\"{'visibility': !showHours ? 'hidden' : 'visible'}\">\n                  <div *ngFor=\"let tick of hoursTicks\" class=\"clockpicker-tick\" style=\"font-size: 140%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\"\n                      id=\"{{ tick.hour }}\">\n                      {{ tick.hour }}\n                  </div>\n                  </div>\n                  <div class=\"clockpicker-dial clockpicker-minutes\" #minutesPlate [ngClass]=\"{'clockpicker-dial-out': showHours}\" [ngStyle]=\"{'visibility': showHours ? 'hidden' : 'visible'}\">\n                  <div *ngFor=\"let tick of minutesTicks\" class=\"clockpicker-tick\" style=\"font-size: 120%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\">\n                      {{ tick.min }}\n                  </div>\n                  </div>\n              </div>\n              <div class=\"clockpicker-am-pm-block\" *ngIf=\"twelvehour\">\n                <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button am-button\" [ngClass]=\"{'active': selectedHours.ampm=='AM'}\"\n                  (click)=\"setAmPm('AM')\">\n                  AM\n                </button>\n                <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button pm-button\" [ngClass]=\"{'active': selectedHours.ampm=='PM'}\"\n                  (click)=\"setAmPm('PM')\">\n                  PM\n                </button>\n              </div>\n            </div>\n            <div class=\"picker__footer\">\n              <button type=\"button\" *ngIf=\"buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\">\n                {{buttonLabel}}\n              </button>\n              <button type=\"button\" *ngIf=\"!buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\">\n                Done\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
                providers: [TIME_PIRCKER_VALUE_ACCESSOT]
            }] }
];
/** @nocollapse */
ClockPickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3RpbWUtcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0gsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFHVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFdBQVcsRUFFWCxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVwRCxNQUFNLE9BQU8sMkJBQTJCLEdBQVE7SUFDNUMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLEVBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDZDtBQVNELE1BQU0sT0FBTyxvQkFBb0I7Ozs7OztJQStDN0IsWUFBbUIsSUFBZ0IsRUFBUyxRQUFtQixFQUF1QixVQUFrQjtRQUFyRixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQW5DbkMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQy9CLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDUixhQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2QsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVwQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRzFCLGFBQVEsR0FBUSxJQUFJLENBQUM7UUFDckIsZ0JBQVcsR0FBRyxDQUFDLGNBQWMsSUFBSSxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxl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QyxRQUFRLENBQUM7Ozs7SUFoRXJDLDBDQUF1RDs7SUFDdkQsNENBQTJEOztJQUUzRCxxQ0FBNkM7O0lBQzdDLG1DQUF5Qzs7SUFDekMsaUNBQXFDOztJQUNyQyxvQ0FBMkM7O0lBQzNDLGtDQUF1Qzs7SUFDdkMsa0NBQXVDOztJQUN2Qyx1Q0FBaUQ7O0lBRWpELDBDQUErQzs7SUFDL0MseUNBQTZDOztJQUM3QywyQ0FBc0Q7O0lBQ3RELHFDQUFrQzs7SUFDbEMsd0NBQXlDOztJQUN6Qyx5Q0FBNkM7O0lBQzdDLDJDQUFvQzs7SUFDcEMsd0NBQTBCOztJQUMxQix3Q0FBdUI7O0lBRXZCLHdDQUFxQjs7SUFDckIsMkNBQW9FOztJQUNwRSx5Q0FBa0I7O0lBRWxCLHdDQUFpRTs7SUFDakUsNkNBQTBCOztJQUUxQiwwQ0FBaUI7O0lBQ2pCLDJDQUFrQjs7SUFDbEIsMkNBQWlCOztJQUNqQiwwQ0FBZ0I7O0lBQ2hCLHdDQUErQjs7SUFDL0IseUNBQXVCOztJQUV2QiwwQ0FBcUI7O0lBQ3JCLDRDQUF1Qjs7SUFDdkIsNkNBQTREOztJQUM1RCx3Q0FBYzs7SUFHZCw4Q0FBK0M7O0lBQy9DLDhDQUErRTs7SUFDL0UsOENBQThFOztJQUM5RSw0Q0FBeUU7O0lBMlh6RSwwQ0FBeUM7O0lBQ3pDLDJDQUFvQzs7SUExWHhCLG9DQUF1Qjs7SUFBRSx3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgSW5wdXQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgT25Jbml0LFxyXG4gICAgQWZ0ZXJWaWV3SW5pdCxcclxuICAgIGZvcndhcmRSZWYsXHJcbiAgICBJbmplY3QsXHJcbiAgICBQTEFURk9STV9JRCxcclxuICAgIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgICBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5leHBvcnQgY29uc3QgVElNRV9QSVJDS0VSX1ZBTFVFX0FDQ0VTU09UOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENsb2NrUGlja2VyQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21kYi10aW1lLXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGltZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtUSU1FX1BJUkNLRVJfVkFMVUVfQUNDRVNTT1RdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlckNvbnRlbnRDaGVja2VkIHtcclxuICAgIEBWaWV3Q2hpbGQoJ2hvdXJzUGxhdGUnKSBwdWJsaWMgaG91cnNQbGF0ZTogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ21pbnV0ZXNQbGF0ZScpIHB1YmxpYyBtaW51dGVzUGxhdGU6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgncGxhdGUnKSBwdWJsaWMgcGxhdGU6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdzdmcnKSBwdWJsaWMgc3ZnOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnZycpIHB1YmxpYyBnOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnaGFuZCcpIHB1YmxpYyBoYW5kOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnZmcnKSBwdWJsaWMgZmc6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdiZycpIHB1YmxpYyBiZzogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ2JlYXJpbmcnKSBwdWJsaWMgYmVhcmluZzogRWxlbWVudFJlZjtcclxuXHJcbiAgICBASW5wdXQoJ3R3ZWx2ZWhvdXInKSBwdWJsaWMgdHdlbHZlaG91ciA9IGZhbHNlO1xyXG4gICAgQElucHV0KCdkYXJrdGhlbWUnKSBwdWJsaWMgZGFya3RoZW1lID0gZmFsc2U7XHJcbiAgICBASW5wdXQoJ3BsYWNlaG9sZGVyJykgcHVibGljIHBsYWNlaG9sZGVyOiBTdHJpbmcgPSAnJztcclxuICAgIEBJbnB1dCgnbGFiZWwnKSBwdWJsaWMgbGFiZWwgPSAnJztcclxuICAgIEBJbnB1dCgnZHVyYXRpb24nKSBwdWJsaWMgZHVyYXRpb24gPSAzMDA7XHJcbiAgICBASW5wdXQoJ3Nob3dDbG9jaycpIHB1YmxpYyBzaG93Q2xvY2sgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBidXR0b25MYWJlbDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHRhYkluZGV4OiBhbnk7XHJcblxyXG4gICAgaXNNb2JpbGU6IGFueSA9IG51bGw7XHJcbiAgICB0b3VjaERldmljZSA9ICgnb250b3VjaHN0YXJ0JyBpbiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIGFueSkpO1xyXG4gICAgc2hvd0hvdXJzID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvY2twaWNrZXInKTtcclxuICAgIHB1YmxpYyBlbGVtZW50TnVtYmVyOiBhbnk7XHJcblxyXG4gICAgZGlhbFJhZGl1cyA9IDEzNTtcclxuICAgIG91dGVyUmFkaXVzID0gMTEwO1xyXG4gICAgaW5uZXJSYWRpdXMgPSA4MDtcclxuICAgIHRpY2tSYWRpdXMgPSAyMDtcclxuICAgIGRpYW1ldGVyID0gdGhpcy5kaWFsUmFkaXVzICogMjtcclxuICAgIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XHJcblxyXG4gICAgaG91cnNUaWNrczogYW55ID0gW107XHJcbiAgICBtaW51dGVzVGlja3M6IGFueSA9IFtdO1xyXG4gICAgc2VsZWN0ZWRIb3VyczogYW55ID0geyAnaCc6ICcxMicsICdtJzogJzAwJywgJ2FtcG0nOiAnQU0nIH07XHJcbiAgICBlbmRIb3VycyA9ICcnO1xyXG5cclxuXHJcbiAgICB0b3VjaFN1cHBvcnRlZDogYW55ID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xyXG4gICAgbW91c2Vkb3duRXZlbnQ6IGFueSA9ICdtb3VzZWRvd24nICsgKHRoaXMudG91Y2hTdXBwb3J0ZWQgPyAnIHRvdWNoc3RhcnQnIDogJycpO1xyXG4gICAgbW91c2Vtb3ZlRXZlbnQ6IGFueSA9ICdtb3VzZW1vdmUnICsgKHRoaXMudG91Y2hTdXBwb3J0ZWQgPyAnIHRvdWNobW92ZScgOiAnJyk7XHJcbiAgICBtb3VzZXVwRXZlbnQ6IGFueSA9ICdtb3VzZXVwJyArICh0aGlzLnRvdWNoU3VwcG9ydGVkID8gJyB0b3VjaGVuZCcgOiAnJyk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsZW06IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xyXG4gICAgICAgIHJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgJ2NsaWNrJywgKGV2ZW50OiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dDbG9jayAmJlxyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Nsb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BpY2tlcl9faG9sZGVyJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Nsb2NrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2htb3ZlJywgWyckZXZlbnQnXSkgb250b3VjaG1vdmUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIC8vIFJvdGF0aW5nIFRpbWUgUGlja2VyIG9uIG1vYmlsZVxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nsb2NrcGlja2VyLWRpYWwnKSkge1xyXG4gICAgICAgICAgICAodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNsb2NrcGlja2VyLXRpY2snKSBhcyBhbnkpLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDAsIDE1MCwgMTM2LCAwJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlZG93bihldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVUaWNrKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9ja3BpY2tlci1wbGF0ZScpLCAnbW91c2Vkb3duJywgKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZWRvd24oZXZlbnQsIGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgICAgICAgIC8vIEZpeCBmb3IgdmlzaWJsZSBkYXRlIC8gdGltZSBwaWNrZXIgaW5wdXQgd2hlbiBwaWNrZXIgcGxhdGUgaXMgdmlzaWJsZS5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5lZFBpY2tlcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpY2tlci0tb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxQaWNrZXJzOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGlja2VyJyk7XHJcbiAgICAgICAgICAgICAgICBhbGxQaWNrZXJzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgJ3otaW5kZXgnLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG9wZW5lZFBpY2tlciwgJ3otaW5kZXgnLCAnMTAwMCcpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRHJhdygpIHtcclxuICAgICAgICBsZXQgdmFsdWU7XHJcbiAgICAgICAgY29uc3QgaXNIb3VycyA9IHRoaXMuc2hvd0hvdXJzO1xyXG4gICAgICAgIGlmIChpc0hvdXJzKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodGhpcy5zZWxlY3RlZEhvdXJzLmgsIDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodGhpcy5zZWxlY3RlZEhvdXJzLm0sIDApO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHVuaXQgPSBNYXRoLlBJIC8gKGlzSG91cnMgPyA2IDogMzApLFxyXG4gICAgICAgICAgICByYWRpYW4gPSB2YWx1ZSAqIHVuaXQsXHJcbiAgICAgICAgICAgIHJhZGl1cyA9IGlzSG91cnMgJiYgdmFsdWUgPiAwICYmIHZhbHVlIDwgMTMgPyB0aGlzLmlubmVyUmFkaXVzIDogdGhpcy5vdXRlclJhZGl1cyxcclxuICAgICAgICAgICAgeGQgPSBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzLFxyXG4gICAgICAgICAgICB5ZCA9IC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cztcclxuICAgICAgICB0aGlzLnNldEhhbmQoeGQsIHlkLCBmYWxzZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlZG93bihlOiBhbnksIHNwYWNlPzogYW55KSB7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5wbGF0ZS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgICAgICAgICBpc1RvdWNoID0gL150b3VjaC8udGVzdChlLnR5cGUpLFxyXG4gICAgICAgICAgICB4MCA9IG9mZnNldC5sZWZ0ICsgdGhpcy5kaWFsUmFkaXVzLFxyXG4gICAgICAgICAgICB5MCA9IG9mZnNldC50b3AgKyB0aGlzLmRpYWxSYWRpdXMsXHJcbiAgICAgICAgICAgIGR4ID0gKGlzVG91Y2ggPyBlLnRvdWNoZXNbMF0gOiBlKS5jbGllbnRYIC0geDAsXHJcbiAgICAgICAgICAgIGR5ID0gKGlzVG91Y2ggPyBlLnRvdWNoZXNbMF0gOiBlKS5jbGllbnRZIC0geTAsXHJcbiAgICAgICAgICAgIHogPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG4gICAgICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoc3BhY2UgJiYgKHogPCB0aGlzLm91dGVyUmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzIHx8IHogPiB0aGlzLm91dGVyUmFkaXVzICsgdGhpcy50aWNrUmFkaXVzKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0hvdXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SGFuZChkeCwgZHksIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SGFuZChkeCwgZHksIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1vdXNlbW92ZUV2ZW50TWV0aG9kID0gKGV2ZW50OiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHgwLFxyXG4gICAgICAgICAgICAgICAgeSA9IGV2ZW50LmNsaWVudFkgLSB5MDtcclxuICAgICAgICAgICAgaWYgKCFtb3ZlZCAmJiB4ID09PSBkeCAmJiB5ID09PSBkeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vdmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SGFuZCh4LCB5LCBmYWxzZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgbW91c2V1cEV2ZW50TWV0aG9kID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdXNlbW92ZUV2ZW50LCBtb3VzZW1vdmVFdmVudE1ldGhvZCk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSB4MCxcclxuICAgICAgICAgICAgICAgIHkgPSBldmVudC5jbGllbnRYIC0geTA7XHJcbiAgICAgICAgICAgIGlmICgoc3BhY2UgfHwgbW92ZWQpICYmIHggPT09IGR4ICYmIHkgPT09IGR5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEhhbmQoeCwgeSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01pbnV0ZXNDbG9jaygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW91c2V1cEV2ZW50LCBtb3VzZXVwRXZlbnRNZXRob2QpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdXNlbW92ZUV2ZW50LCBtb3VzZW1vdmVFdmVudE1ldGhvZCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNldXBFdmVudE1ldGhvZCk7XHJcbiAgICB9XHJcbiAgICBoaWRlS2V5Ym9hcmQoKSB7XHJcbiAgICAgICAgLy8gdGhpcyBzZXQgdGltZW91dCBuZWVkZWQgZm9yIGNhc2Ugd2hlbiBoaWRlS2V5Ym9yYWRcclxuICAgICAgICAvLyBpcyBjYWxsZWQgaW5zaWRlIG9mICdvbmZvY3VzJyBldmVudCBoYW5kbGVyXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGluZyB0ZW1wIGZpZWxkXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIGZpZWxkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0UmVmZXJlbmNlID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0UmVmZXJlbmNlLCAndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbnB1dFJlZmVyZW5jZSwgJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dFJlZmVyZW5jZSwgJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dFJlZmVyZW5jZSwgJy13ZWJraXQtdXNlci1tb2RpZnknLCAncmVhZC13cml0ZS1wbGFpbnRleHQtb25seScpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8gaGlkaW5nIHRlbXAgZmllbGQgZnJvbSBwZW9wbGVzIGV5ZXNcclxuICAgICAgICAgICAgICAgIC8vIC8vIC13ZWJraXQtdXNlci1tb2RpZnkgaXMgbmVzc2VzYXJ5IGZvciBBbmRyb2lkIDQueFxyXG4gICAgICAgICAgICAgICAgLy8gYWRkaW5nIG9uZm9jdXMgZXZlbnQgaGFuZGxlciBmb3Igb3V0IHRlbXAgZmllbGRcclxuICAgICAgICAgICAgICAgIGZpZWxkLm9uZm9jdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB0aW1lb3V0IG9mIDIwMG1zIGlzIG5lc3Nhc2FyeSBmb3IgQW5kcm9pZCAyLjMueFxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShmaWVsZCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIGZvY3VzaW5nIGl0XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5mb2N1cygpO1xyXG5cclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5CdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2hvd0Nsb2NrID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dIb3VycyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jaGVja0RyYXcoKTtcclxuICAgICAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVLZXlib2FyZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VCdG5DbGlja2VkKCkge1xyXG4gICAgICAgIGNvbnN0IGggPSB0aGlzLnNlbGVjdGVkSG91cnMuaDtcclxuICAgICAgICBjb25zdCBtID0gdGhpcy5zZWxlY3RlZEhvdXJzLm07XHJcbiAgICAgICAgY29uc3QgYW1wbSA9IHRoaXMuc2VsZWN0ZWRIb3Vycy5hbXBtO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50d2VsdmVob3VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kSG91cnMgPSBoICsgJzonICsgbSArIGFtcG07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRIb3VycyA9IGggKyAnOicgKyBtO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IodGhpcy5lbmRIb3Vycyk7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgICAgIHRoaXMuc2hvd0Nsb2NrID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJUaW1lSW5wdXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEhvdXJzID0geyAnaCc6ICcxMicsICdtJzogJzAwJywgJ2FtcG0nOiAnQU0nIH07XHJcbiAgICAgICAgdGhpcy5lbmRIb3VycyA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEhvdXIoaG91cjogU3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEhvdXJzLmggPSBob3VyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1pbnV0ZShtaW46IFN0cmluZykge1xyXG4gICAgICAgIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIb3Vycy5tID0gbWluO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFtUG0oYW1wbTogU3RyaW5nKSB7XHJcbiAgICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEhvdXJzLmFtcG0gPSBhbXBtO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dIb3Vyc0Nsb2NrKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0hvdXJzID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNoZWNrRHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dNaW51dGVzQ2xvY2soKSB7XHJcbiAgICAgICAgdGhpcy5zaG93SG91cnMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNoZWNrRHJhdygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZW5lcmF0ZVRpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHdlbHZlaG91cikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlhbiA9IGkgLyA2ICogTWF0aC5QSTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IHRoaXMub3V0ZXJSYWRpdXM7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGljayA9IHtcclxuICAgICAgICAgICAgICAgICAgICAnaG91cic6IGksXHJcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiB0aGlzLmRpYWxSYWRpdXMgKyBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiB0aGlzLmRpYWxSYWRpdXMgLSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaG91cnNUaWNrcy5wdXNoKHRpY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByYWRpYW4gPSBpIC8gNiAqIE1hdGguUEk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbm5lciA9IGkgPiAwICYmIGkgPCAxMztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IGlubmVyID8gdGhpcy5pbm5lclJhZGl1cyA6IHRoaXMub3V0ZXJSYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBsZXQgaDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGggPSAnMCcgKyBpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGggPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpY2sgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ2hvdXInOiBoLFxyXG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogdGhpcy5kaWFsUmFkaXVzICsgTWF0aC5zaW4ocmFkaWFuKSAqIHJhZGl1cyAtIHRoaXMudGlja1JhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICAndG9wJzogdGhpcy5kaWFsUmFkaXVzIC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cyAtIHRoaXMudGlja1JhZGl1cyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhvdXJzVGlja3MucHVzaCh0aWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSArPSA1KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGlhbiA9IGkgLyAzMCAqIE1hdGguUEk7XHJcbiAgICAgICAgICAgIGxldCBtaW4gPSBpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChpIDwgMTApIHtcclxuICAgICAgICAgICAgICAgIG1pbiA9ICcwJyArIGkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0aWNrID0ge1xyXG4gICAgICAgICAgICAgICAgJ21pbic6IG1pbixcclxuICAgICAgICAgICAgICAgICdsZWZ0JzogdGhpcy5kaWFsUmFkaXVzICsgTWF0aC5zaW4ocmFkaWFuKSAqIHRoaXMub3V0ZXJSYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAndG9wJzogdGhpcy5kaWFsUmFkaXVzIC0gTWF0aC5jb3MocmFkaWFuKSAqIHRoaXMub3V0ZXJSYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMubWludXRlc1RpY2tzLnB1c2godGljayk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRIYW5kKHg6IGFueSwgeTogYW55LCByb3VuZEJ5NTogYW55KSB7XHJcbiAgICAgICAgbGV0IHJhZGlhbiA9IE1hdGguYXRhbjIoeCwgLSB5KTtcclxuICAgICAgICBjb25zdCBpc0hvdXJzID0gdGhpcy5zaG93SG91cnM7XHJcbiAgICAgICAgY29uc3QgdW5pdCA9IE1hdGguUEkgLyAoaXNIb3VycyB8fCByb3VuZEJ5NSA/IDYgOiAzMCk7XHJcbiAgICAgICAgY29uc3QgeiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcclxuICAgICAgICBjb25zdCBpbm5lciA9IGlzSG91cnMgJiYgeiA8ICh0aGlzLm91dGVyUmFkaXVzICsgdGhpcy5pbm5lclJhZGl1cykgLyAyO1xyXG4gICAgICAgIGxldCByYWRpdXMgPSBpbm5lciA/IHRoaXMuaW5uZXJSYWRpdXMgOiB0aGlzLm91dGVyUmFkaXVzO1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dIb3Vycykge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHRoaXMuc2VsZWN0ZWRIb3Vycy5oLCAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHRoaXMuc2VsZWN0ZWRIb3Vycy5tLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgICAgICAgcmFkaXVzID0gdGhpcy5vdXRlclJhZGl1cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyYWRpYW4gPCAwKSB7XHJcbiAgICAgICAgICAgIHJhZGlhbiA9IE1hdGguUEkgKiAyICsgcmFkaWFuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHJhZGlhbiAvIHVuaXQpO1xyXG4gICAgICAgIHJhZGlhbiA9IHZhbHVlICogdW5pdDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudHdlbHZlaG91cikge1xyXG4gICAgICAgICAgICBpZiAoaXNIb3Vycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAxMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3VuZEJ5NSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICo9IDU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IDYwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzSG91cnMpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gIWlubmVyID8gdmFsdWUgKyAxMiA6IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gMjQgPyAwIDogdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IChpbm5lciAmJiB2YWx1ZSA9PT0gMCkgPyAxMiA6IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSAoIWlubmVyICYmIHZhbHVlID09PSAxMikgPyAwIDogdmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocm91bmRCeTUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAqPSA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlzSG91cnMpIHtcclxuICAgICAgICAgICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2xvY2twaWNrZXItY2FudmFzLWZnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICUgNSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2xvY2twaWNrZXItY2FudmFzLWZnJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZnLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjbG9ja3BpY2tlci1jYW52YXMtZmcgYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGN4MSA9IE1hdGguc2luKHJhZGlhbikgKiAocmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzKSxcclxuICAgICAgICAgICAgY3kxID0gLSBNYXRoLmNvcyhyYWRpYW4pICogKHJhZGl1cyAtIHRoaXMudGlja1JhZGl1cyksXHJcbiAgICAgICAgICAgIGN4MiA9IE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMsXHJcbiAgICAgICAgICAgIGN5MiA9IC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cztcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd4MicsIGN4MSk7XHJcbiAgICAgICAgdGhpcy5oYW5kLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCd5MicsIGN5MSk7XHJcbiAgICAgICAgdGhpcy5iZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3gnLCBjeDIpO1xyXG4gICAgICAgIHRoaXMuYmcubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N5JywgY3kyKTtcclxuICAgICAgICB0aGlzLmZnLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeCcsIGN4Mik7XHJcbiAgICAgICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3knLCBjeTIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zaG93SG91cnMpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlIDwgMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SG91cignMCcgKyB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SG91cih2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1pbnV0ZSgnMCcgKyB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWludXRlKHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9mZnNldChvYmo6IGFueSkge1xyXG4gICAgICAgIGxldCBsZWZ0ID0gMCxcclxuICAgICAgICAgICAgdG9wID0gMDtcclxuXHJcbiAgICAgICAgaWYgKG9iai5vZmZzZXRQYXJlbnQpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgbGVmdCArPSBvYmoub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgICAgIHRvcCArPSBvYmoub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChvYmogPSBvYmoub2Zmc2V0UGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgbGVmdCwgdG9wIH07XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbkNoYW5nZUNiOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gICAgb25Ub3VjaGVkQ2I6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcblxyXG4gICAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbmRIb3VycyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2VDYiA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVG91Y2hlZENiID0gZm47XHJcbiAgICB9XHJcbn1cclxuIl19