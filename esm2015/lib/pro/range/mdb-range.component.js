/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, ViewChild, ElementRef, Renderer2, Input, HostListener, forwardRef, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
/** @type {?} */
export const RANGE_VALUE_ACCESOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MdbRangeInputComponent),
    multi: true
};
export class MdbRangeInputComponent {
    /**
     * @param {?} renderer
     * @param {?} cdRef
     */
    constructor(renderer, cdRef) {
        this.renderer = renderer;
        this.cdRef = cdRef;
        this.min = 0;
        this.max = 100;
        this.rangeValueChange = new EventEmitter();
        this.range = 0;
        this.cloudRange = 0;
        this.visibility = false;
        // Control Value Accessor Methods
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onchange(event) {
        this.onChange(event.target.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    oninput(event) {
        /** @type {?} */
        const value = +event.target.value;
        this.rangeValueChange.emit({ value: value });
        if (this.checkIfSafari()) {
            this.focusRangeInput();
        }
    }
    /**
     * @return {?}
     */
    onclick() {
        this.focusRangeInput();
    }
    /**
     * @return {?}
     */
    onmouseleave() {
        if (this.checkIfSafari()) {
            this.blurRangeInput();
        }
    }
    /**
     * @return {?}
     */
    focusRangeInput() {
        this.input.nativeElement.focus();
        this.visibility = true;
    }
    /**
     * @return {?}
     */
    blurRangeInput() {
        this.input.nativeElement.blur();
        this.visibility = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    coverage(event) {
        if (typeof this.range === 'string' && this.range.length !== 0) {
            return this.range;
        }
        if (!this.default) {
            /** @type {?} */
            const newValue = event.target.value;
            /** @type {?} */
            const newRelativeGain = newValue - this.min;
            /** @type {?} */
            const inputWidth = this.input.nativeElement.offsetWidth;
            /** @type {?} */
            let thumbOffset = 0;
            /** @type {?} */
            const offsetAmmount = 15;
            /** @type {?} */
            const distanceFromMiddle = newRelativeGain - (this.steps / 2);
            this.stepLength = inputWidth / this.steps;
            thumbOffset = (distanceFromMiddle / this.steps) * offsetAmmount;
            this.cloudRange = (this.stepLength * newRelativeGain) - thumbOffset;
            this.renderer.setStyle(this.rangeCloud.nativeElement, 'left', this.cloudRange + 'px');
        }
    }
    /**
     * @return {?}
     */
    checkIfSafari() {
        /** @type {?} */
        const isSafari = navigator.userAgent.indexOf('Safari') > -1;
        /** @type {?} */
        const isChrome = navigator.userAgent.indexOf('Chrome') > -1;
        /** @type {?} */
        const isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
        /** @type {?} */
        const isOpera = navigator.userAgent.indexOf('Opera') > -1;
        if (isSafari && !isChrome && !isFirefox && !isOpera) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.steps = this.max - this.min;
        if (this.value) {
            this.range = this.value;
            this.cdRef.detectChanges();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
MdbRangeInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-range-input',
                template: "<div *ngIf=\"!default\" class=\"range-field\" #rangeField>\n    <div class=\"track\">\n      <div #rangeCloud class=\"range-cloud\" title=\"range\" [ngClass]=\"{'visible': this.visibility, 'hidden': !this.visibility}\">\n        <span class=\"text-transform\">{{range}}</span>\n      </div>\n    </div>\n    <input #input\n    [name]=\"name\"\n    type=\"range\"\n    [disabled]=\"disabled\"\n    [id]=\"id\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [step]=\"step\"\n    [value]=\"value\"\n    [(ngModel)]=\"range\"\n    (focus)=\"this.visibility = true\"\n    (blur)=\"this.visibility = false\"\n    (input)=\"coverage($event)\">\n</div>\n\n<div *ngIf=\"default\">\n    <label for=\"customRange1\">Example range</label>\n    <input #input\n    class=\"custom-range\"\n    [name]=\"name\"\n    type=\"range\"\n    [id]=\"id\"\n    [min]=\"min\"\n    [max]=\"max\"\n    [step]=\"step\"\n    [attr.value]=\"value\"\n    [value]=\"value\"\n    [(ngModel)]=\"range\"\n    (focus)=\"this.visibility = true\"\n    (blur)=\"this.visibility = false\"\n    (input)=\"coverage($event)\">\n    <span class=\"{{defaultRangeCounterClass}}\">{{ range }}</span>\n  </div>",
                providers: [RANGE_VALUE_ACCESOR]
            }] }
];
/** @nocollapse */
MdbRangeInputComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXJhbmdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vcmFuZ2UvbWRiLXJhbmdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixVQUFVLEVBRVYsTUFBTSxFQUNOLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE1BQU0sT0FBTyxtQkFBbUIsR0FBUTtJQUN0QyxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7SUFDckQsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQU9ELE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBK0NqQyxZQUFvQixRQUFtQixFQUFVLEtBQXdCO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQXBDaEUsUUFBRyxHQUFHLENBQUMsQ0FBQztRQUNSLFFBQUcsR0FBRyxHQUFHLENBQUM7UUFLVCxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXJELFVBQUssR0FBUSxDQUFDLENBQUM7UUFHZixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQzs7UUFrRm5CLGFBQVEsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLGNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUEzRHVELENBQUM7Ozs7O0lBdEIxQyxRQUFRLENBQUMsS0FBVTtRQUNyRCxJQUFJLENBQUMsUUFB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c0JBSWpDLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0JBU2hDLFlBQVksU0FBQyxPQUFPOzJCQUlwQixZQUFZLFNBQUMsWUFBWTs7OztJQXhDMUIsdUNBQXNDOztJQUN0Qyw0Q0FBZ0Q7O0lBQ2hELDRDQUFnRDs7SUFFaEQsb0NBQW9COztJQUNwQiwwQ0FBMkI7O0lBQzNCLHNDQUFzQjs7SUFDdEIsdUNBQXVCOztJQUN2QiwwQ0FBMkI7O0lBQzNCLHFDQUFpQjs7SUFDakIscUNBQW1COztJQUNuQixzQ0FBc0I7O0lBQ3RCLHlDQUEwQjs7SUFDMUIsMERBQTBDOztJQUUxQyxrREFBcUQ7O0lBRXJELHVDQUFlOztJQUNmLDRDQUFtQjs7SUFDbkIsdUNBQWM7O0lBQ2QsNENBQWU7O0lBQ2YsNENBQW1COztJQWtGbkIsMENBQTJCOztJQUMzQiwyQ0FBc0I7Ozs7O0lBM0RWLDBDQUEyQjs7Ozs7SUFBRSx1Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBSZW5kZXJlcjIsXG4gIElucHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3RvclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IFJBTkdFX1ZBTFVFX0FDQ0VTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1kYlJhbmdlSW5wdXRDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXJhbmdlLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL21kYi1yYW5nZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW1JBTkdFX1ZBTFVFX0FDQ0VTT1JdLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJSYW5nZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3JhbmdlQ2xvdWQnKSByYW5nZUNsb3VkOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdyYW5nZUZpZWxkJykgcmFuZ2VGaWVsZDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbWluID0gMDtcbiAgQElucHV0KCkgbWF4ID0gMTAwO1xuICBASW5wdXQoKSBzdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRlZmF1bHQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRlZmF1bHRSYW5nZUNvdW50ZXJDbGFzczogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSByYW5nZVZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcmFuZ2U6IGFueSA9IDA7XG4gIHN0ZXBMZW5ndGg6IG51bWJlcjtcbiAgc3RlcHM6IG51bWJlcjtcbiAgY2xvdWRSYW5nZSA9IDA7XG4gIHZpc2liaWxpdHkgPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdjaGFuZ2UnLCBbJyRldmVudCddKSBvbmNoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKSBvbmlucHV0KGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCB2YWx1ZTogbnVtYmVyID0gK2V2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnJhbmdlVmFsdWVDaGFuZ2UuZW1pdCh7IHZhbHVlOiB2YWx1ZSB9KTtcblxuICAgIGlmICh0aGlzLmNoZWNrSWZTYWZhcmkoKSkge1xuICAgICAgdGhpcy5mb2N1c1JhbmdlSW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uY2xpY2soKSB7XG4gICAgdGhpcy5mb2N1c1JhbmdlSW5wdXQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKSBvbm1vdXNlbGVhdmUoKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tJZlNhZmFyaSgpKSB7XG4gICAgICB0aGlzLmJsdXJSYW5nZUlucHV0KCk7XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxuXG4gIGZvY3VzUmFuZ2VJbnB1dCgpIHtcbiAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLnZpc2liaWxpdHkgPSB0cnVlO1xuICB9XG5cbiAgYmx1clJhbmdlSW5wdXQoKSB7XG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB0aGlzLnZpc2liaWxpdHkgPSBmYWxzZTtcbiAgfVxuXG4gIGNvdmVyYWdlKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMucmFuZ2UgPT09ICdzdHJpbmcnICYmIHRoaXMucmFuZ2UubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5nZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuZGVmYXVsdCkge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBjb25zdCBuZXdSZWxhdGl2ZUdhaW4gPSBuZXdWYWx1ZSAtIHRoaXMubWluO1xuICAgICAgY29uc3QgaW5wdXRXaWR0aCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuICAgICAgbGV0IHRodW1iT2Zmc2V0ID0gMDtcbiAgICAgIGNvbnN0IG9mZnNldEFtbW91bnQgPSAxNTtcbiAgICAgIGNvbnN0IGRpc3RhbmNlRnJvbU1pZGRsZSA9IG5ld1JlbGF0aXZlR2FpbiAtICh0aGlzLnN0ZXBzIC8gMik7XG5cbiAgICAgIHRoaXMuc3RlcExlbmd0aCA9IGlucHV0V2lkdGggLyB0aGlzLnN0ZXBzO1xuXG4gICAgICB0aHVtYk9mZnNldCA9IChkaXN0YW5jZUZyb21NaWRkbGUgLyB0aGlzLnN0ZXBzKSAqIG9mZnNldEFtbW91bnQ7XG4gICAgICB0aGlzLmNsb3VkUmFuZ2UgPSAodGhpcy5zdGVwTGVuZ3RoICogbmV3UmVsYXRpdmVHYWluKSAtIHRodW1iT2Zmc2V0O1xuXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMucmFuZ2VDbG91ZC5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIHRoaXMuY2xvdWRSYW5nZSArICdweCcpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrSWZTYWZhcmkoKSB7XG4gICAgY29uc3QgaXNTYWZhcmkgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpID4gLTE7XG4gICAgY29uc3QgaXNDaHJvbWUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0Nocm9tZScpID4gLTE7XG4gICAgY29uc3QgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdGaXJlZm94JykgPiAtMTtcbiAgICBjb25zdCBpc09wZXJhID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdPcGVyYScpID4gLTE7XG5cbiAgICBpZiAoaXNTYWZhcmkgJiYgIWlzQ2hyb21lICYmICFpc0ZpcmVmb3ggJiYgIWlzT3BlcmEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuc3RlcHMgPSB0aGlzLm1heCAtIHRoaXMubWluO1xuXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMucmFuZ2UgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ29udHJvbCBWYWx1ZSBBY2Nlc3NvciBNZXRob2RzXG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbn1cbiJdfQ==