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
    enter: 13,
    space: 32,
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
                    this.renderer.setStyle(openedPicker, 'z-index', '100');
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
        ((/** @type {?} */ (this.document.documentElement))).style.overflow = 'hidden';
        // this.divFocus.nativeElement.focus();
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
        this.ChangeZIndex();
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
        if (event.code === 'Enter') {
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
        // this.dateChanged.emit({ previousDate: this.selectionDayTxt, actualDate: dateModel });
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
        // hide calendar when date was clicked
        // this.showSelector = false;
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
                template: "<!-- Line 27: Deleted (focus)=\"onFocusInput($event)\" for better use in Firefox. If other strange problems will occur, please paste it in line 27. -->\r\n<div\r\n  class=\"mydp picker\"\r\n  [ngClass]=\"{ 'picker--opened': showSelector }\"\r\n  [ngStyle]=\"{ width: opts.width }\"\r\n  *ngIf=\"!inline\"\r\n>\r\n  <div class=\"md-form\" [ngClass]=\"{ 'md-outline': outlineInput }\">\r\n    <input\r\n      [id]=\"id\"\r\n      type=\"text\"\r\n      class=\"form-control mydp-date\"\r\n      [readonly]=\"!opts.editableDateField\"\r\n      [attr.aria-label]=\"opts.ariaLabelInputField\"\r\n      (mousedown)=\"openBtnClicked()\"\r\n      [attr.maxlength]=\"opts.dateFormat.length\"\r\n      [ngClass]=\"{\r\n        selectiondisabled: opts.componentDisabled,\r\n        disabled: opts.componentDisabled\r\n      }\"\r\n      placeholder=\"{{ placeholder }}\"\r\n      [ngModel]=\"selectionDayTxt\"\r\n      (ngModelChange)=\"onUserDateInput($event)\"\r\n      [value]=\"selectionDayTxt\"\r\n      [ngStyle]=\"{\r\n        'font-size': opts.selectionTxtFontSize\r\n      }\"\r\n      (blur)=\"onBlurInput($event)\"\r\n      (focus)=\"onFocusInput($event)\"\r\n      [disabled]=\"opts.componentDisabled || isDisabled\"\r\n      autocomplete=\"off\"\r\n      [tabindex]=\"tabIndex\"\r\n    />\r\n    <label\r\n      [for]=\"id\"\r\n      (click)=\"openBtnClicked()\"\r\n      *ngIf=\"label.length > 0\"\r\n      [ngClass]=\"{\r\n        active: checkActive(),\r\n        disabled: opts.componentDisabled\r\n      }\"\r\n      >{{ label }}</label\r\n    >\r\n  </div>\r\n  <div\r\n    *ngIf=\"showSelector\"\r\n    class=\"selector picker__holder selectorarrow selectorarrowleft selectorarrowright\"\r\n    #divFocus\r\n    [ngClass]=\"{ alignselectorright: opts.alignSelectorRight }\"\r\n    tabindex=\"0\"\r\n  >\r\n    <div class=\"picker__frame picker__box\" #pickerFrame>\r\n      <div class=\"picker__header\">\r\n        <div class=\"picker__date-display\">\r\n          <div class=\"picker__weekday-display\">\r\n            {{ weekText(getWeekday(tmp)) }}\r\n          </div>\r\n          <div class=\"picker__month-display\">\r\n            <div>{{ monthText(tmp.month) }}</div>\r\n          </div>\r\n          <div class=\"picker__day-display\">\r\n            <div>{{ tmp.day }}</div>\r\n          </div>\r\n          <div class=\"picker__year-display\">\r\n            <div>{{ tmp.year }}</div>\r\n          </div>\r\n        </div>\r\n        <select\r\n          class=\"picker__select--year\"\r\n          [(ngModel)]=\"visibleMonth.year\"\r\n          (ngModelChange)=\"onUserYearInput($event)\"\r\n          role=\"menu\"\r\n          aria-label=\"Year selector\"\r\n        >\r\n          <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option>\r\n        </select>\r\n        <select\r\n          class=\"picker__select--month\"\r\n          [(ngModel)]=\"visibleMonth.monthTxt\"\r\n          (ngModelChange)=\"onUserMonthInput($event)\"\r\n          role=\"menu\"\r\n          aria-label=\"Month selector\"\r\n        >\r\n          <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option>\r\n        </select>\r\n        <a\r\n          href=\"javascript:;\"\r\n          role=\"button\"\r\n          class=\"picker__nav--prev black-text\"\r\n          data-nav=\"-1\"\r\n          aria-controls=\"date-picker-example_table\"\r\n          title=\"Previous month\"\r\n          (click)=\"prevMonth($event)\"\r\n          (keydown.enter)=\"prevMonth($event)\"\r\n          [ngClass]=\"{\r\n            headerbtnenabled: !prevMonthDisabled,\r\n            headerbtndisabled: prevMonthDisabled,\r\n            'disabled grey-text': prevMonthDisabled\r\n          }\"\r\n        ></a>\r\n        <a\r\n          role=\"button\"\r\n          href=\"javascript:;\"\r\n          class=\"picker__nav--next black-text\"\r\n          data-nav=\"1\"\r\n          aria-controls=\"date-picker-example_table\"\r\n          title=\"Next month\"\r\n          (click)=\"nextMonth($event)\"\r\n          (keydown.enter)=\"nextMonth($event)\"\r\n          [ngClass]=\"{\r\n            headerbtnenabled: !nextMonthDisabled,\r\n            headerbtndisabled: nextMonthDisabled,\r\n            'disabled grey-text': nextMonthDisabled\r\n          }\"\r\n        ></a>\r\n      </div>\r\n      <table class=\"picker__table\">\r\n        <thead>\r\n          <tr>\r\n            <th\r\n              class=\"picker__weekday weekdaytitleweeknbr\"\r\n              *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n            >\r\n              #\r\n            </th>\r\n            <th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{ d }}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let w of dates\">\r\n            <td\r\n              class=\"picker__day daycellweeknbr\"\r\n              *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n            >\r\n              {{ w.weekNbr }}\r\n            </td>\r\n            <td\r\n              class=\"picker__day\"\r\n              *ngFor=\"let d of w.week\"\r\n              [ngClass]=\"{\r\n                'picker__day--infocus': d.cmo === currMonthId && !d.disabled,\r\n                disabled: d.disabled,\r\n                tablesingleday: d.cmo === currMonthId && !d.disabled\r\n              }\"\r\n            >\r\n              <div\r\n                *ngIf=\"d.markedDate.marked\"\r\n                class=\"markdate\"\r\n                [ngStyle]=\"{ 'background-color': d.markedDate.color }\"\r\n              ></div>\r\n              <div\r\n                class=\"picker__day\"\r\n                [ngClass]=\"{\r\n                  'picker__day--infocus': d.cmo === currMonthId,\r\n                  'picker__day--outfocus': d.cmo === nextMonthId || d.cmo === prevMonthId,\r\n                  'picker__day--today': d.currDay && opts.markCurrentDay,\r\n                  'picker__day--selected picker__day--highlighted':\r\n                    selectedDate.day === d.dateObj.day &&\r\n                    selectedDate.month === d.dateObj.month &&\r\n                    selectedDate.year === d.dateObj.year &&\r\n                    d.cmo === currMonthId\r\n                }\"\r\n                (click)=\"!d.disabled && cellClicked(d); $event.stopPropagation()\"\r\n                (keydown)=\"cellKeyDown($event, d)\"\r\n                tabindex=\"0\"\r\n              >\r\n                {{ d.dateObj.day }}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"picker__footer\">\r\n        <button\r\n          type=\"button\"\r\n          *ngIf=\"opts.showTodayBtn\"\r\n          class=\"picker__button--today\"\r\n          (click)=\"todayClicked()\"\r\n          role=\"button\"\r\n          [attr.aria-label]=\"opts.todayBtnTxt\"\r\n        >\r\n          {{ opts.todayBtnTxt }}\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          *ngIf=\"opts.showClearDateBtn\"\r\n          class=\"picker__button--clear\"\r\n          (click)=\"removeBtnClicked()\"\r\n          role=\"button\"\r\n          [attr.aria-label]=\"opts.clearBtnTxt\"\r\n        >\r\n          {{ opts.clearBtnTxt }}\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          [ngClass]=\"{ 'ml-auto': !opts.showTodayBtn }\"\r\n          class=\"picker__button--close\"\r\n          (click)=\"closeBtnClicked()\"\r\n          role=\"button\"\r\n          [attr.aria-label]=\"opts.closeBtnTxt\"\r\n        >\r\n          {{ opts.closeBtnTxt }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  class=\"md-form my-0 d-flex align-items-center justify-content-center\"\r\n  *ngIf=\"inline\"\r\n  [ngClass]=\"{ 'md-outline': outlineInput }\"\r\n>\r\n  <input\r\n    #inlineInput\r\n    id=\"inlineInput\"\r\n    type=\"text\"\r\n    class=\"form-control mydp-date\"\r\n    [readonly]=\"!opts.editableDateField\"\r\n    [attr.aria-label]=\"opts.ariaLabelInputField\"\r\n    [attr.maxlength]=\"opts.dateFormat.length\"\r\n    [ngClass]=\"{\r\n      selectiondisabled: opts.componentDisabled,\r\n      disabled: opts.componentDisabled\r\n    }\"\r\n    placeholder=\"{{ placeholder }}\"\r\n    [ngModel]=\"selectionDayTxt\"\r\n    (ngModelChange)=\"onUserDateInput($event)\"\r\n    [value]=\"selectionDayTxt\"\r\n    [ngStyle]=\"{\r\n      'font-size': opts.selectionTxtFontSize\r\n    }\"\r\n    (focus)=\"onFocusInput($event)\"\r\n    (blur)=\"onBlurInput($event)\"\r\n    [disabled]=\"opts.componentDisabled || isDisabled\"\r\n    autocomplete=\"off\"\r\n    [tabindex]=\"tabIndex\"\r\n  />\r\n  <label\r\n    for=\"inlineInput\"\r\n    (click)=\"openBtnClicked()\"\r\n    *ngIf=\"label.length > 0\"\r\n    [ngClass]=\"{\r\n      active: checkActive(),\r\n      disabled: opts.componentDisabled\r\n    }\"\r\n    >{{ label }}</label\r\n  >\r\n  <i\r\n    [ngClass]=\"inlineIcon\"\r\n    #inlineIconToggle\r\n    class=\"datepicker-inline-icon\"\r\n    (click)=\"toggleInlineDatePicker()\"\r\n  ></i>\r\n</div>\r\n<div\r\n  class=\"mydp picker datepicker-inline\"\r\n  [ngClass]=\"{ 'picker--opened': showSelector }\"\r\n  *ngIf=\"inline && isOpen\"\r\n>\r\n  <div class=\"picker__frame picker__box z-depth-1\" #pickerFrame [ngClass]=\"{ 'd-none': !isOpen }\">\r\n    <div class=\"picker__header d-flex flex-center\">\r\n      <select\r\n        class=\"picker__select--year\"\r\n        [(ngModel)]=\"visibleMonth.year\"\r\n        (ngModelChange)=\"onUserYearInput($event)\"\r\n        role=\"menu\"\r\n        aria-label=\"Year selector\"\r\n      >\r\n        <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option>\r\n      </select>\r\n      <select\r\n        class=\"picker__select--month\"\r\n        [(ngModel)]=\"visibleMonth.monthTxt\"\r\n        (ngModelChange)=\"onUserMonthInput($event)\"\r\n        role=\"menu\"\r\n        aria-label=\"Month selector\"\r\n      >\r\n        <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option>\r\n      </select>\r\n      <a\r\n        href=\"javascript:;\"\r\n        role=\"button\"\r\n        class=\"picker__nav--prev black-text\"\r\n        data-nav=\"-1\"\r\n        aria-controls=\"date-picker-example_table\"\r\n        title=\"Previous month\"\r\n        (click)=\"prevMonth($event)\"\r\n        (keydown.enter)=\"prevMonth($event)\"\r\n        [ngClass]=\"{\r\n          headerbtnenabled: !prevMonthDisabled,\r\n          headerbtndisabled: prevMonthDisabled,\r\n          'disabled grey-text': prevMonthDisabled\r\n        }\"\r\n      ></a>\r\n      <a\r\n        href=\"javascript:;\"\r\n        role=\"button\"\r\n        class=\"picker__nav--next black-text\"\r\n        data-nav=\"1\"\r\n        aria-controls=\"date-picker-example_table\"\r\n        title=\"Next month\"\r\n        (click)=\"nextMonth($event)\"\r\n        (keydown.enter)=\"nextMonth($event)\"\r\n        [ngClass]=\"{\r\n          headerbtnenabled: !nextMonthDisabled,\r\n          headerbtndisabled: nextMonthDisabled,\r\n          'disabled grey-text': nextMonthDisabled\r\n        }\"\r\n      ></a>\r\n    </div>\r\n    <table class=\"picker__table\">\r\n      <thead>\r\n        <tr>\r\n          <th\r\n            class=\"picker__weekday weekdaytitleweeknbr\"\r\n            *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n          >\r\n            #\r\n          </th>\r\n          <th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{ d }}</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let w of dates\">\r\n          <td\r\n            class=\"picker__day daycellweeknbr\"\r\n            *ngIf=\"opts.showWeekNumbers && opts.firstDayOfWeek === 'mo'\"\r\n          >\r\n            {{ w.weekNbr }}\r\n          </td>\r\n          <td\r\n            class=\"picker__day\"\r\n            *ngFor=\"let d of w.week\"\r\n            [ngClass]=\"{\r\n              'picker__day--infocus': d.cmo === currMonthId && !d.disabled,\r\n              disabled: d.disabled,\r\n              tablesingleday: d.cmo === currMonthId && !d.disabled\r\n            }\"\r\n          >\r\n            <div\r\n              *ngIf=\"d.markedDate.marked\"\r\n              class=\"markdate\"\r\n              [ngStyle]=\"{ 'background-color': d.markedDate.color }\"\r\n            ></div>\r\n            <div\r\n              class=\"picker__day\"\r\n              [ngClass]=\"{\r\n                'picker__day--infocus': d.cmo === currMonthId,\r\n                'picker__day--outfocus': d.cmo === nextMonthId || d.cmo === prevMonthId,\r\n                'picker__day--today': d.currDay && opts.markCurrentDay,\r\n                'picker__day--selected picker__day--highlighted':\r\n                  selectedDate.day === d.dateObj.day &&\r\n                  selectedDate.month === d.dateObj.month &&\r\n                  selectedDate.year === d.dateObj.year &&\r\n                  d.cmo === currMonthId\r\n              }\"\r\n              (click)=\"!d.disabled && cellClicked(d); $event.stopPropagation()\"\r\n              (keydown)=\"cellKeyDown($event, d)\"\r\n              tabindex=\"0\"\r\n            >\r\n              {{ d.dateObj.day }}\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"picker__footer\">\r\n      <button\r\n        type=\"button\"\r\n        *ngIf=\"opts.showTodayBtn\"\r\n        class=\"picker__button--today\"\r\n        (click)=\"todayClicked()\"\r\n        role=\"button\"\r\n        [attr.aria-label]=\"opts.todayBtnTxt\"\r\n      >\r\n        {{ opts.todayBtnTxt }}\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        *ngIf=\"opts.showClearDateBtn\"\r\n        class=\"picker__button--clear\"\r\n        (click)=\"removeBtnClicked()\"\r\n        role=\"button\"\r\n        [attr.aria-label]=\"opts.clearBtnTxt\"\r\n      >\r\n        {{ opts.clearBtnTxt }}\r\n      </button>\r\n      <button\r\n        type=\"button\"\r\n        [ngClass]=\"{ 'ml-auto': !opts.showTodayBtn }\"\r\n        class=\"picker__button--close\"\r\n        (click)=\"closeBtnClicked()\"\r\n        role=\"button\"\r\n        [attr.aria-label]=\"opts.closeBtnTxt\"\r\n      >\r\n        {{ opts.closeBtnTxt }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                providers: [UtilService, MYDP_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".mdb-color.lighten-5{background-color:#d0d6e2!important}.mdb-color.lighten-4{background-color:#b1bace!important}.mdb-color.lighten-3{background-color:#929fba!important}.mdb-color.lighten-2{background-color:#7283a7!important}.mdb-color.lighten-1{background-color:#59698d!important}.mdb-color{background-color:#45526e!important}.mdb-color-text{color:#45526e!important}.rgba-mdb-color-slight,.rgba-mdb-color-slight:after{background-color:rgba(69,82,110,.1)}.rgba-mdb-color-light,.rgba-mdb-color-light:after{background-color:rgba(69,82,110,.3)}.rgba-mdb-color-strong,.rgba-mdb-color-strong:after{background-color:rgba(69,82,110,.7)}.mdb-color.darken-1{background-color:#3b465e!important}.mdb-color.darken-2{background-color:#2e3951!important}.mdb-color.darken-3{background-color:#1c2a48!important}.mdb-color.darken-4{background-color:#1c2331!important}.red.lighten-5{background-color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important}.red.lighten-1{background-color:#ef5350!important}.red{background-color:#f44336!important}.red-text{color:#f44336!important}.rgba-red-slight,.rgba-red-slight:after{background-color:rgba(244,67,54,.1)}.rgba-red-light,.rgba-red-light:after{background-color:rgba(244,67,54,.3)}.rgba-red-strong,.rgba-red-strong:after{background-color:rgba(244,67,54,.7)}.red.darken-1{background-color:#e53935!important}.red.darken-2{background-color:#d32f2f!important}.red.darken-3{background-color:#c62828!important}.red.darken-4{background-color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important}.red.accent-3{background-color:#ff1744!important}.red.accent-4{background-color:#d50000!important}.pink.lighten-5{background-color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important}.pink{background-color:#e91e63!important}.pink-text{color:#e91e63!important}.rgba-pink-slight,.rgba-pink-slight:after{background-color:rgba(233,30,99,.1)}.rgba-pink-light,.rgba-pink-light:after{background-color:rgba(233,30,99,.3)}.rgba-pink-strong,.rgba-pink-strong:after{background-color:rgba(233,30,99,.7)}.pink.darken-1{background-color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important}.pink.accent-3{background-color:#f50057!important}.pink.accent-4{background-color:#c51162!important}.purple.lighten-5{background-color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important}.purple{background-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.rgba-purple-slight,.rgba-purple-slight:after{background-color:rgba(156,39,176,.1)}.rgba-purple-light,.rgba-purple-light:after{background-color:rgba(156,39,176,.3)}.rgba-purple-strong,.rgba-purple-strong:after{background-color:rgba(156,39,176,.7)}.purple.darken-1{background-color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important}.purple.accent-4{background-color:#a0f!important}.deep-purple.lighten-5{background-color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important}.deep-purple{background-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.rgba-deep-purple-slight,.rgba-deep-purple-slight:after{background-color:rgba(103,58,183,.1)}.rgba-deep-purple-light,.rgba-deep-purple-light:after{background-color:rgba(103,58,183,.3)}.rgba-deep-purple-strong,.rgba-deep-purple-strong:after{background-color:rgba(103,58,183,.7)}.deep-purple.darken-1{background-color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important}.indigo.lighten-5{background-color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important}.indigo{background-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.rgba-indigo-slight,.rgba-indigo-slight:after{background-color:rgba(63,81,181,.1)}.rgba-indigo-light,.rgba-indigo-light:after{background-color:rgba(63,81,181,.3)}.rgba-indigo-strong,.rgba-indigo-strong:after{background-color:rgba(63,81,181,.7)}.indigo.darken-1{background-color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important}.indigo.darken-3{background-color:#283593!important}.indigo.darken-4{background-color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important}.blue.lighten-5{background-color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important}.blue{background-color:#2196f3!important}.blue-text{color:#2196f3!important}.rgba-blue-slight,.rgba-blue-slight:after{background-color:rgba(33,150,243,.1)}.rgba-blue-light,.rgba-blue-light:after{background-color:rgba(33,150,243,.3)}.rgba-blue-strong,.rgba-blue-strong:after{background-color:rgba(33,150,243,.7)}.blue.darken-1{background-color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important}.blue.accent-3{background-color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important}.light-blue.lighten-5{background-color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important}.light-blue{background-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.rgba-light-blue-slight,.rgba-light-blue-slight:after{background-color:rgba(3,169,244,.1)}.rgba-light-blue-light,.rgba-light-blue-light:after{background-color:rgba(3,169,244,.3)}.rgba-light-blue-strong,.rgba-light-blue-strong:after{background-color:rgba(3,169,244,.7)}.light-blue.darken-1{background-color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important}.cyan.lighten-5{background-color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important}.cyan{background-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.rgba-cyan-slight,.rgba-cyan-slight:after{background-color:rgba(0,188,212,.1)}.rgba-cyan-light,.rgba-cyan-light:after{background-color:rgba(0,188,212,.3)}.rgba-cyan-strong,.rgba-cyan-strong:after{background-color:rgba(0,188,212,.7)}.cyan.darken-1{background-color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important}.cyan.darken-4{background-color:#006064!important}.cyan.accent-1{background-color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important}.teal.lighten-5{background-color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important}.teal{background-color:#009688!important}.teal-text{color:#009688!important}.rgba-teal-slight,.rgba-teal-slight:after{background-color:rgba(0,150,136,.1)}.rgba-teal-light,.rgba-teal-light:after{background-color:rgba(0,150,136,.3)}.rgba-teal-strong,.rgba-teal-strong:after{background-color:rgba(0,150,136,.7)}.teal.darken-1{background-color:#00897b!important}.teal.darken-2{background-color:#00796b!important}.teal.darken-3{background-color:#00695c!important}.teal.darken-4{background-color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important}.green.lighten-5{background-color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important}.green{background-color:#4caf50!important}.green-text{color:#4caf50!important}.rgba-green-slight,.rgba-green-slight:after{background-color:rgba(76,175,80,.1)}.rgba-green-light,.rgba-green-light:after{background-color:rgba(76,175,80,.3)}.rgba-green-strong,.rgba-green-strong:after{background-color:rgba(76,175,80,.7)}.green.darken-1{background-color:#43a047!important}.green.darken-2{background-color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important}.green.accent-3{background-color:#00e676!important}.green.accent-4{background-color:#00c853!important}.light-green.lighten-5{background-color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important}.light-green{background-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.rgba-light-green-slight,.rgba-light-green-slight:after{background-color:rgba(139,195,74,.1)}.rgba-light-green-light,.rgba-light-green-light:after{background-color:rgba(139,195,74,.3)}.rgba-light-green-strong,.rgba-light-green-strong:after{background-color:rgba(139,195,74,.7)}.light-green.darken-1{background-color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important}.lime.lighten-5{background-color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important}.lime{background-color:#cddc39!important}.lime-text{color:#cddc39!important}.rgba-lime-slight,.rgba-lime-slight:after{background-color:rgba(205,220,57,.1)}.rgba-lime-light,.rgba-lime-light:after{background-color:rgba(205,220,57,.3)}.rgba-lime-strong,.rgba-lime-strong:after{background-color:rgba(205,220,57,.7)}.lime.darken-1{background-color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important}.lime.darken-4{background-color:#827717!important}.lime.accent-1{background-color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important}.yellow.lighten-5{background-color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important}.yellow{background-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.rgba-yellow-slight,.rgba-yellow-slight:after{background-color:rgba(255,235,59,.1)}.rgba-yellow-light,.rgba-yellow-light:after{background-color:rgba(255,235,59,.3)}.rgba-yellow-strong,.rgba-yellow-strong:after{background-color:rgba(255,235,59,.7)}.yellow.darken-1{background-color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important}.amber.lighten-5{background-color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important}.amber{background-color:#ffc107!important}.amber-text{color:#ffc107!important}.rgba-amber-slight,.rgba-amber-slight:after{background-color:rgba(255,193,7,.1)}.rgba-amber-light,.rgba-amber-light:after{background-color:rgba(255,193,7,.3)}.rgba-amber-strong,.rgba-amber-strong:after{background-color:rgba(255,193,7,.7)}.amber.darken-1{background-color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important}.orange.lighten-5{background-color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important}.orange{background-color:#ff9800!important}.orange-text{color:#ff9800!important}.rgba-orange-slight,.rgba-orange-slight:after{background-color:rgba(255,152,0,.1)}.rgba-orange-light,.rgba-orange-light:after{background-color:rgba(255,152,0,.3)}.rgba-orange-strong,.rgba-orange-strong:after{background-color:rgba(255,152,0,.7)}.orange.darken-1{background-color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important}.orange.accent-1{background-color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important}.deep-orange.lighten-5{background-color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important}.deep-orange{background-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.rgba-deep-orange-slight,.rgba-deep-orange-slight:after{background-color:rgba(255,87,34,.1)}.rgba-deep-orange-light,.rgba-deep-orange-light:after{background-color:rgba(255,87,34,.3)}.rgba-deep-orange-strong,.rgba-deep-orange-strong:after{background-color:rgba(255,87,34,.7)}.deep-orange.darken-1{background-color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important}.brown.lighten-5{background-color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important}.brown{background-color:#795548!important}.brown-text{color:#795548!important}.rgba-brown-slight,.rgba-brown-slight:after{background-color:rgba(121,85,72,.1)}.rgba-brown-light,.rgba-brown-light:after{background-color:rgba(121,85,72,.3)}.rgba-brown-strong,.rgba-brown-strong:after{background-color:rgba(121,85,72,.7)}.brown.darken-1{background-color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important}.blue-grey.lighten-5{background-color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important}.blue-grey{background-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.rgba-blue-grey-slight,.rgba-blue-grey-slight:after{background-color:rgba(96,125,139,.1)}.rgba-blue-grey-light,.rgba-blue-grey-light:after{background-color:rgba(96,125,139,.3)}.rgba-blue-grey-strong,.rgba-blue-grey-strong:after{background-color:rgba(96,125,139,.7)}.blue-grey.darken-1{background-color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important}.grey.lighten-5{background-color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important}.grey{background-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.rgba-grey-slight,.rgba-grey-slight:after{background-color:rgba(158,158,158,.1)}.rgba-grey-light,.rgba-grey-light:after{background-color:rgba(158,158,158,.3)}.rgba-grey-strong,.rgba-grey-strong:after{background-color:rgba(158,158,158,.7)}.grey.darken-1{background-color:#757575!important}.grey.darken-2{background-color:#616161!important}.grey.darken-3{background-color:#424242!important}.grey.darken-4{background-color:#212121!important}.black{background-color:#000!important}.black-text{color:#000!important}.rgba-black-slight,.rgba-black-slight:after{background-color:rgba(0,0,0,.1)}.rgba-black-light,.rgba-black-light:after{background-color:rgba(0,0,0,.3)}.rgba-black-strong,.rgba-black-strong:after{background-color:rgba(0,0,0,.7)}.picker__box .picker__header .picker__select--month.browser-default,.picker__box .picker__header .picker__select--year.browser-default,.white{background-color:#fff!important}.picker__box .picker__header .picker__date-display,.picker__box .picker__table .picker--focused,.picker__box .picker__table .picker__day--outfocus,.picker__box .picker__table .picker__day--selected,.picker__box .picker__table .picker__day--selected:hover,.white-text{color:#fff!important}.rgba-white-slight,.rgba-white-slight:after{background-color:rgba(255,255,255,.1)}.rgba-white-light,.rgba-white-light:after{background-color:rgba(255,255,255,.3)}.rgba-white-strong,.rgba-white-strong:after{background-color:rgba(255,255,255,.7)}.rgba-stylish-slight{background-color:rgba(62,69,81,.1)}.rgba-stylish-light{background-color:rgba(62,69,81,.3)}.rgba-stylish-strong{background-color:rgba(62,69,81,.7)}.primary-color{background-color:#4285f4!important}.primary-color-dark{background-color:#0d47a1!important}.secondary-color{background-color:#a6c!important}.secondary-color-dark{background-color:#93c!important}.default-color{background-color:#2bbbad!important}.default-color-dark{background-color:#00695c!important}.info-color{background-color:#33b5e5!important}.info-color-dark{background-color:#09c!important}.success-color{background-color:#00c851!important}.success-color-dark{background-color:#007e33!important}.warning-color{background-color:#fb3!important}.warning-color-dark{background-color:#f80!important}.danger-color{background-color:#ff3547!important}.danger-color-dark{background-color:#c00!important}.elegant-color{background-color:#2e2e2e!important}.elegant-color-dark{background-color:#212121!important}.stylish-color{background-color:#4b515d!important}.stylish-color-dark{background-color:#3e4551!important}.unique-color{background-color:#3f729b!important}.unique-color-dark{background-color:#1c2331!important}.special-color{background-color:#37474f!important}.special-color-dark{background-color:#263238!important}.purple-gradient{background:linear-gradient(40deg,#ff6ec4,#7873f5)!important}.peach-gradient{background:linear-gradient(40deg,#ffd86f,#fc6262)!important}.aqua-gradient{background:linear-gradient(40deg,#2096ff,#05ffa3)!important}.blue-gradient{background:linear-gradient(40deg,#45cafc,#303f9f)!important}.purple-gradient-rgba{background:linear-gradient(40deg,rgba(255,110,196,.9),rgba(120,115,245,.9))!important}.peach-gradient-rgba{background:linear-gradient(40deg,rgba(255,216,111,.9),rgba(252,98,98,.9))!important}.aqua-gradient-rgba{background:linear-gradient(40deg,rgba(32,150,255,.9),rgba(5,255,163,.9))!important}.blue-gradient-rgba{background:linear-gradient(40deg,rgba(69,202,252,.9),rgba(48,63,159,.9))!important}.dark-grey-text,.dark-grey-text:focus,.dark-grey-text:hover{color:#4f4f4f!important}.hoverable{box-shadow:none;transition:.55s ease-in-out}.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);transition:.55s ease-in-out}.z-depth-0{box-shadow:none!important}.z-depth-1{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)!important}.z-depth-1-half{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)!important}.z-depth-2{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)!important}.z-depth-3{box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)!important}.z-depth-4{box-shadow:0 16px 28px 0 rgba(0,0,0,.22),0 25px 55px 0 rgba(0,0,0,.21)!important}.z-depth-5{box-shadow:0 27px 24px 0 rgba(0,0,0,.2),0 40px 77px 0 rgba(0,0,0,.22)!important}.disabled,:disabled{pointer-events:none!important}a{cursor:pointer;text-decoration:none;color:#0275d8;transition:.2s ease-in-out}a:hover{text-decoration:none;color:#014c8c;transition:.2s ease-in-out}a.disabled:hover,a:disabled:hover{color:#0275d8}a:not([href]):not([tabindex]),a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}.picker__input{cursor:default}.picker__input.picker__input--active{border-color:#0089ec}.picker{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;/*!\n   * Default mobile-first, responsive styling for pickadate.js\n   * Demo: http://amsul.github.io/pickadate.js\n   */z-index:90;font-size:15px;text-align:left;line-height:1.2;color:#000;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker .picker__holder{width:100%;overflow-scrolling:touch;position:fixed;transition:background .15s ease-out,top .15s;-webkit-backface-visibility:hidden;backface-visibility:hidden}.picker .picker__frame,.picker .picker__holder{bottom:0;left:0;right:0;top:100%}.picker .picker__frame{position:absolute;margin:0 auto;min-width:16rem;max-width:20.3125rem;width:18.75rem;max-height:21.875rem;opacity:0;transition:.15s ease-out}@media (min-height:40.125em){.picker .picker__frame{margin-bottom:7.5%}}.picker .picker__frame .picker__wrap{display:table;width:100%;height:100%}.picker .picker__box{background:#fff;display:table-cell;vertical-align:middle}@media (min-height:28.875em){.picker .picker__frame{overflow:visible;top:auto;bottom:-100%;max-height:80%}.picker .picker__frame .picker__wrap{display:block}.picker .picker__box{display:block;border:1px solid #777;border-top-color:#898989;border-bottom-width:0;border-radius:5px 5px 0 0;box-shadow:0 .75rem 2.25rem 1rem rgba(0,0,0,.24)}}.picker--opened .picker__holder{top:0;background:rgba(0,0,0,.32);zoom:1;transition:background .15s ease-out}.picker--opened .picker__frame{top:0;opacity:1}@media (min-height:35.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.datepicker.picker__input.picker__input--active,.timepicker.picker__input.picker__input--active{border-bottom:1px solid #e3f2fd}.picker__box{padding:0;border-radius:.125rem;overflow:hidden}.picker__box .picker__header{text-align:center;position:relative;margin-bottom:1.25rem}.picker__box .picker__header select{display:inline-block!important}.picker__box .picker__header .picker__date-display{display:flex;justify-content:center;background-color:#4285f4;font-weight:400;padding-bottom:.3125rem}.picker__box .picker__header .picker__date-display .picker__weekday-display{padding:.875rem .4375rem .3125rem .5rem;letter-spacing:.5;font-size:2.1rem;margin-top:1.25rem}.picker__box .picker__header .picker__date-display .picker__day-display,.picker__box .picker__header .picker__date-display .picker__month-display{font-size:2.1rem;padding:.875rem .3125rem .25rem;margin-top:1.25rem}.picker__box .picker__header .picker__date-display .picker__year-display{font-size:1.1rem;color:rgba(255,255,255,.4);position:absolute;top:.625rem;left:45%}.picker__box .picker__header .picker__month,.picker__box .picker__header .picker__year{display:inline-block;margin-left:.25em;margin-right:.25em}.picker__box .picker__header .picker__select--month,.picker__box .picker__header .picker__select--year{height:2em;padding:0;margin-left:.25em;margin-right:.25em;display:inline-block;border:none;background:0 0;border-bottom:1px solid #ced4da;outline:0}.picker__box .picker__header .picker__select--month:focus,.picker__box .picker__header .picker__select--year:focus{border-color:rgba(0,0,0,.05)}.picker__box .picker__header .picker__select--year{width:30%}.picker__box .picker__header .picker__select--month.browser-default{display:inline;width:40%}.picker__box .picker__header .picker__select--year.browser-default{display:inline;width:25%}.picker__box .picker__header .picker__nav--next,.picker__box .picker__header .picker__nav--prev{position:absolute;padding:.1875rem .625rem;box-sizing:content-box}.picker__box .picker__header .picker__nav--next:hover,.picker__box .picker__header .picker__nav--prev:hover{cursor:pointer;color:#000}.picker__box .picker__header .picker__nav--next:before,.picker__box .picker__header .picker__nav--prev:before{display:block}.picker__box .picker__header .picker__nav--prev{left:-.5em;padding-right:1.25em}.picker__box .picker__header .picker__nav--prev:before{content:'\\f104'}.picker__box .picker__header .picker__nav--next{right:-.2em;padding-left:1.25em}.picker__box .picker__header .picker__nav--next:before{content:'\\f105'}.picker__box .picker__header .picker__nav--disabled,.picker__box .picker__header .picker__nav--disabled:before,.picker__box .picker__header .picker__nav--disabled:before:hover,.picker__box .picker__header .picker__nav--disabled:hover{cursor:default;background:0 0;border-right-color:#f5f5f5;border-left-color:#f5f5f5}.picker__box .picker__table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:1rem;width:100%;margin-top:.75em;margin-bottom:.5em}.picker__box .picker__table td,.picker__box .picker__table th{text-align:center}.picker__box .picker__table td{margin:0;padding:0}.picker__box .picker__table .picker__weekday{width:14%;font-size:.9em;padding-bottom:.25em;color:#999;font-weight:500}@media (min-height:33.875em){.picker__box .picker__table .picker__weekday{padding-bottom:.25em}}.picker__box .picker__table .picker__day--today{position:relative;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__box .picker__table .picker__day.picker__day--today{color:#4285f4}.picker__box .picker__table .picker__day--disabled:before{border-top-color:#aaa}.picker__box .picker__table .picker__day--infocus{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:#595959}.picker__box .picker__table .picker__day--infocus:hover{cursor:pointer;color:#000;font-weight:500}.picker__box .picker__table .picker__day--outfocus{display:none;padding:.75rem 0}.picker__box .picker__table .picker__day--outfocus:hover{cursor:pointer;color:#ddd;font-weight:500}.picker__box .picker__table .picker--focused .picker__day--highlighted,.picker__box .picker__table .picker__day--highlighted:hover{cursor:pointer}.picker__box .picker__table .picker--focused,.picker__box .picker__table .picker__day--selected,.picker__box .picker__table .picker__day--selected:hover{border-radius:50%;-webkit-transform:scale(.9);transform:scale(.9);background-color:#4285f4;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.picker__box .picker__table .picker--focused.picker__day--outfocus,.picker__box .picker__table .picker__day--selected.picker__day--outfocus,.picker__box .picker__table .picker__day--selected:hover.picker__day--outfocus{background-color:#ecf2fc}.picker__box .picker__table .picker--focused,.picker__box .picker__table .picker__day--disabled,.picker__box .picker__table .picker__day--disabled:hover{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default}.picker__box .picker__table .picker__day--highlighted.picker__day--disabled,.picker__box .picker__table .picker__day--highlighted.picker__day--disabled:hover{background:#bbb}.picker__box .picker__footer{text-align:right;padding:.3125rem .625rem;display:flex;align-items:center;justify-content:space-between}.picker__box .picker__footer .picker__button--clear,.picker__box .picker__footer .picker__button--close,.picker__box .picker__footer .picker__button--today{border:1px solid #fff;background:#fff;font-size:.8em;padding:1rem 0 .7rem;font-weight:700;width:33%;display:inline-block;vertical-align:bottom;text-transform:uppercase}.picker__box .picker__footer .picker__button--clear:hover,.picker__box .picker__footer .picker__button--close:hover,.picker__box .picker__footer .picker__button--today:hover{cursor:pointer;color:#000;background:#b1dcfb;border-bottom-color:#b1dcfb}.picker__box .picker__footer .picker__button--clear:focus,.picker__box .picker__footer .picker__button--close:focus,.picker__box .picker__footer .picker__button--today:focus{background:#b1dcfb;border-color:rgba(0,0,0,.05);outline:0}.picker__box .picker__footer .picker__button--clear:before,.picker__box .picker__footer .picker__button--close:before,.picker__box .picker__footer .picker__button--today:before{position:relative;display:inline-block;height:0}.picker__box .picker__footer .picker__button--clear:before,.picker__box .picker__footer .picker__button--today:before{content:' ';margin-right:.45em}.picker__box .picker__footer .picker__button--today:before{top:-.05em;width:0;border-top:.66em solid #0059bc;border-left:.66em solid transparent}.picker__box .picker__footer .picker__button--clear:before{top:-.25em;width:.66em;border-top:3px solid #e20}.picker__box .picker__footer .picker__button--close:before{content:'\\D7';top:-.1em;vertical-align:top;font-size:1.1em;margin-right:.35em;color:#777}.picker__box .picker__footer .picker__button--today[disabled],.picker__box .picker__footer .picker__button--today[disabled]:hover{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default}.picker__box .picker__footer .picker__button--today[disabled]:before{border-top-color:#aaa}.picker__calendar-container{padding:0 1rem}.picker__calendar-container thead{border:none}.picker__select--month,.picker__select--year{display:inline-block!important;height:2em;padding:0;margin-left:.25em;margin-right:.25em}.picker .picker__holder{overflow-y:visible;display:none}.picker.picker--opened .picker__holder{display:block}.picker__box .picker__table td.picker__day div.picker__day{border-radius:50%}.picker__day-display,.picker__month-display,.picker__weekday-display{font-size:2rem!important}.clockpicker-am-pm-block button{color:#fff!important}.mydp{line-height:1.1;display:inline-block;position:relative;border-radius:4px}.picker__frame{min-height:506.45px}.picker__nav--next,.picker__nav--prev{position:absolute;padding:.5em 1.55em;width:1em;height:1em;box-sizing:content-box;bottom:0;border:0;background:0 0}.picker__nav--next:before,.picker__nav--prev:before{font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important}.picker__nav--prev{padding-right:1.25em;left:0!important}.picker__nav--next{right:-1em;padding-left:1.25em}.picker__box .picker__header .picker__nav--next:before,.picker__box .picker__header .picker__nav--prev:before{font-family:unset;font-weight:unset;content:unset}.picker__box .picker__header .picker__nav--next:after,.picker__box .picker__header .picker__nav--prev:after{content:'';display:block;border-style:solid;border-width:0 2px 2px 0;padding:2.5px;position:absolute}.picker__nav--prev::after{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.picker__nav--next::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.picker__header{overflow:hidden}.picker__box .picker__table td.picker__day{padding:0;position:relative}.picker__box .picker__table td.picker__day.disabled{color:#ccc;background:#eee}.picker__box .picker__table td.picker__day div.picker__day{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent;outline:0;transition:.3s}.picker__box .picker__table td.picker__day div.picker__day:focus,.picker__box .picker__table td.picker__day div.picker__day:hover{cursor:pointer;color:#000;font-weight:500}.picker__box .picker__table td.picker__day div.picker__day.picker__day--today{color:#4285f4}.mydp .markdate{position:absolute;width:5px;height:5px;border-radius:50%;top:2px;right:2px}@media (max-height:35.875em){.picker--opened .picker__holder{overflow-y:scroll}}.validate-success.ng-valid .mydp-date{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}.validate-success.ng-valid .mydp label{color:#00c851!important}.form-submitted .validate-error.ng-invalid .mydp-date,.validate-error.ng-invalid.ng-touched .mydp-date{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.form-submitted .validate-error.ng-invalid .mydp label,.validate-error.ng-invalid.ng-touched .mydp label{color:#f44336!important}.md-form mdb-date-picker .md-form{margin:0}.datepicker-inline-icon{position:absolute;top:5px;right:0;padding:.5rem}.md-outline>.datepicker-inline-icon{top:4px}.datepicker-inline{position:absolute}.datepicker-inline .picker__header{padding:.3125rem .625rem}.datepicker-inline .picker__nav--next,.datepicker-inline .picker__nav--prev{bottom:unset!important}.datepicker-inline .picker__frame{min-height:unset!important;max-height:unset!important;position:unset!important;margin:unset;border:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2RhdGUtcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBRVQsV0FBVyxFQUNYLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFnQnpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVuRCxNQUFNLE9BQU8sbUJBQW1CLEdBQVE7SUFDdEMsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFDO0lBQ3JELEtBQUssRUFBRSxJQUFJO0NBQ1o7OztJQUdDLE9BQVE7SUFDUixpQkFBa0I7SUFDbEIsZ0JBQWlCO0lBQ2pCLGtCQUFtQjs7Ozs7Ozs7SUFJbkIsU0FBVTtJQUNWLFNBQVU7Ozs7OztJQUlWLFFBQVM7SUFDVCxPQUFROzs7Ozs7SUFJUixTQUFVO0lBQ1YsU0FBVTs7Ozs7O0lBSVYsT0FBUTtJQUNSLE9BQVE7SUFDUixPQUFROzs7Ozs7SUFHTixRQUFRLEdB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ZTs7SUFDZiw0Q0FBbUI7O0lBRW5CLHFDQUlFOztJQUdGLHNDQXlDRTs7SUFFRix3Q0FBd0I7O0lBQ3hCLHVDQUF1Qjs7SUFDdkIsK0NBQTBCOztJQUUxQixzREFBNEI7O0lBQzVCLG1EQUE4Qjs7SUFDOUIsMENBQXFCOztJQUNyQiwyQ0FBdUI7O0lBRXZCLGtEQUEyQjs7SUFtRTNCLDRDQUF3Qzs7SUFDeEMsNkNBQW1DOztJQWpFakMsc0NBQXVCOzs7OztJQUN2QiwwQ0FBMkI7Ozs7O0lBQzNCLCtDQUFvQzs7Ozs7SUFDcEMsNkNBQWdDOzs7OztJQUNoQyx1Q0FBZ0M7Ozs7O0lBQ2hDLGdEQUF3RTs7Ozs7SUFDeEUsMENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU15TG9jYWxlcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9sb2NhbGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIFJlbmRlcmVyMixcclxuICBmb3J3YXJkUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFBMQVRGT1JNX0lELFxyXG4gIEluamVjdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBPcHRpb25hbCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1xyXG4gIElNeURhdGUsXHJcbiAgSU15RGF0ZVJhbmdlLFxyXG4gIElNeU1vbnRoLFxyXG4gIElNeUNhbGVuZGFyRGF5LFxyXG4gIElNeVdlZWssXHJcbiAgSU15RGF5TGFiZWxzLFxyXG4gIElNeU1vbnRoTGFiZWxzLFxyXG4gIElNeUlucHV0RmllbGRDaGFuZ2VkLFxyXG4gIElNeUNhbGVuZGFyVmlld0NoYW5nZWQsXHJcbiAgSU15SW5wdXRGb2N1c0JsdXIsXHJcbiAgSU15TWFya2VkRGF0ZXMsXHJcbiAgSU15TWFya2VkRGF0ZSxcclxuICBJTXlPcHRpb25zLFxyXG59IGZyb20gJy4vaW50ZXJmYWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGVwaWNrZXJMb2NhbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRlcGlja2VyVXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTURCX0RBVEVfT1BUSU9OUyB9IGZyb20gJy4vb3B0aW9ucy50b2tlbic7XHJcblxyXG5leHBvcnQgY29uc3QgTVlEUF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTURCRGF0ZVBpY2tlckNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWUsXHJcbn07XHJcblxyXG5lbnVtIENhbFRvZ2dsZSB7XHJcbiAgT3BlbiA9IDEsXHJcbiAgQ2xvc2VCeURhdGVTZWwgPSAyLFxyXG4gIENsb3NlQnlDYWxCdG4gPSAzLFxyXG4gIENsb3NlQnlPdXRDbGljayA9IDQsXHJcbn1cclxuXHJcbmVudW0gWWVhciB7XHJcbiAgbWluID0gMTAwMCxcclxuICBtYXggPSA5OTk5LFxyXG59XHJcblxyXG5lbnVtIElucHV0Rm9jdXNCbHVyIHtcclxuICBmb2N1cyA9IDEsXHJcbiAgYmx1ciA9IDIsXHJcbn1cclxuXHJcbmVudW0gS2V5Q29kZSB7XHJcbiAgZW50ZXIgPSAxMyxcclxuICBzcGFjZSA9IDMyLFxyXG59XHJcblxyXG5lbnVtIE1vbnRoSWQge1xyXG4gIHByZXYgPSAxLFxyXG4gIGN1cnIgPSAyLFxyXG4gIG5leHQgPSAzLFxyXG59XHJcblxyXG5sZXQgdW5pcXVlSWQgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZGItZGF0ZS1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnbWRiZGF0ZXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGFwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtcGlja2VyLW1vZHVsZS5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbVXRpbFNlcnZpY2UsIE1ZRFBfVkFMVUVfQUNDRVNTT1JdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNREJEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgdGFiSW5kZXg6IGFueTtcclxuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVmYXVsdE1vbnRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VsRGF0ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBzZWxlY3RvcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9wZW5PbkZvY3VzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBvdXRsaW5lSW5wdXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbmxpbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbmxpbmVJY29uID0gJ2ZhciBmYS1jYWxlbmRhci1hbHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBpZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuICBzZXQgaWQodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5faWQgPSB2YWx1ZSB8fCB0aGlzLl91aWQ7XHJcbiAgfVxyXG4gIHByaXZhdGUgX2lkOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRGaWVsZENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZpZWxkQ2hhbmdlZD4gPSBuZXcgRXZlbnRFbWl0dGVyPFxyXG4gICAgSU15SW5wdXRGaWVsZENoYW5nZWRcclxuICA+KCk7XHJcbiAgQE91dHB1dCgpIGNhbGVuZGFyVmlld0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxJTXlDYWxlbmRhclZpZXdDaGFuZ2VkPiA9IG5ldyBFdmVudEVtaXR0ZXI8XHJcbiAgICBJTXlDYWxlbmRhclZpZXdDaGFuZ2VkXHJcbiAgPigpO1xyXG4gIEBPdXRwdXQoKSBjYWxlbmRhclRvZ2dsZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRGb2N1c0JsdXI6IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZvY3VzQmx1cj4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUlucHV0Rm9jdXNCbHVyPigpO1xyXG4gIEBPdXRwdXQoKSBjbG9zZUJ1dHRvbkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxNREJEYXRlUGlja2VyQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8XHJcbiAgICBNREJEYXRlUGlja2VyQ29tcG9uZW50XHJcbiAgPigpO1xyXG4gIEBPdXRwdXQoKSBjbGVhckJ1dHRvbkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxNREJEYXRlUGlja2VyQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8XHJcbiAgICBNREJEYXRlUGlja2VyQ29tcG9uZW50XHJcbiAgPigpO1xyXG4gIEBPdXRwdXQoKSB0b2RheUJ1dHRvbkNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxNREJEYXRlUGlja2VyQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8XHJcbiAgICBNREJEYXRlUGlja2VyQ29tcG9uZW50XHJcbiAgPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdkaXZGb2N1cycsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgZGl2Rm9jdXM6IGFueTtcclxuICBAVmlld0NoaWxkKCdpbmxpbmVJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgaW5saW5lSW5wdXQ6IGFueTtcclxuICBAVmlld0NoaWxkKCdpbmxpbmVJY29uVG9nZ2xlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBpbmxpbmVJY29uVG9nZ2xlOiBhbnk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3BpY2tlckZyYW1lJywgeyBzdGF0aWM6IGZhbHNlIH0pIHBpY2tlckZyYW1lOiBFbGVtZW50UmVmO1xyXG5cclxuICBwdWJsaWMgaXNEYXRlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgbGFiZWxBY3RpdmUgPSBmYWxzZTtcclxuICBwdWJsaWMgc2hvd1NlbGVjdG9yID0gZmFsc2U7XHJcbiAgcHVibGljIHZpc2libGVNb250aDogSU15TW9udGggPSB7IG1vbnRoVHh0OiAnJywgbW9udGhOYnI6IDAsIHllYXI6IDEgfTtcclxuICBwdWJsaWMgc2VsZWN0ZWRNb250aDogSU15TW9udGggPSB7IG1vbnRoVHh0OiAnJywgbW9udGhOYnI6IDAsIHllYXI6IDAgfTtcclxuICBwdWJsaWMgc2VsZWN0ZWREYXRlOiBJTXlEYXRlID0geyB5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwIH07XHJcbiAgcHVibGljIHdlZWtEYXlzOiBBcnJheTxzdHJpbmc+ID0gW107XHJcbiAgcHVibGljIGRhdGVzOiBBcnJheTxJTXlXZWVrPiA9IFtdO1xyXG4gIHB1YmxpYyBzZWxlY3Rpb25EYXlUeHQgPSAnJztcclxuICBwdWJsaWMgaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICBwdWJsaWMgZGlzYWJsZVRvZGF5QnRuID0gZmFsc2U7XHJcbiAgcHVibGljIGRheUlkeCA9IDA7XHJcbiAgcHVibGljIHdlZWtEYXlPcHRzOiBBcnJheTxzdHJpbmc+ID0gWydzdScsICdtbycsICd0dScsICd3ZScsICd0aCcsICdmcicsICdzYSddO1xyXG5cclxuICBwdWJsaWMgZWRpdE1vbnRoID0gZmFsc2U7XHJcbiAgcHVibGljIGludmFsaWRNb250aCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBlZGl0WWVhciA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpbnZhbGlkWWVhciA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgcHJldk1vbnRoRGlzYWJsZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgbmV4dE1vbnRoRGlzYWJsZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgcHJldlllYXJEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBuZXh0WWVhckRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBwcmV2TW9udGhJZDogbnVtYmVyID0gTW9udGhJZC5wcmV2O1xyXG4gIHB1YmxpYyBjdXJyTW9udGhJZDogbnVtYmVyID0gTW9udGhJZC5jdXJyO1xyXG4gIHB1YmxpYyBuZXh0TW9udGhJZDogbnVtYmVyID0gTW9udGhJZC5uZXh0O1xyXG5cclxuICBwcml2YXRlIF91aWQgPSBgbWRiLWRhdGVwaWNrZXItJHt1bmlxdWVJZCsrfWA7XHJcblxyXG4gIGlzT3BlbiA9IGZhbHNlO1xyXG4gIGlzRGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHRtcDogSU15RGF0ZSA9IHtcclxuICAgIHllYXI6IHRoaXMuZ2V0VG9kYXkoKS55ZWFyLFxyXG4gICAgbW9udGg6IHRoaXMuZ2V0VG9kYXkoKS5tb250aCxcclxuICAgIGRheTogdGhpcy5nZXRUb2RheSgpLmRheSxcclxuICB9O1xyXG5cclxuICAvLyBEZWZhdWx0IG9wdGlvbnNcclxuICBwdWJsaWMgb3B0czogYW55ID0ge1xyXG4gICAgc3RhcnREYXRlOiA8YW55PicnLFxyXG4gICAgY2xvc2VBZnRlclNlbGVjdDogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBkYXlMYWJlbHNGdWxsOiA8SU15RGF5TGFiZWxzPnt9LFxyXG4gICAgZGF5TGFiZWxzOiA8SU15RGF5TGFiZWxzPnt9LFxyXG4gICAgbW9udGhMYWJlbHNGdWxsOiA8SU15TW9udGhMYWJlbHM+e30sXHJcbiAgICBtb250aExhYmVsczogPElNeU1vbnRoTGFiZWxzPnt9LFxyXG4gICAgZGF0ZUZvcm1hdDogPHN0cmluZz4nJyxcclxuICAgIHNob3dUb2RheUJ0bjogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIHRvZGF5QnRuVHh0OiA8c3RyaW5nPicnLFxyXG4gICAgZmlyc3REYXlPZldlZWs6IDxzdHJpbmc+JycsXHJcbiAgICBzdW5IaWdobGlnaHQ6IDxib29sZWFuPnRydWUsXHJcbiAgICBtYXJrQ3VycmVudERheTogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIGRpc2FibGVVbnRpbDogPElNeURhdGU+eyB5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwIH0sXHJcbiAgICBkaXNhYmxlU2luY2U6IDxJTXlEYXRlPnsgeWVhcjogMCwgbW9udGg6IDAsIGRheTogMCB9LFxyXG4gICAgZGlzYWJsZURheXM6IDxBcnJheTxJTXlEYXRlIHwgbnVtYmVyPj5bXSxcclxuICAgIGVuYWJsZURheXM6IDxBcnJheTxJTXlEYXRlIHwgbnVtYmVyPj5bXSxcclxuICAgIGVkaXRhYmxlRGF0ZUZpZWxkOiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgbWFya0RhdGVzOiA8QXJyYXk8SU15TWFya2VkRGF0ZXM+PltdLFxyXG4gICAgbWFya1dlZWtlbmRzOiA8SU15TWFya2VkRGF0ZT57fSxcclxuICAgIGRpc2FibGVEYXRlUmFuZ2VzOiA8QXJyYXk8SU15RGF0ZVJhbmdlPj5bXSxcclxuICAgIGRpc2FibGVXZWVrZW5kczogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBzaG93V2Vla051bWJlcnM6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgaGVpZ2h0OiA8c3RyaW5nPiczMnB4JyxcclxuICAgIHdpZHRoOiA8c3RyaW5nPicxMDAlJyxcclxuICAgIHNlbGVjdGlvblR4dEZvbnRTaXplOiA8c3RyaW5nPicxcmVtJyxcclxuICAgIHNob3dDbGVhckRhdGVCdG46IDxib29sZWFuPnRydWUsXHJcbiAgICBhbGlnblNlbGVjdG9yUmlnaHQ6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgZGlzYWJsZUhlYWRlckJ1dHRvbnM6IDxib29sZWFuPnRydWUsXHJcbiAgICBtaW5ZZWFyOiA8bnVtYmVyPlllYXIubWluLFxyXG4gICAgbWF4WWVhcjogPG51bWJlcj5ZZWFyLm1heCxcclxuICAgIGNvbXBvbmVudERpc2FibGVkOiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIHNob3dTZWxlY3RvckFycm93OiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgdXNlRGF0ZU9iamVjdDogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBhcmlhTGFiZWxJbnB1dEZpZWxkOiA8c3RyaW5nPidEYXRlIGlucHV0IGZpZWxkJyxcclxuICAgIGFyaWFMYWJlbENsZWFyRGF0ZTogPHN0cmluZz4nQ2xlYXIgRGF0ZScsXHJcbiAgICBhcmlhTGFiZWxPcGVuQ2FsZW5kYXI6IDxzdHJpbmc+J09wZW4gQ2FsZW5kYXInLFxyXG4gICAgYXJpYUxhYmVsUHJldk1vbnRoOiA8c3RyaW5nPidQcmV2aW91cyBNb250aCcsXHJcbiAgICBhcmlhTGFiZWxOZXh0TW9udGg6IDxzdHJpbmc+J05leHQgTW9udGgnLFxyXG4gICAgYXJpYUxhYmVsUHJldlllYXI6IDxzdHJpbmc+J1ByZXZpb3VzIFllYXInLFxyXG4gICAgYXJpYUxhYmVsTmV4dFllYXI6IDxzdHJpbmc+J05leHQgWWVhcicsXHJcbiAgfTtcclxuXHJcbiAgcHVibGljIG1vbnRoczogYW55ID0gW107XHJcbiAgcHVibGljIHllYXJzOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgZWxlbWVudE51bWJlcjogYW55O1xyXG5cclxuICBmaXJzdFRpbWVPcGVuZWRNb2RhbCA9IHRydWU7XHJcbiAgbW9kYWxIZWlnaHRCZWZvcmU6IGFueSA9IG51bGw7XHJcbiAgaXNNb2JpbGU6IGFueSA9IG51bGw7XHJcbiAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcclxuXHJcbiAgZG9jdW1lbnRDbGlja0Z1bjogRnVuY3Rpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGVsZW06IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGxvY2FsZVNlcnZpY2U6IExvY2FsZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHV0aWxTZXJ2aWNlOiBVdGlsU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChNREJfREFURV9PUFRJT05TKSBwcml2YXRlIF9nbG9iYWxPcHRpb25zOiBJTXlPcHRpb25zLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xyXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgcmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgJiZcclxuICAgICAgICBldmVudC50YXJnZXQgJiZcclxuICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0ICYmXHJcbiAgICAgICAgIXRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ0bkNsaWNrZWQoKTtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlPdXRDbGljayk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BpY2tlcl9faG9sZGVyJykpIHtcclxuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xpY2tlZCgpO1xyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0cnVlICYmIGV2ZW50LnRhcmdldCAmJiB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldE1vbnRoWWVhckVkaXQoKTtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlkID0gdGhpcy5pZDtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIGlmICh0aGlzLm9wdHMuc3RhcnREYXRlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdHMuc3RhcnREYXRlLnRvU3RyaW5nKCkuaW5kZXhPZignVCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm9wdHMuc3RhcnREYXRlLnRvU3RyaW5nKCkuaW5kZXhPZignVCcpO1xyXG4gICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gdGhpcy5vcHRzLnN0YXJ0RGF0ZS50b1N0cmluZygpLnN1YnN0cigwLCBpbmRleCk7XHJcbiAgICAgICAgICB0aGlzLm9uVXNlckRhdGVJbnB1dChzdGFydERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBDaGFuZ2VaSW5kZXgoKSB7XHJcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gRml4IGZvciB2aXNpYmxlIGRhdGUgLyB0aW1lIHBpY2tlciBpbnB1dCB3aGVuIHBpY2tlciBwbGF0ZSBpcyB2aXNpYmxlLlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBvcGVuZWRQaWNrZXI6IGFueSA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBpY2tlci0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBjb25zdCBhbGxQaWNrZXJzOiBhbnkgPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waWNrZXInKTtcclxuICAgICAgICAgIGFsbFBpY2tlcnMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgJ3otaW5kZXgnLCAnMCcpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG9wZW5lZFBpY2tlciwgJ3otaW5kZXgnLCAnMTAwJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2VDYjogKF86IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG4gIG9uVG91Y2hlZENiOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIGlmICh0aGlzLmlubGluZSkge1xyXG4gICAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMuaW5saW5lSWNvbiArPSAnIGRpc2FibGVkIGdyZXktdGV4dCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdG8gPSB0aGlzLmlubGluZUljb24uaW5kZXhPZignZGlzYWJsZWQnKTtcclxuICAgICAgICB0aGlzLmlubGluZUljb24gPSB0aGlzLmlubGluZUljb24uc3Vic3RyKDAsIHRvKTtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSW5saW5lU3R5bGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtY29udGVudCcpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCxcclxuICAgICAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICdoZWlnaHQgMC4zcydcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgICAgdGhpcy5tb2RhbEhlaWdodEJlZm9yZSArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICh0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBhcyBhbnkpLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgfSwgMTU1KTtcclxuICAgIHRoaXMubGFiZWxBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldExvY2FsZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHRzOiBhbnkgPSB0aGlzLmxvY2FsZVNlcnZpY2UuZ2V0TG9jYWxlT3B0aW9ucyh0aGlzLmxvY2FsZSk7XHJcbiAgICBPYmplY3Qua2V5cyhvcHRzKS5mb3JFYWNoKGsgPT4ge1xyXG4gICAgICB0aGlzLm9wdHNba10gPSBvcHRzW2tdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRMb2NhbGUobG9jYWxlOiBJTXlMb2NhbGVzKSB7XHJcbiAgICB0aGlzLmxvY2FsZVNlcnZpY2UubG9jYWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubG9jYWxlU2VydmljZS5sb2NhbGVzLCBsb2NhbGUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGhpc1llYXIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzWWVhci5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2dsb2JhbE9wdGlvbnMsIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgdGhpcy5vcHRzW2tdID0gb3B0aW9uc1trXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub3B0cy5jb21wb25lbnREaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3B0cy5taW5ZZWFyID09PSAxMDAwKSB7XHJcbiAgICAgIHRoaXMub3B0cy5taW5ZZWFyID0gY3VycmVudFllYXIgLSA3O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wdHMubWF4WWVhciA9PT0gOTk5OSkge1xyXG4gICAgICB0aGlzLm9wdHMubWF4WWVhciA9IGN1cnJlbnRZZWFyICsgNztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0TW9udGhZZWFyRWRpdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdE1vbnRoID0gZmFsc2U7XHJcbiAgICB0aGlzLmVkaXRZZWFyID0gZmFsc2U7XHJcbiAgICB0aGlzLmludmFsaWRNb250aCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbnZhbGlkWWVhciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25Vc2VyRGF0ZUlucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkKFxyXG4gICAgICAgIHZhbHVlLFxyXG4gICAgICAgIHRoaXMub3B0cy5kYXRlRm9ybWF0LFxyXG4gICAgICAgIHRoaXMub3B0cy5taW5ZZWFyLFxyXG4gICAgICAgIHRoaXMub3B0cy5tYXhZZWFyLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgICAgdGhpcy5vcHRzLm1vbnRoTGFiZWxzLFxyXG4gICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAodGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZShkYXRlKSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZShkYXRlKTtcclxuICAgICAgICB0aGlzLnNldFZpc2libGVNb250aCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW52YWxpZERhdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pbnZhbGlkRGF0ZSkge1xyXG4gICAgICB0aGlzLmlucHV0RmllbGRDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICBkYXRlRm9ybWF0OiB0aGlzLm9wdHMuZGF0ZUZvcm1hdCxcclxuICAgICAgICB2YWxpZDogISh2YWx1ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5pbnZhbGlkRGF0ZSksXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlQ2IoJycpO1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzSW5wdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub3Blbk9uRm9jdXMgJiYgIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHRoaXMub3BlbkJ0bkNsaWNrZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0Rm9jdXNCbHVyLmVtaXQoeyByZWFzb246IElucHV0Rm9jdXNCbHVyLmZvY3VzLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgKHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIGFueSkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIC8vIHRoaXMuZGl2Rm9jdXMubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVySW5wdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB0aGlzLmlucHV0Rm9jdXNCbHVyLmVtaXQoeyByZWFzb246IElucHV0Rm9jdXNCbHVyLmJsdXIsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBvblVzZXJNb250aElucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZE1vbnRoID0gZmFsc2U7XHJcbiAgICBjb25zdCBtOiBudW1iZXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhMYWJlbFZhbGlkKHZhbHVlLCB0aGlzLm9wdHMubW9udGhMYWJlbHMpO1xyXG4gICAgaWYgKG0gIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZWRpdE1vbnRoID0gZmFsc2U7XHJcbiAgICAgIGlmIChtICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge1xyXG4gICAgICAgICAgbW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KG0pLFxyXG4gICAgICAgICAgbW9udGhOYnI6IG0sXHJcbiAgICAgICAgICB5ZWFyOiB0aGlzLnZpc2libGVNb250aC55ZWFyLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmludmFsaWRNb250aCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblVzZXJZZWFySW5wdXQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnZhbGlkWWVhciA9IGZhbHNlO1xyXG4gICAgY29uc3QgeTogbnVtYmVyID0gdGhpcy51dGlsU2VydmljZS5pc1llYXJMYWJlbFZhbGlkKFxyXG4gICAgICBOdW1iZXIodmFsdWUpLFxyXG4gICAgICB0aGlzLm9wdHMubWluWWVhcixcclxuICAgICAgdGhpcy5vcHRzLm1heFllYXJcclxuICAgICk7XHJcbiAgICBpZiAoeSAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5lZGl0WWVhciA9IGZhbHNlO1xyXG4gICAgICBpZiAoeSAhPT0gdGhpcy52aXNpYmxlTW9udGgueWVhcikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0ge1xyXG4gICAgICAgICAgbW9udGhUeHQ6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoVHh0LFxyXG4gICAgICAgICAgbW9udGhOYnI6IHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLFxyXG4gICAgICAgICAgeWVhcjogeSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgeSwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW52YWxpZFllYXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNUb2RheURpc2FibGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlVG9kYXlCdG4gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoXHJcbiAgICAgIHRoaXMuZ2V0VG9kYXkoKSxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubG9jYWxlKSB7XHJcbiAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRPcHRpb25zKCk7XHJcbiAgICB0aGlzLmlzVG9kYXlEaXNhYmxlZCgpO1xyXG4gICAgdGhpcy5kYXlJZHggPSB0aGlzLndlZWtEYXlPcHRzLmluZGV4T2YodGhpcy5vcHRzLmZpcnN0RGF5T2ZXZWVrKTtcclxuICAgIGlmICh0aGlzLmRheUlkeCAhPT0gLTEpIHtcclxuICAgICAgbGV0IGlkeDogbnVtYmVyID0gdGhpcy5kYXlJZHg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53ZWVrRGF5T3B0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMud2Vla0RheXMucHVzaCh0aGlzLm9wdHMuZGF5TGFiZWxzW3RoaXMud2Vla0RheU9wdHNbaWR4XV0pO1xyXG4gICAgICAgIGlkeCA9IHRoaXMud2Vla0RheU9wdHNbaWR4XSA9PT0gJ3NhJyA/IDAgOiBpZHggKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKHRoaXMucGFyc2VTZWxlY3RlZERhdGUodmFsdWUpLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlWydkYXRlJ10pIHtcclxuICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUodGhpcy5wYXJzZVNlbGVjdGVkRGF0ZSh2YWx1ZVsnZGF0ZSddKSwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IHsgZGF5OiB2YWx1ZS5nZXREYXRlKCksIG1vbnRoOiB2YWx1ZS5nZXRNb250aCgpICsgMSwgeWVhcjogdmFsdWUuZ2V0RnVsbFllYXIoKSB9O1xyXG4gICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZSh0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKGRhdGUpLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHsgeWVhcjogMCwgbW9udGg6IDAsIGRheTogMCB9O1xyXG4gICAgICB0aGlzLnNlbGVjdGlvbkRheVR4dCA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2IgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2IgPSBmbjtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdzZWxlY3RvcicpICYmIGNoYW5nZXNbJ3NlbGVjdG9yJ10uY3VycmVudFZhbHVlID4gMCkge1xyXG4gICAgICB0aGlzLm9wZW5CdG5DbGlja2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BsYWNlaG9sZGVyJykpIHtcclxuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IGNoYW5nZXNbJ3BsYWNlaG9sZGVyJ10uY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdsb2NhbGUnKSkge1xyXG4gICAgICB0aGlzLmxvY2FsZSA9IGNoYW5nZXNbJ2xvY2FsZSddLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKHRoaXMuc2VsZWN0ZWREYXRlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25zJykpIHtcclxuICAgICAgdGhpcy5vcHRpb25zID0gY2hhbmdlc1snb3B0aW9ucyddLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUgJiYgY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZS5zdGFydERhdGUpIHtcclxuICAgICAgICB0aGlzLm9uVXNlckRhdGVJbnB1dChjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLndlZWtEYXlzLmxlbmd0aCA9IDA7XHJcbiAgICB0aGlzLnBhcnNlT3B0aW9ucygpO1xyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkZWZhdWx0TW9udGgnKSkge1xyXG4gICAgICBjb25zdCBkbTogc3RyaW5nID0gY2hhbmdlc1snZGVmYXVsdE1vbnRoJ10uY3VycmVudFZhbHVlO1xyXG4gICAgICBpZiAoZG0gIT09IG51bGwgJiYgZG0gIT09IHVuZGVmaW5lZCAmJiBkbSAhPT0gJycpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB0aGlzLnBhcnNlU2VsZWN0ZWRNb250aChkbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0geyBtb250aFR4dDogJycsIG1vbnRoTmJyOiAwLCB5ZWFyOiAwIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnc2VsRGF0ZScpKSB7XHJcbiAgICAgIGNvbnN0IHNkOiBhbnkgPSBjaGFuZ2VzWydzZWxEYXRlJ107XHJcbiAgICAgIGlmIChcclxuICAgICAgICBzZC5jdXJyZW50VmFsdWUgIT09IG51bGwgJiZcclxuICAgICAgICBzZC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIHNkLmN1cnJlbnRWYWx1ZSAhPT0gJycgJiZcclxuICAgICAgICBPYmplY3Qua2V5cyhzZC5jdXJyZW50VmFsdWUpLmxlbmd0aCAhPT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHRoaXMucGFyc2VTZWxlY3RlZERhdGUoc2QuY3VycmVudFZhbHVlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMub25DaGFuZ2VDYih0aGlzLmdldERhdGVNb2RlbCh0aGlzLnNlbGVjdGVkRGF0ZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaXNEYXRlU2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIERvIG5vdCBjbGVhciBvbiBpbml0XHJcbiAgICAgICAgaWYgKCFzZC5pc0ZpcnN0Q2hhbmdlKCkpIHtcclxuICAgICAgICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZUtleWJvYXJkKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgZmllbGQpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0UmVmZXJlbmNlID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbnB1dFJlZmVyZW5jZSwgJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0UmVmZXJlbmNlLCAndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dFJlZmVyZW5jZSwgJ29wYWNpdHknLCAnMCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5wdXRSZWZlcmVuY2UsICctd2Via2l0LXVzZXItbW9kaWZ5JywgJ3JlYWQtd3JpdGUtcGxhaW50ZXh0LW9ubHknKTtcclxuICAgICAgICBmaWVsZC5vbmZvY3VzID0gKCkgPT4ge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZmllbGQsICdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgZmllbGQpO1xyXG4gICAgICAgICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZmllbGQuZm9jdXMoKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge31cclxuICB9XHJcblxyXG4gIHJlbW92ZUJ0bkNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmlzRGF0ZVNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsZWFyQnV0dG9uQ2xpY2tlZC5lbWl0KHRoaXMpO1xyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNsb3NlQnRuQ2xpY2tlZCgpIHtcclxuICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlbW92ZUlubGluZVN0eWxlKCk7XHJcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgdGhpcy5jbG9zZUJ1dHRvbkNsaWNrZWQuZW1pdCh0aGlzKTtcclxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcblxyXG4gICAgdGhpcy5kb2N1bWVudENsaWNrRnVuKCk7XHJcbiAgfVxyXG5cclxuICBvcGVuQnRuQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmRvY3VtZW50Q2xpY2tGdW4gPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5pc09wZW4gJiZcclxuICAgICAgICB0aGlzLnBpY2tlckZyYW1lICYmXHJcbiAgICAgICAgdGhpcy5pbmxpbmVJbnB1dCAmJlxyXG4gICAgICAgIHRoaXMuaW5saW5lSWNvblRvZ2dsZSAmJlxyXG4gICAgICAgICF0aGlzLmlubGluZUlucHV0Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAgICF0aGlzLnBpY2tlckZyYW1lLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAgICF0aGlzLmlubGluZUljb25Ub2dnbGUubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VCdG5DbGlja2VkKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1jb250ZW50JykpIHtcclxuICAgICAgICBpZiAodGhpcy5maXJzdFRpbWVPcGVuZWRNb2RhbCkge1xyXG4gICAgICAgICAgdGhpcy5tb2RhbEhlaWdodEJlZm9yZSA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlyc3RUaW1lT3BlbmVkTW9kYWwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxyXG4gICAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LFxyXG4gICAgICAgICAgJ3RyYW5zaXRpb24nLFxyXG4gICAgICAgICAgJ2hlaWdodCAwLjNzJ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgICAgdGhpcy5tb2RhbEhlaWdodEJlZm9yZSArIHRoaXMucGlja2VyRnJhbWUubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge31cclxuICAgIC8vIE9wZW4gc2VsZWN0b3IgYnV0dG9uIGNsaWNrZWRcclxuICAgIHRoaXMuc2hvd1NlbGVjdG9yID0gIXRoaXMuc2hvd1NlbGVjdG9yO1xyXG4gICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgIHRoaXMuc2V0VmlzaWJsZU1vbnRoKCk7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuT3Blbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlDYWxCdG4pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaXNNb2JpbGUpIHtcclxuICAgICAgdGhpcy5oaWRlS2V5Ym9hcmQoKTtcclxuICAgIH1cclxuICAgIHRoaXMubGFiZWxBY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5DaGFuZ2VaSW5kZXgoKTtcclxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBzZXRWaXNpYmxlTW9udGgoKTogdm9pZCB7XHJcbiAgICAvLyBTZXRzIHZpc2libGUgbW9udGggb2YgY2FsZW5kYXJcclxuICAgIGxldCB5ID0gMCxcclxuICAgICAgbSA9IDA7XHJcbiAgICBpZiAoIXRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUodGhpcy5zZWxlY3RlZERhdGUpKSB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTW9udGgueWVhciA9PT0gMCAmJiB0aGlzLnNlbGVjdGVkTW9udGgubW9udGhOYnIgPT09IDApIHtcclxuICAgICAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgICAgICB5ID0gdG9kYXkueWVhcjtcclxuICAgICAgICBtID0gdG9kYXkubW9udGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeSA9IHRoaXMuc2VsZWN0ZWRNb250aC55ZWFyO1xyXG4gICAgICAgIG0gPSB0aGlzLnNlbGVjdGVkTW9udGgubW9udGhOYnI7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHkgPSB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyO1xyXG4gICAgICBtID0gdGhpcy5zZWxlY3RlZERhdGUubW9udGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZpc2libGVNb250aCA9IHsgbW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1ttXSwgbW9udGhOYnI6IG0sIHllYXI6IHkgfTtcclxuXHJcbiAgICAvLyBDcmVhdGUgY3VycmVudCBtb250aFxyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbW9udGhMaXN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb250aHMgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcclxuICAgICAgdGhpcy5tb250aHMucHVzaCh7XHJcbiAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgc2hvcnQ6IHRoaXMub3B0cy5tb250aExhYmVsc1tpXSxcclxuICAgICAgICBsYWJlbDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzRnVsbFtpXSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB5ZWFyc0xpc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLnllYXJzID0gW107XHJcblxyXG4gICAgY29uc3QgZmlyc3RZZWFyID0gdGhpcy5vcHRzLm1pblllYXI7XHJcbiAgICBjb25zdCBsYXN0WWVhciA9IHRoaXMub3B0cy5tYXhZZWFyO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBmaXJzdFllYXI7IGkgPD0gbGFzdFllYXI7IGkrKykge1xyXG4gICAgICB0aGlzLnllYXJzLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2TW9udGgoZXZlbnQ/OiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIFByZXZpb3VzIG1vbnRoIGZyb20gY2FsZW5kYXJcclxuICAgIGNvbnN0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUodGhpcy52aXNpYmxlTW9udGgueWVhciwgdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIDEpO1xyXG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgLSAxKTtcclxuXHJcbiAgICBjb25zdCB5OiBudW1iZXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtOiBudW1iZXIgPSBkLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuICAgIHRoaXMudmlzaWJsZU1vbnRoID0geyBtb250aFR4dDogdGhpcy5tb250aFRleHQobSksIG1vbnRoTmJyOiBtLCB5ZWFyOiB5IH07XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgeSwgdHJ1ZSk7XHJcblxyXG4gICAgLy8gUHJldmVudHMgdHJpZ2dlciAoY2xpY2spIGV2ZW50IHdoZW4gdXNpbmcgRW50ZXJcclxuICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmV4dE1vbnRoKGV2ZW50PzogYW55KTogdm9pZCB7XHJcbiAgICAvLyBOZXh0IG1vbnRoIGZyb20gY2FsZW5kYXJcclxuICAgIGNvbnN0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUodGhpcy52aXNpYmxlTW9udGgueWVhciwgdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIDEpO1xyXG4gICAgZC5zZXRNb250aChkLmdldE1vbnRoKCkgKyAxKTtcclxuXHJcbiAgICBjb25zdCB5OiBudW1iZXIgPSBkLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBjb25zdCBtOiBudW1iZXIgPSBkLmdldE1vbnRoKCkgKyAxO1xyXG5cclxuICAgIHRoaXMudmlzaWJsZU1vbnRoID0geyBtb250aFR4dDogdGhpcy5tb250aFRleHQobSksIG1vbnRoTmJyOiBtLCB5ZWFyOiB5IH07XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgeSwgdHJ1ZSk7XHJcblxyXG4gICAgLy8gUHJldmVudHMgdHJpZ2dlciAoY2xpY2spIGV2ZW50IHdoZW4gdXNpbmcgRW50ZXJcclxuICAgIGlmIChldmVudC5jb2RlID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldlllYXIoKTogdm9pZCB7XHJcbiAgICAvLyBQcmV2aW91cyB5ZWFyIGZyb20gY2FsZW5kYXJcclxuICAgIHRoaXMudmlzaWJsZU1vbnRoLnllYXItLTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBuZXh0WWVhcigpOiB2b2lkIHtcclxuICAgIC8vIE5leHQgeWVhciBmcm9tIGNhbGVuZGFyXHJcbiAgICB0aGlzLnZpc2libGVNb250aC55ZWFyKys7XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgdG9kYXlDbGlja2VkKCk6IHZvaWQge1xyXG4gICAgLy8gVG9kYXkgYnV0dG9uIGNsaWNrZWRcclxuICAgIGNvbnN0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KFxyXG4gICAgICAgIHRvZGF5LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgICAgdGhpcy5vcHRzLmVuYWJsZURheXNcclxuICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0RGF0ZSh0b2RheSk7XHJcbiAgICB9XHJcbiAgICBpZiAodG9kYXkueWVhciAhPT0gdGhpcy52aXNpYmxlTW9udGgueWVhciB8fCB0b2RheS5tb250aCAhPT0gdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIpIHtcclxuICAgICAgdGhpcy52aXNpYmxlTW9udGggPSB7XHJcbiAgICAgICAgbW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1t0b2RheS5tb250aF0sXHJcbiAgICAgICAgbW9udGhOYnI6IHRvZGF5Lm1vbnRoLFxyXG4gICAgICAgIHllYXI6IHRvZGF5LnllYXIsXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0b2RheS5tb250aCwgdG9kYXkueWVhciwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRvZGF5QnV0dG9uQ2xpY2tlZC5lbWl0KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY2VsbENsaWNrZWQoY2VsbDogYW55KTogdm9pZCB7XHJcbiAgICAvLyBDZWxsIGNsaWNrZWQgb24gdGhlIGNhbGVuZGFyXHJcbiAgICBpZiAoY2VsbC5jbW8gPT09IHRoaXMucHJldk1vbnRoSWQpIHtcclxuICAgICAgLy8gUHJldmlvdXMgbW9udGggZGF5XHJcbiAgICAgIHRoaXMucHJldk1vbnRoKCk7XHJcbiAgICB9IGVsc2UgaWYgKGNlbGwuY21vID09PSB0aGlzLmN1cnJNb250aElkKSB7XHJcbiAgICAgIC8vIEN1cnJlbnQgbW9udGggZGF5IC0gaWYgZGF0ZSBpcyBhbHJlYWR5IHNlbGVjdGVkIGNsZWFyIGl0XHJcbiAgICAgIGlmIChcclxuICAgICAgICBjZWxsLmRhdGVPYmoueWVhciA9PT0gdGhpcy5zZWxlY3RlZERhdGUueWVhciAmJlxyXG4gICAgICAgIGNlbGwuZGF0ZU9iai5tb250aCA9PT0gdGhpcy5zZWxlY3RlZERhdGUubW9udGggJiZcclxuICAgICAgICBjZWxsLmRhdGVPYmouZGF5ID09PSB0aGlzLnNlbGVjdGVkRGF0ZS5kYXlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdERhdGUoY2VsbC5kYXRlT2JqKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5uZXh0TW9udGhJZCkge1xyXG4gICAgICAvLyBOZXh0IG1vbnRoIGRheVxyXG4gICAgICB0aGlzLm5leHRNb250aCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXNldE1vbnRoWWVhckVkaXQoKTtcclxuICB9XHJcblxyXG4gIGNlbGxLZXlEb3duKGV2ZW50OiBhbnksIGNlbGw6IGFueSkge1xyXG4gICAgLy8gQ2VsbCBrZXlib2FyZCBoYW5kbGluZ1xyXG4gICAgaWYgKChldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLmVudGVyIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuc3BhY2UpICYmICFjZWxsLmRpc2FibGVkKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuY2VsbENsaWNrZWQoY2VsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhckRhdGUoKTogdm9pZCB7XHJcbiAgICAvLyBDbGVhcnMgdGhlIGRhdGUgYW5kIG5vdGlmaWVzIHBhcmVudCB1c2luZyBjYWxsYmFja3MgYW5kIHZhbHVlIGFjY2Vzc29yXHJcbiAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0geyB5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwIH07XHJcbiAgICB0aGlzLmRhdGVDaGFuZ2VkLmVtaXQoeyBkYXRlOiBkYXRlLCBqc2RhdGU6IG51bGwsIGZvcm1hdHRlZDogJycsIGVwb2M6IDAgfSk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2IobnVsbCk7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZShkYXRlLCB0cnVlKTtcclxuICAgIHRoaXMudG1wID0ge1xyXG4gICAgICB5ZWFyOiB0aGlzLmdldFRvZGF5KCkueWVhcixcclxuICAgICAgbW9udGg6IHRoaXMuZ2V0VG9kYXkoKS5tb250aCxcclxuICAgICAgZGF5OiB0aGlzLmdldFRvZGF5KCkuZGF5LFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2V0VmlzaWJsZU1vbnRoKCk7XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZWxlY3REYXRlKGRhdGU6IElNeURhdGUpOiB2b2lkIHtcclxuICAgIC8vIERhdGUgc2VsZWN0ZWQsIG5vdGlmaWVzIHBhcmVudCB1c2luZyBjYWxsYmFja3MgYW5kIHZhbHVlIGFjY2Vzc29yXHJcbiAgICB0aGlzLnRtcCA9IGRhdGU7XHJcbiAgICBjb25zdCBkYXRlTW9kZWw6IGFueSA9IHRoaXMuZ2V0RGF0ZU1vZGVsKGRhdGUpO1xyXG4gICAgLy8gdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHsgcHJldmlvdXNEYXRlOiB0aGlzLnNlbGVjdGlvbkRheVR4dCwgYWN0dWFsRGF0ZTogZGF0ZU1vZGVsIH0pO1xyXG4gICAgdGhpcy5kYXRlQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgZGF0ZTogZGF0ZSxcclxuICAgICAganNkYXRlOiB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSksXHJcbiAgICAgIHByZXZpb3VzRGF0ZUZvcm1hdHRlZDogdGhpcy5zZWxlY3Rpb25EYXlUeHQsXHJcbiAgICAgIGFjdHVhbERhdGVGb3JtYXR0ZWQ6IGRhdGVNb2RlbCxcclxuICAgICAgZXBvYzogTWF0aC5yb3VuZCh0aGlzLmdldFRpbWVJbk1pbGxpc2Vjb25kcyhkYXRlKSAvIDEwMDAuMCksXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25DaGFuZ2VDYihkYXRlTW9kZWwpO1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlVmFsdWUoZGF0ZSwgZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeURhdGVTZWwpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMub3B0cy5jbG9zZUFmdGVyU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMuY2xvc2VCdG5DbGlja2VkKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIGhpZGUgY2FsZW5kYXIgd2hlbiBkYXRlIHdhcyBjbGlja2VkXHJcbiAgICAvLyB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGF0ZVZhbHVlKGRhdGU6IElNeURhdGUsIGNsZWFyOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBVcGRhdGVzIGRhdGUgdmFsdWVzXHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLnRtcCA9IGRhdGU7XHJcbiAgICB0aGlzLmlzRGF0ZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gY2xlYXIgPyAnJyA6IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7XHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGlvbkRheVR4dCxcclxuICAgICAgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsXHJcbiAgICAgIHZhbGlkOiAhY2xlYXIsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlTW9kZWwoZGF0ZTogSU15RGF0ZSk6IGFueSB7XHJcbiAgICBjb25zdCBqc0RhdGUgPSB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSk7XHJcbiAgICBjb25zdCBkYXRlTW9kZWwgPSB0aGlzLm9wdHMudXNlRGF0ZU9iamVjdCA/IGpzRGF0ZSA6IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlTW9kZWw7XHJcbiAgfVxyXG5cclxuICBwcmVaZXJvKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIFByZXBlbmQgemVybyBpZiBzbWFsbGVyIHRoYW4gMTBcclxuICAgIHJldHVybiBwYXJzZUludCh2YWwsIDApIDwgMTAgPyAnMCcgKyB2YWwgOiB2YWw7XHJcbiAgfVxyXG5cclxuICBmb3JtYXREYXRlKHZhbDogYW55KTogc3RyaW5nIHtcclxuICAgIC8vIFJldHVybnMgZm9ybWF0dGVkIGRhdGUgc3RyaW5nLCBpZiBtbW0gaXMgcGFydCBvZiBkYXRlRm9ybWF0IHJldHVybnMgbW9udGggYXMgYSBzdHJpbmdcclxuICAgIC8vIGRheXNcclxuICAgIGNvbnN0IGQgPSB2YWwuZGF5OyAvLyAxIC0gMzFcclxuICAgIGNvbnN0IGRkID0gdGhpcy5wcmVaZXJvKHZhbC5kYXkpOyAvLyAwMSAtIDMxXHJcbiAgICBjb25zdCBkZGQgPSB0aGlzLm9wdHMuZGF5TGFiZWxzW3RoaXMuZ2V0V2Vla2RheSh2YWwpXTsgLy8gU3VuLVNhdFxyXG4gICAgY29uc3QgZGRkZCA9IHRoaXMub3B0cy5kYXlMYWJlbHNGdWxsW3RoaXMuZ2V0V2Vla2RheSh2YWwpXTsgLy8gU3VuZGF5IOKAkyBTYXR1cmRheVxyXG4gICAgY29uc3QgbSA9IHZhbC5tb250aDsgLy8gMSAtIDEyXHJcbiAgICBjb25zdCBtbSA9IHRoaXMucHJlWmVybyh2YWwubW9udGgpOyAvLyAwMSAtIDEyXHJcbiAgICBjb25zdCBtbW0gPSB0aGlzLmdldE1vbnRoU2hvcnQodmFsLm1vbnRoKTsgLy8gSmFuIC0gRGVjXHJcbiAgICBjb25zdCBtbW1tID0gdGhpcy5nZXRNb250aEZ1bGwodmFsLm1vbnRoKTsgLy8gSmFudWFyeSDigJMgRGVjZW1iZXJcclxuICAgIGNvbnN0IHl5ID0gdmFsLnllYXIudG9TdHJpbmcoKS5sZW5ndGggPT09IDIgPyB2YWwueWVhciA6IHZhbC55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoMiwgNCk7IC8vIDAwIC0gOTlcclxuICAgIGNvbnN0IHl5eXkgPSB2YWwueWVhcjtcclxuXHJcbiAgICBjb25zdCB0b1JlcGxhY2UgPSB0aGlzLm9wdHMuZGF0ZUZvcm1hdC5zcGxpdCgvKGR7MSw0fXxtezEsNH18eXs0fXx5eXwhLikvZyk7XHJcbiAgICBsZXQgZm9ybWF0dGVkID0gJyc7XHJcbiAgICB0b1JlcGxhY2UuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGVsKSB7XHJcbiAgICAgICAgY2FzZSAnZGRkZCc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIGRkZGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZGRkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZGRkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2RkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW1tbSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIG1tbW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW1tJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbW1tKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21tJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIG0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneXl5eSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIHl5eXkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneXknOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCB5eSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBmb3JtYXR0ZWQgKz0gZWw7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0dGVkO1xyXG4gIH1cclxuXHJcbiAgbW9udGhUZXh0KG06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAvLyBSZXR1cm5zIG1vbnRoIGFzIGEgdGV4dFxyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc1ttXTtcclxuICB9XHJcblxyXG4gIHdlZWtUZXh0KG06IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyBSZXR1cm5zIG1vbnRoIGFzIGEgdGV4dFxyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5kYXlMYWJlbHNGdWxsW21dO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhTaG9ydChtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc1ttXTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoRnVsbChtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc0Z1bGxbbV07XHJcbiAgfVxyXG5cclxuICBtb250aFN0YXJ0SWR4KHk6IG51bWJlciwgbTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIE1vbnRoIHN0YXJ0IGluZGV4XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgIGQuc2V0RGF0ZSgxKTtcclxuICAgIGQuc2V0TW9udGgobSAtIDEpO1xyXG4gICAgZC5zZXRGdWxsWWVhcih5KTtcclxuICAgIGNvbnN0IGlkeCA9IGQuZ2V0RGF5KCkgKyB0aGlzLnN1bmRheUlkeCgpO1xyXG4gICAgcmV0dXJuIGlkeCA+PSA3ID8gaWR4IC0gNyA6IGlkeDtcclxuICB9XHJcblxyXG4gIGRheXNJbk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiBjdXJyZW50IG1vbnRoXHJcbiAgICByZXR1cm4gbmV3IERhdGUoeSwgbSwgMCkuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZGF5c0luUHJldk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiB0aGUgcHJldmlvdXMgbW9udGhcclxuICAgIGNvbnN0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUoeSwgbSwgMSk7XHJcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSAtIDEpO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF5c0luTW9udGgoZC5nZXRNb250aCgpICsgMSwgZC5nZXRGdWxsWWVhcigpKTtcclxuICB9XHJcblxyXG4gIGlzQ3VyckRheShkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyLCBjbW86IG51bWJlciwgdG9kYXk6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgIC8vIENoZWNrIGlzIGEgZ2l2ZW4gZGF0ZSB0aGUgdG9kYXlcclxuICAgIHJldHVybiBkID09PSB0b2RheS5kYXkgJiYgbSA9PT0gdG9kYXkubW9udGggJiYgeSA9PT0gdG9kYXkueWVhciAmJiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RheSgpOiBJTXlEYXRlIHtcclxuICAgIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIHsgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aDogZGF0ZS5nZXRNb250aCgpICsgMSwgZGF5OiBkYXRlLmdldERhdGUoKSB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KS5nZXRUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrZGF5KGRhdGU6IElNeURhdGUpOiBzdHJpbmcge1xyXG4gICAgLy8gR2V0IHdlZWtkYXk6IHN1LCBtbywgdHUsIHdlIC4uLlxyXG4gICAgcmV0dXJuIHRoaXMud2Vla0RheU9wdHNbdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSldO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICAvLyBDcmVhdGVzIGEgZGF0ZSBvYmplY3QgZnJvbSBnaXZlbiB5ZWFyLCBtb250aCBhbmQgZGF5XHJcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIDAsIDAsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgc3VuZGF5SWR4KCk6IG51bWJlciB7XHJcbiAgICAvLyBJbmRleCBvZiBTdW5kYXkgZGF5XHJcbiAgICByZXR1cm4gdGhpcy5kYXlJZHggPiAwID8gNyAtIHRoaXMuZGF5SWR4IDogMDtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQ2FsZW5kYXIobTogbnVtYmVyLCB5OiBudW1iZXIsIG5vdGlmeUNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlcy5sZW5ndGggPSAwO1xyXG4gICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICBjb25zdCBtb250aFN0YXJ0OiBudW1iZXIgPSB0aGlzLm1vbnRoU3RhcnRJZHgoeSwgbSk7XHJcbiAgICBjb25zdCBkSW5UaGlzTTogbnVtYmVyID0gdGhpcy5kYXlzSW5Nb250aChtLCB5KTtcclxuICAgIGNvbnN0IGRJblByZXZNOiBudW1iZXIgPSB0aGlzLmRheXNJblByZXZNb250aChtLCB5KTtcclxuXHJcbiAgICBsZXQgZGF5TmJyID0gMTtcclxuICAgIGxldCBjbW86IG51bWJlciA9IHRoaXMucHJldk1vbnRoSWQ7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xyXG4gICAgICBjb25zdCB3ZWVrOiBBcnJheTxJTXlDYWxlbmRhckRheT4gPSBbXTtcclxuICAgICAgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAvLyBGaXJzdCB3ZWVrXHJcbiAgICAgICAgY29uc3QgcG0gPSBkSW5QcmV2TSAtIG1vbnRoU3RhcnQgKyAxO1xyXG4gICAgICAgIC8vIFByZXZpb3VzIG1vbnRoXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHBtOyBqIDw9IGRJblByZXZNOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7IHllYXI6IHksIG1vbnRoOiBtIC0gMSwgZGF5OiBqIH07XHJcbiAgICAgICAgICB3ZWVrLnB1c2goe1xyXG4gICAgICAgICAgICBkYXRlT2JqOiBkYXRlLFxyXG4gICAgICAgICAgICBjbW86IGNtbyxcclxuICAgICAgICAgICAgY3VyckRheTogdGhpcy5pc0N1cnJEYXkoaiwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgIGRheU5icjogdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSksXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoXHJcbiAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKFxyXG4gICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1hcmtEYXRlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMubWFya1dlZWtlbmRzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNtbyA9IHRoaXMuY3Vyck1vbnRoSWQ7XHJcbiAgICAgICAgLy8gQ3VycmVudCBtb250aFxyXG4gICAgICAgIGNvbnN0IGRheXNMZWZ0OiBudW1iZXIgPSA3IC0gd2Vlay5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXlzTGVmdDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0geyB5ZWFyOiB5LCBtb250aDogbSwgZGF5OiBkYXlOYnIgfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsXHJcbiAgICAgICAgICAgIGNtbzogY21vLFxyXG4gICAgICAgICAgICBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICBkYXlOYnI6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KFxyXG4gICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShcclxuICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5tYXJrRGF0ZXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1hcmtXZWVrZW5kc1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVzdCBvZiB0aGUgd2Vla3NcclxuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDg7IGorKykge1xyXG4gICAgICAgICAgaWYgKGRheU5iciA+IGRJblRoaXNNKSB7XHJcbiAgICAgICAgICAgIC8vIE5leHQgbW9udGhcclxuICAgICAgICAgICAgZGF5TmJyID0gMTtcclxuICAgICAgICAgICAgY21vID0gdGhpcy5uZXh0TW9udGhJZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7XHJcbiAgICAgICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgICAgIG1vbnRoOiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQgPyBtIDogbSArIDEsXHJcbiAgICAgICAgICAgIGRheTogZGF5TmJyLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsXHJcbiAgICAgICAgICAgIGNtbzogY21vLFxyXG4gICAgICAgICAgICBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICBkYXlOYnI6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KFxyXG4gICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShcclxuICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5tYXJrRGF0ZXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1hcmtXZWVrZW5kc1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd2Vla05icjogbnVtYmVyID1cclxuICAgICAgICB0aGlzLm9wdHMuc2hvd1dlZWtOdW1iZXJzICYmIHRoaXMub3B0cy5maXJzdERheU9mV2VlayA9PT0gJ21vJ1xyXG4gICAgICAgICAgPyB0aGlzLnV0aWxTZXJ2aWNlLmdldFdlZWtOdW1iZXIod2Vla1swXS5kYXRlT2JqKVxyXG4gICAgICAgICAgOiAwO1xyXG4gICAgICB0aGlzLmRhdGVzLnB1c2goeyB3ZWVrOiB3ZWVrLCB3ZWVrTmJyOiB3ZWVrTmJyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZShtLCB5KTtcclxuXHJcbiAgICBpZiAobm90aWZ5Q2hhbmdlKSB7XHJcbiAgICAgIC8vIE5vdGlmeSBwYXJlbnRcclxuICAgICAgdGhpcy5jYWxlbmRhclZpZXdDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgbW9udGg6IG0sXHJcbiAgICAgICAgZmlyc3Q6IHtcclxuICAgICAgICAgIG51bWJlcjogMSxcclxuICAgICAgICAgIHdlZWtkYXk6IHRoaXMuZ2V0V2Vla2RheSh7XHJcbiAgICAgICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgICAgIG1vbnRoOiBtLFxyXG4gICAgICAgICAgICBkYXk6IDEsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhc3Q6IHtcclxuICAgICAgICAgIG51bWJlcjogZEluVGhpc00sXHJcbiAgICAgICAgICB3ZWVrZGF5OiB0aGlzLmdldFdlZWtkYXkoe1xyXG4gICAgICAgICAgICB5ZWFyOiB5LFxyXG4gICAgICAgICAgICBtb250aDogbSxcclxuICAgICAgICAgICAgZGF5OiBkSW5UaGlzTSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubW9udGhMaXN0KCk7XHJcbiAgICB0aGlzLnllYXJzTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VTZWxlY3RlZERhdGUoc2VsRGF0ZTogYW55KTogSU15RGF0ZSB7XHJcbiAgICAvLyBQYXJzZSBzZWxEYXRlIHZhbHVlIC0gaXQgY2FuIGJlIHN0cmluZyBvciBJTXlEYXRlIG9iamVjdFxyXG5cclxuICAgIC8vIFJlbW92ZXMgZXZlcnl0aGluZyBmcm9tIHNlbERhdGUgaWYgaXQncyBJU08gZGF0ZSBmb3JtYXQgdG8gYWxsb3cgdG8gdXNlIElTTyBkYXRlIGluIGRhdGUgcGlja2VyXHJcbiAgICBpZiAoc2VsRGF0ZS50b1N0cmluZygpLmluZGV4T2YoJ1QnKSAhPT0gLTEpIHtcclxuICAgICAgc2VsRGF0ZSA9IHNlbERhdGUuc3Vic3RyKDAsIHNlbERhdGUuaW5kZXhPZignVCcpKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHsgZGF5OiAwLCBtb250aDogMCwgeWVhcjogMCB9O1xyXG4gICAgaWYgKHR5cGVvZiBzZWxEYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBzZDogc3RyaW5nID0gPHN0cmluZz5zZWxEYXRlO1xyXG4gICAgICBjb25zdCBkZjogc3RyaW5nID0gdGhpcy5vcHRzLmRhdGVGb3JtYXQ7XHJcblxyXG4gICAgICBjb25zdCBkZWxpbWV0ZXJzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy51dGlsU2VydmljZS5nZXREYXRlRm9ybWF0RGVsaW1ldGVycyhkZik7XHJcbiAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZVZhbHVlKHNkLCBkZiwgZGVsaW1ldGVycyk7XHJcbiAgICAgIGRhdGUueWVhciA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMF0pO1xyXG5cclxuICAgICAgaWYgKGRmLmluZGV4T2YoJ21tbW0nKSAhPT0gLTEpIHtcclxuICAgICAgICBkYXRlLm1vbnRoID0gdGhpcy51dGlsU2VydmljZS5nZXRNb250aE51bWJlckJ5TW9udGhOYW1lKFxyXG4gICAgICAgICAgZGF0ZVZhbHVlWzFdLFxyXG4gICAgICAgICAgdGhpcy5vcHRzLm1vbnRoTGFiZWxzRnVsbFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGYuaW5kZXhPZignbW1tJykgIT09IC0xKSB7XHJcbiAgICAgICAgZGF0ZS5tb250aCA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TW9udGhOdW1iZXJCeU1vbnRoTmFtZShcclxuICAgICAgICAgIGRhdGVWYWx1ZVsxXSxcclxuICAgICAgICAgIHRoaXMub3B0cy5tb250aExhYmVsc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZS5tb250aCA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGUuZGF5ID0gdGhpcy51dGlsU2VydmljZS5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsyXSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxEYXRlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBkYXRlID0gc2VsRGF0ZTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gdGhpcy5mb3JtYXREYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICBwYXJzZVNlbGVjdGVkTW9udGgobXM6IHN0cmluZyk6IElNeU1vbnRoIHtcclxuICAgIHJldHVybiB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGVmYXVsdE1vbnRoKG1zKTtcclxuICB9XHJcblxyXG4gIHNldEhlYWRlckJ0bkRpc2FibGVkU3RhdGUobTogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBkcG0gPSBmYWxzZTtcclxuICAgIGxldCBkcHkgPSBmYWxzZTtcclxuICAgIGxldCBkbm0gPSBmYWxzZTtcclxuICAgIGxldCBkbnkgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9wdHMuZGlzYWJsZUhlYWRlckJ1dHRvbnMpIHtcclxuICAgICAgZHBtID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5ZWFyOiBtID09PSAxID8geSAtIDEgOiB5LFxyXG4gICAgICAgICAgbW9udGg6IG0gPT09IDEgPyAxMiA6IG0gLSAxLFxyXG4gICAgICAgICAgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0gPT09IDEgPyAxMiA6IG0gLSAxLCBtID09PSAxID8geSAtIDEgOiB5KSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWxcclxuICAgICAgKTtcclxuICAgICAgZHB5ID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5ZWFyOiB5IC0gMSxcclxuICAgICAgICAgIG1vbnRoOiBtLFxyXG4gICAgICAgICAgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0sIHkgLSAxKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWxcclxuICAgICAgKTtcclxuICAgICAgZG5tID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5ZWFyOiBtID09PSAxMiA/IHkgKyAxIDogeSxcclxuICAgICAgICAgIG1vbnRoOiBtID09PSAxMiA/IDEgOiBtICsgMSxcclxuICAgICAgICAgIGRheTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2VcclxuICAgICAgKTtcclxuICAgICAgZG55ID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZShcclxuICAgICAgICB7IHllYXI6IHkgKyAxLCBtb250aDogbSwgZGF5OiAxIH0sXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2TW9udGhEaXNhYmxlZCA9IChtID09PSAxICYmIHkgPT09IHRoaXMub3B0cy5taW5ZZWFyKSB8fCBkcG07XHJcbiAgICB0aGlzLnByZXZZZWFyRGlzYWJsZWQgPSB5IC0gMSA8IHRoaXMub3B0cy5taW5ZZWFyIHx8IGRweTtcclxuICAgIHRoaXMubmV4dE1vbnRoRGlzYWJsZWQgPSAobSA9PT0gMTIgJiYgeSA9PT0gdGhpcy5vcHRzLm1heFllYXIpIHx8IGRubTtcclxuICAgIHRoaXMubmV4dFllYXJEaXNhYmxlZCA9IHkgKyAxID4gdGhpcy5vcHRzLm1heFllYXIgfHwgZG55O1xyXG4gIH1cclxuXHJcbiAgY2hlY2tBY3RpdmUoKSB7XHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFiZWxBY3RpdmUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0RhdGVTZWxlY3RlZCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIElOTElORSBEQVRFIFBJQ0tFUlxyXG5cclxuICBwdWJsaWMgdG9nZ2xlSW5saW5lRGF0ZVBpY2tlcigpIHtcclxuICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICB0aGlzLmNsb3NlQnRuQ2xpY2tlZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=