/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Host, HostListener } from '@angular/core';
import { MdbCompleterDirective } from './completer.directive';
/**
 * @record
 */
export function CtrRowElement() { }
if (false) {
    /**
     * @param {?} selected
     * @return {?}
     */
    CtrRowElement.prototype.setHighlighted = function (selected) { };
    /**
     * @return {?}
     */
    CtrRowElement.prototype.getNativeElement = function () { };
    /**
     * @return {?}
     */
    CtrRowElement.prototype.getDataItem = function () { };
}
var CtrRowItem = /** @class */ (function () {
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());
export { CtrRowItem };
if (false) {
    /** @type {?} */
    CtrRowItem.prototype.row;
    /** @type {?} */
    CtrRowItem.prototype.index;
}
var MdbDropdownDirective = /** @class */ (function () {
    function MdbDropdownDirective(completer, el) {
        this.completer = completer;
        this.el = el;
        this.setToNullValue = null;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === 'auto';
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.completer.registerDropdown(null);
        this.completer.registerDropdown(this.setToNullValue);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var autoHighlightIndex = this.completer.autoHighlightIndex;
        if (autoHighlightIndex) {
            setTimeout(function () {
                _this.highlightRow(autoHighlightIndex);
            }, 0);
        }
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.onMouseDown = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Support for canceling blur on IE (issue #158)
        this.completer.cancelBlur(true);
        setTimeout(function () {
            _this.completer.cancelBlur(false);
        }, 0);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    MdbDropdownDirective.prototype.registerRow = /**
     * @param {?} row
     * @return {?}
     */
    function (row) {
        this.rows.push(row);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbDropdownDirective.prototype.highlightRow = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var highlighted = this.rows.find(function (row) { return row.index === index; });
        if (index < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(this.setToNullValue);
            return;
        }
        if (!highlighted) {
            return;
        }
        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }
        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());
        if (this.isScrollOn && this.currHighlighted) {
            /** @type {?} */
            var rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                /** @type {?} */
                var row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row)
                        < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top
                            // + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
                            + parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop)), 10)));
                    }
                }
            }
        }
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.rows = [];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MdbDropdownDirective.prototype.onSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.completer.onSelected(item);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.selectCurrent = /**
     * @return {?}
     */
    function () {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.nextRow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.prevRow = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    };
    /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownScrollTopTo = /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    /**
     * @private
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownRowTop = /**
     * @private
     * @return {?}
     */
    function () {
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                // parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
                parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop)), 10));
    };
    /**
     * @private
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownHeight = /**
     * @private
     * @return {?}
     */
    function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            // parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
            parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).maxHeight)), 10);
    };
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownRowOffsetHeight = /**
     * @private
     * @param {?} row
     * @return {?}
     */
    function (row) {
        /** @type {?} */
        var css = getComputedStyle(row);
        return row.offsetHeight +
            // parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
            parseInt((/** @type {?} */ (css.marginTop)), 10) + parseInt((/** @type {?} */ (css.marginBottom)), 10);
    };
    MdbDropdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbAutocompleteDropdown]',
                },] }
    ];
    /** @nocollapse */
    MdbDropdownDirective.ctorParameters = function () { return [
        { type: MdbCompleterDirective, decorators: [{ type: Host }] },
        { type: ElementRef }
    ]; };
    MdbDropdownDirective.propDecorators = {
        onMouseDown: [{ type: HostListener, args: ['mousedown',] }]
    };
    return MdbDropdownDirective;
}());
export { MdbDropdownDirective };
if (false) {
    /** @type {?} */
    MdbDropdownDirective.prototype.setToNullValue;
    /**
     * @type {?}
     * @private
     */
    MdbDropdownDirective.prototype.rows;
    /**
     * @type {?}
     * @private
     */
    MdbDropdownDirective.prototype.currHighlighted;
    /**
     * @type {?}
     * @private
     */
    MdbDropdownDirective.prototype.isScrollOn;
    /**
     * @type {?}
     * @private
     */
    MdbDropdownDirective.prototype.completer;
    /**
     * @type {?}
     * @private
     */
    MdbDropdownDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hdXRvY29tcGxldGUvZGlyZWN0aXZlcy9kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUc1RyxPQUFPLEVBQUUscUJBQXFCLEVBQXFCLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHakYsbUNBSUM7Ozs7OztJQUhDLGlFQUF3Qzs7OztJQUN4QywyREFBd0I7Ozs7SUFDeEIsc0RBQTZCOztBQUcvQjtJQUNFLG9CQUFtQixHQUFrQixFQUFTLEtBQWE7UUFBeEMsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7SUFBSSxDQUFDO0lBQ2xFLGlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7Ozs7SUFEYSx5QkFBeUI7O0lBQUUsMkJBQW9COztBQUc3RDtJQVlFLDhCQUE2QixTQUFnQyxFQUFVLEVBQWM7UUFBeEQsY0FBUyxHQUFULFNBQVMsQ0FBdUI7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBUDlFLG1CQUFjLEdBQVEsSUFBSSxDQUFDO1FBQzFCLFNBQUksR0FBaUIsRUFBRSxDQUFDO1FBTzlCLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVNLHVDQUFROzs7SUFBZjs7WUFDUSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDO0lBQzlELENBQUM7Ozs7SUFFTSww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M0UsQ0FBQzs7Ozs7O0lBRU8sc0RBQXVCOzs7OztJQUEvQixVQUFnQyxHQUFROztZQUNoQyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO1FBQ2pDLE9BQU8sR0FBRyxDQUFDLFlBQVk7WUFDckIsZ0VBQWdFO1lBQ2hFLFFBQVEsQ0FBQyxtQkFBQSxHQUFHLENBQUMsU0FBUyxFQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLG1CQUFBLEdBQUcsQ0FBQyxZQUFZLEVBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDOztnQkF4SkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7aUJBQ3RDOzs7O2dCQWZRLHFCQUFxQix1QkF5QmQsSUFBSTtnQkE1QmUsVUFBVTs7OzhCQXNEMUMsWUFBWSxTQUFDLFdBQVc7O0lBbUgzQiwyQkFBQztDQUFBLEFBekpELElBeUpDO1NBdEpZLG9CQUFvQjs7O0lBRS9CLDhDQUFrQzs7Ozs7SUFDbEMsb0NBQWdDOzs7OztJQUVoQywrQ0FBMEM7Ozs7O0lBRTFDLDBDQUFrQzs7Ozs7SUFFckIseUNBQWdEOzs7OztJQUFFLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21wbGV0ZXJJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb21wbGV0ZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWRiQ29tcGxldGVyRGlyZWN0aXZlLCBDb21wbGV0ZXJEcm9wZG93biB9IGZyb20gJy4vY29tcGxldGVyLmRpcmVjdGl2ZSc7XG5cblxuZXhwb3J0IGludGVyZmFjZSBDdHJSb3dFbGVtZW50IHtcbiAgc2V0SGlnaGxpZ2h0ZWQoc2VsZWN0ZWQ6IGJvb2xlYW4pOiB2b2lkO1xuICBnZXROYXRpdmVFbGVtZW50KCk6IGFueTtcbiAgZ2V0RGF0YUl0ZW0oKTogQ29tcGxldGVySXRlbTtcbn1cblxuZXhwb3J0IGNsYXNzIEN0clJvd0l0ZW0ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcm93OiBDdHJSb3dFbGVtZW50LCBwdWJsaWMgaW5kZXg6IG51bWJlcikgeyB9XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJBdXRvY29tcGxldGVEcm9wZG93bl0nLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJEcm9wZG93bkRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbXBsZXRlckRyb3Bkb3duLCBPbkRlc3Ryb3ksIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHVibGljIHNldFRvTnVsbFZhbHVlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIHJvd3M6IEN0clJvd0l0ZW1bXSA9IFtdO1xuICAvLyBwcml2YXRlIGN1cnJIaWdobGlnaHRlZDogQ3RyUm93SXRlbTtcbiAgcHJpdmF0ZSBjdXJySGlnaGxpZ2h0ZWQ6IEN0clJvd0l0ZW0gfCBhbnk7XG4gIC8vIHByaXZhdGUgaXNTY3JvbGxPbjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBpc1Njcm9sbE9uOiBib29sZWFuIHwgYW55O1xuXG4gIGNvbnN0cnVjdG9yKCBASG9zdCgpIHByaXZhdGUgY29tcGxldGVyOiBNZGJDb21wbGV0ZXJEaXJlY3RpdmUsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmNvbXBsZXRlci5yZWdpc3RlckRyb3Bkb3duKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLmlzU2Nyb2xsT24gPSBjc3MubWF4SGVpZ2h0ICYmIGNzcy5vdmVyZmxvd1kgPT09ICdhdXRvJztcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyB0aGlzLmNvbXBsZXRlci5yZWdpc3RlckRyb3Bkb3duKG51bGwpO1xuICAgIHRoaXMuY29tcGxldGVyLnJlZ2lzdGVyRHJvcGRvd24odGhpcy5zZXRUb051bGxWYWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGF1dG9IaWdobGlnaHRJbmRleCA9IHRoaXMuY29tcGxldGVyLmF1dG9IaWdobGlnaHRJbmRleDtcbiAgICBpZiAoYXV0b0hpZ2hsaWdodEluZGV4KSB7XG4gICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oaWdobGlnaHRSb3coYXV0b0hpZ2hsaWdodEluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nKSBwdWJsaWMgb25Nb3VzZURvd24oKSB7XG4gICAgLy8gU3VwcG9ydCBmb3IgY2FuY2VsaW5nIGJsdXIgb24gSUUgKGlzc3VlICMxNTgpXG4gICAgdGhpcy5jb21wbGV0ZXIuY2FuY2VsQmx1cih0cnVlKTtcbiAgICBzZXRUaW1lb3V0KFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbXBsZXRlci5jYW5jZWxCbHVyKGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICAwXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlclJvdyhyb3c6IEN0clJvd0l0ZW0pIHtcbiAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xuICB9XG5cbiAgcHVibGljIGhpZ2hsaWdodFJvdyhpbmRleDogbnVtYmVyKTogYW55IHtcblxuICAgIGNvbnN0IGhpZ2hsaWdodGVkID0gdGhpcy5yb3dzLmZpbmQocm93ID0+IHJvdy5pbmRleCA9PT0gaW5kZXgpO1xuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaWYgKHRoaXMuY3VyckhpZ2hsaWdodGVkKSB7XG4gICAgICAgIHRoaXMuY3VyckhpZ2hsaWdodGVkLnJvdy5zZXRIaWdobGlnaHRlZChmYWxzZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmN1cnJIaWdobGlnaHRlZCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuY29tcGxldGVyLm9uSGlnaGxpZ2h0ZWQodGhpcy5zZXRUb051bGxWYWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFoaWdobGlnaHRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmN1cnJIaWdobGlnaHRlZCkge1xuICAgICAgdGhpcy5jdXJySGlnaGxpZ2h0ZWQucm93LnNldEhpZ2hsaWdodGVkKGZhbHNlKTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJIaWdobGlnaHRlZCA9IGhpZ2hsaWdodGVkO1xuICAgIHRoaXMuY3VyckhpZ2hsaWdodGVkLnJvdy5zZXRIaWdobGlnaHRlZCh0cnVlKTtcbiAgICB0aGlzLmNvbXBsZXRlci5vbkhpZ2hsaWdodGVkKHRoaXMuY3VyckhpZ2hsaWdodGVkLnJvdy5nZXREYXRhSXRlbSgpKTtcblxuICAgIGlmICh0aGlzLmlzU2Nyb2xsT24gJiYgdGhpcy5jdXJySGlnaGxpZ2h0ZWQpIHtcbiAgICAgIGNvbnN0IHJvd1RvcCA9IHRoaXMuZHJvcGRvd25Sb3dUb3AoKTtcbiAgICAgIGlmIChyb3dUb3AgPCAwKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd25TY3JvbGxUb3BUbyhyb3dUb3AgLSAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHRoaXMuY3VyckhpZ2hsaWdodGVkLnJvdy5nZXROYXRpdmVFbGVtZW50KCk7XG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duSGVpZ2h0KCkgPCByb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tKSB7XG4gICAgICAgICAgdGhpcy5kcm9wZG93blNjcm9sbFRvcFRvKHRoaXMuZHJvcGRvd25Sb3dPZmZzZXRIZWlnaHQocm93KSk7XG4gICAgICAgICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSB0aGlzLmRyb3Bkb3duUm93T2Zmc2V0SGVpZ2h0KHJvdylcbiAgICAgICAgICAgIDwgcm93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCkge1xuICAgICAgICAgICAgdGhpcy5kcm9wZG93blNjcm9sbFRvcFRvKHJvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcFxuICAgICAgICAgICAgLy8gKyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCkucGFkZGluZ1RvcCwgMTApKSk7XG4gICAgICAgICAgICArIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5wYWRkaW5nVG9wIGFzIGFueSwgMTApKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyKCkge1xuICAgIHRoaXMucm93cyA9IFtdO1xuICB9XG5cbiAgcHVibGljIG9uU2VsZWN0ZWQoaXRlbTogQ29tcGxldGVySXRlbSkge1xuICAgIHRoaXMuY29tcGxldGVyLm9uU2VsZWN0ZWQoaXRlbSk7XG4gIH1cblxuICBwdWJsaWMgc2VsZWN0Q3VycmVudCgpIHtcbiAgICBpZiAodGhpcy5jdXJySGlnaGxpZ2h0ZWQpIHtcbiAgICAgIHRoaXMub25TZWxlY3RlZCh0aGlzLmN1cnJIaWdobGlnaHRlZC5yb3cuZ2V0RGF0YUl0ZW0oKSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5vblNlbGVjdGVkKHRoaXMucm93c1swXS5yb3cuZ2V0RGF0YUl0ZW0oKSk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgbmV4dFJvdygpIHtcbiAgICBsZXQgbmV4dFJvd0luZGV4ID0gMDtcbiAgICBpZiAodGhpcy5jdXJySGlnaGxpZ2h0ZWQpIHtcbiAgICAgIG5leHRSb3dJbmRleCA9IHRoaXMuY3VyckhpZ2hsaWdodGVkLmluZGV4ICsgMTtcbiAgICB9XG4gICAgdGhpcy5oaWdobGlnaHRSb3cobmV4dFJvd0luZGV4KTtcbiAgfVxuXG4gIHB1YmxpYyBwcmV2Um93KCkge1xuICAgIGxldCBuZXh0Um93SW5kZXggPSAtMTtcbiAgICBpZiAodGhpcy5jdXJySGlnaGxpZ2h0ZWQpIHtcbiAgICAgIG5leHRSb3dJbmRleCA9IHRoaXMuY3VyckhpZ2hsaWdodGVkLmluZGV4IC0gMTtcbiAgICB9XG4gICAgdGhpcy5oaWdobGlnaHRSb3cobmV4dFJvd0luZGV4KTtcbiAgfVxuXG4gIHByaXZhdGUgZHJvcGRvd25TY3JvbGxUb3BUbyhvZmZzZXQ6IGFueSkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wICsgb2Zmc2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wZG93blJvd1RvcCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJySGlnaGxpZ2h0ZWQucm93LmdldE5hdGl2ZUVsZW1lbnQoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLVxuICAgICAgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgK1xuICAgICAgICAvLyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCkucGFkZGluZ1RvcCwgMTApKTtcbiAgICAgICAgcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnBhZGRpbmdUb3AgYXMgYW55LCAxMCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wZG93bkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArXG4gICAgICAvLyBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCkubWF4SGVpZ2h0LCAxMCk7XG4gICAgICBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCkubWF4SGVpZ2h0IGFzIGFueSwgMTApO1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wZG93blJvd09mZnNldEhlaWdodChyb3c6IGFueSkge1xuICAgIGNvbnN0IGNzcyA9IGdldENvbXB1dGVkU3R5bGUocm93KTtcbiAgICByZXR1cm4gcm93Lm9mZnNldEhlaWdodCArXG4gICAgICAvLyBwYXJzZUludChjc3MubWFyZ2luVG9wLCAxMCkgKyBwYXJzZUludChjc3MubWFyZ2luQm90dG9tLCAxMCk7XG4gICAgICBwYXJzZUludChjc3MubWFyZ2luVG9wIGFzIGFueSwgMTApICsgcGFyc2VJbnQoY3NzLm1hcmdpbkJvdHRvbSBhcyBhbnksIDEwKTtcbiAgfVxufVxuIl19