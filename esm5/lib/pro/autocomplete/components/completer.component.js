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
var noop = function () { };
var ɵ0 = noop;
/** @type {?} */
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return CompleterComponent; }),
    multi: true
};
var CompleterComponent = /** @class */ (function () {
    function CompleterComponent(completerService, renderer, el) {
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
    Object.defineProperty(CompleterComponent.prototype, "datasource", {
        set: /**
         * @param {?} source
         * @return {?}
         */
        function (source) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textNoResults", {
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            if (this._textNoResults !== text) {
                this._textNoResults = text;
                this.displayNoResults = this._textNoResults && this._textNoResults !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textSearching", {
        set: /**
         * @param {?} text
         * @return {?}
         */
        function (text) {
            if (this._textSearching !== text) {
                this._textSearching = text;
                this.displaySearching = this._textSearching && this._textSearching !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.onkeyup = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target.value !== '') {
            this.renderer.setStyle(event.target.nextElementSibling, 'visibility', 'visible');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.onclick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.target === this.labelEl.nativeElement) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
            this._focus = true;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onFocusIn = /**
     * @return {?}
     */
    function () {
        if (this.labelEl) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onFocusOut = /**
     * @return {?}
     */
    function () {
        if (this.mdbCompleterInput.nativeElement.value === '' && this.labelEl && !this.placeholder) {
            this.renderer.removeClass(this.labelEl.nativeElement, 'active');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.activateClearButton = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mdbCompleterInput.nativeElement.value = '';
        this.value = '';
        this.renderer.setStyle(event.target, 'visibility', 'hidden');
    };
    /**
     * @param {?} buttonState
     * @return {?}
     */
    CompleterComponent.prototype.triggerClearButtonAnimation = /**
     * @param {?} buttonState
     * @return {?}
     */
    function (buttonState) {
        this.state = buttonState;
    };
    Object.defineProperty(CompleterComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () { return this.searchStr; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            // Propagate the change in any case
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.labelEl) {
            this.renderer.removeClass(this.labelEl.nativeElement, 'active');
        }
        if (this.autofocus) {
            this._focus = true;
        }
        if (this.initialValue || this.searchStr || this.placeholder) {
            this.renderer.addClass(this.labelEl.nativeElement, 'active');
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this._focus) {
            this.mdbCompleterInput.nativeElement.focus();
            this._focus = false;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onTouched = /**
     * @return {?}
     */
    function () {
        this._onTouchedCallback();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CompleterComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.searchStr = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CompleterComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CompleterComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            _this.selected.emit(item);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        this.completer.opened.subscribe(function (isOpen) {
            _this._open = isOpen;
            _this.opened.emit(isOpen);
        });
        if (this.initialValue) {
            this.searchStr = this.initialValue;
            this.onFocus();
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
        if (this.searchStr === undefined || this.searchStr === '') {
            this.focused = false;
        }
        this.blur.emit(this);
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onFocus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this.focused = true;
        }, 0);
        this.focusEvent.emit({ focused: true, element: this.el });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CompleterComponent.prototype.onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        this.completer.open();
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.completer.clear();
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.mdbCompleterInput) {
            this.mdbCompleterInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.isOpen = /**
     * @return {?}
     */
    function () {
        return this._open;
    };
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
    CompleterComponent.ctorParameters = function () { return [
        { type: CompleterService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
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
    return CompleterComponent;
}());
export { CompleterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2NvbXBvbmVudHMvY29tcGxldGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsWUFBWSxDQUFDO0FBQ2IsT0FBTyxFQUNhLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxTQUFTLEVBQzNFLFVBQVUsRUFBaUIsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQy9ELE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFMUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNsRyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOztJQUUzRSxJQUFJLEdBQUcsY0FBUSxDQUFDOzs7SUFFaEIsZ0NBQWdDLEdBQUc7SUFDdkMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQztJQUNqRCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBR0Q7SUE2RkUsNEJBQ1UsZ0JBQWtDLEVBQ2xDLFFBQW1CLEVBQ25CLEVBQWM7UUFGZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIs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Qzs7Ozs7SUFDMUMsc0NBQTJCOzs7OztJQUMzQixnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdDaGVja2VkLCBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBWaWV3Q2hpbGQsXG4gIGZvcndhcmRSZWYsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTWRiQ29tcGxldGVyRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9jb21wbGV0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IENvbXBsZXRlckRhdGEgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21wbGV0ZXItZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBsZXRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21wbGV0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wbGV0ZXJJdGVtIH0gZnJvbSAnLi9jb21wbGV0ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTUFYX0NIQVJTLCBNSU5fU0VBUkNIX0xFTkdUSCwgUEFVU0UsIFRFWFRfU0VBUkNISU5HLCBURVhUX05PX1JFU1VMVFMgfSBmcm9tICcuLi9nbG9iYWxzJztcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBhbmltYXRlLCBzdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xuXG5jb25zdCBDT01QTEVURVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbXBsZXRlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1hdXRvY29tcGxldGUsIG1kYi1jb21wbGV0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tcGxldGVyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbQ09NUExFVEVSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxuICBhbmltYXRpb25zOiBbdHJpZ2dlcignZm9jdXNBbmltYXRpb24nLCBbXG4gICAgc3RhdGUoJ3VuZm9jdXNlZCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMS4wLCAxLjApJywgfSkpLFxuICAgIHN0YXRlKCdmb2N1c2VkJywgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZSgxLjUsIDEuNSknIH0pKSxcbiAgICB0cmFuc2l0aW9uKCd1bmZvY3VzZWQgPT4gZm9jdXNlZCcsIGFuaW1hdGUoJzIwMG1zIGVhc2UtaW4nKSksXG4gICAgdHJhbnNpdGlvbignZm9jdXNlZCA9PiB1bmZvY3VzZWQnLCBhbmltYXRlKCcyMDBtcyBlYXNlLWluJykpXG4gIF0pXVxufSlcbmV4cG9ydCBjbGFzcyBDb21wbGV0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdDaGVja2VkLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgcHVibGljIGRhdGFTZXJ2aWNlOiBDb21wbGV0ZXJEYXRhO1xuICBASW5wdXQoKSBwdWJsaWMgaW5wdXROYW1lID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBpbnB1dElkID0gJyc7XG4gIEBJbnB1dCgpIHB1YmxpYyBwYXVzZSA9IFBBVVNFO1xuICBASW5wdXQoKSBwdWJsaWMgbWluU2VhcmNoTGVuZ3RoID0gTUlOX1NFQVJDSF9MRU5HVEg7XG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhDaGFycyA9IE1BWF9DSEFSUztcbiAgQElucHV0KCkgcHVibGljIG92ZXJyaWRlU3VnZ2VzdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBjbGVhclNlbGVjdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBjbGVhclVuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGZpbGxIaWdobGlnaHRlZCA9IHRydWU7XG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFjZWhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBwdWJsaWMgbWF0Y2hDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBwdWJsaWMgZmllbGRUYWJpbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgY2xlYXJCdXR0b25UYWJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBwdWJsaWMgYXV0b01hdGNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlSW5wdXQgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGlucHV0Q2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGF1dG9mb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgb3Blbk9uRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgcHVibGljIGluaXRpYWxWYWx1ZTogYW55O1xuICBASW5wdXQoKSBwdWJsaWMgYXV0b0hpZ2hsaWdodCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGRhdGFzb3VyY2Uoc291cmNlOiBDb21wbGV0ZXJEYXRhIHwgc3RyaW5nIHwgQXJyYXk8YW55Pikge1xuICAgIGlmIChzb3VyY2UpIHtcbiAgICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlID0gdGhpcy5jb21wbGV0ZXJTZXJ2aWNlLmxvY2FsKHNvdXJjZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiAoc291cmNlKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5kYXRhU2VydmljZSA9IHRoaXMuY29tcGxldGVyU2VydmljZS5yZW1vdGUoc291cmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGF0YVNlcnZpY2UgPSBzb3VyY2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCB0ZXh0Tm9SZXN1bHRzKHRleHQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLl90ZXh0Tm9SZXN1bHRzICE9PSB0ZXh0KSB7XG4gICAgICB0aGlzLl90ZXh0Tm9SZXN1bHRzID0gdGV4dDtcbiAgICAgIHRoaXMuZGlzcGxheU5vUmVzdWx0cyA9IHRoaXMuX3RleHROb1Jlc3VsdHMgJiYgdGhpcy5fdGV4dE5vUmVzdWx0cyAhPT0gJ2ZhbHNlJztcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHRleHRTZWFyY2hpbmcodGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuX3RleHRTZWFyY2hpbmcgIT09IHRleHQpIHtcbiAgICAgIHRoaXMuX3RleHRTZWFyY2hpbmcgPSB0ZXh0O1xuICAgICAgdGhpcy5kaXNwbGF5U2VhcmNoaW5nID0gdGhpcy5fdGV4dFNlYXJjaGluZyAmJiB0aGlzLl90ZXh0U2VhcmNoaW5nICE9PSAnZmFsc2UnO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBsZXRlckl0ZW0+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgaGlnaGxpZ2h0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPENvbXBsZXRlckl0ZW0+KCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBmb2N1c0V2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcHVibGljIG9wZW5lZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIHB1YmxpYyBrZXl1cDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBwdWJsaWMga2V5ZG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQFZpZXdDaGlsZChNZGJDb21wbGV0ZXJEaXJlY3RpdmUpIHB1YmxpYyBjb21wbGV0ZXI6IE1kYkNvbXBsZXRlckRpcmVjdGl2ZTtcbiAgQFZpZXdDaGlsZCgnbWRiQ29tcGxldGVySW5wdXQnKSBwdWJsaWMgbWRiQ29tcGxldGVySW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2xhYmVsRWwnKSBsYWJlbEVsOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBmb2N1c2VkID0gZmFsc2U7XG5cbiAgLy8gVXNlZCBpbiBzbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gIHN0YXRlID0gJ3VuZm9jdXNlZCc7XG5cbiAgcHVibGljIHNlYXJjaFN0ciA9ICcnO1xuICBwdWJsaWMgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG5cbiAgZGlzcGxheVNlYXJjaGluZzogYW55ID0gdHJ1ZTtcbiAgZGlzcGxheU5vUmVzdWx0czogYW55ID0gdHJ1ZTtcbiAgX29uVG91Y2hlZENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbm9vcDtcbiAgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xuICBfZm9jdXMgPSBmYWxzZTtcbiAgX29wZW4gPSBmYWxzZTtcbiAgX3RleHROb1Jlc3VsdHMgPSBURVhUX05PX1JFU1VMVFM7XG4gIF90ZXh0U2VhcmNoaW5nID0gVEVYVF9TRUFSQ0hJTkc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wbGV0ZXJTZXJ2aWNlOiBDb21wbGV0ZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pIG9ua2V5dXAoZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgIT09ICcnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcsICd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pIG9uY2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT09IHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgICB0aGlzLl9mb2N1cyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNpbicpIG9uRm9jdXNJbigpIHtcbiAgICBpZiAodGhpcy5sYWJlbEVsKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKSBvbkZvY3VzT3V0KCkge1xuICAgIGlmICh0aGlzLm1kYkNvbXBsZXRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPT09ICcnICYmIHRoaXMubGFiZWxFbCAmJiAhdGhpcy5wbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmxhYmVsRWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2YXRlQ2xlYXJCdXR0b24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMubWRiQ29tcGxldGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGV2ZW50LnRhcmdldCwgJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG4gIH1cblxuICB0cmlnZ2VyQ2xlYXJCdXR0b25BbmltYXRpb24oYnV0dG9uU3RhdGU6IHN0cmluZykge1xuICAgIHRoaXMuc3RhdGUgPSBidXR0b25TdGF0ZTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5zZWFyY2hTdHI7IH1cblxuICBzZXQgdmFsdWUodjogYW55KSB7XG4gICAgaWYgKHYgIT09IHRoaXMuc2VhcmNoU3RyKSB7XG4gICAgICB0aGlzLnNlYXJjaFN0ciA9IHY7XG4gICAgfVxuICAgIC8vIFByb3BhZ2F0ZSB0aGUgY2hhbmdlIGluIGFueSBjYXNlXG4gICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh2KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMubGFiZWxFbCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmxhYmVsRWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmF1dG9mb2N1cykge1xuICAgICAgdGhpcy5fZm9jdXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmluaXRpYWxWYWx1ZSB8fCB0aGlzLnNlYXJjaFN0ciB8fCB0aGlzLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMubGFiZWxFbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcblxuICAgIGlmICh0aGlzLl9mb2N1cykge1xuICAgICAgdGhpcy5tZGJDb21wbGV0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl9mb2N1cyA9IGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgcHVibGljIG9uVG91Y2hlZCgpIHtcbiAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgcHVibGljIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoU3RyID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XG4gICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcbiAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29tcGxldGVyLnNlbGVjdGVkLnN1YnNjcmliZSgoaXRlbTogQ29tcGxldGVySXRlbSkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZC5lbWl0KGl0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMuY29tcGxldGVyLmhpZ2hsaWdodGVkLnN1YnNjcmliZSgoaXRlbTogQ29tcGxldGVySXRlbSkgPT4ge1xuICAgICAgdGhpcy5oaWdobGlnaHRlZC5lbWl0KGl0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMuY29tcGxldGVyLm9wZW5lZC5zdWJzY3JpYmUoKGlzT3BlbjogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5fb3BlbiA9IGlzT3BlbjtcbiAgICAgIHRoaXMub3BlbmVkLmVtaXQoaXNPcGVuKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5pbml0aWFsVmFsdWUpIHtcbiAgICAgIHRoaXMuc2VhcmNoU3RyID0gdGhpcy5pbml0aWFsVmFsdWU7XG4gICAgICB0aGlzLm9uRm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25CbHVyKCkge1xuICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgaWYgKHRoaXMuc2VhcmNoU3RyID09PSB1bmRlZmluZWQgfHwgdGhpcy5zZWFyY2hTdHIgPT09ICcnKSB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5ibHVyLmVtaXQodGhpcyk7XG4gIH1cblxuICBwdWJsaWMgb25Gb2N1cygpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfSwgMCk7XG4gICAgdGhpcy5mb2N1c0V2ZW50LmVtaXQoeyBmb2N1c2VkOiB0cnVlLCBlbGVtZW50OiB0aGlzLmVsIH0pO1xuICB9XG5cbiAgcHVibGljIG9uQ2hhbmdlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgb3BlbigpIHtcbiAgICB0aGlzLmNvbXBsZXRlci5vcGVuKCk7XG4gIH1cblxuICBwdWJsaWMgY2xvc2UoKSB7XG4gICAgdGhpcy5jb21wbGV0ZXIuY2xlYXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tZGJDb21wbGV0ZXJJbnB1dCkge1xuICAgICAgdGhpcy5tZGJDb21wbGV0ZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvY3VzID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9vcGVuO1xuICB9XG59XG4iXX0=