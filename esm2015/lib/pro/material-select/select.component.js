/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, forwardRef, ElementRef, HostListener, Renderer2, Inject, PLATFORM_ID, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectDropdownComponent } from './select-dropdown.component';
import { OptionList } from './option-list';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
/** @type {?} */
export const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => SelectComponent)),
    multi: true
};
export class SelectComponent {
    // Angular lifecycle hooks.
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} document
     * @param {?} platformId
     * @param {?} cdRef
     */
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
        this.optionHeight = 37;
        this.enableSelectAll = true;
        this.selectAllLabel = 'Select all';
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
            DOWN: 40
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
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * Event handlers. *
     * @param {?} $event
     * @return {?}
     */
    closeSelect($event) {
        if (!this.isChild($event.target) &&
            this.isOpen && this.dropdownAnimationDone &&
            $event.target !== this.el.nativeElement) {
            this.closeDropdown();
            this.updateLabelState();
            this.clearFilterInput();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.placeholderView = this.placeholder;
        this.updateFilterHeight();
        this.updateDropdownHeight();
        this.updateLabelState();
        if (this.highlightFirst) {
            this.optionList.highlightFirst = true;
        }
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
        if (this.multiple && this.enableSelectAll) {
            // tslint:disable-next-line:max-line-length
            this.dropdownMaxHeight = this.visibleOptions ? this.optionHeight * (this.visibleOptions + 1) : this.optionHeight * (this.visibleOptionsDefault + 1);
            this.dropdownHeight = this.optionHeight * (this.optionList.options.length + 1);
        }
        else {
            // tslint:disable-next-line:max-line-length
            this.dropdownMaxHeight = this.visibleOptions ? this.optionHeight * this.visibleOptions : this.optionHeight * this.visibleOptionsDefault;
            this.dropdownHeight = this.optionHeight * this.optionList.options.length;
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
        this.setArrowUpIcon();
        this.setArrowDownIcon();
        this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].lastChild, 'visibility', 'hidden');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('options')) {
            this.updateOptionsList(changes.options.currentValue);
            this.updateState();
            this.updateDropdownHeight();
            this.appendToBody ? this._updateAppendedPosition() : this.updatePosition();
            this.changed.emit({
                previousValue: changes.options.previousValue,
                currentValue: changes.options.currentValue
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
     * @return {?}
     */
    setArrowUpIcon() {
        /** @type {?} */
        const div = this.renderer.createElement('div');
        this.renderer.appendChild(this.selectionSpan.nativeElement.children[0], div);
        this.selectionSpan.nativeElement.children[0].lastChild.innerHTML = '&#x25BC;';
        this.renderer.addClass(this.selectionSpan.nativeElement.children[0].lastChild, 'toggle');
    }
    /**
     * @return {?}
     */
    setArrowDownIcon() {
        /** @type {?} */
        const div = this.renderer.createElement('div');
        this.renderer.appendChild(this.selectionSpan.nativeElement.children[0], div);
        this.selectionSpan.nativeElement.children[0].lastChild.innerHTML = '&#x25B2;';
        this.renderer.addClass(this.selectionSpan.nativeElement.children[0].lastChild, 'toggle');
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
        if (this.isChild(event.target)) {
            this.selectContainerClicked = true;
            this.openDropdown();
            this.updateLabelState();
        }
    }
    /**
     * @return {?}
     */
    onSelectContainerFocus() {
        this.labelActive = true;
        this.openDropdown();
    }
    /**
     * @return {?}
     */
    onSelectContainerBlur() {
        this.updateLabelState();
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
        this.updateLabelState();
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
        else if (typeof v === 'string' ||
            typeof v === 'number' ||
            typeof v === 'boolean') {
            v = [v];
        }
        else if (!Array.isArray(v)) {
            throw new TypeError('Value must be a string or an array.');
        }
        this.optionList.value = v;
        this._value = v;
        this.updateState();
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
        if (!value) {
            this.hasSelected = false;
        }
        this.updateLabelState();
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
        this.optionList = new OptionList(options);
        this.optionList.value = this._value;
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
        this.renderer.setStyle(this.el.nativeElement, 'z-index', '1000');
        if (!this.isOpen) {
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].lastChild, 'visibility', 'visible');
            // tslint:disable-next-line:max-line-length
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].children[this.selectionSpan.nativeElement.children[0].children.length - 2], 'visibility', 'hidden');
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
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].lastChild, 'visibility', 'hidden');
            // tslint:disable-next-line:max-line-length
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].children[this.selectionSpan.nativeElement.children[0].children.length - 2], 'visibility', 'visible');
        }
        if (this.isOpen) {
            this.clearFilterInput();
            this.isOpen = false;
            if (focus) {
                this.focus();
            }
            this.closed.emit(this);
        }
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
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
            this.hasSelected = true;
            this.updateLabelState();
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
                this.updateLabelState();
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
            this.optionList.filtered.forEach((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
                this.selectOption(option);
            }));
        }
        else {
            this.optionList.filtered.forEach((/**
             * @param {?} option
             * @return {?}
             */
            (option) => {
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
                this.updateLabelState();
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
            if (this.hasSelected &&
                this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
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
        /** @type {?} */
        const docEl = document.documentElement;
        /** @type {?} */
        let elPosition = 0;
        if (this.isBrowser) {
            elPosition = this.el.nativeElement.getBoundingClientRect().bottom + this.document.documentElement.scrollTop;
        }
        /** @type {?} */
        const selectSpan = this.selectionSpan.nativeElement;
        this.left = selectSpan.offsetLeft;
        /** @type {?} */
        const bottom = docEl.scrollTop + docEl.clientHeight;
        /** @type {?} */
        const dropdownHeight = this.dropdownMaxHeight > this.dropdownHeight ? this.dropdownHeight : this.dropdownMaxHeight;
        if (elPosition + dropdownHeight >= bottom) {
            this.top = selectSpan.offsetHeight - dropdownHeight - this.filterHeight;
        }
        else {
            this.top = 0;
        }
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
            if (offsetTop + dropdownHeight + this.filterHeight > scrollTop + this.document.documentElement.clientHeight) {
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
                value.length === 0
                    ? 1 + this.placeholderView.length * 10
                    : 1 + value.length * 10;
        }
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-select',
                template: "<label *ngIf=\"label !== ''\" [ngClass]=\"{'active': labelActive }\">\n  {{label}}\n</label>\n<div\n  #selection\n  [attr.tabindex]=\"disabled ? null : 0\"\n  [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'disabled': disabled}\"\n  [tabindex]=\"tabindex\"\n  (mousedown)=\"onSelectContainerClick($event)\"\n  (focus)=\"onSelectContainerFocus()\"\n  (blur)=\"onSelectContainerBlur()\"\n  (keydown)=\"onSelectContainerKeydown($event)\"\n  (window:resize)=\"onWindowResize()\">\n\n  <div class=\"single form-control\"\n    *ngIf=\"!multiple\">\n    <div class=\"value\"\n      *ngIf=\"optionList.hasSelected()\">\n      {{optionList.selection[0].label}}\n    </div>\n    <div class=\"placeholder\"\n      *ngIf=\"!optionList.hasSelected()\">\n      {{placeholderView}}\n    </div>\n    <div #clear class=\"clear\"\n      *ngIf=\"allowClear && hasSelected\"\n      (mousedown)=\"onClearSelectionClick($event)\">\n      &#x2715;\n    </div>\n  </div>\n\n  <div class=\"multiple form-control\"\n      *ngIf=\"multiple\">\n      <div class=\"placeholder\"\n        *ngIf=\"!optionList.hasSelected()\">\n        {{placeholderView}}\n      </div>\n\n      <div [ngStyle]=\"allowClear && { 'width.%': 90}\" class=\"option\">\n        <span *ngFor=\"let option of optionList.selection\">\n          {{option.label}}<span class=\"deselect-option\">,</span>\n        </span>\n      </div>\n\n      <div #clear class=\"clear\"\n      *ngIf=\"allowClear && hasSelected\"\n      (mousedown)=\"onClearSelectionClick($event)\">\n      &#x2715;\n    </div>\n\n  </div>\n</div>\n<mdb-select-dropdown\n  *ngIf=\"isOpen\"\n  #dropdown\n  [enableSelectAll]=\"enableSelectAll\"\n  [multiple]=\"multiple\"\n  [dropdownHeight]=\"dropdownHeight\"\n  [dropdownMaxHeight]=\"dropdownMaxHeight\"\n  [optionHeight]=\"optionHeight\"\n  [optionList]=\"optionList\"\n  [notFoundMsg]=\"notFoundMsg\"\n  [customClass]=\"customClass\"\n  [highlightColor]=\"highlightColor\"\n  [highlightTextColor]=\"highlightTextColor\"\n  [filterEnabled]=\"filterEnabled\"\n  [placeholder]=\"filterPlaceholder\"\n  [selectAllLabel]=\"selectAllLabel\"\n  [top]=\"top\"\n  [left]=\"left\"\n  [width]=\"width\"\n  (close)=\"onDropdownClose($event)\"\n  (optionClicked)=\"onDropdownOptionClicked($event)\"\n  (singleFilterClick)=\"onSingleFilterClick()\"\n  (singleFilterInput)=\"onSingleFilterInput($event)\"\n  (singleFilterKeydown)=\"onSingleFilterKeydown($event)\"\n  (selectAll)=\"onSelectAll($event)\"\n  (animationDone)=\"onDropdownAnimationDone()\"\n  (animationStart)=\"onDropdownAnimationStart()\">\n</mdb-select-dropdown>\n",
                providers: [SELECT_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
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
    visibleOptions: [{ type: Input }],
    optionHeight: [{ type: Input }],
    tabindex: [{ type: Input }],
    enableSelectAll: [{ type: Input }],
    appendToBody: [{ type: Input }],
    selectAllLabel: [{ type: Input }],
    opened: [{ type: Output }],
    closed: [{ type: Output }],
    selected: [{ type: Output }],
    deselected: [{ type: Output }],
    noOptionsFound: [{ type: Output }],
    changed: [{ type: Output }],
    selectionSpan: [{ type: ViewChild, args: ['selection',] }],
    dropdown: [{ type: ViewChild, args: ['dropdown',] }],
    filterInput: [{ type: ViewChild, args: ['filterInput',] }],
    clearButton: [{ type: ViewChild, args: ['clear',] }],
    closeSelect: [{ type: HostListener, args: ['document:click', ['$event'],] }]
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
    SelectComponent.prototype.itemsBefore;
    /** @type {?} */
    SelectComponent.prototype.onChange;
    /** @type {?} */
    SelectComponent.prototype.onTouched;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sRUFDTixZQUFZLEVBRVosU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsVUFBVSxFQUNWLFlBQVksRUFDWixTQUFTLEVBR1QsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUd0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFOUQsTUFBTSxPQUFPLHFCQUFxQixHQUFxQjtJQUNyRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUM7SUFDOUMsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQVVELE1BQU0sT0FBTyxlQUFlOzs7Ozs7Ozs7SUFpRzFCLFlBQ1MsRUFBYyxFQUNkLFFBQW1CLEVBQ0EsUUFBYSxFQUNsQixVQUFrQixFQUMvQixLQUF3QjtRQUp6QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNBLGFBQVEsR0FBUixRQUFRLENBQUs7UUFFL0IsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFuR2xCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLGVBQVUs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MUIsNENBQWdDOztJQUNoQyxnQ0FBb0I7O0lBQ3BCLHdDQUErQjs7SUFDL0IseUNBQWdDOztJQUNoQyx1Q0FBMkI7O0lBQzNCLG1DQUEwQjs7SUFDMUIsMENBQWdDOztJQUNoQyx1Q0FBK0I7O0lBQy9CLHlDQUF1Qzs7SUFFdkMsaUNBQThEOztJQUM5RCxpQ0FBOEQ7O0lBQzlELG1DQUF3RTs7SUFDeEUscUNBQWtHOztJQUNsRyx5Q0FBNEU7O0lBQzVFLGtDQUF1Qzs7SUFFdkMsd0NBQWtEOztJQUNsRCxtQ0FBeUQ7O0lBQ3pELHNDQUFrRDs7SUFDbEQsc0NBQTRDOztJQUc1QywrQkFRRTs7SUFFRixpQ0FBd0I7O0lBQ3hCLHFDQUF1Qjs7SUFDdkIsd0NBQXNCOztJQUN0QixnREFBMEI7O0lBRTFCLHNDQUFvQjs7SUFDcEIsb0NBQW1COztJQUduQixtQ0FBaUI7O0lBQ2pCLGlDQUFlOztJQUNmLGtDQUFlOztJQUNmLDJDQUFxQjs7SUFDckIscUNBQW1COztJQUNuQiwwQ0FBcUI7O0lBQ3JCLHNDQUFvQjs7SUFDcEIsZ0RBQThCOztJQUU5Qix1Q0FBcUI7O0lBQ3JCLGlEQUErQjs7SUFFL0IsdUNBQWlCOztJQUNqQix5Q0FBdUI7O0lBQ3ZCLDRDQUEwQjs7SUFHMUIsZ0NBQWM7O0lBQ2QsOEJBQVk7O0lBQ1osK0JBQWE7O0lBRWIsc0NBQTZCOztJQUU3QixtQ0FBMEI7O0lBQzFCLG9DQUFxQjs7SUFtQm5CLDZCQUFxQjs7SUFDckIsbUNBQTBCOzs7OztJQUMxQixtQ0FBdUM7Ozs7O0lBRXZDLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRXhpc3RpbmdQcm92aWRlcixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgZm9yd2FyZFJlZixcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjIsXG4gIEFmdGVyVmlld0luaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNlbGVjdERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IElPcHRpb24gfSBmcm9tICcuL29wdGlvbi1pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi9vcHRpb24nO1xuaW1wb3J0IHsgT3B0aW9uTGlzdCB9IGZyb20gJy4vb3B0aW9uLWxpc3QnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IGNvbnN0IFNFTEVDVF9WQUxVRV9BQ0NFU1NPUjogRXhpc3RpbmdQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlbGVjdENvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtTRUxFQ1RfVkFMVUVfQUNDRVNTT1JdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcblxuZXhwb3J0IGNsYXNzIFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgQElucHV0KCkgb3B0aW9uczogQXJyYXk8SU9wdGlvbj47XG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoKSBhbGxvd0NsZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodFRleHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaWdobGlnaHRGaXJzdCA9IHRydWU7XG4gIEBJbnB1dCgpIG11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vRmlsdGVyID0gMDtcbiAgQElucHV0KCkgbm90Rm91bmRNc2cgPSAnTm8gcmVzdWx0cyBmb3VuZCc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIGZpbHRlclBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIGZpbHRlckVuYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgdmlzaWJsZU9wdGlvbnM6IG51bWJlcjtcbiAgQElucHV0KCkgb3B0aW9uSGVpZ2h0ID0gMzc7XG4gIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbCA9IHRydWU7XG4gIEBJbnB1dCgpIGFwcGVuZFRvQm9keTogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IGFsbCc7XG5cbiAgQE91dHB1dCgpIG9wZW5lZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8SU9wdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyPElPcHRpb24+KCk7XG4gIEBPdXRwdXQoKSBkZXNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8SU9wdGlvbiB8IElPcHRpb25bXT4gPSBuZXcgRXZlbnRFbWl0dGVyPElPcHRpb24gfCBJT3B0aW9uW10+KCk7XG4gIEBPdXRwdXQoKSBub09wdGlvbnNGb3VuZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZCgnc2VsZWN0aW9uJykgc2VsZWN0aW9uU3BhbjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd24nKSBkcm9wZG93bjogU2VsZWN0RHJvcGRvd25Db21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JykgZmlsdGVySW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2NsZWFyJykgY2xlYXJCdXR0b246IEVsZW1lbnRSZWY7XG5cbiAgLy8gQW5ndWxhciBsaWZlY3ljbGUgaG9va3MuXG4gIEtFWVM6IGFueSA9IHtcbiAgICBCQUNLU1BBQ0U6IDgsXG4gICAgVEFCOiA5LFxuICAgIEVOVEVSOiAxMyxcbiAgICBFU0M6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBVUDogMzgsXG4gICAgRE9XTjogNDBcbiAgfTtcblxuICBfdmFsdWU6IEFycmF5PGFueT4gPSBbXTtcbiAgb3B0aW9uTGlzdDogT3B0aW9uTGlzdDtcbiAgb3B0aW9uc0xlbmd0aDogbnVtYmVyO1xuICB2aXNpYmxlT3B0aW9uc0RlZmF1bHQgPSA0O1xuICAvLyBTZWxlY3Rpb24gc3RhdGUgdmFyaWFibGVzLlxuICBoYXNTZWxlY3RlZCA9IGZhbHNlO1xuICBpc0Jyb3dzZXI6IGJvb2xlYW47XG5cbiAgLy8gVmlldyBzdGF0ZSB2YXJpYWJsZXMuXG4gIGhhc0ZvY3VzID0gZmFsc2U7XG4gIGlzT3BlbiA9IGZhbHNlO1xuICBpc0JlbG93ID0gdHJ1ZTtcbiAgZmlsdGVySW5wdXRXaWR0aCA9IDE7XG4gIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgcGxhY2Vob2xkZXJWaWV3ID0gJyc7XG4gIGxhYmVsQWN0aXZlID0gZmFsc2U7XG4gIGRyb3Bkb3duQW5pbWF0aW9uRG9uZSA9IGZhbHNlO1xuXG4gIGNsZWFyQ2xpY2tlZCA9IGZhbHNlO1xuICBzZWxlY3RDb250YWluZXJDbGlja2VkID0gZmFsc2U7XG5cbiAgZmlsdGVySGVpZ2h0ID0gMDtcbiAgZHJvcGRvd25IZWlnaHQ6IG51bWJlcjtcbiAgZHJvcGRvd25NYXhIZWlnaHQ6IG51bWJlcjtcblxuICAvLyBXaWR0aCBhbmQgcG9zaXRpb24gZm9yIHRoZSBkcm9wZG93biBjb250YWluZXIuXG4gIHdpZHRoOiBudW1iZXI7XG4gIHRvcDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG5cbiAgaXRlbXNCZWZvcmU6IEFycmF5PGFueT4gPSBbXTtcblxuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICAvKiogRXZlbnQgaGFuZGxlcnMuICoqL1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcbiAgY2xvc2VTZWxlY3QoJGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5pc0NoaWxkKCRldmVudC50YXJnZXQpICYmXG4gICAgICB0aGlzLmlzT3BlbiAmJiB0aGlzLmRyb3Bkb3duQW5pbWF0aW9uRG9uZSAmJlxuICAgICAgJGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50XG4gICAgKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgICAgdGhpcy5jbGVhckZpbHRlcklucHV0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQW5ndWxhciBsaWZlY3ljbGUgaG9va3MuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJIZWlnaHQoKTtcbiAgICB0aGlzLnVwZGF0ZURyb3Bkb3duSGVpZ2h0KCk7XG4gICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKCk7XG5cbiAgICBpZiAodGhpcy5oaWdobGlnaHRGaXJzdCkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodEZpcnN0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJIZWlnaHQoKSB7XG4gICAgdGhpcy5maWx0ZXJFbmFibGVkID8gKHRoaXMuZmlsdGVySGVpZ2h0ID0gNzgpIDogKHRoaXMuZmlsdGVySGVpZ2h0ID0gMCk7XG4gIH1cblxuICB1cGRhdGVEcm9wZG93bkhlaWdodCgpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLmVuYWJsZVNlbGVjdEFsbCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgdGhpcy5kcm9wZG93bk1heEhlaWdodCA9IHRoaXMudmlzaWJsZU9wdGlvbnMgPyB0aGlzLm9wdGlvbkhlaWdodCAqICh0aGlzLnZpc2libGVPcHRpb25zICsgMSkgOiB0aGlzLm9wdGlvbkhlaWdodCAqICh0aGlzLnZpc2libGVPcHRpb25zRGVmYXVsdCArIDEpO1xuICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCA9IHRoaXMub3B0aW9uSGVpZ2h0ICogKHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmxlbmd0aCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICB0aGlzLmRyb3Bkb3duTWF4SGVpZ2h0ID0gdGhpcy52aXNpYmxlT3B0aW9ucyA/IHRoaXMub3B0aW9uSGVpZ2h0ICogdGhpcy52aXNpYmxlT3B0aW9ucyA6IHRoaXMub3B0aW9uSGVpZ2h0ICogdGhpcy52aXNpYmxlT3B0aW9uc0RlZmF1bHQ7XG4gICAgICB0aGlzLmRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5vcHRpb25IZWlnaHQgKiB0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgb25Ecm9wZG93bkFuaW1hdGlvbkRvbmUoKSB7XG4gICAgdGhpcy5kcm9wZG93bkFuaW1hdGlvbkRvbmUgPSB0cnVlO1xuICB9XG5cbiAgb25Ecm9wZG93bkFuaW1hdGlvblN0YXJ0KCkge1xuICAgIHRoaXMuZHJvcGRvd25BbmltYXRpb25Eb25lID0gZmFsc2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgIHRoaXMuc2V0QXJyb3dVcEljb24oKTtcbiAgICB0aGlzLnNldEFycm93RG93bkljb24oKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmxhc3RDaGlsZCwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbnMnKSkge1xuICAgICAgdGhpcy51cGRhdGVPcHRpb25zTGlzdChjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlKTtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25IZWlnaHQoKTtcbiAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5ID8gdGhpcy5fdXBkYXRlQXBwZW5kZWRQb3NpdGlvbigpIDogdGhpcy51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoe1xuICAgICAgICBwcmV2aW91c1ZhbHVlOiBjaGFuZ2VzLm9wdGlvbnMucHJldmlvdXNWYWx1ZSxcbiAgICAgICAgY3VycmVudFZhbHVlOiBjaGFuZ2VzLm9wdGlvbnMuY3VycmVudFZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ25vRmlsdGVyJykpIHtcbiAgICAgIGNvbnN0IG51bU9wdGlvbnM6IG51bWJlciA9IHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmxlbmd0aDtcbiAgICAgIGNvbnN0IG1pbk51bU9wdGlvbnM6IG51bWJlciA9IGNoYW5nZXNbJ25vRmlsdGVyJ10uY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5maWx0ZXJFbmFibGVkID0gbnVtT3B0aW9ucyA+PSBtaW5OdW1PcHRpb25zO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdwbGFjZWhvbGRlcicpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QXJyb3dVcEljb24oKSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLCBkaXYpO1xuICAgIHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmxhc3RDaGlsZC5pbm5lckhUTUwgPSAnJiN4MjVCQzsnO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zZWxlY3Rpb25TcGFuLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0ubGFzdENoaWxkLCAndG9nZ2xlJyk7XG4gIH1cblxuICBzZXRBcnJvd0Rvd25JY29uKCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSwgZGl2KTtcbiAgICB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5sYXN0Q2hpbGQuaW5uZXJIVE1MID0gJyYjeDI1QjI7JztcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmxhc3RDaGlsZCwgJ3RvZ2dsZScpO1xuICB9XG5cbiAgaXNDaGlsZChlbGVtbnQ6IGFueSkge1xuICAgIGxldCBub2RlID0gZWxlbW50LnBhcmVudE5vZGU7XG4gICAgd2hpbGUgKG5vZGUgIT0gbnVsbCkge1xuICAgICAgaWYgKG5vZGUgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uV2luZG93UmVzaXplKCkge1xuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgfVxuXG4gIC8vIFNlbGVjdCBjb250YWluZXIuXG5cbiAgb25TZWxlY3RDb250YWluZXJDbGljayhldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNDaGlsZChldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLnNlbGVjdENvbnRhaW5lckNsaWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0Q29udGFpbmVyRm9jdXMoKSB7XG4gICAgdGhpcy5sYWJlbEFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgfVxuXG4gIG9uU2VsZWN0Q29udGFpbmVyQmx1cigpIHtcbiAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcblxuICAgIGlmICghdGhpcy5pc09wZW4gJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdENvbnRhaW5lcktleWRvd24oZXZlbnQpO1xuICB9XG5cbiAgLy8gRHJvcGRvd24gY29udGFpbmVyLlxuXG4gIG9uRHJvcGRvd25PcHRpb25DbGlja2VkKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5tdWx0aXBsZSA/IHRoaXMudG9nZ2xlU2VsZWN0T3B0aW9uKG9wdGlvbikgOiB0aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICB9XG5cbiAgb25Ecm9wZG93bkNsb3NlKGZvY3VzOiBhbnkpIHtcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oZm9jdXMpO1xuICB9XG5cbiAgLy8gU2luZ2xlIGZpbHRlciBpbnB1dC5cbiAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICB0aGlzLnNlbGVjdENvbnRhaW5lckNsaWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgb25TaW5nbGVGaWx0ZXJJbnB1dCh0ZXJtOiBzdHJpbmcpIHtcbiAgICBjb25zdCBoYXNTaG93bjogYm9vbGVhbiA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXIodGVybSk7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5lbmFibGVTZWxlY3RBbGwpIHtcbiAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgPSAodGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmxlbmd0aCArIDEpICogdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgPSB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWQubGVuZ3RoICogdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgfVxuICAgIGlmICghaGFzU2hvd24pIHtcbiAgICAgIHRoaXMubm9PcHRpb25zRm91bmQuZW1pdCh0ZXJtKTtcbiAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgPSB0aGlzLm9wdGlvbkhlaWdodDtcbiAgICB9XG4gIH1cblxuICBvblNpbmdsZUZpbHRlcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaGFuZGxlU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudCk7XG4gIH1cblxuICAvLyBNdWx0aXBsZSBmaWx0ZXIgaW5wdXQuXG5cbiAgb25NdWx0aXBsZUZpbHRlcklucHV0KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUZpbHRlcldpZHRoKCk7XG4gICAgY29uc3QgdGVybTogc3RyaW5nID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IGhhc1Nob3duOiBib29sZWFuID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcih0ZXJtKTtcbiAgICBpZiAoIWhhc1Nob3duKSB7XG4gICAgICB0aGlzLm5vT3B0aW9uc0ZvdW5kLmVtaXQodGVybSk7XG4gICAgfVxuICB9XG5cbiAgb25NdWx0aXBsZUZpbHRlcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaGFuZGxlTXVsdGlwbGVGaWx0ZXJLZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIC8vIFNpbmdsZSBjbGVhciBzZWxlY3QuXG5cbiAgb25DbGVhclNlbGVjdGlvbkNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2xlYXJDbGlja2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5wbGFjZWhvbGRlclZpZXcgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKCk7XG4gIH1cblxuICAvLyBNdWx0aXBsZSBkZXNlbGVjdCBvcHRpb24uXG5cbiAgb25EZXNlbGVjdE9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5jbGVhckNsaWNrZWQgPSB0cnVlO1xuICAgIHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgfVxuXG4gIC8qKiBBUEkuICoqL1xuXG4gIC8vIFRPRE8gZml4IGlzc3VlcyB3aXRoIGdsb2JhbCBjbGljay9rZXkgaGFuZGxlciB0aGF0IGNsb3NlcyB0aGUgZHJvcGRvd24uXG4gIG9wZW4oKSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbiggKCkgPT4ge1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IHN0cmluZyB8IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZSA/IHRoaXMuX3ZhbHVlIDogdGhpcy5fdmFsdWVbMF07XG4gIH1cblxuICBzZXQgdmFsdWUodjogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBpZiAodHlwZW9mIHYgPT09ICd1bmRlZmluZWQnIHx8IHYgPT09IG51bGwgfHwgdiA9PT0gJycpIHtcbiAgICAgIHYgPSBbXTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdHlwZW9mIHYgPT09ICdzdHJpbmcnIHx8XG4gICAgICB0eXBlb2YgdiA9PT0gJ251bWJlcicgfHxcbiAgICAgIHR5cGVvZiB2ID09PSAnYm9vbGVhbidcbiAgICApIHtcbiAgICAgIHYgPSBbdl07XG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBhcnJheS4nKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbkxpc3QudmFsdWUgPSB2O1xuICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gIH1cblxuICBzZWxlY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMub3B0aW9uTGlzdC5nZXRPcHRpb25zQnlWYWx1ZSh2YWx1ZSkuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UgbWV0aG9kcy4gKiovXG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuaGFzU2VsZWN0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5oYXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5vcHRpb25MaXN0LnZhbHVlO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUoKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlclZpZXcgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMudXBkYXRlRmlsdGVyV2lkdGgoKTtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIEluaXRpYWxpemF0aW9uLiAqKi9cblxuICB1cGRhdGVPcHRpb25zTGlzdChvcHRpb25zOiBBcnJheTxJT3B0aW9uPikge1xuICAgIHRoaXMub3B0aW9uTGlzdCA9IG5ldyBPcHRpb25MaXN0KG9wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9uTGlzdC52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB1cGRhdGVMYWJlbFN0YXRlKCkge1xuICAgIGlmICghdGhpcy5wbGFjZWhvbGRlciAmJiAhdGhpcy5oYXNTZWxlY3RlZCAmJiAhdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMubGFiZWxBY3RpdmUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqIERyb3Bkb3duLiAqKi9cbiAgdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNPcGVuID8gdGhpcy5jbG9zZURyb3Bkb3duKHRydWUpIDogdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBvcGVuRHJvcGRvd24oKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgJzEwMDAnKTtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmxhc3RDaGlsZCwgJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblt0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGggLSAyXSwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cbiAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2FwcGVuZERyb3Bkb3duKCk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gICAgICB0aGlzLmFwcGVuZFRvQm9keSA/IHRoaXMuX3VwZGF0ZUFwcGVuZGVkUG9zaXRpb24oKSA6IHRoaXMudXBkYXRlUG9zaXRpb24oKTtcblxuICAgICAgdGhpcy5vcGVuZWQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY2xvc2VEcm9wZG93bihmb2N1czogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5ICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKCdib2R5JywgdGhpcy5kcm9wZG93bi5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3Q7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4Jyk7XG4gICAgY29udGFpbmVyLnJlbW92ZSgnZmFkZUluU2VsZWN0Jyk7XG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmxhc3RDaGlsZCwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlbltcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlbi5sZW5ndGggLSAyXG4gICAgICAgIF0sXG4gICAgICAgICd2aXNpYmlsaXR5JyxcbiAgICAgICAgJ3Zpc2libGUnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgdGhpcy5jbGVhckZpbHRlcklucHV0KCk7XG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgaWYgKGZvY3VzKSB7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2VkLmVtaXQodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFNlbGVjdC4gKiovXG5cbiAgc2VsZWN0T3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5zZWxlY3Qob3B0aW9uLCB0aGlzLm11bHRpcGxlKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XG4gICAgICB0aGlzLnNlbGVjdGVkLmVtaXQob3B0aW9uLndyYXBwZWRPcHRpb24pO1xuICAgICAgdGhpcy5oYXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlICYmICFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZGVzZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZGVzZWxlY3Qob3B0aW9uKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMucGxhY2Vob2xkZXI7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbkxpc3Quc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmhhc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kZXNlbGVjdGVkLmVtaXQob3B0aW9uLndyYXBwZWRPcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbjogQXJyYXk8T3B0aW9uPiA9IHRoaXMub3B0aW9uTGlzdC5zZWxlY3Rpb247XG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuY2xlYXJTZWxlY3Rpb24oKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XG4gICAgICB0aGlzLmhhc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3RlZC5lbWl0KHNlbGVjdGlvblswXS53cmFwcGVkT3B0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3RlZC5lbWl0KFxuICAgICAgICAgIHNlbGVjdGlvbi5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24ud3JhcHBlZE9wdGlvbjtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdE9wdGlvbihvcHRpb246IE9wdGlvbikge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA/IHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKSA6IHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gIH1cblxuICBzZWxlY3RIaWdobGlnaHRlZE9wdGlvbigpIHtcbiAgICBjb25zdCBvcHRpb246IE9wdGlvbiA9IHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHRlZE9wdGlvbjtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiBvcHRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMudG9nZ2xlU2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgfVxuICAgIGlmICghdGhpcy5tdWx0aXBsZSAmJiBvcHRpb24gIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICB0aGlzLmNsb3NlRHJvcGRvd24odHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZGVzZWxlY3RMYXN0KCkge1xuICAgIGNvbnN0IHNlbDogQXJyYXk8T3B0aW9uPiA9IHRoaXMub3B0aW9uTGlzdC5zZWxlY3Rpb247XG5cbiAgICBpZiAoc2VsLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IG9wdGlvbjogT3B0aW9uID0gc2VsW3NlbC5sZW5ndGggLSAxXTtcbiAgICAgIHRoaXMuZGVzZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgIHRoaXMuc2V0TXVsdGlwbGVGaWx0ZXJJbnB1dChvcHRpb24ubGFiZWwgKyAnICcpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0QWxsKGlzU2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmZvckVhY2goIChvcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RPcHRpb24ob3B0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWQuZm9yRWFjaCggKG9wdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKiogRmlsdGVyLiAqKi9cblxuICBjbGVhckZpbHRlcklucHV0KCkge1xuICAgIHRoaXMuZHJvcGRvd24uY2xlYXJGaWx0ZXJJbnB1dCgpO1xuICAgIHRoaXMudXBkYXRlRHJvcGRvd25IZWlnaHQoKTtcbiAgfVxuXG4gIHNldE11bHRpcGxlRmlsdGVySW5wdXQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNlbGVjdENvbnRhaW5lcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIGlmIChrZXkgPT09IHRoaXMuS0VZUy5FU0MgfHwgKGtleSA9PT0gdGhpcy5LRVlTLlVQICYmIGV2ZW50LmFsdEtleSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKHRydWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSB0aGlzLktFWVMuVEFCKSB7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IHRoaXMuS0VZUy5FTlRFUikge1xuICAgICAgICB0aGlzLnNlbGVjdEhpZ2hsaWdodGVkT3B0aW9uKCk7XG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuZW5hYmxlU2VsZWN0QWxsKSB7XG4gICAgICAgICAgdGhpcy5kcm9wZG93bi51cGRhdGVTZWxlY3RBbGxTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gdGhpcy5LRVlTLlVQKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHRQcmV2aW91c09wdGlvbigpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gdGhpcy5LRVlTLkRPV04pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodE5leHRPcHRpb24oKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXG4gICAgICAgIGtleSA9PT0gdGhpcy5LRVlTLkVOVEVSIHx8XG4gICAgICAgIGtleSA9PT0gdGhpcy5LRVlTLlNQQUNFIHx8XG4gICAgICAgIChrZXkgPT09IHRoaXMuS0VZUy5ET1dOICYmIGV2ZW50LmFsdEtleSlcbiAgICAgICkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIGhhbmRsZU11bHRpcGxlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQud2hpY2g7XG5cbiAgICBpZiAoa2V5ID09PSB0aGlzLktFWVMuQkFDS1NQQUNFKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuaGFzU2VsZWN0ZWQgJiZcbiAgICAgICAgdGhpcy5maWx0ZXJFbmFibGVkICYmXG4gICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9PT0gJydcbiAgICAgICkge1xuICAgICAgICB0aGlzLmRlc2VsZWN0TGFzdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVNpbmdsZUZpbHRlcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LndoaWNoO1xuXG4gICAgaWYgKFxuICAgICAga2V5ID09PSB0aGlzLktFWVMuRVNDIHx8XG4gICAgICBrZXkgPT09IHRoaXMuS0VZUy5UQUIgfHxcbiAgICAgIGtleSA9PT0gdGhpcy5LRVlTLlVQIHx8XG4gICAgICBrZXkgPT09IHRoaXMuS0VZUy5ET1dOIHx8XG4gICAgICBrZXkgPT09IHRoaXMuS0VZUy5FTlRFUlxuICAgICkge1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICAvKiogVmlldy4gKiovXG5cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5oYXNGb2N1cyA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICB9XG5cbiAgYmx1cigpIHtcbiAgICB0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3Rpb25TcGFuLm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgdXBkYXRlV2lkdGgoKSB7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oKSB7XG4gICAgY29uc3QgZG9jRWw6IGFueSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICBsZXQgZWxQb3NpdGlvbiA9IDA7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBlbFBvc2l0aW9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSArIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0U3BhbiA9IHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMubGVmdCA9IHNlbGVjdFNwYW4ub2Zmc2V0TGVmdDtcbiAgICBjb25zdCBib3R0b206IGFueSA9IGRvY0VsLnNjcm9sbFRvcCArIGRvY0VsLmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBkcm9wZG93bkhlaWdodCA9IHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgPiB0aGlzLmRyb3Bkb3duSGVpZ2h0ID8gdGhpcy5kcm9wZG93bkhlaWdodCA6IHRoaXMuZHJvcGRvd25NYXhIZWlnaHQ7XG5cbiAgICBpZiAoZWxQb3NpdGlvbiArIGRyb3Bkb3duSGVpZ2h0ID49IGJvdHRvbSkge1xuICAgICAgdGhpcy50b3AgPSBzZWxlY3RTcGFuLm9mZnNldEhlaWdodCAtIGRyb3Bkb3duSGVpZ2h0IC0gdGhpcy5maWx0ZXJIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9wID0gMDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBcHBlbmRlZFBvc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3Qgc2VsZWN0UmVjdDogQ2xpZW50UmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCB0aGlzLmRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gc2VsZWN0UmVjdC50b3AgKyBzY3JvbGxUb3A7XG4gICAgICBjb25zdCBoZWlnaHQgPSBzZWxlY3RSZWN0LmhlaWdodDtcbiAgICAgIGNvbnN0IGRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5kcm9wZG93bk1heEhlaWdodCA+IHRoaXMuZHJvcGRvd25IZWlnaHQgPyB0aGlzLmRyb3Bkb3duSGVpZ2h0IDogdGhpcy5kcm9wZG93bk1heEhlaWdodDtcblxuICAgICAgdGhpcy5sZWZ0ID0gc2VsZWN0UmVjdC5sZWZ0O1xuICAgICAgaWYgKG9mZnNldFRvcCArIGRyb3Bkb3duSGVpZ2h0ICsgdGhpcy5maWx0ZXJIZWlnaHQgPiBzY3JvbGxUb3AgKyB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgdGhpcy50b3AgPSBvZmZzZXRUb3AgLSBkcm9wZG93bkhlaWdodCArIGhlaWdodCAtIHRoaXMuZmlsdGVySGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50b3AgPSBvZmZzZXRUb3A7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kRHJvcGRvd24oKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBib2R5ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuZHJvcGRvd24uX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChib2R5LCBkcm9wZG93bik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlRmlsdGVyV2lkdGgoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmZpbHRlcklucHV0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgdmFsdWU6IHN0cmluZyA9IHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZTtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXRXaWR0aCA9XG4gICAgICAgIHZhbHVlLmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gMSArIHRoaXMucGxhY2Vob2xkZXJWaWV3Lmxlbmd0aCAqIDEwXG4gICAgICAgICAgOiAxICsgdmFsdWUubGVuZ3RoICogMTA7XG4gICAgfVxuICB9XG59XG4iXX0=