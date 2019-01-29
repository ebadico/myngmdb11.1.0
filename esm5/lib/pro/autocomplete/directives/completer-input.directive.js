/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { timer as observableTimer } from 'rxjs';
import { Directive, ElementRef, EventEmitter, Host, HostListener, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MdbCompleterDirective } from './completer.directive';
import { isNil } from '../globals';
// keyboard events
/** @type {?} */
var KEY_DW = 40;
/** @type {?} */
var KEY_RT = 39;
/** @type {?} */
var KEY_UP = 38;
/** @type {?} */
var KEY_LF = 37;
/** @type {?} */
var KEY_ES = 27;
/** @type {?} */
var KEY_EN = 13;
/** @type {?} */
var KEY_TAB = 9;
var MdbInputCompleteDirective = /** @class */ (function () {
    // constructor( @Host() private completer: MdbCompleterDirective, private ngModel: NgModel, private el: ElementRef) {
    function MdbInputCompleteDirective(completer, tempngModel, el) {
        var _this = this;
        this.completer = completer;
        this.tempngModel = tempngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.ngModelChange = new EventEmitter();
        this._searchStr = '';
        this._displayStr = '';
        // private blurTimer: Subscription = null;
        this.blurTimer = null;
        this.ngModel = this.tempngModel;
        this.completer.selected.subscribe(function (item) {
            if (!item) {
                return;
            }
            if (_this.clearSelected) {
                _this.searchStr = '';
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        });
        this.completer.highlighted.subscribe(function (item) {
            if (_this.fillHighlighted) {
                if (item) {
                    _this._displayStr = item.title;
                    _this.ngModelChange.emit(item.title);
                }
                else {
                    _this._displayStr = _this.searchStr;
                    _this.ngModelChange.emit(_this.searchStr);
                }
            }
        });
        // this.ngModel.valueChanges.subscribe(value => {
        this.ngModel.valueChanges.subscribe(function (value) {
            if (!isNil(value) && _this._displayStr !== value) {
                if (_this.searchStr !== value) {
                    _this.completer.search(value);
                }
                _this.searchStr = value;
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.keyupHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            this.restoreSearchValue();
            this.completer.clear();
        }
        else {
            if (this.searchStr) {
                this.completer.open();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.keydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === KEY_EN) {
            if (this.completer.hasHighlighted()) {
                event.preventDefault();
            }
            this.handleSelection();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.open();
            this.completer.nextRow();
        }
        else if (event.keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (event.keyCode === KEY_TAB) {
            this.handleSelection();
        }
        else if (event.keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
        }
    };
    /**
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout(function () {
                // get the focus back
                _this.el.nativeElement.focus();
            }, 0);
            return;
        }
        this.blurTimer = observableTimer(200).subscribe(function () {
            _this.blurTimer.unsubscribe();
            _this.blurTimer = null;
            if (_this.overrideSuggested) {
                _this.completer.onSelected({ title: _this.searchStr, originalObject: null });
            }
            else {
                if (_this.clearUnselected && !_this.completer.hasSelected) {
                    _this.searchStr = '';
                    _this.el.nativeElement.value = '';
                }
                else {
                    _this.restoreSearchValue();
                }
            }
            _this.completer.clear();
        });
    };
    /**
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.onfocus = /**
     * @return {?}
     */
    function () {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    };
    Object.defineProperty(MdbInputCompleteDirective.prototype, "searchStr", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchStr;
        },
        set: /**
         * @param {?} term
         * @return {?}
         */
        function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.handleSelection = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.completer.hasHighlighted()) {
            this._searchStr = '';
            this.completer.selectCurrent();
        }
        else if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            this.completer.clear();
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.restoreSearchValue = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.fillHighlighted) {
            if (this._displayStr !== this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    };
    MdbInputCompleteDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbCompleterInput]',
                },] }
    ];
    /** @nocollapse */
    MdbInputCompleteDirective.ctorParameters = function () { return [
        { type: MdbCompleterDirective, decorators: [{ type: Host }] },
        { type: NgModel },
        { type: ElementRef }
    ]; };
    MdbInputCompleteDirective.propDecorators = {
        clearSelected: [{ type: Input, args: ['clearSelected',] }],
        clearUnselected: [{ type: Input, args: ['clearUnselected',] }],
        overrideSuggested: [{ type: Input, args: ['overrideSuggested',] }],
        fillHighlighted: [{ type: Input, args: ['fillHighlighted',] }],
        openOnFocus: [{ type: Input, args: ['openOnFocus',] }],
        ngModelChange: [{ type: Output }],
        keyupHandler: [{ type: HostListener, args: ['keyup', ['$event'],] }],
        keydownHandler: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onBlur: [{ type: HostListener, args: ['blur',] }],
        onfocus: [{ type: HostListener, args: ['focus',] }]
    };
    return MdbInputCompleteDirective;
}());
export { MdbInputCompleteDirective };
if (false) {
    /** @type {?} */
    MdbInputCompleteDirective.prototype.clearSelected;
    /** @type {?} */
    MdbInputCompleteDirective.prototype.clearUnselected;
    /** @type {?} */
    MdbInputCompleteDirective.prototype.overrideSuggested;
    /** @type {?} */
    MdbInputCompleteDirective.prototype.fillHighlighted;
    /** @type {?} */
    MdbInputCompleteDirective.prototype.openOnFocus;
    /** @type {?} */
    MdbInputCompleteDirective.prototype.ngModelChange;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype._searchStr;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype._displayStr;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype.ngModel;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype.blurTimer;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype.completer;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype.tempngModel;
    /**
     * @type {?}
     * @private
     */
    MdbInputCompleteDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0b2NvbXBsZXRlL2RpcmVjdGl2ZXMvY29tcGxldGVyLWlucHV0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFDLEtBQUssSUFBSSxlQUFlLEVBQWlCLE1BQU0sTUFBTSxDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkcsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxZQUFZLENBQUM7OztJQUs3QixNQUFNLEdBQUcsRUFBRTs7SUFDWCxNQUFNLEdBQUcsRUFBRTs7SUFDWCxNQUFNLEdBQUcsRUFBRTs7SUFDWCxNQUFNLEdBQUcsRUFBRTs7SUFDWCxNQUFNLEdBQUcsRUFBRTs7SUFDWCxNQUFNLEdBQUcsRUFBRTs7SUFDWCxPQUFPLEdBQUcsQ0FBQztBQUVqQjtJQWdCRSxxSEFBcUg7SUFDckgsbUNBQTZCLFNBQWdDLEVBQVUsV0FBb0IsRUFBVSxFQUFjO1FBQW5ILGlCQWtDQztRQWxDNEIsY0FBUyxHQUFULFNBQVMsQ0FBdUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBUztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFicEYsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDcEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDdEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzVCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzNCLGdCQUFXLEdB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UUFBUSxDQUFDO2lDQXVCaEMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzt5QkF1QmxDLFlBQVksU0FBQyxNQUFNOzBCQWdDbkIsWUFBWSxTQUFDLE9BQU87O0lBdUN2QixnQ0FBQztDQUFBLEFBMUtELElBMEtDO1NBdktZLHlCQUF5Qjs7O0lBQ3BDLGtEQUFxRDs7SUFDckQsb0RBQXlEOztJQUN6RCxzREFBNkQ7O0lBQzdELG9EQUF3RDs7SUFDeEQsZ0RBQWlEOztJQUVqRCxrREFBdUU7Ozs7O0lBQ3ZFLCtDQUF3Qjs7Ozs7SUFDeEIsZ0RBQXlCOzs7OztJQUN6Qiw0Q0FBK0I7Ozs7O0lBRS9CLDhDQUE2Qzs7Ozs7SUFFaEMsOENBQWdEOzs7OztJQUFFLGdEQUE0Qjs7Ozs7SUFBRSx1Q0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7dGltZXIgYXMgb2JzZXJ2YWJsZVRpbWVyLCAgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBDb21wbGV0ZXJJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wbGV0ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWRiQ29tcGxldGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9jb21wbGV0ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IGlzTmlsIH0gZnJvbSAnLi4vZ2xvYmFscyc7XG5cblxuXG4vLyBrZXlib2FyZCBldmVudHNcbmNvbnN0IEtFWV9EVyA9IDQwO1xuY29uc3QgS0VZX1JUID0gMzk7XG5jb25zdCBLRVlfVVAgPSAzODtcbmNvbnN0IEtFWV9MRiA9IDM3O1xuY29uc3QgS0VZX0VTID0gMjc7XG5jb25zdCBLRVlfRU4gPSAxMztcbmNvbnN0IEtFWV9UQUIgPSA5O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiQ29tcGxldGVySW5wdXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiSW5wdXRDb21wbGV0ZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgnY2xlYXJTZWxlY3RlZCcpIHB1YmxpYyBjbGVhclNlbGVjdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgnY2xlYXJVbnNlbGVjdGVkJykgcHVibGljIGNsZWFyVW5zZWxlY3RlZCA9IGZhbHNlO1xuICBASW5wdXQoJ292ZXJyaWRlU3VnZ2VzdGVkJykgcHVibGljIG92ZXJyaWRlU3VnZ2VzdGVkID0gZmFsc2U7XG4gIEBJbnB1dCgnZmlsbEhpZ2hsaWdodGVkJykgcHVibGljIGZpbGxIaWdobGlnaHRlZCA9IHRydWU7XG4gIEBJbnB1dCgnb3Blbk9uRm9jdXMnKSBwdWJsaWMgb3Blbk9uRm9jdXMgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcHVibGljIG5nTW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIF9zZWFyY2hTdHIgPSAnJztcbiAgcHJpdmF0ZSBfZGlzcGxheVN0ciA9ICcnO1xuICBwcml2YXRlIG5nTW9kZWw6IE5nTW9kZWwgfCBhbnk7XG4gIC8vIHByaXZhdGUgYmx1clRpbWVyOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuICBwcml2YXRlIGJsdXJUaW1lcjogU3Vic2NyaXB0aW9uIHwgYW55ID0gbnVsbDtcbiAgLy8gY29uc3RydWN0b3IoIEBIb3N0KCkgcHJpdmF0ZSBjb21wbGV0ZXI6IE1kYkNvbXBsZXRlckRpcmVjdGl2ZSwgcHJpdmF0ZSBuZ01vZGVsOiBOZ01vZGVsLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gIGNvbnN0cnVjdG9yKCBASG9zdCgpIHByaXZhdGUgY29tcGxldGVyOiBNZGJDb21wbGV0ZXJEaXJlY3RpdmUsIHByaXZhdGUgdGVtcG5nTW9kZWw6IE5nTW9kZWwsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLm5nTW9kZWwgPSB0aGlzLnRlbXBuZ01vZGVsO1xuXG4gICAgdGhpcy5jb21wbGV0ZXIuc2VsZWN0ZWQuc3Vic2NyaWJlKChpdGVtOiBDb21wbGV0ZXJJdGVtKSA9PiB7XG4gICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2xlYXJTZWxlY3RlZCkge1xuICAgICAgICB0aGlzLnNlYXJjaFN0ciA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWFyY2hTdHIgPSBpdGVtLnRpdGxlO1xuICAgICAgfVxuICAgICAgdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQodGhpcy5zZWFyY2hTdHIpO1xuICAgIH0pO1xuICAgIHRoaXMuY29tcGxldGVyLmhpZ2hsaWdodGVkLnN1YnNjcmliZSgoaXRlbTogQ29tcGxldGVySXRlbSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZmlsbEhpZ2hsaWdodGVkKSB7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgdGhpcy5fZGlzcGxheVN0ciA9IGl0ZW0udGl0bGU7XG4gICAgICAgICAgdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQoaXRlbS50aXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZGlzcGxheVN0ciA9IHRoaXMuc2VhcmNoU3RyO1xuICAgICAgICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2VhcmNoU3RyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHRoaXMubmdNb2RlbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICB0aGlzLm5nTW9kZWwudmFsdWVDaGFuZ2VzLnN1YnNjcmliZSgodmFsdWU6IGFueSkgPT4ge1xuICAgICAgaWYgKCFpc05pbCh2YWx1ZSkgJiYgdGhpcy5fZGlzcGxheVN0ciAhPT0gdmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoU3RyICE9PSB2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVyLnNlYXJjaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWFyY2hTdHIgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJywgWyckZXZlbnQnXSlcbiAgcHVibGljIGtleXVwSGFuZGxlcihldmVudDogYW55KTogYW55IHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX0xGIHx8IGV2ZW50LmtleUNvZGUgPT09IEtFWV9SVCB8fCBldmVudC5rZXlDb2RlID09PSBLRVlfVEFCKSB7XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtFWV9VUCB8fCBldmVudC5rZXlDb2RlID09PSBLRVlfRU4pIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLRVlfRFcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMuY29tcGxldGVyLnNlYXJjaCh0aGlzLnNlYXJjaFN0cik7XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSBLRVlfRVMpIHtcbiAgICAgIHRoaXMucmVzdG9yZVNlYXJjaFZhbHVlKCk7XG4gICAgICB0aGlzLmNvbXBsZXRlci5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zZWFyY2hTdHIpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZXIub3BlbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICBwdWJsaWMga2V5ZG93bkhhbmRsZXIoZXZlbnQ6IGFueSkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSBLRVlfRU4pIHtcbiAgICAgIGlmICh0aGlzLmNvbXBsZXRlci5oYXNIaWdobGlnaHRlZCgpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZVNlbGVjdGlvbigpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX0RXKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jb21wbGV0ZXIub3BlbigpO1xuICAgICAgdGhpcy5jb21wbGV0ZXIubmV4dFJvdygpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX1VQKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jb21wbGV0ZXIucHJldlJvdygpO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gS0VZX1RBQikge1xuICAgICAgdGhpcy5oYW5kbGVTZWxlY3Rpb24oKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtFWV9FUykge1xuICAgICAgLy8gVGhpcyBpcyB2ZXJ5IHNwZWNpZmljIHRvIElFMTAvMTEgIzI3MlxuICAgICAgLy8gd2l0aG91dCB0aGlzLCBJRSBjbGVhcnMgdGhlIGlucHV0IHRleHRcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIHB1YmxpYyBvbkJsdXIoKTogYW55IHtcbiAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIGNhbmNlbCBCbHVyIGZvciBJRVxuICAgIGlmICh0aGlzLmNvbXBsZXRlci5pc0NhbmNlbEJsdXIoKSkge1xuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIC8vIGdldCB0aGUgZm9jdXMgYmFja1xuICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9LFxuICAgICAgICAwXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmJsdXJUaW1lciA9IG9ic2VydmFibGVUaW1lcigyMDApLnN1YnNjcmliZShcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5ibHVyVGltZXIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5ibHVyVGltZXIgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5vdmVycmlkZVN1Z2dlc3RlZCkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGVyLm9uU2VsZWN0ZWQoeyB0aXRsZTogdGhpcy5zZWFyY2hTdHIsIG9yaWdpbmFsT2JqZWN0OiBudWxsIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLmNsZWFyVW5zZWxlY3RlZCAmJiAhdGhpcy5jb21wbGV0ZXIuaGFzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU3RyID0gJyc7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXN0b3JlU2VhcmNoVmFsdWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wbGV0ZXIuY2xlYXIoKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxuICBwdWJsaWMgb25mb2N1cygpIHtcbiAgICBpZiAodGhpcy5ibHVyVGltZXIpIHtcbiAgICAgIHRoaXMuYmx1clRpbWVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmJsdXJUaW1lciA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wZW5PbkZvY3VzKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlci5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldCBzZWFyY2hTdHIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFN0cjtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgc2VhcmNoU3RyKHRlcm06IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFN0ciA9IHRlcm07XG4gICAgdGhpcy5fZGlzcGxheVN0ciA9IHRlcm07XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlbGVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5jb21wbGV0ZXIuaGFzSGlnaGxpZ2h0ZWQoKSkge1xuICAgICAgdGhpcy5fc2VhcmNoU3RyID0gJyc7XG4gICAgICB0aGlzLmNvbXBsZXRlci5zZWxlY3RDdXJyZW50KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLm92ZXJyaWRlU3VnZ2VzdGVkKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlci5vblNlbGVjdGVkKHsgdGl0bGU6IHRoaXMuc2VhcmNoU3RyLCBvcmlnaW5hbE9iamVjdDogbnVsbCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb21wbGV0ZXIuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlc3RvcmVTZWFyY2hWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5maWxsSGlnaGxpZ2h0ZWQpIHtcbiAgICAgIGlmICh0aGlzLl9kaXNwbGF5U3RyICE9PSB0aGlzLnNlYXJjaFN0cikge1xuICAgICAgICB0aGlzLl9kaXNwbGF5U3RyID0gdGhpcy5zZWFyY2hTdHI7XG4gICAgICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2VhcmNoU3RyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==