/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewEncapsulation, Renderer2, forwardRef, ViewChild, PLATFORM_ID, Inject, ChangeDetectionStrategy, ChangeDetectorRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LocaleService } from './services/datepickerLocale.service';
import { UtilService } from './services/datepickerUtil.service';
import { isPlatformBrowser } from '@angular/common';
import { Utils } from "../../free/utils";
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
        this.inline = false;
        this.inlineIcon = 'far fa-calendar-alt';
        this.dateChanged = new EventEmitter();
        this.inputFieldChanged = new EventEmitter();
        this.calendarViewChanged = new EventEmitter();
        this.calendarToggle = new EventEmitter();
        this.inputFocusBlur = new EventEmitter();
        this.closeButtonClicked = new EventEmitter();
        this.clearButtonClicked = new EventEmitter();
        this.todayButtonClicked = new EventEmitter();
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
        function () {
        });
        this.onTouchedCb = (/**
         * @return {?}
         */
        function () {
        });
        // INLINE DATE PICKER
        this.utils = new Utils();
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
                catch (error) {
                }
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
        catch (error) {
        }
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
                this.setVisibleMonth();
            }
            else {
                this.invalidDate = true;
            }
        }
        if (this.invalidDate) {
            this.inputFieldChanged.emit({
                value: value,
                dateFormat: this.opts.dateFormat,
                valid: !(value.length === 0 || this.invalidDate)
            });
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
        this.clearButtonClicked.emit(this);
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
        this.closeButtonClicked.emit(this);
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
        catch (error) {
        }
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
        this.todayButtonClicked.emit(this);
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
            jsdate: this.getDate(date.year, date.month, date.day),
            previousDateFormatted: this.selectionDayTxt,
            actualDateFormatted: dateModel,
            epoc: Math.round(this.getTimeInMilliseconds(date) / 1000.0)
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
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.toggleInlineDatePicker = /**
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this.closeBtnClicked();
        }
        else {
            this.openBtnClicked();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onWindowClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.isOpen &&
            this.inline &&
            !this.utils.getClosestEl(event.target, '.datepicker-inline-icon') &&
            !this.utils.getClosestEl(event.target, '.datepicker-inline-icon') &&
            !this.utils.getClosestEl(event.target, '.picker__frame') &&
            !this.utils.getClosestEl(event.target, '.mydp-date')) {
            this.closeBtnClicked();
        }
    };
    MDBDatePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-date-picker',
                    exportAs: 'mdbdatepicker',
                    template: "<!-- Line 27: Deleted (focus)=\"onFocusInput($event)\" for better use in Firefox. If other strange problems will occur, please paste it in line 27. -->\r\n<div class=\"mydp picker\" [ngClass]=\"{'picker--opened': showSelector}\" [ngStyle]=\"{'width': opts.width}\" *ngIf=\"!inline\">\r\n  <div class=\"md-form\">\r\n    <label (click)=\"openBtnClicked()\" *ngIf=\"label.length > 0\" [ngClass]=\"{\r\n          'active': checkActive(),\r\n          'disabled': opts.componentDisabled\r\n        }\">{{ label }}</label>\r\n    <input #dateInput type=\"text\" class=\"form-control mydp-date\" [attr.aria-label]=\"opts.ariaLabelInputField\"\r\n           (mousedown)=\"openBtnClicked()\"\r\n           [attr.maxlength]=\"opts.dateFormat.length\" [ngClass]=\"{\r\n        'selectiondisabled': opts.componentDisabled,\r\n        'disabled': opts.componentDisabled\r\n      }\" placeholder=\"{{ placeholder }}\" [ngModel]=\"selectionDayTxt\" (ngModelChange)=\"onUserDateInput($event)\"\r\n           [value]=\"selectionDayTxt\"\r\n           [ngStyle]=\"{\r\n        'font-size': opts.selectionTxtFontSize\r\n      }\" (blur)=\"onBlurInput($event)\" (focus)=\"onFocusInput($event)\" [disabled]=\"opts.componentDisabled\"\r\n           autocomplete=\"off\" [tabindex]=\"tabIndex\">\r\n  </div>\r\n  <div *ngIf=\"showSelector\" class=\"selector picker__holder selectorarrow selectorarrowleft selectorarrowright\" #divFocus\r\n       [ngClass]=\"{'alignselectorright': opts.alignSelectorRight}\"\r\n       tabindex=\"0\">\r\n    <div class=\"picker__frame picker__box\" #pickerFrame>\r\n      <div class=\"picker__header\">\r\n        <div class=\"picker__date-display\">\r\n          <div class=\"picker__weekday-display\">\r\n            {{ weekText(getWeekday(tmp)) }}\r\n          </div>\r\n          <div class=\"picker__month-display\">\r\n            <div>{{ monthText(tmp.month) }}</div>\r\n          </div>\r\n          <div class=\"picker__day-display\">\r\n            <div>{{ tmp.day }}</div>\r\n          </div>\r\n          <div class=\"picker__year-display\">\r\n            <div>{{ tmp.year }}</div>\r\n          </div>\r\n        </div>\r\n        <select class=\"picker__select--year\" [(ngModel)]=\"visibleMonth.year\" (ngModelChange)=\"onUserYearInput($event)\"\r\n                role=\"menu\"\r\n                aria-label=\"Year selector\">\r\n          <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option>\r\n        </select>\r\n        <select class=\"picker__select--month\" [(ngModel)]=\"visibleMonth.monthTxt\"\r\n                (ngModelChange)=\"onUserMonthInput($event)\" role=\"menu\"\r\n                aria-label=\"Month selector\">\r\n          <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option>\r\n        </select>\r\n        <button class=\"picker__nav--prev\" data-nav=\"-1\" type=\"button\" aria-controls=\"date-picker-example_table\"\r\n                title=\"Previous month\"\r\n                (click)=\"prevMonth()\" [disabled]=\"prevMonthDisabled\"\r\n                [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button>\r\n        <button class=\"picker__nav--next\" data-nav=\"1\" type=\"button\" aria-controls=\"date-picker-example_table\"\r\n                title=\"Next month\"\r\n                (click)=\"nextMonth()\" [disabled]=\"nextMonthDisabled\"\r\n                [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button>\r\n      </div>\r\n      <table class=\"picker__table\">\r\n        <thead>\r\n        <tr>\r\n          <th class=\"picker__weekday weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#\r\n          </th>\r\n          <th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let w of dates\">\r\n          <td class=\"picker__day daycellweeknbr\"\r\n              *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\r\n          <td class=\"picker__day\" *ngFor=\"let d of w.week\"\r\n              [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId&&!d.disabled, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\">\r\n            <div *ngIf=\"d.markedDate.marked\" class=\"markdate\"\r\n                 [ngStyle]=\"{'background-color': d.markedDate.color}\"></div>\r\n            <div class=\"picker__day\"\r\n                 [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId,'picker__day--outfocus': (d.cmo===nextMonthId || d.cmo===prevMonthId), 'picker__day--today':d.currDay&&opts.markCurrentDay, 'picker__day--selected picker__day--highlighted':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId}\"\r\n                 (click)=\"!d.disabled&&cellClicked(d);$event.stopPropagation()\" (keydown)=\"cellKeyDown($event, d)\"\r\n                 tabindex=\"0\">\r\n              {{d.dateObj.day}}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"picker__footer\">\r\n        <button type=\"button\" *ngIf=\"opts.showTodayBtn\" class=\"picker__button--today\" (click)=\"todayClicked()\"\r\n                role=\"button\" [attr.aria-label]=\"opts.todayBtnTxt\">\r\n          {{opts.todayBtnTxt}}\r\n        </button>\r\n        <button type=\"button\" *ngIf=\"opts.showClearDateBtn\" class=\"picker__button--clear\" (click)=\"removeBtnClicked()\"\r\n                role=\"button\"\r\n                [attr.aria-label]=\"opts.clearBtnTxt\">\r\n          {{opts.clearBtnTxt}}\r\n        </button>\r\n        <button type=\"button\" [ngClass]=\"{'ml-auto': !opts.showTodayBtn}\" class=\"picker__button--close\"\r\n                (click)=\"closeBtnClicked()\"\r\n                role=\"button\" [attr.aria-label]=\"opts.closeBtnTxt\">\r\n          {{opts.closeBtnTxt}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"md-form my-0 d-flex align-items-center justify-content-center\" *ngIf=\"inline\">\r\n  <label (click)=\"openBtnClicked()\" *ngIf=\"label.length > 0\" [ngClass]=\"{\r\n          'active': checkActive(),\r\n          'disabled': opts.componentDisabled\r\n        }\">{{ label }}</label>\r\n  <input #dateInput type=\"text\" class=\"form-control mydp-date\" [attr.aria-label]=\"opts.ariaLabelInputField\"\r\n         [attr.maxlength]=\"opts.dateFormat.length\" [ngClass]=\"{\r\n        'selectiondisabled': opts.componentDisabled,\r\n        'disabled': opts.componentDisabled\r\n      }\" placeholder=\"{{ placeholder }}\" [ngModel]=\"selectionDayTxt\" (ngModelChange)=\"onUserDateInput($event)\"\r\n         [value]=\"selectionDayTxt\"\r\n         [ngStyle]=\"{\r\n        'font-size': opts.selectionTxtFontSize\r\n      }\" (focus)=\"onFocusInput($event)\" (blur)=\"onBlurInput($event)\" [disabled]=\"opts.componentDisabled\"\r\n         autocomplete=\"off\" [tabindex]=\"tabIndex\">\r\n  <i [ngClass]=\"inlineIcon\" class=\"datepicker-inline-icon\" (click)=\"toggleInlineDatePicker()\"></i>\r\n</div>\r\n<div class=\"mydp picker datepicker-inline\" [ngClass]=\"{'picker--opened': showSelector}\" *ngIf=\"inline && isOpen\">\r\n\r\n  <div class=\"picker__frame picker__box z-depth-1\" #pickerFrame [ngClass]=\"{'d-none': !isOpen}\">\r\n    <div class=\"picker__header d-flex flex-center\">\r\n\r\n      <select class=\"picker__select--year\" [(ngModel)]=\"visibleMonth.year\" (ngModelChange)=\"onUserYearInput($event)\"\r\n              role=\"menu\"\r\n              aria-label=\"Year selector\">\r\n        <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option>\r\n      </select>\r\n      <select class=\"picker__select--month\" [(ngModel)]=\"visibleMonth.monthTxt\"\r\n              (ngModelChange)=\"onUserMonthInput($event)\" role=\"menu\"\r\n              aria-label=\"Month selector\">\r\n        <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option>\r\n      </select>\r\n      <button class=\"picker__nav--prev\" data-nav=\"-1\" type=\"button\" aria-controls=\"date-picker-example_table\"\r\n              title=\"Previous month\"\r\n              (click)=\"prevMonth()\" [disabled]=\"prevMonthDisabled\"\r\n              [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button>\r\n      <button class=\"picker__nav--next\" data-nav=\"1\" type=\"button\" aria-controls=\"date-picker-example_table\"\r\n              title=\"Next month\"\r\n              (click)=\"nextMonth()\" [disabled]=\"nextMonthDisabled\"\r\n              [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button>\r\n    </div>\r\n    <table class=\"picker__table\">\r\n      <thead>\r\n      <tr>\r\n        <th class=\"picker__weekday weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th>\r\n        <th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let w of dates\">\r\n        <td class=\"picker__day daycellweeknbr\"\r\n            *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\r\n        <td class=\"picker__day\" *ngFor=\"let d of w.week\"\r\n            [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId&&!d.disabled, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\">\r\n          <div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div>\r\n          <div class=\"picker__day\"\r\n               [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId,'picker__day--outfocus': (d.cmo===nextMonthId || d.cmo===prevMonthId), 'picker__day--today':d.currDay&&opts.markCurrentDay, 'picker__day--selected picker__day--highlighted':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId}\"\r\n               (click)=\"!d.disabled&&cellClicked(d);$event.stopPropagation()\" (keydown)=\"cellKeyDown($event, d)\"\r\n               tabindex=\"0\">\r\n            {{d.dateObj.day}}\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"picker__footer\">\r\n      <button type=\"button\" *ngIf=\"opts.showTodayBtn\" class=\"picker__button--today\" (click)=\"todayClicked()\"\r\n              role=\"button\" [attr.aria-label]=\"opts.todayBtnTxt\">\r\n        {{opts.todayBtnTxt}}\r\n      </button>\r\n      <button type=\"button\" *ngIf=\"opts.showClearDateBtn\" class=\"picker__button--clear\" (click)=\"removeBtnClicked()\"\r\n              role=\"button\"\r\n              [attr.aria-label]=\"opts.clearBtnTxt\">\r\n        {{opts.clearBtnTxt}}\r\n      </button>\r\n      <button type=\"button\" [ngClass]=\"{'ml-auto': !opts.showTodayBtn}\" class=\"picker__button--close\"\r\n              (click)=\"closeBtnClicked()\"\r\n              role=\"button\" [attr.aria-label]=\"opts.closeBtnTxt\">\r\n        {{opts.closeBtnTxt}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
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
        inline: [{ type: Input }],
        inlineIcon: [{ type: Input }],
        dateChanged: [{ type: Output }],
        inputFieldChanged: [{ type: Output }],
        calendarViewChanged: [{ type: Output }],
        calendarToggle: [{ type: Output }],
        inputFocusBlur: [{ type: Output }],
        closeButtonClicked: [{ type: Output }],
        clearButtonClicked: [{ type: Output }],
        todayButtonClicked: [{ type: Output }],
        divFocus: [{ type: ViewChild, args: ['divFocus',] }],
        pickerFrame: [{ type: ViewChild, args: ['pickerFrame',] }],
        dateInput: [{ type: ViewChild, args: ['dateInput',] }],
        onWindowClick: [{ type: HostListener, args: ['window:click', ['$event'],] }]
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
    MDBDatePickerComponent.prototype.inline;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inlineIcon;
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
    MDBDatePickerComponent.prototype.closeButtonClicked;
    /** @type {?} */
    MDBDatePickerComponent.prototype.clearButtonClicked;
    /** @type {?} */
    MDBDatePickerComponent.prototype.todayButtonClicked;
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
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype.utils;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2RhdGUtcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBRVQsV0FBVyxFQUNYLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQUUsWUFBWSxFQUNoQyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFldkUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUM5RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sa0JBQWtCLENBQUM7O0FBRXZDLE1BQU0sS0FBTyxtQkFBbUIsR0FBUTtJQUN0QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLEVBQUM7SUFDckQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7O0lBRWdCLE9BQVEsRUFBRSxpQkFBa0IsRUFBRSxnQkFBaUIsRUFBRSxrQkFBbUI7Ozs7Ozs7O0lBRXpFLFNBQVUsRUFBRSxTQUFVOzs7Ozs7SUFFWixRQUFTLEVBQUUsT0FBUTs7Ozs7O0lBRTFCLFNBQVUsRUFBRSxTQUFVOzs7Ozs7SUFFdEIsT0FBUSxFQUFFLE9BQVEsRUFBRSxPQUFROzs7OztBQUUzQztJQXlIRSxnQ0FBbUIs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O0lBQ2pFLCtDQUEwQjs7SUFFMUIsc0RBQTRCOztJQUM1QixtREFBOEI7O0lBQzlCLDBDQUFxQjs7SUFDckIsMkNBQXVCOztJQStEdkIsNENBQ0U7O0lBQ0YsNkNBQ0U7Ozs7O0lBMnpCRix1Q0FBbUM7O0lBMzNCdkIsc0NBQXVCOzs7OztJQUN2QiwwQ0FBMkI7Ozs7O0lBRTNCLCtDQUFvQzs7Ozs7SUFDcEMsNkNBQWdDOzs7OztJQUNoQyx1Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lNeUxvY2FsZXN9IGZyb20gJy4vaW50ZXJmYWNlcy9sb2NhbGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIFJlbmRlcmVyMixcclxuICBmb3J3YXJkUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFBMQVRGT1JNX0lELFxyXG4gIEluamVjdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZiwgSG9zdExpc3RlbmVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7XHJcbiAgSU15RGF0ZSxcclxuICBJTXlEYXRlUmFuZ2UsXHJcbiAgSU15TW9udGgsXHJcbiAgSU15Q2FsZW5kYXJEYXksXHJcbiAgSU15V2VlayxcclxuICBJTXlEYXlMYWJlbHMsXHJcbiAgSU15TW9udGhMYWJlbHMsXHJcbiAgSU15SW5wdXRGaWVsZENoYW5nZWQsXHJcbiAgSU15Q2FsZW5kYXJWaWV3Q2hhbmdlZCxcclxuICBJTXlJbnB1dEZvY3VzQmx1cixcclxuICBJTXlNYXJrZWREYXRlcyxcclxuICBJTXlNYXJrZWREYXRlLFxyXG59IGZyb20gJy4vaW50ZXJmYWNlcy9pbmRleCc7XHJcbmltcG9ydCB7TG9jYWxlU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRlcGlja2VyTG9jYWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQge1V0aWxTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2RhdGVwaWNrZXJVdGlsLnNlcnZpY2UnO1xyXG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1V0aWxzfSBmcm9tIFwiLi4vLi4vZnJlZS91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1ZRFBfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNREJEYXRlUGlja2VyQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuZW51bSBDYWxUb2dnbGUgeyBPcGVuID0gMSwgQ2xvc2VCeURhdGVTZWwgPSAyLCBDbG9zZUJ5Q2FsQnRuID0gMywgQ2xvc2VCeU91dENsaWNrID0gNCB9XHJcblxyXG5lbnVtIFllYXIgeyBtaW4gPSAxMDAwLCBtYXggPSA5OTk5IH1cclxuXHJcbmVudW0gSW5wdXRGb2N1c0JsdXIgeyBmb2N1cyA9IDEsIGJsdXIgPSAyIH1cclxuXHJcbmVudW0gS2V5Q29kZSB7IGVudGVyID0gMTMsIHNwYWNlID0gMzIgfVxyXG5cclxuZW51bSBNb250aElkIHsgcHJldiA9IDEsIGN1cnIgPSAyLCBuZXh0ID0gMyB9XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21kYi1kYXRlLXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdtZGJkYXRlcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbTG9jYWxlU2VydmljZSwgVXRpbFNlcnZpY2UsIE1ZRFBfVkFMVUVfQUNDRVNTT1JdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNREJEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgdGFiSW5kZXg6IGFueTtcclxuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVmYXVsdE1vbnRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VsRGF0ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBzZWxlY3RvcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9wZW5PbkZvY3VzID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCkgaW5saW5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaW5saW5lSWNvbjogc3RyaW5nID0gJ2ZhciBmYS1jYWxlbmRhci1hbHQnO1xyXG5cclxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0RmllbGRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15SW5wdXRGaWVsZENoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZpZWxkQ2hhbmdlZD4oKTtcclxuICBAT3V0cHV0KCkgY2FsZW5kYXJWaWV3Q2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyVmlld0NoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlDYWxlbmRhclZpZXdDaGFuZ2VkPigpO1xyXG4gIEBPdXRwdXQoKSBjYWxlbmRhclRvZ2dsZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRGb2N1c0JsdXI6IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZvY3VzQmx1cj4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUlucHV0Rm9jdXNCbHVyPigpO1xyXG4gIEBPdXRwdXQoKSBjbG9zZUJ1dHRvbkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxNREJEYXRlUGlja2VyQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TURCRGF0ZVBpY2tlckNvbXBvbmVudD4oKTtcclxuICBAT3V0cHV0KCkgY2xlYXJCdXR0b25DbGlja2VkOiBFdmVudEVtaXR0ZXI8TURCRGF0ZVBpY2tlckNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE1EQkRhdGVQaWNrZXJDb21wb25lbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHRvZGF5QnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPE1EQkRhdGVQaWNrZXJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxNREJEYXRlUGlja2VyQ29tcG9uZW50PigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdkaXZGb2N1cycpIHB1YmxpYyBkaXZGb2N1czogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ3BpY2tlckZyYW1lJykgcGlja2VyRnJhbWU6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZGF0ZUlucHV0JykgZGF0ZUlucHV0OiBFbGVtZW50UmVmO1xyXG4gIHB1YmxpYyBpc0RhdGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBsYWJlbEFjdGl2ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICBwdWJsaWMgdmlzaWJsZU1vbnRoOiBJTXlNb250aCA9IHttb250aFR4dDogJycsIG1vbnRoTmJyOiAwLCB5ZWFyOiAxfTtcclxuICBwdWJsaWMgc2VsZWN0ZWRNb250aDogSU15TW9udGggPSB7bW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMH07XHJcbiAgcHVibGljIHNlbGVjdGVkRGF0ZTogSU15RGF0ZSA9IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfTtcclxuICBwdWJsaWMgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBwdWJsaWMgZGF0ZXM6IEFycmF5PElNeVdlZWs+ID0gW107XHJcbiAgcHVibGljIHNlbGVjdGlvbkRheVR4dCA9ICcnO1xyXG4gIHB1YmxpYyBpbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBkaXNhYmxlVG9kYXlCdG4gPSBmYWxzZTtcclxuICBwdWJsaWMgZGF5SWR4ID0gMDtcclxuICBwdWJsaWMgd2Vla0RheU9wdHM6IEFycmF5PHN0cmluZz4gPSBbJ3N1JywgJ21vJywgJ3R1JywgJ3dlJywgJ3RoJywgJ2ZyJywgJ3NhJ107XHJcblxyXG4gIHB1YmxpYyBlZGl0TW9udGggPSBmYWxzZTtcclxuICBwdWJsaWMgaW52YWxpZE1vbnRoID0gZmFsc2U7XHJcbiAgcHVibGljIGVkaXRZZWFyID0gZmFsc2U7XHJcbiAgcHVibGljIGludmFsaWRZZWFyID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBwcmV2TW9udGhEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBuZXh0TW9udGhEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBwcmV2WWVhckRpc2FibGVkID0gZmFsc2U7XHJcbiAgcHVibGljIG5leHRZZWFyRGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHByZXZNb250aElkOiBudW1iZXIgPSBNb250aElkLnByZXY7XHJcbiAgcHVibGljIGN1cnJNb250aElkOiBudW1iZXIgPSBNb250aElkLmN1cnI7XHJcbiAgcHVibGljIG5leHRNb250aElkOiBudW1iZXIgPSBNb250aElkLm5leHQ7XHJcblxyXG4gIGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdG1wOiBJTXlEYXRlID0ge3llYXI6IHRoaXMuZ2V0VG9kYXkoKS55ZWFyLCBtb250aDogdGhpcy5nZXRUb2RheSgpLm1vbnRoLCBkYXk6IHRoaXMuZ2V0VG9kYXkoKS5kYXl9O1xyXG5cclxuICAvLyBEZWZhdWx0IG9wdGlvbnNcclxuICBwdWJsaWMgb3B0czogYW55ID0ge1xyXG4gICAgc3RhcnREYXRlOiA8c3RyaW5nPicnLFxyXG4gICAgY2xvc2VBZnRlclNlbGVjdDogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBkYXlMYWJlbHNGdWxsOiA8SU15RGF5TGFiZWxzPnt9LFxyXG4gICAgZGF5TGFiZWxzOiA8SU15RGF5TGFiZWxzPnt9LFxyXG4gICAgbW9udGhMYWJlbHNGdWxsOiA8SU15TW9udGhMYWJlbHM+e30sXHJcbiAgICBtb250aExhYmVsczogPElNeU1vbnRoTGFiZWxzPnt9LFxyXG4gICAgZGF0ZUZvcm1hdDogPHN0cmluZz4nJyxcclxuICAgIHNob3dUb2RheUJ0bjogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIHRvZGF5QnRuVHh0OiA8c3RyaW5nPicnLFxyXG4gICAgZmlyc3REYXlPZldlZWs6IDxzdHJpbmc+JycsXHJcbiAgICBzdW5IaWdobGlnaHQ6IDxib29sZWFuPnRydWUsXHJcbiAgICBtYXJrQ3VycmVudERheTogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIGRpc2FibGVVbnRpbDogPElNeURhdGU+e3llYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDB9LFxyXG4gICAgZGlzYWJsZVNpbmNlOiA8SU15RGF0ZT57eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH0sXHJcbiAgICBkaXNhYmxlRGF5czogPEFycmF5PElNeURhdGUgfCBudW1iZXI+PltdLFxyXG4gICAgZW5hYmxlRGF5czogPEFycmF5PElNeURhdGUgfCBudW1iZXI+PltdLFxyXG4gICAgbWFya0RhdGVzOiA8QXJyYXk8SU15TWFya2VkRGF0ZXM+PltdLFxyXG4gICAgbWFya1dlZWtlbmRzOiA8SU15TWFya2VkRGF0ZT57fSxcclxuICAgIGRpc2FibGVEYXRlUmFuZ2VzOiA8QXJyYXk8SU15RGF0ZVJhbmdlPj5bXSxcclxuICAgIGRpc2FibGVXZWVrZW5kczogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBzaG93V2Vla051bWJlcnM6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgaGVpZ2h0OiA8c3RyaW5nPiczMnB4JyxcclxuICAgIHdpZHRoOiA8c3RyaW5nPicxMDAlJyxcclxuICAgIHNlbGVjdGlvblR4dEZvbnRTaXplOiA8c3RyaW5nPicxcmVtJyxcclxuICAgIHNob3dDbGVhckRhdGVCdG46IDxib29sZWFuPnRydWUsXHJcbiAgICBhbGlnblNlbGVjdG9yUmlnaHQ6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgZGlzYWJsZUhlYWRlckJ1dHRvbnM6IDxib29sZWFuPnRydWUsXHJcbiAgICBtaW5ZZWFyOiA8bnVtYmVyPlllYXIubWluLFxyXG4gICAgbWF4WWVhcjogPG51bWJlcj5ZZWFyLm1heCxcclxuICAgIGNvbXBvbmVudERpc2FibGVkOiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIHNob3dTZWxlY3RvckFycm93OiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgYXJpYUxhYmVsSW5wdXRGaWVsZDogPHN0cmluZz4nRGF0ZSBpbnB1dCBmaWVsZCcsXHJcbiAgICBhcmlhTGFiZWxDbGVhckRhdGU6IDxzdHJpbmc+J0NsZWFyIERhdGUnLFxyXG4gICAgYXJpYUxhYmVsT3BlbkNhbGVuZGFyOiA8c3RyaW5nPidPcGVuIENhbGVuZGFyJyxcclxuICAgIGFyaWFMYWJlbFByZXZNb250aDogPHN0cmluZz4nUHJldmlvdXMgTW9udGgnLFxyXG4gICAgYXJpYUxhYmVsTmV4dE1vbnRoOiA8c3RyaW5nPidOZXh0IE1vbnRoJyxcclxuICAgIGFyaWFMYWJlbFByZXZZZWFyOiA8c3RyaW5nPidQcmV2aW91cyBZZWFyJyxcclxuICAgIGFyaWFMYWJlbE5leHRZZWFyOiA8c3RyaW5nPidOZXh0IFllYXInXHJcbiAgfTtcclxuXHJcblxyXG4gIHB1YmxpYyBtb250aHM6IGFueSA9IFtdO1xyXG4gIHB1YmxpYyB5ZWFyczogYW55ID0gW107XHJcbiAgcHVibGljIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXlkcCBwaWNrZXInKTtcclxuICBwdWJsaWMgZWxlbWVudE51bWJlcjogYW55O1xyXG5cclxuICBmaXJzdFRpbWVPcGVuZWRNb2RhbCA9IHRydWU7XHJcbiAgbW9kYWxIZWlnaHRCZWZvcmU6IGFueSA9IG51bGw7XHJcbiAgaXNNb2JpbGU6IGFueSA9IG51bGw7XHJcbiAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW06IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIC8vIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2FsZVNlcnZpY2U6IExvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSB1dGlsU2VydmljZTogVXRpbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xyXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgcmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IgJiZcclxuICAgICAgICBldmVudC50YXJnZXQgJiZcclxuICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXHJcbiAgICAgICAgIXRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ0bkNsaWNrZWQoKTtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlPdXRDbGljayk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BpY2tlcl9faG9sZGVyJykpIHtcclxuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xpY2tlZCgpO1xyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0cnVlICYmIGV2ZW50LnRhcmdldCAmJiB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldE1vbnRoWWVhckVkaXQoKTtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLm9wdHMuc3RhcnREYXRlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMub25Vc2VyRGF0ZUlucHV0KHRoaXMub3B0cy5zdGFydERhdGUpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIENoYW5nZVpJbmRleCgpIHtcclxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBGaXggZm9yIHZpc2libGUgZGF0ZSAvIHRpbWUgcGlja2VyIGlucHV0IHdoZW4gcGlja2VyIHBsYXRlIGlzIHZpc2libGUuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IG9wZW5lZFBpY2tlcjogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpY2tlci0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBjb25zdCBhbGxQaWNrZXJzOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGlja2VyJyk7XHJcbiAgICAgICAgICBhbGxQaWNrZXJzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsICd6LWluZGV4JywgJzAnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShvcGVuZWRQaWNrZXIsICd6LWluZGV4JywgJzEwMCcpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBvbkNoYW5nZUNiOiAoXzogYW55KSA9PiB2b2lkID0gKCkgPT4ge1xyXG4gIH07XHJcbiAgb25Ub3VjaGVkQ2I6ICgpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgfTtcclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZGF0ZUlucHV0Lm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSW5saW5lU3R5bGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtY29udGVudCcpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsICd0cmFuc2l0aW9uJywgJ2hlaWdodCAwLjNzJyk7XHJcbiAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMubW9kYWxIZWlnaHRCZWZvcmUgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgYW55KS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgIH0sIDE1NSk7XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZXRMb2NhbGVPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3B0czogYW55ID0gdGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZU9wdGlvbnModGhpcy5sb2NhbGUpO1xyXG4gICAgT2JqZWN0LmtleXMob3B0cykuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICB0aGlzLm9wdHNba10gPSBvcHRzW2tdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRMb2NhbGUobG9jYWxlOiBJTXlMb2NhbGVzKSB7XHJcbiAgICB0aGlzLmxvY2FsZVNlcnZpY2UubG9jYWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubG9jYWxlU2VydmljZS5sb2NhbGVzLCBsb2NhbGUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGhpc1llYXIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzWWVhci5nZXRGdWxsWWVhcigpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucykuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgIHRoaXMub3B0c1trXSA9IHRoaXMub3B0aW9uc1trXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub3B0cy5jb21wb25lbnREaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3B0cy5taW5ZZWFyID09PSAxMDAwKSB7XHJcbiAgICAgIHRoaXMub3B0cy5taW5ZZWFyID0gY3VycmVudFllYXIgLSA3O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wdHMubWF4WWVhciA9PT0gOTk5OSkge1xyXG4gICAgICB0aGlzLm9wdHMubWF4WWVhciA9IGN1cnJlbnRZZWFyICsgNztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0TW9udGhZZWFyRWRpdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdE1vbnRoID0gZmFsc2U7XHJcbiAgICB0aGlzLmVkaXRZZWFyID0gZmFsc2U7XHJcbiAgICB0aGlzLmludmFsaWRNb250aCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbnZhbGlkWWVhciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25Vc2VyRGF0ZUlucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkKHZhbHVlLFxyXG4gICAgICAgIHRoaXMub3B0cy5kYXRlRm9ybWF0LFxyXG4gICAgICAgIHRoaXMub3B0cy5taW5ZZWFyLFxyXG4gICAgICAgIHRoaXMub3B0cy5tYXhZZWFyLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgICAgdGhpcy5vcHRzLm1vbnRoTGFiZWxzLFxyXG4gICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGRhdGUpKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKGRhdGUpO1xyXG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZU1vbnRoKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmludmFsaWREYXRlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IHRoaXMub3B0cy5kYXRlRm9ybWF0LFxyXG4gICAgICAgIHZhbGlkOiAhKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmludmFsaWREYXRlKVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbkNoYW5nZUNiKCcnKTtcclxuICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Gb2N1c0lucHV0KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy5vcGVuT25Gb2N1cyAmJiAhdGhpcy5pc09wZW4pIHtcclxuICAgICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXRGb2N1c0JsdXIuZW1pdCh7cmVhc29uOiBJbnB1dEZvY3VzQmx1ci5mb2N1cywgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBhcyBhbnkpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAvLyB0aGlzLmRpdkZvY3VzLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuXHJcbiAgfVxyXG5cclxuICBvbkJsdXJJbnB1dChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkRheVR4dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgIHRoaXMuaW5wdXRGb2N1c0JsdXIuZW1pdCh7cmVhc29uOiBJbnB1dEZvY3VzQmx1ci5ibHVyLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBvblVzZXJNb250aElucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZE1vbnRoID0gZmFsc2U7XHJcbiAgICBjb25zdCBtOiBudW1iZXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhMYWJlbFZhbGlkKHZhbHVlLCB0aGlzLm9wdHMubW9udGhMYWJlbHMpO1xyXG4gICAgaWYgKG0gIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZWRpdE1vbnRoID0gZmFsc2U7XHJcbiAgICAgIGlmIChtICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChtKSwgbW9udGhOYnI6IG0sIHllYXI6IHRoaXMudmlzaWJsZU1vbnRoLnllYXJ9O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnZhbGlkTW9udGggPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Vc2VyWWVhcklucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZFllYXIgPSBmYWxzZTtcclxuICAgIGNvbnN0IHk6IG51bWJlciA9IHRoaXMudXRpbFNlcnZpY2UuaXNZZWFyTGFiZWxWYWxpZChOdW1iZXIodmFsdWUpLCB0aGlzLm9wdHMubWluWWVhciwgdGhpcy5vcHRzLm1heFllYXIpO1xyXG4gICAgaWYgKHkgIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZWRpdFllYXIgPSBmYWxzZTtcclxuICAgICAgaWYgKHkgIT09IHRoaXMudmlzaWJsZU1vbnRoLnllYXIpIHtcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy52aXNpYmxlTW9udGgubW9udGhUeHQsIG1vbnRoTmJyOiB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgeWVhcjogeX07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB5LCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnZhbGlkWWVhciA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1RvZGF5RGlzYWJsZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVUb2RheUJ0biA9IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheSh0aGlzLmdldFRvZGF5KCksXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5cyk7XHJcbiAgfVxyXG5cclxuICBwYXJzZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sb2NhbGUpIHtcclxuICAgICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldE9wdGlvbnMoKTtcclxuICAgIHRoaXMuaXNUb2RheURpc2FibGVkKCk7XHJcbiAgICB0aGlzLmRheUlkeCA9IHRoaXMud2Vla0RheU9wdHMuaW5kZXhPZih0aGlzLm9wdHMuZmlyc3REYXlPZldlZWspO1xyXG4gICAgaWYgKHRoaXMuZGF5SWR4ICE9PSAtMSkge1xyXG4gICAgICBsZXQgaWR4OiBudW1iZXIgPSB0aGlzLmRheUlkeDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndlZWtEYXlPcHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy53ZWVrRGF5cy5wdXNoKHRoaXMub3B0cy5kYXlMYWJlbHNbdGhpcy53ZWVrRGF5T3B0c1tpZHhdXSk7XHJcbiAgICAgICAgaWR4ID0gdGhpcy53ZWVrRGF5T3B0c1tpZHhdID09PSAnc2EnID8gMCA6IGlkeCArIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUodGhpcy5wYXJzZVNlbGVjdGVkRGF0ZSh2YWx1ZSksIGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWVbJ2RhdGUnXSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZSh0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHZhbHVlWydkYXRlJ10pLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHt5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwfTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZUNiID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiID0gZm47XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0b3InKSAmJiBjaGFuZ2VzWydzZWxlY3RvciddLmN1cnJlbnRWYWx1ZSA+IDApIHtcclxuICAgICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwbGFjZWhvbGRlcicpKSB7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBjaGFuZ2VzWydwbGFjZWhvbGRlciddLmN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbG9jYWxlJykpIHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSBjaGFuZ2VzWydsb2NhbGUnXS5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25zJykpIHtcclxuICAgICAgdGhpcy5vcHRpb25zID0gY2hhbmdlc1snb3B0aW9ucyddLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUuc3RhcnREYXRlKSB7XHJcbiAgICAgICAgdGhpcy5vblVzZXJEYXRlSW5wdXQoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZS5zdGFydERhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53ZWVrRGF5cy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5wYXJzZU9wdGlvbnMoKTtcclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdE1vbnRoJykpIHtcclxuICAgICAgY29uc3QgZG06IHN0cmluZyA9IGNoYW5nZXNbJ2RlZmF1bHRNb250aCddLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKGRtICE9PSBudWxsICYmIGRtICE9PSB1bmRlZmluZWQgJiYgZG0gIT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0gdGhpcy5wYXJzZVNlbGVjdGVkTW9udGgoZG0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHttb250aFR4dDogJycsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdzZWxEYXRlJykpIHtcclxuICAgICAgY29uc3Qgc2Q6IGFueSA9IGNoYW5nZXNbJ3NlbERhdGUnXTtcclxuICAgICAgaWYgKHNkLmN1cnJlbnRWYWx1ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHNkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgc2QuY3VycmVudFZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgIE9iamVjdC5rZXlzKHNkLmN1cnJlbnRWYWx1ZSkubGVuZ3RoICE9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdGhpcy5wYXJzZVNlbGVjdGVkRGF0ZShzZC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUNiKHRoaXMuZ2V0RGF0ZU1vZGVsKHRoaXMuc2VsZWN0ZWREYXRlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pc0RhdGVTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRG8gbm90IGNsZWFyIG9uIGluaXRcclxuICAgICAgICBpZiAoIXNkLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlS2V5Ym9hcmQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCBmaWVsZCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRSZWZlcmVuY2UgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0UmVmZXJlbmNlLCAndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXRSZWZlcmVuY2UsICd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlucHV0UmVmZXJlbmNlLCAnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dFJlZmVyZW5jZSwgJy13ZWJraXQtdXNlci1tb2RpZnknLCAncmVhZC13cml0ZS1wbGFpbnRleHQtb25seScpO1xyXG4gICAgICAgIGZpZWxkLm9uZm9jdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZmllbGQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgZmllbGQpO1xyXG4gICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaWVsZC5mb2N1cygpO1xyXG5cclxuICAgICAgfSwgMCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzRGF0ZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsZWFyQnV0dG9uQ2xpY2tlZC5lbWl0KHRoaXMpO1xyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNsb3NlQnRuQ2xpY2tlZCgpIHtcclxuICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlbW92ZUlubGluZVN0eWxlKCk7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbG9zZUJ1dHRvbkNsaWNrZWQuZW1pdCh0aGlzKTtcclxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuQnRuQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1jb250ZW50JykpIHtcclxuICAgICAgICBpZiAodGhpcy5maXJzdFRpbWVPcGVuZWRNb2RhbCkge1xyXG4gICAgICAgICAgdGhpcy5tb2RhbEhlaWdodEJlZm9yZSA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlyc3RUaW1lT3BlbmVkTW9kYWwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCwgJ3RyYW5zaXRpb24nLCAnaGVpZ2h0IDAuM3MnKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMubW9kYWxIZWlnaHRCZWZvcmUgKyB0aGlzLnBpY2tlckZyYW1lLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIH1cclxuICAgIC8vIE9wZW4gc2VsZWN0b3IgYnV0dG9uIGNsaWNrZWRcclxuICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gIXRoaXMuc2hvd1NlbGVjdG9yO1xyXG4gICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgIHRoaXMuc2V0VmlzaWJsZU1vbnRoKCk7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuT3Blbik7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzTW9iaWxlKSB7XHJcbiAgICAgIHRoaXMuaGlkZUtleWJvYXJkKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuQ2hhbmdlWkluZGV4KCk7XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmlzaWJsZU1vbnRoKCk6IHZvaWQge1xyXG4gICAgLy8gU2V0cyB2aXNpYmxlIG1vbnRoIG9mIGNhbGVuZGFyXHJcbiAgICBsZXQgeSA9IDAsIG0gPSAwO1xyXG4gICAgaWYgKCF0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE1vbnRoLnllYXIgPT09IDAgJiYgdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICAgICAgeSA9IHRvZGF5LnllYXI7XHJcbiAgICAgICAgbSA9IHRvZGF5Lm1vbnRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSB0aGlzLnNlbGVjdGVkTW9udGgueWVhcjtcclxuICAgICAgICBtID0gdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gdGhpcy5zZWxlY3RlZERhdGUueWVhcjtcclxuICAgICAgbSA9IHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoO1xyXG4gICAgfVxyXG4gICAgdGhpcy52aXNpYmxlTW9udGggPSB7bW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1ttXSwgbW9udGhOYnI6IG0sIHllYXI6IHl9O1xyXG5cclxuICAgIC8vIENyZWF0ZSBjdXJyZW50IG1vbnRoXHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgeSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBtb250aExpc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vbnRocyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xyXG4gICAgICB0aGlzLm1vbnRocy5wdXNoKHtpbmRleDogaSwgc2hvcnQ6IHRoaXMub3B0cy5tb250aExhYmVsc1tpXSwgbGFiZWw6IHRoaXMub3B0cy5tb250aExhYmVsc0Z1bGxbaV19KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHllYXJzTGlzdCgpOiB2b2lkIHtcclxuICAgIHRoaXMueWVhcnMgPSBbXTtcclxuXHJcbiAgICBjb25zdCBmaXJzdFllYXIgPSB0aGlzLm9wdHMubWluWWVhcjtcclxuICAgIGNvbnN0IGxhc3RZZWFyID0gdGhpcy5vcHRzLm1heFllYXI7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IGZpcnN0WWVhcjsgaSA8PSBsYXN0WWVhcjsgaSsrKSB7XHJcbiAgICAgIHRoaXMueWVhcnMucHVzaChpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZNb250aCgpOiB2b2lkIHtcclxuICAgIC8vIFByZXZpb3VzIG1vbnRoIGZyb20gY2FsZW5kYXJcclxuICAgIGNvbnN0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUodGhpcy52aXNpYmxlTW9udGgueWVhciwgdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIDEpO1xyXG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgLSAxKTtcclxuXHJcbiAgICBjb25zdCB5OiBudW1iZXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtOiBudW1iZXIgPSBkLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge21vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChtKSwgbW9udGhOYnI6IG0sIHllYXI6IHl9O1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbmV4dE1vbnRoKCk6IHZvaWQge1xyXG4gICAgLy8gTmV4dCBtb250aCBmcm9tIGNhbGVuZGFyXHJcbiAgICBjb25zdCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCAxKTtcclxuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpICsgMSk7XHJcblxyXG4gICAgY29uc3QgeTogbnVtYmVyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbTogbnVtYmVyID0gZC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5tb250aFRleHQobSksIG1vbnRoTmJyOiBtLCB5ZWFyOiB5fTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB5LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHByZXZZZWFyKCk6IHZvaWQge1xyXG4gICAgLy8gUHJldmlvdXMgeWVhciBmcm9tIGNhbGVuZGFyXHJcbiAgICB0aGlzLnZpc2libGVNb250aC55ZWFyLS07XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbmV4dFllYXIoKTogdm9pZCB7XHJcbiAgICAvLyBOZXh0IHllYXIgZnJvbSBjYWxlbmRhclxyXG4gICAgdGhpcy52aXNpYmxlTW9udGgueWVhcisrO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHRvZGF5Q2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vIFRvZGF5IGJ1dHRvbiBjbGlja2VkXHJcbiAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgIGlmICghdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KHRvZGF5LFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgdGhpcy5vcHRzLmVuYWJsZURheXMpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZWxlY3REYXRlKHRvZGF5KTtcclxuICAgIH1cclxuICAgIGlmICh0b2RheS55ZWFyICE9PSB0aGlzLnZpc2libGVNb250aC55ZWFyIHx8IHRvZGF5Lm1vbnRoICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icikge1xyXG4gICAgICB0aGlzLnZpc2libGVNb250aCA9IHttb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW3RvZGF5Lm1vbnRoXSwgbW9udGhOYnI6IHRvZGF5Lm1vbnRoLCB5ZWFyOiB0b2RheS55ZWFyfTtcclxuICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRvZGF5Lm1vbnRoLCB0b2RheS55ZWFyLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHRoaXMudG9kYXlCdXR0b25DbGlja2VkLmVtaXQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjZWxsQ2xpY2tlZChjZWxsOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIENlbGwgY2xpY2tlZCBvbiB0aGUgY2FsZW5kYXJcclxuICAgIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5wcmV2TW9udGhJZCkge1xyXG4gICAgICAvLyBQcmV2aW91cyBtb250aCBkYXlcclxuICAgICAgdGhpcy5wcmV2TW9udGgoKTtcclxuICAgIH0gZWxzZSBpZiAoY2VsbC5jbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQpIHtcclxuICAgICAgLy8gQ3VycmVudCBtb250aCBkYXkgLSBpZiBkYXRlIGlzIGFscmVhZHkgc2VsZWN0ZWQgY2xlYXIgaXRcclxuICAgICAgaWYgKGNlbGwuZGF0ZU9iai55ZWFyID09PSB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyICYmXHJcbiAgICAgICAgY2VsbC5kYXRlT2JqLm1vbnRoID09PSB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aCAmJlxyXG4gICAgICAgIGNlbGwuZGF0ZU9iai5kYXkgPT09IHRoaXMuc2VsZWN0ZWREYXRlLmRheVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZShjZWxsLmRhdGVPYmopO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGNlbGwuY21vID09PSB0aGlzLm5leHRNb250aElkKSB7XHJcbiAgICAgIC8vIE5leHQgbW9udGggZGF5XHJcbiAgICAgIHRoaXMubmV4dE1vbnRoKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0TW9udGhZZWFyRWRpdCgpO1xyXG4gIH1cclxuXHJcbiAgY2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogYW55KSB7XHJcbiAgICAvLyBDZWxsIGtleWJvYXJkIGhhbmRsaW5nXHJcbiAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZW50ZXIgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5zcGFjZSkgJiYgIWNlbGwuZGlzYWJsZWQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5jZWxsQ2xpY2tlZChjZWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyRGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIENsZWFycyB0aGUgZGF0ZSBhbmQgbm90aWZpZXMgcGFyZW50IHVzaW5nIGNhbGxiYWNrcyBhbmQgdmFsdWUgYWNjZXNzb3JcclxuICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogMCwgbW9udGg6IDAsIGRheTogMH07XHJcbiAgICB0aGlzLmRhdGVDaGFuZ2VkLmVtaXQoe2RhdGU6IGRhdGUsIGpzZGF0ZTogbnVsbCwgZm9ybWF0dGVkOiAnJywgZXBvYzogMH0pO1xyXG4gICAgdGhpcy5vbkNoYW5nZUNiKG51bGwpO1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlVmFsdWUoZGF0ZSwgdHJ1ZSk7XHJcbiAgICB0aGlzLnRtcCA9IHt5ZWFyOiB0aGlzLmdldFRvZGF5KCkueWVhciwgbW9udGg6IHRoaXMuZ2V0VG9kYXkoKS5tb250aCwgZGF5OiB0aGlzLmdldFRvZGF5KCkuZGF5fTtcclxuICAgIHRoaXMuc2V0VmlzaWJsZU1vbnRoKCk7XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZWxlY3REYXRlKGRhdGU6IElNeURhdGUpOiB2b2lkIHtcclxuICAgIC8vIERhdGUgc2VsZWN0ZWQsIG5vdGlmaWVzIHBhcmVudCB1c2luZyBjYWxsYmFja3MgYW5kIHZhbHVlIGFjY2Vzc29yXHJcbiAgICB0aGlzLnRtcCA9IGRhdGU7XHJcbiAgICBjb25zdCBkYXRlTW9kZWw6IGFueSA9IHRoaXMuZ2V0RGF0ZU1vZGVsKGRhdGUpO1xyXG4gICAgLy8gdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHsgcHJldmlvdXNEYXRlOiB0aGlzLnNlbGVjdGlvbkRheVR4dCwgYWN0dWFsRGF0ZTogZGF0ZU1vZGVsIH0pO1xyXG4gICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICAganNkYXRlOiB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSksXHJcbiAgICAgIHByZXZpb3VzRGF0ZUZvcm1hdHRlZDogdGhpcy5zZWxlY3Rpb25EYXlUeHQsXHJcbiAgICAgIGFjdHVhbERhdGVGb3JtYXR0ZWQ6IGRhdGVNb2RlbCxcclxuICAgICAgZXBvYzogTWF0aC5yb3VuZCh0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSAvIDEwMDAuMClcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkNoYW5nZUNiKGRhdGVNb2RlbCk7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZShkYXRlLCBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XHJcblxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0cy5jbG9zZUFmdGVyU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuY2xvc2VCdG5DbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIGhpZGUgY2FsZW5kYXIgd2hlbiBkYXRlIHdhcyBjbGlja2VkXHJcbiAgICAvLyB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGF0ZVZhbHVlKGRhdGU6IElNeURhdGUsIGNsZWFyOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBVcGRhdGVzIGRhdGUgdmFsdWVzXHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLnRtcCA9IGRhdGU7XHJcbiAgICB0aGlzLmlzRGF0ZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gY2xlYXIgPyAnJyA6IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7dmFsdWU6IHRoaXMuc2VsZWN0aW9uRGF5VHh0LCBkYXRlRm9ybWF0OiB0aGlzLm9wdHMuZGF0ZUZvcm1hdCwgdmFsaWQ6ICFjbGVhcn0pO1xyXG4gICAgdGhpcy5pbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGdldERhdGVNb2RlbChkYXRlOiBJTXlEYXRlKTogYW55IHtcclxuICAgIC8vIENyZWF0ZXMgYSBkYXRlIG1vZGVsIG9iamVjdCBmcm9tIHRoZSBnaXZlbiBwYXJhbWV0ZXJcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdERhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcmVaZXJvKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIFByZXBlbmQgemVybyBpZiBzbWFsbGVyIHRoYW4gMTBcclxuICAgIHJldHVybiBwYXJzZUludCh2YWwsIDApIDwgMTAgPyAnMCcgKyB2YWwgOiB2YWw7XHJcbiAgfVxyXG5cclxuICBmb3JtYXREYXRlKHZhbDogYW55KTogc3RyaW5nIHtcclxuICAgIC8vIFJldHVybnMgZm9ybWF0dGVkIGRhdGUgc3RyaW5nLCBpZiBtbW0gaXMgcGFydCBvZiBkYXRlRm9ybWF0IHJldHVybnMgbW9udGggYXMgYSBzdHJpbmdcclxuICAgIC8vIGRheXNcclxuICAgIGNvbnN0IGQgPSB2YWwuZGF5OyAvLyAxIC0gMzFcclxuICAgIGNvbnN0IGRkID0gdGhpcy5wcmVaZXJvKHZhbC5kYXkpOyAvLyAwMSAtIDMxXHJcbiAgICBjb25zdCBkZGQgPSB0aGlzLm9wdHMuZGF5TGFiZWxzW3RoaXMuZ2V0V2Vla2RheSh2YWwpXTsgLy8gU3VuLVNhdFxyXG4gICAgY29uc3QgZGRkZCA9IHRoaXMub3B0cy5kYXlMYWJlbHNGdWxsW3RoaXMuZ2V0V2Vla2RheSh2YWwpXTsgLy8gU3VuZGF5IOKAkyBTYXR1cmRheVxyXG4gICAgY29uc3QgbSA9IHZhbC5tb250aDsgLy8gMSAtIDEyXHJcbiAgICBjb25zdCBtbSA9IHRoaXMucHJlWmVybyh2YWwubW9udGgpOyAvLyAwMSAtIDEyXHJcbiAgICBjb25zdCBtbW0gPSB0aGlzLmdldE1vbnRoU2hvcnQodmFsLm1vbnRoKTsgLy8gSmFuIC0gRGVjXHJcbiAgICBjb25zdCBtbW1tID0gdGhpcy5nZXRNb250aEZ1bGwodmFsLm1vbnRoKTsgLy8gSmFudWFyeSDigJMgRGVjZW1iZXJcclxuICAgIGNvbnN0IHl5ID0gdmFsLnllYXIudG9TdHJpbmcoKS5sZW5ndGggPT09IDIgPyB2YWwueWVhciA6IHZhbC55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoMiwgNCk7IC8vIDAwIC0gOTlcclxuICAgIGNvbnN0IHl5eXkgPSB2YWwueWVhcjtcclxuXHJcbiAgICBjb25zdCB0b1JlcGxhY2UgPSB0aGlzLm9wdHMuZGF0ZUZvcm1hdC5zcGxpdCgvKGR7MSw0fXxtezEsNH18eXs0fXx5eXwhLikvZyk7XHJcbiAgICBsZXQgZm9ybWF0dGVkID0gJyc7XHJcbiAgICB0b1JlcGxhY2UuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGVsKSB7XHJcbiAgICAgICAgY2FzZSAnZGRkZCc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIGRkZGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZGRkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZGRkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2RkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW1tbSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIG1tbW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW1tJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbW1tKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21tJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIG0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneXl5eSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIHl5eXkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneXknOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCB5eSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBmb3JtYXR0ZWQgKz0gZWw7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0dGVkO1xyXG4gIH1cclxuXHJcbiAgbW9udGhUZXh0KG06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAvLyBSZXR1cm5zIG1vbnRoIGFzIGEgdGV4dFxyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc1ttXTtcclxuICB9XHJcblxyXG4gIHdlZWtUZXh0KG06IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyBSZXR1cm5zIG1vbnRoIGFzIGEgdGV4dFxyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5kYXlMYWJlbHNGdWxsW21dO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhTaG9ydChtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc1ttXTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoRnVsbChtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc0Z1bGxbbV07XHJcbiAgfVxyXG5cclxuICBtb250aFN0YXJ0SWR4KHk6IG51bWJlciwgbTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIE1vbnRoIHN0YXJ0IGluZGV4XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgIGQuc2V0RGF0ZSgxKTtcclxuICAgIGQuc2V0TW9udGgobSAtIDEpO1xyXG4gICAgZC5zZXRGdWxsWWVhcih5KTtcclxuICAgIGNvbnN0IGlkeCA9IGQuZ2V0RGF5KCkgKyB0aGlzLnN1bmRheUlkeCgpO1xyXG4gICAgcmV0dXJuIGlkeCA+PSA3ID8gaWR4IC0gNyA6IGlkeDtcclxuICB9XHJcblxyXG4gIGRheXNJbk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiBjdXJyZW50IG1vbnRoXHJcbiAgICByZXR1cm4gbmV3IERhdGUoeSwgbSwgMCkuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZGF5c0luUHJldk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiB0aGUgcHJldmlvdXMgbW9udGhcclxuICAgIGNvbnN0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUoeSwgbSwgMSk7XHJcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSAtIDEpO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF5c0luTW9udGgoZC5nZXRNb250aCgpICsgMSwgZC5nZXRGdWxsWWVhcigpKTtcclxuICB9XHJcblxyXG4gIGlzQ3VyckRheShkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyLCBjbW86IG51bWJlciwgdG9kYXk6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgIC8vIENoZWNrIGlzIGEgZ2l2ZW4gZGF0ZSB0aGUgdG9kYXlcclxuICAgIHJldHVybiBkID09PSB0b2RheS5kYXkgJiYgbSA9PT0gdG9kYXkubW9udGggJiYgeSA9PT0gdG9kYXkueWVhciAmJiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RheSgpOiBJTXlEYXRlIHtcclxuICAgIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIHt5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXk6IGRhdGUuZ2V0RGF0ZSgpfTtcclxuICB9XHJcblxyXG4gIGdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlOiBJTXlEYXRlKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSkuZ2V0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla2RheShkYXRlOiBJTXlEYXRlKTogc3RyaW5nIHtcclxuICAgIC8vIEdldCB3ZWVrZGF5OiBzdSwgbW8sIHR1LCB3ZSAuLi5cclxuICAgIHJldHVybiB0aGlzLndlZWtEYXlPcHRzW3RoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpXTtcclxuICB9XHJcblxyXG4gIGdldERhdGUoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyLCBkYXk6IG51bWJlcik6IERhdGUge1xyXG4gICAgLy8gQ3JlYXRlcyBhIGRhdGUgb2JqZWN0IGZyb20gZ2l2ZW4geWVhciwgbW9udGggYW5kIGRheVxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5LCAwLCAwLCAwLCAwKTtcclxuICB9XHJcblxyXG4gIHN1bmRheUlkeCgpOiBudW1iZXIge1xyXG4gICAgLy8gSW5kZXggb2YgU3VuZGF5IGRheVxyXG4gICAgcmV0dXJuIHRoaXMuZGF5SWR4ID4gMCA/IDcgLSB0aGlzLmRheUlkeCA6IDA7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZUNhbGVuZGFyKG06IG51bWJlciwgeTogbnVtYmVyLCBub3RpZnlDaGFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZXMubGVuZ3RoID0gMDtcclxuICAgIGNvbnN0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgY29uc3QgbW9udGhTdGFydDogbnVtYmVyID0gdGhpcy5tb250aFN0YXJ0SWR4KHksIG0pO1xyXG4gICAgY29uc3QgZEluVGhpc006IG51bWJlciA9IHRoaXMuZGF5c0luTW9udGgobSwgeSk7XHJcbiAgICBjb25zdCBkSW5QcmV2TTogbnVtYmVyID0gdGhpcy5kYXlzSW5QcmV2TW9udGgobSwgeSk7XHJcblxyXG4gICAgbGV0IGRheU5iciA9IDE7XHJcbiAgICBsZXQgY21vOiBudW1iZXIgPSB0aGlzLnByZXZNb250aElkO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcclxuICAgICAgY29uc3Qgd2VlazogQXJyYXk8SU15Q2FsZW5kYXJEYXk+ID0gW107XHJcbiAgICAgIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgLy8gRmlyc3Qgd2Vla1xyXG4gICAgICAgIGNvbnN0IHBtID0gZEluUHJldk0gLSBtb250aFN0YXJ0ICsgMTtcclxuICAgICAgICAvLyBQcmV2aW91cyBtb250aFxyXG4gICAgICAgIGZvciAobGV0IGogPSBwbTsgaiA8PSBkSW5QcmV2TTsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0ge3llYXI6IHksIG1vbnRoOiBtIC0gMSwgZGF5OiBqfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShqLCBtLCB5LCBjbW8sIHRvZGF5KSxcclxuICAgICAgICAgICAgZGF5TmJyOiB0aGlzLnV0aWxTZXJ2aWNlLmdldERheU51bWJlcihkYXRlKSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheShkYXRlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmVuYWJsZURheXNcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLm1hcmtEYXRlcywgdGhpcy5vcHRzLm1hcmtXZWVrZW5kcylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY21vID0gdGhpcy5jdXJyTW9udGhJZDtcclxuICAgICAgICAvLyBDdXJyZW50IG1vbnRoXHJcbiAgICAgICAgY29uc3QgZGF5c0xlZnQ6IG51bWJlciA9IDcgLSB3ZWVrLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRheXNMZWZ0OyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogeSwgbW9udGg6IG0sIGRheTogZGF5TmJyfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICBkYXlOYnI6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShkYXRlLCB0aGlzLm9wdHMubWFya0RhdGVzLCB0aGlzLm9wdHMubWFya1dlZWtlbmRzKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVzdCBvZiB0aGUgd2Vla3NcclxuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDg7IGorKykge1xyXG4gICAgICAgICAgaWYgKGRheU5iciA+IGRJblRoaXNNKSB7XHJcbiAgICAgICAgICAgIC8vIE5leHQgbW9udGhcclxuICAgICAgICAgICAgZGF5TmJyID0gMTtcclxuICAgICAgICAgICAgY21vID0gdGhpcy5uZXh0TW9udGhJZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7eWVhcjogeSwgbW9udGg6IGNtbyA9PT0gdGhpcy5jdXJyTW9udGhJZCA/IG0gOiBtICsgMSwgZGF5OiBkYXlOYnJ9O1xyXG4gICAgICAgICAgd2Vlay5wdXNoKHtcclxuICAgICAgICAgICAgZGF0ZU9iajogZGF0ZSwgY21vOiBjbW8sIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGRheU5iciwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgIGRheU5icjogdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSksXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoZGF0ZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKGRhdGUsIHRoaXMub3B0cy5tYXJrRGF0ZXMsIHRoaXMub3B0cy5tYXJrV2Vla2VuZHMpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRheU5icisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjb25zdCB3ZWVrTmJyOiBudW1iZXIgPSB0aGlzLm9wdHMuc2hvd1dlZWtOdW1iZXJzICYmXHJcbiAgICAgIHRoaXMub3B0cy5maXJzdERheU9mV2VlayA9PT0gJ21vJyA/XHJcbiAgICAgICAgdGhpcy51dGlsU2VydmljZS5nZXRXZWVrTnVtYmVyKHdlZWtbMF0uZGF0ZU9iaikgOiAwO1xyXG4gICAgICB0aGlzLmRhdGVzLnB1c2goe3dlZWs6IHdlZWssIHdlZWtOYnI6IHdlZWtOYnJ9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldEhlYWRlckJ0bkRpc2FibGVkU3RhdGUobSwgeSk7XHJcblxyXG4gICAgaWYgKG5vdGlmeUNoYW5nZSkge1xyXG4gICAgICAvLyBOb3RpZnkgcGFyZW50XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJWaWV3Q2hhbmdlZC5lbWl0KHtcclxuICAgICAgICB5ZWFyOiB5LFxyXG4gICAgICAgIG1vbnRoOiBtLFxyXG4gICAgICAgIGZpcnN0OiB7XHJcbiAgICAgICAgICBudW1iZXI6IDEsXHJcbiAgICAgICAgICB3ZWVrZGF5OiB0aGlzLmdldFdlZWtkYXkoe1xyXG4gICAgICAgICAgICB5ZWFyOiB5LFxyXG4gICAgICAgICAgICBtb250aDogbSxcclxuICAgICAgICAgICAgZGF5OiAxXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGFzdDoge1xyXG4gICAgICAgICAgbnVtYmVyOiBkSW5UaGlzTSxcclxuICAgICAgICAgIHdlZWtkYXk6IHRoaXMuZ2V0V2Vla2RheSh7XHJcbiAgICAgICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgICAgIG1vbnRoOiBtLFxyXG4gICAgICAgICAgICBkYXk6IGRJblRoaXNNXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5tb250aExpc3QoKTtcclxuICAgIHRoaXMueWVhcnNMaXN0KCk7XHJcbiAgfVxyXG5cclxuICBwYXJzZVNlbGVjdGVkRGF0ZShzZWxEYXRlOiBhbnkpOiBJTXlEYXRlIHtcclxuICAgIC8vIFBhcnNlIHNlbERhdGUgdmFsdWUgLSBpdCBjYW4gYmUgc3RyaW5nIG9yIElNeURhdGUgb2JqZWN0XHJcbiAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHtkYXk6IDAsIG1vbnRoOiAwLCB5ZWFyOiAwfTtcclxuICAgIGlmICh0eXBlb2Ygc2VsRGF0ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uc3Qgc2Q6IHN0cmluZyA9IDxzdHJpbmc+c2VsRGF0ZTtcclxuICAgICAgY29uc3QgZGY6IHN0cmluZyA9IHRoaXMub3B0cy5kYXRlRm9ybWF0O1xyXG5cclxuICAgICAgY29uc3QgZGVsaW1ldGVyczogQXJyYXk8c3RyaW5nPiA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZUZvcm1hdERlbGltZXRlcnMoZGYpO1xyXG4gICAgICBjb25zdCBkYXRlVmFsdWUgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldERhdGVWYWx1ZShzZCwgZGYsIGRlbGltZXRlcnMpO1xyXG4gICAgICBkYXRlLnllYXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmdldE51bWJlckJ5VmFsdWUoZGF0ZVZhbHVlWzBdKTtcclxuXHJcbiAgICAgIGlmIChkZi5pbmRleE9mKCdtbW1tJykgIT09IC0xKSB7XHJcbiAgICAgICAgZGF0ZS5tb250aCA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TW9udGhOdW1iZXJCeU1vbnRoTmFtZShkYXRlVmFsdWVbMV0sIHRoaXMub3B0cy5tb250aExhYmVsc0Z1bGwpO1xyXG4gICAgICB9IGVsc2UgaWYgKGRmLmluZGV4T2YoJ21tbScpICE9PSAtMSkge1xyXG4gICAgICAgIGRhdGUubW9udGggPSB0aGlzLnV0aWxTZXJ2aWNlLmdldE1vbnRoTnVtYmVyQnlNb250aE5hbWUoZGF0ZVZhbHVlWzFdLCB0aGlzLm9wdHMubW9udGhMYWJlbHMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRhdGUubW9udGggPSB0aGlzLnV0aWxTZXJ2aWNlLmdldE51bWJlckJ5VmFsdWUoZGF0ZVZhbHVlWzFdKTtcclxuICAgICAgfVxyXG4gICAgICBkYXRlLmRheSA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMl0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsRGF0ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgZGF0ZSA9IHNlbERhdGU7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGlvbkRheVR4dCA9IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VTZWxlY3RlZE1vbnRoKG1zOiBzdHJpbmcpOiBJTXlNb250aCB7XHJcbiAgICByZXR1cm4gdGhpcy51dGlsU2VydmljZS5wYXJzZURlZmF1bHRNb250aChtcyk7XHJcbiAgfVxyXG5cclxuICBzZXRIZWFkZXJCdG5EaXNhYmxlZFN0YXRlKG06IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgZHBtID0gZmFsc2U7XHJcbiAgICBsZXQgZHB5ID0gZmFsc2U7XHJcbiAgICBsZXQgZG5tID0gZmFsc2U7XHJcbiAgICBsZXQgZG55ID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5vcHRzLmRpc2FibGVIZWFkZXJCdXR0b25zKSB7XHJcbiAgICAgIGRwbSA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlVW50aWwoe1xyXG4gICAgICAgICAgeWVhcjogbSA9PT0gMSA/IHkgLSAxIDogeSxcclxuICAgICAgICAgIG1vbnRoOiBtID09PSAxID8gMTIgOiBtIC0gMSxcclxuICAgICAgICAgIGRheTogdGhpcy5kYXlzSW5Nb250aChtID09PSAxID8gMTIgOiBtIC0gMSwgbSA9PT0gMSA/IHkgLSAxIDogeSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpO1xyXG4gICAgICBkcHkgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKHtcclxuICAgICAgICAgIHllYXI6IHkgLSAxLFxyXG4gICAgICAgICAgbW9udGg6IG0sXHJcbiAgICAgICAgICBkYXk6IHRoaXMuZGF5c0luTW9udGgobSwgeSAtIDEpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsKTtcclxuICAgICAgZG5tID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7XHJcbiAgICAgICAgICB5ZWFyOiBtID09PSAxMiA/IHkgKyAxIDogeSxcclxuICAgICAgICAgIG1vbnRoOiBtID09PSAxMiA/IDEgOiBtICsgMSxcclxuICAgICAgICAgIGRheTogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSk7XHJcbiAgICAgIGRueSA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2Uoe3llYXI6IHkgKyAxLCBtb250aDogbSwgZGF5OiAxfSwgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnByZXZNb250aERpc2FibGVkID0gbSA9PT0gMSAmJiB5ID09PSB0aGlzLm9wdHMubWluWWVhciB8fCBkcG07XHJcbiAgICB0aGlzLnByZXZZZWFyRGlzYWJsZWQgPSB5IC0gMSA8IHRoaXMub3B0cy5taW5ZZWFyIHx8IGRweTtcclxuICAgIHRoaXMubmV4dE1vbnRoRGlzYWJsZWQgPSBtID09PSAxMiAmJiB5ID09PSB0aGlzLm9wdHMubWF4WWVhciB8fCBkbm07XHJcbiAgICB0aGlzLm5leHRZZWFyRGlzYWJsZWQgPSB5ICsgMSA+IHRoaXMub3B0cy5tYXhZZWFyIHx8IGRueTtcclxuICB9XHJcblxyXG4gIGNoZWNrQWN0aXZlKCkge1xyXG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxhYmVsQWN0aXZlKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNEYXRlU2VsZWN0ZWQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBJTkxJTkUgREFURSBQSUNLRVJcclxuXHJcbiAgcHJpdmF0ZSB1dGlsczogVXRpbHMgPSBuZXcgVXRpbHMoKTtcclxuXHJcbiAgcHVibGljIHRvZ2dsZUlubGluZURhdGVQaWNrZXIoKSB7XHJcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgdGhpcy5jbG9zZUJ0bkNsaWNrZWQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3BlbkJ0bkNsaWNrZWQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpjbGljaycsIFsnJGV2ZW50J10pIG9uV2luZG93Q2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmlzT3BlbiAmJlxyXG4gICAgICB0aGlzLmlubGluZSAmJlxyXG4gICAgICAhdGhpcy51dGlscy5nZXRDbG9zZXN0RWwoZXZlbnQudGFyZ2V0LCAnLmRhdGVwaWNrZXItaW5saW5lLWljb24nKSAmJlxyXG4gICAgICAhdGhpcy51dGlscy5nZXRDbG9zZXN0RWwoZXZlbnQudGFyZ2V0LCAnLmRhdGVwaWNrZXItaW5saW5lLWljb24nKSAmJlxyXG4gICAgICAhdGhpcy51dGlscy5nZXRDbG9zZXN0RWwoZXZlbnQudGFyZ2V0LCAnLnBpY2tlcl9fZnJhbWUnKSAmJlxyXG4gICAgICAhdGhpcy51dGlscy5nZXRDbG9zZXN0RWwoZXZlbnQudGFyZ2V0LCAnLm15ZHAtZGF0ZScpKSB7XHJcbiAgICAgIHRoaXMuY2xvc2VCdG5DbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==