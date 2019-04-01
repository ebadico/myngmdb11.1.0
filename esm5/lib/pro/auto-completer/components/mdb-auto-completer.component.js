/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ElementRef, EventEmitter, HostListener, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, } from '@angular/core';
import { MdbOptionComponent } from './mdb-option.component';
import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { document } from '../../../free/utils/facade/browser';
var MdbAutoCompleterComponent = /** @class */ (function () {
    function MdbAutoCompleterComponent(renderer, el, platformId) {
        this.renderer = renderer;
        this.el = el;
        this.clearButton = true;
        this.clearButtonTabIndex = 0;
        this.select = new EventEmitter();
        this._isDropdownOpen = new Subject();
        this._allItems = [];
        this._isOpen = false;
        this._selectedItemIndex = -1;
        this._selectedItemChanged = new Subject();
        this._isBrowser = false;
        this._isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.onItemClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var selectedElement = (/** @type {?} */ ({}));
        this.mdbOptions.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            if (el.clicked === true) {
                selectedElement = el;
            }
            el.clicked = false;
        }));
        if (event.target !== this.dropdown.nativeElement) {
            this.setSelectedItem({ text: selectedElement.value, element: selectedElement });
            this.highlightRow(0);
            this.select.emit({ text: selectedElement.value, element: selectedElement });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.windowMouseDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.dropdown && event.target !== this.dropdown.nativeElement) {
            this.hide();
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.setSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this._selectedItem = item;
        this._selectedItemChanged.next(this.getSelectedItem());
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.getSelectedItem = /**
     * @return {?}
     */
    function () {
        return this._selectedItem;
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.selectedItemChanged = /**
     * @return {?}
     */
    function () {
        return this._selectedItemChanged;
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.isOpen = /**
     * @return {?}
     */
    function () {
        return this._isOpen;
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.disabled) {
            this._isOpen = true;
            this._isDropdownOpen.next(this.isOpen());
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.dropdown && !_this.appendToBody) {
                /** @type {?} */
                var top_1 = _this.dropdown.nativeElement.clientHeight > _this.parameters.bottom ?
                    "-" + (_this.dropdown.nativeElement.clientHeight - _this.parameters.inputHeight) :
                    _this.parameters.inputHeight + 3;
                _this.renderer.setStyle(_this.dropdown.nativeElement, 'top', top_1 + 'px');
                _this.renderer.setStyle(_this.dropdown.nativeElement, 'left', 0 + 'px');
                _this.renderer.setStyle(_this.dropdown.nativeElement, 'width', _this.parameters.width + 'px');
            }
        }), 0);
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this._isOpen = false;
            this._isDropdownOpen.next(this.isOpen());
        }
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.isDropdownOpen = /**
     * @return {?}
     */
    function () {
        return this._isDropdownOpen;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.removeHighlight = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            function (el, i) {
                /** @type {?} */
                var completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (i === index) {
                    _this.renderer.addClass(el.nativeElement.firstElementChild, 'highlight-row');
                }
                else if (i !== index) {
                    completerRow.forEach((/**
                     * @param {?} elem
                     * @return {?}
                     */
                    function (elem) {
                        _this.renderer.removeClass(elem, 'highlight-row');
                    }));
                }
            }));
        }), 0);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.highlightRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        this._allItems = this.optionList
            .filter((/**
         * @param {?} el
         * @return {?}
         */
        function (el) { return el.nativeElement.firstElementChild.classList.contains('completer-row'); }))
            .map((/**
         * @param {?} elem
         * @return {?}
         */
        function (elem) { return elem.nativeElement; }));
        if (this._allItems[index]) {
            this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            function (el, i) {
                /** @type {?} */
                var completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (index === i) {
                    _this.removeHighlight(index);
                    _this.renderer.addClass(completerRow[completerRow.length - 1], 'highlight-row');
                }
            }));
        }
        this._selectedItemIndex = index;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.navigateUsingKeyboard = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (this.dropdown) {
            switch (event.key) {
                case 'ArrowDown':
                    this.moveHighlightedIntoView(event.key);
                    if (!this.isOpen()) {
                        this.show();
                    }
                    if (this._selectedItemIndex + 1 <= this._allItems.length - 1) {
                        this.highlightRow(++this._selectedItemIndex);
                    }
                    else if (this._selectedItemIndex + 1 === this._allItems.length) {
                        this.highlightRow(0);
                    }
                    if (this._selectedItemIndex === 0) {
                        this.highlightRow(0);
                    }
                    /** @type {?} */
                    var selectedElement = this.mdbOptions.find((/**
                     * @param {?} el
                     * @param {?} index
                     * @return {?}
                     */
                    function (el, index) { return el && index === _this._selectedItemIndex; }));
                    if (selectedElement) {
                        this.select.emit({ text: selectedElement.value, element: selectedElement });
                    }
                    break;
                case 'ArrowUp':
                    this.moveHighlightedIntoView(event.key);
                    if (this._selectedItemIndex === -1 || this._selectedItemIndex === 0) {
                        /** @type {?} */
                        var lastItemIndex = this.mdbOptions.length;
                        this.highlightRow(lastItemIndex);
                    }
                    this.highlightRow(--this._selectedItemIndex);
                    /** @type {?} */
                    var selectedItem = this.mdbOptions.find((/**
                     * @param {?} el
                     * @param {?} index
                     * @return {?}
                     */
                    function (el, index) { return el && index === _this._selectedItemIndex; }));
                    this.select.emit({ text: selectedItem.value, element: selectedItem });
                    break;
                case 'Escape':
                    this.hide();
                    break;
                case 'Enter':
                    /** @type {?} */
                    var selectedOption = this.mdbOptions.map((/**
                     * @param {?} el
                     * @return {?}
                     */
                    function (el) { return el; }))[this._selectedItemIndex];
                    if (selectedOption) {
                        this.setSelectedItem({ text: selectedOption.value, element: selectedOption });
                        this.select.emit({ text: selectedOption.value, element: selectedOption });
                    }
                    this.hide();
                    break;
            }
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.moveHighlightedIntoView = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var listHeight = 0;
        /** @type {?} */
        var itemIndex = this._selectedItemIndex;
        this.optionList.forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            listHeight += el.nativeElement.offsetHeight;
        }));
        if (itemIndex > -1) {
            /** @type {?} */
            var itemHeight_1 = 0;
            this.optionList.forEach((/**
             * @param {?} el
             * @param {?} i
             * @return {?}
             */
            function (el, i) {
                if (i === itemIndex + 1) {
                    itemHeight_1 = el.nativeElement.firstElementChild.clientHeight;
                }
            }));
            /** @type {?} */
            var itemTop = (itemIndex + 1) * itemHeight_1;
            /** @type {?} */
            var viewTop = this.dropdown.nativeElement.scrollTop;
            /** @type {?} */
            var viewBottom = viewTop + listHeight;
            if (type === 'ArrowDown') {
                this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemTop - itemHeight_1);
            }
            else if (type === 'ArrowUp') {
                if (itemIndex === 0) {
                    itemIndex = this.optionList.length - 1;
                }
                else {
                    itemIndex--;
                }
                if (itemIndex === this._allItems.length - 2) {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', viewBottom - itemHeight_1);
                }
                else {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemIndex * itemHeight_1);
                }
            }
        }
    };
    /**
     * @param {?} parameters
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.updatePosition = /**
     * @param {?} parameters
     * @return {?}
     */
    function (parameters) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.dropdown) {
                /** @type {?} */
                var top_2 = _this.dropdown.nativeElement.clientHeight > parameters.bottom ?
                    parameters.top - _this.dropdown.nativeElement.clientHeight :
                    parameters.top;
                _this.renderer.setStyle(_this.dropdown.nativeElement, 'top', top_2 + 'px');
                _this.renderer.setStyle(_this.dropdown.nativeElement, 'left', parameters.left + 'px');
                _this.renderer.setStyle(_this.dropdown.nativeElement, 'width', parameters.width + 'px');
            }
        }), 0);
    };
    /**
     * @param {?} parameters
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.appendDropdown = /**
     * @param {?} parameters
     * @return {?}
     */
    function (parameters) {
        if (this._isBrowser && this.appendToBody) {
            /** @type {?} */
            var body = document.querySelector('body');
            /** @type {?} */
            var dropdown = this.el.nativeElement;
            if (body) {
                this.renderer.appendChild(body, dropdown);
                this.updatePosition(parameters);
            }
        }
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.highlightRow(0);
    };
    MdbAutoCompleterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-auto-completer',
                    template: "<div class=\"completer-dropdown-holder\" *ngIf=\"isOpen()\">\n  <div class=\"completer-dropdown\" #dropdown [ngStyle]=\"{'pointer-events': optionList.length === 0 ? 'none': 'auto'}\">\n    <div class=\"completer-row-wrapper\">\n      <div *ngIf=\"textNoResults && optionList.length === 0 \" class=\"completer-no-results\" #noResults>{{textNoResults}}</div>\n      <ng-content #content></ng-content>\n    </div>\n  </div>\n</div>\n",
                    exportAs: 'mdbAutoCompleter'
                }] }
    ];
    /** @nocollapse */
    MdbAutoCompleterComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef },
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    MdbAutoCompleterComponent.propDecorators = {
        textNoResults: [{ type: Input }],
        clearButton: [{ type: Input }],
        clearButtonTabIndex: [{ type: Input }],
        appendToBody: [{ type: Input }],
        disabled: [{ type: Input }],
        select: [{ type: Output }],
        optionList: [{ type: ContentChildren, args: [MdbOptionComponent, { descendants: true, read: ElementRef },] }],
        mdbOptions: [{ type: ContentChildren, args: [MdbOptionComponent, { descendants: true, read: MdbOptionComponent },] }],
        dropdown: [{ type: ViewChild, args: ['dropdown',] }],
        noResultsEl: [{ type: ViewChild, args: ['noResults',] }],
        onItemClick: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
        windowMouseDown: [{ type: HostListener, args: ['window:mousedown', ['$event'],] }]
    };
    return MdbAutoCompleterComponent;
}());
export { MdbAutoCompleterComponent };
if (false) {
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.textNoResults;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.clearButton;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.clearButtonTabIndex;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.appendToBody;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.disabled;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.select;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.optionList;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.mdbOptions;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.dropdown;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.noResultsEl;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.parameters;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._isDropdownOpen;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._allItems;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._isOpen;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._selectedItemIndex;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._selectedItem;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._selectedItemChanged;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype._isBrowser;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbAutoCompleterComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvY29tcG9uZW50cy9tZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQUUsWUFBWSxFQUN4QixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFBRSxNQUFNLEVBQ2IsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUN6QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFFNUQ7SUFpQ0UsbUNBQ1UsUUFBbUIsRUFDbkIsRUFBYyxFQUNELFVBQWtCO1FBRi9CLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQTNCZixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQix3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFJdkIsV0FBTSxHQUFpRCxJQUFJLFlBQVksRUFBa0MsQ0FBQztRQVc1RyxvQkFBZSxHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBRW5ELGNBQVMsR0FBZSxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQix1QkFBa0IsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV4Qix5QkFBb0IsR0FBaUIsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN4RCxlQUFVLEdBQUcsS0FBSyxDQUFDO1FB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LEFBM1FELElBMlFDO1NBclFZLHlCQUF5Qjs7O0lBQ3BDLGtEQUErQjs7SUFDL0IsZ0RBQTRCOztJQUM1Qix3REFBaUM7O0lBQ2pDLGlEQUErQjs7SUFDL0IsNkNBQTJCOztJQUUzQiwyQ0FBb0g7O0lBR3BILCtDQUFtRzs7SUFDbkcsK0NBQXFIOztJQUVySCw2Q0FBNEM7O0lBQzVDLGdEQUFnRDs7SUFFaEQsK0NBQXFHOzs7OztJQUVyRyxvREFBMkQ7Ozs7O0lBRTNELDhDQUFtQzs7Ozs7SUFDbkMsNENBQXdCOzs7OztJQUN4Qix1REFBZ0M7Ozs7O0lBQ2hDLGtEQUF1Qzs7Ozs7SUFDdkMseURBQWdFOzs7OztJQUNoRSwrQ0FBMkI7Ozs7O0lBR3pCLDZDQUEyQjs7Ozs7SUFDM0IsdUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LCBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01kYk9wdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9tZGItb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQge0lTZWxlY3RlZE9wdGlvbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zZWxlY3RlZC1vcHRpb24uaW50ZXJmYWNlJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2lzUGxhdGZvcm1Ccm93c2VyfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtkb2N1bWVudH0gZnJvbSAnLi4vLi4vLi4vZnJlZS91dGlscy9mYWNhZGUvYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1hdXRvLWNvbXBsZXRlcicsXG4gIHRlbXBsYXRlVXJsOiAnbWRiLWF1dG8tY29tcGxldGVyLmNvbXBvbmVudC5odG1sJyxcbiAgZXhwb3J0QXM6ICdtZGJBdXRvQ29tcGxldGVyJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZGJBdXRvQ29tcGxldGVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBJbnB1dCgpIHRleHROb1Jlc3VsdHM6IHN0cmluZztcbiAgQElucHV0KCkgY2xlYXJCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKSBjbGVhckJ1dHRvblRhYkluZGV4ID0gMDtcbiAgQElucHV0KCkgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgc2VsZWN0OiBFdmVudEVtaXR0ZXI8eyB0ZXh0OiBzdHJpbmcsIGVsZW1lbnQ6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8eyB0ZXh0OiBzdHJpbmcsIGVsZW1lbnQ6IGFueSB9PigpO1xuXG5cbiAgQENvbnRlbnRDaGlsZHJlbihNZGJPcHRpb25Db21wb25lbnQsIHtkZXNjZW5kYW50czogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZn0pIG9wdGlvbkxpc3Q6IEFycmF5PGFueT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTWRiT3B0aW9uQ29tcG9uZW50LCB7ZGVzY2VuZGFudHM6IHRydWUsIHJlYWQ6IE1kYk9wdGlvbkNvbXBvbmVudH0pIG1kYk9wdGlvbnM6IE1kYk9wdGlvbkNvbXBvbmVudFtdO1xuXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duJykgZHJvcGRvd246IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ25vUmVzdWx0cycpIG5vUmVzdWx0c0VsOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBwYXJhbWV0ZXJzOiB7IGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCBpbnB1dEhlaWdodDogbnVtYmVyIH07XG5cbiAgcHJpdmF0ZSBfaXNEcm9wZG93bk9wZW46IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBwcml2YXRlIF9hbGxJdGVtczogQXJyYXk8YW55PiA9IFtdO1xuICBwcml2YXRlIF9pc09wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtSW5kZXggPSAtMTtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtOiBJU2VsZWN0ZWRPcHRpb247XG4gIHByaXZhdGUgX3NlbGVjdGVkSXRlbUNoYW5nZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBfaXNCcm93c2VyID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKSBvbkl0ZW1DbGljayhldmVudDogYW55KSB7XG4gICAgbGV0IHNlbGVjdGVkRWxlbWVudDogTWRiT3B0aW9uQ29tcG9uZW50ID0gPE1kYk9wdGlvbkNvbXBvbmVudD57fTtcblxuICAgIHRoaXMubWRiT3B0aW9ucy5mb3JFYWNoKChlbDogTWRiT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICBpZiAoZWwuY2xpY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBzZWxlY3RlZEVsZW1lbnQgPSBlbDtcbiAgICAgIH1cbiAgICAgIGVsLmNsaWNrZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmIChldmVudC50YXJnZXQgIT09IHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW0oe3RleHQ6IHNlbGVjdGVkRWxlbWVudC52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRFbGVtZW50fSk7XG4gICAgICB0aGlzLmhpZ2hsaWdodFJvdygwKTtcbiAgICAgIHRoaXMuc2VsZWN0LmVtaXQoe3RleHQ6IHNlbGVjdGVkRWxlbWVudC52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRFbGVtZW50fSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93Om1vdXNlZG93bicsIFsnJGV2ZW50J10pIHdpbmRvd01vdXNlRG93bihldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuZHJvcGRvd24gJiYgZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRTZWxlY3RlZEl0ZW0oaXRlbTogSVNlbGVjdGVkT3B0aW9uKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtID0gaXRlbTtcbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1DaGFuZ2VkLm5leHQodGhpcy5nZXRTZWxlY3RlZEl0ZW0oKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2VsZWN0ZWRJdGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW07XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0ZWRJdGVtQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEl0ZW1DaGFuZ2VkO1xuICB9XG5cbiAgcHVibGljIGlzT3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICB9XG5cbiAgcHVibGljIHNob3coKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5faXNEcm9wZG93bk9wZW4ubmV4dCh0aGlzLmlzT3BlbigpKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5kcm9wZG93biAmJiAhdGhpcy5hcHBlbmRUb0JvZHkpIHtcbiAgICAgICAgY29uc3QgdG9wID1cbiAgICAgICAgICB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gdGhpcy5wYXJhbWV0ZXJzLmJvdHRvbSA/XG4gICAgICAgICAgICBgLSR7dGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCAtIHRoaXMucGFyYW1ldGVycy5pbnB1dEhlaWdodH1gIDpcbiAgICAgICAgICAgIHRoaXMucGFyYW1ldGVycy5pbnB1dEhlaWdodCArIDM7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAndG9wJywgdG9wICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIDAgKyAncHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHRoaXMucGFyYW1ldGVycy53aWR0aCArICdweCcpO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgcHVibGljIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuX2lzRHJvcGRvd25PcGVuLm5leHQodGhpcy5pc09wZW4oKSk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgaXNEcm9wZG93bk9wZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faXNEcm9wZG93bk9wZW47XG4gIH1cblxuICByZW1vdmVIaWdobGlnaHQoaW5kZXg6IG51bWJlcikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKGVsOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjb21wbGV0ZXJSb3cgPSBlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZXItcm93Jyk7XG4gICAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hpZ2hsaWdodC1yb3cnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgIGNvbXBsZXRlclJvdy5mb3JFYWNoKChlbGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbSwgJ2hpZ2hsaWdodC1yb3cnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBoaWdobGlnaHRSb3coaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuX2FsbEl0ZW1zID0gdGhpcy5vcHRpb25MaXN0XG4gICAgICAuZmlsdGVyKGVsID0+IGVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZXItcm93JykpXG4gICAgICAubWFwKGVsZW0gPT4gZWxlbS5uYXRpdmVFbGVtZW50KTtcblxuICAgIGlmICh0aGlzLl9hbGxJdGVtc1tpbmRleF0pIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKChlbDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY29tcGxldGVyUm93ID0gZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGVyLXJvdycpO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KGluZGV4KTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNvbXBsZXRlclJvd1tjb21wbGV0ZXJSb3cubGVuZ3RoIC0gMV0sICdoaWdobGlnaHQtcm93Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCA9IGluZGV4O1xuICB9XG5cbiAgbmF2aWdhdGVVc2luZ0tleWJvYXJkKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5kcm9wZG93bikge1xuICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICB0aGlzLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KGV2ZW50LmtleSk7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCArIDEgPD0gdGhpcy5fYWxsSXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3coKyt0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCArIDEgPT09IHRoaXMuX2FsbEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3coMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJvdygwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnQ6IGFueSA9IHRoaXMubWRiT3B0aW9ucy5maW5kKChlbDogYW55LCBpbmRleDogbnVtYmVyKSA9PiBlbCAmJiBpbmRleCA9PT0gdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXgpO1xuICAgICAgICAgIGlmIChzZWxlY3RlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0LmVtaXQoe3RleHQ6IHNlbGVjdGVkRWxlbWVudC52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRFbGVtZW50fSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuXG4gICAgICAgICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldyhldmVudC5rZXkpO1xuICAgICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCA9PT0gLTEgfHwgdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJdGVtSW5kZXggPSB0aGlzLm1kYk9wdGlvbnMubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3cobGFzdEl0ZW1JbmRleCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0Um93KC0tdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXgpO1xuXG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtOiBhbnkgPSB0aGlzLm1kYk9wdGlvbnMuZmluZCgoZWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gZWwgJiYgaW5kZXggPT09IHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4KTtcbiAgICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KHt0ZXh0OiBzZWxlY3RlZEl0ZW0udmFsdWUsIGVsZW1lbnQ6IHNlbGVjdGVkSXRlbX0pO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMubWRiT3B0aW9ucy5tYXAoZWwgPT4gZWwpW3RoaXMuX3NlbGVjdGVkSXRlbUluZGV4XTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtKHt0ZXh0OiBzZWxlY3RlZE9wdGlvbi52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRPcHRpb259KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0LmVtaXQoe3RleHQ6IHNlbGVjdGVkT3B0aW9uLnZhbHVlLCBlbGVtZW50OiBzZWxlY3RlZE9wdGlvbn0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgbW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcodHlwZTogc3RyaW5nKSB7XG4gICAgbGV0IGxpc3RIZWlnaHQgPSAwO1xuICAgIGxldCBpdGVtSW5kZXggPSB0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleDtcblxuICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICBsaXN0SGVpZ2h0ICs9IGVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH0pO1xuXG4gICAgaWYgKGl0ZW1JbmRleCA+IC0xKSB7XG4gICAgICBsZXQgaXRlbUhlaWdodCA9IDA7XG5cbiAgICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKChlbDogRWxlbWVudFJlZiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChpID09PSBpdGVtSW5kZXggKyAxKSB7XG4gICAgICAgICAgaXRlbUhlaWdodCA9IGVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaXRlbVRvcCA9IChpdGVtSW5kZXggKyAxKSAqIGl0ZW1IZWlnaHQ7XG4gICAgICBjb25zdCB2aWV3VG9wID0gdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IHZpZXdCb3R0b20gPSB2aWV3VG9wICsgbGlzdEhlaWdodDtcblxuICAgICAgaWYgKHR5cGUgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsVG9wJywgaXRlbVRvcCAtIGl0ZW1IZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgICAgIGl0ZW1JbmRleCA9IHRoaXMub3B0aW9uTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1JbmRleC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gdGhpcy5fYWxsSXRlbXMubGVuZ3RoIC0gMikge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsVG9wJywgdmlld0JvdHRvbSAtIGl0ZW1IZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsVG9wJywgaXRlbUluZGV4ICogaXRlbUhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVQb3NpdGlvbihwYXJhbWV0ZXJzOiB7IGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGJvdHRvbTogbnVtYmVyIH0pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duKSB7XG4gICAgICAgIGNvbnN0IHRvcCA9XG4gICAgICAgICAgdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA+IHBhcmFtZXRlcnMuYm90dG9tID9cbiAgICAgICAgICAgIHBhcmFtZXRlcnMudG9wIC0gdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodCA6XG4gICAgICAgICAgICBwYXJhbWV0ZXJzLnRvcDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB0b3AgKyAncHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgcGFyYW1ldGVycy5sZWZ0ICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBwYXJhbWV0ZXJzLndpZHRoICsgJ3B4Jyk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBwdWJsaWMgYXBwZW5kRHJvcGRvd24ocGFyYW1ldGVyczogeyBsZWZ0OiBhbnksIHRvcDogYW55LCB3aWR0aDogYW55LCBib3R0b206IG51bWJlciB9KSB7XG4gICAgaWYgKHRoaXMuX2lzQnJvd3NlciAmJiB0aGlzLmFwcGVuZFRvQm9keSkge1xuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuXG4gICAgICBpZiAoYm9keSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKGJvZHksIGRyb3Bkb3duKTtcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihwYXJhbWV0ZXJzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5oaWdobGlnaHRSb3coMCk7XG4gIH1cbn1cbiJdfQ==