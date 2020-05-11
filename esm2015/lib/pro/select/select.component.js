var MdbSelectComponent_1;
import { __decorate, __metadata, __param } from "tslib";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, ViewContainerRef, ElementRef, ViewChild, TemplateRef, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit, OnDestroy, OnInit, ChangeDetectorRef, Self, Optional, HostListener, Renderer2, ContentChild, HostBinding, } from '@angular/core';
import { dropdownAnimation } from './select-animations';
import { fromEvent, merge, Subject } from 'rxjs';
import { filter, takeUntil, startWith, switchMap, tap } from 'rxjs/operators';
import { MDB_OPTION_PARENT, OptionComponent } from '../option/option.component';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { OptionGroupComponent } from '../option/option-group.component';
import { SelectAllOptionComponent } from '../option/select-all-option';
import { OverlayRef, PositionStrategy, Overlay, ViewportRuler, ConnectionPositionPair, } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ESCAPE, UP_ARROW, HOME, END, ENTER, SPACE, DOWN_ARROW, } from '../../free/utils/keyboard-navigation';
import { MdbSelectFilterComponent } from './select-filter.component';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
let MdbSelectComponent = MdbSelectComponent_1 = 
// tslint:disable-next-line:component-class-suffix
class MdbSelectComponent {
    constructor(_overlay, _viewportRuler, _vcr, _cdRef, _renderer, ngControl) {
        this._overlay = _overlay;
        this._viewportRuler = _viewportRuler;
        this._vcr = _vcr;
        this._cdRef = _cdRef;
        this._renderer = _renderer;
        this.ngControl = ngControl;
        this.allowClear = false;
        this.clearButtonTabindex = 0;
        this.disabled = false;
        this.highlightFirst = true;
        this.label = '';
        this.multiple = false;
        this.notFoundMsg = 'No results found';
        this.outline = false;
        this.tabindex = 0;
        this.required = false;
        this.ariaLabel = '';
        this._visibleOptions = 5;
        this._optionHeight = 48;
        // Equal to 4 * optionHeight (which is 48px by default)
        this._dropdownHeight = 240;
        this.valueChange = new EventEmitter();
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.selected = new EventEmitter();
        // tslint:disable-next-line:max-line-length
        this.deselected = new EventEmitter();
        this.noOptionsFound = new EventEmitter();
        this._destroy = new Subject();
        this._isOpen = false;
        this._hasFocus = false;
        this._labelActive = false;
        this._showNoResultsMsg = false;
        this._selectAllChecked = false;
        this._compareWith = (o1, o2) => o1 === o2;
        /** ControlValueAccessor interface methods. **/
        this._onChange = (_) => { };
        this._onTouched = () => { };
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    get visibleOptions() {
        return this._visibleOptions;
    }
    set visibleOptions(value) {
        if (value !== 0) {
            this._visibleOptions = value;
        }
    }
    get optionHeight() {
        return this._optionHeight;
    }
    set optionHeight(value) {
        if (value !== 0) {
            this._optionHeight = value;
        }
    }
    get dropdownHeight() {
        return this._dropdownHeight;
    }
    set dropdownHeight(value) {
        if (value !== 0) {
            this._dropdownHeight = value;
        }
    }
    get value() {
        return this._value;
    }
    set value(newValue) {
        if (this._value !== newValue) {
            this._value = newValue;
            this.writeValue(newValue);
        }
    }
    get compareWith() {
        return this._compareWith;
    }
    set compareWith(fn) {
        if (typeof fn === 'function') {
            this._compareWith = fn;
        }
    }
    get activeOption() {
        if (this._keyManager) {
            return this._keyManager.activeItem;
        }
        return null;
    }
    get selectionView() {
        if (this.multiple) {
            const selectedOptions = this._selectionModel.selected.map(option => option.label.trim());
            return selectedOptions.join(', ');
        }
        if (this._selectionModel.selected[0]) {
            return this._selectionModel.selected[0].label;
        }
        return '';
    }
    get hasSelection() {
        return this._selectionModel && !this._selectionModel.isEmpty();
    }
    get allChecked() {
        const selectionsNumber = this._selectionModel.selected.length;
        const optionsNumber = this.options.length;
        return selectionsNumber === optionsNumber;
    }
    handleKeydown(event) {
        if (!this.disabled) {
            this._handleClosedKeydown(event);
        }
    }
    get select() {
        return true;
    }
    get isOutline() {
        return this.outline;
    }
    get isMultiselectable() {
        return this.multiple;
    }
    get hasPopup() {
        return true;
    }
    get isDisabled() {
        return this.disabled;
    }
    get isExpanded() {
        return this._isOpen;
    }
    get role() {
        return this.filter ? 'combobox' : 'listbox';
    }
    ngAfterContentInit() {
        this._initKeyManager();
        this._setInitialValue();
        this._listenToOptionClick();
        if (this.selectAllOption) {
            this._listenToSelectAllClick();
        }
        if (this.filter) {
            this.filter.inputChange.pipe(takeUntil(this._destroy)).subscribe(() => {
                if (this.multiple && !this.filter.value) {
                    this.previousSelectedValues = this.options
                        .filter(option => option.selected)
                        .map(option => option.value);
                }
            });
        }
    }
    restoreMultipleOptions() {
        if (this.multiple && this.filter) {
            if (this.filter.value &&
                this.filter.value.length &&
                this.previousSelectedValues &&
                Array.isArray(this.previousSelectedValues)) {
                if (!this.value || !Array.isArray(this.value)) {
                    this.value = [];
                }
                const optionValues = this.options.map(option => option.value);
                this.previousSelectedValues.forEach(previousValue => {
                    if (!this.value.some((v) => this.compareWith(v, previousValue)) &&
                        !optionValues.some(v => this.compareWith(v, previousValue))) {
                        // if a value that was selected before is deselected and not found in the options, it was deselected
                        // due to the filtering, so we restore it.
                        this.value.push(previousValue);
                    }
                });
            }
            this.previousSelectedValues = this.value;
        }
    }
    _initKeyManager() {
        const options = this.selectAllOption ? [this.selectAllOption, ...this.options] : this.options;
        if (this.filter) {
            this._keyManager = new ActiveDescendantKeyManager(options).withVerticalOrientation();
        }
        else {
            this._keyManager = new ActiveDescendantKeyManager(options)
                .withTypeAhead(200)
                .withVerticalOrientation();
        }
    }
    _listenToOptionClick() {
        this.options.changes
            .pipe(startWith(this.options), tap(() => {
            this._setInitialValue();
            setTimeout(() => {
                this._showNoResultsMsg = this.options.length === 0;
                this._keyManager.setActiveItem(null);
                this._initKeyManager();
                if (this._isOpen) {
                    this._highlightFirstOption();
                    if (this._keyManager.activeItem) {
                        this._scrollToOption(this._keyManager.activeItem);
                    }
                }
            }, 0);
        }), switchMap((options) => {
            return merge(...options.map((option) => option.click$));
        }), takeUntil(this._destroy))
            .subscribe((clickedOption) => this._handleOptionClick(clickedOption));
    }
    _listenToSelectAllClick() {
        this.selectAllOption.click$
            .pipe(takeUntil(this._destroy))
            .subscribe((option) => {
            this.onSelectAll(option);
        });
    }
    _updateValue() {
        let updatedValue = null;
        if (this.multiple) {
            updatedValue = this._selectionModel.selected.map(option => option.value);
        }
        else {
            updatedValue = this._selectionModel.selected[0].value;
        }
        this._value = updatedValue;
        this.restoreMultipleOptions();
        this._cdRef.markForCheck();
    }
    _handleOptionClick(option) {
        if (option.disabled) {
            return;
        }
        if (this.multiple) {
            this._handleMultipleSelection(option);
        }
        else {
            this._handleSingleSelection(option);
        }
        this._updateLabeLPosition();
        this._cdRef.markForCheck();
    }
    _handleSingleSelection(option) {
        const currentSelection = this._selectionModel.selected[0];
        this._selectionModel.select(option);
        option.select();
        if (currentSelection && currentSelection !== option) {
            this._selectionModel.deselect(currentSelection);
            currentSelection.deselect();
            this.deselected.emit(currentSelection.value);
        }
        if (!currentSelection || (currentSelection && currentSelection !== option)) {
            this._updateValue();
            this.valueChange.emit(this.value);
            this._onChange(this.value);
            this.selected.emit(option.value);
        }
        this.close();
        this._focus();
        this._updateLabeLPosition();
    }
    _handleMultipleSelection(option) {
        const currentSelections = this._selectionModel.selected;
        if (option.selected) {
            this._selectionModel.deselect(option);
            option.deselect();
            this.deselected.emit(currentSelections);
        }
        else {
            this._selectionModel.select(option);
            option.select();
            this.selected.emit(option.value);
        }
        this._selectAllChecked = this.allChecked ? true : false;
        if (this.selectAllOption && !this._selectAllChecked) {
            this.selectAllOption.deselect();
        }
        this._updateValue();
        this._sortValues();
        this.valueChange.emit(this.value);
        this._onChange(this.value);
        this._cdRef.markForCheck();
    }
    _setSelection(selectValue) {
        if (selectValue) {
            if (this.multiple) {
                this._selectionModel.clear();
                selectValue.forEach((value) => this._selectByValue(value));
                this._sortValues();
            }
            else {
                this._selectByValue(selectValue);
            }
        }
        this._cdRef.markForCheck();
    }
    _selectByValue(value) {
        const matchingOption = this.options
            .toArray()
            .find((option) => this._compareWith(option.value, value));
        if (matchingOption) {
            this._selectionModel.select(matchingOption);
            matchingOption.select();
            this.selected.emit(matchingOption.value);
        }
    }
    _setInitialValue() {
        const value = this.ngControl ? this.ngControl.value : this._value;
        Promise.resolve().then(() => {
            this._setSelection(value);
        });
    }
    onSelectAll(selectAlloption) {
        if (!selectAlloption.selected && !this._selectAllChecked) {
            this._selectAllChecked = true;
            this.options.forEach((option) => {
                if (!option.disabled) {
                    this._selectionModel.select(option);
                    option.select();
                }
            });
            this._updateValue();
            this._sortValues();
            this.valueChange.emit(this.value);
            this._onChange(this.value);
            this._updateLabeLPosition();
            selectAlloption.select();
        }
        else {
            this._selectAllChecked = false;
            this._selectionModel.clear();
            this.options.forEach((option) => {
                option.deselect();
            });
            selectAlloption.deselect();
            this._updateValue();
            this.valueChange.emit(this.value);
            this._onChange(this.value);
            this._updateLabeLPosition();
        }
    }
    open() {
        if (this.disabled) {
            return;
        }
        let overlayRef = this._overlayRef;
        if (!overlayRef) {
            this._portal = new TemplatePortal(this._dropdownTemplate, this._vcr);
            overlayRef = this._overlay.create({
                width: this._selectWrapper.nativeElement.offsetWidth,
                scrollStrategy: this._overlay.scrollStrategies.reposition(),
                positionStrategy: this._getOverlayPosition(),
            });
            this._overlayRef = overlayRef;
            overlayRef.keydownEvents().subscribe((event) => {
                // tslint:disable-next-line: deprecation
                const key = event.keyCode;
                if (key === ESCAPE || (key === UP_ARROW && event.altKey)) {
                    event.preventDefault();
                    event.stopPropagation();
                    this.close();
                    this._focus();
                }
            });
        }
        if (overlayRef && !overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
            this._listenToOutSideCick(overlayRef, this._selectValue.nativeElement).subscribe(() => this.close());
            if (this.filter) {
                this.filter.focus();
            }
            this._highlightFirstOption();
        }
        if (this._viewportRuler) {
            this._viewportRuler
                .change()
                .pipe(takeUntil(this._destroy))
                .subscribe(() => {
                if (this._isOpen && overlayRef) {
                    overlayRef.updateSize({ width: this._selectWrapper.nativeElement.offsetWidth });
                }
            });
        }
        setTimeout(() => {
            const firstSelected = this._selectionModel.selected[0];
            if (firstSelected) {
                this._scrollToOption(firstSelected);
            }
        }, 0);
        this.opened.emit();
        setTimeout(() => {
            this._renderer.listen(this.dropdown.nativeElement, 'keydown', (event) => {
                this._handleOpenKeydown(event);
            });
        }, 0);
        this._updateLabeLPosition();
        if (!this.filter) {
            setTimeout(() => {
                this.dropdown.nativeElement.focus();
            }, 0);
        }
        this._isOpen = true;
        this._cdRef.markForCheck();
    }
    _sortValues() {
        if (this.multiple) {
            const options = this.options.toArray();
            this._selectionModel.sort((a, b) => {
                return this.sortComparator
                    ? this.sortComparator(a, b, options)
                    : options.indexOf(a) - options.indexOf(b);
            });
        }
    }
    _listenToOutSideCick(overlayRef, origin) {
        return fromEvent(document, 'click').pipe(filter((event) => {
            const target = event.target;
            const notOrigin = target !== origin;
            const notValue = !this._selectValue.nativeElement.contains(target);
            const notOverlay = !!overlayRef && overlayRef.overlayElement.contains(target) === false;
            return notOrigin && notValue && notOverlay;
        }), takeUntil(overlayRef.detachments()));
    }
    _getOverlayPosition() {
        const positionStrategy = this._overlay
            .position()
            .flexibleConnectedTo(this._selectWrapper)
            .withPositions(this._getPositions())
            .withFlexibleDimensions(false);
        return positionStrategy;
    }
    _getPositions() {
        const bottomOffset = this.outline ? 4 : 6;
        const topOffset = this.outline ? -7 : -3;
        if (!this.outline) {
            return [
                {
                    originX: 'start',
                    originY: 'top',
                    offsetY: bottomOffset,
                    overlayX: 'start',
                    overlayY: 'top',
                },
                {
                    originX: 'start',
                    originY: 'bottom',
                    offsetY: topOffset,
                    overlayX: 'start',
                    overlayY: 'bottom',
                },
            ];
        }
        else {
            return [
                {
                    originX: 'start',
                    originY: 'bottom',
                    offsetY: bottomOffset,
                    overlayX: 'start',
                    overlayY: 'top',
                },
                {
                    originX: 'start',
                    originY: 'top',
                    offsetY: topOffset,
                    overlayX: 'start',
                    overlayY: 'bottom',
                },
            ];
        }
    }
    close() {
        if (!this._isOpen) {
            return;
        }
        if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
            this._isOpen = false;
        }
        this.closed.emit();
        this._updateLabeLPosition();
        this._keyManager.setActiveItem(null);
        this._onTouched();
        this._cdRef.markForCheck();
    }
    toggle() {
        this._isOpen ? this.close() : this.open();
    }
    _updateLabeLPosition() {
        if (!this.placeholder && !this.hasSelected) {
            this._labelActive = false;
        }
        else {
            this._labelActive = true;
        }
    }
    get hasSelected() {
        return this._selectionModel.selected.length !== 0;
    }
    _scrollToOption(option) {
        let optionIndex;
        if (this.multiple && this.selectAllOption) {
            optionIndex = this.options.toArray().indexOf(option) + 1;
        }
        else {
            optionIndex = this.options.toArray().indexOf(option);
        }
        const groupsNumber = this._getNumberOfGroupsBeforeOption(optionIndex);
        const scrollToIndex = optionIndex + groupsNumber;
        const list = this._optionsWrapper.nativeElement;
        const listHeight = list.offsetHeight;
        if (optionIndex > -1) {
            const optionTop = scrollToIndex * this.optionHeight;
            const optionBottom = optionTop + this.optionHeight;
            const viewTop = list.scrollTop;
            const viewBottom = this.dropdownHeight;
            if (optionBottom > viewBottom) {
                list.scrollTop = optionBottom - listHeight;
            }
            else if (optionTop < viewTop) {
                list.scrollTop = optionTop;
            }
        }
    }
    _getNumberOfGroupsBeforeOption(optionIndex) {
        if (this.optionGroups.length) {
            const optionsList = this.options.toArray();
            const groupsList = this.optionGroups.toArray();
            const index = this.multiple ? optionIndex - 1 : optionIndex;
            let groupsNumber = 0;
            for (let i = 0; i <= index; i++) {
                if (optionsList[i].group && optionsList[i].group === groupsList[groupsNumber]) {
                    groupsNumber++;
                }
            }
            return groupsNumber;
        }
        return 0;
    }
    handleSelectionClear(event) {
        if (event.button === 2) {
            return;
        }
        this._selectionModel.clear();
        this.options.forEach((option) => {
            option.deselect();
        });
        if (this.selectAllOption && this._selectAllChecked) {
            this.selectAllOption.deselect();
            this._selectAllChecked = false;
        }
        this.value = null;
        this.valueChange.emit(null);
        this._onChange(null);
        this._updateLabeLPosition();
        this._selectAllChecked = false;
    }
    _handleOpenKeydown(event) {
        const key = event.keyCode;
        const manager = this._keyManager;
        const isUserTyping = manager.isTyping();
        const previousActiveItem = manager.activeItem;
        manager.onKeydown(event);
        if (key === HOME || key === END) {
            event.preventDefault();
            key === HOME ? manager.setFirstItemActive() : manager.setLastItemActive();
            if (manager.activeItem) {
                this._scrollToOption(manager.activeItem);
            }
        }
        else if (this._overlayRef &&
            this._overlayRef.hasAttached() &&
            !isUserTyping &&
            manager.activeItem &&
            (key === ENTER || (key === SPACE && !this.filter))) {
            event.preventDefault();
            if (this.multiple && this.selectAllOption && manager.activeItemIndex === 0) {
                this.onSelectAll(this.selectAllOption);
            }
            else {
                this._handleOptionClick(manager.activeItem);
            }
        }
        else if (key === UP_ARROW && event.altKey) {
            event.preventDefault();
            this.close();
            this._focus();
        }
        else if (key === UP_ARROW || key === DOWN_ARROW) {
            if (manager.activeItem && manager.activeItem !== previousActiveItem) {
                this._scrollToOption(manager.activeItem);
            }
        }
    }
    _handleClosedKeydown(event) {
        const key = event.keyCode;
        const manager = this._keyManager;
        if ((key === DOWN_ARROW && event.altKey) || key === ENTER) {
            event.preventDefault();
            this.open();
        }
        else if (!this.multiple && key === DOWN_ARROW) {
            event.preventDefault();
            manager.setNextItemActive();
            if (manager.activeItem) {
                this._handleOptionClick(manager.activeItem);
            }
        }
        else if (!this.multiple && key === UP_ARROW) {
            event.preventDefault();
            manager.setPreviousItemActive();
            if (manager.activeItem) {
                this._handleOptionClick(manager.activeItem);
            }
        }
        else if (!this.multiple && key === HOME) {
            event.preventDefault();
            manager.setFirstItemActive();
            if (manager.activeItem) {
                this._handleOptionClick(manager.activeItem);
            }
        }
        else if (!this.multiple && key === END) {
            event.preventDefault();
            manager.setLastItemActive();
            if (manager.activeItem) {
                this._handleOptionClick(manager.activeItem);
            }
        }
        else if (this.multiple && (key === DOWN_ARROW || key === UP_ARROW)) {
            event.preventDefault();
            this.open();
        }
    }
    handleOptionsWheel(event) {
        const optionsList = this._optionsWrapper.nativeElement;
        const atTop = optionsList.scrollTop === 0;
        const atBottom = optionsList.offsetHeight + optionsList.scrollTop === optionsList.scrollHeight;
        if (atTop && event.deltaY < 0) {
            event.preventDefault();
        }
        else if (atBottom && event.deltaY > 0) {
            event.preventDefault();
        }
    }
    _focus() {
        this._hasFocus = true;
        this._selectWrapper.nativeElement.focus();
    }
    _highlightFirstOption() {
        if (!this.hasSelection) {
            this._keyManager.setFirstItemActive();
        }
        else if (this.hasSelection && !this._selectionModel.selected[0].disabled) {
            this._keyManager.setActiveItem(this._selectionModel.selected[0]);
        }
    }
    onFocus() {
        if (!this.disabled) {
            this._focus();
        }
    }
    onBlur() {
        if (!this._isOpen && !this.disabled) {
            this._onTouched();
        }
        this._hasFocus = false;
    }
    ngOnInit() {
        this._selectionModel = new SelectionModel(this.multiple);
        if (this.label) {
            this._updateLabeLPosition();
        }
    }
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
    writeValue(value) {
        if (this.options) {
            this._setSelection(value);
        }
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cdRef.markForCheck();
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
};
MdbSelectComponent.ctorParameters = () => [
    { type: Overlay },
    { type: ViewportRuler },
    { type: ViewContainerRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: NgControl, decorators: [{ type: Self }, { type: Optional }] }
];
__decorate([
    ViewChild('selectWrapper'),
    __metadata("design:type", ElementRef)
], MdbSelectComponent.prototype, "_selectWrapper", void 0);
__decorate([
    ViewChild('selectValue'),
    __metadata("design:type", ElementRef)
], MdbSelectComponent.prototype, "_selectValue", void 0);
__decorate([
    ViewChild('dropdownTemplate'),
    __metadata("design:type", TemplateRef)
], MdbSelectComponent.prototype, "_dropdownTemplate", void 0);
__decorate([
    ViewChild('dropdown'),
    __metadata("design:type", ElementRef)
], MdbSelectComponent.prototype, "dropdown", void 0);
__decorate([
    ContentChild(MdbSelectFilterComponent),
    __metadata("design:type", MdbSelectFilterComponent)
], MdbSelectComponent.prototype, "filter", void 0);
__decorate([
    ViewChild('optionsWrapper'),
    __metadata("design:type", ElementRef)
], MdbSelectComponent.prototype, "_optionsWrapper", void 0);
__decorate([
    ViewChild('customContent'),
    __metadata("design:type", ElementRef)
], MdbSelectComponent.prototype, "_customContent", void 0);
__decorate([
    ContentChild(SelectAllOptionComponent),
    __metadata("design:type", SelectAllOptionComponent)
], MdbSelectComponent.prototype, "selectAllOption", void 0);
__decorate([
    ContentChildren(OptionComponent, { descendants: true }),
    __metadata("design:type", QueryList)
], MdbSelectComponent.prototype, "options", void 0);
__decorate([
    ContentChildren(OptionGroupComponent),
    __metadata("design:type", QueryList)
], MdbSelectComponent.prototype, "optionGroups", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectComponent.prototype, "allowClear", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectComponent.prototype, "clearButtonTabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdbSelectComponent.prototype, "dropdownClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectComponent.prototype, "highlightFirst", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectComponent.prototype, "multiple", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectComponent.prototype, "notFoundMsg", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectComponent.prototype, "outline", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdbSelectComponent.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectComponent.prototype, "tabindex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectComponent.prototype, "required", void 0);
__decorate([
    Input('aria-label'),
    __metadata("design:type", Object)
], MdbSelectComponent.prototype, "ariaLabel", void 0);
__decorate([
    Input('aria-labelledby'),
    __metadata("design:type", String)
], MdbSelectComponent.prototype, "ariaLabelledby", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MdbSelectComponent.prototype, "visibleOptions", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdbSelectComponent.prototype, "optionHeight", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MdbSelectComponent.prototype, "dropdownHeight", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdbSelectComponent.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function])
], MdbSelectComponent.prototype, "compareWith", null);
__decorate([
    Input(),
    __metadata("design:type", Function)
], MdbSelectComponent.prototype, "sortComparator", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdbSelectComponent.prototype, "valueChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdbSelectComponent.prototype, "opened", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdbSelectComponent.prototype, "closed", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdbSelectComponent.prototype, "selected", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdbSelectComponent.prototype, "deselected", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdbSelectComponent.prototype, "noOptionsFound", void 0);
__decorate([
    HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdbSelectComponent.prototype, "handleKeydown", null);
__decorate([
    HostBinding('class.mdb-select'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MdbSelectComponent.prototype, "select", null);
__decorate([
    HostBinding('class.mdb-select-outline'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MdbSelectComponent.prototype, "isOutline", null);
__decorate([
    HostBinding('attr.aria-multiselectable'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MdbSelectComponent.prototype, "isMultiselectable", null);
__decorate([
    HostBinding('attr.aria-haspopup'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MdbSelectComponent.prototype, "hasPopup", null);
__decorate([
    HostBinding('attr.aria-disabled'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MdbSelectComponent.prototype, "isDisabled", null);
__decorate([
    HostBinding('attr.aria-expanded'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MdbSelectComponent.prototype, "isExpanded", null);
__decorate([
    HostBinding('attr.aria-role'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MdbSelectComponent.prototype, "role", null);
MdbSelectComponent = MdbSelectComponent_1 = __decorate([
    Component({
        selector: 'mdb-select-2',
        template: "<label\n  class=\"mdb-select-label\"\n  [ngClass]=\"{\n    active: _labelActive,\n    focused: _hasFocus || _isOpen,\n    outline: outline,\n    disabled: disabled\n  }\"\n  >{{ label }}</label\n>\n<div\n  #selectWrapper\n  [attr.tabindex]=\"disabled ? -1 : tabindex\"\n  (focus)=\"onFocus()\"\n  (blur)=\"onBlur()\"\n  class=\"mdb-select-wrapper\"\n  [ngClass]=\"{ disabled: disabled }\"\n  (click)=\"open()\"\n>\n  <div\n    #selectValue\n    class=\"mdb-select-value form-control\"\n    [ngClass]=\"{ focused: _hasFocus || _isOpen }\"\n  >\n    <span\n      *ngIf=\"placeholder && !selectionView\"\n      class=\"mdb-select-placeholder\"\n      [ngClass]=\"{ disabled: disabled }\"\n      >{{ placeholder }}</span\n    >\n    <span *ngIf=\"selectionView\" class=\"mdb-select-value-label\" [ngClass]=\"{ disabled: disabled }\">\n      <span>{{ selectionView }}</span>\n    </span>\n    <div class=\"mdb-select-icons-wrapper\">\n      <span\n        class=\"mdb-select-clear-btn\"\n        [ngClass]=\"{ disabled: disabled }\"\n        [attr.tabindex]=\"clearButtonTabindex\"\n        *ngIf=\"allowClear && hasSelected\"\n        [ngClass]=\"{ focused: _hasFocus || _isOpen }\"\n        (mousedown)=\"handleSelectionClear($event)\"\n        >&#x2715;</span\n      >\n      <span\n        class=\"mdb-select-arrow\"\n        [ngClass]=\"{ focused: _hasFocus || _isOpen, disabled: disabled }\"\n      ></span>\n    </div>\n  </div>\n</div>\n\n<ng-template #dropdownTemplate>\n  <div\n    #dropdown\n    [@dropdownAnimation]=\"'visible'\"\n    tabindex=\"-1\"\n    class=\"mdb-select-dropdown {{ dropdownClass }}\"\n  >\n    <ng-content select=\"mdb-select-filter\"></ng-content>\n    <div\n      #optionsWrapper\n      class=\"mdb-select-options-wrapper\"\n      [ngStyle]=\"{ 'max-height.px': dropdownHeight }\"\n    >\n      <div class=\"mdb-select-options\">\n        <ng-content select=\"mdb-select-all-option\"></ng-content>\n        <span class=\"mdb-select-no-results\" *ngIf=\"filter && _showNoResultsMsg && notFoundMsg\">{{\n          notFoundMsg\n        }}</span>\n        <ng-content select=\"mdb-select-option, mdb-option-group\"></ng-content>\n      </div>\n    </div>\n    <div #customContent class=\"mdb-select-custom-content\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [dropdownAnimation],
        providers: [{ provide: MDB_OPTION_PARENT, useExisting: MdbSelectComponent_1 }],
        styles: ["@charset \"UTF-8\";.md-form .mdb-select .mdb-select-label{max-width:95%;color:#757575;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.md-form .mdb-select .mdb-select-label.outline{max-width:90%}.md-form .mdb-select .mdb-select-label.outline.active{max-width:110%;font-weight:500}.md-form .mdb-select .mdb-select-label.focused{color:#4285f4}.mdb-select{display:block}.mdb-select-label{color:#757575;font-size:1rem;position:absolute;top:12px;margin:0;transition:.2s ease-out;transform:translateY(0);cursor:text}.mdb-select-label.active{font-size:.8rem;transform:translateY(-22px)}.mdb-select-label.focused{color:#4285f4}.mdb-select-label.active.disabled,.mdb-select-label.disabled{color:#aaa}.mdb-select-label.outline{padding-left:13px}.mdb-select-label.outline.active{font-weight:500;background-color:#fff;left:10px;padding-left:5px;padding-right:5px;z-index:1;max-width:80%}.mdb-select-wrapper{position:relative;outline:0}.mdb-select-value{box-sizing:content-box;display:flex;justify-content:space-between;align-items:center;cursor:pointer;background-color:transparent;border:0;border-radius:0;border-bottom:1px solid #ced4da;width:100%;height:24px!important;font-size:1rem;margin:0 0 .5rem;padding:.6rem 0 .4rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.mdb-select-value.focused{box-shadow:0 1px 0 0 #4285f4;border-bottom:1px solid #4285f4;outline:0}.mdb-select-value.disabled{color:#aaa}.mdb-select-outline .mdb-select-value{border:1px solid #ced4da;border-radius:4px}.mdb-select-outline .mdb-select-value.focused{border:1px solid #4285f4;box-shadow:inset 0 0 0 1px #4285f4}.mdb-select-placeholder{color:#6c757d;opacity:1;font-weight:400;width:100%;max-width:90%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mdb-select-placeholder.disabled{color:#aaa}.mdb-select-outline .mdb-select-placeholder{padding-left:13px}.mdb-select-value-label{color:#292b2c;font-weight:400;overflow:hidden;min-width:0;width:90%;text-overflow:ellipsis;white-space:nowrap}.mdb-select-value-label.disabled{color:#aaa}.mdb-select-outline .mdb-select-value-label{padding-left:13px}.mdb-select-icons-wrapper{display:flex;align-items:center;margin-top:4px}.mdb-select-clear-btn{color:#000;font-size:.8rem;position:absolute;top:14px;right:20px}.mdb-select-clear-btn.focused{color:#4285f4}.mdb-select-clear-btn.disabled{color:#aaa}.mdb-select-outline .mdb-select-clear-btn{top:14px;right:22px}.mdb-select-arrow{color:#000;text-align:center;font-size:.63rem;position:absolute;right:4px;top:15.5px}.mdb-select-arrow.focused{color:#4285f4}.mdb-select-arrow.disabled{color:#aaa}.mdb-select-arrow:before{content:\"\u25BC\"}.mdb-select-outline .mdb-select-arrow{right:10px;top:15.5px}.mdb-select-dropdown{background-color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);margin:0;min-width:100px;width:100%;outline:0;position:relative}.mdb-select-options-wrapper{overflow-y:auto}.mdb-select-options-wrapper::-webkit-scrollbar{width:4px;height:4px}.mdb-select-options-wrapper:focus{background-color:red}.mdb-select-options-wrapper::-webkit-scrollbar-button:end:increment,.mdb-select-options-wrapper::-webkit-scrollbar-button:start:decrement{display:block;height:0;background-color:transparent}.mdb-select-options-wrapper::-webkit-scrollbar-track-piece{background-color:transparent;border-radius:0 0 4px 4px}.mdb-select-options-wrapper::-webkit-scrollbar-thumb:vertical{height:50px;background-color:#999;border-radius:4px}.mdb-select-no-results{height:48px;padding-left:16px;padding-right:16px;display:flex;align-items:center}.mdb-select-filter{height:38px;margin-bottom:1rem}.mdb-select-custom-content{background-color:transparent;padding:0 .5rem;font-size:.9rem}.mdb-select-dropdown-colorful .mdb-option.selected:not(.active):not(.mdb-select-all-option):not(.disabled) .mdb-option-checkbox:checked+.mdb-option-checkbox-label:before,.mdb-select-dropdown-colorful .mdb-option:hover .mdb-option-checkbox:checked+.mdb-option-checkbox-label:before{border-color:transparent #fff #fff transparent}.mdb-select-dropdown-colorful .mdb-option:hover .mdb-option-checkbox+.mdb-option-checkbox-label:before{border-color:#fff}.mdb-select-dropdown-primary .mdb-option.selected{color:#fff;background-color:#4285f4}.mdb-select-dropdown-primary .mdb-option.mdb-select-all-option.selected{background-color:transparent;color:rgba(0,0,0,.87)}.mdb-select-dropdown-primary .mdb-option.active{color:rgba(0,0,0,.87);background-color:#ddd}.mdb-select-dropdown-primary .mdb-option:hover{color:#fff!important;background-color:#4285f4!important}.mdb-select-dropdown-danger .mdb-option.selected{color:#fff;background-color:#c00}.mdb-select-dropdown-danger .mdb-option.mdb-select-all-option.selected{background-color:transparent;color:rgba(0,0,0,.87)}.mdb-select-dropdown-danger .mdb-option.active{color:rgba(0,0,0,.87);background-color:#ddd}.mdb-select-dropdown-danger .mdb-option:hover{color:#fff!important;background-color:#c00!important}.mdb-select-dropdown-default .mdb-option.selected{color:#fff;background-color:#2bbbad}.mdb-select-dropdown-default .mdb-option.mdb-select-all-option.selected{background-color:transparent;color:rgba(0,0,0,.87)}.mdb-select-dropdown-default .mdb-option.active{color:rgba(0,0,0,.87);background-color:#ddd}.mdb-select-dropdown-default .mdb-option:hover{color:#fff!important;background-color:#2bbbad!important}.mdb-select-dropdown-success .mdb-option.selected{color:#fff;background-color:#00c851}.mdb-select-dropdown-success .mdb-option.mdb-select-all-option.selected{background-color:transparent;color:rgba(0,0,0,.87)}.mdb-select-dropdown-success .mdb-option.active{color:rgba(0,0,0,.87);background-color:#ddd}.mdb-select-dropdown-success .mdb-option:hover{color:#fff!important;background-color:#00c851!important}.mdb-select-dropdown-info .mdb-option.selected{color:#fff;background-color:#33b5e5}.mdb-select-dropdown-info .mdb-option.mdb-select-all-option.selected{background-color:transparent;color:rgba(0,0,0,.87)}.mdb-select-dropdown-info .mdb-option.active{color:rgba(0,0,0,.87);background-color:#ddd}.mdb-select-dropdown-info .mdb-option:hover{color:#fff!important;background-color:#33b5e5!important}.mdb-select-dropdown-warning .mdb-option.selected{color:#fff;background-color:#fb3}.mdb-select-dropdown-warning .mdb-option.mdb-select-all-option.selected{background-color:transparent;color:rgba(0,0,0,.87)}.mdb-select-dropdown-warning .mdb-option.active{color:rgba(0,0,0,.87);background-color:#ddd}.mdb-select-dropdown-warning .mdb-option:hover{color:#fff!important;background-color:#fb3!important}.mdb-select-dropdown-unique .mdb-option.selected{color:#fff;background-color:#3f729b}.mdb-select-dropdown-unique .mdb-option.mdb-select-all-option.selected{background-color:transparent;color:rgba(0,0,0,.87)}.mdb-select-dropdown-unique .mdb-option.active{color:rgba(0,0,0,.87);background-color:#ddd}.mdb-select-dropdown-unique .mdb-option:hover{color:#fff!important;background-color:#3f729b!important}.mdb-select-dropdown-elegant .mdb-option.selected{color:#fff;background-color:#2e2e2e}.mdb-select-dropdown-elegant .mdb-option.mdb-select-all-option.selected{background-color:transparent;color:rgba(0,0,0,.87)}.mdb-select-dropdown-elegant .mdb-option.active{color:rgba(0,0,0,.87);background-color:#ddd}.mdb-select-dropdown-elegant .mdb-option:hover{color:#fff!important;background-color:#2e2e2e!important}.mdb-select.validate-success.ng-valid.ng-touched .mdb-select-value{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}.mdb-select.mdb-select-outline.validate-success.ng-valid.ng-touched .mdb-select-value{border:1px solid #00c851!important;box-shadow:inset 0 0 0 1px #00c851!important}.mdb-select.validate-success.ng-valid.ng-touched .mdb-select-label{color:#00c851!important}.mdb-select.mdb-select-outline.validate-success.ng-valid.ng-touched .mdb-select-label{font-weight:400!important}.form-submitted .mdb-select.validate-error.ng-invalid .mdb-select-value,.mdb-select.validate-error.ng-invalid.ng-touched .mdb-select-value{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.mdb-select.mdb-select-outline.validate-error.ng-invalid.ng-touched .mdb-select-value{border:1px solid #f44336!important;box-shadow:inset 0 0 0 1px #f44336!important}.form-submitted .mdb-select.validate-error.ng-invalid.ng-touched .mdb-select-label,.mdb-select.validate-error.ng-invalid.ng-touched .mdb-select-label{color:#f44336!important}.mdb-select.mdb-select-outline.validate-error.ng-invalid.ng-touched .mdb-select-label{font-weight:400!important}"]
    })
    // tslint:disable-next-line:component-class-suffix
    ,
    __param(5, Self()), __param(5, Optional()),
    __metadata("design:paramtypes", [Overlay,
        ViewportRuler,
        ViewContainerRef,
        ChangeDetectorRef,
        Renderer2,
        NgControl])
], MdbSelectComponent);
export { MdbSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsS0FBSyxFQUNMLGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFDWCxNQUFNLEVBQ04sWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLElBQUksRUFDSixRQUFRLEVBQ1IsWUFBWSxFQUNaLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUNMLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLGFBQWEsRUFDYixzQkFBc0IsR0FDdkIsTUFBTSxzQkFBc0IsQ0FB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QUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozt1REFLbkM7QUFHRDtJQURDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQzs7O2dEQUcvQjtBQUdEO0lBREMsV0FBVyxDQUFDLDBCQUEwQixDQUFDOzs7bURBR3ZDO0FBR0Q7SUFEQyxXQUFXLENBQUMsMkJBQTJCLENBQUM7OzsyREFHeEM7QUFHRDtJQURDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQzs7O2tEQUdqQztBQUdEO0lBREMsV0FBVyxDQUFDLG9CQUFvQixDQUFDOzs7b0RBR2pDO0FBR0Q7SUFEQyxXQUFXLENBQUMsb0JBQW9CLENBQUM7OztvREFHakM7QUFHRDtJQURDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQzs7OzhDQUc3QjtBQXZNVSxrQkFBa0I7SUFYOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsd3hFQUFzQztRQUV0QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUMvQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsb0JBQWtCLEVBQUUsQ0FBQzs7S0FDN0UsQ0FBQztJQUVGLGtEQUFrRDs7SUFnTjdDLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBO3FDQUxELE9BQU87UUFDRCxhQUFhO1FBQ3ZCLGdCQUFnQjtRQUNkLGlCQUFpQjtRQUNkLFNBQVM7UUFDVSxTQUFTO0dBL010QyxrQkFBa0IsQ0E2MUI5QjtTQTcxQlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgU2VsZixcbiAgT3B0aW9uYWwsXG4gIEhvc3RMaXN0ZW5lcixcbiAgUmVuZGVyZXIyLFxuICBDb250ZW50Q2hpbGQsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRyb3Bkb3duQW5pbWF0aW9uIH0gZnJvbSAnLi9zZWxlY3QtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2VVbnRpbCwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1EQl9PUFRJT05fUEFSRU5ULCBPcHRpb25Db21wb25lbnQgfSBmcm9tICcuLi9vcHRpb24vb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuLi9vcHRpb24vb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RBbGxPcHRpb25Db21wb25lbnQgfSBmcm9tICcuLi9vcHRpb24vc2VsZWN0LWFsbC1vcHRpb24nO1xuaW1wb3J0IHtcbiAgT3ZlcmxheVJlZixcbiAgUG9zaXRpb25TdHJhdGVneSxcbiAgT3ZlcmxheSxcbiAgVmlld3BvcnRSdWxlcixcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gIEVTQ0FQRSxcbiAgVVBfQVJST1csXG4gIEhPTUUsXG4gIEVORCxcbiAgRU5URVIsXG4gIFNQQUNFLFxuICBET1dOX0FSUk9XLFxufSBmcm9tICcuLi8uLi9mcmVlL3V0aWxzL2tleWJvYXJkLW5hdmlnYXRpb24nO1xuaW1wb3J0IHsgTWRiU2VsZWN0RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWxlY3QtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNlbGVjdC0yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NlbGVjdC1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW2Ryb3Bkb3duQW5pbWF0aW9uXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBNREJfT1BUSU9OX1BBUkVOVCwgdXNlRXhpc3Rpbmc6IE1kYlNlbGVjdENvbXBvbmVudCB9XSxcbn0pXG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtY2xhc3Mtc3VmZml4XG5leHBvcnQgY2xhc3MgTWRiU2VsZWN0Q29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQFZpZXdDaGlsZCgnc2VsZWN0V3JhcHBlcicpIHByaXZhdGUgX3NlbGVjdFdyYXBwZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NlbGVjdFZhbHVlJykgcHJpdmF0ZSBfc2VsZWN0VmFsdWU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duVGVtcGxhdGUnKSBfZHJvcGRvd25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd24nKSBkcm9wZG93bjogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZChNZGJTZWxlY3RGaWx0ZXJDb21wb25lbnQpIGZpbHRlcjogTWRiU2VsZWN0RmlsdGVyQ29tcG9uZW50O1xuICBAVmlld0NoaWxkKCdvcHRpb25zV3JhcHBlcicpIHByaXZhdGUgX29wdGlvbnNXcmFwcGVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjdXN0b21Db250ZW50JykgX2N1c3RvbUNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBDb250ZW50Q2hpbGQoU2VsZWN0QWxsT3B0aW9uQ29tcG9uZW50KSBzZWxlY3RBbGxPcHRpb246IFNlbGVjdEFsbE9wdGlvbkNvbXBvbmVudDtcbiAgQENvbnRlbnRDaGlsZHJlbihPcHRpb25Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgb3B0aW9uczogUXVlcnlMaXN0PE9wdGlvbkNvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGRyZW4oT3B0aW9uR3JvdXBDb21wb25lbnQpIG9wdGlvbkdyb3VwczogUXVlcnlMaXN0PE9wdGlvbkdyb3VwQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBhbGxvd0NsZWFyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNsZWFyQnV0dG9uVGFiaW5kZXggPSAwO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBkcm9wZG93bkNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodEZpcnN0ID0gdHJ1ZTtcbiAgQElucHV0KCkgbGFiZWwgPSAnJztcbiAgQElucHV0KCkgbXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbm90Rm91bmRNc2cgPSAnTm8gcmVzdWx0cyBmb3VuZCc7XG4gIEBJbnB1dCgpIG91dGxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgdGFiaW5kZXggPSAwO1xuICBASW5wdXQoKSByZXF1aXJlZCA9IGZhbHNlO1xuICBASW5wdXQoJ2FyaWEtbGFiZWwnKSBhcmlhTGFiZWwgPSAnJztcbiAgQElucHV0KCdhcmlhLWxhYmVsbGVkYnknKSBhcmlhTGFiZWxsZWRieTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBnZXQgdmlzaWJsZU9wdGlvbnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZU9wdGlvbnM7XG4gIH1cblxuICBzZXQgdmlzaWJsZU9wdGlvbnModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgdGhpcy5fdmlzaWJsZU9wdGlvbnMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfdmlzaWJsZU9wdGlvbnMgPSA1O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBvcHRpb25IZWlnaHQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uSGVpZ2h0O1xuICB9XG5cbiAgc2V0IG9wdGlvbkhlaWdodCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLl9vcHRpb25IZWlnaHQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcHRpb25IZWlnaHQgPSA0ODtcblxuICBASW5wdXQoKVxuICBnZXQgZHJvcGRvd25IZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZHJvcGRvd25IZWlnaHQ7XG4gIH1cblxuICBzZXQgZHJvcGRvd25IZWlnaHQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgdGhpcy5fZHJvcGRvd25IZWlnaHQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgLy8gRXF1YWwgdG8gNCAqIG9wdGlvbkhlaWdodCAod2hpY2ggaXMgNDhweCBieSBkZWZhdWx0KVxuICBwcm90ZWN0ZWQgX2Ryb3Bkb3duSGVpZ2h0ID0gMjQwO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cbiAgc2V0IHZhbHVlKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fdmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy53cml0ZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfdmFsdWU6IGFueTtcblxuICBASW5wdXQoKVxuICBnZXQgY29tcGFyZVdpdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBhcmVXaXRoO1xuICB9XG4gIHNldCBjb21wYXJlV2l0aChmbjogKG8xOiBhbnksIG8yOiBhbnkpID0+IGJvb2xlYW4pIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9jb21wYXJlV2l0aCA9IGZuO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpIHNvcnRDb21wYXJhdG9yOiAoXG4gICAgYTogT3B0aW9uQ29tcG9uZW50LFxuICAgIGI6IE9wdGlvbkNvbXBvbmVudCxcbiAgICBvcHRpb25zOiBPcHRpb25Db21wb25lbnRbXVxuICApID0+IG51bWJlcjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvcGVuZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjbG9zZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPE9wdGlvbkNvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPE9wdGlvbkNvbXBvbmVudD4oKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICBAT3V0cHV0KCkgZGVzZWxlY3RlZDogRXZlbnRFbWl0dGVyPE9wdGlvbkNvbXBvbmVudCB8IE9wdGlvbkNvbXBvbmVudFtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8XG4gICAgT3B0aW9uQ29tcG9uZW50IHwgT3B0aW9uQ29tcG9uZW50W11cbiAgPigpO1xuICBAT3V0cHV0KCkgbm9PcHRpb25zRm91bmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgZ2V0IGFjdGl2ZU9wdGlvbigpOiBPcHRpb25Db21wb25lbnQgfCBudWxsIHtcbiAgICBpZiAodGhpcy5fa2V5TWFuYWdlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX2tleU1hbmFnZXIuYWN0aXZlSXRlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldCBzZWxlY3Rpb25WaWV3KCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLm1hcChvcHRpb24gPT4gb3B0aW9uLmxhYmVsLnRyaW0oKSk7XG5cbiAgICAgIHJldHVybiBzZWxlY3RlZE9wdGlvbnMuam9pbignLCAnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRbMF0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXS5sYWJlbDtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBnZXQgaGFzU2VsZWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbCAmJiAhdGhpcy5fc2VsZWN0aW9uTW9kZWwuaXNFbXB0eSgpO1xuICB9XG5cbiAgZ2V0IGFsbENoZWNrZWQoKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uc051bWJlciA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLmxlbmd0aDtcbiAgICBjb25zdCBvcHRpb25zTnVtYmVyID0gdGhpcy5vcHRpb25zLmxlbmd0aDtcblxuICAgIHJldHVybiBzZWxlY3Rpb25zTnVtYmVyID09PSBvcHRpb25zTnVtYmVyO1xuICB9XG5cbiAgcHJpdmF0ZSBfa2V5TWFuYWdlcjogQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXI8T3B0aW9uQ29tcG9uZW50IHwgbnVsbD47XG5cbiAgcHJpdmF0ZSBfb3ZlcmxheVJlZjogT3ZlcmxheVJlZiB8IG51bGw7XG4gIHByaXZhdGUgX3BvcnRhbDogVGVtcGxhdGVQb3J0YWw7XG5cbiAgcHJpdmF0ZSBfc2VsZWN0aW9uTW9kZWw6IFNlbGVjdGlvbk1vZGVsPE9wdGlvbkNvbXBvbmVudD47XG5cbiAgcHJldmlvdXNTZWxlY3RlZFZhbHVlczogYW55O1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIF9pc09wZW4gPSBmYWxzZTtcblxuICBfaGFzRm9jdXMgPSBmYWxzZTtcblxuICBfbGFiZWxBY3RpdmUgPSBmYWxzZTtcblxuICBfc2hvd05vUmVzdWx0c01zZyA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3NlbGVjdEFsbENoZWNrZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIF9jb21wYXJlV2l0aCA9IChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzI7XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUtleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5faGFuZGxlQ2xvc2VkS2V5ZG93bihldmVudCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tZGItc2VsZWN0JylcbiAgZ2V0IHNlbGVjdCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWRiLXNlbGVjdC1vdXRsaW5lJylcbiAgZ2V0IGlzT3V0bGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRsaW5lO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbXVsdGlzZWxlY3RhYmxlJylcbiAgZ2V0IGlzTXVsdGlzZWxlY3RhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGxlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtaGFzcG9wdXAnKVxuICBnZXQgaGFzUG9wdXAoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kaXNhYmxlZCcpXG4gIGdldCBpc0Rpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZXhwYW5kZWQnKVxuICBnZXQgaXNFeHBhbmRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcm9sZScpXG4gIGdldCByb2xlKCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlciA/ICdjb21ib2JveCcgOiAnbGlzdGJveCc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgX3ZpZXdwb3J0UnVsZXI6IFZpZXdwb3J0UnVsZXIsXG4gICAgcHJpdmF0ZSBfdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIEBTZWxmKCkgQE9wdGlvbmFsKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sXG4gICkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2luaXRLZXlNYW5hZ2VyKCk7XG4gICAgdGhpcy5fc2V0SW5pdGlhbFZhbHVlKCk7XG4gICAgdGhpcy5fbGlzdGVuVG9PcHRpb25DbGljaygpO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICB0aGlzLl9saXN0ZW5Ub1NlbGVjdEFsbENsaWNrKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLmZpbHRlci5pbnB1dENoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgIXRoaXMuZmlsdGVyLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdGVkVmFsdWVzID0gdGhpcy5vcHRpb25zXG4gICAgICAgICAgICAuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24uc2VsZWN0ZWQpXG4gICAgICAgICAgICAubWFwKG9wdGlvbiA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXN0b3JlTXVsdGlwbGVPcHRpb25zKCkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuZmlsdGVyKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuZmlsdGVyLnZhbHVlICYmXG4gICAgICAgIHRoaXMuZmlsdGVyLnZhbHVlLmxlbmd0aCAmJlxuICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMpXG4gICAgICApIHtcbiAgICAgICAgaWYgKCF0aGlzLnZhbHVlIHx8ICFBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdGlvblZhbHVlcyA9IHRoaXMub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RlZFZhbHVlcy5mb3JFYWNoKHByZXZpb3VzVmFsdWUgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICF0aGlzLnZhbHVlLnNvbWUoKHY6IGFueSkgPT4gdGhpcy5jb21wYXJlV2l0aCh2LCBwcmV2aW91c1ZhbHVlKSkgJiZcbiAgICAgICAgICAgICFvcHRpb25WYWx1ZXMuc29tZSh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgcHJldmlvdXNWYWx1ZSkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBpZiBhIHZhbHVlIHRoYXQgd2FzIHNlbGVjdGVkIGJlZm9yZSBpcyBkZXNlbGVjdGVkIGFuZCBub3QgZm91bmQgaW4gdGhlIG9wdGlvbnMsIGl0IHdhcyBkZXNlbGVjdGVkXG4gICAgICAgICAgICAvLyBkdWUgdG8gdGhlIGZpbHRlcmluZywgc28gd2UgcmVzdG9yZSBpdC5cbiAgICAgICAgICAgIHRoaXMudmFsdWUucHVzaChwcmV2aW91c1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2luaXRLZXlNYW5hZ2VyKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnNlbGVjdEFsbE9wdGlvbiA/IFt0aGlzLnNlbGVjdEFsbE9wdGlvbiwgLi4udGhpcy5vcHRpb25zXSA6IHRoaXMub3B0aW9ucztcblxuICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5fa2V5TWFuYWdlciA9IG5ldyBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcjxPcHRpb25Db21wb25lbnQgfCBudWxsPihcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKS53aXRoVmVydGljYWxPcmllbnRhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9rZXlNYW5hZ2VyID0gbmV3IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPE9wdGlvbkNvbXBvbmVudCB8IG51bGw+KG9wdGlvbnMpXG4gICAgICAgIC53aXRoVHlwZUFoZWFkKDIwMClcbiAgICAgICAgLndpdGhWZXJ0aWNhbE9yaWVudGF0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuVG9PcHRpb25DbGljaygpIHtcbiAgICB0aGlzLm9wdGlvbnMuY2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh0aGlzLm9wdGlvbnMpLFxuICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX3NldEluaXRpYWxWYWx1ZSgpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2hvd05vUmVzdWx0c01zZyA9IHRoaXMub3B0aW9ucy5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0obnVsbCk7XG4gICAgICAgICAgICB0aGlzLl9pbml0S2V5TWFuYWdlcigpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5faXNPcGVuKSB7XG4gICAgICAgICAgICAgIHRoaXMuX2hpZ2hsaWdodEZpcnN0T3B0aW9uKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuX2tleU1hbmFnZXIuYWN0aXZlSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvT3B0aW9uKHRoaXMuX2tleU1hbmFnZXIuYWN0aXZlSXRlbSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfSksXG4gICAgICAgIHN3aXRjaE1hcCgob3B0aW9uczogUXVlcnlMaXN0PE9wdGlvbkNvbXBvbmVudD4pID0+IHtcbiAgICAgICAgICByZXR1cm4gbWVyZ2UoLi4ub3B0aW9ucy5tYXAoKG9wdGlvbjogT3B0aW9uQ29tcG9uZW50KSA9PiBvcHRpb24uY2xpY2skKSk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGNsaWNrZWRPcHRpb246IE9wdGlvbkNvbXBvbmVudCkgPT4gdGhpcy5faGFuZGxlT3B0aW9uQ2xpY2soY2xpY2tlZE9wdGlvbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuVG9TZWxlY3RBbGxDbGljaygpIHtcbiAgICB0aGlzLnNlbGVjdEFsbE9wdGlvbi5jbGljayRcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKG9wdGlvbjogU2VsZWN0QWxsT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIHRoaXMub25TZWxlY3RBbGwob3B0aW9uKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVmFsdWUoKSB7XG4gICAgbGV0IHVwZGF0ZWRWYWx1ZTogYW55ID0gbnVsbDtcblxuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICB1cGRhdGVkVmFsdWUgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZC5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZWRWYWx1ZSA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkWzBdLnZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuX3ZhbHVlID0gdXBkYXRlZFZhbHVlO1xuICAgIHRoaXMucmVzdG9yZU11bHRpcGxlT3B0aW9ucygpO1xuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlT3B0aW9uQ2xpY2sob3B0aW9uOiBPcHRpb25Db21wb25lbnQpIHtcbiAgICBpZiAob3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuX2hhbmRsZU11bHRpcGxlU2VsZWN0aW9uKG9wdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hhbmRsZVNpbmdsZVNlbGVjdGlvbihvcHRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZUxhYmVMUG9zaXRpb24oKTtcbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVNpbmdsZVNlbGVjdGlvbihvcHRpb246IE9wdGlvbkNvbXBvbmVudCkge1xuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb24gPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXTtcblxuICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdChvcHRpb24pO1xuICAgIG9wdGlvbi5zZWxlY3QoKTtcblxuICAgIGlmIChjdXJyZW50U2VsZWN0aW9uICYmIGN1cnJlbnRTZWxlY3Rpb24gIT09IG9wdGlvbikge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuZGVzZWxlY3QoY3VycmVudFNlbGVjdGlvbik7XG4gICAgICBjdXJyZW50U2VsZWN0aW9uLmRlc2VsZWN0KCk7XG4gICAgICB0aGlzLmRlc2VsZWN0ZWQuZW1pdChjdXJyZW50U2VsZWN0aW9uLnZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoIWN1cnJlbnRTZWxlY3Rpb24gfHwgKGN1cnJlbnRTZWxlY3Rpb24gJiYgY3VycmVudFNlbGVjdGlvbiAhPT0gb3B0aW9uKSkge1xuICAgICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KG9wdGlvbi52YWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZSgpO1xuICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgdGhpcy5fdXBkYXRlTGFiZUxQb3NpdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlTXVsdGlwbGVTZWxlY3Rpb24ob3B0aW9uOiBPcHRpb25Db21wb25lbnQpIHtcbiAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9ucyA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkO1xuICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmRlc2VsZWN0KG9wdGlvbik7XG4gICAgICBvcHRpb24uZGVzZWxlY3QoKTtcbiAgICAgIHRoaXMuZGVzZWxlY3RlZC5lbWl0KGN1cnJlbnRTZWxlY3Rpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KG9wdGlvbik7XG4gICAgICBvcHRpb24uc2VsZWN0KCk7XG4gICAgICB0aGlzLnNlbGVjdGVkLmVtaXQob3B0aW9uLnZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2VkID0gdGhpcy5hbGxDaGVja2VkID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uICYmICF0aGlzLl9zZWxlY3RBbGxDaGVja2VkKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsbE9wdGlvbi5kZXNlbGVjdCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XG4gICAgdGhpcy5fc29ydFZhbHVlcygpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldFNlbGVjdGlvbihzZWxlY3RWYWx1ZTogYW55IHwgYW55W10pIHtcbiAgICBpZiAoc2VsZWN0VmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgICAgIHNlbGVjdFZhbHVlLmZvckVhY2goKHZhbHVlOiBhbnkpID0+IHRoaXMuX3NlbGVjdEJ5VmFsdWUodmFsdWUpKTtcbiAgICAgICAgdGhpcy5fc29ydFZhbHVlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0QnlWYWx1ZShzZWxlY3RWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VsZWN0QnlWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgbWF0Y2hpbmdPcHRpb24gPSB0aGlzLm9wdGlvbnNcbiAgICAgIC50b0FycmF5KClcbiAgICAgIC5maW5kKChvcHRpb246IE9wdGlvbkNvbXBvbmVudCkgPT4gdGhpcy5fY29tcGFyZVdpdGgob3B0aW9uLnZhbHVlLCB2YWx1ZSkpO1xuXG4gICAgaWYgKG1hdGNoaW5nT3B0aW9uKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3QobWF0Y2hpbmdPcHRpb24pO1xuICAgICAgbWF0Y2hpbmdPcHRpb24uc2VsZWN0KCk7XG4gICAgICB0aGlzLnNlbGVjdGVkLmVtaXQobWF0Y2hpbmdPcHRpb24udmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldEluaXRpYWxWYWx1ZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMubmdDb250cm9sID8gdGhpcy5uZ0NvbnRyb2wudmFsdWUgOiB0aGlzLl92YWx1ZTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGlvbih2YWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBvblNlbGVjdEFsbChzZWxlY3RBbGxvcHRpb246IFNlbGVjdEFsbE9wdGlvbkNvbXBvbmVudCkge1xuICAgIGlmICghc2VsZWN0QWxsb3B0aW9uLnNlbGVjdGVkICYmICF0aGlzLl9zZWxlY3RBbGxDaGVja2VkKSB7XG4gICAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IE9wdGlvbkNvbXBvbmVudCkgPT4ge1xuICAgICAgICBpZiAoIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdChvcHRpb24pO1xuICAgICAgICAgIG9wdGlvbi5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuICAgICAgdGhpcy5fc29ydFZhbHVlcygpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLl91cGRhdGVMYWJlTFBvc2l0aW9uKCk7XG4gICAgICBzZWxlY3RBbGxvcHRpb24uc2VsZWN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBPcHRpb25Db21wb25lbnQpID0+IHtcbiAgICAgICAgb3B0aW9uLmRlc2VsZWN0KCk7XG4gICAgICB9KTtcbiAgICAgIHNlbGVjdEFsbG9wdGlvbi5kZXNlbGVjdCgpO1xuICAgICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5fdXBkYXRlTGFiZUxQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgb3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXlSZWY7XG5cbiAgICBpZiAoIW92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMuX3BvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLl9kcm9wZG93blRlbXBsYXRlLCB0aGlzLl92Y3IpO1xuXG4gICAgICBvdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheS5jcmVhdGUoe1xuICAgICAgICB3aWR0aDogdGhpcy5fc2VsZWN0V3JhcHBlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKSxcbiAgICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5fZ2V0T3ZlcmxheVBvc2l0aW9uKCksXG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fb3ZlcmxheVJlZiA9IG92ZXJsYXlSZWY7XG5cbiAgICAgIG92ZXJsYXlSZWYua2V5ZG93bkV2ZW50cygpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgICAgIGlmIChrZXkgPT09IEVTQ0FQRSB8fCAoa2V5ID09PSBVUF9BUlJPVyAmJiBldmVudC5hbHRLZXkpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgdGhpcy5fZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG92ZXJsYXlSZWYgJiYgIW92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgb3ZlcmxheVJlZi5hdHRhY2godGhpcy5fcG9ydGFsKTtcbiAgICAgIHRoaXMuX2xpc3RlblRvT3V0U2lkZUNpY2sob3ZlcmxheVJlZiwgdGhpcy5fc2VsZWN0VmFsdWUubmF0aXZlRWxlbWVudCkuc3Vic2NyaWJlKCgpID0+XG4gICAgICAgIHRoaXMuY2xvc2UoKVxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMuZmlsdGVyKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyLmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2hpZ2hsaWdodEZpcnN0T3B0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3ZpZXdwb3J0UnVsZXIpIHtcbiAgICAgIHRoaXMuX3ZpZXdwb3J0UnVsZXJcbiAgICAgICAgLmNoYW5nZSgpXG4gICAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuX2lzT3BlbiAmJiBvdmVybGF5UmVmKSB7XG4gICAgICAgICAgICBvdmVybGF5UmVmLnVwZGF0ZVNpemUoeyB3aWR0aDogdGhpcy5fc2VsZWN0V3JhcHBlci5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBmaXJzdFNlbGVjdGVkID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRbMF07XG4gICAgICBpZiAoZmlyc3RTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxUb09wdGlvbihmaXJzdFNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcblxuICAgIHRoaXMub3BlbmVkLmVtaXQoKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ2tleWRvd24nLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlT3BlbktleWRvd24oZXZlbnQpO1xuICAgICAgfSk7XG4gICAgfSwgMCk7XG5cbiAgICB0aGlzLl91cGRhdGVMYWJlTFBvc2l0aW9uKCk7XG5cbiAgICBpZiAoIXRoaXMuZmlsdGVyKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc29ydFZhbHVlcygpIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMub3B0aW9ucy50b0FycmF5KCk7XG5cbiAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29ydENvbXBhcmF0b3JcbiAgICAgICAgICA/IHRoaXMuc29ydENvbXBhcmF0b3IoYSwgYiwgb3B0aW9ucylcbiAgICAgICAgICA6IG9wdGlvbnMuaW5kZXhPZihhKSAtIG9wdGlvbnMuaW5kZXhPZihiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblRvT3V0U2lkZUNpY2sob3ZlcmxheVJlZjogT3ZlcmxheVJlZiwgb3JpZ2luOiBIVE1MRWxlbWVudCkge1xuICAgIHJldHVybiBmcm9tRXZlbnQoZG9jdW1lbnQsICdjbGljaycpLnBpcGUoXG4gICAgICBmaWx0ZXIoKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3Qgbm90T3JpZ2luID0gdGFyZ2V0ICE9PSBvcmlnaW47XG4gICAgICAgIGNvbnN0IG5vdFZhbHVlID0gIXRoaXMuX3NlbGVjdFZhbHVlLm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0KTtcbiAgICAgICAgY29uc3Qgbm90T3ZlcmxheSA9ICEhb3ZlcmxheVJlZiAmJiBvdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKHRhcmdldCkgPT09IGZhbHNlO1xuICAgICAgICByZXR1cm4gbm90T3JpZ2luICYmIG5vdFZhbHVlICYmIG5vdE92ZXJsYXk7XG4gICAgICB9KSxcbiAgICAgIHRha2VVbnRpbChvdmVybGF5UmVmLmRldGFjaG1lbnRzKCkpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldE92ZXJsYXlQb3NpdGlvbigpOiBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICBjb25zdCBwb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheVxuICAgICAgLnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuX3NlbGVjdFdyYXBwZXIpXG4gICAgICAud2l0aFBvc2l0aW9ucyh0aGlzLl9nZXRQb3NpdGlvbnMoKSlcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKTtcblxuICAgIHJldHVybiBwb3NpdGlvblN0cmF0ZWd5O1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UG9zaXRpb25zKCk6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSB7XG4gICAgY29uc3QgYm90dG9tT2Zmc2V0ID0gdGhpcy5vdXRsaW5lID8gNCA6IDY7XG4gICAgY29uc3QgdG9wT2Zmc2V0ID0gdGhpcy5vdXRsaW5lID8gLTcgOiAtMztcbiAgICBpZiAoIXRoaXMub3V0bGluZSkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAgICAgb2Zmc2V0WTogYm90dG9tT2Zmc2V0LFxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICAgICAgb2Zmc2V0WTogdG9wT2Zmc2V0LFxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJyxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxuICAgICAgICAgIG9mZnNldFk6IGJvdHRvbU9mZnNldCxcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgICAgICAgIG9yaWdpblk6ICd0b3AnLFxuICAgICAgICAgIG9mZnNldFk6IHRvcE9mZnNldCxcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgICAgICBvdmVybGF5WTogJ2JvdHRvbScsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICghdGhpcy5faXNPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX292ZXJsYXlSZWYgJiYgdGhpcy5fb3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5jbG9zZWQuZW1pdCgpO1xuICAgIHRoaXMuX3VwZGF0ZUxhYmVMUG9zaXRpb24oKTtcbiAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0obnVsbCk7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5faXNPcGVuID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVMYWJlTFBvc2l0aW9uKCkge1xuICAgIGlmICghdGhpcy5wbGFjZWhvbGRlciAmJiAhdGhpcy5oYXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5fbGFiZWxBY3RpdmUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fbGFiZWxBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBoYXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubGVuZ3RoICE9PSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2Nyb2xsVG9PcHRpb24ob3B0aW9uOiBPcHRpb25Db21wb25lbnQpIHtcbiAgICBsZXQgb3B0aW9uSW5kZXg6IG51bWJlcjtcblxuICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0QWxsT3B0aW9uKSB7XG4gICAgICBvcHRpb25JbmRleCA9IHRoaXMub3B0aW9ucy50b0FycmF5KCkuaW5kZXhPZihvcHRpb24pICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9uSW5kZXggPSB0aGlzLm9wdGlvbnMudG9BcnJheSgpLmluZGV4T2Yob3B0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBncm91cHNOdW1iZXIgPSB0aGlzLl9nZXROdW1iZXJPZkdyb3Vwc0JlZm9yZU9wdGlvbihvcHRpb25JbmRleCk7XG5cbiAgICBjb25zdCBzY3JvbGxUb0luZGV4ID0gb3B0aW9uSW5kZXggKyBncm91cHNOdW1iZXI7XG5cbiAgICBjb25zdCBsaXN0ID0gdGhpcy5fb3B0aW9uc1dyYXBwZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBsaXN0SGVpZ2h0ID0gbGlzdC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpZiAob3B0aW9uSW5kZXggPiAtMSkge1xuICAgICAgY29uc3Qgb3B0aW9uVG9wID0gc2Nyb2xsVG9JbmRleCAqIHRoaXMub3B0aW9uSGVpZ2h0O1xuICAgICAgY29uc3Qgb3B0aW9uQm90dG9tID0gb3B0aW9uVG9wICsgdGhpcy5vcHRpb25IZWlnaHQ7XG5cbiAgICAgIGNvbnN0IHZpZXdUb3AgPSBsaXN0LnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IHZpZXdCb3R0b20gPSB0aGlzLmRyb3Bkb3duSGVpZ2h0O1xuXG4gICAgICBpZiAob3B0aW9uQm90dG9tID4gdmlld0JvdHRvbSkge1xuICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IG9wdGlvbkJvdHRvbSAtIGxpc3RIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKG9wdGlvblRvcCA8IHZpZXdUb3ApIHtcbiAgICAgICAgbGlzdC5zY3JvbGxUb3AgPSBvcHRpb25Ub3A7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TnVtYmVyT2ZHcm91cHNCZWZvcmVPcHRpb24ob3B0aW9uSW5kZXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKHRoaXMub3B0aW9uR3JvdXBzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgb3B0aW9uc0xpc3QgPSB0aGlzLm9wdGlvbnMudG9BcnJheSgpO1xuICAgICAgY29uc3QgZ3JvdXBzTGlzdCA9IHRoaXMub3B0aW9uR3JvdXBzLnRvQXJyYXkoKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tdWx0aXBsZSA/IG9wdGlvbkluZGV4IC0gMSA6IG9wdGlvbkluZGV4O1xuICAgICAgbGV0IGdyb3Vwc051bWJlciA9IDA7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgICAgaWYgKG9wdGlvbnNMaXN0W2ldLmdyb3VwICYmIG9wdGlvbnNMaXN0W2ldLmdyb3VwID09PSBncm91cHNMaXN0W2dyb3Vwc051bWJlcl0pIHtcbiAgICAgICAgICBncm91cHNOdW1iZXIrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ3JvdXBzTnVtYmVyO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaGFuZGxlU2VsZWN0aW9uQ2xlYXIoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYnV0dG9uID09PSAyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uOiBPcHRpb25Db21wb25lbnQpID0+IHtcbiAgICAgIG9wdGlvbi5kZXNlbGVjdCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0QWxsT3B0aW9uICYmIHRoaXMuX3NlbGVjdEFsbENoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsT3B0aW9uLmRlc2VsZWN0KCk7XG4gICAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChudWxsKTtcbiAgICB0aGlzLl9vbkNoYW5nZShudWxsKTtcbiAgICB0aGlzLl91cGRhdGVMYWJlTFBvc2l0aW9uKCk7XG4gICAgdGhpcy5fc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlT3BlbktleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgY29uc3QgbWFuYWdlciA9IHRoaXMuX2tleU1hbmFnZXI7XG4gICAgY29uc3QgaXNVc2VyVHlwaW5nID0gbWFuYWdlci5pc1R5cGluZygpO1xuICAgIGNvbnN0IHByZXZpb3VzQWN0aXZlSXRlbSA9IG1hbmFnZXIuYWN0aXZlSXRlbTtcbiAgICBtYW5hZ2VyLm9uS2V5ZG93bihldmVudCk7XG5cbiAgICBpZiAoa2V5ID09PSBIT01FIHx8IGtleSA9PT0gRU5EKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAga2V5ID09PSBIT01FID8gbWFuYWdlci5zZXRGaXJzdEl0ZW1BY3RpdmUoKSA6IG1hbmFnZXIuc2V0TGFzdEl0ZW1BY3RpdmUoKTtcbiAgICAgIGlmIChtYW5hZ2VyLmFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG9PcHRpb24obWFuYWdlci5hY3RpdmVJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKFxuICAgICAgdGhpcy5fb3ZlcmxheVJlZiAmJlxuICAgICAgdGhpcy5fb3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpICYmXG4gICAgICAhaXNVc2VyVHlwaW5nICYmXG4gICAgICBtYW5hZ2VyLmFjdGl2ZUl0ZW0gJiZcbiAgICAgIChrZXkgPT09IEVOVEVSIHx8IChrZXkgPT09IFNQQUNFICYmICF0aGlzLmZpbHRlcikpXG4gICAgKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLnNlbGVjdEFsbE9wdGlvbiAmJiBtYW5hZ2VyLmFjdGl2ZUl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgICB0aGlzLm9uU2VsZWN0QWxsKHRoaXMuc2VsZWN0QWxsT3B0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZU9wdGlvbkNsaWNrKG1hbmFnZXIuYWN0aXZlSXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFVQX0FSUk9XICYmIGV2ZW50LmFsdEtleSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09IFVQX0FSUk9XIHx8IGtleSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgaWYgKG1hbmFnZXIuYWN0aXZlSXRlbSAmJiBtYW5hZ2VyLmFjdGl2ZUl0ZW0gIT09IHByZXZpb3VzQWN0aXZlSXRlbSkge1xuICAgICAgICB0aGlzLl9zY3JvbGxUb09wdGlvbihtYW5hZ2VyLmFjdGl2ZUl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNsb3NlZEtleWRvd24oZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XG4gICAgY29uc3QgbWFuYWdlciA9IHRoaXMuX2tleU1hbmFnZXI7XG5cbiAgICBpZiAoKGtleSA9PT0gRE9XTl9BUlJPVyAmJiBldmVudC5hbHRLZXkpIHx8IGtleSA9PT0gRU5URVIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLm11bHRpcGxlICYmIGtleSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1hbmFnZXIuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcbiAgICAgIGlmIChtYW5hZ2VyLmFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlT3B0aW9uQ2xpY2sobWFuYWdlci5hY3RpdmVJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF0aGlzLm11bHRpcGxlICYmIGtleSA9PT0gVVBfQVJST1cpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtYW5hZ2VyLnNldFByZXZpb3VzSXRlbUFjdGl2ZSgpO1xuICAgICAgaWYgKG1hbmFnZXIuYWN0aXZlSXRlbSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVPcHRpb25DbGljayhtYW5hZ2VyLmFjdGl2ZUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMubXVsdGlwbGUgJiYga2V5ID09PSBIT01FKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbWFuYWdlci5zZXRGaXJzdEl0ZW1BY3RpdmUoKTtcbiAgICAgIGlmIChtYW5hZ2VyLmFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgdGhpcy5faGFuZGxlT3B0aW9uQ2xpY2sobWFuYWdlci5hY3RpdmVJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF0aGlzLm11bHRpcGxlICYmIGtleSA9PT0gRU5EKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbWFuYWdlci5zZXRMYXN0SXRlbUFjdGl2ZSgpO1xuICAgICAgaWYgKG1hbmFnZXIuYWN0aXZlSXRlbSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVPcHRpb25DbGljayhtYW5hZ2VyLmFjdGl2ZUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5tdWx0aXBsZSAmJiAoa2V5ID09PSBET1dOX0FSUk9XIHx8IGtleSA9PT0gVVBfQVJST1cpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlT3B0aW9uc1doZWVsKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBvcHRpb25zTGlzdCA9IHRoaXMuX29wdGlvbnNXcmFwcGVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgYXRUb3AgPSBvcHRpb25zTGlzdC5zY3JvbGxUb3AgPT09IDA7XG4gICAgY29uc3QgYXRCb3R0b20gPSBvcHRpb25zTGlzdC5vZmZzZXRIZWlnaHQgKyBvcHRpb25zTGlzdC5zY3JvbGxUb3AgPT09IG9wdGlvbnNMaXN0LnNjcm9sbEhlaWdodDtcblxuICAgIGlmIChhdFRvcCAmJiBldmVudC5kZWx0YVkgPCAwKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoYXRCb3R0b20gJiYgZXZlbnQuZGVsdGFZID4gMCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9mb2N1cygpIHtcbiAgICB0aGlzLl9oYXNGb2N1cyA9IHRydWU7XG4gICAgdGhpcy5fc2VsZWN0V3JhcHBlci5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBwcml2YXRlIF9oaWdobGlnaHRGaXJzdE9wdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaGFzU2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNTZWxlY3Rpb24gJiYgIXRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkWzBdLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9rZXlNYW5hZ2VyLnNldEFjdGl2ZUl0ZW0odGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRbMF0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXMoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICBpZiAoIXRoaXMuX2lzT3BlbiAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgfVxuICAgIHRoaXMuX2hhc0ZvY3VzID0gZmFsc2U7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbCA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxPcHRpb25Db21wb25lbnQ+KHRoaXMubXVsdGlwbGUpO1xuXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUxhYmVMUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG4gIH1cblxuICAvKiogQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlIG1ldGhvZHMuICoqL1xuXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGlvbih2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==