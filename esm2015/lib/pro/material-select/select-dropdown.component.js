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
            if (this.optionHeight && el.firstElementChild.tagName !== 'IMG') {
                this._renderer.setStyle(el.firstElementChild, 'height', `${this.optionHeight}px`);
            }
            if (el.firstElementChild.tagName !== 'IMG') {
                this._renderer.setStyle(el.firstElementChild, 'line-height', `${this.optionHeight}px`);
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
        const areAllSelected = this.optionList.filtered.every((/**
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
                template: "<div (click)=\"$event.stopPropagation()\" class=\"dropdown-content\" #dropdownContent [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\"\n[@dropdownAnimation]=\"{value: state, params: {startHeight: startHeight, endHeight: endHeight}}\" (@dropdownAnimation.done)=\"onAnimationDone()\" (@dropdownAnimation.start)=\"onAnimationStart()\">\n  <div class=\"filter md-form px-2\" *ngIf=\"filterEnabled\">\n    <input\n    type=\"text\"\n    class=\"search form-control w-100 d-block\"\n    #filterInput\n    autocomplete=\"on\"\n    [placeholder]=\"placeholder\"\n    (input)=\"onSingleFilterInput($event)\"\n    (keydown)=\"onSingleFilterKeydown($event)\">\n  </div>\n\n  <div class=\"options\" #optionsList>\n    <ul class=\"select-dropdown\" [ngClass]=\"{'multiple-select-dropdown': multiple}\"\n    (wheel)=\"onOptionsWheel($event)\">\n      <li [ngStyle]=\"{ 'height.px': optionHeight }\" *ngIf=\"multiple && enableSelectAll && this.hasOptionsItems\" (click)=\"onSelectAllClick()\">\n        <span class=\"filtrable\" *ngIf=\"multiple\">\n          <input type=\"checkbox\" [checked]=\"selectAllSelected\" class=\"form-check-input {{customClass}}\">\n          <label></label>\n          {{selectAllLabel}}\n        </span>\n      </li>\n      <li *ngFor=\"let option of optionList.filtered\"\n        [ngClass]=\"{'active': option.highlighted, 'selected': option.selected, 'disabled': option.disabled, 'optgroup': option.group, 'd-flex justify-content-between flex-row-reverse align-items-center': option.icon}\"\n        [ngStyle]=\"{'height': optionHeight, 'background-color': getOptionStyle(option)['background-color'], 'color': getOptionStyle(option)['color']}\"\n        (click)=\"onOptionClick(option)\"\n        (mouseover)=\"option.hovered = true\"\n        (mouseleave)=\"option.hovered = false\">\n        <img class=\"rounded-circle\" [src]=\"option.icon\" *ngIf=\"option.icon !== ''\">\n        <span class=\"deselect-option\" *ngIf=\"!multiple\">{{option.label}}</span>\n        <span class=\"deselect-option\" *ngIf=\"multiple\">\n          <input type=\"checkbox\" [checked]=\"option.selected\" class=\"form-check-input {{customClass}}\" [disabled]=\"option.disabled\">\n          <label></label>\n          {{option.label}}\n        </span>\n      </li>\n      <li *ngIf=\"!this.hasOptionsItems\" class=\"message disabled\">\n        <span>{{notFoundMsg}}</span>\n      </li>\n    </ul>\n  </div>\n</div>\n",
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
    onkeyup: [{ type: HostListener, args: ['keyup',] }],
    onkeydown: [{ type: HostListener, args: ['input',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLHVCQUF1QixFQUNuRyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRS9FLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFjekMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBNkNsQyxZQUNTLFdBQXVCLEVBQ3ZCLFNBQW9CLEVBQ25CLEtBQXdCO1FBRnpCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFuQ3pCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBS25CLG1CQUFjLEdBQUcsWUFBWSxDQUFDO1FBQzdCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMzQyxzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzdDLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDL0Msd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM5QyxrQkFBYSxHQUFHLElBQUks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OzZCQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLO29CQUNMLE1BQU07NEJBQ04sTUFBTTtnQ0FDTixNQUFNO2dDQUNOLE1BQU07a0NBQ04sTUFBTTs0QkFDTixNQUFNOzZCQUNOLE1BQU07d0JBQ04sTUFBTTswQkFFTixTQUFTLFNBQUMsYUFBYTswQkFDdkIsU0FBUyxTQUFDLGFBQWE7OEJBQ3ZCLFNBQVMsU0FBQyxpQkFBaUI7c0JBd0IzQixZQUFZLFNBQUMsT0FBTzt3QkFLcEIsWUFBWSxTQUFDLE9BQU87Ozs7SUF6RHJCLGdEQUFnQzs7SUFDaEMsaURBQWdDOztJQUNoQyxxREFBb0M7O0lBQ3BDLHVDQUFzQjs7SUFDdEIsMkNBQTJCOztJQUMzQiw4Q0FBNkI7O0lBQzdCLDZDQUFnQzs7SUFDaEMsc0NBQXFCOztJQUNyQix3Q0FBdUI7O0lBQ3ZCLDhDQUE2Qjs7SUFDN0IsOENBQTBCOztJQUMxQixpREFBNEI7O0lBQzVCLGlEQUFnQzs7SUFDaEMsb0RBQW1DOztJQUNuQywrQ0FBOEI7O0lBQzlCLGtEQUFrQzs7SUFDbEMsaURBQXVDOztJQUN2Qyx3Q0FBOEM7O0lBQzlDLGdEQUFxRDs7SUFDckQsb0RBQXVEOztJQUN2RCxvREFBeUQ7O0lBQ3pELHNEQUF3RDs7SUFDeEQsZ0RBQWtEOztJQUNsRCxpREFBbUQ7O0lBQ25ELDRDQUFrRDs7SUFFbEQsOENBQTJDOztJQUMzQyw4Q0FBMkM7O0lBQzNDLGtEQUEwRDs7SUFFMUQsZ0RBQXVCOztJQUN2QixvREFBNkI7O0lBRzdCLHdDQUFvQjs7SUFDcEIsOENBQXFCOztJQUNyQiw0Q0FBb0I7O0lBRXBCLGtEQUE4Qjs7SUFFOUIsb0RBQTBCOztJQUd4Qiw4Q0FBOEI7O0lBQzlCLDRDQUEyQjs7Ozs7SUFDM0Isd0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIGFuaW1hdGV9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHtPcHRpb259IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7T3B0aW9uTGlzdH0gZnJvbSAnLi9vcHRpb24tbGlzdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zZWxlY3QtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbiAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2Ryb3Bkb3duQW5pbWF0aW9uJywgW1xuICAgIHN0YXRlKCdpbnZpc2libGUnLCBzdHlsZSh7b3BhY2l0eTogMCwgaGVpZ2h0OiAnMHB4J30pKSxcbiAgICBzdGF0ZSgndmlzaWJsZScsIHN0eWxlKHtvcGFjaXR5OiAxLCBoZWlnaHQ6ICcqJ30pKSxcbiAgICB0cmFuc2l0aW9uKCdpbnZpc2libGUgPT4gdmlzaWJsZScsIGFuaW1hdGUoJzMwMG1zIGVhc2UnKSksXG4gICAgdHJhbnNpdGlvbigndmlzaWJsZSA9PiBpbnZpc2libGUnLCBhbmltYXRlKCczMDBtcyBlYXNlJykpXG4gIF0pXVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REcm9wZG93bkNvbXBvbmVudFxuICBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuICBASW5wdXQoKSBmaWx0ZXJFbmFibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaWdobGlnaHRUZXh0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbGVmdDogbnVtYmVyO1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbm90Rm91bmRNc2c6IHN0cmluZztcbiAgQElucHV0KCkgb3B0aW9uTGlzdDogT3B0aW9uTGlzdDtcbiAgQElucHV0KCkgdG9wOiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIHZpc2libGVPcHRpb25zID0gNDtcbiAgQElucHV0KCkgZHJvcGRvd25IZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgZHJvcGRvd25NYXhIZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgb3B0aW9uSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IGFsbCc7XG4gIEBPdXRwdXQoKSBjbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIG9wdGlvbkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPE9wdGlvbj4oKTtcbiAgQE91dHB1dCgpIHNpbmdsZUZpbHRlckNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxudWxsPigpO1xuICBAT3V0cHV0KCkgc2luZ2xlRmlsdGVySW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHNpbmdsZUZpbHRlcktleWRvd24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGFuaW1hdGlvbkRvbmUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGFuaW1hdGlvblN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBzZWxlY3RBbGwgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQFZpZXdDaGlsZCgnZmlsdGVySW5wdXQnKSBmaWx0ZXJJbnB1dDogYW55O1xuICBAVmlld0NoaWxkKCdvcHRpb25zTGlzdCcpIG9wdGlvbnNMaXN0OiBhbnk7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duQ29udGVudCcpIGRyb3Bkb3duQ29udGVudDogRWxlbWVudFJlZjtcblxuICBkaXNhYmxlZENvbG9yID0gJyNmZmYnO1xuICBkaXNhYmxlZFRleHRDb2xvciA9ICc5ZTllOWUnO1xuXG4gIC8vIFVzZWQgaW4gc2xpZGluZy1kb3duIGFuaW1hdGlvblxuICBzdGF0ZSA9ICdpbnZpc2libGUnO1xuICBzdGFydEhlaWdodDogYW55ID0gMDtcbiAgZW5kSGVpZ2h0OiBhbnkgPSA0NTtcblxuICBwdWJsaWMgaGFzT3B0aW9uc0l0ZW1zID0gdHJ1ZTtcblxuICBzZWxlY3RBbGxTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIC8qKiBFdmVudCBoYW5kbGVycy4gKiovXG5cbiAgLy8gQW5ndWxhciBsaWZlIGN5Y2xlIGhvb2tzLlxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJykgb25rZXl1cCgpIHtcbiAgICB0aGlzLmhhc09wdGlvbnNJdGVtcyA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZC5sZW5ndGggPiAwO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0Jykgb25rZXlkb3duKCkge1xuICAgIHRoaXMuc2V0T3B0aW9uSGVpZ2h0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gICAgdGhpcy5vcHRpb25zUmVzZXQoKTtcbiAgICB0aGlzLnNldERyb3Bkb3duSGVpZ2h0KCk7XG4gICAgdGhpcy5zZXRWaXNpYmxlT3B0aW9uc051bWJlcigpO1xuICB9XG5cbiAgc2V0RHJvcGRvd25IZWlnaHQoKSB7XG4gICAgdGhpcy5vcHRpb25MaXN0Lm9wdGlvbnMuZmlsdGVyKGVsID0+ICgpID0+IHtcbiAgICAgIGlmIChlbC5pY29uKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICh0aGlzLmRyb3Bkb3duSGVpZ2h0ICsgOCkgKyAncHgnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHRoaXMuZHJvcGRvd25IZWlnaHQgKyAncHgnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFZpc2libGVPcHRpb25zTnVtYmVyKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudCwgJ21heC1oZWlnaHQnLCB0aGlzLmRyb3Bkb3duTWF4SGVpZ2h0ICsgJ3B4Jyk7XG4gIH1cblxuICBzZXRPcHRpb25IZWlnaHQoKSB7XG4gICAgY29uc3Qgb3B0aW9uc0l0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW4pO1xuICAgIG9wdGlvbnNJdGVtcy5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICBpZiAodGhpcy5vcHRpb25IZWlnaHQgJiYgZWwuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0lNRycpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoZWwuZmlyc3RFbGVtZW50Q2hpbGQsICdoZWlnaHQnLCBgJHt0aGlzLm9wdGlvbkhlaWdodH1weGApO1xuICAgICAgfVxuICAgICAgaWYgKGVsLmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUgIT09ICdJTUcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLmZpcnN0RWxlbWVudENoaWxkLCAnbGluZS1oZWlnaHQnLCBgJHt0aGlzLm9wdGlvbkhlaWdodH1weGApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCdvcHRpb25MaXN0JykpIHtcbiAgICAgIHRoaXMub3B0aW9uc1Jlc2V0KCk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2Ryb3Bkb3duSGVpZ2h0JykpIHtcbiAgICAgIHRoaXMuc2V0RHJvcGRvd25IZWlnaHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZCgnZmFkZUluU2VsZWN0Jyk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAvLyBTbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gICAgdGhpcy5lbmRIZWlnaHQgPSB0aGlzLmRyb3Bkb3duQ29udGVudC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICB0aGlzLnN0YXRlID0gKHRoaXMuc3RhdGUgPT09ICdpbnZpc2libGUnID8gJ3Zpc2libGUnIDogJ2ludmlzaWJsZScpO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkRWxlbWVudHMgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpc2FibGVkLm9wdGdyb3VwJyk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzYWJsZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkaXNhYmxlZEVsZW1lbnRzW2ldLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldE9wdGlvbkhlaWdodCgpO1xuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbHRlciBpbnB1dCAoc2luZ2xlIHNlbGVjdCkuXG5cbiAgb25TaW5nbGVGaWx0ZXJDbGljaygpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlckNsaWNrLmVtaXQobnVsbCk7XG4gIH1cblxuICBvblNpbmdsZUZpbHRlcklucHV0KGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlcklucHV0LmVtaXQoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVyS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJLZXlkb3duLmVtaXQoZXZlbnQpO1xuICB9XG5cbiAgLy8gT3B0aW9ucyBsaXN0LlxuXG4gIG9uT3B0aW9uc1doZWVsKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLmhhbmRsZU9wdGlvbnNXaGVlbChldmVudCk7XG4gIH1cblxuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5vcHRpb25DbGlja2VkLmVtaXQob3B0aW9uKTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gIH1cblxuICAvKiogSW5pdGlhbGl6YXRpb24uICoqL1xuXG4gIHByaXZhdGUgb3B0aW9uc1Jlc2V0KCkge1xuICAgIHRoaXMub3B0aW9uTGlzdC5maWx0ZXIoJycpO1xuICAgIHRoaXMub3B0aW9uTGlzdC5oaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKiBWaWV3LiAqKi9cblxuICBnZXRPcHRpb25TdHlsZShvcHRpb246IE9wdGlvbik6IGFueSB7XG4gICAgaWYgKG9wdGlvbi5oaWdobGlnaHRlZCB8fCBvcHRpb24uaG92ZXJlZCkge1xuICAgICAgY29uc3Qgb3B0aW9uU3R5bGU6IGFueSA9IHt9O1xuICAgICAgb3B0aW9uU3R5bGVbJ2hlaWdodC5weCddID0gdGhpcy5vcHRpb25IZWlnaHQ7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0Q29sb3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvblN0eWxlWydiYWNrZ3JvdW5kLWNvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodENvbG9yO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmhpZ2hsaWdodFRleHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uU3R5bGVbJ2NvbG9yJ10gPSB0aGlzLmhpZ2hsaWdodFRleHRDb2xvcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcHRpb25TdHlsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0QWxsQ2xpY2soKSB7XG4gICAgdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9ICF0aGlzLnNlbGVjdEFsbFNlbGVjdGVkO1xuICAgIHRoaXMuc2VsZWN0QWxsLmVtaXQodGhpcy5zZWxlY3RBbGxTZWxlY3RlZCk7XG4gIH1cblxuICB1cGRhdGVTZWxlY3RBbGxTdGF0ZSgpIHtcbiAgICBjb25zdCBhcmVBbGxTZWxlY3RlZCA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZC5ldmVyeSgob3B0aW9uOiBPcHRpb24pID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQgPyB0cnVlIDogZmFsc2U7XG4gICAgfSk7XG5cbiAgICBhcmVBbGxTZWxlY3RlZCA/IHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSB0cnVlIDogdGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgY2xlYXJGaWx0ZXJJbnB1dCgpIHtcbiAgICBpZiAodGhpcy5maWx0ZXJFbmFibGVkKSB7XG4gICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBvbkFuaW1hdGlvbkRvbmUoKSB7XG4gICAgdGhpcy5hbmltYXRpb25Eb25lLmVtaXQoKTtcbiAgfVxuXG4gIG9uQW5pbWF0aW9uU3RhcnQoKSB7XG4gICAgdGhpcy5hbmltYXRpb25TdGFydC5lbWl0KCk7XG4gIH1cblxuICBtb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpIHtcbiAgICBsZXQgbGlzdEhlaWdodDogbnVtYmVyO1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGlzdEhlaWdodCA9IHRoaXMubXVsdGlwbGUgJiYgdGhpcy5lbmFibGVTZWxlY3RBbGwgPyBsaXN0Lm9mZnNldEhlaWdodCAtIHRoaXMub3B0aW9uSGVpZ2h0IDogbGlzdC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLm9wdGlvbkxpc3QuZ2V0SGlnaGxpZ2h0ZWRJbmRleCgpO1xuXG4gICAgaWYgKGl0ZW1JbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBpdGVtID0gbGlzdC5jaGlsZHJlblswXS5jaGlsZHJlbltpdGVtSW5kZXhdO1xuICAgICAgY29uc3QgaXRlbUhlaWdodCA9IGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBjb25zdCBpdGVtVG9wID0gaXRlbUluZGV4ICogaXRlbUhlaWdodDtcbiAgICAgIGNvbnN0IGl0ZW1Cb3R0b20gPSBpdGVtVG9wICsgaXRlbUhlaWdodDtcblxuICAgICAgY29uc3Qgdmlld1RvcCA9IGxpc3Quc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgdmlld0JvdHRvbSA9IHZpZXdUb3AgKyBsaXN0SGVpZ2h0O1xuXG4gICAgICBpZiAoaXRlbUJvdHRvbSA+IHZpZXdCb3R0b20pIHtcbiAgICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtQm90dG9tIC0gbGlzdEhlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbVRvcCA8IHZpZXdUb3ApIHtcbiAgICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtVG9wO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVPcHRpb25zV2hlZWwoZTogYW55KSB7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGF0VG9wID0gZGl2LnNjcm9sbFRvcCA9PT0gMDtcbiAgICBjb25zdCBhdEJvdHRvbSA9IGRpdi5vZmZzZXRIZWlnaHQgKyBkaXYuc2Nyb2xsVG9wID09PSBkaXYuc2Nyb2xsSGVpZ2h0O1xuXG4gICAgaWYgKGF0VG9wICYmIGUuZGVsdGFZIDwgMCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoYXRCb3R0b20gJiYgZS5kZWx0YVkgPiAwKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gIH1cblxufVxuIl19