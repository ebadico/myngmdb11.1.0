import { __decorate, __metadata, __param, __read, __spread } from "tslib";
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
var MdbSelectComponent = /** @class */ (function () {
    function MdbSelectComponent(_overlay, _viewportRuler, _vcr, _cdRef, _renderer, ngControl) {
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
        this._compareWith = function (o1, o2) { return o1 === o2; };
        /** ControlValueAccessor interface methods. **/
        this._onChange = function (_) { };
        this._onTouched = function () { };
        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }
    }
    MdbSelectComponent_1 = MdbSelectComponent;
    Object.defineProperty(MdbSelectComponent.prototype, "visibleOptions", {
        get: function () {
            return this._visibleOptions;
        },
        set: function (value) {
            if (value !== 0) {
                this._visibleOptions = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "optionHeight", {
        get: function () {
            return this._optionHeight;
        },
        set: function (value) {
            if (value !== 0) {
                this._optionHeight = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "dropdownHeight", {
        get: function () {
            return this._dropdownHeight;
        },
        set: function (value) {
            if (value !== 0) {
                this._dropdownHeight = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            if (this._value !== newValue) {
                this._value = newValue;
                this.writeValue(newValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "compareWith", {
        get: function () {
            return this._compareWith;
        },
        set: function (fn) {
            if (typeof fn === 'function') {
                this._compareWith = fn;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "activeOption", {
        get: function () {
            if (this._keyManager) {
                return this._keyManager.activeItem;
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "selectionView", {
        get: function () {
            if (this.multiple) {
                var selectedOptions = this._selectionModel.selected.map(function (option) { return option.label.trim(); });
                return selectedOptions.join(', ');
            }
            if (this._selectionModel.selected[0]) {
                return this._selectionModel.selected[0].label;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "hasSelection", {
        get: function () {
            return this._selectionModel && !this._selectionModel.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "allChecked", {
        get: function () {
            var selectionsNumber = this._selectionModel.selected.length;
            var optionsNumber = this.options.length;
            return selectionsNumber === optionsNumber;
        },
        enumerable: true,
        configurable: true
    });
    MdbSelectComponent.prototype.handleKeydown = function (event) {
        if (!this.disabled) {
            this._handleClosedKeydown(event);
        }
    };
    Object.defineProperty(MdbSelectComponent.prototype, "select", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "isOutline", {
        get: function () {
            return this.outline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "isMultiselectable", {
        get: function () {
            return this.multiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "hasPopup", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "isDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "isExpanded", {
        get: function () {
            return this._isOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbSelectComponent.prototype, "role", {
        get: function () {
            return this.filter ? 'combobox' : 'listbox';
        },
        enumerable: true,
        configurable: true
    });
    MdbSelectComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._initKeyManager();
        this._setInitialValue();
        this._listenToOptionClick();
        if (this.selectAllOption) {
            this._listenToSelectAllClick();
        }
        if (this.filter) {
            this.filter.inputChange.pipe(takeUntil(this._destroy)).subscribe(function () {
                if (_this.multiple && !_this.filter.value) {
                    _this.previousSelectedValues = _this.options
                        .filter(function (option) { return option.selected; })
                        .map(function (option) { return option.value; });
                }
            });
        }
    };
    MdbSelectComponent.prototype.restoreMultipleOptions = function () {
        var _this = this;
        if (this.multiple && this.filter) {
            if (this.filter.value &&
                this.filter.value.length &&
                this.previousSelectedValues &&
                Array.isArray(this.previousSelectedValues)) {
                if (!this.value || !Array.isArray(this.value)) {
                    this.value = [];
                }
                var optionValues_1 = this.options.map(function (option) { return option.value; });
                this.previousSelectedValues.forEach(function (previousValue) {
                    if (!_this.value.some(function (v) { return _this.compareWith(v, previousValue); }) &&
                        !optionValues_1.some(function (v) { return _this.compareWith(v, previousValue); })) {
                        // if a value that was selected before is deselected and not found in the options, it was deselected
                        // due to the filtering, so we restore it.
                        _this.value.push(previousValue);
                    }
                });
            }
            this.previousSelectedValues = this.value;
        }
    };
    MdbSelectComponent.prototype._initKeyManager = function () {
        var options = this.selectAllOption ? __spread([this.selectAllOption], this.options) : this.options;
        if (this.filter) {
            this._keyManager = new ActiveDescendantKeyManager(options).withVerticalOrientation();
        }
        else {
            this._keyManager = new ActiveDescendantKeyManager(options)
                .withTypeAhead(200)
                .withVerticalOrientation();
        }
    };
    MdbSelectComponent.prototype._listenToOptionClick = function () {
        var _this = this;
        this.options.changes
            .pipe(startWith(this.options), tap(function () {
            _this._setInitialValue();
            setTimeout(function () {
                _this._showNoResultsMsg = _this.options.length === 0;
                _this._keyManager.setActiveItem(null);
                _this._initKeyManager();
                if (_this._isOpen) {
                    _this._highlightFirstOption();
                    if (_this._keyManager.activeItem) {
                        _this._scrollToOption(_this._keyManager.activeItem);
                    }
                }
            }, 0);
        }), switchMap(function (options) {
            return merge.apply(void 0, __spread(options.map(function (option) { return option.click$; })));
        }), takeUntil(this._destroy))
            .subscribe(function (clickedOption) { return _this._handleOptionClick(clickedOption); });
    };
    MdbSelectComponent.prototype._listenToSelectAllClick = function () {
        var _this = this;
        this.selectAllOption.click$
            .pipe(takeUntil(this._destroy))
            .subscribe(function (option) {
            _this.onSelectAll(option);
        });
    };
    MdbSelectComponent.prototype._updateValue = function () {
        var updatedValue = null;
        if (this.multiple) {
            updatedValue = this._selectionModel.selected.map(function (option) { return option.value; });
        }
        else {
            updatedValue = this._selectionModel.selected[0].value;
        }
        this._value = updatedValue;
        this.restoreMultipleOptions();
        this._cdRef.markForCheck();
    };
    MdbSelectComponent.prototype._handleOptionClick = function (option) {
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
    };
    MdbSelectComponent.prototype._handleSingleSelection = function (option) {
        var currentSelection = this._selectionModel.selected[0];
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
    };
    MdbSelectComponent.prototype._handleMultipleSelection = function (option) {
        var currentSelections = this._selectionModel.selected;
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
    };
    MdbSelectComponent.prototype._setSelection = function (selectValue) {
        var _this = this;
        if (selectValue) {
            if (this.multiple) {
                this._selectionModel.clear();
                selectValue.forEach(function (value) { return _this._selectByValue(value); });
                this._sortValues();
            }
            else {
                this._selectByValue(selectValue);
            }
        }
        this._cdRef.markForCheck();
    };
    MdbSelectComponent.prototype._selectByValue = function (value) {
        var _this = this;
        var matchingOption = this.options
            .toArray()
            .find(function (option) { return _this._compareWith(option.value, value); });
        if (matchingOption) {
            this._selectionModel.select(matchingOption);
            matchingOption.select();
            this.selected.emit(matchingOption.value);
        }
    };
    MdbSelectComponent.prototype._setInitialValue = function () {
        var _this = this;
        var value = this.ngControl ? this.ngControl.value : this._value;
        Promise.resolve().then(function () {
            _this._setSelection(value);
        });
    };
    MdbSelectComponent.prototype.onSelectAll = function (selectAlloption) {
        var _this = this;
        if (!selectAlloption.selected && !this._selectAllChecked) {
            this._selectAllChecked = true;
            this.options.forEach(function (option) {
                if (!option.disabled) {
                    _this._selectionModel.select(option);
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
            this.options.forEach(function (option) {
                option.deselect();
            });
            selectAlloption.deselect();
            this._updateValue();
            this.valueChange.emit(this.value);
            this._onChange(this.value);
            this._updateLabeLPosition();
        }
    };
    MdbSelectComponent.prototype.open = function () {
        var _this = this;
        if (this.disabled) {
            return;
        }
        var overlayRef = this._overlayRef;
        if (!overlayRef) {
            this._portal = new TemplatePortal(this._dropdownTemplate, this._vcr);
            overlayRef = this._overlay.create({
                width: this._selectWrapper.nativeElement.offsetWidth,
                scrollStrategy: this._overlay.scrollStrategies.reposition(),
                positionStrategy: this._getOverlayPosition(),
            });
            this._overlayRef = overlayRef;
            overlayRef.keydownEvents().subscribe(function (event) {
                // tslint:disable-next-line: deprecation
                var key = event.keyCode;
                if (key === ESCAPE || (key === UP_ARROW && event.altKey)) {
                    event.preventDefault();
                    event.stopPropagation();
                    _this.close();
                    _this._focus();
                }
            });
        }
        if (overlayRef && !overlayRef.hasAttached()) {
            overlayRef.attach(this._portal);
            this._listenToOutSideCick(overlayRef, this._selectValue.nativeElement).subscribe(function () {
                return _this.close();
            });
            if (this.filter) {
                this.filter.focus();
            }
            this._highlightFirstOption();
        }
        if (this._viewportRuler) {
            this._viewportRuler
                .change()
                .pipe(takeUntil(this._destroy))
                .subscribe(function () {
                if (_this._isOpen && overlayRef) {
                    overlayRef.updateSize({ width: _this._selectWrapper.nativeElement.offsetWidth });
                }
            });
        }
        setTimeout(function () {
            var firstSelected = _this._selectionModel.selected[0];
            if (firstSelected) {
                _this._scrollToOption(firstSelected);
            }
        }, 0);
        this.opened.emit();
        setTimeout(function () {
            _this._renderer.listen(_this.dropdown.nativeElement, 'keydown', function (event) {
                _this._handleOpenKeydown(event);
            });
        }, 0);
        this._updateLabeLPosition();
        if (!this.filter) {
            setTimeout(function () {
                _this.dropdown.nativeElement.focus();
            }, 0);
        }
        this._isOpen = true;
        this._cdRef.markForCheck();
    };
    MdbSelectComponent.prototype._sortValues = function () {
        var _this = this;
        if (this.multiple) {
            var options_1 = this.options.toArray();
            this._selectionModel.sort(function (a, b) {
                return _this.sortComparator
                    ? _this.sortComparator(a, b, options_1)
                    : options_1.indexOf(a) - options_1.indexOf(b);
            });
        }
    };
    MdbSelectComponent.prototype._listenToOutSideCick = function (overlayRef, origin) {
        var _this = this;
        return fromEvent(document, 'click').pipe(filter(function (event) {
            var target = event.target;
            var notOrigin = target !== origin;
            var notValue = !_this._selectValue.nativeElement.contains(target);
            var notOverlay = !!overlayRef && overlayRef.overlayElement.contains(target) === false;
            return notOrigin && notValue && notOverlay;
        }), takeUntil(overlayRef.detachments()));
    };
    MdbSelectComponent.prototype._getOverlayPosition = function () {
        var positionStrategy = this._overlay
            .position()
            .flexibleConnectedTo(this._selectWrapper)
            .withPositions(this._getPositions())
            .withFlexibleDimensions(false);
        return positionStrategy;
    };
    MdbSelectComponent.prototype._getPositions = function () {
        var bottomOffset = this.outline ? 4 : 6;
        var topOffset = this.outline ? -7 : -3;
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
    };
    MdbSelectComponent.prototype.close = function () {
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
    };
    MdbSelectComponent.prototype.toggle = function () {
        this._isOpen ? this.close() : this.open();
    };
    MdbSelectComponent.prototype._updateLabeLPosition = function () {
        if (!this.placeholder && !this.hasSelected) {
            this._labelActive = false;
        }
        else {
            this._labelActive = true;
        }
    };
    Object.defineProperty(MdbSelectComponent.prototype, "hasSelected", {
        get: function () {
            return this._selectionModel.selected.length !== 0;
        },
        enumerable: true,
        configurable: true
    });
    MdbSelectComponent.prototype._scrollToOption = function (option) {
        var optionIndex;
        if (this.multiple && this.selectAllOption) {
            optionIndex = this.options.toArray().indexOf(option) + 1;
        }
        else {
            optionIndex = this.options.toArray().indexOf(option);
        }
        var groupsNumber = this._getNumberOfGroupsBeforeOption(optionIndex);
        var scrollToIndex = optionIndex + groupsNumber;
        var list = this._optionsWrapper.nativeElement;
        var listHeight = list.offsetHeight;
        if (optionIndex > -1) {
            var optionTop = scrollToIndex * this.optionHeight;
            var optionBottom = optionTop + this.optionHeight;
            var viewTop = list.scrollTop;
            var viewBottom = this.dropdownHeight;
            if (optionBottom > viewBottom) {
                list.scrollTop = optionBottom - listHeight;
            }
            else if (optionTop < viewTop) {
                list.scrollTop = optionTop;
            }
        }
    };
    MdbSelectComponent.prototype._getNumberOfGroupsBeforeOption = function (optionIndex) {
        if (this.optionGroups.length) {
            var optionsList = this.options.toArray();
            var groupsList = this.optionGroups.toArray();
            var index = this.multiple ? optionIndex - 1 : optionIndex;
            var groupsNumber = 0;
            for (var i = 0; i <= index; i++) {
                if (optionsList[i].group && optionsList[i].group === groupsList[groupsNumber]) {
                    groupsNumber++;
                }
            }
            return groupsNumber;
        }
        return 0;
    };
    MdbSelectComponent.prototype.handleSelectionClear = function (event) {
        if (event.button === 2) {
            return;
        }
        this._selectionModel.clear();
        this.options.forEach(function (option) {
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
    };
    MdbSelectComponent.prototype._handleOpenKeydown = function (event) {
        var key = event.keyCode;
        var manager = this._keyManager;
        var isUserTyping = manager.isTyping();
        var previousActiveItem = manager.activeItem;
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
    };
    MdbSelectComponent.prototype._handleClosedKeydown = function (event) {
        var key = event.keyCode;
        var manager = this._keyManager;
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
    };
    MdbSelectComponent.prototype.handleOptionsWheel = function (event) {
        var optionsList = this._optionsWrapper.nativeElement;
        var atTop = optionsList.scrollTop === 0;
        var atBottom = optionsList.offsetHeight + optionsList.scrollTop === optionsList.scrollHeight;
        if (atTop && event.deltaY < 0) {
            event.preventDefault();
        }
        else if (atBottom && event.deltaY > 0) {
            event.preventDefault();
        }
    };
    MdbSelectComponent.prototype._focus = function () {
        this._hasFocus = true;
        this._selectWrapper.nativeElement.focus();
    };
    MdbSelectComponent.prototype._highlightFirstOption = function () {
        if (!this.hasSelection) {
            this._keyManager.setFirstItemActive();
        }
        else if (this.hasSelection && !this._selectionModel.selected[0].disabled) {
            this._keyManager.setActiveItem(this._selectionModel.selected[0]);
        }
    };
    MdbSelectComponent.prototype.onFocus = function () {
        if (!this.disabled) {
            this._focus();
        }
    };
    MdbSelectComponent.prototype.onBlur = function () {
        if (!this._isOpen && !this.disabled) {
            this._onTouched();
        }
        this._hasFocus = false;
    };
    MdbSelectComponent.prototype.ngOnInit = function () {
        this._selectionModel = new SelectionModel(this.multiple);
        if (this.label) {
            this._updateLabeLPosition();
        }
    };
    MdbSelectComponent.prototype.ngOnDestroy = function () {
        this._destroy.next();
        this._destroy.complete();
    };
    MdbSelectComponent.prototype.writeValue = function (value) {
        if (this.options) {
            this._setSelection(value);
        }
    };
    MdbSelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this._cdRef.markForCheck();
    };
    MdbSelectComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    MdbSelectComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    var MdbSelectComponent_1;
    MdbSelectComponent.ctorParameters = function () { return [
        { type: Overlay },
        { type: ViewportRuler },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: NgControl, decorators: [{ type: Self }, { type: Optional }] }
    ]; };
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
    return MdbSelectComponent;
}());
export { MdbSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc2VsZWN0L3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLHVCQUF1QixFQUN2QixLQUFLLEVBQ0wsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLE1BQU0sRUFDTixZQUFZLEVBQ1osZUFBZSxFQUNmLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsU0FBUyxFQUNULE1BQU0sRUFDTixpQkFBaUIsRUFDakIsSUFBSSxFQUNKLFFBQVEsRUFDUixZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixPQUFPLEVBQ1AsYUFBYSxFQUNiLHNCQUFzQixHQUN2QixNQUFNLHNCQUFzQixDQUFD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RSxDQUFDLGlCQUFpQixDQUFDO1lBQy9CLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxvQkFBa0IsRUFBRSxDQUFDOztTQUM3RSxDQUFDO1FBRUYsa0RBQWtEOztRQWdON0MsV0FBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7eUNBTEQsT0FBTztZQUNELGFBQWE7WUFDdkIsZ0JBQWdCO1lBQ2QsaUJBQWlCO1lBQ2QsU0FBUztZQUNVLFNBQVM7T0EvTXRDLGtCQUFrQixDQTYxQjlCO0lBQUQseUJBQUM7Q0FBQSxBQTcxQkQsSUE2MUJDO1NBNzFCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBTZWxmLFxuICBPcHRpb25hbCxcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjIsXG4gIENvbnRlbnRDaGlsZCxcbiAgSG9zdEJpbmRpbmcsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZHJvcGRvd25BbmltYXRpb24gfSBmcm9tICcuL3NlbGVjdC1hbmltYXRpb25zJztcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTURCX09QVElPTl9QQVJFTlQsIE9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL29wdGlvbi9vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nQ29udHJvbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4uL29wdGlvbi9vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdEFsbE9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4uL29wdGlvbi9zZWxlY3QtYWxsLW9wdGlvbic7XG5pbXBvcnQge1xuICBPdmVybGF5UmVmLFxuICBQb3NpdGlvblN0cmF0ZWd5LFxuICBPdmVybGF5LFxuICBWaWV3cG9ydFJ1bGVyLFxuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgRVNDQVBFLFxuICBVUF9BUlJPVyxcbiAgSE9NRSxcbiAgRU5ELFxuICBFTlRFUixcbiAgU1BBQ0UsXG4gIERPV05fQVJST1csXG59IGZyb20gJy4uLy4uL2ZyZWUvdXRpbHMva2V5Ym9hcmQtbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBNZGJTZWxlY3RGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc2VsZWN0LTInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbZHJvcGRvd25BbmltYXRpb25dLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1EQl9PUFRJT05fUEFSRU5ULCB1c2VFeGlzdGluZzogTWRiU2VsZWN0Q29tcG9uZW50IH1dLFxufSlcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBNZGJTZWxlY3RDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBAVmlld0NoaWxkKCdzZWxlY3RXcmFwcGVyJykgcHJpdmF0ZSBfc2VsZWN0V3JhcHBlcjogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2VsZWN0VmFsdWUnKSBwcml2YXRlIF9zZWxlY3RWYWx1ZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25UZW1wbGF0ZScpIF9kcm9wZG93blRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCdkcm9wZG93bicpIGRyb3Bkb3duOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkKE1kYlNlbGVjdEZpbHRlckNvbXBvbmVudCkgZmlsdGVyOiBNZGJTZWxlY3RGaWx0ZXJDb21wb25lbnQ7XG4gIEBWaWV3Q2hpbGQoJ29wdGlvbnNXcmFwcGVyJykgcHJpdmF0ZSBfb3B0aW9uc1dyYXBwZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2N1c3RvbUNvbnRlbnQnKSBfY3VzdG9tQ29udGVudDogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZChTZWxlY3RBbGxPcHRpb25Db21wb25lbnQpIHNlbGVjdEFsbE9wdGlvbjogU2VsZWN0QWxsT3B0aW9uQ29tcG9uZW50O1xuICBAQ29udGVudENoaWxkcmVuKE9wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBvcHRpb25zOiBRdWVyeUxpc3Q8T3B0aW9uQ29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihPcHRpb25Hcm91cENvbXBvbmVudCkgb3B0aW9uR3JvdXBzOiBRdWVyeUxpc3Q8T3B0aW9uR3JvdXBDb21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpIGFsbG93Q2xlYXIgPSBmYWxzZTtcbiAgQElucHV0KCkgY2xlYXJCdXR0b25UYWJpbmRleCA9IDA7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGRyb3Bkb3duQ2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaGlnaGxpZ2h0Rmlyc3QgPSB0cnVlO1xuICBASW5wdXQoKSBsYWJlbCA9ICcnO1xuICBASW5wdXQoKSBtdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBub3RGb3VuZE1zZyA9ICdObyByZXN1bHRzIGZvdW5kJztcbiAgQElucHV0KCkgb3V0bGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSB0YWJpbmRleCA9IDA7XG4gIEBJbnB1dCgpIHJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgnYXJpYS1sYWJlbCcpIGFyaWFMYWJlbCA9ICcnO1xuICBASW5wdXQoJ2FyaWEtbGFiZWxsZWRieScpIGFyaWFMYWJlbGxlZGJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGdldCB2aXNpYmxlT3B0aW9ucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlT3B0aW9ucztcbiAgfVxuXG4gIHNldCB2aXNpYmxlT3B0aW9ucyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLl92aXNpYmxlT3B0aW9ucyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF92aXNpYmxlT3B0aW9ucyA9IDU7XG5cbiAgQElucHV0KClcbiAgZ2V0IG9wdGlvbkhlaWdodCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25IZWlnaHQ7XG4gIH1cblxuICBzZXQgb3B0aW9uSGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgIHRoaXMuX29wdGlvbkhlaWdodCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29wdGlvbkhlaWdodCA9IDQ4O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkcm9wZG93bkhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kcm9wZG93bkhlaWdodDtcbiAgfVxuXG4gIHNldCBkcm9wZG93bkhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLl9kcm9wZG93bkhlaWdodCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICAvLyBFcXVhbCB0byA0ICogb3B0aW9uSGVpZ2h0ICh3aGljaCBpcyA0OHB4IGJ5IGRlZmF1bHQpXG4gIHByb3RlY3RlZCBfZHJvcGRvd25IZWlnaHQgPSAyNDA7XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUobmV3VmFsdWU6IGFueSkge1xuICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLndyaXRlVmFsdWUobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF92YWx1ZTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBjb21wYXJlV2l0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGFyZVdpdGg7XG4gIH1cbiAgc2V0IGNvbXBhcmVXaXRoKGZuOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbikge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuX2NvbXBhcmVXaXRoID0gZm47XG4gICAgfVxuICB9XG5cbiAgQElucHV0KCkgc29ydENvbXBhcmF0b3I6IChcbiAgICBhOiBPcHRpb25Db21wb25lbnQsXG4gICAgYjogT3B0aW9uQ29tcG9uZW50LFxuICAgIG9wdGlvbnM6IE9wdGlvbkNvbXBvbmVudFtdXG4gICkgPT4gbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9wZW5lZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNsb3NlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8T3B0aW9uQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8T3B0aW9uQ29tcG9uZW50PigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gIEBPdXRwdXQoKSBkZXNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8T3B0aW9uQ29tcG9uZW50IHwgT3B0aW9uQ29tcG9uZW50W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxcbiAgICBPcHRpb25Db21wb25lbnQgfCBPcHRpb25Db21wb25lbnRbXVxuICA+KCk7XG4gIEBPdXRwdXQoKSBub09wdGlvbnNGb3VuZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBnZXQgYWN0aXZlT3B0aW9uKCk6IE9wdGlvbkNvbXBvbmVudCB8IG51bGwge1xuICAgIGlmICh0aGlzLl9rZXlNYW5hZ2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGlvblZpZXcoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubWFwKG9wdGlvbiA9PiBvcHRpb24ubGFiZWwudHJpbSgpKTtcblxuICAgICAgcmV0dXJuIHNlbGVjdGVkT3B0aW9ucy5qb2luKCcsICcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkWzBdLmxhYmVsO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGdldCBoYXNTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGlvbk1vZGVsICYmICF0aGlzLl9zZWxlY3Rpb25Nb2RlbC5pc0VtcHR5KCk7XG4gIH1cblxuICBnZXQgYWxsQ2hlY2tlZCgpIHtcbiAgICBjb25zdCBzZWxlY3Rpb25zTnVtYmVyID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IG9wdGlvbnNOdW1iZXIgPSB0aGlzLm9wdGlvbnMubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHNlbGVjdGlvbnNOdW1iZXIgPT09IG9wdGlvbnNOdW1iZXI7XG4gIH1cblxuICBwcml2YXRlIF9rZXlNYW5hZ2VyOiBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlcjxPcHRpb25Db21wb25lbnQgfCBudWxsPjtcblxuICBwcml2YXRlIF9vdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcbiAgcHJpdmF0ZSBfcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDtcblxuICBwcml2YXRlIF9zZWxlY3Rpb25Nb2RlbDogU2VsZWN0aW9uTW9kZWw8T3B0aW9uQ29tcG9uZW50PjtcblxuICBwcmV2aW91c1NlbGVjdGVkVmFsdWVzOiBhbnk7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgX2lzT3BlbiA9IGZhbHNlO1xuXG4gIF9oYXNGb2N1cyA9IGZhbHNlO1xuXG4gIF9sYWJlbEFjdGl2ZSA9IGZhbHNlO1xuXG4gIF9zaG93Tm9SZXN1bHRzTXNnID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2NvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9oYW5kbGVDbG9zZWRLZXlkb3duKGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLm1kYi1zZWxlY3QnKVxuICBnZXQgc2VsZWN0KCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tZGItc2VsZWN0LW91dGxpbmUnKVxuICBnZXQgaXNPdXRsaW5lKCkge1xuICAgIHJldHVybiB0aGlzLm91dGxpbmU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1tdWx0aXNlbGVjdGFibGUnKVxuICBnZXQgaXNNdWx0aXNlbGVjdGFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbGU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oYXNwb3B1cCcpXG4gIGdldCBoYXNQb3B1cCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRpc2FibGVkJylcbiAgZ2V0IGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1leHBhbmRlZCcpXG4gIGdldCBpc0V4cGFuZGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1yb2xlJylcbiAgZ2V0IHJvbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyID8gJ2NvbWJvYm94JyA6ICdsaXN0Ym94JztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX292ZXJsYXk6IE92ZXJsYXksXG4gICAgcHJpdmF0ZSBfdmlld3BvcnRSdWxlcjogVmlld3BvcnRSdWxlcixcbiAgICBwcml2YXRlIF92Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQFNlbGYoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2xcbiAgKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5faW5pdEtleU1hbmFnZXIoKTtcbiAgICB0aGlzLl9zZXRJbml0aWFsVmFsdWUoKTtcbiAgICB0aGlzLl9saXN0ZW5Ub09wdGlvbkNsaWNrKCk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIHRoaXMuX2xpc3RlblRvU2VsZWN0QWxsQ2xpY2soKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgIHRoaXMuZmlsdGVyLmlucHV0Q2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiAhdGhpcy5maWx0ZXIudmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0ZWRWYWx1ZXMgPSB0aGlzLm9wdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi5zZWxlY3RlZClcbiAgICAgICAgICAgIC5tYXAob3B0aW9uID0+IG9wdGlvbi52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlc3RvcmVNdWx0aXBsZU9wdGlvbnMoKSB7XG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5maWx0ZXIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5maWx0ZXIudmFsdWUgJiZcbiAgICAgICAgdGhpcy5maWx0ZXIudmFsdWUubGVuZ3RoICYmXG4gICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RlZFZhbHVlcyAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHRoaXMucHJldmlvdXNTZWxlY3RlZFZhbHVlcylcbiAgICAgICkge1xuICAgICAgICBpZiAoIXRoaXMudmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gdGhpcy5vcHRpb25zLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NlbGVjdGVkVmFsdWVzLmZvckVhY2gocHJldmlvdXNWYWx1ZSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXRoaXMudmFsdWUuc29tZSgodjogYW55KSA9PiB0aGlzLmNvbXBhcmVXaXRoKHYsIHByZXZpb3VzVmFsdWUpKSAmJlxuICAgICAgICAgICAgIW9wdGlvblZhbHVlcy5zb21lKHYgPT4gdGhpcy5jb21wYXJlV2l0aCh2LCBwcmV2aW91c1ZhbHVlKSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIGlmIGEgdmFsdWUgdGhhdCB3YXMgc2VsZWN0ZWQgYmVmb3JlIGlzIGRlc2VsZWN0ZWQgYW5kIG5vdCBmb3VuZCBpbiB0aGUgb3B0aW9ucywgaXQgd2FzIGRlc2VsZWN0ZWRcbiAgICAgICAgICAgIC8vIGR1ZSB0byB0aGUgZmlsdGVyaW5nLCBzbyB3ZSByZXN0b3JlIGl0LlxuICAgICAgICAgICAgdGhpcy52YWx1ZS5wdXNoKHByZXZpb3VzVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RlZFZhbHVlcyA9IHRoaXMudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdEtleU1hbmFnZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuc2VsZWN0QWxsT3B0aW9uID8gW3RoaXMuc2VsZWN0QWxsT3B0aW9uLCAuLi50aGlzLm9wdGlvbnNdIDogdGhpcy5vcHRpb25zO1xuXG4gICAgaWYgKHRoaXMuZmlsdGVyKSB7XG4gICAgICB0aGlzLl9rZXlNYW5hZ2VyID0gbmV3IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyPE9wdGlvbkNvbXBvbmVudCB8IG51bGw+KFxuICAgICAgICBvcHRpb25zXG4gICAgICApLndpdGhWZXJ0aWNhbE9yaWVudGF0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2tleU1hbmFnZXIgPSBuZXcgQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXI8T3B0aW9uQ29tcG9uZW50IHwgbnVsbD4ob3B0aW9ucylcbiAgICAgICAgLndpdGhUeXBlQWhlYWQoMjAwKVxuICAgICAgICAud2l0aFZlcnRpY2FsT3JpZW50YXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5Ub09wdGlvbkNsaWNrKCkge1xuICAgIHRoaXMub3B0aW9ucy5jaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMub3B0aW9ucyksXG4gICAgICAgIHRhcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2V0SW5pdGlhbFZhbHVlKCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zaG93Tm9SZXN1bHRzTXNnID0gdGhpcy5vcHRpb25zLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0QWN0aXZlSXRlbShudWxsKTtcbiAgICAgICAgICAgIHRoaXMuX2luaXRLZXlNYW5hZ2VyKCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9pc09wZW4pIHtcbiAgICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0Rmlyc3RPcHRpb24oKTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9PcHRpb24odGhpcy5fa2V5TWFuYWdlci5hY3RpdmVJdGVtKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KSxcbiAgICAgICAgc3dpdGNoTWFwKChvcHRpb25zOiBRdWVyeUxpc3Q8T3B0aW9uQ29tcG9uZW50PikgPT4ge1xuICAgICAgICAgIHJldHVybiBtZXJnZSguLi5vcHRpb25zLm1hcCgob3B0aW9uOiBPcHRpb25Db21wb25lbnQpID0+IG9wdGlvbi5jbGljayQpKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoY2xpY2tlZE9wdGlvbjogT3B0aW9uQ29tcG9uZW50KSA9PiB0aGlzLl9oYW5kbGVPcHRpb25DbGljayhjbGlja2VkT3B0aW9uKSk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5Ub1NlbGVjdEFsbENsaWNrKCkge1xuICAgIHRoaXMuc2VsZWN0QWxsT3B0aW9uLmNsaWNrJFxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgLnN1YnNjcmliZSgob3B0aW9uOiBTZWxlY3RBbGxPcHRpb25Db21wb25lbnQpID0+IHtcbiAgICAgICAgdGhpcy5vblNlbGVjdEFsbChvcHRpb24pO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVWYWx1ZSgpIHtcbiAgICBsZXQgdXBkYXRlZFZhbHVlOiBhbnkgPSBudWxsO1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIHVwZGF0ZWRWYWx1ZSA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkLm1hcChvcHRpb24gPT4gb3B0aW9uLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlZFZhbHVlID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRbMF0udmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5fdmFsdWUgPSB1cGRhdGVkVmFsdWU7XG4gICAgdGhpcy5yZXN0b3JlTXVsdGlwbGVPcHRpb25zKCk7XG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVPcHRpb25DbGljayhvcHRpb246IE9wdGlvbkNvbXBvbmVudCkge1xuICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgdGhpcy5faGFuZGxlTXVsdGlwbGVTZWxlY3Rpb24ob3B0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGFuZGxlU2luZ2xlU2VsZWN0aW9uKG9wdGlvbik7XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlTGFiZUxQb3NpdGlvbigpO1xuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlU2luZ2xlU2VsZWN0aW9uKG9wdGlvbjogT3B0aW9uQ29tcG9uZW50KSB7XG4gICAgY29uc3QgY3VycmVudFNlbGVjdGlvbiA9IHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdGVkWzBdO1xuXG4gICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KG9wdGlvbik7XG4gICAgb3B0aW9uLnNlbGVjdCgpO1xuXG4gICAgaWYgKGN1cnJlbnRTZWxlY3Rpb24gJiYgY3VycmVudFNlbGVjdGlvbiAhPT0gb3B0aW9uKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5kZXNlbGVjdChjdXJyZW50U2VsZWN0aW9uKTtcbiAgICAgIGN1cnJlbnRTZWxlY3Rpb24uZGVzZWxlY3QoKTtcbiAgICAgIHRoaXMuZGVzZWxlY3RlZC5lbWl0KGN1cnJlbnRTZWxlY3Rpb24udmFsdWUpO1xuICAgIH1cblxuICAgIGlmICghY3VycmVudFNlbGVjdGlvbiB8fCAoY3VycmVudFNlbGVjdGlvbiAmJiBjdXJyZW50U2VsZWN0aW9uICE9PSBvcHRpb24pKSB7XG4gICAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkLmVtaXQob3B0aW9uLnZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlKCk7XG4gICAgdGhpcy5fZm9jdXMoKTtcbiAgICB0aGlzLl91cGRhdGVMYWJlTFBvc2l0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNdWx0aXBsZVNlbGVjdGlvbihvcHRpb246IE9wdGlvbkNvbXBvbmVudCkge1xuICAgIGNvbnN0IGN1cnJlbnRTZWxlY3Rpb25zID0gdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWQ7XG4gICAgaWYgKG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuZGVzZWxlY3Qob3B0aW9uKTtcbiAgICAgIG9wdGlvbi5kZXNlbGVjdCgpO1xuICAgICAgdGhpcy5kZXNlbGVjdGVkLmVtaXQoY3VycmVudFNlbGVjdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3Qob3B0aW9uKTtcbiAgICAgIG9wdGlvbi5zZWxlY3QoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdChvcHRpb24udmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrZWQgPSB0aGlzLmFsbENoZWNrZWQgPyB0cnVlIDogZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24gJiYgIXRoaXMuX3NlbGVjdEFsbENoZWNrZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWxsT3B0aW9uLmRlc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdXBkYXRlVmFsdWUoKTtcbiAgICB0aGlzLl9zb3J0VmFsdWVzKCk7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0U2VsZWN0aW9uKHNlbGVjdFZhbHVlOiBhbnkgfCBhbnlbXSkge1xuICAgIGlmIChzZWxlY3RWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICAgICAgc2VsZWN0VmFsdWUuZm9yRWFjaCgodmFsdWU6IGFueSkgPT4gdGhpcy5fc2VsZWN0QnlWYWx1ZSh2YWx1ZSkpO1xuICAgICAgICB0aGlzLl9zb3J0VmFsdWVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZWxlY3RCeVZhbHVlKHNlbGVjdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZWxlY3RCeVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBtYXRjaGluZ09wdGlvbiA9IHRoaXMub3B0aW9uc1xuICAgICAgLnRvQXJyYXkoKVxuICAgICAgLmZpbmQoKG9wdGlvbjogT3B0aW9uQ29tcG9uZW50KSA9PiB0aGlzLl9jb21wYXJlV2l0aChvcHRpb24udmFsdWUsIHZhbHVlKSk7XG5cbiAgICBpZiAobWF0Y2hpbmdPcHRpb24pIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsLnNlbGVjdChtYXRjaGluZ09wdGlvbik7XG4gICAgICBtYXRjaGluZ09wdGlvbi5zZWxlY3QoKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdChtYXRjaGluZ09wdGlvbi52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW5pdGlhbFZhbHVlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5uZ0NvbnRyb2wgPyB0aGlzLm5nQ29udHJvbC52YWx1ZSA6IHRoaXMuX3ZhbHVlO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5fc2V0U2VsZWN0aW9uKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2VsZWN0QWxsKHNlbGVjdEFsbG9wdGlvbjogU2VsZWN0QWxsT3B0aW9uQ29tcG9uZW50KSB7XG4gICAgaWYgKCFzZWxlY3RBbGxvcHRpb24uc2VsZWN0ZWQgJiYgIXRoaXMuX3NlbGVjdEFsbENoZWNrZWQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2goKG9wdGlvbjogT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KG9wdGlvbik7XG4gICAgICAgICAgb3B0aW9uLnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKCk7XG4gICAgICB0aGlzLl9zb3J0VmFsdWVzKCk7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUxhYmVMUG9zaXRpb24oKTtcbiAgICAgIHNlbGVjdEFsbG9wdGlvbi5zZWxlY3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0QWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcbiAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IE9wdGlvbkNvbXBvbmVudCkgPT4ge1xuICAgICAgICBvcHRpb24uZGVzZWxlY3QoKTtcbiAgICAgIH0pO1xuICAgICAgc2VsZWN0QWxsb3B0aW9uLmRlc2VsZWN0KCk7XG4gICAgICB0aGlzLl91cGRhdGVWYWx1ZSgpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5fb25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLl91cGRhdGVMYWJlTFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBvdmVybGF5UmVmID0gdGhpcy5fb3ZlcmxheVJlZjtcblxuICAgIGlmICghb3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5fcG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuX2Ryb3Bkb3duVGVtcGxhdGUsIHRoaXMuX3Zjcik7XG5cbiAgICAgIG92ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh7XG4gICAgICAgIHdpZHRoOiB0aGlzLl9zZWxlY3RXcmFwcGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpLFxuICAgICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9nZXRPdmVybGF5UG9zaXRpb24oKSxcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9vdmVybGF5UmVmID0gb3ZlcmxheVJlZjtcblxuICAgICAgb3ZlcmxheVJlZi5rZXlkb3duRXZlbnRzKCkuc3Vic2NyaWJlKChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgaWYgKGtleSA9PT0gRVNDQVBFIHx8IChrZXkgPT09IFVQX0FSUk9XICYmIGV2ZW50LmFsdEtleSkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICB0aGlzLl9mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob3ZlcmxheVJlZiAmJiAhb3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICBvdmVybGF5UmVmLmF0dGFjaCh0aGlzLl9wb3J0YWwpO1xuICAgICAgdGhpcy5fbGlzdGVuVG9PdXRTaWRlQ2ljayhvdmVybGF5UmVmLCB0aGlzLl9zZWxlY3RWYWx1ZS5uYXRpdmVFbGVtZW50KS5zdWJzY3JpYmUoKCkgPT5cbiAgICAgICAgdGhpcy5jbG9zZSgpXG4gICAgICApO1xuXG4gICAgICBpZiAodGhpcy5maWx0ZXIpIHtcbiAgICAgICAgdGhpcy5maWx0ZXIuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5faGlnaGxpZ2h0Rmlyc3RPcHRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fdmlld3BvcnRSdWxlcikge1xuICAgICAgdGhpcy5fdmlld3BvcnRSdWxlclxuICAgICAgICAuY2hhbmdlKClcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5faXNPcGVuICYmIG92ZXJsYXlSZWYpIHtcbiAgICAgICAgICAgIG92ZXJsYXlSZWYudXBkYXRlU2l6ZSh7IHdpZHRoOiB0aGlzLl9zZWxlY3RXcmFwcGVyLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGggfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZpcnN0U2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXTtcbiAgICAgIGlmIChmaXJzdFNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFRvT3B0aW9uKGZpcnN0U2VsZWN0ZWQpO1xuICAgICAgfVxuICAgIH0sIDApO1xuXG4gICAgdGhpcy5vcGVuZWQuZW1pdCgpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAna2V5ZG93bicsIChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVPcGVuS2V5ZG93bihldmVudCk7XG4gICAgICB9KTtcbiAgICB9LCAwKTtcblxuICAgIHRoaXMuX3VwZGF0ZUxhYmVMUG9zaXRpb24oKTtcblxuICAgIGlmICghdGhpcy5maWx0ZXIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIF9zb3J0VmFsdWVzKCkge1xuICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5vcHRpb25zLnRvQXJyYXkoKTtcblxuICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3J0Q29tcGFyYXRvclxuICAgICAgICAgID8gdGhpcy5zb3J0Q29tcGFyYXRvcihhLCBiLCBvcHRpb25zKVxuICAgICAgICAgIDogb3B0aW9ucy5pbmRleE9mKGEpIC0gb3B0aW9ucy5pbmRleE9mKGIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfbGlzdGVuVG9PdXRTaWRlQ2ljayhvdmVybGF5UmVmOiBPdmVybGF5UmVmLCBvcmlnaW46IEhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIGZyb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJykucGlwZShcbiAgICAgIGZpbHRlcigoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBjb25zdCBub3RPcmlnaW4gPSB0YXJnZXQgIT09IG9yaWdpbjtcbiAgICAgICAgY29uc3Qgbm90VmFsdWUgPSAhdGhpcy5fc2VsZWN0VmFsdWUubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXQpO1xuICAgICAgICBjb25zdCBub3RPdmVybGF5ID0gISFvdmVybGF5UmVmICYmIG92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnModGFyZ2V0KSA9PT0gZmFsc2U7XG4gICAgICAgIHJldHVybiBub3RPcmlnaW4gJiYgbm90VmFsdWUgJiYgbm90T3ZlcmxheTtcbiAgICAgIH0pLFxuICAgICAgdGFrZVVudGlsKG92ZXJsYXlSZWYuZGV0YWNobWVudHMoKSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0T3ZlcmxheVBvc2l0aW9uKCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5XG4gICAgICAucG9zaXRpb24oKVxuICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5fc2VsZWN0V3JhcHBlcilcbiAgICAgIC53aXRoUG9zaXRpb25zKHRoaXMuX2dldFBvc2l0aW9ucygpKVxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uU3RyYXRlZ3k7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQb3NpdGlvbnMoKTogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdIHtcbiAgICBjb25zdCBib3R0b21PZmZzZXQgPSB0aGlzLm91dGxpbmUgPyA0IDogNjtcbiAgICBjb25zdCB0b3BPZmZzZXQgPSB0aGlzLm91dGxpbmUgPyAtNyA6IC0zO1xuICAgIGlmICghdGhpcy5vdXRsaW5lKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgICBvcmlnaW5ZOiAndG9wJyxcbiAgICAgICAgICBvZmZzZXRZOiBib3R0b21PZmZzZXQsXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgICAgICBvZmZzZXRZOiB0b3BPZmZzZXQsXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nLFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICAgICAgb2Zmc2V0WTogYm90dG9tT2Zmc2V0LFxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAgICAgb2Zmc2V0WTogdG9wT2Zmc2V0LFxuICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJyxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc09wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3ZlcmxheVJlZiAmJiB0aGlzLl9vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmNsb3NlZC5lbWl0KCk7XG4gICAgdGhpcy5fdXBkYXRlTGFiZUxQb3NpdGlvbigpO1xuICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0QWN0aXZlSXRlbShudWxsKTtcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLl9pc09wZW4gPyB0aGlzLmNsb3NlKCkgOiB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZUxhYmVMUG9zaXRpb24oKSB7XG4gICAgaWYgKCF0aGlzLnBsYWNlaG9sZGVyICYmICF0aGlzLmhhc1NlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9sYWJlbEFjdGl2ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9sYWJlbEFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhhc1NlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZC5sZW5ndGggIT09IDA7XG4gIH1cblxuICBwcml2YXRlIF9zY3JvbGxUb09wdGlvbihvcHRpb246IE9wdGlvbkNvbXBvbmVudCkge1xuICAgIGxldCBvcHRpb25JbmRleDogbnVtYmVyO1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5zZWxlY3RBbGxPcHRpb24pIHtcbiAgICAgIG9wdGlvbkluZGV4ID0gdGhpcy5vcHRpb25zLnRvQXJyYXkoKS5pbmRleE9mKG9wdGlvbikgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25JbmRleCA9IHRoaXMub3B0aW9ucy50b0FycmF5KCkuaW5kZXhPZihvcHRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IGdyb3Vwc051bWJlciA9IHRoaXMuX2dldE51bWJlck9mR3JvdXBzQmVmb3JlT3B0aW9uKG9wdGlvbkluZGV4KTtcblxuICAgIGNvbnN0IHNjcm9sbFRvSW5kZXggPSBvcHRpb25JbmRleCArIGdyb3Vwc051bWJlcjtcblxuICAgIGNvbnN0IGxpc3QgPSB0aGlzLl9vcHRpb25zV3JhcHBlci5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGxpc3RIZWlnaHQgPSBsaXN0Lm9mZnNldEhlaWdodDtcblxuICAgIGlmIChvcHRpb25JbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBvcHRpb25Ub3AgPSBzY3JvbGxUb0luZGV4ICogdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgICBjb25zdCBvcHRpb25Cb3R0b20gPSBvcHRpb25Ub3AgKyB0aGlzLm9wdGlvbkhlaWdodDtcblxuICAgICAgY29uc3Qgdmlld1RvcCA9IGxpc3Quc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgdmlld0JvdHRvbSA9IHRoaXMuZHJvcGRvd25IZWlnaHQ7XG5cbiAgICAgIGlmIChvcHRpb25Cb3R0b20gPiB2aWV3Qm90dG9tKSB7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gb3B0aW9uQm90dG9tIC0gbGlzdEhlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9uVG9wIDwgdmlld1RvcCkge1xuICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IG9wdGlvblRvcDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9nZXROdW1iZXJPZkdyb3Vwc0JlZm9yZU9wdGlvbihvcHRpb25JbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAodGhpcy5vcHRpb25Hcm91cHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBvcHRpb25zTGlzdCA9IHRoaXMub3B0aW9ucy50b0FycmF5KCk7XG4gICAgICBjb25zdCBncm91cHNMaXN0ID0gdGhpcy5vcHRpb25Hcm91cHMudG9BcnJheSgpO1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm11bHRpcGxlID8gb3B0aW9uSW5kZXggLSAxIDogb3B0aW9uSW5kZXg7XG4gICAgICBsZXQgZ3JvdXBzTnVtYmVyID0gMDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xuICAgICAgICBpZiAob3B0aW9uc0xpc3RbaV0uZ3JvdXAgJiYgb3B0aW9uc0xpc3RbaV0uZ3JvdXAgPT09IGdyb3Vwc0xpc3RbZ3JvdXBzTnVtYmVyXSkge1xuICAgICAgICAgIGdyb3Vwc051bWJlcisrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBncm91cHNOdW1iZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBoYW5kbGVTZWxlY3Rpb25DbGVhcihldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT09IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC5jbGVhcigpO1xuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb246IE9wdGlvbkNvbXBvbmVudCkgPT4ge1xuICAgICAgb3B0aW9uLmRlc2VsZWN0KCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5zZWxlY3RBbGxPcHRpb24gJiYgdGhpcy5fc2VsZWN0QWxsQ2hlY2tlZCkge1xuICAgICAgdGhpcy5zZWxlY3RBbGxPcHRpb24uZGVzZWxlY3QoKTtcbiAgICAgIHRoaXMuX3NlbGVjdEFsbENoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KG51bGwpO1xuICAgIHRoaXMuX29uQ2hhbmdlKG51bGwpO1xuICAgIHRoaXMuX3VwZGF0ZUxhYmVMUG9zaXRpb24oKTtcbiAgICB0aGlzLl9zZWxlY3RBbGxDaGVja2VkID0gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVPcGVuS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICBjb25zdCBtYW5hZ2VyID0gdGhpcy5fa2V5TWFuYWdlcjtcbiAgICBjb25zdCBpc1VzZXJUeXBpbmcgPSBtYW5hZ2VyLmlzVHlwaW5nKCk7XG4gICAgY29uc3QgcHJldmlvdXNBY3RpdmVJdGVtID0gbWFuYWdlci5hY3RpdmVJdGVtO1xuICAgIG1hbmFnZXIub25LZXlkb3duKGV2ZW50KTtcblxuICAgIGlmIChrZXkgPT09IEhPTUUgfHwga2V5ID09PSBFTkQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBrZXkgPT09IEhPTUUgPyBtYW5hZ2VyLnNldEZpcnN0SXRlbUFjdGl2ZSgpIDogbWFuYWdlci5zZXRMYXN0SXRlbUFjdGl2ZSgpO1xuICAgICAgaWYgKG1hbmFnZXIuYWN0aXZlSXRlbSkge1xuICAgICAgICB0aGlzLl9zY3JvbGxUb09wdGlvbihtYW5hZ2VyLmFjdGl2ZUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLl9vdmVybGF5UmVmICYmXG4gICAgICB0aGlzLl9vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkgJiZcbiAgICAgICFpc1VzZXJUeXBpbmcgJiZcbiAgICAgIG1hbmFnZXIuYWN0aXZlSXRlbSAmJlxuICAgICAgKGtleSA9PT0gRU5URVIgfHwgKGtleSA9PT0gU1BBQ0UgJiYgIXRoaXMuZmlsdGVyKSlcbiAgICApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMuc2VsZWN0QWxsT3B0aW9uICYmIG1hbmFnZXIuYWN0aXZlSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgIHRoaXMub25TZWxlY3RBbGwodGhpcy5zZWxlY3RBbGxPcHRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faGFuZGxlT3B0aW9uQ2xpY2sobWFuYWdlci5hY3RpdmVJdGVtKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gVVBfQVJST1cgJiYgZXZlbnQuYWx0S2V5KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgdGhpcy5fZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gVVBfQVJST1cgfHwga2V5ID09PSBET1dOX0FSUk9XKSB7XG4gICAgICBpZiAobWFuYWdlci5hY3RpdmVJdGVtICYmIG1hbmFnZXIuYWN0aXZlSXRlbSAhPT0gcHJldmlvdXNBY3RpdmVJdGVtKSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFRvT3B0aW9uKG1hbmFnZXIuYWN0aXZlSXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQ2xvc2VkS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZTtcbiAgICBjb25zdCBtYW5hZ2VyID0gdGhpcy5fa2V5TWFuYWdlcjtcblxuICAgIGlmICgoa2V5ID09PSBET1dOX0FSUk9XICYmIGV2ZW50LmFsdEtleSkgfHwga2V5ID09PSBFTlRFUikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMubXVsdGlwbGUgJiYga2V5ID09PSBET1dOX0FSUk9XKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbWFuYWdlci5zZXROZXh0SXRlbUFjdGl2ZSgpO1xuICAgICAgaWYgKG1hbmFnZXIuYWN0aXZlSXRlbSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVPcHRpb25DbGljayhtYW5hZ2VyLmFjdGl2ZUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMubXVsdGlwbGUgJiYga2V5ID09PSBVUF9BUlJPVykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1hbmFnZXIuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk7XG4gICAgICBpZiAobWFuYWdlci5hY3RpdmVJdGVtKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZU9wdGlvbkNsaWNrKG1hbmFnZXIuYWN0aXZlSXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghdGhpcy5tdWx0aXBsZSAmJiBrZXkgPT09IEhPTUUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtYW5hZ2VyLnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgICAgaWYgKG1hbmFnZXIuYWN0aXZlSXRlbSkge1xuICAgICAgICB0aGlzLl9oYW5kbGVPcHRpb25DbGljayhtYW5hZ2VyLmFjdGl2ZUl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMubXVsdGlwbGUgJiYga2V5ID09PSBFTkQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtYW5hZ2VyLnNldExhc3RJdGVtQWN0aXZlKCk7XG4gICAgICBpZiAobWFuYWdlci5hY3RpdmVJdGVtKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZU9wdGlvbkNsaWNrKG1hbmFnZXIuYWN0aXZlSXRlbSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm11bHRpcGxlICYmIChrZXkgPT09IERPV05fQVJST1cgfHwga2V5ID09PSBVUF9BUlJPVykpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPcHRpb25zV2hlZWwoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IG9wdGlvbnNMaXN0ID0gdGhpcy5fb3B0aW9uc1dyYXBwZXIubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBhdFRvcCA9IG9wdGlvbnNMaXN0LnNjcm9sbFRvcCA9PT0gMDtcbiAgICBjb25zdCBhdEJvdHRvbSA9IG9wdGlvbnNMaXN0Lm9mZnNldEhlaWdodCArIG9wdGlvbnNMaXN0LnNjcm9sbFRvcCA9PT0gb3B0aW9uc0xpc3Quc2Nyb2xsSGVpZ2h0O1xuXG4gICAgaWYgKGF0VG9wICYmIGV2ZW50LmRlbHRhWSA8IDApIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChhdEJvdHRvbSAmJiBldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZvY3VzKCkge1xuICAgIHRoaXMuX2hhc0ZvY3VzID0gdHJ1ZTtcbiAgICB0aGlzLl9zZWxlY3RXcmFwcGVyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hpZ2hsaWdodEZpcnN0T3B0aW9uKCkge1xuICAgIGlmICghdGhpcy5oYXNTZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0Rmlyc3RJdGVtQWN0aXZlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmhhc1NlbGVjdGlvbiAmJiAhdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0ZWRbMF0uZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2tleU1hbmFnZXIuc2V0QWN0aXZlSXRlbSh0aGlzLl9zZWxlY3Rpb25Nb2RlbC5zZWxlY3RlZFswXSk7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIGlmICghdGhpcy5faXNPcGVuICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgICB9XG4gICAgdGhpcy5faGFzRm9jdXMgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3NlbGVjdGlvbk1vZGVsID0gbmV3IFNlbGVjdGlvbk1vZGVsPE9wdGlvbkNvbXBvbmVudD4odGhpcy5tdWx0aXBsZSk7XG5cbiAgICBpZiAodGhpcy5sYWJlbCkge1xuICAgICAgdGhpcy5fdXBkYXRlTGFiZUxQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgfVxuXG4gIC8qKiBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2UgbWV0aG9kcy4gKiovXG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucykge1xuICAgICAgdGhpcy5fc2V0U2VsZWN0aW9uKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19