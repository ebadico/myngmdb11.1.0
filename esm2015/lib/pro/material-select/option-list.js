/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Option } from './option';
import { Diacritics } from './diacritics';
export class OptionList {
    /**
     * @param {?} options
     * @param {?=} _multiple
     */
    constructor(options, _multiple = false) {
        this._multiple = _multiple;
        /* Consider using these for performance improvement. */
        // private _selection: Array<Option>;
        // private _filtered: Array<Option>;
        // private _value: Array<string>;
        // private _highlightedOption: Option = null;
        this._highlightedOption = null;
        this.setToNullValue = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            /** @type {?} */
            const o = new Option(option);
            if (option.disabled) {
                o.disabled = true;
            }
            if (option.group) {
                o.disabled = true;
                o.group = true;
            }
            return o;
        }));
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    /**
     * @return {?}
     */
    get highlightFirst() {
        return this._highlightFirst;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set highlightFirst(value) {
        this._highlightFirst = value;
    }
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    static equalValues(v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        /** @type {?} */
        const a = v0.slice().sort();
        /** @type {?} */
        const b = v1.slice().sort();
        return a.every((/**
         * @param {?} v
         * @param {?} i
         * @return {?}
         */
        (v, i) => {
            return v === b[i];
        }));
    }
    /**
     * Options. *
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getOptionsByValue(value) {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            return option.value === value;
        }));
    }
    /**
     * Value. *
     * @return {?}
     */
    get value() {
        return this.selection.map((/**
         * @param {?} selectedOption
         * @return {?}
         */
        selectedOption => {
            return selectedOption.value;
        }));
    }
    /**
     * Selection. *
     * @return {?}
     */
    get selection() {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            return option.selected;
        }));
    }
    /**
     * @param {?} option
     * @return {?}
     */
    select(option) {
        if (!this._multiple) {
            this.clearSelection();
        }
        option.selected = true;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    deselect(option) {
        option.selected = false;
    }
    /**
     * @return {?}
     */
    clearSelection() {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            option.selected = false;
        }));
    }
    /**
     * Filter. *
     * @return {?}
     */
    get filtered() {
        return this.options.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            return option.shown;
        }));
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        /** @type {?} */
        let anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                /** @type {?} */
                const l = Diacritics.strip(option.label).toUpperCase();
                /** @type {?} */
                const t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            }));
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    }
    /**
     * @private
     * @return {?}
     */
    resetFilter() {
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            option.shown = true;
        }));
    }
    /**
     * Highlight. *
     * @return {?}
     */
    get highlightedOption() {
        return this._highlightedOption;
    }
    /**
     * @return {?}
     */
    highlight() {
        /** @type {?} */
        const firstShown = this.getFirstShown();
        /** @type {?} */
        const firstSelected = this.getFirstShownSelected();
        if (this.highlightFirst && firstShown && !firstSelected) {
            this.highlightOption(firstShown);
        }
        else {
            this.highlightOption(firstSelected);
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    highlightOption(option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    }
    /**
     * @return {?}
     */
    highlightNextOption() {
        /** @type {?} */
        const shownOptions = this.filtered;
        /** @type {?} */
        const index = this.getHighlightedIndexFromList(shownOptions);
        if (index < shownOptions.length - 1) {
            this.highlightOption(shownOptions[index + 1]);
        }
    }
    /**
     * @return {?}
     */
    highlightPreviousOption() {
        /** @type {?} */
        const shownOptions = this.filtered;
        /** @type {?} */
        const index = this.getHighlightedIndexFromList(shownOptions);
        if (index > 0) {
            this.highlightOption(shownOptions[index - 1]);
        }
    }
    /**
     * @private
     * @return {?}
     */
    clearHighlightedOption() {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    getHighlightedIndexFromList(options) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @return {?}
     */
    getHighlightedIndex() {
        return this.getHighlightedIndexFromList(this.filtered);
    }
    /**
     * Util. *
     * @return {?}
     */
    get hasShown() {
        return this._hasShown;
    }
    /**
     * @return {?}
     */
    hasSelected() {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            return option.selected;
        }));
    }
    /**
     * @return {?}
     */
    hasShownSelected() {
        return this.options.some((/**
         * @param {?} option
         * @return {?}
         */
        option => {
            return option.shown && option.selected;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getFirstShown() {
        for (const option of this.options) {
            if (option.shown && !option.group && !option.disabled) {
                return option;
            }
        }
        // return null;
        return this.setToNullValue;
    }
    /**
     * @private
     * @return {?}
     */
    getFirstShownSelected() {
        for (const option of this.options) {
            if (option.shown && option.selected) {
                return option;
            }
        }
        // return null;
        return this.setToNullValue;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._options;
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._highlightedOption;
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._hasShown;
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._highlightFirst;
    /** @type {?} */
    OptionList.prototype.setToNullValue;
    /**
     * @type {?}
     * @private
     */
    OptionList.prototype._multiple;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWxpc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL21hdGVyaWFsLXNlbGVjdC9vcHRpb24tbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFDLE1BQU0sT0FBTyxVQUFVOzs7OztJQW9DckIsWUFBWSxPQUF1QixFQUFVLFlBQVksS0FBSztRQUFqQixjQUFTLEdBQVQsU0FBUyxDQUFROzs7Ozs7UUEzQnRELHVCQUFrQixHQUFpQixJQUFJLENBQUM7UUFXekMsbUJBQWMsR0FBUSxJQUFJLENBQUM7UUFpQmhDLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEQsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFOztrQkFDN0IsQ0FBQyxHQUFXLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ25CLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNoQixDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDaEI7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFD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QTJCOzs7OztJQUUzQixxQ0FBaUM7O0lBUWpDLG9DQUFrQzs7Ozs7SUFnQkcsK0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi9vcHRpb24nO1xuaW1wb3J0IHsgSU9wdGlvbiB9IGZyb20gJy4vb3B0aW9uLWludGVyZmFjZSc7XG5pbXBvcnQgeyBEaWFjcml0aWNzIH0gZnJvbSAnLi9kaWFjcml0aWNzJztcblxuZXhwb3J0IGNsYXNzIE9wdGlvbkxpc3Qge1xuICBwcml2YXRlIF9vcHRpb25zOiBBcnJheTxPcHRpb24+O1xuXG4gIC8qIENvbnNpZGVyIHVzaW5nIHRoZXNlIGZvciBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC4gKi9cbiAgLy8gcHJpdmF0ZSBfc2VsZWN0aW9uOiBBcnJheTxPcHRpb24+O1xuICAvLyBwcml2YXRlIF9maWx0ZXJlZDogQXJyYXk8T3B0aW9uPjtcbiAgLy8gcHJpdmF0ZSBfdmFsdWU6IEFycmF5PHN0cmluZz47XG5cbiAgLy8gcHJpdmF0ZSBfaGlnaGxpZ2h0ZWRPcHRpb246IE9wdGlvbiA9IG51bGw7XG4gIHByaXZhdGUgX2hpZ2hsaWdodGVkT3B0aW9uOiBPcHRpb24gfCBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9oYXNTaG93bjogYm9vbGVhbjtcblxuICBwcml2YXRlIF9oaWdobGlnaHRGaXJzdDogYm9vbGVhbjtcbiAgZ2V0IGhpZ2hsaWdodEZpcnN0KCkge1xuICAgIHJldHVybiB0aGlzLl9oaWdobGlnaHRGaXJzdDtcbiAgfVxuICBzZXQgaGlnaGxpZ2h0Rmlyc3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWdobGlnaHRGaXJzdCA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHNldFRvTnVsbFZhbHVlOiBhbnkgPSBudWxsO1xuXG4gIC8vIHYwIGFuZCB2MSBhcmUgYXNzdW1lZCBub3QgdG8gYmUgdW5kZWZpbmVkIG9yIG51bGwuXG4gIHN0YXRpYyBlcXVhbFZhbHVlcyh2MDogQXJyYXk8c3RyaW5nPiwgdjE6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcbiAgICBpZiAodjAubGVuZ3RoICE9PSB2MS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBhOiBBcnJheTxzdHJpbmc+ID0gdjAuc2xpY2UoKS5zb3J0KCk7XG4gICAgY29uc3QgYjogQXJyYXk8c3RyaW5nPiA9IHYxLnNsaWNlKCkuc29ydCgpO1xuXG4gICAgcmV0dXJuIGEuZXZlcnkoKHYsIGkpID0+IHtcbiAgICAgIHJldHVybiB2ID09PSBiW2ldO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogQXJyYXk8SU9wdGlvbj4sIHByaXZhdGUgX211bHRpcGxlID0gZmFsc2UpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnIHx8IG9wdGlvbnMgPT09IG51bGwpIHtcbiAgICAgIG9wdGlvbnMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9vcHRpb25zID0gb3B0aW9ucy5tYXAob3B0aW9uID0+IHtcbiAgICAgIGNvbnN0IG86IE9wdGlvbiA9IG5ldyBPcHRpb24ob3B0aW9uKTtcbiAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgby5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9uLmdyb3VwKSB7XG4gICAgICAgIG8uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBvLmdyb3VwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvO1xuICAgIH0pO1xuXG4gICAgdGhpcy5faGFzU2hvd24gPSB0aGlzLl9vcHRpb25zLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKiBPcHRpb25zLiAqKi9cblxuICBnZXQgb3B0aW9ucygpOiBBcnJheTxPcHRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIGdldE9wdGlvbnNCeVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBBcnJheTxPcHRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcihvcHRpb24gPT4ge1xuICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZSA9PT0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvKiogVmFsdWUuICoqL1xuXG4gIGdldCB2YWx1ZSgpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24ubWFwKHNlbGVjdGVkT3B0aW9uID0+IHtcbiAgICAgIHJldHVybiBzZWxlY3RlZE9wdGlvbi52YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBTZWxlY3Rpb24uICoqL1xuXG4gIGdldCBzZWxlY3Rpb24oKTogQXJyYXk8T3B0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQ7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3Qob3B0aW9uOiBPcHRpb24pIHtcbiAgICBpZiAoIXRoaXMuX211bHRpcGxlKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBkZXNlbGVjdChvcHRpb246IE9wdGlvbikge1xuICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgY2xlYXJTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEZpbHRlci4gKiovXG5cbiAgZ2V0IGZpbHRlcmVkKCk6IEFycmF5PE9wdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9uLnNob3duO1xuICAgIH0pO1xuICB9XG5cbiAgZmlsdGVyKHRlcm06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGxldCBhbnlTaG93biA9IGZhbHNlO1xuXG4gICAgaWYgKHRlcm0udHJpbSgpID09PSAnJykge1xuICAgICAgdGhpcy5yZXNldEZpbHRlcigpO1xuICAgICAgYW55U2hvd24gPSB0aGlzLm9wdGlvbnMubGVuZ3RoID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgbDogc3RyaW5nID0gRGlhY3JpdGljcy5zdHJpcChvcHRpb24ubGFiZWwpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHQ6IHN0cmluZyA9IERpYWNyaXRpY3Muc3RyaXAodGVybSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgb3B0aW9uLnNob3duID0gbC5pbmRleE9mKHQpID4gLTE7XG5cbiAgICAgICAgaWYgKG9wdGlvbi5zaG93bikge1xuICAgICAgICAgIGFueVNob3duID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgICB0aGlzLl9oYXNTaG93biA9IGFueVNob3duO1xuXG4gICAgcmV0dXJuIGFueVNob3duO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEZpbHRlcigpIHtcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgb3B0aW9uLnNob3duID0gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBIaWdobGlnaHQuICoqL1xuXG4gIGdldCBoaWdobGlnaHRlZE9wdGlvbigpOiBPcHRpb24ge1xuICAgIHJldHVybiB0aGlzLl9oaWdobGlnaHRlZE9wdGlvbjtcbiAgfVxuXG4gIGhpZ2hsaWdodCgpIHtcbiAgICBjb25zdCBmaXJzdFNob3duOiBPcHRpb24gPSB0aGlzLmdldEZpcnN0U2hvd24oKTtcbiAgICBjb25zdCBmaXJzdFNlbGVjdGVkOiBPcHRpb24gPSB0aGlzLmdldEZpcnN0U2hvd25TZWxlY3RlZCgpO1xuXG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0Rmlyc3QgJiYgZmlyc3RTaG93biAmJiAhZmlyc3RTZWxlY3RlZCkge1xuICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24oZmlyc3RTaG93bik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0T3B0aW9uKGZpcnN0U2VsZWN0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGhpZ2hsaWdodE9wdGlvbihvcHRpb246IE9wdGlvbikge1xuICAgIHRoaXMuY2xlYXJIaWdobGlnaHRlZE9wdGlvbigpO1xuXG4gICAgaWYgKG9wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgb3B0aW9uLmhpZ2hsaWdodGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodGVkT3B0aW9uID0gb3B0aW9uO1xuICAgIH1cbiAgfVxuXG4gIGhpZ2hsaWdodE5leHRPcHRpb24oKSB7XG4gICAgY29uc3Qgc2hvd25PcHRpb25zID0gdGhpcy5maWx0ZXJlZDtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KHNob3duT3B0aW9ucyk7XG5cbiAgICBpZiAoaW5kZXggPCBzaG93bk9wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24oc2hvd25PcHRpb25zW2luZGV4ICsgMV0pO1xuICAgIH1cbiAgfVxuXG4gIGhpZ2hsaWdodFByZXZpb3VzT3B0aW9uKCkge1xuICAgIGNvbnN0IHNob3duT3B0aW9ucyA9IHRoaXMuZmlsdGVyZWQ7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEhpZ2hsaWdodGVkSW5kZXhGcm9tTGlzdChzaG93bk9wdGlvbnMpO1xuXG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24oc2hvd25PcHRpb25zW2luZGV4IC0gMV0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJIaWdobGlnaHRlZE9wdGlvbigpIHtcbiAgICBpZiAodGhpcy5oaWdobGlnaHRlZE9wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5oaWdobGlnaHRlZE9wdGlvbi5oaWdobGlnaHRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRPcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KG9wdGlvbnM6IEFycmF5PE9wdGlvbj4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChvcHRpb25zW2ldLmhpZ2hsaWdodGVkKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICBnZXRIaWdobGlnaHRlZEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLmdldEhpZ2hsaWdodGVkSW5kZXhGcm9tTGlzdCh0aGlzLmZpbHRlcmVkKTtcbiAgfVxuXG4gIC8qKiBVdGlsLiAqKi9cblxuICBnZXQgaGFzU2hvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1Nob3duO1xuICB9XG5cbiAgaGFzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb21lKG9wdGlvbiA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9uLnNlbGVjdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgaGFzU2hvd25TZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvbWUob3B0aW9uID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2hvd24gJiYgb3B0aW9uLnNlbGVjdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXJzdFNob3duKCk6IE9wdGlvbiB7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uLnNob3duICYmICFvcHRpb24uZ3JvdXAgJiYgIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5zZXRUb051bGxWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rmlyc3RTaG93blNlbGVjdGVkKCk6IE9wdGlvbiB7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uLnNob3duICYmIG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5zZXRUb051bGxWYWx1ZTtcbiAgfVxufVxuIl19