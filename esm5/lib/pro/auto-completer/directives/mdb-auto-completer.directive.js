/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Inject, Input, Output, Renderer2, forwardRef, HostListener, } from '@angular/core';
import { MdbAutoCompleterComponent } from '../components/mdb-auto-completer.component';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Utils } from '../../../free/utils';
import { TAB, ESCAPE, ENTER } from '../../../free/utils/keyboard-navigation';
/** @type {?} */
export var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return MdbAutoCompleterDirective; })),
    multi: true,
};
var MdbAutoCompleterDirective = /** @class */ (function () {
    function MdbAutoCompleterDirective(renderer, el, platformId, document) {
        this.renderer = renderer;
        this.el = el;
        this.document = document;
        this.ngModelChange = new EventEmitter();
        this.clearBtnClicked = new EventEmitter();
        this._canOpenOnFocus = true;
        this.utils = new Utils();
        this._onChange = (/**
         * @return {?}
         */
        function () { });
        this._onTouched = (/**
         * @return {?}
         */
        function () { });
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._handleKeyDown(event);
        /** @type {?} */
        var isTabKey = event.keyCode === TAB;
        if (isTabKey) {
            this._hide();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._isOpen()) {
            this._show();
        }
        this._onChange(event.target.value);
        this.mdbAutoCompleter.removeHighlight(0);
        this.mdbAutoCompleter.highlightRow(0);
        /** @type {?} */
        var clearButtonVisibility = event.target.value.length > 0 ? 'visible' : 'hidden';
        if (this.mdbAutoCompleter.clearButton) {
            /** @type {?} */
            var clearButton = this.el.nativeElement.parentElement.lastElementChild;
            this._setStyles(clearButton, { visibility: clearButtonVisibility });
        }
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleFocusIn = /**
     * @return {?}
     */
    function () {
        if (!this._canOpenOnFocus) {
            this._canOpenOnFocus = true;
        }
        else {
            this._show();
        }
    };
    /*
  fix(completer): Resolve problem with closing autocompleter dropdown
  when not neccessary (eg. clicking on button which is not an mdb-option.
  Without calling this _hide() method, autocompleter dropdown won't close
  after switching focus programmatically to another element.
  */
    /*
    fix(completer): Resolve problem with closing autocompleter dropdown
    when not neccessary (eg. clicking on button which is not an mdb-option.
    Without calling this _hide() method, autocompleter dropdown won't close
    after switching focus programmatically to another element.
    */
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleBlurIn = /*
    fix(completer): Resolve problem with closing autocompleter dropdown
    when not neccessary (eg. clicking on button which is not an mdb-option.
    Without calling this _hide() method, autocompleter dropdown won't close
    after switching focus programmatically to another element.
    */
    /**
     * @return {?}
     */
    function () {
        this._canOpenOnFocus = this.document.activeElement !== this.el.nativeElement;
        this._onTouched();
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.handleMouseDown = /**
     * @return {?}
     */
    function () {
        this.mdbAutoCompleter.highlightRow(0);
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._renderClearButton = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var el = this.renderer.createElement('button');
        this._setStyles(el, {
            position: 'absolute',
            top: '25%',
            right: '0',
            visibility: 'hidden',
        });
        this._addClass(el, ['mdb-autocomplete-clear', 'fa', 'fa-times']);
        this.renderer.setAttribute(el, 'type', 'button');
        this.renderer.setAttribute(el, 'tabindex', this.mdbAutoCompleter.clearButtonTabIndex.toString());
        this.listenToClearClick = this.renderer.listen(el, 'click', (/**
         * @return {?}
         */
        function () {
            _this.clearBtnClicked.emit();
            _this._onChange('');
        }));
        if (this.isBrowser) {
            /** @type {?} */
            var parent_1 = this.utils.getClosestEl(this.el.nativeElement, '.md-form') || this.el.nativeElement;
            this.renderer.appendChild(parent_1, el);
        }
    };
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} target
     * @param {?} styles
     * @return {THIS}
     */
    MdbAutoCompleterDirective.prototype._setStyles = /**
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} target
     * @param {?} styles
     * @return {THIS}
     */
    function (target, styles) {
        var _this = this;
        Object.keys(styles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            (/** @type {?} */ (_this)).renderer.setStyle(target, prop, styles[prop]);
        }));
        return (/** @type {?} */ (this));
    };
    /**
     * @private
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._addClass = /**
     * @private
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    function (target, name) {
        var _this = this;
        name.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            _this.renderer.addClass(target, el);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._clearInput = /**
     * @private
     * @return {?}
     */
    function () {
        this.el.nativeElement.value = '';
        this.ngModelChange.emit('');
        /** @type {?} */
        var clearButton = this.el.nativeElement.parentElement.lastElementChild;
        this._setStyles(clearButton, { visibility: 'hidden' });
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._clearInput();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mdbAutoCompleter.navigateUsingKeyboard(event);
        /** @type {?} */
        var key = event.keyCode;
        if (key !== ESCAPE && key !== ENTER && key !== TAB) {
            this.mdbAutoCompleter.show();
        }
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.getCoords = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        if (this.isBrowser) {
            /** @type {?} */
            var box = elem.getBoundingClientRect();
            /** @type {?} */
            var body = document.body;
            /** @type {?} */
            var docEl = document.documentElement;
            /** @type {?} */
            var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
            /** @type {?} */
            var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
            /** @type {?} */
            var clientTop = docEl.clientTop || body.clientTop || 0;
            /** @type {?} */
            var clientLeft = docEl.clientLeft || body.clientLeft || 0;
            /** @type {?} */
            var top_1 = box.top + scrollTop - clientTop;
            /** @type {?} */
            var left = box.left + scrollLeft - clientLeft;
            return { top: Math.round(top_1), left: Math.round(left) };
        }
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._isOpen = /**
     * @private
     * @return {?}
     */
    function () {
        return this.mdbAutoCompleter.isOpen();
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._show = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.mdbAutoCompleter.show();
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.mdbAutoCompleter.appendToBody) {
                if (_this.utils.getClosestEl(_this.el.nativeElement, '.modal-body')) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        _this.renderer.setStyle(_this.mdbAutoCompleter.dropdown.nativeElement, 'z-index', '1100');
                    }), 0);
                }
            }
        }), 0);
        this.listenFunc = this.renderer.listen('document', 'click', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (_this.mdbAutoCompleter.dropdown &&
                !_this.mdbAutoCompleter.dropdown.nativeElement.contains((/** @type {?} */ (event.target))) &&
                !_this.el.nativeElement.contains((/** @type {?} */ (event.target)))) {
                _this._hide();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._hide = /**
     * @private
     * @return {?}
     */
    function () {
        this.mdbAutoCompleter.hide();
        this.listenFunc();
    };
    /**
     * @private
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._appendDropdownToInput = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var position = this.el.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var el = this.el.nativeElement;
        /** @type {?} */
        var style = window.getComputedStyle(this.el.nativeElement);
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
        this.mdbAutoCompleter.parameters = {
            left: this.getCoords(el).left,
            top: this.getCoords(el).top + height,
            width: position.width,
            bottom: window.innerHeight - height - el.getBoundingClientRect().top,
            inputHeight: height,
        };
        this.mdbAutoCompleter.appendDropdown();
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.mdbAutoCompleter.selectedItemChanged().subscribe((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var displayedValue = _this.mdbAutoCompleter && _this.mdbAutoCompleter.displayValue
                ? _this.mdbAutoCompleter.displayValue(item.text)
                : item.text;
            _this.el.nativeElement.value = displayedValue;
            _this._onChange(item.text);
            /** @type {?} */
            var clearButtonVisibility = _this.el.nativeElement.value.length > 0 ? 'visible' : 'hidden';
            /** @type {?} */
            var clearButton = _this.el.nativeElement.parentElement.lastElementChild;
            _this._setStyles(clearButton, { visibility: clearButtonVisibility });
            if (item) {
                _this._canOpenOnFocus = false;
                _this.el.nativeElement.focus();
                _this._hide();
            }
        }));
        this.mdbAutoCompleter.origin = this.el;
        this.mdbAutoCompleter.isDropdownOpen().subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            if (state) {
                _this._appendDropdownToInput();
            }
        }));
        if (this.mdbAutoCompleter.clearButton && this.isBrowser) {
            this._renderClearButton();
            /** @type {?} */
            var clearButton_1 = this.el.nativeElement.parentElement.querySelectorAll('.mdb-autocomplete-clear')[0];
            this._clearButton = this.document.querySelector('.mdb-autocomplete-clear');
            this.renderer.listen(clearButton_1, 'focus', (/**
             * @return {?}
             */
            function () {
                ['click', 'keydown:space', 'keydown:enter'].forEach((/**
                 * @param {?} event
                 * @return {?}
                 */
                function (event) {
                    return _this.renderer.listen(clearButton_1, event, (/**
                     * @return {?}
                     */
                    function () {
                        _this._clearInput();
                    }));
                }));
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms',
                });
            }));
            this.renderer.listen(clearButton_1, 'click', (/**
             * @return {?}
             */
            function () {
                _this._clearInput();
            }));
            this.renderer.listen(clearButton_1, 'mouseenter', (/**
             * @return {?}
             */
            function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms',
                });
            }));
            this.renderer.listen(clearButton_1, 'mouseleave', (/**
             * @return {?}
             */
            function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms',
                });
            }));
            this.renderer.listen(clearButton_1, 'blur', (/**
             * @return {?}
             */
            function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms',
                });
            }));
            if (this.el.nativeElement.disabled) {
                this.renderer.setAttribute(clearButton_1, 'disabled', 'true');
            }
            this._autocompleterInputChanges = new MutationObserver((/**
             * @param {?} mutations
             * @return {?}
             */
            function (mutations) {
                mutations.forEach((/**
                 * @param {?} mutation
                 * @return {?}
                 */
                function (mutation) {
                    if (mutation.attributeName === 'disabled') {
                        _this.renderer.setAttribute(_this._clearButton, 'disabled', 'true');
                    }
                }));
            }));
            this._autocompleterInputChanges.observe(this.el.nativeElement, {
                attributes: true,
                childList: true,
                characterData: true,
            });
        }
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._autocompleterInputChanges) {
            this._autocompleterInputChanges.disconnect();
        }
        if (this.listenToClearClick) {
            this.listenToClearClick();
        }
        if (this.listenFunc) {
            this.listenFunc();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        Promise.resolve(null).then((/**
         * @return {?}
         */
        function () { return (_this.el.nativeElement.value = value); }));
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    MdbAutoCompleterDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[mdbAutoCompleter], textarea[mdbAutoCompleter]',
                    // tslint:disable-next-line:no-host-metadata-property
                    host: {
                        '(input)': '_handleInput($event)',
                        '(focusin)': '_handleFocusIn()',
                        '(blur)': '_handleBlurIn()',
                        '(mousedown)': '_handleMouseDown()',
                    },
                    exportAs: 'mdbAutoCompleterTrigger',
                    providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR],
                },] }
    ];
    /** @nocollapse */
    MdbAutoCompleterDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    MdbAutoCompleterDirective.propDecorators = {
        mdbAutoCompleter: [{ type: Input }],
        ngModelChange: [{ type: Output }],
        clearBtnClicked: [{ type: Output }],
        onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        _handleInput: [{ type: HostListener, args: ['input', ['$event'],] }],
        _handleFocusIn: [{ type: HostListener, args: ['focusin',] }],
        _handleBlurIn: [{ type: HostListener, args: ['blur',] }],
        handleMouseDown: [{ type: HostListener, args: ['mousedown',] }]
    };
    return MdbAutoCompleterDirective;
}());
export { MdbAutoCompleterDirective };
if (false) {
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.mdbAutoCompleter;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.ngModelChange;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.clearBtnClicked;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype._autocompleterInputChanges;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype._clearButton;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype._canOpenOnFocus;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype.utils;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.listenToClearClick;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.listenFunc;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.isBrowser;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype._onChange;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype._onTouched;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvZGlyZWN0aXZlcy9tZGItYXV0by1jb21wbGV0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFFN0UsTUFBTSxLQUFPLCtCQUErQixHQUFRO0lBQ2xELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEseUJBQXlCLEVBQXpCLENBQXlCLEVBQUM7SUFDeEQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBaUZFLG1DQUNVLFFBQW1CLEVBQ25CLEVBQWMsRUFDRCxVQUFrQixFQUNiLFFBQWE7UUFIL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRUksYUFBUSxHQUFSLFFBQVEsQ0FBSztRQXZFL0Isa0JB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b0Q7Ozs7O0lBRXBELCtEQUFxRDs7Ozs7SUFDckQsaURBQTBCOzs7OztJQUMxQixvREFBK0I7Ozs7O0lBQy9CLDBDQUFtQzs7SUFFbkMsdURBQTZCOztJQUM3QiwrQ0FBcUI7O0lBQ3JCLDhDQUFtQjs7SUFrVG5CLDhDQUEyQzs7SUFFM0MsK0NBQXNCOzs7OztJQTFQcEIsNkNBQTJCOzs7OztJQUMzQix1Q0FBc0I7Ozs7O0lBRXRCLDZDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWRiLWF1dG8tY29tcGxldGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU2VsZWN0ZWRPcHRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlbGVjdGVkLW9wdGlvbi5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscyc7XG5pbXBvcnQgeyBUQUIsIEVTQ0FQRSwgRU5URVIgfSBmcm9tICcuLi8uLi8uLi9mcmVlL3V0aWxzL2tleWJvYXJkLW5hdmlnYXRpb24nO1xuXG5leHBvcnQgY29uc3QgTUFUX0FVVE9DT01QTEVURV9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmVcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWRiQXV0b0NvbXBsZXRlckRpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbWRiQXV0b0NvbXBsZXRlcl0sIHRleHRhcmVhW21kYkF1dG9Db21wbGV0ZXJdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgaG9zdDoge1xuICAgICcoaW5wdXQpJzogJ19oYW5kbGVJbnB1dCgkZXZlbnQpJyxcbiAgICAnKGZvY3VzaW4pJzogJ19oYW5kbGVGb2N1c0luKCknLFxuICAgICcoYmx1ciknOiAnX2hhbmRsZUJsdXJJbigpJyxcbiAgICAnKG1vdXNlZG93biknOiAnX2hhbmRsZU1vdXNlRG93bigpJyxcbiAgfSxcbiAgZXhwb3J0QXM6ICdtZGJBdXRvQ29tcGxldGVyVHJpZ2dlcicsXG4gIHByb3ZpZGVyczogW01BVF9BVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJBdXRvQ29tcGxldGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIG1kYkF1dG9Db21wbGV0ZXI6IE1kYkF1dG9Db21wbGV0ZXJDb21wb25lbnQ7XG4gIEBPdXRwdXQoKSBuZ01vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjbGVhckJ0bkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIF9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzOiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIF9jbGVhckJ1dHRvbjogYW55O1xuICBwcml2YXRlIF9jYW5PcGVuT25Gb2N1cyA9IHRydWU7XG4gIHByaXZhdGUgdXRpbHM6IFV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgbGlzdGVuVG9DbGVhckNsaWNrOiBGdW5jdGlvbjtcbiAgbGlzdGVuRnVuYzogRnVuY3Rpb247XG4gIGlzQnJvd3NlcjogYm9vbGVhbjtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9oYW5kbGVLZXlEb3duKGV2ZW50KTtcbiAgICBjb25zdCBpc1RhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IFRBQjtcbiAgICBpZiAoaXNUYWJLZXkpIHtcbiAgICAgIHRoaXMuX2hpZGUoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIF9oYW5kbGVJbnB1dChldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLl9pc09wZW4oKSkge1xuICAgICAgdGhpcy5fc2hvdygpO1xuICAgIH1cblxuICAgIHRoaXMuX29uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIucmVtb3ZlSGlnaGxpZ2h0KDApO1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5oaWdobGlnaHRSb3coMCk7XG5cbiAgICBjb25zdCBjbGVhckJ1dHRvblZpc2liaWxpdHkgPSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgIGlmICh0aGlzLm1kYkF1dG9Db21wbGV0ZXIuY2xlYXJCdXR0b24pIHtcbiAgICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7IHZpc2liaWxpdHk6IGNsZWFyQnV0dG9uVmlzaWJpbGl0eSB9KTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c2luJylcbiAgX2hhbmRsZUZvY3VzSW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jYW5PcGVuT25Gb2N1cykge1xuICAgICAgdGhpcy5fY2FuT3Blbk9uRm9jdXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgLypcbmZpeChjb21wbGV0ZXIpOiBSZXNvbHZlIHByb2JsZW0gd2l0aCBjbG9zaW5nIGF1dG9jb21wbGV0ZXIgZHJvcGRvd25cbndoZW4gbm90IG5lY2Nlc3NhcnkgKGVnLiBjbGlja2luZyBvbiBidXR0b24gd2hpY2ggaXMgbm90IGFuIG1kYi1vcHRpb24uXG5XaXRob3V0IGNhbGxpbmcgdGhpcyBfaGlkZSgpIG1ldGhvZCwgYXV0b2NvbXBsZXRlciBkcm9wZG93biB3b24ndCBjbG9zZVxuYWZ0ZXIgc3dpdGNoaW5nIGZvY3VzIHByb2dyYW1tYXRpY2FsbHkgdG8gYW5vdGhlciBlbGVtZW50LlxuKi9cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIF9oYW5kbGVCbHVySW4oKSB7XG4gICAgdGhpcy5fY2FuT3Blbk9uRm9jdXMgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJylcbiAgaGFuZGxlTW91c2VEb3duKCkge1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5oaWdobGlnaHRSb3coMCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJDbGVhckJ1dHRvbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0aGlzLl9zZXRTdHlsZXMoZWwsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnMjUlJyxcbiAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KTtcblxuICAgIHRoaXMuX2FkZENsYXNzKGVsLCBbJ21kYi1hdXRvY29tcGxldGUtY2xlYXInLCAnZmEnLCAnZmEtdGltZXMnXSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICBlbCxcbiAgICAgICd0YWJpbmRleCcsXG4gICAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuY2xlYXJCdXR0b25UYWJJbmRleC50b1N0cmluZygpXG4gICAgKTtcbiAgICB0aGlzLmxpc3RlblRvQ2xlYXJDbGljayA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyQnRuQ2xpY2tlZC5lbWl0KCk7XG4gICAgICB0aGlzLl9vbkNoYW5nZSgnJyk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9XG4gICAgICAgIHRoaXMudXRpbHMuZ2V0Q2xvc2VzdEVsKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy5tZC1mb3JtJykgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnQsIGVsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZXModGFyZ2V0OiBFbGVtZW50UmVmLCBzdHlsZXM6IGFueSkge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgocHJvcDogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhcmdldCwgcHJvcCwgc3R5bGVzW3Byb3BdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgX2FkZENsYXNzKHRhcmdldDogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nW10pIHtcbiAgICBuYW1lLmZvckVhY2goKGVsOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFyZ2V0LCBlbCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhcklucHV0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KCcnKTtcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMuX2NsZWFySW5wdXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBfaGFuZGxlS2V5RG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLm5hdmlnYXRlVXNpbmdLZXlib2FyZChldmVudCk7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZTtcblxuICAgIGlmIChrZXkgIT09IEVTQ0FQRSAmJiBrZXkgIT09IEVOVEVSICYmIGtleSAhPT0gVEFCKSB7XG4gICAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvb3JkcyhlbGVtOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgYm94OiBDbGllbnRSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGJvZHk6IGFueSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICBjb25zdCBkb2NFbDogYW55ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3A6IG51bWJlciA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0OiBudW1iZXIgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgICAgIGNvbnN0IGNsaWVudFRvcDogbnVtYmVyID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgICBjb25zdCBjbGllbnRMZWZ0OiBudW1iZXIgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICBjb25zdCB0b3A6IG51bWJlciA9IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3A7XG4gICAgICBjb25zdCBsZWZ0OiBudW1iZXIgPSBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0O1xuXG4gICAgICByZXR1cm4geyB0b3A6IE1hdGgucm91bmQodG9wKSwgbGVmdDogTWF0aC5yb3VuZChsZWZ0KSB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5tZGJBdXRvQ29tcGxldGVyLmlzT3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvdygpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuc2hvdygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubWRiQXV0b0NvbXBsZXRlci5hcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgaWYgKHRoaXMudXRpbHMuZ2V0Q2xvc2VzdEVsKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy5tb2RhbC1ib2R5JykpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5tZGJBdXRvQ29tcGxldGVyLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgJzExMDAnKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDApO1xuXG4gICAgdGhpcy5saXN0ZW5GdW5jID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuZHJvcGRvd24gJiZcbiAgICAgICAgIXRoaXMubWRiQXV0b0NvbXBsZXRlci5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkgJiZcbiAgICAgICAgIXRoaXMuZWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5faGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZSgpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuaGlkZSgpO1xuICAgIHRoaXMubGlzdGVuRnVuYygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kRHJvcGRvd25Ub0lucHV0KCkge1xuICAgIGNvbnN0IHBvc2l0aW9uOiBDbGllbnRSZWN0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICBjb25zdCBoZWlnaHQgPSBbJ2hlaWdodCcsICdwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdtYXJnaW4tdG9wJywgJ21hcmdpbi1ib3R0b20nXVxuICAgICAgLm1hcChrZXkgPT4gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShrZXkpLCAxMCkpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYgKyBjdXIpO1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnBhcmFtZXRlcnMgPSB7XG4gICAgICBsZWZ0OiB0aGlzLmdldENvb3JkcyhlbCkubGVmdCxcbiAgICAgIHRvcDogdGhpcy5nZXRDb29yZHMoZWwpLnRvcCArIGhlaWdodCxcbiAgICAgIHdpZHRoOiBwb3NpdGlvbi53aWR0aCxcbiAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0IC0gaGVpZ2h0IC0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgaW5wdXRIZWlnaHQ6IGhlaWdodCxcbiAgICB9O1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmFwcGVuZERyb3Bkb3duKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKS5zdWJzY3JpYmUoKGl0ZW06IElTZWxlY3RlZE9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGlzcGxheWVkVmFsdWUgPVxuICAgICAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIgJiYgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmRpc3BsYXlWYWx1ZVxuICAgICAgICAgID8gdGhpcy5tZGJBdXRvQ29tcGxldGVyLmRpc3BsYXlWYWx1ZShpdGVtLnRleHQpXG4gICAgICAgICAgOiBpdGVtLnRleHQ7XG5cbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IGRpc3BsYXllZFZhbHVlO1xuICAgICAgdGhpcy5fb25DaGFuZ2UoaXRlbS50ZXh0KTtcbiAgICAgIGNvbnN0IGNsZWFyQnV0dG9uVmlzaWJpbGl0eSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggPiAwID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHsgdmlzaWJpbGl0eTogY2xlYXJCdXR0b25WaXNpYmlsaXR5IH0pO1xuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLl9jYW5PcGVuT25Gb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5faGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLm9yaWdpbiA9IHRoaXMuZWw7XG5cbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuaXNEcm9wZG93bk9wZW4oKS5zdWJzY3JpYmUoKHN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5fYXBwZW5kRHJvcGRvd25Ub0lucHV0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5tZGJBdXRvQ29tcGxldGVyLmNsZWFyQnV0dG9uICYmIHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZW5kZXJDbGVhckJ1dHRvbigpO1xuICAgICAgY29uc3QgY2xlYXJCdXR0b24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAnLm1kYi1hdXRvY29tcGxldGUtY2xlYXInXG4gICAgICApWzBdO1xuXG4gICAgICB0aGlzLl9jbGVhckJ1dHRvbiA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYi1hdXRvY29tcGxldGUtY2xlYXInKTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdmb2N1cycsICgpID0+IHtcbiAgICAgICAgWydjbGljaycsICdrZXlkb3duOnNwYWNlJywgJ2tleWRvd246ZW50ZXInXS5mb3JFYWNoKGV2ZW50ID0+XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sIGV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jbGVhcklucHV0KCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIsIDEuMiknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICcyMDBtcycsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NsZWFySW5wdXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMiwgMS4yKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjAsIDEuMCknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICcyMDBtcycsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCAnYmx1cicsICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wLCAxLjApJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnMjAwbXMnLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGNsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2NsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcy5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcykge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGlzdGVuVG9DbGVhckNsaWNrKSB7XG4gICAgICB0aGlzLmxpc3RlblRvQ2xlYXJDbGljaygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5saXN0ZW5GdW5jKSB7XG4gICAgICB0aGlzLmxpc3RlbkZ1bmMoKTtcbiAgICB9XG4gIH1cblxuICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+ICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSkpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSkge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=