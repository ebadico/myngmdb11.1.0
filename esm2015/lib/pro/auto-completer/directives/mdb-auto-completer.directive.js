/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Inject, Input, Output, Renderer2 } from '@angular/core';
import { MdbAutoCompleterComponent } from '../components/mdb-auto-completer.component';
import { DOCUMENT } from '@angular/platform-browser';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
        this.isBrowser = isPlatformBrowser(platformId);
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
            visibility: 'hidden'
        });
        this._addClass(el, ['mdb-autocomplete-clear', 'fa', 'fa-times']);
        this.renderer.setAttribute(el, 'type', 'button');
        this.renderer.setAttribute(el, 'tabindex', this.mdbAutoCompleter.clearButtonTabIndex.toString());
        if (this.isBrowser) {
            /** @type {?} */
            const parent = this.el.nativeElement.offsetParent || this.el.nativeElement.parentElement;
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
        Object.keys(styles).forEach((prop) => {
            (/** @type {?} */ (this)).renderer.setStyle(target, prop, styles[prop]);
        });
        return (/** @type {?} */ (this));
    }
    /**
     * @private
     * @param {?} target
     * @param {?} name
     * @return {?}
     */
    _addClass(target, name) {
        name.forEach((el) => {
            this.renderer.addClass(target, el);
        });
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
     * @protected
     * @param {?} event
     * @return {?}
     */
    _handleInput(event) {
        if (!this._isOpen()) {
            this._show();
        }
        this.mdbAutoCompleter.removeHighlight(0);
        this.mdbAutoCompleter.highlightRow(0);
        /** @type {?} */
        const clearButtonVisibility = event.target.value.length > 0 ? 'visible' : 'hidden';
        /** @type {?} */
        const clearButton = this.el.nativeElement.parentElement.lastElementChild;
        this._setStyles(clearButton, { visibility: clearButtonVisibility });
    }
    /**
     * @protected
     * @param {?} event
     * @return {?}
     */
    _handleKeyDown(event) {
        this.mdbAutoCompleter.navigateUsingKeyboard(event);
    }
    /**
     * @protected
     * @return {?}
     */
    _handleFocusIn() {
        this._show();
    }
    /**
     * @protected
     * @return {?}
     */
    _handleBlurIn() {
        this._hide();
    }
    /**
     * @protected
     * @return {?}
     */
    _handleMouseDown() {
        this.mdbAutoCompleter.highlightRow(0);
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
    }
    /**
     * @private
     * @return {?}
     */
    _hide() {
        this.mdbAutoCompleter.hide();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.mdbAutoCompleter.selectedItemChanged().subscribe((item) => {
            this.el.nativeElement.value = item.text;
            /** @type {?} */
            const clearButtonVisibility = this.el.nativeElement.value.length > 0 ? 'visible' : 'hidden';
            this._setStyles(this._clearButton, { visibility: clearButtonVisibility });
        });
        if (this.mdbAutoCompleter.clearButton && this.isBrowser) {
            this._renderClearButton();
            /** @type {?} */
            const clearButton = this.el.nativeElement.parentElement.querySelectorAll('.mdb-autocomplete-clear')[0];
            this._clearButton = this.document.querySelector('.mdb-autocomplete-clear');
            this.renderer.listen(clearButton, 'focus', () => {
                ['click', 'keydown:space', 'keydown:enter'].forEach(event => this.renderer.listen(clearButton, event, () => {
                    this._clearInput();
                }));
                this._setStyles(clearButton, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms'
                });
            });
            this.renderer.listen(clearButton, 'mouseenter', () => {
                this._setStyles(clearButton, {
                    transform: 'scale(1.2, 1.2)',
                    transition: '200ms'
                });
            });
            this.renderer.listen(clearButton, 'mouseleave', () => {
                this._setStyles(clearButton, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms'
                });
            });
            this.renderer.listen(clearButton, 'blur', () => {
                this._setStyles(clearButton, {
                    transform: 'scale(1.0, 1.0)',
                    transition: '200ms'
                });
            });
            if (this.el.nativeElement.disabled) {
                this.renderer.setAttribute(clearButton, 'disabled', 'true');
            }
            this._autocompleterInputChanges = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === 'disabled') {
                        this.renderer.setAttribute(this._clearButton, 'disabled', 'true');
                    }
                });
            });
            this._autocompleterInputChanges.observe(this.el.nativeElement, {
                attributes: true,
                childList: true,
                characterData: true
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
    }
}
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
MdbAutoCompleterDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
MdbAutoCompleterDirective.propDecorators = {
    mdbAutoCompleter: [{ type: Input }],
    ngModelChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvZGlyZWN0aXZlcy9tZGItYXV0by1jb21wbGV0ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUduRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBY25ELE1BQU0sT0FBTyx5QkFBeUI7Ozs7Ozs7SUFRcEMsWUFDVSxRQUFtQixFQUNuQixFQUFjLEVBQ0QsVUFBa0IsRUFDYixRQUFhO1FBSC9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUVJLGFBQVEsR0FBUixRQUFRLENBQUs7UUFWL0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBVzlDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFTyxrQkFBa0I7O2NBQ2xCLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFFaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUU7WUFDbEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsR0FBRyxFQUFFLEtBQUs7WUFDVixLQUFLLEVBQUUs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akMsV0FBVyxFQUFFLHdCQUF3QjtvQkFDckMsV0FBVyxFQUFFLGtCQUFrQjtvQkFDL0IsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsYUFBYSxFQUFFLG9CQUFvQjtpQkFDcEM7Z0JBQ0QsUUFBUSxFQUFFLHlCQUF5QjthQUNwQzs7OztZQXBCQyxTQUFTO1lBTlQsVUFBVTt5Q0FzQ1AsTUFBTSxTQUFDLFdBQVc7NENBQ2xCLE1BQU0sU0FBQyxRQUFROzs7K0JBWGpCLEtBQUs7NEJBQ0wsTUFBTTs7OztJQURQLHFEQUFxRDs7SUFDckQsa0RBQWtEOzs7OztJQUVsRCwrREFBcUQ7Ozs7O0lBQ3JELGlEQUEwQjs7SUFDMUIsOENBQW1COzs7OztJQUdqQiw2Q0FBMkI7Ozs7O0lBQzNCLHVDQUFzQjs7Ozs7SUFFdEIsNkNBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01kYkF1dG9Db21wbGV0ZXJDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvbWRiLWF1dG8tY29tcGxldGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7SVNlbGVjdGVkT3B0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlbGVjdGVkLW9wdGlvbi5pbnRlcmZhY2UnO1xuXG5pbXBvcnQgeyBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnaW5wdXRbbWRiQXV0b0NvbXBsZXRlcl0sIHRleHRhcmVhW21kYkF1dG9Db21wbGV0ZXJdJyxcbiAgaG9zdDoge1xuICAgICcoaW5wdXQpJzogJ19oYW5kbGVJbnB1dCgkZXZlbnQpJyxcbiAgICAnKGtleWRvd24pJzogJ19oYW5kbGVLZXlEb3duKCRldmVudCknLFxuICAgICcoZm9jdXNpbiknOiAnX2hhbmRsZUZvY3VzSW4oKScsXG4gICAgJyhibHVyKSc6ICdfaGFuZGxlQmx1ckluKCknLFxuICAgICcobW91c2Vkb3duKSc6ICdfaGFuZGxlTW91c2VEb3duKCknXG4gIH0sXG4gIGV4cG9ydEFzOiAnbWRiQXV0b0NvbXBsZXRlclRyaWdnZXInLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJBdXRvQ29tcGxldGVyRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbWRiQXV0b0NvbXBsZXRlcjogTWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudDtcbiAgQE91dHB1dCgpIG5nTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIF9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzOiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIF9jbGVhckJ1dHRvbjogYW55O1xuICBpc0Jyb3dzZXI6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICAgICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbmRlckNsZWFyQnV0dG9uKCkge1xuICAgIGNvbnN0IGVsID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHRoaXMuX3NldFN0eWxlcyhlbCwge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6ICcyNSUnLFxuICAgICAgcmlnaHQ6ICcwJyxcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nXG4gICAgfSk7XG5cblxuICAgIHRoaXMuX2FkZENsYXNzKGVsLCBbJ21kYi1hdXRvY29tcGxldGUtY2xlYXInLCAnZmEnLCAnZmEtdGltZXMnXSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbCwgJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZWwsICd0YWJpbmRleCcsIHRoaXMubWRiQXV0b0NvbXBsZXRlci5jbGVhckJ1dHRvblRhYkluZGV4LnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnQsIGVsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRTdHlsZXModGFyZ2V0OiBFbGVtZW50UmVmLCBzdHlsZXM6IGFueSkge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgocHJvcDogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRhcmdldCwgcHJvcCwgc3R5bGVzW3Byb3BdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHByaXZhdGUgX2FkZENsYXNzKHRhcmdldDogRWxlbWVudFJlZiwgbmFtZTogc3RyaW5nW10pIHtcbiAgICBuYW1lLmZvckVhY2goKGVsOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGFyZ2V0LCBlbCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jbGVhcklucHV0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIHRoaXMubmdNb2RlbENoYW5nZS5lbWl0KCcnKTtcbiAgICBjb25zdCBjbGVhckJ1dHRvbiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7dmlzaWJpbGl0eTogJ2hpZGRlbid9KTtcbiAgfVxuXG5cbiAgcHJvdGVjdGVkIF9oYW5kbGVJbnB1dChldmVudDogYW55KSB7XG4gICAgaWYgKCF0aGlzLl9pc09wZW4oKSkge1xuICAgICAgdGhpcy5fc2hvdygpO1xuICAgIH1cblxuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5yZW1vdmVIaWdobGlnaHQoMCk7XG4gICAgdGhpcy5tZGJBdXRvQ29tcGxldGVyLmhpZ2hsaWdodFJvdygwKTtcblxuICAgIGNvbnN0IGNsZWFyQnV0dG9uVmlzaWJpbGl0eSA9IGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPiAwID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgY29uc3QgY2xlYXJCdXR0b24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuXG4gICAgdGhpcy5fc2V0U3R5bGVzKGNsZWFyQnV0dG9uLCB7dmlzaWJpbGl0eTogY2xlYXJCdXR0b25WaXNpYmlsaXR5fSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2hhbmRsZUtleURvd24oZXZlbnQ6IGFueSkge1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5uYXZpZ2F0ZVVzaW5nS2V5Ym9hcmQoZXZlbnQpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9oYW5kbGVGb2N1c0luKCkge1xuICAgIHRoaXMuX3Nob3coKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfaGFuZGxlQmx1ckluKCkge1xuICAgIHRoaXMuX2hpZGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfaGFuZGxlTW91c2VEb3duKCkge1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5oaWdobGlnaHRSb3coMCk7XG4gIH1cblxuXG4gIHByaXZhdGUgX2lzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5tZGJBdXRvQ29tcGxldGVyLmlzT3BlbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2hvdygpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuc2hvdygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZSgpIHtcbiAgICB0aGlzLm1kYkF1dG9Db21wbGV0ZXIuaGlkZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMubWRiQXV0b0NvbXBsZXRlci5zZWxlY3RlZEl0ZW1DaGFuZ2VkKCkuc3Vic2NyaWJlKChpdGVtOiBJU2VsZWN0ZWRPcHRpb24pID0+IHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZSA9IGl0ZW0udGV4dDtcbiAgICAgIGNvbnN0IGNsZWFyQnV0dG9uVmlzaWJpbGl0eSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggPiAwID8gJ3Zpc2libGUnIDogJ2hpZGRlbic7XG4gICAgICB0aGlzLl9zZXRTdHlsZXModGhpcy5fY2xlYXJCdXR0b24sIHt2aXNpYmlsaXR5OiBjbGVhckJ1dHRvblZpc2liaWxpdHl9KTtcbiAgICB9KTtcblxuXG4gICAgaWYgKHRoaXMubWRiQXV0b0NvbXBsZXRlci5jbGVhckJ1dHRvbiAmJiB0aGlzLmlzQnJvd3Nlcikge1xuXG4gICAgICB0aGlzLl9yZW5kZXJDbGVhckJ1dHRvbigpO1xuICAgICAgY29uc3QgY2xlYXJCdXR0b24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWRiLWF1dG9jb21wbGV0ZS1jbGVhcicpWzBdO1xuXG4gICAgICB0aGlzLl9jbGVhckJ1dHRvbiA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kYi1hdXRvY29tcGxldGUtY2xlYXInKTtcblxuICAgICAgdGhpcy5yZW5kZXJlci5saXN0ZW4oY2xlYXJCdXR0b24sICdmb2N1cycsICgpID0+IHtcbiAgICAgICAgWydjbGljaycsICdrZXlkb3duOnNwYWNlJywgJ2tleWRvd246ZW50ZXInXS5mb3JFYWNoKGV2ZW50ID0+IHRoaXMucmVuZGVyZXIubGlzdGVuKGNsZWFyQnV0dG9uLCBldmVudCwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2NsZWFySW5wdXQoKTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMiwgMS4yKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMiwgMS4yKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMCwgMS4wKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLmxpc3RlbihjbGVhckJ1dHRvbiwgJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldFN0eWxlcyhjbGVhckJ1dHRvbiwge1xuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuMCwgMS4wKScsXG4gICAgICAgICAgdHJhbnNpdGlvbjogJzIwMG1zJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGNsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9hdXRvY29tcGxldGVySW5wdXRDaGFuZ2VzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiB7XG4gICAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2NsZWFyQnV0dG9uLCAnZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fYXV0b2NvbXBsZXRlcklucHV0Q2hhbmdlcy5vYnNlcnZlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXMpIHtcbiAgICAgIHRoaXMuX2F1dG9jb21wbGV0ZXJJbnB1dENoYW5nZXMuZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=