/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    }
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
        this.optionList.options.filter(function (el) { return function () {
            if (el.icon) {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', (_this.dropdownHeight + 8) + 'px');
            }
            else {
                _this._renderer.setStyle(_this.optionsList.nativeElement, 'height', _this.dropdownHeight + 'px');
            }
        }; });
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
        optionsItems.forEach(function (el) {
            if (_this.optionHeight && el.firstElementChild.tagName !== 'IMG') {
                _this._renderer.setStyle(el.firstElementChild, 'height', _this.optionHeight + "px");
            }
            if (el.firstElementChild.tagName !== 'IMG') {
                _this._renderer.setStyle(el.firstElementChild, 'line-height', _this.optionHeight + "px");
            }
        });
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
        setTimeout(function () {
            container.add('fadeInSelect');
        }, 200);
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
            setTimeout(function () {
                _this.filterInput.nativeElement.focus();
            }, 0);
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
        var areAllSelected = this.optionList.filtered.every(function (option) {
            return option.selected ? true : false;
        });
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
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationDone = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.animationDone.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onAnimationStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
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
                    template: "<div (click)=\"$event.stopPropagation()\" class=\"dropdown-content\" #dropdownContent [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\"\n[@dropdownAnimation]=\"{value: state, params: {startHeight: startHeight, endHeight: endHeight}}\" (@dropdownAnimation.done)=\"onAnimationDone($event)\" (@dropdownAnimation.start)=\"onAnimationStart($event)\">\n  <div class=\"filter md-form px-2\" *ngIf=\"filterEnabled\">\n    <input\n    type=\"text\"\n    class=\"search form-control w-100 d-block\"\n    #filterInput\n    autocomplete=\"on\"\n    [placeholder]=\"placeholder\"\n    (input)=\"onSingleFilterInput($event)\"\n    (keydown)=\"onSingleFilterKeydown($event)\">\n  </div>\n\n  <div class=\"options\" #optionsList>\n    <ul class=\"select-dropdown\" [ngClass]=\"{'multiple-select-dropdown': multiple}\"\n    (wheel)=\"onOptionsWheel($event)\">\n      <li [ngStyle]=\"{ 'height.px': optionHeight }\" *ngIf=\"multiple && enableSelectAll && this.hasOptionsItems\" (click)=\"onSelectAllClick()\">\n        <span class=\"filtrable\" *ngIf=\"multiple\">\n          <input type=\"checkbox\" [checked]=\"selectAllSelected\" class=\"form-check-input {{customClass}}\">\n          <label></label>\n          {{selectAllLabel}}\n        </span>\n      </li>\n      <li *ngFor=\"let option of optionList.filtered\"\n        [ngClass]=\"{'active': option.highlighted, 'selected': option.selected, 'disabled': option.disabled, 'optgroup': option.group, 'd-flex justify-content-between flex-row-reverse align-items-center': option.icon}\"\n        [ngStyle]=\"{'height': optionHeight, 'background-color': getOptionStyle(option)['background-color'], 'color': getOptionStyle(option)['color']}\"\n        (click)=\"onOptionClick(option)\"\n        (mouseover)=\"option.hovered = true\"\n        (mouseleave)=\"option.hovered = false\">\n        <img class=\"rounded-circle\" [src]=\"option.icon\" *ngIf=\"option.icon !== ''\">\n        <span class=\"deselect-option\" *ngIf=\"!multiple\">{{option.label}}</span>\n        <span class=\"deselect-option\" *ngIf=\"multiple\">\n          <input type=\"checkbox\" [checked]=\"option.selected\" class=\"form-check-input {{customClass}}\" [disabled]=\"option.disabled\">\n          <label></label>\n          {{option.label}}\n        </span>\n      </li>\n      <li *ngIf=\"!this.hasOptionsItems\" class=\"message disabled\">\n        <span>{{notFoundMsg}}</span>\n      </li>\n    </ul>\n  </div>\n</div>\n",
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
        onkeyup: [{ type: HostListener, args: ['keyup',] }]
    };
    return SelectDropdownComponent;
}());
export { SelectDropdownComponent };
if (false) {
    /** @type {?} */
    SelectDropdownComponent.prototype.filterEnabled;
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
    SelectDropdownComponent.prototype._elementRef;
    /** @type {?} */
    SelectDropdownComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    SelectDropdownComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixFQUNuRyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRS9FLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFekM7SUF5REUsaUNBQ1MsV0FBdUIsRUFDdkIsU0FBb0IsRUFDbkIsS0FBd0I7UUFGekIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQW5DekIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFLbkIsbUJBQWMsR0FBRyxZQUFZLENBQUM7UUFDN0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzNDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFDN0Msc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMvQyx3QkFBbUIsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzlDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4Qyxt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QUF1Qjs7SUFDdkIsb0RBQTZCOztJQUc3Qix3Q0FBb0I7O0lBQ3BCLDhDQUFxQjs7SUFDckIsNENBQW9COztJQUVwQixrREFBOEI7O0lBRTlCLG9EQUEwQjs7SUFHeEIsOENBQThCOztJQUM5Qiw0Q0FBMkI7Ozs7O0lBQzNCLHdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdG9yUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7T3B0aW9ufSBmcm9tICcuL29wdGlvbic7XG5pbXBvcnQge09wdGlvbkxpc3R9IGZyb20gJy4vb3B0aW9uLWxpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc2VsZWN0LWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdkcm9wZG93bkFuaW1hdGlvbicsIFtcbiAgICBzdGF0ZSgnaW52aXNpYmxlJywgc3R5bGUoe29wYWNpdHk6IDAsIGhlaWdodDogJzBweCd9KSksXG4gICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7b3BhY2l0eTogMSwgaGVpZ2h0OiAnKid9KSksXG4gICAgdHJhbnNpdGlvbignaW52aXNpYmxlID0+IHZpc2libGUnLCBhbmltYXRlKCczMDBtcyBlYXNlJykpLFxuICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaW52aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKVxuICBdKV1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcGRvd25Db21wb25lbnRcbiAgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZmlsdGVyRW5hYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgaGlnaGxpZ2h0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxlZnQ6IG51bWJlcjtcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5vdEZvdW5kTXNnOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbkxpc3Q6IE9wdGlvbkxpc3Q7XG4gIEBJbnB1dCgpIHRvcDogbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBjdXN0b21DbGFzcyA9ICcnO1xuICBASW5wdXQoKSB2aXNpYmxlT3B0aW9ucyA9IDQ7XG4gIEBJbnB1dCgpIGRyb3Bkb3duSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyb3Bkb3duTWF4SGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG9wdGlvbkhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBlbmFibGVTZWxlY3RBbGw6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlbGVjdEFsbExhYmVsID0gJ1NlbGVjdCBhbGwnO1xuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvcHRpb25DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxPcHRpb24+KCk7XG4gIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgQE91dHB1dCgpIHNpbmdsZUZpbHRlcklucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJLZXlkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBhbmltYXRpb25Eb25lID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBhbmltYXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0QWxsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JykgZmlsdGVySW5wdXQ6IGFueTtcbiAgQFZpZXdDaGlsZCgnb3B0aW9uc0xpc3QnKSBvcHRpb25zTGlzdDogYW55O1xuICBAVmlld0NoaWxkKCdkcm9wZG93bkNvbnRlbnQnKSBkcm9wZG93bkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG5cbiAgZGlzYWJsZWRDb2xvciA9ICcjZmZmJztcbiAgZGlzYWJsZWRUZXh0Q29sb3IgPSAnOWU5ZTllJztcblxuICAvLyBVc2VkIGluIHNsaWRpbmctZG93biBhbmltYXRpb25cbiAgc3RhdGUgPSAnaW52aXNpYmxlJztcbiAgc3RhcnRIZWlnaHQ6IGFueSA9IDA7XG4gIGVuZEhlaWdodDogYW55ID0gNDU7XG5cbiAgcHVibGljIGhhc09wdGlvbnNJdGVtcyA9IHRydWU7XG5cbiAgc2VsZWN0QWxsU2VsZWN0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICAvKiogRXZlbnQgaGFuZGxlcnMuICoqL1xuXG4gIC8vIEFuZ3VsYXIgbGlmZSBjeWNsZSBob29rcy5cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcpIG9ua2V5dXAoKSB7XG4gICAgdGhpcy5oYXNPcHRpb25zSXRlbXMgPSB0aGlzLm9wdGlvbkxpc3QuZmlsdGVyZWQubGVuZ3RoID4gMDtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gICAgdGhpcy5zZXRPcHRpb25IZWlnaHQoKTtcbiAgfVxuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RBbGxTdGF0ZSgpO1xuICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgdGhpcy5zZXREcm9wZG93bkhlaWdodCgpO1xuICAgIHRoaXMuc2V0VmlzaWJsZU9wdGlvbnNOdW1iZXIoKTtcbiAgfVxuXG4gIHNldERyb3Bkb3duSGVpZ2h0KCkge1xuICAgIHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmZpbHRlcihlbCA9PiAoKSA9PiB7XG4gICAgICBpZiAoZWwuaWNvbikge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAodGhpcy5kcm9wZG93bkhlaWdodCArIDgpICsgJ3B4Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmRyb3Bkb3duSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRWaXNpYmxlT3B0aW9uc051bWJlcigpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQsICdtYXgtaGVpZ2h0JywgdGhpcy5kcm9wZG93bk1heEhlaWdodCArICdweCcpO1xuICB9XG5cbiAgc2V0T3B0aW9uSGVpZ2h0KCkge1xuICAgIGNvbnN0IG9wdGlvbnNJdGVtcyA9IEFycmF5LmZyb20odGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuKTtcbiAgICBvcHRpb25zSXRlbXMuZm9yRWFjaCgoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbkhlaWdodCAmJiBlbC5maXJzdEVsZW1lbnRDaGlsZC50YWdOYW1lICE9PSAnSU1HJykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShlbC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hlaWdodCcsIGAke3RoaXMub3B0aW9uSGVpZ2h0fXB4YCk7XG4gICAgICB9XG4gICAgICBpZiAoZWwuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0lNRycpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwuZmlyc3RFbGVtZW50Q2hpbGQsICdsaW5lLWhlaWdodCcsIGAke3RoaXMub3B0aW9uSGVpZ2h0fXB4YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbkxpc3QnKSkge1xuICAgICAgdGhpcy5vcHRpb25zUmVzZXQoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZHJvcGRvd25IZWlnaHQnKSkge1xuICAgICAgdGhpcy5zZXREcm9wZG93bkhlaWdodCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250YWluZXIuYWRkKCdmYWRlSW5TZWxlY3QnKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIFNsaWRpbmctZG93biBhbmltYXRpb25cbiAgICB0aGlzLmVuZEhlaWdodCA9IHRoaXMuZHJvcGRvd25Db250ZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMuc3RhdGUgPSAodGhpcy5zdGF0ZSA9PT0gJ2ludmlzaWJsZScgPyAndmlzaWJsZScgOiAnaW52aXNpYmxlJyk7XG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgY29uc3QgZGlzYWJsZWRFbGVtZW50cyA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGlzYWJsZWQub3B0Z3JvdXAnKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNhYmxlZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRpc2FibGVkRWxlbWVudHNbaV0uZmlyc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0T3B0aW9uSGVpZ2h0KCk7XG5cbiAgICB0aGlzLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsdGVyIGlucHV0IChzaW5nbGUgc2VsZWN0KS5cblxuICBvblNpbmdsZUZpbHRlckNsaWNrKCkge1xuICAgIHRoaXMuc2luZ2xlRmlsdGVyQ2xpY2suZW1pdChudWxsKTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVySW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2luZ2xlRmlsdGVySW5wdXQuZW1pdChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgb25TaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlcktleWRvd24uZW1pdChldmVudCk7XG4gIH1cblxuICAvLyBPcHRpb25zIGxpc3QuXG5cbiAgb25PcHRpb25zV2hlZWwoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaGFuZGxlT3B0aW9uc1doZWVsKGV2ZW50KTtcbiAgfVxuXG4gIG9uT3B0aW9uQ2xpY2sob3B0aW9uOiBPcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbkNsaWNrZWQuZW1pdChvcHRpb24pO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgfVxuXG4gIC8qKiBJbml0aWFsaXphdGlvbi4gKiovXG5cbiAgcHJpdmF0ZSBvcHRpb25zUmVzZXQoKSB7XG4gICAgdGhpcy5vcHRpb25MaXN0LmZpbHRlcignJyk7XG4gICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodCgpO1xuICB9XG5cbiAgLyoqIFZpZXcuICoqL1xuXG4gIGdldE9wdGlvblN0eWxlKG9wdGlvbjogT3B0aW9uKTogYW55IHtcbiAgICBpZiAob3B0aW9uLmhpZ2hsaWdodGVkIHx8IG9wdGlvbi5ob3ZlcmVkKSB7XG4gICAgICBjb25zdCBvcHRpb25TdHlsZTogYW55ID0ge307XG4gICAgICBvcHRpb25TdHlsZVsnaGVpZ2h0LnB4J10gPSB0aGlzLm9wdGlvbkhlaWdodDtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5oaWdobGlnaHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uU3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9IHRoaXMuaGlnaGxpZ2h0Q29sb3I7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0VGV4dENvbG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25TdHlsZVsnY29sb3InXSA9IHRoaXMuaGlnaGxpZ2h0VGV4dENvbG9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvblN0eWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RBbGxDbGljaygpIHtcbiAgICB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gIXRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQ7XG4gICAgdGhpcy5zZWxlY3RBbGwuZW1pdCh0aGlzLnNlbGVjdEFsbFNlbGVjdGVkKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdEFsbFN0YXRlKCkge1xuICAgIGNvbnN0IGFyZUFsbFNlbGVjdGVkID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmV2ZXJ5KChvcHRpb246IE9wdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIG9wdGlvbi5zZWxlY3RlZCA/IHRydWUgOiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGFyZUFsbFNlbGVjdGVkID8gdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9IHRydWUgOiB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBjbGVhckZpbHRlcklucHV0KCkge1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIG9uQW5pbWF0aW9uRG9uZShldmVudDogYW55KSB7XG4gICAgdGhpcy5hbmltYXRpb25Eb25lLmVtaXQoKTtcbiAgfVxuXG4gIG9uQW5pbWF0aW9uU3RhcnQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuYW5pbWF0aW9uU3RhcnQuZW1pdCgpO1xuICB9XG5cbiAgbW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoKSB7XG4gICAgbGV0IGxpc3RIZWlnaHQ6IG51bWJlcjtcbiAgICBjb25zdCBsaXN0ID0gdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50O1xuICAgIGxpc3RIZWlnaHQgPSB0aGlzLm11bHRpcGxlICYmIHRoaXMuZW5hYmxlU2VsZWN0QWxsID8gbGlzdC5vZmZzZXRIZWlnaHQgLSB0aGlzLm9wdGlvbkhlaWdodCA6IGxpc3Qub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5vcHRpb25MaXN0LmdldEhpZ2hsaWdodGVkSW5kZXgoKTtcblxuICAgIGlmIChpdGVtSW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgaXRlbSA9IGxpc3QuY2hpbGRyZW5bMF0uY2hpbGRyZW5baXRlbUluZGV4XTtcbiAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSBpdGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgY29uc3QgaXRlbVRvcCA9IGl0ZW1JbmRleCAqIGl0ZW1IZWlnaHQ7XG4gICAgICBjb25zdCBpdGVtQm90dG9tID0gaXRlbVRvcCArIGl0ZW1IZWlnaHQ7XG5cbiAgICAgIGNvbnN0IHZpZXdUb3AgPSBsaXN0LnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IHZpZXdCb3R0b20gPSB2aWV3VG9wICsgbGlzdEhlaWdodDtcblxuICAgICAgaWYgKGl0ZW1Cb3R0b20gPiB2aWV3Qm90dG9tKSB7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbUJvdHRvbSAtIGxpc3RIZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW1Ub3AgPCB2aWV3VG9wKSB7XG4gICAgICAgIGxpc3Quc2Nyb2xsVG9wID0gaXRlbVRvcDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlT3B0aW9uc1doZWVsKGU6IGFueSkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBhdFRvcCA9IGRpdi5zY3JvbGxUb3AgPT09IDA7XG4gICAgY29uc3QgYXRCb3R0b20gPSBkaXYub2Zmc2V0SGVpZ2h0ICsgZGl2LnNjcm9sbFRvcCA9PT0gZGl2LnNjcm9sbEhlaWdodDtcblxuICAgIGlmIChhdFRvcCAmJiBlLmRlbHRhWSA8IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKGF0Qm90dG9tICYmIGUuZGVsdGFZID4gMCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==