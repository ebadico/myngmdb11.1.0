/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Option } from './option';
import { Diacritics } from './diacritics';
export class OptionList {
    /**
     * @param {?} options
     */
    constructor(options) {
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
        this._options = options.map((option) => {
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
        });
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    /**
     * @return {?}
     */
    get highlightFirst() { return this._highlightFirst; }
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
        return a.every((v, i) => {
            return v === b[i];
        });
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
        return this.options.filter((option) => {
            return option.value === value;
        });
    }
    /**
     * Value. *
     * @return {?}
     */
    get value() {
        return this.selection.map((selectedOption) => {
            return selectedOption.value;
        });
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        v = typeof v === 'undefined' || v === null ? [] : v;
        this.options.forEach((option) => {
            option.selected = v.indexOf(option.value) > -1;
        });
    }
    /**
     * Selection. *
     * @return {?}
     */
    get selection() {
        return this.options.filter((option) => {
            return option.selected;
        });
    }
    /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    select(option, multiple) {
        if (!multiple) {
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
        this.options.forEach((option) => {
            option.selected = false;
        });
    }
    /**
     * Filter. *
     * @return {?}
     */
    get filtered() {
        return this.options.filter((option) => {
            return option.shown;
        });
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
            this.options.forEach((option) => {
                /** @type {?} */
                const l = Diacritics.strip(option.label).toUpperCase();
                /** @type {?} */
                const t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            });
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
        this.options.forEach((option) => {
            option.shown = true;
        });
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
        return this.options.some((option) => {
            return option.selected;
        });
    }
    /**
     * @return {?}
     */
    hasShownSelected() {
        return this.options.some((option) => {
            return option.shown && option.selected;
        });
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWxpc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL21hdGVyaWFsLXNlbGVjdC9vcHRpb24tbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUVoQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRXhDLE1BQU0sT0FBTyxVQUFVOzs7O0lBb0NyQixZQUFZLE9BQXVCOzs7Ozs7UUExQjNCLHVCQUFrQixHQUFpQixJQUFJLENBQUM7UUFTekMsbUJBQWMsR0FBUSxJQUFJLENBQUM7UUFtQmhDLElBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDdEQsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNkO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7O2tCQUMvQixDQUFDLEdBQVcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDbkIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDbkI7WUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNoQjtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQTFDRCxJQUFJLGNBQWMsS0FBSyxPQUFP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QUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTyxxQkFBcUI7UUFDM0IsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pDLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUNuQyxPQUFPLE1BQU0sQ0FBQzthQUNmO1NBQ0Y7UUFDRCxlQUFlO1FBQ2YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7Q0FFRjs7Ozs7O0lBMVBDLDhCQUFnQzs7Ozs7SUFRaEMsd0NBQWdEOzs7OztJQUNoRCwrQkFBMkI7Ozs7O0lBRTNCLHFDQUFpQzs7SUFNakMsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcHRpb259IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7SU9wdGlvbn0gZnJvbSAnLi9vcHRpb24taW50ZXJmYWNlJztcbmltcG9ydCB7RGlhY3JpdGljc30gZnJvbSAnLi9kaWFjcml0aWNzJztcblxuZXhwb3J0IGNsYXNzIE9wdGlvbkxpc3Qge1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IEFycmF5PE9wdGlvbj47XG5cbiAgLyogQ29uc2lkZXIgdXNpbmcgdGhlc2UgZm9yIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50LiAqL1xuICAvLyBwcml2YXRlIF9zZWxlY3Rpb246IEFycmF5PE9wdGlvbj47XG4gIC8vIHByaXZhdGUgX2ZpbHRlcmVkOiBBcnJheTxPcHRpb24+O1xuICAvLyBwcml2YXRlIF92YWx1ZTogQXJyYXk8c3RyaW5nPjtcblxuICAvLyBwcml2YXRlIF9oaWdobGlnaHRlZE9wdGlvbjogT3B0aW9uID0gbnVsbDtcbiAgcHJpdmF0ZSBfaGlnaGxpZ2h0ZWRPcHRpb246IE9wdGlvbiB8IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2hhc1Nob3duOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2hpZ2hsaWdodEZpcnN0OiBib29sZWFuO1xuICBnZXQgaGlnaGxpZ2h0Rmlyc3QoKSB7IHJldHVybiB0aGlzLl9oaWdobGlnaHRGaXJzdDsgfVxuICBzZXQgaGlnaGxpZ2h0Rmlyc3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWdobGlnaHRGaXJzdCA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHNldFRvTnVsbFZhbHVlOiBhbnkgPSBudWxsO1xuXG4gIC8vIHYwIGFuZCB2MSBhcmUgYXNzdW1lZCBub3QgdG8gYmUgdW5kZWZpbmVkIG9yIG51bGwuXG4gIHN0YXRpYyBlcXVhbFZhbHVlcyh2MDogQXJyYXk8c3RyaW5nPiwgdjE6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcblxuICAgIGlmICh2MC5sZW5ndGggIT09IHYxLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGE6IEFycmF5PHN0cmluZz4gPSB2MC5zbGljZSgpLnNvcnQoKTtcbiAgICBjb25zdCBiOiBBcnJheTxzdHJpbmc+ID0gdjEuc2xpY2UoKS5zb3J0KCk7XG5cbiAgICByZXR1cm4gYS5ldmVyeSgodiwgaSkgPT4ge1xuICAgICAgcmV0dXJuIHYgPT09IGJbaV07XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBBcnJheTxJT3B0aW9uPikge1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyB8fCBvcHRpb25zID09PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IG86IE9wdGlvbiA9IG5ldyBPcHRpb24ob3B0aW9uKTtcbiAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgby5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9uLmdyb3VwKSB7XG4gICAgICAgIG8uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBvLmdyb3VwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvO1xuICAgIH0pO1xuXG4gICAgdGhpcy5faGFzU2hvd24gPSB0aGlzLl9vcHRpb25zLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKiBPcHRpb25zLiAqKi9cblxuICBnZXQgb3B0aW9ucygpOiBBcnJheTxPcHRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIGdldE9wdGlvbnNCeVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBBcnJheTxPcHRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9uLnZhbHVlID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBWYWx1ZS4gKiovXG5cbiAgZ2V0IHZhbHVlKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5tYXAoKHNlbGVjdGVkT3B0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb24udmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBzZXQgdmFsdWUodjogQXJyYXk8c3RyaW5nPikge1xuICAgIHYgPSB0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCA/IFtdIDogdjtcblxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHYuaW5kZXhPZihvcHRpb24udmFsdWUpID4gLTE7XG4gICAgfSk7XG4gIH1cblxuICAvKiogU2VsZWN0aW9uLiAqKi9cblxuICBnZXQgc2VsZWN0aW9uKCk6IEFycmF5PE9wdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQ7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3Qob3B0aW9uOiBPcHRpb24sIG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgIH1cbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVzZWxlY3Qob3B0aW9uOiBPcHRpb24pIHtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEZpbHRlci4gKiovXG5cbiAgZ2V0IGZpbHRlcmVkKCk6IEFycmF5PE9wdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2hvd247XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXIodGVybTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IGFueVNob3duID0gZmFsc2U7XG5cbiAgICBpZiAodGVybS50cmltKCkgPT09ICcnKSB7XG4gICAgICB0aGlzLnJlc2V0RmlsdGVyKCk7XG4gICAgICBhbnlTaG93biA9IHRoaXMub3B0aW9ucy5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGw6IHN0cmluZyA9IERpYWNyaXRpY3Muc3RyaXAob3B0aW9uLmxhYmVsKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCB0OiBzdHJpbmcgPSBEaWFjcml0aWNzLnN0cmlwKHRlcm0pLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIG9wdGlvbi5zaG93biA9IGwuaW5kZXhPZih0KSA+IC0xO1xuXG4gICAgICAgIGlmIChvcHRpb24uc2hvd24pIHtcbiAgICAgICAgICBhbnlTaG93biA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgICB0aGlzLl9oYXNTaG93biA9IGFueVNob3duO1xuXG4gICAgcmV0dXJuIGFueVNob3duO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEZpbHRlcigpIHtcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBvcHRpb24uc2hvd24gPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEhpZ2hsaWdodC4gKiovXG5cbiAgZ2V0IGhpZ2hsaWdodGVkT3B0aW9uKCk6IE9wdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZ2hsaWdodGVkT3B0aW9uO1xuICB9XG5cbiAgaGlnaGxpZ2h0KCkge1xuICAgIGNvbnN0IGZpcnN0U2hvd246IE9wdGlvbiA9IHRoaXMuZ2V0Rmlyc3RTaG93bigpO1xuICAgIGNvbnN0IGZpcnN0U2VsZWN0ZWQ6IE9wdGlvbiA9IHRoaXMuZ2V0Rmlyc3RTaG93blNlbGVjdGVkKCk7XG5cbiAgICBpZiAodGhpcy5oaWdobGlnaHRGaXJzdCAmJiBmaXJzdFNob3duICYmICFmaXJzdFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihmaXJzdFNob3duKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24oZmlyc3RTZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0T3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5jbGVhckhpZ2hsaWdodGVkT3B0aW9uKCk7XG5cbiAgICBpZiAob3B0aW9uICE9PSBudWxsKSB7XG4gICAgICBvcHRpb24uaGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0TmV4dE9wdGlvbigpIHtcbiAgICBjb25zdCBzaG93bk9wdGlvbnMgPSB0aGlzLmZpbHRlcmVkO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRIaWdobGlnaHRlZEluZGV4RnJvbUxpc3Qoc2hvd25PcHRpb25zKTtcblxuICAgIGlmIChpbmRleCA8IHNob3duT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihzaG93bk9wdGlvbnNbaW5kZXggKyAxXSk7XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0UHJldmlvdXNPcHRpb24oKSB7XG4gICAgY29uc3Qgc2hvd25PcHRpb25zID0gdGhpcy5maWx0ZXJlZDtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KHNob3duT3B0aW9ucyk7XG5cbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihzaG93bk9wdGlvbnNbaW5kZXggLSAxXSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckhpZ2hsaWdodGVkT3B0aW9uKCkge1xuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkT3B0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkT3B0aW9uLmhpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9oaWdobGlnaHRlZE9wdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIaWdobGlnaHRlZEluZGV4RnJvbUxpc3Qob3B0aW9uczogQXJyYXk8T3B0aW9uPikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9wdGlvbnNbaV0uaGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGdldEhpZ2hsaWdodGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KHRoaXMuZmlsdGVyZWQpO1xuICB9XG5cbiAgLyoqIFV0aWwuICoqL1xuXG4gIGdldCBoYXNTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzU2hvd247XG4gIH1cblxuICBoYXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvbWUoKG9wdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIG9wdGlvbi5zZWxlY3RlZDtcbiAgICB9KTtcbiAgfVxuXG4gIGhhc1Nob3duU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb21lKChvcHRpb24pID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2hvd24gJiYgb3B0aW9uLnNlbGVjdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXJzdFNob3duKCk6IE9wdGlvbiB7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uLnNob3duICYmICFvcHRpb24uZ3JvdXAgJiYgIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5zZXRUb051bGxWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rmlyc3RTaG93blNlbGVjdGVkKCk6IE9wdGlvbiB7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uLnNob3duICYmIG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5zZXRUb051bGxWYWx1ZTtcbiAgfVxuXG59XG4iXX0=