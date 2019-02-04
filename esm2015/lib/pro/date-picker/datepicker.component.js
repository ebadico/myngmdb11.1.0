/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewEncapsulation, Renderer2, forwardRef, ViewChild, PLATFORM_ID, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { LocaleService } from './services/datepickerLocale.service';
import { UtilService } from './services/datepickerUtil.service';
import { isPlatformBrowser } from '@angular/common';
/** @type {?} */
export const MYDP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MDBDatePickerComponent),
    multi: true
};
/** @enum {number} */
const CalToggle = {
    Open: 1, CloseByDateSel: 2, CloseByCalBtn: 3, CloseByOutClick: 4,
};
CalToggle[CalToggle.Open] = 'Open';
CalToggle[CalToggle.CloseByDateSel] = 'CloseByDateSel';
CalToggle[CalToggle.CloseByCalBtn] = 'CloseByCalBtn';
CalToggle[CalToggle.CloseByOutClick] = 'CloseByOutClick';
/** @enum {number} */
const Year = {
    min: 1000, max: 9999,
};
Year[Year.min] = 'min';
Year[Year.max] = 'max';
/** @enum {number} */
const InputFocusBlur = {
    focus: 1, blur: 2,
};
InputFocusBlur[InputFocusBlur.focus] = 'focus';
InputFocusBlur[InputFocusBlur.blur] = 'blur';
/** @enum {number} */
const KeyCode = {
    enter: 13, space: 32,
};
KeyCode[KeyCode.enter] = 'enter';
KeyCode[KeyCode.space] = 'space';
/** @enum {number} */
const MonthId = {
    prev: 1, curr: 2, next: 3,
};
MonthId[MonthId.prev] = 'prev';
MonthId[MonthId.curr] = 'curr';
MonthId[MonthId.next] = 'next';
export class MDBDatePickerComponent {
    /**
     * @param {?} elem
     * @param {?} renderer
     * @param {?} localeService
     * @param {?} utilService
     * @param {?} cdRef
     * @param {?} platformId
     */
    constructor(elem, renderer, localeService, utilService, cdRef, platformId) {
        this.elem = elem;
        this.renderer = renderer;
        this.localeService = localeService;
        this.utilService = utilService;
        this.cdRef = cdRef;
        this.label = '';
        this.placeholder = '';
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
        this.onChangeCb = () => { };
        this.onTouchedCb = () => { };
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
        this.setLocaleOptions();
        renderer.listen(this.elem.nativeElement, 'click', (event) => {
            if (this.showSelector &&
                event.target &&
                this.elem.nativeElement !== event.target &&
                !this.elem.nativeElement.contains(event.target)) {
                this.removeInlineStyle();
                this.showSelector = false;
                this.calendarToggle.emit(CalToggle.CloseByOutClick);
            }
            if (event.target.classList.contains('picker__holder')) {
                this.removeInlineStyle();
                this.showSelector = false;
                this.cdRef.detectChanges();
            }
            if (true && event.target && this.elem.nativeElement.contains(event.target)) {
                this.resetMonthYearEdit();
                this.cdRef.detectChanges();
            }
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.opts.startDate) {
            setTimeout(() => {
                this.onUserDateInput(this.opts.startDate);
            }, 0);
        }
    }
    /**
     * @return {?}
     */
    ChangeZIndex() {
        if (this.isBrowser) {
            setTimeout(() => {
                // Fix for visible date / time picker input when picker plate is visible.
                try {
                    /** @type {?} */
                    const openedPicker = document.querySelector('.picker--opened');
                    /** @type {?} */
                    const allPickers = document.querySelectorAll('.picker');
                    allPickers.forEach((element) => {
                        this.renderer.setStyle(element, 'z-index', '0');
                    });
                    this.renderer.setStyle(openedPicker, 'z-index', '100');
                }
                catch (error) { }
            }, 0);
        }
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.dateInput.nativeElement, 'disabled', isDisabled);
    }
    /**
     * @return {?}
     */
    removeInlineStyle() {
        try {
            if (this.elem.nativeElement.parentElement.parentElement.classList.contains('modal-content')) {
                this.renderer.setStyle(this.elem.nativeElement.parentElement.parentElement, 'transition', 'height 0.3s');
                this.elem.nativeElement.parentElement.parentElement.style.height = this.modalHeightBefore + 'px';
            }
        }
        catch (error) { }
        setTimeout(() => {
            ((/** @type {?} */ (document.documentElement))).style.removeProperty('overflow');
        }, 155);
        this.labelActive = false;
    }
    /**
     * @return {?}
     */
    setLocaleOptions() {
        /** @type {?} */
        const opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach((k) => {
            this.opts[k] = opts[k];
        });
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    addLocale(locale) {
        this.localeService.locales = Object.assign({}, this.localeService.locales, locale);
        setTimeout(() => {
            this.setLocaleOptions();
        }, 0);
    }
    /**
     * @return {?}
     */
    setOptions() {
        /** @type {?} */
        const thisYear = new Date();
        /** @type {?} */
        const currentYear = thisYear.getFullYear();
        if (this.options !== undefined) {
            Object.keys(this.options).forEach((k) => {
                this.opts[k] = this.options[k];
            });
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocusInput(event) {
        this.openBtnClicked();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.focus, value: event.target.value });
        ((/** @type {?} */ (document.documentElement))).style.overflow = 'hidden';
        this.divFocus.nativeElement.focus();
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
                this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: this.visibleMonth.year };
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
                this.visibleMonth = { monthTxt: this.visibleMonth.monthTxt, monthNbr: this.visibleMonth.monthNbr, year: y };
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
                setTimeout(() => {
                    this.onChangeCb(this.getDateModel(this.selectedDate));
                });
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
            setTimeout(() => {
                /** @type {?} */
                const field = this.renderer.createElement('input');
                this.renderer.appendChild(this.elem.nativeElement, field);
                /** @type {?} */
                const inputReference = this.elem.nativeElement.lastElementChild;
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setStyle(inputReference, 'opacity', '0');
                this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                field.onfocus = () => {
                    setTimeout(() => {
                        this.renderer.setStyle(field, 'display', 'none');
                        setTimeout(() => {
                            this.renderer.removeChild(this.elem.nativeElement, field);
                            document.body.focus();
                        }, 0);
                    }, 0);
                };
                field.focus();
            }, 0);
        }
        catch (error) {
        }
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
    }
    /**
     * @return {?}
     */
    openBtnClicked() {
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
            this.months.push({ index: i, short: this.opts.monthLabels[i], label: this.opts.monthLabelsFull[i] });
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
     * @return {?}
     */
    prevMonth() {
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
    }
    /**
     * @return {?}
     */
    nextMonth() {
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
            this.visibleMonth = { monthTxt: this.opts.monthLabels[today.month], monthNbr: today.month, year: today.year };
            this.generateCalendar(today.month, today.year, true);
        }
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
        this.tmp = { year: this.getToday().year, month: this.getToday().month, day: this.getToday().day };
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
            this.showSelector = false;
            this.removeInlineStyle();
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
        this.inputFieldChanged.emit({ value: this.selectionDayTxt, dateFormat: this.opts.dateFormat, valid: !clear });
        this.invalidDate = false;
        this.cdRef.markForCheck();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateModel(date) {
        // Creates a date model object from the given parameter
        return this.formatDate(date);
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
        toReplace.forEach((el) => {
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
        });
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
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
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
                for (let j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        // Next month
                        dayNbr = 1;
                        cmo = this.nextMonthId;
                    }
                    /** @type {?} */
                    const date = { year: y, month: cmo === this.currMonthId ? m : m + 1, day: dayNbr };
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
            const weekNbr = this.opts.showWeekNumbers &&
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
    }
    /**
     * @param {?} selDate
     * @return {?}
     */
    parseSelectedDate(selDate) {
        // Parse selDate value - it can be string or IMyDate object
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
}
MDBDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-date-picker',
                exportAs: 'mdbdatepicker',
                template: "<!-- Line 27: Deleted (focus)=\"onFocusInput($event)\" for better use in Firefox. If other strange problems will occur, please paste it in line 27. -->\r\n<div class=\"mydp picker\" [ngClass]=\"{'picker--opened': showSelector}\" [ngStyle]=\"{'width': opts.width}\">\r\n  <div class=\"md-form\">\r\n    <label (click)=\"openBtnClicked()\" *ngIf=\"label.length > 0\" [ngClass]=\"{\r\n          'active': checkActive(),\r\n          'disabled': opts.componentDisabled\r\n        }\">{{ label }}</label>\r\n    <input #dateInput type=\"text\" class=\"form-control mydp-date\" [attr.aria-label]=\"opts.ariaLabelInputField\" (click)=\"openBtnClicked()\"\r\n      [attr.maxlength]=\"opts.dateFormat.length\" [ngClass]=\"{\r\n        'selectiondisabled': opts.componentDisabled,\r\n        'disabled': opts.componentDisabled\r\n      }\" placeholder=\"{{ placeholder }}\" [ngModel]=\"selectionDayTxt\" (ngModelChange)=\"onUserDateInput($event)\" [value]=\"selectionDayTxt\"\r\n      [ngStyle]=\"{\r\n        'font-size': opts.selectionTxtFontSize\r\n      }\" (blur)=\"onBlurInput($event)\" [disabled]=\"opts.componentDisabled\" autocomplete=\"off\" [tabindex]=\"tabIndex\">\r\n  </div>\r\n  <div *ngIf=\"showSelector\" class=\"selector picker__holder selectorarrow selectorarrowleft selectorarrowright\" #divFocus [ngClass]=\"{'alignselectorright': opts.alignSelectorRight}\"\r\n    tabindex=\"0\">\r\n    <div class=\"picker__frame picker__box\" #pickerFrame>\r\n      <div class=\"picker__header\">\r\n        <div class=\"picker__date-display\">\r\n          <div class=\"picker__weekday-display\">\r\n            {{ weekText(getWeekday(tmp)) }}\r\n          </div>\r\n          <div class=\"picker__month-display\">\r\n            <div>{{ monthText(tmp.month) }}</div>\r\n          </div>\r\n          <div class=\"picker__day-display\">\r\n            <div>{{ tmp.day }}</div>\r\n          </div>\r\n          <div class=\"picker__year-display\">\r\n            <div>{{ tmp.year }}</div>\r\n          </div>\r\n        </div>\r\n        <select class=\"picker__select--year\" [(ngModel)]=\"visibleMonth.year\" (ngModelChange)=\"onUserYearInput($event)\" role=\"menu\"\r\n          aria-label=\"Year selector\">\r\n          <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option>\r\n        </select>\r\n        <select class=\"picker__select--month\" [(ngModel)]=\"visibleMonth.monthTxt\" (ngModelChange)=\"onUserMonthInput($event)\" role=\"menu\"\r\n          aria-label=\"Month selector\">\r\n          <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option>\r\n        </select>\r\n        <button class=\"picker__nav--prev\" data-nav=\"-1\" type=\"button\" aria-controls=\"date-picker-example_table\" title=\"Previous month\"\r\n          (click)=\"prevMonth()\" [disabled]=\"prevMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button>\r\n        <button class=\"picker__nav--next\" data-nav=\"1\" type=\"button\" aria-controls=\"date-picker-example_table\" title=\"Next month\"\r\n          (click)=\"nextMonth()\" [disabled]=\"nextMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button>\r\n      </div>\r\n      <table class=\"picker__table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"picker__weekday weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th>\r\n            <th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let w of dates\">\r\n            <td class=\"picker__day daycellweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td>\r\n            <td class=\"picker__day\" *ngFor=\"let d of w.week\" [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId&&!d.disabled, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\">\r\n              <div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div>\r\n              <div class=\"picker__day\" [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId,'picker__day--outfocus': (d.cmo===nextMonthId || d.cmo===prevMonthId), 'picker__day--today':d.currDay&&opts.markCurrentDay, 'picker__day--selected picker__day--highlighted':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId}\"\r\n                (click)=\"!d.disabled&&cellClicked(d);$event.stopPropagation()\" (keydown)=\"cellKeyDown($event, d)\" tabindex=\"0\">\r\n                {{d.dateObj.day}}\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div class=\"picker__footer\">\r\n        <button type=\"button\" *ngIf=\"opts.showTodayBtn\" class=\"picker__button--today\" (click)=\"todayClicked()\" role=\"button\" [attr.aria-label]=\"opts.todayBtnTxt\">\r\n          {{opts.todayBtnTxt}}\r\n        </button>\r\n        <button type=\"button\" *ngIf=\"opts.showClearDateBtn\" class=\"picker__button--clear\" (click)=\"removeBtnClicked()\" role=\"button\"\r\n          [attr.aria-label]=\"opts.clearBtnTxt\">\r\n          {{opts.clearBtnTxt}}\r\n        </button>\r\n        <button type=\"button\" [ngClass]=\"{'ml-auto': !opts.showTodayBtn}\" class=\"picker__button--close\" (click)=\"showSelector = false; removeInlineStyle();\"\r\n          role=\"button\" [attr.aria-label]=\"opts.closeBtnTxt\">\r\n          {{opts.closeBtnTxt}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",
                providers: [LocaleService, UtilService, MYDP_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MDBDatePickerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: LocaleService },
    { type: UtilService },
    { type: ChangeDetectorRef },
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
    dateChanged: [{ type: Output }],
    inputFieldChanged: [{ type: Output }],
    calendarViewChanged: [{ type: Output }],
    calendarToggle: [{ type: Output }],
    inputFocusBlur: [{ type: Output }],
    divFocus: [{ type: ViewChild, args: ['divFocus',] }],
    pickerFrame: [{ type: ViewChild, args: ['pickerFrame',] }],
    dateInput: [{ type: ViewChild, args: ['dateInput',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2RhdGUtcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFVBQVUsRUFDVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBRVQsV0FBVyxFQUNYLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWV6RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUNwRCxNQUFNLE9BQU8sbUJBQW1CLEdBQVE7SUFDdEMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JELEtBQUssRUFBRSxJQUFJO0NBQ1o7OztJQUVnQixPQUFRLEVBQUUsaUJBQWtCLEVBQUUsZ0JBQWlCLEVBQUUsa0JBQW1COzs7Ozs7OztJQUN6RSxTQUFVLEVBQUUsU0FBVTs7Ozs7O0lBQ1osUUFBUyxFQUFFLE9BQVE7Ozs7OztJQUMxQixTQUFVLEVBQUUsU0FBVTs7Ozs7O0lBQ3RCLE9BQVEsRUFBRSxPQUFRLEVBQUUsT0FBUTs7Ozs7QUFXM0MsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7Ozs7O0lBc0dqQyxZQUFtQixJQUFnQixFQUN6QixRQUFtQixFQUVuQixhQUE0QixFQUM1QixX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Qiw4Q0FBOEI7O0lBQzlCLHlDQUF5Qjs7SUFDekIsdUNBQW9COztJQUNwQiw2Q0FBMEI7O0lBQzFCLDBDQUEwQjs7SUFDMUIsMENBQTJCOztJQUMzQiw2Q0FBbUU7O0lBQ25FLG1EQUEyRzs7SUFDM0cscURBQWlIOztJQUNqSCxnREFBNEU7O0lBQzVFLGdEQUFrRzs7SUFFbEcsMENBQTRDOztJQUM1Qyw2Q0FBa0Q7O0lBQ2xELDJDQUE4Qzs7SUFDOUMsZ0RBQThCOztJQUM5Qiw2Q0FBMkI7O0lBQzNCLDhDQUE0Qjs7SUFDNUIsOENBQXVFOztJQUN2RSwrQ0FBd0U7O0lBQ3hFLDhDQUE2RDs7SUFDN0QsMENBQW9DOztJQUNwQyx1Q0FBa0M7O0lBQ2xDLGlEQUE0Qjs7SUFDNUIsNkNBQTJCOztJQUMzQixpREFBK0I7O0lBQy9CLHdDQUFrQjs7SUFDbEIsNkNBQStFOztJQUUvRSwyQ0FBeUI7O0lBQ3pCLDhDQUE0Qjs7SUFDNUIsMENBQXdCOztJQUN4Qiw2Q0FBMkI7O0lBRTNCLG1EQUFpQzs7SUFDakMsbURBQWlDOztJQUNqQyxrREFBZ0M7O0lBQ2hDLGtEQUFnQzs7SUFFaEMsNkNBQTBDOztJQUMxQyw2Q0FBMEM7O0lBQzFDLDZDQUEwQzs7SUFFMUMscUNBQTZHOztJQUc3RyxzQ0F1Q0U7O0lBR0Ysd0NBQXdCOztJQUN4Qix1Q0FBdUI7O0lBQ3ZCLDBDQUFpRTs7SUFDakUsK0NBQTBCOztJQUUxQixzREFBNEI7O0lBQzVCLG1EQUE4Qjs7SUFDOUIsMENBQXFCOztJQUNyQiwyQ0FBdUI7O0lBZ0V2Qiw0Q0FBeUM7O0lBQ3pDLDZDQUFvQzs7SUEvRHhCLHNDQUF1Qjs7Ozs7SUFDakMsMENBQTJCOzs7OztJQUUzQiwrQ0FBb0M7Ozs7O0lBQ3BDLDZDQUFnQzs7Ozs7SUFDaEMsdUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU15TG9jYWxlcyB9IGZyb20gJy4vaW50ZXJmYWNlcy9sb2NhbGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIFJlbmRlcmVyMixcclxuICBmb3J3YXJkUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIFBMQVRGT1JNX0lELFxyXG4gIEluamVjdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7XHJcbiAgSU15RGF0ZSxcclxuICBJTXlEYXRlUmFuZ2UsXHJcbiAgSU15TW9udGgsXHJcbiAgSU15Q2FsZW5kYXJEYXksXHJcbiAgSU15V2VlayxcclxuICBJTXlEYXlMYWJlbHMsXHJcbiAgSU15TW9udGhMYWJlbHMsXHJcbiAgSU15SW5wdXRGaWVsZENoYW5nZWQsXHJcbiAgSU15Q2FsZW5kYXJWaWV3Q2hhbmdlZCxcclxuICBJTXlJbnB1dEZvY3VzQmx1cixcclxuICBJTXlNYXJrZWREYXRlcyxcclxuICBJTXlNYXJrZWREYXRlLFxyXG59IGZyb20gJy4vaW50ZXJmYWNlcy9pbmRleCc7XHJcbmltcG9ydCB7IExvY2FsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGVwaWNrZXJMb2NhbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFV0aWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRlcGlja2VyVXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5leHBvcnQgY29uc3QgTVlEUF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1EQkRhdGVQaWNrZXJDb21wb25lbnQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5lbnVtIENhbFRvZ2dsZSB7IE9wZW4gPSAxLCBDbG9zZUJ5RGF0ZVNlbCA9IDIsIENsb3NlQnlDYWxCdG4gPSAzLCBDbG9zZUJ5T3V0Q2xpY2sgPSA0IH1cclxuZW51bSBZZWFyIHsgbWluID0gMTAwMCwgbWF4ID0gOTk5OSB9XHJcbmVudW0gSW5wdXRGb2N1c0JsdXIgeyBmb2N1cyA9IDEsIGJsdXIgPSAyIH1cclxuZW51bSBLZXlDb2RlIHsgZW50ZXIgPSAxMywgc3BhY2UgPSAzMiB9XHJcbmVudW0gTW9udGhJZCB7IHByZXYgPSAxLCBjdXJyID0gMiwgbmV4dCA9IDMgfVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtZGItZGF0ZS1waWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnbWRiZGF0ZXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGFwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW0xvY2FsZVNlcnZpY2UsIFV0aWxTZXJ2aWNlLCBNWURQX1ZBTFVFX0FDQ0VTU09SXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTURCRGF0ZVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHRhYkluZGV4OiBhbnk7XHJcbiAgQElucHV0KCkgb3B0aW9uczogYW55O1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRNb250aDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlbERhdGU6IHN0cmluZztcclxuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgc2VsZWN0b3I6IG51bWJlcjtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIGlucHV0RmllbGRDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8SU15SW5wdXRGaWVsZENoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZpZWxkQ2hhbmdlZD4oKTtcclxuICBAT3V0cHV0KCkgY2FsZW5kYXJWaWV3Q2hhbmdlZDogRXZlbnRFbWl0dGVyPElNeUNhbGVuZGFyVmlld0NoYW5nZWQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxJTXlDYWxlbmRhclZpZXdDaGFuZ2VkPigpO1xyXG4gIEBPdXRwdXQoKSBjYWxlbmRhclRvZ2dsZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgaW5wdXRGb2N1c0JsdXI6IEV2ZW50RW1pdHRlcjxJTXlJbnB1dEZvY3VzQmx1cj4gPSBuZXcgRXZlbnRFbWl0dGVyPElNeUlucHV0Rm9jdXNCbHVyPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdkaXZGb2N1cycpIHB1YmxpYyBkaXZGb2N1czogYW55O1xyXG4gIEBWaWV3Q2hpbGQoJ3BpY2tlckZyYW1lJykgcGlja2VyRnJhbWU6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnZGF0ZUlucHV0JykgZGF0ZUlucHV0OiBFbGVtZW50UmVmO1xyXG4gIHB1YmxpYyBpc0RhdGVTZWxlY3RlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBsYWJlbEFjdGl2ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBzaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICBwdWJsaWMgdmlzaWJsZU1vbnRoOiBJTXlNb250aCA9IHsgbW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMSB9O1xyXG4gIHB1YmxpYyBzZWxlY3RlZE1vbnRoOiBJTXlNb250aCA9IHsgbW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMCB9O1xyXG4gIHB1YmxpYyBzZWxlY3RlZERhdGU6IElNeURhdGUgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfTtcclxuICBwdWJsaWMgd2Vla0RheXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICBwdWJsaWMgZGF0ZXM6IEFycmF5PElNeVdlZWs+ID0gW107XHJcbiAgcHVibGljIHNlbGVjdGlvbkRheVR4dCA9ICcnO1xyXG4gIHB1YmxpYyBpbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBkaXNhYmxlVG9kYXlCdG4gPSBmYWxzZTtcclxuICBwdWJsaWMgZGF5SWR4ID0gMDtcclxuICBwdWJsaWMgd2Vla0RheU9wdHM6IEFycmF5PHN0cmluZz4gPSBbJ3N1JywgJ21vJywgJ3R1JywgJ3dlJywgJ3RoJywgJ2ZyJywgJ3NhJ107XHJcblxyXG4gIHB1YmxpYyBlZGl0TW9udGggPSBmYWxzZTtcclxuICBwdWJsaWMgaW52YWxpZE1vbnRoID0gZmFsc2U7XHJcbiAgcHVibGljIGVkaXRZZWFyID0gZmFsc2U7XHJcbiAgcHVibGljIGludmFsaWRZZWFyID0gZmFsc2U7XHJcblxyXG4gIHB1YmxpYyBwcmV2TW9udGhEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBuZXh0TW9udGhEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBwcmV2WWVhckRpc2FibGVkID0gZmFsc2U7XHJcbiAgcHVibGljIG5leHRZZWFyRGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgcHVibGljIHByZXZNb250aElkOiBudW1iZXIgPSBNb250aElkLnByZXY7XHJcbiAgcHVibGljIGN1cnJNb250aElkOiBudW1iZXIgPSBNb250aElkLmN1cnI7XHJcbiAgcHVibGljIG5leHRNb250aElkOiBudW1iZXIgPSBNb250aElkLm5leHQ7XHJcblxyXG4gIHB1YmxpYyB0bXA6IElNeURhdGUgPSB7IHllYXI6IHRoaXMuZ2V0VG9kYXkoKS55ZWFyLCBtb250aDogdGhpcy5nZXRUb2RheSgpLm1vbnRoLCBkYXk6IHRoaXMuZ2V0VG9kYXkoKS5kYXkgfTtcclxuXHJcbiAgLy8gRGVmYXVsdCBvcHRpb25zXHJcbiAgcHVibGljIG9wdHM6IGFueSA9IHtcclxuICAgIHN0YXJ0RGF0ZTogPHN0cmluZz4nJyxcclxuICAgIGNsb3NlQWZ0ZXJTZWxlY3Q6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgZGF5TGFiZWxzRnVsbDogPElNeURheUxhYmVscz57fSxcclxuICAgIGRheUxhYmVsczogPElNeURheUxhYmVscz57fSxcclxuICAgIG1vbnRoTGFiZWxzRnVsbDogPElNeU1vbnRoTGFiZWxzPnt9LFxyXG4gICAgbW9udGhMYWJlbHM6IDxJTXlNb250aExhYmVscz57fSxcclxuICAgIGRhdGVGb3JtYXQ6IDxzdHJpbmc+JycsXHJcbiAgICBzaG93VG9kYXlCdG46IDxib29sZWFuPnRydWUsXHJcbiAgICB0b2RheUJ0blR4dDogPHN0cmluZz4nJyxcclxuICAgIGZpcnN0RGF5T2ZXZWVrOiA8c3RyaW5nPicnLFxyXG4gICAgc3VuSGlnaGxpZ2h0OiA8Ym9vbGVhbj50cnVlLFxyXG4gICAgbWFya0N1cnJlbnREYXk6IDxib29sZWFuPnRydWUsXHJcbiAgICBkaXNhYmxlVW50aWw6IDxJTXlEYXRlPnsgeWVhcjogMCwgbW9udGg6IDAsIGRheTogMCB9LFxyXG4gICAgZGlzYWJsZVNpbmNlOiA8SU15RGF0ZT57IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfSxcclxuICAgIGRpc2FibGVEYXlzOiA8QXJyYXk8SU15RGF0ZSB8IG51bWJlcj4+W10sXHJcbiAgICBlbmFibGVEYXlzOiA8QXJyYXk8SU15RGF0ZSB8IG51bWJlcj4+W10sXHJcbiAgICBtYXJrRGF0ZXM6IDxBcnJheTxJTXlNYXJrZWREYXRlcz4+W10sXHJcbiAgICBtYXJrV2Vla2VuZHM6IDxJTXlNYXJrZWREYXRlPnt9LFxyXG4gICAgZGlzYWJsZURhdGVSYW5nZXM6IDxBcnJheTxJTXlEYXRlUmFuZ2U+PltdLFxyXG4gICAgZGlzYWJsZVdlZWtlbmRzOiA8Ym9vbGVhbj5mYWxzZSxcclxuICAgIHNob3dXZWVrTnVtYmVyczogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBoZWlnaHQ6IDxzdHJpbmc+JzMycHgnLFxyXG4gICAgd2lkdGg6IDxzdHJpbmc+JzEwMCUnLFxyXG4gICAgc2VsZWN0aW9uVHh0Rm9udFNpemU6IDxzdHJpbmc+JzFyZW0nLFxyXG4gICAgc2hvd0NsZWFyRGF0ZUJ0bjogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIGFsaWduU2VsZWN0b3JSaWdodDogPGJvb2xlYW4+ZmFsc2UsXHJcbiAgICBkaXNhYmxlSGVhZGVyQnV0dG9uczogPGJvb2xlYW4+dHJ1ZSxcclxuICAgIG1pblllYXI6IDxudW1iZXI+WWVhci5taW4sXHJcbiAgICBtYXhZZWFyOiA8bnVtYmVyPlllYXIubWF4LFxyXG4gICAgY29tcG9uZW50RGlzYWJsZWQ6IDxib29sZWFuPmZhbHNlLFxyXG4gICAgc2hvd1NlbGVjdG9yQXJyb3c6IDxib29sZWFuPnRydWUsXHJcbiAgICBhcmlhTGFiZWxJbnB1dEZpZWxkOiA8c3RyaW5nPidEYXRlIGlucHV0IGZpZWxkJyxcclxuICAgIGFyaWFMYWJlbENsZWFyRGF0ZTogPHN0cmluZz4nQ2xlYXIgRGF0ZScsXHJcbiAgICBhcmlhTGFiZWxPcGVuQ2FsZW5kYXI6IDxzdHJpbmc+J09wZW4gQ2FsZW5kYXInLFxyXG4gICAgYXJpYUxhYmVsUHJldk1vbnRoOiA8c3RyaW5nPidQcmV2aW91cyBNb250aCcsXHJcbiAgICBhcmlhTGFiZWxOZXh0TW9udGg6IDxzdHJpbmc+J05leHQgTW9udGgnLFxyXG4gICAgYXJpYUxhYmVsUHJldlllYXI6IDxzdHJpbmc+J1ByZXZpb3VzIFllYXInLFxyXG4gICAgYXJpYUxhYmVsTmV4dFllYXI6IDxzdHJpbmc+J05leHQgWWVhcidcclxuICB9O1xyXG5cclxuXHJcbiAgcHVibGljIG1vbnRoczogYW55ID0gW107XHJcbiAgcHVibGljIHllYXJzOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdteWRwIHBpY2tlcicpO1xyXG4gIHB1YmxpYyBlbGVtZW50TnVtYmVyOiBhbnk7XHJcblxyXG4gIGZpcnN0VGltZU9wZW5lZE1vZGFsID0gdHJ1ZTtcclxuICBtb2RhbEhlaWdodEJlZm9yZTogYW55ID0gbnVsbDtcclxuICBpc01vYmlsZTogYW55ID0gbnVsbDtcclxuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbTogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIC8vIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbG9jYWxlU2VydmljZTogTG9jYWxlU2VydmljZSxcclxuICAgIHByaXZhdGUgdXRpbFNlcnZpY2U6IFV0aWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmdcclxuICApIHtcclxuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XHJcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5pc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRMb2NhbGVPcHRpb25zKCk7XHJcbiAgICByZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsICdjbGljaycsIChldmVudDogYW55KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnNob3dTZWxlY3RvciAmJlxyXG4gICAgICAgIGV2ZW50LnRhcmdldCAmJlxyXG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50ICE9PSBldmVudC50YXJnZXQgJiZcclxuICAgICAgICAhdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUlubGluZVN0eWxlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLkNsb3NlQnlPdXRDbGljayk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BpY2tlcl9faG9sZGVyJykpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUlubGluZVN0eWxlKCk7XHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0b3IgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHJ1ZSAmJiBldmVudC50YXJnZXQgJiYgdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHRoaXMucmVzZXRNb250aFllYXJFZGl0KCk7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy5vcHRzLnN0YXJ0RGF0ZSkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLm9uVXNlckRhdGVJbnB1dCh0aGlzLm9wdHMuc3RhcnREYXRlKTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBDaGFuZ2VaSW5kZXgoKSB7XHJcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gRml4IGZvciB2aXNpYmxlIGRhdGUgLyB0aW1lIHBpY2tlciBpbnB1dCB3aGVuIHBpY2tlciBwbGF0ZSBpcyB2aXNpYmxlLlxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBvcGVuZWRQaWNrZXI6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5waWNrZXItLW9wZW5lZCcpO1xyXG4gICAgICAgICAgY29uc3QgYWxsUGlja2VyczogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBpY2tlcicpO1xyXG4gICAgICAgICAgYWxsUGlja2Vycy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbGVtZW50LCAnei1pbmRleCcsICcwJyk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUob3BlbmVkUGlja2VyLCAnei1pbmRleCcsICcxMDAnKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikgeyB9XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIG9uQ2hhbmdlQ2I6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcbiAgb25Ub3VjaGVkQ2I6ICgpID0+IHZvaWQgPSAoKSA9PiB7IH07XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmRhdGVJbnB1dC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCBpc0Rpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUlubGluZVN0eWxlKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWNvbnRlbnQnKSkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LCAndHJhbnNpdGlvbicsICdoZWlnaHQgMC4zcycpO1xyXG4gICAgICAgIHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLm1vZGFsSGVpZ2h0QmVmb3JlICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgYW55KS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcclxuICAgIH0sIDE1NSk7XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBzZXRMb2NhbGVPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgb3B0czogYW55ID0gdGhpcy5sb2NhbGVTZXJ2aWNlLmdldExvY2FsZU9wdGlvbnModGhpcy5sb2NhbGUpO1xyXG4gICAgT2JqZWN0LmtleXMob3B0cykuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICB0aGlzLm9wdHNba10gPSBvcHRzW2tdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhZGRMb2NhbGUobG9jYWxlOiBJTXlMb2NhbGVzKSB7XHJcbiAgICB0aGlzLmxvY2FsZVNlcnZpY2UubG9jYWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubG9jYWxlU2VydmljZS5sb2NhbGVzLCBsb2NhbGUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGhpc1llYXIgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzWWVhci5nZXRGdWxsWWVhcigpO1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucykuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgIHRoaXMub3B0c1trXSA9IHRoaXMub3B0aW9uc1trXTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub3B0cy5jb21wb25lbnREaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3B0cy5taW5ZZWFyID09PSAxMDAwKSB7XHJcbiAgICAgIHRoaXMub3B0cy5taW5ZZWFyID0gY3VycmVudFllYXIgLSA3O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm9wdHMubWF4WWVhciA9PT0gOTk5OSkge1xyXG4gICAgICB0aGlzLm9wdHMubWF4WWVhciA9IGN1cnJlbnRZZWFyICsgNztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0TW9udGhZZWFyRWRpdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdE1vbnRoID0gZmFsc2U7XHJcbiAgICB0aGlzLmVkaXRZZWFyID0gZmFsc2U7XHJcbiAgICB0aGlzLmludmFsaWRNb250aCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbnZhbGlkWWVhciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25Vc2VyRGF0ZUlucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGF0ZVZhbGlkKHZhbHVlLFxyXG4gICAgICAgIHRoaXMub3B0cy5kYXRlRm9ybWF0LFxyXG4gICAgICAgIHRoaXMub3B0cy5taW5ZZWFyLFxyXG4gICAgICAgIHRoaXMub3B0cy5tYXhZZWFyLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgICAgdGhpcy5vcHRzLm1vbnRoTGFiZWxzLFxyXG4gICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnV0aWxTZXJ2aWNlLmlzSW5pdGlhbGl6ZWREYXRlKGRhdGUpKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REYXRlKGRhdGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW52YWxpZERhdGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pbnZhbGlkRGF0ZSkge1xyXG4gICAgICB0aGlzLmlucHV0RmllbGRDaGFuZ2VkLmVtaXQoeyB2YWx1ZTogdmFsdWUsIGRhdGVGb3JtYXQ6IHRoaXMub3B0cy5kYXRlRm9ybWF0LCB2YWxpZDogISh2YWx1ZS5sZW5ndGggPT09IDAgfHwgdGhpcy5pbnZhbGlkRGF0ZSkgfSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VDYignJyk7XHJcbiAgICAgIHRoaXMub25Ub3VjaGVkQ2IoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRm9jdXNJbnB1dChldmVudDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xyXG4gICAgdGhpcy5pbnB1dEZvY3VzQmx1ci5lbWl0KHsgcmVhc29uOiBJbnB1dEZvY3VzQmx1ci5mb2N1cywgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcclxuICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgYXMgYW55KS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgdGhpcy5kaXZGb2N1cy5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25CbHVySW5wdXQoZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB0aGlzLmlucHV0Rm9jdXNCbHVyLmVtaXQoeyByZWFzb246IElucHV0Rm9jdXNCbHVyLmJsdXIsIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XHJcbiAgfVxyXG5cclxuICBvblVzZXJNb250aElucHV0KHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZE1vbnRoID0gZmFsc2U7XHJcbiAgICBjb25zdCBtOiBudW1iZXIgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhMYWJlbFZhbGlkKHZhbHVlLCB0aGlzLm9wdHMubW9udGhMYWJlbHMpO1xyXG4gICAgaWYgKG0gIT09IC0xKSB7XHJcbiAgICAgIHRoaXMuZWRpdE1vbnRoID0gZmFsc2U7XHJcbiAgICAgIGlmIChtICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0geyBtb250aFR4dDogdGhpcy5tb250aFRleHQobSksIG1vbnRoTmJyOiBtLCB5ZWFyOiB0aGlzLnZpc2libGVNb250aC55ZWFyIH07XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKG0sIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmludmFsaWRNb250aCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblVzZXJZZWFySW5wdXQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnZhbGlkWWVhciA9IGZhbHNlO1xyXG4gICAgY29uc3QgeTogbnVtYmVyID0gdGhpcy51dGlsU2VydmljZS5pc1llYXJMYWJlbFZhbGlkKE51bWJlcih2YWx1ZSksIHRoaXMub3B0cy5taW5ZZWFyLCB0aGlzLm9wdHMubWF4WWVhcik7XHJcbiAgICBpZiAoeSAhPT0gLTEpIHtcclxuICAgICAgdGhpcy5lZGl0WWVhciA9IGZhbHNlO1xyXG4gICAgICBpZiAoeSAhPT0gdGhpcy52aXNpYmxlTW9udGgueWVhcikge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZU1vbnRoID0geyBtb250aFR4dDogdGhpcy52aXNpYmxlTW9udGgubW9udGhUeHQsIG1vbnRoTmJyOiB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgeWVhcjogeSB9O1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcih0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgeSwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaW52YWxpZFllYXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNUb2RheURpc2FibGVkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlVG9kYXlCdG4gPSB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkodGhpcy5nZXRUb2RheSgpLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgdGhpcy5vcHRzLmVuYWJsZURheXMpO1xyXG4gIH1cclxuXHJcbiAgcGFyc2VPcHRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubG9jYWxlKSB7XHJcbiAgICAgIHRoaXMuc2V0TG9jYWxlT3B0aW9ucygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRPcHRpb25zKCk7XHJcbiAgICB0aGlzLmlzVG9kYXlEaXNhYmxlZCgpO1xyXG4gICAgdGhpcy5kYXlJZHggPSB0aGlzLndlZWtEYXlPcHRzLmluZGV4T2YodGhpcy5vcHRzLmZpcnN0RGF5T2ZXZWVrKTtcclxuICAgIGlmICh0aGlzLmRheUlkeCAhPT0gLTEpIHtcclxuICAgICAgbGV0IGlkeDogbnVtYmVyID0gdGhpcy5kYXlJZHg7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53ZWVrRGF5T3B0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMud2Vla0RheXMucHVzaCh0aGlzLm9wdHMuZGF5TGFiZWxzW3RoaXMud2Vla0RheU9wdHNbaWR4XV0pO1xyXG4gICAgICAgIGlkeCA9IHRoaXMud2Vla0RheU9wdHNbaWR4XSA9PT0gJ3NhJyA/IDAgOiBpZHggKyAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMudXBkYXRlRGF0ZVZhbHVlKHRoaXMucGFyc2VTZWxlY3RlZERhdGUodmFsdWUpLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHZhbHVlWydkYXRlJ10pIHtcclxuICAgICAgdGhpcy51cGRhdGVEYXRlVmFsdWUodGhpcy5wYXJzZVNlbGVjdGVkRGF0ZSh2YWx1ZVsnZGF0ZSddKSwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAgfTtcclxuICAgICAgdGhpcy5zZWxlY3Rpb25EYXlUeHQgPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZUNiID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiID0gZm47XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnc2VsZWN0b3InKSAmJiBjaGFuZ2VzWydzZWxlY3RvciddLmN1cnJlbnRWYWx1ZSA+IDApIHtcclxuICAgICAgdGhpcy5vcGVuQnRuQ2xpY2tlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwbGFjZWhvbGRlcicpKSB7XHJcbiAgICAgIHRoaXMucGxhY2Vob2xkZXIgPSBjaGFuZ2VzWydwbGFjZWhvbGRlciddLmN1cnJlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbG9jYWxlJykpIHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSBjaGFuZ2VzWydsb2NhbGUnXS5jdXJyZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Rpc2FibGVkJykpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlZCA9IGNoYW5nZXNbJ2Rpc2FibGVkJ10uY3VycmVudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25zJykpIHtcclxuICAgICAgdGhpcy5vcHRpb25zID0gY2hhbmdlc1snb3B0aW9ucyddLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUuc3RhcnREYXRlKSB7XHJcbiAgICAgICAgdGhpcy5vblVzZXJEYXRlSW5wdXQoY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZS5zdGFydERhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy53ZWVrRGF5cy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5wYXJzZU9wdGlvbnMoKTtcclxuXHJcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdE1vbnRoJykpIHtcclxuICAgICAgY29uc3QgZG06IHN0cmluZyA9IGNoYW5nZXNbJ2RlZmF1bHRNb250aCddLmN1cnJlbnRWYWx1ZTtcclxuICAgICAgaWYgKGRtICE9PSBudWxsICYmIGRtICE9PSB1bmRlZmluZWQgJiYgZG0gIT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vbnRoID0gdGhpcy5wYXJzZVNlbGVjdGVkTW9udGgoZG0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRNb250aCA9IHsgbW9udGhUeHQ6ICcnLCBtb250aE5icjogMCwgeWVhcjogMCB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3NlbERhdGUnKSkge1xyXG4gICAgICBjb25zdCBzZDogYW55ID0gY2hhbmdlc1snc2VsRGF0ZSddO1xyXG4gICAgICBpZiAoc2QuY3VycmVudFZhbHVlICE9PSBudWxsICYmXHJcbiAgICAgICAgc2QuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICBzZC5jdXJyZW50VmFsdWUgIT09ICcnICYmXHJcbiAgICAgICAgT2JqZWN0LmtleXMoc2QuY3VycmVudFZhbHVlKS5sZW5ndGggIT09IDBcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB0aGlzLnBhcnNlU2VsZWN0ZWREYXRlKHNkLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlQ2IodGhpcy5nZXREYXRlTW9kZWwodGhpcy5zZWxlY3RlZERhdGUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmlzRGF0ZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBEbyBub3QgY2xlYXIgb24gaW5pdFxyXG4gICAgICAgIGlmICghc2QuaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgICAgICB0aGlzLmNsZWFyRGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNob3dTZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhpZGVLZXlib2FyZCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQsIGZpZWxkKTtcclxuICAgICAgICBjb25zdCBpbnB1dFJlZmVyZW5jZSA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoaW5wdXRSZWZlcmVuY2UsICd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbnB1dFJlZmVyZW5jZSwgJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW5wdXRSZWZlcmVuY2UsICdvcGFjaXR5JywgJzAnKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGlucHV0UmVmZXJlbmNlLCAnLXdlYmtpdC11c2VyLW1vZGlmeScsICdyZWFkLXdyaXRlLXBsYWludGV4dC1vbmx5Jyk7XHJcbiAgICAgICAgZmllbGQub25mb2N1cyA9ICgpID0+IHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShmaWVsZCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCBmaWVsZCk7XHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZpZWxkLmZvY3VzKCk7XHJcblxyXG4gICAgICB9LCAwKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQnRuQ2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJEYXRlKCk7XHJcbiAgICBpZiAodGhpcy5zaG93U2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5jYWxlbmRhclRvZ2dsZS5lbWl0KENhbFRvZ2dsZS5DbG9zZUJ5Q2FsQnRuKTtcclxuICAgIH1cclxuICAgIHRoaXMuaXNEYXRlU2VsZWN0ZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG9wZW5CdG5DbGlja2VkKCk6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWNvbnRlbnQnKSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0VGltZU9wZW5lZE1vZGFsKSB7XHJcbiAgICAgICAgICB0aGlzLm1vZGFsSGVpZ2h0QmVmb3JlID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maXJzdFRpbWVPcGVuZWRNb2RhbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LCAndHJhbnNpdGlvbicsICdoZWlnaHQgMC4zcycpO1xyXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcclxuICAgICAgICB0aGlzLmVsZW0ubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5tb2RhbEhlaWdodEJlZm9yZSArIHRoaXMucGlja2VyRnJhbWUubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikgeyB9XHJcbiAgICAvLyBPcGVuIHNlbGVjdG9yIGJ1dHRvbiBjbGlja2VkXHJcbiAgICB0aGlzLnNob3dTZWxlY3RvciA9ICF0aGlzLnNob3dTZWxlY3RvcjtcclxuICAgIGlmICh0aGlzLnNob3dTZWxlY3Rvcikge1xyXG4gICAgICB0aGlzLnNldFZpc2libGVNb250aCgpO1xyXG4gICAgICB0aGlzLmNhbGVuZGFyVG9nZ2xlLmVtaXQoQ2FsVG9nZ2xlLk9wZW4pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeUNhbEJ0bik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5pc01vYmlsZSkge1xyXG4gICAgICB0aGlzLmhpZGVLZXlib2FyZCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sYWJlbEFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLkNoYW5nZVpJbmRleCgpO1xyXG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNldFZpc2libGVNb250aCgpOiB2b2lkIHtcclxuICAgIC8vIFNldHMgdmlzaWJsZSBtb250aCBvZiBjYWxlbmRhclxyXG4gICAgbGV0IHkgPSAwLCBtID0gMDtcclxuICAgIGlmICghdGhpcy51dGlsU2VydmljZS5pc0luaXRpYWxpemVkRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSkpIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNb250aC55ZWFyID09PSAwICYmIHRoaXMuc2VsZWN0ZWRNb250aC5tb250aE5iciA9PT0gMCkge1xyXG4gICAgICAgIGNvbnN0IHRvZGF5OiBJTXlEYXRlID0gdGhpcy5nZXRUb2RheSgpO1xyXG4gICAgICAgIHkgPSB0b2RheS55ZWFyO1xyXG4gICAgICAgIG0gPSB0b2RheS5tb250aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5ID0gdGhpcy5zZWxlY3RlZE1vbnRoLnllYXI7XHJcbiAgICAgICAgbSA9IHRoaXMuc2VsZWN0ZWRNb250aC5tb250aE5icjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeSA9IHRoaXMuc2VsZWN0ZWREYXRlLnllYXI7XHJcbiAgICAgIG0gPSB0aGlzLnNlbGVjdGVkRGF0ZS5tb250aDtcclxuICAgIH1cclxuICAgIHRoaXMudmlzaWJsZU1vbnRoID0geyBtb250aFR4dDogdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dLCBtb250aE5icjogbSwgeWVhcjogeSB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSBjdXJyZW50IG1vbnRoXHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIobSwgeSwgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBtb250aExpc3QoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vbnRocyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xyXG4gICAgICB0aGlzLm1vbnRocy5wdXNoKHsgaW5kZXg6IGksIHNob3J0OiB0aGlzLm9wdHMubW9udGhMYWJlbHNbaV0sIGxhYmVsOiB0aGlzLm9wdHMubW9udGhMYWJlbHNGdWxsW2ldIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgeWVhcnNMaXN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy55ZWFycyA9IFtdO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0WWVhciA9IHRoaXMub3B0cy5taW5ZZWFyO1xyXG4gICAgY29uc3QgbGFzdFllYXIgPSB0aGlzLm9wdHMubWF4WWVhcjtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gZmlyc3RZZWFyOyBpIDw9IGxhc3RZZWFyOyBpKyspIHtcclxuICAgICAgdGhpcy55ZWFycy5wdXNoKGkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJldk1vbnRoKCk6IHZvaWQge1xyXG4gICAgLy8gUHJldmlvdXMgbW9udGggZnJvbSBjYWxlbmRhclxyXG4gICAgY29uc3QgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh0aGlzLnZpc2libGVNb250aC55ZWFyLCB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgMSk7XHJcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSAtIDEpO1xyXG5cclxuICAgIGNvbnN0IHk6IG51bWJlciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG06IG51bWJlciA9IGQuZ2V0TW9udGgoKSArIDE7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlTW9udGggPSB7IG1vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChtKSwgbW9udGhOYnI6IG0sIHllYXI6IHkgfTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB5LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG5leHRNb250aCgpOiB2b2lkIHtcclxuICAgIC8vIE5leHQgbW9udGggZnJvbSBjYWxlbmRhclxyXG4gICAgY29uc3QgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh0aGlzLnZpc2libGVNb250aC55ZWFyLCB0aGlzLnZpc2libGVNb250aC5tb250aE5iciwgMSk7XHJcbiAgICBkLnNldE1vbnRoKGQuZ2V0TW9udGgoKSArIDEpO1xyXG5cclxuICAgIGNvbnN0IHk6IG51bWJlciA9IGQuZ2V0RnVsbFllYXIoKTtcclxuICAgIGNvbnN0IG06IG51bWJlciA9IGQuZ2V0TW9udGgoKSArIDE7XHJcblxyXG4gICAgdGhpcy52aXNpYmxlTW9udGggPSB7IG1vbnRoVHh0OiB0aGlzLm1vbnRoVGV4dChtKSwgbW9udGhOYnI6IG0sIHllYXI6IHkgfTtcclxuICAgIHRoaXMuZ2VuZXJhdGVDYWxlbmRhcihtLCB5LCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHByZXZZZWFyKCk6IHZvaWQge1xyXG4gICAgLy8gUHJldmlvdXMgeWVhciBmcm9tIGNhbGVuZGFyXHJcbiAgICB0aGlzLnZpc2libGVNb250aC55ZWFyLS07XHJcbiAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodGhpcy52aXNpYmxlTW9udGgubW9udGhOYnIsIHRoaXMudmlzaWJsZU1vbnRoLnllYXIsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbmV4dFllYXIoKTogdm9pZCB7XHJcbiAgICAvLyBOZXh0IHllYXIgZnJvbSBjYWxlbmRhclxyXG4gICAgdGhpcy52aXNpYmxlTW9udGgueWVhcisrO1xyXG4gICAgdGhpcy5nZW5lcmF0ZUNhbGVuZGFyKHRoaXMudmlzaWJsZU1vbnRoLm1vbnRoTmJyLCB0aGlzLnZpc2libGVNb250aC55ZWFyLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHRvZGF5Q2xpY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vIFRvZGF5IGJ1dHRvbiBjbGlja2VkXHJcbiAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgIGlmICghdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KHRvZGF5LFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgdGhpcy5vcHRzLmVuYWJsZURheXMpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5zZWxlY3REYXRlKHRvZGF5KTtcclxuICAgIH1cclxuICAgIGlmICh0b2RheS55ZWFyICE9PSB0aGlzLnZpc2libGVNb250aC55ZWFyIHx8IHRvZGF5Lm1vbnRoICE9PSB0aGlzLnZpc2libGVNb250aC5tb250aE5icikge1xyXG4gICAgICB0aGlzLnZpc2libGVNb250aCA9IHsgbW9udGhUeHQ6IHRoaXMub3B0cy5tb250aExhYmVsc1t0b2RheS5tb250aF0sIG1vbnRoTmJyOiB0b2RheS5tb250aCwgeWVhcjogdG9kYXkueWVhciB9O1xyXG4gICAgICB0aGlzLmdlbmVyYXRlQ2FsZW5kYXIodG9kYXkubW9udGgsIHRvZGF5LnllYXIsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2VsbENsaWNrZWQoY2VsbDogYW55KTogdm9pZCB7XHJcbiAgICAvLyBDZWxsIGNsaWNrZWQgb24gdGhlIGNhbGVuZGFyXHJcbiAgICBpZiAoY2VsbC5jbW8gPT09IHRoaXMucHJldk1vbnRoSWQpIHtcclxuICAgICAgLy8gUHJldmlvdXMgbW9udGggZGF5XHJcbiAgICAgIHRoaXMucHJldk1vbnRoKCk7XHJcbiAgICB9IGVsc2UgaWYgKGNlbGwuY21vID09PSB0aGlzLmN1cnJNb250aElkKSB7XHJcbiAgICAgIC8vIEN1cnJlbnQgbW9udGggZGF5IC0gaWYgZGF0ZSBpcyBhbHJlYWR5IHNlbGVjdGVkIGNsZWFyIGl0XHJcbiAgICAgIGlmIChjZWxsLmRhdGVPYmoueWVhciA9PT0gdGhpcy5zZWxlY3RlZERhdGUueWVhciAmJlxyXG4gICAgICAgIGNlbGwuZGF0ZU9iai5tb250aCA9PT0gdGhpcy5zZWxlY3RlZERhdGUubW9udGggJiZcclxuICAgICAgICBjZWxsLmRhdGVPYmouZGF5ID09PSB0aGlzLnNlbGVjdGVkRGF0ZS5kYXlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckRhdGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdERhdGUoY2VsbC5kYXRlT2JqKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChjZWxsLmNtbyA9PT0gdGhpcy5uZXh0TW9udGhJZCkge1xyXG4gICAgICAvLyBOZXh0IG1vbnRoIGRheVxyXG4gICAgICB0aGlzLm5leHRNb250aCgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXNldE1vbnRoWWVhckVkaXQoKTtcclxuICB9XHJcblxyXG4gIGNlbGxLZXlEb3duKGV2ZW50OiBhbnksIGNlbGw6IGFueSkge1xyXG4gICAgLy8gQ2VsbCBrZXlib2FyZCBoYW5kbGluZ1xyXG4gICAgaWYgKChldmVudC5rZXlDb2RlID09PSBLZXlDb2RlLmVudGVyIHx8IGV2ZW50LmtleUNvZGUgPT09IEtleUNvZGUuc3BhY2UpICYmICFjZWxsLmRpc2FibGVkKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuY2VsbENsaWNrZWQoY2VsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhckRhdGUoKTogdm9pZCB7XHJcbiAgICAvLyBDbGVhcnMgdGhlIGRhdGUgYW5kIG5vdGlmaWVzIHBhcmVudCB1c2luZyBjYWxsYmFja3MgYW5kIHZhbHVlIGFjY2Vzc29yXHJcbiAgICBjb25zdCBkYXRlOiBJTXlEYXRlID0geyB5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwIH07XHJcbiAgICB0aGlzLmRhdGVDaGFuZ2VkLmVtaXQoeyBkYXRlOiBkYXRlLCBqc2RhdGU6IG51bGwsIGZvcm1hdHRlZDogJycsIGVwb2M6IDAgfSk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2IobnVsbCk7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENiKCk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGVWYWx1ZShkYXRlLCB0cnVlKTtcclxuICAgIHRoaXMudG1wID0geyB5ZWFyOiB0aGlzLmdldFRvZGF5KCkueWVhciwgbW9udGg6IHRoaXMuZ2V0VG9kYXkoKS5tb250aCwgZGF5OiB0aGlzLmdldFRvZGF5KCkuZGF5IH07XHJcbiAgICB0aGlzLnNldFZpc2libGVNb250aCgpO1xyXG4gICAgdGhpcy5sYWJlbEFjdGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGF0ZShkYXRlOiBJTXlEYXRlKTogdm9pZCB7XHJcbiAgICAvLyBEYXRlIHNlbGVjdGVkLCBub3RpZmllcyBwYXJlbnQgdXNpbmcgY2FsbGJhY2tzIGFuZCB2YWx1ZSBhY2Nlc3NvclxyXG4gICAgdGhpcy50bXAgPSBkYXRlO1xyXG4gICAgY29uc3QgZGF0ZU1vZGVsOiBhbnkgPSB0aGlzLmdldERhdGVNb2RlbChkYXRlKTtcclxuICAgIC8vIHRoaXMuZGF0ZUNoYW5nZWQuZW1pdCh7IHByZXZpb3VzRGF0ZTogdGhpcy5zZWxlY3Rpb25EYXlUeHQsIGFjdHVhbERhdGU6IGRhdGVNb2RlbCB9KTtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZWQuZW1pdCh7XHJcbiAgICAgIGRhdGU6IGRhdGUsXHJcbiAgICAgIGpzZGF0ZTogbnVsbCxcclxuICAgICAgcHJldmlvdXNEYXRlRm9ybWF0dGVkOiB0aGlzLnNlbGVjdGlvbkRheVR4dCxcclxuICAgICAgYWN0dWFsRGF0ZUZvcm1hdHRlZDogZGF0ZU1vZGVsLFxyXG4gICAgICBlcG9jOiAwXHJcbiAgICB9KTtcclxuICAgIHRoaXMub25DaGFuZ2VDYihkYXRlTW9kZWwpO1xyXG4gICAgdGhpcy5vblRvdWNoZWRDYigpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlVmFsdWUoZGF0ZSwgZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMuc2hvd1NlbGVjdG9yKSB7XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJUb2dnbGUuZW1pdChDYWxUb2dnbGUuQ2xvc2VCeURhdGVTZWwpO1xyXG5cclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdHMuY2xvc2VBZnRlclNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJlbW92ZUlubGluZVN0eWxlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxhYmVsQWN0aXZlID0gdHJ1ZTtcclxuICAgIC8vIGhpZGUgY2FsZW5kYXIgd2hlbiBkYXRlIHdhcyBjbGlja2VkXHJcbiAgICAvLyB0aGlzLnNob3dTZWxlY3RvciA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRGF0ZVZhbHVlKGRhdGU6IElNeURhdGUsIGNsZWFyOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBVcGRhdGVzIGRhdGUgdmFsdWVzXHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGRhdGU7XHJcbiAgICB0aGlzLnRtcCA9IGRhdGU7XHJcbiAgICB0aGlzLmlzRGF0ZVNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gY2xlYXIgPyAnJyA6IHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICAgIHRoaXMuaW5wdXRGaWVsZENoYW5nZWQuZW1pdCh7IHZhbHVlOiB0aGlzLnNlbGVjdGlvbkRheVR4dCwgZGF0ZUZvcm1hdDogdGhpcy5vcHRzLmRhdGVGb3JtYXQsIHZhbGlkOiAhY2xlYXIgfSk7XHJcbiAgICB0aGlzLmludmFsaWREYXRlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZU1vZGVsKGRhdGU6IElNeURhdGUpOiBhbnkge1xyXG4gICAgLy8gQ3JlYXRlcyBhIGRhdGUgbW9kZWwgb2JqZWN0IGZyb20gdGhlIGdpdmVuIHBhcmFtZXRlclxyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIHByZVplcm8odmFsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gUHJlcGVuZCB6ZXJvIGlmIHNtYWxsZXIgdGhhbiAxMFxyXG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCwgMCkgPCAxMCA/ICcwJyArIHZhbCA6IHZhbDtcclxuICB9XHJcblxyXG4gIGZvcm1hdERhdGUodmFsOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgLy8gUmV0dXJucyBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcsIGlmIG1tbSBpcyBwYXJ0IG9mIGRhdGVGb3JtYXQgcmV0dXJucyBtb250aCBhcyBhIHN0cmluZ1xyXG4gICAgLy8gZGF5c1xyXG4gICAgY29uc3QgZCA9IHZhbC5kYXk7IC8vIDEgLSAzMVxyXG4gICAgY29uc3QgZGQgPSB0aGlzLnByZVplcm8odmFsLmRheSk7IC8vIDAxIC0gMzFcclxuICAgIGNvbnN0IGRkZCA9IHRoaXMub3B0cy5kYXlMYWJlbHNbdGhpcy5nZXRXZWVrZGF5KHZhbCldOyAvLyBTdW4tU2F0XHJcbiAgICBjb25zdCBkZGRkID0gdGhpcy5vcHRzLmRheUxhYmVsc0Z1bGxbdGhpcy5nZXRXZWVrZGF5KHZhbCldOyAvLyBTdW5kYXkg4oCTIFNhdHVyZGF5XHJcbiAgICBjb25zdCBtID0gdmFsLm1vbnRoOyAvLyAxIC0gMTJcclxuICAgIGNvbnN0IG1tID0gdGhpcy5wcmVaZXJvKHZhbC5tb250aCk7IC8vIDAxIC0gMTJcclxuICAgIGNvbnN0IG1tbSA9IHRoaXMuZ2V0TW9udGhTaG9ydCh2YWwubW9udGgpOyAvLyBKYW4gLSBEZWNcclxuICAgIGNvbnN0IG1tbW0gPSB0aGlzLmdldE1vbnRoRnVsbCh2YWwubW9udGgpOyAvLyBKYW51YXJ5IOKAkyBEZWNlbWJlclxyXG4gICAgY29uc3QgeXkgPSB2YWwueWVhci50b1N0cmluZygpLmxlbmd0aCA9PT0gMiA/IHZhbC55ZWFyIDogdmFsLnllYXIudG9TdHJpbmcoKS5zbGljZSgyLCA0KTsgLy8gMDAgLSA5OVxyXG4gICAgY29uc3QgeXl5eSA9IHZhbC55ZWFyO1xyXG5cclxuICAgIGNvbnN0IHRvUmVwbGFjZSA9IHRoaXMub3B0cy5kYXRlRm9ybWF0LnNwbGl0KC8oZHsxLDR9fG17MSw0fXx5ezR9fHl5fCEuKS9nKTtcclxuICAgIGxldCBmb3JtYXR0ZWQgPSAnJztcclxuICAgIHRvUmVwbGFjZS5mb3JFYWNoKChlbDogYW55KSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZWwpIHtcclxuICAgICAgICBjYXNlICdkZGRkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZGRkZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkZGQnOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBkZGQpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZGQnOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBkZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdkJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgZCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtbW1tJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbW1tbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtbW0nOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBtbW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbW0nOlxyXG4gICAgICAgICAgZWwgPSBlbC5yZXBsYWNlKGVsLCBtbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdtJzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgbSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd5eXl5JzpcclxuICAgICAgICAgIGVsID0gZWwucmVwbGFjZShlbCwgeXl5eSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd5eSc6XHJcbiAgICAgICAgICBlbCA9IGVsLnJlcGxhY2UoZWwsIHl5KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm1hdHRlZCArPSBlbDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBmb3JtYXR0ZWQ7XHJcbiAgfVxyXG5cclxuICBtb250aFRleHQobTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIC8vIFJldHVybnMgbW9udGggYXMgYSB0ZXh0XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dO1xyXG4gIH1cclxuXHJcbiAgd2Vla1RleHQobTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIFJldHVybnMgbW9udGggYXMgYSB0ZXh0XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLmRheUxhYmVsc0Z1bGxbbV07XHJcbiAgfVxyXG5cclxuICBnZXRNb250aFNob3J0KG06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLm1vbnRoTGFiZWxzW21dO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGhGdWxsKG06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRzLm1vbnRoTGFiZWxzRnVsbFttXTtcclxuICB9XHJcblxyXG4gIG1vbnRoU3RhcnRJZHgoeTogbnVtYmVyLCBtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gTW9udGggc3RhcnQgaW5kZXhcclxuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZC5zZXREYXRlKDEpO1xyXG4gICAgZC5zZXRNb250aChtIC0gMSk7XHJcbiAgICBkLnNldEZ1bGxZZWFyKHkpO1xyXG4gICAgY29uc3QgaWR4ID0gZC5nZXREYXkoKSArIHRoaXMuc3VuZGF5SWR4KCk7XHJcbiAgICByZXR1cm4gaWR4ID49IDcgPyBpZHggLSA3IDogaWR4O1xyXG4gIH1cclxuXHJcbiAgZGF5c0luTW9udGgobTogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIGN1cnJlbnQgbW9udGhcclxuICAgIHJldHVybiBuZXcgRGF0ZSh5LCBtLCAwKS5nZXREYXRlKCk7XHJcbiAgfVxyXG5cclxuICBkYXlzSW5QcmV2TW9udGgobTogbnVtYmVyLCB5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gUmV0dXJuIG51bWJlciBvZiBkYXlzIG9mIHRoZSBwcmV2aW91cyBtb250aFxyXG4gICAgY29uc3QgZDogRGF0ZSA9IHRoaXMuZ2V0RGF0ZSh5LCBtLCAxKTtcclxuICAgIGQuc2V0TW9udGgoZC5nZXRNb250aCgpIC0gMSk7XHJcbiAgICByZXR1cm4gdGhpcy5kYXlzSW5Nb250aChkLmdldE1vbnRoKCkgKyAxLCBkLmdldEZ1bGxZZWFyKCkpO1xyXG4gIH1cclxuXHJcbiAgaXNDdXJyRGF5KGQ6IG51bWJlciwgbTogbnVtYmVyLCB5OiBudW1iZXIsIGNtbzogbnVtYmVyLCB0b2RheTogSU15RGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgLy8gQ2hlY2sgaXMgYSBnaXZlbiBkYXRlIHRoZSB0b2RheVxyXG4gICAgcmV0dXJuIGQgPT09IHRvZGF5LmRheSAmJiBtID09PSB0b2RheS5tb250aCAmJiB5ID09PSB0b2RheS55ZWFyICYmIGNtbyA9PT0gdGhpcy5jdXJyTW9udGhJZDtcclxuICB9XHJcblxyXG4gIGdldFRvZGF5KCk6IElNeURhdGUge1xyXG4gICAgY29uc3QgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICByZXR1cm4geyB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoOiBkYXRlLmdldE1vbnRoKCkgKyAxLCBkYXk6IGRhdGUuZ2V0RGF0ZSgpIH07XHJcbiAgfVxyXG5cclxuICBnZXRUaW1lSW5NaWxsaXNlY29uZHMoZGF0ZTogSU15RGF0ZSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXREYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCwgZGF0ZS5kYXkpLmdldFRpbWUoKTtcclxuICB9XHJcblxyXG4gIGdldFdlZWtkYXkoZGF0ZTogSU15RGF0ZSk6IHN0cmluZyB7XHJcbiAgICAvLyBHZXQgd2Vla2RheTogc3UsIG1vLCB0dSwgd2UgLi4uXHJcbiAgICByZXR1cm4gdGhpcy53ZWVrRGF5T3B0c1t0aGlzLnV0aWxTZXJ2aWNlLmdldERheU51bWJlcihkYXRlKV07XHJcbiAgfVxyXG5cclxuICBnZXREYXRlKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlciwgZGF5OiBudW1iZXIpOiBEYXRlIHtcclxuICAgIC8vIENyZWF0ZXMgYSBkYXRlIG9iamVjdCBmcm9tIGdpdmVuIHllYXIsIG1vbnRoIGFuZCBkYXlcclxuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgMCwgMCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICBzdW5kYXlJZHgoKTogbnVtYmVyIHtcclxuICAgIC8vIEluZGV4IG9mIFN1bmRheSBkYXlcclxuICAgIHJldHVybiB0aGlzLmRheUlkeCA+IDAgPyA3IC0gdGhpcy5kYXlJZHggOiAwO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVDYWxlbmRhcihtOiBudW1iZXIsIHk6IG51bWJlciwgbm90aWZ5Q2hhbmdlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVzLmxlbmd0aCA9IDA7XHJcbiAgICBjb25zdCB0b2RheTogSU15RGF0ZSA9IHRoaXMuZ2V0VG9kYXkoKTtcclxuICAgIGNvbnN0IG1vbnRoU3RhcnQ6IG51bWJlciA9IHRoaXMubW9udGhTdGFydElkeCh5LCBtKTtcclxuICAgIGNvbnN0IGRJblRoaXNNOiBudW1iZXIgPSB0aGlzLmRheXNJbk1vbnRoKG0sIHkpO1xyXG4gICAgY29uc3QgZEluUHJldk06IG51bWJlciA9IHRoaXMuZGF5c0luUHJldk1vbnRoKG0sIHkpO1xyXG5cclxuICAgIGxldCBkYXlOYnIgPSAxO1xyXG4gICAgbGV0IGNtbzogbnVtYmVyID0gdGhpcy5wcmV2TW9udGhJZDtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHdlZWs6IEFycmF5PElNeUNhbGVuZGFyRGF5PiA9IFtdO1xyXG4gICAgICBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAgIC8vIEZpcnN0IHdlZWtcclxuICAgICAgICBjb25zdCBwbSA9IGRJblByZXZNIC0gbW9udGhTdGFydCArIDE7XHJcbiAgICAgICAgLy8gUHJldmlvdXMgbW9udGhcclxuICAgICAgICBmb3IgKGxldCBqID0gcG07IGogPD0gZEluUHJldk07IGorKykge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHsgeWVhcjogeSwgbW9udGg6IG0gLSAxLCBkYXk6IGogfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShqLCBtLCB5LCBjbW8sIHRvZGF5KSxcclxuICAgICAgICAgICAgZGF5TmJyOiB0aGlzLnV0aWxTZXJ2aWNlLmdldERheU51bWJlcihkYXRlKSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHRoaXMudXRpbFNlcnZpY2UuaXNEaXNhYmxlZERheShkYXRlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVTaW5jZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVdlZWtlbmRzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF5cyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURhdGVSYW5nZXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmVuYWJsZURheXNcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgbWFya2VkRGF0ZTogdGhpcy51dGlsU2VydmljZS5pc01hcmtlZERhdGUoZGF0ZSwgdGhpcy5vcHRzLm1hcmtEYXRlcywgdGhpcy5vcHRzLm1hcmtXZWVrZW5kcylcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY21vID0gdGhpcy5jdXJyTW9udGhJZDtcclxuICAgICAgICAvLyBDdXJyZW50IG1vbnRoXHJcbiAgICAgICAgY29uc3QgZGF5c0xlZnQ6IG51bWJlciA9IDcgLSB3ZWVrLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRheXNMZWZ0OyBqKyspIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGU6IElNeURhdGUgPSB7IHllYXI6IHksIG1vbnRoOiBtLCBkYXk6IGRheU5iciB9O1xyXG4gICAgICAgICAgd2Vlay5wdXNoKHtcclxuICAgICAgICAgICAgZGF0ZU9iajogZGF0ZSwgY21vOiBjbW8sIGN1cnJEYXk6IHRoaXMuaXNDdXJyRGF5KGRheU5iciwgbSwgeSwgY21vLCB0b2RheSksXHJcbiAgICAgICAgICAgIGRheU5icjogdGhpcy51dGlsU2VydmljZS5nZXREYXlOdW1iZXIoZGF0ZSksXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnV0aWxTZXJ2aWNlLmlzRGlzYWJsZWREYXkoZGF0ZSxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVVudGlsLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlU2luY2UsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVXZWVrZW5kcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZURheXMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXRlUmFuZ2VzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5lbmFibGVEYXlzXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIG1hcmtlZERhdGU6IHRoaXMudXRpbFNlcnZpY2UuaXNNYXJrZWREYXRlKGRhdGUsIHRoaXMub3B0cy5tYXJrRGF0ZXMsIHRoaXMub3B0cy5tYXJrV2Vla2VuZHMpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRheU5icisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZXN0IG9mIHRoZSB3ZWVrc1xyXG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgODsgaisrKSB7XHJcbiAgICAgICAgICBpZiAoZGF5TmJyID4gZEluVGhpc00pIHtcclxuICAgICAgICAgICAgLy8gTmV4dCBtb250aFxyXG4gICAgICAgICAgICBkYXlOYnIgPSAxO1xyXG4gICAgICAgICAgICBjbW8gPSB0aGlzLm5leHRNb250aElkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgZGF0ZTogSU15RGF0ZSA9IHsgeWVhcjogeSwgbW9udGg6IGNtbyA9PT0gdGhpcy5jdXJyTW9udGhJZCA/IG0gOiBtICsgMSwgZGF5OiBkYXlOYnIgfTtcclxuICAgICAgICAgIHdlZWsucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGVPYmo6IGRhdGUsIGNtbzogY21vLCBjdXJyRGF5OiB0aGlzLmlzQ3VyckRheShkYXlOYnIsIG0sIHksIGNtbywgdG9kYXkpLFxyXG4gICAgICAgICAgICBkYXlOYnI6IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF5TnVtYmVyKGRhdGUpLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogdGhpcy51dGlsU2VydmljZS5pc0Rpc2FibGVkRGF5KGRhdGUsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlV2Vla2VuZHMsXHJcbiAgICAgICAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVEYXlzLFxyXG4gICAgICAgICAgICAgIHRoaXMub3B0cy5kaXNhYmxlRGF0ZVJhbmdlcyxcclxuICAgICAgICAgICAgICB0aGlzLm9wdHMuZW5hYmxlRGF5c1xyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBtYXJrZWREYXRlOiB0aGlzLnV0aWxTZXJ2aWNlLmlzTWFya2VkRGF0ZShkYXRlLCB0aGlzLm9wdHMubWFya0RhdGVzLCB0aGlzLm9wdHMubWFya1dlZWtlbmRzKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkYXlOYnIrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgd2Vla05icjogbnVtYmVyID0gdGhpcy5vcHRzLnNob3dXZWVrTnVtYmVycyAmJlxyXG4gICAgICAgIHRoaXMub3B0cy5maXJzdERheU9mV2VlayA9PT0gJ21vJyA/XHJcbiAgICAgICAgdGhpcy51dGlsU2VydmljZS5nZXRXZWVrTnVtYmVyKHdlZWtbMF0uZGF0ZU9iaikgOiAwO1xyXG4gICAgICB0aGlzLmRhdGVzLnB1c2goeyB3ZWVrOiB3ZWVrLCB3ZWVrTmJyOiB3ZWVrTmJyIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0SGVhZGVyQnRuRGlzYWJsZWRTdGF0ZShtLCB5KTtcclxuXHJcbiAgICBpZiAobm90aWZ5Q2hhbmdlKSB7XHJcbiAgICAgIC8vIE5vdGlmeSBwYXJlbnRcclxuICAgICAgdGhpcy5jYWxlbmRhclZpZXdDaGFuZ2VkLmVtaXQoe1xyXG4gICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgbW9udGg6IG0sXHJcbiAgICAgICAgZmlyc3Q6IHtcclxuICAgICAgICAgIG51bWJlcjogMSxcclxuICAgICAgICAgIHdlZWtkYXk6IHRoaXMuZ2V0V2Vla2RheSh7XHJcbiAgICAgICAgICAgIHllYXI6IHksXHJcbiAgICAgICAgICAgIG1vbnRoOiBtLFxyXG4gICAgICAgICAgICBkYXk6IDFcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYXN0OiB7XHJcbiAgICAgICAgICBudW1iZXI6IGRJblRoaXNNLFxyXG4gICAgICAgICAgd2Vla2RheTogdGhpcy5nZXRXZWVrZGF5KHtcclxuICAgICAgICAgICAgeWVhcjogeSxcclxuICAgICAgICAgICAgbW9udGg6IG0sXHJcbiAgICAgICAgICAgIGRheTogZEluVGhpc01cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm1vbnRoTGlzdCgpO1xyXG4gICAgdGhpcy55ZWFyc0xpc3QoKTtcclxuICB9XHJcblxyXG4gIHBhcnNlU2VsZWN0ZWREYXRlKHNlbERhdGU6IGFueSk6IElNeURhdGUge1xyXG4gICAgLy8gUGFyc2Ugc2VsRGF0ZSB2YWx1ZSAtIGl0IGNhbiBiZSBzdHJpbmcgb3IgSU15RGF0ZSBvYmplY3RcclxuICAgIGxldCBkYXRlOiBJTXlEYXRlID0ge2RheTogMCwgbW9udGg6IDAsIHllYXI6IDB9O1xyXG4gICAgaWYgKHR5cGVvZiBzZWxEYXRlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNvbnN0IHNkOiBzdHJpbmcgPSA8c3RyaW5nPiBzZWxEYXRlO1xyXG4gICAgICAgIGNvbnN0IGRmOiBzdHJpbmcgPSB0aGlzLm9wdHMuZGF0ZUZvcm1hdDtcclxuXHJcbiAgICAgICAgY29uc3QgZGVsaW1ldGVyczogQXJyYXk8c3RyaW5nPiA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZUZvcm1hdERlbGltZXRlcnMoZGYpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0RGF0ZVZhbHVlKHNkLCBkZiwgZGVsaW1ldGVycyk7XHJcbiAgICAgICAgZGF0ZS55ZWFyID0gdGhpcy51dGlsU2VydmljZS5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVswXSk7XHJcblxyXG4gICAgICAgIGlmIChkZi5pbmRleE9mKCdtbW1tJykgIT09IC0xKSB7XHJcbiAgICAgICAgICBkYXRlLm1vbnRoID0gdGhpcy51dGlsU2VydmljZS5nZXRNb250aE51bWJlckJ5TW9udGhOYW1lKGRhdGVWYWx1ZVsxXSwgdGhpcy5vcHRzLm1vbnRoTGFiZWxzRnVsbCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChkZi5pbmRleE9mKCdtbW0nKSAhPT0gLTEpIHtcclxuICAgICAgICAgIGRhdGUubW9udGggPSB0aGlzLnV0aWxTZXJ2aWNlLmdldE1vbnRoTnVtYmVyQnlNb250aE5hbWUoZGF0ZVZhbHVlWzFdLCB0aGlzLm9wdHMubW9udGhMYWJlbHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBkYXRlLm1vbnRoID0gdGhpcy51dGlsU2VydmljZS5nZXROdW1iZXJCeVZhbHVlKGRhdGVWYWx1ZVsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGUuZGF5ICA9IHRoaXMudXRpbFNlcnZpY2UuZ2V0TnVtYmVyQnlWYWx1ZShkYXRlVmFsdWVbMl0pO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsRGF0ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICBkYXRlID0gc2VsRGF0ZTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0aW9uRGF5VHh0ID0gdGhpcy5mb3JtYXREYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICBwYXJzZVNlbGVjdGVkTW9udGgobXM6IHN0cmluZyk6IElNeU1vbnRoIHtcclxuICAgIHJldHVybiB0aGlzLnV0aWxTZXJ2aWNlLnBhcnNlRGVmYXVsdE1vbnRoKG1zKTtcclxuICB9XHJcblxyXG4gIHNldEhlYWRlckJ0bkRpc2FibGVkU3RhdGUobTogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCBkcG0gPSBmYWxzZTtcclxuICAgIGxldCBkcHkgPSBmYWxzZTtcclxuICAgIGxldCBkbm0gPSBmYWxzZTtcclxuICAgIGxldCBkbnkgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLm9wdHMuZGlzYWJsZUhlYWRlckJ1dHRvbnMpIHtcclxuICAgICAgZHBtID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVVbnRpbCh7XHJcbiAgICAgICAgeWVhcjogbSA9PT0gMSA/IHkgLSAxIDogeSxcclxuICAgICAgICBtb250aDogbSA9PT0gMSA/IDEyIDogbSAtIDEsXHJcbiAgICAgICAgZGF5OiB0aGlzLmRheXNJbk1vbnRoKG0gPT09IDEgPyAxMiA6IG0gLSAxLCBtID09PSAxID8geSAtIDEgOiB5KVxyXG4gICAgICB9LFxyXG4gICAgICAgIHRoaXMub3B0cy5kaXNhYmxlVW50aWwpO1xyXG4gICAgICBkcHkgPSB0aGlzLnV0aWxTZXJ2aWNlLmlzTW9udGhEaXNhYmxlZEJ5RGlzYWJsZVVudGlsKHtcclxuICAgICAgICB5ZWFyOiB5IC0gMSxcclxuICAgICAgICBtb250aDogbSxcclxuICAgICAgICBkYXk6IHRoaXMuZGF5c0luTW9udGgobSwgeSAtIDEpXHJcbiAgICAgIH0sXHJcbiAgICAgICAgdGhpcy5vcHRzLmRpc2FibGVVbnRpbCk7XHJcbiAgICAgIGRubSA9IHRoaXMudXRpbFNlcnZpY2UuaXNNb250aERpc2FibGVkQnlEaXNhYmxlU2luY2Uoe1xyXG4gICAgICAgIHllYXI6IG0gPT09IDEyID8geSArIDEgOiB5LFxyXG4gICAgICAgIG1vbnRoOiBtID09PSAxMiA/IDEgOiBtICsgMSxcclxuICAgICAgICBkYXk6IDFcclxuICAgICAgfSxcclxuICAgICAgICB0aGlzLm9wdHMuZGlzYWJsZVNpbmNlKTtcclxuICAgICAgZG55ID0gdGhpcy51dGlsU2VydmljZS5pc01vbnRoRGlzYWJsZWRCeURpc2FibGVTaW5jZSh7IHllYXI6IHkgKyAxLCBtb250aDogbSwgZGF5OiAxIH0sIHRoaXMub3B0cy5kaXNhYmxlU2luY2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2TW9udGhEaXNhYmxlZCA9IG0gPT09IDEgJiYgeSA9PT0gdGhpcy5vcHRzLm1pblllYXIgfHwgZHBtO1xyXG4gICAgdGhpcy5wcmV2WWVhckRpc2FibGVkID0geSAtIDEgPCB0aGlzLm9wdHMubWluWWVhciB8fCBkcHk7XHJcbiAgICB0aGlzLm5leHRNb250aERpc2FibGVkID0gbSA9PT0gMTIgJiYgeSA9PT0gdGhpcy5vcHRzLm1heFllYXIgfHwgZG5tO1xyXG4gICAgdGhpcy5uZXh0WWVhckRpc2FibGVkID0geSArIDEgPiB0aGlzLm9wdHMubWF4WWVhciB8fCBkbnk7XHJcbiAgfVxyXG5cclxuICBjaGVja0FjdGl2ZSgpIHtcclxuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5sYWJlbEFjdGl2ZSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzRGF0ZVNlbGVjdGVkKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=