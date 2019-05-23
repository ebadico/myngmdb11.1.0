/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, ElementRef, HostListener, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OptionList } from './option-list';
export class SelectDropdownComponent {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} cdRef
     */
    constructor(_elementRef, _renderer, cdRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.cdRef = cdRef;
        this.customClass = '';
        this.visibleOptions = 4;
        this.selectAllLabel = 'Select all';
        this.close = new EventEmitter();
        this.optionClicked = new EventEmitter();
        this.singleFilterClick = new EventEmitter();
        this.singleFilterInput = new EventEmitter();
        this.singleFilterKeydown = new EventEmitter();
        this.animationDone = new EventEmitter();
        this.animationStart = new EventEmitter();
        this.selectAll = new EventEmitter();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
        // Used in sliding-down animation
        this.state = 'invisible';
        this.startHeight = 0;
        this.endHeight = 45;
        this.hasOptionsItems = true;
        this.selectAllSelected = false;
        this.searchIndex = 0;
        this.previousKey = '';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onWindowKeyUp(event) {
        /** @type {?} */
        const searchKey = event.key.toString().replace('"', '');
        /** @type {?} */
        const items = Array.from(this.optionList['_options'])
            .filter((/**
         * @param {?} elem
         * @return {?}
         */
        (elem) => !elem.group))
            .filter((/**
         * @param {?} elem
         * @return {?}
         */
        (elem) => !elem.disabled))
            .map((/**
         * @param {?} el
         * @return {?}
         */
        (el) => el.wrappedOption.label || el.wrappedOption.value));
        this.navigateThroughArray(searchKey, items);
        this.previousKey = searchKey;
    }
    /**
     * @param {?} key
     * @param {?} itemSource
     * @return {?}
     */
    navigateThroughArray(key, itemSource) {
        /** @type {?} */
        const items = itemSource.filter((/**
         * @param {?} el
         * @return {?}
         */
        (el) => el.toString().toLowerCase().charAt(0).includes(key.toString().toLowerCase())));
        if (this.searchIndex > items.length - 1 || key !== this.previousKey) {
            this.searchIndex = 0;
        }
        this.highlightedItem = this.optionList.filtered.find((/**
         * @param {?} el
         * @return {?}
         */
        (el) => el.wrappedOption.label === items[this.searchIndex]));
        this.searchIndex++;
        if (this.highlightedItem) {
            this.optionList.highlightOption(this.highlightedItem);
        }
        this.moveHighlightedIntoView();
    }
    /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    onkeyup() {
        this.hasOptionsItems = this.optionList.filtered.length > 0;
        this.updateSelectAllState();
    }
    /**
     * @return {?}
     */
    onkeydown() {
        this.setOptionHeight();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateSelectAllState();
        this.optionsReset();
        this.setDropdownHeight();
        this.setVisibleOptionsNumber();
    }
    /**
     * @return {?}
     */
    setDropdownHeight() {
        this.optionList.options.filter((/**
         * @param {?} el
         * @return {?}
         */
        el => (/**
         * @return {?}
         */
        () => {
            if (el.icon) {
                this._renderer.setStyle(this.optionsList.nativeElement, 'height', (this.dropdownHeight + 8) + 'px');
            }
            else {
                this._renderer.setStyle(this.optionsList.nativeElement, 'height', this.dropdownHeight + 'px');
            }
        })));
    }
    /**
     * @return {?}
     */
    setVisibleOptionsNumber() {
        this._renderer.setStyle(this.optionsList.nativeElement, 'max-height', this.dropdownMaxHeight + 'px');
    }
    /**
     * @return {?}
     */
    setOptionHeight() {
        /** @type {?} */
        const optionsItems = Array.from(this.optionsList.nativeElement.firstElementChild.children);
        optionsItems.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            /** @type {?} */
            const isCustomElement = el.classList.contains('custom-select-content');
            if (el.firstElementChild) {
                if (this.optionHeight && el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    this._renderer.setStyle(el.firstElementChild, 'height', `${this.optionHeight}px`);
                }
                if (el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    this._renderer.setStyle(el.firstElementChild, 'line-height', `${this.optionHeight}px`);
                }
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        if (changes.hasOwnProperty('dropdownHeight')) {
            this.setDropdownHeight();
        }
        /** @type {?} */
        const container = this._elementRef.nativeElement.classList;
        setTimeout((/**
         * @return {?}
         */
        () => {
            container.add('fadeInSelect');
        }), 200);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // Sliding-down animation
        this.endHeight = this.dropdownContent.nativeElement.clientHeight;
        this.state = (this.state === 'invisible' ? 'visible' : 'invisible');
        this.cdRef.detectChanges();
        if (this.multiple) {
            /** @type {?} */
            const disabledElements = this._elementRef.nativeElement.querySelectorAll('.disabled.optgroup');
            for (let i = 0; i < disabledElements.length; i++) {
                this._renderer.setStyle(disabledElements[i].firstElementChild.lastElementChild, 'display', 'none');
            }
        }
        this.setOptionHeight();
        this.moveHighlightedIntoView();
        if (this.filterEnabled) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.filterInput.nativeElement.focus();
            }), 0);
        }
    }
    // Filter input (single select).
    /**
     * @return {?}
     */
    onSingleFilterClick() {
        this.singleFilterClick.emit(null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterInput(event) {
        this.singleFilterInput.emit(event.target.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterKeydown(event) {
        this.singleFilterKeydown.emit(event);
    }
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    onOptionsWheel(event) {
        this.handleOptionsWheel(event);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onOptionClick(option) {
        this.optionClicked.emit(option);
        this.updateSelectAllState();
    }
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    optionsReset() {
        this.optionList.filter('');
        this.optionList.highlight();
    }
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    getOptionStyle(option) {
        if (option.highlighted || option.hovered) {
            /** @type {?} */
            const optionStyle = {};
            optionStyle['height.px'] = this.optionHeight;
            if (typeof this.highlightColor !== 'undefined') {
                optionStyle['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                optionStyle['color'] = this.highlightTextColor;
            }
            return optionStyle;
        }
        else {
            return {};
        }
    }
    /**
     * @return {?}
     */
    onSelectAllClick() {
        this.selectAllSelected = !this.selectAllSelected;
        this.selectAll.emit(this.selectAllSelected);
    }
    /**
     * @return {?}
     */
    updateSelectAllState() {
        /** @type {?} */
        const areAllSelected = this.optionList.filtered
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        (option) => !option.disabled))
            .every((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            return option.selected ? true : false;
        }));
        areAllSelected ? this.selectAllSelected = true : this.selectAllSelected = false;
        this.cdRef.detectChanges();
    }
    /**
     * @return {?}
     */
    clearFilterInput() {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    }
    /**
     * @return {?}
     */
    onAnimationDone() {
        this.animationDone.emit();
    }
    /**
     * @return {?}
     */
    onAnimationStart() {
        this.animationStart.emit();
    }
    /**
     * @return {?}
     */
    moveHighlightedIntoView() {
        /** @type {?} */
        let listHeight;
        /** @type {?} */
        const list = this.optionsList.nativeElement;
        listHeight = this.multiple && this.enableSelectAll ? list.offsetHeight - this.optionHeight : list.offsetHeight;
        /** @type {?} */
        const itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            const item = list.children[0].children[itemIndex];
            /** @type {?} */
            const itemHeight = item.offsetHeight;
            /** @type {?} */
            const itemTop = itemIndex * itemHeight;
            /** @type {?} */
            const itemBottom = itemTop + itemHeight;
            /** @type {?} */
            const viewTop = list.scrollTop;
            /** @type {?} */
            const viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    handleOptionsWheel(e) {
        /** @type {?} */
        const div = this.optionsList.nativeElement;
        /** @type {?} */
        const atTop = div.scrollTop === 0;
        /** @type {?} */
        const atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    }
}
SelectDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-select-dropdown',
                template: "<div (click)=\"$event.stopPropagation()\" class=\"dropdown-content\" #dropdownContent [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\"\n[@dropdownAnimation]=\"{value: state, params: {startHeight: startHeight, endHeight: endHeight}}\" (@dropdownAnimation.done)=\"onAnimationDone()\" (@dropdownAnimation.start)=\"onAnimationStart()\">\n  <div class=\"filter md-form px-2\" *ngIf=\"filterEnabled\">\n    <input\n    type=\"text\"\n    class=\"search form-control w-100 d-block\"\n    #filterInput\n    [attr.autocomplete]=\"filterAutocomplete ? 'on' : 'off'\"\n    [placeholder]=\"placeholder\"\n    (input)=\"onSingleFilterInput($event)\"\n    (keydown)=\"onSingleFilterKeydown($event)\">\n  </div>\n\n  <div class=\"options\" #optionsList>\n    <ul class=\"select-dropdown\" [ngClass]=\"{'multiple-select-dropdown': multiple}\"\n    (wheel)=\"onOptionsWheel($event)\">\n      <li [ngStyle]=\"{ 'height.px': optionHeight }\" *ngIf=\"multiple && enableSelectAll && this.hasOptionsItems\" (click)=\"onSelectAllClick()\">\n        <span class=\"filtrable\" *ngIf=\"multiple\">\n          <input type=\"checkbox\" [checked]=\"selectAllSelected\" class=\"form-check-input {{customClass}}\">\n          <label></label>\n          {{selectAllLabel}}\n        </span>\n      </li>\n      <li *ngFor=\"let option of optionList.filtered\"\n        [ngClass]=\"{'active': option.highlighted, 'selected': option.selected, 'disabled': option.disabled, 'optgroup': option.group, 'd-flex justify-content-between flex-row-reverse align-items-center': option.icon}\"\n        [ngStyle]=\"{'height.px': optionHeight, 'line-height.px': optionHeight, 'background-color': getOptionStyle(option)['background-color'], 'color': getOptionStyle(option)['color']}\"\n        (click)=\"onOptionClick(option)\"\n        (mouseover)=\"option.hovered = true\"\n        (mouseleave)=\"option.hovered = false\">\n        <img class=\"rounded-circle\" [src]=\"option.icon\" *ngIf=\"option.icon !== ''\">\n        <span class=\"deselect-option\" *ngIf=\"!multiple\">{{option.label}}</span>\n        <span class=\"deselect-option\" *ngIf=\"multiple\">\n          <input type=\"checkbox\" [checked]=\"option.selected\" class=\"form-check-input {{customClass}}\" [disabled]=\"option.disabled\">\n          <label></label>\n          {{option.label}}\n        </span>\n      </li>\n      <li *ngIf=\"!this.hasOptionsItems\" class=\"message disabled\" [ngStyle]=\"{'height.px': optionHeight}\">\n        <span>{{notFoundMsg}}</span>\n      </li>\n      <li #customContent class=\"custom-select-content\">\n        <ng-content></ng-content>\n      </li>\n    </ul>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.Default,
                animations: [trigger('dropdownAnimation', [
                        state('invisible', style({ opacity: 0, height: '0px' })),
                        state('visible', style({ opacity: 1, height: '*' })),
                        transition('invisible => visible', animate('300ms ease')),
                        transition('visible => invisible', animate('300ms ease'))
                    ])]
            }] }
];
/** @nocollapse */
SelectDropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
SelectDropdownComponent.propDecorators = {
    filterEnabled: [{ type: Input }],
    filterAutocomplete: [{ type: Input }],
    highlightColor: [{ type: Input }],
    highlightTextColor: [{ type: Input }],
    left: [{ type: Input }],
    multiple: [{ type: Input }],
    notFoundMsg: [{ type: Input }],
    optionList: [{ type: Input }],
    top: [{ type: Input }],
    width: [{ type: Input }],
    placeholder: [{ type: Input }],
    customClass: [{ type: Input }],
    visibleOptions: [{ type: Input }],
    dropdownHeight: [{ type: Input }],
    dropdownMaxHeight: [{ type: Input }],
    optionHeight: [{ type: Input }],
    enableSelectAll: [{ type: Input }],
    selectAllLabel: [{ type: Input }],
    close: [{ type: Output }],
    optionClicked: [{ type: Output }],
    singleFilterClick: [{ type: Output }],
    singleFilterInput: [{ type: Output }],
    singleFilterKeydown: [{ type: Output }],
    animationDone: [{ type: Output }],
    animationStart: [{ type: Output }],
    selectAll: [{ type: Output }],
    filterInput: [{ type: ViewChild, args: ['filterInput',] }],
    optionsList: [{ type: ViewChild, args: ['optionsList',] }],
    dropdownContent: [{ type: ViewChild, args: ['dropdownContent',] }],
    customContent: [{ type: ViewChild, args: ['customContent',] }],
    onWindowKeyUp: [{ type: HostListener, args: ['window:keyup', ['$event'],] }],
    onkeyup: [{ type: HostListener, args: ['keyup',] }],
    onkeydown: [{ type: HostListener, args: ['input',] }]
};
if (false) {
    /** @type {?} */
    SelectDropdownComponent.prototype.filterEnabled;
    /** @type {?} */
    SelectDropdownComponent.prototype.filterAutocomplete;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightTextColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.left;
    /** @type {?} */
    SelectDropdownComponent.prototype.multiple;
    /** @type {?} */
    SelectDropdownComponent.prototype.notFoundMsg;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionList;
    /** @type {?} */
    SelectDropdownComponent.prototype.top;
    /** @type {?} */
    SelectDropdownComponent.prototype.width;
    /** @type {?} */
    SelectDropdownComponent.prototype.placeholder;
    /** @type {?} */
    SelectDropdownComponent.prototype.customClass;
    /** @type {?} */
    SelectDropdownComponent.prototype.visibleOptions;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownMaxHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.enableSelectAll;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAllLabel;
    /** @type {?} */
    SelectDropdownComponent.prototype.close;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionClicked;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterClick;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterInput;
    /** @type {?} */
    SelectDropdownComponent.prototype.singleFilterKeydown;
    /** @type {?} */
    SelectDropdownComponent.prototype.animationDone;
    /** @type {?} */
    SelectDropdownComponent.prototype.animationStart;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAll;
    /** @type {?} */
    SelectDropdownComponent.prototype.filterInput;
    /** @type {?} */
    SelectDropdownComponent.prototype.optionsList;
    /** @type {?} */
    SelectDropdownComponent.prototype.dropdownContent;
    /** @type {?} */
    SelectDropdownComponent.prototype.customContent;
    /** @type {?} */
    SelectDropdownComponent.prototype.disabledColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.disabledTextColor;
    /** @type {?} */
    SelectDropdownComponent.prototype.state;
    /** @type {?} */
    SelectDropdownComponent.prototype.startHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.endHeight;
    /** @type {?} */
    SelectDropdownComponent.prototype.hasOptionsItems;
    /** @type {?} */
    SelectDropdownComponent.prototype.selectAllSelected;
    /** @type {?} */
    SelectDropdownComponent.prototype.highlightedItem;
    /** @type {?} */
    SelectDropdownComponent.prototype.searchIndex;
    /** @type {?} */
    SelectDropdownComponent.prototype.previousKey;
    /** @type {?} */
    SelectDropdownComponent.prototype._elementRef;
    /** @type {?} */
    SelectDropdownComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    SelectDropdownComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFL0UsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQWN6QyxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUE4Q2xDLFlBQ1MsV0FBdUIsRUFDdkIsU0FBb0IsRUFDbkIsS0FBd0I7UUFGekIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQXBDekIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFLbkIsbUJBQWMsR0FBRyxZQUFZLENBQUM7UUFDN0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDN0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMvQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzlDLGtCQUFhLEdBQUcsSUFB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U0FBQyxPQUFPOzs7O0lBNUZyQixnREFBZ0M7O0lBQ2hDLHFEQUFxQzs7SUFDckMsaURBQWdDOztJQUNoQyxxREFBb0M7O0lBQ3BDLHVDQUFzQjs7SUFDdEIsMkNBQTJCOztJQUMzQiw4Q0FBNkI7O0lBQzdCLDZDQUFnQzs7SUFDaEMsc0NBQXFCOztJQUNyQix3Q0FBdUI7O0lBQ3ZCLDhDQUE2Qjs7SUFDN0IsOENBQTBCOztJQUMxQixpREFBNEI7O0lBQzVCLGlEQUFnQzs7SUFDaEMsb0RBQW1DOztJQUNuQywrQ0FBOEI7O0lBQzlCLGtEQUFrQzs7SUFDbEMsaURBQXVDOztJQUN2Qyx3Q0FBOEM7O0lBQzlDLGdEQUFxRDs7SUFDckQsb0RBQXVEOztJQUN2RCxvREFBeUQ7O0lBQ3pELHNEQUF3RDs7SUFDeEQsZ0RBQWtEOztJQUNsRCxpREFBbUQ7O0lBQ25ELDRDQUFrRDs7SUFFbEQsOENBQTJDOztJQUMzQyw4Q0FBMkM7O0lBQzNDLGtEQUEwRDs7SUFDMUQsZ0RBQXNEOztJQUV0RCxnREFBdUI7O0lBQ3ZCLG9EQUE2Qjs7SUFHN0Isd0NBQW9COztJQUNwQiw4Q0FBcUI7O0lBQ3JCLDRDQUFvQjs7SUFFcEIsa0RBQThCOztJQUU5QixvREFBMEI7O0lBUTFCLGtEQUFxQjs7SUFDckIsOENBQWdCOztJQUNoQiw4Q0FBaUI7O0lBUGYsOENBQThCOztJQUM5Qiw0Q0FBMkI7Ozs7O0lBQzNCLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7T3B0aW9ufSBmcm9tICcuL29wdGlvbic7XG5pbXBvcnQge09wdGlvbkxpc3R9IGZyb20gJy4vb3B0aW9uLWxpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc2VsZWN0LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdkcm9wZG93bkFuaW1hdGlvbicsIFtcbiAgICBzdGF0ZSgnaW52aXNpYmxlJywgc3R5bGUoe29wYWNpdHk6IDAsIGhlaWdodDogJzBweCd9KSksXG4gICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7b3BhY2l0eTogMSwgaGVpZ2h0OiAnKid9KSksXG4gICAgdHJhbnNpdGlvbignaW52aXNpYmxlID0+IHZpc2libGUnLCBhbmltYXRlKCczMDBtcyBlYXNlJykpLFxuICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaW52aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKVxuICBdKV1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZmlsdGVyRW5hYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZmlsdGVyQXV0b2NvbXBsZXRlOiBib29sZWFuO1xuICBASW5wdXQoKSBoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaWdobGlnaHRUZXh0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbGVmdDogbnVtYmVyO1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbm90Rm91bmRNc2c6IHN0cmluZztcbiAgQElucHV0KCkgb3B0aW9uTGlzdDogT3B0aW9uTGlzdDtcbiAgQElucHV0KCkgdG9wOiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIHZpc2libGVPcHRpb25zID0gNDtcbiAgQElucHV0KCkgZHJvcGRvd25IZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgZHJvcGRvd25NYXhIZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgb3B0aW9uSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IGFsbCc7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG9wdGlvbkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE9wdGlvbj4oKTtcbiAgQE91dHB1dCgpIHNpbmdsZUZpbHRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVySW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHNpbmdsZUZpbHRlcktleWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGFuaW1hdGlvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGFuaW1hdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RBbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKSBmaWx0ZXJJbnB1dDogYW55O1xuICBAVmlld0NoaWxkKCdvcHRpb25zTGlzdCcpIG9wdGlvbnNMaXN0OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duQ29udGVudCcpIGRyb3Bkb3duQ29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY3VzdG9tQ29udGVudCcpIGN1c3RvbUNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgZGlzYWJsZWRDb2xvciA9ICcjZmZmJztcbiAgZGlzYWJsZWRUZXh0Q29sb3IgPSAnOWU5ZTllJztcblxuICAvLyBVc2VkIGluIHNsaWRpbmctZG93biBhbmltYXRpb25cbiAgc3RhdGUgPSAnaW52aXNpYmxlJztcbiAgc3RhcnRIZWlnaHQ6IGFueSA9IDA7XG4gIGVuZEhlaWdodDogYW55ID0gNDU7XG5cbiAgcHVibGljIGhhc09wdGlvbnNJdGVtcyA9IHRydWU7XG5cbiAgc2VsZWN0QWxsU2VsZWN0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBoaWdobGlnaHRlZEl0ZW06IGFueTtcbiAgc2VhcmNoSW5kZXggPSAwO1xuICBwcmV2aW91c0tleSA9ICcnO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pIG9uV2luZG93S2V5VXAoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IGV2ZW50LmtleS50b1N0cmluZygpLnJlcGxhY2UoJ1wiJywgJycpO1xuXG4gICAgY29uc3QgaXRlbXMgPVxuICAgICAgQXJyYXkuZnJvbSh0aGlzLm9wdGlvbkxpc3RbJ19vcHRpb25zJ10pXG4gICAgICAgIC5maWx0ZXIoKGVsZW06IGFueSkgPT4gIWVsZW0uZ3JvdXApXG4gICAgICAgIC5maWx0ZXIoKGVsZW06IGFueSkgPT4gIWVsZW0uZGlzYWJsZWQpXG4gICAgICAgIC5tYXAoKGVsOiBhbnkpID0+IGVsLndyYXBwZWRPcHRpb24ubGFiZWwgfHwgZWwud3JhcHBlZE9wdGlvbi52YWx1ZSk7XG5cbiAgICB0aGlzLm5hdmlnYXRlVGhyb3VnaEFycmF5KHNlYXJjaEtleSwgaXRlbXMpO1xuICAgIHRoaXMucHJldmlvdXNLZXkgPSBzZWFyY2hLZXk7XG4gIH1cblxuICBuYXZpZ2F0ZVRocm91Z2hBcnJheShrZXk6IHN0cmluZywgaXRlbVNvdXJjZTogYW55KSB7XG4gICAgY29uc3QgaXRlbXMgPSBpdGVtU291cmNlLmZpbHRlcigoZWw6IGFueSkgPT4gZWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKS5pbmNsdWRlcyhrZXkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgaWYgKHRoaXMuc2VhcmNoSW5kZXggPiBpdGVtcy5sZW5ndGggLSAxIHx8IGtleSAhPT0gdGhpcy5wcmV2aW91c0tleSkge1xuICAgICAgdGhpcy5zZWFyY2hJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmZpbmQoKGVsOiBhbnkpID0+IGVsLndyYXBwZWRPcHRpb24ubGFiZWwgPT09IGl0ZW1zW3RoaXMuc2VhcmNoSW5kZXhdKTtcblxuICAgIHRoaXMuc2VhcmNoSW5kZXgrKztcblxuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodE9wdGlvbih0aGlzLmhpZ2hsaWdodGVkSXRlbSk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICB9XG5cbiAgLyoqIEV2ZW50IGhhbmRsZXJzLiAqKi9cblxuICAvLyBBbmd1bGFyIGxpZmUgY3ljbGUgaG9va3MuXG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnKSBvbmtleXVwKCkge1xuICAgIHRoaXMuaGFzT3B0aW9uc0l0ZW1zID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmxlbmd0aCA+IDA7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RBbGxTdGF0ZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBvbmtleWRvd24oKSB7XG4gICAgdGhpcy5zZXRPcHRpb25IZWlnaHQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgICB0aGlzLm9wdGlvbnNSZXNldCgpO1xuICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB0aGlzLnNldFZpc2libGVPcHRpb25zTnVtYmVyKCk7XG4gIH1cblxuICBzZXREcm9wZG93bkhlaWdodCgpIHtcbiAgICB0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5maWx0ZXIoZWwgPT4gKCkgPT4ge1xuICAgICAgaWYgKGVsLmljb24pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgKHRoaXMuZHJvcGRvd25IZWlnaHQgKyA4KSArICdweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdGhpcy5kcm9wZG93bkhlaWdodCArICdweCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmlzaWJsZU9wdGlvbnNOdW1iZXIoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LCAnbWF4LWhlaWdodCcsIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgKyAncHgnKTtcbiAgfVxuXG4gIHNldE9wdGlvbkhlaWdodCgpIHtcbiAgICBjb25zdCBvcHRpb25zSXRlbXMgPSBBcnJheS5mcm9tKHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbik7XG4gICAgb3B0aW9uc0l0ZW1zLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGlzQ3VzdG9tRWxlbWVudCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnY3VzdG9tLXNlbGVjdC1jb250ZW50Jyk7XG4gICAgICBpZiAoZWwuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uSGVpZ2h0ICYmIGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnICYmICFpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hlaWdodCcsIGAke3RoaXMub3B0aW9uSGVpZ2h0fXB4YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnICYmICFpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbC5maXJzdEVsZW1lbnRDaGlsZCwgJ2xpbmUtaGVpZ2h0JywgYCR7dGhpcy5vcHRpb25IZWlnaHR9cHhgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25MaXN0JykpIHtcbiAgICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Ryb3Bkb3duSGVpZ2h0JykpIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZCgnZmFkZUluU2VsZWN0Jyk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBTbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gICAgdGhpcy5lbmRIZWlnaHQgPSB0aGlzLmRyb3Bkb3duQ29udGVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLnN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdpbnZpc2libGUnID8gJ3Zpc2libGUnIDogJ2ludmlzaWJsZScpO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkRWxlbWVudHMgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpc2FibGVkLm9wdGdyb3VwJyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzYWJsZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkaXNhYmxlZEVsZW1lbnRzW2ldLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldE9wdGlvbkhlaWdodCgpO1xuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbHRlciBpbnB1dCAoc2luZ2xlIHNlbGVjdCkuXG5cbiAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlckNsaWNrLmVtaXQobnVsbCk7XG4gIH1cblxuICBvblNpbmdsZUZpbHRlcklucHV0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlcklucHV0LmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJLZXlkb3duLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gT3B0aW9ucyBsaXN0LlxuXG4gIG9uT3B0aW9uc1doZWVsKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZU9wdGlvbnNXaGVlbChldmVudCk7XG4gIH1cblxuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25DbGlja2VkLmVtaXQob3B0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6YXRpb24uICoqL1xuXG4gIHByaXZhdGUgb3B0aW9uc1Jlc2V0KCkge1xuICAgIHRoaXMub3B0aW9uTGlzdC5maWx0ZXIoJycpO1xuICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKiBWaWV3LiAqKi9cblxuICBnZXRPcHRpb25TdHlsZShvcHRpb246IE9wdGlvbik6IGFueSB7XG4gICAgaWYgKG9wdGlvbi5oaWdobGlnaHRlZCB8fCBvcHRpb24uaG92ZXJlZCkge1xuICAgICAgY29uc3Qgb3B0aW9uU3R5bGU6IGFueSA9IHt9O1xuICAgICAgb3B0aW9uU3R5bGVbJ2hlaWdodC5weCddID0gdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0Q29sb3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvblN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodENvbG9yO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpZ2hsaWdodFRleHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uU3R5bGVbJ2NvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodFRleHRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25TdHlsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0QWxsQ2xpY2soKSB7XG4gICAgdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9ICF0aGlzLnNlbGVjdEFsbFNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQodGhpcy5zZWxlY3RBbGxTZWxlY3RlZCk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RBbGxTdGF0ZSgpIHtcbiAgICBjb25zdCBhcmVBbGxTZWxlY3RlZCA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZFxuICAgICAgLmZpbHRlcigob3B0aW9uOiBPcHRpb24pID0+ICFvcHRpb24uZGlzYWJsZWQpXG4gICAgICAuZXZlcnkoKG9wdGlvbjogT3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcblxuICAgIGFyZUFsbFNlbGVjdGVkID8gdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9IHRydWUgOiB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBjbGVhckZpbHRlcklucHV0KCkge1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIG9uQW5pbWF0aW9uRG9uZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkRvbmUuZW1pdCgpO1xuICB9XG5cbiAgb25BbmltYXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXJ0LmVtaXQoKTtcbiAgfVxuXG4gIG1vdmVIaWdobGlnaHRlZEludG9WaWV3KCkge1xuICAgIGxldCBsaXN0SGVpZ2h0OiBudW1iZXI7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICBsaXN0SGVpZ2h0ID0gdGhpcy5tdWx0aXBsZSAmJiB0aGlzLmVuYWJsZVNlbGVjdEFsbCA/IGxpc3Qub2Zmc2V0SGVpZ2h0IC0gdGhpcy5vcHRpb25IZWlnaHQgOiBsaXN0Lm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMub3B0aW9uTGlzdC5nZXRIaWdobGlnaHRlZEluZGV4KCk7XG5cbiAgICBpZiAoaXRlbUluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2l0ZW1JbmRleF07XG4gICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gaXRlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIGNvbnN0IGl0ZW1Ub3AgPSBpdGVtSW5kZXggKiBpdGVtSGVpZ2h0O1xuICAgICAgY29uc3QgaXRlbUJvdHRvbSA9IGl0ZW1Ub3AgKyBpdGVtSGVpZ2h0O1xuXG4gICAgICBjb25zdCB2aWV3VG9wID0gbGlzdC5zY3JvbGxUb3A7XG4gICAgICBjb25zdCB2aWV3Qm90dG9tID0gdmlld1RvcCArIGxpc3RIZWlnaHQ7XG5cbiAgICAgIGlmIChpdGVtQm90dG9tID4gdmlld0JvdHRvbSkge1xuICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW1Cb3R0b20gLSBsaXN0SGVpZ2h0O1xuICAgICAgfSBlbHNlIGlmIChpdGVtVG9wIDwgdmlld1RvcCkge1xuICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW1Ub3A7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU9wdGlvbnNXaGVlbChlOiBhbnkpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgYXRUb3AgPSBkaXYuc2Nyb2xsVG9wID09PSAwO1xuICAgIGNvbnN0IGF0Qm90dG9tID0gZGl2Lm9mZnNldEhlaWdodCArIGRpdi5zY3JvbGxUb3AgPT09IGRpdi5zY3JvbGxIZWlnaHQ7XG5cbiAgICBpZiAoYXRUb3AgJiYgZS5kZWx0YVkgPCAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChhdEJvdHRvbSAmJiBlLmRlbHRhWSA+IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=