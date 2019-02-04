/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Option } from './option';
import { Diacritics } from './diacritics';
var OptionList = /** @class */ (function () {
    function OptionList(options) {
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
        this._options = options.map(function (option) {
            /** @type {?} */
            var o = new Option(option);
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
    Object.defineProperty(OptionList.prototype, "highlightFirst", {
        get: /**
         * @return {?}
         */
        function () { return this._highlightFirst; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._highlightFirst = value;
        },
        enumerable: true,
        configurable: true
    });
    // v0 and v1 are assumed not to be undefined or null.
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    OptionList.equalValues = 
    // v0 and v1 are assumed not to be undefined or null.
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        /** @type {?} */
        var a = v0.slice().sort();
        /** @type {?} */
        var b = v1.slice().sort();
        return a.every(function (v, i) {
            return v === b[i];
        });
    };
    Object.defineProperty(OptionList.prototype, "options", {
        /** Options. **/
        get: /**
         * Options. *
         * @return {?}
         */
        function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    OptionList.prototype.getOptionsByValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.options.filter(function (option) {
            return option.value === value;
        });
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /** Value. **/
        get: /**
         * Value. *
         * @return {?}
         */
        function () {
            return this.selection.map(function (selectedOption) {
                return selectedOption.value;
            });
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach(function (option) {
                option.selected = v.indexOf(option.value) > -1;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /** Selection. **/
        get: /**
         * Selection. *
         * @return {?}
         */
        function () {
            return this.options.filter(function (option) {
                return option.selected;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    OptionList.prototype.select = /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.deselect = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        option.selected = false;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearSelection = /**
     * @return {?}
     */
    function () {
        this.options.forEach(function (option) {
            option.selected = false;
        });
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /** Filter. **/
        get: /**
         * Filter. *
         * @return {?}
         */
        function () {
            return this.options.filter(function (option) {
                return option.shown;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    OptionList.prototype.filter = /**
     * @param {?} term
     * @return {?}
     */
    function (term) {
        /** @type {?} */
        var anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach(function (option) {
                /** @type {?} */
                var l = Diacritics.strip(option.label).toUpperCase();
                /** @type {?} */
                var t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
                if (option.shown) {
                    anyShown = true;
                }
            });
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.resetFilter = /**
     * @private
     * @return {?}
     */
    function () {
        this.options.forEach(function (option) {
            option.shown = true;
        });
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /** Highlight. **/
        get: /**
         * Highlight. *
         * @return {?}
         */
        function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.highlight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var firstShown = this.getFirstShown();
        /** @type {?} */
        var firstSelected = this.getFirstShownSelected();
        if (this.highlightFirst && firstShown && !firstSelected) {
            this.highlightOption(firstShown);
        }
        else {
            this.highlightOption(firstSelected);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.highlightOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightNextOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownOptions = this.filtered;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index < shownOptions.length - 1) {
            this.highlightOption(shownOptions[index + 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightPreviousOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shownOptions = this.filtered;
        /** @type {?} */
        var index = this.getHighlightedIndexFromList(shownOptions);
        if (index > 0) {
            this.highlightOption(shownOptions[index - 1]);
        }
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.clearHighlightedOption = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndexFromList = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        for (var i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndex = /**
     * @return {?}
     */
    function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    Object.defineProperty(OptionList.prototype, "hasShown", {
        /** Util. **/
        get: /**
         * Util. *
         * @return {?}
         */
        function () {
            return this._hasShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.hasSelected = /**
     * @return {?}
     */
    function () {
        return this.options.some(function (option) {
            return option.selected;
        });
    };
    /**
     * @return {?}
     */
    OptionList.prototype.hasShownSelected = /**
     * @return {?}
     */
    function () {
        return this.options.some(function (option) {
            return option.shown && option.selected;
        });
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShown = /**
     * @private
     * @return {?}
     */
    function () {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown && !option.group && !option.disabled) {
                    return option;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        // return null;
        return this.setToNullValue;
    };
    /**
     * @private
     * @return {?}
     */
    OptionList.prototype.getFirstShownSelected = /**
     * @private
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(this.options), _c = _b.next(); !_c.done; _c = _b.next()) {
                var option = _c.value;
                if (option.shown && option.selected) {
                    return option;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        // return null;
        return this.setToNullValue;
    };
    return OptionList;
}());
export { OptionList };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWxpc3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL21hdGVyaWFsLXNlbGVjdC9vcHRpb24tbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFaEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUV4QztJQW9DRSxvQkFBWSxPQUF1Qjs7Ozs7O1FBMUIzQix1QkFBa0IsR0FBaUIsSUFBSSxDQUFDO1FBU3pDLG1CQUFjLEdBQVEsSUFBSSxDQUFDO1FBbUJoQyxJQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3RELE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLE1BQU07O2dCQUMzQixDQUFDLEdBQVcsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ3BDLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDbkIsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDbkI7WUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNoQjtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQTFDRCxzQkFBSSxzQ0FBYzs7OztRQUFsQixjQUF1QixPQUFPLElBQUksQ0FBQyxlQUFlLENB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RSxLQUFxQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQSxnQkFBQSw0QkFBRTtnQkFBOUIsSUFBTSxNQUFNLFdBQUE7Z0JBQ2YsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQ3JELE9BQU8sTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7Ozs7Ozs7OztRQUNELGVBQWU7UUFDZixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFFTywwQ0FBcUI7Ozs7SUFBN0I7OztZQUNFLEtBQXFCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsT0FBTyxDQUFBLGdCQUFBLDRCQUFFO2dCQUE5QixJQUFNLE1BQU0sV0FBQTtnQkFDZixJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtvQkFDbkMsT0FBTyxNQUFNLENBQUM7aUJBQ2Y7YUFDRjs7Ozs7Ozs7O1FBQ0QsZUFBZTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUgsaUJBQUM7QUFBRCxDQUFDLEFBNVBELElBNFBDOzs7Ozs7O0lBMVBDLDhCQUFnQzs7Ozs7SUFRaEMsd0NBQWdEOzs7OztJQUNoRCwrQkFBMkI7Ozs7O0lBRTNCLHFDQUFpQzs7SUFNakMsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcHRpb259IGZyb20gJy4vb3B0aW9uJztcbmltcG9ydCB7SU9wdGlvbn0gZnJvbSAnLi9vcHRpb24taW50ZXJmYWNlJztcbmltcG9ydCB7RGlhY3JpdGljc30gZnJvbSAnLi9kaWFjcml0aWNzJztcblxuZXhwb3J0IGNsYXNzIE9wdGlvbkxpc3Qge1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IEFycmF5PE9wdGlvbj47XG5cbiAgLyogQ29uc2lkZXIgdXNpbmcgdGhlc2UgZm9yIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50LiAqL1xuICAvLyBwcml2YXRlIF9zZWxlY3Rpb246IEFycmF5PE9wdGlvbj47XG4gIC8vIHByaXZhdGUgX2ZpbHRlcmVkOiBBcnJheTxPcHRpb24+O1xuICAvLyBwcml2YXRlIF92YWx1ZTogQXJyYXk8c3RyaW5nPjtcblxuICAvLyBwcml2YXRlIF9oaWdobGlnaHRlZE9wdGlvbjogT3B0aW9uID0gbnVsbDtcbiAgcHJpdmF0ZSBfaGlnaGxpZ2h0ZWRPcHRpb246IE9wdGlvbiB8IGFueSA9IG51bGw7XG4gIHByaXZhdGUgX2hhc1Nob3duOiBib29sZWFuO1xuXG4gIHByaXZhdGUgX2hpZ2hsaWdodEZpcnN0OiBib29sZWFuO1xuICBnZXQgaGlnaGxpZ2h0Rmlyc3QoKSB7IHJldHVybiB0aGlzLl9oaWdobGlnaHRGaXJzdDsgfVxuICBzZXQgaGlnaGxpZ2h0Rmlyc3QodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oaWdobGlnaHRGaXJzdCA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHNldFRvTnVsbFZhbHVlOiBhbnkgPSBudWxsO1xuXG4gIC8vIHYwIGFuZCB2MSBhcmUgYXNzdW1lZCBub3QgdG8gYmUgdW5kZWZpbmVkIG9yIG51bGwuXG4gIHN0YXRpYyBlcXVhbFZhbHVlcyh2MDogQXJyYXk8c3RyaW5nPiwgdjE6IEFycmF5PHN0cmluZz4pOiBib29sZWFuIHtcblxuICAgIGlmICh2MC5sZW5ndGggIT09IHYxLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGE6IEFycmF5PHN0cmluZz4gPSB2MC5zbGljZSgpLnNvcnQoKTtcbiAgICBjb25zdCBiOiBBcnJheTxzdHJpbmc+ID0gdjEuc2xpY2UoKS5zb3J0KCk7XG5cbiAgICByZXR1cm4gYS5ldmVyeSgodiwgaSkgPT4ge1xuICAgICAgcmV0dXJuIHYgPT09IGJbaV07XG4gICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBBcnJheTxJT3B0aW9uPikge1xuXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJyB8fCBvcHRpb25zID09PSBudWxsKSB7XG4gICAgICBvcHRpb25zID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IG86IE9wdGlvbiA9IG5ldyBPcHRpb24ob3B0aW9uKTtcbiAgICAgIGlmIChvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgby5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9uLmdyb3VwKSB7XG4gICAgICAgIG8uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBvLmdyb3VwID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvO1xuICAgIH0pO1xuXG4gICAgdGhpcy5faGFzU2hvd24gPSB0aGlzLl9vcHRpb25zLmxlbmd0aCA+IDA7XG4gICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgfVxuXG4gIC8qKiBPcHRpb25zLiAqKi9cblxuICBnZXQgb3B0aW9ucygpOiBBcnJheTxPcHRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcbiAgfVxuXG4gIGdldE9wdGlvbnNCeVZhbHVlKHZhbHVlOiBzdHJpbmcpOiBBcnJheTxPcHRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9uLnZhbHVlID09PSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBWYWx1ZS4gKiovXG5cbiAgZ2V0IHZhbHVlKCk6IEFycmF5PHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGlvbi5tYXAoKHNlbGVjdGVkT3B0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb24udmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICBzZXQgdmFsdWUodjogQXJyYXk8c3RyaW5nPikge1xuICAgIHYgPSB0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgfHwgdiA9PT0gbnVsbCA/IFtdIDogdjtcblxuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHYuaW5kZXhPZihvcHRpb24udmFsdWUpID4gLTE7XG4gICAgfSk7XG4gIH1cblxuICAvKiogU2VsZWN0aW9uLiAqKi9cblxuICBnZXQgc2VsZWN0aW9uKCk6IEFycmF5PE9wdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2VsZWN0ZWQ7XG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3Qob3B0aW9uOiBPcHRpb24sIG11bHRpcGxlOiBib29sZWFuKSB7XG4gICAgaWYgKCFtdWx0aXBsZSkge1xuICAgICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgIH1cbiAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZGVzZWxlY3Qob3B0aW9uOiBPcHRpb24pIHtcbiAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGNsZWFyU2VsZWN0aW9uKCkge1xuICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEZpbHRlci4gKiovXG5cbiAgZ2V0IGZpbHRlcmVkKCk6IEFycmF5PE9wdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2hvd247XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXIodGVybTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgbGV0IGFueVNob3duID0gZmFsc2U7XG5cbiAgICBpZiAodGVybS50cmltKCkgPT09ICcnKSB7XG4gICAgICB0aGlzLnJlc2V0RmlsdGVyKCk7XG4gICAgICBhbnlTaG93biA9IHRoaXMub3B0aW9ucy5sZW5ndGggPiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGw6IHN0cmluZyA9IERpYWNyaXRpY3Muc3RyaXAob3B0aW9uLmxhYmVsKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCB0OiBzdHJpbmcgPSBEaWFjcml0aWNzLnN0cmlwKHRlcm0pLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIG9wdGlvbi5zaG93biA9IGwuaW5kZXhPZih0KSA+IC0xO1xuXG4gICAgICAgIGlmIChvcHRpb24uc2hvd24pIHtcbiAgICAgICAgICBhbnlTaG93biA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdGhpcy5oaWdobGlnaHQoKTtcbiAgICB0aGlzLl9oYXNTaG93biA9IGFueVNob3duO1xuXG4gICAgcmV0dXJuIGFueVNob3duO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEZpbHRlcigpIHtcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICBvcHRpb24uc2hvd24gPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqIEhpZ2hsaWdodC4gKiovXG5cbiAgZ2V0IGhpZ2hsaWdodGVkT3B0aW9uKCk6IE9wdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hpZ2hsaWdodGVkT3B0aW9uO1xuICB9XG5cbiAgaGlnaGxpZ2h0KCkge1xuICAgIGNvbnN0IGZpcnN0U2hvd246IE9wdGlvbiA9IHRoaXMuZ2V0Rmlyc3RTaG93bigpO1xuICAgIGNvbnN0IGZpcnN0U2VsZWN0ZWQ6IE9wdGlvbiA9IHRoaXMuZ2V0Rmlyc3RTaG93blNlbGVjdGVkKCk7XG5cbiAgICBpZiAodGhpcy5oaWdobGlnaHRGaXJzdCAmJiBmaXJzdFNob3duICYmICFmaXJzdFNlbGVjdGVkKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihmaXJzdFNob3duKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWdobGlnaHRPcHRpb24oZmlyc3RTZWxlY3RlZCk7XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0T3B0aW9uKG9wdGlvbjogT3B0aW9uKSB7XG4gICAgdGhpcy5jbGVhckhpZ2hsaWdodGVkT3B0aW9uKCk7XG5cbiAgICBpZiAob3B0aW9uICE9PSBudWxsKSB7XG4gICAgICBvcHRpb24uaGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5faGlnaGxpZ2h0ZWRPcHRpb24gPSBvcHRpb247XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0TmV4dE9wdGlvbigpIHtcbiAgICBjb25zdCBzaG93bk9wdGlvbnMgPSB0aGlzLmZpbHRlcmVkO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRIaWdobGlnaHRlZEluZGV4RnJvbUxpc3Qoc2hvd25PcHRpb25zKTtcblxuICAgIGlmIChpbmRleCA8IHNob3duT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihzaG93bk9wdGlvbnNbaW5kZXggKyAxXSk7XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0UHJldmlvdXNPcHRpb24oKSB7XG4gICAgY29uc3Qgc2hvd25PcHRpb25zID0gdGhpcy5maWx0ZXJlZDtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KHNob3duT3B0aW9ucyk7XG5cbiAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodE9wdGlvbihzaG93bk9wdGlvbnNbaW5kZXggLSAxXSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckhpZ2hsaWdodGVkT3B0aW9uKCkge1xuICAgIGlmICh0aGlzLmhpZ2hsaWdodGVkT3B0aW9uICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkT3B0aW9uLmhpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgICB0aGlzLl9oaWdobGlnaHRlZE9wdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRIaWdobGlnaHRlZEluZGV4RnJvbUxpc3Qob3B0aW9uczogQXJyYXk8T3B0aW9uPikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG9wdGlvbnNbaV0uaGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGdldEhpZ2hsaWdodGVkSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0SGlnaGxpZ2h0ZWRJbmRleEZyb21MaXN0KHRoaXMuZmlsdGVyZWQpO1xuICB9XG5cbiAgLyoqIFV0aWwuICoqL1xuXG4gIGdldCBoYXNTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzU2hvd247XG4gIH1cblxuICBoYXNTZWxlY3RlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnNvbWUoKG9wdGlvbikgPT4ge1xuICAgICAgcmV0dXJuIG9wdGlvbi5zZWxlY3RlZDtcbiAgICB9KTtcbiAgfVxuXG4gIGhhc1Nob3duU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5zb21lKChvcHRpb24pID0+IHtcbiAgICAgIHJldHVybiBvcHRpb24uc2hvd24gJiYgb3B0aW9uLnNlbGVjdGVkO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXJzdFNob3duKCk6IE9wdGlvbiB7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uLnNob3duICYmICFvcHRpb24uZ3JvdXAgJiYgIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5zZXRUb051bGxWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rmlyc3RTaG93blNlbGVjdGVkKCk6IE9wdGlvbiB7XG4gICAgZm9yIChjb25zdCBvcHRpb24gb2YgdGhpcy5vcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9uLnNob3duICYmIG9wdGlvbi5zZWxlY3RlZCkge1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGhpcy5zZXRUb051bGxWYWx1ZTtcbiAgfVxuXG59XG4iXX0=