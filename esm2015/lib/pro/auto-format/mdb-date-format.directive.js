/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
export class MdbDateFormatDirective {
    constructor() {
        this.separator = '/';
        this.format = ['dd', 'mm', 'yyyy'];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onInput(event) {
        /** @type {?} */
        const currentValue = event.target.value;
        /** @type {?} */
        const newValue = this.getFormattedDate(currentValue);
        event.target.value = newValue;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setSeparatorsNumber();
        this.setResultLength();
    }
    /**
     * @return {?}
     */
    setSeparatorsNumber() {
        this.separatorsNumber = this.format.length - 1;
    }
    /**
     * @return {?}
     */
    setResultLength() {
        /** @type {?} */
        let resLength = 0;
        this.format.forEach((value) => {
            resLength += value.length;
        });
        this.resultLength = resLength + this.separatorsNumber;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getFormattedDate(date) {
        /** @type {?} */
        const dateParts = this.getDateParts(date);
        /** @type {?} */
        const result = dateParts.map((part, index) => {
            return part = this.formatDateParts(part, index);
        });
        return result.join(this.separator).slice(0, this.resultLength);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateParts(date) {
        date = this.getDigits(date).slice(0, this.resultLength - this.separatorsNumber);
        /** @type {?} */
        const parts = [];
        /** @type {?} */
        const partsIndex = {
            first: this.format[0].length,
            mid: this.format[0].length + this.format[1].length,
            last: this.resultLength
        };
        parts[0] = date.slice(0, partsIndex.first);
        if (date.length > partsIndex.first) {
            parts[1] = date.slice(partsIndex.first, partsIndex.mid);
        }
        if (date.length > partsIndex.mid) {
            parts[2] = date.slice(partsIndex.mid, partsIndex.last);
        }
        return parts;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getDigits(value) {
        return value.replace(/\D/g, '');
    }
    /**
     * @param {?} datePart
     * @param {?} index
     * @return {?}
     */
    formatDateParts(datePart, index) {
        switch (this.format[index]) {
            case 'dd':
                datePart = this.getFormattedDay(datePart);
                break;
            case 'mm':
                datePart = this.getFormattedMonth(datePart);
                break;
        }
        return datePart;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getFormattedDay(value) {
        /** @type {?} */
        const dayFirstNum = parseInt(value.charAt(0), 10);
        if (value) {
            if (dayFirstNum > 3 && dayFirstNum !== 0) {
                return '0' + value.charAt(0);
            }
            else {
                return value;
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getFormattedMonth(value) {
        /** @type {?} */
        const monthFirstNum = parseInt(value.charAt(0), 10);
        /** @type {?} */
        const monthNum = parseInt(value, 10);
        if (value) {
            if (monthFirstNum > 1 && monthFirstNum !== 0) {
                return '0' + value.charAt(0);
            }
            else if (monthNum > 12) {
                return '12';
            }
            else {
                return value;
            }
        }
    }
}
MdbDateFormatDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDateFormat]',
            },] }
];
MdbDateFormatDirective.propDecorators = {
    separator: [{ type: Input }],
    format: [{ type: Input }],
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }, { type: HostListener, args: ['paste', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    MdbDateFormatDirective.prototype.resultLength;
    /** @type {?} */
    MdbDateFormatDirective.prototype.separatorsNumber;
    /** @type {?} */
    MdbDateFormatDirective.prototype.separator;
    /** @type {?} */
    MdbDateFormatDirective.prototype.format;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWRhdGUtZm9ybWF0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYXV0by1mb3JtYXQvbWRiLWRhdGUtZm9ybWF0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBS3ZFLE1BQU0sT0FBTyxzQkFBc0I7SUFIbkM7UUFPVyxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFzR3pDLENBQUM7Ozs7O0lBbEdDLE9BQU8sQ0FBQyxLQUFVOztjQUNWLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7O2NBQ2pDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ3BELEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDakQsQ0FBQzs7OztJQUVELGVBQWU7O1lBQ1QsU0FBUyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUM3QixTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxHQUFH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LENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsS0FBYTs7Y0FDdkIsYUFBYSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQzs7Y0FDN0MsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBRXBDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxhQUFhLEdBQUcsQ0FBQyxJQUFJLGFBQWEsS0FBSyxDQUFDLEVBQUU7Z0JBQzVDLE9BQU8sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUI7aUJBQU0sSUFBSSxRQUFRLEdBQUcsRUFBRSxFQUFFO2dCQUN4QixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtJQUNILENBQUM7OztZQTdHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7O3dCQUtFLEtBQUs7cUJBQ0wsS0FBSztzQkFFTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGNBQ2hDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFQakMsOENBQXFCOztJQUNyQixrREFBeUI7O0lBRXpCLDJDQUF5Qjs7SUFDekIsd0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYkRhdGVGb3JtYXRdJyxcbn0pXG5leHBvcnQgY2xhc3MgTWRiRGF0ZUZvcm1hdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJlc3VsdExlbmd0aDogbnVtYmVyO1xuICBzZXBhcmF0b3JzTnVtYmVyOiBudW1iZXI7XG5cbiAgQElucHV0KCkgc2VwYXJhdG9yID0gJy8nO1xuICBASW5wdXQoKSBmb3JtYXQgPSBbJ2RkJywgJ21tJywgJ3l5eXknXTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJywgWyckZXZlbnQnXSlcbiAgb25JbnB1dChldmVudDogYW55KSB7XG4gICAgY29uc3QgY3VycmVudFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRGb3JtYXR0ZWREYXRlKGN1cnJlbnRWYWx1ZSk7XG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gbmV3VmFsdWU7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFNlcGFyYXRvcnNOdW1iZXIoKTtcbiAgICB0aGlzLnNldFJlc3VsdExlbmd0aCgpO1xuICB9XG5cbiAgc2V0U2VwYXJhdG9yc051bWJlcigpIHtcbiAgICB0aGlzLnNlcGFyYXRvcnNOdW1iZXIgPSB0aGlzLmZvcm1hdC5sZW5ndGggLSAxO1xuICB9XG5cbiAgc2V0UmVzdWx0TGVuZ3RoKCkge1xuICAgIGxldCByZXNMZW5ndGggPSAwO1xuICAgIHRoaXMuZm9ybWF0LmZvckVhY2goICh2YWx1ZSkgPT4ge1xuICAgICAgcmVzTGVuZ3RoICs9IHZhbHVlLmxlbmd0aDtcbiAgICB9KTtcbiAgICB0aGlzLnJlc3VsdExlbmd0aCA9IHJlc0xlbmd0aCArIHRoaXMuc2VwYXJhdG9yc051bWJlcjtcbiAgfVxuXG4gIGdldEZvcm1hdHRlZERhdGUoZGF0ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgZGF0ZVBhcnRzID0gdGhpcy5nZXREYXRlUGFydHMoZGF0ZSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBkYXRlUGFydHMubWFwKCAocGFydCwgaW5kZXgpID0+IHtcbiAgICAgIHJldHVybiBwYXJ0ID0gdGhpcy5mb3JtYXREYXRlUGFydHMocGFydCwgaW5kZXgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdC5qb2luKHRoaXMuc2VwYXJhdG9yKS5zbGljZSgwLCB0aGlzLnJlc3VsdExlbmd0aCk7XG4gIH1cblxuICBnZXREYXRlUGFydHMoZGF0ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGRhdGUgPSB0aGlzLmdldERpZ2l0cyhkYXRlKS5zbGljZSgwLCB0aGlzLnJlc3VsdExlbmd0aCAtIHRoaXMuc2VwYXJhdG9yc051bWJlcik7XG4gICAgY29uc3QgcGFydHM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgcGFydHNJbmRleCA9IHtcbiAgICAgIGZpcnN0OiB0aGlzLmZvcm1hdFswXS5sZW5ndGgsXG4gICAgICBtaWQ6IHRoaXMuZm9ybWF0WzBdLmxlbmd0aCArIHRoaXMuZm9ybWF0WzFdLmxlbmd0aCxcbiAgICAgIGxhc3Q6IHRoaXMucmVzdWx0TGVuZ3RoXG4gICAgfTtcblxuICAgIHBhcnRzWzBdID0gZGF0ZS5zbGljZSgwLCBwYXJ0c0luZGV4LmZpcnN0KTtcblxuICAgIGlmIChkYXRlLmxlbmd0aCA+IHBhcnRzSW5kZXguZmlyc3QpIHtcbiAgICAgIHBhcnRzWzFdID0gZGF0ZS5zbGljZShwYXJ0c0luZGV4LmZpcnN0LCBwYXJ0c0luZGV4Lm1pZCk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGUubGVuZ3RoID4gcGFydHNJbmRleC5taWQpIHtcbiAgICAgIHBhcnRzWzJdID0gZGF0ZS5zbGljZShwYXJ0c0luZGV4Lm1pZCwgcGFydHNJbmRleC5sYXN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydHM7XG4gIH1cblxuICBnZXREaWdpdHModmFsdWU6IHN0cmluZykge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuICB9XG5cbiAgZm9ybWF0RGF0ZVBhcnRzKGRhdGVQYXJ0OiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICBzd2l0Y2ggKHRoaXMuZm9ybWF0W2luZGV4XSkge1xuICAgICAgY2FzZSAnZGQnOlxuICAgICAgICBkYXRlUGFydCA9IHRoaXMuZ2V0Rm9ybWF0dGVkRGF5KGRhdGVQYXJ0KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21tJzpcbiAgICAgICAgZGF0ZVBhcnQgPSB0aGlzLmdldEZvcm1hdHRlZE1vbnRoKGRhdGVQYXJ0KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGVQYXJ0O1xuICB9XG5cbiAgZ2V0Rm9ybWF0dGVkRGF5KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkYXlGaXJzdE51bSA9IHBhcnNlSW50KHZhbHVlLmNoYXJBdCgwKSwgMTApO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKGRheUZpcnN0TnVtID4gMyAmJiBkYXlGaXJzdE51bSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gJzAnICsgdmFsdWUuY2hhckF0KDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEZvcm1hdHRlZE1vbnRoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBtb250aEZpcnN0TnVtID0gcGFyc2VJbnQodmFsdWUuY2hhckF0KDApLCAxMCk7XG4gICAgY29uc3QgbW9udGhOdW0gPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAobW9udGhGaXJzdE51bSA+IDEgJiYgbW9udGhGaXJzdE51bSAhPT0gMCkge1xuICAgICAgICByZXR1cm4gJzAnICsgdmFsdWUuY2hhckF0KDApO1xuICAgICAgfSBlbHNlIGlmIChtb250aE51bSA+IDEyKSB7XG4gICAgICAgIHJldHVybiAnMTInO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19