/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Inject, Input, Output, Renderer2, forwardRef, HostListener, } from '@angular/core';
import { MdbAutoCompleterComponent } from '../components/mdb-auto-completer.component';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export const MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => MdbAutoCompleterDirective)),
    multi: true,
};
export class MdbAutoCompleterDirective {
    /**
     * @param {?} renderer
     * @param {?} el
     * @param {?} platformId
     * @param {?} document
     */
    constructor(renderer, el, platformId, document) {
        this.renderer = renderer;
        this.el = el;
        this.document = document;
        this.ngModelChange = new EventEmitter();
        this.clearBtnClicked = new EventEmitter();
        this._onChange = (/**
         * @return {?}
         */
        () => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        /** @type {?} */
        const isTabKey = event.keyCode === 9;
        if (isTabKey) {
            this._hide();
        }
        this._handleKeyDown(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInput(event) {
        if (!this._isOpen()) {
            this._show();
        }
        this._onChange(event.target.value);
        this.mdbAutoCompleter.removeHighlight(0);
        this.mdbAutoCompleter.highlightRow(0);
        /** @type {?} */
        const clearButtonVisibility = event.target.value.length > 0 ? 'visible' : 'hidden';
        /** @type {?} */
        const clearButton = this.el.nativeElement.parentElement.lastElementChild;
        this._setStyles(clearButton, { visibility: clearButtonVisibility });
    }
    /**
     * @return {?}
     */
    handleFocusIn() {
        this._show();
    }
    /**
     * @return {?}
     */
    handleBlurIn() {
        this._onTouched();
    }
    /**
     * @return {?}
     */
    handleMouseDown() {
        this.mdbAutoCompleter.highlightRow(0);
    }
    /**
     * @private
     * @param {?} el
     * @param {?} selector
     * @return {?}
     */
    _getClosestEl(el, selector) {
        for (; el && el !== document; el = el.parentNode) {
            if (el.matches && el.matches(selector)) {
                return el;
            }
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    _renderClearButton() {
        /** @type {?} */
        const el = this.renderer.createElement('button');
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
        () => {
            this.clearBtnClicked.emit();
            this._onChange('');
        }));
        if (this.isBrowser) {
            /** @type {?} */
            const parent = this._getClosestEl(this.el.nativeElement, '.md-form') || this.el.nativeElement;
            this.renderer.appendChild(parent, el);
        }
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @param {?} target
     * @param {?} styles
     * @return {THIS}
     */
    _setStyles(target, styles) {
        Object.keys(styles).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        (prop) => {
            (/** @type {?} */ (this)).renderer.setStyle(target, prop, styles[prop]);
        }));
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    _addClass(target, name) {
        name.forEach((/**
         * @param {?} el
         * @return {?}
         */
        (el) => {
            this.renderer.addClass(target, el);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _clearInput() {
        this.el.nativeElement.value = '';
        this.ngModelChange.emit('');
        /** @type {?} */
        const clearButton = this.el.nativeElement.parentElement.lastElementChild;
        this._setStyles(clearButton, { visibility: 'hidden' });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _handleKeyDown(event) {
        this.mdbAutoCompleter.navigateUsingKeyboard(event);
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    getCoords(elem) {
        if (this.isBrowser) {
            /** @type {?} */
            const box = elem.getBoundingClientRect();
            /** @type {?} */
            const body = document.body;
            /** @type {?} */
            const docEl = document.documentElement;
            /** @type {?} */
            const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
            /** @type {?} */
            const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
            /** @type {?} */
            const clientTop = docEl.clientTop || body.clientTop || 0;
            /** @type {?} */
            const clientLeft = docEl.clientLeft || body.clientLeft || 0;
            /** @type {?} */
            const top = box.top + scrollTop - clientTop;
            /** @type {?} */
            const left = box.left + scrollLeft - clientLeft;
            return { top: Math.round(top), left: Math.round(left) };
        }
    }
    /**
     * @private
     * @return {?}
     */
    _isOpen() {
        return this.mdbAutoCompleter.isOpen();
    }
    /**
     * @private
     * @return {?}
     */
    _show() {
        this.mdbAutoCompleter.show();
        this._appendDropdownToInput();
        if (this.mdbAutoCompleter.appendToBody) {
            if (this._getClosestEl(this.el.nativeElement, '.modal-body')) {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.renderer.setStyle(this.mdbAutoCompleter.dropdown.nativeElement, 'z-index', '1100');
                }), 0);
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    _hide() {
        this.mdbAutoCompleter.hide();
    }
    /**
     * @private
     * @return {?}
     */
    _appendDropdownToInput() {
        /** @type {?} */
        const position = this.el.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const el = this.el.nativeElement;
        /** @type {?} */
        const style = window.getComputedStyle(this.el.nativeElement);
        /** @type {?} */
        const height = ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom']
            .map((/**
         * @param {?} key
         * @return {?}
         */
        key => parseInt(style.getPropertyValue(key), 10)))
            .reduce((/**
         * @param {?} prev
         * @param {?} cur
         * @return {?}
         */
        (prev, cur) => prev + cur));
        this.mdbAutoCompleter.parameters = {
            left: this.getCoords(el).left,
            top: this.getCoords(el).top + height,
            width: position.width,
            bottom: window.innerHeight - height - el.getBoundingClientRect().top,
            inputHeight: height,
        };
        this.mdbAutoCompleter.appendDropdown({
            left: this.getCoords(el).left,
            top: this.getCoords(el).top + height,
            width: position.width,
            bottom: window.innerHeight - height - this.getCoords(el).top,
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.mdbAutoCompleter.selectedItemChanged().subscribe((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            this.el.nativeElement.value = item.text;
            this._onChange(item.text);
            /** @type {?} */
            const clearButtonVisibility = this.el.nativeElement.value.length > 0 ? 'visible' : 'hidden';
            /** @type {?} */
            const clearButton = this.el.nativeElement.parentElement.lastElementChild;
            this._setStyles(clearButton, { visibility: clearButtonVisibility });
        }));
        this.mdbAutoCompleter.isDropdownOpen().subscribe((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            if (state) {
                this._appendDropdownToInput();
            }
        }));
        if (this.mdbAutoCompleter.clearButton && this.isBrowser) {
            this._renderClearButton();
            /** @type {?} */
            const clearButton = this.el.nativeElement.parentElement.querySelectorAll('.mdb-autocomplete-clear')[0];
            this._clearButton = this.document.querySelector('.mdb-autocomplete-clear');
            this.renderer.listen(clearButton, 'focus', (/**
             * @return {?}
             */
            () => {
                ['click', 'keydown:space', 'keydown:enter'].forEach((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => this.renderer.listen(clearButton, event, (/**
                 * @return {?}
                 */
                () => {
                    this._clearInput();
                }))));
                this._setStyles(clearButton, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms',
                });
            }));
            this.renderer.listen(clearButton, 'click', (/**
             * @return {?}
             */
            () => {
                this._clearInput();
            }));
            this.renderer.listen(clearButton, 'mouseenter', (/**
             * @return {?}
             */
            () => {
                this._setStyles(clearButton, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms',
                });
            }));
            this.renderer.listen(clearButton, 'mouseleave', (/**
             * @return {?}
             */
            () => {
                this._setStyles(clearButton, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms',
                });
            }));
            this.renderer.listen(clearButton, 'blur', (/**
             * @return {?}
             */
            () => {
                this._setStyles(clearButton, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms',
                });
            }));
            if (this.el.nativeElement.disabled) {
                this.renderer.setAttribute(clearButton, 'disabled', 'true');
            }
            this._autocompleterInputChanges = new MutationObserver((/**
             * @param {?} mutations
             * @return {?}
             */
            (mutations) => {
                mutations.forEach((/**
                 * @param {?} mutation
                 * @return {?}
                 */
                (mutation) => {
                    if (mutation.attributeName === 'disabled') {
                        this.renderer.setAttribute(this._clearButton, 'disabled', 'true');
                    }
                }));
            }));
            this._autocompleterInputChanges.observe(this.el.nativeElement, {
                attributes: true,
                childList: true,
                characterData: true,
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._autocompleterInputChanges) {
            this._autocompleterInputChanges.disconnect();
        }
        if (this.listenToClearClick) {
            this.listenToClearClick();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        Promise.resolve(null).then((/**
         * @return {?}
         */
        () => (this.el.nativeElement.value = value)));
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
}
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
MdbAutoCompleterDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
MdbAutoCompleterDirective.propDecorators = {
    mdbAutoCompleter: [{ type: Input }],
    ngModelChange: [{ type: Output }],
    clearBtnClicked: [{ type: Output }],
    onKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    handleInput: [{ type: HostListener, args: ['input', ['$event'],] }],
    handleFocusIn: [{ type: HostListener, args: ['focusin',] }],
    handleBlurIn: [{ type: HostListener, args: ['blur',] }],
    handleMouseDown: [{ type: HostListener, args: ['mousedown',] }]
};
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
    /** @type {?} */
    MdbAutoCompleterDirective.prototype.listenToClearClick;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvZGlyZWN0aXZlcy9tZGItYXV0by1jb21wbGV0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxNQUFNLE9BQU8sK0JBQStCLEdBQVE7SUFDbEQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixFQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFjRCxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBb0RwQyxZQUNVLFFBQW1CLEVBQ25CLEVBQWMsRUFDRCxVQUFrQixFQUNiLFFBQWE7UUFIL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRUksYUFBUSxHQUFSLFFBQVEsQ0FBSztRQXREL0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQW1ScEQsY0FBUzs7O1FBQXlCLEdBQUcs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QUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OztZQWhURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFEQUFxRDs7Z0JBRS9ELElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsc0JBQXNCO29CQUNqQyxXQUFXLEVBQUUsa0JBQWtCO29CQUMvQixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixhQUFhLEVBQUUsb0JBQW9CO2lCQUNwQztnQkFDRCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7OztZQTdCQyxTQUFTO1lBTlQsVUFBVTt5Q0EyRlAsTUFBTSxTQUFDLFdBQVc7NENBQ2xCLE1BQU0sU0FBQyxRQUFROzs7K0JBdkRqQixLQUFLOzRCQUNMLE1BQU07OEJBQ04sTUFBTTt3QkFPTixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQVVsQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQWlCaEMsWUFBWSxTQUFDLFNBQVM7MkJBS3RCLFlBQVksU0FBQyxNQUFNOzhCQUtuQixZQUFZLFNBQUMsV0FBVzs7OztJQTlDekIscURBQXFEOztJQUNyRCxrREFBa0Q7O0lBQ2xELG9EQUFvRDs7Ozs7SUFFcEQsK0RBQXFEOzs7OztJQUNyRCxpREFBMEI7O0lBQzFCLHVEQUE2Qjs7SUFDN0IsOENBQW1COztJQThRbkIsOENBQTJDOztJQUUzQywrQ0FBc0I7Ozs7O0lBbk9wQiw2Q0FBMkI7Ozs7O0lBQzNCLHVDQUFzQjs7Ozs7SUFFdEIsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZGJBdXRvQ29tcGxldGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElTZWxlY3RlZE9wdGlvbiB9IGZyb20gJy4uL2ludGVyZmFjZXMvc2VsZWN0ZWQtb3B0aW9uLmludGVyZmFjZSc7XG5cbmltcG9ydCB7IFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciwgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgTUFUX0FVVE9DT01QTEVURV9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmVcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWRiQXV0b0NvbXBsZXRlckRpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbWRiQXV0b0NvbXBsZXRlcl0sIHRleHRhcmVhW21kYkF1dG9Db21wbGV0ZXJdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgaG9zdDoge1xuICAgICcoaW5wdXQpJzogJ19oYW5kbGVJbnB1dCgkZXZlbnQpJyxcbiAgICAnKGZvY3VzaW4pJzogJ19oYW5kbGVGb2N1c0luKCknLFxuICAgICcoYmx1ciknOiAnX2hhbmRsZUJsdXJJbigpJyxcbiAgICAnKG1vdXNlZG93biknOiAnX2hhbmRsZU1vdXNlRG93bigpJyxcbiAgfSxcbiAgZXhwb3J0QXM6ICdtZGJBdXRvQ29tcGxldGVyVHJpZ2dlcicsXG4gIHByb3ZpZGVyczogW01BVF9BVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJBdXRvQ29tcGxldGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIG1kYkF1dG9Db21wbGV0ZXI6IE1kYkF1dG9Db21wbGV0ZXJDb21wb25lbnQ7XG4gIEBPdXRwdXQoKSBuZ01vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjbGVhckJ0bkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIF9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzOiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIF9jbGVhckJ1dHRvbjogYW55O1xuICBsaXN0ZW5Ub0NsZWFyQ2xpY2s6IEZ1bmN0aW9uO1xuICBpc0Jyb3dzZXI6IGJvb2xlYW47XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgY29uc3QgaXNUYWJLZXkgPSBldmVudC5rZXlDb2RlID09PSA5O1xuICAgIGlmIChpc1RhYktleSkge1xuICAgICAgdGhpcy5faGlkZSgpO1xuICAgIH1cblxuICAgIHRoaXMuX2hhbmRsZUtleURvd24oZXZlbnQpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICBoYW5kbGVJbnB1dChldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLl9pc09wZW4oKSkge1xuICAgICAgdGhpcy5fc2hvdygpO1xuICAgIH1cblxuICAgIHRoaXMuX29uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIucmVtb3ZlSGlnaGxpZ2h0KDApO1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5oaWdobGlnaHRSb3coMCk7XG5cbiAgICBjb25zdCBjbGVhckJ1dHRvblZpc2liaWxpdHkgPSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwgeyB2aXNpYmlsaXR5OiBjbGVhckJ1dHRvblZpc2liaWxpdHkgfSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c2luJylcbiAgaGFuZGxlRm9jdXNJbigpIHtcbiAgICB0aGlzLl9zaG93KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgaGFuZGxlQmx1ckluKCkge1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJylcbiAgaGFuZGxlTW91c2VEb3duKCkge1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5oaWdobGlnaHRSb3coMCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDbG9zZXN0RWwoZWw6IGFueSwgc2VsZWN0b3I6IHN0cmluZykge1xuICAgIGZvciAoOyBlbCAmJiBlbCAhPT0gZG9jdW1lbnQ7IGVsID0gZWwucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKGVsLm1hdGNoZXMgJiYgZWwubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbmRlckNsZWFyQnV0dG9uKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHRoaXMuX3NldFN0eWxlcyhlbCwge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6ICcyNSUnLFxuICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxuICAgIH0pO1xuXG4gICAgdGhpcy5fYWRkQ2xhc3MoZWwsIFsnbWRiLWF1dG9jb21wbGV0ZS1jbGVhcicsICdmYScsICdmYS10aW1lcyddKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsLCAndHlwZScsICdidXR0b24nKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIGVsLFxuICAgICAgJ3RhYmluZGV4JyxcbiAgICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5jbGVhckJ1dHRvblRhYkluZGV4LnRvU3RyaW5nKClcbiAgICApO1xuICAgIHRoaXMubGlzdGVuVG9DbGVhckNsaWNrID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oZWwsICdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuY2xlYXJCdG5DbGlja2VkLmVtaXQoKTtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKCcnKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy5fZ2V0Q2xvc2VzdEVsKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy5tZC1mb3JtJykgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnQsIGVsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZXModGFyZ2V0OiBFbGVtZW50UmVmLCBzdHlsZXM6IGFueSkge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgocHJvcDogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhcmdldCwgcHJvcCwgc3R5bGVzW3Byb3BdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgX2FkZENsYXNzKHRhcmdldDogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nW10pIHtcbiAgICBuYW1lLmZvckVhY2goKGVsOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFyZ2V0LCBlbCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhcklucHV0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KCcnKTtcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pO1xuICB9XG5cbiAgcHVibGljIF9oYW5kbGVLZXlEb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIubmF2aWdhdGVVc2luZ0tleWJvYXJkKGV2ZW50KTtcbiAgfVxuXG4gIGdldENvb3JkcyhlbGVtOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgYm94OiBDbGllbnRSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGJvZHk6IGFueSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICBjb25zdCBkb2NFbDogYW55ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3A6IG51bWJlciA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0OiBudW1iZXIgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgICAgIGNvbnN0IGNsaWVudFRvcDogbnVtYmVyID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgICBjb25zdCBjbGllbnRMZWZ0OiBudW1iZXIgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICBjb25zdCB0b3A6IG51bWJlciA9IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3A7XG4gICAgICBjb25zdCBsZWZ0OiBudW1iZXIgPSBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0O1xuXG4gICAgICByZXR1cm4geyB0b3A6IE1hdGgucm91bmQodG9wKSwgbGVmdDogTWF0aC5yb3VuZChsZWZ0KSB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5tZGJBdXRvQ29tcGxldGVyLmlzT3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvdygpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuc2hvdygpO1xuICAgIHRoaXMuX2FwcGVuZERyb3Bkb3duVG9JbnB1dCgpO1xuXG4gICAgaWYgKHRoaXMubWRiQXV0b0NvbXBsZXRlci5hcHBlbmRUb0JvZHkpIHtcbiAgICAgIGlmICh0aGlzLl9nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1vZGFsLWJvZHknKSkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMubWRiQXV0b0NvbXBsZXRlci5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsICcxMTAwJyk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hpZGUoKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmhpZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2FwcGVuZERyb3Bkb3duVG9JbnB1dCgpIHtcbiAgICBjb25zdCBwb3NpdGlvbjogQ2xpZW50UmVjdCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gWydoZWlnaHQnLCAncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnbWFyZ2luLXRvcCcsICdtYXJnaW4tYm90dG9tJ11cbiAgICAgIC5tYXAoa2V5ID0+IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoa2V5KSwgMTApKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2ICsgY3VyKTtcblxuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5wYXJhbWV0ZXJzID0ge1xuICAgICAgbGVmdDogdGhpcy5nZXRDb29yZHMoZWwpLmxlZnQsXG4gICAgICB0b3A6IHRoaXMuZ2V0Q29vcmRzKGVsKS50b3AgKyBoZWlnaHQsXG4gICAgICB3aWR0aDogcG9zaXRpb24ud2lkdGgsXG4gICAgICBib3R0b206IHdpbmRvdy5pbm5lckhlaWdodCAtIGhlaWdodCAtIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgIGlucHV0SGVpZ2h0OiBoZWlnaHQsXG4gICAgfTtcblxuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5hcHBlbmREcm9wZG93bih7XG4gICAgICBsZWZ0OiB0aGlzLmdldENvb3JkcyhlbCkubGVmdCxcbiAgICAgIHRvcDogdGhpcy5nZXRDb29yZHMoZWwpLnRvcCArIGhlaWdodCxcbiAgICAgIHdpZHRoOiBwb3NpdGlvbi53aWR0aCxcbiAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0IC0gaGVpZ2h0IC0gdGhpcy5nZXRDb29yZHMoZWwpLnRvcCxcbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpLnN1YnNjcmliZSgoaXRlbTogSVNlbGVjdGVkT3B0aW9uKSA9PiB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBpdGVtLnRleHQ7XG4gICAgICB0aGlzLl9vbkNoYW5nZShpdGVtLnRleHQpO1xuICAgICAgY29uc3QgY2xlYXJCdXR0b25WaXNpYmlsaXR5ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCA+IDAgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwgeyB2aXNpYmlsaXR5OiBjbGVhckJ1dHRvblZpc2liaWxpdHkgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuaXNEcm9wZG93bk9wZW4oKS5zdWJzY3JpYmUoKHN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5fYXBwZW5kRHJvcGRvd25Ub0lucHV0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5tZGJBdXRvQ29tcGxldGVyLmNsZWFyQnV0dG9uICYmIHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZW5kZXJDbGVhckJ1dHRvbigpO1xuICAgICAgY29uc3QgY2xlYXJCdXR0b24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAnLm1kYi1hdXRvY29tcGxldGUtY2xlYXInXG4gICAgICApWzBdO1xuXG4gICAgICB0aGlzLl9jbGVhckJ1dHRvbiA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYi1hdXRvY29tcGxldGUtY2xlYXInKTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdmb2N1cycsICgpID0+IHtcbiAgICAgICAgWydjbGljaycsICdrZXlkb3duOnNwYWNlJywgJ2tleWRvd246ZW50ZXInXS5mb3JFYWNoKGV2ZW50ID0+XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sIGV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jbGVhcklucHV0KCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIsIDEuMiknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICcyMDBtcycsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NsZWFySW5wdXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMiwgMS4yKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjAsIDEuMCknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICcyMDBtcycsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCAnYmx1cicsICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wLCAxLjApJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnMjAwbXMnLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGNsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2NsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcy5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcykge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGlzdGVuVG9DbGVhckNsaWNrKSB7XG4gICAgICB0aGlzLmxpc3RlblRvQ2xlYXJDbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIF9vbkNoYW5nZTogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcblxuICBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpLnRoZW4oKCkgPT4gKHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlKSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KSB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cbn1cbiJdfQ==