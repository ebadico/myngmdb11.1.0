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
        this.utils = new Utils();
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
        const isTabKey = event.keyCode === TAB;
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
            const parent = this.utils.getClosestEl(this.el.nativeElement, '.md-form') || this.el.nativeElement;
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
        /** @type {?} */
        const key = event.keyCode;
        if (key !== ESCAPE && key !== ENTER && key !== TAB) {
            this.mdbAutoCompleter.show();
        }
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
                if (this.utils.getClosestEl(this.el.nativeElement, '.modal-body')) {
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
        this.mdbAutoCompleter.appendDropdown();
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
        this.mdbAutoCompleter.origin = this.el;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvZGlyZWN0aXZlcy9tZGItYXV0by1jb21wbGV0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHdkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFFN0UsTUFBTSxPQUFPLCtCQUErQixHQUFRO0lBQ2xELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNaO0FBY0QsTUFBTSxPQUFPLHlCQUF5Qjs7Ozs7OztJQXFFcEMsWUFDVSxRQUFtQixFQUNuQixFQUFjLEVBQ0QsVUFBa0IsRUFDYixRQUFhO1FBSC9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUVJLGFBQVEsR0FBUixRQUFRLENBQUs7UUF2RS9CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFJNUMsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFDdkIsVUFBSyxHQUFVLElBQUksS0FBSyxFQUFFLENBQUM7UUFzVG5DLGNBQVM7OztRQUF5QixHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUM7UUFFM0MsZUFBVTs7O1FBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxFQUFDO1FBclBwQixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBN0RELFNBQVMsQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7O2NBQ3JCLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxLQUFLLEdBQUc7UUFDdEMsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7O0lBR0QsWUFBWSxDQUFDLEtBQVU7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7O2NBRWhDLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUTtRQUNsRixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUU7O2tCQUMvQixXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQjtZQUV4RSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7O0lBR0QsY0FBYztRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzdCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtJQUNILENBQUM7Ozs7Ozs7Ozs7SUFTRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUU3RSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUdELGVBQWU7UUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBV08sa0JBQWtCOztjQUNsQixFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBRWhELElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsS0FBSyxFQUFFLEdBQUc7WUFDVixVQUFVLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLHdCQUF3QixFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQ3hCLEVBQUUsRUFDRixVQUFVLEVBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUNyRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPOzs7UUFBRSxHQUFHLEVBQUU7WUFDL0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztrQkFDWixNQUFNLEdBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhO1lBQ3JGLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7Ozs7OztJQUVPLFVBQVUsQ0FBQyxNQUFrQixFQUFFLE1BQVc7UUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUN4QyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVPLFNBQVMsQ0FBQyxNQUFrQixFQUFFLElBQWM7UUFDbEQsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEVBQVUsRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sV0FBVztRQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztjQUN0QixXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQjtRQUN4RSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU0sY0FBYyxDQUFDLEtBQVU7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDOztjQUM3QyxHQUFHLEdBQUcsS0FBSyxDQUFDLE9BQU87UUFFekIsSUFBSSxHQUFHLEtBQUssTUFBTSxJQUFJLEdBQUcsS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLEdBQUcsRUFBRTtZQUNsRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFTO1FBQ2pCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTs7a0JBQ1osR0FBRyxHQUFlLElBQUksQ0FBQyxxQkFBcUIsRUFBRTs7a0JBQzlDLElBQUksR0FBUSxRQUFRLENBQUMsSUFBSTs7a0JBQ3pCLEtBQUssR0FBUSxRQUFRLENBQUMsZUFBZTs7a0JBRXJDLFNBQVMsR0FBVyxNQUFNLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVM7O2tCQUMzRSxVQUFVLEdBQVcsTUFBTSxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVOztrQkFFOUUsU0FBUyxHQUFXLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDOztrQkFDMUQsVUFBVSxHQUFXLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDOztrQkFFN0QsR0FBRyxHQUFXLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLFNBQVM7O2tCQUM3QyxJQUFJLEdBQVcsR0FBRyxDQUFDLElBQUksR0FBRyxVQUFVLEdBQUcsVUFBVTtZQUV2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUN6RDtJQUNILENBQUM7Ozs7O0lBRU8sT0FBTztRQUNiLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU8sS0FBSztRQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM3QixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLEVBQUU7b0JBQ2pFLFVBQVU7OztvQkFBQyxHQUFHLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUMxRixDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ1A7YUFDRjtRQUNILENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztRQUVOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE9BQU87Ozs7UUFBRSxLQUFLLENBQUMsRUFBRTtZQUNsRSxJQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRO2dCQUM5QixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFlLENBQUM7Z0JBQ25GLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQWUsQ0FBQyxFQUM1RDtnQkFDQSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxLQUFLO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLHNCQUFzQjs7Y0FDdEIsUUFBUSxHQUFlLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFOztjQUNwRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztjQUMxQixLQUFLLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDOztjQUN0RCxNQUFNLEdBQUcsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7YUFDdEYsR0FBRzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBQzthQUNyRCxNQUFNOzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBQztRQUVwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxHQUFHO1lBQ2pDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUk7WUFDN0IsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU07WUFDcEMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO1lBQ3JCLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHO1lBQ3BFLFdBQVcsRUFBRSxNQUFNO1NBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFxQixFQUFFLEVBQUU7O2tCQUN4RSxjQUFjLEdBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWTtnQkFDekQsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDL0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJO1lBRWYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztZQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7a0JBQ3BCLHFCQUFxQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVE7O2tCQUNyRixXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQjtZQUN4RSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQVUsRUFBRSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7WUFFcEUsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUM5QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDZDtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBRXZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUNsRSxJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUMvQjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7O2tCQUNwQixXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUN0RSx5QkFBeUIsQ0FDMUIsQ0FBQyxDQUFDLENBQUM7WUFFSixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFFM0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE9BQU87OztZQUFFLEdBQUcsRUFBRTtnQkFDOUMsQ0FBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDMUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUs7OztnQkFBRSxHQUFHLEVBQUU7b0JBQzVDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckIsQ0FBQyxFQUFDLEVBQ0gsQ0FBQztnQkFFRixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtvQkFDM0IsU0FBUyxFQUFFLGlCQUFpQjtvQkFDNUIsVUFBVSxFQUFFLE9BQU87aUJBQ3BCLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE9BQU87OztZQUFFLEdBQUcsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JCLENBQUMsRUFBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFlBQVk7OztZQUFFLEdBQUcsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUU7b0JBQzNCLFNBQVMsRUFBRSxpQkFBaUI7b0JBQzVCLFVBQVUsRUFBRSxPQUFPO2lCQUNwQixDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxZQUFZOzs7WUFBRSxHQUFHLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO29CQUMzQixTQUFTLEVBQUUsaUJBQWlCO29CQUM1QixVQUFVLEVBQUUsT0FBTztpQkFDcEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsTUFBTTs7O1lBQUUsR0FBRyxFQUFFO2dCQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtvQkFDM0IsU0FBUyxFQUFFLGlCQUFpQjtvQkFDNUIsVUFBVSxFQUFFLE9BQU87aUJBQ3BCLENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1lBRUgsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDN0Q7WUFFRCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxnQkFBZ0I7Ozs7WUFBQyxDQUFDLFNBQTJCLEVBQUUsRUFBRTtnQkFDckYsU0FBUyxDQUFDLE9BQU87Ozs7Z0JBQUMsQ0FBQyxRQUF3QixFQUFFLEVBQUU7b0JBQzdDLElBQUksUUFBUSxDQUFDLGFBQWEsS0FBSyxVQUFVLEVBQUU7d0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUNuRTtnQkFDSCxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRTtnQkFDN0QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLFNBQVMsRUFBRSxJQUFJO2dCQUNmLGFBQWEsRUFBRSxJQUFJO2FBQ3BCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUNuQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDOUM7UUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMzQjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDOzs7OztJQU1ELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSTs7O1FBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQXNCO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBWTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7WUF4VkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxREFBcUQ7O2dCQUUvRCxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLHNCQUFzQjtvQkFDakMsV0FBVyxFQUFFLGtCQUFrQjtvQkFDL0IsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsYUFBYSxFQUFFLG9CQUFvQjtpQkFDcEM7Z0JBQ0QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7Ozs7WUEvQkMsU0FBUztZQU5ULFVBQVU7eUNBOEdQLE1BQU0sU0FBQyxXQUFXOzRDQUNsQixNQUFNLFNBQUMsUUFBUTs7OytCQXhFakIsS0FBSzs0QkFDTCxNQUFNOzhCQUNOLE1BQU07d0JBV04sWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQkFTbEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs2QkFtQmhDLFlBQVksU0FBQyxTQUFTOzRCQWV0QixZQUFZLFNBQUMsTUFBTTs4QkFPbkIsWUFBWSxTQUFDLFdBQVc7Ozs7SUEvRHpCLHFEQUFxRDs7SUFDckQsa0RBQWtEOztJQUNsRCxvREFBb0Q7Ozs7O0lBRXBELCtEQUFxRDs7Ozs7SUFDckQsaURBQTBCOzs7OztJQUMxQixvREFBK0I7Ozs7O0lBQy9CLDBDQUFtQzs7SUFFbkMsdURBQTZCOztJQUM3QiwrQ0FBcUI7O0lBQ3JCLDhDQUFtQjs7SUFrVG5CLDhDQUEyQzs7SUFFM0MsK0NBQXNCOzs7OztJQTFQcEIsNkNBQTJCOzs7OztJQUMzQix1Q0FBc0I7Ozs7O0lBRXRCLDZDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBmb3J3YXJkUmVmLFxuICBIb3N0TGlzdGVuZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWRiLWF1dG8tY29tcGxldGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU2VsZWN0ZWRPcHRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlbGVjdGVkLW9wdGlvbi5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIsIERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscyc7XG5pbXBvcnQgeyBUQUIsIEVTQ0FQRSwgRU5URVIgfSBmcm9tICcuLi8uLi8uLi9mcmVlL3V0aWxzL2tleWJvYXJkLW5hdmlnYXRpb24nO1xuXG5leHBvcnQgY29uc3QgTUFUX0FVVE9DT01QTEVURV9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmVcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWRiQXV0b0NvbXBsZXRlckRpcmVjdGl2ZSksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbWRiQXV0b0NvbXBsZXRlcl0sIHRleHRhcmVhW21kYkF1dG9Db21wbGV0ZXJdJyxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgaG9zdDoge1xuICAgICcoaW5wdXQpJzogJ19oYW5kbGVJbnB1dCgkZXZlbnQpJyxcbiAgICAnKGZvY3VzaW4pJzogJ19oYW5kbGVGb2N1c0luKCknLFxuICAgICcoYmx1ciknOiAnX2hhbmRsZUJsdXJJbigpJyxcbiAgICAnKG1vdXNlZG93biknOiAnX2hhbmRsZU1vdXNlRG93bigpJyxcbiAgfSxcbiAgZXhwb3J0QXM6ICdtZGJBdXRvQ29tcGxldGVyVHJpZ2dlcicsXG4gIHByb3ZpZGVyczogW01BVF9BVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJBdXRvQ29tcGxldGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIG1kYkF1dG9Db21wbGV0ZXI6IE1kYkF1dG9Db21wbGV0ZXJDb21wb25lbnQ7XG4gIEBPdXRwdXQoKSBuZ01vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjbGVhckJ0bkNsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIF9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzOiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIF9jbGVhckJ1dHRvbjogYW55O1xuICBwcml2YXRlIF9jYW5PcGVuT25Gb2N1cyA9IHRydWU7XG4gIHByaXZhdGUgdXRpbHM6IFV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgbGlzdGVuVG9DbGVhckNsaWNrOiBGdW5jdGlvbjtcbiAgbGlzdGVuRnVuYzogRnVuY3Rpb247XG4gIGlzQnJvd3NlcjogYm9vbGVhbjtcblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLl9oYW5kbGVLZXlEb3duKGV2ZW50KTtcbiAgICBjb25zdCBpc1RhYktleSA9IGV2ZW50LmtleUNvZGUgPT09IFRBQjtcbiAgICBpZiAoaXNUYWJLZXkpIHtcbiAgICAgIHRoaXMuX2hpZGUoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIF9oYW5kbGVJbnB1dChldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLl9pc09wZW4oKSkge1xuICAgICAgdGhpcy5fc2hvdygpO1xuICAgIH1cblxuICAgIHRoaXMuX29uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIucmVtb3ZlSGlnaGxpZ2h0KDApO1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5oaWdobGlnaHRSb3coMCk7XG5cbiAgICBjb25zdCBjbGVhckJ1dHRvblZpc2liaWxpdHkgPSBldmVudC50YXJnZXQudmFsdWUubGVuZ3RoID4gMCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nO1xuICAgIGlmICh0aGlzLm1kYkF1dG9Db21wbGV0ZXIuY2xlYXJCdXR0b24pIHtcbiAgICAgIGNvbnN0IGNsZWFyQnV0dG9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICAgICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7IHZpc2liaWxpdHk6IGNsZWFyQnV0dG9uVmlzaWJpbGl0eSB9KTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1c2luJylcbiAgX2hhbmRsZUZvY3VzSW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jYW5PcGVuT25Gb2N1cykge1xuICAgICAgdGhpcy5fY2FuT3Blbk9uRm9jdXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgLypcbmZpeChjb21wbGV0ZXIpOiBSZXNvbHZlIHByb2JsZW0gd2l0aCBjbG9zaW5nIGF1dG9jb21wbGV0ZXIgZHJvcGRvd25cbndoZW4gbm90IG5lY2Nlc3NhcnkgKGVnLiBjbGlja2luZyBvbiBidXR0b24gd2hpY2ggaXMgbm90IGFuIG1kYi1vcHRpb24uXG5XaXRob3V0IGNhbGxpbmcgdGhpcyBfaGlkZSgpIG1ldGhvZCwgYXV0b2NvbXBsZXRlciBkcm9wZG93biB3b24ndCBjbG9zZVxuYWZ0ZXIgc3dpdGNoaW5nIGZvY3VzIHByb2dyYW1tYXRpY2FsbHkgdG8gYW5vdGhlciBlbGVtZW50LlxuKi9cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIF9oYW5kbGVCbHVySW4oKSB7XG4gICAgdGhpcy5fY2FuT3Blbk9uRm9jdXMgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcblxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJylcbiAgaGFuZGxlTW91c2VEb3duKCkge1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5oaWdobGlnaHRSb3coMCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55XG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBwcml2YXRlIF9yZW5kZXJDbGVhckJ1dHRvbigpIHtcbiAgICBjb25zdCBlbCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0aGlzLl9zZXRTdHlsZXMoZWwsIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAnMjUlJyxcbiAgICAgIHJpZ2h0OiAnMCcsXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICB9KTtcblxuICAgIHRoaXMuX2FkZENsYXNzKGVsLCBbJ21kYi1hdXRvY29tcGxldGUtY2xlYXInLCAnZmEnLCAnZmEtdGltZXMnXSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICBlbCxcbiAgICAgICd0YWJpbmRleCcsXG4gICAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuY2xlYXJCdXR0b25UYWJJbmRleC50b1N0cmluZygpXG4gICAgKTtcbiAgICB0aGlzLmxpc3RlblRvQ2xlYXJDbGljayA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGVsLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyQnRuQ2xpY2tlZC5lbWl0KCk7XG4gICAgICB0aGlzLl9vbkNoYW5nZSgnJyk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9XG4gICAgICAgIHRoaXMudXRpbHMuZ2V0Q2xvc2VzdEVsKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy5tZC1mb3JtJykgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnQsIGVsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZXModGFyZ2V0OiBFbGVtZW50UmVmLCBzdHlsZXM6IGFueSkge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgocHJvcDogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhcmdldCwgcHJvcCwgc3R5bGVzW3Byb3BdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgX2FkZENsYXNzKHRhcmdldDogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nW10pIHtcbiAgICBuYW1lLmZvckVhY2goKGVsOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFyZ2V0LCBlbCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhcklucHV0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KCcnKTtcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7IHZpc2liaWxpdHk6ICdoaWRkZW4nIH0pO1xuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMuX2NsZWFySW5wdXQoKTtcbiAgfVxuXG4gIHB1YmxpYyBfaGFuZGxlS2V5RG93bihldmVudDogYW55KSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLm5hdmlnYXRlVXNpbmdLZXlib2FyZChldmVudCk7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQua2V5Q29kZTtcblxuICAgIGlmIChrZXkgIT09IEVTQ0FQRSAmJiBrZXkgIT09IEVOVEVSICYmIGtleSAhPT0gVEFCKSB7XG4gICAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIGdldENvb3JkcyhlbGVtOiBhbnkpOiBhbnkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgYm94OiBDbGllbnRSZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGJvZHk6IGFueSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICBjb25zdCBkb2NFbDogYW55ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICBjb25zdCBzY3JvbGxUb3A6IG51bWJlciA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3AgfHwgYm9keS5zY3JvbGxUb3A7XG4gICAgICBjb25zdCBzY3JvbGxMZWZ0OiBudW1iZXIgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWwuc2Nyb2xsTGVmdCB8fCBib2R5LnNjcm9sbExlZnQ7XG5cbiAgICAgIGNvbnN0IGNsaWVudFRvcDogbnVtYmVyID0gZG9jRWwuY2xpZW50VG9wIHx8IGJvZHkuY2xpZW50VG9wIHx8IDA7XG4gICAgICBjb25zdCBjbGllbnRMZWZ0OiBudW1iZXIgPSBkb2NFbC5jbGllbnRMZWZ0IHx8IGJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICBjb25zdCB0b3A6IG51bWJlciA9IGJveC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3A7XG4gICAgICBjb25zdCBsZWZ0OiBudW1iZXIgPSBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0O1xuXG4gICAgICByZXR1cm4geyB0b3A6IE1hdGgucm91bmQodG9wKSwgbGVmdDogTWF0aC5yb3VuZChsZWZ0KSB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2lzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5tZGJBdXRvQ29tcGxldGVyLmlzT3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvdygpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuc2hvdygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubWRiQXV0b0NvbXBsZXRlci5hcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgaWYgKHRoaXMudXRpbHMuZ2V0Q2xvc2VzdEVsKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJy5tb2RhbC1ib2R5JykpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5tZGJBdXRvQ29tcGxldGVyLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICd6LWluZGV4JywgJzExMDAnKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDApO1xuXG4gICAgdGhpcy5saXN0ZW5GdW5jID0gdGhpcy5yZW5kZXJlci5saXN0ZW4oJ2RvY3VtZW50JywgJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuZHJvcGRvd24gJiZcbiAgICAgICAgIXRoaXMubWRiQXV0b0NvbXBsZXRlci5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkgJiZcbiAgICAgICAgIXRoaXMuZWwubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5faGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZSgpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuaGlkZSgpO1xuICAgIHRoaXMubGlzdGVuRnVuYygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfYXBwZW5kRHJvcGRvd25Ub0lucHV0KCkge1xuICAgIGNvbnN0IHBvc2l0aW9uOiBDbGllbnRSZWN0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICBjb25zdCBoZWlnaHQgPSBbJ2hlaWdodCcsICdwYWRkaW5nLXRvcCcsICdwYWRkaW5nLWJvdHRvbScsICdtYXJnaW4tdG9wJywgJ21hcmdpbi1ib3R0b20nXVxuICAgICAgLm1hcChrZXkgPT4gcGFyc2VJbnQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShrZXkpLCAxMCkpXG4gICAgICAucmVkdWNlKChwcmV2LCBjdXIpID0+IHByZXYgKyBjdXIpO1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnBhcmFtZXRlcnMgPSB7XG4gICAgICBsZWZ0OiB0aGlzLmdldENvb3JkcyhlbCkubGVmdCxcbiAgICAgIHRvcDogdGhpcy5nZXRDb29yZHMoZWwpLnRvcCArIGhlaWdodCxcbiAgICAgIHdpZHRoOiBwb3NpdGlvbi53aWR0aCxcbiAgICAgIGJvdHRvbTogd2luZG93LmlubmVySGVpZ2h0IC0gaGVpZ2h0IC0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgaW5wdXRIZWlnaHQ6IGhlaWdodCxcbiAgICB9O1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmFwcGVuZERyb3Bkb3duKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLnNlbGVjdGVkSXRlbUNoYW5nZWQoKS5zdWJzY3JpYmUoKGl0ZW06IElTZWxlY3RlZE9wdGlvbikgPT4ge1xuICAgICAgY29uc3QgZGlzcGxheWVkVmFsdWUgPVxuICAgICAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIgJiYgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmRpc3BsYXlWYWx1ZVxuICAgICAgICAgID8gdGhpcy5tZGJBdXRvQ29tcGxldGVyLmRpc3BsYXlWYWx1ZShpdGVtLnRleHQpXG4gICAgICAgICAgOiBpdGVtLnRleHQ7XG5cbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IGRpc3BsYXllZFZhbHVlO1xuICAgICAgdGhpcy5fb25DaGFuZ2UoaXRlbS50ZXh0KTtcbiAgICAgIGNvbnN0IGNsZWFyQnV0dG9uVmlzaWJpbGl0eSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggPiAwID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHsgdmlzaWJpbGl0eTogY2xlYXJCdXR0b25WaXNpYmlsaXR5IH0pO1xuXG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICB0aGlzLl9jYW5PcGVuT25Gb2N1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgdGhpcy5faGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLm9yaWdpbiA9IHRoaXMuZWw7XG5cbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuaXNEcm9wZG93bk9wZW4oKS5zdWJzY3JpYmUoKHN0YXRlOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5fYXBwZW5kRHJvcGRvd25Ub0lucHV0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5tZGJBdXRvQ29tcGxldGVyLmNsZWFyQnV0dG9uICYmIHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLl9yZW5kZXJDbGVhckJ1dHRvbigpO1xuICAgICAgY29uc3QgY2xlYXJCdXR0b24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAnLm1kYi1hdXRvY29tcGxldGUtY2xlYXInXG4gICAgICApWzBdO1xuXG4gICAgICB0aGlzLl9jbGVhckJ1dHRvbiA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYi1hdXRvY29tcGxldGUtY2xlYXInKTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdmb2N1cycsICgpID0+IHtcbiAgICAgICAgWydjbGljaycsICdrZXlkb3duOnNwYWNlJywgJ2tleWRvd246ZW50ZXInXS5mb3JFYWNoKGV2ZW50ID0+XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sIGV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jbGVhcklucHV0KCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjIsIDEuMiknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICcyMDBtcycsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NsZWFySW5wdXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMiwgMS4yKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRTdHlsZXMoY2xlYXJCdXR0b24sIHtcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjAsIDEuMCknLFxuICAgICAgICAgIHRyYW5zaXRpb246ICcyMDBtcycsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCAnYmx1cicsICgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7XG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMS4wLCAxLjApJyxcbiAgICAgICAgICB0cmFuc2l0aW9uOiAnMjAwbXMnLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGNsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2NsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcy5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcykge1xuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcy5kaXNjb25uZWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGlzdGVuVG9DbGVhckNsaWNrKSB7XG4gICAgICB0aGlzLmxpc3RlblRvQ2xlYXJDbGljaygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5saXN0ZW5GdW5jKSB7XG4gICAgICB0aGlzLmxpc3RlbkZ1bmMoKTtcbiAgICB9XG4gIH1cblxuICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+ICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSkpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBhbnkpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSkge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG59XG4iXX0=