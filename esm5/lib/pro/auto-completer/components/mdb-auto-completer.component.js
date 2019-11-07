/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, QueryList, } from '@angular/core';
import { MdbOptionComponent, MDB_OPTION_PARENT } from './mdb-option.component';
import { Subject, merge } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { document, window } from '../../../free/utils/facade/browser';
import { Utils } from './../../../free/utils/utils.class';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { DOWN_ARROW, ENTER, ESCAPE, UP_ARROW } from '../../../free/utils/keyboard-navigation';
var MdbAutoCompleterComponent = /** @class */ (function () {
    function MdbAutoCompleterComponent(renderer, el, platformId) {
        this.renderer = renderer;
        this.el = el;
        this.clearButton = true;
        this.clearButtonTabIndex = 0;
        this._optionHeight = 45;
        // equal to 4 * optionHeight (which is 45 by default)
        this._dropdownHeight = 180;
        this.select = new EventEmitter();
        this.selected = new EventEmitter();
        this._destroy = new Subject();
        this.utils = new Utils();
        this._isDropdownOpen = new Subject();
        this._allItems = [];
        this._isOpen = false;
        this._selectedItemIndex = -1;
        this._selectedItemChanged = new Subject();
        this._isBrowser = false;
        this._isBrowser = isPlatformBrowser(platformId);
        this.renderer.addClass(this.el.nativeElement, 'mdb-auto-completer');
    }
    Object.defineProperty(MdbAutoCompleterComponent.prototype, "visibleOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visibleOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== 0) {
                this._visibleOptions = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbAutoCompleterComponent.prototype, "optionHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._optionHeight;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== 0) {
                this._optionHeight = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbAutoCompleterComponent.prototype, "dropdownHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dropdownHeight;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== 0) {
                this._dropdownHeight = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype._listenToOptionClick = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.mdbOptions.changes
            .pipe(startWith(this.mdbOptions), switchMap((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            return merge.apply(void 0, tslib_1.__spread(options.map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return option.click$; }))));
        })), takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} clickedOption
         * @return {?}
         */
        function (clickedOption) { return _this._handleOptionClick(clickedOption); }));
    };
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype._handleOptionClick = /**
     * @private
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.setSelectedItem({ text: option.value, element: option });
        this.highlightRow(0);
        this.select.emit({ text: option.value, element: option });
        this.selected.emit({ text: option.value, element: option });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.setSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._selectedItem = item;
        this._selectedItemChanged.next(this.getSelectedItem());
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.getSelectedItem = /**
     * @return {?}
     */
    function () {
        return this._selectedItem;
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.selectedItemChanged = /**
     * @return {?}
     */
    function () {
        return this._selectedItemChanged;
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.isOpen = /**
     * @return {?}
     */
    function () {
        return this._isOpen;
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype._calculatePosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var modalEl = this.utils.getClosestEl(this.el.nativeElement, '.modal-dialog');
        /** @type {?} */
        var style = document.querySelector('.completer-dropdown')
            ? window.getComputedStyle(document.querySelector('.completer-dropdown'))
            : null;
        if (!style) {
            return;
        }
        /** @type {?} */
        var height = ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom']
            .map((/**
         * @param {?} key
         * @return {?}
         */
        function (key) { return parseInt(style.getPropertyValue(key), 10); }))
            .reduce((/**
         * @param {?} prev
         * @param {?} cur
         * @return {?}
         */
        function (prev, cur) { return prev + cur; }));
        /** @type {?} */
        var topRect = document.querySelector('.completer-dropdown').getBoundingClientRect().top;
        /** @type {?} */
        var bottom = modalEl ? window.innerHeight - height - topRect : this.parameters.bottom;
        /** @type {?} */
        var top = this.dropdown.nativeElement.clientHeight > bottom
            ? "-" + this.dropdown.nativeElement.clientHeight
            : this.parameters.inputHeight + 3;
        this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'left', 0 + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'width', this.parameters.width + 'px');
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.disabled) {
            this._isOpen = true;
            this._isDropdownOpen.next(this.isOpen());
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.dropdown && !_this.appendToBody) {
                _this._calculatePosition();
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this._isOpen = false;
            this._isDropdownOpen.next(this.isOpen());
        }
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.isDropdownOpen = /**
     * @return {?}
     */
    function () {
        return this._isDropdownOpen;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.removeHighlight = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            function (el, i) {
                /** @type {?} */
                var completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (i === index) {
                    _this.renderer.addClass(el.nativeElement.firstElementChild, 'highlight-row');
                }
                else if (i !== index) {
                    completerRow.forEach((/**
                     * @param {?} elem
                     * @return {?}
                     */
                    function (elem) {
                        _this.renderer.removeClass(elem, 'highlight-row');
                    }));
                }
            }));
        }), 0);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.highlightRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        this._allItems = this.optionList
            .filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.nativeElement.firstElementChild.classList.contains('completer-row'); }))
            .map((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return elem.nativeElement; }));
        if (this._allItems[index]) {
            this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            function (el, i) {
                /** @type {?} */
                var completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (index === i) {
                    _this.removeHighlight(index);
                    _this.renderer.addClass(completerRow[completerRow.length - 1], 'highlight-row');
                }
            }));
        }
        this._selectedItemIndex = index;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.navigateUsingKeyboard = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.dropdown) {
            switch (event.keyCode) {
                case DOWN_ARROW:
                    event.preventDefault();
                    this.moveHighlightedIntoView(event.key);
                    if (!this.isOpen()) {
                        this.show();
                    }
                    if (this._selectedItemIndex + 1 <= this._allItems.length - 1) {
                        this.highlightRow(++this._selectedItemIndex);
                    }
                    else if (this._selectedItemIndex + 1 === this._allItems.length) {
                        this.highlightRow(0);
                    }
                    if (this._selectedItemIndex === 0) {
                        this.highlightRow(0);
                    }
                    /** @type {?} */
                    var selectedElement = this.mdbOptions.find((/**
                     * @param {?} el
                     * @param {?} index
                     * @return {?}
                     */
                    function (el, index) { return el && index === _this._selectedItemIndex; }));
                    if (selectedElement) {
                        this.select.emit({ text: selectedElement.value, element: selectedElement });
                    }
                    break;
                case UP_ARROW:
                    event.preventDefault();
                    this.moveHighlightedIntoView(event.key);
                    if (this._selectedItemIndex === -1 || this._selectedItemIndex === 0) {
                        /** @type {?} */
                        var lastItemIndex = this.mdbOptions.length;
                        this.highlightRow(lastItemIndex);
                    }
                    this.highlightRow(--this._selectedItemIndex);
                    /** @type {?} */
                    var selectedItem = this.mdbOptions.find((/**
                     * @param {?} el
                     * @param {?} index
                     * @return {?}
                     */
                    function (el, index) { return el && index === _this._selectedItemIndex; }));
                    if (selectedItem) {
                        this.select.emit({ text: selectedItem.value, element: selectedItem });
                    }
                    break;
                case ESCAPE:
                    event.preventDefault();
                    this.hide();
                    break;
                case ENTER:
                    event.preventDefault();
                    /** @type {?} */
                    var selectedOption = this.mdbOptions.map((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) { return el; }))[this._selectedItemIndex];
                    if (selectedOption) {
                        this.setSelectedItem({ text: selectedOption.value, element: selectedOption });
                        this.select.emit({ text: selectedOption.value, element: selectedOption });
                        this.selected.emit({ text: selectedOption.value, element: selectedOption });
                    }
                    this.hide();
                    break;
            }
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.moveHighlightedIntoView = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var listHeight = 0;
        /** @type {?} */
        var itemIndex = this._selectedItemIndex;
        this.optionList.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            listHeight += el.nativeElement.offsetHeight;
        }));
        if (itemIndex > -1) {
            /** @type {?} */
            var itemHeight_1 = 0;
            this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            function (el, i) {
                if (i === itemIndex + 1) {
                    itemHeight_1 = el.nativeElement.firstElementChild.clientHeight;
                }
            }));
            /** @type {?} */
            var itemTop = (itemIndex + 1) * itemHeight_1;
            /** @type {?} */
            var viewTop = this.dropdown.nativeElement.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (type === 'ArrowDown') {
                this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemTop - itemHeight_1);
            }
            else if (type === 'ArrowUp') {
                if (itemIndex === 0) {
                    itemIndex = this.optionList.length - 1;
                }
                else {
                    itemIndex--;
                }
                if (itemIndex === this._allItems.length - 2) {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', viewBottom - itemHeight_1);
                }
                else {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemIndex * itemHeight_1);
                }
            }
        }
    };
    /**
     * @param {?} parameters
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.updatePosition = /**
     * @param {?} parameters
     * @return {?}
     */
    function (parameters) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.dropdown) {
                /** @type {?} */
                var top_1 = _this.dropdown.nativeElement.clientHeight > parameters.bottom
                    ? parameters.top - _this.dropdown.nativeElement.clientHeight
                    : parameters.top;
                _this.renderer.setStyle(_this.dropdown.nativeElement, 'top', top_1 + 'px');
                _this.renderer.setStyle(_this.dropdown.nativeElement, 'left', parameters.left + 'px');
                _this.renderer.setStyle(_this.dropdown.nativeElement, 'width', parameters.width + 'px');
            }
        }), 0);
    };
    /**
     * @param {?} parameters
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.appendDropdown = /**
     * @param {?} parameters
     * @return {?}
     */
    function (parameters) {
        if (this._isBrowser && this.appendToBody) {
            /** @type {?} */
            var body = document.querySelector('body');
            /** @type {?} */
            var dropdown = this.el.nativeElement;
            if (body) {
                this.renderer.appendChild(body, dropdown);
                this.updatePosition(parameters);
            }
        }
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.setSingleOptionHeight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mdbOptions.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            option._optionHeight = _this._optionHeight;
        }));
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._listenToOptionClick();
        this.highlightRow(0);
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next();
        this._destroy.complete();
    };
    MdbAutoCompleterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-auto-completer',
                    template: "<div class=\"completer-dropdown-holder\" *ngIf=\"isOpen()\">\n  <div\n    class=\"completer-dropdown\"\n    #dropdown\n    [ngStyle]=\"{\n      'pointer-events': optionList.length === 0 ? 'none' : 'auto',\n      'max-height.px': _visibleOptions ? _visibleOptions * _optionHeight : _dropdownHeight\n    }\"\n  >\n    <div class=\"completer-row-wrapper\">\n      <div *ngIf=\"textNoResults && optionList.length === 0\" class=\"completer-no-results\" #noResults>\n        {{ textNoResults }}\n      </div>\n      <ng-content #content></ng-content>\n    </div>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    exportAs: 'mdbAutoCompleter',
                    providers: [{ provide: MDB_OPTION_PARENT, useExisting: MdbAutoCompleterComponent }],
                    styles: [".mdb-autocomplete{margin-bottom:1px}.mdb-autocomplete::-webkit-search-cancel-button,.mdb-autocomplete::-webkit-search-decoration,.mdb-autocomplete::-webkit-search-results-button,.mdb-autocomplete::-webkit-search-results-decoration{-webkit-appearance:none}button:focus{outline:0!important}button.mdb-autocomplete-clear{position:absolute;z-index:2;top:.5rem;right:0;visibility:hidden;border:none;background:0 0;cursor:pointer}button.mdb-autocomplete-clear svg{fill:#a6a6a6}.mdb-autocomplete-wrap{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);position:absolute;z-index:100;left:0;right:0;list-style-type:none;overflow-y:auto;max-height:210px;padding-left:0;background:#fff}.mdb-autocomplete-wrap li{padding:12px 15px;cursor:pointer;font-size:.875rem}.mdb-autocomplete-wrap li:hover{background:#eee}.mdb-autocomplete-wrap li.selected{background-color:#eee}.form-inline .md-form .form-control.mdb-autocomplete{width:15rem}ng2-completer .completer-dropdown-holder{margin-top:-1rem}ng2-completer .md-form label{z-index:-1}.mdb-autocomplete-clear:hover,.mdb-autocomplete:hover,mdb-auto-completer:hover{cursor:pointer}.completer-dropdown{margin-top:1px;position:absolute;left:0;right:0;width:100%;background:#fff;box-shadow:0 2px 5px rgba(0,0,0,.25);z-index:110;overflow-y:auto;overflow-x:hidden}.completer-dropdown .completer-row{width:100%;display:flex;align-items:center;justify-content:space-between;padding:12px 15px;outline:0;font-size:.875rem}.completer-dropdown .completer-row .completer-description{font-size:14px}.completer-dropdown .completer-row .completer-image-holder .completer-image-default{width:16px;height:16px}.completer-dropdown .completer-no-results,.completer-dropdown .completer-searching{padding:12px 15px;font-size:.875rem}.completer-selected-row{background-color:#eee}.completer-image{width:32px;height:32px;border-radius:50%}.validate-success.ng-valid .completer-input{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}.validate-success.ng-valid .completer-holder label{color:#00c851!important}.form-submitted .validate-error.ng-invalid .completer-input,.validate-error.ng-invalid.ng-touched .completer-input{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.form-submitted .validate-error.ng-invalid .completer-holder label,.validate-error.ng-invalid.ng-touched .completer-holder label{color:#f44336!important}.completer-row:hover,.highlight-row{background-color:#eee}"]
                }] }
    ];
    /** @nocollapse */
    MdbAutoCompleterComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbAutoCompleterComponent.propDecorators = {
        textNoResults: [{ type: Input }],
        clearButton: [{ type: Input }],
        clearButtonTabIndex: [{ type: Input }],
        appendToBody: [{ type: Input }],
        disabled: [{ type: Input }],
        visibleOptions: [{ type: Input }],
        optionHeight: [{ type: Input }],
        dropdownHeight: [{ type: Input }],
        displayValue: [{ type: Input }],
        select: [{ type: Output }],
        selected: [{ type: Output }],
        optionList: [{ type: ContentChildren, args: [MdbOptionComponent, { descendants: true, read: ElementRef },] }],
        mdbOptions: [{ type: ContentChildren, args: [MdbOptionComponent, { descendants: true },] }],
        dropdown: [{ type: ViewChild, args: ['dropdown', { static: false },] }],
        noResultsEl: [{ type: ViewChild, args: ['noResults', { static: false },] }]
    };
    return MdbAutoCompleterComponent;
}());
export { MdbAutoCompleterComponent };
if (false) {
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.textNoResults;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.clearButton;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.clearButtonTabIndex;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.appendToBody;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.disabled;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype._visibleOptions;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype._optionHeight;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype._dropdownHeight;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.displayValue;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.select;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.selected;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.optionList;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.mdbOptions;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.dropdown;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.noResultsEl;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._destroy;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype.utils;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.parameters;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._isDropdownOpen;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._allItems;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._isOpen;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._selectedItemIndex;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._selectedItem;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._selectedItemChanged;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._isBrowser;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvY29tcG9uZW50cy9tZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRS9FLE9BQU8sRUFBYyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFELE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUU5RjtJQTZGRSxtQ0FDVSxRQUFtQixFQUNuQixFQUFjLEVBQ0QsVUFBa0I7UUFGL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBckZmLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQTRC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QUErRDs7SUFDL0QsZ0RBQW1FOzs7OztJQUVuRSw2Q0FBdUM7Ozs7O0lBRXZDLDBDQUFtQzs7SUFFbkMsK0NBTUU7Ozs7O0lBRUYsb0RBQTJEOzs7OztJQUUzRCw4Q0FBbUM7Ozs7O0lBQ25DLDRDQUF3Qjs7Ozs7SUFDeEIsdURBQWdDOzs7OztJQUNoQyxrREFBdUM7Ozs7O0lBQ3ZDLHlEQUFnRTs7Ozs7SUFDaEUsK0NBQTJCOzs7OztJQUd6Qiw2Q0FBMkI7Ozs7O0lBQzNCLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgUXVlcnlMaXN0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRiT3B0aW9uQ29tcG9uZW50LCBNREJfT1BUSU9OX1BBUkVOVCB9IGZyb20gJy4vbWRiLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVNlbGVjdGVkT3B0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWxlY3RlZC1vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBkb2N1bWVudCwgd2luZG93IH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vLi4vLi4vLi4vZnJlZS91dGlscy91dGlscy5jbGFzcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgVVBfQVJST1cgfSBmcm9tICcuLi8uLi8uLi9mcmVlL3V0aWxzL2tleWJvYXJkLW5hdmlnYXRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItYXV0by1jb21wbGV0ZXInLFxuICB0ZW1wbGF0ZVVybDogJ21kYi1hdXRvLWNvbXBsZXRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLy4uL2F1dG8tY29tcGxldGVyLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbWRiQXV0b0NvbXBsZXRlcicsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTURCX09QVElPTl9QQVJFTlQsIHVzZUV4aXN0aW5nOiBNZGJBdXRvQ29tcGxldGVyQ29tcG9uZW50IH1dLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJBdXRvQ29tcGxldGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdGV4dE5vUmVzdWx0czogc3RyaW5nO1xuICBASW5wdXQoKSBjbGVhckJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGNsZWFyQnV0dG9uVGFiSW5kZXggPSAwO1xuICBASW5wdXQoKSBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB2aXNpYmxlT3B0aW9ucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlT3B0aW9ucztcbiAgfVxuXG4gIHNldCB2aXNpYmxlT3B0aW9ucyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLl92aXNpYmxlT3B0aW9ucyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIF92aXNpYmxlT3B0aW9uczogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBvcHRpb25IZWlnaHQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uSGVpZ2h0O1xuICB9XG5cbiAgc2V0IG9wdGlvbkhlaWdodCh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLl9vcHRpb25IZWlnaHQgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBfb3B0aW9uSGVpZ2h0ID0gNDU7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRyb3Bkb3duSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Ryb3Bkb3duSGVpZ2h0O1xuICB9XG5cbiAgc2V0IGRyb3Bkb3duSGVpZ2h0KHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgIHRoaXMuX2Ryb3Bkb3duSGVpZ2h0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgLy8gZXF1YWwgdG8gNCAqIG9wdGlvbkhlaWdodCAod2hpY2ggaXMgNDUgYnkgZGVmYXVsdClcbiAgX2Ryb3Bkb3duSGVpZ2h0ID0gMTgwO1xuXG4gIEBJbnB1dCgpIGRpc3BsYXlWYWx1ZTogKCh2YWx1ZTogYW55KSA9PiBzdHJpbmcpIHwgbnVsbDtcbiAgQE91dHB1dCgpIHNlbGVjdDogRXZlbnRFbWl0dGVyPHsgdGV4dDogc3RyaW5nOyBlbGVtZW50OiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgZWxlbWVudDogYW55O1xuICB9PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjx7IHRleHQ6IHN0cmluZzsgZWxlbWVudDogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGVsZW1lbnQ6IGFueTtcbiAgfT4oKTtcbiAgQENvbnRlbnRDaGlsZHJlbihNZGJPcHRpb25Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgb3B0aW9uTGlzdDogQXJyYXk8YW55PjtcbiAgQENvbnRlbnRDaGlsZHJlbihNZGJPcHRpb25Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgbWRiT3B0aW9uczogUXVlcnlMaXN0PE1kYk9wdGlvbkNvbXBvbmVudD47XG5cbiAgQFZpZXdDaGlsZCgnZHJvcGRvd24nLCB7IHN0YXRpYzogZmFsc2UgfSkgZHJvcGRvd246IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ25vUmVzdWx0cycsIHsgc3RhdGljOiBmYWxzZSB9KSBub1Jlc3VsdHNFbDogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIF9kZXN0cm95ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwcml2YXRlIHV0aWxzOiBVdGlscyA9IG5ldyBVdGlscygpO1xuXG4gIHB1YmxpYyBwYXJhbWV0ZXJzOiB7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgaW5wdXRIZWlnaHQ6IG51bWJlcjtcbiAgfTtcblxuICBwcml2YXRlIF9pc0Ryb3Bkb3duT3BlbjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIHByaXZhdGUgX2FsbEl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG4gIHByaXZhdGUgX2lzT3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zZWxlY3RlZEl0ZW1JbmRleCA9IC0xO1xuICBwcml2YXRlIF9zZWxlY3RlZEl0ZW06IElTZWxlY3RlZE9wdGlvbjtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtQ2hhbmdlZDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIF9pc0Jyb3dzZXIgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdtZGItYXV0by1jb21wbGV0ZXInKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblRvT3B0aW9uQ2xpY2soKSB7XG4gICAgdGhpcy5tZGJPcHRpb25zLmNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodGhpcy5tZGJPcHRpb25zKSxcbiAgICAgICAgc3dpdGNoTWFwKChvcHRpb25zOiBRdWVyeUxpc3Q8TWRiT3B0aW9uQ29tcG9uZW50PikgPT4ge1xuICAgICAgICAgIHJldHVybiBtZXJnZSguLi5vcHRpb25zLm1hcCgob3B0aW9uOiBNZGJPcHRpb25Db21wb25lbnQpID0+IG9wdGlvbi5jbGljayQpKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoY2xpY2tlZE9wdGlvbjogTWRiT3B0aW9uQ29tcG9uZW50KSA9PiB0aGlzLl9oYW5kbGVPcHRpb25DbGljayhjbGlja2VkT3B0aW9uKSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVPcHRpb25DbGljayhvcHRpb246IE1kYk9wdGlvbkNvbXBvbmVudCkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtKHsgdGV4dDogb3B0aW9uLnZhbHVlLCBlbGVtZW50OiBvcHRpb24gfSk7XG4gICAgdGhpcy5oaWdobGlnaHRSb3coMCk7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh7IHRleHQ6IG9wdGlvbi52YWx1ZSwgZWxlbWVudDogb3B0aW9uIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh7IHRleHQ6IG9wdGlvbi52YWx1ZSwgZWxlbWVudDogb3B0aW9uIH0pO1xuICB9XG5cbiAgcHVibGljIHNldFNlbGVjdGVkSXRlbShpdGVtOiBJU2VsZWN0ZWRPcHRpb24pIHtcbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX3NlbGVjdGVkSXRlbUNoYW5nZWQubmV4dCh0aGlzLmdldFNlbGVjdGVkSXRlbSgpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RlZEl0ZW1DaGFuZ2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbUNoYW5nZWQ7XG4gIH1cblxuICBwdWJsaWMgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gIH1cblxuICBwdWJsaWMgX2NhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgIGNvbnN0IG1vZGFsRWwgPSB0aGlzLnV0aWxzLmdldENsb3Nlc3RFbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICcubW9kYWwtZGlhbG9nJyk7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVyLWRyb3Bkb3duJylcbiAgICAgID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlci1kcm9wZG93bicpKVxuICAgICAgOiBudWxsO1xuICAgIGlmICghc3R5bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGVpZ2h0ID0gWydoZWlnaHQnLCAncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnbWFyZ2luLXRvcCcsICdtYXJnaW4tYm90dG9tJ11cbiAgICAgIC5tYXAoa2V5ID0+IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoa2V5KSwgMTApKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2ICsgY3VyKTtcblxuICAgIGNvbnN0IHRvcFJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVyLWRyb3Bkb3duJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IGJvdHRvbSA9IG1vZGFsRWwgPyB3aW5kb3cuaW5uZXJIZWlnaHQgLSBoZWlnaHQgLSB0b3BSZWN0IDogdGhpcy5wYXJhbWV0ZXJzLmJvdHRvbTtcblxuICAgIGNvbnN0IHRvcCA9XG4gICAgICB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gYm90dG9tXG4gICAgICAgID8gYC0ke3RoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHR9YFxuICAgICAgICA6IHRoaXMucGFyYW1ldGVycy5pbnB1dEhlaWdodCArIDM7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB0b3AgKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCAwICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHRoaXMucGFyYW1ldGVycy53aWR0aCArICdweCcpO1xuICB9XG5cbiAgcHVibGljIHNob3coKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5faXNEcm9wZG93bk9wZW4ubmV4dCh0aGlzLmlzT3BlbigpKTtcbiAgICB9XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duICYmICF0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgcHVibGljIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzRHJvcGRvd25PcGVuLm5leHQodGhpcy5pc09wZW4oKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGlzRHJvcGRvd25PcGVuKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRHJvcGRvd25PcGVuO1xuICB9XG5cbiAgcmVtb3ZlSGlnaGxpZ2h0KGluZGV4OiBudW1iZXIpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKChlbDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY29tcGxldGVyUm93ID0gZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGVyLXJvdycpO1xuICAgICAgICBpZiAoaSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQsICdoaWdobGlnaHQtcm93Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoaSAhPT0gaW5kZXgpIHtcbiAgICAgICAgICBjb21wbGV0ZXJSb3cuZm9yRWFjaCgoZWxlbTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsZW0sICdoaWdobGlnaHQtcm93Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIDApO1xuICB9XG5cbiAgaGlnaGxpZ2h0Um93KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLl9hbGxJdGVtcyA9IHRoaXMub3B0aW9uTGlzdFxuICAgICAgLmZpbHRlcihlbCA9PiBlbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGVyLXJvdycpKVxuICAgICAgLm1hcChlbGVtID0+IGVsZW0ubmF0aXZlRWxlbWVudCk7XG5cbiAgICBpZiAodGhpcy5fYWxsSXRlbXNbaW5kZXhdKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZm9yRWFjaCgoZWw6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlclJvdyA9IGVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZXRlci1yb3cnKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IGkpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUhpZ2hsaWdodChpbmRleCk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhjb21wbGV0ZXJSb3dbY29tcGxldGVyUm93Lmxlbmd0aCAtIDFdLCAnaGlnaGxpZ2h0LXJvdycpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXggPSBpbmRleDtcbiAgfVxuXG4gIG5hdmlnYXRlVXNpbmdLZXlib2FyZChldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuZHJvcGRvd24pIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIERPV05fQVJST1c6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KGV2ZW50LmtleSk7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCArIDEgPD0gdGhpcy5fYWxsSXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3coKyt0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCArIDEgPT09IHRoaXMuX2FsbEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3coMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJvdygwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQ6IGFueSA9IHRoaXMubWRiT3B0aW9ucy5maW5kKFxuICAgICAgICAgICAgKGVsOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGVsICYmIGluZGV4ID09PSB0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QuZW1pdCh7IHRleHQ6IHNlbGVjdGVkRWxlbWVudC52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRFbGVtZW50IH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFVQX0FSUk9XOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldyhldmVudC5rZXkpO1xuICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCA9PT0gLTEgfHwgdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJdGVtSW5kZXggPSB0aGlzLm1kYk9wdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3cobGFzdEl0ZW1JbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0Um93KC0tdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXgpO1xuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtOiBhbnkgPSB0aGlzLm1kYk9wdGlvbnMuZmluZChcbiAgICAgICAgICAgIChlbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiBlbCAmJiBpbmRleCA9PT0gdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0LmVtaXQoeyB0ZXh0OiBzZWxlY3RlZEl0ZW0udmFsdWUsIGVsZW1lbnQ6IHNlbGVjdGVkSXRlbSB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBFU0NBUEU6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBFTlRFUjpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm1kYk9wdGlvbnMubWFwKGVsID0+IGVsKVt0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleF07XG4gICAgICAgICAgaWYgKHNlbGVjdGVkT3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkSXRlbSh7IHRleHQ6IHNlbGVjdGVkT3B0aW9uLnZhbHVlLCBlbGVtZW50OiBzZWxlY3RlZE9wdGlvbiB9KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0LmVtaXQoeyB0ZXh0OiBzZWxlY3RlZE9wdGlvbi52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRPcHRpb24gfSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkLmVtaXQoeyB0ZXh0OiBzZWxlY3RlZE9wdGlvbi52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRPcHRpb24gfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVIaWdobGlnaHRlZEludG9WaWV3KHR5cGU6IHN0cmluZykge1xuICAgIGxldCBsaXN0SGVpZ2h0ID0gMDtcbiAgICBsZXQgaXRlbUluZGV4ID0gdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXg7XG5cbiAgICB0aGlzLm9wdGlvbkxpc3QuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgbGlzdEhlaWdodCArPSBlbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICB9KTtcblxuICAgIGlmIChpdGVtSW5kZXggPiAtMSkge1xuICAgICAgbGV0IGl0ZW1IZWlnaHQgPSAwO1xuXG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZm9yRWFjaCgoZWw6IEVsZW1lbnRSZWYsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBpZiAoaSA9PT0gaXRlbUluZGV4ICsgMSkge1xuICAgICAgICAgIGl0ZW1IZWlnaHQgPSBlbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGl0ZW1Ub3AgPSAoaXRlbUluZGV4ICsgMSkgKiBpdGVtSGVpZ2h0O1xuICAgICAgY29uc3Qgdmlld1RvcCA9IHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICBjb25zdCB2aWV3Qm90dG9tID0gdmlld1RvcCArIGxpc3RIZWlnaHQ7XG5cbiAgICAgIGlmICh0eXBlID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ3Njcm9sbFRvcCcsIGl0ZW1Ub3AgLSBpdGVtSGVpZ2h0KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIGlmIChpdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICBpdGVtSW5kZXggPSB0aGlzLm9wdGlvbkxpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtSW5kZXgtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpdGVtSW5kZXggPT09IHRoaXMuX2FsbEl0ZW1zLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgJ3Njcm9sbFRvcCcsXG4gICAgICAgICAgICB2aWV3Qm90dG9tIC0gaXRlbUhlaWdodFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICdzY3JvbGxUb3AnLFxuICAgICAgICAgICAgaXRlbUluZGV4ICogaXRlbUhlaWdodFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbihwYXJhbWV0ZXJzOiB7IGxlZnQ6IG51bWJlcjsgdG9wOiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IGJvdHRvbTogbnVtYmVyIH0pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duKSB7XG4gICAgICAgIGNvbnN0IHRvcCA9XG4gICAgICAgICAgdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA+IHBhcmFtZXRlcnMuYm90dG9tXG4gICAgICAgICAgICA/IHBhcmFtZXRlcnMudG9wIC0gdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICAgICAgOiBwYXJhbWV0ZXJzLnRvcDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB0b3AgKyAncHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgcGFyYW1ldGVycy5sZWZ0ICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBwYXJhbWV0ZXJzLndpZHRoICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBwdWJsaWMgYXBwZW5kRHJvcGRvd24ocGFyYW1ldGVyczogeyBsZWZ0OiBhbnk7IHRvcDogYW55OyB3aWR0aDogYW55OyBib3R0b206IG51bWJlciB9KSB7XG4gICAgaWYgKHRoaXMuX2lzQnJvd3NlciAmJiB0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuXG4gICAgICBpZiAoYm9keSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGJvZHksIGRyb3Bkb3duKTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihwYXJhbWV0ZXJzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2V0U2luZ2xlT3B0aW9uSGVpZ2h0KCkge1xuICAgIHRoaXMubWRiT3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICBvcHRpb24uX29wdGlvbkhlaWdodCA9IHRoaXMuX29wdGlvbkhlaWdodDtcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9saXN0ZW5Ub09wdGlvbkNsaWNrKCk7XG4gICAgdGhpcy5oaWdobGlnaHRSb3coMCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQoKTtcbiAgICB0aGlzLl9kZXN0cm95LmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==