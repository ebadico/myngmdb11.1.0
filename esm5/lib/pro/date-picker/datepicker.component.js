/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewEncapsulation, Renderer2, forwardRef, ViewChild, PLATFORM_ID, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LocaleService } from './services/datepickerLocale.service';
import { UtilService } from './services/datepickerUtil.service';
import { isPlatformBrowser } from '@angular/common';
/** @type {?} */
export var MYDP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return MDBDatePickerComponent; })),
    multi: true
};
/** @enum {number} */
var CalToggle = {
    Open: 1, CloseByDateSel: 2, CloseByCalBtn: 3, CloseByOutClick: 4,
};
CalToggle[CalToggle.Open] = 'Open';
CalToggle[CalToggle.CloseByDateSel] = 'CloseByDateSel';
CalToggle[CalToggle.CloseByCalBtn] = 'CloseByCalBtn';
CalToggle[CalToggle.CloseByOutClick] = 'CloseByOutClick';
/** @enum {number} */
var Year = {
    min: 1000, max: 9999,
};
Year[Year.min] = 'min';
Year[Year.max] = 'max';
/** @enum {number} */
var InputFocusBlur = {
    focus: 1, blur: 2,
};
InputFocusBlur[InputFocusBlur.focus] = 'focus';
InputFocusBlur[InputFocusBlur.blur] = 'blur';
/** @enum {number} */
var KeyCode = {
    enter: 13, space: 32,
};
KeyCode[KeyCode.enter] = 'enter';
KeyCode[KeyCode.space] = 'space';
/** @enum {number} */
var MonthId = {
    prev: 1, curr: 2, next: 3,
};
MonthId[MonthId.prev] = 'prev';
MonthId[MonthId.curr] = 'curr';
MonthId[MonthId.next] = 'next';
var MDBDatePickerComponent = /** @class */ (function () {
    function MDBDatePickerComponent(elem, renderer, localeService, utilService, cdRef, platformId) {
        var _this = this;
        this.elem = elem;
        this.renderer = renderer;
        this.localeService = localeService;
        this.utilService = utilService;
        this.cdRef = cdRef;
        this.label = '';
        this.placeholder = '';
        this.openOnFocus = true;
        this.dateChanged = new EventEmitter();
        this.inputFieldChanged = new EventEmitter();
        this.calendarViewChanged = new EventEmitter();
        this.calendarToggle = new EventEmitter();
        this.inputFocusBlur = new EventEmitter();
        this.isDateSelected = false;
        this.labelActive = false;
        this.showSelector = false;
        this.visibleMonth = { monthTxt: '', monthNbr: 0, year: 1 };
        this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.weekDays = [];
        this.dates = [];
        this.selectionDayTxt = '';
        this.invalidDate = false;
        this.disableTodayBtn = false;
        this.dayIdx = 0;
        this.weekDayOpts = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
        this.editMonth = false;
        this.invalidMonth = false;
        this.editYear = false;
        this.invalidYear = false;
        this.prevMonthDisabled = false;
        this.nextMonthDisabled = false;
        this.prevYearDisabled = false;
        this.nextYearDisabled = false;
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
        this.isOpen = false;
        this.tmp = { year: this.getToday().year, month: this.getToday().month, day: this.getToday().day };
        // Default options
        this.opts = {
            startDate: (/** @type {?} */ ('')),
            closeAfterSelect: (/** @type {?} */ (false)),
            dayLabelsFull: (/** @type {?} */ ({})),
            dayLabels: (/** @type {?} */ ({})),
            monthLabelsFull: (/** @type {?} */ ({})),
            monthLabels: (/** @type {?} */ ({})),
            dateFormat: (/** @type {?} */ ('')),
            showTodayBtn: (/** @type {?} */ (true)),
            todayBtnTxt: (/** @type {?} */ ('')),
            firstDayOfWeek: (/** @type {?} */ ('')),
            sunHighlight: (/** @type {?} */ (true)),
            markCurrentDay: (/** @type {?} */ (true)),
            disableUntil: (/** @type {?} */ ({ year: 0, month: 0, day: 0 })),
            disableSince: (/** @type {?} */ ({ year: 0, month: 0, day: 0 })),
            disableDays: (/** @type {?} */ ([])),
            enableDays: (/** @type {?} */ ([])),
            markDates: (/** @type {?} */ ([])),
            markWeekends: (/** @type {?} */ ({})),
            disableDateRanges: (/** @type {?} */ ([])),
            disableWeekends: (/** @type {?} */ (false)),
            showWeekNumbers: (/** @type {?} */ (false)),
            height: (/** @type {?} */ ('32px')),
            width: (/** @type {?} */ ('100%')),
            selectionTxtFontSize: (/** @type {?} */ ('1rem')),
            showClearDateBtn: (/** @type {?} */ (true)),
            alignSelectorRight: (/** @type {?} */ (false)),
            disableHeaderButtons: (/** @type {?} */ (true)),
            minYear: (/** @type {?} */ (Year.min)),
            maxYear: (/** @type {?} */ (Year.max)),
            componentDisabled: (/** @type {?} */ (false)),
            showSelectorArrow: (/** @type {?} */ (true)),
            ariaLabelInputField: (/** @type {?} */ ('Date input field')),
            ariaLabelClearDate: (/** @type {?} */ ('Clear Date')),
            ariaLabelOpenCalendar: (/** @type {?} */ ('Open Calendar')),
            ariaLabelPrevMonth: (/** @type {?} */ ('Previous Month')),
            ariaLabelNextMonth: (/** @type {?} */ ('Next Month')),
            ariaLabelPrevYear: (/** @type {?} */ ('Previous Year')),
            ariaLabelNextYear: (/** @type {?} */ ('Next Year'))
        };
        this.months = [];
        this.years = [];
        this.elements = document.getElementsByClassName('mydp picker');
        this.firstTimeOpenedModal = true;
        this.modalHeightBefore = null;
        this.isMobile = null;
        this.isBrowser = false;
        this.onChangeCb = (/**
         * @return {?}
         */
        function () { });
        this.onTouchedCb = (/**
         * @return {?}
         */
        function () { });
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
        this.setLocaleOptions();
        renderer.listen(this.elem.nativeElement, 'click', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.showSelector &&
                event.target &&
                _this.elem.nativeElement !== event.target &&
                !_this.elem.nativeElement.contains(event.target)) {
                _this.closeBtnClicked();
                _this.calendarToggle.emit(CalToggle.CloseByOutClick);
            }
            if (event.target.classList.contains('picker__holder')) {
                _this.closeBtnClicked();
                _this.cdRef.detectChanges();
            }
            if (true && event.target && _this.elem.nativeElement.contains(event.target)) {
                _this.resetMonthYearEdit();
                _this.cdRef.detectChanges();
            }
        }));
    }
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.opts.startDate) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.onUserDateInput(_this.opts.startDate);
            }), 0);
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.ChangeZIndex = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            function () {
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
                    _this.renderer.setStyle(openedPicker, 'z-index', '100');
                }
                catch (error) { }
            }), 0);
        }
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.renderer.setProperty(this.dateInput.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.removeInlineStyle = /**
     * @return {?}
     */
    function () {
        try {
            if (this.elem.nativeElement.parentElement.parentElement.classList.contains('modal-content')) {
                this.renderer.setStyle(this.elem.nativeElement.parentElement.parentElement, 'transition', 'height 0.3s');
                this.elem.nativeElement.parentElement.parentElement.style.height = this.modalHeightBefore + 'px';
            }
        }
        catch (error) { }
        setTimeout((/**
         * @return {?}
         */
        function () {
            ((/** @type {?} */ (document.documentElement))).style.removeProperty('overflow');
        }), 155);
        this.labelActive = false;
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setLocaleOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach((/**
         * @param {?} k
         * @return {?}
         */
        function (k) {
            _this.opts[k] = opts[k];
        }));
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    MDBDatePickerComponent.prototype.addLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        var _this = this;
        this.localeService.locales = Object.assign({}, this.localeService.locales, locale);
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.setLocaleOptions();
        }), 0);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var thisYear = new Date();
        /** @type {?} */
        var currentYear = thisYear.getFullYear();
        if (this.options !== undefined) {
            Object.keys(this.options).forEach((/**
             * @param {?} k
             * @return {?}
             */
            function (k) {
                _this.opts[k] = _this.options[k];
            }));
        }
        if (this.disabled !== undefined) {
            this.opts.componentDisabled = this.disabled;
        }
        if (this.opts.minYear === 1000) {
            this.opts.minYear = currentYear - 7;
        }
        if (this.opts.maxYear === 9999) {
            this.opts.maxYear = currentYear + 7;
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.resetMonthYearEdit = /**
     * @return {?}
     */
    function () {
        this.editMonth = false;
        this.editYear = false;
        this.invalidMonth = false;
        this.invalidYear = false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onUserDateInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.invalidDate = false;
        if (value.length === 0) {
            this.clearDate();
        }
        else {
            /** @type {?} */
            var date = this.utilService.isDateValid(value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.monthLabels, this.opts.enableDays);
            if (this.utilService.isInitializedDate(date)) {
                this.selectDate(date);
            }
            else {
                this.invalidDate = true;
            }
        }
        if (this.invalidDate) {
            this.inputFieldChanged.emit({ value: value, dateFormat: this.opts.dateFormat, valid: !(value.length === 0 || this.invalidDate) });
            this.onChangeCb('');
            this.onTouchedCb();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onFocusInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.openOnFocus && !this.isOpen) {
            this.openBtnClicked();
        }
        this.inputFocusBlur.emit({ reason: InputFocusBlur.focus, value: event.target.value });
        ((/** @type {?} */ (document.documentElement))).style.overflow = 'hidden';
        // this.divFocus.nativeElement.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onBlurInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.selectionDayTxt = event.target.value;
        this.onTouchedCb();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.blur, value: event.target.value });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onUserMonthInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.invalidMonth = false;
        /** @type {?} */
        var m = this.utilService.isMonthLabelValid(value, this.opts.monthLabels);
        if (m !== -1) {
            this.editMonth = false;
            if (m !== this.visibleMonth.monthNbr) {
                this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: this.visibleMonth.year };
                this.generateCalendar(m, this.visibleMonth.year, true);
            }
        }
        else {
            this.invalidMonth = true;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onUserYearInput = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.invalidYear = false;
        /** @type {?} */
        var y = this.utilService.isYearLabelValid(Number(value), this.opts.minYear, this.opts.maxYear);
        if (y !== -1) {
            this.editYear = false;
            if (y !== this.visibleMonth.year) {
                this.visibleMonth = { monthTxt: this.visibleMonth.monthTxt, monthNbr: this.visibleMonth.monthNbr, year: y };
                this.generateCalendar(this.visibleMonth.monthNbr, y, true);
            }
        }
        else {
            this.invalidYear = true;
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.isTodayDisabled = /**
     * @return {?}
     */
    function () {
        this.disableTodayBtn = this.utilService.isDisabledDay(this.getToday(), this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.parseOptions = /**
     * @return {?}
     */
    function () {
        if (this.locale) {
            this.setLocaleOptions();
        }
        this.setOptions();
        this.isTodayDisabled();
        this.dayIdx = this.weekDayOpts.indexOf(this.opts.firstDayOfWeek);
        if (this.dayIdx !== -1) {
            /** @type {?} */
            var idx = this.dayIdx;
            for (var i = 0; i < this.weekDayOpts.length; i++) {
                this.weekDays.push(this.opts.dayLabels[this.weekDayOpts[idx]]);
                idx = this.weekDayOpts[idx] === 'sa' ? 0 : idx + 1;
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value && typeof value === 'string') {
            this.updateDateValue(this.parseSelectedDate(value), false);
        }
        else if (value && value['date']) {
            this.updateDateValue(this.parseSelectedDate(value['date']), false);
        }
        else if (value === '' || value === null) {
            this.selectedDate = { year: 0, month: 0, day: 0 };
            this.selectionDayTxt = '';
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MDBDatePickerComponent.prototype.registerOnChange = /**
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
    MDBDatePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedCb = fn;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MDBDatePickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('selector') && changes['selector'].currentValue > 0) {
            this.openBtnClicked();
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.placeholder = changes['placeholder'].currentValue;
        }
        if (changes.hasOwnProperty('locale')) {
            this.locale = changes['locale'].currentValue;
        }
        if (changes.hasOwnProperty('disabled')) {
            this.disabled = changes['disabled'].currentValue;
        }
        if (changes.hasOwnProperty('options')) {
            this.options = changes['options'].currentValue;
            if (changes.options.currentValue.startDate) {
                this.onUserDateInput(changes.options.currentValue.startDate);
            }
        }
        this.weekDays.length = 0;
        this.parseOptions();
        if (changes.hasOwnProperty('defaultMonth')) {
            /** @type {?} */
            var dm = changes['defaultMonth'].currentValue;
            if (dm !== null && dm !== undefined && dm !== '') {
                this.selectedMonth = this.parseSelectedMonth(dm);
            }
            else {
                this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
            }
        }
        if (changes.hasOwnProperty('selDate')) {
            /** @type {?} */
            var sd = changes['selDate'];
            if (sd.currentValue !== null &&
                sd.currentValue !== undefined &&
                sd.currentValue !== '' &&
                Object.keys(sd.currentValue).length !== 0) {
                this.selectedDate = this.parseSelectedDate(sd.currentValue);
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.onChangeCb(_this.getDateModel(_this.selectedDate));
                }));
                this.isDateSelected = true;
            }
            else {
                // Do not clear on init
                if (!sd.isFirstChange()) {
                    this.clearDate();
                }
            }
        }
        if (this.showSelector) {
            this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, false);
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.hideKeyboard = /**
     * @return {?}
     */
    function () {
        var _this = this;
        try {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var field = _this.renderer.createElement('input');
                _this.renderer.appendChild(_this.elem.nativeElement, field);
                /** @type {?} */
                var inputReference = _this.elem.nativeElement.lastElementChild;
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setStyle(inputReference, 'opacity', '0');
                _this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                field.onfocus = (/**
                 * @return {?}
                 */
                function () {
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
                field.focus();
            }), 0);
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.removeBtnClicked = /**
     * @return {?}
     */
    function () {
        this.clearDate();
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
        this.isDateSelected = false;
        this.cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.closeBtnClicked = /**
     * @return {?}
     */
    function () {
        this.showSelector = false;
        this.removeInlineStyle();
        this.isOpen = false;
        this.cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.openBtnClicked = /**
     * @return {?}
     */
    function () {
        this.isOpen = true;
        try {
            if (this.elem.nativeElement.parentElement.parentElement.classList.contains('modal-content')) {
                if (this.firstTimeOpenedModal) {
                    this.modalHeightBefore = this.elem.nativeElement.parentElement.parentElement.offsetHeight;
                }
                this.firstTimeOpenedModal = false;
                this.renderer.setStyle(this.elem.nativeElement.parentElement.parentElement, 'transition', 'height 0.3s');
                // tslint:disable-next-line:max-line-length
                this.elem.nativeElement.parentElement.parentElement.style.height = this.modalHeightBefore + this.pickerFrame.nativeElement.offsetHeight + 'px';
            }
        }
        catch (error) { }
        // Open selector button clicked
        this.showSelector = !this.showSelector;
        if (this.showSelector) {
            this.setVisibleMonth();
            this.calendarToggle.emit(CalToggle.Open);
        }
        else {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
        if (this.isMobile) {
            this.hideKeyboard();
        }
        this.labelActive = true;
        this.ChangeZIndex();
        this.cdRef.markForCheck();
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setVisibleMonth = /**
     * @return {?}
     */
    function () {
        // Sets visible month of calendar
        /** @type {?} */
        var y = 0;
        /** @type {?} */
        var m = 0;
        if (!this.utilService.isInitializedDate(this.selectedDate)) {
            if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
                /** @type {?} */
                var today = this.getToday();
                y = today.year;
                m = today.month;
            }
            else {
                y = this.selectedMonth.year;
                m = this.selectedMonth.monthNbr;
            }
        }
        else {
            y = this.selectedDate.year;
            m = this.selectedDate.month;
        }
        this.visibleMonth = { monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y };
        // Create current month
        this.generateCalendar(m, y, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.monthList = /**
     * @return {?}
     */
    function () {
        this.months = [];
        for (var i = 1; i <= 12; i++) {
            this.months.push({ index: i, short: this.opts.monthLabels[i], label: this.opts.monthLabelsFull[i] });
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.yearsList = /**
     * @return {?}
     */
    function () {
        this.years = [];
        /** @type {?} */
        var firstYear = this.opts.minYear;
        /** @type {?} */
        var lastYear = this.opts.maxYear;
        for (var i = firstYear; i <= lastYear; i++) {
            this.years.push(i);
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.prevMonth = /**
     * @return {?}
     */
    function () {
        // Previous month from calendar
        /** @type {?} */
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() - 1);
        /** @type {?} */
        var y = d.getFullYear();
        /** @type {?} */
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        // Next month from calendar
        /** @type {?} */
        var d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() + 1);
        /** @type {?} */
        var y = d.getFullYear();
        /** @type {?} */
        var m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.prevYear = /**
     * @return {?}
     */
    function () {
        // Previous year from calendar
        this.visibleMonth.year--;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        // Next year from calendar
        this.visibleMonth.year++;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.todayClicked = /**
     * @return {?}
     */
    function () {
        // Today button clicked
        /** @type {?} */
        var today = this.getToday();
        if (!this.utilService.isDisabledDay(today, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays)) {
            this.selectDate(today);
        }
        if (today.year !== this.visibleMonth.year || today.month !== this.visibleMonth.monthNbr) {
            this.visibleMonth = { monthTxt: this.opts.monthLabels[today.month], monthNbr: today.month, year: today.year };
            this.generateCalendar(today.month, today.year, true);
        }
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    MDBDatePickerComponent.prototype.cellClicked = /**
     * @param {?} cell
     * @return {?}
     */
    function (cell) {
        // Cell clicked on the calendar
        if (cell.cmo === this.prevMonthId) {
            // Previous month day
            this.prevMonth();
        }
        else if (cell.cmo === this.currMonthId) {
            // Current month day - if date is already selected clear it
            if (cell.dateObj.year === this.selectedDate.year &&
                cell.dateObj.month === this.selectedDate.month &&
                cell.dateObj.day === this.selectedDate.day) {
                this.clearDate();
            }
            else {
                this.selectDate(cell.dateObj);
            }
        }
        else if (cell.cmo === this.nextMonthId) {
            // Next month day
            this.nextMonth();
        }
        this.resetMonthYearEdit();
    };
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    MDBDatePickerComponent.prototype.cellKeyDown = /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    function (event, cell) {
        // Cell keyboard handling
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
            event.preventDefault();
            this.cellClicked(cell);
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.clearDate = /**
     * @return {?}
     */
    function () {
        // Clears the date and notifies parent using callbacks and value accessor
        /** @type {?} */
        var date = { year: 0, month: 0, day: 0 };
        this.dateChanged.emit({ date: date, jsdate: null, formatted: '', epoc: 0 });
        this.onChangeCb(null);
        this.onTouchedCb();
        this.updateDateValue(date, true);
        this.tmp = { year: this.getToday().year, month: this.getToday().month, day: this.getToday().day };
        this.setVisibleMonth();
        this.labelActive = false;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.selectDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Date selected, notifies parent using callbacks and value accessor
        this.tmp = date;
        /** @type {?} */
        var dateModel = this.getDateModel(date);
        // this.dateChanged.emit({ previousDate: this.selectionDayTxt, actualDate: dateModel });
        this.dateChanged.emit({
            date: date,
            jsdate: null,
            previousDateFormatted: this.selectionDayTxt,
            actualDateFormatted: dateModel,
            epoc: 0
        });
        this.onChangeCb(dateModel);
        this.onTouchedCb();
        this.updateDateValue(date, false);
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByDateSel);
        }
        if (this.opts.closeAfterSelect) {
            this.closeBtnClicked();
        }
        this.labelActive = true;
        // hide calendar when date was clicked
        // this.showSelector = false;
    };
    /**
     * @param {?} date
     * @param {?} clear
     * @return {?}
     */
    MDBDatePickerComponent.prototype.updateDateValue = /**
     * @param {?} date
     * @param {?} clear
     * @return {?}
     */
    function (date, clear) {
        // Updates date values
        this.selectedDate = date;
        this.tmp = date;
        this.isDateSelected = true;
        this.selectionDayTxt = clear ? '' : this.formatDate(date);
        this.inputFieldChanged.emit({ value: this.selectionDayTxt, dateFormat: this.opts.dateFormat, valid: !clear });
        this.invalidDate = false;
        this.cdRef.markForCheck();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getDateModel = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Creates a date model object from the given parameter
        return this.formatDate(date);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MDBDatePickerComponent.prototype.preZero = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // Prepend zero if smaller than 10
        return parseInt(val, 0) < 10 ? '0' + val : val;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MDBDatePickerComponent.prototype.formatDate = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // Returns formatted date string, if mmm is part of dateFormat returns month as a string
        // days
        /** @type {?} */
        var d = val.day;
        // 1 - 31
        /** @type {?} */
        var dd = this.preZero(val.day);
        // 01 - 31
        /** @type {?} */
        var ddd = this.opts.dayLabels[this.getWeekday(val)];
        // Sun-Sat
        /** @type {?} */
        var dddd = this.opts.dayLabelsFull[this.getWeekday(val)];
        // Sunday – Saturday
        /** @type {?} */
        var m = val.month;
        // 1 - 12
        /** @type {?} */
        var mm = this.preZero(val.month);
        // 01 - 12
        /** @type {?} */
        var mmm = this.getMonthShort(val.month);
        // Jan - Dec
        /** @type {?} */
        var mmmm = this.getMonthFull(val.month);
        // January – December
        /** @type {?} */
        var yy = val.year.toString().length === 2 ? val.year : val.year.toString().slice(2, 4);
        // 00 - 99
        /** @type {?} */
        var yyyy = val.year;
        /** @type {?} */
        var toReplace = this.opts.dateFormat.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        /** @type {?} */
        var formatted = '';
        toReplace.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            switch (el) {
                case 'dddd':
                    el = el.replace(el, dddd);
                    break;
                case 'ddd':
                    el = el.replace(el, ddd);
                    break;
                case 'dd':
                    el = el.replace(el, dd);
                    break;
                case 'd':
                    el = el.replace(el, d);
                    break;
                case 'mmmm':
                    el = el.replace(el, mmmm);
                    break;
                case 'mmm':
                    el = el.replace(el, mmm);
                    break;
                case 'mm':
                    el = el.replace(el, mm);
                    break;
                case 'm':
                    el = el.replace(el, m);
                    break;
                case 'yyyy':
                    el = el.replace(el, yyyy);
                    break;
                case 'yy':
                    el = el.replace(el, yy);
                    break;
            }
            formatted += el;
        }));
        return formatted;
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.monthText = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        // Returns month as a text
        return this.opts.monthLabels[m];
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.weekText = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        // Returns month as a text
        return this.opts.dayLabelsFull[m];
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getMonthShort = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        return this.opts.monthLabels[m];
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getMonthFull = /**
     * @param {?} m
     * @return {?}
     */
    function (m) {
        return this.opts.monthLabelsFull[m];
    };
    /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.monthStartIdx = /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    function (y, m) {
        // Month start index
        /** @type {?} */
        var d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        /** @type {?} */
        var idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    MDBDatePickerComponent.prototype.daysInMonth = /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    function (m, y) {
        // Return number of days of current month
        return new Date(y, m, 0).getDate();
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    MDBDatePickerComponent.prototype.daysInPrevMonth = /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    function (m, y) {
        // Return number of days of the previous month
        /** @type {?} */
        var d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    };
    /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} cmo
     * @param {?} today
     * @return {?}
     */
    MDBDatePickerComponent.prototype.isCurrDay = /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} cmo
     * @param {?} today
     * @return {?}
     */
    function (d, m, y, cmo, today) {
        // Check is a given date the today
        return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getToday = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getTimeInMilliseconds = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.getDate(date.year, date.month, date.day).getTime();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getWeekday = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        // Get weekday: su, mo, tu, we ...
        return this.weekDayOpts[this.utilService.getDayNumber(date)];
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getDate = /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    function (year, month, day) {
        // Creates a date object from given year, month and day
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.sundayIdx = /**
     * @return {?}
     */
    function () {
        // Index of Sunday day
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    };
    /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    MDBDatePickerComponent.prototype.generateCalendar = /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    function (m, y, notifyChange) {
        this.dates.length = 0;
        /** @type {?} */
        var today = this.getToday();
        /** @type {?} */
        var monthStart = this.monthStartIdx(y, m);
        /** @type {?} */
        var dInThisM = this.daysInMonth(m, y);
        /** @type {?} */
        var dInPrevM = this.daysInPrevMonth(m, y);
        /** @type {?} */
        var dayNbr = 1;
        /** @type {?} */
        var cmo = this.prevMonthId;
        for (var i = 1; i < 7; i++) {
            /** @type {?} */
            var week = [];
            if (i === 1) {
                // First week
                /** @type {?} */
                var pm = dInPrevM - monthStart + 1;
                // Previous month
                for (var j = pm; j <= dInPrevM; j++) {
                    /** @type {?} */
                    var date = { year: y, month: m - 1, day: j };
                    week.push({
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
                    });
                }
                cmo = this.currMonthId;
                // Current month
                /** @type {?} */
                var daysLeft = 7 - week.length;
                for (var j = 0; j < daysLeft; j++) {
                    /** @type {?} */
                    var date = { year: y, month: m, day: dayNbr };
                    week.push({
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
                    });
                    dayNbr++;
                }
            }
            else {
                // Rest of the weeks
                for (var j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        // Next month
                        dayNbr = 1;
                        cmo = this.nextMonthId;
                    }
                    /** @type {?} */
                    var date = { year: y, month: cmo === this.currMonthId ? m : m + 1, day: dayNbr };
                    week.push({
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
                    });
                    dayNbr++;
                }
            }
            /** @type {?} */
            var weekNbr = this.opts.showWeekNumbers &&
                this.opts.firstDayOfWeek === 'mo' ?
                this.utilService.getWeekNumber(week[0].dateObj) : 0;
            this.dates.push({ week: week, weekNbr: weekNbr });
        }
        this.setHeaderBtnDisabledState(m, y);
        if (notifyChange) {
            // Notify parent
            this.calendarViewChanged.emit({
                year: y,
                month: m,
                first: {
                    number: 1,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: 1
                    })
                },
                last: {
                    number: dInThisM,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: dInThisM
                    })
                }
            });
        }
        this.monthList();
        this.yearsList();
    };
    /**
     * @param {?} selDate
     * @return {?}
     */
    MDBDatePickerComponent.prototype.parseSelectedDate = /**
     * @param {?} selDate
     * @return {?}
     */
    function (selDate) {
        // Parse selDate value - it can be string or IMyDate object
        /** @type {?} */
        var date = { day: 0, month: 0, year: 0 };
        if (typeof selDate === 'string') {
            /** @type {?} */
            var sd = (/** @type {?} */ (selDate));
            /** @type {?} */
            var df = this.opts.dateFormat;
            /** @type {?} */
            var delimeters = this.utilService.getDateFormatDelimeters(df);
            /** @type {?} */
            var dateValue = this.utilService.getDateValue(sd, df, delimeters);
            date.year = this.utilService.getNumberByValue(dateValue[0]);
            if (df.indexOf('mmmm') !== -1) {
                date.month = this.utilService.getMonthNumberByMonthName(dateValue[1], this.opts.monthLabelsFull);
            }
            else if (df.indexOf('mmm') !== -1) {
                date.month = this.utilService.getMonthNumberByMonthName(dateValue[1], this.opts.monthLabels);
            }
            else {
                date.month = this.utilService.getNumberByValue(dateValue[1]);
            }
            date.day = this.utilService.getNumberByValue(dateValue[2]);
        }
        else if (typeof selDate === 'object') {
            date = selDate;
        }
        this.selectionDayTxt = this.formatDate(date);
        return date;
    };
    /**
     * @param {?} ms
     * @return {?}
     */
    MDBDatePickerComponent.prototype.parseSelectedMonth = /**
     * @param {?} ms
     * @return {?}
     */
    function (ms) {
        return this.utilService.parseDefaultMonth(ms);
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setHeaderBtnDisabledState = /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    function (m, y) {
        /** @type {?} */
        var dpm = false;
        /** @type {?} */
        var dpy = false;
        /** @type {?} */
        var dnm = false;
        /** @type {?} */
        var dny = false;
        if (this.opts.disableHeaderButtons) {
            dpm = this.utilService.isMonthDisabledByDisableUntil({
                year: m === 1 ? y - 1 : y,
                month: m === 1 ? 12 : m - 1,
                day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y)
            }, this.opts.disableUntil);
            dpy = this.utilService.isMonthDisabledByDisableUntil({
                year: y - 1,
                month: m,
                day: this.daysInMonth(m, y - 1)
            }, this.opts.disableUntil);
            dnm = this.utilService.isMonthDisabledByDisableSince({
                year: m === 12 ? y + 1 : y,
                month: m === 12 ? 1 : m + 1,
                day: 1
            }, this.opts.disableSince);
            dny = this.utilService.isMonthDisabledByDisableSince({ year: y + 1, month: m, day: 1 }, this.opts.disableSince);
        }
        this.prevMonthDisabled = m === 1 && y === this.opts.minYear || dpm;
        this.prevYearDisabled = y - 1 < this.opts.minYear || dpy;
        this.nextMonthDisabled = m === 12 && y === this.opts.maxYear || dnm;
        this.nextYearDisabled = y + 1 > this.opts.maxYear || dny;
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.checkActive = /**
     * @return {?}
     */
    function () {
        if (this.placeholder.length > 0) {
            return true;
        }
        if (this.labelActive) {
            return true;
        }
        if (this.isDateSelected) {
            return true;
        }
        return false;
    };
    MDBDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-date-picker',
                    exportAs: 'mdbdatepicker',
                    template: "<!-- Line 27: Deleted (focus)=\"onFocusInput($event)\" for better use in Firefox. If other strange problems will occur, please paste it in line 27. -->\r\n<div class=\"mydp picker\" [ngClass]=\"{'picker--opened': showSelector}\" [ngStyle]=\"{'width': opts.width}\">\r\n  <div class=\"md-form\">\r\n    <label (click)=\"openBtnClicked()\" *ngIf=\"label.length > 0\" [ngClass]=\"{\r\n          'active': checkActive(),\r\n          'disabled': opts.componentDisabled\r\n        }\">{{ label }}</label>\r\n    <input #dateInput type=\"text\" class=\"form-control mydp-date\" [attr.aria-label]=\"opts.ariaLabelInputField\" (mousedown)=\"openBtnClicked()\"\r\n      [attr.maxlength]=\"opts.dateFormat.length\" [ngClass]=\"{\r\n        'selectiondisabled': opts.componentDisabled,\r\n        'disabled': opts.componentDisabled\r\n      }\" placeholder=\"{{ placeholder }}\" [ngModel]=\"selectionDayTxt\" (ngModelChange)=\"onUserDateInput($event)\" [value]=\"selectionDayTxt\"\r\n      [ngStyle]=\"{\r\n        'font-size': opts.selectionTxtFontSize\r\n      }\" (blur)=\"onBlurInput($event)\" (focus)=\"onFocusInput($event)\" [disabled]=\"opts.componentDisabled\" autocomplete=\"off\" [tabindex]=\"tabIndex\">\r\n  </div>\r\n  <div *ngIf=\"showSelector\" class=\"selector picker__holder selectorarrow selectorarrowleft selectorarrowright\" #divFocus [ngClass]=\"{'alignselectorright': opts.alignSelectorRight}\"\r\n    tabindex=\"0\">\r\n    <div class=\"picker__frame picker__box\" #pickerFrame>\r\n      <div class=\"picker__header\">\r\n        <div class=\"picker__date-display\">\r\n          <div class=\"picker__weekday-display\">\r\n            {{ weekText(getWeekday(tmp)) }}\r\n          </div>\r\n          <div class=\"picker__month-display\">\r\n            <div>{{ monthText(tmp.month) }}</div>\r\n          </div>\r\n          <div class=\"picker__day-display\">\r\n            <div>{{ tmp.day }}</div>\r\n          </div>\r\n          <div class=\"picker__year-display\">\r\n            <div>{{ tmp.year }}</div>\r\n          </div>\r\n        </div>\r\n        <select class=\"picker__select--year\" [(ngModel)]=\"visibleMonth.year\" (ngModelChange)=\"onUserYearInput($event)\" role=\"menu\"\r\n          aria-label=\"Year selector\">\r\n          <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option>\r\n        </select>\r\n        <select class=\"picker__select--month\" [(ngModel)]=\"visibleMonth.monthTxt\" (ngModelChange)=\"onUserMonthInput($event)\" role=\"menu\"\r\n          aria-label=\"Month selector\">\r\n          <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option>\r\n        </select>\r\n        <button class=\"picker__nav--prev\" data-nav=\"-1\" type=\"button\" aria-controls=\"date-picker-example_table\" title=\"Previous month\"\r\n          (click)=\"prevMonth()\" [disabled]=\"prevMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button>\r\n        <button class=\"picker__nav--next\" data-nav=\"1\" type=\"button\" aria-controls=\"date-picker-example_table\" title=\"Next month\"\r\n          (click)=\"nextMonth()\" [disabled]=\"nextMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button>\r\n      </div>\r\n      <table class=\"picker__table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"picker__weekday weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th>\r\n            <th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let w of dates\">\r\n            <td class=\"picker__day daycellweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\r\n            <td class=\"picker__day\" *ngFor=\"let d of w.week\" [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId&&!d.disabled, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\">\r\n              <div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div>\r\n              <div class=\"picker__day\" [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId,'picker__day--outfocus': (d.cmo===nextMonthId || d.cmo===prevMonthId), 'picker__day--today':d.currDay&&opts.markCurrentDay, 'picker__day--selected picker__day--highlighted':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId}\"\r\n                (click)=\"!d.disabled&&cellClicked(d);$event.stopPropagation()\" (keydown)=\"cellKeyDown($event, d)\" tabindex=\"0\">\r\n                {{d.dateObj.day}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"picker__footer\">\r\n        <button type=\"button\" *ngIf=\"opts.showTodayBtn\" class=\"picker__button--today\" (click)=\"todayClicked()\" role=\"button\" [attr.aria-label]=\"opts.todayBtnTxt\">\r\n          {{opts.todayBtnTxt}}\r\n        </button>\r\n        <button type=\"button\" *ngIf=\"opts.showClearDateBtn\" class=\"picker__button--clear\" (click)=\"removeBtnClicked()\" role=\"button\"\r\n          [attr.aria-label]=\"opts.clearBtnTxt\">\r\n          {{opts.clearBtnTxt}}\r\n        </button>\r\n        <button type=\"button\" [ngClass]=\"{'ml-auto': !opts.showTodayBtn}\" class=\"picker__button--close\" (click)=\"closeBtnClicked()\"\r\n          role=\"button\" [attr.aria-label]=\"opts.closeBtnTxt\">\r\n          {{opts.closeBtnTxt}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                    providers: [LocaleService, UtilService, MYDP_VALUE_ACCESSOR],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MDBDatePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: LocaleService },
        { type: UtilService },
        { type: ChangeDetectorRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MDBDatePickerComponent.propDecorators = {
        tabIndex: [{ type: Input }],
        options: [{ type: Input }],
        locale: [{ type: Input }],
        defaultMonth: [{ type: Input }],
        selDate: [{ type: Input }],
        label: [{ type: Input }],
        placeholder: [{ type: Input }],
        selector: [{ type: Input }],
        disabled: [{ type: Input }],
        openOnFocus: [{ type: Input }],
        dateChanged: [{ type: Output }],
        inputFieldChanged: [{ type: Output }],
        calendarViewChanged: [{ type: Output }],
        calendarToggle: [{ type: Output }],
        inputFocusBlur: [{ type: Output }],
        divFocus: [{ type: ViewChild, args: ['divFocus',] }],
        pickerFrame: [{ type: ViewChild, args: ['pickerFrame',] }],
        dateInput: [{ type: ViewChild, args: ['dateInput',] }]
    };
    return MDBDatePickerComponent;
}());
export { MDBDatePickerComponent };
if (false) {
    /** @type {?} */
    MDBDatePickerComponent.prototype.tabIndex;
    /** @type {?} */
    MDBDatePickerComponent.prototype.options;
    /** @type {?} */
    MDBDatePickerComponent.prototype.locale;
    /** @type {?} */
    MDBDatePickerComponent.prototype.defaultMonth;
    /** @type {?} */
    MDBDatePickerComponent.prototype.selDate;
    /** @type {?} */
    MDBDatePickerComponent.prototype.label;
    /** @type {?} */
    MDBDatePickerComponent.prototype.placeholder;
    /** @type {?} */
    MDBDatePickerComponent.prototype.selector;
    /** @type {?} */
    MDBDatePickerComponent.prototype.disabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.openOnFocus;
    /** @type {?} */
    MDBDatePickerComponent.prototype.dateChanged;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inputFieldChanged;
    /** @type {?} */
    MDBDatePickerComponent.prototype.calendarViewChanged;
    /** @type {?} */
    MDBDatePickerComponent.prototype.calendarToggle;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inputFocusBlur;
    /** @type {?} */
    MDBDatePickerComponent.prototype.divFocus;
    /** @type {?} */
    MDBDatePickerComponent.prototype.pickerFrame;
    /** @type {?} */
    MDBDatePickerComponent.prototype.dateInput;
    /** @type {?} */
    MDBDatePickerComponent.prototype.isDateSelected;
    /** @type {?} */
    MDBDatePickerComponent.prototype.labelActive;
    /** @type {?} */
    MDBDatePickerComponent.prototype.showSelector;
    /** @type {?} */
    MDBDatePickerComponent.prototype.visibleMonth;
    /** @type {?} */
    MDBDatePickerComponent.prototype.selectedMonth;
    /** @type {?} */
    MDBDatePickerComponent.prototype.selectedDate;
    /** @type {?} */
    MDBDatePickerComponent.prototype.weekDays;
    /** @type {?} */
    MDBDatePickerComponent.prototype.dates;
    /** @type {?} */
    MDBDatePickerComponent.prototype.selectionDayTxt;
    /** @type {?} */
    MDBDatePickerComponent.prototype.invalidDate;
    /** @type {?} */
    MDBDatePickerComponent.prototype.disableTodayBtn;
    /** @type {?} */
    MDBDatePickerComponent.prototype.dayIdx;
    /** @type {?} */
    MDBDatePickerComponent.prototype.weekDayOpts;
    /** @type {?} */
    MDBDatePickerComponent.prototype.editMonth;
    /** @type {?} */
    MDBDatePickerComponent.prototype.invalidMonth;
    /** @type {?} */
    MDBDatePickerComponent.prototype.editYear;
    /** @type {?} */
    MDBDatePickerComponent.prototype.invalidYear;
    /** @type {?} */
    MDBDatePickerComponent.prototype.prevMonthDisabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.nextMonthDisabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.prevYearDisabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.nextYearDisabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.prevMonthId;
    /** @type {?} */
    MDBDatePickerComponent.prototype.currMonthId;
    /** @type {?} */
    MDBDatePickerComponent.prototype.nextMonthId;
    /** @type {?} */
    MDBDatePickerComponent.prototype.isOpen;
    /** @type {?} */
    MDBDatePickerComponent.prototype.tmp;
    /** @type {?} */
    MDBDatePickerComponent.prototype.opts;
    /** @type {?} */
    MDBDatePickerComponent.prototype.months;
    /** @type {?} */
    MDBDatePickerComponent.prototype.years;
    /** @type {?} */
    MDBDatePickerComponent.prototype.elements;
    /** @type {?} */
    MDBDatePickerComponent.prototype.elementNumber;
    /** @type {?} */
    MDBDatePickerComponent.prototype.firstTimeOpenedModal;
    /** @type {?} */
    MDBDatePickerComponent.prototype.modalHeightBefore;
    /** @type {?} */
    MDBDatePickerComponent.prototype.isMobile;
    /** @type {?} */
    MDBDatePickerComponent.prototype.isBrowser;
    /** @type {?} */
    MDBDatePickerComponent.prototype.onChangeCb;
    /** @type {?} */
    MDBDatePickerComponent.prototype.onTouchedCb;
    /** @type {?} */
    MDBDatePickerComponent.prototype.elem;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype.localeService;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype.utilService;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2RhdGUtcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBRVQsV0FBVyxFQUNYLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWV6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUNwRCxNQUFNLEtBQU8sbUJBQW1CLEdBQVE7SUFDdEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixFQUFDO0lBQ3JELEtBQUssRUFBRSxJQUFJO0NBQ1o7OztJQUVnQixPQUFRLEVBQUUsaUJBQWtCLEVBQUUsZ0JBQWlCLEVBQUUsa0JBQW1COzs7Ozs7OztJQUN6RSxTQUFVLEVBQUUsU0FBVTs7Ozs7O0lBQ1osUUFBUyxFQUFFLE9BQVE7Ozs7OztJQUMxQixTQUFVLEVBQUUsU0FBVTs7Ozs7O0lBQ3RCLE9BQVEsRUFBRSxPQUFRLEVBQUUsT0FBUTs7Ozs7QUFFM0M7SUFrSEUsZ0NBQW1CLElBQWdCLEVBQ3pCLFFBQW1CLEVBRW5CLGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLEtBQXdC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SUFDNUUsZ0RBQWtHOztJQUVsRywwQ0FBNEM7O0lBQzVDLDZDQUFrRDs7SUFDbEQsMkNBQThDOztJQUM5QyxnREFBOEI7O0lBQzlCLDZDQUEyQjs7SUFDM0IsOENBQTRCOztJQUM1Qiw4Q0FBdUU7O0lBQ3ZFLCtDQUF3RTs7SUFDeEUsOENBQTZEOztJQUM3RCwwQ0FBb0M7O0lBQ3BDLHVDQUFrQzs7SUFDbEMsaURBQTRCOztJQUM1Qiw2Q0FBMkI7O0lBQzNCLGlEQUErQjs7SUFDL0Isd0NBQWtCOztJQUNsQiw2Q0FBK0U7O0lBRS9FLDJDQUF5Qjs7SUFDekIsOENBQTRCOztJQUM1QiwwQ0FBd0I7O0lBQ3hCLDZDQUEyQjs7SUFFM0IsbURBQWlDOztJQUNqQyxtREFBaUM7O0lBQ2pDLGtEQUFnQzs7SUFDaEMsa0RBQWdDOztJQUVoQyw2Q0FBMEM7O0lBQzFDLDZDQUEwQzs7SUFDMUMsNkNBQTBDOztJQUUxQyx3Q0FBZTs7SUFFZixxQ0FBNkc7O0lBRzdHLHNDQXVDRTs7SUFHRix3Q0FBd0I7O0lBQ3hCLHVDQUF1Qjs7SUFDdkIsMENBQWlFOztJQUNqRSwrQ0FBMEI7O0lBRTFCLHNEQUE0Qjs7SUFDNUIsbURBQThCOztJQUM5QiwwQ0FBcUI7O0lBQ3JCLDJDQUF1Qjs7SUE4RHZCLDRDQUF5Qzs7SUFDekMsNkNBQW9DOztJQTdEeEIsc0NBQXVCOzs7OztJQUNqQywwQ0FBMkI7Ozs7O0lBRTNCLCtDQUFvQzs7Ozs7SUFDcEMsNkNBQWdDOzs7OztJQUNoQyx1Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTXlMb2NhbGVzIH0gZnJvbSAnLi9pbnRlcmZhY2VzL2xvY2FsZS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgUmVuZGVyZXIyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgUExBVEZPUk1fSUQsXHJcbiAgSW5qZWN0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBJTXlEYXRlLFxyXG4gIElNeURhdGVSYW5nZSxcclxuICBJTXlNb250aCxcclxuICBJTXlDYWxlbmRhckRheSxcclxuICBJTXlXZWVrLFxyXG4gIElNeURheUxhYmVscyxcclxuICBJTXlNb250aExhYmVscyxcclxuICBJTXlJbnB1dEZpZWxkQ2hhbmdlZCxcclxuICBJTXlDYWxlbmRhclZpZXdDaGFuZ2VkLFxyXG4gIElNeUlucHV0Rm9jdXNCbHVyLFxyXG4gIElNeU1hcmtlZERhdGVzLFxyXG4gIElNeU1hcmtlZERhdGUsXHJcbn0gZnJvbSAnLi9pbnRlcmZhY2VzL2luZGV4JztcclxuaW1wb3J0IHsgTG9jYWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZGF0ZXBpY2tlckxvY2FsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGVwaWNrZXJVdGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmV4cG9ydCBjb25zdCBNWURQX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTURCRGF0ZVBpY2tlckNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbmVudW0gQ2FsVG9nZ2xlIHsgT3BlbiA9IDEsIENsb3NlQnlEYXRlU2VsID0gMiwgQ2xvc2VCeUNhbEJ0biA9IDMsIENsb3NlQnlPdXRDbGljayA9IDQgfVxyXG5lbnVtIFllYXIgeyBtaW4gPSAxMDAwLCBtYXggPSA5OTk5IH1cclxuZW51bSBJbnB1dEZvY3VzQmx1ciB7IGZvY3VzID0gMSwgYmx1ciA9IDIgfVxyXG5lbnVtIEtleUNvZGUgeyBlbnRlciA9IDEzLCBzcGFjZSA9IDMyIH1cclxuZW51bSBNb250aElkIHsgcHJldiA9IDEsIGN1cnIgPSAyLCBuZXh0ID0gMyB9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21kYi1kYXRlLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdtZGJkYXRlcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTG9jYWxlU2VydmljZSwgVXRpbFNlcnZpY2UsIE1ZRFBfVkFMVUVfQUNDRVNTT1JdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNREJEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgdGFiSW5kZXg6IGFueTtcclxuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVmYXVsdE1vbnRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VsRGF0ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBzZWxlY3RvcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9wZW5PbkZvY3VzID0gdHJ1ZTtcclxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0RmllbGRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15SW5wdXRGaWVsZENoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZpZWxkQ2hhbmdlZD4oKTtcclxuICBAT3V0cHV0KCkgY2FsZW5kYXJWaWV3Q2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyVmlld0NoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlDYWxlbmRhclZpZXdDaGFuZ2VkPigpO1xyXG4gIEBPdXRwdXQoKSBjYWxlbmRhclRvZ2dsZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRGb2N1c0JsdXI6IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZvY3VzQmx1cj4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUlucHV0Rm9jdXNCbHVyPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdkaXZGb2N1cycpIHB1YmxpYyBkaXZGb2N1czogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ3BpY2tlckZyYW1lJykgcGlja2VyRnJhbWU6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZGF0ZUlucHV0JykgZGF0ZUlucHV0OiBFbGVtZW50UmVmO1xyXG4gIHB1YmxpYyBpc0RhdGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBsYWJlbEFjdGl2ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICBwdWJsaWMgdmlzaWJsZU1vbnRoOiBJTXlNb250aCA9IHsgbW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMSB9O1xyXG4gIHB1YmxpYyBzZWxlY3RlZE1vbnRoOiBJTXlNb250aCA9IHsgbW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMCB9O1xyXG4gIHB1YmxpYyBzZWxlY3RlZERhdGU6IElNeURhdGUgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfTtcclxuICBwdWJsaWMgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBwdWJsaWMgZGF0ZXM6IEFycmF5PElNeVdlZWs+ID0gW107XHJcbiAgcHVibGljIHNlbGVjdGlvbkRheVR4dCA9ICcnO1xyXG4gIHB1YmxpYyBpbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBkaXNhYmxlVG9kYXlCdG4gPSBmYWxzZTtcclxuICBwdWJsaWMgZGF5SWR4ID0gMDtcclxuICBwdWJsaWMgd2Vla0RheU9wdHM6IEFycmF5PHN0cmluZz4gPSBbJ3N1JywgJ21vJywgJ3R1JywgJ3dlJywgJ3RoJywgJ2ZyJywgJ3NhJ107XHJcblxyXG4gIHB1YmxpYyBlZGl0TW9udGggPSBmYWxzZTtcclxuICBwdWJsaWMgaW52YWxpZE1vbnRoID0gZmFsc2U7XHJcbiAgcHVibGljIGVkaXRZZWFyID0gZmFsc2U7XHJcbiAgcHVibGljIGludmFsaWRZZWFyID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBwcmV2TW9udGhEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBuZXh0TW9udGhEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBwcmV2WWVhckRpc2FibGVkID0gZmFsc2U7XHJcbiAgcHVibGljIG5leHRZZWFyRGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHByZXZNb250aElkOiBudW1iZXIgPSBNb250aElkLnByZXY7XHJcbiAgcHVibGljIGN1cnJNb250aElkOiBudW1iZXIgPSBNb250aElkLmN1cnI7XHJcbiAgcHVibGljIG5leHRNb250aElkOiBudW1iZXIgPSBNb250aElkLm5leHQ7XHJcblxyXG4gIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdG1wOiBJTXlEYXRlID0geyB5ZWFyOiB0aGlzLmdldFRvZGF5KCkueWVhciwgbW9udGg6IHRoaXMuZ2V0VG9kYXkoKS5tb250aCwgZGF5OiB0aGlzLmdldFRvZGF5KCkuZGF5IH07XHJcblxyXG4gIC8vIERlZmF1bHQgb3B0aW9uc1xyXG4gIHB1YmxpYyBvcHRzOiBhbnkgPSB7XHJcbiAgICBzdGFydERhdGU6IDxzdHJpbmc+JycsXHJcbiAgICBjbG9zZUFmdGVyU2VsZWN0OiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIGRheUxhYmVsc0Z1bGw6IDxJTXlEYXlMYWJlbHM+e30sXHJcbiAgICBkYXlMYWJlbHM6IDxJTXlEYXlMYWJlbHM+e30sXHJcbiAgICBtb250aExhYmVsc0Z1bGw6IDxJTXlNb250aExhYmVscz57fSxcclxuICAgIG1vbnRoTGFiZWxzOiA8SU15TW9udGhMYWJlbHM+e30sXHJcbiAgICBkYXRlRm9ybWF0OiA8c3RyaW5nPicnLFxyXG4gICAgc2hvd1RvZGF5QnRuOiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgdG9kYXlCdG5UeHQ6IDxzdHJpbmc+JycsXHJcbiAgICBmaXJzdERheU9mV2VlazogPHN0cmluZz4nJyxcclxuICAgIHN1bkhpZ2hsaWdodDogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIG1hcmtDdXJyZW50RGF5OiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgZGlzYWJsZVVudGlsOiA8SU15RGF0ZT57IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfSxcclxuICAgIGRpc2FibGVTaW5jZTogPElNeURhdGU+eyB5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwIH0sXHJcbiAgICBkaXNhYmxlRGF5czogPEFycmF5PElNeURhdGUgfCBudW1iZXI+PltdLFxyXG4gICAgZW5hYmxlRGF5czogPEFycmF5PElNeURhdGUgfCBudW1iZXI+PltdLFxyXG4gICAgbWFya0RhdGVzOiA8QXJyYXk8SU15TWFya2VkRGF0ZXM+PltdLFxyXG4gICAgbWFya1dlZWtlbmRzOiA8SU15TWFya2VkRGF0ZT57fSxcclxuICAgIGRpc2FibGVEYXRlUmFuZ2VzOiA8QXJyYXk8SU15RGF0ZVJhbmdlPj5bXSxcclxuICAgIGRpc2FibGVXZWVrZW5kczogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBzaG93V2Vla051bWJlcnM6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgaGVpZ2h0OiA8c3RyaW5nPiczMnB4JyxcclxuICAgIHdpZHRoOiA8c3RyaW5nPicxMDAlJyxcclxuICAgIHNlbGVjdGlvblR4dEZvbnRTaXplOiA8c3RyaW5nPicxcmVtJyxcclxuICAgIHNob3dDbGVhckRhdGVCdG46IDxib29sZWFuPnRydWUsXHJcbiAgICBhbGlnblNlbGVjdG9yUmlnaHQ6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgZGlzYWJsZUhlYWRlckJ1dHRvbnM6IDxib29sZWFuPnRydWUsXHJcbiAgICBtaW5ZZWFyOiA8bnVtYmVyPlllYXIubWluLFxyXG4gICAgbWF4WWVhcjogPG51bWJlcj5ZZWFyLm1heCxcclxuICAgIGNvbXBvbmVudERpc2FibGVkOiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIHNob3dTZWxlY3RvckFycm93OiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgYXJpYUxhYmVsSW5wdXRGaWVsZDogPHN0cmluZz4nRGF0ZSBpbnB1dCBmaWVsZCcsXHJcbiAgICBhcmlhTGFiZWxDbGVhckRhdGU6IDxzdHJpbmc+J0NsZWFyIERhdGUnLFxyXG4gICAgYXJpYUxhYmVsT3BlbkNhbGVuZGFyOiA8c3RyaW5nPidPcGVuIENhbGVuZGFyJyxcclxuICAgIGFyaWFMYWJlbFByZXZNb250aDogPHN0cmluZz4nUHJldmlvdXMgTW9udGgnLFxyXG4gICAgYXJpYUxhYmVsTmV4dE1vbnRoOiA8c3RyaW5nPidOZXh0IE1vbnRoJyxcclxuICAgIGFyaWFMYWJlbFByZXZZZWFyOiA8c3RyaW5nPidQcmV2aW91cyBZZWFyJyxcclxuICAgIGFyaWFMYWJlbE5leHRZZWFyOiA8c3RyaW5nPidOZXh0IFllYXInXHJcbiAgfTtcclxuXHJcblxyXG4gIHB1YmxpYyBtb250aHM6IGFueSA9IFtdO1xyXG4gIHB1YmxpYyB5ZWFyczogYW55ID0gW107XHJcbiAgcHVibGljIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXlkcCBwaWNrZXInKTtcclxuICBwdWJsaWMgZWxlbWVudE51bWJlcjogYW55O1xyXG5cclxuICBmaXJzdFRpbWVPcGVuZWRNb2RhbCA9IHRydWU7XHJcbiAgbW9kYWxIZWlnaHRCZWZvcmU6IGFueSA9IG51bGw7XHJcbiAgaXNNb2JpbGU6IGFueSA9IG51bGw7XHJcbiAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW06IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAvLyBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIGxvY2FsZVNlcnZpY2U6IExvY2FsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xyXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgcmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IgJiZcclxuICAgICAgICBldmVudC50YXJnZXQgJiZcclxuICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXHJcbiAgICAgICAgIXRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ0bkNsaWNrZWQoKTtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlPdXRDbGljayk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BpY2tlcl9faG9sZGVyJykpIHtcclxuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xpY2tlZCgpO1xyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0cnVlICYmIGV2ZW50LnRhcmdldCAmJiB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldE1vbnRoWWVhckVkaXQoKTtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLm9wdHMuc3RhcnREYXRlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25Vc2VyRGF0ZUlucHV0KHRoaXMub3B0cy5zdGFydERhdGUpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIENoYW5nZVpJbmRleCgpIHtcclxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBGaXggZm9yIHZpc2libGUgZGF0ZSAvIHRpbWUgcGlja2VyIGlucHV0IHdoZW4gcGlja2VyIHBsYXRlIGlzIHZpc2libGUuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IG9wZW5lZFBpY2tlcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpY2tlci0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBjb25zdCBhbGxQaWNrZXJzOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGlja2VyJyk7XHJcbiAgICAgICAgICBhbGxQaWNrZXJzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsICd6LWluZGV4JywgJzAnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShvcGVuZWRQaWNrZXIsICd6LWluZGV4JywgJzEwMCcpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgb25DaGFuZ2VDYjogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuICBvblRvdWNoZWRDYjogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZGF0ZUlucHV0Lm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSW5saW5lU3R5bGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtY29udGVudCcpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsICd0cmFuc2l0aW9uJywgJ2hlaWdodCAwLjNzJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMubW9kYWxIZWlnaHRCZWZvcmUgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBhcyBhbnkpLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgfSwgMTU1KTtcclxuICAgIHRoaXMubGFiZWxBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldExvY2FsZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHRzOiBhbnkgPSB0aGlzLmxvY2FsZVNlcnZpY2UuZ2V0TG9jYWxlT3B0aW9ucyh0aGlzLmxvY2FsZSk7XHJcbiAgICBPYmplY3Qua2V5cyhvcHRzKS5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgIHRoaXMub3B0c1trXSA9IG9wdHNba107XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZExvY2FsZShsb2NhbGU6IElNeUxvY2FsZXMpIHtcclxuICAgIHRoaXMubG9jYWxlU2VydmljZS5sb2NhbGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5sb2NhbGVTZXJ2aWNlLmxvY2FsZXMsIGxvY2FsZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0aGlzWWVhciA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IHRoaXNZZWFyLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBpZiAodGhpcy5vcHRpb25zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgT2JqZWN0LmtleXModGhpcy5vcHRpb25zKS5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgICAgdGhpcy5vcHRzW2tdID0gdGhpcy5vcHRpb25zW2tdO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5vcHRzLmNvbXBvbmVudERpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRzLm1pblllYXIgPT09IDEwMDApIHtcclxuICAgICAgdGhpcy5vcHRzLm1pblllYXIgPSBjdXJyZW50WWVhciAtIDc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3B0cy5tYXhZZWFyID09PSA5OTk5KSB7XHJcbiAgICAgIHRoaXMub3B0cy5tYXhZZWFyID0gY3VycmVudFllYXIgKyA3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRNb250aFllYXJFZGl0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0TW9udGggPSBmYWxzZTtcclxuICAgIHRoaXMuZWRpdFllYXIgPSBmYWxzZTtcclxuICAgIHRoaXMuaW52YWxpZE1vbnRoID0gZmFsc2U7XHJcbiAgICB0aGlzLmludmFsaWRZZWFyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvblVzZXJEYXRlSW5wdXQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlVmFsaWQodmFsdWUsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRhdGVGb3JtYXQsXHJcbiAgICAgICAgdGhpcy5vcHRzLm1pblllYXIsXHJcbiAgICAgICAgdGhpcy5vcHRzLm1heFllYXIsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICB0aGlzLm9wdHMubW9udGhMYWJlbHMsXHJcbiAgICAgICAgdGhpcy5vcHRzLmVuYWJsZURheXMpO1xyXG5cclxuICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZGF0ZSkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdERhdGUoZGF0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmludmFsaWREYXRlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7IHZhbHVlOiB2YWx1ZSwgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsIHZhbGlkOiAhKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmludmFsaWREYXRlKSB9KTtcclxuICAgICAgdGhpcy5vbkNoYW5nZUNiKCcnKTtcclxuICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Gb2N1c0lucHV0KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy5vcGVuT25Gb2N1cyAmJiAhdGhpcy5pc09wZW4pIHtcclxuICAgICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXRGb2N1c0JsdXIuZW1pdCh7IHJlYXNvbjogSW5wdXRGb2N1c0JsdXIuZm9jdXMsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIGFueSkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIC8vIHRoaXMuZGl2Rm9jdXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cclxuICB9XHJcblxyXG4gIG9uQmx1cklucHV0KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgdGhpcy5pbnB1dEZvY3VzQmx1ci5lbWl0KHsgcmVhc29uOiBJbnB1dEZvY3VzQmx1ci5ibHVyLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Vc2VyTW9udGhJbnB1dCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmludmFsaWRNb250aCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbTogbnVtYmVyID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoTGFiZWxWYWxpZCh2YWx1ZSwgdGhpcy5vcHRzLm1vbnRoTGFiZWxzKTtcclxuICAgIGlmIChtICE9PSAtMSkge1xyXG4gICAgICB0aGlzLmVkaXRNb250aCA9IGZhbHNlO1xyXG4gICAgICBpZiAobSAhPT0gdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIpIHtcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHsgbW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KG0pLCBtb250aE5icjogbSwgeWVhcjogdGhpcy52aXNpYmxlTW9udGgueWVhciB9O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnZhbGlkTW9udGggPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Vc2VyWWVhcklucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZFllYXIgPSBmYWxzZTtcclxuICAgIGNvbnN0IHk6IG51bWJlciA9IHRoaXMudXRpbFNlcnZpY2UuaXNZZWFyTGFiZWxWYWxpZChOdW1iZXIodmFsdWUpLCB0aGlzLm9wdHMubWluWWVhciwgdGhpcy5vcHRzLm1heFllYXIpO1xyXG4gICAgaWYgKHkgIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZWRpdFllYXIgPSBmYWxzZTtcclxuICAgICAgaWYgKHkgIT09IHRoaXMudmlzaWJsZU1vbnRoLnllYXIpIHtcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHsgbW9udGhUeHQ6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoVHh0LCBtb250aE5icjogdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHllYXI6IHkgfTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHksIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmludmFsaWRZZWFyID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzVG9kYXlEaXNhYmxlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZVRvZGF5QnRuID0gdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KHRoaXMuZ2V0VG9kYXkoKSxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzKTtcclxuICB9XHJcblxyXG4gIHBhcnNlT3B0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxvY2FsZSkge1xyXG4gICAgICB0aGlzLnNldExvY2FsZU9wdGlvbnMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0T3B0aW9ucygpO1xyXG4gICAgdGhpcy5pc1RvZGF5RGlzYWJsZWQoKTtcclxuICAgIHRoaXMuZGF5SWR4ID0gdGhpcy53ZWVrRGF5T3B0cy5pbmRleE9mKHRoaXMub3B0cy5maXJzdERheU9mV2Vlayk7XHJcbiAgICBpZiAodGhpcy5kYXlJZHggIT09IC0xKSB7XHJcbiAgICAgIGxldCBpZHg6IG51bWJlciA9IHRoaXMuZGF5SWR4O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2Vla0RheU9wdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLndlZWtEYXlzLnB1c2godGhpcy5vcHRzLmRheUxhYmVsc1t0aGlzLndlZWtEYXlPcHRzW2lkeF1dKTtcclxuICAgICAgICBpZHggPSB0aGlzLndlZWtEYXlPcHRzW2lkeF0gPT09ICdzYScgPyAwIDogaWR4ICsgMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZSh0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHZhbHVlKSwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZVsnZGF0ZSddKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKHRoaXMucGFyc2VTZWxlY3RlZERhdGUodmFsdWVbJ2RhdGUnXSksIGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0geyB5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwIH07XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VDYiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3NlbGVjdG9yJykgJiYgY2hhbmdlc1snc2VsZWN0b3InXS5jdXJyZW50VmFsdWUgPiAwKSB7XHJcbiAgICAgIHRoaXMub3BlbkJ0bkNsaWNrZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGxhY2Vob2xkZXInKSkge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gY2hhbmdlc1sncGxhY2Vob2xkZXInXS5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2xvY2FsZScpKSB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gY2hhbmdlc1snbG9jYWxlJ10uY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBjaGFuZ2VzWydkaXNhYmxlZCddLmN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucyA9IGNoYW5nZXNbJ29wdGlvbnMnXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIGlmIChjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgIHRoaXMub25Vc2VyRGF0ZUlucHV0KGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUuc3RhcnREYXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud2Vla0RheXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucGFyc2VPcHRpb25zKCk7XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRNb250aCcpKSB7XHJcbiAgICAgIGNvbnN0IGRtOiBzdHJpbmcgPSBjaGFuZ2VzWydkZWZhdWx0TW9udGgnXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIGlmIChkbSAhPT0gbnVsbCAmJiBkbSAhPT0gdW5kZWZpbmVkICYmIGRtICE9PSAnJykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHRoaXMucGFyc2VTZWxlY3RlZE1vbnRoKGRtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB7IG1vbnRoVHh0OiAnJywgbW9udGhOYnI6IDAsIHllYXI6IDAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdzZWxEYXRlJykpIHtcclxuICAgICAgY29uc3Qgc2Q6IGFueSA9IGNoYW5nZXNbJ3NlbERhdGUnXTtcclxuICAgICAgaWYgKHNkLmN1cnJlbnRWYWx1ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHNkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgc2QuY3VycmVudFZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgIE9iamVjdC5rZXlzKHNkLmN1cnJlbnRWYWx1ZSkubGVuZ3RoICE9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdGhpcy5wYXJzZVNlbGVjdGVkRGF0ZShzZC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUNiKHRoaXMuZ2V0RGF0ZU1vZGVsKHRoaXMuc2VsZWN0ZWREYXRlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pc0RhdGVTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRG8gbm90IGNsZWFyIG9uIGluaXRcclxuICAgICAgICBpZiAoIXNkLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlS2V5Ym9hcmQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCBmaWVsZCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRSZWZlcmVuY2UgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0UmVmZXJlbmNlLCAndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXRSZWZlcmVuY2UsICd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlucHV0UmVmZXJlbmNlLCAnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dFJlZmVyZW5jZSwgJy13ZWJraXQtdXNlci1tb2RpZnknLCAncmVhZC13cml0ZS1wbGFpbnRleHQtb25seScpO1xyXG4gICAgICAgIGZpZWxkLm9uZm9jdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZmllbGQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgZmllbGQpO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaWVsZC5mb2N1cygpO1xyXG5cclxuICAgICAgfSwgMCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzRGF0ZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VCdG5DbGlja2VkKCkge1xyXG4gICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgIHRoaXMucmVtb3ZlSW5saW5lU3R5bGUoKTtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgb3BlbkJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtY29udGVudCcpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RUaW1lT3BlbmVkTW9kYWwpIHtcclxuICAgICAgICAgIHRoaXMubW9kYWxIZWlnaHRCZWZvcmUgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpcnN0VGltZU9wZW5lZE1vZGFsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsICd0cmFuc2l0aW9uJywgJ2hlaWdodCAwLjNzJyk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLm1vZGFsSGVpZ2h0QmVmb3JlICsgdGhpcy5waWNrZXJGcmFtZS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuICAgIC8vIE9wZW4gc2VsZWN0b3IgYnV0dG9uIGNsaWNrZWRcclxuICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gIXRoaXMuc2hvd1NlbGVjdG9yO1xyXG4gICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgIHRoaXMuc2V0VmlzaWJsZU1vbnRoKCk7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuT3Blbik7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgIHRoaXMuaGlkZUtleWJvYXJkKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuQ2hhbmdlWkluZGV4KCk7XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmlzaWJsZU1vbnRoKCk6IHZvaWQge1xyXG4gICAgLy8gU2V0cyB2aXNpYmxlIG1vbnRoIG9mIGNhbGVuZGFyXHJcbiAgICBsZXQgeSA9IDAsIG0gPSAwO1xyXG4gICAgaWYgKCF0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE1vbnRoLnllYXIgPT09IDAgJiYgdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICAgICAgeSA9IHRvZGF5LnllYXI7XHJcbiAgICAgICAgbSA9IHRvZGF5Lm1vbnRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSB0aGlzLnNlbGVjdGVkTW9udGgueWVhcjtcclxuICAgICAgICBtID0gdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gdGhpcy5zZWxlY3RlZERhdGUueWVhcjtcclxuICAgICAgbSA9IHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoO1xyXG4gICAgfVxyXG4gICAgdGhpcy52aXNpYmxlTW9udGggPSB7IG1vbnRoVHh0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbbV0sIG1vbnRoTmJyOiBtLCB5ZWFyOiB5IH07XHJcblxyXG4gICAgLy8gQ3JlYXRlIGN1cnJlbnQgbW9udGhcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB5LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG1vbnRoTGlzdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubW9udGhzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XHJcbiAgICAgIHRoaXMubW9udGhzLnB1c2goeyBpbmRleDogaSwgc2hvcnQ6IHRoaXMub3B0cy5tb250aExhYmVsc1tpXSwgbGFiZWw6IHRoaXMub3B0cy5tb250aExhYmVsc0Z1bGxbaV0gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB5ZWFyc0xpc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLnllYXJzID0gW107XHJcblxyXG4gICAgY29uc3QgZmlyc3RZZWFyID0gdGhpcy5vcHRzLm1pblllYXI7XHJcbiAgICBjb25zdCBsYXN0WWVhciA9IHRoaXMub3B0cy5tYXhZZWFyO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBmaXJzdFllYXI7IGkgPD0gbGFzdFllYXI7IGkrKykge1xyXG4gICAgICB0aGlzLnllYXJzLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2TW9udGgoKTogdm9pZCB7XHJcbiAgICAvLyBQcmV2aW91cyBtb250aCBmcm9tIGNhbGVuZGFyXHJcbiAgICBjb25zdCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCAxKTtcclxuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpIC0gMSk7XHJcblxyXG4gICAgY29uc3QgeTogbnVtYmVyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbTogbnVtYmVyID0gZC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICB0aGlzLnZpc2libGVNb250aCA9IHsgbW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KG0pLCBtb250aE5icjogbSwgeWVhcjogeSB9O1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbmV4dE1vbnRoKCk6IHZvaWQge1xyXG4gICAgLy8gTmV4dCBtb250aCBmcm9tIGNhbGVuZGFyXHJcbiAgICBjb25zdCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCAxKTtcclxuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpICsgMSk7XHJcblxyXG4gICAgY29uc3QgeTogbnVtYmVyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbTogbnVtYmVyID0gZC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICB0aGlzLnZpc2libGVNb250aCA9IHsgbW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KG0pLCBtb250aE5icjogbSwgeWVhcjogeSB9O1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHJldlllYXIoKTogdm9pZCB7XHJcbiAgICAvLyBQcmV2aW91cyB5ZWFyIGZyb20gY2FsZW5kYXJcclxuICAgIHRoaXMudmlzaWJsZU1vbnRoLnllYXItLTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBuZXh0WWVhcigpOiB2b2lkIHtcclxuICAgIC8vIE5leHQgeWVhciBmcm9tIGNhbGVuZGFyXHJcbiAgICB0aGlzLnZpc2libGVNb250aC55ZWFyKys7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgdG9kYXlDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgLy8gVG9kYXkgYnV0dG9uIGNsaWNrZWRcclxuICAgIGNvbnN0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgaWYgKCF0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkodG9kYXksXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5cylcclxuICAgICkge1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGUodG9kYXkpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRvZGF5LnllYXIgIT09IHRoaXMudmlzaWJsZU1vbnRoLnllYXIgfHwgdG9kYXkubW9udGggIT09IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0geyBtb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW3RvZGF5Lm1vbnRoXSwgbW9udGhOYnI6IHRvZGF5Lm1vbnRoLCB5ZWFyOiB0b2RheS55ZWFyIH07XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0b2RheS5tb250aCwgdG9kYXkueWVhciwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjZWxsQ2xpY2tlZChjZWxsOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIENlbGwgY2xpY2tlZCBvbiB0aGUgY2FsZW5kYXJcclxuICAgIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5wcmV2TW9udGhJZCkge1xyXG4gICAgICAvLyBQcmV2aW91cyBtb250aCBkYXlcclxuICAgICAgdGhpcy5wcmV2TW9udGgoKTtcclxuICAgIH0gZWxzZSBpZiAoY2VsbC5jbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQpIHtcclxuICAgICAgLy8gQ3VycmVudCBtb250aCBkYXkgLSBpZiBkYXRlIGlzIGFscmVhZHkgc2VsZWN0ZWQgY2xlYXIgaXRcclxuICAgICAgaWYgKGNlbGwuZGF0ZU9iai55ZWFyID09PSB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyICYmXHJcbiAgICAgICAgY2VsbC5kYXRlT2JqLm1vbnRoID09PSB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aCAmJlxyXG4gICAgICAgIGNlbGwuZGF0ZU9iai5kYXkgPT09IHRoaXMuc2VsZWN0ZWREYXRlLmRheVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZShjZWxsLmRhdGVPYmopO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGNlbGwuY21vID09PSB0aGlzLm5leHRNb250aElkKSB7XHJcbiAgICAgIC8vIE5leHQgbW9udGggZGF5XHJcbiAgICAgIHRoaXMubmV4dE1vbnRoKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0TW9udGhZZWFyRWRpdCgpO1xyXG4gIH1cclxuXHJcbiAgY2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogYW55KSB7XHJcbiAgICAvLyBDZWxsIGtleWJvYXJkIGhhbmRsaW5nXHJcbiAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZW50ZXIgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5zcGFjZSkgJiYgIWNlbGwuZGlzYWJsZWQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5jZWxsQ2xpY2tlZChjZWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyRGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIENsZWFycyB0aGUgZGF0ZSBhbmQgbm90aWZpZXMgcGFyZW50IHVzaW5nIGNhbGxiYWNrcyBhbmQgdmFsdWUgYWNjZXNzb3JcclxuICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfTtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZWQuZW1pdCh7IGRhdGU6IGRhdGUsIGpzZGF0ZTogbnVsbCwgZm9ybWF0dGVkOiAnJywgZXBvYzogMCB9KTtcclxuICAgIHRoaXMub25DaGFuZ2VDYihudWxsKTtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKGRhdGUsIHRydWUpO1xyXG4gICAgdGhpcy50bXAgPSB7IHllYXI6IHRoaXMuZ2V0VG9kYXkoKS55ZWFyLCBtb250aDogdGhpcy5nZXRUb2RheSgpLm1vbnRoLCBkYXk6IHRoaXMuZ2V0VG9kYXkoKS5kYXkgfTtcclxuICAgIHRoaXMuc2V0VmlzaWJsZU1vbnRoKCk7XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZWxlY3REYXRlKGRhdGU6IElNeURhdGUpOiB2b2lkIHtcclxuICAgIC8vIERhdGUgc2VsZWN0ZWQsIG5vdGlmaWVzIHBhcmVudCB1c2luZyBjYWxsYmFja3MgYW5kIHZhbHVlIGFjY2Vzc29yXHJcbiAgICB0aGlzLnRtcCA9IGRhdGU7XHJcbiAgICBjb25zdCBkYXRlTW9kZWw6IGFueSA9IHRoaXMuZ2V0RGF0ZU1vZGVsKGRhdGUpO1xyXG4gICAgLy8gdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHsgcHJldmlvdXNEYXRlOiB0aGlzLnNlbGVjdGlvbkRheVR4dCwgYWN0dWFsRGF0ZTogZGF0ZU1vZGVsIH0pO1xyXG4gICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICAganNkYXRlOiBudWxsLFxyXG4gICAgICBwcmV2aW91c0RhdGVGb3JtYXR0ZWQ6IHRoaXMuc2VsZWN0aW9uRGF5VHh0LFxyXG4gICAgICBhY3R1YWxEYXRlRm9ybWF0dGVkOiBkYXRlTW9kZWwsXHJcbiAgICAgIGVwb2M6IDBcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkNoYW5nZUNiKGRhdGVNb2RlbCk7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZShkYXRlLCBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XHJcblxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0cy5jbG9zZUFmdGVyU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuY2xvc2VCdG5DbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIGhpZGUgY2FsZW5kYXIgd2hlbiBkYXRlIHdhcyBjbGlja2VkXHJcbiAgICAvLyB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGF0ZVZhbHVlKGRhdGU6IElNeURhdGUsIGNsZWFyOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBVcGRhdGVzIGRhdGUgdmFsdWVzXHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLnRtcCA9IGRhdGU7XHJcbiAgICB0aGlzLmlzRGF0ZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gY2xlYXIgPyAnJyA6IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLnNlbGVjdGlvbkRheVR4dCwgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsIHZhbGlkOiAhY2xlYXIgfSk7XHJcbiAgICB0aGlzLmludmFsaWREYXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZU1vZGVsKGRhdGU6IElNeURhdGUpOiBhbnkge1xyXG4gICAgLy8gQ3JlYXRlcyBhIGRhdGUgbW9kZWwgb2JqZWN0IGZyb20gdGhlIGdpdmVuIHBhcmFtZXRlclxyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIHByZVplcm8odmFsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gUHJlcGVuZCB6ZXJvIGlmIHNtYWxsZXIgdGhhbiAxMFxyXG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMCkgPCAxMCA/ICcwJyArIHZhbCA6IHZhbDtcclxuICB9XHJcblxyXG4gIGZvcm1hdERhdGUodmFsOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgLy8gUmV0dXJucyBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcsIGlmIG1tbSBpcyBwYXJ0IG9mIGRhdGVGb3JtYXQgcmV0dXJucyBtb250aCBhcyBhIHN0cmluZ1xyXG4gICAgLy8gZGF5c1xyXG4gICAgY29uc3QgZCA9IHZhbC5kYXk7IC8vIDEgLSAzMVxyXG4gICAgY29uc3QgZGQgPSB0aGlzLnByZVplcm8odmFsLmRheSk7IC8vIDAxIC0gMzFcclxuICAgIGNvbnN0IGRkZCA9IHRoaXMub3B0cy5kYXlMYWJlbHNbdGhpcy5nZXRXZWVrZGF5KHZhbCldOyAvLyBTdW4tU2F0XHJcbiAgICBjb25zdCBkZGRkID0gdGhpcy5vcHRzLmRheUxhYmVsc0Z1bGxbdGhpcy5nZXRXZWVrZGF5KHZhbCldOyAvLyBTdW5kYXkg4oCTIFNhdHVyZGF5XHJcbiAgICBjb25zdCBtID0gdmFsLm1vbnRoOyAvLyAxIC0gMTJcclxuICAgIGNvbnN0IG1tID0gdGhpcy5wcmVaZXJvKHZhbC5tb250aCk7IC8vIDAxIC0gMTJcclxuICAgIGNvbnN0IG1tbSA9IHRoaXMuZ2V0TW9udGhTaG9ydCh2YWwubW9udGgpOyAvLyBKYW4gLSBEZWNcclxuICAgIGNvbnN0IG1tbW0gPSB0aGlzLmdldE1vbnRoRnVsbCh2YWwubW9udGgpOyAvLyBKYW51YXJ5IOKAkyBEZWNlbWJlclxyXG4gICAgY29uc3QgeXkgPSB2YWwueWVhci50b1N0cmluZygpLmxlbmd0aCA9PT0gMiA/IHZhbC55ZWFyIDogdmFsLnllYXIudG9TdHJpbmcoKS5zbGljZSgyLCA0KTsgLy8gMDAgLSA5OVxyXG4gICAgY29uc3QgeXl5eSA9IHZhbC55ZWFyO1xyXG5cclxuICAgIGNvbnN0IHRvUmVwbGFjZSA9IHRoaXMub3B0cy5kYXRlRm9ybWF0LnNwbGl0KC8oZHsxLDR9fG17MSw0fXx5ezR9fHl5fCEuKS9nKTtcclxuICAgIGxldCBmb3JtYXR0ZWQgPSAnJztcclxuICAgIHRvUmVwbGFjZS5mb3JFYWNoKChlbDogYW55KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZWwpIHtcclxuICAgICAgICBjYXNlICdkZGRkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZGRkZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkZGQnOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBkZGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZGQnOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBkZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtbW1tJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbW1tbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtbW0nOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBtbW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW0nOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBtbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd5eXl5JzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgeXl5eSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd5eSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIHl5KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1hdHRlZCArPSBlbDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWQ7XHJcbiAgfVxyXG5cclxuICBtb250aFRleHQobTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIC8vIFJldHVybnMgbW9udGggYXMgYSB0ZXh0XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dO1xyXG4gIH1cclxuXHJcbiAgd2Vla1RleHQobTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIFJldHVybnMgbW9udGggYXMgYSB0ZXh0XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLmRheUxhYmVsc0Z1bGxbbV07XHJcbiAgfVxyXG5cclxuICBnZXRNb250aFNob3J0KG06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhGdWxsKG06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLm1vbnRoTGFiZWxzRnVsbFttXTtcclxuICB9XHJcblxyXG4gIG1vbnRoU3RhcnRJZHgoeTogbnVtYmVyLCBtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gTW9udGggc3RhcnQgaW5kZXhcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZC5zZXREYXRlKDEpO1xyXG4gICAgZC5zZXRNb250aChtIC0gMSk7XHJcbiAgICBkLnNldEZ1bGxZZWFyKHkpO1xyXG4gICAgY29uc3QgaWR4ID0gZC5nZXREYXkoKSArIHRoaXMuc3VuZGF5SWR4KCk7XHJcbiAgICByZXR1cm4gaWR4ID49IDcgPyBpZHggLSA3IDogaWR4O1xyXG4gIH1cclxuXHJcbiAgZGF5c0luTW9udGgobTogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIGN1cnJlbnQgbW9udGhcclxuICAgIHJldHVybiBuZXcgRGF0ZSh5LCBtLCAwKS5nZXREYXRlKCk7XHJcbiAgfVxyXG5cclxuICBkYXlzSW5QcmV2TW9udGgobTogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIHRoZSBwcmV2aW91cyBtb250aFxyXG4gICAgY29uc3QgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh5LCBtLCAxKTtcclxuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpIC0gMSk7XHJcbiAgICByZXR1cm4gdGhpcy5kYXlzSW5Nb250aChkLmdldE1vbnRoKCkgKyAxLCBkLmdldEZ1bGxZZWFyKCkpO1xyXG4gIH1cclxuXHJcbiAgaXNDdXJyRGF5KGQ6IG51bWJlciwgbTogbnVtYmVyLCB5OiBudW1iZXIsIGNtbzogbnVtYmVyLCB0b2RheTogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gQ2hlY2sgaXMgYSBnaXZlbiBkYXRlIHRoZSB0b2RheVxyXG4gICAgcmV0dXJuIGQgPT09IHRvZGF5LmRheSAmJiBtID09PSB0b2RheS5tb250aCAmJiB5ID09PSB0b2RheS55ZWFyICYmIGNtbyA9PT0gdGhpcy5jdXJyTW9udGhJZDtcclxuICB9XHJcblxyXG4gIGdldFRvZGF5KCk6IElNeURhdGUge1xyXG4gICAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4geyB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXk6IGRhdGUuZ2V0RGF0ZSgpIH07XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXREYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpLmdldFRpbWUoKTtcclxuICB9XHJcblxyXG4gIGdldFdlZWtkYXkoZGF0ZTogSU15RGF0ZSk6IHN0cmluZyB7XHJcbiAgICAvLyBHZXQgd2Vla2RheTogc3UsIG1vLCB0dSwgd2UgLi4uXHJcbiAgICByZXR1cm4gdGhpcy53ZWVrRGF5T3B0c1t0aGlzLnV0aWxTZXJ2aWNlLmdldERheU51bWJlcihkYXRlKV07XHJcbiAgfVxyXG5cclxuICBnZXREYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIpOiBEYXRlIHtcclxuICAgIC8vIENyZWF0ZXMgYSBkYXRlIG9iamVjdCBmcm9tIGdpdmVuIHllYXIsIG1vbnRoIGFuZCBkYXlcclxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgMCwgMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICBzdW5kYXlJZHgoKTogbnVtYmVyIHtcclxuICAgIC8vIEluZGV4IG9mIFN1bmRheSBkYXlcclxuICAgIHJldHVybiB0aGlzLmRheUlkeCA+IDAgPyA3IC0gdGhpcy5kYXlJZHggOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYWxlbmRhcihtOiBudW1iZXIsIHk6IG51bWJlciwgbm90aWZ5Q2hhbmdlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVzLmxlbmd0aCA9IDA7XHJcbiAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgIGNvbnN0IG1vbnRoU3RhcnQ6IG51bWJlciA9IHRoaXMubW9udGhTdGFydElkeCh5LCBtKTtcclxuICAgIGNvbnN0IGRJblRoaXNNOiBudW1iZXIgPSB0aGlzLmRheXNJbk1vbnRoKG0sIHkpO1xyXG4gICAgY29uc3QgZEluUHJldk06IG51bWJlciA9IHRoaXMuZGF5c0luUHJldk1vbnRoKG0sIHkpO1xyXG5cclxuICAgIGxldCBkYXlOYnIgPSAxO1xyXG4gICAgbGV0IGNtbzogbnVtYmVyID0gdGhpcy5wcmV2TW9udGhJZDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHdlZWs6IEFycmF5PElNeUNhbGVuZGFyRGF5PiA9IFtdO1xyXG4gICAgICBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAgIC8vIEZpcnN0IHdlZWtcclxuICAgICAgICBjb25zdCBwbSA9IGRJblByZXZNIC0gbW9udGhTdGFydCArIDE7XHJcbiAgICAgICAgLy8gUHJldmlvdXMgbW9udGhcclxuICAgICAgICBmb3IgKGxldCBqID0gcG07IGogPD0gZEluUHJldk07IGorKykge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHsgeWVhcjogeSwgbW9udGg6IG0gLSAxLCBkYXk6IGogfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShqLCBtLCB5LCBjbW8sIHRvZGF5KSxcclxuICAgICAgICAgICAgZGF5TmJyOiB0aGlzLnV0aWxTZXJ2aWNlLmdldERheU51bWJlcihkYXRlKSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheShkYXRlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmVuYWJsZURheXNcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLm1hcmtEYXRlcywgdGhpcy5vcHRzLm1hcmtXZWVrZW5kcylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY21vID0gdGhpcy5jdXJyTW9udGhJZDtcclxuICAgICAgICAvLyBDdXJyZW50IG1vbnRoXHJcbiAgICAgICAgY29uc3QgZGF5c0xlZnQ6IG51bWJlciA9IDcgLSB3ZWVrLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRheXNMZWZ0OyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7IHllYXI6IHksIG1vbnRoOiBtLCBkYXk6IGRheU5iciB9O1xyXG4gICAgICAgICAgd2Vlay5wdXNoKHtcclxuICAgICAgICAgICAgZGF0ZU9iajogZGF0ZSwgY21vOiBjbW8sIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGRheU5iciwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgIGRheU5icjogdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSksXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoZGF0ZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKGRhdGUsIHRoaXMub3B0cy5tYXJrRGF0ZXMsIHRoaXMub3B0cy5tYXJrV2Vla2VuZHMpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRheU5icisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZXN0IG9mIHRoZSB3ZWVrc1xyXG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgODsgaisrKSB7XHJcbiAgICAgICAgICBpZiAoZGF5TmJyID4gZEluVGhpc00pIHtcclxuICAgICAgICAgICAgLy8gTmV4dCBtb250aFxyXG4gICAgICAgICAgICBkYXlOYnIgPSAxO1xyXG4gICAgICAgICAgICBjbW8gPSB0aGlzLm5leHRNb250aElkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHsgeWVhcjogeSwgbW9udGg6IGNtbyA9PT0gdGhpcy5jdXJyTW9udGhJZCA/IG0gOiBtICsgMSwgZGF5OiBkYXlOYnIgfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICBkYXlOYnI6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShkYXRlLCB0aGlzLm9wdHMubWFya0RhdGVzLCB0aGlzLm9wdHMubWFya1dlZWtlbmRzKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd2Vla05icjogbnVtYmVyID0gdGhpcy5vcHRzLnNob3dXZWVrTnVtYmVycyAmJlxyXG4gICAgICAgIHRoaXMub3B0cy5maXJzdERheU9mV2VlayA9PT0gJ21vJyA/XHJcbiAgICAgICAgdGhpcy51dGlsU2VydmljZS5nZXRXZWVrTnVtYmVyKHdlZWtbMF0uZGF0ZU9iaikgOiAwO1xyXG4gICAgICB0aGlzLmRhdGVzLnB1c2goeyB3ZWVrOiB3ZWVrLCB3ZWVrTmJyOiB3ZWVrTmJyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZShtLCB5KTtcclxuXHJcbiAgICBpZiAobm90aWZ5Q2hhbmdlKSB7XHJcbiAgICAgIC8vIE5vdGlmeSBwYXJlbnRcclxuICAgICAgdGhpcy5jYWxlbmRhclZpZXdDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgbW9udGg6IG0sXHJcbiAgICAgICAgZmlyc3Q6IHtcclxuICAgICAgICAgIG51bWJlcjogMSxcclxuICAgICAgICAgIHdlZWtkYXk6IHRoaXMuZ2V0V2Vla2RheSh7XHJcbiAgICAgICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgICAgIG1vbnRoOiBtLFxyXG4gICAgICAgICAgICBkYXk6IDFcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYXN0OiB7XHJcbiAgICAgICAgICBudW1iZXI6IGRJblRoaXNNLFxyXG4gICAgICAgICAgd2Vla2RheTogdGhpcy5nZXRXZWVrZGF5KHtcclxuICAgICAgICAgICAgeWVhcjogeSxcclxuICAgICAgICAgICAgbW9udGg6IG0sXHJcbiAgICAgICAgICAgIGRheTogZEluVGhpc01cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1vbnRoTGlzdCgpO1xyXG4gICAgdGhpcy55ZWFyc0xpc3QoKTtcclxuICB9XHJcblxyXG4gIHBhcnNlU2VsZWN0ZWREYXRlKHNlbERhdGU6IGFueSk6IElNeURhdGUge1xyXG4gICAgLy8gUGFyc2Ugc2VsRGF0ZSB2YWx1ZSAtIGl0IGNhbiBiZSBzdHJpbmcgb3IgSU15RGF0ZSBvYmplY3RcclxuICAgIGxldCBkYXRlOiBJTXlEYXRlID0ge2RheTogMCwgbW9udGg6IDAsIHllYXI6IDB9O1xyXG4gICAgaWYgKHR5cGVvZiBzZWxEYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNvbnN0IHNkOiBzdHJpbmcgPSA8c3RyaW5nPiBzZWxEYXRlO1xyXG4gICAgICAgIGNvbnN0IGRmOiBzdHJpbmcgPSB0aGlzLm9wdHMuZGF0ZUZvcm1hdDtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsaW1ldGVyczogQXJyYXk8c3RyaW5nPiA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZUZvcm1hdERlbGltZXRlcnMoZGYpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZVZhbHVlKHNkLCBkZiwgZGVsaW1ldGVycyk7XHJcbiAgICAgICAgZGF0ZS55ZWFyID0gdGhpcy51dGlsU2VydmljZS5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVswXSk7XHJcblxyXG4gICAgICAgIGlmIChkZi5pbmRleE9mKCdtbW1tJykgIT09IC0xKSB7XHJcbiAgICAgICAgICBkYXRlLm1vbnRoID0gdGhpcy51dGlsU2VydmljZS5nZXRNb250aE51bWJlckJ5TW9udGhOYW1lKGRhdGVWYWx1ZVsxXSwgdGhpcy5vcHRzLm1vbnRoTGFiZWxzRnVsbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkZi5pbmRleE9mKCdtbW0nKSAhPT0gLTEpIHtcclxuICAgICAgICAgIGRhdGUubW9udGggPSB0aGlzLnV0aWxTZXJ2aWNlLmdldE1vbnRoTnVtYmVyQnlNb250aE5hbWUoZGF0ZVZhbHVlWzFdLCB0aGlzLm9wdHMubW9udGhMYWJlbHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkYXRlLm1vbnRoID0gdGhpcy51dGlsU2VydmljZS5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGUuZGF5ICA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMl0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsRGF0ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBkYXRlID0gc2VsRGF0ZTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gdGhpcy5mb3JtYXREYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICBwYXJzZVNlbGVjdGVkTW9udGgobXM6IHN0cmluZyk6IElNeU1vbnRoIHtcclxuICAgIHJldHVybiB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGVmYXVsdE1vbnRoKG1zKTtcclxuICB9XHJcblxyXG4gIHNldEhlYWRlckJ0bkRpc2FibGVkU3RhdGUobTogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBkcG0gPSBmYWxzZTtcclxuICAgIGxldCBkcHkgPSBmYWxzZTtcclxuICAgIGxldCBkbm0gPSBmYWxzZTtcclxuICAgIGxldCBkbnkgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9wdHMuZGlzYWJsZUhlYWRlckJ1dHRvbnMpIHtcclxuICAgICAgZHBtID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7XHJcbiAgICAgICAgeWVhcjogbSA9PT0gMSA/IHkgLSAxIDogeSxcclxuICAgICAgICBtb250aDogbSA9PT0gMSA/IDEyIDogbSAtIDEsXHJcbiAgICAgICAgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0gPT09IDEgPyAxMiA6IG0gLSAxLCBtID09PSAxID8geSAtIDEgOiB5KVxyXG4gICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpO1xyXG4gICAgICBkcHkgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKHtcclxuICAgICAgICB5ZWFyOiB5IC0gMSxcclxuICAgICAgICBtb250aDogbSxcclxuICAgICAgICBkYXk6IHRoaXMuZGF5c0luTW9udGgobSwgeSAtIDEpXHJcbiAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCk7XHJcbiAgICAgIGRubSA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2Uoe1xyXG4gICAgICAgIHllYXI6IG0gPT09IDEyID8geSArIDEgOiB5LFxyXG4gICAgICAgIG1vbnRoOiBtID09PSAxMiA/IDEgOiBtICsgMSxcclxuICAgICAgICBkYXk6IDFcclxuICAgICAgfSxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlKTtcclxuICAgICAgZG55ID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7IHllYXI6IHkgKyAxLCBtb250aDogbSwgZGF5OiAxIH0sIHRoaXMub3B0cy5kaXNhYmxlU2luY2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2TW9udGhEaXNhYmxlZCA9IG0gPT09IDEgJiYgeSA9PT0gdGhpcy5vcHRzLm1pblllYXIgfHwgZHBtO1xyXG4gICAgdGhpcy5wcmV2WWVhckRpc2FibGVkID0geSAtIDEgPCB0aGlzLm9wdHMubWluWWVhciB8fCBkcHk7XHJcbiAgICB0aGlzLm5leHRNb250aERpc2FibGVkID0gbSA9PT0gMTIgJiYgeSA9PT0gdGhpcy5vcHRzLm1heFllYXIgfHwgZG5tO1xyXG4gICAgdGhpcy5uZXh0WWVhckRpc2FibGVkID0geSArIDEgPiB0aGlzLm9wdHMubWF4WWVhciB8fCBkbnk7XHJcbiAgfVxyXG5cclxuICBjaGVja0FjdGl2ZSgpIHtcclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sYWJlbEFjdGl2ZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzRGF0ZVNlbGVjdGVkKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=