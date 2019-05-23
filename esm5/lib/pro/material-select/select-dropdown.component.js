/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, ElementRef, HostListener, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OptionList } from './option-list';
var SelectDropdownComponent = /** @class */ (function () {
    function SelectDropdownComponent(_elementRef, _renderer, cdRef) {
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
    SelectDropdownComponent.prototype.onWindowKeyUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var searchKey = event.key.toString().replace('"', '');
        /** @type {?} */
        var items = Array.from(this.optionList['_options'])
            .filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return !elem.group; }))
            .filter((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return !elem.disabled; }))
            .map((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.wrappedOption.label || el.wrappedOption.value; }));
        this.navigateThroughArray(searchKey, items);
        this.previousKey = searchKey;
    };
    /**
     * @param {?} key
     * @param {?} itemSource
     * @return {?}
     */
    SelectDropdownComponent.prototype.navigateThroughArray = /**
     * @param {?} key
     * @param {?} itemSource
     * @return {?}
     */
    function (key, itemSource) {
        var _this = this;
        /** @type {?} */
        var items = itemSource.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.toString().toLowerCase().charAt(0).includes(key.toString().toLowerCase()); }));
        if (this.searchIndex > items.length - 1 || key !== this.previousKey) {
            this.searchIndex = 0;
        }
        this.highlightedItem = this.optionList.filtered.find((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.wrappedOption.label === items[_this.searchIndex]; }));
        this.searchIndex++;
        if (this.highlightedItem) {
            this.optionList.highlightOption(this.highlightedItem);
        }
        this.moveHighlightedIntoView();
    };
    /** Event handlers. **/
    // Angular life cycle hooks.
    /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    SelectDropdownComponent.prototype.onkeyup = /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    function () {
        this.hasOptionsItems = this.optionList.filtered.length > 0;
        this.updateSelectAllState();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onkeydown = /**
     * @return {?}
     */
    function () {
        this.setOptionHeight();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateSelectAllState();
        this.optionsReset();
        this.setDropdownHeight();
        this.setVisibleOptionsNumber();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setDropdownHeight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.optionList.options.filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return (/**
         * @return {?}
         */
        function () {
            if (el.icon) {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', (_this.dropdownHeight + 8) + 'px');
            }
            else {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', _this.dropdownHeight + 'px');
            }
        }); }));
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setVisibleOptionsNumber = /**
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this.optionsList.nativeElement, 'max-height', this.dropdownMaxHeight + 'px');
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.setOptionHeight = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var optionsItems = Array.from(this.optionsList.nativeElement.firstElementChild.children);
        optionsItems.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            /** @type {?} */
            var isCustomElement = el.classList.contains('custom-select-content');
            if (el.firstElementChild) {
                if (_this.optionHeight && el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    _this._renderer.setStyle(el.firstElementChild, 'height', _this.optionHeight + "px");
                }
                if (el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    _this._renderer.setStyle(el.firstElementChild, 'line-height', _this.optionHeight + "px");
                }
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        if (changes.hasOwnProperty('dropdownHeight')) {
            this.setDropdownHeight();
        }
        /** @type {?} */
        var container = this._elementRef.nativeElement.classList;
        setTimeout((/**
         * @return {?}
         */
        function () {
            container.add('fadeInSelect');
        }), 200);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Sliding-down animation
        this.endHeight = this.dropdownContent.nativeElement.clientHeight;
        this.state = (this.state === 'invisible' ? 'visible' : 'invisible');
        this.cdRef.detectChanges();
        if (this.multiple) {
            /** @type {?} */
            var disabledElements = this._elementRef.nativeElement.querySelectorAll('.disabled.optgroup');
            for (var i = 0; i < disabledElements.length; i++) {
                this._renderer.setStyle(disabledElements[i].firstElementChild.lastElementChild, 'display', 'none');
            }
        }
        this.setOptionHeight();
        this.moveHighlightedIntoView();
        if (this.filterEnabled) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                _this.filterInput.nativeElement.focus();
            }), 0);
        }
    };
    // Filter input (single select).
    // Filter input (single select).
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = 
    // Filter input (single select).
    /**
     * @return {?}
     */
    function () {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.singleFilterKeydown.emit(event);
    };
    // Options list.
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = 
    // Options list.
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.optionClicked.emit(option);
        this.updateSelectAllState();
    };
    /** Initialization. **/
    /**
     * Initialization. *
     * @private
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = /**
     * Initialization. *
     * @private
     * @return {?}
     */
    function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /** View. **/
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (option.highlighted || option.hovered) {
            /** @type {?} */
            var optionStyle = {};
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
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSelectAllClick = /**
     * @return {?}
     */
    function () {
        this.selectAllSelected = !this.selectAllSelected;
        this.selectAll.emit(this.selectAllSelected);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.updateSelectAllState = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var areAllSelected = this.optionList.filtered
            .filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return !option.disabled; }))
            .every((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return option.selected ? true : false;
        }));
        areAllSelected ? this.selectAllSelected = true : this.selectAllSelected = false;
        this.cdRef.detectChanges();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.clearFilterInput = /**
     * @return {?}
     */
    function () {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationDone = /**
     * @return {?}
     */
    function () {
        this.animationDone.emit();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationStart = /**
     * @return {?}
     */
    function () {
        this.animationStart.emit();
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var listHeight;
        /** @type {?} */
        var list = this.optionsList.nativeElement;
        listHeight = this.multiple && this.enableSelectAll ? list.offsetHeight - this.optionHeight : list.offsetHeight;
        /** @type {?} */
        var itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            /** @type {?} */
            var item = list.children[0].children[itemIndex];
            /** @type {?} */
            var itemHeight = item.offsetHeight;
            /** @type {?} */
            var itemTop = itemIndex * itemHeight;
            /** @type {?} */
            var itemBottom = itemTop + itemHeight;
            /** @type {?} */
            var viewTop = list.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var div = this.optionsList.nativeElement;
        /** @type {?} */
        var atTop = div.scrollTop === 0;
        /** @type {?} */
        var atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
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
    SelectDropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
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
    return SelectDropdownComponent;
}());
export { SelectDropdownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBRXhCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFL0UsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6QztJQTBERSxpQ0FDUyxXQUF1QixFQUN2QixTQUFvQixFQUNuQixLQUF3QjtRQUZ6QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ25CLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBcEN6QixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUtuQixtQkFBYyxHQUFHLFlBQVksQ0FBQztRQUM3QixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNwQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDM0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUM3QyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQy9DLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDOUMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hD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aUI7O0lBUGYsOENBQThCOztJQUM5Qiw0Q0FBMkI7Ozs7O0lBQzNCLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBSZW5kZXJlcjIsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7T3B0aW9ufSBmcm9tICcuL29wdGlvbic7XG5pbXBvcnQge09wdGlvbkxpc3R9IGZyb20gJy4vb3B0aW9uLWxpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc2VsZWN0LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdkcm9wZG93bkFuaW1hdGlvbicsIFtcbiAgICBzdGF0ZSgnaW52aXNpYmxlJywgc3R5bGUoe29wYWNpdHk6IDAsIGhlaWdodDogJzBweCd9KSksXG4gICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7b3BhY2l0eTogMSwgaGVpZ2h0OiAnKid9KSksXG4gICAgdHJhbnNpdGlvbignaW52aXNpYmxlID0+IHZpc2libGUnLCBhbmltYXRlKCczMDBtcyBlYXNlJykpLFxuICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaW52aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKVxuICBdKV1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZmlsdGVyRW5hYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZmlsdGVyQXV0b2NvbXBsZXRlOiBib29sZWFuO1xuICBASW5wdXQoKSBoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaWdobGlnaHRUZXh0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbGVmdDogbnVtYmVyO1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbm90Rm91bmRNc2c6IHN0cmluZztcbiAgQElucHV0KCkgb3B0aW9uTGlzdDogT3B0aW9uTGlzdDtcbiAgQElucHV0KCkgdG9wOiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIHZpc2libGVPcHRpb25zID0gNDtcbiAgQElucHV0KCkgZHJvcGRvd25IZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgZHJvcGRvd25NYXhIZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgb3B0aW9uSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IGFsbCc7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG9wdGlvbkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE9wdGlvbj4oKTtcbiAgQE91dHB1dCgpIHNpbmdsZUZpbHRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVySW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHNpbmdsZUZpbHRlcktleWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGFuaW1hdGlvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGFuaW1hdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RBbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKSBmaWx0ZXJJbnB1dDogYW55O1xuICBAVmlld0NoaWxkKCdvcHRpb25zTGlzdCcpIG9wdGlvbnNMaXN0OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duQ29udGVudCcpIGRyb3Bkb3duQ29udGVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY3VzdG9tQ29udGVudCcpIGN1c3RvbUNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgZGlzYWJsZWRDb2xvciA9ICcjZmZmJztcbiAgZGlzYWJsZWRUZXh0Q29sb3IgPSAnOWU5ZTllJztcblxuICAvLyBVc2VkIGluIHNsaWRpbmctZG93biBhbmltYXRpb25cbiAgc3RhdGUgPSAnaW52aXNpYmxlJztcbiAgc3RhcnRIZWlnaHQ6IGFueSA9IDA7XG4gIGVuZEhlaWdodDogYW55ID0gNDU7XG5cbiAgcHVibGljIGhhc09wdGlvbnNJdGVtcyA9IHRydWU7XG5cbiAgc2VsZWN0QWxsU2VsZWN0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBoaWdobGlnaHRlZEl0ZW06IGFueTtcbiAgc2VhcmNoSW5kZXggPSAwO1xuICBwcmV2aW91c0tleSA9ICcnO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pIG9uV2luZG93S2V5VXAoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IHNlYXJjaEtleSA9IGV2ZW50LmtleS50b1N0cmluZygpLnJlcGxhY2UoJ1wiJywgJycpO1xuXG4gICAgY29uc3QgaXRlbXMgPVxuICAgICAgQXJyYXkuZnJvbSh0aGlzLm9wdGlvbkxpc3RbJ19vcHRpb25zJ10pXG4gICAgICAgIC5maWx0ZXIoKGVsZW06IGFueSkgPT4gIWVsZW0uZ3JvdXApXG4gICAgICAgIC5maWx0ZXIoKGVsZW06IGFueSkgPT4gIWVsZW0uZGlzYWJsZWQpXG4gICAgICAgIC5tYXAoKGVsOiBhbnkpID0+IGVsLndyYXBwZWRPcHRpb24ubGFiZWwgfHwgZWwud3JhcHBlZE9wdGlvbi52YWx1ZSk7XG5cbiAgICB0aGlzLm5hdmlnYXRlVGhyb3VnaEFycmF5KHNlYXJjaEtleSwgaXRlbXMpO1xuICAgIHRoaXMucHJldmlvdXNLZXkgPSBzZWFyY2hLZXk7XG4gIH1cblxuICBuYXZpZ2F0ZVRocm91Z2hBcnJheShrZXk6IHN0cmluZywgaXRlbVNvdXJjZTogYW55KSB7XG4gICAgY29uc3QgaXRlbXMgPSBpdGVtU291cmNlLmZpbHRlcigoZWw6IGFueSkgPT4gZWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKS5pbmNsdWRlcyhrZXkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgaWYgKHRoaXMuc2VhcmNoSW5kZXggPiBpdGVtcy5sZW5ndGggLSAxIHx8IGtleSAhPT0gdGhpcy5wcmV2aW91c0tleSkge1xuICAgICAgdGhpcy5zZWFyY2hJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmZpbmQoKGVsOiBhbnkpID0+IGVsLndyYXBwZWRPcHRpb24ubGFiZWwgPT09IGl0ZW1zW3RoaXMuc2VhcmNoSW5kZXhdKTtcblxuICAgIHRoaXMuc2VhcmNoSW5kZXgrKztcblxuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkSXRlbSkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodE9wdGlvbih0aGlzLmhpZ2hsaWdodGVkSXRlbSk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICB9XG5cbiAgLyoqIEV2ZW50IGhhbmRsZXJzLiAqKi9cblxuICAvLyBBbmd1bGFyIGxpZmUgY3ljbGUgaG9va3MuXG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnKSBvbmtleXVwKCkge1xuICAgIHRoaXMuaGFzT3B0aW9uc0l0ZW1zID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmxlbmd0aCA+IDA7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RBbGxTdGF0ZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBvbmtleWRvd24oKSB7XG4gICAgdGhpcy5zZXRPcHRpb25IZWlnaHQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgICB0aGlzLm9wdGlvbnNSZXNldCgpO1xuICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB0aGlzLnNldFZpc2libGVPcHRpb25zTnVtYmVyKCk7XG4gIH1cblxuICBzZXREcm9wZG93bkhlaWdodCgpIHtcbiAgICB0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5maWx0ZXIoZWwgPT4gKCkgPT4ge1xuICAgICAgaWYgKGVsLmljb24pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgKHRoaXMuZHJvcGRvd25IZWlnaHQgKyA4KSArICdweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdGhpcy5kcm9wZG93bkhlaWdodCArICdweCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmlzaWJsZU9wdGlvbnNOdW1iZXIoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LCAnbWF4LWhlaWdodCcsIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgKyAncHgnKTtcbiAgfVxuXG4gIHNldE9wdGlvbkhlaWdodCgpIHtcbiAgICBjb25zdCBvcHRpb25zSXRlbXMgPSBBcnJheS5mcm9tKHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbik7XG4gICAgb3B0aW9uc0l0ZW1zLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IGlzQ3VzdG9tRWxlbWVudCA9IGVsLmNsYXNzTGlzdC5jb250YWlucygnY3VzdG9tLXNlbGVjdC1jb250ZW50Jyk7XG4gICAgICBpZiAoZWwuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uSGVpZ2h0ICYmIGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnICYmICFpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hlaWdodCcsIGAke3RoaXMub3B0aW9uSGVpZ2h0fXB4YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnICYmICFpc0N1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbC5maXJzdEVsZW1lbnRDaGlsZCwgJ2xpbmUtaGVpZ2h0JywgYCR7dGhpcy5vcHRpb25IZWlnaHR9cHhgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25MaXN0JykpIHtcbiAgICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Ryb3Bkb3duSGVpZ2h0JykpIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZCgnZmFkZUluU2VsZWN0Jyk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBTbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gICAgdGhpcy5lbmRIZWlnaHQgPSB0aGlzLmRyb3Bkb3duQ29udGVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLnN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdpbnZpc2libGUnID8gJ3Zpc2libGUnIDogJ2ludmlzaWJsZScpO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkRWxlbWVudHMgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpc2FibGVkLm9wdGdyb3VwJyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzYWJsZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkaXNhYmxlZEVsZW1lbnRzW2ldLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldE9wdGlvbkhlaWdodCgpO1xuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbHRlciBpbnB1dCAoc2luZ2xlIHNlbGVjdCkuXG5cbiAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlckNsaWNrLmVtaXQobnVsbCk7XG4gIH1cblxuICBvblNpbmdsZUZpbHRlcklucHV0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlcklucHV0LmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJLZXlkb3duLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gT3B0aW9ucyBsaXN0LlxuXG4gIG9uT3B0aW9uc1doZWVsKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZU9wdGlvbnNXaGVlbChldmVudCk7XG4gIH1cblxuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25DbGlja2VkLmVtaXQob3B0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6YXRpb24uICoqL1xuXG4gIHByaXZhdGUgb3B0aW9uc1Jlc2V0KCkge1xuICAgIHRoaXMub3B0aW9uTGlzdC5maWx0ZXIoJycpO1xuICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKiBWaWV3LiAqKi9cblxuICBnZXRPcHRpb25TdHlsZShvcHRpb246IE9wdGlvbik6IGFueSB7XG4gICAgaWYgKG9wdGlvbi5oaWdobGlnaHRlZCB8fCBvcHRpb24uaG92ZXJlZCkge1xuICAgICAgY29uc3Qgb3B0aW9uU3R5bGU6IGFueSA9IHt9O1xuICAgICAgb3B0aW9uU3R5bGVbJ2hlaWdodC5weCddID0gdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0Q29sb3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvblN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodENvbG9yO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpZ2hsaWdodFRleHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uU3R5bGVbJ2NvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodFRleHRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25TdHlsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0QWxsQ2xpY2soKSB7XG4gICAgdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9ICF0aGlzLnNlbGVjdEFsbFNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQodGhpcy5zZWxlY3RBbGxTZWxlY3RlZCk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RBbGxTdGF0ZSgpIHtcbiAgICBjb25zdCBhcmVBbGxTZWxlY3RlZCA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZFxuICAgICAgLmZpbHRlcigob3B0aW9uOiBPcHRpb24pID0+ICFvcHRpb24uZGlzYWJsZWQpXG4gICAgICAuZXZlcnkoKG9wdGlvbjogT3B0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9KTtcblxuICAgIGFyZUFsbFNlbGVjdGVkID8gdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9IHRydWUgOiB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBjbGVhckZpbHRlcklucHV0KCkge1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIG9uQW5pbWF0aW9uRG9uZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkRvbmUuZW1pdCgpO1xuICB9XG5cbiAgb25BbmltYXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXJ0LmVtaXQoKTtcbiAgfVxuXG4gIG1vdmVIaWdobGlnaHRlZEludG9WaWV3KCkge1xuICAgIGxldCBsaXN0SGVpZ2h0OiBudW1iZXI7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICBsaXN0SGVpZ2h0ID0gdGhpcy5tdWx0aXBsZSAmJiB0aGlzLmVuYWJsZVNlbGVjdEFsbCA/IGxpc3Qub2Zmc2V0SGVpZ2h0IC0gdGhpcy5vcHRpb25IZWlnaHQgOiBsaXN0Lm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMub3B0aW9uTGlzdC5nZXRIaWdobGlnaHRlZEluZGV4KCk7XG5cbiAgICBpZiAoaXRlbUluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2l0ZW1JbmRleF07XG4gICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gaXRlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIGNvbnN0IGl0ZW1Ub3AgPSBpdGVtSW5kZXggKiBpdGVtSGVpZ2h0O1xuICAgICAgY29uc3QgaXRlbUJvdHRvbSA9IGl0ZW1Ub3AgKyBpdGVtSGVpZ2h0O1xuXG4gICAgICBjb25zdCB2aWV3VG9wID0gbGlzdC5zY3JvbGxUb3A7XG4gICAgICBjb25zdCB2aWV3Qm90dG9tID0gdmlld1RvcCArIGxpc3RIZWlnaHQ7XG5cbiAgICAgIGlmIChpdGVtQm90dG9tID4gdmlld0JvdHRvbSkge1xuICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW1Cb3R0b20gLSBsaXN0SGVpZ2h0O1xuICAgICAgfSBlbHNlIGlmIChpdGVtVG9wIDwgdmlld1RvcCkge1xuICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW1Ub3A7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU9wdGlvbnNXaGVlbChlOiBhbnkpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgYXRUb3AgPSBkaXYuc2Nyb2xsVG9wID09PSAwO1xuICAgIGNvbnN0IGF0Qm90dG9tID0gZGl2Lm9mZnNldEhlaWdodCArIGRpdi5zY3JvbGxUb3AgPT09IGRpdi5zY3JvbGxIZWlnaHQ7XG5cbiAgICBpZiAoYXRUb3AgJiYgZS5kZWx0YVkgPCAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChhdEJvdHRvbSAmJiBlLmRlbHRhWSA+IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=