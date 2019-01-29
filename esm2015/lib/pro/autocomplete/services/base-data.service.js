/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Subject } from 'rxjs';
import { isNil } from '../globals';
/**
 * @abstract
 */
export class CompleterBaseData extends Subject {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    cancel() { }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} searchFields
     * @return {THIS}
     */
    searchFields(searchFields) {
        (/** @type {?} */ (this))._searchFields = searchFields;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} titleField
     * @return {THIS}
     */
    titleField(titleField) {
        (/** @type {?} */ (this))._titleField = titleField;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} descriptionField
     * @return {THIS}
     */
    descriptionField(descriptionField) {
        (/** @type {?} */ (this))._descriptionField = descriptionField;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} imageField
     * @return {THIS}
     */
    imageField(imageField) {
        (/** @type {?} */ (this))._imageField = imageField;
        return (/** @type {?} */ (this));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        // let image: string = null;
        /** @type {?} */
        let image = null;
        /** @type {?} */
        let formattedText;
        // let formattedDesc: string;
        /** @type {?} */
        let formattedDesc;
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
    }
    /**
     * @protected
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    extractMatches(data, term) {
        /** @type {?} */
        let matches = [];
        /** @type {?} */
        const searchFields = this._searchFields ? this._searchFields.split(',') : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== '') {
            matches = data.filter(item => {
                /** @type {?} */
                const values = searchFields ?
                    searchFields.map(searchField => this.extractValue(item, searchField)).filter(value => !!value) : [item];
                return values.some(value => value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0);
            });
        }
        else {
            matches = data;
        }
        return matches;
    }
    /**
     * @protected
     * @param {?} item
     * @return {?}
     */
    extractTitle(item) {
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(',')
            .map((field) => {
            return this.extractValue(item, field);
        })
            .reduce((acc, titlePart) => acc ? `${acc} ${titlePart}` : titlePart);
    }
    /**
     * @protected
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    extractValue(obj, key) {
        /** @type {?} */
        let keys;
        /** @type {?} */
        let result;
        if (key) {
            keys = key.split('.');
            result = obj;
            for (let i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    }
    /**
     * @protected
     * @param {?} matches
     * @return {?}
     */
    processResults(matches) {
        /** @type {?} */
        let i;
        /** @type {?} */
        const results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                /** @type {?} */
                const item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1kYXRhLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG9jb21wbGV0ZS9zZXJ2aWNlcy9iYXNlLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkvQixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBRW5DLE1BQU0sT0FBZ0IsaUJBQWtCLFNBQVEsT0FBd0I7SUFRdEU7UUFDRSxLQUFLLEVBQUUsQ0FBQztJQUNWLENBQUM7Ozs7SUFJTSxNQUFNLEtBQUssQ0FBQzs7Ozs7OztJQUVaLFlBQVksQ0FBQyxZQUFvQjtRQUN0QyxtQkFBQSxJQUFJLEVBQUEsQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO1FBQ2xDLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBRU0sVUFBVSxDQUFDLFVBQWtCO1FBQ2xDLG1CQUFBLElBQUksRUFBQSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDOUIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFTSxnQkFBZ0IsQ0FBQyxnQkFBd0I7UUFDOUMsbUJBQUEsSUFBSSxFQUFBLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUMsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFTSxVQUFVLENBQUMsVUFBa0I7UUFDbEMsbUJBQUEsSUFBSSxFQUFBLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTSxhQUFhLENBQUMsSUFBUzs7O1lBRXhCLEtBQUssR0FBaUIsSUFBSTs7WUFDMUIsYUFBcUI7OztZQUVyQixhQUEy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SUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxQjthQUNGO1NBQ0Y7YUFBTTtZQUNMLE1BQU0sR0FBRyxHQUFHLENBQUM7U0FDZDtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVTLGNBQWMsQ0FBQyxPQUFpQjs7WUFDcEMsQ0FBUzs7Y0FDUCxPQUFPLEdBQW9CLEVBQUU7UUFFbkMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztzQkFDN0IsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLElBQUksRUFBRTtvQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNwQjthQUNGO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0Y7Ozs7OztJQTVIQywwQ0FBZ0M7Ozs7O0lBQ2hDLHdDQUE4Qjs7Ozs7SUFDOUIsOENBQW9DOzs7OztJQUNwQyx3Q0FBOEI7Ozs7OztJQU05Qix5REFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENvbXBsZXRlckl0ZW0gfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBsZXRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wbGV0ZXJEYXRhIH0gZnJvbSAnLi9jb21wbGV0ZXItZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IGlzTmlsIH0gZnJvbSAnLi4vZ2xvYmFscyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wbGV0ZXJCYXNlRGF0YSBleHRlbmRzIFN1YmplY3Q8Q29tcGxldGVySXRlbVtdPiBpbXBsZW1lbnRzIENvbXBsZXRlckRhdGEge1xuXG5cbiAgcHJvdGVjdGVkIF9zZWFyY2hGaWVsZHM6IHN0cmluZztcbiAgcHJvdGVjdGVkIF90aXRsZUZpZWxkOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBfZGVzY3JpcHRpb25GaWVsZDogc3RyaW5nO1xuICBwcm90ZWN0ZWQgX2ltYWdlRmllbGQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHNlYXJjaCh0ZXJtOiBzdHJpbmcpOiB2b2lkO1xuXG4gIHB1YmxpYyBjYW5jZWwoKSB7IH1cblxuICBwdWJsaWMgc2VhcmNoRmllbGRzKHNlYXJjaEZpZWxkczogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoRmllbGRzID0gc2VhcmNoRmllbGRzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHRpdGxlRmllbGQodGl0bGVGaWVsZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fdGl0bGVGaWVsZCA9IHRpdGxlRmllbGQ7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgZGVzY3JpcHRpb25GaWVsZChkZXNjcmlwdGlvbkZpZWxkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9kZXNjcmlwdGlvbkZpZWxkID0gZGVzY3JpcHRpb25GaWVsZDtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBpbWFnZUZpZWxkKGltYWdlRmllbGQ6IHN0cmluZykge1xuICAgIHRoaXMuX2ltYWdlRmllbGQgPSBpbWFnZUZpZWxkO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGNvbnZlcnRUb0l0ZW0oZGF0YTogYW55KSB7XG4gICAgLy8gbGV0IGltYWdlOiBzdHJpbmcgPSBudWxsO1xuICAgIGxldCBpbWFnZTogc3RyaW5nIHwgYW55ID0gbnVsbDtcbiAgICBsZXQgZm9ybWF0dGVkVGV4dDogc3RyaW5nO1xuICAgIC8vIGxldCBmb3JtYXR0ZWREZXNjOiBzdHJpbmc7XG4gICAgbGV0IGZvcm1hdHRlZERlc2M6IHN0cmluZyB8IGFueTtcblxuICAgIGlmICh0aGlzLl90aXRsZUZpZWxkKSB7XG4gICAgICBmb3JtYXR0ZWRUZXh0ID0gdGhpcy5leHRyYWN0VGl0bGUoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdHRlZFRleHQgPSBkYXRhO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kZXNjcmlwdGlvbkZpZWxkKSB7XG4gICAgICBmb3JtYXR0ZWREZXNjID0gdGhpcy5leHRyYWN0VmFsdWUoZGF0YSwgdGhpcy5fZGVzY3JpcHRpb25GaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2ltYWdlRmllbGQpIHtcbiAgICAgIGltYWdlID0gdGhpcy5leHRyYWN0VmFsdWUoZGF0YSwgdGhpcy5faW1hZ2VGaWVsZCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTmlsKGZvcm1hdHRlZFRleHQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGZvcm1hdHRlZFRleHQsXG4gICAgICBkZXNjcmlwdGlvbjogZm9ybWF0dGVkRGVzYyxcbiAgICAgIGltYWdlOiBpbWFnZSxcbiAgICAgIG9yaWdpbmFsT2JqZWN0OiBkYXRhXG4gICAgfSBhcyBDb21wbGV0ZXJJdGVtO1xuXG4gIH1cblxuICBwcm90ZWN0ZWQgZXh0cmFjdE1hdGNoZXMoZGF0YTogYW55W10sIHRlcm06IHN0cmluZykge1xuICAgIGxldCBtYXRjaGVzOiBhbnlbXSA9IFtdO1xuICAgIGNvbnN0IHNlYXJjaEZpZWxkcyA9IHRoaXMuX3NlYXJjaEZpZWxkcyA/IHRoaXMuX3NlYXJjaEZpZWxkcy5zcGxpdCgnLCcpIDogbnVsbDtcbiAgICBpZiAodGhpcy5fc2VhcmNoRmllbGRzICE9PSBudWxsICYmIHRoaXMuX3NlYXJjaEZpZWxkcyAhPT0gdW5kZWZpbmVkICYmIHRlcm0gIT09ICcnKSB7XG4gICAgICBtYXRjaGVzID0gZGF0YS5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlczogYW55W10gPSBzZWFyY2hGaWVsZHMgP1xuICAgICAgICBzZWFyY2hGaWVsZHMubWFwKHNlYXJjaEZpZWxkID0+IHRoaXMuZXh0cmFjdFZhbHVlKGl0ZW0sIHNlYXJjaEZpZWxkKSkuZmlsdGVyKHZhbHVlID0+ICEhdmFsdWUpIDogW2l0ZW1dO1xuICAgICAgICByZXR1cm4gdmFsdWVzLnNvbWUodmFsdWUgPT4gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodGVybS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpID49IDApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hdGNoZXMgPSBkYXRhO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgZXh0cmFjdFRpdGxlKGl0ZW06IGFueSkge1xuICAgIC8vIHNwbGl0IHRpdGxlIGZpZWxkcyBhbmQgcnVuIGV4dHJhY3RWYWx1ZSBmb3IgZWFjaCBhbmQgam9pbiB3aXRoICcgJ1xuICAgIHJldHVybiB0aGlzLl90aXRsZUZpZWxkLnNwbGl0KCcsJylcbiAgICAgIC5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmV4dHJhY3RWYWx1ZShpdGVtLCBmaWVsZCk7XG4gICAgICB9KVxuICAgICAgLnJlZHVjZSgoYWNjLCB0aXRsZVBhcnQpID0+IGFjYyA/IGAke2FjY30gJHt0aXRsZVBhcnR9YCA6IHRpdGxlUGFydCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZXh0cmFjdFZhbHVlKG9iajogYW55LCBrZXk6IHN0cmluZykge1xuICAgIGxldCBrZXlzOiBzdHJpbmdbXTtcbiAgICBsZXQgcmVzdWx0OiBhbnk7XG4gICAgaWYgKGtleSkge1xuICAgICAga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgcmVzdWx0ID0gb2JqO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHRba2V5c1tpXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gb2JqO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJvdGVjdGVkIHByb2Nlc3NSZXN1bHRzKG1hdGNoZXM6IHN0cmluZ1tdKTogQ29tcGxldGVySXRlbVtdIHtcbiAgICBsZXQgaTogbnVtYmVyO1xuICAgIGNvbnN0IHJlc3VsdHM6IENvbXBsZXRlckl0ZW1bXSA9IFtdO1xuXG4gICAgaWYgKG1hdGNoZXMgJiYgbWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbWF0Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5jb252ZXJ0VG9JdGVtKG1hdGNoZXNbaV0pO1xuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxufVxuIl19