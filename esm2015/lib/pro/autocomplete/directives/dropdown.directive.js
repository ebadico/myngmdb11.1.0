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
export class CtrRowItem {
    /**
     * @param {?} row
     * @param {?} index
     */
    constructor(row, index) {
        this.row = row;
        this.index = index;
    }
}
if (false) {
    /** @type {?} */
    CtrRowItem.prototype.row;
    /** @type {?} */
    CtrRowItem.prototype.index;
}
export class MdbDropdownDirective {
    /**
     * @param {?} completer
     * @param {?} el
     */
    constructor(completer, el) {
        this.completer = completer;
        this.el = el;
        this.setToNullValue = null;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === 'auto';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.completer.registerDropdown(null);
        this.completer.registerDropdown(this.setToNullValue);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        const autoHighlightIndex = this.completer.autoHighlightIndex;
        if (autoHighlightIndex) {
            setTimeout(() => {
                this.highlightRow(autoHighlightIndex);
            }, 0);
        }
    }
    /**
     * @return {?}
     */
    onMouseDown() {
        // Support for canceling blur on IE (issue #158)
        this.completer.cancelBlur(true);
        setTimeout(() => {
            this.completer.cancelBlur(false);
        }, 0);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    registerRow(row) {
        this.rows.push(row);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    highlightRow(index) {
        /** @type {?} */
        const highlighted = this.rows.find(row => row.index === index);
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
            const rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                /** @type {?} */
                const row = this.currHighlighted.row.getNativeElement();
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
    }
    /**
     * @return {?}
     */
    clear() {
        this.rows = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelected(item) {
        this.completer.onSelected(item);
    }
    /**
     * @return {?}
     */
    selectCurrent() {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    }
    /**
     * @return {?}
     */
    nextRow() {
        /** @type {?} */
        let nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    }
    /**
     * @return {?}
     */
    prevRow() {
        /** @type {?} */
        let nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    }
    /**
     * @private
     * @param {?} offset
     * @return {?}
     */
    dropdownScrollTopTo(offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    }
    /**
     * @private
     * @return {?}
     */
    dropdownRowTop() {
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                // parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
                parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop)), 10));
    }
    /**
     * @private
     * @return {?}
     */
    dropdownHeight() {
        return this.el.nativeElement.getBoundingClientRect().top +
            // parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
            parseInt((/** @type {?} */ (getComputedStyle(this.el.nativeElement).maxHeight)), 10);
    }
    /**
     * @private
     * @param {?} row
     * @return {?}
     */
    dropdownRowOffsetHeight(row) {
        /** @type {?} */
        const css = getComputedStyle(row);
        return row.offsetHeight +
            // parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
            parseInt((/** @type {?} */ (css.marginTop)), 10) + parseInt((/** @type {?} */ (css.marginBottom)), 10);
    }
}
MdbDropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbAutocompleteDropdown]',
            },] }
];
/** @nocollapse */
MdbDropdownDirective.ctorParameters = () => [
    { type: MdbCompleterDirective, decorators: [{ type: Host }] },
    { type: ElementRef }
];
MdbDropdownDirective.propDecorators = {
    onMouseDown: [{ type: HostListener, args: ['mousedown',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hdXRvY29tcGxldGUvZGlyZWN0aXZlcy9kcm9wZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUc1RyxPQUFPLEVBQUUscUJBQXFCLEVBQXFCLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHakYsbUNBSUM7Ozs7OztJQUhDLGlFQUF3Qzs7OztJQUN4QywyREFBd0I7Ozs7SUFDeEIsc0RBQTZCOztBQUcvQixNQUFNLE9BQU8sVUFBVTs7Ozs7SUFDckIsWUFBbUIsR0FBa0IsRUFBUyxLQUFhO1FBQXhDLFFBQUcsR0FBSCxHQUFHLENBQWU7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUksQ0FBQztDQUNqRTs7O0lBRGEseUJBQXlCOztJQUFFLDJCQUFvQjs7QUFNN0QsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFTL0IsWUFBNkIsU0FBZ0MsRUFBVSxFQUFjO1FBQXhELGNBQVMsR0FBVCxTQUFTLENBQXVCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVA5RSxtQkFBYyxHQUFRLElBQUksQ0FBQztRQUMxQixTQUFJLEdBQWlCLEVBQUUsQ0FBQztRQU85QixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFTSxRQUFROztjQUNQLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUM7SUFDOUQsQ0FBQzs7OztJ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LG1CQUFBLEdBQUcsQ0FBQyxTQUFTLEVBQU8sRUFBRSxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsbUJBQUEsR0FBRyxDQUFDLFlBQVksRUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7OztZQXhKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjthQUN0Qzs7OztZQWZRLHFCQUFxQix1QkF5QmQsSUFBSTtZQTVCZSxVQUFVOzs7MEJBc0QxQyxZQUFZLFNBQUMsV0FBVzs7OztJQWpDekIsOENBQWtDOzs7OztJQUNsQyxvQ0FBZ0M7Ozs7O0lBRWhDLCtDQUEwQzs7Ozs7SUFFMUMsMENBQWtDOzs7OztJQUVyQix5Q0FBZ0Q7Ozs7O0lBQUUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0LCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbXBsZXRlckl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBsZXRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZGJDb21wbGV0ZXJEaXJlY3RpdmUsIENvbXBsZXRlckRyb3Bkb3duIH0gZnJvbSAnLi9jb21wbGV0ZXIuZGlyZWN0aXZlJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEN0clJvd0VsZW1lbnQge1xuICBzZXRIaWdobGlnaHRlZChzZWxlY3RlZDogYm9vbGVhbik6IHZvaWQ7XG4gIGdldE5hdGl2ZUVsZW1lbnQoKTogYW55O1xuICBnZXREYXRhSXRlbSgpOiBDb21wbGV0ZXJJdGVtO1xufVxuXG5leHBvcnQgY2xhc3MgQ3RyUm93SXRlbSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByb3c6IEN0clJvd0VsZW1lbnQsIHB1YmxpYyBpbmRleDogbnVtYmVyKSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkF1dG9jb21wbGV0ZURyb3Bkb3duXScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYkRyb3Bkb3duRGlyZWN0aXZlIGltcGxlbWVudHMgQ29tcGxldGVyRHJvcGRvd24sIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBwdWJsaWMgc2V0VG9OdWxsVmFsdWU6IGFueSA9IG51bGw7XG4gIHByaXZhdGUgcm93czogQ3RyUm93SXRlbVtdID0gW107XG4gIC8vIHByaXZhdGUgY3VyckhpZ2hsaWdodGVkOiBDdHJSb3dJdGVtO1xuICBwcml2YXRlIGN1cnJIaWdobGlnaHRlZDogQ3RyUm93SXRlbSB8IGFueTtcbiAgLy8gcHJpdmF0ZSBpc1Njcm9sbE9uOiBib29sZWFuO1xuICBwcml2YXRlIGlzU2Nyb2xsT246IGJvb2xlYW4gfCBhbnk7XG5cbiAgY29uc3RydWN0b3IoIEBIb3N0KCkgcHJpdmF0ZSBjb21wbGV0ZXI6IE1kYkNvbXBsZXRlckRpcmVjdGl2ZSwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xuICAgIHRoaXMuY29tcGxldGVyLnJlZ2lzdGVyRHJvcGRvd24odGhpcyk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuaXNTY3JvbGxPbiA9IGNzcy5tYXhIZWlnaHQgJiYgY3NzLm92ZXJmbG93WSA9PT0gJ2F1dG8nO1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHRoaXMuY29tcGxldGVyLnJlZ2lzdGVyRHJvcGRvd24obnVsbCk7XG4gICAgdGhpcy5jb21wbGV0ZXIucmVnaXN0ZXJEcm9wZG93bih0aGlzLnNldFRvTnVsbFZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgYXV0b0hpZ2hsaWdodEluZGV4ID0gdGhpcy5jb21wbGV0ZXIuYXV0b0hpZ2hsaWdodEluZGV4O1xuICAgIGlmIChhdXRvSGlnaGxpZ2h0SW5kZXgpIHtcbiAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZ2hsaWdodFJvdyhhdXRvSGlnaGxpZ2h0SW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICAwXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicpIHB1YmxpYyBvbk1vdXNlRG93bigpIHtcbiAgICAvLyBTdXBwb3J0IGZvciBjYW5jZWxpbmcgYmx1ciBvbiBJRSAoaXNzdWUgIzE1OClcbiAgICB0aGlzLmNvbXBsZXRlci5jYW5jZWxCbHVyKHRydWUpO1xuICAgIHNldFRpbWVvdXQoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuY29tcGxldGVyLmNhbmNlbEJsdXIoZmFsc2UpO1xuICAgICAgfSxcbiAgICAgIDBcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHJlZ2lzdGVyUm93KHJvdzogQ3RyUm93SXRlbSkge1xuICAgIHRoaXMucm93cy5wdXNoKHJvdyk7XG4gIH1cblxuICBwdWJsaWMgaGlnaGxpZ2h0Um93KGluZGV4OiBudW1iZXIpOiBhbnkge1xuXG4gICAgY29uc3QgaGlnaGxpZ2h0ZWQgPSB0aGlzLnJvd3MuZmluZChyb3cgPT4gcm93LmluZGV4ID09PSBpbmRleCk7XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBpZiAodGhpcy5jdXJySGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgdGhpcy5jdXJySGlnaGxpZ2h0ZWQucm93LnNldEhpZ2hsaWdodGVkKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3VyckhpZ2hsaWdodGVkID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5jb21wbGV0ZXIub25IaWdobGlnaHRlZCh0aGlzLnNldFRvTnVsbFZhbHVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWhpZ2hsaWdodGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY3VyckhpZ2hsaWdodGVkKSB7XG4gICAgICB0aGlzLmN1cnJIaWdobGlnaHRlZC5yb3cuc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMuY3VyckhpZ2hsaWdodGVkID0gaGlnaGxpZ2h0ZWQ7XG4gICAgdGhpcy5jdXJySGlnaGxpZ2h0ZWQucm93LnNldEhpZ2hsaWdodGVkKHRydWUpO1xuICAgIHRoaXMuY29tcGxldGVyLm9uSGlnaGxpZ2h0ZWQodGhpcy5jdXJySGlnaGxpZ2h0ZWQucm93LmdldERhdGFJdGVtKCkpO1xuXG4gICAgaWYgKHRoaXMuaXNTY3JvbGxPbiAmJiB0aGlzLmN1cnJIaWdobGlnaHRlZCkge1xuICAgICAgY29uc3Qgcm93VG9wID0gdGhpcy5kcm9wZG93blJvd1RvcCgpO1xuICAgICAgaWYgKHJvd1RvcCA8IDApIHtcbiAgICAgICAgdGhpcy5kcm9wZG93blNjcm9sbFRvcFRvKHJvd1RvcCAtIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgcm93ID0gdGhpcy5jdXJySGlnaGxpZ2h0ZWQucm93LmdldE5hdGl2ZUVsZW1lbnQoKTtcbiAgICAgICAgaWYgKHRoaXMuZHJvcGRvd25IZWlnaHQoKSA8IHJvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20pIHtcbiAgICAgICAgICB0aGlzLmRyb3Bkb3duU2Nyb2xsVG9wVG8odGhpcy5kcm9wZG93blJvd09mZnNldEhlaWdodChyb3cpKTtcbiAgICAgICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbSAtIHRoaXMuZHJvcGRvd25Sb3dPZmZzZXRIZWlnaHQocm93KVxuICAgICAgICAgICAgPCByb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duU2Nyb2xsVG9wVG8ocm93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgICAgICAgICAvLyArIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5wYWRkaW5nVG9wLCAxMCkpKTtcbiAgICAgICAgICAgICsgcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpLnBhZGRpbmdUb3AgYXMgYW55LCAxMCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgdGhpcy5yb3dzID0gW107XG4gIH1cblxuICBwdWJsaWMgb25TZWxlY3RlZChpdGVtOiBDb21wbGV0ZXJJdGVtKSB7XG4gICAgdGhpcy5jb21wbGV0ZXIub25TZWxlY3RlZChpdGVtKTtcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3RDdXJyZW50KCkge1xuICAgIGlmICh0aGlzLmN1cnJIaWdobGlnaHRlZCkge1xuICAgICAgdGhpcy5vblNlbGVjdGVkKHRoaXMuY3VyckhpZ2hsaWdodGVkLnJvdy5nZXREYXRhSXRlbSgpKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucm93cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm9uU2VsZWN0ZWQodGhpcy5yb3dzWzBdLnJvdy5nZXREYXRhSXRlbSgpKTtcbiAgICB9XG5cbiAgfVxuXG4gIHB1YmxpYyBuZXh0Um93KCkge1xuICAgIGxldCBuZXh0Um93SW5kZXggPSAwO1xuICAgIGlmICh0aGlzLmN1cnJIaWdobGlnaHRlZCkge1xuICAgICAgbmV4dFJvd0luZGV4ID0gdGhpcy5jdXJySGlnaGxpZ2h0ZWQuaW5kZXggKyAxO1xuICAgIH1cbiAgICB0aGlzLmhpZ2hsaWdodFJvdyhuZXh0Um93SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIHByZXZSb3coKSB7XG4gICAgbGV0IG5leHRSb3dJbmRleCA9IC0xO1xuICAgIGlmICh0aGlzLmN1cnJIaWdobGlnaHRlZCkge1xuICAgICAgbmV4dFJvd0luZGV4ID0gdGhpcy5jdXJySGlnaGxpZ2h0ZWQuaW5kZXggLSAxO1xuICAgIH1cbiAgICB0aGlzLmhpZ2hsaWdodFJvdyhuZXh0Um93SW5kZXgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcm9wZG93blNjcm9sbFRvcFRvKG9mZnNldDogYW55KSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgKyBvZmZzZXQ7XG4gIH1cblxuICBwcml2YXRlIGRyb3Bkb3duUm93VG9wKCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJIaWdobGlnaHRlZC5yb3cuZ2V0TmF0aXZlRWxlbWVudCgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtXG4gICAgICAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArXG4gICAgICAgIC8vIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5wYWRkaW5nVG9wLCAxMCkpO1xuICAgICAgICBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCkucGFkZGluZ1RvcCBhcyBhbnksIDEwKSk7XG4gIH1cblxuICBwcml2YXRlIGRyb3Bkb3duSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICtcbiAgICAgIC8vIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5tYXhIZWlnaHQsIDEwKTtcbiAgICAgIHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50KS5tYXhIZWlnaHQgYXMgYW55LCAxMCk7XG4gIH1cblxuICBwcml2YXRlIGRyb3Bkb3duUm93T2Zmc2V0SGVpZ2h0KHJvdzogYW55KSB7XG4gICAgY29uc3QgY3NzID0gZ2V0Q29tcHV0ZWRTdHlsZShyb3cpO1xuICAgIHJldHVybiByb3cub2Zmc2V0SGVpZ2h0ICtcbiAgICAgIC8vIHBhcnNlSW50KGNzcy5tYXJnaW5Ub3AsIDEwKSArIHBhcnNlSW50KGNzcy5tYXJnaW5Cb3R0b20sIDEwKTtcbiAgICAgIHBhcnNlSW50KGNzcy5tYXJnaW5Ub3AgYXMgYW55LCAxMCkgKyBwYXJzZUludChjc3MubWFyZ2luQm90dG9tIGFzIGFueSwgMTApO1xuICB9XG59XG4iXX0=