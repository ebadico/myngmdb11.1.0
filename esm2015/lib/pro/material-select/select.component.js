import { __decorate, __metadata, __param } from "tslib";
import { Component, Input, OnChanges, OnInit, Output, EventEmitter, ExistingProvider, ViewChild, ViewEncapsulation, forwardRef, ElementRef, Renderer2, AfterViewInit, SimpleChanges, Inject, PLATFORM_ID, ChangeDetectorRef, ChangeDetectionStrategy, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectDropdownComponent } from './select-dropdown.component';
import { OptionList } from './option-list';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, SPACE, TAB, UP_ARROW, } from '../../free/utils/keyboard-navigation';
export const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef(() => SelectComponent),
    multi: true,
};
let SelectComponent = class SelectComponent {
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
        this.tabindex = 0;
        this.enableSelectAll = true;
        this.selectAllLabel = 'Select all';
        this.outline = false;
        this._required = false;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.selected = new EventEmitter();
        this.deselected = new EventEmitter();
        this.noOptionsFound = new EventEmitter();
        this.changed = new EventEmitter();
        this._value = [];
        this.visibleOptionsDefault = 4;
        // Selection state variables.
        this.hasSelected = false;
        // View state variables.
        this.canOpenOnFocus = true;
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
        this.OUTLINE_DROPDOWN_BOTTOM_OFFSET = 5;
        this.OUTLINE_DROPDOWN_TOP_OFFSET = -20;
        this.itemsBefore = [];
        this._focused = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this._compareWith = (o1, o2) => o1 === o2;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = value;
    }
    get compareWith() {
        return this._compareWith;
    }
    set compareWith(fn) {
        if (typeof fn !== 'function') {
            throw Error('compareWith must be a function');
        }
        this._compareWith = fn;
    }
    get focused() {
        return this._focused;
    }
    ngOnInit() {
        this.placeholderView = this.placeholder;
        this.updateFilterHeight();
        this.updateDropdownHeight();
        if (this.label) {
            this.updateLabelState();
        }
        this.labelRef = this._getLabelRef();
        this.prefixRef = this._getPrefixRef();
        if (this.labelRef) {
            this.updateLabelRefState();
        }
        if (this.highlightFirst) {
            this.optionList.highlightFirst = true;
        }
    }
    _getLabelRef() {
        const selectParentEl = this.el.nativeElement.parentNode;
        const labelRef = selectParentEl.querySelector('label');
        return labelRef;
    }
    _getPrefixRef() {
        const selectParentEl = this.el.nativeElement.parentNode;
        const prefixRef = selectParentEl.querySelector('.prefix');
        return prefixRef;
    }
    updateFilterHeight() {
        this.filterEnabled ? (this.filterHeight = 50) : (this.filterHeight = 0);
    }
    updateDropdownHeight() {
        if (this.multiple && this.enableSelectAll) {
            this.dropdownMaxHeight = this.visibleOptions
                ? this.optionHeight * (this.visibleOptions + 1)
                : this.optionHeight * (this.visibleOptionsDefault + 1);
            this.dropdownHeight = this.optionHeight * (this.optionList.options.length + 1);
        }
        else {
            this.dropdownMaxHeight = this.visibleOptions
                ? this.optionHeight * this.visibleOptions
                : this.optionHeight * this.visibleOptionsDefault;
            this.dropdownHeight = this.optionHeight * this.optionList.options.length;
        }
    }
    onDropdownAnimationDone() {
        this.dropdownAnimationDone = true;
    }
    onDropdownAnimationStart() {
        this.dropdownAnimationDone = false;
    }
    ngAfterViewInit() {
        this.updateState();
    }
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
            const numOptions = this.optionList.options.length;
            const minNumOptions = changes['noFilter'].currentValue;
            this.filterEnabled = numOptions >= minNumOptions;
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.updateState();
        }
    }
    isChild(elemnt) {
        let node = elemnt.parentNode;
        while (node != null) {
            if (node === this.el.nativeElement) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    onWindowResize() {
        this.updateWidth();
    }
    // Select container.
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
    onSelectContainerFocus() {
        this._focused = true;
        if (this.label) {
            this.labelActive = true;
        }
        if (this.labelRef) {
            this.renderer.addClass(this.labelRef, 'active');
            this.renderer.addClass(this.labelRef, 'focused');
        }
        if (this.prefixRef) {
            this.renderer.addClass(this.prefixRef, 'focused');
        }
        if (this.canOpenOnFocus) {
            this.openDropdown();
        }
        this.canOpenOnFocus = true;
    }
    onSelectContainerBlur() {
        this._focused = false;
        this.canOpenOnFocus = true;
        if (this.label) {
            this.updateLabelState();
        }
        if (this.labelRef) {
            this.updateLabelRefState();
            this.renderer.removeClass(this.labelRef, 'focused');
        }
        if (this.prefixRef) {
            this.renderer.removeClass(this.prefixRef, 'focused');
        }
        if (!this.isOpen && !this.disabled) {
            this.onTouched();
        }
    }
    onSelectContainerKeydown(event) {
        this.handleSelectContainerKeydown(event);
    }
    // Dropdown container.
    onDropdownOptionClicked(option) {
        this.multiple ? this.toggleSelectOption(option) : this.selectOption(option);
    }
    onDropdownClose(focus) {
        this.closeDropdown(focus);
    }
    // Single filter input.
    onSingleFilterClick() {
        this.selectContainerClicked = true;
    }
    onSingleFilterInput(term) {
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
    onSingleFilterKeydown(event) {
        this.handleSingleFilterKeydown(event);
    }
    // Multiple filter input.
    onMultipleFilterInput(event) {
        if (!this.isOpen) {
            this.openDropdown();
        }
        this.updateFilterWidth();
        const term = event.target.value;
        const hasShown = this.optionList.filter(term);
        if (!hasShown) {
            this.noOptionsFound.emit(term);
        }
    }
    onMultipleFilterKeydown(event) {
        this.handleMultipleFilterKeydown(event);
    }
    // Single clear select.
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
    onDeselectOptionClick(option) {
        this.clearClicked = true;
        this.deselectOption(option);
    }
    /** API. **/
    open() {
        Promise.resolve().then(() => {
            this.openDropdown();
        });
    }
    close() {
        this.closeDropdown();
    }
    get value() {
        return this.multiple ? this._value : this._value[0];
    }
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
    _setSelection(value) {
        this.optionList.clearSelection();
        if (this.multiple && value) {
            value.forEach((selectionValue) => {
                this._selectByValue(selectionValue);
            });
        }
        else {
            this._selectByValue(value[0]);
        }
    }
    _selectByValue(value) {
        const matchingOption = this.optionList.options.find((option) => {
            return !option.selected && option.value !== null && this._compareWith(option.value, value);
        });
        if (matchingOption) {
            this.optionList.select(matchingOption);
        }
    }
    clear() {
        this.clearSelection();
    }
    select(value) {
        this.optionList.getOptionsByValue(value).forEach(option => {
            this.selectOption(option);
        });
    }
    /** ControlValueAccessor interface methods. **/
    writeValue(value) {
        this.value = value;
        this.hasSelected = true;
        if (!value && value !== 0) {
            this.clearSelection();
            this.hasSelected = false;
        }
        if (this.label) {
            this.updateLabelState();
        }
        if (this.labelRef) {
            this.updateLabelRefState();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this.cdRef.markForCheck();
    }
    valueChanged() {
        this._value = this.optionList.value;
        this.updateState();
        this.onChange(this.value);
    }
    updateState() {
        this.placeholderView = this.placeholder;
        this.updateFilterWidth();
        this.cdRef.markForCheck();
    }
    /** Initialization. **/
    updateOptionsList(options) {
        this.optionList = new OptionList(options, this.multiple);
        this._setSelection(this._value);
        this.cdRef.markForCheck();
    }
    updateLabelState() {
        if (!this.placeholder && !this.hasSelected && !this.isOpen) {
            this.labelActive = false;
        }
        else {
            this.labelActive = true;
        }
    }
    updateLabelRefState() {
        if (!this.placeholder && !this.hasSelected && !this.isOpen) {
            this.renderer.removeClass(this.labelRef, 'active');
        }
        else {
            this.renderer.addClass(this.labelRef, 'active');
        }
    }
    /** Dropdown. **/
    toggleDropdown() {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    }
    openDropdown() {
        // we should not set higher z-index value here
        // because dropdown added with appendToBody will be overlaped by select input
        this.renderer.setStyle(this.el.nativeElement, 'z-index', '1000');
        if (!this.isOpen) {
            this.isOpen = true;
            if (this.appendToBody) {
                setTimeout(() => {
                    this._appendDropdown();
                }, 0);
            }
            this.updateWidth();
            this.appendToBody ? this._updateAppendedPosition() : this.updatePosition();
            ['click', 'touchstart'].forEach((ev) => {
                this.documentClickFun = this.renderer.listen('document', ev, (event) => {
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
                });
            });
            this.opened.emit(this);
        }
        this.cdRef.markForCheck();
    }
    closeDropdown(focus = false) {
        if (this.appendToBody && this.isOpen) {
            this.renderer.removeChild('body', this.dropdown._elementRef.nativeElement);
        }
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
    /** Select. **/
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
    clearSelection() {
        const selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            this.hasSelected = false;
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map(option => {
                    return option.wrappedOption;
                }));
            }
        }
    }
    toggleSelectOption(option) {
        option.selected ? this.deselectOption(option) : this.selectOption(option);
    }
    selectHighlightedOption() {
        const option = this.optionList.highlightedOption;
        if (this.multiple && option !== null) {
            this.toggleSelectOption(option);
        }
        if (!this.multiple && option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
            this.canOpenOnFocus = false;
            this.selectionSpan.nativeElement.focus();
        }
    }
    deselectLast() {
        const sel = this.optionList.selection;
        if (sel.length > 0) {
            const option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    }
    onSelectAll(isSelected) {
        if (isSelected) {
            this.optionList.filtered
                .filter(option => !option.disabled)
                .forEach(option => {
                this.selectOption(option);
            });
        }
        else {
            this.optionList.filtered
                .filter(option => !option.disabled)
                .forEach(option => {
                this.deselectOption(option);
            });
        }
    }
    /** Filter. **/
    clearFilterInput() {
        this.dropdown.clearFilterInput();
        this.updateDropdownHeight();
    }
    setMultipleFilterInput(value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    }
    handleSelectContainerKeydown(event) {
        const key = event.keyCode;
        if (this.isOpen) {
            if (key === ESCAPE || (key === UP_ARROW && event.altKey)) {
                event.preventDefault();
                this.closeDropdown();
                this.canOpenOnFocus = false;
                this.selectionSpan.nativeElement.focus();
                if (this.label) {
                    this.updateLabelState();
                }
                if (this.labelRef) {
                    this.updateLabelRefState();
                }
            }
            else if (key === TAB) {
                // Restore focus from search input to select input. Ensures that the next
                // or previous element will be focused corretly on tab or shift-tab
                this.selectionSpan.nativeElement.focus();
                this.closeDropdown();
            }
            else if (key === ENTER) {
                this.selectHighlightedOption();
                if (this.multiple && this.enableSelectAll) {
                    this.dropdown.updateSelectAllState();
                }
            }
            else if (key === UP_ARROW) {
                event.preventDefault();
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
            }
            else if (key === DOWN_ARROW) {
                event.preventDefault();
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
            }
        }
        else {
            if (key === ENTER || key === SPACE || (key === DOWN_ARROW && event.altKey)) {
                event.preventDefault();
                this.openDropdown();
            }
        }
    }
    handleMultipleFilterKeydown(event) {
        const key = event.which;
        if (key === BACKSPACE) {
            if (this.hasSelected && this.filterEnabled && this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    }
    handleSingleFilterKeydown(event) {
        const key = event.which;
        if (key === ESCAPE || key === TAB || key === UP_ARROW || key === DOWN_ARROW || key === ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    }
    /** View. **/
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
    blur() {
        this.hasFocus = false;
        this.selectionSpan.nativeElement.blur();
    }
    updateWidth() {
        if (!this.multiple) {
            this.width = this.singleContainer.nativeElement.offsetWidth;
        }
        else {
            this.width = this.multipleContainer.nativeElement.offsetWidth;
        }
    }
    updatePosition() {
        setTimeout(() => {
            const docEl = this.document.documentElement;
            let elPosition = 0;
            if (this.isBrowser) {
                elPosition =
                    this.el.nativeElement.getBoundingClientRect().bottom +
                        this.document.documentElement.scrollTop;
            }
            const selectSpan = this.selectionSpan.nativeElement;
            const originHeight = this.outline
                ? this.OUTLINE_DROPDOWN_TOP_OFFSET
                : selectSpan.offsetHeight;
            this.left = selectSpan.offsetLeft;
            const bottom = docEl.scrollTop + docEl.clientHeight;
            const dropdownHeight = this.dropdownMaxHeight > this.dropdownHeight ? this.dropdownHeight : this.dropdownMaxHeight;
            this.updateDropdownHeight();
            if (elPosition + dropdownHeight >= bottom) {
                this.top = originHeight - dropdownHeight - this.filterHeight;
            }
            else {
                this.top = this.outline ? selectSpan.offsetHeight + this.OUTLINE_DROPDOWN_BOTTOM_OFFSET : 0;
            }
            this.cdRef.markForCheck();
        }, 0);
    }
    _updateAppendedPosition() {
        if (this.isBrowser) {
            const selectRect = this.el.nativeElement.getBoundingClientRect();
            const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
            const offsetTop = selectRect.top + scrollTop;
            const height = selectRect.height;
            const dropdownHeight = this.dropdownMaxHeight > this.dropdownHeight ? this.dropdownHeight : this.dropdownMaxHeight;
            this.left = selectRect.left;
            if (offsetTop + dropdownHeight + this.filterHeight >
                scrollTop + this.document.documentElement.clientHeight) {
                if (this.outline) {
                    this.top =
                        offsetTop - dropdownHeight + this.OUTLINE_DROPDOWN_TOP_OFFSET - this.filterHeight;
                }
                else {
                    this.top = offsetTop - dropdownHeight + height - this.filterHeight;
                }
            }
            else {
                this.top = this.outline
                    ? offsetTop + height + this.OUTLINE_DROPDOWN_BOTTOM_OFFSET
                    : offsetTop;
            }
        }
    }
    _appendDropdown() {
        if (this.isBrowser) {
            const body = this.document.querySelector('body');
            const dropdown = this.dropdown._elementRef.nativeElement;
            if (body) {
                this.renderer.appendChild(body, dropdown);
            }
        }
    }
    updateFilterWidth() {
        if (typeof this.filterInput !== 'undefined') {
            const value = this.filterInput.nativeElement.value;
            this.filterInputWidth =
                value.length === 0 ? 1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    }
};
SelectComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ChangeDetectorRef }
];
__decorate([
    Input(),
    __metadata("design:type", Array)
], SelectComponent.prototype, "options", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "customClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "allowClear", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "highlightColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SelectComponent.prototype, "highlightTextColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "highlightFirst", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "multiple", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "noFilter", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "notFoundMsg", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "filterPlaceholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "filterEnabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "filterAutocomplete", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SelectComponent.prototype, "visibleOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "optionHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "enableSelectAll", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SelectComponent.prototype, "appendToBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "selectAllLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "outline", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SelectComponent.prototype, "required", null);
__decorate([
    Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], SelectComponent.prototype, "compareWith", null);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SelectComponent.prototype, "opened", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SelectComponent.prototype, "closed", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SelectComponent.prototype, "selected", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SelectComponent.prototype, "deselected", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SelectComponent.prototype, "noOptionsFound", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SelectComponent.prototype, "changed", void 0);
__decorate([
    ViewChild('selection', { static: true }),
    __metadata("design:type", ElementRef)
], SelectComponent.prototype, "selectionSpan", void 0);
__decorate([
    ViewChild('dropdown'),
    __metadata("design:type", SelectDropdownComponent)
], SelectComponent.prototype, "dropdown", void 0);
__decorate([
    ViewChild('filterInput'),
    __metadata("design:type", ElementRef)
], SelectComponent.prototype, "filterInput", void 0);
__decorate([
    ViewChild('clear'),
    __metadata("design:type", ElementRef)
], SelectComponent.prototype, "clearButton", void 0);
__decorate([
    ViewChild('singleContainer'),
    __metadata("design:type", ElementRef)
], SelectComponent.prototype, "singleContainer", void 0);
__decorate([
    ViewChild('multipleContainer'),
    __metadata("design:type", ElementRef)
], SelectComponent.prototype, "multipleContainer", void 0);
SelectComponent = __decorate([
    Component({
        selector: 'mdb-select',
        template: "<label *ngIf=\"label !== ''\" [ngClass]=\"{ active: labelActive, focused: focused }\">\n  {{ label }}\n</label>\n<div\n  #selection\n  [attr.tabindex]=\"disabled ? -1 : tabindex\"\n  [ngClass]=\"{ open: isOpen, focus: hasFocus, below: isBelow, disabled: disabled }\"\n  (mousedown)=\"onSelectContainerClick($event)\"\n  (focus)=\"onSelectContainerFocus()\"\n  (blur)=\"onSelectContainerBlur()\"\n  (keydown)=\"onSelectContainerKeydown($event)\"\n  (window:resize)=\"onWindowResize()\"\n  [attr.role]=\"filterEnabled ? 'combobox' : 'listbox'\"\n  [attr.aria-disabled]=\"disabled\"\n  [attr.multiselectable]=\"multiple\"\n  [attr.aria-expanded]=\"isOpen\"\n  [attr.aria-required]=\"required\"\n  [attr.aria-haspopup]=\"true\"\n>\n  <div\n    #singleContainer\n    class=\"single form-control\"\n    *ngIf=\"!multiple\"\n    [ngClass]=\"{ focused: focused }\"\n  >\n    <div class=\"value\" *ngIf=\"optionList.hasSelected()\">\n      {{ optionList.selection[0].label }}\n    </div>\n    <div class=\"placeholder\" *ngIf=\"!optionList.hasSelected()\">\n      {{ placeholderView }}\n    </div>\n    <div\n      #clear\n      class=\"clear\"\n      *ngIf=\"allowClear && hasSelected\"\n      (mousedown)=\"onClearSelectionClick($event)\"\n    >\n      &#x2715;\n    </div>\n    <span class=\"mdb-select-toggle\" [ngClass]=\"{ focused: focused }\"></span>\n  </div>\n\n  <div\n    #multipleContainer\n    class=\"multiple form-control\"\n    *ngIf=\"multiple\"\n    [ngClass]=\"{ focused: focused }\"\n  >\n    <div class=\"placeholder\" *ngIf=\"!optionList.hasSelected()\">\n      {{ placeholderView }}\n    </div>\n\n    <div [ngStyle]=\"allowClear && { 'width.%': 90 }\" class=\"option\">\n      <span *ngFor=\"let option of optionList.selection\">\n        {{ option.label }}<span class=\"deselect-option\">,</span>\n      </span>\n    </div>\n\n    <div\n      #clear\n      class=\"clear\"\n      *ngIf=\"allowClear && hasSelected\"\n      (mousedown)=\"onClearSelectionClick($event)\"\n    >\n      &#x2715;\n    </div>\n\n    <span class=\"mdb-select-toggle\" [ngClass]=\"{ focused: focused }\"></span>\n  </div>\n</div>\n<mdb-select-dropdown\n  *ngIf=\"isOpen\"\n  #dropdown\n  [enableSelectAll]=\"enableSelectAll\"\n  [multiple]=\"multiple\"\n  [dropdownHeight]=\"dropdownHeight\"\n  [dropdownMaxHeight]=\"dropdownMaxHeight\"\n  [optionHeight]=\"optionHeight\"\n  [optionList]=\"optionList\"\n  [notFoundMsg]=\"notFoundMsg\"\n  [customClass]=\"customClass\"\n  [highlightColor]=\"highlightColor\"\n  [highlightTextColor]=\"highlightTextColor\"\n  [filterEnabled]=\"filterEnabled\"\n  [filterAutocomplete]=\"filterAutocomplete\"\n  [placeholder]=\"filterPlaceholder\"\n  [selectAllLabel]=\"selectAllLabel\"\n  [outline]=\"outline\"\n  [top]=\"top\"\n  [left]=\"left\"\n  [width]=\"width\"\n  (close)=\"onDropdownClose($event)\"\n  (optionClicked)=\"onDropdownOptionClicked($event)\"\n  (singleFilterClick)=\"onSingleFilterClick()\"\n  (singleFilterInput)=\"onSingleFilterInput($event)\"\n  (singleFilterKeydown)=\"onSingleFilterKeydown($event)\"\n  (selectAll)=\"onSelectAll($event)\"\n  (animationDone)=\"onDropdownAnimationDone()\"\n  (animationStart)=\"onDropdownAnimationStart()\"\n>\n  <ng-content></ng-content>\n</mdb-select-dropdown>\n",
        providers: [SELECT_VALUE_ACCESSOR],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: ["@charset \"UTF-8\";.select-wrapper .select-dropdown{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #ced4da;outline:0;height:38px;line-height:2.9rem;width:100%;font-size:1rem;margin:0 0 .94rem;padding:0;display:block;text-overflow:ellipsis;z-index:2}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,.3);border-bottom-color:rgba(0,0,0,.2);cursor:default}.select-wrapper input.select-dropdown .selected,.select-wrapper input.select-dropdown li:focus{background-color:rgba(0,0,0,.15)}.select-wrapper input.select-dropdown li.active{background:0 0}.select-wrapper input.select-dropdown .fab,.select-wrapper input.select-dropdown .far,.select-wrapper input.select-dropdown .fas{color:inherit}.select-wrapper input.active{box-shadow:0 1px 0 0 #4285f4;border-bottom:1px solid #4285f4}.select-wrapper .search-wrap{padding:1rem 0 0;display:block;margin:0 .7rem}.select-wrapper .search-wrap .md-form{margin-top:0;margin-bottom:1rem}.select-wrapper .search-wrap .md-form input{padding-bottom:.4rem;margin-bottom:0}.select-wrapper span.caret{color:initial;position:absolute;right:0;top:.8rem;font-size:.63rem}.select-wrapper span.caret.disabled{color:rgba(0,0,0,.3)}.select-wrapper+label{position:absolute;top:2.125rem;transition:.2s ease-out;color:#757575;font-weight:300}.select-wrapper+label.active{transform:translateY(-14px);font-size:.8rem;top:1.5rem;left:15px}.select-wrapper+label.active-check{color:#4285f4}.select-wrapper+label.mdb-main-label{z-index:1}.select-wrapper i,.select-wrapper+label.disabled{color:rgba(0,0,0,.3)}.select-wrapper ul{list-style-type:none;padding-left:0}.select-wrapper.md-form>ul li label{top:0;color:#4285f4;font-size:.9rem;transform:none}.select-wrapper.md-form>ul li.select-toggle-all label{padding-left:38px}.select-wrapper.md-form.colorful-select>ul li.select-toggle-all:hover label{color:#fff}.select-wrapper.md-form.md-outline span.caret{padding-right:.75rem;padding-left:.75rem;color:#495057!important}.select-wrapper.md-form.md-outline span.caret.active{color:#4285f4!important}.select-wrapper.md-form.md-outline .dropdown-content{top:2.7rem!important}.select-wrapper.md-form.md-outline input.select-dropdown{padding:.375rem .75rem;color:#495057}.select-wrapper.md-form.md-outline input.select-dropdown:focus{border-color:#4285f4;box-shadow:inset 0 0 0 1px #4285f4}.select-wrapper.md-form.md-outline+label{position:absolute;transform:translateY(40%);left:23px;color:#757575;background:#fff;font-size:13px;font-weight:500;padding-right:5px;padding-left:5px;top:.5em!important;z-index:2!important}.select-wrapper.md-form.md-outline+label.active{color:#4285f4}select{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif}select.browser-default{display:block!important}select:disabled{color:rgba(0,0,0,.3)}.select-dropdown [type=checkbox]:disabled:not(:checked)+label:before{margin-left:0;margin-top:3px}.select-dropdown ul{list-style-type:none;padding:0}.select-dropdown li img{height:30px;width:30px;margin:.3rem .75rem;float:right}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,.3);background-color:transparent!important;cursor:context-menu}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,.4)}.dropdown-content{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);background-color:#fff;margin:0;display:none;min-width:6.25rem;max-height:40.625rem;overflow-y:auto;opacity:0;position:absolute;z-index:999;will-change:width,height}.dropdown-content li{clear:both;color:#000;cursor:pointer;line-height:1.3rem;width:100%;text-align:left;text-transform:none}.dropdown-content li.active,.dropdown-content li:hover{background-color:#eee}.dropdown-content li>a,.dropdown-content li>span{color:#4285f4;display:block;padding:.5rem}.dropdown-content li>a>i{height:inherit;line-height:inherit}.colorful-select .dropdown-content{padding:.5rem}.colorful-select .dropdown-content li.active span{color:#fff!important;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.colorful-select .dropdown-content li.active span [type=checkbox]:checked+label:before{border-color:transparent #fff #fff transparent}.colorful-select .dropdown-content li a:hover,.colorful-select .dropdown-content li span:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);color:#fff!important;transition:.15s;border-radius:.125rem}.colorful-select .dropdown-content li a:hover [type=checkbox]+label:before,.colorful-select .dropdown-content li span:hover [type=checkbox]+label:before{border-color:#fff}.colorful-select .dropdown-content li a:hover [type=checkbox]:checked+label:before,.colorful-select .dropdown-content li span:hover [type=checkbox]:checked+label:before{border-color:transparent #fff #fff transparent}.colorful-select .dropdown-content li.disabled.active span,.colorful-select .dropdown-content li.optgroup.active span,.colorful-select .dropdown-content li:disabled.active span{box-shadow:none;color:rgba(0,0,0,.3)!important;border-bottom-color:rgba(0,0,0,.3);cursor:default}.colorful-select .dropdown-content li.disabled a:hover,.colorful-select .dropdown-content li.disabled span:hover,.colorful-select .dropdown-content li.optgroup a:hover,.colorful-select .dropdown-content li.optgroup span:hover,.colorful-select .dropdown-content li:disabled a:hover,.colorful-select .dropdown-content li:disabled span:hover{box-shadow:none;color:rgba(0,0,0,.3)!important;border-bottom-color:rgba(0,0,0,.3);cursor:default;background-color:#fff!important}.colorful-select .dropdown-content li.disabled label,.colorful-select .dropdown-content li.optgroup label,.colorful-select .dropdown-content li:disabled label{cursor:default}.dropdown-primary .dropdown-content li a,.dropdown-primary .dropdown-content li span:hover,.dropdown-primary .dropdown-content li.active{background-color:#4285f4!important}.dropdown-primary .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-primary .search-wrap input:focus{border-bottom:1px solid #4285f4;box-shadow:0 1px 0 0 #4285f4}.dropdown-danger .dropdown-content li a,.dropdown-danger .dropdown-content li span:hover,.dropdown-danger .dropdown-content li.active{background-color:#c00!important}.dropdown-danger .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-danger .search-wrap input:focus{border-bottom:1px solid #c00;box-shadow:0 1px 0 0 #c00}.dropdown-default .dropdown-content li a,.dropdown-default .dropdown-content li span:hover,.dropdown-default .dropdown-content li.active{background-color:#2bbbad!important}.dropdown-default .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-default .search-wrap input:focus{border-bottom:1px solid #2bbbad;box-shadow:0 1px 0 0 #2bbbad}.dropdown-secondary .dropdown-content li a,.dropdown-secondary .dropdown-content li span:hover,.dropdown-secondary .dropdown-content li.active{background-color:#a6c!important}.dropdown-secondary .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-secondary .search-wrap input:focus{border-bottom:1px solid #a6c;box-shadow:0 1px 0 0 #a6c}.dropdown-success .dropdown-content li a,.dropdown-success .dropdown-content li span:hover,.dropdown-success .dropdown-content li.active{background-color:#00c851!important}.dropdown-success .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-success .search-wrap input:focus{border-bottom:1px solid #00c851;box-shadow:0 1px 0 0 #00c851}.dropdown-info .dropdown-content li a,.dropdown-info .dropdown-content li span:hover,.dropdown-info .dropdown-content li.active{background-color:#33b5e5!important}.dropdown-info .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-info .search-wrap input:focus{border-bottom:1px solid #33b5e5;box-shadow:0 1px 0 0 #33b5e5}.dropdown-warning .dropdown-content li a,.dropdown-warning .dropdown-content li span:hover,.dropdown-warning .dropdown-content li.active{background-color:#fb3!important}.dropdown-warning .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-warning .search-wrap input:focus{border-bottom:1px solid #fb3;box-shadow:0 1px 0 0 #fb3}.dropdown-dark .dropdown-content li a,.dropdown-dark .dropdown-content li span:hover,.dropdown-dark .dropdown-content li.active{background-color:#2e2e2e!important}.dropdown-dark .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-dark .search-wrap input:focus{border-bottom:1px solid #2e2e2e;box-shadow:0 1px 0 0 #2e2e2e}.dropdown-ins .dropdown-content li a,.dropdown-ins .dropdown-content li span:hover,.dropdown-ins .dropdown-content li.active{background-color:#2e5e86!important}.dropdown-ins .dropdown-content li.disabled.active{background-color:transparent!important}.dropdown-ins .search-wrap input:focus{border-bottom:1px solid #2e5e86;box-shadow:0 1px 0 0 #2e5e86}.md-dropdown li.disabled.active{background-color:transparent!important}mdb-select{display:inline-block;margin:0;position:relative;vertical-align:middle;width:100%}mdb-select *{box-sizing:border-box;font-family:Roboto,sans-serif;outline:0}mdb-select.mdb-select-outline{transition:.2s}mdb-select.mdb-select-outline>label{padding-left:10px;top:8px;left:4px}mdb-select.mdb-select-outline:active label,mdb-select.mdb-select-outline:focus label,mdb-select.mdb-select-outline:focus-within label{color:#4285f4}mdb-select.mdb-select-outline:active .below>.form-control,mdb-select.mdb-select-outline:focus .below>.form-control,mdb-select.mdb-select-outline:focus-within .below>.form-control{border-color:#4285f4;box-shadow:inset 0 0 0 1px #4285f4}mdb-select.mdb-select-outline .multiple,mdb-select.mdb-select-outline .single{border:1px solid #dadce0;border-radius:4px}mdb-select.mdb-select-outline .multiple .value,mdb-select.mdb-select-outline .single .value{padding-left:13px;line-height:16px}mdb-select.mdb-select-outline .multiple .placeholder,mdb-select.mdb-select-outline .single .placeholder{padding-left:13px}mdb-select.mdb-select-outline>label.active{transform:translateY(-22px);background:#fff;font-weight:500;padding:0 5px;font-size:.8rem;z-index:1;top:12px;left:9px}mdb-select>div{border:transparent;box-sizing:border-box;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}mdb-select>div.disabled{color:#aaa!important;cursor:default;pointer-events:none;background-color:transparent}mdb-select>div.disabled .placeholder,mdb-select>div.disabled .value,mdb-select>div.disabled span{color:#aaa!important}mdb-select>div.disabled>div.single>div.clear,mdb-select>div.disabled>div.single>div.placeholder,mdb-select>div.disabled>div.single>div.toggle{color:rgba(0,0,0,.3)}mdb-select>div>div.single{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #ced4da;outline:0;line-height:2rem;width:100%;font-size:1rem;margin:0;height:24px;box-sizing:content-box;padding:.6rem 0 .4rem;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start}mdb-select>div>div.single.focused{box-shadow:0 1px 0 0 #4285f4;border-bottom:1px solid #4285f4}mdb-select>div>div.single>div.value{flex:1;line-height:24px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding-right:1.2rem!important;color:#292b2c;padding:0 0 5px}mdb-select>div>div.single>div.placeholder{flex:1;line-height:24px;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;color:#6c757d;padding:0 0 5px}mdb-select>div>div.single>div.clear,mdb-select>div>div.single>div.toggle{float:right;color:#000;line-height:2rem;text-align:center;width:30px;position:absolute;right:20px;top:55%;margin-top:0;transform:translateY(-50%)}mdb-select>div>div.single>div.toggle:before{content:\"\u25B2\"}mdb-select>div>div.single>div.clear:hover,mdb-select>div>div.single>div.toggle:hover{background-color:#ececec}mdb-select>div>div.single>div.clear,mdb-select>div>div.single>div.toggle:hover{background-color:transparent}mdb-select>div>div.single>div.clear{font-size:18px}mdb-select>div>div.single>div.toggle{font-size:14px}mdb-select>div>div.multiple{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #ced4da;outline:0;line-height:2rem;width:100%;font-size:1rem;margin:0;height:24px;box-sizing:content-box;padding:.6rem 0 .4rem;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:start}mdb-select>div>div.multiple.focused{box-shadow:0 1px 0 0 #4285f4;border-bottom:1px solid #4285f4}mdb-select>div>div.multiple .placeholder{flex:1;line-height:24px;max-width:95%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;color:#6c757d;padding:0 0 5px}mdb-select>div>div.multiple>div.clear,mdb-select>div>div.multiple>div.toggle{float:right;color:#000;line-height:2rem;text-align:center;width:30px;position:absolute;right:20px;top:60%;margin-top:-2px;transform:translateY(-50%)}mdb-select>div>div.multiple>div.clear:hover,mdb-select>div>div.multiple>div.toggle:hover{background-color:#ececec}mdb-select>div>div.multiple>div.clear,mdb-select>div>div.multiple>div.toggle:hover{background-color:transparent}mdb-select>div>div.multiple>div.clear{font-size:18px}mdb-select>div>div.multiple>div.toggle{font-size:14px}mdb-select>div>div.multiple>div.option{overflow:hidden;min-width:0;width:80%;text-overflow:ellipsis;white-space:nowrap;cursor:default;line-height:24px}mdb-select>div>div.multiple>div.option span:last-child .deselect-option{display:none}mdb-select>div>div.multiple>div.option span.deselect-option{cursor:pointer;height:20px;line-height:24px;background-color:transparent;border:0;border-radius:0;color:#292b2c;font-size:1rem;margin:0;padding:0}mdb-select>div>div.multiple>div.option span.deselect-option:hover{color:#555}mdb-select>div>div.multiple input{background-color:transparent;border:none;height:30px;line-height:2rem;padding:0}mdb-select>div>div.multiple input:focus{outline:0}mdb-select>label{color:#757575;font-size:1rem;position:absolute;top:11px;left:0;transition:.2s ease-out;cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:95%}mdb-select>label.active{font-size:.8rem;transform:translateY(-22px);max-width:100%}mdb-select>label.focused{color:#4285f4}.md-form:not(.md-outline) .mdb-select-outline .form-control{margin-bottom:0;height:20px;width:calc(100% - 2px)}.md-form.md-outline .mdb-select-outline .below{max-width:calc(100% - 26px)}.md-form mdb-select.mdb-select-outline+label{top:8px;left:4px;padding-left:10px}.md-form mdb-select.mdb-select-outline+label.active{top:12px;left:9px;padding-left:5px;padding-right:5px;background-color:#fff;z-index:1000}mdb-select-dropdown{box-sizing:border-box;font-family:Sans-Serif;color:#4285f4;font-size:19.2px}mdb-select-dropdown *{box-sizing:border-box;font-family:Sans-Serif}mdb-select-dropdown>div{background-color:#fff;outline:transparent;border:0;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-top:none;box-sizing:border-box;position:absolute;z-index:1}mdb-select-dropdown>div .filter{margin-bottom:9.6px!important;margin-top:9.6px!important;height:38px}mdb-select-dropdown>div .options{position:relative;overflow-y:auto}mdb-select-dropdown>div .options ul{list-style:none;margin:0;padding:0}mdb-select-dropdown>div .options ul li{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}mdb-select-dropdown>div .options ul li .filtrable{flex-direction:row;align-items:center}mdb-select-dropdown>div .options ul .selected{background-color:#eee}mdb-select-dropdown>div .options ul .highlighted{background-color:#eee;color:#4285f4}mdb-select-dropdown>div .options ul .disabled{background-color:#fff;color:#9e9e9e;cursor:default;pointer-events:none}mdb-select-dropdown>div .options::-webkit-scrollbar{width:4px;height:4px}mdb-select-dropdown>div .options::-webkit-scrollbar-button:end:increment,mdb-select-dropdown>div .options::-webkit-scrollbar-button:start:decrement{display:block;height:0;background-color:transparent}mdb-select-dropdown>div .options::-webkit-scrollbar-track-piece{background-color:transparent;border-radius:0 0 4px 4px}mdb-select-dropdown>div .options::-webkit-scrollbar-thumb:vertical{height:50px;background-color:#999;border-radius:4px}mdb-select-dropdown .dropdown-content{background-color:#fff;margin:0;width:100%;display:block;min-width:100px;max-height:unset;overflow-y:hidden;opacity:1;position:absolute;z-index:1020;will-change:width,height}mdb-select-dropdown .dropdown-content li>a,mdb-select-dropdown .dropdown-content li>span{color:#4285f4;padding:0 .5rem}mdb-select-dropdown .dropdown-content li.disabled,mdb-select-dropdown .dropdown-content li.disabled>span{color:rgba(0,0,0,.3);background-color:transparent!important}mdb-select-dropdown .dropdown-content li.optgroup{color:rgba(0,0,0,.3);background-color:transparent!important;border-top:1px solid #eee}mdb-select-dropdown .dropdown-content li.optgroup:first-child{border-top:0}mdb-select-dropdown .dropdown-content li.optgroup>span{color:rgba(0,0,0,.4)!important}.dropdown-content li>a,.dropdown-content li>span{font-size:.9rem}.select-dropdown li{overflow:hidden;text-overflow:ellipsis}.colorful-select .multiple-select-dropdown li.active span.filtrable,.colorful-select .multiple-select-dropdown li.selected span.filtrable{color:#fff}.colorful-select .multiple-select-dropdown li.active [type=checkbox]:checked+label:before,.colorful-select .multiple-select-dropdown li.selected [type=checkbox]:checked+label:before{border-color:transparent #fff #fff transparent!important}.dropdown-primary.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-primary.colorful-select .dropdown-content li.selected span{background-color:#4285f4;color:#fff}.dropdown-danger.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-danger.colorful-select .dropdown-content li.selected span{background-color:#c00;color:#fff}.dropdown-default.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-default.colorful-select .dropdown-content li.selected span{background-color:#2bbbad;color:#fff}.dropdown-secondary.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-secondary.colorful-select .dropdown-content li.selected span{background-color:#a6c;color:#fff}.dropdown-success.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-success.colorful-select .dropdown-content li.selected span{background-color:#00c851;color:#fff}.dropdown-info.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-info.colorful-select .dropdown-content li.selected span{background-color:#33b5e5;color:#fff}.dropdown-warning.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-warning.colorful-select .dropdown-content li.selected span{background-color:#fb3;color:#fff}.dropdown-ins.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-ins.colorful-select .dropdown-content li.selected span{background-color:#3f729b;color:#fff}.dropdown-dark.colorful-select .dropdown-content li.selected{background-color:transparent!important}.dropdown-dark.colorful-select .dropdown-content li.selected span{background-color:#2e2e2e;color:#fff}.multiple-select-dropdown li [type=checkbox]+label{height:10px;top:0!important;margin-top:-2px!important;transform:translateY(0);overflow:visible;width:auto}mdb-select .clear{position:absolute;font-size:18px;color:#000;width:30px;margin-top:-2px;transform:translateY(-50%)}.md-form mdb-select .form-control{height:24px;box-sizing:content-box}.md-form .prefix+mdb-select{left:40px}.md-form .prefix.focused{color:#4285f4}.md-form mdb-select label{color:#757575;font-size:1rem;position:absolute;top:12px;left:0;transition:.2s ease-out;transform:translateY(0);cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:95%}.md-form mdb-select label.active{font-size:.8rem;transform:translateY(-22px);max-width:100%}.md-form mdb-select label.focused{color:#4285f4}.md-form:not(.md-outline) mdb-select.mdb-select-outline label{top:9px}.md-form.md-outline mdb-select.mdb-select-outline label:active{transform:translateY(-24px) scale(.8)}.md-form mdb-select.mdb-select-outline label.active{transform:translateY(-18px)}.md-form mdb-select+label{color:#757575;font-size:1rem;position:absolute;top:12px;left:0;transition:.2s ease-out;transform:translateY(0);cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:95%}.md-form mdb-select+label.active{font-size:.8rem;transform:translateY(-22px);max-width:100%}.md-form mdb-select+label.focused{color:#4285f4}mdb-select+label{color:#757575;font-size:1rem;position:absolute;top:12px;left:15px;transition:.2s ease-out;transform:translateY(0);cursor:text;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:90%;z-index:-1}mdb-select+label.active{font-size:.8rem;transform:translateY(-22px);max-width:95%;z-index:0}mdb-select+label.focused{color:#4285f4}mdb-select .form-control{border-radius:0}mdb-select.validate-success.ng-valid.ng-touched div.multiple,mdb-select.validate-success.ng-valid.ng-touched div.single{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}mdb-select.mdb-select-outline.validate-success.ng-valid.ng-touched div.multiple,mdb-select.mdb-select-outline.validate-success.ng-valid.ng-touched div.single{border:1px solid #00c851!important;box-shadow:inset 0 0 0 1px #00c851!important}mdb-select.validate-success.ng-valid.ng-touched label,mdb-select.validate-success.ng-valid.ng-touched+label{color:#00c851!important}mdb-select.mdb-select-outline.validate-success.ng-valid.ng-touched label,mdb-select.mdb-select-outline.validate-success.ng-valid.ng-touched+label{color:inherit!important;font-weight:400!important}.form-submitted mdb-select.validate-error.ng-invalid div.multiple,.form-submitted mdb-select.validate-error.ng-invalid div.single,mdb-select.validate-error.ng-invalid.ng-touched div.multiple,mdb-select.validate-error.ng-invalid.ng-touched div.single{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}mdb-select.mdb-select-outline.validate-error.ng-invalid.ng-touched div.multiple,mdb-select.mdb-select-outline.validate-error.ng-invalid.ng-touched div.single{border:1px solid #f44336!important;box-shadow:inset 0 0 0 1px #f44336!important}.form-submitted mdb-select.validate-error.ng-invalid.ng-touched label .form-submitted mdb-select.validate-error.ng-invalid.ng-touched+label,mdb-select.validate-error.ng-invalid.ng-touched label,mdb-select.validate-error.ng-invalid.ng-touched+label{color:#f44336!important}mdb-select.mdb-select-outline.validate-error.ng-invalid.ng-touched label,mdb-select.mdb-select-outline.validate-error.ng-invalid.ng-touched+label{color:inherit!important;font-weight:400!important}mdb-select.colorful-select .select-dropdown li.selected,mdb-select.colorful-select .select-dropdown li:hover{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}.mdb-select-toggle{float:right;color:#000;line-height:2rem;text-align:center;width:30px;position:absolute;right:0;top:calc(50% + 9.4px);margin-top:-.5rem;transform:translateY(-50%);font-size:14px}.mdb-select-toggle.focused{color:#4285f4}.mdb-select-toggle:before{content:\"\u25BC\"}.dropdown-content .custom-select-content:hover{background-color:transparent}[type=checkbox]:checked,[type=checkbox]:not(:checked){position:absolute;opacity:0;pointer-events:none}.form-check-input[type=checkbox]+label,label.btn input[type=checkbox]+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:1.5625rem;line-height:1.5625rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.form-check-input[type=checkbox]+label:before,.form-check-input[type=checkbox]:not(.filled-in)+label:after,label.btn input[type=checkbox]+label:before,label.btn input[type=checkbox]:not(.filled-in)+label:after{content:\"\";position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #8a8a8a;border-radius:1px;margin-top:3px;transition:.2s}.form-check-input[type=checkbox]:not(.filled-in)+label:after,label.btn input[type=checkbox]:not(.filled-in)+label:after{border:0;transform:scale(0)}.form-check-input[type=checkbox]:not(:checked):disabled+label:before,label.btn input[type=checkbox]:not(:checked):disabled+label:before{border:none;background-color:#bdbdbd}.form-check-input[type=checkbox]:checked+label:before,label.btn input[type=checkbox]:checked+label:before{top:-4px;left:-5px;width:12px;height:1.375rem;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #4285f4;border-bottom:2px solid #4285f4;transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:100% 100%}.form-check-input[type=checkbox]:checked:disabled+label:before,label.btn input[type=checkbox]:checked:disabled+label:before{border-right:2px solid #bdbdbd;border-bottom:2px solid #bdbdbd}.form-check-input[type=checkbox]:indeterminate+label:before,label.btn input[type=checkbox]:indeterminate+label:before{top:-11px;left:-12px;width:10px;height:1.375rem;border-top:none;border-left:none;border-right:2px solid #4285f4;border-bottom:none;transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:100% 100%}.form-check-input[type=checkbox]:indeterminate:disabled+label:before,label.btn input[type=checkbox]:indeterminate:disabled+label:before{border-right:2px solid rgba(0,0,0,.46);background-color:transparent}.form-check-input[type=checkbox].filled-in+label:after,label.btn input[type=checkbox].filled-in+label:after{border-radius:.125rem}.form-check-input[type=checkbox].filled-in+label:after,.form-check-input[type=checkbox].filled-in+label:before,label.btn input[type=checkbox].filled-in+label:after,label.btn input[type=checkbox].filled-in+label:before{content:\"\";left:0;position:absolute;transition:border .25s,background-color .25s,width .2s .1s,height .2s .1s,top .2s .1s,left .2s .1s;z-index:1}.form-check-input[type=checkbox].filled-in:not(:checked)+label:before,label.btn input[type=checkbox].filled-in:not(:checked)+label:before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;transform:rotateZ(37deg);transform-origin:100% 100%}.form-check-input[type=checkbox].filled-in:not(:checked)+label:after,label.btn input[type=checkbox].filled-in:not(:checked)+label:after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0;z-index:0}.form-check-input[type=checkbox].filled-in:checked+label:before,label.btn input[type=checkbox].filled-in:checked+label:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotateZ(37deg);transform-origin:100% 100%}.form-check-input[type=checkbox].filled-in:checked+label:after,label.btn input[type=checkbox].filled-in:checked+label:after{top:0;width:20px;height:20px;border:2px solid #a6c;background-color:#a6c;z-index:0}.form-check-input[type=checkbox].filled-in.filled-in-danger:checked+label:after,label.btn input[type=checkbox].filled-in.filled-in-danger:checked+label:after{background-color:#f44336;border-color:#f44336}.form-check-input[type=checkbox]:disabled:not(:checked)+label:before,label.btn input[type=checkbox]:disabled:not(:checked)+label:before{background-color:#bdbdbd;border-color:#bdbdbd}.form-check-input[type=checkbox]:disabled:not(:checked)+label:after,label.btn input[type=checkbox]:disabled:not(:checked)+label:after{border-color:#bdbdbd;background-color:#bdbdbd}.form-check-input[type=checkbox]:disabled:checked+label:before,label.btn input[type=checkbox]:disabled:checked+label:before{background-color:transparent}.form-check-input[type=checkbox]:disabled:checked+label:after,label.btn input[type=checkbox]:disabled:checked+label:after{background-color:#bdbdbd;border-color:#bdbdbd}"]
    }),
    __param(2, Inject(DOCUMENT)),
    __param(3, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2, Object, String, ChangeDetectorRef])
], SelectComponent);
export { SelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFDVCxhQUFhLEVBQ2IsYUFBYSxFQUNiLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsR0FBRyxFQUNILFFBQVEsR0FDVCxNQUFNLHNDQUFzQyxDQUFDO0FBRTlDLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFxQjtJQUNyRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLGtEQUFrRDtJQUNsRCxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFVRixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBNkcxQixZQUNTLEVBQWMsRUFDZCxRQUFtQixFQUNBLFFBQWEs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QUFDO0FBQzdDO0lBQXRCLFNBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQVcsdUJBQXVCO2lEQUFDO0FBQy9CO0lBQXpCLFNBQVMsQ0FBQyxhQUFhLENBQUM7OEJBQWMsVUFBVTtvREFBQztBQUM5QjtJQUFuQixTQUFTLENBQUMsT0FBTyxDQUFDOzhCQUFjLFVBQVU7b0RBQUM7QUFDZDtJQUE3QixTQUFTLENBQUMsaUJBQWlCLENBQUM7OEJBQWtCLFVBQVU7d0RBQUM7QUFDMUI7SUFBL0IsU0FBUyxDQUFDLG1CQUFtQixDQUFDOzhCQUFvQixVQUFVOzBEQUFDO0FBeERuRCxlQUFlO0lBUjNCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLHdyR0FBb0M7UUFFcEMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7UUFDbEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7SUFpSEcsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEIsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7cUNBSFQsVUFBVTtRQUNKLFNBQVMsa0JBR1gsaUJBQWlCO0dBbEh2QixlQUFlLENBdzFCM0I7U0F4MUJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEV4aXN0aW5nUHJvdmlkZXIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGZvcndhcmRSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSW5qZWN0LFxuICBQTEFURk9STV9JRCxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFNlbGVjdERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IElPcHRpb24gfSBmcm9tICcuL29wdGlvbi1pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi9vcHRpb24nO1xuaW1wb3J0IHsgT3B0aW9uTGlzdCB9IGZyb20gJy4vb3B0aW9uLWxpc3QnO1xuaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEJBQ0tTUEFDRSxcbiAgRE9XTl9BUlJPVyxcbiAgRU5URVIsXG4gIEVTQ0FQRSxcbiAgU1BBQ0UsXG4gIFRBQixcbiAgVVBfQVJST1csXG59IGZyb20gJy4uLy4uL2ZyZWUvdXRpbHMva2V5Ym9hcmQtbmF2aWdhdGlvbic7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RfVkFMVUVfQUNDRVNTT1I6IEV4aXN0aW5nUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3RDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zZWxlY3QnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21hdGVyaWFsLXNlbGVjdC1tb2R1bGUuc2NzcyddLFxuICBwcm92aWRlcnM6IFtTRUxFQ1RfVkFMVUVfQUNDRVNTT1JdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uQ2hhbmdlcywgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgb3B0aW9uczogQXJyYXk8SU9wdGlvbj47XG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoKSBhbGxvd0NsZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodFRleHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaWdobGlnaHRGaXJzdCA9IHRydWU7XG4gIEBJbnB1dCgpIG11bHRpcGxlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG5vRmlsdGVyID0gMDtcbiAgQElucHV0KCkgbm90Rm91bmRNc2cgPSAnTm8gcmVzdWx0cyBmb3VuZCc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIGZpbHRlclBsYWNlaG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XG4gIEBJbnB1dCgpIGZpbHRlckVuYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgZmlsdGVyQXV0b2NvbXBsZXRlID0gdHJ1ZTtcbiAgQElucHV0KCkgdmlzaWJsZU9wdGlvbnM6IG51bWJlcjtcbiAgQElucHV0KCkgb3B0aW9uSGVpZ2h0ID0gMzc7XG4gIEBJbnB1dCgpIHRhYmluZGV4ID0gMDtcbiAgQElucHV0KCkgZW5hYmxlU2VsZWN0QWxsID0gdHJ1ZTtcbiAgQElucHV0KCkgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgYWxsJztcbiAgQElucHV0KCkgb3V0bGluZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb21wYXJlV2l0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGFyZVdpdGg7XG4gIH1cbiAgc2V0IGNvbXBhcmVXaXRoKGZuOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IEVycm9yKCdjb21wYXJlV2l0aCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgdGhpcy5fY29tcGFyZVdpdGggPSBmbjtcbiAgfVxuXG4gIEBPdXRwdXQoKSBvcGVuZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPElPcHRpb24+ID0gbmV3IEV2ZW50RW1pdHRlcjxJT3B0aW9uPigpO1xuICBAT3V0cHV0KCkgZGVzZWxlY3RlZDogRXZlbnRFbWl0dGVyPElPcHRpb24gfCBJT3B0aW9uW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxJT3B0aW9uIHwgSU9wdGlvbltdPigpO1xuICBAT3V0cHV0KCkgbm9PcHRpb25zRm91bmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NlbGVjdGlvbicsIHsgc3RhdGljOiB0cnVlIH0pIHNlbGVjdGlvblNwYW46IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duJykgZHJvcGRvd246IFNlbGVjdERyb3Bkb3duQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcpIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjbGVhcicpIGNsZWFyQnV0dG9uOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzaW5nbGVDb250YWluZXInKSBzaW5nbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ211bHRpcGxlQ29udGFpbmVyJykgbXVsdGlwbGVDb250YWluZXI6IEVsZW1lbnRSZWY7XG5cbiAgX3ZhbHVlOiBBcnJheTxhbnk+ID0gW107XG4gIG9wdGlvbkxpc3Q6IE9wdGlvbkxpc3Q7XG4gIG9wdGlvbnNMZW5ndGg6IG51bWJlcjtcbiAgdmlzaWJsZU9wdGlvbnNEZWZhdWx0ID0gNDtcbiAgLy8gU2VsZWN0aW9uIHN0YXRlIHZhcmlhYmxlcy5cbiAgaGFzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgaXNCcm93c2VyOiBib29sZWFuO1xuXG4gIC8vIFZpZXcgc3RhdGUgdmFyaWFibGVzLlxuICBjYW5PcGVuT25Gb2N1cyA9IHRydWU7XG4gIGhhc0ZvY3VzID0gZmFsc2U7XG4gIGlzT3BlbiA9IGZhbHNlO1xuICBpc0JlbG93ID0gdHJ1ZTtcbiAgZmlsdGVySW5wdXRXaWR0aCA9IDE7XG4gIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgcGxhY2Vob2xkZXJWaWV3ID0gJyc7XG4gIGxhYmVsQWN0aXZlID0gZmFsc2U7XG4gIGxhYmVsUmVmOiBIVE1MRWxlbWVudDtcbiAgcHJlZml4UmVmOiBIVE1MRWxlbWVudDtcbiAgbGFiZWxSZWZBY3RpdmUgPSBmYWxzZTtcbiAgZHJvcGRvd25BbmltYXRpb25Eb25lID0gZmFsc2U7XG5cbiAgY2xlYXJDbGlja2VkID0gZmFsc2U7XG4gIHNlbGVjdENvbnRhaW5lckNsaWNrZWQgPSBmYWxzZTtcblxuICBmaWx0ZXJIZWlnaHQgPSAwO1xuICBkcm9wZG93bkhlaWdodDogbnVtYmVyO1xuICBkcm9wZG93bk1heEhlaWdodDogbnVtYmVyO1xuXG4gIE9VVExJTkVfRFJPUERPV05fQk9UVE9NX09GRlNFVCA9IDU7XG4gIE9VVExJTkVfRFJPUERPV05fVE9QX09GRlNFVCA9IC0yMDtcblxuICAvLyBXaWR0aCBhbmQgcG9zaXRpb24gZm9yIHRoZSBkcm9wZG93biBjb250YWluZXIuXG4gIHdpZHRoOiBudW1iZXI7XG4gIHRvcDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG5cbiAgZG9jdW1lbnRDbGlja0Z1bjogRnVuY3Rpb247XG5cbiAgaXRlbXNCZWZvcmU6IEFycmF5PGFueT4gPSBbXTtcblxuICBnZXQgZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZDtcbiAgfVxuICBwcml2YXRlIF9mb2N1c2VkID0gZmFsc2U7XG5cbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgcHJpdmF0ZSBfY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMucGxhY2Vob2xkZXI7XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJIZWlnaHQoKTtcbiAgICB0aGlzLnVwZGF0ZURyb3Bkb3duSGVpZ2h0KCk7XG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxSZWYgPSB0aGlzLl9nZXRMYWJlbFJlZigpO1xuICAgIHRoaXMucHJlZml4UmVmID0gdGhpcy5fZ2V0UHJlZml4UmVmKCk7XG5cbiAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0Rmlyc3QpIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHRGaXJzdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TGFiZWxSZWYoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlbGVjdFBhcmVudEVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGU7XG4gICAgY29uc3QgbGFiZWxSZWYgPSBzZWxlY3RQYXJlbnRFbC5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuICAgIHJldHVybiBsYWJlbFJlZjtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFByZWZpeFJlZigpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc2VsZWN0UGFyZW50RWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBjb25zdCBwcmVmaXhSZWYgPSBzZWxlY3RQYXJlbnRFbC5xdWVyeVNlbGVjdG9yKCcucHJlZml4Jyk7XG4gICAgcmV0dXJuIHByZWZpeFJlZjtcbiAgfVxuXG4gIHVwZGF0ZUZpbHRlckhlaWdodCgpIHtcbiAgICB0aGlzLmZpbHRlckVuYWJsZWQgPyAodGhpcy5maWx0ZXJIZWlnaHQgPSA1MCkgOiAodGhpcy5maWx0ZXJIZWlnaHQgPSAwKTtcbiAgfVxuXG4gIHVwZGF0ZURyb3Bkb3duSGVpZ2h0KCkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuZW5hYmxlU2VsZWN0QWxsKSB7XG4gICAgICB0aGlzLmRyb3Bkb3duTWF4SGVpZ2h0ID0gdGhpcy52aXNpYmxlT3B0aW9uc1xuICAgICAgICA/IHRoaXMub3B0aW9uSGVpZ2h0ICogKHRoaXMudmlzaWJsZU9wdGlvbnMgKyAxKVxuICAgICAgICA6IHRoaXMub3B0aW9uSGVpZ2h0ICogKHRoaXMudmlzaWJsZU9wdGlvbnNEZWZhdWx0ICsgMSk7XG5cbiAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgPSB0aGlzLm9wdGlvbkhlaWdodCAqICh0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5sZW5ndGggKyAxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kcm9wZG93bk1heEhlaWdodCA9IHRoaXMudmlzaWJsZU9wdGlvbnNcbiAgICAgICAgPyB0aGlzLm9wdGlvbkhlaWdodCAqIHRoaXMudmlzaWJsZU9wdGlvbnNcbiAgICAgICAgOiB0aGlzLm9wdGlvbkhlaWdodCAqIHRoaXMudmlzaWJsZU9wdGlvbnNEZWZhdWx0O1xuXG4gICAgICB0aGlzLmRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5vcHRpb25IZWlnaHQgKiB0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgb25Ecm9wZG93bkFuaW1hdGlvbkRvbmUoKSB7XG4gICAgdGhpcy5kcm9wZG93bkFuaW1hdGlvbkRvbmUgPSB0cnVlO1xuICB9XG5cbiAgb25Ecm9wZG93bkFuaW1hdGlvblN0YXJ0KCkge1xuICAgIHRoaXMuZHJvcGRvd25BbmltYXRpb25Eb25lID0gZmFsc2U7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvdXRsaW5lJykpIHtcbiAgICAgIGlmIChjaGFuZ2VzWydvdXRsaW5lJ10uY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnbWRiLXNlbGVjdC1vdXRsaW5lJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ21kYi1zZWxlY3Qtb3V0bGluZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnb3B0aW9ucycpKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9wdGlvbnNMaXN0KGNoYW5nZXMub3B0aW9ucy5jdXJyZW50VmFsdWUpO1xuICAgICAgdGhpcy51cGRhdGVTdGF0ZSgpO1xuICAgICAgdGhpcy51cGRhdGVEcm9wZG93bkhlaWdodCgpO1xuICAgICAgdGhpcy5hcHBlbmRUb0JvZHkgPyB0aGlzLl91cGRhdGVBcHBlbmRlZFBvc2l0aW9uKCkgOiB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICB0aGlzLmNoYW5nZWQuZW1pdCh7XG4gICAgICAgIHByZXZpb3VzVmFsdWU6IGNoYW5nZXMub3B0aW9ucy5wcmV2aW91c1ZhbHVlLFxuICAgICAgICBzZWxlY3Rpb25WYWx1ZTogY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnbm9GaWx0ZXInKSkge1xuICAgICAgY29uc3QgbnVtT3B0aW9uczogbnVtYmVyID0gdGhpcy5vcHRpb25MaXN0Lm9wdGlvbnMubGVuZ3RoO1xuICAgICAgY29uc3QgbWluTnVtT3B0aW9uczogbnVtYmVyID0gY2hhbmdlc1snbm9GaWx0ZXInXS5jdXJyZW50VmFsdWU7XG4gICAgICB0aGlzLmZpbHRlckVuYWJsZWQgPSBudW1PcHRpb25zID49IG1pbk51bU9wdGlvbnM7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ3BsYWNlaG9sZGVyJykpIHtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICBpc0NoaWxkKGVsZW1udDogYW55KSB7XG4gICAgbGV0IG5vZGUgPSBlbGVtbnQucGFyZW50Tm9kZTtcbiAgICB3aGlsZSAobm9kZSAhPSBudWxsKSB7XG4gICAgICBpZiAobm9kZSA9PT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25XaW5kb3dSZXNpemUoKSB7XG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICB9XG5cbiAgLy8gU2VsZWN0IGNvbnRhaW5lci5cblxuICBvblNlbGVjdENvbnRhaW5lckNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICAvLyBwcmV2ZW50IGZyb20gb3BlbmluZyBvbiBtb3VzZSByaWdodCBjbGlja1xuICAgIGlmIChldmVudC53aGljaCA9PT0gMiB8fCBldmVudC53aGljaCA9PT0gMykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ2hpbGQoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZWxlY3RDb250YWluZXJDbGlja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG5cbiAgICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblNlbGVjdENvbnRhaW5lckZvY3VzKCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMubGFiZWxBY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMubGFiZWxSZWYsICdhY3RpdmUnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5sYWJlbFJlZiwgJ2ZvY3VzZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmVmaXhSZWYpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5wcmVmaXhSZWYsICdmb2N1c2VkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FuT3Blbk9uRm9jdXMpIHtcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgfVxuICAgIHRoaXMuY2FuT3Blbk9uRm9jdXMgPSB0cnVlO1xuICB9XG5cbiAgb25TZWxlY3RDb250YWluZXJCbHVyKCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhbk9wZW5PbkZvY3VzID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubGFiZWxSZWYsICdmb2N1c2VkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJlZml4UmVmKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMucHJlZml4UmVmLCAnZm9jdXNlZCcpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc09wZW4gJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RDb250YWluZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdENvbnRhaW5lcktleWRvd24oZXZlbnQpO1xuICB9XG5cbiAgLy8gRHJvcGRvd24gY29udGFpbmVyLlxuXG4gIG9uRHJvcGRvd25PcHRpb25DbGlja2VkKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5tdWx0aXBsZSA/IHRoaXMudG9nZ2xlU2VsZWN0T3B0aW9uKG9wdGlvbikgOiB0aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICB9XG5cbiAgb25Ecm9wZG93bkNsb3NlKGZvY3VzOiBhbnkpIHtcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oZm9jdXMpO1xuICB9XG5cbiAgLy8gU2luZ2xlIGZpbHRlciBpbnB1dC5cbiAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICB0aGlzLnNlbGVjdENvbnRhaW5lckNsaWNrZWQgPSB0cnVlO1xuICB9XG5cbiAgb25TaW5nbGVGaWx0ZXJJbnB1dCh0ZXJtOiBzdHJpbmcpIHtcbiAgICBjb25zdCBoYXNTaG93bjogYm9vbGVhbiA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXIodGVybSk7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5lbmFibGVTZWxlY3RBbGwpIHtcbiAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgPSAodGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmxlbmd0aCArIDEpICogdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgPSB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWQubGVuZ3RoICogdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgfVxuICAgIGlmICghaGFzU2hvd24pIHtcbiAgICAgIHRoaXMubm9PcHRpb25zRm91bmQuZW1pdCh0ZXJtKTtcbiAgICAgIHRoaXMuZHJvcGRvd25IZWlnaHQgPSB0aGlzLm9wdGlvbkhlaWdodDtcbiAgICB9XG4gIH1cblxuICBvblNpbmdsZUZpbHRlcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaGFuZGxlU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudCk7XG4gIH1cblxuICAvLyBNdWx0aXBsZSBmaWx0ZXIgaW5wdXQuXG5cbiAgb25NdWx0aXBsZUZpbHRlcklucHV0KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUZpbHRlcldpZHRoKCk7XG4gICAgY29uc3QgdGVybTogc3RyaW5nID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IGhhc1Nob3duOiBib29sZWFuID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcih0ZXJtKTtcbiAgICBpZiAoIWhhc1Nob3duKSB7XG4gICAgICB0aGlzLm5vT3B0aW9uc0ZvdW5kLmVtaXQodGVybSk7XG4gICAgfVxuICB9XG5cbiAgb25NdWx0aXBsZUZpbHRlcktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaGFuZGxlTXVsdGlwbGVGaWx0ZXJLZXlkb3duKGV2ZW50KTtcbiAgfVxuXG4gIC8vIFNpbmdsZSBjbGVhciBzZWxlY3QuXG5cbiAgb25DbGVhclNlbGVjdGlvbkNsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2xlYXJDbGlja2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgdGhpcy5wbGFjZWhvbGRlclZpZXcgPSB0aGlzLnBsYWNlaG9sZGVyO1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG5cbiAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxSZWZTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE11bHRpcGxlIGRlc2VsZWN0IG9wdGlvbi5cblxuICBvbkRlc2VsZWN0T3B0aW9uQ2xpY2sob3B0aW9uOiBPcHRpb24pIHtcbiAgICB0aGlzLmNsZWFyQ2xpY2tlZCA9IHRydWU7XG4gICAgdGhpcy5kZXNlbGVjdE9wdGlvbihvcHRpb24pO1xuICB9XG5cbiAgLyoqIEFQSS4gKiovXG5cbiAgb3BlbigpIHtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkgfCBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyB0aGlzLl92YWx1ZSA6IHRoaXMuX3ZhbHVlWzBdO1xuICB9XG5cbiAgc2V0IHZhbHVlKHY6IGFueSB8IGFueVtdKSB7XG4gICAgaWYgKHR5cGVvZiB2ID09PSAndW5kZWZpbmVkJyB8fCB2ID09PSBudWxsIHx8IHYgPT09ICcnKSB7XG4gICAgICB2ID0gW107XG4gICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2KSkge1xuICAgICAgdiA9IFt2XTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRTZWxlY3Rpb24odik7XG4gICAgdGhpcy5fdmFsdWUgPSB2O1xuICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFNlbGVjdGlvbih2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5vcHRpb25MaXN0LmNsZWFyU2VsZWN0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB2YWx1ZSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoc2VsZWN0aW9uVmFsdWU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9zZWxlY3RCeVZhbHVlKHNlbGVjdGlvblZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RCeVZhbHVlKHZhbHVlWzBdKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RCeVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBtYXRjaGluZ09wdGlvbiA9IHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmZpbmQoKG9wdGlvbjogT3B0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gIW9wdGlvbi5zZWxlY3RlZCAmJiBvcHRpb24udmFsdWUgIT09IG51bGwgJiYgdGhpcy5fY29tcGFyZVdpdGgob3B0aW9uLnZhbHVlLCB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICBpZiAobWF0Y2hpbmdPcHRpb24pIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5zZWxlY3QobWF0Y2hpbmdPcHRpb24pO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHNlbGVjdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5vcHRpb25MaXN0LmdldE9wdGlvbnNCeVZhbHVlKHZhbHVlKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICB0aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSBtZXRob2RzLiAqKi9cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5oYXNTZWxlY3RlZCA9IHRydWU7XG5cbiAgICBpZiAoIXZhbHVlICYmIHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLmhhc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZCgpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHRoaXMub3B0aW9uTGlzdC52YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKCkge1xuICAgIHRoaXMucGxhY2Vob2xkZXJWaWV3ID0gdGhpcy5wbGFjZWhvbGRlcjtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlcldpZHRoKCk7XG4gICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKiBJbml0aWFsaXphdGlvbi4gKiovXG5cbiAgdXBkYXRlT3B0aW9uc0xpc3Qob3B0aW9uczogQXJyYXk8SU9wdGlvbj4pIHtcbiAgICB0aGlzLm9wdGlvbkxpc3QgPSBuZXcgT3B0aW9uTGlzdChvcHRpb25zLCB0aGlzLm11bHRpcGxlKTtcbiAgICB0aGlzLl9zZXRTZWxlY3Rpb24odGhpcy5fdmFsdWUpO1xuICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB1cGRhdGVMYWJlbFN0YXRlKCkge1xuICAgIGlmICghdGhpcy5wbGFjZWhvbGRlciAmJiAhdGhpcy5oYXNTZWxlY3RlZCAmJiAhdGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMubGFiZWxBY3RpdmUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGFiZWxSZWZTdGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMucGxhY2Vob2xkZXIgJiYgIXRoaXMuaGFzU2VsZWN0ZWQgJiYgIXRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMubGFiZWxSZWYsICdhY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmxhYmVsUmVmLCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqIERyb3Bkb3duLiAqKi9cbiAgdG9nZ2xlRHJvcGRvd24oKSB7XG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuaXNPcGVuID8gdGhpcy5jbG9zZURyb3Bkb3duKHRydWUpIDogdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICB9XG4gIH1cblxuICBvcGVuRHJvcGRvd24oKSB7XG4gICAgLy8gd2Ugc2hvdWxkIG5vdCBzZXQgaGlnaGVyIHotaW5kZXggdmFsdWUgaGVyZVxuICAgIC8vIGJlY2F1c2UgZHJvcGRvd24gYWRkZWQgd2l0aCBhcHBlbmRUb0JvZHkgd2lsbCBiZSBvdmVybGFwZWQgYnkgc2VsZWN0IGlucHV0XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgJzEwMDAnKTtcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9hcHBlbmREcm9wZG93bigpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICAgICAgdGhpcy5hcHBlbmRUb0JvZHkgPyB0aGlzLl91cGRhdGVBcHBlbmRlZFBvc2l0aW9uKCkgOiB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICBbJ2NsaWNrJywgJ3RvdWNoc3RhcnQnXS5mb3JFYWNoKChldjogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRDbGlja0Z1biA9IHRoaXMucmVuZGVyZXIubGlzdGVuKCdkb2N1bWVudCcsIGV2LCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLmlzQ2hpbGQoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgICAgICAgdGhpcy5pc09wZW4gJiZcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd25BbmltYXRpb25Eb25lICYmXG4gICAgICAgICAgICBldmVudC50YXJnZXQgIT09IHRoaXMuZWwubmF0aXZlRWxlbWVudFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyRmlsdGVySW5wdXQoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVMYWJlbFN0YXRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWxSZWZTdGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5vcGVuZWQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgY2xvc2VEcm9wZG93bihmb2N1czogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5ICYmIHRoaXMuaXNPcGVuKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKCdib2R5JywgdGhpcy5kcm9wZG93bi5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3Q7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4Jyk7XG4gICAgY29udGFpbmVyLnJlbW92ZSgnZmFkZUluU2VsZWN0Jyk7XG5cbiAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgIHRoaXMuY2xlYXJGaWx0ZXJJbnB1dCgpO1xuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgIGlmIChmb2N1cykge1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmNsb3NlZC5lbWl0KHRoaXMpO1xuICAgIH1cblxuICAgIHRoaXMuZG9jdW1lbnRDbGlja0Z1bigpO1xuXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyoqIFNlbGVjdC4gKiovXG5cbiAgc2VsZWN0T3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgaWYgKCFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5zZWxlY3Qob3B0aW9uKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XG4gICAgICB0aGlzLnNlbGVjdGVkLmVtaXQob3B0aW9uLndyYXBwZWRPcHRpb24pO1xuICAgICAgdGhpcy5oYXNTZWxlY3RlZCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLmxhYmVsKSB7XG4gICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5sYWJlbFJlZikge1xuICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlICYmICFvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIH1cbiAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZGVzZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICBpZiAob3B0aW9uLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZGVzZWxlY3Qob3B0aW9uKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKCk7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVyVmlldyA9IHRoaXMucGxhY2Vob2xkZXI7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbkxpc3Quc2VsZWN0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmhhc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsU3RhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhYmVsUmVmKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVMYWJlbFJlZlN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuZGVzZWxlY3RlZC5lbWl0KG9wdGlvbi53cmFwcGVkT3B0aW9uKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbigpIHtcbiAgICBjb25zdCBzZWxlY3Rpb246IEFycmF5PE9wdGlvbj4gPSB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0aW9uO1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlZCgpO1xuICAgICAgdGhpcy5oYXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0aGlzLmRlc2VsZWN0ZWQuZW1pdChzZWxlY3Rpb25bMF0ud3JhcHBlZE9wdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc2VsZWN0ZWQuZW1pdChcbiAgICAgICAgICBzZWxlY3Rpb24ubWFwKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uLndyYXBwZWRPcHRpb247XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGVTZWxlY3RPcHRpb24ob3B0aW9uOiBPcHRpb24pIHtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPyB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbikgOiB0aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICB9XG5cbiAgc2VsZWN0SGlnaGxpZ2h0ZWRPcHRpb24oKSB7XG4gICAgY29uc3Qgb3B0aW9uOiBPcHRpb24gPSB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0ZWRPcHRpb247XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgb3B0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRvZ2dsZVNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgIH1cbiAgICBpZiAoIXRoaXMubXVsdGlwbGUgJiYgb3B0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNlbGVjdE9wdGlvbihvcHRpb24pO1xuICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKHRydWUpO1xuXG4gICAgICB0aGlzLmNhbk9wZW5PbkZvY3VzID0gZmFsc2U7XG4gICAgICB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIGRlc2VsZWN0TGFzdCgpIHtcbiAgICBjb25zdCBzZWw6IEFycmF5PE9wdGlvbj4gPSB0aGlzLm9wdGlvbkxpc3Quc2VsZWN0aW9uO1xuXG4gICAgaWYgKHNlbC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBvcHRpb246IE9wdGlvbiA9IHNlbFtzZWwubGVuZ3RoIC0gMV07XG4gICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICB0aGlzLnNldE11bHRpcGxlRmlsdGVySW5wdXQob3B0aW9uLmxhYmVsICsgJyAnKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdEFsbChpc1NlbGVjdGVkOiBib29sZWFuKSB7XG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZFxuICAgICAgICAuZmlsdGVyKG9wdGlvbiA9PiAhb3B0aW9uLmRpc2FibGVkKVxuICAgICAgICAuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWRcbiAgICAgICAgLmZpbHRlcihvcHRpb24gPT4gIW9wdGlvbi5kaXNhYmxlZClcbiAgICAgICAgLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgICB0aGlzLmRlc2VsZWN0T3B0aW9uKG9wdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBGaWx0ZXIuICoqL1xuXG4gIGNsZWFyRmlsdGVySW5wdXQoKSB7XG4gICAgdGhpcy5kcm9wZG93bi5jbGVhckZpbHRlcklucHV0KCk7XG4gICAgdGhpcy51cGRhdGVEcm9wZG93bkhlaWdodCgpO1xuICB9XG5cbiAgc2V0TXVsdGlwbGVGaWx0ZXJJbnB1dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2VsZWN0Q29udGFpbmVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZTtcblxuICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgaWYgKGtleSA9PT0gRVNDQVBFIHx8IChrZXkgPT09IFVQX0FSUk9XICYmIGV2ZW50LmFsdEtleSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICAgIHRoaXMuY2FuT3Blbk9uRm9jdXMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TcGFuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlTGFiZWxTdGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFiZWxSZWYpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxhYmVsUmVmU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFRBQikge1xuICAgICAgICAvLyBSZXN0b3JlIGZvY3VzIGZyb20gc2VhcmNoIGlucHV0IHRvIHNlbGVjdCBpbnB1dC4gRW5zdXJlcyB0aGF0IHRoZSBuZXh0XG4gICAgICAgIC8vIG9yIHByZXZpb3VzIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGNvcnJldGx5IG9uIHRhYiBvciBzaGlmdC10YWJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TcGFuLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gRU5URVIpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RIaWdobGlnaHRlZE9wdGlvbigpO1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLmVuYWJsZVNlbGVjdEFsbCkge1xuICAgICAgICAgIHRoaXMuZHJvcGRvd24udXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09IFVQX0FSUk9XKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHRQcmV2aW91c09wdGlvbigpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0TmV4dE9wdGlvbigpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChrZXkgPT09IEVOVEVSIHx8IGtleSA9PT0gU1BBQ0UgfHwgKGtleSA9PT0gRE9XTl9BUlJPVyAmJiBldmVudC5hbHRLZXkpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub3BlbkRyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTXVsdGlwbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBrZXkgPSBldmVudC53aGljaDtcblxuICAgIGlmIChrZXkgPT09IEJBQ0tTUEFDRSkge1xuICAgICAgaWYgKHRoaXMuaGFzU2VsZWN0ZWQgJiYgdGhpcy5maWx0ZXJFbmFibGVkICYmIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdExhc3QoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVTaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBrZXkgPSBldmVudC53aGljaDtcblxuICAgIGlmIChrZXkgPT09IEVTQ0FQRSB8fCBrZXkgPT09IFRBQiB8fCBrZXkgPT09IFVQX0FSUk9XIHx8IGtleSA9PT0gRE9XTl9BUlJPVyB8fCBrZXkgPT09IEVOVEVSKSB7XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdENvbnRhaW5lcktleWRvd24oZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBWaWV3LiAqKi9cblxuICBmb2N1cygpIHtcbiAgICB0aGlzLmhhc0ZvY3VzID0gdHJ1ZTtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3Bhbi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gIH1cblxuICBibHVyKCkge1xuICAgIHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cblxuICB1cGRhdGVXaWR0aCgpIHtcbiAgICBpZiAoIXRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMud2lkdGggPSB0aGlzLnNpbmdsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5tdWx0aXBsZUNvbnRhaW5lci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZG9jRWw6IGFueSA9IHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgbGV0IGVsUG9zaXRpb24gPSAwO1xuICAgICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICAgIGVsUG9zaXRpb24gPVxuICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gK1xuICAgICAgICAgIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNlbGVjdFNwYW4gPSB0aGlzLnNlbGVjdGlvblNwYW4ubmF0aXZlRWxlbWVudDtcbiAgICAgIGNvbnN0IG9yaWdpbkhlaWdodCA9IHRoaXMub3V0bGluZVxuICAgICAgICA/IHRoaXMuT1VUTElORV9EUk9QRE9XTl9UT1BfT0ZGU0VUXG4gICAgICAgIDogc2VsZWN0U3Bhbi5vZmZzZXRIZWlnaHQ7XG4gICAgICB0aGlzLmxlZnQgPSBzZWxlY3RTcGFuLm9mZnNldExlZnQ7XG4gICAgICBjb25zdCBib3R0b206IGFueSA9IGRvY0VsLnNjcm9sbFRvcCArIGRvY0VsLmNsaWVudEhlaWdodDtcbiAgICAgIGNvbnN0IGRyb3Bkb3duSGVpZ2h0ID1cbiAgICAgICAgdGhpcy5kcm9wZG93bk1heEhlaWdodCA+IHRoaXMuZHJvcGRvd25IZWlnaHQgPyB0aGlzLmRyb3Bkb3duSGVpZ2h0IDogdGhpcy5kcm9wZG93bk1heEhlaWdodDtcbiAgICAgIHRoaXMudXBkYXRlRHJvcGRvd25IZWlnaHQoKTtcbiAgICAgIGlmIChlbFBvc2l0aW9uICsgZHJvcGRvd25IZWlnaHQgPj0gYm90dG9tKSB7XG4gICAgICAgIHRoaXMudG9wID0gb3JpZ2luSGVpZ2h0IC0gZHJvcGRvd25IZWlnaHQgLSB0aGlzLmZpbHRlckhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudG9wID0gdGhpcy5vdXRsaW5lID8gc2VsZWN0U3Bhbi5vZmZzZXRIZWlnaHQgKyB0aGlzLk9VVExJTkVfRFJPUERPV05fQk9UVE9NX09GRlNFVCA6IDA7XG4gICAgICB9XG4gICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQXBwZW5kZWRQb3NpdGlvbigpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IHNlbGVjdFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgdGhpcy5kb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IG9mZnNldFRvcCA9IHNlbGVjdFJlY3QudG9wICsgc2Nyb2xsVG9wO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gc2VsZWN0UmVjdC5oZWlnaHQ7XG4gICAgICBjb25zdCBkcm9wZG93bkhlaWdodCA9XG4gICAgICAgIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgPiB0aGlzLmRyb3Bkb3duSGVpZ2h0ID8gdGhpcy5kcm9wZG93bkhlaWdodCA6IHRoaXMuZHJvcGRvd25NYXhIZWlnaHQ7XG5cbiAgICAgIHRoaXMubGVmdCA9IHNlbGVjdFJlY3QubGVmdDtcbiAgICAgIGlmIChcbiAgICAgICAgb2Zmc2V0VG9wICsgZHJvcGRvd25IZWlnaHQgKyB0aGlzLmZpbHRlckhlaWdodCA+XG4gICAgICAgIHNjcm9sbFRvcCArIHRoaXMuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgKSB7XG4gICAgICAgIGlmICh0aGlzLm91dGxpbmUpIHtcbiAgICAgICAgICB0aGlzLnRvcCA9XG4gICAgICAgICAgICBvZmZzZXRUb3AgLSBkcm9wZG93bkhlaWdodCArIHRoaXMuT1VUTElORV9EUk9QRE9XTl9UT1BfT0ZGU0VUIC0gdGhpcy5maWx0ZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50b3AgPSBvZmZzZXRUb3AgLSBkcm9wZG93bkhlaWdodCArIGhlaWdodCAtIHRoaXMuZmlsdGVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRvcCA9IHRoaXMub3V0bGluZVxuICAgICAgICAgID8gb2Zmc2V0VG9wICsgaGVpZ2h0ICsgdGhpcy5PVVRMSU5FX0RST1BET1dOX0JPVFRPTV9PRkZTRVRcbiAgICAgICAgICA6IG9mZnNldFRvcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmREcm9wZG93bigpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5kcm9wZG93bi5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICBpZiAoYm9keSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGJvZHksIGRyb3Bkb3duKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVGaWx0ZXJXaWR0aCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZmlsdGVySW5wdXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCB2YWx1ZTogc3RyaW5nID0gdGhpcy5maWx0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgdGhpcy5maWx0ZXJJbnB1dFdpZHRoID1cbiAgICAgICAgdmFsdWUubGVuZ3RoID09PSAwID8gMSArIHRoaXMucGxhY2Vob2xkZXJWaWV3Lmxlbmd0aCAqIDEwIDogMSArIHZhbHVlLmxlbmd0aCAqIDEwO1xuICAgIH1cbiAgfVxufVxuIl19