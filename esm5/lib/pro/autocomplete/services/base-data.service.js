/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Subject } from 'rxjs';
import { isNil } from '../globals';
/**
 * @abstract
 */
var /**
 * @abstract
 */
CompleterBaseData = /** @class */ (function (_super) {
    tslib_1.__extends(CompleterBaseData, _super);
    function CompleterBaseData() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    CompleterBaseData.prototype.cancel = /**
     * @return {?}
     */
    function () { };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} searchFields
     * @return {THIS}
     */
    CompleterBaseData.prototype.searchFields = /**
     * @template THIS
     * @this {THIS}
     * @param {?} searchFields
     * @return {THIS}
     */
    function (searchFields) {
        (/** @type {?} */ (this))._searchFields = searchFields;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} titleField
     * @return {THIS}
     */
    CompleterBaseData.prototype.titleField = /**
     * @template THIS
     * @this {THIS}
     * @param {?} titleField
     * @return {THIS}
     */
    function (titleField) {
        (/** @type {?} */ (this))._titleField = titleField;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} descriptionField
     * @return {THIS}
     */
    CompleterBaseData.prototype.descriptionField = /**
     * @template THIS
     * @this {THIS}
     * @param {?} descriptionField
     * @return {THIS}
     */
    function (descriptionField) {
        (/** @type {?} */ (this))._descriptionField = descriptionField;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} imageField
     * @return {THIS}
     */
    CompleterBaseData.prototype.imageField = /**
     * @template THIS
     * @this {THIS}
     * @param {?} imageField
     * @return {THIS}
     */
    function (imageField) {
        (/** @type {?} */ (this))._imageField = imageField;
        return (/** @type {?} */ (this));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CompleterBaseData.prototype.convertToItem = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // let image: string = null;
        /** @type {?} */
        var image = null;
        /** @type {?} */
        var formattedText;
        // let formattedDesc: string;
        /** @type {?} */
        var formattedDesc;
        if (this._titleField) {
            formattedText = this.extractTitle(data);
        }
        else {
            formattedText = data;
        }
        if (this._descriptionField) {
            formattedDesc = this.extractValue(data, this._descriptionField);
        }
        if (this._imageField) {
            image = this.extractValue(data, this._imageField);
        }
        if (isNil(formattedText)) {
            return null;
        }
        return (/** @type {?} */ ({
            title: formattedText,
            description: formattedDesc,
            image: image,
            originalObject: data
        }));
    };
    /**
     * @protected
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    CompleterBaseData.prototype.extractMatches = /**
     * @protected
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    function (data, term) {
        var _this = this;
        /** @type {?} */
        var matches = [];
        /** @type {?} */
        var searchFields = this._searchFields ? this._searchFields.split(',') : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== '') {
            matches = data.filter(function (item) {
                /** @type {?} */
                var values = searchFields ?
                    searchFields.map(function (searchField) { return _this.extractValue(item, searchField); }).filter(function (value) { return !!value; }) : [item];
                return values.some(function (value) { return value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0; });
            });
        }
        else {
            matches = data;
        }
        return matches;
    };
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    CompleterBaseData.prototype.extractTitle = /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(',')
            .map(function (field) {
            return _this.extractValue(item, field);
        })
            .reduce(function (acc, titlePart) { return acc ? acc + " " + titlePart : titlePart; });
    };
    /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    CompleterBaseData.prototype.extractValue = /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    function (obj, key) {
        /** @type {?} */
        var keys;
        /** @type {?} */
        var result;
        if (key) {
            keys = key.split('.');
            result = obj;
            for (var i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    };
    /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    CompleterBaseData.prototype.processResults = /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    function (matches) {
        /** @type {?} */
        var i;
        /** @type {?} */
        var results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                /** @type {?} */
                var item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    };
    return CompleterBaseData;
}(Subject));
/**
 * @abstract
 */
export { CompleterBaseData };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CompleterBaseData.prototype._searchFields;
    /**
     * @type {?}
     * @protected
     */
    CompleterBaseData.prototype._titleField;
    /**
     * @type {?}
     * @protected
     */
    CompleterBaseData.prototype._descriptionField;
    /**
     * @type {?}
     * @protected
     */
    CompleterBaseData.prototype._imageField;
    /**
     * @abstract
     * @param {?} term
     * @return {?}
     */
    CompleterBaseData.prototype.search = function (term) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9zZXJ2aWNlcy9iYXNlLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUVuQzs7OztJQUFnRCw2Q0FBd0I7SUFRdEU7ZUFDRSxpQkFBTztJQUNULENBQUM7Ozs7SUFJTSxrQ0FBTTs7O0lBQWIsY0FBa0IsQ0FBQzs7Ozs7OztJQUVaLHdDQUFZOzs7Ozs7SUFBbkIsVUFBb0IsWUFBb0I7UUFDdEMsbUJBQUEsSUFBSSxFQUFBLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVNLHNDQUFVOzs7Ozs7SUFBakIsVUFBa0IsVUFBa0I7UUFDbEMsbUJBQUEsSUFBSSxFQUFBLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVNLDRDQUFnQjs7Ozs7O0lBQXZCLFVBQXdCLGdCQUF3QjtRQUM5QyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUMxQyxPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7OztJQUVNLHNDQUFVOzs7Ozs7SUFBakIsVUFBa0IsVUFBa0I7UUFDbEMsbUJBQUEsSUFBSSxFQUFBLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSx5Q0FBYTs7OztJQUFwQixVQUFxQixJQUFT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Y3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29tcGxldGVySXRlbSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcGxldGVyLWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBsZXRlckRhdGEgfSBmcm9tICcuL2NvbXBsZXRlci1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNOaWwgfSBmcm9tICcuLi9nbG9iYWxzJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBsZXRlckJhc2VEYXRhIGV4dGVuZHMgU3ViamVjdDxDb21wbGV0ZXJJdGVtW10+IGltcGxlbWVudHMgQ29tcGxldGVyRGF0YSB7XG5cblxuICBwcm90ZWN0ZWQgX3NlYXJjaEZpZWxkczogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX3RpdGxlRmllbGQ6IHN0cmluZztcbiAgcHJvdGVjdGVkIF9kZXNjcmlwdGlvbkZpZWxkOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfaW1hZ2VGaWVsZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgYWJzdHJhY3Qgc2VhcmNoKHRlcm06IHN0cmluZyk6IHZvaWQ7XG5cbiAgcHVibGljIGNhbmNlbCgpIHsgfVxuXG4gIHB1YmxpYyBzZWFyY2hGaWVsZHMoc2VhcmNoRmllbGRzOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWFyY2hGaWVsZHMgPSBzZWFyY2hGaWVsZHM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgdGl0bGVGaWVsZCh0aXRsZUZpZWxkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl90aXRsZUZpZWxkID0gdGl0bGVGaWVsZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBkZXNjcmlwdGlvbkZpZWxkKGRlc2NyaXB0aW9uRmllbGQ6IHN0cmluZykge1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uRmllbGQgPSBkZXNjcmlwdGlvbkZpZWxkO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGltYWdlRmllbGQoaW1hZ2VGaWVsZDogc3RyaW5nKSB7XG4gICAgdGhpcy5faW1hZ2VGaWVsZCA9IGltYWdlRmllbGQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgY29udmVydFRvSXRlbShkYXRhOiBhbnkpIHtcbiAgICAvLyBsZXQgaW1hZ2U6IHN0cmluZyA9IG51bGw7XG4gICAgbGV0IGltYWdlOiBzdHJpbmcgfCBhbnkgPSBudWxsO1xuICAgIGxldCBmb3JtYXR0ZWRUZXh0OiBzdHJpbmc7XG4gICAgLy8gbGV0IGZvcm1hdHRlZERlc2M6IHN0cmluZztcbiAgICBsZXQgZm9ybWF0dGVkRGVzYzogc3RyaW5nIHwgYW55O1xuXG4gICAgaWYgKHRoaXMuX3RpdGxlRmllbGQpIHtcbiAgICAgIGZvcm1hdHRlZFRleHQgPSB0aGlzLmV4dHJhY3RUaXRsZShkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybWF0dGVkVGV4dCA9IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2Rlc2NyaXB0aW9uRmllbGQpIHtcbiAgICAgIGZvcm1hdHRlZERlc2MgPSB0aGlzLmV4dHJhY3RWYWx1ZShkYXRhLCB0aGlzLl9kZXNjcmlwdGlvbkZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW1hZ2VGaWVsZCkge1xuICAgICAgaW1hZ2UgPSB0aGlzLmV4dHJhY3RWYWx1ZShkYXRhLCB0aGlzLl9pbWFnZUZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAoaXNOaWwoZm9ybWF0dGVkVGV4dCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogZm9ybWF0dGVkVGV4dCxcbiAgICAgIGRlc2NyaXB0aW9uOiBmb3JtYXR0ZWREZXNjLFxuICAgICAgaW1hZ2U6IGltYWdlLFxuICAgICAgb3JpZ2luYWxPYmplY3Q6IGRhdGFcbiAgICB9IGFzIENvbXBsZXRlckl0ZW07XG5cbiAgfVxuXG4gIHByb3RlY3RlZCBleHRyYWN0TWF0Y2hlcyhkYXRhOiBhbnlbXSwgdGVybTogc3RyaW5nKSB7XG4gICAgbGV0IG1hdGNoZXM6IGFueVtdID0gW107XG4gICAgY29uc3Qgc2VhcmNoRmllbGRzID0gdGhpcy5fc2VhcmNoRmllbGRzID8gdGhpcy5fc2VhcmNoRmllbGRzLnNwbGl0KCcsJykgOiBudWxsO1xuICAgIGlmICh0aGlzLl9zZWFyY2hGaWVsZHMgIT09IG51bGwgJiYgdGhpcy5fc2VhcmNoRmllbGRzICE9PSB1bmRlZmluZWQgJiYgdGVybSAhPT0gJycpIHtcbiAgICAgIG1hdGNoZXMgPSBkYXRhLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWVzOiBhbnlbXSA9IHNlYXJjaEZpZWxkcyA/XG4gICAgICAgIHNlYXJjaEZpZWxkcy5tYXAoc2VhcmNoRmllbGQgPT4gdGhpcy5leHRyYWN0VmFsdWUoaXRlbSwgc2VhcmNoRmllbGQpKS5maWx0ZXIodmFsdWUgPT4gISF2YWx1ZSkgOiBbaXRlbV07XG4gICAgICAgIHJldHVybiB2YWx1ZXMuc29tZSh2YWx1ZSA9PiB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXJtLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSkgPj0gMCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0Y2hlcyA9IGRhdGE7XG4gICAgfVxuXG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHByb3RlY3RlZCBleHRyYWN0VGl0bGUoaXRlbTogYW55KSB7XG4gICAgLy8gc3BsaXQgdGl0bGUgZmllbGRzIGFuZCBydW4gZXh0cmFjdFZhbHVlIGZvciBlYWNoIGFuZCBqb2luIHdpdGggJyAnXG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlRmllbGQuc3BsaXQoJywnKVxuICAgICAgLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXh0cmFjdFZhbHVlKGl0ZW0sIGZpZWxkKTtcbiAgICAgIH0pXG4gICAgICAucmVkdWNlKChhY2MsIHRpdGxlUGFydCkgPT4gYWNjID8gYCR7YWNjfSAke3RpdGxlUGFydH1gIDogdGl0bGVQYXJ0KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBleHRyYWN0VmFsdWUob2JqOiBhbnksIGtleTogc3RyaW5nKSB7XG4gICAgbGV0IGtleXM6IHN0cmluZ1tdO1xuICAgIGxldCByZXN1bHQ6IGFueTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICByZXN1bHQgPSBvYmo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFtrZXlzW2ldXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBvYmo7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJvY2Vzc1Jlc3VsdHMobWF0Y2hlczogc3RyaW5nW10pOiBDb21wbGV0ZXJJdGVtW10ge1xuICAgIGxldCBpOiBudW1iZXI7XG4gICAgY29uc3QgcmVzdWx0czogQ29tcGxldGVySXRlbVtdID0gW107XG5cbiAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmNvbnZlcnRUb0l0ZW0obWF0Y2hlc1tpXSk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG59XG4iXX0=