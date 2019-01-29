/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, ElementRef, HostListener, Input, Renderer2, ViewChild, } from '@angular/core';
import { MdbOptionComponent } from './mdb-option.component';
import { Subject } from 'rxjs';
var MdbAutoCompleterComponent = /** @class */ (function () {
    function MdbAutoCompleterComponent(renderer) {
        this.renderer = renderer;
        this.clearButton = true;
        this.clearButtonTabIndex = 0;
        this._allItems = [];
        this._isOpen = false;
        this._selectedItemIndex = -1;
        this._selectedItemChanged = new Subject();
    }
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.onItemClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selectedElement = (/** @type {?} */ ({}));
        this.mdbOptions.forEach(function (el) {
            if (el.clicked === true) {
                selectedElement = el;
            }
            el.clicked = false;
        });
        this.setSelectedItem({ text: selectedElement.value, element: selectedElement });
        this.highlightRow(0);
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
        this._isOpen = true;
    };
    /**
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        this._isOpen = false;
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
        setTimeout(function () {
            _this.optionList.forEach(function (el, i) {
                /** @type {?} */
                var completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (i === index) {
                    _this.renderer.addClass(el.nativeElement.firstElementChild, 'highlight-row');
                }
                else if (i !== index) {
                    completerRow.forEach(function (elem) {
                        _this.renderer.removeClass(elem, 'highlight-row');
                    });
                }
            });
        }, 0);
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
            .filter(function (el) { return el.nativeElement.firstElementChild.classList.contains('completer-row'); })
            .map(function (elem) { return elem.nativeElement; });
        if (this._allItems[index]) {
            this.optionList.forEach(function (el, i) {
                /** @type {?} */
                var completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (index === i) {
                    _this.removeHighlight(index);
                    _this.renderer.addClass(completerRow[completerRow.length - 1], 'highlight-row');
                }
            });
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
        switch (event.key) {
            case 'ArrowDown':
                this.moveHighlightedIntoView(event.key);
                if (!this.isOpen()) {
                    this.show();
                }
                if (this._selectedItemIndex === 0) {
                    this.highlightRow(0);
                }
                if (this._selectedItemIndex + 1 <= this._allItems.length - 1) {
                    this.highlightRow(++this._selectedItemIndex);
                }
                else if (this._selectedItemIndex + 1 === this._allItems.length) {
                    this.highlightRow(0);
                }
                break;
            case 'ArrowUp':
                this.moveHighlightedIntoView(event.key);
                if (this._selectedItemIndex === -1 || this._selectedItemIndex === 0) {
                    this.highlightRow(this._allItems.length);
                }
                this.highlightRow(--this._selectedItemIndex);
                break;
            case 'Escape':
                this.hide();
                break;
            case 'Enter':
                /** @type {?} */
                var selectedOption = this.mdbOptions.map(function (el) { return el; })[this._selectedItemIndex];
                if (selectedOption) {
                    this.setSelectedItem({ text: selectedOption.value, element: selectedOption });
                }
                this.hide();
                break;
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
        this.optionList.forEach(function (el) {
            listHeight += el.nativeElement.offsetHeight;
        });
        if (itemIndex > -1) {
            /** @type {?} */
            var item_1 = null;
            /** @type {?} */
            var itemHeight_1 = 0;
            this.optionList.forEach(function (el, i) {
                if (i === itemIndex + 1) {
                    item_1 = el.nativeElement;
                    itemHeight_1 = item_1.offsetHeight;
                }
            });
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
     * @return {?}
     */
    MdbAutoCompleterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.textNoResults) {
            this.textNoResults = 'No results found';
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
                    template: "<div class=\"completer-dropdown-holder\" *ngIf=\"isOpen()\">\n  <div class=\"completer-dropdown\" #dropdown>\n    <div class=\"completer-row-wrapper\">\n      <div *ngIf=\"optionList.length === 0 \" class=\"completer-no-results\">{{textNoResults}}</div>\n      <ng-content #content></ng-content>\n    </div>\n  </div>\n</div>\n",
                    exportAs: 'mdbAutoCompleter'
                }] }
    ];
    /** @nocollapse */
    MdbAutoCompleterComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    MdbAutoCompleterComponent.propDecorators = {
        textNoResults: [{ type: Input }],
        clearButton: [{ type: Input }],
        clearButtonTabIndex: [{ type: Input }],
        optionList: [{ type: ContentChildren, args: [MdbOptionComponent, { descendants: true, read: ElementRef },] }],
        mdbOptions: [{ type: ContentChildren, args: [MdbOptionComponent, { descendants: true, read: MdbOptionComponent },] }],
        dropdown: [{ type: ViewChild, args: ['dropdown',] }],
        onItemClick: [{ type: HostListener, args: ['mousedown',] }]
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
    MdbAutoCompleterComponent.prototype.optionList;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.mdbOptions;
    /** @type {?} */
    MdbAutoCompleterComponent.prototype.dropdown;
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
    MdbAutoCompleterComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvY29tcG9uZW50cy9tZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFFL0IsU0FBUyxFQUFFLFNBQVMsR0FDckIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFhLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUV6QztJQXNCRSxtQ0FBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWQ5QixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQix3QkFBbUIsR0FBRyxDQUFDLENBQUM7UUFPekIsY0FBUyxHQUFlLEVBQUUsQ0FBQztRQUMzQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLHVCQUFrQixHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXhCLHlCQUFvQixHQUFpQixJQUFJLE9BQU8sRUFBTyxDQUFDO0lBR2hFLENBQUM7Ozs7SUFFMEIsK0NBQVc7OztJQUF0Qzs7WUFDTSxlQUFlLEdBQXVCLG1CQUFvQixFQUFFLEVBQUE7UUFFaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFzQjtZQUM3QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO2dCQUN2QixlQUFlLEdBQUcsRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsRUFBRSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUMsSUFB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aEQsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7Ozs7Z0JBVkMsU0FBUzs7O2dDQWFSLEtBQUs7OEJBQ0wsS0FBSztzQ0FDTCxLQUFLOzZCQUVMLGVBQWUsU0FBQyxrQkFBa0IsRUFBRSxFQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQzs2QkFDekUsZUFBZSxTQUFDLGtCQUFrQixFQUFFLEVBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUM7MkJBRWpGLFNBQVMsU0FBQyxVQUFVOzhCQVdwQixZQUFZLFNBQUMsV0FBVzs7SUFtSzNCLGdDQUFDO0NBQUEsQUE1TEQsSUE0TEM7U0F0TFkseUJBQXlCOzs7SUFDcEMsa0RBQStCOztJQUMvQixnREFBNEI7O0lBQzVCLHdEQUFpQzs7SUFFakMsK0NBQW1HOztJQUNuRywrQ0FBcUg7O0lBRXJILDZDQUE0Qzs7Ozs7SUFFNUMsOENBQW1DOzs7OztJQUNuQyw0Q0FBd0I7Ozs7O0lBQ3hCLHVEQUFnQzs7Ozs7SUFDaEMsa0RBQXVDOzs7OztJQUN2Qyx5REFBZ0U7Ozs7O0lBRXBELDZDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMiwgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWRiT3B0aW9uQ29tcG9uZW50fSBmcm9tICcuL21kYi1vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7SVNlbGVjdGVkT3B0aW9ufSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlbGVjdGVkLW9wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWF1dG8tY29tcGxldGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdtZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBleHBvcnRBczogJ21kYkF1dG9Db21wbGV0ZXInLFxufSlcblxuZXhwb3J0IGNsYXNzIE1kYkF1dG9Db21wbGV0ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBASW5wdXQoKSB0ZXh0Tm9SZXN1bHRzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsZWFyQnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KCkgY2xlYXJCdXR0b25UYWJJbmRleCA9IDA7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihNZGJPcHRpb25Db21wb25lbnQsIHtkZXNjZW5kYW50czogdHJ1ZSwgcmVhZDogRWxlbWVudFJlZn0pIG9wdGlvbkxpc3Q6IEFycmF5PGFueT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTWRiT3B0aW9uQ29tcG9uZW50LCB7ZGVzY2VuZGFudHM6IHRydWUsIHJlYWQ6IE1kYk9wdGlvbkNvbXBvbmVudH0pIG1kYk9wdGlvbnM6IE1kYk9wdGlvbkNvbXBvbmVudFtdO1xuXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duJykgZHJvcGRvd246IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBfYWxsSXRlbXM6IEFycmF5PGFueT4gPSBbXTtcbiAgcHJpdmF0ZSBfaXNPcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgX3NlbGVjdGVkSXRlbUluZGV4ID0gLTE7XG4gIHByaXZhdGUgX3NlbGVjdGVkSXRlbTogSVNlbGVjdGVkT3B0aW9uO1xuICBwcml2YXRlIF9zZWxlY3RlZEl0ZW1DaGFuZ2VkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nKSBvbkl0ZW1DbGljaygpIHtcbiAgICBsZXQgc2VsZWN0ZWRFbGVtZW50OiBNZGJPcHRpb25Db21wb25lbnQgPSA8TWRiT3B0aW9uQ29tcG9uZW50Pnt9O1xuXG4gICAgdGhpcy5tZGJPcHRpb25zLmZvckVhY2goKGVsOiBNZGJPcHRpb25Db21wb25lbnQpID0+IHtcbiAgICAgIGlmIChlbC5jbGlja2VkID09PSB0cnVlKSB7XG4gICAgICAgIHNlbGVjdGVkRWxlbWVudCA9IGVsO1xuICAgICAgfVxuICAgICAgZWwuY2xpY2tlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zZXRTZWxlY3RlZEl0ZW0oe3RleHQ6IHNlbGVjdGVkRWxlbWVudC52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRFbGVtZW50fSk7XG4gICAgdGhpcy5oaWdobGlnaHRSb3coMCk7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VsZWN0ZWRJdGVtKGl0ZW06IElTZWxlY3RlZE9wdGlvbikge1xuICAgIHRoaXMuX3NlbGVjdGVkSXRlbSA9IGl0ZW07XG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtQ2hhbmdlZC5uZXh0KHRoaXMuZ2V0U2VsZWN0ZWRJdGVtKCkpO1xuICB9XG5cbiAgcHVibGljIGdldFNlbGVjdGVkSXRlbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdGVkSXRlbUNoYW5nZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtQ2hhbmdlZDtcbiAgfVxuXG4gIHB1YmxpYyBpc09wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgfVxuXG4gIHB1YmxpYyBzaG93KCkge1xuICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcbiAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIHJlbW92ZUhpZ2hsaWdodChpbmRleDogbnVtYmVyKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZm9yRWFjaCgoZWw6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlclJvdyA9IGVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbXBsZXRlci1yb3cnKTtcbiAgICAgICAgaWYgKGkgPT09IGluZGV4KSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLCAnaGlnaGxpZ2h0LXJvdycpO1xuICAgICAgICB9IGVsc2UgaWYgKGkgIT09IGluZGV4KSB7XG4gICAgICAgICAgY29tcGxldGVyUm93LmZvckVhY2goKGVsZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtLCAnaGlnaGxpZ2h0LXJvdycpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGhpZ2hsaWdodFJvdyhpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5fYWxsSXRlbXMgPSB0aGlzLm9wdGlvbkxpc3RcbiAgICAgIC5maWx0ZXIoZWwgPT4gZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlci1yb3cnKSlcbiAgICAgIC5tYXAoZWxlbSA9PiBlbGVtLm5hdGl2ZUVsZW1lbnQpO1xuXG4gICAgaWYgKHRoaXMuX2FsbEl0ZW1zW2luZGV4XSkge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKGVsOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjb21wbGV0ZXJSb3cgPSBlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZXItcm93Jyk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSBpKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmVIaWdobGlnaHQoaW5kZXgpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoY29tcGxldGVyUm93W2NvbXBsZXRlclJvdy5sZW5ndGggLSAxXSwgJ2hpZ2hsaWdodC1yb3cnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ID0gaW5kZXg7XG4gIH1cblxuICBuYXZpZ2F0ZVVzaW5nS2V5Ym9hcmQoZXZlbnQ6IGFueSkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICB0aGlzLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KGV2ZW50LmtleSk7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3coMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXggKyAxIDw9IHRoaXMuX2FsbEl0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJvdygrK3RoaXMuX3NlbGVjdGVkSXRlbUluZGV4KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCArIDEgPT09IHRoaXMuX2FsbEl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0Um93KDApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6XG5cbiAgICAgICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldyhldmVudC5rZXkpO1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXggPT09IC0xIHx8IHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3codGhpcy5fYWxsSXRlbXMubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0Um93KC0tdGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSB0aGlzLm1kYk9wdGlvbnMubWFwKGVsID0+IGVsKVt0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleF07XG4gICAgICAgIGlmIChzZWxlY3RlZE9wdGlvbikge1xuICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtKHt0ZXh0OiBzZWxlY3RlZE9wdGlvbi52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRPcHRpb259KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBtb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldyh0eXBlOiBzdHJpbmcpIHtcbiAgICBsZXQgbGlzdEhlaWdodCA9IDA7XG4gICAgbGV0IGl0ZW1JbmRleCA9IHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4O1xuXG4gICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgIGxpc3RIZWlnaHQgKz0gZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgfSk7XG5cbiAgICBpZiAoaXRlbUluZGV4ID4gLTEpIHtcbiAgICAgIGxldCBpdGVtOiBhbnkgPSBudWxsO1xuICAgICAgbGV0IGl0ZW1IZWlnaHQgPSAwO1xuXG4gICAgICB0aGlzLm9wdGlvbkxpc3QuZm9yRWFjaCgoZWw6IGFueSwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChpID09PSBpdGVtSW5kZXggKyAxKSB7XG4gICAgICAgICAgaXRlbSA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgaXRlbUhlaWdodCA9IGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaXRlbVRvcCA9IChpdGVtSW5kZXggKyAxKSAqIGl0ZW1IZWlnaHQ7XG4gICAgICBjb25zdCB2aWV3VG9wID0gdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IHZpZXdCb3R0b20gPSB2aWV3VG9wICsgbGlzdEhlaWdodDtcblxuICAgICAgaWYgKHR5cGUgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsVG9wJywgaXRlbVRvcCAtIGl0ZW1IZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgICAgIGl0ZW1JbmRleCA9IHRoaXMub3B0aW9uTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1JbmRleC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gdGhpcy5fYWxsSXRlbXMubGVuZ3RoIC0gMikge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsVG9wJywgdmlld0JvdHRvbSAtIGl0ZW1IZWlnaHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsVG9wJywgaXRlbUluZGV4ICogaXRlbUhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMudGV4dE5vUmVzdWx0cykge1xuICAgICAgdGhpcy50ZXh0Tm9SZXN1bHRzID0gJ05vIHJlc3VsdHMgZm91bmQnO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmhpZ2hsaWdodFJvdygwKTtcbiAgfVxufVxuIl19