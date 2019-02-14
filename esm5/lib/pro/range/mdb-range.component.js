/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, ViewChild, ElementRef, Renderer2, Input, HostListener, forwardRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
/** @type {?} */
export var RANGE_VALUE_ACCESOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return MdbRangeInputComponent; })),
    multi: true
};
var MdbRangeInputComponent = /** @class */ (function () {
    function MdbRangeInputComponent(renderer, cdRef) {
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.min = 0;
        this.max = 100;
        this.rangeValueChange = new EventEmitter();
        this.range = 0;
        this.cloudRange = 0;
        this.visibility = false;
        // Control Value Accessor Methods
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        function (_) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbRangeInputComponent.prototype.onchange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onChange(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbRangeInputComponent.prototype.oninput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var value = +event.target.value;
        this.rangeValueChange.emit({ value: value });
        if (this.checkIfSafari()) {
            this.focusRangeInput();
        }
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.onclick = /**
     * @return {?}
     */
    function () {
        this.focusRangeInput();
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.onmouseleave = /**
     * @return {?}
     */
    function () {
        if (this.checkIfSafari()) {
            this.blurRangeInput();
        }
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.focusRangeInput = /**
     * @return {?}
     */
    function () {
        this.input.nativeElement.focus();
        this.visibility = true;
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.blurRangeInput = /**
     * @return {?}
     */
    function () {
        this.input.nativeElement.blur();
        this.visibility = false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbRangeInputComponent.prototype.coverage = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (typeof this.range === 'string' && this.range.length !== 0) {
            return this.range;
        }
        if (!this.default) {
            /** @type {?} */
            var newValue = event.target.value;
            /** @type {?} */
            var newRelativeGain = newValue - this.min;
            /** @type {?} */
            var inputWidth = this.input.nativeElement.offsetWidth;
            /** @type {?} */
            var thumbOffset = 0;
            /** @type {?} */
            var offsetAmmount = 15;
            /** @type {?} */
            var distanceFromMiddle = newRelativeGain - (this.steps / 2);
            this.stepLength = inputWidth / this.steps;
            thumbOffset = (distanceFromMiddle / this.steps) * offsetAmmount;
            this.cloudRange = (this.stepLength * newRelativeGain) - thumbOffset;
            this.renderer.setStyle(this.rangeCloud.nativeElement, 'left', this.cloudRange + 'px');
        }
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.checkIfSafari = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isSafari = navigator.userAgent.indexOf('Safari') > -1;
        /** @type {?} */
        var isChrome = navigator.userAgent.indexOf('Chrome') > -1;
        /** @type {?} */
        var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
        /** @type {?} */
        var isOpera = navigator.userAgent.indexOf('Opera') > -1;
        if (isSafari && !isChrome && !isFirefox && !isOpera) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * @return {?}
     */
    MdbRangeInputComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.steps = this.max - this.min;
        if (this.value) {
            this.range = this.value;
            this.cdRef.detectChanges();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MdbRangeInputComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MdbRangeInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MdbRangeInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    MdbRangeInputComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdbRangeInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-range-input',
                    template: "<div *ngIf=\"!default\" class=\"range-field\" #rangeField>\n    <div class=\"track\">\n      <div #rangeCloud class=\"range-cloud\" title=\"range\" [ngClass]=\"{'visible': this.visibility, 'hidden': !this.visibility}\">\n        <span class=\"text-transform\">{{range}}</span>\n      </div>\n    </div>\n    <input #input\n    [name]=\"name\"\n    type=\"range\"\n    [disabled]=\"disabled\"\n    [id]=\"id\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [step]=\"step\"\n    [value]=\"value\"\n    [(ngModel)]=\"range\"\n    (focus)=\"this.visibility = true\"\n    (blur)=\"this.visibility = false\"\n    (input)=\"coverage($event)\">\n</div>\n\n<div *ngIf=\"default\">\n    <label for=\"customRange1\">Example range</label>\n    <input #input\n    class=\"custom-range\"\n    [name]=\"name\"\n    type=\"range\"\n    [id]=\"id\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [step]=\"step\"\n    [attr.value]=\"value\"\n    [value]=\"value\"\n    [(ngModel)]=\"range\"\n    (focus)=\"this.visibility = true\"\n    (blur)=\"this.visibility = false\"\n    (input)=\"coverage($event)\">\n    <span class=\"{{defaultRangeCounterClass}}\">{{ range }}</span>\n  </div>",
                    providers: [RANGE_VALUE_ACCESOR]
                }] }
    ];
    /** @nocollapse */
    MdbRangeInputComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    MdbRangeInputComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['input',] }],
        rangeCloud: [{ type: ViewChild, args: ['rangeCloud',] }],
        rangeField: [{ type: ViewChild, args: ['rangeField',] }],
        id: [{ type: Input }],
        required: [{ type: Input }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }],
        min: [{ type: Input }],
        max: [{ type: Input }],
        step: [{ type: Input }],
        default: [{ type: Input }],
        defaultRangeCounterClass: [{ type: Input }],
        rangeValueChange: [{ type: Output }],
        onchange: [{ type: HostListener, args: ['change', ['$event'],] }],
        oninput: [{ type: HostListener, args: ['input', ['$event'],] }],
        onclick: [{ type: HostListener, args: ['click',] }],
        onmouseleave: [{ type: HostListener, args: ['mouseleave',] }]
    };
    return MdbRangeInputComponent;
}());
export { MdbRangeInputComponent };
if (false) {
    /** @type {?} */
    MdbRangeInputComponent.prototype.input;
    /** @type {?} */
    MdbRangeInputComponent.prototype.rangeCloud;
    /** @type {?} */
    MdbRangeInputComponent.prototype.rangeField;
    /** @type {?} */
    MdbRangeInputComponent.prototype.id;
    /** @type {?} */
    MdbRangeInputComponent.prototype.required;
    /** @type {?} */
    MdbRangeInputComponent.prototype.name;
    /** @type {?} */
    MdbRangeInputComponent.prototype.value;
    /** @type {?} */
    MdbRangeInputComponent.prototype.disabled;
    /** @type {?} */
    MdbRangeInputComponent.prototype.min;
    /** @type {?} */
    MdbRangeInputComponent.prototype.max;
    /** @type {?} */
    MdbRangeInputComponent.prototype.step;
    /** @type {?} */
    MdbRangeInputComponent.prototype.default;
    /** @type {?} */
    MdbRangeInputComponent.prototype.defaultRangeCounterClass;
    /** @type {?} */
    MdbRangeInputComponent.prototype.rangeValueChange;
    /** @type {?} */
    MdbRangeInputComponent.prototype.range;
    /** @type {?} */
    MdbRangeInputComponent.prototype.stepLength;
    /** @type {?} */
    MdbRangeInputComponent.prototype.steps;
    /** @type {?} */
    MdbRangeInputComponent.prototype.cloudRange;
    /** @type {?} */
    MdbRangeInputComponent.prototype.visibility;
    /** @type {?} */
    MdbRangeInputComponent.prototype.onChange;
    /** @type {?} */
    MdbRangeInputComponent.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    MdbRangeInputComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    MdbRangeInputComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vcmFuZ2UvbWRiLXJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixVQUFVLEVBRVYsTUFBTSxFQUNOLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE1BQU0sS0FBTyxtQkFBbUIsR0FBUTtJQUN0QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLEVBQUM7SUFDckQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBb0RFLGdDQUFvQixRQUFtQixFQUFVLEtBQXdCO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQXBDaEUsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFLVCxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXJELFVBQUssR0FBUSxDQUFDLENBQUM7UUFHZixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQzs7UUFrRm5CLGFBQVE7Ozs7UUFBRyxVQUFDLENBQU0sSUFBTyxDQUFDLEVBQUM7UUFDM0IsY0FBUzs7O1FBQUcsY0FBUSxDQUFDLEVBQUM7SUEzRHVELENBQUM7Ozs7O0lBdEIxQyx5Q0FBUTs7OztJQUE1QyxVQUE2QyxLQUFVO1FBQ3JELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFD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QUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOzJDQUNMLEtBQUs7bUNBRUwsTUFBTTsyQkFRTixZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQUlqQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzBCQVNoQyxZQUFZLFNBQUMsT0FBTzsrQkFJcEIsWUFBWSxTQUFDLFlBQVk7O0lBa0Y1Qiw2QkFBQztDQUFBLEFBaklELElBaUlDO1NBNUhZLHNCQUFzQjs7O0lBRWpDLHVDQUFzQzs7SUFDdEMsNENBQWdEOztJQUNoRCw0Q0FBZ0Q7O0lBRWhELG9DQUFvQjs7SUFDcEIsMENBQTJCOztJQUMzQixzQ0FBc0I7O0lBQ3RCLHVDQUF1Qjs7SUFDdkIsMENBQTJCOztJQUMzQixxQ0FBaUI7O0lBQ2pCLHFDQUFtQjs7SUFDbkIsc0NBQXNCOztJQUN0Qix5Q0FBMEI7O0lBQzFCLDBEQUEwQzs7SUFFMUMsa0RBQXFEOztJQUVyRCx1Q0FBZTs7SUFDZiw0Q0FBbUI7O0lBQ25CLHVDQUFjOztJQUNkLDRDQUFlOztJQUNmLDRDQUFtQjs7SUFrRm5CLDBDQUEyQjs7SUFDM0IsMkNBQXNCOzs7OztJQTNEViwwQ0FBMkI7Ozs7O0lBQUUsdUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBJbnB1dCxcbiAgSG9zdExpc3RlbmVyLFxuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjb25zdCBSQU5HRV9WQUxVRV9BQ0NFU09SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNZGJSYW5nZUlucHV0Q29tcG9uZW50KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1yYW5nZS1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZGItcmFuZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtSQU5HRV9WQUxVRV9BQ0NFU09SXSxcbn0pXG5leHBvcnQgY2xhc3MgTWRiUmFuZ2VJbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0IHtcblxuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyYW5nZUNsb3VkJykgcmFuZ2VDbG91ZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgncmFuZ2VGaWVsZCcpIHJhbmdlRmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbiA9IDA7XG4gIEBJbnB1dCgpIG1heCA9IDEwMDtcbiAgQElucHV0KCkgc3RlcDogbnVtYmVyO1xuICBASW5wdXQoKSBkZWZhdWx0OiBib29sZWFuO1xuICBASW5wdXQoKSBkZWZhdWx0UmFuZ2VDb3VudGVyQ2xhc3M6IHN0cmluZztcblxuICBAT3V0cHV0KCkgcmFuZ2VWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHJhbmdlOiBhbnkgPSAwO1xuICBzdGVwTGVuZ3RoOiBudW1iZXI7XG4gIHN0ZXBzOiBudW1iZXI7XG4gIGNsb3VkUmFuZ2UgPSAwO1xuICB2aXNpYmlsaXR5ID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJywgWyckZXZlbnQnXSkgb25jaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgb25pbnB1dChldmVudDogYW55KSB7XG4gICAgY29uc3QgdmFsdWU6IG51bWJlciA9ICtldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5yYW5nZVZhbHVlQ2hhbmdlLmVtaXQoeyB2YWx1ZTogdmFsdWUgfSk7XG5cbiAgICBpZiAodGhpcy5jaGVja0lmU2FmYXJpKCkpIHtcbiAgICAgIHRoaXMuZm9jdXNSYW5nZUlucHV0KCk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbmNsaWNrKCkge1xuICAgIHRoaXMuZm9jdXNSYW5nZUlucHV0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJykgb25tb3VzZWxlYXZlKCkge1xuICAgIGlmICh0aGlzLmNoZWNrSWZTYWZhcmkoKSkge1xuICAgICAgdGhpcy5ibHVyUmFuZ2VJbnB1dCgpO1xuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICBmb2N1c1JhbmdlSW5wdXQoKSB7XG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy52aXNpYmlsaXR5ID0gdHJ1ZTtcbiAgfVxuXG4gIGJsdXJSYW5nZUlucHV0KCkge1xuICAgIHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgdGhpcy52aXNpYmlsaXR5ID0gZmFsc2U7XG4gIH1cblxuICBjb3ZlcmFnZShldmVudDogYW55KSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnJhbmdlID09PSAnc3RyaW5nJyAmJiB0aGlzLnJhbmdlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZ2U7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmRlZmF1bHQpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgY29uc3QgbmV3UmVsYXRpdmVHYWluID0gbmV3VmFsdWUgLSB0aGlzLm1pbjtcbiAgICAgIGNvbnN0IGlucHV0V2lkdGggPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cbiAgICAgIGxldCB0aHVtYk9mZnNldCA9IDA7XG4gICAgICBjb25zdCBvZmZzZXRBbW1vdW50ID0gMTU7XG4gICAgICBjb25zdCBkaXN0YW5jZUZyb21NaWRkbGUgPSBuZXdSZWxhdGl2ZUdhaW4gLSAodGhpcy5zdGVwcyAvIDIpO1xuXG4gICAgICB0aGlzLnN0ZXBMZW5ndGggPSBpbnB1dFdpZHRoIC8gdGhpcy5zdGVwcztcblxuICAgICAgdGh1bWJPZmZzZXQgPSAoZGlzdGFuY2VGcm9tTWlkZGxlIC8gdGhpcy5zdGVwcykgKiBvZmZzZXRBbW1vdW50O1xuICAgICAgdGhpcy5jbG91ZFJhbmdlID0gKHRoaXMuc3RlcExlbmd0aCAqIG5ld1JlbGF0aXZlR2FpbikgLSB0aHVtYk9mZnNldDtcblxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnJhbmdlQ2xvdWQubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCB0aGlzLmNsb3VkUmFuZ2UgKyAncHgnKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0lmU2FmYXJpKCkge1xuICAgIGNvbnN0IGlzU2FmYXJpID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdTYWZhcmknKSA+IC0xO1xuICAgIGNvbnN0IGlzQ2hyb21lID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IC0xO1xuICAgIGNvbnN0IGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpID4gLTE7XG4gICAgY29uc3QgaXNPcGVyYSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignT3BlcmEnKSA+IC0xO1xuXG4gICAgaWYgKGlzU2FmYXJpICYmICFpc0Nocm9tZSAmJiAhaXNGaXJlZm94ICYmICFpc09wZXJhKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnN0ZXBzID0gdGhpcy5tYXggLSB0aGlzLm1pbjtcblxuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJhbmdlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENvbnRyb2wgVmFsdWUgQWNjZXNzb3IgTWV0aG9kc1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcbiAgb25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG59XG4iXX0=