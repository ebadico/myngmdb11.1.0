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
    min: new Date().getFullYear() - 7,
    max: new Date().getFullYear() + 7,
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
        this.setOptions();
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
        if (this.inline) {
            this.setDisabled(isDisabled);
        }
        this.cdRef.markForCheck();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabled(isDisabled) {
        this.isDisabled = isDisabled;
        if (isDisabled) {
            this.inlineIcon += ' disabled grey-text';
        }
        else {
            /** @type {?} */
            const to = this.inlineIcon.indexOf('disabled');
            if (to >= 0) {
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
        if (changes.hasOwnProperty('disabled')) {
            this.disabled = changes['disabled'].currentValue;
            this.setDisabled(this.disabled);
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
                styles: [".picker__input{cursor:default}.picker__input.picker__input--active{border-color:#0089ec}.picker{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;/*!\n   * Default mobile-first, responsive styling for pickadate.js\n   * Demo: http://amsul.github.io/pickadate.js\n   */z-index:90;font-size:15px;text-align:left;line-height:1.2;color:#000;position:absolute;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.picker .picker__holder{width:100%;overflow-scrolling:touch;position:fixed;transition:background .15s ease-out,top .15s;-webkit-backface-visibility:hidden;backface-visibility:hidden}.picker .picker__frame,.picker .picker__holder{bottom:0;left:0;right:0;top:100%}.picker .picker__frame{position:absolute;margin:0 auto;min-width:16rem;max-width:20.3125rem;width:18.75rem;max-height:21.875rem;opacity:0;transition:.15s ease-out}@media (min-height:40.125em){.picker .picker__frame{margin-bottom:7.5%}}.picker .picker__frame .picker__wrap{display:table;width:100%;height:100%}.picker .picker__box{background:#fff;display:table-cell;vertical-align:middle}@media (min-height:28.875em){.picker .picker__frame{overflow:visible;top:auto;bottom:-100%;max-height:80%}.picker .picker__frame .picker__wrap{display:block}.picker .picker__box{display:block;border:1px solid #777;border-top-color:#898989;border-bottom-width:0;border-radius:5px 5px 0 0;box-shadow:0 .75rem 2.25rem 1rem rgba(0,0,0,.24)}}.picker--opened .picker__holder{top:0;background:rgba(0,0,0,.32);zoom:1;transition:background .15s ease-out}.picker--opened .picker__frame{top:0;opacity:1}@media (min-height:35.875em){.picker--opened .picker__frame{top:10%;bottom:auto}}.datepicker.picker__input.picker__input--active,.timepicker.picker__input.picker__input--active{border-bottom:1px solid #e3f2fd}.picker__box{padding:0;border-radius:.125rem;overflow:hidden}.picker__box .picker__header{text-align:center;position:relative;margin-bottom:1.25rem}.picker__box .picker__header select{display:inline-block!important}.picker__box .picker__header .picker__date-display{display:flex;justify-content:center;background-color:#4285f4;color:#fff;font-weight:400;padding-bottom:.3125rem}.picker__box .picker__header .picker__date-display .picker__weekday-display{padding:.875rem .4375rem .3125rem .5rem;letter-spacing:.5;font-size:2.1rem;margin-top:1.25rem}.picker__box .picker__header .picker__date-display .picker__day-display,.picker__box .picker__header .picker__date-display .picker__month-display{font-size:2.1rem;padding:.875rem .3125rem .25rem;margin-top:1.25rem}.picker__box .picker__header .picker__date-display .picker__year-display{font-size:1.1rem;color:rgba(255,255,255,.4);position:absolute;top:.625rem;left:45%}.picker__box .picker__header .picker__month,.picker__box .picker__header .picker__year{display:inline-block;margin-left:.25em;margin-right:.25em}.picker__box .picker__header .picker__select--month,.picker__box .picker__header .picker__select--year{height:2em;padding:0;margin-left:.25em;margin-right:.25em;display:inline-block;border:none;background:0 0;border-bottom:1px solid #ced4da;outline:0}.picker__box .picker__header .picker__select--month:focus,.picker__box .picker__header .picker__select--year:focus{border-color:rgba(0,0,0,.05)}.picker__box .picker__header .picker__select--year{width:30%}.picker__box .picker__header .picker__select--month.browser-default{display:inline;background-color:red;width:40%}.picker__box .picker__header .picker__select--year.browser-default{display:inline;background-color:red;width:25%}.picker__box .picker__header .picker__nav--next,.picker__box .picker__header .picker__nav--prev{position:absolute;padding:.1875rem .625rem;box-sizing:content-box}.picker__box .picker__header .picker__nav--next:hover,.picker__box .picker__header .picker__nav--prev:hover{cursor:pointer;color:#000}.picker__box .picker__header .picker__nav--prev{left:-.5em;padding-right:1.25em}.picker__box .picker__header .picker__nav--prev:before{content:'\\f104'}.picker__box .picker__header .picker__nav--next{right:-.2em;padding-left:1.25em}.picker__box .picker__header .picker__nav--next:before{content:'\\f105'}.picker__box .picker__header .picker__nav--disabled,.picker__box .picker__header .picker__nav--disabled:before,.picker__box .picker__header .picker__nav--disabled:before:hover,.picker__box .picker__header .picker__nav--disabled:hover{cursor:default;background:0 0;border-right-color:#f5f5f5;border-left-color:#f5f5f5}.picker__box .picker__table{text-align:center;border-collapse:collapse;border-spacing:0;table-layout:fixed;font-size:1rem;width:100%;margin-top:.75em;margin-bottom:.5em}.picker__box .picker__table td,.picker__box .picker__table th{text-align:center}.picker__box .picker__table td{margin:0;padding:0}.picker__box .picker__table .picker__weekday{width:14%;font-size:.9em;padding-bottom:.25em;color:#999;font-weight:500}@media (min-height:33.875em){.picker__box .picker__table .picker__weekday{padding-bottom:.25em}}.picker__box .picker__table .picker__day--today{position:relative;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent}.picker__box .picker__table .picker__day.picker__day--today{color:#4285f4}.picker__box .picker__table .picker__day--disabled:before{border-top-color:#aaa}.picker__box .picker__table .picker__day--infocus{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:#595959}.picker__box .picker__table .picker__day--infocus:hover{cursor:pointer;color:#000;font-weight:500}.picker__box .picker__table .picker__day--outfocus{display:none;padding:.75rem 0;color:#fff}.picker__box .picker__table .picker__day--outfocus:hover{cursor:pointer;color:#ddd;font-weight:500}.picker__box .picker__table .picker--focused .picker__day--highlighted,.picker__box .picker__table .picker__day--highlighted:hover{cursor:pointer}.picker__box .picker__table .picker--focused,.picker__box .picker__table .picker__day--selected,.picker__box .picker__table .picker__day--selected:hover{border-radius:50%;-webkit-transform:scale(.9);transform:scale(.9);background-color:#4285f4;color:#fff!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.picker__box .picker__table .picker--focused.picker__day--outfocus,.picker__box .picker__table .picker__day--selected.picker__day--outfocus,.picker__box .picker__table .picker__day--selected:hover.picker__day--outfocus{background-color:#ecf2fc}.picker__box .picker__table .picker--focused,.picker__box .picker__table .picker__day--disabled,.picker__box .picker__table .picker__day--disabled:hover{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default}.picker__box .picker__table .picker__day--highlighted.picker__day--disabled,.picker__box .picker__table .picker__day--highlighted.picker__day--disabled:hover{background:#bbb}.picker__box .picker__footer{text-align:right;padding:.3125rem .625rem;display:flex;align-items:center;justify-content:space-between}.picker__box .picker__footer .picker__button--clear,.picker__box .picker__footer .picker__button--close,.picker__box .picker__footer .picker__button--today{border:1px solid #fff;background:#fff;font-size:.8em;padding:1rem 0 .7rem;font-weight:700;width:33%;display:inline-block;vertical-align:bottom;text-transform:uppercase}.picker__box .picker__footer .picker__button--clear:hover,.picker__box .picker__footer .picker__button--close:hover,.picker__box .picker__footer .picker__button--today:hover{cursor:pointer;color:#000;background:#b1dcfb;border-bottom-color:#b1dcfb}.picker__box .picker__footer .picker__button--clear:focus,.picker__box .picker__footer .picker__button--close:focus,.picker__box .picker__footer .picker__button--today:focus{background:#b1dcfb;border-color:rgba(0,0,0,.05);outline:0}.picker__box .picker__footer .picker__button--clear:before,.picker__box .picker__footer .picker__button--close:before,.picker__box .picker__footer .picker__button--today:before{position:relative;display:inline-block;height:0}.picker__box .picker__footer .picker__button--clear:before,.picker__box .picker__footer .picker__button--today:before{content:' ';margin-right:.45em}.picker__box .picker__footer .picker__button--today:before{top:-.05em;width:0;border-top:.66em solid #0059bc;border-left:.66em solid transparent}.picker__box .picker__footer .picker__button--clear:before{top:-.25em;width:.66em;border-top:3px solid #e20}.picker__box .picker__footer .picker__button--close:before{content:'\\D7';top:-.1em;vertical-align:top;font-size:1.1em;margin-right:.35em;color:#777}.picker__box .picker__footer .picker__button--today[disabled],.picker__box .picker__footer .picker__button--today[disabled]:hover{background:#f5f5f5;border-color:#f5f5f5;color:#ddd;cursor:default}.picker__box .picker__footer .picker__button--today[disabled]:before{border-top-color:#aaa}.picker__calendar-container{padding:0 1rem}.picker__calendar-container thead{border:none}.picker__select--month,.picker__select--year{display:inline-block!important;height:2em;padding:0;margin-left:.25em;margin-right:.25em}.picker .picker__holder{overflow-y:visible;display:none}.picker.picker--opened .picker__holder{display:block}.picker__box .picker__table td.picker__day div.picker__day{border-radius:50%}.picker__day-display,.picker__month-display,.picker__weekday-display{font-size:2rem!important}.clockpicker-am-pm-block button{color:#fff!important}.mydp{line-height:1.1;display:inline-block;position:relative;border-radius:4px}.mydp label{-webkit-transform:translateY(15px);transform:translateY(15px)}.mydp label.active{font-size:.8rem;-webkit-transform:translateY(-7px);transform:translateY(-7px)}.picker__frame{min-height:506.45px}.picker__nav--next,.picker__nav--prev{position:absolute;padding:.5em 1.55em;width:1em;height:1em;box-sizing:content-box;bottom:0;border:0;background:0 0}.picker__nav--next:before,.picker__nav--prev:before{font-family:'Font Awesome 5 Pro','Font Awesome 5 Free'!important}.picker__nav--prev{padding-right:1.25em;left:0!important}.picker__nav--next{right:-1em;padding-left:1.25em}.picker__box .picker__header .picker__nav--next:before,.picker__box .picker__header .picker__nav--prev:before{font-family:unset;font-weight:unset;content:unset;display:none}.picker__box .picker__header .picker__nav--next:after,.picker__box .picker__header .picker__nav--prev:after{content:'';display:block;border-style:solid;border-width:0 2px 2px 0;padding:2.5px;position:absolute}.picker__nav--prev::after{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.picker__nav--next::after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.picker__header{overflow:hidden}.picker__box .picker__table td.picker__day{padding:0;position:relative}.picker__box .picker__table td.picker__day.disabled{color:#ccc;background:#eee}.picker__box .picker__table td.picker__day div.picker__day{color:#595959;letter-spacing:-.3;padding:.75rem 0;font-weight:400;border:1px solid transparent;outline:0;transition:.3s}.picker__box .picker__table td.picker__day div.picker__day:focus,.picker__box .picker__table td.picker__day div.picker__day:hover{cursor:pointer;color:#000;font-weight:500}.picker__box .picker__table td.picker__day div.picker__day.picker__day--today{color:#4285f4}.mydp .markdate{position:absolute;width:5px;height:5px;border-radius:50%;top:2px;right:2px}@media (max-height:35.875em){.picker--opened .picker__holder{overflow-y:scroll}}.validate-success.ng-valid .mydp-date{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}.validate-success.ng-valid .md-outline .mydp-date{border:1px solid #00c851!important;box-shadow:inset 0 0 0 1px #00c851!important}.validate-success.ng-valid .mydp label{color:#00c851!important}.validate-success.ng-valid .mydp .md-outline label{color:inherit!important;font-weight:400!important}.form-submitted .validate-error.ng-invalid .mydp-date,.validate-error.ng-invalid.ng-touched .mydp-date{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.validate-error.ng-invalid.ng-touched .md-outline .mydp-date{border:1px solid #f44336!important;box-shadow:inset 0 0 0 1px #f44336!important}.form-submitted .validate-error.ng-invalid .mydp label,.validate-error.ng-invalid.ng-touched .mydp label{color:#f44336!important}.form-submitted .validate-error.ng-invalid .mydp .md-outline label,.validate-error.ng-invalid.ng-touched .mydp .md-outline label{color:inherit!important;font-weight:400!important}.md-form mdb-date-picker .md-form{margin:0}.datepicker-inline-icon{position:absolute;top:5px;right:0;padding:.5rem}.md-outline>.datepicker-inline-icon{top:4px}.datepicker-inline{position:absolute}.datepicker-inline .picker__header{padding:.3125rem .625rem}.datepicker-inline .picker__nav--next,.datepicker-inline .picker__nav--prev{bottom:unset!important}.datepicker-inline .picker__frame{min-height:unset!important;max-height:unset!important;position:unset!important;margin:unset;border:0}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2RhdGUtcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBRVQsV0FBVyxFQUNYLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFnQnpFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0FBRXBFLE1BQU0sT0FBTyxtQkFBbUIsR0FBUTtJQUN0QyxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUM7SUFDckQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7O0lBR0MsT0FBUTtJQUNSLGlCQUFrQjtJQUNsQixnQkFBaUI7SUFDakIsa0JBQW1COzs7Ozs7OztJQUluQixLQUFNLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQztJQUNsQyxLQUFNLElBQUksSUFB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a0M7O0lBQ2xDLGlEQUE0Qjs7SUFDNUIsNkNBQTJCOztJQUMzQixpREFBK0I7O0lBQy9CLHdDQUFrQjs7SUFDbEIsNkNBQStFOztJQUUvRSwyQ0FBeUI7O0lBQ3pCLDhDQUE0Qjs7SUFDNUIsMENBQXdCOztJQUN4Qiw2Q0FBMkI7O0lBRTNCLG1EQUFpQzs7SUFDakMsbURBQWlDOztJQUNqQyxrREFBZ0M7O0lBQ2hDLGtEQUFnQzs7SUFFaEMsNkNBQTBDOztJQUMxQyw2Q0FBMEM7O0lBQzFDLDZDQUEwQzs7Ozs7SUFFMUMsc0NBQThDOztJQUU5Qyx3Q0FBZTs7SUFDZiw0Q0FBbUI7O0lBRW5CLHFDQUlFOztJQUdGLHNDQXlDRTs7SUFFRix3Q0FBd0I7O0lBQ3hCLHVDQUF1Qjs7SUFDdkIsK0NBQTBCOztJQUUxQixzREFBNEI7O0lBQzVCLG1EQUE4Qjs7SUFDOUIsMENBQXFCOztJQUNyQiwyQ0FBdUI7O0lBRXZCLGtEQUEyQjs7SUF1RTNCLDRDQUF3Qzs7SUFDeEMsNkNBQW1DOztJQXJFakMsc0NBQXVCOzs7OztJQUN2QiwwQ0FBMkI7Ozs7O0lBQzNCLCtDQUFvQzs7Ozs7SUFDcEMsNkNBQWdDOzs7OztJQUNoQyx1Q0FBZ0M7Ozs7O0lBQ2hDLGdEQUF3RTs7Ozs7SUFDeEUsMENBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU15TG9jYWxlcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9sb2NhbGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIFJlbmRlcmVyMixcclxuICBmb3J3YXJkUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFBMQVRGT1JNX0lELFxyXG4gIEluamVjdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBPcHRpb25hbCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge1xyXG4gIElNeURhdGUsXHJcbiAgSU15RGF0ZVJhbmdlLFxyXG4gIElNeU1vbnRoLFxyXG4gIElNeUNhbGVuZGFyRGF5LFxyXG4gIElNeVdlZWssXHJcbiAgSU15RGF5TGFiZWxzLFxyXG4gIElNeU1vbnRoTGFiZWxzLFxyXG4gIElNeUlucHV0RmllbGRDaGFuZ2VkLFxyXG4gIElNeUNhbGVuZGFyVmlld0NoYW5nZWQsXHJcbiAgSU15SW5wdXRGb2N1c0JsdXIsXHJcbiAgSU15TWFya2VkRGF0ZXMsXHJcbiAgSU15TWFya2VkRGF0ZSxcclxuICBJTXlPcHRpb25zLFxyXG59IGZyb20gJy4vaW50ZXJmYWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGVwaWNrZXJMb2NhbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRlcGlja2VyVXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTURCX0RBVEVfT1BUSU9OUyB9IGZyb20gJy4vb3B0aW9ucy50b2tlbic7XHJcbmltcG9ydCB7IEVOVEVSLCBTUEFDRSB9IGZyb20gJy4uLy4uL2ZyZWUvdXRpbHMva2V5Ym9hcmQtbmF2aWdhdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgTVlEUF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTURCRGF0ZVBpY2tlckNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWUsXHJcbn07XHJcblxyXG5lbnVtIENhbFRvZ2dsZSB7XHJcbiAgT3BlbiA9IDEsXHJcbiAgQ2xvc2VCeURhdGVTZWwgPSAyLFxyXG4gIENsb3NlQnlDYWxCdG4gPSAzLFxyXG4gIENsb3NlQnlPdXRDbGljayA9IDQsXHJcbn1cclxuXHJcbmVudW0gWWVhciB7XHJcbiAgbWluID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gNyxcclxuICBtYXggPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgKyA3LFxyXG59XHJcblxyXG5lbnVtIElucHV0Rm9jdXNCbHVyIHtcclxuICBmb2N1cyA9IDEsXHJcbiAgYmx1ciA9IDIsXHJcbn1cclxuXHJcbmVudW0gS2V5Q29kZSB7XHJcbiAgZW50ZXIgPSBFTlRFUixcclxuICBzcGFjZSA9IFNQQUNFLFxyXG59XHJcblxyXG5lbnVtIE1vbnRoSWQge1xyXG4gIHByZXYgPSAxLFxyXG4gIGN1cnIgPSAyLFxyXG4gIG5leHQgPSAzLFxyXG59XHJcblxyXG5sZXQgdW5pcXVlSWQgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZGItZGF0ZS1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnbWRiZGF0ZXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGFwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RhdGUtcGlja2VyLW1vZHVsZS5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbVXRpbFNlcnZpY2UsIE1ZRFBfVkFMVUVfQUNDRVNTT1JdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNREJEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgdGFiSW5kZXg6IGFueTtcclxuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGVmYXVsdE1vbnRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VsRGF0ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBASW5wdXQoKSBzZWxlY3RvcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9wZW5PbkZvY3VzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBvdXRsaW5lSW5wdXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbmxpbmUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBpbmxpbmVJY29uID0gJ2ZhciBmYS1jYWxlbmRhci1hbHQnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBpZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlkKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2lkID0gdmFsdWUgfHwgdGhpcy5fdWlkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaWQ6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dEZpZWxkQ2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUlucHV0RmllbGRDaGFuZ2VkPiA9IG5ldyBFdmVudEVtaXR0ZXI8XHJcbiAgICBJTXlJbnB1dEZpZWxkQ2hhbmdlZFxyXG4gID4oKTtcclxuICBAT3V0cHV0KCkgY2FsZW5kYXJWaWV3Q2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyVmlld0NoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIElNeUNhbGVuZGFyVmlld0NoYW5nZWRcclxuICA+KCk7XHJcbiAgQE91dHB1dCgpIGNhbGVuZGFyVG9nZ2xlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBpbnB1dEZvY3VzQmx1cjogRXZlbnRFbWl0dGVyPElNeUlucHV0Rm9jdXNCbHVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8SU15SW5wdXRGb2N1c0JsdXI+KCk7XHJcbiAgQE91dHB1dCgpIGNsb3NlQnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPE1EQkRhdGVQaWNrZXJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIE1EQkRhdGVQaWNrZXJDb21wb25lbnRcclxuICA+KCk7XHJcbiAgQE91dHB1dCgpIGNsZWFyQnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPE1EQkRhdGVQaWNrZXJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIE1EQkRhdGVQaWNrZXJDb21wb25lbnRcclxuICA+KCk7XHJcbiAgQE91dHB1dCgpIHRvZGF5QnV0dG9uQ2xpY2tlZDogRXZlbnRFbWl0dGVyPE1EQkRhdGVQaWNrZXJDb21wb25lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxcclxuICAgIE1EQkRhdGVQaWNrZXJDb21wb25lbnRcclxuICA+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RpdkZvY3VzJywgeyBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBkaXZGb2N1czogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ2lubGluZUlucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBpbmxpbmVJbnB1dDogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ2lubGluZUljb25Ub2dnbGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIGlubGluZUljb25Ub2dnbGU6IGFueTtcclxuXHJcbiAgQFZpZXdDaGlsZCgncGlja2VyRnJhbWUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcGlja2VyRnJhbWU6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHB1YmxpYyBpc0RhdGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBsYWJlbEFjdGl2ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICBwdWJsaWMgdmlzaWJsZU1vbnRoOiBJTXlNb250aCA9IHsgbW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMSB9O1xyXG4gIHB1YmxpYyBzZWxlY3RlZE1vbnRoOiBJTXlNb250aCA9IHsgbW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMCB9O1xyXG4gIHB1YmxpYyBzZWxlY3RlZERhdGU6IElNeURhdGUgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfTtcclxuICBwdWJsaWMgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBwdWJsaWMgZGF0ZXM6IEFycmF5PElNeVdlZWs+ID0gW107XHJcbiAgcHVibGljIHNlbGVjdGlvbkRheVR4dCA9ICcnO1xyXG4gIHB1YmxpYyBpbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBkaXNhYmxlVG9kYXlCdG4gPSBmYWxzZTtcclxuICBwdWJsaWMgZGF5SWR4ID0gMDtcclxuICBwdWJsaWMgd2Vla0RheU9wdHM6IEFycmF5PHN0cmluZz4gPSBbJ3N1JywgJ21vJywgJ3R1JywgJ3dlJywgJ3RoJywgJ2ZyJywgJ3NhJ107XHJcblxyXG4gIHB1YmxpYyBlZGl0TW9udGggPSBmYWxzZTtcclxuICBwdWJsaWMgaW52YWxpZE1vbnRoID0gZmFsc2U7XHJcbiAgcHVibGljIGVkaXRZZWFyID0gZmFsc2U7XHJcbiAgcHVibGljIGludmFsaWRZZWFyID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBwcmV2TW9udGhEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBuZXh0TW9udGhEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBwcmV2WWVhckRpc2FibGVkID0gZmFsc2U7XHJcbiAgcHVibGljIG5leHRZZWFyRGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHByZXZNb250aElkOiBudW1iZXIgPSBNb250aElkLnByZXY7XHJcbiAgcHVibGljIGN1cnJNb250aElkOiBudW1iZXIgPSBNb250aElkLmN1cnI7XHJcbiAgcHVibGljIG5leHRNb250aElkOiBudW1iZXIgPSBNb250aElkLm5leHQ7XHJcblxyXG4gIHByaXZhdGUgX3VpZCA9IGBtZGItZGF0ZXBpY2tlci0ke3VuaXF1ZUlkKyt9YDtcclxuXHJcbiAgaXNPcGVuID0gZmFsc2U7XHJcbiAgaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdG1wOiBJTXlEYXRlID0ge1xyXG4gICAgeWVhcjogdGhpcy5nZXRUb2RheSgpLnllYXIsXHJcbiAgICBtb250aDogdGhpcy5nZXRUb2RheSgpLm1vbnRoLFxyXG4gICAgZGF5OiB0aGlzLmdldFRvZGF5KCkuZGF5LFxyXG4gIH07XHJcblxyXG4gIC8vIERlZmF1bHQgb3B0aW9uc1xyXG4gIHB1YmxpYyBvcHRzOiBhbnkgPSB7XHJcbiAgICBzdGFydERhdGU6IDxhbnk+JycsXHJcbiAgICBjbG9zZUFmdGVyU2VsZWN0OiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIGRheUxhYmVsc0Z1bGw6IDxJTXlEYXlMYWJlbHM+e30sXHJcbiAgICBkYXlMYWJlbHM6IDxJTXlEYXlMYWJlbHM+e30sXHJcbiAgICBtb250aExhYmVsc0Z1bGw6IDxJTXlNb250aExhYmVscz57fSxcclxuICAgIG1vbnRoTGFiZWxzOiA8SU15TW9udGhMYWJlbHM+e30sXHJcbiAgICBkYXRlRm9ybWF0OiA8c3RyaW5nPicnLFxyXG4gICAgc2hvd1RvZGF5QnRuOiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgdG9kYXlCdG5UeHQ6IDxzdHJpbmc+JycsXHJcbiAgICBmaXJzdERheU9mV2VlazogPHN0cmluZz4nJyxcclxuICAgIHN1bkhpZ2hsaWdodDogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIG1hcmtDdXJyZW50RGF5OiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgZGlzYWJsZVVudGlsOiA8SU15RGF0ZT57IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfSxcclxuICAgIGRpc2FibGVTaW5jZTogPElNeURhdGU+eyB5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwIH0sXHJcbiAgICBkaXNhYmxlRGF5czogPEFycmF5PElNeURhdGUgfCBudW1iZXI+PltdLFxyXG4gICAgZW5hYmxlRGF5czogPEFycmF5PElNeURhdGUgfCBudW1iZXI+PltdLFxyXG4gICAgZWRpdGFibGVEYXRlRmllbGQ6IDxib29sZWFuPnRydWUsXHJcbiAgICBtYXJrRGF0ZXM6IDxBcnJheTxJTXlNYXJrZWREYXRlcz4+W10sXHJcbiAgICBtYXJrV2Vla2VuZHM6IDxJTXlNYXJrZWREYXRlPnt9LFxyXG4gICAgZGlzYWJsZURhdGVSYW5nZXM6IDxBcnJheTxJTXlEYXRlUmFuZ2U+PltdLFxyXG4gICAgZGlzYWJsZVdlZWtlbmRzOiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIHNob3dXZWVrTnVtYmVyczogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBoZWlnaHQ6IDxzdHJpbmc+JzMycHgnLFxyXG4gICAgd2lkdGg6IDxzdHJpbmc+JzEwMCUnLFxyXG4gICAgc2VsZWN0aW9uVHh0Rm9udFNpemU6IDxzdHJpbmc+JzFyZW0nLFxyXG4gICAgc2hvd0NsZWFyRGF0ZUJ0bjogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIGFsaWduU2VsZWN0b3JSaWdodDogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBkaXNhYmxlSGVhZGVyQnV0dG9uczogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIG1pblllYXI6IDxudW1iZXI+WWVhci5taW4sXHJcbiAgICBtYXhZZWFyOiA8bnVtYmVyPlllYXIubWF4LFxyXG4gICAgY29tcG9uZW50RGlzYWJsZWQ6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgc2hvd1NlbGVjdG9yQXJyb3c6IDxib29sZWFuPnRydWUsXHJcbiAgICB1c2VEYXRlT2JqZWN0OiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIGFyaWFMYWJlbElucHV0RmllbGQ6IDxzdHJpbmc+J0RhdGUgaW5wdXQgZmllbGQnLFxyXG4gICAgYXJpYUxhYmVsQ2xlYXJEYXRlOiA8c3RyaW5nPidDbGVhciBEYXRlJyxcclxuICAgIGFyaWFMYWJlbE9wZW5DYWxlbmRhcjogPHN0cmluZz4nT3BlbiBDYWxlbmRhcicsXHJcbiAgICBhcmlhTGFiZWxQcmV2TW9udGg6IDxzdHJpbmc+J1ByZXZpb3VzIE1vbnRoJyxcclxuICAgIGFyaWFMYWJlbE5leHRNb250aDogPHN0cmluZz4nTmV4dCBNb250aCcsXHJcbiAgICBhcmlhTGFiZWxQcmV2WWVhcjogPHN0cmluZz4nUHJldmlvdXMgWWVhcicsXHJcbiAgICBhcmlhTGFiZWxOZXh0WWVhcjogPHN0cmluZz4nTmV4dCBZZWFyJyxcclxuICB9O1xyXG5cclxuICBwdWJsaWMgbW9udGhzOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgeWVhcnM6IGFueSA9IFtdO1xyXG4gIHB1YmxpYyBlbGVtZW50TnVtYmVyOiBhbnk7XHJcblxyXG4gIGZpcnN0VGltZU9wZW5lZE1vZGFsID0gdHJ1ZTtcclxuICBtb2RhbEhlaWdodEJlZm9yZTogYW55ID0gbnVsbDtcclxuICBpc01vYmlsZTogYW55ID0gbnVsbDtcclxuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xyXG5cclxuICBkb2N1bWVudENsaWNrRnVuOiBGdW5jdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZWxlbTogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbG9jYWxlU2VydmljZTogTG9jYWxlU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE1EQl9EQVRFX09QVElPTlMpIHByaXZhdGUgX2dsb2JhbE9wdGlvbnM6IElNeU9wdGlvbnMsXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XHJcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5pc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICByZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RvciAmJlxyXG4gICAgICAgIGV2ZW50LnRhcmdldCAmJlxyXG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcclxuICAgICAgICAhdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmNsb3NlQnRuQ2xpY2tlZCgpO1xyXG4gICAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeU91dENsaWNrKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGlja2VyX19ob2xkZXInKSkge1xyXG4gICAgICAgIHRoaXMuY2xvc2VCdG5DbGlja2VkKCk7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRydWUgJiYgZXZlbnQudGFyZ2V0ICYmIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICB0aGlzLnJlc2V0TW9udGhZZWFyRWRpdCgpO1xyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuaWQgPSB0aGlzLmlkO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgaWYgKHRoaXMub3B0cy5zdGFydERhdGUpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0cy5zdGFydERhdGUudG9TdHJpbmcoKS5pbmRleE9mKCdUJykgIT09IC0xKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMub3B0cy5zdGFydERhdGUudG9TdHJpbmcoKS5pbmRleE9mKCdUJyk7XHJcbiAgICAgICAgICBjb25zdCBzdGFydERhdGUgPSB0aGlzLm9wdHMuc3RhcnREYXRlLnRvU3RyaW5nKCkuc3Vic3RyKDAsIGluZGV4KTtcclxuICAgICAgICAgIHRoaXMub25Vc2VyRGF0ZUlucHV0KHN0YXJ0RGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldE9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIENoYW5nZVpJbmRleCgpIHtcclxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyBGaXggZm9yIHZpc2libGUgZGF0ZSAvIHRpbWUgcGlja2VyIGlucHV0IHdoZW4gcGlja2VyIHBsYXRlIGlzIHZpc2libGUuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IG9wZW5lZFBpY2tlcjogYW55ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGlja2VyLS1vcGVuZWQnKTtcclxuICAgICAgICAgIGNvbnN0IGFsbFBpY2tlcnM6IGFueSA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpY2tlcicpO1xyXG4gICAgICAgICAgYWxsUGlja2Vycy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnei1pbmRleCcsICcwJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIC8vIENoYW5nZSB6LWluZGV4IGZyb20gMTAwIHRvIDEwMzEgPT4gRml4IGZvciBwcm9ibGVtXHJcbiAgICAgICAgICAvLyB3aGVuIGlubGluZSBkYXRlcGlja2VyIHdhcyByZW5kZXJlZCBiZWxvdyBmb290ZXIgd2l0aCAuZml4ZWQtYm90dG9tIGNsYXNzXHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG9wZW5lZFBpY2tlciwgJ3otaW5kZXgnLCAnMTAzMScpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlQ2I6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuICBvblRvdWNoZWRDYjogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlubGluZSkge1xyXG4gICAgICB0aGlzLnNldERpc2FibGVkKGlzRGlzYWJsZWQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmlubGluZUljb24gKz0gJyBkaXNhYmxlZCBncmV5LXRleHQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdG8gPSB0aGlzLmlubGluZUljb24uaW5kZXhPZignZGlzYWJsZWQnKTtcclxuICAgICAgaWYgKHRvID49IDApIHtcclxuICAgICAgICB0aGlzLmlubGluZUljb24gPSB0aGlzLmlubGluZUljb24uc3Vic3RyKDAsIHRvKTtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSW5saW5lU3R5bGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtY29udGVudCcpKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCxcclxuICAgICAgICAgICd0cmFuc2l0aW9uJyxcclxuICAgICAgICAgICdoZWlnaHQgMC4zcydcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgICAgdGhpcy5tb2RhbEhlaWdodEJlZm9yZSArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICh0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCBhcyBhbnkpLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xyXG4gICAgfSwgMTU1KTtcclxuICAgIHRoaXMubGFiZWxBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNldExvY2FsZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBvcHRzOiBhbnkgPSB0aGlzLmxvY2FsZVNlcnZpY2UuZ2V0TG9jYWxlT3B0aW9ucyh0aGlzLmxvY2FsZSk7XHJcbiAgICBPYmplY3Qua2V5cyhvcHRzKS5mb3JFYWNoKGsgPT4ge1xyXG4gICAgICB0aGlzLm9wdHNba10gPSBvcHRzW2tdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRMb2NhbGUobG9jYWxlOiBJTXlMb2NhbGVzKSB7XHJcbiAgICB0aGlzLmxvY2FsZVNlcnZpY2UubG9jYWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubG9jYWxlU2VydmljZS5sb2NhbGVzLCBsb2NhbGUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2dsb2JhbE9wdGlvbnMsIHRoaXMub3B0aW9ucyk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgdGhpcy5vcHRzW2tdID0gb3B0aW9uc1trXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub3B0cy5jb21wb25lbnREaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldE1vbnRoWWVhckVkaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRNb250aCA9IGZhbHNlO1xyXG4gICAgdGhpcy5lZGl0WWVhciA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbnZhbGlkTW9udGggPSBmYWxzZTtcclxuICAgIHRoaXMuaW52YWxpZFllYXIgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9uVXNlckRhdGVJbnB1dCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmludmFsaWREYXRlID0gZmFsc2U7XHJcbiAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0gdGhpcy51dGlsU2VydmljZS5pc0RhdGVWYWxpZChcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICB0aGlzLm9wdHMuZGF0ZUZvcm1hdCxcclxuICAgICAgICB0aGlzLm9wdHMubWluWWVhcixcclxuICAgICAgICB0aGlzLm9wdHMubWF4WWVhcixcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICAgIHRoaXMub3B0cy5tb250aExhYmVscyxcclxuICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRoaXMudXRpbFNlcnZpY2UuaXNJbml0aWFsaXplZERhdGUoZGF0ZSkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdERhdGUoZGF0ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlTW9udGgoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmludmFsaWREYXRlID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaW52YWxpZERhdGUpIHtcclxuICAgICAgdGhpcy5pbnB1dEZpZWxkQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsXHJcbiAgICAgICAgdmFsaWQ6ICEodmFsdWUubGVuZ3RoID09PSAwIHx8IHRoaXMuaW52YWxpZERhdGUpLFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5vbkNoYW5nZUNiKCcnKTtcclxuICAgICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Gb2N1c0lucHV0KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wZW5PbkZvY3VzICYmICF0aGlzLmlzT3Blbikge1xyXG4gICAgICB0aGlzLm9wZW5CdG5DbGlja2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dEZvY3VzQmx1ci5lbWl0KHsgcmVhc29uOiBJbnB1dEZvY3VzQmx1ci5mb2N1cywgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIGlmICghdGhpcy5pbmxpbmUpIHtcclxuICAgICAgKHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IGFzIGFueSkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cklucHV0KGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgdGhpcy5pbnB1dEZvY3VzQmx1ci5lbWl0KHsgcmVhc29uOiBJbnB1dEZvY3VzQmx1ci5ibHVyLCB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Vc2VyTW9udGhJbnB1dCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmludmFsaWRNb250aCA9IGZhbHNlO1xyXG4gICAgY29uc3QgbTogbnVtYmVyID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoTGFiZWxWYWxpZCh2YWx1ZSwgdGhpcy5vcHRzLm1vbnRoTGFiZWxzKTtcclxuICAgIGlmIChtICE9PSAtMSkge1xyXG4gICAgICB0aGlzLmVkaXRNb250aCA9IGZhbHNlO1xyXG4gICAgICBpZiAobSAhPT0gdGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIpIHtcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHtcclxuICAgICAgICAgIG1vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChtKSxcclxuICAgICAgICAgIG1vbnRoTmJyOiBtLFxyXG4gICAgICAgICAgeWVhcjogdGhpcy52aXNpYmxlTW9udGgueWVhcixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnZhbGlkTW9udGggPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Vc2VyWWVhcklucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZFllYXIgPSBmYWxzZTtcclxuICAgIGNvbnN0IHk6IG51bWJlciA9IHRoaXMudXRpbFNlcnZpY2UuaXNZZWFyTGFiZWxWYWxpZChcclxuICAgICAgTnVtYmVyKHZhbHVlKSxcclxuICAgICAgdGhpcy5vcHRzLm1pblllYXIsXHJcbiAgICAgIHRoaXMub3B0cy5tYXhZZWFyXHJcbiAgICApO1xyXG4gICAgaWYgKHkgIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZWRpdFllYXIgPSBmYWxzZTtcclxuICAgICAgaWYgKHkgIT09IHRoaXMudmlzaWJsZU1vbnRoLnllYXIpIHtcclxuICAgICAgICB0aGlzLnZpc2libGVNb250aCA9IHtcclxuICAgICAgICAgIG1vbnRoVHh0OiB0aGlzLnZpc2libGVNb250aC5tb250aFR4dCxcclxuICAgICAgICAgIG1vbnRoTmJyOiB0aGlzLnZpc2libGVNb250aC5tb250aE5icixcclxuICAgICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHksIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmludmFsaWRZZWFyID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzVG9kYXlEaXNhYmxlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZVRvZGF5QnRuID0gdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KFxyXG4gICAgICB0aGlzLmdldFRvZGF5KCksXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHBhcnNlT3B0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmxvY2FsZSkge1xyXG4gICAgICB0aGlzLnNldExvY2FsZU9wdGlvbnMoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc2V0T3B0aW9ucygpO1xyXG4gICAgdGhpcy5pc1RvZGF5RGlzYWJsZWQoKTtcclxuICAgIHRoaXMuZGF5SWR4ID0gdGhpcy53ZWVrRGF5T3B0cy5pbmRleE9mKHRoaXMub3B0cy5maXJzdERheU9mV2Vlayk7XHJcbiAgICBpZiAodGhpcy5kYXlJZHggIT09IC0xKSB7XHJcbiAgICAgIGxldCBpZHg6IG51bWJlciA9IHRoaXMuZGF5SWR4O1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2Vla0RheU9wdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0aGlzLndlZWtEYXlzLnB1c2godGhpcy5vcHRzLmRheUxhYmVsc1t0aGlzLndlZWtEYXlPcHRzW2lkeF1dKTtcclxuICAgICAgICBpZHggPSB0aGlzLndlZWtEYXlPcHRzW2lkeF0gPT09ICdzYScgPyAwIDogaWR4ICsgMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZSh0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHZhbHVlKSwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB2YWx1ZVsnZGF0ZSddKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKHRoaXMucGFyc2VTZWxlY3RlZERhdGUodmFsdWVbJ2RhdGUnXSksIGZhbHNlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSB7IGRheTogdmFsdWUuZ2V0RGF0ZSgpLCBtb250aDogdmFsdWUuZ2V0TW9udGgoKSArIDEsIHllYXI6IHZhbHVlLmdldEZ1bGxZZWFyKCkgfTtcclxuICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUodGhpcy5wYXJzZVNlbGVjdGVkRGF0ZShkYXRlKSwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZUNiID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiID0gZm47XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0b3InKSAmJiBjaGFuZ2VzWydzZWxlY3RvciddLmN1cnJlbnRWYWx1ZSA+IDApIHtcclxuICAgICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZWQgPSBjaGFuZ2VzWydkaXNhYmxlZCddLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgdGhpcy5zZXREaXNhYmxlZCh0aGlzLmRpc2FibGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgncGxhY2Vob2xkZXInKSkge1xyXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gY2hhbmdlc1sncGxhY2Vob2xkZXInXS5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2xvY2FsZScpKSB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gY2hhbmdlc1snbG9jYWxlJ10uY3VycmVudFZhbHVlO1xyXG4gICAgICB0aGlzLnNldExvY2FsZU9wdGlvbnMoKTtcclxuICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUodGhpcy5zZWxlY3RlZERhdGUsIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGlzYWJsZWQnKSkge1xyXG4gICAgICB0aGlzLmRpc2FibGVkID0gY2hhbmdlc1snZGlzYWJsZWQnXS5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSkge1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBjaGFuZ2VzWydvcHRpb25zJ10uY3VycmVudFZhbHVlO1xyXG4gICAgICBpZiAoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSAmJiBjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlLnN0YXJ0RGF0ZSkge1xyXG4gICAgICAgIHRoaXMub25Vc2VyRGF0ZUlucHV0KGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUuc3RhcnREYXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud2Vla0RheXMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMucGFyc2VPcHRpb25zKCk7XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRNb250aCcpKSB7XHJcbiAgICAgIGNvbnN0IGRtOiBzdHJpbmcgPSBjaGFuZ2VzWydkZWZhdWx0TW9udGgnXS5jdXJyZW50VmFsdWU7XHJcbiAgICAgIGlmIChkbSAhPT0gbnVsbCAmJiBkbSAhPT0gdW5kZWZpbmVkICYmIGRtICE9PSAnJykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHRoaXMucGFyc2VTZWxlY3RlZE1vbnRoKGRtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkTW9udGggPSB7IG1vbnRoVHh0OiAnJywgbW9udGhOYnI6IDAsIHllYXI6IDAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdzZWxEYXRlJykpIHtcclxuICAgICAgY29uc3Qgc2Q6IGFueSA9IGNoYW5nZXNbJ3NlbERhdGUnXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHNkLmN1cnJlbnRWYWx1ZSAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHNkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgc2QuY3VycmVudFZhbHVlICE9PSAnJyAmJlxyXG4gICAgICAgIE9iamVjdC5rZXlzKHNkLmN1cnJlbnRWYWx1ZSkubGVuZ3RoICE9PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdGhpcy5wYXJzZVNlbGVjdGVkRGF0ZShzZC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vbkNoYW5nZUNiKHRoaXMuZ2V0RGF0ZU1vZGVsKHRoaXMuc2VsZWN0ZWREYXRlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5pc0RhdGVTZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRG8gbm90IGNsZWFyIG9uIGluaXRcclxuICAgICAgICBpZiAoIXNkLmlzRmlyc3RDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlS2V5Ym9hcmQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCBmaWVsZCk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRSZWZlcmVuY2UgPSB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGlucHV0UmVmZXJlbmNlLCAndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXRSZWZlcmVuY2UsICd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlucHV0UmVmZXJlbmNlLCAnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbnB1dFJlZmVyZW5jZSwgJy13ZWJraXQtdXNlci1tb2RpZnknLCAncmVhZC13cml0ZS1wbGFpbnRleHQtb25seScpO1xyXG4gICAgICAgIGZpZWxkLm9uZm9jdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShmaWVsZCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCBmaWVsZCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5kb2N1bWVudC5ib2R5LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmaWVsZC5mb2N1cygpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQnRuQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNEYXRlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2xlYXJCdXR0b25DbGlja2VkLmVtaXQodGhpcyk7XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VCdG5DbGlja2VkKCkge1xyXG4gICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgIHRoaXMucmVtb3ZlSW5saW5lU3R5bGUoKTtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmNsb3NlQnV0dG9uQ2xpY2tlZC5lbWl0KHRoaXMpO1xyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuXHJcbiAgICB0aGlzLmRvY3VtZW50Q2xpY2tGdW4oKTtcclxuICB9XHJcblxyXG4gIG9wZW5CdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuZG9jdW1lbnRDbGlja0Z1biA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmlzT3BlbiAmJlxyXG4gICAgICAgIHRoaXMucGlja2VyRnJhbWUgJiZcclxuICAgICAgICB0aGlzLmlubGluZUlucHV0ICYmXHJcbiAgICAgICAgdGhpcy5pbmxpbmVJY29uVG9nZ2xlICYmXHJcbiAgICAgICAgIXRoaXMuaW5saW5lSW5wdXQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXHJcbiAgICAgICAgIXRoaXMucGlja2VyRnJhbWUubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmXHJcbiAgICAgICAgIXRoaXMuaW5saW5lSWNvblRvZ2dsZS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ0bkNsaWNrZWQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWNvbnRlbnQnKSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0VGltZU9wZW5lZE1vZGFsKSB7XHJcbiAgICAgICAgICB0aGlzLm1vZGFsSGVpZ2h0QmVmb3JlID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maXJzdFRpbWVPcGVuZWRNb2RhbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQsXHJcbiAgICAgICAgICAndHJhbnNpdGlvbicsXHJcbiAgICAgICAgICAnaGVpZ2h0IDAuM3MnXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXHJcbiAgICAgICAgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnN0eWxlLmhlaWdodCA9XHJcbiAgICAgICAgICB0aGlzLm1vZGFsSGVpZ2h0QmVmb3JlICsgdGhpcy5waWNrZXJGcmFtZS5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgLy8gT3BlbiBzZWxlY3RvciBidXR0b24gY2xpY2tlZFxyXG4gICAgdGhpcy5zaG93U2VsZWN0b3IgPSAhdGhpcy5zaG93U2VsZWN0b3I7XHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5zZXRWaXNpYmxlTW9udGgoKTtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5PcGVuKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICB0aGlzLmhpZGVLZXlib2FyZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYWJlbEFjdGl2ZSA9IHRydWU7XHJcbiAgICBpZiAoIXRoaXMuaW5saW5lKSB7XHJcbiAgICAgIHRoaXMuQ2hhbmdlWkluZGV4KCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmlzaWJsZU1vbnRoKCk6IHZvaWQge1xyXG4gICAgLy8gU2V0cyB2aXNpYmxlIG1vbnRoIG9mIGNhbGVuZGFyXHJcbiAgICBsZXQgeSA9IDAsXHJcbiAgICAgIG0gPSAwO1xyXG4gICAgaWYgKCF0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKHRoaXMuc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE1vbnRoLnllYXIgPT09IDAgJiYgdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyID09PSAwKSB7XHJcbiAgICAgICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICAgICAgeSA9IHRvZGF5LnllYXI7XHJcbiAgICAgICAgbSA9IHRvZGF5Lm1vbnRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSB0aGlzLnNlbGVjdGVkTW9udGgueWVhcjtcclxuICAgICAgICBtID0gdGhpcy5zZWxlY3RlZE1vbnRoLm1vbnRoTmJyO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gdGhpcy5zZWxlY3RlZERhdGUueWVhcjtcclxuICAgICAgbSA9IHRoaXMuc2VsZWN0ZWREYXRlLm1vbnRoO1xyXG4gICAgfVxyXG4gICAgdGhpcy52aXNpYmxlTW9udGggPSB7IG1vbnRoVHh0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbbV0sIG1vbnRoTmJyOiBtLCB5ZWFyOiB5IH07XHJcblxyXG4gICAgLy8gQ3JlYXRlIGN1cnJlbnQgbW9udGhcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB5LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG1vbnRoTGlzdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubW9udGhzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XHJcbiAgICAgIHRoaXMubW9udGhzLnB1c2goe1xyXG4gICAgICAgIGluZGV4OiBpLFxyXG4gICAgICAgIHNob3J0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbaV0sXHJcbiAgICAgICAgbGFiZWw6IHRoaXMub3B0cy5tb250aExhYmVsc0Z1bGxbaV0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgeWVhcnNMaXN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy55ZWFycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0WWVhciA9IHRoaXMub3B0cy5taW5ZZWFyO1xyXG4gICAgY29uc3QgbGFzdFllYXIgPSB0aGlzLm9wdHMubWF4WWVhcjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gZmlyc3RZZWFyOyBpIDw9IGxhc3RZZWFyOyBpKyspIHtcclxuICAgICAgdGhpcy55ZWFycy5wdXNoKGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldk1vbnRoKGV2ZW50PzogYW55KTogdm9pZCB7XHJcbiAgICAvLyBQcmV2aW91cyBtb250aCBmcm9tIGNhbGVuZGFyXHJcbiAgICBjb25zdCBkOiBEYXRlID0gdGhpcy5nZXREYXRlKHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCAxKTtcclxuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpIC0gMSk7XHJcblxyXG4gICAgY29uc3QgeTogbnVtYmVyID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgY29uc3QgbTogbnVtYmVyID0gZC5nZXRNb250aCgpICsgMTtcclxuXHJcbiAgICB0aGlzLnZpc2libGVNb250aCA9IHsgbW9udGhUeHQ6IHRoaXMubW9udGhUZXh0KG0pLCBtb250aE5icjogbSwgeWVhcjogeSB9O1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHksIHRydWUpO1xyXG5cclxuICAgIC8vIFByZXZlbnRzIHRyaWdnZXIgKGNsaWNrKSBldmVudCB3aGVuIHVzaW5nIEVudGVyXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVIpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0TW9udGgoZXZlbnQ/OiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIE5leHQgbW9udGggZnJvbSBjYWxlbmRhclxyXG4gICAgY29uc3QgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh0aGlzLnZpc2libGVNb250aC55ZWFyLCB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgMSk7XHJcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSArIDEpO1xyXG5cclxuICAgIGNvbnN0IHk6IG51bWJlciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG06IG51bWJlciA9IGQuZ2V0TW9udGgoKSArIDE7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlTW9udGggPSB7IG1vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChtKSwgbW9udGhOYnI6IG0sIHllYXI6IHkgfTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB5LCB0cnVlKTtcclxuXHJcbiAgICAvLyBQcmV2ZW50cyB0cmlnZ2VyIChjbGljaykgZXZlbnQgd2hlbiB1c2luZyBFbnRlclxyXG4gICAgaWYgKGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2WWVhcigpOiB2b2lkIHtcclxuICAgIC8vIFByZXZpb3VzIHllYXIgZnJvbSBjYWxlbmRhclxyXG4gICAgdGhpcy52aXNpYmxlTW9udGgueWVhci0tO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG5leHRZZWFyKCk6IHZvaWQge1xyXG4gICAgLy8gTmV4dCB5ZWFyIGZyb20gY2FsZW5kYXJcclxuICAgIHRoaXMudmlzaWJsZU1vbnRoLnllYXIrKztcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgdGhpcy52aXNpYmxlTW9udGgueWVhciwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICB0b2RheUNsaWNrZWQoKTogdm9pZCB7XHJcbiAgICAvLyBUb2RheSBidXR0b24gY2xpY2tlZFxyXG4gICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoXHJcbiAgICAgICAgdG9kYXksXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZWxlY3REYXRlKHRvZGF5KTtcclxuICAgIH1cclxuICAgIGlmICh0b2RheS55ZWFyICE9PSB0aGlzLnZpc2libGVNb250aC55ZWFyIHx8IHRvZGF5Lm1vbnRoICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icikge1xyXG4gICAgICB0aGlzLnZpc2libGVNb250aCA9IHtcclxuICAgICAgICBtb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW3RvZGF5Lm1vbnRoXSxcclxuICAgICAgICBtb250aE5icjogdG9kYXkubW9udGgsXHJcbiAgICAgICAgeWVhcjogdG9kYXkueWVhcixcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRvZGF5Lm1vbnRoLCB0b2RheS55ZWFyLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHRoaXMudG9kYXlCdXR0b25DbGlja2VkLmVtaXQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjZWxsQ2xpY2tlZChjZWxsOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIENlbGwgY2xpY2tlZCBvbiB0aGUgY2FsZW5kYXJcclxuICAgIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5wcmV2TW9udGhJZCkge1xyXG4gICAgICAvLyBQcmV2aW91cyBtb250aCBkYXlcclxuICAgICAgdGhpcy5wcmV2TW9udGgoKTtcclxuICAgIH0gZWxzZSBpZiAoY2VsbC5jbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQpIHtcclxuICAgICAgLy8gQ3VycmVudCBtb250aCBkYXkgLSBpZiBkYXRlIGlzIGFscmVhZHkgc2VsZWN0ZWQgY2xlYXIgaXRcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGNlbGwuZGF0ZU9iai55ZWFyID09PSB0aGlzLnNlbGVjdGVkRGF0ZS55ZWFyICYmXHJcbiAgICAgICAgY2VsbC5kYXRlT2JqLm1vbnRoID09PSB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aCAmJlxyXG4gICAgICAgIGNlbGwuZGF0ZU9iai5kYXkgPT09IHRoaXMuc2VsZWN0ZWREYXRlLmRheVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RGF0ZShjZWxsLmRhdGVPYmopO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGNlbGwuY21vID09PSB0aGlzLm5leHRNb250aElkKSB7XHJcbiAgICAgIC8vIE5leHQgbW9udGggZGF5XHJcbiAgICAgIHRoaXMubmV4dE1vbnRoKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0TW9udGhZZWFyRWRpdCgpO1xyXG4gIH1cclxuXHJcbiAgY2VsbEtleURvd24oZXZlbnQ6IGFueSwgY2VsbDogYW55KSB7XHJcbiAgICAvLyBDZWxsIGtleWJvYXJkIGhhbmRsaW5nXHJcbiAgICBpZiAoKGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuZW50ZXIgfHwgZXZlbnQua2V5Q29kZSA9PT0gS2V5Q29kZS5zcGFjZSkgJiYgIWNlbGwuZGlzYWJsZWQpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5jZWxsQ2xpY2tlZChjZWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyRGF0ZSgpOiB2b2lkIHtcclxuICAgIC8vIENsZWFycyB0aGUgZGF0ZSBhbmQgbm90aWZpZXMgcGFyZW50IHVzaW5nIGNhbGxiYWNrcyBhbmQgdmFsdWUgYWNjZXNzb3JcclxuICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfTtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZWQuZW1pdCh7IGRhdGU6IGRhdGUsIGpzZGF0ZTogbnVsbCwgZm9ybWF0dGVkOiAnJywgZXBvYzogMCB9KTtcclxuICAgIHRoaXMub25DaGFuZ2VDYihudWxsKTtcclxuICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKGRhdGUsIHRydWUpO1xyXG4gICAgdGhpcy50bXAgPSB7XHJcbiAgICAgIHllYXI6IHRoaXMuZ2V0VG9kYXkoKS55ZWFyLFxyXG4gICAgICBtb250aDogdGhpcy5nZXRUb2RheSgpLm1vbnRoLFxyXG4gICAgICBkYXk6IHRoaXMuZ2V0VG9kYXkoKS5kYXksXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zZXRWaXNpYmxlTW9udGgoKTtcclxuICAgIHRoaXMubGFiZWxBY3RpdmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHNlbGVjdERhdGUoZGF0ZTogSU15RGF0ZSk6IHZvaWQge1xyXG4gICAgLy8gRGF0ZSBzZWxlY3RlZCwgbm90aWZpZXMgcGFyZW50IHVzaW5nIGNhbGxiYWNrcyBhbmQgdmFsdWUgYWNjZXNzb3JcclxuICAgIHRoaXMudG1wID0gZGF0ZTtcclxuICAgIGNvbnN0IGRhdGVNb2RlbDogYW55ID0gdGhpcy5nZXREYXRlTW9kZWwoZGF0ZSk7XHJcbiAgICB0aGlzLmRhdGVDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICBkYXRlOiBkYXRlLFxyXG4gICAgICBqc2RhdGU6IHRoaXMuZ2V0RGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KSxcclxuICAgICAgcHJldmlvdXNEYXRlRm9ybWF0dGVkOiB0aGlzLnNlbGVjdGlvbkRheVR4dCxcclxuICAgICAgYWN0dWFsRGF0ZUZvcm1hdHRlZDogZGF0ZU1vZGVsLFxyXG4gICAgICBlcG9jOiBNYXRoLnJvdW5kKHRoaXMuZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGUpIC8gMTAwMC4wKSxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5vbkNoYW5nZUNiKGRhdGVNb2RlbCk7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZShkYXRlLCBmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5RGF0ZVNlbCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5vcHRzLmNsb3NlQWZ0ZXJTZWxlY3QpIHtcclxuICAgICAgdGhpcy5jbG9zZUJ0bkNsaWNrZWQoKTtcclxuICAgIH1cclxuICAgIHRoaXMubGFiZWxBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGF0ZVZhbHVlKGRhdGU6IElNeURhdGUsIGNsZWFyOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBVcGRhdGVzIGRhdGUgdmFsdWVzXHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLnRtcCA9IGRhdGU7XHJcbiAgICB0aGlzLmlzRGF0ZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gY2xlYXIgPyAnJyA6IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7XHJcbiAgICAgIHZhbHVlOiB0aGlzLnNlbGVjdGlvbkRheVR4dCxcclxuICAgICAgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsXHJcbiAgICAgIHZhbGlkOiAhY2xlYXIsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlTW9kZWwoZGF0ZTogSU15RGF0ZSk6IGFueSB7XHJcbiAgICBjb25zdCBqc0RhdGUgPSB0aGlzLmdldERhdGUoZGF0ZS55ZWFyLCBkYXRlLm1vbnRoLCBkYXRlLmRheSk7XHJcbiAgICBjb25zdCBkYXRlTW9kZWwgPSB0aGlzLm9wdHMudXNlRGF0ZU9iamVjdCA/IGpzRGF0ZSA6IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlTW9kZWw7XHJcbiAgfVxyXG5cclxuICBwcmVaZXJvKHZhbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIFByZXBlbmQgemVybyBpZiBzbWFsbGVyIHRoYW4gMTBcclxuICAgIHJldHVybiBwYXJzZUludCh2YWwsIDApIDwgMTAgPyAnMCcgKyB2YWwgOiB2YWw7XHJcbiAgfVxyXG5cclxuICBmb3JtYXREYXRlKHZhbDogYW55KTogc3RyaW5nIHtcclxuICAgIC8vIFJldHVybnMgZm9ybWF0dGVkIGRhdGUgc3RyaW5nLCBpZiBtbW0gaXMgcGFydCBvZiBkYXRlRm9ybWF0IHJldHVybnMgbW9udGggYXMgYSBzdHJpbmdcclxuICAgIC8vIGRheXNcclxuICAgIGNvbnN0IGQgPSB2YWwuZGF5OyAvLyAxIC0gMzFcclxuICAgIGNvbnN0IGRkID0gdGhpcy5wcmVaZXJvKHZhbC5kYXkpOyAvLyAwMSAtIDMxXHJcbiAgICBjb25zdCBkZGQgPSB0aGlzLm9wdHMuZGF5TGFiZWxzW3RoaXMuZ2V0V2Vla2RheSh2YWwpXTsgLy8gU3VuLVNhdFxyXG4gICAgY29uc3QgZGRkZCA9IHRoaXMub3B0cy5kYXlMYWJlbHNGdWxsW3RoaXMuZ2V0V2Vla2RheSh2YWwpXTsgLy8gU3VuZGF5IOKAkyBTYXR1cmRheVxyXG4gICAgY29uc3QgbSA9IHZhbC5tb250aDsgLy8gMSAtIDEyXHJcbiAgICBjb25zdCBtbSA9IHRoaXMucHJlWmVybyh2YWwubW9udGgpOyAvLyAwMSAtIDEyXHJcbiAgICBjb25zdCBtbW0gPSB0aGlzLmdldE1vbnRoU2hvcnQodmFsLm1vbnRoKTsgLy8gSmFuIC0gRGVjXHJcbiAgICBjb25zdCBtbW1tID0gdGhpcy5nZXRNb250aEZ1bGwodmFsLm1vbnRoKTsgLy8gSmFudWFyeSDigJMgRGVjZW1iZXJcclxuICAgIGNvbnN0IHl5ID0gdmFsLnllYXIudG9TdHJpbmcoKS5sZW5ndGggPT09IDIgPyB2YWwueWVhciA6IHZhbC55ZWFyLnRvU3RyaW5nKCkuc2xpY2UoMiwgNCk7IC8vIDAwIC0gOTlcclxuICAgIGNvbnN0IHl5eXkgPSB2YWwueWVhcjtcclxuXHJcbiAgICBjb25zdCB0b1JlcGxhY2UgPSB0aGlzLm9wdHMuZGF0ZUZvcm1hdC5zcGxpdCgvKGR7MSw0fXxtezEsNH18eXs0fXx5eXwhLikvZyk7XHJcbiAgICBsZXQgZm9ybWF0dGVkID0gJyc7XHJcbiAgICB0b1JlcGxhY2UuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGVsKSB7XHJcbiAgICAgICAgY2FzZSAnZGRkZCc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIGRkZGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZGRkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZGRkKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2RkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW1tbSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIG1tbW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW1tJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbW1tKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ21tJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIG0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneXl5eSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIHl5eXkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAneXknOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCB5eSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBmb3JtYXR0ZWQgKz0gZWw7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybWF0dGVkO1xyXG4gIH1cclxuXHJcbiAgbW9udGhUZXh0KG06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAvLyBSZXR1cm5zIG1vbnRoIGFzIGEgdGV4dFxyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc1ttXTtcclxuICB9XHJcblxyXG4gIHdlZWtUZXh0KG06IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyBSZXR1cm5zIG1vbnRoIGFzIGEgdGV4dFxyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5kYXlMYWJlbHNGdWxsW21dO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhTaG9ydChtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc1ttXTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoRnVsbChtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0cy5tb250aExhYmVsc0Z1bGxbbV07XHJcbiAgfVxyXG5cclxuICBtb250aFN0YXJ0SWR4KHk6IG51bWJlciwgbTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIE1vbnRoIHN0YXJ0IGluZGV4XHJcbiAgICBjb25zdCBkID0gbmV3IERhdGUoKTtcclxuICAgIGQuc2V0RGF0ZSgxKTtcclxuICAgIGQuc2V0TW9udGgobSAtIDEpO1xyXG4gICAgZC5zZXRGdWxsWWVhcih5KTtcclxuICAgIGNvbnN0IGlkeCA9IGQuZ2V0RGF5KCkgKyB0aGlzLnN1bmRheUlkeCgpO1xyXG4gICAgcmV0dXJuIGlkeCA+PSA3ID8gaWR4IC0gNyA6IGlkeDtcclxuICB9XHJcblxyXG4gIGRheXNJbk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiBjdXJyZW50IG1vbnRoXHJcbiAgICByZXR1cm4gbmV3IERhdGUoeSwgbSwgMCkuZ2V0RGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZGF5c0luUHJldk1vbnRoKG06IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIFJldHVybiBudW1iZXIgb2YgZGF5cyBvZiB0aGUgcHJldmlvdXMgbW9udGhcclxuICAgIGNvbnN0IGQ6IERhdGUgPSB0aGlzLmdldERhdGUoeSwgbSwgMSk7XHJcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSAtIDEpO1xyXG4gICAgcmV0dXJuIHRoaXMuZGF5c0luTW9udGgoZC5nZXRNb250aCgpICsgMSwgZC5nZXRGdWxsWWVhcigpKTtcclxuICB9XHJcblxyXG4gIGlzQ3VyckRheShkOiBudW1iZXIsIG06IG51bWJlciwgeTogbnVtYmVyLCBjbW86IG51bWJlciwgdG9kYXk6IElNeURhdGUpOiBib29sZWFuIHtcclxuICAgIC8vIENoZWNrIGlzIGEgZ2l2ZW4gZGF0ZSB0aGUgdG9kYXlcclxuICAgIHJldHVybiBkID09PSB0b2RheS5kYXkgJiYgbSA9PT0gdG9kYXkubW9udGggJiYgeSA9PT0gdG9kYXkueWVhciAmJiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQ7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RheSgpOiBJTXlEYXRlIHtcclxuICAgIGNvbnN0IGRhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgcmV0dXJuIHsgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aDogZGF0ZS5nZXRNb250aCgpICsgMSwgZGF5OiBkYXRlLmdldERhdGUoKSB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZUluTWlsbGlzZWNvbmRzKGRhdGU6IElNeURhdGUpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGgsIGRhdGUuZGF5KS5nZXRUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrZGF5KGRhdGU6IElNeURhdGUpOiBzdHJpbmcge1xyXG4gICAgLy8gR2V0IHdlZWtkYXk6IHN1LCBtbywgdHUsIHdlIC4uLlxyXG4gICAgcmV0dXJuIHRoaXMud2Vla0RheU9wdHNbdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSldO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZSh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIsIGRheTogbnVtYmVyKTogRGF0ZSB7XHJcbiAgICAvLyBDcmVhdGVzIGEgZGF0ZSBvYmplY3QgZnJvbSBnaXZlbiB5ZWFyLCBtb250aCBhbmQgZGF5XHJcbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXksIDAsIDAsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgc3VuZGF5SWR4KCk6IG51bWJlciB7XHJcbiAgICAvLyBJbmRleCBvZiBTdW5kYXkgZGF5XHJcbiAgICByZXR1cm4gdGhpcy5kYXlJZHggPiAwID8gNyAtIHRoaXMuZGF5SWR4IDogMDtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlQ2FsZW5kYXIobTogbnVtYmVyLCB5OiBudW1iZXIsIG5vdGlmeUNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlcy5sZW5ndGggPSAwO1xyXG4gICAgY29uc3QgdG9kYXk6IElNeURhdGUgPSB0aGlzLmdldFRvZGF5KCk7XHJcbiAgICBjb25zdCBtb250aFN0YXJ0OiBudW1iZXIgPSB0aGlzLm1vbnRoU3RhcnRJZHgoeSwgbSk7XHJcbiAgICBjb25zdCBkSW5UaGlzTTogbnVtYmVyID0gdGhpcy5kYXlzSW5Nb250aChtLCB5KTtcclxuICAgIGNvbnN0IGRJblByZXZNOiBudW1iZXIgPSB0aGlzLmRheXNJblByZXZNb250aChtLCB5KTtcclxuXHJcbiAgICBsZXQgZGF5TmJyID0gMTtcclxuICAgIGxldCBjbW86IG51bWJlciA9IHRoaXMucHJldk1vbnRoSWQ7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xyXG4gICAgICBjb25zdCB3ZWVrOiBBcnJheTxJTXlDYWxlbmRhckRheT4gPSBbXTtcclxuICAgICAgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAvLyBGaXJzdCB3ZWVrXHJcbiAgICAgICAgY29uc3QgcG0gPSBkSW5QcmV2TSAtIG1vbnRoU3RhcnQgKyAxO1xyXG4gICAgICAgIC8vIFByZXZpb3VzIG1vbnRoXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IHBtOyBqIDw9IGRJblByZXZNOyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7IHllYXI6IHksIG1vbnRoOiBtIC0gMSwgZGF5OiBqIH07XHJcbiAgICAgICAgICB3ZWVrLnB1c2goe1xyXG4gICAgICAgICAgICBkYXRlT2JqOiBkYXRlLFxyXG4gICAgICAgICAgICBjbW86IGNtbyxcclxuICAgICAgICAgICAgY3VyckRheTogdGhpcy5pc0N1cnJEYXkoaiwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgIGRheU5icjogdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSksXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoXHJcbiAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKFxyXG4gICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1hcmtEYXRlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMubWFya1dlZWtlbmRzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNtbyA9IHRoaXMuY3Vyck1vbnRoSWQ7XHJcbiAgICAgICAgLy8gQ3VycmVudCBtb250aFxyXG4gICAgICAgIGNvbnN0IGRheXNMZWZ0OiBudW1iZXIgPSA3IC0gd2Vlay5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXlzTGVmdDsgaisrKSB7XHJcbiAgICAgICAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0geyB5ZWFyOiB5LCBtb250aDogbSwgZGF5OiBkYXlOYnIgfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsXHJcbiAgICAgICAgICAgIGNtbzogY21vLFxyXG4gICAgICAgICAgICBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICBkYXlOYnI6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KFxyXG4gICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShcclxuICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5tYXJrRGF0ZXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1hcmtXZWVrZW5kc1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gUmVzdCBvZiB0aGUgd2Vla3NcclxuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDg7IGorKykge1xyXG4gICAgICAgICAgaWYgKGRheU5iciA+IGRJblRoaXNNKSB7XHJcbiAgICAgICAgICAgIC8vIE5leHQgbW9udGhcclxuICAgICAgICAgICAgZGF5TmJyID0gMTtcclxuICAgICAgICAgICAgY21vID0gdGhpcy5uZXh0TW9udGhJZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7XHJcbiAgICAgICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgICAgIG1vbnRoOiBjbW8gPT09IHRoaXMuY3Vyck1vbnRoSWQgPyBtIDogbSArIDEsXHJcbiAgICAgICAgICAgIGRheTogZGF5TmJyLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsXHJcbiAgICAgICAgICAgIGNtbzogY21vLFxyXG4gICAgICAgICAgICBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICBkYXlOYnI6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KFxyXG4gICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShcclxuICAgICAgICAgICAgICBkYXRlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5tYXJrRGF0ZXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLm1hcmtXZWVrZW5kc1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd2Vla05icjogbnVtYmVyID1cclxuICAgICAgICB0aGlzLm9wdHMuc2hvd1dlZWtOdW1iZXJzICYmIHRoaXMub3B0cy5maXJzdERheU9mV2VlayA9PT0gJ21vJ1xyXG4gICAgICAgICAgPyB0aGlzLnV0aWxTZXJ2aWNlLmdldFdlZWtOdW1iZXIod2Vla1swXS5kYXRlT2JqKVxyXG4gICAgICAgICAgOiAwO1xyXG4gICAgICB0aGlzLmRhdGVzLnB1c2goeyB3ZWVrOiB3ZWVrLCB3ZWVrTmJyOiB3ZWVrTmJyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZShtLCB5KTtcclxuXHJcbiAgICBpZiAobm90aWZ5Q2hhbmdlKSB7XHJcbiAgICAgIC8vIE5vdGlmeSBwYXJlbnRcclxuICAgICAgdGhpcy5jYWxlbmRhclZpZXdDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgbW9udGg6IG0sXHJcbiAgICAgICAgZmlyc3Q6IHtcclxuICAgICAgICAgIG51bWJlcjogMSxcclxuICAgICAgICAgIHdlZWtkYXk6IHRoaXMuZ2V0V2Vla2RheSh7XHJcbiAgICAgICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgICAgIG1vbnRoOiBtLFxyXG4gICAgICAgICAgICBkYXk6IDEsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhc3Q6IHtcclxuICAgICAgICAgIG51bWJlcjogZEluVGhpc00sXHJcbiAgICAgICAgICB3ZWVrZGF5OiB0aGlzLmdldFdlZWtkYXkoe1xyXG4gICAgICAgICAgICB5ZWFyOiB5LFxyXG4gICAgICAgICAgICBtb250aDogbSxcclxuICAgICAgICAgICAgZGF5OiBkSW5UaGlzTSxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubW9udGhMaXN0KCk7XHJcbiAgICB0aGlzLnllYXJzTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VTZWxlY3RlZERhdGUoc2VsRGF0ZTogYW55KTogSU15RGF0ZSB7XHJcbiAgICAvLyBQYXJzZSBzZWxEYXRlIHZhbHVlIC0gaXQgY2FuIGJlIHN0cmluZyBvciBJTXlEYXRlIG9iamVjdFxyXG5cclxuICAgIC8vIFJlbW92ZXMgZXZlcnl0aGluZyBmcm9tIHNlbERhdGUgaWYgaXQncyBJU08gZGF0ZSBmb3JtYXQgdG8gYWxsb3cgdG8gdXNlIElTTyBkYXRlIGluIGRhdGUgcGlja2VyXHJcbiAgICBpZiAoc2VsRGF0ZS50b1N0cmluZygpLmluZGV4T2YoJ1QnKSAhPT0gLTEpIHtcclxuICAgICAgc2VsRGF0ZSA9IHNlbERhdGUuc3Vic3RyKDAsIHNlbERhdGUuaW5kZXhPZignVCcpKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGF0ZTogSU15RGF0ZSA9IHsgZGF5OiAwLCBtb250aDogMCwgeWVhcjogMCB9O1xyXG4gICAgaWYgKHR5cGVvZiBzZWxEYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zdCBzZDogc3RyaW5nID0gPHN0cmluZz5zZWxEYXRlO1xyXG4gICAgICBjb25zdCBkZjogc3RyaW5nID0gdGhpcy5vcHRzLmRhdGVGb3JtYXQ7XHJcblxyXG4gICAgICBjb25zdCBkZWxpbWV0ZXJzOiBBcnJheTxzdHJpbmc+ID0gdGhpcy51dGlsU2VydmljZS5nZXREYXRlRm9ybWF0RGVsaW1ldGVycyhkZik7XHJcbiAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZVZhbHVlKHNkLCBkZiwgZGVsaW1ldGVycyk7XHJcbiAgICAgIGRhdGUueWVhciA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMF0pO1xyXG5cclxuICAgICAgaWYgKGRmLmluZGV4T2YoJ21tbW0nKSAhPT0gLTEpIHtcclxuICAgICAgICBkYXRlLm1vbnRoID0gdGhpcy51dGlsU2VydmljZS5nZXRNb250aE51bWJlckJ5TW9udGhOYW1lKFxyXG4gICAgICAgICAgZGF0ZVZhbHVlWzFdLFxyXG4gICAgICAgICAgdGhpcy5vcHRzLm1vbnRoTGFiZWxzRnVsbFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZGYuaW5kZXhPZignbW1tJykgIT09IC0xKSB7XHJcbiAgICAgICAgZGF0ZS5tb250aCA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TW9udGhOdW1iZXJCeU1vbnRoTmFtZShcclxuICAgICAgICAgIGRhdGVWYWx1ZVsxXSxcclxuICAgICAgICAgIHRoaXMub3B0cy5tb250aExhYmVsc1xyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZS5tb250aCA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMV0pO1xyXG4gICAgICB9XHJcbiAgICAgIGRhdGUuZGF5ID0gdGhpcy51dGlsU2VydmljZS5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsyXSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxEYXRlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBkYXRlID0gc2VsRGF0ZTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gdGhpcy5mb3JtYXREYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICBwYXJzZVNlbGVjdGVkTW9udGgobXM6IHN0cmluZyk6IElNeU1vbnRoIHtcclxuICAgIHJldHVybiB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGVmYXVsdE1vbnRoKG1zKTtcclxuICB9XHJcblxyXG4gIHNldEhlYWRlckJ0bkRpc2FibGVkU3RhdGUobTogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBkcG0gPSBmYWxzZTtcclxuICAgIGxldCBkcHkgPSBmYWxzZTtcclxuICAgIGxldCBkbm0gPSBmYWxzZTtcclxuICAgIGxldCBkbnkgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9wdHMuZGlzYWJsZUhlYWRlckJ1dHRvbnMpIHtcclxuICAgICAgZHBtID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5ZWFyOiBtID09PSAxID8geSAtIDEgOiB5LFxyXG4gICAgICAgICAgbW9udGg6IG0gPT09IDEgPyAxMiA6IG0gLSAxLFxyXG4gICAgICAgICAgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0gPT09IDEgPyAxMiA6IG0gLSAxLCBtID09PSAxID8geSAtIDEgOiB5KSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWxcclxuICAgICAgKTtcclxuICAgICAgZHB5ID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbChcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5ZWFyOiB5IC0gMSxcclxuICAgICAgICAgIG1vbnRoOiBtLFxyXG4gICAgICAgICAgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0sIHkgLSAxKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWxcclxuICAgICAgKTtcclxuICAgICAgZG5tID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5ZWFyOiBtID09PSAxMiA/IHkgKyAxIDogeSxcclxuICAgICAgICAgIG1vbnRoOiBtID09PSAxMiA/IDEgOiBtICsgMSxcclxuICAgICAgICAgIGRheTogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2VcclxuICAgICAgKTtcclxuICAgICAgZG55ID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZShcclxuICAgICAgICB7IHllYXI6IHkgKyAxLCBtb250aDogbSwgZGF5OiAxIH0sXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2TW9udGhEaXNhYmxlZCA9IChtID09PSAxICYmIHkgPT09IHRoaXMub3B0cy5taW5ZZWFyKSB8fCBkcG07XHJcbiAgICB0aGlzLnByZXZZZWFyRGlzYWJsZWQgPSB5IC0gMSA8IHRoaXMub3B0cy5taW5ZZWFyIHx8IGRweTtcclxuICAgIHRoaXMubmV4dE1vbnRoRGlzYWJsZWQgPSAobSA9PT0gMTIgJiYgeSA9PT0gdGhpcy5vcHRzLm1heFllYXIpIHx8IGRubTtcclxuICAgIHRoaXMubmV4dFllYXJEaXNhYmxlZCA9IHkgKyAxID4gdGhpcy5vcHRzLm1heFllYXIgfHwgZG55O1xyXG4gIH1cclxuXHJcbiAgY2hlY2tBY3RpdmUoKSB7XHJcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFiZWxBY3RpdmUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc0RhdGVTZWxlY3RlZCkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIElOTElORSBEQVRFIFBJQ0tFUlxyXG5cclxuICBwdWJsaWMgdG9nZ2xlSW5saW5lRGF0ZVBpY2tlcigpIHtcclxuICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICB0aGlzLmNsb3NlQnRuQ2xpY2tlZCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=