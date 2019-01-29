/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    }
    /**
     * Event handlers. *
     * @return {?}
     */
    // Angular life cycle hooks.
    onkeyup() {
        this.hasOptionsItems = this.optionList.filtered.length > 0;
        this.updateSelectAllState();
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
        this.optionList.options.filter(el => () => {
            if (el.icon) {
                this._renderer.setStyle(this.optionsList.nativeElement, 'height', (this.dropdownHeight + 8) + 'px');
            }
            else {
                this._renderer.setStyle(this.optionsList.nativeElement, 'height', this.dropdownHeight + 'px');
            }
        });
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
        optionsItems.forEach((el) => {
            if (this.optionHeight && el.firstElementChild.tagName !== 'IMG') {
                this._renderer.setStyle(el.firstElementChild, 'height', `${this.optionHeight}px`);
            }
            if (el.firstElementChild.tagName !== 'IMG') {
                this._renderer.setStyle(el.firstElementChild, 'line-height', `${this.optionHeight}px`);
            }
        });
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
        setTimeout(() => {
            container.add('fadeInSelect');
        }, 200);
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
            setTimeout(() => {
                this.filterInput.nativeElement.focus();
            }, 0);
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
        const areAllSelected = this.optionList.filtered.every((option) => {
            return option.selected ? true : false;
        });
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
     * @param {?} event
     * @return {?}
     */
    onAnimationDone(event) {
        this.animationDone.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onAnimationStart(event) {
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
SelectDropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixFQUNuRyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRS9FLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFjekMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBNkNsQyxZQUNTLFdBQXVCLEVBQ3ZCLFNBQW9CLEVBQ25CLEtBQXdCO1FBRnpCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFuQ3pCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBS25CLG1CQUFjLEdBQUcsWUFBWSxDQUFDO1FBQzdCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzdDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDL0Msd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM5QyxrQkFBYSxHQUFHLElBQUks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SztnQ0FDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO29CQUNMLE1BQU07NEJBQ04sTUFBTTtnQ0FDTixNQUFNO2dDQUNOLE1BQU07a0NBQ04sTUFBTTs0QkFDTixNQUFNOzZCQUNOLE1BQU07d0JBQ04sTUFBTTswQkFFTixTQUFTLFNBQUMsYUFBYTswQkFDdkIsU0FBUyxTQUFDLGFBQWE7OEJBQ3ZCLFNBQVMsU0FBQyxpQkFBaUI7c0JBd0IzQixZQUFZLFNBQUMsT0FBTzs7OztJQXBEckIsZ0RBQWdDOztJQUNoQyxpREFBZ0M7O0lBQ2hDLHFEQUFvQzs7SUFDcEMsdUNBQXNCOztJQUN0QiwyQ0FBMkI7O0lBQzNCLDhDQUE2Qjs7SUFDN0IsNkNBQWdDOztJQUNoQyxzQ0FBcUI7O0lBQ3JCLHdDQUF1Qjs7SUFDdkIsOENBQTZCOztJQUM3Qiw4Q0FBMEI7O0lBQzFCLGlEQUE0Qjs7SUFDNUIsaURBQWdDOztJQUNoQyxvREFBbUM7O0lBQ25DLCtDQUE4Qjs7SUFDOUIsa0RBQWtDOztJQUNsQyxpREFBdUM7O0lBQ3ZDLHdDQUE4Qzs7SUFDOUMsZ0RBQXFEOztJQUNyRCxvREFBdUQ7O0lBQ3ZELG9EQUF5RDs7SUFDekQsc0RBQXdEOztJQUN4RCxnREFBa0Q7O0lBQ2xELGlEQUFtRDs7SUFDbkQsNENBQWtEOztJQUVsRCw4Q0FBMkM7O0lBQzNDLDhDQUEyQzs7SUFDM0Msa0RBQTBEOztJQUUxRCxnREFBdUI7O0lBQ3ZCLG9EQUE2Qjs7SUFHN0Isd0NBQW9COztJQUNwQiw4Q0FBcUI7O0lBQ3JCLDRDQUFvQjs7SUFFcEIsa0RBQThCOztJQUU5QixvREFBMEI7O0lBR3hCLDhDQUE4Qjs7SUFDOUIsNENBQTJCOzs7OztJQUMzQix3Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyLCBDaGFuZ2VEZXRlY3RvclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3RyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZX0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge09wdGlvbn0gZnJvbSAnLi9vcHRpb24nO1xuaW1wb3J0IHtPcHRpb25MaXN0fSBmcm9tICcuL29wdGlvbi1saXN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNlbGVjdC1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZHJvcGRvd25BbmltYXRpb24nLCBbXG4gICAgc3RhdGUoJ2ludmlzaWJsZScsIHN0eWxlKHtvcGFjaXR5OiAwLCBoZWlnaHQ6ICcwcHgnfSkpLFxuICAgIHN0YXRlKCd2aXNpYmxlJywgc3R5bGUoe29wYWNpdHk6IDEsIGhlaWdodDogJyonfSkpLFxuICAgIHRyYW5zaXRpb24oJ2ludmlzaWJsZSA9PiB2aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKSxcbiAgICB0cmFuc2l0aW9uKCd2aXNpYmxlID0+IGludmlzaWJsZScsIGFuaW1hdGUoJzMwMG1zIGVhc2UnKSlcbiAgXSldXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdERyb3Bkb3duQ29tcG9uZW50XG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkluaXQge1xuXG4gIEBJbnB1dCgpIGZpbHRlckVuYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhpZ2hsaWdodENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhpZ2hsaWdodFRleHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBsZWZ0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuO1xuICBASW5wdXQoKSBub3RGb3VuZE1zZzogc3RyaW5nO1xuICBASW5wdXQoKSBvcHRpb25MaXN0OiBPcHRpb25MaXN0O1xuICBASW5wdXQoKSB0b3A6IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3MgPSAnJztcbiAgQElucHV0KCkgdmlzaWJsZU9wdGlvbnMgPSA0O1xuICBASW5wdXQoKSBkcm9wZG93bkhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBkcm9wZG93bk1heEhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBvcHRpb25IZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgZW5hYmxlU2VsZWN0QWxsOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWxlY3RBbGxMYWJlbCA9ICdTZWxlY3QgYWxsJztcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgb3B0aW9uQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8T3B0aW9uPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVyQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPG51bGw+KCk7XG4gIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVyS2V5ZG93biA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uRG9uZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgYW5pbWF0aW9uU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdEFsbCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcpIGZpbHRlcklucHV0OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ29wdGlvbnNMaXN0Jykgb3B0aW9uc0xpc3Q6IGFueTtcbiAgQFZpZXdDaGlsZCgnZHJvcGRvd25Db250ZW50JykgZHJvcGRvd25Db250ZW50OiBFbGVtZW50UmVmO1xuXG4gIGRpc2FibGVkQ29sb3IgPSAnI2ZmZic7XG4gIGRpc2FibGVkVGV4dENvbG9yID0gJzllOWU5ZSc7XG5cbiAgLy8gVXNlZCBpbiBzbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gIHN0YXRlID0gJ2ludmlzaWJsZSc7XG4gIHN0YXJ0SGVpZ2h0OiBhbnkgPSAwO1xuICBlbmRIZWlnaHQ6IGFueSA9IDQ1O1xuXG4gIHB1YmxpYyBoYXNPcHRpb25zSXRlbXMgPSB0cnVlO1xuXG4gIHNlbGVjdEFsbFNlbGVjdGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgLyoqIEV2ZW50IGhhbmRsZXJzLiAqKi9cblxuICAvLyBBbmd1bGFyIGxpZmUgY3ljbGUgaG9va3MuXG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnKSBvbmtleXVwKCkge1xuICAgIHRoaXMuaGFzT3B0aW9uc0l0ZW1zID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmxlbmd0aCA+IDA7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RBbGxTdGF0ZSgpO1xuICAgIHRoaXMuc2V0T3B0aW9uSGVpZ2h0KCk7XG4gIH1cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgICB0aGlzLm9wdGlvbnNSZXNldCgpO1xuICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB0aGlzLnNldFZpc2libGVPcHRpb25zTnVtYmVyKCk7XG4gIH1cblxuICBzZXREcm9wZG93bkhlaWdodCgpIHtcbiAgICB0aGlzLm9wdGlvbkxpc3Qub3B0aW9ucy5maWx0ZXIoZWwgPT4gKCkgPT4ge1xuICAgICAgaWYgKGVsLmljb24pIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgKHRoaXMuZHJvcGRvd25IZWlnaHQgKyA4KSArICdweCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdGhpcy5kcm9wZG93bkhlaWdodCArICdweCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VmlzaWJsZU9wdGlvbnNOdW1iZXIoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LCAnbWF4LWhlaWdodCcsIHRoaXMuZHJvcGRvd25NYXhIZWlnaHQgKyAncHgnKTtcbiAgfVxuXG4gIHNldE9wdGlvbkhlaWdodCgpIHtcbiAgICBjb25zdCBvcHRpb25zSXRlbXMgPSBBcnJheS5mcm9tKHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbik7XG4gICAgb3B0aW9uc0l0ZW1zLmZvckVhY2goKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRpb25IZWlnaHQgJiYgZWwuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0lNRycpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwuZmlyc3RFbGVtZW50Q2hpbGQsICdoZWlnaHQnLCBgJHt0aGlzLm9wdGlvbkhlaWdodH1weGApO1xuICAgICAgfVxuICAgICAgaWYgKGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLmZpcnN0RWxlbWVudENoaWxkLCAnbGluZS1oZWlnaHQnLCBgJHt0aGlzLm9wdGlvbkhlaWdodH1weGApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25MaXN0JykpIHtcbiAgICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Ryb3Bkb3duSGVpZ2h0JykpIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZCgnZmFkZUluU2VsZWN0Jyk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBTbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gICAgdGhpcy5lbmRIZWlnaHQgPSB0aGlzLmRyb3Bkb3duQ29udGVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLnN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdpbnZpc2libGUnID8gJ3Zpc2libGUnIDogJ2ludmlzaWJsZScpO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkRWxlbWVudHMgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpc2FibGVkLm9wdGdyb3VwJyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzYWJsZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkaXNhYmxlZEVsZW1lbnRzW2ldLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldE9wdGlvbkhlaWdodCgpO1xuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbHRlciBpbnB1dCAoc2luZ2xlIHNlbGVjdCkuXG5cbiAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlckNsaWNrLmVtaXQobnVsbCk7XG4gIH1cblxuICBvblNpbmdsZUZpbHRlcklucHV0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlcklucHV0LmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJLZXlkb3duLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gT3B0aW9ucyBsaXN0LlxuXG4gIG9uT3B0aW9uc1doZWVsKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZU9wdGlvbnNXaGVlbChldmVudCk7XG4gIH1cblxuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25DbGlja2VkLmVtaXQob3B0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6YXRpb24uICoqL1xuXG4gIHByaXZhdGUgb3B0aW9uc1Jlc2V0KCkge1xuICAgIHRoaXMub3B0aW9uTGlzdC5maWx0ZXIoJycpO1xuICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKiBWaWV3LiAqKi9cblxuICBnZXRPcHRpb25TdHlsZShvcHRpb246IE9wdGlvbik6IGFueSB7XG4gICAgaWYgKG9wdGlvbi5oaWdobGlnaHRlZCB8fCBvcHRpb24uaG92ZXJlZCkge1xuICAgICAgY29uc3Qgb3B0aW9uU3R5bGU6IGFueSA9IHt9O1xuICAgICAgb3B0aW9uU3R5bGVbJ2hlaWdodC5weCddID0gdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0Q29sb3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvblN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodENvbG9yO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpZ2hsaWdodFRleHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uU3R5bGVbJ2NvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodFRleHRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25TdHlsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0QWxsQ2xpY2soKSB7XG4gICAgdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9ICF0aGlzLnNlbGVjdEFsbFNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQodGhpcy5zZWxlY3RBbGxTZWxlY3RlZCk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RBbGxTdGF0ZSgpIHtcbiAgICBjb25zdCBhcmVBbGxTZWxlY3RlZCA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZC5ldmVyeSgob3B0aW9uOiBPcHRpb24pID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgfSk7XG5cbiAgICBhcmVBbGxTZWxlY3RlZCA/IHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSB0cnVlIDogdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXJJbnB1dCgpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBvbkFuaW1hdGlvbkRvbmUoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuYW5pbWF0aW9uRG9uZS5lbWl0KCk7XG4gIH1cblxuICBvbkFuaW1hdGlvblN0YXJ0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXJ0LmVtaXQoKTtcbiAgfVxuXG4gIG1vdmVIaWdobGlnaHRlZEludG9WaWV3KCkge1xuICAgIGxldCBsaXN0SGVpZ2h0OiBudW1iZXI7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICBsaXN0SGVpZ2h0ID0gdGhpcy5tdWx0aXBsZSAmJiB0aGlzLmVuYWJsZVNlbGVjdEFsbCA/IGxpc3Qub2Zmc2V0SGVpZ2h0IC0gdGhpcy5vcHRpb25IZWlnaHQgOiBsaXN0Lm9mZnNldEhlaWdodDtcblxuICAgIGNvbnN0IGl0ZW1JbmRleCA9IHRoaXMub3B0aW9uTGlzdC5nZXRIaWdobGlnaHRlZEluZGV4KCk7XG5cbiAgICBpZiAoaXRlbUluZGV4ID4gLTEpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBsaXN0LmNoaWxkcmVuWzBdLmNoaWxkcmVuW2l0ZW1JbmRleF07XG4gICAgICBjb25zdCBpdGVtSGVpZ2h0ID0gaXRlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgIGNvbnN0IGl0ZW1Ub3AgPSBpdGVtSW5kZXggKiBpdGVtSGVpZ2h0O1xuICAgICAgY29uc3QgaXRlbUJvdHRvbSA9IGl0ZW1Ub3AgKyBpdGVtSGVpZ2h0O1xuXG4gICAgICBjb25zdCB2aWV3VG9wID0gbGlzdC5zY3JvbGxUb3A7XG4gICAgICBjb25zdCB2aWV3Qm90dG9tID0gdmlld1RvcCArIGxpc3RIZWlnaHQ7XG5cbiAgICAgIGlmIChpdGVtQm90dG9tID4gdmlld0JvdHRvbSkge1xuICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW1Cb3R0b20gLSBsaXN0SGVpZ2h0O1xuICAgICAgfSBlbHNlIGlmIChpdGVtVG9wIDwgdmlld1RvcCkge1xuICAgICAgICBsaXN0LnNjcm9sbFRvcCA9IGl0ZW1Ub3A7XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZU9wdGlvbnNXaGVlbChlOiBhbnkpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgYXRUb3AgPSBkaXYuc2Nyb2xsVG9wID09PSAwO1xuICAgIGNvbnN0IGF0Qm90dG9tID0gZGl2Lm9mZnNldEhlaWdodCArIGRpdi5zY3JvbGxUb3AgPT09IGRpdi5zY3JvbGxIZWlnaHQ7XG5cbiAgICBpZiAoYXRUb3AgJiYgZS5kZWx0YVkgPCAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChhdEJvdHRvbSAmJiBlLmRlbHRhWSA+IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=