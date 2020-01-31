/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, forwardRef, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, NgZone, HostListener, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
/** @type {?} */
export const TIME_PIRCKER_VALUE_ACCESSOT = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => ClockPickerComponent)),
    multi: true,
};
export class ClockPickerComponent {
    /**
     * @param {?} elem
     * @param {?} renderer
     * @param {?} _cdRef
     * @param {?} _ngZone
     * @param {?} _document
     * @param {?} platformId
     */
    constructor(elem, renderer, _cdRef, _ngZone, _document, platformId) {
        this.elem = elem;
        this.renderer = renderer;
        this._cdRef = _cdRef;
        this._ngZone = _ngZone;
        this._document = _document;
        this.twelvehour = false;
        this.darktheme = false;
        this.placeholder = '';
        this.label = '';
        this.duration = 300;
        this.showClock = false;
        this.buttonLabel = 'Done';
        this.buttonClear = true;
        this.buttonClose = false;
        this.buttonClearLabel = 'Clear';
        this.buttonCloseLabel = 'Close';
        this.disabled = false;
        this.outlineInput = false;
        this.openOnFocus = true;
        this.readonly = false;
        this.ampmClass = '';
        this.footerClass = '';
        this.timeChanged = new EventEmitter();
        this.isOpen = false;
        this.isMobile = null;
        this.touchDevice = 'ontouchstart' in ((/** @type {?} */ (document.documentElement)));
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
        this.selectedHours = { h: '12', m: '00', ampm: 'AM' };
        this.endHours = '';
        this.touchSupported = 'ontouchstart' in window;
        this.mousedownEvent = 'mousedown' + (this.touchSupported ? ' touchstart' : '');
        this.mousemoveEvent = 'mousemove' + (this.touchSupported ? ' touchmove' : '');
        this.mouseupEvent = 'mouseup' + (this.touchSupported ? ' touchend' : '');
        this.isMouseDown = false;
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
        this.mousedown(event);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.generateTick();
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
        this.isOpen = this.showClock;
        this._handleOutsideClick();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        ['mousedown', 'mouseup'].forEach((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.renderer.listen(this.elem.nativeElement.querySelector('.clockpicker-plate'), event, (/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => {
                if (event === 'mousedown') {
                    this.mousedown(ev, false);
                    this.isMouseDown = true;
                }
                else {
                    this.isMouseDown = false;
                }
            }));
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
        if (space &&
            (z < this.outerRadius - this.tickRadius || z > this.outerRadius + this.tickRadius)) {
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
            this._ngZone.run((/**
             * @return {?}
             */
            () => {
                this.setHand(x, y, false);
            }));
        });
        /** @type {?} */
        const mouseupEventMethod = (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this._document.removeEventListener(this.mousemoveEvent, mousemoveEventMethod);
            e.preventDefault();
            /** @type {?} */
            const x = event.clientX - x0;
            /** @type {?} */
            const y = event.clientX - y0;
            if ((space || moved) && x === dx && y === dy) {
                this.setHand(x, y, false);
            }
            this.showMinutesClock();
            this._document.removeEventListener(this.mouseupEvent, mouseupEventMethod);
        });
        this._ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._document.addEventListener(this.mousemoveEvent, mousemoveEventMethod);
            this._document.addEventListener(this.mouseupEvent, mouseupEventMethod);
        }));
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
        catch (error) { }
    }
    /**
     * @return {?}
     */
    onFocusInput() {
        if (this.openOnFocus && !this.isOpen) {
            this.openBtnClicked();
        }
    }
    /**
     * @return {?}
     */
    openBtnClicked() {
        this.isOpen = true;
        this.showClock = true;
        this.showHours = true;
        this.checkDraw();
        if (this.isMobile) {
            this.hideKeyboard();
        }
        this._handleOutsideClick();
        this._cdRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    _handleOutsideClick() {
        /** @type {?} */
        const pickerHolder = this.elem.nativeElement.querySelector('.picker__holder');
        this.documentClickFun = this.renderer.listen(pickerHolder, 'click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const wrapper = this.elem.nativeElement.querySelector('.picker__wrap');
            if (this.isOpen && !wrapper.contains(event.target)) {
                this.close();
            }
        }));
    }
    /**
     * @return {?}
     */
    closeBtnClicked() {
        this.isOpen = false;
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
        this.timeChanged.emit(this.endHours);
        this.showClock = false;
        if (this.documentClickFun) {
            this.documentClickFun();
        }
        this._cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    close() {
        this.isOpen = false;
        this.showClock = false;
        this.onTouchedCb();
        if (this.documentClickFun) {
            this.documentClickFun();
        }
        this._cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    clearTimeInput() {
        this.selectedHours = { h: '12', m: '00', ampm: 'AM' };
        this.endHours = '';
        this._cdRef.markForCheck();
        this.onChangeCb(this.endHours);
        this.onTouchedCb();
        this.timeChanged.emit(this.endHours);
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
        this.selectedHours.m = min;
    }
    /**
     * @param {?} ampm
     * @return {?}
     */
    setAmPm(ampm) {
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
                const radian = (i / 6) * Math.PI;
                /** @type {?} */
                const radius = this.outerRadius;
                /** @type {?} */
                const tick = {
                    hour: i,
                    left: this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    top: this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        else {
            for (let i = 0; i < 24; i++) {
                /** @type {?} */
                const radian = (i / 6) * Math.PI;
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
                    hour: h,
                    left: this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    top: this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        for (let i = 0; i < 60; i += 5) {
            /** @type {?} */
            const radian = (i / 30) * Math.PI;
            /** @type {?} */
            let min = i.toString();
            if (i < 10) {
                min = '0' + i.toString();
            }
            /** @type {?} */
            const tick = {
                min: min,
                left: this.dialRadius + Math.sin(radian) * this.outerRadius - this.tickRadius,
                top: this.dialRadius - Math.cos(radian) * this.outerRadius - this.tickRadius,
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
                value = inner && value === 0 ? 12 : value;
                value = !inner && value === 12 ? 0 : value;
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
        this._cdRef.markForCheck();
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
            } while ((obj = obj.offsetParent));
        }
        return { left, top };
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _getFormattedTime(value) {
        /** @type {?} */
        const timeArr = value.split(':');
        /** @type {?} */
        const minutesVal = timeArr[1];
        /** @type {?} */
        const h = timeArr[0];
        /** @type {?} */
        const m = minutesVal.slice(0, 2);
        /** @type {?} */
        const ampm = minutesVal.length > 2 ? minutesVal.slice(-2) : '';
        return { h, m, ampm };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            this.showHours = true;
            /** @type {?} */
            const time = this._getFormattedTime(value);
            this.setHour(time.h);
            this.setMinute(time.m);
            this.setAmPm(time.ampm);
            this.endHours = value;
        }
        else {
            this.clearTimeInput();
        }
        this._cdRef.markForCheck();
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
                template: "<div class=\"tp\">\n  <div class=\"md-form\" [ngClass]=\"{ 'md-outline': outlineInput }\">\n    <input\n      (focus)=\"onFocusInput()\"\n      [disabled]=\"disabled\"\n      [tabindex]=\"tabIndex\"\n      [placeholder]=\"placeholder\"\n      [value]=\"endHours\"\n      type=\"text\"\n      class=\"form-control timepicker\"\n      (mousedown)=\"openBtnClicked()\"\n      [(ngModel)]=\"endHours\"\n      [readonly]=\"readonly\"\n    />\n    <label class=\"active\">{{ label }}</label>\n  </div>\n  <div\n    class=\"clockpicker picker\"\n    [hidden]=\"!showClock\"\n    [ngClass]=\"{ 'picker--opened': showClock, darktheme: darktheme }\"\n  >\n    <div class=\"picker__holder\">\n      <div class=\"picker__frame\">\n        <div class=\"picker__wrap\">\n          <div class=\"picker__box\">\n            <div class=\"picker__date-display\">\n              <div class=\"clockpicker-display\">\n                <div class=\"clockpicker-display-column\">\n                  <span\n                    class=\"clockpicker-span-hours text-primary\"\n                    [ngClass]=\"{ 'text-primary': showHours }\"\n                    (click)=\"showHoursClock()\"\n                  >\n                    {{ selectedHours.h }}</span\n                  >:<span\n                    class=\"clockpicker-span-minutes\"\n                    [ngClass]=\"{ 'text-primary': !showHours }\"\n                    (click)=\"showMinutesClock()\"\n                    >{{ selectedHours.m }}</span\n                  >\n                </div>\n                <div\n                  class=\"clockpicker-display-column clockpicker-display-am-pm\"\n                  *ngIf=\"twelvehour\"\n                >\n                  <div class=\"clockpicker-span-am-pm\">{{ selectedHours.ampm }}</div>\n                </div>\n              </div>\n            </div>\n            <div class=\"picker__calendar-container\">\n              <div class=\"clockpicker-plate\" #plate>\n                <div class=\"clockpicker-canvas\">\n                  <svg class=\"clockpicker-svg\" width=\"270\" height=\"270\" #svg>\n                    <g transform=\"translate(135,135)\" #g>\n                      <line\n                        x1=\"0\"\n                        y1=\"0\"\n                        x2=\"77.94228634059948\"\n                        y2=\"-45.00000000000001\"\n                        #hand\n                      ></line>\n                      <circle\n                        class=\"clockpicker-canvas-fg\"\n                        r=\"5\"\n                        cx=\"95.26279441628824\"\n                        cy=\"-55.000000000000014\"\n                        #fg\n                      ></circle>\n                      <circle\n                        class=\"clockpicker-canvas-bg\"\n                        r=\"20\"\n                        cx=\"95.26279441628824\"\n                        cy=\"-55.000000000000014\"\n                        #bg\n                      ></circle>\n                      <circle\n                        class=\"clockpicker-canvas-bearing\"\n                        cx=\"0\"\n                        cy=\"0\"\n                        r=\"2\"\n                        #bearing\n                      ></circle>\n                    </g>\n                  </svg>\n                </div>\n                <div\n                  class=\"clockpicker-dial clockpicker-hours\"\n                  #hoursPlate\n                  [ngClass]=\"{ 'clockpicker-dial-out': !showHours }\"\n                  [ngStyle]=\"{ visibility: !showHours ? 'hidden' : 'visible' }\"\n                >\n                  <div\n                    *ngFor=\"let tick of hoursTicks\"\n                    class=\"clockpicker-tick\"\n                    style=\"font-size: 140%;\"\n                    [ngStyle]=\"{ left: tick.left + 'px', top: tick.top + 'px' }\"\n                    id=\"{{ tick.hour }}\"\n                  >\n                    {{ tick.hour }}\n                  </div>\n                </div>\n                <div\n                  class=\"clockpicker-dial clockpicker-minutes\"\n                  #minutesPlate\n                  [ngClass]=\"{ 'clockpicker-dial-out': showHours }\"\n                  [ngStyle]=\"{ visibility: showHours ? 'hidden' : 'visible' }\"\n                >\n                  <div\n                    *ngFor=\"let tick of minutesTicks\"\n                    class=\"clockpicker-tick\"\n                    style=\"font-size: 120%;\"\n                    [ngStyle]=\"{ left: tick.left + 'px', top: tick.top + 'px' }\"\n                  >\n                    {{ tick.min }}\n                  </div>\n                </div>\n              </div>\n              <div class=\"clockpicker-am-pm-block\" [ngClass]=\"ampmClass\" *ngIf=\"twelvehour\">\n                <button\n                  type=\"button\"\n                  mdbBtn\n                  floating=\"true\"\n                  flat=\"true\"\n                  mdbWavesEffect\n                  class=\"clockpicker-button am-button\"\n                  [ngClass]=\"{ active: selectedHours.ampm == 'AM' }\"\n                  (click)=\"setAmPm('AM')\"\n                >\n                  AM\n                </button>\n\n                <button\n                  type=\"button\"\n                  mdbBtn\n                  floating=\"true\"\n                  flat=\"true\"\n                  mdbWavesEffect\n                  class=\"clockpicker-button pm-button white-text\"\n                  [ngClass]=\"{ active: selectedHours.ampm == 'PM' }\"\n                  (click)=\"setAmPm('PM')\"\n                >\n                  PM\n                </button>\n              </div>\n            </div>\n            <div class=\"picker__footer\" [ngClass]=\"footerClass\">\n              <button\n                type=\"button\"\n                *ngIf=\"buttonLabel\"\n                mdbBtn\n                flat=\"true\"\n                mdbWavesEffect\n                class=\"clockpicker-button\"\n                (click)=\"closeBtnClicked()\"\n              >\n                {{ buttonLabel }}\n              </button>\n              <button\n                *ngIf=\"buttonClear\"\n                type=\"button\"\n                mdbBtn\n                flat=\"true\"\n                mdbWavesEffect\n                class=\"clockpicker-button\"\n                (click)=\"clearTimeInput(); close()\"\n              >\n                {{ buttonClearLabel }}\n              </button>\n              <button\n                *ngIf=\"buttonClose\"\n                type=\"button\"\n                mdbBtn\n                flat=\"true\"\n                mdbWavesEffect\n                class=\"clockpicker-button\"\n                (click)=\"close()\"\n              >\n                {{ buttonCloseLabel }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TIME_PIRCKER_VALUE_ACCESSOT],
                styles: [".picker__input{cursor:default}.picker__input.picker__input--active{border-color:#0089ec}.picker{font-size:1rem;text-align:center;line-height:1.2;color:#000;position:absolute;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none/*!\n   * Default mobile-first, responsive styling for pickadate.js\n   * Demo: http://amsul.github.io/pickadate.js\n   */}.picker .picker__holder{width:100%;overflow-scrolling:touch;position:fixed;transition:background .15s ease-out,top .15s;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow-y:visible}.picker .picker__frame,.picker .picker__holder{bottom:0;left:0;right:0;top:100%}.picker .picker__frame{position:absolute;margin:0 auto;min-width:16rem;max-width:20.3125rem;width:18.75rem;max-height:21.875rem;opacity:0;transition:.15s ease-out}@media (min-height:40.125em){.picker .picker__frame{margin-bottom:7.5%}}.picker .picker__frame .picker__wrap{display:table;width:100%;height:100%}.picker .picker__box{background:#fff;display:table-cell;vertical-align:middle}@media (min-height:28.875em){.picker .picker__frame{overflow:visible;top:auto;bottom:-100%;max-height:80%}.picker .picker__frame .picker__wrap{display:block}.picker .picker__box{display:block;border:1px solid #777;border-top-color:#898989;border-bottom-width:0;border-radius:5px 5px 0 0;box-shadow:0 .75rem 2.25rem 1rem rgba(0,0,0,.24)}}.picker--opened .picker__holder{top:0;background:rgba(0,0,0,.32);zoom:1;transition:background .15s ease-out}.picker--opened .picker__frame{top:0;opacity:1}@media (min-height:35.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.datepicker.picker__input.picker__input--active,.timepicker.picker__input.picker__input--active{border-bottom:1px solid #e3f2fd}.picker__list{list-style:none;padding:.75em 0 4.2em;margin:0}.picker__list-item{border-bottom:1px solid #ddd;border-top:1px solid #ddd;margin-bottom:-1px;position:relative;background-color:#fff;padding:.75em 1.25em}@media (min-height:46.75em){.picker__list-item{padding:.5em 1em}}.picker__list-item:hover{cursor:pointer;background:#b1dcfb;border-color:#0089ec;z-index:10}.picker__list-item--highlighted{border-color:#0089ec;z-index:10}.picker--focused .picker__list-item--highlighted,.picker__list-item--highlighted:hover{cursor:pointer;color:#000;background:#b1dcfb}.picker--focused .picker__list-item--selected,.picker__list-item--selected,.picker__list-item--selected:hover{background:#0089ec;color:#fff;z-index:10}.picker--focused .picker__list-item--disabled,.picker__list-item--disabled,.picker__list-item--disabled:hover{background:#f5f5f5;border-color:#ddd;color:#ddd;cursor:default;z-index:auto}.picker--time .picker__button--clear{display:block;width:80%;margin:1em auto 0;padding:1em 1.25em;background:0 0;border:0;font-weight:500;font-size:.67em;text-align:center;text-transform:uppercase;color:#666}.picker--time .picker__button--clear:focus,.picker--time .picker__button--clear:hover{background:#b1dcfb;border-color:#e20;cursor:pointer;color:#fff;outline:0}.picker--time .picker__button--clear:focus:before,.picker--time .picker__button--clear:hover:before{color:#fff}.picker--time .picker__button--clear:before{top:-.25em;color:#666;font-size:1.25em;font-weight:700}.picker--time .picker__frame{min-width:16rem;max-width:20rem}.picker--time .picker__box{font-size:1em;background:#f2f2f2;padding:0}@media (min-height:40.125em){.picker--time .picker__box{margin-bottom:5em}}/*!\n * ClockPicker v0.0.7 for jQuery (http://weareoutman.github.io/clockpicker/)\n * Copyright 2014 Wang Shenwei.\n * Licensed under MIT (https://github.com/weareoutman/clockpicker/blob/gh-pages/LICENSE)\n *\n * Further modified\n * Copyright 2015 Ching Yaw Hao.\n *\n * Bootstrap v3.1.1 (http://getbootstrap.com)\n * Copyright 2011-2014 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */.picker__date-display{text-align:center;background-color:#4285f4;color:#fff;padding-bottom:.9375rem;font-weight:300;margin-bottom:1rem}.picker__date-display .clockpicker-display{vertical-align:middle;display:inline-block;margin:auto;height:5.3125rem;font-size:4.375rem;padding:.625rem .625rem 0;color:#b2dfdb}.picker__date-display .clockpicker-display .clockpicker-display-column{float:left}.picker__date-display .clockpicker-display .clockpicker-display-column #click-am.text-primary,.picker__date-display .clockpicker-display .clockpicker-display-column #click-pm.text-primary,.picker__date-display .clockpicker-display .clockpicker-display-column .clockpicker-span-hours.text-primary,.picker__date-display .clockpicker-display .clockpicker-display-column .clockpicker-span-minutes.text-primary{-webkit-animation-name:pulse;animation-name:pulse;color:#fff!important}.picker__date-display .clockpicker-display .clockpicker-display-column #click-am,.picker__date-display .clockpicker-display .clockpicker-display-column #click-pm{cursor:pointer}.picker__date-display .clockpicker-display .clockpicker-display-am-pm{padding-left:.3125rem;vertical-align:bottom;height:5.3125rem}.picker__date-display .clockpicker-display .clockpicker-display-am-pm .clockpicker-span-am-pm{display:inline-block;font-size:1.4375rem;line-height:1.5625rem;color:#b2dfdb}.picker__date-display .clockpicker-display .clockpicker-span-hours,.picker__date-display .clockpicker-display .clockpicker-span-minutes{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;transition:color .5s;cursor:pointer}.clockpicker-display{text-align:center;vertical-align:middle;display:inline-block;margin:auto;height:5.3125rem;font-size:4.375rem;padding:.625rem .625rem 0;color:#b2dfdb}.clockpicker-display .clockpicker-display-column{float:left}.clockpicker-display .clockpicker-display-column #click-am.text-primary,.clockpicker-display .clockpicker-display-column #click-pm.text-primary,.clockpicker-display .clockpicker-display-column .clockpicker-span-hours.text-primary,.clockpicker-display .clockpicker-display-column .clockpicker-span-minutes.text-primary{-webkit-animation-name:pulse;animation-name:pulse;color:#fff}.clockpicker-display .clockpicker-display-column #click-am,.clockpicker-display .clockpicker-display-column #click-pm{cursor:pointer}.clockpicker-display .clockpicker-display-am-pm{padding-left:.3125rem;vertical-align:bottom;height:5.3125rem}.clockpicker-display .clockpicker-display-am-pm .clockpicker-span-am-pm{display:inline-block;font-size:1.4375rem;line-height:1.5625rem;color:#b2dfdb}.clockpicker-display .clockpicker-span-hours,.clockpicker-display .clockpicker-span-minutes{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;cursor:pointer;transition:color .5s}@-webkit-keyframes pulse{from,to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}50%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}@keyframes pulse{from,to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}50%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}}.clockpicker-moving{cursor:move}.clockpicker-plate{background-color:#eee;border-radius:50%;width:16.875rem;height:16.875rem;overflow:visible;position:relative;margin:1.25rem auto auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.clockpicker-plate .clockpicker-canvas,.clockpicker-plate .clockpicker-dial{width:16.875rem;height:16.875rem;position:absolute;left:-1px;top:-1px}.clockpicker-plate .clockpicker-dial{transition:transform 350ms,opacity 350ms,-webkit-transform 350ms}.clockpicker-plate .clockpicker-dial .clockpicker-tick{border-radius:50%;color:#666;line-height:2.5rem;text-align:center;width:2.5rem;height:2.5rem;position:absolute;cursor:pointer;transition:background-color .3s;background-color:rgba(0,150,136,0)}.clockpicker-plate .clockpicker-dial .clockpicker-tick.active,.clockpicker-plate .clockpicker-dial .clockpicker-tick:hover{background-color:rgba(0,150,136,.25)}.clockpicker-plate .clockpicker-minutes{visibility:hidden}.clockpicker-plate .clockpicker-dial-out{opacity:0}.clockpicker-plate .clockpicker-hours.clockpicker-dial-out{-webkit-transform:scale(1.2,1.2);transform:scale(1.2,1.2)}.clockpicker-plate .clockpicker-minutes.clockpicker-dial-out{-webkit-transform:scale(.8,.8);transform:scale(.8,.8)}.clockpicker-canvas{transition:opacity .3s}.clockpicker-canvas line{stroke:rgba(0,150,136,.25);stroke-width:1}.clockpicker-canvas-out{opacity:.25}.clockpicker-canvas-bearing{stroke:none;fill:rgba(0,77,64,.75)}.clockpicker-canvas-fg{stroke:none;fill:rgba(0,77,64,0)}.clockpicker-canvas-fg.active{fill:rgba(0,77,64,.5)}.clockpicker-canvas-bg{stroke:none;fill:rgba(0,150,136,.25)}.clockpicker-canvas-bg-trans{fill:rgba(0,150,136,.25)}.clockpicker-am-pm-block{margin-top:-.625rem;width:100%;height:3.125rem}.clockpicker-am-pm-block .clockpicker-button.am-button{height:2.8125rem;width:2.8125rem;float:left;border:0}.clockpicker-am-pm-block .clockpicker-button.pm-button{height:2.8125rem;width:2.8125rem;float:right;border:0}.btn-floating.btn-flat{color:#fff;padding:0;background:#4285f4}.btn-floating.btn-flat:hover{box-shadow:none}.btn-floating.btn-flat:focus,.btn-floating.btn-flat:hover{background-color:#5a95f5!important}.btn-floating.btn-flat.active{background-color:#0b51c5!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.picker__footer{width:100%}.picker__footer .clockpicker-button{margin:.9375rem auto auto;background-color:transparent;text-transform:uppercase}.picker__footer .clockpicker-button:focus{background-color:transparent}.picker__footer .clockpicker-button:active{background-color:rgba(0,150,136,.25)}.darktheme .picker__box{background-color:#212121}.darktheme .picker__box .picker__date-display{background-color:transparent}.darktheme .picker__box .picker__date-display .clockpicker-display,.darktheme .picker__box .picker__date-display .clockpicker-display .clockpicker-span-am-pm{color:#fff}.darktheme .picker__box .picker__calendar-container .clockpicker-plate{background-color:transparent}.darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-tick{color:#fff;background-color:rgba(255,64,129,0)}.darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-tick.active,.darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-tick:hover{background-color:rgba(255,64,129,.25)}.darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas line{stroke:rgba(255,64,129,.25)}.darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas-bearing{fill:#fff}.darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas-fg{fill:rgba(255,64,129,0)}.darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas-fg.active{fill:rgba(255,64,129,.5)}.darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas-bg{fill:rgba(255,64,129,.25)}.darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas-bg-trans{fill:rgba(255,64,129,.5)}.darktheme .picker__box .picker__footer button{color:#fff!important}.darktheme .picker__box .picker__footer .clockpicker-button:active{background-color:rgba(255,64,129,.25)}.hand-move .clockpicker-tick{cursor:all-scroll!important}.clockpicker-button{cursor:pointer;transition:.3s}.clockpicker-button:hover{background-color:rgba(0,150,136,.25)}.darktheme .clockpicker-button:hover{background-color:rgba(255,64,129,.25)}.validate-success.ng-valid .timepicker{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}.validate-success.ng-valid .md-outline .timepicker{border:1px solid #00c851!important;box-shadow:inset 0 0 0 1px #00c851!important}.validate-success.ng-valid .tp label{color:#00c851!important}.validate-success.ng-valid .tp .md-outline label{color:inherit!important;font-weight:400!important}.form-submitted .validate-error.ng-invalid .timepicker,.validate-error.ng-invalid.ng-touched .timepicker{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.form-submitted .validate-error.ng-invalid .md-outline .timepicker,.validate-error.ng-invalid.ng-touched .md-outline .timepicker{border:1px solid #f44336!important;box-shadow:inset 0 0 0 1px #f44336!important}.form-submitted .validate-error.ng-invalid .tp label,.validate-error.ng-invalid.ng-touched .tp label{color:#f44336!important}.form-submitted .validate-error.ng-invalid .tp .md-outline label,.validate-error.ng-invalid.ng-touched .tp .md-outline label{color:inherit!important;font-weight:400!important}.md-outline input:focus>label.active{color:#4285f4}.md-outline .timepicker{height:36px!important}.clockpicker-button.am-button,.clockpicker-button.pm-button{color:#fff!important}"]
            }] }
];
/** @nocollapse */
ClockPickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
ClockPickerComponent.propDecorators = {
    hoursPlate: [{ type: ViewChild, args: ['hoursPlate', { static: true },] }],
    minutesPlate: [{ type: ViewChild, args: ['minutesPlate', { static: true },] }],
    plate: [{ type: ViewChild, args: ['plate', { static: true },] }],
    svg: [{ type: ViewChild, args: ['svg', { static: true },] }],
    g: [{ type: ViewChild, args: ['g', { static: true },] }],
    hand: [{ type: ViewChild, args: ['hand', { static: true },] }],
    fg: [{ type: ViewChild, args: ['fg', { static: true },] }],
    bg: [{ type: ViewChild, args: ['bg', { static: true },] }],
    bearing: [{ type: ViewChild, args: ['bearing', { static: true },] }],
    twelvehour: [{ type: Input }],
    darktheme: [{ type: Input }],
    placeholder: [{ type: Input }],
    label: [{ type: Input }],
    duration: [{ type: Input }],
    showClock: [{ type: Input }],
    buttonLabel: [{ type: Input }],
    buttonClear: [{ type: Input }],
    buttonClose: [{ type: Input }],
    buttonClearLabel: [{ type: Input }],
    buttonCloseLabel: [{ type: Input }],
    disabled: [{ type: Input }],
    tabIndex: [{ type: Input }],
    outlineInput: [{ type: Input }],
    openOnFocus: [{ type: Input }],
    readonly: [{ type: Input }],
    ampmClass: [{ type: Input }],
    footerClass: [{ type: Input }],
    timeChanged: [{ type: Output }],
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
    ClockPickerComponent.prototype.buttonClear;
    /** @type {?} */
    ClockPickerComponent.prototype.buttonClose;
    /** @type {?} */
    ClockPickerComponent.prototype.buttonClearLabel;
    /** @type {?} */
    ClockPickerComponent.prototype.buttonCloseLabel;
    /** @type {?} */
    ClockPickerComponent.prototype.disabled;
    /** @type {?} */
    ClockPickerComponent.prototype.tabIndex;
    /** @type {?} */
    ClockPickerComponent.prototype.outlineInput;
    /** @type {?} */
    ClockPickerComponent.prototype.openOnFocus;
    /** @type {?} */
    ClockPickerComponent.prototype.readonly;
    /** @type {?} */
    ClockPickerComponent.prototype.ampmClass;
    /** @type {?} */
    ClockPickerComponent.prototype.footerClass;
    /** @type {?} */
    ClockPickerComponent.prototype.timeChanged;
    /** @type {?} */
    ClockPickerComponent.prototype.isOpen;
    /** @type {?} */
    ClockPickerComponent.prototype.isMobile;
    /** @type {?} */
    ClockPickerComponent.prototype.touchDevice;
    /** @type {?} */
    ClockPickerComponent.prototype.showHours;
    /** @type {?} */
    ClockPickerComponent.prototype.moveEvent;
    /** @type {?} */
    ClockPickerComponent.prototype.tapEvent;
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
    ClockPickerComponent.prototype.isMouseDown;
    /** @type {?} */
    ClockPickerComponent.prototype.documentClickFun;
    /** @type {?} */
    ClockPickerComponent.prototype.onChangeCb;
    /** @type {?} */
    ClockPickerComponent.prototype.onTouchedCb;
    /** @type {?} */
    ClockPickerComponent.prototype.elem;
    /** @type {?} */
    ClockPickerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ClockPickerComponent.prototype._cdRef;
    /**
     * @type {?}
     * @private
     */
    ClockPickerComponent.prototype._ngZone;
    /**
     * @type {?}
     * @private
     */
    ClockPickerComponent.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3RpbWUtcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFOUQsTUFBTSxPQUFPLDJCQUEyQixHQUFRO0lBQzlDLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQztJQUNuRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBVUQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7O0lBNEQvQixZQUNTLElBQWdCLEVBQ2hCLFFBQW1CLEVBQ2xCLE1BQXlCLEVBQ3pCLE9BQWUsRUFDRyxTQUFjLEVBQ25CLFVBQWtCO1FBTGhDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ0csY0FBUyxHQUFULFNBQVMsQ0FBSztRQXBEakMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdB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O0lBQ3JCLDJDQUFrRTs7SUFDbEUseUNBQWtCOztJQUNsQix5Q0FBa0I7O0lBQ2xCLHdDQUFpQjs7SUFFakIsd0NBQWlFOztJQUNqRSw2Q0FBMEI7O0lBRTFCLDBDQUFpQjs7SUFDakIsMkNBQWtCOztJQUNsQiwyQ0FBaUI7O0lBQ2pCLDBDQUFnQjs7SUFDaEIsd0NBQStCOztJQUMvQix5Q0FBdUI7O0lBRXZCLDBDQUFxQjs7SUFDckIsNENBQXVCOztJQUN2Qiw2Q0FBc0Q7O0lBQ3RELHdDQUFjOztJQUVkLDhDQUErQzs7SUFDL0MsOENBQStFOztJQUMvRSw4Q0FBOEU7O0lBQzlFLDRDQUF5RTs7SUFDekUsMkNBQW9COztJQUNwQixnREFBMkI7O0lBdWIzQiwwQ0FBd0M7O0lBQ3hDLDJDQUFtQzs7SUF0YmpDLG9DQUF1Qjs7SUFDdkIsd0NBQTBCOzs7OztJQUMxQixzQ0FBaUM7Ozs7O0lBQ2pDLHVDQUF1Qjs7Ozs7SUFDdkIseUNBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUExBVEZPUk1fSUQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBOZ1pvbmUsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5leHBvcnQgY29uc3QgVElNRV9QSVJDS0VSX1ZBTFVFX0FDQ0VTU09UOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmVcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbG9ja1BpY2tlckNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWUsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21kYi10aW1lLXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RpbWUtcGlja2VyLW1vZHVsZS5zY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtUSU1FX1BJUkNLRVJfVkFMVUVfQUNDRVNTT1RdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xvY2tQaWNrZXJDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyQ29udGVudENoZWNrZWQge1xyXG4gIEBWaWV3Q2hpbGQoJ2hvdXJzUGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgaG91cnNQbGF0ZTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdtaW51dGVzUGxhdGUnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgbWludXRlc1BsYXRlOiBFbGVtZW50UmVmO1xyXG5cclxuICBAVmlld0NoaWxkKCdwbGF0ZScsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBwbGF0ZTogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdzdmcnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgc3ZnOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2cnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgZzogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdoYW5kJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGhhbmQ6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZmcnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgZmc6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYmcnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgYmc6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYmVhcmluZycsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBiZWFyaW5nOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSB0d2VsdmVob3VyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGFya3RoZW1lID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IFN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgZHVyYXRpb24gPSAzMDA7XHJcbiAgQElucHV0KCkgc2hvd0Nsb2NrID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYnV0dG9uTGFiZWwgPSAnRG9uZSc7XHJcbiAgQElucHV0KCkgYnV0dG9uQ2xlYXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGJ1dHRvbkNsb3NlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYnV0dG9uQ2xlYXJMYWJlbCA9ICdDbGVhcic7XHJcbiAgQElucHV0KCkgYnV0dG9uQ2xvc2VMYWJlbCA9ICdDbG9zZSc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB0YWJJbmRleDogYW55O1xyXG4gIEBJbnB1dCgpIG91dGxpbmVJbnB1dCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG9wZW5PbkZvY3VzID0gdHJ1ZTtcclxuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGFtcG1DbGFzcyA9ICcnO1xyXG4gIEBJbnB1dCgpIGZvb3RlckNsYXNzID0gJyc7XHJcbiAgQE91dHB1dCgpIHRpbWVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIGlzT3BlbiA9IGZhbHNlO1xyXG4gIGlzTW9iaWxlOiBhbnkgPSBudWxsO1xyXG4gIHRvdWNoRGV2aWNlID0gJ29udG91Y2hzdGFydCcgaW4gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBhcyBhbnkpO1xyXG4gIHNob3dIb3VycyA9IGZhbHNlO1xyXG4gIG1vdmVFdmVudDogc3RyaW5nO1xyXG4gIHRhcEV2ZW50OiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb2NrcGlja2VyJyk7XHJcbiAgcHVibGljIGVsZW1lbnROdW1iZXI6IGFueTtcclxuXHJcbiAgZGlhbFJhZGl1cyA9IDEzNTtcclxuICBvdXRlclJhZGl1cyA9IDExMDtcclxuICBpbm5lclJhZGl1cyA9IDgwO1xyXG4gIHRpY2tSYWRpdXMgPSAyMDtcclxuICBkaWFtZXRlciA9IHRoaXMuZGlhbFJhZGl1cyAqIDI7XHJcbiAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcclxuXHJcbiAgaG91cnNUaWNrczogYW55ID0gW107XHJcbiAgbWludXRlc1RpY2tzOiBhbnkgPSBbXTtcclxuICBzZWxlY3RlZEhvdXJzOiBhbnkgPSB7IGg6ICcxMicsIG06ICcwMCcsIGFtcG06ICdBTScgfTtcclxuICBlbmRIb3VycyA9ICcnO1xyXG5cclxuICB0b3VjaFN1cHBvcnRlZDogYW55ID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xyXG4gIG1vdXNlZG93bkV2ZW50OiBhbnkgPSAnbW91c2Vkb3duJyArICh0aGlzLnRvdWNoU3VwcG9ydGVkID8gJyB0b3VjaHN0YXJ0JyA6ICcnKTtcclxuICBtb3VzZW1vdmVFdmVudDogYW55ID0gJ21vdXNlbW92ZScgKyAodGhpcy50b3VjaFN1cHBvcnRlZCA/ICcgdG91Y2htb3ZlJyA6ICcnKTtcclxuICBtb3VzZXVwRXZlbnQ6IGFueSA9ICdtb3VzZXVwJyArICh0aGlzLnRvdWNoU3VwcG9ydGVkID8gJyB0b3VjaGVuZCcgOiAnJyk7XHJcbiAgaXNNb3VzZURvd24gPSBmYWxzZTtcclxuICBkb2N1bWVudENsaWNrRnVuOiBGdW5jdGlvbjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbGVtOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9jZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnksXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XHJcbiAgICByZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnNob3dDbG9jayAmJlxyXG4gICAgICAgIGV2ZW50LnRhcmdldCAmJlxyXG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcclxuICAgICAgICAhdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnNob3dDbG9jayA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwaWNrZXJfX2hvbGRlcicpKSB7XHJcbiAgICAgICAgdGhpcy5zaG93Q2xvY2sgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd0b3VjaG1vdmUnLCBbJyRldmVudCddKSBvbnRvdWNobW92ZShldmVudDogYW55KSB7XHJcbiAgICB0aGlzLm1vdXNlZG93bihldmVudCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZ2VuZXJhdGVUaWNrKCk7XHJcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5pc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXNPcGVuID0gdGhpcy5zaG93Q2xvY2s7XHJcbiAgICB0aGlzLl9oYW5kbGVPdXRzaWRlQ2xpY2soKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIFsnbW91c2Vkb3duJywgJ21vdXNldXAnXS5mb3JFYWNoKChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKFxyXG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9ja3BpY2tlci1wbGF0ZScpLFxyXG4gICAgICAgIGV2ZW50LFxyXG4gICAgICAgIChldjogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQgPT09ICdtb3VzZWRvd24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2Vkb3duKGV2LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3VzZURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pc01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xyXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIC8vIEZpeCBmb3IgdmlzaWJsZSBkYXRlIC8gdGltZSBwaWNrZXIgaW5wdXQgd2hlbiBwaWNrZXIgcGxhdGUgaXMgdmlzaWJsZS5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcGVuZWRQaWNrZXI6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWNrZXItLW9wZW5lZCcpO1xyXG4gICAgICAgIGNvbnN0IGFsbFBpY2tlcnM6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waWNrZXInKTtcclxuICAgICAgICBhbGxQaWNrZXJzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnei1pbmRleCcsICcwJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShvcGVuZWRQaWNrZXIsICd6LWluZGV4JywgJzEwMDAnKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja0RyYXcoKSB7XHJcbiAgICBsZXQgdmFsdWU7XHJcbiAgICBjb25zdCBpc0hvdXJzID0gdGhpcy5zaG93SG91cnM7XHJcbiAgICBpZiAoaXNIb3Vycykge1xyXG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHRoaXMuc2VsZWN0ZWRIb3Vycy5oLCAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodGhpcy5zZWxlY3RlZEhvdXJzLm0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVuaXQgPSBNYXRoLlBJIC8gKGlzSG91cnMgPyA2IDogMzApLFxyXG4gICAgICByYWRpYW4gPSB2YWx1ZSAqIHVuaXQsXHJcbiAgICAgIHJhZGl1cyA9IGlzSG91cnMgJiYgdmFsdWUgPiAwICYmIHZhbHVlIDwgMTMgPyB0aGlzLmlubmVyUmFkaXVzIDogdGhpcy5vdXRlclJhZGl1cyxcclxuICAgICAgeGQgPSBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzLFxyXG4gICAgICB5ZCA9IC1NYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzO1xyXG4gICAgdGhpcy5zZXRIYW5kKHhkLCB5ZCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgbW91c2Vkb3duKGU6IGFueSwgc3BhY2U/OiBhbnkpIHtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMucGxhdGUubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgICAgaXNUb3VjaCA9IC9edG91Y2gvLnRlc3QoZS50eXBlKSxcclxuICAgICAgeDAgPSBvZmZzZXQubGVmdCArIHRoaXMuZGlhbFJhZGl1cyxcclxuICAgICAgeTAgPSBvZmZzZXQudG9wICsgdGhpcy5kaWFsUmFkaXVzLFxyXG4gICAgICBkeCA9IChpc1RvdWNoID8gZS50b3VjaGVzWzBdIDogZSkuY2xpZW50WCAtIHgwLFxyXG4gICAgICBkeSA9IChpc1RvdWNoID8gZS50b3VjaGVzWzBdIDogZSkuY2xpZW50WSAtIHkwLFxyXG4gICAgICB6ID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgc3BhY2UgJiZcclxuICAgICAgKHogPCB0aGlzLm91dGVyUmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzIHx8IHogPiB0aGlzLm91dGVyUmFkaXVzICsgdGhpcy50aWNrUmFkaXVzKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd0hvdXJzKSB7XHJcbiAgICAgIHRoaXMuc2V0SGFuZChkeCwgZHksIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRIYW5kKGR4LCBkeSwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdXNlbW92ZUV2ZW50TWV0aG9kID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYIC0geDAsXHJcbiAgICAgICAgeSA9IGV2ZW50LmNsaWVudFkgLSB5MDtcclxuICAgICAgaWYgKCFtb3ZlZCAmJiB4ID09PSBkeCAmJiB5ID09PSBkeSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBtb3ZlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldEhhbmQoeCwgeSwgZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbW91c2V1cEV2ZW50TWV0aG9kID0gKGV2ZW50OiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5fZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdXNlbW92ZUV2ZW50LCBtb3VzZW1vdmVFdmVudE1ldGhvZCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgeCA9IGV2ZW50LmNsaWVudFggLSB4MCxcclxuICAgICAgICB5ID0gZXZlbnQuY2xpZW50WCAtIHkwO1xyXG4gICAgICBpZiAoKHNwYWNlIHx8IG1vdmVkKSAmJiB4ID09PSBkeCAmJiB5ID09PSBkeSkge1xyXG4gICAgICAgIHRoaXMuc2V0SGFuZCh4LCB5LCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaG93TWludXRlc0Nsb2NrKCk7XHJcbiAgICAgIHRoaXMuX2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3VzZXVwRXZlbnQsIG1vdXNldXBFdmVudE1ldGhvZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3VzZW1vdmVFdmVudCwgbW91c2Vtb3ZlRXZlbnRNZXRob2QpO1xyXG4gICAgICB0aGlzLl9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW91c2V1cEV2ZW50LCBtb3VzZXVwRXZlbnRNZXRob2QpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlS2V5Ym9hcmQoKSB7XHJcbiAgICAvLyB0aGlzIHNldCB0aW1lb3V0IG5lZWRlZCBmb3IgY2FzZSB3aGVuIGhpZGVLZXlib3JhZFxyXG4gICAgLy8gaXMgY2FsbGVkIGluc2lkZSBvZiAnb25mb2N1cycgZXZlbnQgaGFuZGxlclxyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gY3JlYXRpbmcgdGVtcCBmaWVsZFxyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIGZpZWxkKTtcclxuICAgICAgICBjb25zdCBpbnB1dFJlZmVyZW5jZSA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXRSZWZlcmVuY2UsICd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbnB1dFJlZmVyZW5jZSwgJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5wdXRSZWZlcmVuY2UsICdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlucHV0UmVmZXJlbmNlLCAnLXdlYmtpdC11c2VyLW1vZGlmeScsICdyZWFkLXdyaXRlLXBsYWludGV4dC1vbmx5Jyk7XHJcbiAgICAgICAgLy8gLy8gaGlkaW5nIHRlbXAgZmllbGQgZnJvbSBwZW9wbGVzIGV5ZXNcclxuICAgICAgICAvLyAvLyAtd2Via2l0LXVzZXItbW9kaWZ5IGlzIG5lc3Nlc2FyeSBmb3IgQW5kcm9pZCA0LnhcclxuICAgICAgICAvLyBhZGRpbmcgb25mb2N1cyBldmVudCBoYW5kbGVyIGZvciBvdXQgdGVtcCBmaWVsZFxyXG4gICAgICAgIGZpZWxkLm9uZm9jdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAvLyB0aGlzIHRpbWVvdXQgb2YgMjAwbXMgaXMgbmVzc2FzYXJ5IGZvciBBbmRyb2lkIDIuMy54XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShmaWVsZCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCBmaWVsZCk7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gZm9jdXNpbmcgaXRcclxuICAgICAgICBmaWVsZC5mb2N1cygpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gIH1cclxuXHJcbiAgb25Gb2N1c0lucHV0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3Blbk9uRm9jdXMgJiYgIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHRoaXMub3BlbkJ0bkNsaWNrZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5CdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gICAgdGhpcy5zaG93Q2xvY2sgPSB0cnVlO1xyXG4gICAgdGhpcy5zaG93SG91cnMgPSB0cnVlO1xyXG4gICAgdGhpcy5jaGVja0RyYXcoKTtcclxuICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgIHRoaXMuaGlkZUtleWJvYXJkKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9oYW5kbGVPdXRzaWRlQ2xpY2soKTtcclxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGFuZGxlT3V0c2lkZUNsaWNrKCkge1xyXG4gICAgY29uc3QgcGlja2VySG9sZGVyID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBpY2tlcl9faG9sZGVyJyk7XHJcbiAgICB0aGlzLmRvY3VtZW50Q2xpY2tGdW4gPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihwaWNrZXJIb2xkZXIsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucGlja2VyX193cmFwJyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYgIXdyYXBwZXIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZUJ0bkNsaWNrZWQoKSB7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgY29uc3QgaCA9IHRoaXMuc2VsZWN0ZWRIb3Vycy5oO1xyXG4gICAgY29uc3QgbSA9IHRoaXMuc2VsZWN0ZWRIb3Vycy5tO1xyXG4gICAgY29uc3QgYW1wbSA9IHRoaXMuc2VsZWN0ZWRIb3Vycy5hbXBtO1xyXG5cclxuICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgdGhpcy5lbmRIb3VycyA9IGggKyAnOicgKyBtICsgYW1wbTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZW5kSG91cnMgPSBoICsgJzonICsgbTtcclxuICAgIH1cclxuICAgIHRoaXMub25DaGFuZ2VDYih0aGlzLmVuZEhvdXJzKTtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgIHRoaXMudGltZUNoYW5nZWQuZW1pdCh0aGlzLmVuZEhvdXJzKTtcclxuICAgIHRoaXMuc2hvd0Nsb2NrID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKHRoaXMuZG9jdW1lbnRDbGlja0Z1bikge1xyXG4gICAgICB0aGlzLmRvY3VtZW50Q2xpY2tGdW4oKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaG93Q2xvY2sgPSBmYWxzZTtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuXHJcbiAgICBpZiAodGhpcy5kb2N1bWVudENsaWNrRnVuKSB7XHJcbiAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0Z1bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJUaW1lSW5wdXQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSG91cnMgPSB7IGg6ICcxMicsIG06ICcwMCcsIGFtcG06ICdBTScgfTtcclxuICAgIHRoaXMuZW5kSG91cnMgPSAnJztcclxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5vbkNoYW5nZUNiKHRoaXMuZW5kSG91cnMpO1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgdGhpcy50aW1lQ2hhbmdlZC5lbWl0KHRoaXMuZW5kSG91cnMpO1xyXG4gIH1cclxuXHJcbiAgc2V0SG91cihob3VyOiBTdHJpbmcpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRIb3Vycy5oID0gaG91cjtcclxuICB9XHJcblxyXG4gIHNldE1pbnV0ZShtaW46IFN0cmluZykge1xyXG4gICAgdGhpcy5zZWxlY3RlZEhvdXJzLm0gPSBtaW47XHJcbiAgfVxyXG5cclxuICBzZXRBbVBtKGFtcG06IFN0cmluZykge1xyXG4gICAgdGhpcy5zZWxlY3RlZEhvdXJzLmFtcG0gPSBhbXBtO1xyXG4gIH1cclxuXHJcbiAgc2hvd0hvdXJzQ2xvY2soKSB7XHJcbiAgICB0aGlzLnNob3dIb3VycyA9IHRydWU7XHJcbiAgICB0aGlzLmNoZWNrRHJhdygpO1xyXG4gIH1cclxuXHJcbiAgc2hvd01pbnV0ZXNDbG9jaygpIHtcclxuICAgIHRoaXMuc2hvd0hvdXJzID0gZmFsc2U7XHJcbiAgICB0aGlzLmNoZWNrRHJhdygpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVUaWNrKCkge1xyXG4gICAgaWYgKHRoaXMudHdlbHZlaG91cikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IDEzOyBpKyspIHtcclxuICAgICAgICBjb25zdCByYWRpYW4gPSAoaSAvIDYpICogTWF0aC5QSTtcclxuICAgICAgICBjb25zdCByYWRpdXMgPSB0aGlzLm91dGVyUmFkaXVzO1xyXG5cclxuICAgICAgICBjb25zdCB0aWNrID0ge1xyXG4gICAgICAgICAgaG91cjogaSxcclxuICAgICAgICAgIGxlZnQ6IHRoaXMuZGlhbFJhZGl1cyArIE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMsXHJcbiAgICAgICAgICB0b3A6IHRoaXMuZGlhbFJhZGl1cyAtIE1hdGguY29zKHJhZGlhbikgKiByYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmhvdXJzVGlja3MucHVzaCh0aWNrKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcmFkaWFuID0gKGkgLyA2KSAqIE1hdGguUEk7XHJcbiAgICAgICAgY29uc3QgaW5uZXIgPSBpID4gMCAmJiBpIDwgMTM7XHJcbiAgICAgICAgY29uc3QgcmFkaXVzID0gaW5uZXIgPyB0aGlzLmlubmVyUmFkaXVzIDogdGhpcy5vdXRlclJhZGl1cztcclxuICAgICAgICBsZXQgaDtcclxuXHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGggPSAnMCcgKyBpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGggPSBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGljayA9IHtcclxuICAgICAgICAgIGhvdXI6IGgsXHJcbiAgICAgICAgICBsZWZ0OiB0aGlzLmRpYWxSYWRpdXMgKyBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzLFxyXG4gICAgICAgICAgdG9wOiB0aGlzLmRpYWxSYWRpdXMgLSBNYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzIC0gdGhpcy50aWNrUmFkaXVzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5ob3Vyc1RpY2tzLnB1c2godGljayk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpICs9IDUpIHtcclxuICAgICAgY29uc3QgcmFkaWFuID0gKGkgLyAzMCkgKiBNYXRoLlBJO1xyXG4gICAgICBsZXQgbWluID0gaS50b1N0cmluZygpO1xyXG4gICAgICBpZiAoaSA8IDEwKSB7XHJcbiAgICAgICAgbWluID0gJzAnICsgaS50b1N0cmluZygpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHRpY2sgPSB7XHJcbiAgICAgICAgbWluOiBtaW4sXHJcbiAgICAgICAgbGVmdDogdGhpcy5kaWFsUmFkaXVzICsgTWF0aC5zaW4ocmFkaWFuKSAqIHRoaXMub3V0ZXJSYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMsXHJcbiAgICAgICAgdG9wOiB0aGlzLmRpYWxSYWRpdXMgLSBNYXRoLmNvcyhyYWRpYW4pICogdGhpcy5vdXRlclJhZGl1cyAtIHRoaXMudGlja1JhZGl1cyxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5taW51dGVzVGlja3MucHVzaCh0aWNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEhhbmQoeDogYW55LCB5OiBhbnksIHJvdW5kQnk1OiBhbnkpIHtcclxuICAgIGxldCByYWRpYW4gPSBNYXRoLmF0YW4yKHgsIC15KTtcclxuICAgIGNvbnN0IGlzSG91cnMgPSB0aGlzLnNob3dIb3VycztcclxuICAgIGNvbnN0IHVuaXQgPSBNYXRoLlBJIC8gKGlzSG91cnMgfHwgcm91bmRCeTUgPyA2IDogMzApO1xyXG4gICAgY29uc3QgeiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcclxuICAgIGNvbnN0IGlubmVyID0gaXNIb3VycyAmJiB6IDwgKHRoaXMub3V0ZXJSYWRpdXMgKyB0aGlzLmlubmVyUmFkaXVzKSAvIDI7XHJcbiAgICBsZXQgcmFkaXVzID0gaW5uZXIgPyB0aGlzLmlubmVyUmFkaXVzIDogdGhpcy5vdXRlclJhZGl1cztcclxuICAgIGxldCB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zaG93SG91cnMpIHtcclxuICAgICAgdmFsdWUgPSBwYXJzZUludCh0aGlzLnNlbGVjdGVkSG91cnMuaCwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KHRoaXMuc2VsZWN0ZWRIb3Vycy5tLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy50d2VsdmVob3VyKSB7XHJcbiAgICAgIHJhZGl1cyA9IHRoaXMub3V0ZXJSYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJhZGlhbiA8IDApIHtcclxuICAgICAgcmFkaWFuID0gTWF0aC5QSSAqIDIgKyByYWRpYW47XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWUgPSBNYXRoLnJvdW5kKHJhZGlhbiAvIHVuaXQpO1xyXG4gICAgcmFkaWFuID0gdmFsdWUgKiB1bml0O1xyXG5cclxuICAgIGlmICh0aGlzLnR3ZWx2ZWhvdXIpIHtcclxuICAgICAgaWYgKGlzSG91cnMpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IDApIHtcclxuICAgICAgICAgIHZhbHVlID0gMTI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChyb3VuZEJ5NSkge1xyXG4gICAgICAgICAgdmFsdWUgKj0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSA2MCkge1xyXG4gICAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGlzSG91cnMpIHtcclxuICAgICAgICB2YWx1ZSA9ICFpbm5lciA/IHZhbHVlICsgMTIgOiB2YWx1ZTtcclxuICAgICAgICB2YWx1ZSA9IHZhbHVlID09PSAyNCA/IDAgOiB2YWx1ZTtcclxuICAgICAgICB2YWx1ZSA9IGlubmVyICYmIHZhbHVlID09PSAwID8gMTIgOiB2YWx1ZTtcclxuICAgICAgICB2YWx1ZSA9ICFpbm5lciAmJiB2YWx1ZSA9PT0gMTIgPyAwIDogdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHJvdW5kQnk1KSB7XHJcbiAgICAgICAgICB2YWx1ZSAqPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgPT09IDYwKSB7XHJcbiAgICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzSG91cnMpIHtcclxuICAgICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2xvY2twaWNrZXItY2FudmFzLWZnJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodmFsdWUgJSA1ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2xvY2twaWNrZXItY2FudmFzLWZnJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2xvY2twaWNrZXItY2FudmFzLWZnIGFjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3gxID0gTWF0aC5zaW4ocmFkaWFuKSAqIChyYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMpLFxyXG4gICAgICBjeTEgPSAtTWF0aC5jb3MocmFkaWFuKSAqIChyYWRpdXMgLSB0aGlzLnRpY2tSYWRpdXMpLFxyXG4gICAgICBjeDIgPSBNYXRoLnNpbihyYWRpYW4pICogcmFkaXVzLFxyXG4gICAgICBjeTIgPSAtTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cztcclxuXHJcbiAgICB0aGlzLmhhbmQubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3gyJywgY3gxKTtcclxuICAgIHRoaXMuaGFuZC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgneTInLCBjeTEpO1xyXG4gICAgdGhpcy5iZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3gnLCBjeDIpO1xyXG4gICAgdGhpcy5iZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3knLCBjeTIpO1xyXG4gICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3gnLCBjeDIpO1xyXG4gICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3knLCBjeTIpO1xyXG5cclxuICAgIGlmICh0aGlzLnNob3dIb3Vycykge1xyXG4gICAgICBpZiAodmFsdWUgPCAxMCkge1xyXG4gICAgICAgIHRoaXMuc2V0SG91cignMCcgKyB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldEhvdXIodmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2YWx1ZSA8IDEwKSB7XHJcbiAgICAgICAgdGhpcy5zZXRNaW51dGUoJzAnICsgdmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRNaW51dGUodmFsdWUudG9TdHJpbmcoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG9mZnNldChvYmo6IGFueSkge1xyXG4gICAgbGV0IGxlZnQgPSAwLFxyXG4gICAgICB0b3AgPSAwO1xyXG5cclxuICAgIGlmIChvYmoub2Zmc2V0UGFyZW50KSB7XHJcbiAgICAgIGRvIHtcclxuICAgICAgICBsZWZ0ICs9IG9iai5vZmZzZXRMZWZ0O1xyXG4gICAgICAgIHRvcCArPSBvYmoub2Zmc2V0VG9wO1xyXG4gICAgICB9IHdoaWxlICgob2JqID0gb2JqLm9mZnNldFBhcmVudCkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbGVmdCwgdG9wIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRGb3JtYXR0ZWRUaW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHRpbWVBcnIgPSB2YWx1ZS5zcGxpdCgnOicpO1xyXG4gICAgY29uc3QgbWludXRlc1ZhbCA9IHRpbWVBcnJbMV07XHJcblxyXG4gICAgY29uc3QgaCA9IHRpbWVBcnJbMF07XHJcbiAgICBjb25zdCBtID0gbWludXRlc1ZhbC5zbGljZSgwLCAyKTtcclxuICAgIGNvbnN0IGFtcG0gPSBtaW51dGVzVmFsLmxlbmd0aCA+IDIgPyBtaW51dGVzVmFsLnNsaWNlKC0yKSA6ICcnO1xyXG5cclxuICAgIHJldHVybiB7IGgsIG0sIGFtcG0gfTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlQ2I6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuICBvblRvdWNoZWRDYjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNob3dIb3VycyA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLl9nZXRGb3JtYXR0ZWRUaW1lKHZhbHVlKTtcclxuICAgICAgdGhpcy5zZXRIb3VyKHRpbWUuaCk7XHJcbiAgICAgIHRoaXMuc2V0TWludXRlKHRpbWUubSk7XHJcbiAgICAgIHRoaXMuc2V0QW1QbSh0aW1lLmFtcG0pO1xyXG5cclxuICAgICAgdGhpcy5lbmRIb3VycyA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jbGVhclRpbWVJbnB1dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2IgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2IgPSBmbjtcclxuICB9XHJcbn1cclxuIl19