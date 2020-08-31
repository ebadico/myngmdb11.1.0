var MdbAutoCompleterComponent_1;
import { __decorate, __metadata, __param } from "tslib";
import { AfterContentInit, Component, ContentChildren, ElementRef, EventEmitter, Inject, Input, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, QueryList, OnDestroy, } from '@angular/core';
import { MdbOptionComponent, MDB_OPTION_PARENT } from './mdb-option.component';
import { Subject, merge } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { document, window } from '../../../free/utils/facade/browser';
import { Utils } from './../../../free/utils/utils.class';
import { startWith, switchMap, takeUntil } from 'rxjs/operators';
import { DOWN_ARROW, ENTER, ESCAPE, UP_ARROW } from '../../../free/utils/keyboard-navigation';
let MdbAutoCompleterComponent = MdbAutoCompleterComponent_1 = class MdbAutoCompleterComponent {
    constructor(renderer, el, platformId) {
        this.renderer = renderer;
        this.el = el;
        this.clearButton = true;
        this.clearButtonTabIndex = 0;
        this.dropdownPosition = 'auto';
        this._optionHeight = 45;
        // equal to 4 * optionHeight (which is 45 by default)
        this._dropdownHeight = 180;
        this.select = new EventEmitter();
        this.selected = new EventEmitter();
        this._destroy = new Subject();
        this.utils = new Utils();
        this._isDropdownOpen = new Subject();
        this._allItems = [];
        this._isOpen = false;
        this._selectedItemIndex = -1;
        this._selectedItemChanged = new Subject();
        this._isBrowser = false;
        this._isBrowser = isPlatformBrowser(platformId);
        this.renderer.addClass(this.el.nativeElement, 'mdb-auto-completer');
    }
    get visibleOptions() {
        return this._visibleOptions;
    }
    set visibleOptions(value) {
        if (value !== 0) {
            this._visibleOptions = value;
        }
    }
    get optionHeight() {
        return this._optionHeight;
    }
    set optionHeight(value) {
        if (value !== 0) {
            this._optionHeight = value;
        }
    }
    get dropdownHeight() {
        return this._dropdownHeight;
    }
    set dropdownHeight(value) {
        if (value !== 0) {
            this._dropdownHeight = value;
        }
    }
    _listenToOptionClick() {
        this.mdbOptions.changes
            .pipe(startWith(this.mdbOptions), switchMap((options) => {
            return merge(...options.map((option) => option.click$));
        }), takeUntil(this._destroy))
            .subscribe((clickedOption) => this._handleOptionClick(clickedOption));
    }
    _handleOptionClick(option) {
        this.setSelectedItem({ text: option.value, element: option });
        this.highlightRow(0);
        this.select.emit({ text: option.value, element: option });
        this.selected.emit({ text: option.value, element: option });
    }
    setSelectedItem(item) {
        this._selectedItem = item;
        this._selectedItemChanged.next(this.getSelectedItem());
    }
    getSelectedItem() {
        return this._selectedItem;
    }
    selectedItemChanged() {
        return this._selectedItemChanged;
    }
    isOpen() {
        return this._isOpen;
    }
    _calculatePosition() {
        const modalEl = this.utils.getClosestEl(this.el.nativeElement, '.modal-dialog');
        const style = document.querySelector('.completer-dropdown')
            ? window.getComputedStyle(document.querySelector('.completer-dropdown'))
            : null;
        if (!style) {
            return;
        }
        const height = ['height', 'padding-top', 'padding-bottom', 'margin-top', 'margin-bottom']
            .map(key => parseInt(style.getPropertyValue(key), 10))
            .reduce((prev, cur) => prev + cur);
        const topRect = document.querySelector('.completer-dropdown').getBoundingClientRect().top;
        const bottom = modalEl ? window.innerHeight - height - topRect : this.parameters.bottom;
        const canOpenBelow = this.dropdown.nativeElement.clientHeight <= bottom;
        const belowPosition = this.parameters.inputHeight + 3;
        const abovePosition = `-${this.dropdown.nativeElement.clientHeight}`;
        let top;
        if (this.dropdownPosition === 'auto') {
            top = canOpenBelow ? belowPosition : abovePosition;
        }
        else if (this.dropdownPosition === 'below') {
            top = belowPosition;
        }
        else if (this.dropdownPosition === 'above') {
            top = abovePosition;
        }
        this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'left', 0 + 'px');
        this.renderer.setStyle(this.dropdown.nativeElement, 'width', this.parameters.width + 'px');
    }
    _calculateAppendPosition() {
        if (this._isBrowser) {
            setTimeout(() => {
                const originRect = this.origin.nativeElement.getBoundingClientRect();
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                const offsetTop = originRect.top + scrollTop;
                const height = originRect.height;
                const dropdownHeight = this.dropdown.nativeElement.offsetHeight;
                const inputMargin = 8;
                let top = 0;
                let left = 0;
                left = originRect.left;
                const canOpenBelow = offsetTop + dropdownHeight + height + inputMargin <=
                    scrollTop + document.documentElement.clientHeight;
                const belowPosition = offsetTop + height + inputMargin;
                const abovePosition = (top = offsetTop - dropdownHeight - inputMargin);
                if (this.dropdownPosition === 'auto') {
                    top = canOpenBelow ? belowPosition : abovePosition;
                }
                else if (this.dropdownPosition === 'below') {
                    top = belowPosition;
                }
                else if (this.dropdownPosition === 'above') {
                    top = abovePosition;
                }
                this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'left', left + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'width', this.parameters.width + 'px');
            }, 0);
        }
    }
    show() {
        if (!this.disabled) {
            this._isOpen = true;
            this._isDropdownOpen.next(this.isOpen());
        }
        setTimeout(() => {
            if (this.dropdown && !this.appendToBody) {
                this._calculatePosition();
            }
            if (this.dropdown && this.appendToBody) {
                this._calculateAppendPosition();
            }
        }, 0);
    }
    hide() {
        if (!this.disabled) {
            this._isOpen = false;
            this._isDropdownOpen.next(this.isOpen());
        }
    }
    isDropdownOpen() {
        return this._isDropdownOpen;
    }
    removeHighlight(index) {
        setTimeout(() => {
            this.optionList.forEach((el, i) => {
                const completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (i === index) {
                    this.renderer.addClass(el.nativeElement.firstElementChild, 'highlight-row');
                }
                else if (i !== index) {
                    completerRow.forEach((elem) => {
                        this.renderer.removeClass(elem, 'highlight-row');
                    });
                }
            });
        }, 0);
    }
    highlightRow(index) {
        this._allItems = this.optionList
            .filter(el => el.nativeElement.firstElementChild.classList.contains('completer-row'))
            .map(elem => elem.nativeElement);
        if (this._allItems[index]) {
            this.optionList.forEach((el, i) => {
                const completerRow = el.nativeElement.querySelectorAll('.completer-row');
                if (index === i) {
                    this.removeHighlight(index);
                    this.renderer.addClass(completerRow[completerRow.length - 1], 'highlight-row');
                }
            });
        }
        this._selectedItemIndex = index;
    }
    navigateUsingKeyboard(event) {
        if (this.dropdown) {
            switch (event.keyCode) {
                case DOWN_ARROW:
                    event.preventDefault();
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
                    const selectedElement = this.mdbOptions.find((el, index) => el && index === this._selectedItemIndex);
                    if (selectedElement) {
                        this.select.emit({ text: selectedElement.value, element: selectedElement });
                    }
                    break;
                case UP_ARROW:
                    event.preventDefault();
                    this.moveHighlightedIntoView(event.key);
                    if (this._selectedItemIndex === -1 || this._selectedItemIndex === 0) {
                        const lastItemIndex = this.mdbOptions.length;
                        this.highlightRow(lastItemIndex);
                    }
                    this.highlightRow(--this._selectedItemIndex);
                    const selectedItem = this.mdbOptions.find((el, index) => el && index === this._selectedItemIndex);
                    if (selectedItem) {
                        this.select.emit({ text: selectedItem.value, element: selectedItem });
                    }
                    break;
                case ESCAPE:
                    event.preventDefault();
                    this.hide();
                    break;
                case ENTER:
                    event.preventDefault();
                    const selectedOption = this.mdbOptions.map(el => el)[this._selectedItemIndex];
                    if (selectedOption) {
                        this.setSelectedItem({ text: selectedOption.value, element: selectedOption });
                        this.select.emit({ text: selectedOption.value, element: selectedOption });
                        this.selected.emit({ text: selectedOption.value, element: selectedOption });
                    }
                    this.hide();
                    break;
            }
        }
    }
    moveHighlightedIntoView(type) {
        let listHeight = 0;
        let itemIndex = this._selectedItemIndex;
        this.optionList.forEach((el) => {
            listHeight += el.nativeElement.offsetHeight;
        });
        if (itemIndex > -1) {
            let itemHeight = 0;
            this.optionList.forEach((el, i) => {
                if (i === itemIndex + 1) {
                    itemHeight = el.nativeElement.firstElementChild.clientHeight;
                }
            });
            const itemTop = (itemIndex + 1) * itemHeight;
            const viewTop = this.dropdown.nativeElement.scrollTop;
            const viewBottom = viewTop + listHeight;
            if (type === 'ArrowDown') {
                this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemTop - itemHeight);
            }
            else if (type === 'ArrowUp') {
                if (itemIndex === 0) {
                    itemIndex = this.optionList.length - 1;
                }
                else {
                    itemIndex--;
                }
                if (itemIndex === this._allItems.length - 2) {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', viewBottom - itemHeight);
                }
                else {
                    this.renderer.setProperty(this.dropdown.nativeElement, 'scrollTop', itemIndex * itemHeight);
                }
            }
        }
    }
    updatePosition(parameters) {
        setTimeout(() => {
            if (this.dropdown) {
                const top = this.dropdown.nativeElement.clientHeight > parameters.bottom
                    ? parameters.top - this.dropdown.nativeElement.clientHeight
                    : parameters.top;
                this.renderer.setStyle(this.dropdown.nativeElement, 'top', top + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'left', parameters.left + 'px');
                this.renderer.setStyle(this.dropdown.nativeElement, 'width', parameters.width + 'px');
            }
        }, 0);
    }
    appendDropdown() {
        if (this._isBrowser && this.appendToBody) {
            const body = document.querySelector('body');
            const dropdown = this.el.nativeElement;
            if (body) {
                this.renderer.appendChild(body, dropdown);
                this._calculateAppendPosition();
            }
        }
    }
    setSingleOptionHeight() {
        this.mdbOptions.forEach(option => {
            option._optionHeight = this._optionHeight;
        });
    }
    ngAfterContentInit() {
        this._listenToOptionClick();
        this.highlightRow(0);
    }
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
};
MdbAutoCompleterComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], MdbAutoCompleterComponent.prototype, "textNoResults", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbAutoCompleterComponent.prototype, "clearButton", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbAutoCompleterComponent.prototype, "clearButtonTabIndex", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MdbAutoCompleterComponent.prototype, "appendToBody", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdbAutoCompleterComponent.prototype, "dropdownPosition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MdbAutoCompleterComponent.prototype, "disabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MdbAutoCompleterComponent.prototype, "visibleOptions", null);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdbAutoCompleterComponent.prototype, "optionHeight", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MdbAutoCompleterComponent.prototype, "dropdownHeight", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbAutoCompleterComponent.prototype, "displayValue", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdbAutoCompleterComponent.prototype, "select", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdbAutoCompleterComponent.prototype, "selected", void 0);
__decorate([
    ContentChildren(MdbOptionComponent, { descendants: true, read: ElementRef }),
    __metadata("design:type", Array)
], MdbAutoCompleterComponent.prototype, "optionList", void 0);
__decorate([
    ContentChildren(MdbOptionComponent, { descendants: true }),
    __metadata("design:type", QueryList)
], MdbAutoCompleterComponent.prototype, "mdbOptions", void 0);
__decorate([
    ViewChild('dropdown'),
    __metadata("design:type", ElementRef)
], MdbAutoCompleterComponent.prototype, "dropdown", void 0);
__decorate([
    ViewChild('noResults'),
    __metadata("design:type", ElementRef)
], MdbAutoCompleterComponent.prototype, "noResultsEl", void 0);
MdbAutoCompleterComponent = MdbAutoCompleterComponent_1 = __decorate([
    Component({
        selector: 'mdb-auto-completer',
        template: "<div class=\"completer-dropdown-holder\" *ngIf=\"isOpen()\">\n  <div\n    class=\"completer-dropdown\"\n    #dropdown\n    [ngStyle]=\"{\n      'pointer-events': optionList.length === 0 ? 'none' : 'auto',\n      'max-height.px': _visibleOptions ? _visibleOptions * _optionHeight : _dropdownHeight\n    }\"\n  >\n    <div class=\"completer-row-wrapper\">\n      <div *ngIf=\"textNoResults && optionList.length === 0\" class=\"completer-no-results\" #noResults>\n        {{ textNoResults }}\n      </div>\n      <ng-content #content></ng-content>\n    </div>\n  </div>\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        exportAs: 'mdbAutoCompleter',
        providers: [{ provide: MDB_OPTION_PARENT, useExisting: MdbAutoCompleterComponent_1 }],
        styles: [".mdb-autocomplete{margin-bottom:1px}.mdb-autocomplete::-webkit-search-cancel-button,.mdb-autocomplete::-webkit-search-decoration,.mdb-autocomplete::-webkit-search-results-button,.mdb-autocomplete::-webkit-search-results-decoration{-webkit-appearance:none}button:focus{outline:0!important}button.mdb-autocomplete-clear{position:absolute;z-index:2;top:.5rem;right:0;visibility:hidden;border:none;background:0 0;cursor:pointer}button.mdb-autocomplete-clear svg{fill:#a6a6a6}.mdb-autocomplete-wrap{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);position:absolute;z-index:100;left:0;right:0;list-style-type:none;overflow-y:auto;max-height:210px;padding-left:0;background:#fff}.mdb-autocomplete-wrap li{padding:12px 15px;cursor:pointer;font-size:.875rem}.mdb-autocomplete-wrap li:hover{background:#eee}.mdb-autocomplete-wrap li.selected{background-color:#eee}.form-inline .md-form .form-control.mdb-autocomplete{width:15rem}ng2-completer .completer-dropdown-holder{margin-top:-1rem}ng2-completer .md-form label{z-index:-1}.mdb-autocomplete-clear:hover,.mdb-autocomplete:hover,mdb-auto-completer:hover{cursor:pointer}.completer-dropdown{margin-top:1px;position:absolute;left:0;right:0;width:100%;background:#fff;box-shadow:0 2px 5px rgba(0,0,0,.25);z-index:110;overflow-y:auto;overflow-x:hidden}.completer-dropdown .completer-row{width:100%;display:flex;align-items:center;justify-content:space-between;padding:12px 15px;outline:0;font-size:.875rem}.completer-dropdown .completer-row .completer-description{font-size:14px}.completer-dropdown .completer-row .completer-image-holder .completer-image-default{width:16px;height:16px}.completer-dropdown .completer-no-results,.completer-dropdown .completer-searching{padding:12px 15px;font-size:.875rem}.completer-selected-row{background-color:#eee}.completer-image{width:32px;height:32px;border-radius:50%}.validate-success.ng-valid .completer-input{border-bottom:1px solid #00c851!important;box-shadow:0 1px 0 0 #00c851!important}.validate-success.ng-valid .completer-holder label{color:#00c851!important}.form-submitted .validate-error.ng-invalid .completer-input,.validate-error.ng-invalid.ng-touched .completer-input{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.form-submitted .validate-error.ng-invalid .completer-holder label,.validate-error.ng-invalid.ng-touched .completer-holder label{color:#f44336!important}.completer-row:hover,.highlight-row{background-color:#eee}"]
    }),
    __param(2, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [Renderer2,
        ElementRef, String])
], MdbAutoCompleterComponent);
export { MdbAutoCompleterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWF1dG8tY29tcGxldGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1jb21wbGV0ZXIvY29tcG9uZW50cy9tZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFL0UsT0FBTyxFQUFjLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBWTlGLElBQWEseUJBQXlCLGlDQUF0QyxNQUFhLHlCQUF5QjtJQXdGcEMsWUFDVSxRQUFtQixFQUNuQixFQUFjLEVBQ0QsVUFBa0I7UUFGL0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBeEZmLGdC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YVkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBRdWVyeUxpc3QsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZGJPcHRpb25Db21wb25lbnQsIE1EQl9PUFRJT05fUEFSRU5UIH0gZnJvbSAnLi9tZGItb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJU2VsZWN0ZWRPcHRpb24gfSBmcm9tICcuLi9pbnRlcmZhY2VzL3NlbGVjdGVkLW9wdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IGRvY3VtZW50LCB3aW5kb3cgfSBmcm9tICcuLi8uLi8uLi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSAnLi8uLi8uLi8uLi9mcmVlL3V0aWxzL3V0aWxzLmNsYXNzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgc3dpdGNoTWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFLCBVUF9BUlJPVyB9IGZyb20gJy4uLy4uLy4uL2ZyZWUvdXRpbHMva2V5Ym9hcmQtbmF2aWdhdGlvbic7XG5cbmV4cG9ydCB0eXBlIEF1dG9jb21wbGV0ZURyb3Bkb3duUG9zaXRpb24gPSAnYmVsb3cnIHwgJ2Fib3ZlJyB8ICdhdXRvJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWF1dG8tY29tcGxldGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdtZGItYXV0by1jb21wbGV0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi8uLi9hdXRvLWNvbXBsZXRlci1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBleHBvcnRBczogJ21kYkF1dG9Db21wbGV0ZXInLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1EQl9PUFRJT05fUEFSRU5ULCB1c2VFeGlzdGluZzogTWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudCB9XSxcbn0pXG5leHBvcnQgY2xhc3MgTWRiQXV0b0NvbXBsZXRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHRleHROb1Jlc3VsdHM6IHN0cmluZztcbiAgQElucHV0KCkgY2xlYXJCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKSBjbGVhckJ1dHRvblRhYkluZGV4ID0gMDtcbiAgQElucHV0KCkgYXBwZW5kVG9Cb2R5OiBib29sZWFuO1xuICBASW5wdXQoKSBkcm9wZG93blBvc2l0aW9uOiBBdXRvY29tcGxldGVEcm9wZG93blBvc2l0aW9uID0gJ2F1dG8nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBnZXQgdmlzaWJsZU9wdGlvbnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZU9wdGlvbnM7XG4gIH1cblxuICBzZXQgdmlzaWJsZU9wdGlvbnModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgdGhpcy5fdmlzaWJsZU9wdGlvbnMgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBfdmlzaWJsZU9wdGlvbnM6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBnZXQgb3B0aW9uSGVpZ2h0KCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbkhlaWdodDtcbiAgfVxuXG4gIHNldCBvcHRpb25IZWlnaHQodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gMCkge1xuICAgICAgdGhpcy5fb3B0aW9uSGVpZ2h0ID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgX29wdGlvbkhlaWdodCA9IDQ1O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkcm9wZG93bkhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kcm9wZG93bkhlaWdodDtcbiAgfVxuXG4gIHNldCBkcm9wZG93bkhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlICE9PSAwKSB7XG4gICAgICB0aGlzLl9kcm9wZG93bkhlaWdodCA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVxdWFsIHRvIDQgKiBvcHRpb25IZWlnaHQgKHdoaWNoIGlzIDQ1IGJ5IGRlZmF1bHQpXG4gIF9kcm9wZG93bkhlaWdodCA9IDE4MDtcblxuICBASW5wdXQoKSBkaXNwbGF5VmFsdWU6ICgodmFsdWU6IGFueSkgPT4gc3RyaW5nKSB8IG51bGw7XG4gIEBPdXRwdXQoKSBzZWxlY3Q6IEV2ZW50RW1pdHRlcjx7IHRleHQ6IHN0cmluZzsgZWxlbWVudDogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgdGV4dDogc3RyaW5nO1xuICAgIGVsZW1lbnQ6IGFueTtcbiAgfT4oKTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8eyB0ZXh0OiBzdHJpbmc7IGVsZW1lbnQ6IGFueSB9PiA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBlbGVtZW50OiBhbnk7XG4gIH0+KCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oTWRiT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmIH0pXG4gIG9wdGlvbkxpc3Q6IEFycmF5PGFueT47XG4gIEBDb250ZW50Q2hpbGRyZW4oTWRiT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIG1kYk9wdGlvbnM6IFF1ZXJ5TGlzdDxNZGJPcHRpb25Db21wb25lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duJykgZHJvcGRvd246IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ25vUmVzdWx0cycpIG5vUmVzdWx0c0VsOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHByaXZhdGUgdXRpbHM6IFV0aWxzID0gbmV3IFV0aWxzKCk7XG5cbiAgb3JpZ2luOiBFbGVtZW50UmVmO1xuXG4gIHB1YmxpYyBwYXJhbWV0ZXJzOiB7XG4gICAgbGVmdDogbnVtYmVyO1xuICAgIHRvcDogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgYm90dG9tOiBudW1iZXI7XG4gICAgaW5wdXRIZWlnaHQ6IG51bWJlcjtcbiAgfTtcblxuICBwcml2YXRlIF9pc0Ryb3Bkb3duT3BlbjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIHByaXZhdGUgX2FsbEl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG4gIHByaXZhdGUgX2lzT3BlbiA9IGZhbHNlO1xuICBwcml2YXRlIF9zZWxlY3RlZEl0ZW1JbmRleCA9IC0xO1xuICBwcml2YXRlIF9zZWxlY3RlZEl0ZW06IElTZWxlY3RlZE9wdGlvbjtcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJdGVtQ2hhbmdlZDogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIF9pc0Jyb3dzZXIgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5faXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdtZGItYXV0by1jb21wbGV0ZXInKTtcbiAgfVxuXG4gIHByaXZhdGUgX2xpc3RlblRvT3B0aW9uQ2xpY2soKSB7XG4gICAgdGhpcy5tZGJPcHRpb25zLmNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgodGhpcy5tZGJPcHRpb25zKSxcbiAgICAgICAgc3dpdGNoTWFwKChvcHRpb25zOiBRdWVyeUxpc3Q8TWRiT3B0aW9uQ29tcG9uZW50PikgPT4ge1xuICAgICAgICAgIHJldHVybiBtZXJnZSguLi5vcHRpb25zLm1hcCgob3B0aW9uOiBNZGJPcHRpb25Db21wb25lbnQpID0+IG9wdGlvbi5jbGljayQpKTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoY2xpY2tlZE9wdGlvbjogTWRiT3B0aW9uQ29tcG9uZW50KSA9PiB0aGlzLl9oYW5kbGVPcHRpb25DbGljayhjbGlja2VkT3B0aW9uKSk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVPcHRpb25DbGljayhvcHRpb246IE1kYk9wdGlvbkNvbXBvbmVudCkge1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtKHsgdGV4dDogb3B0aW9uLnZhbHVlLCBlbGVtZW50OiBvcHRpb24gfSk7XG4gICAgdGhpcy5oaWdobGlnaHRSb3coMCk7XG4gICAgdGhpcy5zZWxlY3QuZW1pdCh7IHRleHQ6IG9wdGlvbi52YWx1ZSwgZWxlbWVudDogb3B0aW9uIH0pO1xuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh7IHRleHQ6IG9wdGlvbi52YWx1ZSwgZWxlbWVudDogb3B0aW9uIH0pO1xuICB9XG5cbiAgcHVibGljIHNldFNlbGVjdGVkSXRlbShpdGVtOiBJU2VsZWN0ZWRPcHRpb24pIHtcbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgIHRoaXMuX3NlbGVjdGVkSXRlbUNoYW5nZWQubmV4dCh0aGlzLmdldFNlbGVjdGVkSXRlbSgpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZEl0ZW0oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RlZEl0ZW1DaGFuZ2VkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSXRlbUNoYW5nZWQ7XG4gIH1cblxuICBwdWJsaWMgaXNPcGVuKCkge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gIH1cblxuICBwdWJsaWMgX2NhbGN1bGF0ZVBvc2l0aW9uKCkge1xuICAgIGNvbnN0IG1vZGFsRWwgPSB0aGlzLnV0aWxzLmdldENsb3Nlc3RFbCh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICcubW9kYWwtZGlhbG9nJyk7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVyLWRyb3Bkb3duJylcbiAgICAgID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlci1kcm9wZG93bicpKVxuICAgICAgOiBudWxsO1xuICAgIGlmICghc3R5bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGVpZ2h0ID0gWydoZWlnaHQnLCAncGFkZGluZy10b3AnLCAncGFkZGluZy1ib3R0b20nLCAnbWFyZ2luLXRvcCcsICdtYXJnaW4tYm90dG9tJ11cbiAgICAgIC5tYXAoa2V5ID0+IHBhcnNlSW50KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoa2V5KSwgMTApKVxuICAgICAgLnJlZHVjZSgocHJldiwgY3VyKSA9PiBwcmV2ICsgY3VyKTtcblxuICAgIGNvbnN0IHRvcFJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVyLWRyb3Bkb3duJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IGJvdHRvbSA9IG1vZGFsRWwgPyB3aW5kb3cuaW5uZXJIZWlnaHQgLSBoZWlnaHQgLSB0b3BSZWN0IDogdGhpcy5wYXJhbWV0ZXJzLmJvdHRvbTtcbiAgICBjb25zdCBjYW5PcGVuQmVsb3cgPSB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IDw9IGJvdHRvbTtcblxuICAgIGNvbnN0IGJlbG93UG9zaXRpb24gPSB0aGlzLnBhcmFtZXRlcnMuaW5wdXRIZWlnaHQgKyAzO1xuICAgIGNvbnN0IGFib3ZlUG9zaXRpb24gPSBgLSR7dGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodH1gO1xuXG4gICAgbGV0IHRvcDtcblxuICAgIGlmICh0aGlzLmRyb3Bkb3duUG9zaXRpb24gPT09ICdhdXRvJykge1xuICAgICAgdG9wID0gY2FuT3BlbkJlbG93ID8gYmVsb3dQb3NpdGlvbiA6IGFib3ZlUG9zaXRpb247XG4gICAgfSBlbHNlIGlmICh0aGlzLmRyb3Bkb3duUG9zaXRpb24gPT09ICdiZWxvdycpIHtcbiAgICAgIHRvcCA9IGJlbG93UG9zaXRpb247XG4gICAgfSBlbHNlIGlmICh0aGlzLmRyb3Bkb3duUG9zaXRpb24gPT09ICdhYm92ZScpIHtcbiAgICAgIHRvcCA9IGFib3ZlUG9zaXRpb247XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB0b3AgKyAncHgnKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCAwICsgJ3B4Jyk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHRoaXMucGFyYW1ldGVycy53aWR0aCArICdweCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlQXBwZW5kUG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuX2lzQnJvd3Nlcikge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWdpblJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLm9yaWdpbi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSBvcmlnaW5SZWN0LnRvcCArIHNjcm9sbFRvcDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gb3JpZ2luUmVjdC5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duSGVpZ2h0ID0gdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgY29uc3QgaW5wdXRNYXJnaW4gPSA4O1xuXG4gICAgICAgIGxldCB0b3AgPSAwO1xuICAgICAgICBsZXQgbGVmdCA9IDA7XG5cbiAgICAgICAgbGVmdCA9IG9yaWdpblJlY3QubGVmdDtcblxuICAgICAgICBjb25zdCBjYW5PcGVuQmVsb3cgPVxuICAgICAgICAgIG9mZnNldFRvcCArIGRyb3Bkb3duSGVpZ2h0ICsgaGVpZ2h0ICsgaW5wdXRNYXJnaW4gPD1cbiAgICAgICAgICBzY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICBjb25zdCBiZWxvd1Bvc2l0aW9uID0gb2Zmc2V0VG9wICsgaGVpZ2h0ICsgaW5wdXRNYXJnaW47XG4gICAgICAgIGNvbnN0IGFib3ZlUG9zaXRpb24gPSAodG9wID0gb2Zmc2V0VG9wIC0gZHJvcGRvd25IZWlnaHQgLSBpbnB1dE1hcmdpbik7XG5cbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25Qb3NpdGlvbiA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgdG9wID0gY2FuT3BlbkJlbG93ID8gYmVsb3dQb3NpdGlvbiA6IGFib3ZlUG9zaXRpb247XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcm9wZG93blBvc2l0aW9uID09PSAnYmVsb3cnKSB7XG4gICAgICAgICAgdG9wID0gYmVsb3dQb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRyb3Bkb3duUG9zaXRpb24gPT09ICdhYm92ZScpIHtcbiAgICAgICAgICB0b3AgPSBhYm92ZVBvc2l0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCB0b3AgKyAncHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICdsZWZ0JywgbGVmdCArICdweCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ3dpZHRoJywgdGhpcy5wYXJhbWV0ZXJzLndpZHRoICsgJ3B4Jyk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvdygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XG4gICAgICB0aGlzLl9pc0Ryb3Bkb3duT3Blbi5uZXh0KHRoaXMuaXNPcGVuKCkpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJvcGRvd24gJiYgIXRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZVBvc2l0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRyb3Bkb3duICYmIHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIHRoaXMuX2NhbGN1bGF0ZUFwcGVuZFBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5faXNEcm9wZG93bk9wZW4ubmV4dCh0aGlzLmlzT3BlbigpKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaXNEcm9wZG93bk9wZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5faXNEcm9wZG93bk9wZW47XG4gIH1cblxuICByZW1vdmVIaWdobGlnaHQoaW5kZXg6IG51bWJlcikge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5vcHRpb25MaXN0LmZvckVhY2goKGVsOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBjb21wbGV0ZXJSb3cgPSBlbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21wbGV0ZXItcm93Jyk7XG4gICAgICAgIGlmIChpID09PSBpbmRleCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCwgJ2hpZ2hsaWdodC1yb3cnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgIGNvbXBsZXRlclJvdy5mb3JFYWNoKChlbGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbSwgJ2hpZ2hsaWdodC1yb3cnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBoaWdobGlnaHRSb3coaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuX2FsbEl0ZW1zID0gdGhpcy5vcHRpb25MaXN0XG4gICAgICAuZmlsdGVyKGVsID0+IGVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZXItcm93JykpXG4gICAgICAubWFwKGVsZW0gPT4gZWxlbS5uYXRpdmVFbGVtZW50KTtcblxuICAgIGlmICh0aGlzLl9hbGxJdGVtc1tpbmRleF0pIHtcbiAgICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKChlbDogYW55LCBpOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgY29tcGxldGVyUm93ID0gZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcGxldGVyLXJvdycpO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gaSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlSGlnaGxpZ2h0KGluZGV4KTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGNvbXBsZXRlclJvd1tjb21wbGV0ZXJSb3cubGVuZ3RoIC0gMV0sICdoaWdobGlnaHQtcm93Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCA9IGluZGV4O1xuICB9XG5cbiAgbmF2aWdhdGVVc2luZ0tleWJvYXJkKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5kcm9wZG93bikge1xuICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgRE9XTl9BUlJPVzpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMubW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcoZXZlbnQua2V5KTtcblxuICAgICAgICAgIGlmICghdGhpcy5pc09wZW4oKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ICsgMSA8PSB0aGlzLl9hbGxJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJvdygrK3RoaXMuX3NlbGVjdGVkSXRlbUluZGV4KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ICsgMSA9PT0gdGhpcy5fYWxsSXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJvdygwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJdGVtSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0Um93KDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudDogYW55ID0gdGhpcy5tZGJPcHRpb25zLmZpbmQoXG4gICAgICAgICAgICAoZWw6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gZWwgJiYgaW5kZXggPT09IHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5lbWl0KHsgdGV4dDogc2VsZWN0ZWRFbGVtZW50LnZhbHVlLCBlbGVtZW50OiBzZWxlY3RlZEVsZW1lbnQgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVVBfQVJST1c6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KGV2ZW50LmtleSk7XG4gICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbUluZGV4ID09PSAtMSB8fCB0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgbGFzdEl0ZW1JbmRleCA9IHRoaXMubWRiT3B0aW9ucy5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJvdyhsYXN0SXRlbUluZGV4KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3coLS10aGlzLl9zZWxlY3RlZEl0ZW1JbmRleCk7XG5cbiAgICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW06IGFueSA9IHRoaXMubWRiT3B0aW9ucy5maW5kKFxuICAgICAgICAgICAgKGVsOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGVsICYmIGluZGV4ID09PSB0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleFxuICAgICAgICAgICk7XG4gICAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QuZW1pdCh7IHRleHQ6IHNlbGVjdGVkSXRlbS52YWx1ZSwgZWxlbWVudDogc2VsZWN0ZWRJdGVtIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEVTQ0FQRTpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEVOVEVSOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMubWRiT3B0aW9ucy5tYXAoZWwgPT4gZWwpW3RoaXMuX3NlbGVjdGVkSXRlbUluZGV4XTtcbiAgICAgICAgICBpZiAoc2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJdGVtKHsgdGV4dDogc2VsZWN0ZWRPcHRpb24udmFsdWUsIGVsZW1lbnQ6IHNlbGVjdGVkT3B0aW9uIH0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3QuZW1pdCh7IHRleHQ6IHNlbGVjdGVkT3B0aW9uLnZhbHVlLCBlbGVtZW50OiBzZWxlY3RlZE9wdGlvbiB9KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh7IHRleHQ6IHNlbGVjdGVkT3B0aW9uLnZhbHVlLCBlbGVtZW50OiBzZWxlY3RlZE9wdGlvbiB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbW92ZUhpZ2hsaWdodGVkSW50b1ZpZXcodHlwZTogc3RyaW5nKSB7XG4gICAgbGV0IGxpc3RIZWlnaHQgPSAwO1xuICAgIGxldCBpdGVtSW5kZXggPSB0aGlzLl9zZWxlY3RlZEl0ZW1JbmRleDtcblxuICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKChlbDogYW55KSA9PiB7XG4gICAgICBsaXN0SGVpZ2h0ICs9IGVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIH0pO1xuXG4gICAgaWYgKGl0ZW1JbmRleCA+IC0xKSB7XG4gICAgICBsZXQgaXRlbUhlaWdodCA9IDA7XG5cbiAgICAgIHRoaXMub3B0aW9uTGlzdC5mb3JFYWNoKChlbDogRWxlbWVudFJlZiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChpID09PSBpdGVtSW5kZXggKyAxKSB7XG4gICAgICAgICAgaXRlbUhlaWdodCA9IGVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgaXRlbVRvcCA9IChpdGVtSW5kZXggKyAxKSAqIGl0ZW1IZWlnaHQ7XG4gICAgICBjb25zdCB2aWV3VG9wID0gdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgIGNvbnN0IHZpZXdCb3R0b20gPSB2aWV3VG9wICsgbGlzdEhlaWdodDtcblxuICAgICAgaWYgKHR5cGUgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsVG9wJywgaXRlbVRvcCAtIGl0ZW1IZWlnaHQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gMCkge1xuICAgICAgICAgIGl0ZW1JbmRleCA9IHRoaXMub3B0aW9uTGlzdC5sZW5ndGggLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1JbmRleC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGl0ZW1JbmRleCA9PT0gdGhpcy5fYWxsSXRlbXMubGVuZ3RoIC0gMikge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgICAnc2Nyb2xsVG9wJyxcbiAgICAgICAgICAgIHZpZXdCb3R0b20gLSBpdGVtSGVpZ2h0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KFxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgJ3Njcm9sbFRvcCcsXG4gICAgICAgICAgICBpdGVtSW5kZXggKiBpdGVtSGVpZ2h0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBvc2l0aW9uKHBhcmFtZXRlcnM6IHsgbGVmdDogbnVtYmVyOyB0b3A6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgYm90dG9tOiBudW1iZXIgfSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZHJvcGRvd24pIHtcbiAgICAgICAgY29uc3QgdG9wID1cbiAgICAgICAgICB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0ID4gcGFyYW1ldGVycy5ib3R0b21cbiAgICAgICAgICAgID8gcGFyYW1ldGVycy50b3AgLSB0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgICAgICAgICA6IHBhcmFtZXRlcnMudG9wO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ3RvcCcsIHRvcCArICdweCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZHJvcGRvd24ubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBwYXJhbWV0ZXJzLmxlZnQgKyAncHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmRyb3Bkb3duLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIHBhcmFtZXRlcnMud2lkdGggKyAncHgnKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBlbmREcm9wZG93bigpIHtcbiAgICBpZiAodGhpcy5faXNCcm93c2VyICYmIHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgIGlmIChib2R5KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoYm9keSwgZHJvcGRvd24pO1xuICAgICAgICB0aGlzLl9jYWxjdWxhdGVBcHBlbmRQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRTaW5nbGVPcHRpb25IZWlnaHQoKSB7XG4gICAgdGhpcy5tZGJPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIG9wdGlvbi5fb3B0aW9uSGVpZ2h0ID0gdGhpcy5fb3B0aW9uSGVpZ2h0O1xuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuX2xpc3RlblRvT3B0aW9uQ2xpY2soKTtcbiAgICB0aGlzLmhpZ2hsaWdodFJvdygwKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgfVxufVxuIl19