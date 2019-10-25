/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, QueryList, } from '@angular/core';
import { MdbOptionComponent, MDB_OPTION_PARENT } from './mdb-option.component';
import { Subject, merge } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { document, window } from '../../../free/utils/facade/browser';
import { Utils } from './../../../free/utils/utils.class';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
export class MdbAutoCompleterComponent {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} platformId
     */
    constructor(renderer, el, platformId) {
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
    /**
     * @return {?}
     */
    get visibleOptions() {
        return this._visibleOptions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set visibleOptions(value) {
        if (value !== 0) {
            this._visibleOptions = value;
        }
    }
    /**
     * @return {?}
     */
    get optionHeight() {
        return this._optionHeight;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set optionHeight(value) {
        if (value !== 0) {
            this._optionHeight = value;
        }
    }
    /**
     * @return {?}
     */
    get dropdownHeight() {
        return this._dropdownHeight;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dropdownHeight(value) {
        if (value !== 0) {
            this._dropdownHeight = value;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _listenToOptionClick() {
        this.mdbOptions.changes
            .pipe(startWith(this.mdbOptions), switchMap((/**
         * @param {?} options
         * @return {?}
         */
        (options) => {
            return merge(...options.map((/**
             * @param {?} option
             * @return {?}
             */
            (option) => option.click$)));
        })), takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} clickedOption
         * @return {?}
         */
        (clickedOption) => this._handleOptionClick(clickedOption)));
    }
    /**
     * @private
     * @param {?} option
     * @return {?}
     */
    _handleOptionClick(option) {
        this.setSelectedItem({ text: option.value, element: option });
        this.highlightRow(0);
        this.select.emit({ text: option.value, element: option });
        this.selected.emit({ text: option.value, element: option });
    }
    /**
     * @param {?} item
     * @return {?}
     */
    setSelectedItem(item) {
        this._selectedItem = item;
        this._selectedItemChanged.next(this.getSelectedItem());
    }
    /**
     * @return {?}
     */
    getSelectedItem() {
        return this._selectedItem;
    }
    /**
     * @return {?}
     */
    selectedItemChanged() {
        return this._selectedItemChanged;
    }
    /**
     * @return {?}
     */
    isOpen() {
        return this._isOpen;
    }
    /**
     * @return {?}
     */
    _calculatePosition() {
        /** @type {?} */
        const modalEl = this.utils.getClosestEl(this.el.nativeElement, '.modal-dialog');
        /** @type {?} */
        const style = document.querySelector('.completer-dropdown')
            ? window.getComputedStyle(document.querySelector('.completer-dropdown'))
            : null;
        if (!style) {
            return;
        }
        /** @type {?} */
        const height = ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom']
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => parseInt(style.getPropertyValue(key), 10)))
            .reduce((/**
         * @param {?} prev
         * @param {?} cur
         * @return {?}
         */
        (prev, cur) => prev + cur));
        /** @type {?} */
        const topRect = document.querySelector('.completer-dropdown').getBoundingClientRect().top;
        /** @type {?} */
        const bottom = modalEl ? window.innerHeight - height - topRect : this.parameters.bottom;
        /** @type {?} */
        const top = this.dropdown.nativeElement.clientHeight > bottom
            ? `-${this.dropdown.nativeElement.clientHeight}`
            : this.parameters.inputHeight + 3;
        this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'left', 0 + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'width', this.parameters.width + 'px');
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.disabled) {
            this._isOpen = true;
            this._isDropdownOpen.next(this.isOpen());
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.dropdown && !this.appendToBody) {
                this._calculatePosition();
            }
        }), 0);
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this.disabled) {
            this._isOpen = false;
            this._isDropdownOpen.next(this.isOpen());
        }
    }
    /**
     * @return {?}
     */
    isDropdownOpen() {
        return this._isDropdownOpen;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    removeHighlight(index) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            (el, i) => {
                /** @type {?} */
                const completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (i === index) {
                    this.renderer.addClass(el.nativeElement.firstElementChild, 'highlight-row');
                }
                else if (i !== index) {
                    completerRow.forEach((/**
                     * @param {?} elem
                     * @return {?}
                     */
                    (elem) => {
                        this.renderer.removeClass(elem, 'highlight-row');
                    }));
                }
            }));
        }), 0);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    highlightRow(index) {
        this._allItems = this.optionList
            .filter((/**
         * @param {?} el
         * @return {?}
         */
        el => el.nativeElement.firstElementChild.classList.contains('completer-row')))
            .map((/**
         * @param {?} elem
         * @return {?}
         */
        elem => elem.nativeElement));
        if (this._allItems[index]) {
            this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            (el, i) => {
                /** @type {?} */
                const completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (index === i) {
                    this.removeHighlight(index);
                    this.renderer.addClass(completerRow[completerRow.length - 1], 'highlight-row');
                }
            }));
        }
        this._selectedItemIndex = index;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateUsingKeyboard(event) {
        if (this.dropdown) {
            switch (event.key) {
                case 'ArrowDown':
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
                    const selectedElement = this.mdbOptions.find((/**
                     * @param {?} el
                     * @param {?} index
                     * @return {?}
                     */
                    (el, index) => el && index === this._selectedItemIndex));
                    if (selectedElement) {
                        this.select.emit({ text: selectedElement.value, element: selectedElement });
                    }
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    this.moveHighlightedIntoView(event.key);
                    if (this._selectedItemIndex === -1 || this._selectedItemIndex === 0) {
                        /** @type {?} */
                        const lastItemIndex = this.mdbOptions.length;
                        this.highlightRow(lastItemIndex);
                    }
                    this.highlightRow(--this._selectedItemIndex);
                    /** @type {?} */
                    const selectedItem = this.mdbOptions.find((/**
                     * @param {?} el
                     * @param {?} index
                     * @return {?}
                     */
                    (el, index) => el && index === this._selectedItemIndex));
                    if (selectedItem) {
                        this.select.emit({ text: selectedItem.value, element: selectedItem });
                    }
                    break;
                case 'Escape':
                    event.preventDefault();
                    this.hide();
                    break;
                case 'Enter':
                    event.preventDefault();
                    /** @type {?} */
                    const selectedOption = this.mdbOptions.map((/**
                     * @param {?} el
                     * @return {?}
                     */
                    el => el))[this._selectedItemIndex];
                    if (selectedOption) {
                        this.setSelectedItem({ text: selectedOption.value, element: selectedOption });
                        this.select.emit({ text: selectedOption.value, element: selectedOption });
                        this.selected.emit({ text: selectedOption.value, element: selectedOption });
                    }
                    this.hide();
                    break;
            }
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    moveHighlightedIntoView(type) {
        /** @type {?} */
        let listHeight = 0;
        /** @type {?} */
        let itemIndex = this._selectedItemIndex;
        this.optionList.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            listHeight += el.nativeElement.offsetHeight;
        }));
        if (itemIndex > -1) {
            /** @type {?} */
            let itemHeight = 0;
            this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            (el, i) => {
                if (i === itemIndex + 1) {
                    itemHeight = el.nativeElement.firstElementChild.clientHeight;
                }
            }));
            /** @type {?} */
            const itemTop = (itemIndex + 1) * itemHeight;
            /** @type {?} */
            const viewTop = this.dropdown.nativeElement.scrollTop;
            /** @type {?} */
            const viewBottom = viewTop + listHeight;
            if (type === 'ArrowDown') {
                this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemTop - itemHeight);
            }
            else if (type === 'ArrowUp') {
                if (itemIndex === 0) {
                    itemIndex = this.optionList.length - 1;
                }
                else {
                    itemIndex--;
                }
                if (itemIndex === this._allItems.length - 2) {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', viewBottom - itemHeight);
                }
                else {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemIndex * itemHeight);
                }
            }
        }
    }
    /**
     * @param {?} parameters
     * @return {?}
     */
    updatePosition(parameters) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.dropdown) {
                /** @type {?} */
                const top = this.dropdown.nativeElement.clientHeight > parameters.bottom
                    ? parameters.top - this.dropdown.nativeElement.clientHeight
                    : parameters.top;
                this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'left', parameters.left + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'width', parameters.width + 'px');
            }
        }), 0);
    }
    /**
     * @param {?} parameters
     * @return {?}
     */
    appendDropdown(parameters) {
        if (this._isBrowser && this.appendToBody) {
            /** @type {?} */
            const body = document.querySelector('body');
            /** @type {?} */
            const dropdown = this.el.nativeElement;
            if (body) {
                this.renderer.appendChild(body, dropdown);
                this.updatePosition(parameters);
            }
        }
    }
    /**
     * @return {?}
     */
    setSingleOptionHeight() {
        this.mdbOptions.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            option._optionHeight = this._optionHeight;
        }));
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._listenToOptionClick();
        this.highlightRow(0);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
}
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
MdbAutoCompleterComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvY29tcG9uZW50cy9tZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0UsT0FBTyxFQUFjLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVakUsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7O0lBa0ZwQyxZQUNVLFFBQW1CLEVBQ25CLEVBQWMsRUFDRCxVQUFrQjtRQUYvQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFsRmYsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIsd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBeUJqQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQzs7UUFZbkIsb0JBQWUsR0FBRyxHQUFHLENBQUM7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QVU7eUNBaUhQLE1BQU0sU0FBQyxXQUFXOzs7NEJBcEZwQixLQUFLOzBCQUNMLEtBQUs7a0NBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBRUwsS0FBSzsyQkFXTCxLQUFLOzZCQVlMLEtBQUs7MkJBWUwsS0FBSztxQkFDTCxNQUFNO3VCQUlOLE1BQU07eUJBSU4sZUFBZSxTQUFDLGtCQUFrQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3lCQUczRSxlQUFlLFNBQUMsa0JBQWtCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO3VCQUl6RCxTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTswQkFDdkMsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Ozs7SUExRHpDLGtEQUErQjs7SUFDL0IsZ0RBQTRCOztJQUM1Qix3REFBaUM7O0lBQ2pDLGlEQUErQjs7SUFDL0IsNkNBQTJCOztJQVczQixvREFBd0I7O0lBWXhCLGtEQUFtQjs7SUFZbkIsb0RBQXNCOztJQUV0QixpREFBdUQ7O0lBQ3ZELDJDQUdLOztJQUNMLDZDQUdLOztJQUNMLCtDQUVFOztJQUNGLCtDQUVFOztJQUVGLDZDQUErRDs7SUFDL0QsZ0RBQW1FOzs7OztJQUVuRSw2Q0FBdUM7Ozs7O0lBRXZDLDBDQUFtQzs7SUFFbkMsK0NBTUU7Ozs7O0lBRUYsb0RBQTJEOzs7OztJQUUzRCw4Q0FBbUM7Ozs7O0lBQ25DLDRDQUF3Qjs7Ozs7SUFDeEIsdURBQWdDOzs7OztJQUNoQyxrREFBdUM7Ozs7O0lBQ3ZDLHlEQUFnRTs7Ozs7SUFDaEUsK0NBQTJCOzs7OztJQUd6Qiw2Q0FBMkI7Ozs7O0lBQzNCLHVDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUExBVEZPUk1fSUQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgUXVlcnlMaXN0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRiT3B0aW9uQ29tcG9uZW50LCBNREJfT1BUSU9OX1BBUkVOVCB9IGZyb20gJy4vbWRiLW9wdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVNlbGVjdGVkT3B0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWxlY3RlZC1vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBkb2N1bWVudCwgd2luZG93IH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gJy4vLi4vLi4vLi4vZnJlZS91dGlscy91dGlscy5jbGFzcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItYXV0by1jb21wbGV0ZXInLFxuICB0ZW1wbGF0ZVVybDogJ21kYi1hdXRvLWNvbXBsZXRlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLy4uL2F1dG8tY29tcGxldGVyLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGV4cG9ydEFzOiAnbWRiQXV0b0NvbXBsZXRlcicsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTURCX09QVElPTl9QQVJFTlQsIHVzZUV4aXN0aW5nOiBNZGJBdXRvQ29tcGxldGVyQ29tcG9uZW50IH1dLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJBdXRvQ29tcGxldGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdGV4dE5vUmVzdWx0czogc3RyaW5nO1xuICBASW5wdXQoKSBjbGVhckJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGNsZWFyQnV0dG9uVGFiSW5kZXggPSAwO1xuICBASW5wdXQoKSBhcHBlbmRUb0JvZHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB2aXNpYmxlT3B0aW9ucygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlT3B0aW9ucztcbiAgfVxuICBzZXQgdmlzaWJsZU9wdGlvbnModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgdGhpcy5fdmlzaWJsZU9wdGlvbnMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgX3Zpc2libGVPcHRpb25zOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgZ2V0IG9wdGlvbkhlaWdodCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25IZWlnaHQ7XG4gIH1cblxuICBzZXQgb3B0aW9uSGVpZ2h0KHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodmFsdWUgIT09IDApIHtcbiAgICAgIHRoaXMuX29wdGlvbkhlaWdodCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBfb3B0aW9uSGVpZ2h0ID0gNDU7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRyb3Bkb3duSGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Ryb3Bkb3duSGVpZ2h0O1xuICB9XG4gIHNldCBkcm9wZG93bkhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLl9kcm9wZG93bkhlaWdodCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICAvLyBlcXVhbCB0byA0ICogb3B0aW9uSGVpZ2h0ICh3aGljaCBpcyA0NSBieSBkZWZhdWx0KVxuICBfZHJvcGRvd25IZWlnaHQgPSAxODA7XG5cbiAgQElucHV0KCkgZGlzcGxheVZhbHVlOiAoKHZhbHVlOiBhbnkpID0+IHN0cmluZykgfCBudWxsO1xuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8eyB0ZXh0OiBzdHJpbmc7IGVsZW1lbnQ6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBlbGVtZW50OiBhbnk7XG4gIH0+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPHsgdGV4dDogc3RyaW5nOyBlbGVtZW50OiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgZWxlbWVudDogYW55O1xuICB9PigpO1xuICBAQ29udGVudENoaWxkcmVuKE1kYk9wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZiB9KSBvcHRpb25MaXN0OiBBcnJheTxcbiAgICBhbnlcbiAgPjtcbiAgQENvbnRlbnRDaGlsZHJlbihNZGJPcHRpb25Db21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbWRiT3B0aW9uczogUXVlcnlMaXN0PFxuICAgIE1kYk9wdGlvbkNvbXBvbmVudFxuICA+O1xuXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duJywgeyBzdGF0aWM6IGZhbHNlIH0pIGRyb3Bkb3duOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdub1Jlc3VsdHMnLCB7IHN0YXRpYzogZmFsc2UgfSkgbm9SZXN1bHRzRWw6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSB1dGlsczogVXRpbHMgPSBuZXcgVXRpbHMoKTtcblxuICBwdWJsaWMgcGFyYW1ldGVyczoge1xuICAgIGxlZnQ6IG51bWJlcjtcbiAgICB0b3A6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGJvdHRvbTogbnVtYmVyO1xuICAgIGlucHV0SGVpZ2h0OiBudW1iZXI7XG4gIH07XG5cbiAgcHJpdmF0ZSBfaXNEcm9wZG93bk9wZW46IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBwcml2YXRlIF9hbGxJdGVtczogQXJyYXk8YW55PiA9IFtdO1xuICBwcml2YXRlIF9pc09wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtSW5kZXggPSAtMTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtOiBJU2VsZWN0ZWRPcHRpb247XG4gIHByaXZhdGUgX3NlbGVjdGVkSXRlbUNoYW5nZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBfaXNCcm93c2VyID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMuX2lzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnbWRiLWF1dG8tY29tcGxldGVyJyk7XG4gIH1cblxuICBwcml2YXRlIF9saXN0ZW5Ub09wdGlvbkNsaWNrKCkge1xuICAgIHRoaXMubWRiT3B0aW9ucy5jaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKHRoaXMubWRiT3B0aW9ucyksXG4gICAgICAgIHN3aXRjaE1hcCgob3B0aW9uczogUXVlcnlMaXN0PE1kYk9wdGlvbkNvbXBvbmVudD4pID0+IHtcbiAgICAgICAgICByZXR1cm4gbWVyZ2UoLi4ub3B0aW9ucy5tYXAoKG9wdGlvbjogTWRiT3B0aW9uQ29tcG9uZW50KSA9PiBvcHRpb24uY2xpY2skKSk7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKGNsaWNrZWRPcHRpb246IE1kYk9wdGlvbkNvbXBvbmVudCkgPT4gdGhpcy5faGFuZGxlT3B0aW9uQ2xpY2soY2xpY2tlZE9wdGlvbikpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlT3B0aW9uQ2xpY2sob3B0aW9uOiBNZGJPcHRpb25Db21wb25lbnQpIHtcbiAgICB0aGlzLnNldFNlbGVjdGVkSXRlbSh7IHRleHQ6IG9wdGlvbi52YWx1ZSwgZWxlbWVudDogb3B0aW9uIH0pO1xuICAgIHRoaXMuaGlnaGxpZ2h0Um93KDApO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQoeyB0ZXh0OiBvcHRpb24udmFsdWUsIGVsZW1lbnQ6IG9wdGlvbiB9KTtcbiAgICB0aGlzLnNlbGVjdGVkLmVtaXQoeyB0ZXh0OiBvcHRpb24udmFsdWUsIGVsZW1lbnQ6IG9wdGlvbiB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWxlY3RlZEl0ZW0oaXRlbTogSVNlbGVjdGVkT3B0aW9uKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1DaGFuZ2VkLm5leHQodGhpcy5nZXRTZWxlY3RlZEl0ZW0oKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW07XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW1DaGFuZ2VkO1xuICB9XG5cbiAgcHVibGljIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICB9XG5cbiAgcHVibGljIF9jYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICBjb25zdCBtb2RhbEVsID0gdGhpcy51dGlscy5nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1vZGFsLWRpYWxvZycpO1xuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlci1kcm9wZG93bicpXG4gICAgICA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZXItZHJvcGRvd24nKSlcbiAgICAgIDogbnVsbDtcbiAgICBpZiAoIXN0eWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhlaWdodCA9IFsnaGVpZ2h0JywgJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ21hcmdpbi10b3AnLCAnbWFyZ2luLWJvdHRvbSddXG4gICAgICAubWFwKGtleSA9PiBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGtleSksIDEwKSlcbiAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldiArIGN1cik7XG5cbiAgICBjb25zdCB0b3BSZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlci1kcm9wZG93bicpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBjb25zdCBib3R0b20gPSBtb2RhbEVsID8gd2luZG93LmlubmVySGVpZ2h0IC0gaGVpZ2h0IC0gdG9wUmVjdCA6IHRoaXMucGFyYW1ldGVycy5ib3R0b207XG5cbiAgICBjb25zdCB0b3AgPVxuICAgICAgdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA+IGJvdHRvbVxuICAgICAgICA/IGAtJHt0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0fWBcbiAgICAgICAgOiB0aGlzLnBhcmFtZXRlcnMuaW5wdXRIZWlnaHQgKyAzO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAndG9wJywgdG9wICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgMCArICdweCcpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB0aGlzLnBhcmFtZXRlcnMud2lkdGggKyAncHgnKTtcbiAgfVxuICBwdWJsaWMgc2hvdygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XG4gICAgICB0aGlzLl9pc0Ryb3Bkb3duT3Blbi5uZXh0KHRoaXMuaXNPcGVuKCkpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJvcGRvd24gJiYgIXRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNEcm9wZG93bk9wZW4ubmV4dCh0aGlzLmlzT3BlbigpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNEcm9wZG93bk9wZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faXNEcm9wZG93bk9wZW47XG4gIH1cblxuICByZW1vdmVIaWdobGlnaHQoaW5kZXg6IG51bWJlcikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKGVsOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjb21wbGV0ZXJSb3cgPSBlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZXItcm93Jyk7XG4gICAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hpZ2hsaWdodC1yb3cnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgIGNvbXBsZXRlclJvdy5mb3JFYWNoKChlbGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbSwgJ2hpZ2hsaWdodC1yb3cnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBoaWdobGlnaHRSb3coaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuX2FsbEl0ZW1zID0gdGhpcy5vcHRpb25MaXN0XG4gICAgICAuZmlsdGVyKGVsID0+IGVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZXItcm93JykpXG4gICAgICAubWFwKGVsZW0gPT4gZWxlbS5uYXRpdmVFbGVtZW50KTtcblxuICAgIGlmICh0aGlzLl9hbGxJdGVtc1tpbmRleF0pIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKChlbDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY29tcGxldGVyUm93ID0gZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGVyLXJvdycpO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KGluZGV4KTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNvbXBsZXRlclJvd1tjb21wbGV0ZXJSb3cubGVuZ3RoIC0gMV0sICdoaWdobGlnaHQtcm93Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCA9IGluZGV4O1xuICB9XG5cbiAgbmF2aWdhdGVVc2luZ0tleWJvYXJkKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5kcm9wZG93bikge1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMubW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoZXZlbnQua2V5KTtcblxuICAgICAgICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ICsgMSA8PSB0aGlzLl9hbGxJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJvdygrK3RoaXMuX3NlbGVjdGVkSXRlbUluZGV4KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ICsgMSA9PT0gdGhpcy5fYWxsSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJvdygwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0Um93KDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudDogYW55ID0gdGhpcy5tZGJPcHRpb25zLmZpbmQoXG4gICAgICAgICAgICAoZWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gZWwgJiYgaW5kZXggPT09IHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KHsgdGV4dDogc2VsZWN0ZWRFbGVtZW50LnZhbHVlLCBlbGVtZW50OiBzZWxlY3RlZEVsZW1lbnQgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldyhldmVudC5rZXkpO1xuICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCA9PT0gLTEgfHwgdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJdGVtSW5kZXggPSB0aGlzLm1kYk9wdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3cobGFzdEl0ZW1JbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0Um93KC0tdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXgpO1xuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtOiBhbnkgPSB0aGlzLm1kYk9wdGlvbnMuZmluZChcbiAgICAgICAgICAgIChlbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiBlbCAmJiBpbmRleCA9PT0gdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXhcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0LmVtaXQoeyB0ZXh0OiBzZWxlY3RlZEl0ZW0udmFsdWUsIGVsZW1lbnQ6IHNlbGVjdGVkSXRlbSB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnRXNjYXBlJzpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gdGhpcy5tZGJPcHRpb25zLm1hcChlbCA9PiBlbClbdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXhdO1xuICAgICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW0oeyB0ZXh0OiBzZWxlY3RlZE9wdGlvbi52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRPcHRpb24gfSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KHsgdGV4dDogc2VsZWN0ZWRPcHRpb24udmFsdWUsIGVsZW1lbnQ6IHNlbGVjdGVkT3B0aW9uIH0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KHsgdGV4dDogc2VsZWN0ZWRPcHRpb24udmFsdWUsIGVsZW1lbnQ6IHNlbGVjdGVkT3B0aW9uIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldyh0eXBlOiBzdHJpbmcpIHtcbiAgICBsZXQgbGlzdEhlaWdodCA9IDA7XG4gICAgbGV0IGl0ZW1JbmRleCA9IHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4O1xuXG4gICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgIGxpc3RIZWlnaHQgKz0gZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfSk7XG5cbiAgICBpZiAoaXRlbUluZGV4ID4gLTEpIHtcbiAgICAgIGxldCBpdGVtSGVpZ2h0ID0gMDtcblxuICAgICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKGVsOiBFbGVtZW50UmVmLCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKGkgPT09IGl0ZW1JbmRleCArIDEpIHtcbiAgICAgICAgICBpdGVtSGVpZ2h0ID0gZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBpdGVtVG9wID0gKGl0ZW1JbmRleCArIDEpICogaXRlbUhlaWdodDtcbiAgICAgIGNvbnN0IHZpZXdUb3AgPSB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgdmlld0JvdHRvbSA9IHZpZXdUb3AgKyBsaXN0SGVpZ2h0O1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGxUb3AnLCBpdGVtVG9wIC0gaXRlbUhlaWdodCk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdBcnJvd1VwJykge1xuICAgICAgICBpZiAoaXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgaXRlbUluZGV4ID0gdGhpcy5vcHRpb25MaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbUluZGV4LS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRlbUluZGV4ID09PSB0aGlzLl9hbGxJdGVtcy5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCxcbiAgICAgICAgICAgICdzY3JvbGxUb3AnLFxuICAgICAgICAgICAgdmlld0JvdHRvbSAtIGl0ZW1IZWlnaHRcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAnc2Nyb2xsVG9wJyxcbiAgICAgICAgICAgIGl0ZW1JbmRleCAqIGl0ZW1IZWlnaHRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24ocGFyYW1ldGVyczogeyBsZWZ0OiBudW1iZXI7IHRvcDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyBib3R0b206IG51bWJlciB9KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcm9wZG93bikge1xuICAgICAgICBjb25zdCB0b3AgPVxuICAgICAgICAgIHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgPiBwYXJhbWV0ZXJzLmJvdHRvbVxuICAgICAgICAgICAgPyBwYXJhbWV0ZXJzLnRvcCAtIHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICAgICAgICAgIDogcGFyYW1ldGVycy50b3A7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAndG9wJywgdG9wICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHBhcmFtZXRlcnMubGVmdCArICdweCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgcGFyYW1ldGVycy53aWR0aCArICdweCcpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgcHVibGljIGFwcGVuZERyb3Bkb3duKHBhcmFtZXRlcnM6IHsgbGVmdDogYW55OyB0b3A6IGFueTsgd2lkdGg6IGFueTsgYm90dG9tOiBudW1iZXIgfSkge1xuICAgIGlmICh0aGlzLl9pc0Jyb3dzZXIgJiYgdGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICBjb25zdCBkcm9wZG93biA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKGJvZHkpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChib2R5LCBkcm9wZG93bik7XG4gICAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24ocGFyYW1ldGVycyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyBzZXRTaW5nbGVPcHRpb25IZWlnaHQoKSB7XG4gICAgdGhpcy5tZGJPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIG9wdGlvbi5fb3B0aW9uSGVpZ2h0ID0gdGhpcy5fb3B0aW9uSGVpZ2h0O1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2xpc3RlblRvT3B0aW9uQ2xpY2soKTtcbiAgICB0aGlzLmhpZ2hsaWdodFJvdygwKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgfVxufVxuIl19