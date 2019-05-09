/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Inject, Input, Output, Renderer2 } from '@angular/core';
import { MdbAutoCompleterComponent } from '../components/mdb-auto-completer.component';
import { DOCUMENT } from '@angular/platform-browser';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var MdbAutoCompleterDirective = /** @class */ (function () {
    function MdbAutoCompleterDirective(renderer, el, platformId, document) {
        this.renderer = renderer;
        this.el = el;
        this.document = document;
        this.ngModelChange = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._getClosestEl = /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    function (el, selector) {
        for (; el && el !== document; el = el.parentNode) {
            if (el.matches && el.matches(selector)) {
                return el;
            }
        }
        return null;
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
        /** @type {?} */
        var el = this.renderer.createElement('button');
        this._setStyles(el, {
            position: 'absolute',
            top: '25%',
            right: '0',
            visibility: 'hidden'
        });
        this._addClass(el, ['mdb-autocomplete-clear', 'fa', 'fa-times']);
        this.renderer.setAttribute(el, 'type', 'button');
        this.renderer.setAttribute(el, 'tabindex', this.mdbAutoCompleter.clearButtonTabIndex.toString());
        if (this.isBrowser) {
            /** @type {?} */
            var parent_1 = this._getClosestEl(this.el.nativeElement, '.md-form') || this.el.nativeElement;
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
     * @protected
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleInput = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this._isOpen()) {
            this._show();
        }
        this.mdbAutoCompleter.removeHighlight(0);
        this.mdbAutoCompleter.highlightRow(0);
        /** @type {?} */
        var clearButtonVisibility = event.target.value.length > 0 ? 'visible' : 'hidden';
        /** @type {?} */
        var clearButton = this.el.nativeElement.parentElement.lastElementChild;
        this._setStyles(clearButton, { visibility: clearButtonVisibility });
    };
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleKeyDown = /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.mdbAutoCompleter.navigateUsingKeyboard(event);
    };
    /**
     * @protected
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleFocusIn = /**
     * @protected
     * @return {?}
     */
    function () {
        this._show();
    };
    /**
     * @protected
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleBlurIn = /**
     * @protected
     * @return {?}
     */
    function () {
        this._hide();
    };
    /**
     * @protected
     * @return {?}
     */
    MdbAutoCompleterDirective.prototype._handleMouseDown = /**
     * @protected
     * @return {?}
     */
    function () {
        this.mdbAutoCompleter.highlightRow(0);
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
        this._appendDropdownToInput();
        if (this.mdbAutoCompleter.appendToBody) {
            if (this._getClosestEl(this.el.nativeElement, '.modal-body')) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.renderer.setStyle(_this.mdbAutoCompleter.dropdown.nativeElement, 'z-index', '1100');
                }), 0);
            }
        }
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
            inputHeight: height
        };
        this.mdbAutoCompleter.appendDropdown({
            left: this.getCoords(el).left,
            top: this.getCoords(el).top + height,
            width: position.width,
            bottom: window.innerHeight - height - this.getCoords(el).top
        });
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
            _this.el.nativeElement.value = item.text;
            /** @type {?} */
            var clearButtonVisibility = _this.el.nativeElement.value.length > 0 ? 'visible' : 'hidden';
            /** @type {?} */
            var clearButton = _this.el.nativeElement.parentElement.lastElementChild;
            _this._setStyles(clearButton, { visibility: clearButtonVisibility });
        }));
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
                function (event) { return _this.renderer.listen(clearButton_1, event, (/**
                 * @return {?}
                 */
                function () {
                    _this._clearInput();
                })); }));
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms'
                });
            }));
            this.renderer.listen(clearButton_1, 'mouseenter', (/**
             * @return {?}
             */
            function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms'
                });
            }));
            this.renderer.listen(clearButton_1, 'mouseleave', (/**
             * @return {?}
             */
            function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms'
                });
            }));
            this.renderer.listen(clearButton_1, 'blur', (/**
             * @return {?}
             */
            function () {
                _this._setStyles(clearButton_1, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms'
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
                characterData: true
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
    };
    MdbAutoCompleterDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[mdbAutoCompleter], textarea[mdbAutoCompleter]',
                    host: {
                        '(input)': '_handleInput($event)',
                        '(keydown)': '_handleKeyDown($event)',
                        '(focusin)': '_handleFocusIn()',
                        '(blur)': '_handleBlurIn()',
                        '(mousedown)': '_handleMouseDown()'
                    },
                    exportAs: 'mdbAutoCompleterTrigger',
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
        ngModelChange: [{ type: Output }]
    };
    return MdbAutoCompleterDirective;
}());
export { MdbAutoCompleterDirective };
if (false) {
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.mdbAutoCompleter;
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.ngModelChange;
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
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.isBrowser;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvZGlyZWN0aXZlcy9tZGItYXV0by1jb21wbGV0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUduRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWxEO0lBbUJFLG1DQUNVLFFBQW1CLEVBQ25CLEVBQWMsRUFDRCxVQUFrQixFQUNiLFFBQWE7UUFIL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRUksYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVYvQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFXaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7O0lBRU8saURBQWE7Ozs7OztJQUFyQixVQUFzQixFQUFPLEVBQUUsUUFBZ0I7UUFDN0MsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUNoRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtn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QWEsRUFBRSxvQkFBb0I7cUJBQ3BDO29CQUNELFFBQVEsRUFBRSx5QkFBeUI7aUJBQ3BDOzs7O2dCQW5CQyxTQUFTO2dCQU5ULFVBQVU7NkNBcUNQLE1BQU0sU0FBQyxXQUFXO2dEQUNsQixNQUFNLFNBQUMsUUFBUTs7O21DQVhqQixLQUFLO2dDQUNMLE1BQU07O0lBbVBULGdDQUFDO0NBQUEsQUFoUUQsSUFnUUM7U0FyUFkseUJBQXlCOzs7SUFDcEMscURBQXFEOztJQUNyRCxrREFBa0Q7Ozs7O0lBRWxELCtEQUFxRDs7Ozs7SUFDckQsaURBQTBCOztJQUMxQiw4Q0FBbUI7Ozs7O0lBR2pCLDZDQUEyQjs7Ozs7SUFDM0IsdUNBQXNCOzs7OztJQUV0Qiw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtJU2VsZWN0ZWRPcHRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvc2VsZWN0ZWQtb3B0aW9uLmludGVyZmFjZSc7XG5cbmltcG9ydCB7UExBVEZPUk1fSUR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbWRiQXV0b0NvbXBsZXRlcl0sIHRleHRhcmVhW21kYkF1dG9Db21wbGV0ZXJdJyxcbiAgaG9zdDoge1xuICAgICcoaW5wdXQpJzogJ19oYW5kbGVJbnB1dCgkZXZlbnQpJyxcbiAgICAnKGtleWRvd24pJzogJ19oYW5kbGVLZXlEb3duKCRldmVudCknLFxuICAgICcoZm9jdXNpbiknOiAnX2hhbmRsZUZvY3VzSW4oKScsXG4gICAgJyhibHVyKSc6ICdfaGFuZGxlQmx1ckluKCknLFxuICAgICcobW91c2Vkb3duKSc6ICdfaGFuZGxlTW91c2VEb3duKCknXG4gIH0sXG4gIGV4cG9ydEFzOiAnbWRiQXV0b0NvbXBsZXRlclRyaWdnZXInLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJBdXRvQ29tcGxldGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbWRiQXV0b0NvbXBsZXRlcjogTWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudDtcbiAgQE91dHB1dCgpIG5nTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIF9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzOiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIF9jbGVhckJ1dHRvbjogYW55O1xuICBpc0Jyb3dzZXI6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDbG9zZXN0RWwoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGZvciAoOyBlbCAmJiBlbCAhPT0gZG9jdW1lbnQ7IGVsID0gZWwucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKGVsLm1hdGNoZXMgJiYgZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbmRlckNsZWFyQnV0dG9uKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHRoaXMuX3NldFN0eWxlcyhlbCwge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6ICcyNSUnLFxuICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgfSk7XG5cblxuICAgIHRoaXMuX2FkZENsYXNzKGVsLCBbJ21kYi1hdXRvY29tcGxldGUtY2xlYXInLCAnZmEnLCAnZmEtdGltZXMnXSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICd0YWJpbmRleCcsIHRoaXMubWRiQXV0b0NvbXBsZXRlci5jbGVhckJ1dHRvblRhYkluZGV4LnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1kLWZvcm0nKSB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudCwgZWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFN0eWxlcyh0YXJnZXQ6IEVsZW1lbnRSZWYsIHN0eWxlczogYW55KSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChwcm9wOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGFyZ2V0LCBwcm9wLCBzdHlsZXNbcHJvcF0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkQ2xhc3ModGFyZ2V0OiBFbGVtZW50UmVmLCBuYW1lOiBzdHJpbmdbXSkge1xuICAgIG5hbWUuZm9yRWFjaCgoZWw6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YXJnZXQsIGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFySW5wdXQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQoJycpO1xuICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHt2aXNpYmlsaXR5OiAnaGlkZGVuJ30pO1xuICB9XG5cblxuICBwcm90ZWN0ZWQgX2hhbmRsZUlucHV0KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoIXRoaXMuX2lzT3BlbigpKSB7XG4gICAgICB0aGlzLl9zaG93KCk7XG4gICAgfVxuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnJlbW92ZUhpZ2hsaWdodCgwKTtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuaGlnaGxpZ2h0Um93KDApO1xuXG4gICAgY29uc3QgY2xlYXJCdXR0b25WaXNpYmlsaXR5ID0gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDAgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHt2aXNpYmlsaXR5OiBjbGVhckJ1dHRvblZpc2liaWxpdHl9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfaGFuZGxlS2V5RG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLm5hdmlnYXRlVXNpbmdLZXlib2FyZChldmVudCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2hhbmRsZUZvY3VzSW4oKSB7XG4gICAgdGhpcy5fc2hvdygpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9oYW5kbGVCbHVySW4oKSB7XG4gICAgdGhpcy5faGlkZSgpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9oYW5kbGVNb3VzZURvd24oKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmhpZ2hsaWdodFJvdygwKTtcbiAgfVxuXG4gIGdldENvb3JkcyhlbGVtOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgYm94OiBDbGllbnRSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGJvZHk6IGFueSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICBjb25zdCBkb2NFbDogYW55ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3A6IG51bWJlciA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0OiBudW1iZXIgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgICAgIGNvbnN0IGNsaWVudFRvcDogbnVtYmVyID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgICBjb25zdCBjbGllbnRMZWZ0OiBudW1iZXIgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICBjb25zdCB0b3A6IG51bWJlciA9IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3A7XG4gICAgICBjb25zdCBsZWZ0OiBudW1iZXIgPSBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0O1xuXG4gICAgICByZXR1cm4ge3RvcDogTWF0aC5yb3VuZCh0b3ApLCBsZWZ0OiBNYXRoLnJvdW5kKGxlZnQpfTtcbiAgICB9XG4gIH1cblxuXG4gIHByaXZhdGUgX2lzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5tZGJBdXRvQ29tcGxldGVyLmlzT3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvdygpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuc2hvdygpO1xuICAgIHRoaXMuX2FwcGVuZERyb3Bkb3duVG9JbnB1dCgpO1xuXG4gICAgaWYgKHRoaXMubWRiQXV0b0NvbXBsZXRlci5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIGlmICh0aGlzLl9nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1vZGFsLWJvZHknKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubWRiQXV0b0NvbXBsZXRlci5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsICcxMTAwJyk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hpZGUoKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmhpZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERyb3Bkb3duVG9JbnB1dCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbjogQ2xpZW50UmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gWydoZWlnaHQnLCAncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnbWFyZ2luLXRvcCcsICdtYXJnaW4tYm90dG9tJ11cbiAgICAgIC5tYXAoKGtleSkgPT4gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShrZXkpLCAxMCkpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYgKyBjdXIpO1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnBhcmFtZXRlcnMgPSB7XG4gICAgICBsZWZ0OiB0aGlzLmdldENvb3JkcyhlbCkubGVmdCxcbiAgICAgIHRvcDogdGhpcy5nZXRDb29yZHMoZWwpLnRvcCArIGhlaWdodCxcbiAgICAgIHdpZHRoOiBwb3NpdGlvbi53aWR0aCxcbiAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0IC0gaGVpZ2h0IC0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgaW5wdXRIZWlnaHQ6IGhlaWdodFxuICAgIH07XG5cbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuYXBwZW5kRHJvcGRvd24oe1xuICAgICAgbGVmdDogdGhpcy5nZXRDb29yZHMoZWwpLmxlZnQsXG4gICAgICB0b3A6IHRoaXMuZ2V0Q29vcmRzKGVsKS50b3AgKyBoZWlnaHQsXG4gICAgICB3aWR0aDogcG9zaXRpb24ud2lkdGgsXG4gICAgICBib3R0b206IHdpbmRvdy5pbm5lckhlaWdodCAtIGhlaWdodCAtIHRoaXMuZ2V0Q29vcmRzKGVsKS50b3BcbiAgICB9KTtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCkuc3Vic2NyaWJlKChpdGVtOiBJU2VsZWN0ZWRPcHRpb24pID0+IHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IGl0ZW0udGV4dDtcbiAgICAgIGNvbnN0IGNsZWFyQnV0dG9uVmlzaWJpbGl0eSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggPiAwID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHt2aXNpYmlsaXR5OiBjbGVhckJ1dHRvblZpc2liaWxpdHl9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5pc0Ryb3Bkb3duT3BlbigpLnN1YnNjcmliZSgoc3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICB0aGlzLl9hcHBlbmREcm9wZG93blRvSW5wdXQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgaWYgKHRoaXMubWRiQXV0b0NvbXBsZXRlci5jbGVhckJ1dHRvbiAmJiB0aGlzLmlzQnJvd3Nlcikge1xuXG4gICAgICB0aGlzLl9yZW5kZXJDbGVhckJ1dHRvbigpO1xuICAgICAgY29uc3QgY2xlYXJCdXR0b24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWRiLWF1dG9jb21wbGV0ZS1jbGVhcicpWzBdO1xuXG4gICAgICB0aGlzLl9jbGVhckJ1dHRvbiA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYi1hdXRvY29tcGxldGUtY2xlYXInKTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdmb2N1cycsICgpID0+IHtcbiAgICAgICAgWydjbGljaycsICdrZXlkb3duOnNwYWNlJywgJ2tleWRvd246ZW50ZXInXS5mb3JFYWNoKGV2ZW50ID0+IHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCBldmVudCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2NsZWFySW5wdXQoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMiwgMS4yKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMiwgMS4yKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMCwgMS4wKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMCwgMS4wKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGNsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2NsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcy5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXMpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXMuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=