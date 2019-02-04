/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
import { Component, Input, Output, EventEmitter, ViewChild, forwardRef, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MdbCompleterDirective } from '../directives/completer.directive';
import { CompleterService } from '../services/completer.service';
import { MAX_CHARS, MIN_SEARCH_LENGTH, PAUSE, TEXT_SEARCHING, TEXT_NO_RESULTS } from '../globals';
import { trigger, state, transition, animate, style } from '@angular/animations';
/** @type {?} */
const noop = () => { };
const ɵ0 = noop;
/** @type {?} */
const COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CompleterComponent),
    multi: true
};
export class CompleterComponent {
    /**
     * @param {?} completerService
     * @param {?} renderer
     * @param {?} el
     */
    constructor(completerService, renderer, el) {
        this.completerService = completerService;
        this.renderer = renderer;
        this.el = el;
        this.inputName = '';
        this.inputId = '';
        this.pause = PAUSE;
        this.minSearchLength = MIN_SEARCH_LENGTH;
        this.maxChars = MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = '';
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.autoHighlight = false;
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.blur = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.opened = new EventEmitter();
        this.keyup = new EventEmitter();
        this.keydown = new EventEmitter();
        this.focused = false;
        // Used in sliding-down animation
        this.state = 'unfocused';
        this.searchStr = '';
        this.control = new FormControl('');
        this.displaySearching = true;
        this.displayNoResults = true;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._textNoResults = TEXT_NO_RESULTS;
        this._textSearching = TEXT_SEARCHING;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    set datasource(source) {
        if (source) {
            if (source instanceof Array) {
                this.dataService = this.completerService.local(source);
            }
            else if (typeof (source) === 'string') {
                this.dataService = this.completerService.remote(source);
            }
            else {
                this.dataService = source;
            }
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set textNoResults(text) {
        if (this._textNoResults !== text) {
            this._textNoResults = text;
            this.displayNoResults = this._textNoResults && this._textNoResults !== 'false';
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set textSearching(text) {
        if (this._textSearching !== text) {
            this._textSearching = text;
            this.displaySearching = this._textSearching && this._textSearching !== 'false';
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onkeyup(event) {
        if (event.target.value !== '') {
            this.renderer.setStyle(event.target.nextElementSibling, 'visibility', 'visible');
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onclick(event) {
        if (event.target === this.labelEl.nativeElement) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
            this._focus = true;
        }
    }
    /**
     * @return {?}
     */
    onFocusIn() {
        if (this.labelEl) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
        }
    }
    /**
     * @return {?}
     */
    onFocusOut() {
        if (this.mdbCompleterInput.nativeElement.value === '' && this.labelEl && !this.placeholder) {
            this.renderer.removeClass(this.labelEl.nativeElement, 'active');
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    activateClearButton(event) {
        this.mdbCompleterInput.nativeElement.value = '';
        this.value = '';
        this.renderer.setStyle(event.target, 'visibility', 'hidden');
    }
    /**
     * @param {?} buttonState
     * @return {?}
     */
    triggerClearButtonAnimation(buttonState) {
        this.state = buttonState;
    }
    /**
     * @return {?}
     */
    get value() { return this.searchStr; }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this.searchStr) {
            this.searchStr = v;
        }
        // Propagate the change in any case
        this._onChangeCallback(v);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.labelEl) {
            this.renderer.removeClass(this.labelEl.nativeElement, 'active');
        }
        if (this.autofocus) {
            this._focus = true;
        }
        if (this.initialValue || this.searchStr || this.placeholder) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._focus) {
            this.mdbCompleterInput.nativeElement.focus();
            this._focus = false;
        }
    }
    /**
     * @return {?}
     */
    onTouched() {
        this._onTouchedCallback();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.searchStr = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.completer.selected.subscribe((item) => {
            this.selected.emit(item);
        });
        this.completer.highlighted.subscribe((item) => {
            this.highlighted.emit(item);
        });
        this.completer.opened.subscribe((isOpen) => {
            this._open = isOpen;
            this.opened.emit(isOpen);
        });
        if (this.initialValue) {
            this.searchStr = this.initialValue;
            this.onFocus();
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouched();
        if (this.searchStr === undefined || this.searchStr === '') {
            this.focused = false;
        }
        this.blur.emit(this);
    }
    /**
     * @return {?}
     */
    onFocus() {
        setTimeout(() => {
            this.focused = true;
        }, 0);
        this.focusEvent.emit({ focused: true, element: this.el });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChange(value) {
        this.value = value;
    }
    /**
     * @return {?}
     */
    open() {
        this.completer.open();
    }
    /**
     * @return {?}
     */
    close() {
        this.completer.clear();
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.mdbCompleterInput) {
            this.mdbCompleterInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    }
    /**
     * @return {?}
     */
    isOpen() {
        return this._open;
    }
}
CompleterComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-autocomplete, mdb-completer',
                template: "<div class=\"completer-holder md-form\" mdbCompleter>\n\n  <input #mdbCompleterInput [attr.id]=\"inputId.length > 0 ? inputId : null\" type=\"search\" class=\"completer-input form-control mdb-autocomplete\"\n    mdbCompleterInput [ngClass]=\"inputClass\" [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\"\n    [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\" [clearSelected]=\"clearSelected\" [clearUnselected]=\"clearUnselected\"\n    [overrideSuggested]=\"overrideSuggested\" [openOnFocus]=\"openOnFocus\" [fillHighlighted]=\"fillHighlighted\" (blur)=\"onBlur()\"\n    (focus)=\"onFocus()\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\"\n  />\n  <button type=\"button\"\n  [tabindex]=\"clearButtonTabIndex\"\n  class=\"mdb-autocomplete-clear\"\n  (click)=\"activateClearButton($event)\"\n  (focus)=\"triggerClearButtonAnimation('focused')\"\n  (blur)=\"triggerClearButtonAnimation('unfocused')\"\n  (mouseenter)=\"triggerClearButtonAnimation('focused')\"\n  (mouseleave)=\"triggerClearButtonAnimation('unfocused')\"\n  [@focusAnimation]=\"{value: state}\">\n    &#x2715;\n  </button>\n  <label #labelEl [ngClass]=\"{'active': focused || value || placeholder}\">{{ label }}</label>\n  <div class=\"completer-dropdown-holder\" *mdbList=\"dataService;\n      minSearchLength: minSearchLength;\n      pause: pause;\n      autoMatch: autoMatch;\n      initialValue: initialValue;\n      autoHighlight: autoHighlight;\n      let items = results;\n      let searchActive = searching;\n      let isInitialized = searchInitialized;\n      let isOpen = isOpen;\">\n    <div class=\"completer-dropdown\" mdbAutocompleteDropdown *ngIf=\"isInitialized && isOpen && ((items.length > 0 || displayNoResults) || (searchActive && displaySearching))\">\n      <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{_textSearching}}</div>\n      <div *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{_textNoResults}}</div>\n      <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\">\n        <div class=\"completer-row\" [mdbRow]=\"rowIndex\" [dataItem]=\"item\">\n          <div class=\"completer-item-text\" [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\">\n            <mdb-completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></mdb-completer-list-item>\n            <mdb-completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\"\n              [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\">\n            </mdb-completer-list-item>\n          </div>\n          <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\">\n            <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" />\n            <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                providers: [COMPLETER_CONTROL_VALUE_ACCESSOR],
                animations: [trigger('focusAnimation', [
                        state('unfocused', style({ transform: 'scale(1.0, 1.0)', })),
                        state('focused', style({ transform: 'scale(1.5, 1.5)' })),
                        transition('unfocused => focused', animate('200ms ease-in')),
                        transition('focused => unfocused', animate('200ms ease-in'))
                    ])]
            }] }
];
/** @nocollapse */
CompleterComponent.ctorParameters = () => [
    { type: CompleterService },
    { type: Renderer2 },
    { type: ElementRef }
];
CompleterComponent.propDecorators = {
    dataService: [{ type: Input }],
    inputName: [{ type: Input }],
    inputId: [{ type: Input }],
    pause: [{ type: Input }],
    minSearchLength: [{ type: Input }],
    maxChars: [{ type: Input }],
    overrideSuggested: [{ type: Input }],
    clearSelected: [{ type: Input }],
    clearUnselected: [{ type: Input }],
    fillHighlighted: [{ type: Input }],
    placeholder: [{ type: Input }],
    matchClass: [{ type: Input }],
    fieldTabindex: [{ type: Input }],
    clearButtonTabIndex: [{ type: Input }],
    autoMatch: [{ type: Input }],
    disableInput: [{ type: Input }],
    inputClass: [{ type: Input }],
    autofocus: [{ type: Input }],
    openOnFocus: [{ type: Input }],
    initialValue: [{ type: Input }],
    autoHighlight: [{ type: Input }],
    label: [{ type: Input }],
    datasource: [{ type: Input }],
    textNoResults: [{ type: Input }],
    textSearching: [{ type: Input }],
    selected: [{ type: Output }],
    highlighted: [{ type: Output }],
    blur: [{ type: Output }],
    focusEvent: [{ type: Output }],
    opened: [{ type: Output }],
    keyup: [{ type: Output }],
    keydown: [{ type: Output }],
    completer: [{ type: ViewChild, args: [MdbCompleterDirective,] }],
    mdbCompleterInput: [{ type: ViewChild, args: ['mdbCompleterInput',] }],
    labelEl: [{ type: ViewChild, args: ['labelEl',] }],
    onkeyup: [{ type: HostListener, args: ['keyup', ['$event'],] }],
    onclick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onFocusIn: [{ type: HostListener, args: ['focusin',] }],
    onFocusOut: [{ type: HostListener, args: ['focusout',] }]
};
if (false) {
    /** @type {?} */
    CompleterComponent.prototype.dataService;
    /** @type {?} */
    CompleterComponent.prototype.inputName;
    /** @type {?} */
    CompleterComponent.prototype.inputId;
    /** @type {?} */
    CompleterComponent.prototype.pause;
    /** @type {?} */
    CompleterComponent.prototype.minSearchLength;
    /** @type {?} */
    CompleterComponent.prototype.maxChars;
    /** @type {?} */
    CompleterComponent.prototype.overrideSuggested;
    /** @type {?} */
    CompleterComponent.prototype.clearSelected;
    /** @type {?} */
    CompleterComponent.prototype.clearUnselected;
    /** @type {?} */
    CompleterComponent.prototype.fillHighlighted;
    /** @type {?} */
    CompleterComponent.prototype.placeholder;
    /** @type {?} */
    CompleterComponent.prototype.matchClass;
    /** @type {?} */
    CompleterComponent.prototype.fieldTabindex;
    /** @type {?} */
    CompleterComponent.prototype.clearButtonTabIndex;
    /** @type {?} */
    CompleterComponent.prototype.autoMatch;
    /** @type {?} */
    CompleterComponent.prototype.disableInput;
    /** @type {?} */
    CompleterComponent.prototype.inputClass;
    /** @type {?} */
    CompleterComponent.prototype.autofocus;
    /** @type {?} */
    CompleterComponent.prototype.openOnFocus;
    /** @type {?} */
    CompleterComponent.prototype.initialValue;
    /** @type {?} */
    CompleterComponent.prototype.autoHighlight;
    /** @type {?} */
    CompleterComponent.prototype.label;
    /** @type {?} */
    CompleterComponent.prototype.selected;
    /** @type {?} */
    CompleterComponent.prototype.highlighted;
    /** @type {?} */
    CompleterComponent.prototype.blur;
    /** @type {?} */
    CompleterComponent.prototype.focusEvent;
    /** @type {?} */
    CompleterComponent.prototype.opened;
    /** @type {?} */
    CompleterComponent.prototype.keyup;
    /** @type {?} */
    CompleterComponent.prototype.keydown;
    /** @type {?} */
    CompleterComponent.prototype.completer;
    /** @type {?} */
    CompleterComponent.prototype.mdbCompleterInput;
    /** @type {?} */
    CompleterComponent.prototype.labelEl;
    /** @type {?} */
    CompleterComponent.prototype.focused;
    /** @type {?} */
    CompleterComponent.prototype.state;
    /** @type {?} */
    CompleterComponent.prototype.searchStr;
    /** @type {?} */
    CompleterComponent.prototype.control;
    /** @type {?} */
    CompleterComponent.prototype.displaySearching;
    /** @type {?} */
    CompleterComponent.prototype.displayNoResults;
    /** @type {?} */
    CompleterComponent.prototype._onTouchedCallback;
    /** @type {?} */
    CompleterComponent.prototype._onChangeCallback;
    /** @type {?} */
    CompleterComponent.prototype._focus;
    /** @type {?} */
    CompleterComponent.prototype._open;
    /** @type {?} */
    CompleterComponent.prototype._textNoResults;
    /** @type {?} */
    CompleterComponent.prototype._textSearching;
    /**
     * @type {?}
     * @private
     */
    CompleterComponent.prototype.completerService;
    /**
     * @type {?}
     * @private
     */
    CompleterComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CompleterComponent.prototype.el;
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2NvbXBvbmVudHMvY29tcGxldGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxFQUNhLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQzNFLFVBQVUsRUFBaUIsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQy9ELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNsRyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUUzRSxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7O01BRWhCLGdDQUFnQyxHQUFHO0lBQ3ZDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztJQUNqRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBY0QsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBa0Y3QixZQUNVLGdCQUFrQyxFQUNsQyxRQUFtQixFQUNuQixFQUFjO1FBRmQscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxh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O3lCQU10QixZQUFZLFNBQUMsVUFBVTs7OztJQXpHeEIseUNBQTJDOztJQUMzQyx1Q0FBK0I7O0lBQy9CLHFDQUE2Qjs7SUFDN0IsbUNBQThCOztJQUM5Qiw2Q0FBb0Q7O0lBQ3BELHNDQUFxQzs7SUFDckMsK0NBQTBDOztJQUMxQywyQ0FBc0M7O0lBQ3RDLDZDQUF3Qzs7SUFDeEMsNkNBQXVDOztJQUN2Qyx5Q0FBaUM7O0lBQ2pDLHdDQUFtQzs7SUFDbkMsMkNBQXNDOztJQUN0QyxpREFBNEM7O0lBQzVDLHVDQUFrQzs7SUFDbEMsMENBQXFDOztJQUNyQyx3Q0FBbUM7O0lBQ25DLHVDQUFrQzs7SUFDbEMseUNBQW9DOztJQUNwQywwQ0FBa0M7O0lBQ2xDLDJDQUFzQzs7SUFDdEMsbUNBQThCOztJQStCOUIsc0NBQThEOztJQUM5RCx5Q0FBaUU7O0lBQ2pFLGtDQUEyQzs7SUFDM0Msd0NBQWlEOztJQUNqRCxvQ0FBc0Q7O0lBQ3RELG1DQUErRDs7SUFDL0QscUNBQWlFOztJQUVqRSx1Q0FBMEU7O0lBQzFFLCtDQUFxRTs7SUFDckUscUNBQTBDOztJQUUxQyxxQ0FBdUI7O0lBR3ZCLG1DQUFvQjs7SUFFcEIsdUNBQXNCOztJQUN0QixxQ0FBcUM7O0lBRXJDLDhDQUE2Qjs7SUFDN0IsOENBQTZCOztJQUM3QixnREFBc0M7O0lBQ3RDLCtDQUEyQzs7SUFDM0Msb0NBQWU7O0lBQ2YsbUNBQWM7O0lBQ2QsNENBQWlDOztJQUNqQyw0Q0FBZ0M7Ozs7O0lBRzlCLDhDQUEwQzs7Ozs7SUFDMUMsc0NBQTJCOzs7OztJQUMzQixnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLCBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBWaWV3Q2hpbGQsXG4gIGZvcndhcmRSZWYsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTWRiQ29tcGxldGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9jb21wbGV0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbXBsZXRlckRhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21wbGV0ZXItZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBsZXRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21wbGV0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wbGV0ZXJJdGVtIH0gZnJvbSAnLi9jb21wbGV0ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTUFYX0NIQVJTLCBNSU5fU0VBUkNIX0xFTkdUSCwgUEFVU0UsIFRFWFRfU0VBUkNISU5HLCBURVhUX05PX1JFU1VMVFMgfSBmcm9tICcuLi9nbG9iYWxzJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuXG5jb25zdCBDT01QTEVURVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbXBsZXRlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1hdXRvY29tcGxldGUsIG1kYi1jb21wbGV0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcGxldGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbQ09NUExFVEVSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZm9jdXNBbmltYXRpb24nLCBbXG4gICAgc3RhdGUoJ3VuZm9jdXNlZCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMS4wLCAxLjApJywgfSkpLFxuICAgIHN0YXRlKCdmb2N1c2VkJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxLjUsIDEuNSknIH0pKSxcbiAgICB0cmFuc2l0aW9uKCd1bmZvY3VzZWQgPT4gZm9jdXNlZCcsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgdHJhbnNpdGlvbignZm9jdXNlZCA9PiB1bmZvY3VzZWQnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpXG4gIF0pXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wbGV0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcHVibGljIGRhdGFTZXJ2aWNlOiBDb21wbGV0ZXJEYXRhO1xuICBASW5wdXQoKSBwdWJsaWMgaW5wdXROYW1lID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBpbnB1dElkID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBwYXVzZSA9IFBBVVNFO1xuICBASW5wdXQoKSBwdWJsaWMgbWluU2VhcmNoTGVuZ3RoID0gTUlOX1NFQVJDSF9MRU5HVEg7XG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhDaGFycyA9IE1BWF9DSEFSUztcbiAgQElucHV0KCkgcHVibGljIG92ZXJyaWRlU3VnZ2VzdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBjbGVhclNlbGVjdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBjbGVhclVuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGZpbGxIaWdobGlnaHRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgbWF0Y2hDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgZmllbGRUYWJpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgY2xlYXJCdXR0b25UYWJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgYXV0b01hdGNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlSW5wdXQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGF1dG9mb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgb3Blbk9uRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGluaXRpYWxWYWx1ZTogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgYXV0b0hpZ2hsaWdodCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRhdGFzb3VyY2Uoc291cmNlOiBDb21wbGV0ZXJEYXRhIHwgc3RyaW5nIHwgQXJyYXk8YW55Pikge1xuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlID0gdGhpcy5jb21wbGV0ZXJTZXJ2aWNlLmxvY2FsKHNvdXJjZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoc291cmNlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZSA9IHRoaXMuY29tcGxldGVyU2VydmljZS5yZW1vdGUoc291cmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UgPSBzb3VyY2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0ZXh0Tm9SZXN1bHRzKHRleHQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl90ZXh0Tm9SZXN1bHRzICE9PSB0ZXh0KSB7XG4gICAgICB0aGlzLl90ZXh0Tm9SZXN1bHRzID0gdGV4dDtcbiAgICAgIHRoaXMuZGlzcGxheU5vUmVzdWx0cyA9IHRoaXMuX3RleHROb1Jlc3VsdHMgJiYgdGhpcy5fdGV4dE5vUmVzdWx0cyAhPT0gJ2ZhbHNlJztcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRleHRTZWFyY2hpbmcodGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX3RleHRTZWFyY2hpbmcgIT09IHRleHQpIHtcbiAgICAgIHRoaXMuX3RleHRTZWFyY2hpbmcgPSB0ZXh0O1xuICAgICAgdGhpcy5kaXNwbGF5U2VhcmNoaW5nID0gdGhpcy5fdGV4dFNlYXJjaGluZyAmJiB0aGlzLl90ZXh0U2VhcmNoaW5nICE9PSAnZmFsc2UnO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBsZXRlckl0ZW0+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgaGlnaGxpZ2h0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBsZXRlckl0ZW0+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBmb2N1c0V2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBrZXl1cDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMga2V5ZG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZChNZGJDb21wbGV0ZXJEaXJlY3RpdmUpIHB1YmxpYyBjb21wbGV0ZXI6IE1kYkNvbXBsZXRlckRpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgnbWRiQ29tcGxldGVySW5wdXQnKSBwdWJsaWMgbWRiQ29tcGxldGVySW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2xhYmVsRWwnKSBsYWJlbEVsOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBmb2N1c2VkID0gZmFsc2U7XG5cbiAgLy8gVXNlZCBpbiBzbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gIHN0YXRlID0gJ3VuZm9jdXNlZCc7XG5cbiAgcHVibGljIHNlYXJjaFN0ciA9ICcnO1xuICBwdWJsaWMgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG5cbiAgZGlzcGxheVNlYXJjaGluZzogYW55ID0gdHJ1ZTtcbiAgZGlzcGxheU5vUmVzdWx0czogYW55ID0gdHJ1ZTtcbiAgX29uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuICBfZm9jdXMgPSBmYWxzZTtcbiAgX29wZW4gPSBmYWxzZTtcbiAgX3RleHROb1Jlc3VsdHMgPSBURVhUX05PX1JFU1VMVFM7XG4gIF90ZXh0U2VhcmNoaW5nID0gVEVYVF9TRUFSQ0hJTkc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wbGV0ZXJTZXJ2aWNlOiBDb21wbGV0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pIG9ua2V5dXAoZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgIT09ICcnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uY2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNpbicpIG9uRm9jdXNJbigpIHtcbiAgICBpZiAodGhpcy5sYWJlbEVsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKSBvbkZvY3VzT3V0KCkge1xuICAgIGlmICh0aGlzLm1kYkNvbXBsZXRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPT09ICcnICYmIHRoaXMubGFiZWxFbCAmJiAhdGhpcy5wbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmxhYmVsRWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2YXRlQ2xlYXJCdXR0b24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMubWRiQ29tcGxldGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGV2ZW50LnRhcmdldCwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gIH1cblxuICB0cmlnZ2VyQ2xlYXJCdXR0b25BbmltYXRpb24oYnV0dG9uU3RhdGU6IHN0cmluZykge1xuICAgIHRoaXMuc3RhdGUgPSBidXR0b25TdGF0ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5zZWFyY2hTdHI7IH1cblxuICBzZXQgdmFsdWUodjogYW55KSB7XG4gICAgaWYgKHYgIT09IHRoaXMuc2VhcmNoU3RyKSB7XG4gICAgICB0aGlzLnNlYXJjaFN0ciA9IHY7XG4gICAgfVxuICAgIC8vIFByb3BhZ2F0ZSB0aGUgY2hhbmdlIGluIGFueSBjYXNlXG4gICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh2KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMubGFiZWxFbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmxhYmVsRWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG9mb2N1cykge1xuICAgICAgdGhpcy5fZm9jdXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZSB8fCB0aGlzLnNlYXJjaFN0ciB8fCB0aGlzLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcblxuICAgIGlmICh0aGlzLl9mb2N1cykge1xuICAgICAgdGhpcy5tZGJDb21wbGV0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl9mb2N1cyA9IGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIG9uVG91Y2hlZCgpIHtcbiAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoU3RyID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29tcGxldGVyLnNlbGVjdGVkLnN1YnNjcmliZSgoaXRlbTogQ29tcGxldGVySXRlbSkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KGl0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMuY29tcGxldGVyLmhpZ2hsaWdodGVkLnN1YnNjcmliZSgoaXRlbTogQ29tcGxldGVySXRlbSkgPT4ge1xuICAgICAgdGhpcy5oaWdobGlnaHRlZC5lbWl0KGl0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMuY29tcGxldGVyLm9wZW5lZC5zdWJzY3JpYmUoKGlzT3BlbjogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5fb3BlbiA9IGlzT3BlbjtcbiAgICAgIHRoaXMub3BlbmVkLmVtaXQoaXNPcGVuKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUpIHtcbiAgICAgIHRoaXMuc2VhcmNoU3RyID0gdGhpcy5pbml0aWFsVmFsdWU7XG4gICAgICB0aGlzLm9uRm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25CbHVyKCkge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgaWYgKHRoaXMuc2VhcmNoU3RyID09PSB1bmRlZmluZWQgfHwgdGhpcy5zZWFyY2hTdHIgPT09ICcnKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5ibHVyLmVtaXQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgb25Gb2N1cygpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfSwgMCk7XG4gICAgdGhpcy5mb2N1c0V2ZW50LmVtaXQoeyBmb2N1c2VkOiB0cnVlLCBlbGVtZW50OiB0aGlzLmVsIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgb3BlbigpIHtcbiAgICB0aGlzLmNvbXBsZXRlci5vcGVuKCk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgdGhpcy5jb21wbGV0ZXIuY2xlYXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tZGJDb21wbGV0ZXJJbnB1dCkge1xuICAgICAgdGhpcy5tZGJDb21wbGV0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvY3VzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuO1xuICB9XG59XG4iXX0=