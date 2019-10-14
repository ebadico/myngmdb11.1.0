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
        this._canOpenOnFocus = true;
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
        this._handleKeyDown(event);
        /** @type {?} */
        const isTabKey = event.keyCode === 9;
        if (isTabKey) {
            this._hide();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    _handleInput(event) {
        if (!this._isOpen()) {
            this._show();
        }
        this._onChange(event.target.value);
        this.mdbAutoCompleter.removeHighlight(0);
        this.mdbAutoCompleter.highlightRow(0);
        /** @type {?} */
        const clearButtonVisibility = event.target.value.length > 0 ? 'visible' : 'hidden';
        if (this.mdbAutoCompleter.clearButton) {
            /** @type {?} */
            const clearButton = this.el.nativeElement.parentElement.lastElementChild;
            this._setStyles(clearButton, { visibility: clearButtonVisibility });
        }
    }
    /**
     * @return {?}
     */
    _handleFocusIn() {
        if (!this._canOpenOnFocus) {
            this._canOpenOnFocus = true;
        }
        else {
            this._show();
        }
    }
    /*
    fix(completer): Resolve problem with closing autocompleter dropdown
    when not neccessary (eg. clicking on button which is not an mdb-option.
    Without calling this _hide() method, autocompleter dropdown won't close
    after switching focus programmatically to another element.
    */
    /**
     * @return {?}
     */
    _handleBlurIn() {
        this._canOpenOnFocus = this.document.activeElement !== this.el.nativeElement;
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
     * @return {?}
     */
    clear() {
        this._clearInput();
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
        setTimeout((/**
         * @return {?}
         */
        () => {
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
        }), 0);
        this.listenFunc = this.renderer.listen('document', 'click', (/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (this.mdbAutoCompleter.dropdown &&
                !this.mdbAutoCompleter.dropdown.nativeElement.contains((/** @type {?} */ (event.target))) &&
                !this.el.nativeElement.contains((/** @type {?} */ (event.target)))) {
                this._hide();
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _hide() {
        this.mdbAutoCompleter.hide();
        this.listenFunc();
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
            /** @type {?} */
            const displayedValue = this.mdbAutoCompleter && this.mdbAutoCompleter.displayValue
                ? this.mdbAutoCompleter.displayValue(item.text)
                : item.text;
            this.el.nativeElement.value = displayedValue;
            this._onChange(item.text);
            /** @type {?} */
            const clearButtonVisibility = this.el.nativeElement.value.length > 0 ? 'visible' : 'hidden';
            /** @type {?} */
            const clearButton = this.el.nativeElement.parentElement.lastElementChild;
            this._setStyles(clearButton, { visibility: clearButtonVisibility });
            if (item) {
                this._canOpenOnFocus = false;
                this.el.nativeElement.focus();
                this._hide();
            }
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
        if (this.listenFunc) {
            this.listenFunc();
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
    _handleInput: [{ type: HostListener, args: ['input', ['$event'],] }],
    _handleFocusIn: [{ type: HostListener, args: ['focusin',] }],
    _handleBlurIn: [{ type: HostListener, args: ['blur',] }],
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
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterDirective.prototype._canOpenOnFocus;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvZGlyZWN0aXZlcy9tZGItYXV0by1jb21wbGV0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV6RSxNQUFNLE9BQU8sK0JBQStCLEdBQVE7SUFDbEQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVU7OztJQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixFQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ1o7QUFjRCxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBa0VwQyxZQUNVLFFBQW1CLEVBQ25CLEVBQWMsRUFDRCxVQUFrQixFQUNiLFFBQWE7UUFIL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBRUksYUFBUSxHQUFSLFFBQVEsQ0FBSztRQXBFL0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUk1QyxvQkFBZSxHQUFHLElBQUksQ0FB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QUE2Qjs7SUFDN0IsK0NBQXFCOztJQUNyQiw4Q0FBbUI7O0lBc1RuQiw4Q0FBMkM7O0lBRTNDLCtDQUFzQjs7Ozs7SUEvUHBCLDZDQUEyQjs7Ozs7SUFDM0IsdUNBQXNCOzs7OztJQUV0Qiw2Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1kYkF1dG9Db21wbGV0ZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL21kYi1hdXRvLWNvbXBsZXRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSVNlbGVjdGVkT3B0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWxlY3RlZC1vcHRpb24uaW50ZXJmYWNlJztcblxuaW1wb3J0IHsgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyLCBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBNQVRfQVVUT0NPTVBMRVRFX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZVxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNZGJBdXRvQ29tcGxldGVyRGlyZWN0aXZlKSxcbiAgbXVsdGk6IHRydWUsXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFttZGJBdXRvQ29tcGxldGVyXSwgdGV4dGFyZWFbbWRiQXV0b0NvbXBsZXRlcl0nLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgJyhpbnB1dCknOiAnX2hhbmRsZUlucHV0KCRldmVudCknLFxuICAgICcoZm9jdXNpbiknOiAnX2hhbmRsZUZvY3VzSW4oKScsXG4gICAgJyhibHVyKSc6ICdfaGFuZGxlQmx1ckluKCknLFxuICAgICcobW91c2Vkb3duKSc6ICdfaGFuZGxlTW91c2VEb3duKCknLFxuICB9LFxuICBleHBvcnRBczogJ21kYkF1dG9Db21wbGV0ZXJUcmlnZ2VyJyxcbiAgcHJvdmlkZXJzOiBbTUFUX0FVVE9DT01QTEVURV9WQUxVRV9BQ0NFU1NPUl0sXG59KVxuZXhwb3J0IGNsYXNzIE1kYkF1dG9Db21wbGV0ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgbWRiQXV0b0NvbXBsZXRlcjogTWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudDtcbiAgQE91dHB1dCgpIG5nTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNsZWFyQnRuQ2xpY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXM6IE11dGF0aW9uT2JzZXJ2ZXI7XG4gIHByaXZhdGUgX2NsZWFyQnV0dG9uOiBhbnk7XG4gIHByaXZhdGUgX2Nhbk9wZW5PbkZvY3VzID0gdHJ1ZTtcbiAgbGlzdGVuVG9DbGVhckNsaWNrOiBGdW5jdGlvbjtcbiAgbGlzdGVuRnVuYzogRnVuY3Rpb247XG4gIGlzQnJvd3NlcjogYm9vbGVhbjtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9oYW5kbGVLZXlEb3duKGV2ZW50KTtcbiAgICBjb25zdCBpc1RhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IDk7XG4gICAgaWYgKGlzVGFiS2V5KSB7XG4gICAgICB0aGlzLl9oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxuICBfaGFuZGxlSW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5faXNPcGVuKCkpIHtcbiAgICAgIHRoaXMuX3Nob3coKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnJlbW92ZUhpZ2hsaWdodCgwKTtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuaGlnaGxpZ2h0Um93KDApO1xuXG4gICAgY29uc3QgY2xlYXJCdXR0b25WaXNpYmlsaXR5ID0gZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDAgPyAndmlzaWJsZScgOiAnaGlkZGVuJztcbiAgICBpZiAodGhpcy5tZGJBdXRvQ29tcGxldGVyLmNsZWFyQnV0dG9uKSB7XG4gICAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwgeyB2aXNpYmlsaXR5OiBjbGVhckJ1dHRvblZpc2liaWxpdHkgfSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNpbicpXG4gIF9oYW5kbGVGb2N1c0luKCkge1xuICAgIGlmICghdGhpcy5fY2FuT3Blbk9uRm9jdXMpIHtcbiAgICAgIHRoaXMuX2Nhbk9wZW5PbkZvY3VzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2hvdygpO1xuICAgIH1cbiAgfVxuICAvKlxuZml4KGNvbXBsZXRlcik6IFJlc29sdmUgcHJvYmxlbSB3aXRoIGNsb3NpbmcgYXV0b2NvbXBsZXRlciBkcm9wZG93blxud2hlbiBub3QgbmVjY2Vzc2FyeSAoZWcuIGNsaWNraW5nIG9uIGJ1dHRvbiB3aGljaCBpcyBub3QgYW4gbWRiLW9wdGlvbi5cbldpdGhvdXQgY2FsbGluZyB0aGlzIF9oaWRlKCkgbWV0aG9kLCBhdXRvY29tcGxldGVyIGRyb3Bkb3duIHdvbid0IGNsb3NlXG5hZnRlciBzd2l0Y2hpbmcgZm9jdXMgcHJvZ3JhbW1hdGljYWxseSB0byBhbm90aGVyIGVsZW1lbnQuXG4qL1xuICBASG9zdExpc3RlbmVyKCdibHVyJylcbiAgX2hhbmRsZUJsdXJJbigpIHtcbiAgICB0aGlzLl9jYW5PcGVuT25Gb2N1cyA9IHRoaXMuZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuXG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nKVxuICBoYW5kbGVNb3VzZURvd24oKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmhpZ2hsaWdodFJvdygwKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldENsb3Nlc3RFbChlbDogYW55LCBzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgZm9yICg7IGVsICYmIGVsICE9PSBkb2N1bWVudDsgZWwgPSBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBpZiAoZWwubWF0Y2hlcyAmJiBlbC5tYXRjaGVzKHNlbGVjdG9yKSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVuZGVyQ2xlYXJCdXR0b24oKSB7XG4gICAgY29uc3QgZWwgPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgdGhpcy5fc2V0U3R5bGVzKGVsLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzI1JScsXG4gICAgICByaWdodDogJzAnLFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgfSk7XG5cbiAgICB0aGlzLl9hZGRDbGFzcyhlbCwgWydtZGItYXV0b2NvbXBsZXRlLWNsZWFyJywgJ2ZhJywgJ2ZhLXRpbWVzJ10pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICd0eXBlJywgJ2J1dHRvbicpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgZWwsXG4gICAgICAndGFiaW5kZXgnLFxuICAgICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmNsZWFyQnV0dG9uVGFiSW5kZXgudG9TdHJpbmcoKVxuICAgICk7XG4gICAgdGhpcy5saXN0ZW5Ub0NsZWFyQ2xpY2sgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbCwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhckJ0bkNsaWNrZWQuZW1pdCgpO1xuICAgICAgdGhpcy5fb25DaGFuZ2UoJycpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLl9nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1kLWZvcm0nKSB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudCwgZWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3NldFN0eWxlcyh0YXJnZXQ6IEVsZW1lbnRSZWYsIHN0eWxlczogYW55KSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChwcm9wOiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGFyZ2V0LCBwcm9wLCBzdHlsZXNbcHJvcF0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBfYWRkQ2xhc3ModGFyZ2V0OiBFbGVtZW50UmVmLCBuYW1lOiBzdHJpbmdbXSkge1xuICAgIG5hbWUuZm9yRWFjaCgoZWw6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0YXJnZXQsIGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NsZWFySW5wdXQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5uZ01vZGVsQ2hhbmdlLmVtaXQoJycpO1xuICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHsgdmlzaWJpbGl0eTogJ2hpZGRlbicgfSk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgdGhpcy5fY2xlYXJJbnB1dCgpO1xuICB9XG4gIHB1YmxpYyBfaGFuZGxlS2V5RG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLm5hdmlnYXRlVXNpbmdLZXlib2FyZChldmVudCk7XG4gIH1cblxuICBnZXRDb29yZHMoZWxlbTogYW55KTogYW55IHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGJveDogQ2xpZW50UmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBib2R5OiBhbnkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgY29uc3QgZG9jRWw6IGFueSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgY29uc3Qgc2Nyb2xsVG9wOiBudW1iZXIgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgc2Nyb2xsTGVmdDogbnVtYmVyID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQgfHwgYm9keS5zY3JvbGxMZWZ0O1xuXG4gICAgICBjb25zdCBjbGllbnRUb3A6IG51bWJlciA9IGRvY0VsLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwO1xuICAgICAgY29uc3QgY2xpZW50TGVmdDogbnVtYmVyID0gZG9jRWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgY29uc3QgdG9wOiBudW1iZXIgPSBib3gudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wO1xuICAgICAgY29uc3QgbGVmdDogbnVtYmVyID0gYm94LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdDtcblxuICAgICAgcmV0dXJuIHsgdG9wOiBNYXRoLnJvdW5kKHRvcCksIGxlZnQ6IE1hdGgucm91bmQobGVmdCkgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMubWRiQXV0b0NvbXBsZXRlci5pc09wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3coKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnNob3coKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1kYkF1dG9Db21wbGV0ZXIuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIGlmICh0aGlzLl9nZXRDbG9zZXN0RWwodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnLm1vZGFsLWJvZHknKSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm1kYkF1dG9Db21wbGV0ZXIuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ3otaW5kZXgnLCAnMTEwMCcpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMCk7XG5cbiAgICB0aGlzLmxpc3RlbkZ1bmMgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbignZG9jdW1lbnQnLCAnY2xpY2snLCBldmVudCA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5kcm9wZG93biAmJlxuICAgICAgICAhdGhpcy5tZGJBdXRvQ29tcGxldGVyLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSAmJlxuICAgICAgICAhdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgICkge1xuICAgICAgICB0aGlzLl9oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9oaWRlKCkge1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5oaWRlKCk7XG4gICAgdGhpcy5saXN0ZW5GdW5jKCk7XG4gIH1cblxuICBwcml2YXRlIF9hcHBlbmREcm9wZG93blRvSW5wdXQoKSB7XG4gICAgY29uc3QgcG9zaXRpb246IENsaWVudFJlY3QgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIGNvbnN0IGhlaWdodCA9IFsnaGVpZ2h0JywgJ3BhZGRpbmctdG9wJywgJ3BhZGRpbmctYm90dG9tJywgJ21hcmdpbi10b3AnLCAnbWFyZ2luLWJvdHRvbSddXG4gICAgICAubWFwKGtleSA9PiBwYXJzZUludChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKGtleSksIDEwKSlcbiAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cikgPT4gcHJldiArIGN1cik7XG5cbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIucGFyYW1ldGVycyA9IHtcbiAgICAgIGxlZnQ6IHRoaXMuZ2V0Q29vcmRzKGVsKS5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLmdldENvb3JkcyhlbCkudG9wICsgaGVpZ2h0LFxuICAgICAgd2lkdGg6IHBvc2l0aW9uLndpZHRoLFxuICAgICAgYm90dG9tOiB3aW5kb3cuaW5uZXJIZWlnaHQgLSBoZWlnaHQgLSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgICBpbnB1dEhlaWdodDogaGVpZ2h0LFxuICAgIH07XG5cbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuYXBwZW5kRHJvcGRvd24oe1xuICAgICAgbGVmdDogdGhpcy5nZXRDb29yZHMoZWwpLmxlZnQsXG4gICAgICB0b3A6IHRoaXMuZ2V0Q29vcmRzKGVsKS50b3AgKyBoZWlnaHQsXG4gICAgICB3aWR0aDogcG9zaXRpb24ud2lkdGgsXG4gICAgICBib3R0b206IHdpbmRvdy5pbm5lckhlaWdodCAtIGhlaWdodCAtIHRoaXMuZ2V0Q29vcmRzKGVsKS50b3AsXG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKS5zdWJzY3JpYmUoKGl0ZW06IElTZWxlY3RlZE9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGlzcGxheWVkVmFsdWUgPVxuICAgICAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIgJiYgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmRpc3BsYXlWYWx1ZVxuICAgICAgICAgID8gdGhpcy5tZGJBdXRvQ29tcGxldGVyLmRpc3BsYXlWYWx1ZShpdGVtLnRleHQpXG4gICAgICAgICAgOiBpdGVtLnRleHQ7XG5cbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IGRpc3BsYXllZFZhbHVlO1xuICAgICAgdGhpcy5fb25DaGFuZ2UoaXRlbS50ZXh0KTtcbiAgICAgIGNvbnN0IGNsZWFyQnV0dG9uVmlzaWJpbGl0eSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggPiAwID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHsgdmlzaWJpbGl0eTogY2xlYXJCdXR0b25WaXNpYmlsaXR5IH0pO1xuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLl9jYW5PcGVuT25Gb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5faGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmlzRHJvcGRvd25PcGVuKCkuc3Vic2NyaWJlKChzdGF0ZTogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuX2FwcGVuZERyb3Bkb3duVG9JbnB1dCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubWRiQXV0b0NvbXBsZXRlci5jbGVhckJ1dHRvbiAmJiB0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5fcmVuZGVyQ2xlYXJCdXR0b24oKTtcbiAgICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgJy5tZGItYXV0b2NvbXBsZXRlLWNsZWFyJ1xuICAgICAgKVswXTtcblxuICAgICAgdGhpcy5fY2xlYXJCdXR0b24gPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGItYXV0b2NvbXBsZXRlLWNsZWFyJyk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCAnZm9jdXMnLCAoKSA9PiB7XG4gICAgICAgIFsnY2xpY2snLCAna2V5ZG93bjpzcGFjZScsICdrZXlkb3duOmVudGVyJ10uZm9yRWFjaChldmVudCA9PlxuICAgICAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCBldmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJJbnB1dCgpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4yLCAxLjIpJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnMjAwbXMnLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9jbGVhcklucHV0KCk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIsIDEuMiknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICcyMDBtcycsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCAnbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wLCAxLjApJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnMjAwbXMnLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMCwgMS4wKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShjbGVhckJ1dHRvbiwgJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4ge1xuICAgICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnZGlzYWJsZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9jbGVhckJ1dHRvbiwgJ2Rpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXMub2JzZXJ2ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXMpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXMuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmxpc3RlblRvQ2xlYXJDbGljaykge1xuICAgICAgdGhpcy5saXN0ZW5Ub0NsZWFyQ2xpY2soKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGlzdGVuRnVuYykge1xuICAgICAgdGhpcy5saXN0ZW5GdW5jKCk7XG4gICAgfVxuICB9XG5cbiAgX29uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gIF9vblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbigoKSA9PiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWUpKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19