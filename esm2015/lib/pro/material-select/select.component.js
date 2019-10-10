/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, forwardRef, ElementRef, Renderer2, Inject, PLATFORM_ID, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectDropdownComponent } from './select-dropdown.component';
import { OptionList } from './option-list';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
/** @type {?} */
export const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => SelectComponent)),
    multi: true,
};
export class SelectComponent {
    /**
     * Event handlers. *
     * @param {?} el
     * @param {?} renderer
     * @param {?} document
     * @param {?} platformId
     * @param {?} cdRef
     */
    // Angular lifecycle hooks.
    constructor(el, renderer, document, platformId, cdRef) {
        this.el = el;
        this.renderer = renderer;
        this.document = document;
        this.cdRef = cdRef;
        this.customClass = '';
        this.allowClear = false;
        this.disabled = false;
        this.highlightFirst = true;
        this.multiple = false;
        this.noFilter = 0;
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.filterPlaceholder = '';
        this.label = '';
        this.filterEnabled = false;
        this.filterAutocomplete = true;
        this.optionHeight = 37;
        this.enableSelectAll = true;
        this.selectAllLabel = 'Select all';
        this.outline = false;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.selected = new EventEmitter();
        this.deselected = new EventEmitter();
        this.noOptionsFound = new EventEmitter();
        this.changed = new EventEmitter();
        // Angular lifecycle hooks.
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40,
        };
        this._value = [];
        this.visibleOptionsDefault = 4;
        // Selection state variables.
        this.hasSelected = false;
        // View state variables.
        this.hasFocus = false;
        this.isOpen = false;
        this.isBelow = true;
        this.filterInputWidth = 1;
        this.isDisabled = false;
        this.placeholderView = '';
        this.labelActive = false;
        this.labelRefActive = false;
        this.dropdownAnimationDone = false;
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.filterHeight = 0;
        this.itemsBefore = [];
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this._compareWith = (/**
         * @param {?} o1
         * @param {?} o2
         * @return {?}
         */
        (o1, o2) => o1 === o2);
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    get compareWith() {
        return this._compareWith;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            throw Error('compareWith must be a function');
        }
        this._compareWith = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.placeholderView = this.placeholder;
        this.updateFilterHeight();
        this.updateDropdownHeight();
        if (this.label) {
            this.updateLabelState();
        }
        this.labelRef = this._getLabelRef();
        if (this.labelRef) {
            this.updateLabelRefState();
        }
        if (this.highlightFirst) {
            this.optionList.highlightFirst = true;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _getLabelRef() {
        /** @type {?} */
        const selectParentEl = this.el.nativeElement.parentNode;
        /** @type {?} */
        const labelRef = selectParentEl.querySelector('label');
        return labelRef;
    }
    /**
     * @return {?}
     */
    updateFilterHeight() {
        this.filterEnabled ? (this.filterHeight = 78) : (this.filterHeight = 0);
    }
    /**
     * @return {?}
     */
    updateDropdownHeight() {
        /** @type {?} */
        const customContentHeight = this.dropdown
            ? this.dropdown.customContent.nativeElement.clientHeight
            : 0;
        if (this.multiple && this.enableSelectAll) {
            this.dropdownMaxHeight = this.visibleOptions
                ? this.optionHeight * (this.visibleOptions + 1) + customContentHeight
                : this.optionHeight * (this.visibleOptionsDefault + 1) + customContentHeight;
            this.dropdownHeight =
                this.optionHeight * (this.optionList.options.length + 1) + customContentHeight;
        }
        else {
            this.dropdownMaxHeight = this.visibleOptions
                ? this.optionHeight * this.visibleOptions + customContentHeight
                : this.optionHeight * this.visibleOptionsDefault + customContentHeight;
            this.dropdownHeight =
                this.optionHeight * this.optionList.options.length + customContentHeight;
        }
    }
    /**
     * @return {?}
     */
    onDropdownAnimationDone() {
        this.dropdownAnimationDone = true;
    }
    /**
     * @return {?}
     */
    onDropdownAnimationStart() {
        this.dropdownAnimationDone = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.updateState();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('outline')) {
            if (changes['outline'].currentValue) {
                this.renderer.addClass(this.el.nativeElement, 'mdb-select-outline');
            }
            else {
                this.renderer.removeClass(this.el.nativeElement, 'mdb-select-outline');
            }
        }
        if (changes.hasOwnProperty('options')) {
            this.updateOptionsList(changes.options.currentValue);
            this.updateState();
            this.updateDropdownHeight();
            this.appendToBody ? this._updateAppendedPosition() : this.updatePosition();
            this.changed.emit({
                previousValue: changes.options.previousValue,
                selectionValue: changes.options.currentValue,
            });
        }
        if (changes.hasOwnProperty('noFilter')) {
            /** @type {?} */
            const numOptions = this.optionList.options.length;
            /** @type {?} */
            const minNumOptions = changes['noFilter'].currentValue;
            this.filterEnabled = numOptions >= minNumOptions;
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.updateState();
        }
    }
    /**
     * @param {?} elemnt
     * @return {?}
     */
    isChild(elemnt) {
        /** @type {?} */
        let node = elemnt.parentNode;
        while (node != null) {
            if (node === this.el.nativeElement) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    /**
     * @return {?}
     */
    onWindowResize() {
        this.updateWidth();
    }
    // Select container.
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectContainerClick(event) {
        // prevent from opening on mouse right click
        if (event.which === 2 || event.which === 3) {
            return false;
        }
        if (this.isChild(event.target)) {
            this.selectContainerClicked = true;
            this.openDropdown();
            if (this.label) {
                this.updateLabelState();
            }
            if (this.labelRef) {
                this.updateLabelRefState();
            }
        }
    }
    /**
     * @return {?}
     */
    onSelectContainerFocus() {
        if (this.label) {
            this.labelActive = true;
        }
        if (this.labelRef) {
            this.renderer.addClass(this.labelRef, 'active');
        }
        this.openDropdown();
    }
    /**
     * @return {?}
     */
    onSelectContainerBlur() {
        if (this.label) {
            this.updateLabelState();
        }
        if (this.labelRef) {
            this.updateLabelRefState();
        }
        if (!this.isOpen && !this.disabled) {
            this.onTouched();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectContainerKeydown(event) {
        this.handleSelectContainerKeydown(event);
    }
    // Dropdown container.
    /**
     * @param {?} option
     * @return {?}
     */
    onDropdownOptionClicked(option) {
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    }
    /**
     * @param {?} focus
     * @return {?}
     */
    onDropdownClose(focus) {
        this.closeDropdown(focus);
    }
    // Single filter input.
    /**
     * @return {?}
     */
    onSingleFilterClick() {
        this.selectContainerClicked = true;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    onSingleFilterInput(term) {
        /** @type {?} */
        const hasShown = this.optionList.filter(term);
        if (this.multiple && this.enableSelectAll) {
            this.dropdownHeight = (this.optionList.filtered.length + 1) * this.optionHeight;
        }
        else {
            this.dropdownHeight = this.optionList.filtered.length * this.optionHeight;
        }
        if (!hasShown) {
            this.noOptionsFound.emit(term);
            this.dropdownHeight = this.optionHeight;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterKeydown(event) {
        this.handleSingleFilterKeydown(event);
    }
    // Multiple filter input.
    /**
     * @param {?} event
     * @return {?}
     */
    onMultipleFilterInput(event) {
        if (!this.isOpen) {
            this.openDropdown();
        }
        this.updateFilterWidth();
        /** @type {?} */
        const term = event.target.value;
        /** @type {?} */
        const hasShown = this.optionList.filter(term);
        if (!hasShown) {
            this.noOptionsFound.emit(term);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMultipleFilterKeydown(event) {
        this.handleMultipleFilterKeydown(event);
    }
    // Single clear select.
    /**
     * @param {?} event
     * @return {?}
     */
    onClearSelectionClick(event) {
        event.preventDefault();
        this.clearClicked = true;
        this.clearSelection();
        this.placeholderView = this.placeholder;
        this.onTouched();
        if (this.label) {
            this.updateLabelState();
        }
        if (this.labelRef) {
            this.updateLabelRefState();
        }
    }
    // Multiple deselect option.
    /**
     * @param {?} option
     * @return {?}
     */
    onDeselectOptionClick(option) {
        this.clearClicked = true;
        this.deselectOption(option);
    }
    /**
     * API. *
     * @return {?}
     */
    // TODO fix issues with global click/key handler that closes the dropdown.
    open() {
        Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            this.openDropdown();
        }));
    }
    /**
     * @return {?}
     */
    close() {
        this.closeDropdown();
    }
    /**
     * @return {?}
     */
    get value() {
        return this.multiple ? this._value : this._value[0];
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (typeof v === 'undefined' || v === null || v === '') {
            v = [];
        }
        else if (!Array.isArray(v)) {
            v = [v];
        }
        this._setSelection(v);
        this._value = v;
        this.updateState();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _setSelection(value) {
        if (this.multiple && value) {
            value.forEach((/**
             * @param {?} selectionValue
             * @return {?}
             */
            (selectionValue) => this._selectByValue(selectionValue)));
        }
        else {
            this._selectByValue(value[0]);
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _selectByValue(value) {
        /** @type {?} */
        const matchingOption = this.optionList.options.find((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            return option.value !== null && this._compareWith(option.value, value);
        }));
        if (matchingOption) {
            this.optionList.select(matchingOption);
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.clearSelection();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    select(value) {
        this.optionList.getOptionsByValue(value).forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            this.selectOption(option);
        }));
    }
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.hasSelected = true;
        if (!value && value !== 0) {
            this.hasSelected = false;
        }
        if (this.label) {
            this.updateLabelState();
        }
        if (this.labelRef) {
            this.updateLabelRefState();
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    valueChanged() {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    }
    /**
     * @return {?}
     */
    updateState() {
        this.placeholderView = this.placeholder;
        this.updateFilterWidth();
        this.cdRef.markForCheck();
    }
    /**
     * Initialization. *
     * @param {?} options
     * @return {?}
     */
    updateOptionsList(options) {
        this.optionList = new OptionList(options, this.multiple);
        this._selectByValue(this._value);
        this.cdRef.markForCheck();
    }
    /**
     * @return {?}
     */
    updateLabelState() {
        if (!this.placeholder && !this.hasSelected && !this.isOpen) {
            this.labelActive = false;
        }
        else {
            this.labelActive = true;
        }
    }
    /**
     * @return {?}
     */
    updateLabelRefState() {
        if (!this.placeholder && !this.hasSelected && !this.isOpen) {
            this.renderer.removeClass(this.labelRef, 'active');
        }
        else {
            this.renderer.addClass(this.labelRef, 'active');
        }
    }
    /**
     * Dropdown. *
     * @return {?}
     */
    toggleDropdown() {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        // we should not set higher z-index value here
        // because dropdown added with appendToBody will be overlaped by select input
        this.renderer.setStyle(this.el.nativeElement, 'z-index', '1000');
        if (!this.isOpen) {
            this.isOpen = true;
            if (this.appendToBody) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._appendDropdown();
                }), 0);
            }
            this.updateWidth();
            this.appendToBody ? this._updateAppendedPosition() : this.updatePosition();
            ['click', 'touchstart'].forEach((/**
             * @param {?} ev
             * @return {?}
             */
            (ev) => {
                this.documentClickFun = this.renderer.listen('document', ev, (/**
                 * @param {?} event
                 * @return {?}
                 */
                (event) => {
                    if (!this.isChild(event.target) &&
                        this.isOpen &&
                        this.dropdownAnimationDone &&
                        event.target !== this.el.nativeElement) {
                        this.closeDropdown();
                        this.clearFilterInput();
                        if (this.label) {
                            this.updateLabelState();
                        }
                        if (this.labelRef) {
                            this.updateLabelRefState();
                        }
                    }
                }));
            }));
            this.opened.emit(this);
        }
        this.cdRef.markForCheck();
    }
    /**
     * @param {?=} focus
     * @return {?}
     */
    closeDropdown(focus = false) {
        if (this.appendToBody && this.isOpen) {
            this.renderer.removeChild('body', this.dropdown._elementRef.nativeElement);
        }
        /** @type {?} */
        const container = this.el.nativeElement.lastElementChild.classList;
        this.renderer.removeStyle(this.el.nativeElement, 'z-index');
        container.remove('fadeInSelect');
        if (this.isOpen) {
            this.clearFilterInput();
            this.isOpen = false;
            if (focus) {
                this.focus();
            }
            this.closed.emit(this);
        }
        this.documentClickFun();
        this.onTouched();
        this.cdRef.markForCheck();
    }
    /**
     * Select. *
     * @param {?} option
     * @return {?}
     */
    selectOption(option) {
        if (!option.disabled) {
            this.optionList.select(option);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
            this.hasSelected = true;
            if (this.label) {
                this.updateLabelState();
            }
            if (this.labelRef) {
                this.updateLabelRefState();
            }
        }
        if (!this.multiple && !option.disabled) {
            this.closeDropdown();
        }
        this.cdRef.markForCheck();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    deselectOption(option) {
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.placeholderView = this.placeholder;
            if (this.optionList.selection.length === 0) {
                this.hasSelected = false;
                if (this.label) {
                    this.updateLabelState();
                }
                if (this.labelRef) {
                    this.updateLabelRefState();
                }
            }
            this.deselected.emit(option.wrappedOption);
        }
    }
    /**
     * @return {?}
     */
    clearSelection() {
        /** @type {?} */
        const selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            this.hasSelected = false;
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                option => {
                    return option.wrappedOption;
                })));
            }
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    toggleSelectOption(option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    }
    /**
     * @return {?}
     */
    selectHighlightedOption() {
        /** @type {?} */
        const option = this.optionList.highlightedOption;
        if (this.multiple && option !== null) {
            this.toggleSelectOption(option);
        }
        if (!this.multiple && option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    }
    /**
     * @return {?}
     */
    deselectLast() {
        /** @type {?} */
        const sel = this.optionList.selection;
        if (sel.length > 0) {
            /** @type {?} */
            const option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    }
    /**
     * @param {?} isSelected
     * @return {?}
     */
    onSelectAll(isSelected) {
        if (isSelected) {
            this.optionList.filtered
                .filter((/**
             * @param {?} option
             * @return {?}
             */
            option => !option.disabled))
                .forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                this.selectOption(option);
            }));
        }
        else {
            this.optionList.filtered
                .filter((/**
             * @param {?} option
             * @return {?}
             */
            option => !option.disabled))
                .forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                this.deselectOption(option);
            }));
        }
    }
    /**
     * Filter. *
     * @return {?}
     */
    clearFilterInput() {
        this.dropdown.clearFilterInput();
        this.updateDropdownHeight();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMultipleFilterInput(value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleSelectContainerKeydown(event) {
        /** @type {?} */
        const key = event.keyCode;
        if (this.isOpen) {
            if (key === this.KEYS.ESC || (key === this.KEYS.UP && event.altKey)) {
                event.preventDefault();
                this.closeDropdown(true);
                if (this.label) {
                    this.updateLabelState();
                }
                if (this.labelRef) {
                    this.updateLabelRefState();
                }
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
                if (this.multiple && this.enableSelectAll) {
                    this.dropdown.updateSelectAllState();
                }
            }
            else if (key === this.KEYS.UP) {
                event.preventDefault();
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
            }
            else if (key === this.KEYS.DOWN) {
                event.preventDefault();
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
            }
        }
        else {
            if (key === this.KEYS.ENTER ||
                key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                event.preventDefault();
                this.openDropdown();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleMultipleFilterKeydown(event) {
        /** @type {?} */
        const key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.hasSelected && this.filterEnabled && this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleSingleFilterKeydown(event) {
        /** @type {?} */
        const key = event.which;
        if (key === this.KEYS.ESC ||
            key === this.KEYS.TAB ||
            key === this.KEYS.UP ||
            key === this.KEYS.DOWN ||
            key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    }
    /**
     * View. *
     * @return {?}
     */
    focus() {
        this.hasFocus = true;
        try {
            if (this.filterEnabled) {
                this.filterInput.nativeElement.focus();
            }
            else {
                this.selectionSpan.nativeElement.focus();
            }
        }
        catch (error) { }
    }
    /**
     * @return {?}
     */
    blur() {
        this.hasFocus = false;
        this.selectionSpan.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    updateWidth() {
        this.width = this.selectionSpan.nativeElement.offsetWidth;
    }
    /**
     * @return {?}
     */
    updatePosition() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const docEl = document.documentElement;
            /** @type {?} */
            let elPosition = 0;
            if (this.isBrowser) {
                elPosition =
                    this.el.nativeElement.getBoundingClientRect().bottom +
                        this.document.documentElement.scrollTop;
            }
            /** @type {?} */
            const selectSpan = this.selectionSpan.nativeElement;
            this.left = selectSpan.offsetLeft;
            /** @type {?} */
            const bottom = docEl.scrollTop + docEl.clientHeight;
            /** @type {?} */
            const dropdownHeight = this.dropdownMaxHeight > this.dropdownHeight ? this.dropdownHeight : this.dropdownMaxHeight;
            this.updateDropdownHeight();
            if (elPosition + dropdownHeight >= bottom) {
                this.top = selectSpan.offsetHeight - dropdownHeight - this.filterHeight;
            }
            else {
                this.top = 0;
            }
            this.cdRef.markForCheck();
        }), 0);
    }
    /**
     * @private
     * @return {?}
     */
    _updateAppendedPosition() {
        if (this.isBrowser) {
            /** @type {?} */
            const selectRect = this.el.nativeElement.getBoundingClientRect();
            /** @type {?} */
            const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
            /** @type {?} */
            const offsetTop = selectRect.top + scrollTop;
            /** @type {?} */
            const height = selectRect.height;
            /** @type {?} */
            const dropdownHeight = this.dropdownMaxHeight > this.dropdownHeight ? this.dropdownHeight : this.dropdownMaxHeight;
            this.left = selectRect.left;
            if (offsetTop + dropdownHeight + this.filterHeight >
                scrollTop + this.document.documentElement.clientHeight) {
                this.top = offsetTop - dropdownHeight + height - this.filterHeight;
            }
            else {
                this.top = offsetTop;
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _appendDropdown() {
        if (this.isBrowser) {
            /** @type {?} */
            const body = this.document.querySelector('body');
            /** @type {?} */
            const dropdown = this.dropdown._elementRef.nativeElement;
            if (body) {
                this.renderer.appendChild(body, dropdown);
            }
        }
    }
    /**
     * @return {?}
     */
    updateFilterWidth() {
        if (typeof this.filterInput !== 'undefined') {
            /** @type {?} */
            const value = this.filterInput.nativeElement.value;
            this.filterInputWidth =
                value.length === 0 ? 1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-select',
                template: "<label *ngIf=\"label !== ''\" [ngClass]=\"{ active: labelActive }\">\n  {{ label }}\n</label>\n<div\n  #selection\n  [attr.tabindex]=\"disabled ? null : 0\"\n  [ngClass]=\"{ open: isOpen, focus: hasFocus, below: isBelow, disabled: disabled }\"\n  [tabindex]=\"tabindex\"\n  (mousedown)=\"onSelectContainerClick($event)\"\n  (focus)=\"onSelectContainerFocus()\"\n  (blur)=\"onSelectContainerBlur()\"\n  (keydown)=\"onSelectContainerKeydown($event)\"\n  (window:resize)=\"onWindowResize()\"\n>\n  <div class=\"single form-control\" *ngIf=\"!multiple\">\n    <div class=\"value\" *ngIf=\"optionList.hasSelected()\">\n      {{ optionList.selection[0].label }}\n    </div>\n    <div class=\"placeholder\" *ngIf=\"!optionList.hasSelected()\">\n      {{ placeholderView }}\n    </div>\n    <div\n      #clear\n      class=\"clear\"\n      *ngIf=\"allowClear && hasSelected\"\n      (mousedown)=\"onClearSelectionClick($event)\"\n    >\n      &#x2715;\n    </div>\n    <span class=\"mdb-select-toggle\"></span>\n  </div>\n\n  <div class=\"multiple form-control\" *ngIf=\"multiple\">\n    <div class=\"placeholder\" *ngIf=\"!optionList.hasSelected()\">\n      {{ placeholderView }}\n    </div>\n\n    <div [ngStyle]=\"allowClear && { 'width.%': 90 }\" class=\"option\">\n      <span *ngFor=\"let option of optionList.selection\">\n        {{ option.label }}<span class=\"deselect-option\">,</span>\n      </span>\n    </div>\n\n    <div\n      #clear\n      class=\"clear\"\n      *ngIf=\"allowClear && hasSelected\"\n      (mousedown)=\"onClearSelectionClick($event)\"\n    >\n      &#x2715;\n    </div>\n\n    <span class=\"mdb-select-toggle\"></span>\n  </div>\n</div>\n<mdb-select-dropdown\n  *ngIf=\"isOpen\"\n  #dropdown\n  [enableSelectAll]=\"enableSelectAll\"\n  [multiple]=\"multiple\"\n  [dropdownHeight]=\"dropdownHeight\"\n  [dropdownMaxHeight]=\"dropdownMaxHeight\"\n  [optionHeight]=\"optionHeight\"\n  [optionList]=\"optionList\"\n  [notFoundMsg]=\"notFoundMsg\"\n  [customClass]=\"customClass\"\n  [highlightColor]=\"highlightColor\"\n  [highlightTextColor]=\"highlightTextColor\"\n  [filterEnabled]=\"filterEnabled\"\n  [filterAutocomplete]=\"filterAutocomplete\"\n  [placeholder]=\"filterPlaceholder\"\n  [selectAllLabel]=\"selectAllLabel\"\n  [outline]=\"outline\"\n  [top]=\"top\"\n  [left]=\"left\"\n  [width]=\"width\"\n  (close)=\"onDropdownClose($event)\"\n  (optionClicked)=\"onDropdownOptionClicked($event)\"\n  (singleFilterClick)=\"onSingleFilterClick()\"\n  (singleFilterInput)=\"onSingleFilterInput($event)\"\n  (singleFilterKeydown)=\"onSingleFilterKeydown($event)\"\n  (selectAll)=\"onSelectAll($event)\"\n  (animationDone)=\"onDropdownAnimationDone()\"\n  (animationStart)=\"onDropdownAnimationStart()\"\n>\n  <ng-content></ng-content>\n</mdb-select-dropdown>\n",
                providers: [SELECT_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".select-wrapper .select-dropdown{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #ced4da;outline:0;height:38px;line-height:2.9rem;width:100%;font-size:1rem;margin:0 0 .94rem;padding:0;display:block;text-overflow:ellipsis;z-index:2}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,.3);border-bottom-color:rgba(0,0,0,.2);cursor:default}.select-wrapper input.select-dropdown .selected,.select-wrapper input.select-dropdown li:focus{background-color:rgba(0,0,0,.15)}.select-wrapper input.select-dropdown li.active{background:0 0}.select-wrapper input.select-dropdown .fab,.select-wrapper input.select-dropdown .far,.select-wrapper input.select-dropdown .fas{color:inherit}.select-wrapper input.active{box-shadow:0 1px 0 0 #4285f4;border-bottom:1px solid #4285f4}.select-wrapper .search-wrap{padding:1rem 0 0;display:block;margin:0 .7rem}.select-wrapper .search-wrap .md-form{margin-top:0;margin-bottom:1rem}.select-wrapper .search-wrap .md-form input{padding-bottom:.4rem;margin-bottom:0}.select-wrapper span.caret{color:initial;position:absolute;right:0;top:.8rem;font-size:.63rem}.select-wrapper span.caret.disabled{color:rgba(0,0,0,.3)}.select-wrapper+label{position:absolute;top:2.125rem;transition:.2s ease-out;color:#757575;font-weight:300}.select-wrapper+label.active{-webkit-transform:translateY(-14px);transform:translateY(-14px);font-size:.8rem;top:1.5rem;left:15px}.select-wrapper+label.active-check{color:#4285f4}.select-wrapper+label.mdb-main-label{z-index:1}.select-wrapper i,.select-wrapper+label.disabled{color:rgba(0,0,0,.3)}.select-wrapper ul{list-style-type:none;padding-left:0}.select-wrapper.md-form>ul li label{top:0;color:#4285f4;font-size:.9rem;-webkit-transform:none;transform:none}.select-wrapper.md-form>ul li.select-toggle-all label{padding-left:38px}.select-wrapper.md-form.colorful-select>ul li.select-toggle-all:hover label{color:#fff}.select-wrapper.md-form.md-outline span.caret{padding-right:.75rem;padding-left:.75rem;color:#495057!important}.select-wrapper.md-form.md-outline span.caret.active{color:#4285f4!important}.select-wrapper.md-form.md-outline .dropdown-content{top:2.7rem!important}.select-wrapper.md-form.md-outline input.select-dropdown{padding:.375rem .75rem;color:#495057}.select-wrapper.md-form.md-outline input.select-dropdown:focus{border-color:#4285f4;box-shadow:inset 0 0 0 1px #4285f4}.select-wrapper.md-form.md-outline+label{position:absolute;-webkit-transform:translateY(40%);transform:translateY(40%);left:23px;color:#757575;background:#fff;font-size:13px;font-weight:500;padding-right:5px;padding-left:5px;top:.5em!important;z-index:2!important}.select-wrapper.md-form.md-outline+label.active{color:#4285f4}select{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}select.browser-default{display:block!important}select:disabled{color:rgba(0,0,0,.3)}.select-dropdown [type=checkbox]:disabled:not(:checked)+label:before{margin-left:0;margin-top:3px}.select-dropdown ul{list-style-type:none;padding:0}.select-dropdown li img{height:30px;width:30px;margin:.3rem .75rem;float:right}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,.3);background-color:transparent!important;cursor:context-menu}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,.4)}.dropdown-content{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);background-color:#fff;margin:0;display:none;min-width:6.25rem;max-height:40.625rem;overflow-y:auto;opacity:0;position:absolute;z-index:999;will-change:width,height}.dropdown-content li{clear:both;color:#000;cursor:pointer;line-height:1.3rem;width:100%;text-align:left;text-transform:none}.dropdown-content li.active,.dropdown-content li:hover{background-color:#eee}.dropdown-content li>a,.dropdown-content li>span{color:#4285f4;display:block;padding:.5rem}.dropdown-content li>a>i{height:inherit;line-height:inherit}.colorful-select .dropdown-content{padding:.5rem}.colorful-select .dropdown-content li.active span{color:#fff!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.colorful-select .dropdown-content li.active span [type=checkbox]:checked+label:before{border-color:transparent #fff #fff transparent}.colorful-select .dropdown-content li a:hover,.colorful-select .dropdown-content li span:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);color:#fff!important;transition:.15s;border-radius:.125rem}.colorful-select .dropdown-content li a:hover [type=checkbox]+label:before,.colorful-select .dropdown-content li span:hover [type=checkbox]+label:before{border-color:#fff}.colorful-select .dropdown-content li a:hover [type=checkbox]:checked+label:before,.colorful-select .dropdown-content li span:hover [type=checkbox]:checked+label:before{border-color:transparent #fff #fff transparent}.colorful-select .dropdown-content li.disabled.active span,.colorful-select .dropdown-content li.optgroup.active span,.colorful-select .dropdown-content li:disabled.active span{box-shadow:none;color:rgba(0,0,0,.3)!important;border-bottom-color:rgba(0,0,0,.3);cursor:default}.colorful-select .dropdown-content li.disabled a:hover,.colorful-select .dropdown-content li.disabled span:hover,.colorful-select .dropdown-content li.optgroup a:hover,.colorful-select .dropdown-content li.optgroup span:hover,.colorful-select .dropdown-content li:disabled a:hover,.colorful-select .dropdown-content li:disabled span:hover{box-shadow:none;color:rgba(0,0,0,.3)!important;border-bottom-color:rgba(0,0,0,.3);cursor:default;background-color:#fff!important}.colorful-select .dropdown-content li.disabled label,.colorful-select .dropdown-content li.optgroup label,.colorful-select .dropdown-content li:disabled label{cursor:default}.dropdown-primary .dropdown-content li a,.dropdown-primary .dropdown-content li span:hover,.dropdown-primary .dropdown-content li.active{background-color:#4285f4!important}.dropdown-primary .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-primary .search-wrap input:focus{border-bottom:1px solid #4285f4;box-shadow:0 1px 0 0 #4285f4}.dropdown-danger .dropdown-content li a,.dropdown-danger .dropdown-content li span:hover,.dropdown-danger .dropdown-content li.active{background-color:#c00!important}.dropdown-danger .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-danger .search-wrap input:focus{border-bottom:1px solid #c00;box-shadow:0 1px 0 0 #c00}.dropdown-default .dropdown-content li a,.dropdown-default .dropdown-content li span:hover,.dropdown-default .dropdown-content li.active{background-color:#2bbbad!important}.dropdown-default .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-default .search-wrap input:focus{border-bottom:1px solid #2bbbad;box-shadow:0 1px 0 0 #2bbbad}.dropdown-secondary .dropdown-content li a,.dropdown-secondary .dropdown-content li span:hover,.dropdown-secondary .dropdown-content li.active{background-color:#a6c!important}.dropdown-secondary .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-secondary .search-wrap input:focus{border-bottom:1px solid #a6c;box-shadow:0 1px 0 0 #a6c}.dropdown-success .dropdown-content li a,.dropdown-success .dropdown-content li span:hover,.dropdown-success .dropdown-content li.active{background-color:#00c851!important}.dropdown-success .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-success .search-wrap input:focus{border-bottom:1px solid #00c851;box-shadow:0 1px 0 0 #00c851}.dropdown-info .dropdown-content li a,.dropdown-info .dropdown-content li span:hover,.dropdown-info .dropdown-content li.active{background-color:#33b5e5!important}.dropdown-info .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-info .search-wrap input:focus{border-bottom:1px solid #33b5e5;box-shadow:0 1px 0 0 #33b5e5}.dropdown-warning .dropdown-content li a,.dropdown-warning .dropdown-content li span:hover,.dropdown-warning .dropdown-content li.active{background-color:#fb3!important}.dropdown-warning .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-warning .search-wrap input:focus{border-bottom:1px solid #fb3;box-shadow:0 1px 0 0 #fb3}.dropdown-dark .dropdown-content li a,.dropdown-dark .dropdown-content li span:hover,.dropdown-dark .dropdown-content li.active{background-color:#2e2e2e!important}.dropdown-dark .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-dark .search-wrap input:focus{border-bottom:1px solid #2e2e2e;box-shadow:0 1px 0 0 #2e2e2e}.dropdown-ins .dropdown-content li a,.dropdown-ins .dropdown-content li span:hover,.dropdown-ins .dropdown-content li.active{background-color:#2e5e86!important}.dropdown-ins .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-ins .search-wrap input:focus{border-bottom:1px solid #2e5e86;box-shadow:0 1px 0 0 #2e5e86}.md-dropdown li.disabled.active{background-color:transparent!important}mdb-select{display:inline-block;margin:0;position:relative;vertical-align:middle;width:100%}mdb-select *{box-sizing:border-box;font-family:Roboto,sans-serif;outline:0}mdb-select.mdb-select-outline{transition:.2s}mdb-select.mdb-select-outline>label{padding-left:10px}mdb-select.mdb-select-outline:active label,mdb-select.mdb-select-outline:focus label,mdb-select.mdb-select-outline:focus-within label{color:#4285f4}mdb-select.mdb-select-outline:active .below>.form-control,mdb-select.mdb-select-outline:focus .below>.form-control,mdb-select.mdb-select-outline:focus-within .below>.form-control{border-color:#4285f4;box-shadow:inset 0 0 0 1px #4285f4}mdb-select.mdb-select-outline .form-control{padding:6px 12px;border:1px solid #dadce0;border-radius:4px}mdb-select.mdb-select-outline>label.active{-webkit-transform:translateY(-17px) scale(.8);transform:translateY(-17px) scale(.8);background:#fff;font-weight:500;padding:0;font-size:1rem;z-index:1}mdb-select>div{border:transparent;box-sizing:border-box;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}mdb-select>div.disabled{color:#aaa!important;cursor:default;pointer-events:none;background-color:transparent}mdb-select>div.disabled .placeholder,mdb-select>div.disabled .value,mdb-select>div.disabled span{color:#aaa!important}mdb-select>div.disabled>div.single>div.clear,mdb-select>div.disabled>div.single>div.placeholder,mdb-select>div.disabled>div.single>div.toggle{color:rgba(0,0,0,.3)}mdb-select>div>div.single{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #ccc;outline:0;line-height:2rem;width:100%;font-size:1rem;margin:0;padding:0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start}mdb-select>div>div.single>div.value{flex:1;line-height:2rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-right:1.2rem!important;color:#292b2c;padding:0 0 5px}mdb-select>div>div.single>div.placeholder{flex:1;line-height:2rem;max-width:95%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding:0 0 5px;color:#000}mdb-select>div>div.single>div.clear,mdb-select>div>div.single>div.toggle{float:right;color:#000;line-height:2rem;text-align:center;width:30px;position:absolute;right:0;top:50%;margin-top:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mdb-select>div>div.single>div.toggle:before{content:'\\25B2'}mdb-select>div>div.single>div.clear:hover,mdb-select>div>div.single>div.toggle:hover{background-color:#ececec}mdb-select>div>div.single>div.clear,mdb-select>div>div.single>div.toggle:hover{background-color:transparent}mdb-select>div>div.single>div.clear{font-size:18px}mdb-select>div>div.single>div.toggle{font-size:14px}mdb-select>div>div.multiple{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #ccc;outline:0;line-height:2rem;width:100%;font-size:1rem;margin:0;padding:0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start}mdb-select>div>div.multiple .placeholder{flex:1;line-height:2rem;max-width:95%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;padding:0 0 5px;color:#000}mdb-select>div>div.multiple>div.clear,mdb-select>div>div.multiple>div.toggle{float:right;color:#000;line-height:2rem;text-align:center;width:30px;position:absolute;right:0;top:50%;margin-top:-2px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mdb-select>div>div.multiple>div.clear:hover,mdb-select>div>div.multiple>div.toggle:hover{background-color:#ececec}mdb-select>div>div.multiple>div.clear,mdb-select>div>div.multiple>div.toggle:hover{background-color:transparent}mdb-select>div>div.multiple>div.clear{font-size:18px}mdb-select>div>div.multiple>div.toggle{font-size:14px}mdb-select>div>div.multiple>div.option{overflow:hidden;min-width:0;width:95%;text-overflow:ellipsis;white-space:nowrap;cursor:default;line-height:2rem}mdb-select>div>div.multiple>div.option span:last-child .deselect-option{display:none}mdb-select>div>div.multiple>div.option span.deselect-option{cursor:pointer;height:20px;line-height:2rem;background-color:transparent;border:0;border-radius:0;color:#292b2c;font-size:1rem;margin:0;padding:0}mdb-select>div>div.multiple>div.option span.deselect-option:hover{color:#555}mdb-select>div>div.multiple input{background-color:transparent;border:none;height:30px;line-height:2rem;padding:0}mdb-select>div>div.multiple input:focus{outline:0}mdb-select>label{color:#757575;font-size:1rem;position:absolute;top:7px;left:0;transition:.2s ease-out;cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:95%}mdb-select>label.active{font-size:.8rem;-webkit-transform:translateY(-120%);transform:translateY(-120%);max-width:100%}mdb-select-dropdown{box-sizing:border-box;font-family:Sans-Serif;color:#4285f4;font-size:19.2px}mdb-select-dropdown *{box-sizing:border-box;font-family:Sans-Serif}mdb-select-dropdown>div{background-color:#fff;outline:transparent;border:0;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-top:none;box-sizing:border-box;position:absolute;z-index:1}mdb-select-dropdown>div .filter{margin-bottom:9.6px!important;margin-top:9.6px!important;height:38px}mdb-select-dropdown>div .options{position:relative;overflow-y:auto}mdb-select-dropdown>div .options ul{list-style:none;margin:0;padding:0}mdb-select-dropdown>div .options ul li{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}mdb-select-dropdown>div .options ul li .filtrable{flex-direction:row;align-items:center}mdb-select-dropdown>div .options ul .selected{background-color:#eee}mdb-select-dropdown>div .options ul .highlighted{background-color:#eee;color:#4285f4}mdb-select-dropdown>div .options ul .disabled{background-color:#fff;color:#9e9e9e;cursor:default;pointer-events:none}mdb-select-dropdown>div .options::-webkit-scrollbar{width:4px;height:4px}mdb-select-dropdown>div .options::-webkit-scrollbar-button:end:increment,mdb-select-dropdown>div .options::-webkit-scrollbar-button:start:decrement{display:block;height:0;background-color:transparent}mdb-select-dropdown>div .options::-webkit-scrollbar-track-piece{background-color:transparent;border-radius:0 0 4px 4px}mdb-select-dropdown>div .options::-webkit-scrollbar-thumb:vertical{height:50px;background-color:#999;border-radius:4px}mdb-select-dropdown .dropdown-content{background-color:#fff;margin:0;width:100%;display:block;min-width:100px;max-height:unset;overflow-y:hidden;opacity:1;position:absolute;z-index:1000;will-change:width,height}mdb-select-dropdown .dropdown-content li>a,mdb-select-dropdown .dropdown-content li>span{color:#4285f4;padding:0 .5rem}mdb-select-dropdown .dropdown-content li.disabled,mdb-select-dropdown .dropdown-content li.disabled>span{color:rgba(0,0,0,.3);background-color:transparent!important}mdb-select-dropdown .dropdown-content li.optgroup{color:rgba(0,0,0,.3);background-color:transparent!important;border-top:1px solid #eee}mdb-select-dropdown .dropdown-content li.optgroup:first-child{border-top:0}mdb-select-dropdown .dropdown-content li.optgroup>span{color:rgba(0,0,0,.4)!important}.dropdown-content li>a,.dropdown-content li>span{font-size:.9rem}.select-dropdown li{overflow:hidden;text-overflow:ellipsis}.colorful-select .multiple-select-dropdown li.active span.filtrable,.colorful-select .multiple-select-dropdown li.selected span.filtrable{color:#fff}.colorful-select .multiple-select-dropdown li.active [type=checkbox]:checked+label:before,.colorful-select .multiple-select-dropdown li.selected [type=checkbox]:checked+label:before{border-color:transparent #fff #fff transparent!important}.dropdown-primary.colorful-select .dropdown-content li.active,.dropdown-primary.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-primary.colorful-select .dropdown-content li.active span,.dropdown-primary.colorful-select .dropdown-content li.selected span{background-color:#4285f4;color:#fff}.dropdown-danger.colorful-select .dropdown-content li.active,.dropdown-danger.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-danger.colorful-select .dropdown-content li.active span,.dropdown-danger.colorful-select .dropdown-content li.selected span{background-color:#c00;color:#fff}.dropdown-default.colorful-select .dropdown-content li.active,.dropdown-default.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-default.colorful-select .dropdown-content li.active span,.dropdown-default.colorful-select .dropdown-content li.selected span{background-color:#2bbbad;color:#fff}.dropdown-secondary.colorful-select .dropdown-content li.active,.dropdown-secondary.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-secondary.colorful-select .dropdown-content li.active span,.dropdown-secondary.colorful-select .dropdown-content li.selected span{background-color:#a6c;color:#fff}.dropdown-success.colorful-select .dropdown-content li.active,.dropdown-success.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-success.colorful-select .dropdown-content li.active span,.dropdown-success.colorful-select .dropdown-content li.selected span{background-color:#00c851;color:#fff}.dropdown-info.colorful-select .dropdown-content li.active,.dropdown-info.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-info.colorful-select .dropdown-content li.active span,.dropdown-info.colorful-select .dropdown-content li.selected span{background-color:#33b5e5;color:#fff}.dropdown-warning.colorful-select .dropdown-content li.active,.dropdown-warning.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-warning.colorful-select .dropdown-content li.active span,.dropdown-warning.colorful-select .dropdown-content li.selected span{background-color:#fb3;color:#fff}.dropdown-ins.colorful-select .dropdown-content li.active,.dropdown-ins.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-ins.colorful-select .dropdown-content li.active span,.dropdown-ins.colorful-select .dropdown-content li.selected span{background-color:#3f729b;color:#fff}.dropdown-dark.colorful-select .dropdown-content li.active,.dropdown-dark.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-dark.colorful-select .dropdown-content li.active span,.dropdown-dark.colorful-select .dropdown-content li.selected span{background-color:#2e2e2e;color:#fff}.multiple-select-dropdown li [type=checkbox]+label{height:10px;top:0!important;margin-top:-2px!important}mdb-select .clear{position:absolute;top:50%;right:30px!important;font-size:18px;color:#000;width:30px;margin-top:-2px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.md-form mdb-select .form-control{height:calc(2.25rem + 5px);margin-bottom:0}.md-form mdb-select label{color:#757575;font-size:1rem;position:absolute;top:7px;left:0;transition:.2s ease-out;-webkit-transform:translateY(0);transform:translateY(0);cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:95%}.md-form mdb-select label.active{font-size:.8rem;-webkit-transform:translateY(-120%);transform:translateY(-120%);width:100%}.md-form mdb-select+label{color:#757575;font-size:1rem;position:absolute;top:7px;left:0;transition:.2s ease-out;-webkit-transform:translateY(0);transform:translateY(0);cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:95%}.md-form mdb-select+label.active{font-size:.8rem;-webkit-transform:translateY(-120%);transform:translateY(-120%);max-width:100%}mdb-select+label{color:#757575;font-size:1rem;position:absolute;top:7px;left:15px;transition:.2s ease-out;-webkit-transform:translateY(0);transform:translateY(0);cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:90%;z-index:-1}mdb-select+label.active{font-size:.8rem;-webkit-transform:translateY(-120%);transform:translateY(-120%);max-width:95%;z-index:0}mdb-select .form-control{border-radius:0}mdb-select.validate-success.ng-valid.ng-touched div.multiple,mdb-select.validate-success.ng-valid.ng-touched div.single{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}mdb-select.validate-success.ng-valid.ng-touched label,mdb-select.validate-success.ng-valid.ng-touched+label{color:#00c851!important}.form-submitted mdb-select.validate-error.ng-invalid div.multiple,.form-submitted mdb-select.validate-error.ng-invalid div.single,mdb-select.validate-error.ng-invalid.ng-touched div.multiple,mdb-select.validate-error.ng-invalid.ng-touched div.single{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.form-submitted mdb-select.validate-error.ng-invalid.ng-touched label .form-submitted mdb-select.validate-error.ng-invalid.ng-touched+label,mdb-select.validate-error.ng-invalid.ng-touched label,mdb-select.validate-error.ng-invalid.ng-touched+label{color:#f44336!important}mdb-select.colorful-select .select-dropdown li.selected,mdb-select.colorful-select .select-dropdown li:hover{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.mdb-select-toggle{float:right;color:#000;line-height:2rem;text-align:center;width:30px;position:absolute;right:0;top:calc(50% + 6.4px);margin-top:-.5rem;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:14px}.mdb-select-toggle:before{content:'\\25BC'}.dropdown-content .custom-select-content:hover{background-color:transparent}[type=checkbox]:checked,[type=checkbox]:not(:checked){position:absolute;opacity:0;pointer-events:none}.form-check-input[type=checkbox]+label,label.btn input[type=checkbox]+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:1.5625rem;line-height:1.5625rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.form-check-input[type=checkbox]+label:before,.form-check-input[type=checkbox]:not(.filled-in)+label:after,label.btn input[type=checkbox]+label:before,label.btn input[type=checkbox]:not(.filled-in)+label:after{content:'';position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #8a8a8a;border-radius:1px;margin-top:3px;transition:.2s}.form-check-input[type=checkbox]:not(.filled-in)+label:after,label.btn input[type=checkbox]:not(.filled-in)+label:after{border:0;-webkit-transform:scale(0);transform:scale(0)}.form-check-input[type=checkbox]:not(:checked):disabled+label:before,label.btn input[type=checkbox]:not(:checked):disabled+label:before{border:none;background-color:#bdbdbd}.form-check-input[type=checkbox]:checked+label:before,label.btn input[type=checkbox]:checked+label:before{top:-4px;left:-5px;width:12px;height:1.375rem;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #4285f4;border-bottom:2px solid #4285f4;-webkit-transform:rotate(40deg);transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.form-check-input[type=checkbox]:checked:disabled+label:before,label.btn input[type=checkbox]:checked:disabled+label:before{border-right:2px solid #bdbdbd;border-bottom:2px solid #bdbdbd}.form-check-input[type=checkbox]:indeterminate+label:before,label.btn input[type=checkbox]:indeterminate+label:before{top:-11px;left:-12px;width:10px;height:1.375rem;border-top:none;border-left:none;border-right:2px solid #4285f4;border-bottom:none;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.form-check-input[type=checkbox]:indeterminate:disabled+label:before,label.btn input[type=checkbox]:indeterminate:disabled+label:before{border-right:2px solid rgba(0,0,0,.46);background-color:transparent}.form-check-input[type=checkbox].filled-in+label:after,label.btn input[type=checkbox].filled-in+label:after{border-radius:.125rem}.form-check-input[type=checkbox].filled-in+label:after,.form-check-input[type=checkbox].filled-in+label:before,label.btn input[type=checkbox].filled-in+label:after,label.btn input[type=checkbox].filled-in+label:before{content:'';left:0;position:absolute;transition:border .25s,background-color .25s,width .2s .1s,height .2s .1s,top .2s .1s,left .2s .1s;z-index:1}.form-check-input[type=checkbox].filled-in:not(:checked)+label:before,label.btn input[type=checkbox].filled-in:not(:checked)+label:before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.form-check-input[type=checkbox].filled-in:not(:checked)+label:after,label.btn input[type=checkbox].filled-in:not(:checked)+label:after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0;z-index:0}.form-check-input[type=checkbox].filled-in:checked+label:before,label.btn input[type=checkbox].filled-in:checked+label:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotateZ(37deg);transform:rotateZ(37deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.form-check-input[type=checkbox].filled-in:checked+label:after,label.btn input[type=checkbox].filled-in:checked+label:after{top:0;width:20px;height:20px;border:2px solid #a6c;background-color:#a6c;z-index:0}.form-check-input[type=checkbox].filled-in.filled-in-danger:checked+label:after,label.btn input[type=checkbox].filled-in.filled-in-danger:checked+label:after{background-color:#f44336;border-color:#f44336}.form-check-input[type=checkbox]:disabled:not(:checked)+label:before,label.btn input[type=checkbox]:disabled:not(:checked)+label:before{background-color:#bdbdbd;border-color:#bdbdbd}.form-check-input[type=checkbox]:disabled:not(:checked)+label:after,label.btn input[type=checkbox]:disabled:not(:checked)+label:after{border-color:#bdbdbd;background-color:#bdbdbd}.form-check-input[type=checkbox]:disabled:checked+label:before,label.btn input[type=checkbox]:disabled:checked+label:before{background-color:transparent}.form-check-input[type=checkbox]:disabled:checked+label:after,label.btn input[type=checkbox]:disabled:checked+label:after{background-color:#bdbdbd;border-color:#bdbdbd}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ChangeDetectorRef }
];
SelectComponent.propDecorators = {
    options: [{ type: Input }],
    customClass: [{ type: Input }],
    allowClear: [{ type: Input }],
    disabled: [{ type: Input }],
    highlightColor: [{ type: Input }],
    highlightTextColor: [{ type: Input }],
    highlightFirst: [{ type: Input }],
    multiple: [{ type: Input }],
    noFilter: [{ type: Input }],
    notFoundMsg: [{ type: Input }],
    placeholder: [{ type: Input }],
    filterPlaceholder: [{ type: Input }],
    label: [{ type: Input }],
    filterEnabled: [{ type: Input }],
    filterAutocomplete: [{ type: Input }],
    visibleOptions: [{ type: Input }],
    optionHeight: [{ type: Input }],
    tabindex: [{ type: Input }],
    enableSelectAll: [{ type: Input }],
    appendToBody: [{ type: Input }],
    selectAllLabel: [{ type: Input }],
    outline: [{ type: Input }],
    compareWith: [{ type: Input }],
    opened: [{ type: Output }],
    closed: [{ type: Output }],
    selected: [{ type: Output }],
    deselected: [{ type: Output }],
    noOptionsFound: [{ type: Output }],
    changed: [{ type: Output }],
    selectionSpan: [{ type: ViewChild, args: ['selection', { static: true },] }],
    dropdown: [{ type: ViewChild, args: ['dropdown', { static: false },] }],
    filterInput: [{ type: ViewChild, args: ['filterInput', { static: false },] }],
    clearButton: [{ type: ViewChild, args: ['clear', { static: false },] }]
};
if (false) {
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.customClass;
    /** @type {?} */
    SelectComponent.prototype.allowClear;
    /** @type {?} */
    SelectComponent.prototype.disabled;
    /** @type {?} */
    SelectComponent.prototype.highlightColor;
    /** @type {?} */
    SelectComponent.prototype.highlightTextColor;
    /** @type {?} */
    SelectComponent.prototype.highlightFirst;
    /** @type {?} */
    SelectComponent.prototype.multiple;
    /** @type {?} */
    SelectComponent.prototype.noFilter;
    /** @type {?} */
    SelectComponent.prototype.notFoundMsg;
    /** @type {?} */
    SelectComponent.prototype.placeholder;
    /** @type {?} */
    SelectComponent.prototype.filterPlaceholder;
    /** @type {?} */
    SelectComponent.prototype.label;
    /** @type {?} */
    SelectComponent.prototype.filterEnabled;
    /** @type {?} */
    SelectComponent.prototype.filterAutocomplete;
    /** @type {?} */
    SelectComponent.prototype.visibleOptions;
    /** @type {?} */
    SelectComponent.prototype.optionHeight;
    /** @type {?} */
    SelectComponent.prototype.tabindex;
    /** @type {?} */
    SelectComponent.prototype.enableSelectAll;
    /** @type {?} */
    SelectComponent.prototype.appendToBody;
    /** @type {?} */
    SelectComponent.prototype.selectAllLabel;
    /** @type {?} */
    SelectComponent.prototype.outline;
    /** @type {?} */
    SelectComponent.prototype.opened;
    /** @type {?} */
    SelectComponent.prototype.closed;
    /** @type {?} */
    SelectComponent.prototype.selected;
    /** @type {?} */
    SelectComponent.prototype.deselected;
    /** @type {?} */
    SelectComponent.prototype.noOptionsFound;
    /** @type {?} */
    SelectComponent.prototype.changed;
    /** @type {?} */
    SelectComponent.prototype.selectionSpan;
    /** @type {?} */
    SelectComponent.prototype.dropdown;
    /** @type {?} */
    SelectComponent.prototype.filterInput;
    /** @type {?} */
    SelectComponent.prototype.clearButton;
    /** @type {?} */
    SelectComponent.prototype.KEYS;
    /** @type {?} */
    SelectComponent.prototype._value;
    /** @type {?} */
    SelectComponent.prototype.optionList;
    /** @type {?} */
    SelectComponent.prototype.optionsLength;
    /** @type {?} */
    SelectComponent.prototype.visibleOptionsDefault;
    /** @type {?} */
    SelectComponent.prototype.hasSelected;
    /** @type {?} */
    SelectComponent.prototype.isBrowser;
    /** @type {?} */
    SelectComponent.prototype.hasFocus;
    /** @type {?} */
    SelectComponent.prototype.isOpen;
    /** @type {?} */
    SelectComponent.prototype.isBelow;
    /** @type {?} */
    SelectComponent.prototype.filterInputWidth;
    /** @type {?} */
    SelectComponent.prototype.isDisabled;
    /** @type {?} */
    SelectComponent.prototype.placeholderView;
    /** @type {?} */
    SelectComponent.prototype.labelActive;
    /** @type {?} */
    SelectComponent.prototype.labelRef;
    /** @type {?} */
    SelectComponent.prototype.labelRefActive;
    /** @type {?} */
    SelectComponent.prototype.dropdownAnimationDone;
    /** @type {?} */
    SelectComponent.prototype.clearClicked;
    /** @type {?} */
    SelectComponent.prototype.selectContainerClicked;
    /** @type {?} */
    SelectComponent.prototype.filterHeight;
    /** @type {?} */
    SelectComponent.prototype.dropdownHeight;
    /** @type {?} */
    SelectComponent.prototype.dropdownMaxHeight;
    /** @type {?} */
    SelectComponent.prototype.width;
    /** @type {?} */
    SelectComponent.prototype.top;
    /** @type {?} */
    SelectComponent.prototype.left;
    /** @type {?} */
    SelectComponent.prototype.documentClickFun;
    /** @type {?} */
    SelectComponent.prototype.itemsBefore;
    /** @type {?} */
    SelectComponent.prototype.onChange;
    /** @type {?} */
    SelectComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype._compareWith;
    /** @type {?} */
    SelectComponent.prototype.el;
    /** @type {?} */
    SelectComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFHVCxNQUFNLEVBQ04sV0FBVyxFQUNYLGlCQUFpQixFQUNqQix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBR3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUU5RCxNQUFNLE9BQU8scUJBQXFCLEdBQXFCO0lBQ3JELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUM7SUFDOUMsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQVVELE1BQU0sT0FBTyxlQUFlOzs7Ozs7Ozs7O0lBc0cxQixZQUNTLEVBQWMsRUFDZCxRQUFtQixFQUNBLFFBQWEsRUFDbEIsVUFBa0IsRUFDL0IsS0FBd0I7UUFKekIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDQSxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBRS9CLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBekdsQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUN4QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFHakIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsZ0JBQVcsR0FBRyxrQkFBa0IsQ0FBQztRQUNqQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDdkIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUUxQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVsQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUV2QixtQkFBYyxHQUFHLFlBQVksQ0FBQztRQUM5QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBYWYsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxhQUFRLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDOUQsZUFBVSxHQUFzQyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQUN4RixtQkFBYyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2xFLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztRQVF2QyxTQUFJLEdBQVE7WUFDVixTQUFTLEVBQUUsQ0FBQztZQUNaLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLEVBQUU7WUFDVCxHQUFHLEVBQUUsRUFBRTtZQUNQLEtBQUssRUFBRSxFQUFFO1lBQ1QsRUFBRSxFQUFFLEVBQUU7WUFDTixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7UUFFRixXQUFNLEdBQWUsRUFBRSxDQUFDO1FBR3hCLDBCQUFxQixHQUFHLENBQUMsQ0FBQzs7UUFFMUIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7O1FBSXBCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLFlBQU8sR0FBRyxJQUFJLENBQUM7UUFDZixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUNyQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFFOUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBRS9CLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBV2pCLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBRTdCLGFBQVE7Ozs7UUFBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBQzFCLGNBQVM7OztRQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsRUFBQztRQUViLGlCQUFZOzs7OztRQUFHLENBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBQztRQVlyRCxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUF0RkQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBQ0QsSUFBSSxXQUFXLENBQUMsRUFBaUM7UUFDL0MsSUFBSSxPQUFPLEVBQUUsS0FBSyxVQUFVLEVBQUU7WUFDNUIsTUFBTSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUErRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN4QyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7OztJQUVPLFlBQVk7O2NBQ1osY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVU7O2NBQ2pELFFBQVEsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN0RCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxvQkFBb0I7O2NBQ1osbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDdkMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxZQUFZO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjO2dCQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CO2dCQUNyRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQztZQUUvRSxJQUFJLENBQUMsY0FBYztnQkFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxtQkFBbUIsQ0FBQztTQUNsRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjO2dCQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFtQjtnQkFDL0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLG1CQUFtQixDQUFDO1lBRXpFLElBQUksQ0FBQyxjQUFjO2dCQUNqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQztTQUM1RTtJQUNILENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDckIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztJQUNwQyxDQUFDOzs7O0lBRUQsd0JBQXdCO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQzthQUNyRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2FBQ3hFO1NBQ0Y7UUFDRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDM0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWE7Z0JBQzVDLGNBQWMsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVk7YUFDN0MsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7O2tCQUNoQyxVQUFVLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTTs7a0JBQ25ELGFBQWEsR0FBVyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWTtZQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsSUFBSSxhQUFhLENBQUM7U0FDbEQ7UUFFRCxJQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBVzs7WUFDYixJQUFJLEdBQUcsTUFBTSxDQUFDLFVBQVU7UUFDNUIsT0FBTyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ25CLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFO2dCQUNsQyxPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7OztJQUlELHNCQUFzQixDQUFDLEtBQVU7UUFDL0IsNENBQTRDO1FBQzVDLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFcEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM1QjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELHNCQUFzQjtRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx3QkFBd0IsQ0FBQyxLQUFVO1FBQ2pDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFJRCx1QkFBdUIsQ0FBQyxNQUFjO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFVO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFHRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVELG1CQUFtQixDQUFDLElBQVk7O2NBQ3hCLFFBQVEsR0FBWSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ2pGO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzNFO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsS0FBVTtRQUM5QixJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBSUQscUJBQXFCLENBQUMsS0FBVTtRQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzs7Y0FDbkIsSUFBSSxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSzs7Y0FDakMsUUFBUSxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7OztJQUVELHVCQUF1QixDQUFDLEtBQVU7UUFDaEMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUlELHFCQUFxQixDQUFDLEtBQVU7UUFDOUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Ozs7O0lBSUQscUJBQXFCLENBQUMsTUFBYztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUtELElBQUk7UUFDRixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSTs7O1FBQUMsR0FBRyxFQUFFO1lBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxJQUFJLEtBQUssQ0FBQyxDQUFjO1FBQ3RCLElBQUksT0FBTyxDQUFDLEtBQUssV0FBVyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN0RCxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ1I7YUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNUO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7O0lBRU8sYUFBYSxDQUFDLEtBQVU7UUFDOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBRTtZQUMxQixLQUFLLENBQUMsT0FBTzs7OztZQUFDLENBQUMsY0FBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBQyxDQUFDO1NBQzdFO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLEtBQVU7O2NBQ3pCLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1FBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUNyRSxPQUFPLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RSxDQUFDLEVBQUM7UUFFRixJQUFJLGNBQWMsRUFBRTtZQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7OztJQUlELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFvQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFJRCxpQkFBaUIsQ0FBQyxPQUF1QjtRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMxQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7Ozs7O0lBR0QsY0FBYztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM5RDtJQUNILENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsOENBQThDO1FBQzlDLDZFQUE2RTtRQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixVQUFVOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUNkLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDekIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ1A7WUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMzRSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxFQUFVLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFOzs7O2dCQUFFLENBQUMsS0FBVSxFQUFFLEVBQUU7b0JBQzFFLElBQ0UsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7d0JBQzNCLElBQUksQ0FBQyxNQUFNO3dCQUNYLElBQUksQ0FBQyxxQkFBcUI7d0JBQzFCLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3RDO3dCQUNBLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7d0JBRXhCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs0QkFDZCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzt5QkFDekI7d0JBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFOzRCQUNqQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzt5QkFDNUI7cUJBQ0Y7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxRQUFpQixLQUFLO1FBQ2xDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM1RTs7Y0FFSyxTQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUztRQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RCxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRWpDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNkO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7Ozs7SUFJRCxZQUFZLENBQUMsTUFBYztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBRXhCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6QjtZQUVELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDNUI7U0FDRjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN0QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE1BQWM7UUFDM0IsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFFeEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFFekIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUN6QjtnQkFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2lCQUM1QjthQUNGO1lBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7O2NBQ04sU0FBUyxHQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7UUFDMUQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUV6QixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDbEQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2xCLFNBQVMsQ0FBQyxHQUFHOzs7O2dCQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNyQixPQUFPLE1BQU0sQ0FBQyxhQUFhLENBQUM7Z0JBQzlCLENBQUMsRUFBQyxDQUNILENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUFjO1FBQy9CLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7OztJQUVELHVCQUF1Qjs7Y0FDZixNQUFNLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUI7UUFDeEQsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O0lBRUQsWUFBWTs7Y0FDSixHQUFHLEdBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztRQUVwRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztrQkFDWixNQUFNLEdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxVQUFtQjtRQUM3QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtpQkFDckIsTUFBTTs7OztZQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFDO2lCQUNsQyxPQUFPOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUIsQ0FBQyxFQUFDLENBQUM7U0FDTjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRO2lCQUNyQixNQUFNOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUM7aUJBQ2xDLE9BQU87Ozs7WUFBQyxNQUFNLENBQUMsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQzs7Ozs7SUFJRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxzQkFBc0IsQ0FBQyxLQUFhO1FBQ2xDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Ozs7SUFFRCw0QkFBNEIsQ0FBQyxLQUFVOztjQUMvQixHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU87UUFFekIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNuRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRXpCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDZCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDekI7Z0JBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztpQkFDNUI7YUFDRjtpQkFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3RCO2lCQUFNLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztpQkFDdEM7YUFDRjtpQkFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDL0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixFQUFFLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUN6QztpQkFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDakMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzthQUN6QztTQUNGO2FBQU07WUFDTCxJQUNFLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3ZCLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3ZCLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFDeEM7Z0JBQ0EsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQsMkJBQTJCLENBQUMsS0FBVTs7Y0FDOUIsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLO1FBRXZCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQy9CLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7Z0JBQ3pGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzthQUNyQjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx5QkFBeUIsQ0FBQyxLQUFVOztjQUM1QixHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUs7UUFFdkIsSUFDRSxHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO1lBQ3JCLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDckIsR0FBRyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixHQUFHLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3RCLEdBQUcsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDdkI7WUFDQSxJQUFJLENBQUMsNEJBQTRCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDOzs7OztJQUlELEtBQUs7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJO1lBQ0YsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN4QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMxQztTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUUsR0FBRTtJQUNwQixDQUFDOzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7O2tCQUNSLEtBQUssR0FBUSxRQUFRLENBQUMsZUFBZTs7Z0JBQ3ZDLFVBQVUsR0FBRyxDQUFDO1lBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsVUFBVTtvQkFDUixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU07d0JBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQzthQUMzQzs7a0JBQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYTtZQUNuRCxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7O2tCQUM1QixNQUFNLEdBQVEsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsWUFBWTs7a0JBQ2xELGNBQWMsR0FDbEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFDN0YsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDNUIsSUFBSSxVQUFVLEdBQUcsY0FBYyxJQUFJLE1BQU0sRUFBRTtnQkFDekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsWUFBWSxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ3pFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRU8sdUJBQXVCO1FBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7a0JBQ1osVUFBVSxHQUFlLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFOztrQkFDdEUsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTOztrQkFDbkYsU0FBUyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsU0FBUzs7a0JBQ3RDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTTs7a0JBQzFCLGNBQWMsR0FDbEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7WUFFN0YsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQ0UsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWTtnQkFDOUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQVksRUFDdEQ7Z0JBQ0EsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUcsY0FBYyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ3BFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVPLGVBQWU7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztrQkFDWixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOztrQkFDMUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWE7WUFFeEQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzNDO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUFFOztrQkFDckMsS0FBSyxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUs7WUFDMUQsSUFBSSxDQUFDLGdCQUFnQjtnQkFDbkIsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNyRjtJQUNILENBQUM7OztZQXB6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qiw2dUZBQW9DO2dCQUVwQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFDbEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQTlCQyxVQUFVO1lBQ1YsU0FBUzs0Q0F1SU4sTUFBTSxTQUFDLFFBQVE7eUNBQ2YsTUFBTSxTQUFDLFdBQVc7WUFuSXJCLGlCQUFpQjs7O3NCQTBCaEIsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLEtBQUs7b0JBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7OEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFFTCxLQUFLO3FCQVdMLE1BQU07cUJBQ04sTUFBTTt1QkFDTixNQUFNO3lCQUNOLE1BQU07NkJBQ04sTUFBTTtzQkFDTixNQUFNOzRCQUVOLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3VCQUN2QyxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTswQkFDdkMsU0FBUyxTQUFDLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MEJBQzFDLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBNUNyQyxrQ0FBaUM7O0lBQ2pDLHNDQUFpQzs7SUFDakMscUNBQTRCOztJQUM1QixtQ0FBMEI7O0lBQzFCLHlDQUFnQzs7SUFDaEMsNkNBQW9DOztJQUNwQyx5Q0FBK0I7O0lBQy9CLG1DQUEwQjs7SUFDMUIsbUNBQXNCOztJQUN0QixzQ0FBMEM7O0lBQzFDLHNDQUEwQjs7SUFDMUIsNENBQWdDOztJQUNoQyxnQ0FBb0I7O0lBQ3BCLHdDQUErQjs7SUFDL0IsNkNBQW1DOztJQUNuQyx5Q0FBZ0M7O0lBQ2hDLHVDQUEyQjs7SUFDM0IsbUNBQTBCOztJQUMxQiwwQ0FBZ0M7O0lBQ2hDLHVDQUErQjs7SUFDL0IseUNBQXVDOztJQUN2QyxrQ0FBeUI7O0lBYXpCLGlDQUE4RDs7SUFDOUQsaUNBQThEOztJQUM5RCxtQ0FBd0U7O0lBQ3hFLHFDQUFrRzs7SUFDbEcseUNBQTRFOztJQUM1RSxrQ0FBdUM7O0lBRXZDLHdDQUFvRTs7SUFDcEUsbUNBQTRFOztJQUM1RSxzQ0FBcUU7O0lBQ3JFLHNDQUErRDs7SUFHL0QsK0JBUUU7O0lBRUYsaUNBQXdCOztJQUN4QixxQ0FBdUI7O0lBQ3ZCLHdDQUFzQjs7SUFDdEIsZ0RBQTBCOztJQUUxQixzQ0FBb0I7O0lBQ3BCLG9DQUFtQjs7SUFHbkIsbUNBQWlCOztJQUNqQixpQ0FBZTs7SUFDZixrQ0FBZTs7SUFDZiwyQ0FBcUI7O0lBQ3JCLHFDQUFtQjs7SUFDbkIsMENBQXFCOztJQUNyQixzQ0FBb0I7O0lBQ3BCLG1DQUFzQjs7SUFDdEIseUNBQXVCOztJQUN2QixnREFBOEI7O0lBRTlCLHVDQUFxQjs7SUFDckIsaURBQStCOztJQUUvQix1Q0FBaUI7O0lBQ2pCLHlDQUF1Qjs7SUFDdkIsNENBQTBCOztJQUcxQixnQ0FBYzs7SUFDZCw4QkFBWTs7SUFDWiwrQkFBYTs7SUFFYiwyQ0FBMkI7O0lBRTNCLHNDQUE2Qjs7SUFFN0IsbUNBQTBCOztJQUMxQixvQ0FBcUI7Ozs7O0lBRXJCLHVDQUF1RDs7SUFNckQsNkJBQXFCOztJQUNyQixtQ0FBMEI7Ozs7O0lBQzFCLG1DQUF1Qzs7Ozs7SUFFdkMsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFeGlzdGluZ1Byb3ZpZGVyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBmb3J3YXJkUmVmLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTZWxlY3REcm9wZG93bkNvbXBvbmVudCB9IGZyb20gJy4vc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJT3B0aW9uIH0gZnJvbSAnLi9vcHRpb24taW50ZXJmYWNlJztcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7IE9wdGlvbkxpc3QgfSBmcm9tICcuL29wdGlvbi1saXN0JztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfVkFMVUVfQUNDRVNTT1I6IEV4aXN0aW5nUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3RDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdGVyaWFsLXNlbGVjdC1tb2R1bGUuc2NzcyddLFxuICBwcm92aWRlcnM6IFtTRUxFQ1RfVkFMVUVfQUNDRVNTT1JdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgb3B0aW9uczogQXJyYXk8SU9wdGlvbj47XG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoKSBhbGxvd0NsZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodFRleHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaWdobGlnaHRGaXJzdCA9IHRydWU7XG4gIEBJbnB1dCgpIG11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vRmlsdGVyID0gMDtcbiAgQElucHV0KCkgbm90Rm91bmRNc2cgPSAnTm8gcmVzdWx0cyBmb3VuZCc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIGZpbHRlclBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIGZpbHRlckVuYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZmlsdGVyQXV0b2NvbXBsZXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgdmlzaWJsZU9wdGlvbnM6IG51bWJlcjtcbiAgQElucHV0KCkgb3B0aW9uSGVpZ2h0ID0gMzc7XG4gIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbCA9IHRydWU7XG4gIEBJbnB1dCgpIGFwcGVuZFRvQm9keTogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IGFsbCc7XG4gIEBJbnB1dCgpIG91dGxpbmUgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgY29tcGFyZVdpdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhcmVXaXRoO1xuICB9XG4gIHNldCBjb21wYXJlV2l0aChmbjogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBFcnJvcignY29tcGFyZVdpdGggbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG4gICAgfVxuICAgIHRoaXMuX2NvbXBhcmVXaXRoID0gZm47XG4gIH1cblxuICBAT3V0cHV0KCkgb3BlbmVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2xvc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxJT3B0aW9uPiA9IG5ldyBFdmVudEVtaXR0ZXI8SU9wdGlvbj4oKTtcbiAgQE91dHB1dCgpIGRlc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxJT3B0aW9uIHwgSU9wdGlvbltdPiA9IG5ldyBFdmVudEVtaXR0ZXI8SU9wdGlvbiB8IElPcHRpb25bXT4oKTtcbiAgQE91dHB1dCgpIG5vT3B0aW9uc0ZvdW5kOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAVmlld0NoaWxkKCdzZWxlY3Rpb24nLCB7IHN0YXRpYzogdHJ1ZSB9KSBzZWxlY3Rpb25TcGFuOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdkcm9wZG93bicsIHsgc3RhdGljOiBmYWxzZSB9KSBkcm9wZG93bjogU2VsZWN0RHJvcGRvd25Db21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JywgeyBzdGF0aWM6IGZhbHNlIH0pIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjbGVhcicsIHsgc3RhdGljOiBmYWxzZSB9KSBjbGVhckJ1dHRvbjogRWxlbWVudFJlZjtcblxuICAvLyBBbmd1bGFyIGxpZmVjeWNsZSBob29rcy5cbiAgS0VZUzogYW55ID0ge1xuICAgIEJBQ0tTUEFDRTogOCxcbiAgICBUQUI6IDksXG4gICAgRU5URVI6IDEzLFxuICAgIEVTQzogMjcsXG4gICAgU1BBQ0U6IDMyLFxuICAgIFVQOiAzOCxcbiAgICBET1dOOiA0MCxcbiAgfTtcblxuICBfdmFsdWU6IEFycmF5PGFueT4gPSBbXTtcbiAgb3B0aW9uTGlzdDogT3B0aW9uTGlzdDtcbiAgb3B0aW9uc0xlbmd0aDogbnVtYmVyO1xuICB2aXNpYmxlT3B0aW9uc0RlZmF1bHQgPSA0O1xuICAvLyBTZWxlY3Rpb24gc3RhdGUgdmFyaWFibGVzLlxuICBoYXNTZWxlY3RlZCA9IGZhbHNlO1xuICBpc0Jyb3dzZXI6IGJvb2xlYW47XG5cbiAgLy8gVmlldyBzdGF0ZSB2YXJpYWJsZXMuXG4gIGhhc0ZvY3VzID0gZmFsc2U7XG4gIGlzT3BlbiA9IGZhbHNlO1xuICBpc0JlbG93ID0gdHJ1ZTtcbiAgZmlsdGVySW5wdXRXaWR0aCA9IDE7XG4gIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgcGxhY2Vob2xkZXJWaWV3ID0gJyc7XG4gIGxhYmVsQWN0aXZlID0gZmFsc2U7XG4gIGxhYmVsUmVmOiBIVE1MRWxlbWVudDtcbiAgbGFiZWxSZWZBY3RpdmUgPSBmYWxzZTtcbiAgZHJvcGRvd25BbmltYXRpb25Eb25lID0gZmFsc2U7XG5cbiAgY2xlYXJDbGlja2VkID0gZmFsc2U7XG4gIHNlbGVjdENvbnRhaW5lckNsaWNrZWQgPSBmYWxzZTtcblxuICBmaWx0ZXJIZWlnaHQgPSAwO1xuICBkcm9wZG93bkhlaWdodDogbnVtYmVyO1xuICBkcm9wZG93bk1heEhlaWdodDogbnVtYmVyO1xuXG4gIC8vIFdpZHRoIGFuZCBwb3NpdGlvbiBmb3IgdGhlIGRyb3Bkb3duIGNvbnRhaW5lci5cbiAgd2lkdGg6IG51bWJlcjtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcblxuICBkb2N1bWVudENsaWNrRnVuOiBGdW5jdGlvbjtcblxuICBpdGVtc0JlZm9yZTogQXJyYXk8YW55PiA9IFtdO1xuXG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHByaXZhdGUgX2NvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICAvKiogRXZlbnQgaGFuZGxlcnMuICoqL1xuXG4gIC8vIEFuZ3VsYXIgbGlmZWN5Y2xlIGhvb2tzLlxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlclZpZXcgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMudXBkYXRlRmlsdGVySGVpZ2h0KCk7XG4gICAgdGhpcy51cGRhdGVEcm9wZG93bkhlaWdodCgpO1xuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmxhYmVsUmVmID0gdGhpcy5fZ2V0TGFiZWxSZWYoKTtcblxuICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oaWdobGlnaHRGaXJzdCkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodEZpcnN0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXRMYWJlbFJlZigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc2VsZWN0UGFyZW50RWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBjb25zdCBsYWJlbFJlZiA9IHNlbGVjdFBhcmVudEVsLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XG4gICAgcmV0dXJuIGxhYmVsUmVmO1xuICB9XG5cbiAgdXBkYXRlRmlsdGVySGVpZ2h0KCkge1xuICAgIHRoaXMuZmlsdGVyRW5hYmxlZCA/ICh0aGlzLmZpbHRlckhlaWdodCA9IDc4KSA6ICh0aGlzLmZpbHRlckhlaWdodCA9IDApO1xuICB9XG5cbiAgdXBkYXRlRHJvcGRvd25IZWlnaHQoKSB7XG4gICAgY29uc3QgY3VzdG9tQ29udGVudEhlaWdodCA9IHRoaXMuZHJvcGRvd25cbiAgICAgID8gdGhpcy5kcm9wZG93bi5jdXN0b21Db250ZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICA6IDA7XG5cbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLmVuYWJsZVNlbGVjdEFsbCkge1xuICAgICAgdGhpcy5kcm9wZG93bk1heEhlaWdodCA9IHRoaXMudmlzaWJsZU9wdGlvbnNcbiAgICAgICAgPyB0aGlzLm9wdGlvbkhlaWdodCAqICh0aGlzLnZpc2libGVPcHRpb25zICsgMSkgKyBjdXN0b21Db250ZW50SGVpZ2h0XG4gICAgICAgIDogdGhpcy5vcHRpb25IZWlnaHQgKiAodGhpcy52aXNpYmxlT3B0aW9uc0RlZmF1bHQgKyAxKSArIGN1c3RvbUNvbnRlbnRIZWlnaHQ7XG5cbiAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgPVxuICAgICAgICB0aGlzLm9wdGlvbkhlaWdodCAqICh0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5sZW5ndGggKyAxKSArIGN1c3RvbUNvbnRlbnRIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgPSB0aGlzLnZpc2libGVPcHRpb25zXG4gICAgICAgID8gdGhpcy5vcHRpb25IZWlnaHQgKiB0aGlzLnZpc2libGVPcHRpb25zICsgY3VzdG9tQ29udGVudEhlaWdodFxuICAgICAgICA6IHRoaXMub3B0aW9uSGVpZ2h0ICogdGhpcy52aXNpYmxlT3B0aW9uc0RlZmF1bHQgKyBjdXN0b21Db250ZW50SGVpZ2h0O1xuXG4gICAgICB0aGlzLmRyb3Bkb3duSGVpZ2h0ID1cbiAgICAgICAgdGhpcy5vcHRpb25IZWlnaHQgKiB0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5sZW5ndGggKyBjdXN0b21Db250ZW50SGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIG9uRHJvcGRvd25BbmltYXRpb25Eb25lKCkge1xuICAgIHRoaXMuZHJvcGRvd25BbmltYXRpb25Eb25lID0gdHJ1ZTtcbiAgfVxuXG4gIG9uRHJvcGRvd25BbmltYXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmRyb3Bkb3duQW5pbWF0aW9uRG9uZSA9IGZhbHNlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnb3V0bGluZScpKSB7XG4gICAgICBpZiAoY2hhbmdlc1snb3V0bGluZSddLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ21kYi1zZWxlY3Qtb3V0bGluZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdtZGItc2VsZWN0LW91dGxpbmUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSkge1xuICAgICAgdGhpcy51cGRhdGVPcHRpb25zTGlzdChjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25IZWlnaHQoKTtcbiAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5ID8gdGhpcy5fdXBkYXRlQXBwZW5kZWRQb3NpdGlvbigpIDogdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoe1xuICAgICAgICBwcmV2aW91c1ZhbHVlOiBjaGFuZ2VzLm9wdGlvbnMucHJldmlvdXNWYWx1ZSxcbiAgICAgICAgc2VsZWN0aW9uVmFsdWU6IGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ25vRmlsdGVyJykpIHtcbiAgICAgIGNvbnN0IG51bU9wdGlvbnM6IG51bWJlciA9IHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmxlbmd0aDtcbiAgICAgIGNvbnN0IG1pbk51bU9wdGlvbnM6IG51bWJlciA9IGNoYW5nZXNbJ25vRmlsdGVyJ10uY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5maWx0ZXJFbmFibGVkID0gbnVtT3B0aW9ucyA+PSBtaW5OdW1PcHRpb25zO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwbGFjZWhvbGRlcicpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgaXNDaGlsZChlbGVtbnQ6IGFueSkge1xuICAgIGxldCBub2RlID0gZWxlbW50LnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgfVxuXG4gIC8vIFNlbGVjdCBjb250YWluZXIuXG5cbiAgb25TZWxlY3RDb250YWluZXJDbGljayhldmVudDogYW55KSB7XG4gICAgLy8gcHJldmVudCBmcm9tIG9wZW5pbmcgb24gbW91c2UgcmlnaHQgY2xpY2tcbiAgICBpZiAoZXZlbnQud2hpY2ggPT09IDIgfHwgZXZlbnQud2hpY2ggPT09IDMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NoaWxkKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0Q29udGFpbmVyQ2xpY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuXG4gICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RDb250YWluZXJGb2N1cygpIHtcbiAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgdGhpcy5sYWJlbEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbFJlZiwgJ2FjdGl2ZScpO1xuICAgIH1cbiAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICB9XG5cbiAgb25TZWxlY3RDb250YWluZXJCbHVyKCkge1xuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzT3BlbiAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdENvbnRhaW5lcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaGFuZGxlU2VsZWN0Q29udGFpbmVyS2V5ZG93bihldmVudCk7XG4gIH1cblxuICAvLyBEcm9wZG93biBjb250YWluZXIuXG5cbiAgb25Ecm9wZG93bk9wdGlvbkNsaWNrZWQob3B0aW9uOiBPcHRpb24pIHtcbiAgICB0aGlzLm11bHRpcGxlID8gdGhpcy50b2dnbGVTZWxlY3RPcHRpb24ob3B0aW9uKSA6IHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gIH1cblxuICBvbkRyb3Bkb3duQ2xvc2UoZm9jdXM6IGFueSkge1xuICAgIHRoaXMuY2xvc2VEcm9wZG93bihmb2N1cyk7XG4gIH1cblxuICAvLyBTaW5nbGUgZmlsdGVyIGlucHV0LlxuICBvblNpbmdsZUZpbHRlckNsaWNrKCkge1xuICAgIHRoaXMuc2VsZWN0Q29udGFpbmVyQ2xpY2tlZCA9IHRydWU7XG4gIH1cblxuICBvblNpbmdsZUZpbHRlcklucHV0KHRlcm06IHN0cmluZykge1xuICAgIGNvbnN0IGhhc1Nob3duOiBib29sZWFuID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcih0ZXJtKTtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLmVuYWJsZVNlbGVjdEFsbCkge1xuICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCA9ICh0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWQubGVuZ3RoICsgMSkgKiB0aGlzLm9wdGlvbkhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZC5sZW5ndGggKiB0aGlzLm9wdGlvbkhlaWdodDtcbiAgICB9XG4gICAgaWYgKCFoYXNTaG93bikge1xuICAgICAgdGhpcy5ub09wdGlvbnNGb3VuZC5lbWl0KHRlcm0pO1xuICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCA9IHRoaXMub3B0aW9uSGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5oYW5kbGVTaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIC8vIE11bHRpcGxlIGZpbHRlciBpbnB1dC5cblxuICBvbk11bHRpcGxlRmlsdGVySW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlRmlsdGVyV2lkdGgoKTtcbiAgICBjb25zdCB0ZXJtOiBzdHJpbmcgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgY29uc3QgaGFzU2hvd246IGJvb2xlYW4gPSB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyKHRlcm0pO1xuICAgIGlmICghaGFzU2hvd24pIHtcbiAgICAgIHRoaXMubm9PcHRpb25zRm91bmQuZW1pdCh0ZXJtKTtcbiAgICB9XG4gIH1cblxuICBvbk11bHRpcGxlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5oYW5kbGVNdWx0aXBsZUZpbHRlcktleWRvd24oZXZlbnQpO1xuICB9XG5cbiAgLy8gU2luZ2xlIGNsZWFyIHNlbGVjdC5cblxuICBvbkNsZWFyU2VsZWN0aW9uQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jbGVhckNsaWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcblxuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gTXVsdGlwbGUgZGVzZWxlY3Qgb3B0aW9uLlxuXG4gIG9uRGVzZWxlY3RPcHRpb25DbGljayhvcHRpb246IE9wdGlvbikge1xuICAgIHRoaXMuY2xlYXJDbGlja2VkID0gdHJ1ZTtcbiAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gIH1cblxuICAvKiogQVBJLiAqKi9cblxuICAvLyBUT0RPIGZpeCBpc3N1ZXMgd2l0aCBnbG9iYWwgY2xpY2sva2V5IGhhbmRsZXIgdGhhdCBjbG9zZXMgdGhlIGRyb3Bkb3duLlxuICBvcGVuKCkge1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IGFueSB8IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMuX3ZhbHVlIDogdGhpcy5fdmFsdWVbMF07XG4gIH1cblxuICBzZXQgdmFsdWUodjogYW55IHwgYW55W10pIHtcbiAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgdiA9PT0gJycpIHtcbiAgICAgIHYgPSBbXTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHYpKSB7XG4gICAgICB2ID0gW3ZdO1xuICAgIH1cblxuICAgIHRoaXMuX3NldFNlbGVjdGlvbih2KTtcbiAgICB0aGlzLl92YWx1ZSA9IHY7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U2VsZWN0aW9uKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB2YWx1ZSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoc2VsZWN0aW9uVmFsdWU6IGFueSkgPT4gdGhpcy5fc2VsZWN0QnlWYWx1ZShzZWxlY3Rpb25WYWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RCeVZhbHVlKHZhbHVlWzBdKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RCeVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBtYXRjaGluZ09wdGlvbiA9IHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmZpbmQoKG9wdGlvbjogT3B0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9uLnZhbHVlICE9PSBudWxsICYmIHRoaXMuX2NvbXBhcmVXaXRoKG9wdGlvbi52YWx1ZSwgdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgaWYgKG1hdGNoaW5nT3B0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0KG1hdGNoaW5nT3B0aW9uKTtcbiAgICB9XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gIH1cblxuICBzZWxlY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9uTGlzdC5nZXRPcHRpb25zQnlWYWx1ZSh2YWx1ZSkuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UgbWV0aG9kcy4gKiovXG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaGFzU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgICAgdGhpcy5oYXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCkge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQoKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLm9wdGlvbkxpc3QudmFsdWU7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICB1cGRhdGVTdGF0ZSgpIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJXaWR0aCgpO1xuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6YXRpb24uICoqL1xuXG4gIHVwZGF0ZU9wdGlvbnNMaXN0KG9wdGlvbnM6IEFycmF5PElPcHRpb24+KSB7XG4gICAgdGhpcy5vcHRpb25MaXN0ID0gbmV3IE9wdGlvbkxpc3Qob3B0aW9ucywgdGhpcy5tdWx0aXBsZSk7XG4gICAgdGhpcy5fc2VsZWN0QnlWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHVwZGF0ZUxhYmVsU3RhdGUoKSB7XG4gICAgaWYgKCF0aGlzLnBsYWNlaG9sZGVyICYmICF0aGlzLmhhc1NlbGVjdGVkICYmICF0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5sYWJlbEFjdGl2ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxhYmVsQWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMYWJlbFJlZlN0YXRlKCkge1xuICAgIGlmICghdGhpcy5wbGFjZWhvbGRlciAmJiAhdGhpcy5oYXNTZWxlY3RlZCAmJiAhdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5sYWJlbFJlZiwgJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMubGFiZWxSZWYsICdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICAvKiogRHJvcGRvd24uICoqL1xuICB0b2dnbGVEcm9wZG93bigpIHtcbiAgICBpZiAoIXRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5pc09wZW4gPyB0aGlzLmNsb3NlRHJvcGRvd24odHJ1ZSkgOiB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5Ecm9wZG93bigpIHtcbiAgICAvLyB3ZSBzaG91bGQgbm90IHNldCBoaWdoZXIgei1pbmRleCB2YWx1ZSBoZXJlXG4gICAgLy8gYmVjYXVzZSBkcm9wZG93biBhZGRlZCB3aXRoIGFwcGVuZFRvQm9keSB3aWxsIGJlIG92ZXJsYXBlZCBieSBzZWxlY3QgaW5wdXRcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3otaW5kZXgnLCAnMTAwMCcpO1xuICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2FwcGVuZERyb3Bkb3duKCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICB0aGlzLmFwcGVuZFRvQm9keSA/IHRoaXMuX3VwZGF0ZUFwcGVuZGVkUG9zaXRpb24oKSA6IHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIFsnY2xpY2snLCAndG91Y2hzdGFydCddLmZvckVhY2goKGV2OiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5kb2N1bWVudENsaWNrRnVuID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgZXYsIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMuaXNDaGlsZChldmVudC50YXJnZXQpICYmXG4gICAgICAgICAgICB0aGlzLmlzT3BlbiAmJlxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bkFuaW1hdGlvbkRvbmUgJiZcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50XG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJGaWx0ZXJJbnB1dCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm9wZW5lZC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBjbG9zZURyb3Bkb3duKGZvY3VzOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICBpZiAodGhpcy5hcHBlbmRUb0JvZHkgJiYgdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoJ2JvZHknLCB0aGlzLmRyb3Bkb3duLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmNsYXNzTGlzdDtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3otaW5kZXgnKTtcbiAgICBjb250YWluZXIucmVtb3ZlKCdmYWRlSW5TZWxlY3QnKTtcblxuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbGVhckZpbHRlcklucHV0KCk7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2VkLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5kb2N1bWVudENsaWNrRnVuKCk7XG5cbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKiogU2VsZWN0LiAqKi9cblxuICBzZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LnNlbGVjdChvcHRpb24pO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdChvcHRpb24ud3JhcHBlZE9wdGlvbik7XG4gICAgICB0aGlzLmhhc1NlbGVjdGVkID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWxSZWZTdGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgfVxuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBkZXNlbGVjdE9wdGlvbihvcHRpb246IE9wdGlvbikge1xuICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5kZXNlbGVjdChvcHRpb24pO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZWQoKTtcbiAgICAgIHRoaXMucGxhY2Vob2xkZXJWaWV3ID0gdGhpcy5wbGFjZWhvbGRlcjtcblxuICAgICAgaWYgKHRoaXMub3B0aW9uTGlzdC5zZWxlY3Rpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuaGFzU2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5kZXNlbGVjdGVkLmVtaXQob3B0aW9uLndyYXBwZWRPcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbjogQXJyYXk8T3B0aW9uPiA9IHRoaXMub3B0aW9uTGlzdC5zZWxlY3Rpb247XG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XG4gICAgICB0aGlzLmhhc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3RlZC5lbWl0KHNlbGVjdGlvblswXS53cmFwcGVkT3B0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3RlZC5lbWl0KFxuICAgICAgICAgIHNlbGVjdGlvbi5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24ud3JhcHBlZE9wdGlvbjtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdE9wdGlvbihvcHRpb246IE9wdGlvbikge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA/IHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKSA6IHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gIH1cblxuICBzZWxlY3RIaWdobGlnaHRlZE9wdGlvbigpIHtcbiAgICBjb25zdCBvcHRpb246IE9wdGlvbiA9IHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHRlZE9wdGlvbjtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiBvcHRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgfVxuICAgIGlmICghdGhpcy5tdWx0aXBsZSAmJiBvcHRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24odHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZGVzZWxlY3RMYXN0KCkge1xuICAgIGNvbnN0IHNlbDogQXJyYXk8T3B0aW9uPiA9IHRoaXMub3B0aW9uTGlzdC5zZWxlY3Rpb247XG5cbiAgICBpZiAoc2VsLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG9wdGlvbjogT3B0aW9uID0gc2VsW3NlbC5sZW5ndGggLSAxXTtcbiAgICAgIHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgIHRoaXMuc2V0TXVsdGlwbGVGaWx0ZXJJbnB1dChvcHRpb24ubGFiZWwgKyAnICcpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0QWxsKGlzU2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkXG4gICAgICAgIC5maWx0ZXIob3B0aW9uID0+ICFvcHRpb24uZGlzYWJsZWQpXG4gICAgICAgIC5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZFxuICAgICAgICAuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmRpc2FibGVkKVxuICAgICAgICAuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgIHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEZpbHRlci4gKiovXG5cbiAgY2xlYXJGaWx0ZXJJbnB1dCgpIHtcbiAgICB0aGlzLmRyb3Bkb3duLmNsZWFyRmlsdGVySW5wdXQoKTtcbiAgICB0aGlzLnVwZGF0ZURyb3Bkb3duSGVpZ2h0KCk7XG4gIH1cblxuICBzZXRNdWx0aXBsZUZpbHRlcklucHV0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICBpZiAoa2V5ID09PSB0aGlzLktFWVMuRVNDIHx8IChrZXkgPT09IHRoaXMuS0VZUy5VUCAmJiBldmVudC5hbHRLZXkpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bih0cnVlKTtcblxuICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IHRoaXMuS0VZUy5UQUIpIHtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gdGhpcy5LRVlTLkVOVEVSKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0SGlnaGxpZ2h0ZWRPcHRpb24oKTtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5lbmFibGVTZWxlY3RBbGwpIHtcbiAgICAgICAgICB0aGlzLmRyb3Bkb3duLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSB0aGlzLktFWVMuVVApIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodFByZXZpb3VzT3B0aW9uKCk7XG4gICAgICAgIHRoaXMuZHJvcGRvd24ubW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSB0aGlzLktFWVMuRE9XTikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0TmV4dE9wdGlvbigpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChcbiAgICAgICAga2V5ID09PSB0aGlzLktFWVMuRU5URVIgfHxcbiAgICAgICAga2V5ID09PSB0aGlzLktFWVMuU1BBQ0UgfHxcbiAgICAgICAgKGtleSA9PT0gdGhpcy5LRVlTLkRPV04gJiYgZXZlbnQuYWx0S2V5KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTXVsdGlwbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBrZXkgPSBldmVudC53aGljaDtcblxuICAgIGlmIChrZXkgPT09IHRoaXMuS0VZUy5CQUNLU1BBQ0UpIHtcbiAgICAgIGlmICh0aGlzLmhhc1NlbGVjdGVkICYmIHRoaXMuZmlsdGVyRW5hYmxlZCAmJiB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3RMYXN0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQud2hpY2g7XG5cbiAgICBpZiAoXG4gICAgICBrZXkgPT09IHRoaXMuS0VZUy5FU0MgfHxcbiAgICAgIGtleSA9PT0gdGhpcy5LRVlTLlRBQiB8fFxuICAgICAga2V5ID09PSB0aGlzLktFWVMuVVAgfHxcbiAgICAgIGtleSA9PT0gdGhpcy5LRVlTLkRPV04gfHxcbiAgICAgIGtleSA9PT0gdGhpcy5LRVlTLkVOVEVSXG4gICAgKSB7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdENvbnRhaW5lcktleWRvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBWaWV3LiAqKi9cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLmhhc0ZvY3VzID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBibHVyKCkge1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cblxuICB1cGRhdGVXaWR0aCgpIHtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5zZWxlY3Rpb25TcGFuLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRvY0VsOiBhbnkgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICBsZXQgZWxQb3NpdGlvbiA9IDA7XG4gICAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgICAgZWxQb3NpdGlvbiA9XG4gICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSArXG4gICAgICAgICAgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2VsZWN0U3BhbiA9IHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5sZWZ0ID0gc2VsZWN0U3Bhbi5vZmZzZXRMZWZ0O1xuICAgICAgY29uc3QgYm90dG9tOiBhbnkgPSBkb2NFbC5zY3JvbGxUb3AgKyBkb2NFbC5jbGllbnRIZWlnaHQ7XG4gICAgICBjb25zdCBkcm9wZG93bkhlaWdodCA9XG4gICAgICAgIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgPiB0aGlzLmRyb3Bkb3duSGVpZ2h0ID8gdGhpcy5kcm9wZG93bkhlaWdodCA6IHRoaXMuZHJvcGRvd25NYXhIZWlnaHQ7XG4gICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duSGVpZ2h0KCk7XG4gICAgICBpZiAoZWxQb3NpdGlvbiArIGRyb3Bkb3duSGVpZ2h0ID49IGJvdHRvbSkge1xuICAgICAgICB0aGlzLnRvcCA9IHNlbGVjdFNwYW4ub2Zmc2V0SGVpZ2h0IC0gZHJvcGRvd25IZWlnaHQgLSB0aGlzLmZpbHRlckhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9wID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBcHBlbmRlZFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgc2VsZWN0UmVjdDogQ2xpZW50UmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gc2VsZWN0UmVjdC50b3AgKyBzY3JvbGxUb3A7XG4gICAgICBjb25zdCBoZWlnaHQgPSBzZWxlY3RSZWN0LmhlaWdodDtcbiAgICAgIGNvbnN0IGRyb3Bkb3duSGVpZ2h0ID1cbiAgICAgICAgdGhpcy5kcm9wZG93bk1heEhlaWdodCA+IHRoaXMuZHJvcGRvd25IZWlnaHQgPyB0aGlzLmRyb3Bkb3duSGVpZ2h0IDogdGhpcy5kcm9wZG93bk1heEhlaWdodDtcblxuICAgICAgdGhpcy5sZWZ0ID0gc2VsZWN0UmVjdC5sZWZ0O1xuICAgICAgaWYgKFxuICAgICAgICBvZmZzZXRUb3AgKyBkcm9wZG93bkhlaWdodCArIHRoaXMuZmlsdGVySGVpZ2h0ID5cbiAgICAgICAgc2Nyb2xsVG9wICsgdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICApIHtcbiAgICAgICAgdGhpcy50b3AgPSBvZmZzZXRUb3AgLSBkcm9wZG93bkhlaWdodCArIGhlaWdodCAtIHRoaXMuZmlsdGVySGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3AgPSBvZmZzZXRUb3A7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kRHJvcGRvd24oKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuZHJvcGRvd24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChib2R5LCBkcm9wZG93bik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRmlsdGVyV2lkdGgoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlcklucHV0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXRXaWR0aCA9XG4gICAgICAgIHZhbHVlLmxlbmd0aCA9PT0gMCA/IDEgKyB0aGlzLnBsYWNlaG9sZGVyVmlldy5sZW5ndGggKiAxMCA6IDEgKyB2YWx1ZS5sZW5ndGggKiAxMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==