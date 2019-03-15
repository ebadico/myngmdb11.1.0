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
            if (el.matches(selector)) {
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
        this.mdbAutoCompleter.show();
        this._appendDropdownToInput();
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
            bottom: window.innerHeight - height - this.getCoords(el).top,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvZGlyZWN0aXZlcy9tZGItYXV0by1jb21wbGV0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUduRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRWxEO0lBbUJFLG1DQUNVLFFBQW1CLEVBQ25CLEVBQWMsRUFDRCxVQUFrQixFQUNiLFFBQWE7UUFIL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRUksYUFBUSxHQUFSLFFBQVEsQ0FBSztRQVYvQixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFXaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7O0lBRU8saURBQWE7Ozs7OztJQUFyQixVQUFzQixFQUFPLEVBQUUsUUFBZ0I7UUFDN0MsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRTtZQUNoRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hCLE9BQU8sRUFBRSxDQUFD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QUV0Qiw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtJU2VsZWN0ZWRPcHRpb259IGZyb20gJy4uL2ludGVyZmFjZXMvc2VsZWN0ZWQtb3B0aW9uLmludGVyZmFjZSc7XG5cbmltcG9ydCB7UExBVEZPUk1fSUR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtpc1BsYXRmb3JtQnJvd3Nlcn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbWRiQXV0b0NvbXBsZXRlcl0sIHRleHRhcmVhW21kYkF1dG9Db21wbGV0ZXJdJyxcbiAgaG9zdDoge1xuICAgICcoaW5wdXQpJzogJ19oYW5kbGVJbnB1dCgkZXZlbnQpJyxcbiAgICAnKGtleWRvd24pJzogJ19oYW5kbGVLZXlEb3duKCRldmVudCknLFxuICAgICcoZm9jdXNpbiknOiAnX2hhbmRsZUZvY3VzSW4oKScsXG4gICAgJyhibHVyKSc6ICdfaGFuZGxlQmx1ckluKCknLFxuICAgICcobW91c2Vkb3duKSc6ICdfaGFuZGxlTW91c2VEb3duKCknXG4gIH0sXG4gIGV4cG9ydEFzOiAnbWRiQXV0b0NvbXBsZXRlclRyaWdnZXInLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJBdXRvQ29tcGxldGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbWRiQXV0b0NvbXBsZXRlcjogTWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudDtcbiAgQE91dHB1dCgpIG5nTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIF9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzOiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIF9jbGVhckJ1dHRvbjogYW55O1xuICBpc0Jyb3dzZXI6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDbG9zZXN0RWwoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGZvciAoOyBlbCAmJiBlbCAhPT0gZG9jdW1lbnQ7IGVsID0gZWwucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKGVsLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJDbGVhckJ1dHRvbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0aGlzLl9zZXRTdHlsZXMoZWwsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnMjUlJyxcbiAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgIH0pO1xuXG5cbiAgICB0aGlzLl9hZGRDbGFzcyhlbCwgWydtZGItYXV0b2NvbXBsZXRlLWNsZWFyJywgJ2ZhJywgJ2ZhLXRpbWVzJ10pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAndGFiaW5kZXgnLCB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuY2xlYXJCdXR0b25UYWJJbmRleC50b1N0cmluZygpKTtcblxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZ2V0Q2xvc2VzdEVsKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy5tZC1mb3JtJykgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnQsIGVsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZXModGFyZ2V0OiBFbGVtZW50UmVmLCBzdHlsZXM6IGFueSkge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgocHJvcDogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhcmdldCwgcHJvcCwgc3R5bGVzW3Byb3BdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgX2FkZENsYXNzKHRhcmdldDogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nW10pIHtcbiAgICBuYW1lLmZvckVhY2goKGVsOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFyZ2V0LCBlbCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhcklucHV0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KCcnKTtcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7dmlzaWJpbGl0eTogJ2hpZGRlbid9KTtcbiAgfVxuXG5cbiAgcHJvdGVjdGVkIF9oYW5kbGVJbnB1dChldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLl9pc09wZW4oKSkge1xuICAgICAgdGhpcy5fc2hvdygpO1xuICAgIH1cblxuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5yZW1vdmVIaWdobGlnaHQoMCk7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmhpZ2hsaWdodFJvdygwKTtcblxuICAgIGNvbnN0IGNsZWFyQnV0dG9uVmlzaWJpbGl0eSA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPiAwID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgY29uc3QgY2xlYXJCdXR0b24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuXG4gICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7dmlzaWJpbGl0eTogY2xlYXJCdXR0b25WaXNpYmlsaXR5fSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2hhbmRsZUtleURvd24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5uYXZpZ2F0ZVVzaW5nS2V5Ym9hcmQoZXZlbnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9oYW5kbGVGb2N1c0luKCkge1xuICAgIHRoaXMuX3Nob3coKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfaGFuZGxlQmx1ckluKCkge1xuICAgIHRoaXMuX2hpZGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfaGFuZGxlTW91c2VEb3duKCkge1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5oaWdobGlnaHRSb3coMCk7XG4gIH1cblxuICBnZXRDb29yZHMoZWxlbTogYW55KTogYW55IHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGJveDogQ2xpZW50UmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBib2R5OiBhbnkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgY29uc3QgZG9jRWw6IGFueSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgY29uc3Qgc2Nyb2xsVG9wOiBudW1iZXIgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdDogbnVtYmVyID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgICBjb25zdCBjbGllbnRUb3A6IG51bWJlciA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICAgICAgY29uc3QgY2xpZW50TGVmdDogbnVtYmVyID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgY29uc3QgdG9wOiBudW1iZXIgPSBib3gudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wO1xuICAgICAgY29uc3QgbGVmdDogbnVtYmVyID0gYm94LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdDtcblxuICAgICAgcmV0dXJuIHt0b3A6IE1hdGgucm91bmQodG9wKSwgbGVmdDogTWF0aC5yb3VuZChsZWZ0KX07XG4gICAgfVxuICB9XG5cblxuICBwcml2YXRlIF9pc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMubWRiQXV0b0NvbXBsZXRlci5pc09wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3coKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnNob3coKTtcbiAgICB0aGlzLl9hcHBlbmREcm9wZG93blRvSW5wdXQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hpZGUoKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmhpZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERyb3Bkb3duVG9JbnB1dCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbjogQ2xpZW50UmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gWydoZWlnaHQnLCAncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnbWFyZ2luLXRvcCcsICdtYXJnaW4tYm90dG9tJ11cbiAgICAgIC5tYXAoKGtleSkgPT4gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShrZXkpLCAxMCkpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYgKyBjdXIpO1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnBhcmFtZXRlcnMgPSB7XG4gICAgICBsZWZ0OiB0aGlzLmdldENvb3JkcyhlbCkubGVmdCxcbiAgICAgIHRvcDogdGhpcy5nZXRDb29yZHMoZWwpLnRvcCArIGhlaWdodCxcbiAgICAgIHdpZHRoOiBwb3NpdGlvbi53aWR0aCxcbiAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0IC0gaGVpZ2h0IC0gdGhpcy5nZXRDb29yZHMoZWwpLnRvcCxcbiAgICAgIGlucHV0SGVpZ2h0OiBoZWlnaHRcbiAgICB9O1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmFwcGVuZERyb3Bkb3duKHtcbiAgICAgIGxlZnQ6IHRoaXMuZ2V0Q29vcmRzKGVsKS5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLmdldENvb3JkcyhlbCkudG9wICsgaGVpZ2h0LFxuICAgICAgd2lkdGg6IHBvc2l0aW9uLndpZHRoLFxuICAgICAgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBoZWlnaHQgLSB0aGlzLmdldENvb3JkcyhlbCkudG9wXG4gICAgfSk7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpLnN1YnNjcmliZSgoaXRlbTogSVNlbGVjdGVkT3B0aW9uKSA9PiB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBpdGVtLnRleHQ7XG4gICAgICBjb25zdCBjbGVhckJ1dHRvblZpc2liaWxpdHkgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoID4gMCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgICAgY29uc3QgY2xlYXJCdXR0b24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7dmlzaWJpbGl0eTogY2xlYXJCdXR0b25WaXNpYmlsaXR5fSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuaXNEcm9wZG93bk9wZW4oKS5zdWJzY3JpYmUoKHN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5fYXBwZW5kRHJvcGRvd25Ub0lucHV0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cblxuICAgIGlmICh0aGlzLm1kYkF1dG9Db21wbGV0ZXIuY2xlYXJCdXR0b24gJiYgdGhpcy5pc0Jyb3dzZXIpIHtcblxuICAgICAgdGhpcy5fcmVuZGVyQ2xlYXJCdXR0b24oKTtcbiAgICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kYi1hdXRvY29tcGxldGUtY2xlYXInKVswXTtcblxuICAgICAgdGhpcy5fY2xlYXJCdXR0b24gPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGItYXV0b2NvbXBsZXRlLWNsZWFyJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgIFsnY2xpY2snLCAna2V5ZG93bjpzcGFjZScsICdrZXlkb3duOmVudGVyJ10uZm9yRWFjaChldmVudCA9PiB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgZXZlbnQsICgpID0+IHtcbiAgICAgICAgICB0aGlzLl9jbGVhcklucHV0KCk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIsIDEuMiknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICcyMDBtcydcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIsIDEuMiknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICcyMDBtcydcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjAsIDEuMCknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICcyMDBtcydcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdibHVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjAsIDEuMCknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICcyMDBtcydcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShjbGVhckJ1dHRvbiwgJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4ge1xuICAgICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9jbGVhckJ1dHRvbiwgJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXMub2JzZXJ2ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgICB9KTtcblxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzKSB7XG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1cblxufVxuIl19