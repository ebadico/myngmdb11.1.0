/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewEncapsulation, Renderer2, forwardRef, ViewChild, PLATFORM_ID, Inject, ChangeDetectionStrategy, ChangeDetectorRef, Optional, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LocaleService } from './services/datepickerLocale.service';
import { UtilService } from './services/datepickerUtil.service';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { MDB_DATE_OPTIONS } from './options.token';
import { ENTER, SPACE } from '../../free/utils/keyboard-navigation';
/** @type {?} */
export const MYDP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MDBDatePickerComponent)),
    multi: true,
};
/** @enum {number} */
const CalToggle = {
    Open: 1,
    CloseByDateSel: 2,
    CloseByCalBtn: 3,
    CloseByOutClick: 4,
};
CalToggle[CalToggle.Open] = 'Open';
CalToggle[CalToggle.CloseByDateSel] = 'CloseByDateSel';
CalToggle[CalToggle.CloseByCalBtn] = 'CloseByCalBtn';
CalToggle[CalToggle.CloseByOutClick] = 'CloseByOutClick';
/** @enum {number} */
const Year = {
    min: 1000,
    max: 9999,
};
Year[Year.min] = 'min';
Year[Year.max] = 'max';
/** @enum {number} */
const InputFocusBlur = {
    focus: 1,
    blur: 2,
};
InputFocusBlur[InputFocusBlur.focus] = 'focus';
InputFocusBlur[InputFocusBlur.blur] = 'blur';
/** @enum {number} */
const KeyCode = {
    enter: ENTER,
    space: SPACE,
};
KeyCode[KeyCode.enter] = 'enter';
KeyCode[KeyCode.space] = 'space';
/** @enum {number} */
const MonthId = {
    prev: 1,
    curr: 2,
    next: 3,
};
MonthId[MonthId.prev] = 'prev';
MonthId[MonthId.curr] = 'curr';
MonthId[MonthId.next] = 'next';
/** @type {?} */
let uniqueId = 0;
export class MDBDatePickerComponent {
    /**
     * @param {?} elem
     * @param {?} renderer
     * @param {?} localeService
     * @param {?} utilService
     * @param {?} cdRef
     * @param {?} _globalOptions
     * @param {?} document
     * @param {?} platformId
     */
    constructor(elem, renderer, localeService, utilService, cdRef, _globalOptions, document, platformId) {
        this.elem = elem;
        this.renderer = renderer;
        this.localeService = localeService;
        this.utilService = utilService;
        this.cdRef = cdRef;
        this._globalOptions = _globalOptions;
        this.document = document;
        this.label = '';
        this.placeholder = '';
        this.openOnFocus = true;
        this.outlineInput = false;
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
        this._uid = `mdb-datepicker-${uniqueId++}`;
        this.isOpen = false;
        this.isDisabled = false;
        this.tmp = {
            year: this.getToday().year,
            month: this.getToday().month,
            day: this.getToday().day,
        };
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
            editableDateField: (/** @type {?} */ (true)),
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
            useDateObject: (/** @type {?} */ (false)),
            ariaLabelInputField: (/** @type {?} */ ('Date input field')),
            ariaLabelClearDate: (/** @type {?} */ ('Clear Date')),
            ariaLabelOpenCalendar: (/** @type {?} */ ('Open Calendar')),
            ariaLabelPrevMonth: (/** @type {?} */ ('Previous Month')),
            ariaLabelNextMonth: (/** @type {?} */ ('Next Month')),
            ariaLabelPrevYear: (/** @type {?} */ ('Previous Year')),
            ariaLabelNextYear: (/** @type {?} */ ('Next Year')),
        };
        this.months = [];
        this.years = [];
        this.firstTimeOpenedModal = true;
        this.modalHeightBefore = null;
        this.isMobile = null;
        this.isBrowser = false;
        this.onChangeCb = (/**
         * @return {?}
         */
        () => { });
        this.onTouchedCb = (/**
         * @return {?}
         */
        () => { });
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
        this.setLocaleOptions();
        renderer.listen(this.elem.nativeElement, 'click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this.showSelector &&
                event.target &&
                this.elem.nativeElement !== event.target &&
                !this.elem.nativeElement.contains(event.target)) {
                this.closeBtnClicked();
                this.calendarToggle.emit(CalToggle.CloseByOutClick);
            }
            if (event.target.classList.contains('picker__holder')) {
                this.closeBtnClicked();
                this.cdRef.detectChanges();
            }
            if (true && event.target && this.elem.nativeElement.contains(event.target)) {
                this.resetMonthYearEdit();
                this.cdRef.detectChanges();
            }
        }));
        this.id = this.id;
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value || this._uid;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.opts.startDate) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (this.opts.startDate.toString().indexOf('T') !== -1) {
                    /** @type {?} */
                    const index = this.opts.startDate.toString().indexOf('T');
                    /** @type {?} */
                    const startDate = this.opts.startDate.toString().substr(0, index);
                    this.onUserDateInput(startDate);
                }
            }), 0);
        }
    }
    /**
     * @return {?}
     */
    ChangeZIndex() {
        if (this.isBrowser) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                // Fix for visible date / time picker input when picker plate is visible.
                try {
                    /** @type {?} */
                    const openedPicker = this.document.querySelector('.picker--opened');
                    /** @type {?} */
                    const allPickers = this.document.querySelectorAll('.picker');
                    allPickers.forEach((/**
                     * @param {?} element
                     * @return {?}
                     */
                    (element) => {
                        this.renderer.setStyle(element, 'z-index', '0');
                    }));
                    // Change z-index from 100 to 1031 => Fix for problem
                    // when inline datepicker was rendered below footer with .fixed-bottom class
                    this.renderer.setStyle(openedPicker, 'z-index', '1031');
                }
                catch (error) { }
            }), 0);
        }
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        if (this.inline) {
            if (isDisabled) {
                this.inlineIcon += ' disabled grey-text';
            }
            else {
                /** @type {?} */
                const to = this.inlineIcon.indexOf('disabled');
                this.inlineIcon = this.inlineIcon.substr(0, to);
                this.cdRef.detectChanges();
            }
        }
        this.cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    removeInlineStyle() {
        try {
            if (this.elem.nativeElement.parentElement.parentElement.classList.contains('modal-content')) {
                this.renderer.setStyle(this.elem.nativeElement.parentElement.parentElement, 'transition', 'height 0.3s');
                this.elem.nativeElement.parentElement.parentElement.style.height =
                    this.modalHeightBefore + 'px';
            }
        }
        catch (error) { }
        setTimeout((/**
         * @return {?}
         */
        () => {
            ((/** @type {?} */ (this.document.documentElement))).style.removeProperty('overflow');
        }), 155);
        this.labelActive = false;
    }
    /**
     * @return {?}
     */
    setLocaleOptions() {
        /** @type {?} */
        const opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            this.opts[k] = opts[k];
        }));
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    addLocale(locale) {
        this.localeService.locales = Object.assign({}, this.localeService.locales, locale);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.setLocaleOptions();
        }), 0);
    }
    /**
     * @return {?}
     */
    setOptions() {
        /** @type {?} */
        const thisYear = new Date();
        /** @type {?} */
        const currentYear = thisYear.getFullYear();
        /** @type {?} */
        const options = Object.assign({}, this._globalOptions, this.options);
        if (options && options !== undefined) {
            Object.keys(options).forEach((/**
             * @param {?} k
             * @return {?}
             */
            k => {
                this.opts[k] = options[k];
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
    }
    /**
     * @return {?}
     */
    resetMonthYearEdit() {
        this.editMonth = false;
        this.editYear = false;
        this.invalidMonth = false;
        this.invalidYear = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onUserDateInput(value) {
        this.invalidDate = false;
        if (value.length === 0) {
            this.clearDate();
        }
        else {
            /** @type {?} */
            const date = this.utilService.isDateValid(value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.monthLabels, this.opts.enableDays);
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
                valid: !(value.length === 0 || this.invalidDate),
            });
            this.onChangeCb('');
            this.onTouchedCb();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocusInput(event) {
        if (this.openOnFocus && !this.isOpen) {
            this.openBtnClicked();
        }
        this.inputFocusBlur.emit({ reason: InputFocusBlur.focus, value: event.target.value });
        if (!this.inline) {
            ((/** @type {?} */ (this.document.documentElement))).style.overflow = 'hidden';
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlurInput(event) {
        this.selectionDayTxt = event.target.value;
        this.onTouchedCb();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.blur, value: event.target.value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onUserMonthInput(value) {
        this.invalidMonth = false;
        /** @type {?} */
        const m = this.utilService.isMonthLabelValid(value, this.opts.monthLabels);
        if (m !== -1) {
            this.editMonth = false;
            if (m !== this.visibleMonth.monthNbr) {
                this.visibleMonth = {
                    monthTxt: this.monthText(m),
                    monthNbr: m,
                    year: this.visibleMonth.year,
                };
                this.generateCalendar(m, this.visibleMonth.year, true);
            }
        }
        else {
            this.invalidMonth = true;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onUserYearInput(value) {
        this.invalidYear = false;
        /** @type {?} */
        const y = this.utilService.isYearLabelValid(Number(value), this.opts.minYear, this.opts.maxYear);
        if (y !== -1) {
            this.editYear = false;
            if (y !== this.visibleMonth.year) {
                this.visibleMonth = {
                    monthTxt: this.visibleMonth.monthTxt,
                    monthNbr: this.visibleMonth.monthNbr,
                    year: y,
                };
                this.generateCalendar(this.visibleMonth.monthNbr, y, true);
            }
        }
        else {
            this.invalidYear = true;
        }
    }
    /**
     * @return {?}
     */
    isTodayDisabled() {
        this.disableTodayBtn = this.utilService.isDisabledDay(this.getToday(), this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays);
    }
    /**
     * @return {?}
     */
    parseOptions() {
        if (this.locale) {
            this.setLocaleOptions();
        }
        this.setOptions();
        this.isTodayDisabled();
        this.dayIdx = this.weekDayOpts.indexOf(this.opts.firstDayOfWeek);
        if (this.dayIdx !== -1) {
            /** @type {?} */
            let idx = this.dayIdx;
            for (let i = 0; i < this.weekDayOpts.length; i++) {
                this.weekDays.push(this.opts.dayLabels[this.weekDayOpts[idx]]);
                idx = this.weekDayOpts[idx] === 'sa' ? 0 : idx + 1;
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value && typeof value === 'string') {
            this.updateDateValue(this.parseSelectedDate(value), false);
        }
        else if (value && value['date']) {
            this.updateDateValue(this.parseSelectedDate(value['date']), false);
        }
        else if (value instanceof Date) {
            /** @type {?} */
            const date = { day: value.getDate(), month: value.getMonth() + 1, year: value.getFullYear() };
            this.updateDateValue(this.parseSelectedDate(date), false);
        }
        else if (value === '' || value === null) {
            this.selectedDate = { year: 0, month: 0, day: 0 };
            this.selectionDayTxt = '';
        }
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
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('selector') && changes['selector'].currentValue > 0) {
            this.openBtnClicked();
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.placeholder = changes['placeholder'].currentValue;
        }
        if (changes.hasOwnProperty('locale')) {
            this.locale = changes['locale'].currentValue;
            this.setLocaleOptions();
            this.updateDateValue(this.selectedDate, false);
        }
        if (changes.hasOwnProperty('disabled')) {
            this.disabled = changes['disabled'].currentValue;
        }
        if (changes.hasOwnProperty('options')) {
            this.options = changes['options'].currentValue;
            if (changes.options.currentValue && changes.options.currentValue.startDate) {
                this.onUserDateInput(changes.options.currentValue.startDate);
            }
        }
        this.weekDays.length = 0;
        this.parseOptions();
        if (changes.hasOwnProperty('defaultMonth')) {
            /** @type {?} */
            const dm = changes['defaultMonth'].currentValue;
            if (dm !== null && dm !== undefined && dm !== '') {
                this.selectedMonth = this.parseSelectedMonth(dm);
            }
            else {
                this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
            }
        }
        if (changes.hasOwnProperty('selDate')) {
            /** @type {?} */
            const sd = changes['selDate'];
            if (sd.currentValue !== null &&
                sd.currentValue !== undefined &&
                sd.currentValue !== '' &&
                Object.keys(sd.currentValue).length !== 0) {
                this.selectedDate = this.parseSelectedDate(sd.currentValue);
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.onChangeCb(this.getDateModel(this.selectedDate));
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
    }
    /**
     * @return {?}
     */
    hideKeyboard() {
        try {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const field = this.renderer.createElement('input');
                this.renderer.appendChild(this.elem.nativeElement, field);
                /** @type {?} */
                const inputReference = this.elem.nativeElement.lastElementChild;
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setStyle(inputReference, 'opacity', '0');
                this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                field.onfocus = (/**
                 * @return {?}
                 */
                () => {
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
                            this.document.body.focus();
                        }), 0);
                    }), 0);
                });
                field.focus();
            }), 0);
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    removeBtnClicked() {
        this.clearDate();
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
        this.isDateSelected = false;
        this.clearButtonClicked.emit(this);
        this.cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    closeBtnClicked() {
        this.showSelector = false;
        this.removeInlineStyle();
        this.isOpen = false;
        this.closeButtonClicked.emit(this);
        this.cdRef.markForCheck();
        this.documentClickFun();
    }
    /**
     * @return {?}
     */
    openBtnClicked() {
        this.isOpen = true;
        this.documentClickFun = this.renderer.listen('document', 'click', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            if (this.isOpen &&
                this.pickerFrame &&
                this.inlineInput &&
                this.inlineIconToggle &&
                !this.inlineInput.nativeElement.contains(event.target) &&
                !this.pickerFrame.nativeElement.contains(event.target) &&
                !this.inlineIconToggle.nativeElement.contains(event.target)) {
                this.closeBtnClicked();
            }
        }));
        try {
            if (this.elem.nativeElement.parentElement.parentElement.classList.contains('modal-content')) {
                if (this.firstTimeOpenedModal) {
                    this.modalHeightBefore = this.elem.nativeElement.parentElement.parentElement.offsetHeight;
                }
                this.firstTimeOpenedModal = false;
                this.renderer.setStyle(this.elem.nativeElement.parentElement.parentElement, 'transition', 'height 0.3s');
                // tslint:disable-next-line:max-line-length
                this.elem.nativeElement.parentElement.parentElement.style.height =
                    this.modalHeightBefore + this.pickerFrame.nativeElement.offsetHeight + 'px';
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
        if (!this.inline) {
            this.ChangeZIndex();
        }
        this.cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    setVisibleMonth() {
        // Sets visible month of calendar
        /** @type {?} */
        let y = 0;
        /** @type {?} */
        let m = 0;
        if (!this.utilService.isInitializedDate(this.selectedDate)) {
            if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
                /** @type {?} */
                const today = this.getToday();
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
    }
    /**
     * @return {?}
     */
    monthList() {
        this.months = [];
        for (let i = 1; i <= 12; i++) {
            this.months.push({
                index: i,
                short: this.opts.monthLabels[i],
                label: this.opts.monthLabelsFull[i],
            });
        }
    }
    /**
     * @return {?}
     */
    yearsList() {
        this.years = [];
        /** @type {?} */
        const firstYear = this.opts.minYear;
        /** @type {?} */
        const lastYear = this.opts.maxYear;
        for (let i = firstYear; i <= lastYear; i++) {
            this.years.push(i);
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    prevMonth(event) {
        // Previous month from calendar
        /** @type {?} */
        const d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() - 1);
        /** @type {?} */
        const y = d.getFullYear();
        /** @type {?} */
        const m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
        // Prevents trigger (click) event when using Enter
        if (event.keyCode === ENTER) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    nextMonth(event) {
        // Next month from calendar
        /** @type {?} */
        const d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() + 1);
        /** @type {?} */
        const y = d.getFullYear();
        /** @type {?} */
        const m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
        // Prevents trigger (click) event when using Enter
        if (event.code === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @return {?}
     */
    prevYear() {
        // Previous year from calendar
        this.visibleMonth.year--;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    }
    /**
     * @return {?}
     */
    nextYear() {
        // Next year from calendar
        this.visibleMonth.year++;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    }
    /**
     * @return {?}
     */
    todayClicked() {
        // Today button clicked
        /** @type {?} */
        const today = this.getToday();
        if (!this.utilService.isDisabledDay(today, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays)) {
            this.selectDate(today);
        }
        if (today.year !== this.visibleMonth.year || today.month !== this.visibleMonth.monthNbr) {
            this.visibleMonth = {
                monthTxt: this.opts.monthLabels[today.month],
                monthNbr: today.month,
                year: today.year,
            };
            this.generateCalendar(today.month, today.year, true);
        }
        this.todayButtonClicked.emit(this);
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    cellClicked(cell) {
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
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    cellKeyDown(event, cell) {
        // Cell keyboard handling
        if ((event.keyCode === KeyCode.enter || event.keyCode === KeyCode.space) && !cell.disabled) {
            event.preventDefault();
            this.cellClicked(cell);
        }
    }
    /**
     * @return {?}
     */
    clearDate() {
        // Clears the date and notifies parent using callbacks and value accessor
        /** @type {?} */
        const date = { year: 0, month: 0, day: 0 };
        this.dateChanged.emit({ date: date, jsdate: null, formatted: '', epoc: 0 });
        this.onChangeCb(null);
        this.onTouchedCb();
        this.updateDateValue(date, true);
        this.tmp = {
            year: this.getToday().year,
            month: this.getToday().month,
            day: this.getToday().day,
        };
        this.setVisibleMonth();
        this.labelActive = false;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    selectDate(date) {
        // Date selected, notifies parent using callbacks and value accessor
        this.tmp = date;
        /** @type {?} */
        const dateModel = this.getDateModel(date);
        this.dateChanged.emit({
            date: date,
            jsdate: this.getDate(date.year, date.month, date.day),
            previousDateFormatted: this.selectionDayTxt,
            actualDateFormatted: dateModel,
            epoc: Math.round(this.getTimeInMilliseconds(date) / 1000.0),
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
    }
    /**
     * @param {?} date
     * @param {?} clear
     * @return {?}
     */
    updateDateValue(date, clear) {
        // Updates date values
        this.selectedDate = date;
        this.tmp = date;
        this.isDateSelected = true;
        this.selectionDayTxt = clear ? '' : this.formatDate(date);
        this.inputFieldChanged.emit({
            value: this.selectionDayTxt,
            dateFormat: this.opts.dateFormat,
            valid: !clear,
        });
        this.invalidDate = false;
        this.cdRef.markForCheck();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateModel(date) {
        /** @type {?} */
        const jsDate = this.getDate(date.year, date.month, date.day);
        /** @type {?} */
        const dateModel = this.opts.useDateObject ? jsDate : this.formatDate(date);
        return dateModel;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    preZero(val) {
        // Prepend zero if smaller than 10
        return parseInt(val, 0) < 10 ? '0' + val : val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    formatDate(val) {
        // Returns formatted date string, if mmm is part of dateFormat returns month as a string
        // days
        /** @type {?} */
        const d = val.day;
        // 1 - 31
        /** @type {?} */
        const dd = this.preZero(val.day);
        // 01 - 31
        /** @type {?} */
        const ddd = this.opts.dayLabels[this.getWeekday(val)];
        // Sun-Sat
        /** @type {?} */
        const dddd = this.opts.dayLabelsFull[this.getWeekday(val)];
        // Sunday – Saturday
        /** @type {?} */
        const m = val.month;
        // 1 - 12
        /** @type {?} */
        const mm = this.preZero(val.month);
        // 01 - 12
        /** @type {?} */
        const mmm = this.getMonthShort(val.month);
        // Jan - Dec
        /** @type {?} */
        const mmmm = this.getMonthFull(val.month);
        // January – December
        /** @type {?} */
        const yy = val.year.toString().length === 2 ? val.year : val.year.toString().slice(2, 4);
        // 00 - 99
        /** @type {?} */
        const yyyy = val.year;
        /** @type {?} */
        const toReplace = this.opts.dateFormat.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        /** @type {?} */
        let formatted = '';
        toReplace.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
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
    }
    /**
     * @param {?} m
     * @return {?}
     */
    monthText(m) {
        // Returns month as a text
        return this.opts.monthLabels[m];
    }
    /**
     * @param {?} m
     * @return {?}
     */
    weekText(m) {
        // Returns month as a text
        return this.opts.dayLabelsFull[m];
    }
    /**
     * @param {?} m
     * @return {?}
     */
    getMonthShort(m) {
        return this.opts.monthLabels[m];
    }
    /**
     * @param {?} m
     * @return {?}
     */
    getMonthFull(m) {
        return this.opts.monthLabelsFull[m];
    }
    /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    monthStartIdx(y, m) {
        // Month start index
        /** @type {?} */
        const d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        /** @type {?} */
        const idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    daysInMonth(m, y) {
        // Return number of days of current month
        return new Date(y, m, 0).getDate();
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    daysInPrevMonth(m, y) {
        // Return number of days of the previous month
        /** @type {?} */
        const d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    }
    /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} cmo
     * @param {?} today
     * @return {?}
     */
    isCurrDay(d, m, y, cmo, today) {
        // Check is a given date the today
        return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
    }
    /**
     * @return {?}
     */
    getToday() {
        /** @type {?} */
        const date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getTimeInMilliseconds(date) {
        return this.getDate(date.year, date.month, date.day).getTime();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekday(date) {
        // Get weekday: su, mo, tu, we ...
        return this.weekDayOpts[this.utilService.getDayNumber(date)];
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    getDate(year, month, day) {
        // Creates a date object from given year, month and day
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    }
    /**
     * @return {?}
     */
    sundayIdx() {
        // Index of Sunday day
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    }
    /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    generateCalendar(m, y, notifyChange) {
        this.dates.length = 0;
        /** @type {?} */
        const today = this.getToday();
        /** @type {?} */
        const monthStart = this.monthStartIdx(y, m);
        /** @type {?} */
        const dInThisM = this.daysInMonth(m, y);
        /** @type {?} */
        const dInPrevM = this.daysInPrevMonth(m, y);
        /** @type {?} */
        let dayNbr = 1;
        /** @type {?} */
        let cmo = this.prevMonthId;
        for (let i = 1; i < 7; i++) {
            /** @type {?} */
            const week = [];
            if (i === 1) {
                // First week
                /** @type {?} */
                const pm = dInPrevM - monthStart + 1;
                // Previous month
                for (let j = pm; j <= dInPrevM; j++) {
                    /** @type {?} */
                    const date = { year: y, month: m - 1, day: j };
                    week.push({
                        dateObj: date,
                        cmo: cmo,
                        currDay: this.isCurrDay(j, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                    });
                }
                cmo = this.currMonthId;
                // Current month
                /** @type {?} */
                const daysLeft = 7 - week.length;
                for (let j = 0; j < daysLeft; j++) {
                    /** @type {?} */
                    const date = { year: y, month: m, day: dayNbr };
                    week.push({
                        dateObj: date,
                        cmo: cmo,
                        currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                    });
                    dayNbr++;
                }
            }
            else {
                // Rest of the weeks
                for (let j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        // Next month
                        dayNbr = 1;
                        cmo = this.nextMonthId;
                    }
                    /** @type {?} */
                    const date = {
                        year: y,
                        month: cmo === this.currMonthId ? m : m + 1,
                        day: dayNbr,
                    };
                    week.push({
                        dateObj: date,
                        cmo: cmo,
                        currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends),
                    });
                    dayNbr++;
                }
            }
            /** @type {?} */
            const weekNbr = this.opts.showWeekNumbers && this.opts.firstDayOfWeek === 'mo'
                ? this.utilService.getWeekNumber(week[0].dateObj)
                : 0;
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
                        day: 1,
                    }),
                },
                last: {
                    number: dInThisM,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: dInThisM,
                    }),
                },
            });
        }
        this.monthList();
        this.yearsList();
    }
    /**
     * @param {?} selDate
     * @return {?}
     */
    parseSelectedDate(selDate) {
        // Parse selDate value - it can be string or IMyDate object
        // Removes everything from selDate if it's ISO date format to allow to use ISO date in date picker
        if (selDate.toString().indexOf('T') !== -1) {
            selDate = selDate.substr(0, selDate.indexOf('T'));
        }
        /** @type {?} */
        let date = { day: 0, month: 0, year: 0 };
        if (typeof selDate === 'string') {
            /** @type {?} */
            const sd = (/** @type {?} */ (selDate));
            /** @type {?} */
            const df = this.opts.dateFormat;
            /** @type {?} */
            const delimeters = this.utilService.getDateFormatDelimeters(df);
            /** @type {?} */
            const dateValue = this.utilService.getDateValue(sd, df, delimeters);
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
    }
    /**
     * @param {?} ms
     * @return {?}
     */
    parseSelectedMonth(ms) {
        return this.utilService.parseDefaultMonth(ms);
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    setHeaderBtnDisabledState(m, y) {
        /** @type {?} */
        let dpm = false;
        /** @type {?} */
        let dpy = false;
        /** @type {?} */
        let dnm = false;
        /** @type {?} */
        let dny = false;
        if (this.opts.disableHeaderButtons) {
            dpm = this.utilService.isMonthDisabledByDisableUntil({
                year: m === 1 ? y - 1 : y,
                month: m === 1 ? 12 : m - 1,
                day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y),
            }, this.opts.disableUntil);
            dpy = this.utilService.isMonthDisabledByDisableUntil({
                year: y - 1,
                month: m,
                day: this.daysInMonth(m, y - 1),
            }, this.opts.disableUntil);
            dnm = this.utilService.isMonthDisabledByDisableSince({
                year: m === 12 ? y + 1 : y,
                month: m === 12 ? 1 : m + 1,
                day: 1,
            }, this.opts.disableSince);
            dny = this.utilService.isMonthDisabledByDisableSince({ year: y + 1, month: m, day: 1 }, this.opts.disableSince);
        }
        this.prevMonthDisabled = (m === 1 && y === this.opts.minYear) || dpm;
        this.prevYearDisabled = y - 1 < this.opts.minYear || dpy;
        this.nextMonthDisabled = (m === 12 && y === this.opts.maxYear) || dnm;
        this.nextYearDisabled = y + 1 > this.opts.maxYear || dny;
    }
    /**
     * @return {?}
     */
    checkActive() {
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
    }
    // INLINE DATE PICKER
    /**
     * @return {?}
     */
    toggleInlineDatePicker() {
        if (this.isOpen) {
            this.closeBtnClicked();
        }
        else {
            this.openBtnClicked();
        }
    }
}
MDBDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-date-picker',
                exportAs: 'mdbdatepicker',
                template: "<!-- Line 27: Deleted (focus)=\"onFocusInput($event)\" for better use in Firefox. If other strange problems will occur, please paste it in line 27. -->\r\n<div\r\n  class=\"mydp picker\"\r\n  [ngClass]=\"{ 'picker--opened': showSelector }\"\r\n  [ngStyle]=\"{ width: opts.width }\"\r\n  *ngIf=\"!inline\"\r\n>\r\n  <div class=\"md-form\" [ngClass]=\"{ 'md-outline': outlineInput }\">\r\n    <input\r\n      [id]=\"id\"\r\n      type=\"text\"\r\n      class=\"form-control mydp-date\"\r\n      [readonly]=\"!opts.editableDateField\"\r\n      [attr.aria-label]=\"opts.ariaLabelInputField\"\r\n      (mousedown)=\"openBtnClicked()\"\r\n      [attr.maxlength]=\"opts.dateFormat.length\"\r\n      [ngClass]=\"{\r\n        selectiondisabled: opts.componentDisabled,\r\n        disabled: opts.componentDisabled\r\n      }\"\r\n      placeholder=\"{{ placeholder }}\"\r\n      [ngModel]=\"selectionDayTxt\"\r\n      (ngModelChange)=\"onUserDateInput($event)\"\r\n      [value]=\"selectionDayTxt\"\r\n      [ngStyle]=\"{\r\n        'font-size': opts.selectionTxtFontSize\r\n      }\"\r\n      (blur)=\"onBlurInput($event)\"\r\n      (focus)=\"onFocusInput($event)\"\r\n      [disabled]=\"opts.componentDisabled || isDisabled\"\r\n      autocomplete=\"off\"\r\n      [tabindex]=\"tabIndex\"\r\n    />\r\n    <label\r\n      [for]=\"id\"\r\n      (click)=\"openBtnClicked()\"\r\n      *ngIf=\"label.length > 0\"\r\n      [ngClass]=\"{\r\n        active: checkActive(),\r\n        disabled: opts.componentDisabled\r\n      }\"\r\n      >{{ label }}</label\r\n    >\r\n  </div>\r\n  <div\r\n    *ngIf=\"showSelector\"\r\n    class=\"selector picker__holder selectorarrow selectorarrowleft selectorarrowright\"\r\n    #divFocus\r\n    [ngClass]=\"{ alignselectorright: opts.alignSelectorRight }\"\r\n    tabindex=\"0\"\r\n  >\r\n    <div class=\"picker__frame picker__box\" #pickerFrame>\r\n      <div class=\"picker__header\">\r\n        <div class=\"picker__date-display\">\r\n          <div class=\"picker__weekday-display\">\r\n            {{ weekText(getWeekday(tmp)) }}\r\n          </div>\r\n          <div class=\"picker__month-display\">\r\n            <div>{{ monthText(tmp.month) }}</div>\r\n          </div>\r\n          <div class=\"picker__day-display\">\r\n            <div>{{ tmp.day }}</div>\r\n          </div>\r\n          <div class=\"picker__year-display\">\r\n            <div>{{ tmp.year }}</div>\r\n          </div>\r\n        </div>\r\n        <select\r\n          class=\"picker__select--year\"\r\n          [(ngModel)]=\"visibleMonth.year\"\r\n          (ngModelChange)=\"onUserYearInput($event)\"\r\n          role=\"menu\"\r\n          aria-label=\"Year selector\"\r\n        >\r\n          <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option>\r\n        </select>\r\n        <select\r\n          class=\"picker__select--month\"\r\n          [(ngModel)]=\"visibleMonth.monthTxt\"\r\n          (ngModelChange)=\"onUserMonthInput($event)\"\r\n          role=\"menu\"\r\n          aria-label=\"Month selector\"\r\n        >\r\n          <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option>\r\n        </select>\r\n        <a\r\n          href=\"javascript:;\"\r\n          role=\"button\"\r\n          class=\"picker__nav--prev black-text\"\r\n          data-nav=\"-1\"\r\n          aria-controls=\"date-picker-example_table\"\r\n          title=\"Previous month\"\r\n          (click)=\"prevMonth($event)\"\r\n          (keydown.enter)=\"prevMonth($event)\"\r\n          [ngClass]=\"{\r\n            headerbtnenabled: !prevMonthDisabled,\r\n            headerbtndisabled: prevMonthDisabled,\r\n            'disabled grey-text': prevMonthDisabled\r\n          }\"\r\n        ></a>\r\n        <a\r\n          role=\"button\"\r\n          href=\"javascript:;\"\r\n          class=\"picker__nav--next black-text\"\r\n          data-nav=\"1\"\r\n          aria-controls=\"date-picker-example_table\"\r\n          title=\"Next month\"\r\n          (click)=\"nextMonth($event)\"\r\n          (keydown.enter)=\"nextMonth($event)\"\r\n          [ngClass]=\"{\r\n            headerbtnenabled: !nextMonthDisabled,\r\n            headerbtndisabled: nextMonthDisabled,\r\n            'disabled grey-text': nextMonthDisabled\r\n          }\"\r\n        ></a>\r\n      </div>\r\n      <table class=\"picker__table\">\r\n        <thead>\r\n          <tr>\r\n            <th\r\n              class=\"picker__weekday weekdaytitleweeknbr\"\r\n              *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n            >\r\n              #\r\n            </th>\r\n            <th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{ d }}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let w of dates\">\r\n            <td\r\n              class=\"picker__day daycellweeknbr\"\r\n              *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n            >\r\n              {{ w.weekNbr }}\r\n            </td>\r\n            <td\r\n              class=\"picker__day\"\r\n              *ngFor=\"let d of w.week\"\r\n              [ngClass]=\"{\r\n                'picker__day--infocus': d.cmo === currMonthId && !d.disabled,\r\n                disabled: d.disabled,\r\n                tablesingleday: d.cmo === currMonthId && !d.disabled\r\n              }\"\r\n            >\r\n              <div\r\n                *ngIf=\"d.markedDate.marked\"\r\n                class=\"markdate\"\r\n                [ngStyle]=\"{ 'background-color': d.markedDate.color }\"\r\n              ></div>\r\n              <div\r\n                class=\"picker__day\"\r\n                [ngClass]=\"{\r\n                  'picker__day--infocus': d.cmo === currMonthId,\r\n                  'picker__day--outfocus': d.cmo === nextMonthId || d.cmo === prevMonthId,\r\n                  'picker__day--today': d.currDay && opts.markCurrentDay,\r\n                  'picker__day--selected picker__day--highlighted':\r\n                    selectedDate.day === d.dateObj.day &&\r\n                    selectedDate.month === d.dateObj.month &&\r\n                    selectedDate.year === d.dateObj.year &&\r\n                    d.cmo === currMonthId\r\n                }\"\r\n                (click)=\"!d.disabled && cellClicked(d); $event.stopPropagation()\"\r\n                (keydown)=\"cellKeyDown($event, d)\"\r\n                tabindex=\"0\"\r\n              >\r\n                {{ d.dateObj.day }}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"picker__footer\">\r\n        <button\r\n          type=\"button\"\r\n          *ngIf=\"opts.showTodayBtn\"\r\n          class=\"picker__button--today\"\r\n          (click)=\"todayClicked()\"\r\n          role=\"button\"\r\n          [attr.aria-label]=\"opts.todayBtnTxt\"\r\n        >\r\n          {{ opts.todayBtnTxt }}\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          *ngIf=\"opts.showClearDateBtn\"\r\n          class=\"picker__button--clear\"\r\n          (click)=\"removeBtnClicked()\"\r\n          role=\"button\"\r\n          [attr.aria-label]=\"opts.clearBtnTxt\"\r\n        >\r\n          {{ opts.clearBtnTxt }}\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          [ngClass]=\"{ 'ml-auto': !opts.showTodayBtn }\"\r\n          class=\"picker__button--close\"\r\n          (click)=\"closeBtnClicked()\"\r\n          role=\"button\"\r\n          [attr.aria-label]=\"opts.closeBtnTxt\"\r\n        >\r\n          {{ opts.closeBtnTxt }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  class=\"md-form my-0 d-flex align-items-center justify-content-center\"\r\n  *ngIf=\"inline\"\r\n  [ngClass]=\"{ 'md-outline': outlineInput }\"\r\n>\r\n  <input\r\n    #inlineInput\r\n    [id]=\"id\"\r\n    type=\"text\"\r\n    class=\"form-control mydp-date\"\r\n    [readonly]=\"!opts.editableDateField\"\r\n    [attr.aria-label]=\"opts.ariaLabelInputField\"\r\n    [attr.maxlength]=\"opts.dateFormat.length\"\r\n    [ngClass]=\"{\r\n      selectiondisabled: opts.componentDisabled,\r\n      disabled: opts.componentDisabled\r\n    }\"\r\n    placeholder=\"{{ placeholder }}\"\r\n    [ngModel]=\"selectionDayTxt\"\r\n    (ngModelChange)=\"onUserDateInput($event)\"\r\n    [value]=\"selectionDayTxt\"\r\n    [ngStyle]=\"{\r\n      'font-size': opts.selectionTxtFontSize\r\n    }\"\r\n    (focus)=\"onFocusInput($event)\"\r\n    (blur)=\"onBlurInput($event)\"\r\n    [disabled]=\"opts.componentDisabled || isDisabled\"\r\n    autocomplete=\"off\"\r\n    [tabindex]=\"tabIndex\"\r\n  />\r\n  <label\r\n    [for]=\"id\"\r\n    (click)=\"openBtnClicked()\"\r\n    *ngIf=\"label.length > 0\"\r\n    [ngClass]=\"{\r\n      active: checkActive(),\r\n      disabled: opts.componentDisabled\r\n    }\"\r\n    >{{ label }}</label\r\n  >\r\n  <i\r\n    [ngClass]=\"inlineIcon\"\r\n    #inlineIconToggle\r\n    class=\"datepicker-inline-icon\"\r\n    (click)=\"toggleInlineDatePicker()\"\r\n  ></i>\r\n</div>\r\n<div\r\n  class=\"mydp picker datepicker-inline\"\r\n  [ngClass]=\"{ 'picker--opened': showSelector }\"\r\n  *ngIf=\"inline && isOpen\"\r\n>\r\n  <div class=\"picker__frame picker__box z-depth-1\" #pickerFrame [ngClass]=\"{ 'd-none': !isOpen }\">\r\n    <div class=\"picker__header d-flex flex-center\">\r\n      <select\r\n        class=\"picker__select--year\"\r\n        [(ngModel)]=\"visibleMonth.year\"\r\n        (ngModelChange)=\"onUserYearInput($event)\"\r\n        role=\"menu\"\r\n        aria-label=\"Year selector\"\r\n      >\r\n        <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option>\r\n      </select>\r\n      <select\r\n        class=\"picker__select--month\"\r\n        [(ngModel)]=\"visibleMonth.monthTxt\"\r\n        (ngModelChange)=\"onUserMonthInput($event)\"\r\n        role=\"menu\"\r\n        aria-label=\"Month selector\"\r\n      >\r\n        <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option>\r\n      </select>\r\n      <a\r\n        href=\"javascript:;\"\r\n        role=\"button\"\r\n        class=\"picker__nav--prev black-text\"\r\n        data-nav=\"-1\"\r\n        aria-controls=\"date-picker-example_table\"\r\n        title=\"Previous month\"\r\n        (click)=\"prevMonth($event)\"\r\n        (keydown.enter)=\"prevMonth($event)\"\r\n        [ngClass]=\"{\r\n          headerbtnenabled: !prevMonthDisabled,\r\n          headerbtndisabled: prevMonthDisabled,\r\n          'disabled grey-text': prevMonthDisabled\r\n        }\"\r\n      ></a>\r\n      <a\r\n        href=\"javascript:;\"\r\n        role=\"button\"\r\n        class=\"picker__nav--next black-text\"\r\n        data-nav=\"1\"\r\n        aria-controls=\"date-picker-example_table\"\r\n        title=\"Next month\"\r\n        (click)=\"nextMonth($event)\"\r\n        (keydown.enter)=\"nextMonth($event)\"\r\n        [ngClass]=\"{\r\n          headerbtnenabled: !nextMonthDisabled,\r\n          headerbtndisabled: nextMonthDisabled,\r\n          'disabled grey-text': nextMonthDisabled\r\n        }\"\r\n      ></a>\r\n    </div>\r\n    <table class=\"picker__table\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"picker__weekday weekdaytitleweeknbr\"\r\n            *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n          >\r\n            #\r\n          </th>\r\n          <th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{ d }}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let w of dates\">\r\n          <td\r\n            class=\"picker__day daycellweeknbr\"\r\n            *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n          >\r\n            {{ w.weekNbr }}\r\n          </td>\r\n          <td\r\n            class=\"picker__day\"\r\n            *ngFor=\"let d of w.week\"\r\n            [ngClass]=\"{\r\n              'picker__day--infocus': d.cmo === currMonthId && !d.disabled,\r\n              disabled: d.disabled,\r\n              tablesingleday: d.cmo === currMonthId && !d.disabled\r\n            }\"\r\n          >\r\n            <div\r\n              *ngIf=\"d.markedDate.marked\"\r\n              class=\"markdate\"\r\n              [ngStyle]=\"{ 'background-color': d.markedDate.color }\"\r\n            ></div>\r\n            <div\r\n              class=\"picker__day\"\r\n              [ngClass]=\"{\r\n                'picker__day--infocus': d.cmo === currMonthId,\r\n                'picker__day--outfocus': d.cmo === nextMonthId || d.cmo === prevMonthId,\r\n                'picker__day--today': d.currDay && opts.markCurrentDay,\r\n                'picker__day--selected picker__day--highlighted':\r\n                  selectedDate.day === d.dateObj.day &&\r\n                  selectedDate.month === d.dateObj.month &&\r\n                  selectedDate.year === d.dateObj.year &&\r\n                  d.cmo === currMonthId\r\n              }\"\r\n              (click)=\"!d.disabled && cellClicked(d); $event.stopPropagation()\"\r\n              (keydown)=\"cellKeyDown($event, d)\"\r\n              tabindex=\"0\"\r\n            >\r\n              {{ d.dateObj.day }}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"picker__footer\">\r\n      <button\r\n        type=\"button\"\r\n        *ngIf=\"opts.showTodayBtn\"\r\n        class=\"picker__button--today\"\r\n        (click)=\"todayClicked()\"\r\n        role=\"button\"\r\n        [attr.aria-label]=\"opts.todayBtnTxt\"\r\n      >\r\n        {{ opts.todayBtnTxt }}\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        *ngIf=\"opts.showClearDateBtn\"\r\n        class=\"picker__button--clear\"\r\n        (click)=\"removeBtnClicked()\"\r\n        role=\"button\"\r\n        [attr.aria-label]=\"opts.clearBtnTxt\"\r\n      >\r\n        {{ opts.clearBtnTxt }}\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        [ngClass]=\"{ 'ml-auto': !opts.showTodayBtn }\"\r\n        class=\"picker__button--close\"\r\n        (click)=\"closeBtnClicked()\"\r\n        role=\"button\"\r\n        [attr.aria-label]=\"opts.closeBtnTxt\"\r\n      >\r\n        {{ opts.closeBtnTxt }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                providers: [UtilService, MYDP_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mdb-color.lighten-5{background-color:#d0d6e2!important}.mdb-color.lighten-4{background-color:#b1bace!important}.mdb-color.lighten-3{background-color:#929fba!important}.mdb-color.lighten-2{background-color:#7283a7!important}.mdb-color.lighten-1{background-color:#59698d!important}.mdb-color{background-color:#45526e!important}.mdb-color-text{color:#45526e!important}.rgba-mdb-color-slight,.rgba-mdb-color-slight:after{background-color:rgba(69,82,110,.1)}.rgba-mdb-color-light,.rgba-mdb-color-light:after{background-color:rgba(69,82,110,.3)}.rgba-mdb-color-strong,.rgba-mdb-color-strong:after{background-color:rgba(69,82,110,.7)}.mdb-color.darken-1{background-color:#3b465e!important}.mdb-color.darken-2{background-color:#2e3951!important}.mdb-color.darken-3{background-color:#1c2a48!important}.mdb-color.darken-4{background-color:#1c2331!important}.red.lighten-5{background-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important}.red{background-color:#f44336!important}.red-text{color:#f44336!important}.rgba-red-slight,.rgba-red-slight:after{background-color:rgba(244,67,54,.1)}.rgba-red-light,.rgba-red-light:after{background-color:rgba(244,67,54,.3)}.rgba-red-strong,.rgba-red-strong:after{background-color:rgba(244,67,54,.7)}.red.darken-1{background-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important}.red.accent-4{background-color:#d50000!important}.pink.lighten-5{background-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important}.pink{background-color:#e91e63!important}.pink-text{color:#e91e63!important}.rgba-pink-slight,.rgba-pink-slight:after{background-color:rgba(233,30,99,.1)}.rgba-pink-light,.rgba-pink-light:after{background-color:rgba(233,30,99,.3)}.rgba-pink-strong,.rgba-pink-strong:after{background-color:rgba(233,30,99,.7)}.pink.darken-1{background-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important}.pink.accent-4{background-color:#c51162!important}.purple.lighten-5{background-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important}.purple{background-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.rgba-purple-slight,.rgba-purple-slight:after{background-color:rgba(156,39,176,.1)}.rgba-purple-light,.rgba-purple-light:after{background-color:rgba(156,39,176,.3)}.rgba-purple-strong,.rgba-purple-strong:after{background-color:rgba(156,39,176,.7)}.purple.darken-1{background-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important}.deep-purple.lighten-5{background-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important}.deep-purple{background-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.rgba-deep-purple-slight,.rgba-deep-purple-slight:after{background-color:rgba(103,58,183,.1)}.rgba-deep-purple-light,.rgba-deep-purple-light:after{background-color:rgba(103,58,183,.3)}.rgba-deep-purple-strong,.rgba-deep-purple-strong:after{background-color:rgba(103,58,183,.7)}.deep-purple.darken-1{background-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important}.indigo.lighten-5{background-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important}.indigo{background-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.rgba-indigo-slight,.rgba-indigo-slight:after{background-color:rgba(63,81,181,.1)}.rgba-indigo-light,.rgba-indigo-light:after{background-color:rgba(63,81,181,.3)}.rgba-indigo-strong,.rgba-indigo-strong:after{background-color:rgba(63,81,181,.7)}.indigo.darken-1{background-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important}.blue.lighten-5{background-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important}.blue{background-color:#2196f3!important}.blue-text{color:#2196f3!important}.rgba-blue-slight,.rgba-blue-slight:after{background-color:rgba(33,150,243,.1)}.rgba-blue-light,.rgba-blue-light:after{background-color:rgba(33,150,243,.3)}.rgba-blue-strong,.rgba-blue-strong:after{background-color:rgba(33,150,243,.7)}.blue.darken-1{background-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important}.light-blue.lighten-5{background-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important}.light-blue{background-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.rgba-light-blue-slight,.rgba-light-blue-slight:after{background-color:rgba(3,169,244,.1)}.rgba-light-blue-light,.rgba-light-blue-light:after{background-color:rgba(3,169,244,.3)}.rgba-light-blue-strong,.rgba-light-blue-strong:after{background-color:rgba(3,169,244,.7)}.light-blue.darken-1{background-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important}.cyan.lighten-5{background-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important}.cyan{background-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.rgba-cyan-slight,.rgba-cyan-slight:after{background-color:rgba(0,188,212,.1)}.rgba-cyan-light,.rgba-cyan-light:after{background-color:rgba(0,188,212,.3)}.rgba-cyan-strong,.rgba-cyan-strong:after{background-color:rgba(0,188,212,.7)}.cyan.darken-1{background-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important}.cyan.darken-4{background-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important}.teal.lighten-5{background-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important}.teal{background-color:#009688!important}.teal-text{color:#009688!important}.rgba-teal-slight,.rgba-teal-slight:after{background-color:rgba(0,150,136,.1)}.rgba-teal-light,.rgba-teal-light:after{background-color:rgba(0,150,136,.3)}.rgba-teal-strong,.rgba-teal-strong:after{background-color:rgba(0,150,136,.7)}.teal.darken-1{background-color:#00897b!important}.teal.darken-2{background-color:#00796b!important}.teal.darken-3{background-color:#00695c!important}.teal.darken-4{background-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important}.green.lighten-5{background-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important}.green{background-color:#4caf50!important}.green-text{color:#4caf50!important}.rgba-green-slight,.rgba-green-slight:after{background-color:rgba(76,175,80,.1)}.rgba-green-light,.rgba-green-light:after{background-color:rgba(76,175,80,.3)}.rgba-green-strong,.rgba-green-strong:after{background-color:rgba(76,175,80,.7)}.green.darken-1{background-color:#43a047!important}.green.darken-2{background-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important}.green.accent-4{background-color:#00c853!important}.light-green.lighten-5{background-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important}.light-green{background-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.rgba-light-green-slight,.rgba-light-green-slight:after{background-color:rgba(139,195,74,.1)}.rgba-light-green-light,.rgba-light-green-light:after{background-color:rgba(139,195,74,.3)}.rgba-light-green-strong,.rgba-light-green-strong:after{background-color:rgba(139,195,74,.7)}.light-green.darken-1{background-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important}.lime.lighten-5{background-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important}.lime{background-color:#cddc39!important}.lime-text{color:#cddc39!important}.rgba-lime-slight,.rgba-lime-slight:after{background-color:rgba(205,220,57,.1)}.rgba-lime-light,.rgba-lime-light:after{background-color:rgba(205,220,57,.3)}.rgba-lime-strong,.rgba-lime-strong:after{background-color:rgba(205,220,57,.7)}.lime.darken-1{background-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important}.yellow.lighten-5{background-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important}.yellow{background-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.rgba-yellow-slight,.rgba-yellow-slight:after{background-color:rgba(255,235,59,.1)}.rgba-yellow-light,.rgba-yellow-light:after{background-color:rgba(255,235,59,.3)}.rgba-yellow-strong,.rgba-yellow-strong:after{background-color:rgba(255,235,59,.7)}.yellow.darken-1{background-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important}.amber.lighten-5{background-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important}.amber{background-color:#ffc107!important}.amber-text{color:#ffc107!important}.rgba-amber-slight,.rgba-amber-slight:after{background-color:rgba(255,193,7,.1)}.rgba-amber-light,.rgba-amber-light:after{background-color:rgba(255,193,7,.3)}.rgba-amber-strong,.rgba-amber-strong:after{background-color:rgba(255,193,7,.7)}.amber.darken-1{background-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important}.orange.lighten-5{background-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important}.orange{background-color:#ff9800!important}.orange-text{color:#ff9800!important}.rgba-orange-slight,.rgba-orange-slight:after{background-color:rgba(255,152,0,.1)}.rgba-orange-light,.rgba-orange-light:after{background-color:rgba(255,152,0,.3)}.rgba-orange-strong,.rgba-orange-strong:after{background-color:rgba(255,152,0,.7)}.orange.darken-1{background-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important}.deep-orange.lighten-5{background-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important}.deep-orange{background-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.rgba-deep-orange-slight,.rgba-deep-orange-slight:after{background-color:rgba(255,87,34,.1)}.rgba-deep-orange-light,.rgba-deep-orange-light:after{background-color:rgba(255,87,34,.3)}.rgba-deep-orange-strong,.rgba-deep-orange-strong:after{background-color:rgba(255,87,34,.7)}.deep-orange.darken-1{background-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important}.brown.lighten-5{background-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important}.brown{background-color:#795548!important}.brown-text{color:#795548!important}.rgba-brown-slight,.rgba-brown-slight:after{background-color:rgba(121,85,72,.1)}.rgba-brown-light,.rgba-brown-light:after{background-color:rgba(121,85,72,.3)}.rgba-brown-strong,.rgba-brown-strong:after{background-color:rgba(121,85,72,.7)}.brown.darken-1{background-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important}.blue-grey.lighten-5{background-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important}.blue-grey{background-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.rgba-blue-grey-slight,.rgba-blue-grey-slight:after{background-color:rgba(96,125,139,.1)}.rgba-blue-grey-light,.rgba-blue-grey-light:after{background-color:rgba(96,125,139,.3)}.rgba-blue-grey-strong,.rgba-blue-grey-strong:after{background-color:rgba(96,125,139,.7)}.blue-grey.darken-1{background-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important}.grey.lighten-5{background-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important}.grey{background-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.rgba-grey-slight,.rgba-grey-slight:after{background-color:rgba(158,158,158,.1)}.rgba-grey-light,.rgba-grey-light:after{background-color:rgba(158,158,158,.3)}.rgba-grey-strong,.rgba-grey-strong:after{background-color:rgba(158,158,158,.7)}.grey.darken-1{background-color:#757575!important}.grey.darken-2{background-color:#616161!important}.grey.darken-3{background-color:#424242!important}.grey.darken-4{background-color:#212121!important}.black{background-color:#000!important}.black-text{color:#000!important}.rgba-black-slight,.rgba-black-slight:after{background-color:rgba(0,0,0,.1)}.rgba-black-light,.rgba-black-light:after{background-color:rgba(0,0,0,.3)}.rgba-black-strong,.rgba-black-strong:after{background-color:rgba(0,0,0,.7)}.picker__box .picker__header .picker__select--month.browser-default,.picker__box .picker__header .picker__select--year.browser-default,.white{background-color:#fff!important}.picker__box .picker__header .picker__date-display,.picker__box .picker__table .picker--focused,.picker__box .picker__table .picker__day--outfocus,.picker__box .picker__table .picker__day--selected,.picker__box .picker__table .picker__day--selected:hover,.white-text{color:#fff!important}.rgba-white-slight,.rgba-white-slight:after{background-color:rgba(255,255,255,.1)}.rgba-white-light,.rgba-white-light:after{background-color:rgba(255,255,255,.3)}.rgba-white-strong,.rgba-white-strong:after{background-color:rgba(255,255,255,.7)}.rgba-stylish-slight{background-color:rgba(62,69,81,.1)}.rgba-stylish-light{background-color:rgba(62,69,81,.3)}.rgba-stylish-strong{background-color:rgba(62,69,81,.7)}.primary-color{background-color:#4285f4!important}.primary-color-dark{background-color:#0d47a1!important}.secondary-color{background-color:#a6c!important}.secondary-color-dark{background-color:#93c!important}.default-color{background-color:#2bbbad!important}.default-color-dark{background-color:#00695c!important}.info-color{background-color:#33b5e5!important}.info-color-dark{background-color:#09c!important}.success-color{background-color:#00c851!important}.success-color-dark{background-color:#007e33!important}.warning-color{background-color:#fb3!important}.warning-color-dark{background-color:#f80!important}.danger-color{background-color:#ff3547!important}.danger-color-dark{background-color:#c00!important}.elegant-color{background-color:#2e2e2e!important}.elegant-color-dark{background-color:#212121!important}.stylish-color{background-color:#4b515d!important}.stylish-color-dark{background-color:#3e4551!important}.unique-color{background-color:#3f729b!important}.unique-color-dark{background-color:#1c2331!important}.special-color{background-color:#37474f!important}.special-color-dark{background-color:#263238!important}.purple-gradient{background:linear-gradient(40deg,#ff6ec4,#7873f5)!important}.peach-gradient{background:linear-gradient(40deg,#ffd86f,#fc6262)!important}.aqua-gradient{background:linear-gradient(40deg,#2096ff,#05ffa3)!important}.blue-gradient{background:linear-gradient(40deg,#45cafc,#303f9f)!important}.purple-gradient-rgba{background:linear-gradient(40deg,rgba(255,110,196,.9),rgba(120,115,245,.9))!important}.peach-gradient-rgba{background:linear-gradient(40deg,rgba(255,216,111,.9),rgba(252,98,98,.9))!important}.aqua-gradient-rgba{background:linear-gradient(40deg,rgba(32,150,255,.9),rgba(5,255,163,.9))!important}.blue-gradient-rgba{background:linear-gradient(40deg,rgba(69,202,252,.9),rgba(48,63,159,.9))!important}.dark-grey-text,.dark-grey-text:focus,.dark-grey-text:hover{color:#4f4f4f!important}.hoverable{box-shadow:none;transition:.55s ease-in-out}.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);transition:.55s ease-in-out}.z-depth-0{box-shadow:none!important}.z-depth-1{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important}.z-depth-1-half{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)!important}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)!important}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)!important}.z-depth-4{box-shadow:0 16px 28px 0 rgba(0,0,0,.22),0 25px 55px 0 rgba(0,0,0,.21)!important}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,.2),0 40px 77px 0 rgba(0,0,0,.22)!important}.disabled,:disabled{pointer-events:none!important}a{cursor:pointer;text-decoration:none;color:#0275d8;transition:.2s ease-in-out}a:hover{text-decoration:none;color:#014c8c;transition:.2s ease-in-out}a.disabled:hover,a:disabled:hover{color:#0275d8}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}.picker__input{cursor:default}.picker__input.picker__input--active{border-color:#0089ec}.picker{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;/*!\n   * Default mobile-first, responsive styling for pickadate.js\n   * Demo: http://amsul.github.io/pickadate.js\n   */z-index:90;font-size:15px;text-align:left;line-height:1.2;color:#000;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker .picker__holder{width:100%;overflow-scrolling:touch;position:fixed;transition:background .15s ease-out,top .15s;-webkit-backface-visibility:hidden;backface-visibility:hidden}.picker .picker__frame,.picker .picker__holder{bottom:0;left:0;right:0;top:100%}.picker .picker__frame{position:absolute;margin:0 auto;min-width:16rem;max-width:20.3125rem;width:18.75rem;max-height:21.875rem;opacity:0;transition:.15s ease-out}@media (min-height:40.125em){.picker .picker__frame{margin-bottom:7.5%}}.picker .picker__frame .picker__wrap{display:table;width:100%;height:100%}.picker .picker__box{background:#fff;display:table-cell;vertical-align:middle}@media (min-height:28.875em){.picker .picker__frame{overflow:visible;top:auto;bottom:-100%;max-height:80%}.picker .picker__frame .picker__wrap{display:block}.picker .picker__box{display:block;border:1px solid #777;border-top-color:#898989;border-bottom-width:0;border-radius:5px 5px 0 0;box-shadow:0 .75rem 2.25rem 1rem rgba(0,0,0,.24)}}.picker--opened .picker__holder{top:0;background:rgba(0,0,0,.32);zoom:1;transition:background .15s ease-out}.picker--opened .picker__frame{top:0;opacity:1}@media (min-height:35.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.datepicker.picker__input.picker__input--active,.timepicker.picker__input.picker__input--active{border-bottom:1px solid #e3f2fd}.picker__box{padding:0;border-radius:.125rem;overflow:hidden}.picker__box .picker__header{text-align:center;position:relative;margin-bottom:1.25rem}.picker__box .picker__header select{display:inline-block!important}.picker__box .picker__header .picker__date-display{display:flex;justify-content:center;background-color:#4285f4;font-weight:400;padding-bottom:.3125rem}.picker__box .picker__header .picker__date-display .picker__weekday-display{padding:.875rem .4375rem .3125rem .5rem;letter-spacing:.5;font-size:2.1rem;margin-top:1.25rem}.picker__box .picker__header .picker__date-display .picker__day-display,.picker__box .picker__header .picker__date-display .picker__month-display{font-size:2.1rem;padding:.875rem .3125rem .25rem;margin-top:1.25rem}.picker__box .picker__header .picker__date-display .picker__year-display{font-size:1.1rem;color:rgba(255,255,255,.4);position:absolute;top:.625rem;left:45%}.picker__box .picker__header .picker__month,.picker__box .picker__header .picker__year{display:inline-block;margin-left:.25em;margin-right:.25em}.picker__box .picker__header .picker__select--month,.picker__box .picker__header .picker__select--year{height:2em;padding:0;margin-left:.25em;margin-right:.25em;display:inline-block;border:none;background:0 0;border-bottom:1px solid #ced4da;outline:0}.picker__box .picker__header .picker__select--month:focus,.picker__box .picker__header .picker__select--year:focus{border-color:rgba(0,0,0,.05)}.picker__box .picker__header .picker__select--year{width:30%}.picker__box .picker__header .picker__select--month.browser-default{display:inline;width:40%}.picker__box .picker__header .picker__select--year.browser-default{display:inline;width:25%}.picker__box .picker__header .picker__nav--next,.picker__box .picker__header .picker__nav--prev{position:absolute;padding:.1875rem .625rem;box-sizing:content-box}.picker__box .picker__header .picker__nav--next:hover,.picker__box .picker__header .picker__nav--prev:hover{cursor:pointer;color:#000}.picker__box .picker__header .picker__nav--prev{left:-.5em;padding-right:1.25em}.picker__box .picker__header .picker__nav--prev:before{content:'\\f104'}.picker__box .picker__header .picker__nav--next{right:-.2em;padding-left:1.25em}.picker__box .picker__header .picker__nav--next:before{content:'\\f105'}.picker__box .picker__header .picker__nav--disabled,.picker__box .picker__header .picker__nav--disabled:before,.picker__box .picker__header .picker__nav--disabled:before:hover,.picker__box .picker__header .picker__nav--disabled:hover{cursor:default;background:0 0;border-right-color:#f5f5f5;border-left-color:#f5f5f5}.picker__box .picker__table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:1rem;width:100%;margin-top:.75em;margin-bottom:.5em}.picker__box .picker__table td,.picker__box .picker__table th{text-align:center}.picker__box .picker__table td{margin:0;padding:0}.picker__box .picker__table .picker__weekday{width:14%;font-size:.9em;padding-bottom:.25em;color:#999;font-weight:500}@media (min-height:33.875em){.picker__box .picker__table .picker__weekday{padding-bottom:.25em}}.picker__box .picker__table .picker__day--today{position:relative;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__box .picker__table .picker__day.picker__day--today{color:#4285f4}.picker__box .picker__table .picker__day--disabled:before{border-top-color:#aaa}.picker__box .picker__table .picker__day--infocus{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:#595959}.picker__box .picker__table .picker__day--infocus:hover{cursor:pointer;color:#000;font-weight:500}.picker__box .picker__table .picker__day--outfocus{display:none;padding:.75rem 0}.picker__box .picker__table .picker__day--outfocus:hover{cursor:pointer;color:#ddd;font-weight:500}.picker__box .picker__table .picker--focused .picker__day--highlighted,.picker__box .picker__table .picker__day--highlighted:hover{cursor:pointer}.picker__box .picker__table .picker--focused,.picker__box .picker__table .picker__day--selected,.picker__box .picker__table .picker__day--selected:hover{border-radius:50%;-webkit-transform:scale(.9);transform:scale(.9);background-color:#4285f4;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.picker__box .picker__table .picker--focused.picker__day--outfocus,.picker__box .picker__table .picker__day--selected.picker__day--outfocus,.picker__box .picker__table .picker__day--selected:hover.picker__day--outfocus{background-color:#ecf2fc}.picker__box .picker__table .picker--focused,.picker__box .picker__table .picker__day--disabled,.picker__box .picker__table .picker__day--disabled:hover{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default}.picker__box .picker__table .picker__day--highlighted.picker__day--disabled,.picker__box .picker__table .picker__day--highlighted.picker__day--disabled:hover{background:#bbb}.picker__box .picker__footer{text-align:right;padding:.3125rem .625rem;display:flex;align-items:center;justify-content:space-between}.picker__box .picker__footer .picker__button--clear,.picker__box .picker__footer .picker__button--close,.picker__box .picker__footer .picker__button--today{border:1px solid #fff;background:#fff;font-size:.8em;padding:1rem 0 .7rem;font-weight:700;width:33%;display:inline-block;vertical-align:bottom;text-transform:uppercase}.picker__box .picker__footer .picker__button--clear:hover,.picker__box .picker__footer .picker__button--close:hover,.picker__box .picker__footer .picker__button--today:hover{cursor:pointer;color:#000;background:#b1dcfb;border-bottom-color:#b1dcfb}.picker__box .picker__footer .picker__button--clear:focus,.picker__box .picker__footer .picker__button--close:focus,.picker__box .picker__footer .picker__button--today:focus{background:#b1dcfb;border-color:rgba(0,0,0,.05);outline:0}.picker__box .picker__footer .picker__button--clear:before,.picker__box .picker__footer .picker__button--close:before,.picker__box .picker__footer .picker__button--today:before{position:relative;display:inline-block;height:0}.picker__box .picker__footer .picker__button--clear:before,.picker__box .picker__footer .picker__button--today:before{content:' ';margin-right:.45em}.picker__box .picker__footer .picker__button--today:before{top:-.05em;width:0;border-top:.66em solid #0059bc;border-left:.66em solid transparent}.picker__box .picker__footer .picker__button--clear:before{top:-.25em;width:.66em;border-top:3px solid #e20}.picker__box .picker__footer .picker__button--close:before{content:'\\D7';top:-.1em;vertical-align:top;font-size:1.1em;margin-right:.35em;color:#777}.picker__box .picker__footer .picker__button--today[disabled],.picker__box .picker__footer .picker__button--today[disabled]:hover{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default}.picker__box .picker__footer .picker__button--today[disabled]:before{border-top-color:#aaa}.picker__calendar-container{padding:0 1rem}.picker__calendar-container thead{border:none}.picker__select--month,.picker__select--year{display:inline-block!important;height:2em;padding:0;margin-left:.25em;margin-right:.25em}.picker .picker__holder{overflow-y:visible;display:none}.picker.picker--opened .picker__holder{display:block}.picker__box .picker__table td.picker__day div.picker__day{border-radius:50%}.picker__day-display,.picker__month-display,.picker__weekday-display{font-size:2rem!important}.clockpicker-am-pm-block button{color:#fff!important}.mydp{line-height:1.1;display:inline-block;position:relative;border-radius:4px}.mydp label{-webkit-transform:translateY(15px);transform:translateY(15px)}.mydp label.active{font-size:.8rem;-webkit-transform:translateY(-7px);transform:translateY(-7px)}.picker__frame{min-height:506.45px}.picker__nav--next,.picker__nav--prev{position:absolute;padding:.5em 1.55em;width:1em;height:1em;box-sizing:content-box;bottom:0;border:0;background:0 0}.picker__nav--next:before,.picker__nav--prev:before{font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important}.picker__nav--prev{padding-right:1.25em;left:0!important}.picker__nav--next{right:-1em;padding-left:1.25em}.picker__box .picker__header .picker__nav--next:before,.picker__box .picker__header .picker__nav--prev:before{font-family:unset;font-weight:unset;content:unset;display:none}.picker__box .picker__header .picker__nav--next:after,.picker__box .picker__header .picker__nav--prev:after{content:'';display:block;border-style:solid;border-width:0 2px 2px 0;padding:2.5px;position:absolute}.picker__nav--prev::after{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.picker__nav--next::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.picker__header{overflow:hidden}.picker__box .picker__table td.picker__day{padding:0;position:relative}.picker__box .picker__table td.picker__day.disabled{color:#ccc;background:#eee}.picker__box .picker__table td.picker__day div.picker__day{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent;outline:0;transition:.3s}.picker__box .picker__table td.picker__day div.picker__day:focus,.picker__box .picker__table td.picker__day div.picker__day:hover{cursor:pointer;color:#000;font-weight:500}.picker__box .picker__table td.picker__day div.picker__day.picker__day--today{color:#4285f4}.mydp .markdate{position:absolute;width:5px;height:5px;border-radius:50%;top:2px;right:2px}@media (max-height:35.875em){.picker--opened .picker__holder{overflow-y:scroll}}.validate-success.ng-valid .mydp-date{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}.validate-success.ng-valid .mydp label{color:#00c851!important}.form-submitted .validate-error.ng-invalid .mydp-date,.validate-error.ng-invalid.ng-touched .mydp-date{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.form-submitted .validate-error.ng-invalid .mydp label,.validate-error.ng-invalid.ng-touched .mydp label{color:#f44336!important}.md-form mdb-date-picker .md-form{margin:0}.datepicker-inline-icon{position:absolute;top:5px;right:0;padding:.5rem}.md-outline>.datepicker-inline-icon{top:4px}.datepicker-inline{position:absolute}.datepicker-inline .picker__header{padding:.3125rem .625rem}.datepicker-inline .picker__nav--next,.datepicker-inline .picker__nav--prev{bottom:unset!important}.datepicker-inline .picker__frame{min-height:unset!important;max-height:unset!important;position:unset!important;margin:unset;border:0}"]
            }] }
];
/** @nocollapse */
MDBDatePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LocaleService },
    { type: UtilService },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MDB_DATE_OPTIONS,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
    outlineInput: [{ type: Input }],
    inline: [{ type: Input }],
    inlineIcon: [{ type: Input }],
    id: [{ type: Input }],
    dateChanged: [{ type: Output }],
    inputFieldChanged: [{ type: Output }],
    calendarViewChanged: [{ type: Output }],
    calendarToggle: [{ type: Output }],
    inputFocusBlur: [{ type: Output }],
    closeButtonClicked: [{ type: Output }],
    clearButtonClicked: [{ type: Output }],
    todayButtonClicked: [{ type: Output }],
    divFocus: [{ type: ViewChild, args: ['divFocus', { static: false },] }],
    inlineInput: [{ type: ViewChild, args: ['inlineInput', { static: false },] }],
    inlineIconToggle: [{ type: ViewChild, args: ['inlineIconToggle', { static: false },] }],
    pickerFrame: [{ type: ViewChild, args: ['pickerFrame', { static: false },] }]
};
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
    MDBDatePickerComponent.prototype.outlineInput;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inline;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inlineIcon;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype._id;
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
    MDBDatePickerComponent.prototype.inlineInput;
    /** @type {?} */
    MDBDatePickerComponent.prototype.inlineIconToggle;
    /** @type {?} */
    MDBDatePickerComponent.prototype.pickerFrame;
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
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype._uid;
    /** @type {?} */
    MDBDatePickerComponent.prototype.isOpen;
    /** @type {?} */
    MDBDatePickerComponent.prototype.isDisabled;
    /** @type {?} */
    MDBDatePickerComponent.prototype.tmp;
    /** @type {?} */
    MDBDatePickerComponent.prototype.opts;
    /** @type {?} */
    MDBDatePickerComponent.prototype.months;
    /** @type {?} */
    MDBDatePickerComponent.prototype.years;
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
    MDBDatePickerComponent.prototype.documentClickFun;
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
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype._globalOptions;
    /**
     * @type {?}
     * @private
     */
    MDBDatePickerComponent.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2RhdGUtcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBRVQsV0FBVyxFQUNYLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFnQnpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBRXBFLE1BQU0sT0FBTyxtQkFBbUIsR0FBUTtJQUN0QyxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7SUFDckQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7O0lBR0MsT0FBUTtJQUNSLGlCQUFrQjtJQUNsQixnQkFBaUI7SUFDakIsa0JBQW1COzs7Ozs7OztJQUluQixTQUFVO0lBQ1YsU0FBVTs7Ozs7O0lBSVYsUUFBUztJQUNULE9BQVE7Ozs7OztJQUlSLE9BQVEsS0FBSztJQUNi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LDhDQUE0Qjs7SUFDNUIsMENBQXdCOztJQUN4Qiw2Q0FBMkI7O0lBRTNCLG1EQUFpQzs7SUFDakMsbURBQWlDOztJQUNqQyxrREFBZ0M7O0lBQ2hDLGtEQUFnQzs7SUFFaEMsNkNBQTBDOztJQUMxQyw2Q0FBMEM7O0lBQzFDLDZDQUEwQzs7Ozs7SUFFMUMsc0NBQThDOztJQUU5Qyx3Q0FBZTs7SUFDZiw0Q0FBbUI7O0lBRW5CLHFDQUlFOztJQUdGLHNDQXlDRTs7SUFFRix3Q0FBd0I7O0lBQ3hCLHVDQUF1Qjs7SUFDdkIsK0NBQTBCOztJQUUxQixzREFBNEI7O0lBQzVCLG1EQUE4Qjs7SUFDOUIsMENBQXFCOztJQUNyQiwyQ0FBdUI7O0lBRXZCLGtEQUEyQjs7SUFxRTNCLDRDQUF3Qzs7SUFDeEMsNkNBQW1DOztJQW5FakMsc0NBQXVCOzs7OztJQUN2QiwwQ0FBMkI7Ozs7O0lBQzNCLCtDQUFvQzs7Ozs7SUFDcEMsNkNBQWdDOzs7OztJQUNoQyx1Q0FBZ0M7Ozs7O0lBQ2hDLGdEQUF3RTs7Ozs7SUFDeEUsMENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU15TG9jYWxlcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9sb2NhbGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIFJlbmRlcmVyMixcclxuICBmb3J3YXJkUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFBMQVRGT1JNX0lELFxyXG4gIEluamVjdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBPcHRpb25hbCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1xyXG4gIElNeURhdGUsXHJcbiAgSU15RGF0ZVJhbmdlLFxyXG4gIElNeU1vbnRoLFxyXG4gIElNeUNhbGVuZGFyRGF5LFxyXG4gIElNeVdlZWssXHJcbiAgSU15RGF5TGFiZWxzLFxyXG4gIElNeU1vbnRoTGFiZWxzLFxyXG4gIElNeUlucHV0RmllbGRDaGFuZ2VkLFxyXG4gIElNeUNhbGVuZGFyVmlld0NoYW5nZWQsXHJcbiAgSU15SW5wdXRGb2N1c0JsdXIsXHJcbiAgSU15TWFya2VkRGF0ZXMsXHJcbiAgSU15TWFya2VkRGF0ZSxcclxuICBJTXlPcHRpb25zLFxyXG59IGZyb20gJy4vaW50ZXJmYWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGVwaWNrZXJMb2NhbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRlcGlja2VyVXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTURCX0RBVEVfT1BUSU9OUyB9IGZyb20gJy4vb3B0aW9ucy50b2tlbic7XHJcbmltcG9ydCB7IEVOVEVSLCBTUEFDRSB9IGZyb20gJy4uLy4uL2ZyZWUvdXRpbHMva2V5Ym9hcmQtbmF2aWdhdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgTVlEUF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTURCRGF0ZVBpY2tlckNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWUsXHJcbn07XHJcblxyXG5lbnVtIENhbFRvZ2dsZSB7XHJcbiAgT3BlbiA9IDEsXHJcbiAgQ2xvc2VCeURhdGVTZWwgPSAyLFxyXG4gIENsb3NlQnlDYWxCdG4gPSAzLFxyXG4gIENsb3NlQnlPdXRDbGljayA9IDQsXHJcbn1cclxuXHJcbmVudW0gWWVhciB7XHJcbiAgbWluID0gMTAwMCxcclxuICBtYXggPSA5OTk5LFxyXG59XHJcblxyXG5lbnVtIElucHV0Rm9jdXNCbHVyIHtcclxuICBmb2N1cyA9IDEsXHJcbiAgYmx1ciA9IDIsXHJcbn1cclxuXHJcbmVudW0gS2V5Q29kZSB7XHJcbiAgZW50ZXIgPSBFTlRFUixcclxuICBzcGFjZSA9IFNQQUNFLFxyXG59XHJcblxyXG5lbnVtIE1vbnRoSWQge1xyXG4gIHByZXYgPSAxLFxyXG4gIGN1cnIgPSAyLFxyXG4gIG5leHQgPSAzLFxyXG59XHJcblxyXG5sZXQgdW5pcXVlSWQgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZGItZGF0ZS1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnbWRiZGF0ZXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGFwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtcGlja2VyLW1vZHVsZS5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbVXRpbFNlcnZpY2UsIE1ZRFBfVkFMVUVfQUNDRVNTT1JdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNREJEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgdGFiSW5kZXg6IGFueTtcclxuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVmYXVsdE1vbnRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VsRGF0ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBzZWxlY3RvcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9wZW5PbkZvY3VzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBvdXRsaW5lSW5wdXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbmxpbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbmxpbmVJY29uID0gJ2ZhciBmYS1jYWxlbmRhci1hbHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBpZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2lkID0gdmFsdWUgfHwgdGhpcy5fdWlkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dEZpZWxkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUlucHV0RmllbGRDaGFuZ2VkPiA9IG5ldyBFdmVudEVtaXR0ZXI8XHJcbiAgICBJTXlJbnB1dEZpZWxkQ2hhbmdlZFxyXG4gID4oKTtcclxuICBAT3V0cHV0KCkgY2FsZW5kYXJWaWV3Q2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyVmlld0NoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIElNeUNhbGVuZGFyVmlld0NoYW5nZWRcclxuICA+KCk7XHJcbiAgQE91dHB1dCgpIGNhbGVuZGFyVG9nZ2xlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dEZvY3VzQmx1cjogRXZlbnRFbWl0dGVyPElNeUlucHV0Rm9jdXNCbHVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8SU15SW5wdXRGb2N1c0JsdXI+KCk7XHJcbiAgQE91dHB1dCgpIGNsb3NlQnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPE1EQkRhdGVQaWNrZXJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIE1EQkRhdGVQaWNrZXJDb21wb25lbnRcclxuICA+KCk7XHJcbiAgQE91dHB1dCgpIGNsZWFyQnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPE1EQkRhdGVQaWNrZXJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIE1EQkRhdGVQaWNrZXJDb21wb25lbnRcclxuICA+KCk7XHJcbiAgQE91dHB1dCgpIHRvZGF5QnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPE1EQkRhdGVQaWNrZXJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIE1EQkRhdGVQaWNrZXJDb21wb25lbnRcclxuICA+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RpdkZvY3VzJywgeyBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBkaXZGb2N1czogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ2lubGluZUlucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBpbmxpbmVJbnB1dDogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ2lubGluZUljb25Ub2dnbGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIGlubGluZUljb25Ub2dnbGU6IGFueTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGlja2VyRnJhbWUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcGlja2VyRnJhbWU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHB1YmxpYyBpc0RhdGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBsYWJlbEFjdGl2ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICBwdWJsaWMgdmlzaWJsZU1vbnRoOiBJTXlNb250aCA9IHsgbW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMSB9O1xyXG4gIHB1YmxpYyBzZWxlY3RlZE1vbnRoOiBJTXlNb250aCA9IHsgbW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMCB9O1xyXG4gIHB1YmxpYyBzZWxlY3RlZERhdGU6IElNeURhdGUgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfTtcclxuICBwdWJsaWMgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBwdWJsaWMgZGF0ZXM6IEFycmF5PElNeVdlZWs+ID0gW107XHJcbiAgcHVibGljIHNlbGVjdGlvbkRheVR4dCA9ICcnO1xyXG4gIHB1YmxpYyBpbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBkaXNhYmxlVG9kYXlCdG4gPSBmYWxzZTtcclxuICBwdWJsaWMgZGF5SWR4ID0gMDtcclxuICBwdWJsaWMgd2Vla0RheU9wdHM6IEFycmF5PHN0cmluZz4gPSBbJ3N1JywgJ21vJywgJ3R1JywgJ3dlJywgJ3RoJywgJ2ZyJywgJ3NhJ107XHJcblxyXG4gIHB1YmxpYyBlZGl0TW9udGggPSBmYWxzZTtcclxuICBwdWJsaWMgaW52YWxpZE1vbnRoID0gZmFsc2U7XHJcbiAgcHVibGljIGVkaXRZZWFyID0gZmFsc2U7XHJcbiAgcHVibGljIGludmFsaWRZZWFyID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBwcmV2TW9udGhEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBuZXh0TW9udGhEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBwcmV2WWVhckRpc2FibGVkID0gZmFsc2U7XHJcbiAgcHVibGljIG5leHRZZWFyRGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHByZXZNb250aElkOiBudW1iZXIgPSBNb250aElkLnByZXY7XHJcbiAgcHVibGljIGN1cnJNb250aElkOiBudW1iZXIgPSBNb250aElkLmN1cnI7XHJcbiAgcHVibGljIG5leHRNb250aElkOiBudW1iZXIgPSBNb250aElkLm5leHQ7XHJcblxyXG4gIHByaXZhdGUgX3VpZCA9IGBtZGItZGF0ZXBpY2tlci0ke3VuaXF1ZUlkKyt9YDtcclxuXHJcbiAgaXNPcGVuID0gZmFsc2U7XHJcbiAgaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdG1wOiBJTXlEYXRlID0ge1xyXG4gICAgeWVhcjogdGhpcy5nZXRUb2RheSgpLnllYXIsXHJcbiAgICBtb250aDogdGhpcy5nZXRUb2RheSgpLm1vbnRoLFxyXG4gICAgZGF5OiB0aGlzLmdldFRvZGF5KCkuZGF5LFxyXG4gIH07XHJcblxyXG4gIC8vIERlZmF1bHQgb3B0aW9uc1xyXG4gIHB1YmxpYyBvcHRzOiBhbnkgPSB7XHJcbiAgICBzdGFydERhdGU6IDxhbnk+JycsXHJcbiAgICBjbG9zZUFmdGVyU2VsZWN0OiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIGRheUxhYmVsc0Z1bGw6IDxJTXlEYXlMYWJlbHM+e30sXHJcbiAgICBkYXlMYWJlbHM6IDxJTXlEYXlMYWJlbHM+e30sXHJcbiAgICBtb250aExhYmVsc0Z1bGw6IDxJTXlNb250aExhYmVscz57fSxcclxuICAgIG1vbnRoTGFiZWxzOiA8SU15TW9udGhMYWJlbHM+e30sXHJcbiAgICBkYXRlRm9ybWF0OiA8c3RyaW5nPicnLFxyXG4gICAgc2hvd1RvZGF5QnRuOiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgdG9kYXlCdG5UeHQ6IDxzdHJpbmc+JycsXHJcbiAgICBmaXJzdERheU9mV2VlazogPHN0cmluZz4nJyxcclxuICAgIHN1bkhpZ2hsaWdodDogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIG1hcmtDdXJyZW50RGF5OiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgZGlzYWJsZVVudGlsOiA8SU15RGF0ZT57IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfSxcclxuICAgIGRpc2FibGVTaW5jZTogPElNeURhdGU+eyB5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwIH0sXHJcbiAgICBkaXNhYmxlRGF5czogPEFycmF5PElNeURhdGUgfCBudW1iZXI+PltdLFxyXG4gICAgZW5hYmxlRGF5czogPEFycmF5PElNeURhdGUgfCBudW1iZXI+PltdLFxyXG4gICAgZWRpdGFibGVEYXRlRmllbGQ6IDxib29sZWFuPnRydWUsXHJcbiAgICBtYXJrRGF0ZXM6IDxBcnJheTxJTXlNYXJrZWREYXRlcz4+W10sXHJcbiAgICBtYXJrV2Vla2VuZHM6IDxJTXlNYXJrZWREYXRlPnt9LFxyXG4gICAgZGlzYWJsZURhdGVSYW5nZXM6IDxBcnJheTxJTXlEYXRlUmFuZ2U+PltdLFxyXG4gICAgZGlzYWJsZVdlZWtlbmRzOiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIHNob3dXZWVrTnVtYmVyczogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBoZWlnaHQ6IDxzdHJpbmc+JzMycHgnLFxyXG4gICAgd2lkdGg6IDxzdHJpbmc+JzEwMCUnLFxyXG4gICAgc2VsZWN0aW9uVHh0Rm9udFNpemU6IDxzdHJpbmc+JzFyZW0nLFxyXG4gICAgc2hvd0NsZWFyRGF0ZUJ0bjogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIGFsaWduU2VsZWN0b3JSaWdodDogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBkaXNhYmxlSGVhZGVyQnV0dG9uczogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIG1pblllYXI6IDxudW1iZXI+WWVhci5taW4sXHJcbiAgICBtYXhZZWFyOiA8bnVtYmVyPlllYXIubWF4LFxyXG4gICAgY29tcG9uZW50RGlzYWJsZWQ6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgc2hvd1NlbGVjdG9yQXJyb3c6IDxib29sZWFuPnRydWUsXHJcbiAgICB1c2VEYXRlT2JqZWN0OiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIGFyaWFMYWJlbElucHV0RmllbGQ6IDxzdHJpbmc+J0RhdGUgaW5wdXQgZmllbGQnLFxyXG4gICAgYXJpYUxhYmVsQ2xlYXJEYXRlOiA8c3RyaW5nPidDbGVhciBEYXRlJyxcclxuICAgIGFyaWFMYWJlbE9wZW5DYWxlbmRhcjogPHN0cmluZz4nT3BlbiBDYWxlbmRhcicsXHJcbiAgICBhcmlhTGFiZWxQcmV2TW9udGg6IDxzdHJpbmc+J1ByZXZpb3VzIE1vbnRoJyxcclxuICAgIGFyaWFMYWJlbE5leHRNb250aDogPHN0cmluZz4nTmV4dCBNb250aCcsXHJcbiAgICBhcmlhTGFiZWxQcmV2WWVhcjogPHN0cmluZz4nUHJldmlvdXMgWWVhcicsXHJcbiAgICBhcmlhTGFiZWxOZXh0WWVhcjogPHN0cmluZz4nTmV4dCBZZWFyJyxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgbW9udGhzOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgeWVhcnM6IGFueSA9IFtdO1xyXG4gIHB1YmxpYyBlbGVtZW50TnVtYmVyOiBhbnk7XHJcblxyXG4gIGZpcnN0VGltZU9wZW5lZE1vZGFsID0gdHJ1ZTtcclxuICBtb2RhbEhlaWdodEJlZm9yZTogYW55ID0gbnVsbDtcclxuICBpc01vYmlsZTogYW55ID0gbnVsbDtcclxuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xyXG5cclxuICBkb2N1bWVudENsaWNrRnVuOiBGdW5jdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbTogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbG9jYWxlU2VydmljZTogTG9jYWxlU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1EQl9EQVRFX09QVElPTlMpIHByaXZhdGUgX2dsb2JhbE9wdGlvbnM6IElNeU9wdGlvbnMsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XHJcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5pc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICByZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RvciAmJlxyXG4gICAgICAgIGV2ZW50LnRhcmdldCAmJlxyXG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcclxuICAgICAgICAhdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xpY2tlZCgpO1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeU91dENsaWNrKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGlja2VyX19ob2xkZXInKSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VCdG5DbGlja2VkKCk7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRydWUgJiYgZXZlbnQudGFyZ2V0ICYmIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICB0aGlzLnJlc2V0TW9udGhZZWFyRWRpdCgpO1xyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaWQgPSB0aGlzLmlkO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMub3B0cy5zdGFydERhdGUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0cy5zdGFydERhdGUudG9TdHJpbmcoKS5pbmRleE9mKCdUJykgIT09IC0xKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMub3B0cy5zdGFydERhdGUudG9TdHJpbmcoKS5pbmRleE9mKCdUJyk7XHJcbiAgICAgICAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLm9wdHMuc3RhcnREYXRlLnRvU3RyaW5nKCkuc3Vic3RyKDAsIGluZGV4KTtcclxuICAgICAgICAgIHRoaXMub25Vc2VyRGF0ZUlucHV0KHN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIENoYW5nZVpJbmRleCgpIHtcclxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBGaXggZm9yIHZpc2libGUgZGF0ZSAvIHRpbWUgcGlja2VyIGlucHV0IHdoZW4gcGlja2VyIHBsYXRlIGlzIHZpc2libGUuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IG9wZW5lZFBpY2tlcjogYW55ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGlja2VyLS1vcGVuZWQnKTtcclxuICAgICAgICAgIGNvbnN0IGFsbFBpY2tlcnM6IGFueSA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpY2tlcicpO1xyXG4gICAgICAgICAgYWxsUGlja2Vycy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnei1pbmRleCcsICcwJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vIENoYW5nZSB6LWluZGV4IGZyb20gMTAwIHRvIDEwMzEgPT4gRml4IGZvciBwcm9ibGVtXHJcbiAgICAgICAgICAvLyB3aGVuIGlubGluZSBkYXRlcGlja2VyIHdhcyByZW5kZXJlZCBiZWxvdyBmb290ZXIgd2l0aCAuZml4ZWQtYm90dG9tIGNsYXNzXHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG9wZW5lZFBpY2tlciwgJ3otaW5kZXgnLCAnMTAzMScpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlQ2I6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuICBvblRvdWNoZWRDYjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICBpZiAodGhpcy5pbmxpbmUpIHtcclxuICAgICAgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmlubGluZUljb24gKz0gJyBkaXNhYmxlZCBncmV5LXRleHQnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHRvID0gdGhpcy5pbmxpbmVJY29uLmluZGV4T2YoJ2Rpc2FibGVkJyk7XHJcbiAgICAgICAgdGhpcy5pbmxpbmVJY29uID0gdGhpcy5pbmxpbmVJY29uLnN1YnN0cigwLCB0byk7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVJbmxpbmVTdHlsZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1jb250ZW50JykpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LFxyXG4gICAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgICAgJ2hlaWdodCAwLjNzJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9XHJcbiAgICAgICAgICB0aGlzLm1vZGFsSGVpZ2h0QmVmb3JlICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgKHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIGFueSkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XHJcbiAgICB9LCAxNTUpO1xyXG4gICAgdGhpcy5sYWJlbEFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2V0TG9jYWxlT3B0aW9ucygpOiB2b2lkIHtcclxuICAgIGNvbnN0IG9wdHM6IGFueSA9IHRoaXMubG9jYWxlU2VydmljZS5nZXRMb2NhbGVPcHRpb25zKHRoaXMubG9jYWxlKTtcclxuICAgIE9iamVjdC5rZXlzKG9wdHMpLmZvckVhY2goayA9PiB7XHJcbiAgICAgIHRoaXMub3B0c1trXSA9IG9wdHNba107XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZExvY2FsZShsb2NhbGU6IElNeUxvY2FsZXMpIHtcclxuICAgIHRoaXMubG9jYWxlU2VydmljZS5sb2NhbGVzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5sb2NhbGVTZXJ2aWNlLmxvY2FsZXMsIGxvY2FsZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCB0aGlzWWVhciA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IHRoaXNZZWFyLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZ2xvYmFsT3B0aW9ucywgdGhpcy5vcHRpb25zKTtcclxuXHJcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChrID0+IHtcclxuICAgICAgICB0aGlzLm9wdHNba10gPSBvcHRpb25zW2tdO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5vcHRzLmNvbXBvbmVudERpc2FibGVkID0gdGhpcy5kaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRzLm1pblllYXIgPT09IDEwMDApIHtcclxuICAgICAgdGhpcy5vcHRzLm1pblllYXIgPSBjdXJyZW50WWVhciAtIDc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3B0cy5tYXhZZWFyID09PSA5OTk5KSB7XHJcbiAgICAgIHRoaXMub3B0cy5tYXhZZWFyID0gY3VycmVudFllYXIgKyA3O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXRNb250aFllYXJFZGl0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0TW9udGggPSBmYWxzZTtcclxuICAgIHRoaXMuZWRpdFllYXIgPSBmYWxzZTtcclxuICAgIHRoaXMuaW52YWxpZE1vbnRoID0gZmFsc2U7XHJcbiAgICB0aGlzLmludmFsaWRZZWFyID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBvblVzZXJEYXRlSW5wdXQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHRoaXMudXRpbFNlcnZpY2UuaXNEYXRlVmFsaWQoXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRhdGVGb3JtYXQsXHJcbiAgICAgICAgdGhpcy5vcHRzLm1pblllYXIsXHJcbiAgICAgICAgdGhpcy5vcHRzLm1heFllYXIsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICB0aGlzLm9wdHMubW9udGhMYWJlbHMsXHJcbiAgICAgICAgdGhpcy5vcHRzLmVuYWJsZURheXNcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGRhdGUpKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKGRhdGUpO1xyXG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZU1vbnRoKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmludmFsaWREYXRlKSB7XHJcbiAgICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgIGRhdGVGb3JtYXQ6IHRoaXMub3B0cy5kYXRlRm9ybWF0LFxyXG4gICAgICAgIHZhbGlkOiAhKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB0aGlzLmludmFsaWREYXRlKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VDYignJyk7XHJcbiAgICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRm9jdXNJbnB1dChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcGVuT25Gb2N1cyAmJiAhdGhpcy5pc09wZW4pIHtcclxuICAgICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXRGb2N1c0JsdXIuZW1pdCh7IHJlYXNvbjogSW5wdXRGb2N1c0JsdXIuZm9jdXMsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgICBpZiAoIXRoaXMuaW5saW5lKSB7XHJcbiAgICAgICh0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBhcyBhbnkpLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJsdXJJbnB1dChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkRheVR4dCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgIHRoaXMuaW5wdXRGb2N1c0JsdXIuZW1pdCh7IHJlYXNvbjogSW5wdXRGb2N1c0JsdXIuYmx1ciwgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uVXNlck1vbnRoSW5wdXQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnZhbGlkTW9udGggPSBmYWxzZTtcclxuICAgIGNvbnN0IG06IG51bWJlciA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aExhYmVsVmFsaWQodmFsdWUsIHRoaXMub3B0cy5tb250aExhYmVscyk7XHJcbiAgICBpZiAobSAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5lZGl0TW9udGggPSBmYWxzZTtcclxuICAgICAgaWYgKG0gIT09IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7XHJcbiAgICAgICAgICBtb250aFR4dDogdGhpcy5tb250aFRleHQobSksXHJcbiAgICAgICAgICBtb250aE5icjogbSxcclxuICAgICAgICAgIHllYXI6IHRoaXMudmlzaWJsZU1vbnRoLnllYXIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW52YWxpZE1vbnRoID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVXNlclllYXJJbnB1dCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmludmFsaWRZZWFyID0gZmFsc2U7XHJcbiAgICBjb25zdCB5OiBudW1iZXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzWWVhckxhYmVsVmFsaWQoXHJcbiAgICAgIE51bWJlcih2YWx1ZSksXHJcbiAgICAgIHRoaXMub3B0cy5taW5ZZWFyLFxyXG4gICAgICB0aGlzLm9wdHMubWF4WWVhclxyXG4gICAgKTtcclxuICAgIGlmICh5ICE9PSAtMSkge1xyXG4gICAgICB0aGlzLmVkaXRZZWFyID0gZmFsc2U7XHJcbiAgICAgIGlmICh5ICE9PSB0aGlzLnZpc2libGVNb250aC55ZWFyKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7XHJcbiAgICAgICAgICBtb250aFR4dDogdGhpcy52aXNpYmxlTW9udGgubW9udGhUeHQsXHJcbiAgICAgICAgICBtb250aE5icjogdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsXHJcbiAgICAgICAgICB5ZWFyOiB5LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB5LCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnZhbGlkWWVhciA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1RvZGF5RGlzYWJsZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVUb2RheUJ0biA9IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheShcclxuICAgICAgdGhpcy5nZXRUb2RheSgpLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgdGhpcy5vcHRzLmVuYWJsZURheXNcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwYXJzZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5sb2NhbGUpIHtcclxuICAgICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldE9wdGlvbnMoKTtcclxuICAgIHRoaXMuaXNUb2RheURpc2FibGVkKCk7XHJcbiAgICB0aGlzLmRheUlkeCA9IHRoaXMud2Vla0RheU9wdHMuaW5kZXhPZih0aGlzLm9wdHMuZmlyc3REYXlPZldlZWspO1xyXG4gICAgaWYgKHRoaXMuZGF5SWR4ICE9PSAtMSkge1xyXG4gICAgICBsZXQgaWR4OiBudW1iZXIgPSB0aGlzLmRheUlkeDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndlZWtEYXlPcHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy53ZWVrRGF5cy5wdXNoKHRoaXMub3B0cy5kYXlMYWJlbHNbdGhpcy53ZWVrRGF5T3B0c1tpZHhdXSk7XHJcbiAgICAgICAgaWR4ID0gdGhpcy53ZWVrRGF5T3B0c1tpZHhdID09PSAnc2EnID8gMCA6IGlkeCArIDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUodGhpcy5wYXJzZVNlbGVjdGVkRGF0ZSh2YWx1ZSksIGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdmFsdWVbJ2RhdGUnXSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZSh0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHZhbHVlWydkYXRlJ10pLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICBjb25zdCBkYXRlID0geyBkYXk6IHZhbHVlLmdldERhdGUoKSwgbW9udGg6IHZhbHVlLmdldE1vbnRoKCkgKyAxLCB5ZWFyOiB2YWx1ZS5nZXRGdWxsWWVhcigpIH07XHJcbiAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKHRoaXMucGFyc2VTZWxlY3RlZERhdGUoZGF0ZSksIGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0geyB5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwIH07XHJcbiAgICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VDYiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3NlbGVjdG9yJykgJiYgY2hhbmdlc1snc2VsZWN0b3InXS5jdXJyZW50VmFsdWUgPiAwKSB7XHJcbiAgICAgIHRoaXMub3BlbkJ0bkNsaWNrZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGxhY2Vob2xkZXInKSkge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gY2hhbmdlc1sncGxhY2Vob2xkZXInXS5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2xvY2FsZScpKSB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gY2hhbmdlc1snbG9jYWxlJ10uY3VycmVudFZhbHVlO1xyXG4gICAgICB0aGlzLnNldExvY2FsZU9wdGlvbnMoKTtcclxuICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGUsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGlzYWJsZWQnKSkge1xyXG4gICAgICB0aGlzLmRpc2FibGVkID0gY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBjaGFuZ2VzWydvcHRpb25zJ10uY3VycmVudFZhbHVlO1xyXG4gICAgICBpZiAoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSAmJiBjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgIHRoaXMub25Vc2VyRGF0ZUlucHV0KGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUuc3RhcnREYXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud2Vla0RheXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucGFyc2VPcHRpb25zKCk7XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRNb250aCcpKSB7XHJcbiAgICAgIGNvbnN0IGRtOiBzdHJpbmcgPSBjaGFuZ2VzWydkZWZhdWx0TW9udGgnXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIGlmIChkbSAhPT0gbnVsbCAmJiBkbSAhPT0gdW5kZWZpbmVkICYmIGRtICE9PSAnJykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHRoaXMucGFyc2VTZWxlY3RlZE1vbnRoKGRtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB7IG1vbnRoVHh0OiAnJywgbW9udGhOYnI6IDAsIHllYXI6IDAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdzZWxEYXRlJykpIHtcclxuICAgICAgY29uc3Qgc2Q6IGFueSA9IGNoYW5nZXNbJ3NlbERhdGUnXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHNkLmN1cnJlbnRWYWx1ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHNkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgc2QuY3VycmVudFZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgIE9iamVjdC5rZXlzKHNkLmN1cnJlbnRWYWx1ZSkubGVuZ3RoICE9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdGhpcy5wYXJzZVNlbGVjdGVkRGF0ZShzZC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUNiKHRoaXMuZ2V0RGF0ZU1vZGVsKHRoaXMuc2VsZWN0ZWREYXRlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pc0RhdGVTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRG8gbm90IGNsZWFyIG9uIGluaXRcclxuICAgICAgICBpZiAoIXNkLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlS2V5Ym9hcmQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCBmaWVsZCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRSZWZlcmVuY2UgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0UmVmZXJlbmNlLCAndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXRSZWZlcmVuY2UsICd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlucHV0UmVmZXJlbmNlLCAnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dFJlZmVyZW5jZSwgJy13ZWJraXQtdXNlci1tb2RpZnknLCAncmVhZC13cml0ZS1wbGFpbnRleHQtb25seScpO1xyXG4gICAgICAgIGZpZWxkLm9uZm9jdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShmaWVsZCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCBmaWVsZCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaWVsZC5mb2N1cygpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQnRuQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNEYXRlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xlYXJCdXR0b25DbGlja2VkLmVtaXQodGhpcyk7XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VCdG5DbGlja2VkKCkge1xyXG4gICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgIHRoaXMucmVtb3ZlSW5saW5lU3R5bGUoKTtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsb3NlQnV0dG9uQ2xpY2tlZC5lbWl0KHRoaXMpO1xyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuXHJcbiAgICB0aGlzLmRvY3VtZW50Q2xpY2tGdW4oKTtcclxuICB9XHJcblxyXG4gIG9wZW5CdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuZG9jdW1lbnRDbGlja0Z1biA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmlzT3BlbiAmJlxyXG4gICAgICAgIHRoaXMucGlja2VyRnJhbWUgJiZcclxuICAgICAgICB0aGlzLmlubGluZUlucHV0ICYmXHJcbiAgICAgICAgdGhpcy5pbmxpbmVJY29uVG9nZ2xlICYmXHJcbiAgICAgICAgIXRoaXMuaW5saW5lSW5wdXQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXHJcbiAgICAgICAgIXRoaXMucGlja2VyRnJhbWUubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXHJcbiAgICAgICAgIXRoaXMuaW5saW5lSWNvblRvZ2dsZS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ0bkNsaWNrZWQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWNvbnRlbnQnKSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0VGltZU9wZW5lZE1vZGFsKSB7XHJcbiAgICAgICAgICB0aGlzLm1vZGFsSGVpZ2h0QmVmb3JlID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maXJzdFRpbWVPcGVuZWRNb2RhbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsXHJcbiAgICAgICAgICAndHJhbnNpdGlvbicsXHJcbiAgICAgICAgICAnaGVpZ2h0IDAuM3MnXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9XHJcbiAgICAgICAgICB0aGlzLm1vZGFsSGVpZ2h0QmVmb3JlICsgdGhpcy5waWNrZXJGcmFtZS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgLy8gT3BlbiBzZWxlY3RvciBidXR0b24gY2xpY2tlZFxyXG4gICAgdGhpcy5zaG93U2VsZWN0b3IgPSAhdGhpcy5zaG93U2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5zZXRWaXNpYmxlTW9udGgoKTtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5PcGVuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICB0aGlzLmhpZGVLZXlib2FyZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYWJlbEFjdGl2ZSA9IHRydWU7XHJcbiAgICBpZiAoIXRoaXMuaW5saW5lKSB7XHJcbiAgICAgIHRoaXMuQ2hhbmdlWkluZGV4KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmlzaWJsZU1vbnRoKCk6IHZvaWQge1xyXG4gICAgLy8gU2V0cyB2aXNpYmxlIG1vbnRoIG9mIGNhbGVuZGFyXHJcbiAgICBsZXQgeSA9IDAsXHJcbiAgICAgIG0gPSAwO1xyXG4gICAgaWYgKCF0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE1vbnRoLnllYXIgPT09IDAgJiYgdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICAgICAgeSA9IHRvZGF5LnllYXI7XHJcbiAgICAgICAgbSA9IHRvZGF5Lm1vbnRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSB0aGlzLnNlbGVjdGVkTW9udGgueWVhcjtcclxuICAgICAgICBtID0gdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gdGhpcy5zZWxlY3RlZERhdGUueWVhcjtcclxuICAgICAgbSA9IHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoO1xyXG4gICAgfVxyXG4gICAgdGhpcy52aXNpYmxlTW9udGggPSB7IG1vbnRoVHh0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbbV0sIG1vbnRoTmJyOiBtLCB5ZWFyOiB5IH07XHJcblxyXG4gICAgLy8gQ3JlYXRlIGN1cnJlbnQgbW9udGhcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB5LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG1vbnRoTGlzdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubW9udGhzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XHJcbiAgICAgIHRoaXMubW9udGhzLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgIHNob3J0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbaV0sXHJcbiAgICAgICAgbGFiZWw6IHRoaXMub3B0cy5tb250aExhYmVsc0Z1bGxbaV0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgeWVhcnNMaXN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy55ZWFycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0WWVhciA9IHRoaXMub3B0cy5taW5ZZWFyO1xyXG4gICAgY29uc3QgbGFzdFllYXIgPSB0aGlzLm9wdHMubWF4WWVhcjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gZmlyc3RZZWFyOyBpIDw9IGxhc3RZZWFyOyBpKyspIHtcclxuICAgICAgdGhpcy55ZWFycy5wdXNoKGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldk1vbnRoKGV2ZW50PzogYW55KTogdm9pZCB7XHJcbiAgICAvLyBQcmV2aW91cyBtb250aCBmcm9tIGNhbGVuZGFyXHJcbiAgICBjb25zdCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCAxKTtcclxuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpIC0gMSk7XHJcblxyXG4gICAgY29uc3QgeTogbnVtYmVyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbTogbnVtYmVyID0gZC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICB0aGlzLnZpc2libGVNb250aCA9IHsgbW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KG0pLCBtb250aE5icjogbSwgeWVhcjogeSB9O1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG5cclxuICAgIC8vIFByZXZlbnRzIHRyaWdnZXIgKGNsaWNrKSBldmVudCB3aGVuIHVzaW5nIEVudGVyXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVIpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0TW9udGgoZXZlbnQ/OiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIE5leHQgbW9udGggZnJvbSBjYWxlbmRhclxyXG4gICAgY29uc3QgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh0aGlzLnZpc2libGVNb250aC55ZWFyLCB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgMSk7XHJcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSArIDEpO1xyXG5cclxuICAgIGNvbnN0IHk6IG51bWJlciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG06IG51bWJlciA9IGQuZ2V0TW9udGgoKSArIDE7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlTW9udGggPSB7IG1vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChtKSwgbW9udGhOYnI6IG0sIHllYXI6IHkgfTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB5LCB0cnVlKTtcclxuXHJcbiAgICAvLyBQcmV2ZW50cyB0cmlnZ2VyIChjbGljaykgZXZlbnQgd2hlbiB1c2luZyBFbnRlclxyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2WWVhcigpOiB2b2lkIHtcclxuICAgIC8vIFByZXZpb3VzIHllYXIgZnJvbSBjYWxlbmRhclxyXG4gICAgdGhpcy52aXNpYmxlTW9udGgueWVhci0tO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG5leHRZZWFyKCk6IHZvaWQge1xyXG4gICAgLy8gTmV4dCB5ZWFyIGZyb20gY2FsZW5kYXJcclxuICAgIHRoaXMudmlzaWJsZU1vbnRoLnllYXIrKztcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICB0b2RheUNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAvLyBUb2RheSBidXR0b24gY2xpY2tlZFxyXG4gICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoXHJcbiAgICAgICAgdG9kYXksXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZWxlY3REYXRlKHRvZGF5KTtcclxuICAgIH1cclxuICAgIGlmICh0b2RheS55ZWFyICE9PSB0aGlzLnZpc2libGVNb250aC55ZWFyIHx8IHRvZGF5Lm1vbnRoICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icikge1xyXG4gICAgICB0aGlzLnZpc2libGVNb250aCA9IHtcclxuICAgICAgICBtb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW3RvZGF5Lm1vbnRoXSxcclxuICAgICAgICBtb250aE5icjogdG9kYXkubW9udGgsXHJcbiAgICAgICAgeWVhcjogdG9kYXkueWVhcixcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRvZGF5Lm1vbnRoLCB0b2RheS55ZWFyLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHRoaXMudG9kYXlCdXR0b25DbGlja2VkLmVtaXQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjZWxsQ2xpY2tlZChjZWxsOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIENlbGwgY2xpY2tlZCBvbiB0aGUgY2FsZW5kYXJcclxuICAgIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5wcmV2TW9udGhJZCkge1xyXG4gICAgICAvLyBQcmV2aW91cyBtb250aCBkYXlcclxuICAgICAgdGhpcy5wcmV2TW9udGgoKTtcclxuICAgIH0gZWxzZSBpZiAoY2VsbC5jbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQpIHtcclxuICAgICAgLy8gQ3VycmVudCBtb250aCBkYXkgLSBpZiBkYXRlIGlzIGFscmVhZHkgc2VsZWN0ZWQgY2xlYXIgaXRcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGNlbGwuZGF0ZU9iai55ZWFyID09PSB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyICYmXHJcbiAgICAgICAgY2VsbC5kYXRlT2JqLm1vbnRoID09PSB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aCAmJlxyXG4gICAgICAgIGNlbGwuZGF0ZU9iai5kYXkgPT09IHRoaXMuc2VsZWN0ZWREYXRlLmRheVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZShjZWxsLmRhdGVPYmopO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGNlbGwuY21vID09PSB0aGlzLm5leHRNb250aElkKSB7XHJcbiAgICAgIC8vIE5leHQgbW9udGggZGF5XHJcbiAgICAgIHRoaXMubmV4dE1vbnRoKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0TW9udGhZZWFyRWRpdCgpO1xyXG4gIH1cclxuXHJcbiAgY2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogYW55KSB7XHJcbiAgICAvLyBDZWxsIGtleWJvYXJkIGhhbmRsaW5nXHJcbiAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZW50ZXIgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5zcGFjZSkgJiYgIWNlbGwuZGlzYWJsZWQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5jZWxsQ2xpY2tlZChjZWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyRGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIENsZWFycyB0aGUgZGF0ZSBhbmQgbm90aWZpZXMgcGFyZW50IHVzaW5nIGNhbGxiYWNrcyBhbmQgdmFsdWUgYWNjZXNzb3JcclxuICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfTtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZWQuZW1pdCh7IGRhdGU6IGRhdGUsIGpzZGF0ZTogbnVsbCwgZm9ybWF0dGVkOiAnJywgZXBvYzogMCB9KTtcclxuICAgIHRoaXMub25DaGFuZ2VDYihudWxsKTtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKGRhdGUsIHRydWUpO1xyXG4gICAgdGhpcy50bXAgPSB7XHJcbiAgICAgIHllYXI6IHRoaXMuZ2V0VG9kYXkoKS55ZWFyLFxyXG4gICAgICBtb250aDogdGhpcy5nZXRUb2RheSgpLm1vbnRoLFxyXG4gICAgICBkYXk6IHRoaXMuZ2V0VG9kYXkoKS5kYXksXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXRWaXNpYmxlTW9udGgoKTtcclxuICAgIHRoaXMubGFiZWxBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNlbGVjdERhdGUoZGF0ZTogSU15RGF0ZSk6IHZvaWQge1xyXG4gICAgLy8gRGF0ZSBzZWxlY3RlZCwgbm90aWZpZXMgcGFyZW50IHVzaW5nIGNhbGxiYWNrcyBhbmQgdmFsdWUgYWNjZXNzb3JcclxuICAgIHRoaXMudG1wID0gZGF0ZTtcclxuICAgIGNvbnN0IGRhdGVNb2RlbDogYW55ID0gdGhpcy5nZXREYXRlTW9kZWwoZGF0ZSk7XHJcbiAgICB0aGlzLmRhdGVDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICBqc2RhdGU6IHRoaXMuZ2V0RGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KSxcclxuICAgICAgcHJldmlvdXNEYXRlRm9ybWF0dGVkOiB0aGlzLnNlbGVjdGlvbkRheVR4dCxcclxuICAgICAgYWN0dWFsRGF0ZUZvcm1hdHRlZDogZGF0ZU1vZGVsLFxyXG4gICAgICBlcG9jOiBNYXRoLnJvdW5kKHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpIC8gMTAwMC4wKSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkNoYW5nZUNiKGRhdGVNb2RlbCk7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZShkYXRlLCBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRzLmNsb3NlQWZ0ZXJTZWxlY3QpIHtcclxuICAgICAgdGhpcy5jbG9zZUJ0bkNsaWNrZWQoKTtcclxuICAgIH1cclxuICAgIHRoaXMubGFiZWxBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGF0ZVZhbHVlKGRhdGU6IElNeURhdGUsIGNsZWFyOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBVcGRhdGVzIGRhdGUgdmFsdWVzXHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLnRtcCA9IGRhdGU7XHJcbiAgICB0aGlzLmlzRGF0ZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gY2xlYXIgPyAnJyA6IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7XHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGlvbkRheVR4dCxcclxuICAgICAgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsXHJcbiAgICAgIHZhbGlkOiAhY2xlYXIsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlTW9kZWwoZGF0ZTogSU15RGF0ZSk6IGFueSB7XHJcbiAgICBjb25zdCBqc0RhdGUgPSB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSk7XHJcbiAgICBjb25zdCBkYXRlTW9kZWwgPSB0aGlzLm9wdHMudXNlRGF0ZU9iamVjdCA/IGpzRGF0ZSA6IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlTW9kZWw7XHJcbiAgfVxyXG5cclxuICBwcmVaZXJvKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIFByZXBlbmQgemVybyBpZiBzbWFsbGVyIHRoYW4gMTBcclxuICAgIHJldHVybiBwYXJzZUludCh2YWwsIDApIDwgMTAgPyAnMCcgKyB2YWwgOiB2YWw7XHJcbiAgfVxyXG5cclxuICBmb3JtYXREYXRlKHZhbDogYW55KTogc3RyaW5nIHtcclxuICAgIC8vIFJldHVybnMgZm9ybWF0dGVkIGRhdGUgc3RyaW5nLCBpZiBtbW0gaXMgcGFydCBvZiBkYXRlRm9ybWF0IHJldHVybnMgbW9udGggYXMgYSBzdHJpbmdcclxuICAgIC8vIGRheXNcclxuICAgIGNvbnN0IGQgPSB2YWwuZGF5OyAvLyAxIC0gMzFcclxuICAgIGNvbnN0IGRkID0gdGhpcy5wcmVaZXJvKHZhbC5kYXkpOyAvLyAwMSAtIDMxXHJcbiAgICBjb25zdCBkZGQgPSB0aGlzLm9wdHMuZGF5TGFiZWxzW3RoaXMuZ2V0V2Vla2RheSh2YWwpXTsgLy8gU3VuLVNhdFxyXG4gICAgY29uc3QgZGRkZCA9IHRoaXMub3B0cy5kYXlMYWJlbHNGdWxsW3RoaXMuZ2V0V2Vla2RheSh2YWwpXTsgLy8gU3VuZGF5IOKAkyBTYXR1cmRheVxyXG4gICAgY29uc3QgbSA9IHZhbC5tb250aDsgLy8gMSAtIDEyXHJcbiAgICBjb25zdCBtbSA9IHRoaXMucHJlWmVybyh2YWwubW9udGgpOyAvLyAwMSAtIDEyXHJcbiAgICBjb25zdCBtbW0gPSB0aGlzLmdldE1vbnRoU2hvcnQodmFsLm1vbnRoKTsgLy8gSmFuIC0gRGVjXHJcbiAgICBjb25zdCBtbW1tID0gdGhpcy5nZXRNb250aEZ1bGwodmFsLm1vbnRoKTsgLy8gSmFudWFyeSDigJMgRGVjZW1iZXJcclxuICAgIGNvbnN0IHl5ID0gdmFsLnllYXIudG9TdHJpbmcoKS5sZW5ndGggPT09IDIgPyB2YWwueWVhciA6IHZhbC55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoMiwgNCk7IC8vIDAwIC0gOTlcclxuICAgIGNvbnN0IHl5eXkgPSB2YWwueWVhcjtcclxuXHJcbiAgICBjb25zdCB0b1JlcGxhY2UgPSB0aGlzLm9wdHMuZGF0ZUZvcm1hdC5zcGxpdCgvKGR7MSw0fXxtezEsNH18eXs0fXx5eXwhLikvZyk7XHJcbiAgICBsZXQgZm9ybWF0dGVkID0gJyc7XHJcbiAgICB0b1JlcGxhY2UuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGVsKSB7XHJcbiAgICAgICAgY2FzZSAnZGRkZCc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIGRkZGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZGRkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZGRkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2RkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW1tbSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIG1tbW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW1tJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbW1tKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21tJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIG0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneXl5eSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIHl5eXkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneXknOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCB5eSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBmb3JtYXR0ZWQgKz0gZWw7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0dGVkO1xyXG4gIH1cclxuXHJcbiAgbW9udGhUZXh0KG06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAvLyBSZXR1cm5zIG1vbnRoIGFzIGEgdGV4dFxyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc1ttXTtcclxuICB9XHJcblxyXG4gIHdlZWtUZXh0KG06IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyBSZXR1cm5zIG1vbnRoIGFzIGEgdGV4dFxyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5kYXlMYWJlbHNGdWxsW21dO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhTaG9ydChtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc1ttXTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoRnVsbChtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc0Z1bGxbbV07XHJcbiAgfVxyXG5cclxuICBtb250aFN0YXJ0SWR4KHk6IG51bWJlciwgbTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIE1vbnRoIHN0YXJ0IGluZGV4XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgIGQuc2V0RGF0ZSgxKTtcclxuICAgIGQuc2V0TW9udGgobSAtIDEpO1xyXG4gICAgZC5zZXRGdWxsWWVhcih5KTtcclxuICAgIGNvbnN0IGlkeCA9IGQuZ2V0RGF5KCkgKyB0aGlzLnN1bmRheUlkeCgpO1xyXG4gICAgcmV0dXJuIGlkeCA+PSA3ID8gaWR4IC0gNyA6IGlkeDtcclxuICB9XHJcblxyXG4gIGRheXNJbk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiBjdXJyZW50IG1vbnRoXHJcbiAgICByZXR1cm4gbmV3IERhdGUoeSwgbSwgMCkuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZGF5c0luUHJldk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiB0aGUgcHJldmlvdXMgbW9udGhcclxuICAgIGNvbnN0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUoeSwgbSwgMSk7XHJcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSAtIDEpO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF5c0luTW9udGgoZC5nZXRNb250aCgpICsgMSwgZC5nZXRGdWxsWWVhcigpKTtcclxuICB9XHJcblxyXG4gIGlzQ3VyckRheShkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyLCBjbW86IG51bWJlciwgdG9kYXk6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgIC8vIENoZWNrIGlzIGEgZ2l2ZW4gZGF0ZSB0aGUgdG9kYXlcclxuICAgIHJldHVybiBkID09PSB0b2RheS5kYXkgJiYgbSA9PT0gdG9kYXkubW9udGggJiYgeSA9PT0gdG9kYXkueWVhciAmJiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RheSgpOiBJTXlEYXRlIHtcclxuICAgIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIHsgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aDogZGF0ZS5nZXRNb250aCgpICsgMSwgZGF5OiBkYXRlLmdldERhdGUoKSB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KS5nZXRUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrZGF5KGRhdGU6IElNeURhdGUpOiBzdHJpbmcge1xyXG4gICAgLy8gR2V0IHdlZWtkYXk6IHN1LCBtbywgdHUsIHdlIC4uLlxyXG4gICAgcmV0dXJuIHRoaXMud2Vla0RheU9wdHNbdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSldO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICAvLyBDcmVhdGVzIGEgZGF0ZSBvYmplY3QgZnJvbSBnaXZlbiB5ZWFyLCBtb250aCBhbmQgZGF5XHJcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIDAsIDAsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgc3VuZGF5SWR4KCk6IG51bWJlciB7XHJcbiAgICAvLyBJbmRleCBvZiBTdW5kYXkgZGF5XHJcbiAgICByZXR1cm4gdGhpcy5kYXlJZHggPiAwID8gNyAtIHRoaXMuZGF5SWR4IDogMDtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQ2FsZW5kYXIobTogbnVtYmVyLCB5OiBudW1iZXIsIG5vdGlmeUNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlcy5sZW5ndGggPSAwO1xyXG4gICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICBjb25zdCBtb250aFN0YXJ0OiBudW1iZXIgPSB0aGlzLm1vbnRoU3RhcnRJZHgoeSwgbSk7XHJcbiAgICBjb25zdCBkSW5UaGlzTTogbnVtYmVyID0gdGhpcy5kYXlzSW5Nb250aChtLCB5KTtcclxuICAgIGNvbnN0IGRJblByZXZNOiBudW1iZXIgPSB0aGlzLmRheXNJblByZXZNb250aChtLCB5KTtcclxuXHJcbiAgICBsZXQgZGF5TmJyID0gMTtcclxuICAgIGxldCBjbW86IG51bWJlciA9IHRoaXMucHJldk1vbnRoSWQ7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xyXG4gICAgICBjb25zdCB3ZWVrOiBBcnJheTxJTXlDYWxlbmRhckRheT4gPSBbXTtcclxuICAgICAgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAvLyBGaXJzdCB3ZWVrXHJcbiAgICAgICAgY29uc3QgcG0gPSBkSW5QcmV2TSAtIG1vbnRoU3RhcnQgKyAxO1xyXG4gICAgICAgIC8vIFByZXZpb3VzIG1vbnRoXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHBtOyBqIDw9IGRJblByZXZNOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7IHllYXI6IHksIG1vbnRoOiBtIC0gMSwgZGF5OiBqIH07XHJcbiAgICAgICAgICB3ZWVrLnB1c2goe1xyXG4gICAgICAgICAgICBkYXRlT2JqOiBkYXRlLFxyXG4gICAgICAgICAgICBjbW86IGNtbyxcclxuICAgICAgICAgICAgY3VyckRheTogdGhpcy5pc0N1cnJEYXkoaiwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgIGRheU5icjogdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSksXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoXHJcbiAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKFxyXG4gICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1hcmtEYXRlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMubWFya1dlZWtlbmRzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNtbyA9IHRoaXMuY3Vyck1vbnRoSWQ7XHJcbiAgICAgICAgLy8gQ3VycmVudCBtb250aFxyXG4gICAgICAgIGNvbnN0IGRheXNMZWZ0OiBudW1iZXIgPSA3IC0gd2Vlay5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXlzTGVmdDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0geyB5ZWFyOiB5LCBtb250aDogbSwgZGF5OiBkYXlOYnIgfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsXHJcbiAgICAgICAgICAgIGNtbzogY21vLFxyXG4gICAgICAgICAgICBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICBkYXlOYnI6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KFxyXG4gICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShcclxuICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5tYXJrRGF0ZXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1hcmtXZWVrZW5kc1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVzdCBvZiB0aGUgd2Vla3NcclxuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDg7IGorKykge1xyXG4gICAgICAgICAgaWYgKGRheU5iciA+IGRJblRoaXNNKSB7XHJcbiAgICAgICAgICAgIC8vIE5leHQgbW9udGhcclxuICAgICAgICAgICAgZGF5TmJyID0gMTtcclxuICAgICAgICAgICAgY21vID0gdGhpcy5uZXh0TW9udGhJZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7XHJcbiAgICAgICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgICAgIG1vbnRoOiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQgPyBtIDogbSArIDEsXHJcbiAgICAgICAgICAgIGRheTogZGF5TmJyLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsXHJcbiAgICAgICAgICAgIGNtbzogY21vLFxyXG4gICAgICAgICAgICBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICBkYXlOYnI6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KFxyXG4gICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShcclxuICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5tYXJrRGF0ZXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1hcmtXZWVrZW5kc1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd2Vla05icjogbnVtYmVyID1cclxuICAgICAgICB0aGlzLm9wdHMuc2hvd1dlZWtOdW1iZXJzICYmIHRoaXMub3B0cy5maXJzdERheU9mV2VlayA9PT0gJ21vJ1xyXG4gICAgICAgICAgPyB0aGlzLnV0aWxTZXJ2aWNlLmdldFdlZWtOdW1iZXIod2Vla1swXS5kYXRlT2JqKVxyXG4gICAgICAgICAgOiAwO1xyXG4gICAgICB0aGlzLmRhdGVzLnB1c2goeyB3ZWVrOiB3ZWVrLCB3ZWVrTmJyOiB3ZWVrTmJyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZShtLCB5KTtcclxuXHJcbiAgICBpZiAobm90aWZ5Q2hhbmdlKSB7XHJcbiAgICAgIC8vIE5vdGlmeSBwYXJlbnRcclxuICAgICAgdGhpcy5jYWxlbmRhclZpZXdDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgbW9udGg6IG0sXHJcbiAgICAgICAgZmlyc3Q6IHtcclxuICAgICAgICAgIG51bWJlcjogMSxcclxuICAgICAgICAgIHdlZWtkYXk6IHRoaXMuZ2V0V2Vla2RheSh7XHJcbiAgICAgICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgICAgIG1vbnRoOiBtLFxyXG4gICAgICAgICAgICBkYXk6IDEsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhc3Q6IHtcclxuICAgICAgICAgIG51bWJlcjogZEluVGhpc00sXHJcbiAgICAgICAgICB3ZWVrZGF5OiB0aGlzLmdldFdlZWtkYXkoe1xyXG4gICAgICAgICAgICB5ZWFyOiB5LFxyXG4gICAgICAgICAgICBtb250aDogbSxcclxuICAgICAgICAgICAgZGF5OiBkSW5UaGlzTSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubW9udGhMaXN0KCk7XHJcbiAgICB0aGlzLnllYXJzTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VTZWxlY3RlZERhdGUoc2VsRGF0ZTogYW55KTogSU15RGF0ZSB7XHJcbiAgICAvLyBQYXJzZSBzZWxEYXRlIHZhbHVlIC0gaXQgY2FuIGJlIHN0cmluZyBvciBJTXlEYXRlIG9iamVjdFxyXG5cclxuICAgIC8vIFJlbW92ZXMgZXZlcnl0aGluZyBmcm9tIHNlbERhdGUgaWYgaXQncyBJU08gZGF0ZSBmb3JtYXQgdG8gYWxsb3cgdG8gdXNlIElTTyBkYXRlIGluIGRhdGUgcGlja2VyXHJcbiAgICBpZiAoc2VsRGF0ZS50b1N0cmluZygpLmluZGV4T2YoJ1QnKSAhPT0gLTEpIHtcclxuICAgICAgc2VsRGF0ZSA9IHNlbERhdGUuc3Vic3RyKDAsIHNlbERhdGUuaW5kZXhPZignVCcpKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHsgZGF5OiAwLCBtb250aDogMCwgeWVhcjogMCB9O1xyXG4gICAgaWYgKHR5cGVvZiBzZWxEYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBzZDogc3RyaW5nID0gPHN0cmluZz5zZWxEYXRlO1xyXG4gICAgICBjb25zdCBkZjogc3RyaW5nID0gdGhpcy5vcHRzLmRhdGVGb3JtYXQ7XHJcblxyXG4gICAgICBjb25zdCBkZWxpbWV0ZXJzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy51dGlsU2VydmljZS5nZXREYXRlRm9ybWF0RGVsaW1ldGVycyhkZik7XHJcbiAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZVZhbHVlKHNkLCBkZiwgZGVsaW1ldGVycyk7XHJcbiAgICAgIGRhdGUueWVhciA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMF0pO1xyXG5cclxuICAgICAgaWYgKGRmLmluZGV4T2YoJ21tbW0nKSAhPT0gLTEpIHtcclxuICAgICAgICBkYXRlLm1vbnRoID0gdGhpcy51dGlsU2VydmljZS5nZXRNb250aE51bWJlckJ5TW9udGhOYW1lKFxyXG4gICAgICAgICAgZGF0ZVZhbHVlWzFdLFxyXG4gICAgICAgICAgdGhpcy5vcHRzLm1vbnRoTGFiZWxzRnVsbFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGYuaW5kZXhPZignbW1tJykgIT09IC0xKSB7XHJcbiAgICAgICAgZGF0ZS5tb250aCA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TW9udGhOdW1iZXJCeU1vbnRoTmFtZShcclxuICAgICAgICAgIGRhdGVWYWx1ZVsxXSxcclxuICAgICAgICAgIHRoaXMub3B0cy5tb250aExhYmVsc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZS5tb250aCA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGUuZGF5ID0gdGhpcy51dGlsU2VydmljZS5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsyXSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxEYXRlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBkYXRlID0gc2VsRGF0ZTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gdGhpcy5mb3JtYXREYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICBwYXJzZVNlbGVjdGVkTW9udGgobXM6IHN0cmluZyk6IElNeU1vbnRoIHtcclxuICAgIHJldHVybiB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGVmYXVsdE1vbnRoKG1zKTtcclxuICB9XHJcblxyXG4gIHNldEhlYWRlckJ0bkRpc2FibGVkU3RhdGUobTogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBkcG0gPSBmYWxzZTtcclxuICAgIGxldCBkcHkgPSBmYWxzZTtcclxuICAgIGxldCBkbm0gPSBmYWxzZTtcclxuICAgIGxldCBkbnkgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9wdHMuZGlzYWJsZUhlYWRlckJ1dHRvbnMpIHtcclxuICAgICAgZHBtID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5ZWFyOiBtID09PSAxID8geSAtIDEgOiB5LFxyXG4gICAgICAgICAgbW9udGg6IG0gPT09IDEgPyAxMiA6IG0gLSAxLFxyXG4gICAgICAgICAgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0gPT09IDEgPyAxMiA6IG0gLSAxLCBtID09PSAxID8geSAtIDEgOiB5KSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWxcclxuICAgICAgKTtcclxuICAgICAgZHB5ID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5ZWFyOiB5IC0gMSxcclxuICAgICAgICAgIG1vbnRoOiBtLFxyXG4gICAgICAgICAgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0sIHkgLSAxKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWxcclxuICAgICAgKTtcclxuICAgICAgZG5tID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5ZWFyOiBtID09PSAxMiA/IHkgKyAxIDogeSxcclxuICAgICAgICAgIG1vbnRoOiBtID09PSAxMiA/IDEgOiBtICsgMSxcclxuICAgICAgICAgIGRheTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2VcclxuICAgICAgKTtcclxuICAgICAgZG55ID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZShcclxuICAgICAgICB7IHllYXI6IHkgKyAxLCBtb250aDogbSwgZGF5OiAxIH0sXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2TW9udGhEaXNhYmxlZCA9IChtID09PSAxICYmIHkgPT09IHRoaXMub3B0cy5taW5ZZWFyKSB8fCBkcG07XHJcbiAgICB0aGlzLnByZXZZZWFyRGlzYWJsZWQgPSB5IC0gMSA8IHRoaXMub3B0cy5taW5ZZWFyIHx8IGRweTtcclxuICAgIHRoaXMubmV4dE1vbnRoRGlzYWJsZWQgPSAobSA9PT0gMTIgJiYgeSA9PT0gdGhpcy5vcHRzLm1heFllYXIpIHx8IGRubTtcclxuICAgIHRoaXMubmV4dFllYXJEaXNhYmxlZCA9IHkgKyAxID4gdGhpcy5vcHRzLm1heFllYXIgfHwgZG55O1xyXG4gIH1cclxuXHJcbiAgY2hlY2tBY3RpdmUoKSB7XHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFiZWxBY3RpdmUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0RhdGVTZWxlY3RlZCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIElOTElORSBEQVRFIFBJQ0tFUlxyXG5cclxuICBwdWJsaWMgdG9nZ2xlSW5saW5lRGF0ZVBpY2tlcigpIHtcclxuICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICB0aGlzLmNsb3NlQnRuQ2xpY2tlZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=