/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, forwardRef, ViewChild, Input, EventEmitter, Output, HostListener, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
/** @type {?} */
export const CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => CheckboxComponent)),
    multi: true
};
/** @type {?} */
let defaultIdNumber = 0;
export class MdbCheckboxChange {
}
if (false) {
    /** @type {?} */
    MdbCheckboxChange.prototype.element;
    /** @type {?} */
    MdbCheckboxChange.prototype.checked;
}
export class CheckboxComponent {
    constructor() {
        this.defaultId = `mdb-checkbox-${++defaultIdNumber}`;
        this.id = this.defaultId;
        this.checked = false;
        this.filledIn = false;
        this.indeterminate = false;
        this.rounded = false;
        this.checkboxPosition = 'left';
        this.default = false;
        this.inline = false;
        this.change = new EventEmitter();
        this.checkboxClicked = new Subject();
        // Control Value Accessor Methods
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onLabelClick(event) {
        event.stopPropagation();
        this.checkboxClicked.next(true);
    }
    /**
     * @return {?}
     */
    onDocumentClick() {
        this.checkboxClicked.next(false);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.indeterminate && !this.filledIn && !this.rounded) {
            this.inputEl.indeterminate = true;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('checked')) {
            this.checked = changes.checked.currentValue;
        }
    }
    /**
     * @return {?}
     */
    get changeEvent() {
        /** @type {?} */
        const newChangeEvent = new MdbCheckboxChange();
        newChangeEvent.element = this;
        newChangeEvent.checked = this.checked;
        return newChangeEvent;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.disabled) {
            return;
        }
        this.checked = !this.checked;
        this.indeterminate = false;
        this.onChange(this.checked);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCheckboxClick(event) {
        event.stopPropagation();
        this.toggle();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onCheckboxChange(event) {
        event.stopPropagation();
        this.change.emit(this.changeEvent);
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.checkboxClicked.pipe(take(1)).subscribe((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            if (!val) {
                this.onTouched();
            }
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.checked = !!value;
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
CheckboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-checkbox',
                template: "<div\n  [ngClass]=\"{\n  'custom-control custom-checkbox': default,\n  'form-check': !default,\n  'custom-control-inline': inline,\n  'form-check-inline': inline && !default }\">\n  <input\n    #input\n    type=\"checkbox\"\n    class=\"custom-control-input\"\n    [ngClass]=\"{\n      'filled-in': filledIn || rounded,\n      'custom-control-input': default,\n      'form-check-input': !default }\"\n    [id]=\"id\"\n    [checked]=\"checked\"\n    [disabled]=\"disabled\"\n    [required]=\"required\"\n    [indeterminate]=\"indeterminate\"\n    [attr.name]=\"name\"\n    [attr.value]=\"value\"\n    [tabIndex]=\"tabIndex\"\n    (blur)=\"onBlur()\"\n    (click)=\"onCheckboxClick($event)\"\n    (change)=\"onCheckboxChange($event)\"\n  >\n  <label\n    [ngClass]=\"{\n      'custom-control-label': default,\n      'form-check-label': !default,\n      'label-before': checkboxPosition === 'right',\n      'checkbox-rounded': rounded,\n      'disabled': disabled }\"\n    [attr.for]=\"id\">\n    <ng-content></ng-content>\n  </label>\n</div>",
                providers: [CHECKBOX_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
CheckboxComponent.ctorParameters = () => [];
CheckboxComponent.propDecorators = {
    inputEl: [{ type: ViewChild, args: ['input',] }],
    class: [{ type: Input }],
    id: [{ type: Input }],
    required: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    checked: [{ type: Input }],
    filledIn: [{ type: Input }],
    indeterminate: [{ type: Input }],
    disabled: [{ type: Input }],
    rounded: [{ type: Input }],
    checkboxPosition: [{ type: Input }],
    default: [{ type: Input }],
    inline: [{ type: Input }],
    tabIndex: [{ type: Input }],
    change: [{ type: Output }],
    onLabelClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onDocumentClick: [{ type: HostListener, args: ['document:click',] }]
};
if (false) {
    /** @type {?} */
    CheckboxComponent.prototype.inputEl;
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype.defaultId;
    /** @type {?} */
    CheckboxComponent.prototype.class;
    /** @type {?} */
    CheckboxComponent.prototype.id;
    /** @type {?} */
    CheckboxComponent.prototype.required;
    /** @type {?} */
    CheckboxComponent.prototype.name;
    /** @type {?} */
    CheckboxComponent.prototype.value;
    /** @type {?} */
    CheckboxComponent.prototype.checked;
    /** @type {?} */
    CheckboxComponent.prototype.filledIn;
    /** @type {?} */
    CheckboxComponent.prototype.indeterminate;
    /** @type {?} */
    CheckboxComponent.prototype.disabled;
    /** @type {?} */
    CheckboxComponent.prototype.rounded;
    /** @type {?} */
    CheckboxComponent.prototype.checkboxPosition;
    /** @type {?} */
    CheckboxComponent.prototype.default;
    /** @type {?} */
    CheckboxComponent.prototype.inline;
    /** @type {?} */
    CheckboxComponent.prototype.tabIndex;
    /** @type {?} */
    CheckboxComponent.prototype.change;
    /**
     * @type {?}
     * @private
     */
    CheckboxComponent.prototype.checkboxClicked;
    /** @type {?} */
    CheckboxComponent.prototype.onChange;
    /** @type {?} */
    CheckboxComponent.prototype.onTouched;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULFVBQVUsRUFDVixTQUFTLEVBQ1QsS0FBSyxFQUNMLFlBQVksRUFDWixNQUFNLEVBR04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUV0QyxNQUFNLE9BQU8sdUJBQXVCLEdBQVE7SUFDMUMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsR0FBRyxFQUFFLENBQUMsaUJBQWlCLEVBQUM7SUFDaEQsS0FBSyxFQUFFLElBQUk7Q0FDWjs7SUFFRyxlQUFlLEdBQUcsQ0FBQztBQUV2QixNQUFNLE9BQU8saUJBQWlCO0NBRzdCOzs7SUFGQyxvQ0FBMkI7O0lBQzNCLG9DQUFpQjs7QUFRbkIsTUFBTSxPQUFPLGlCQUFpQjtJQXdCNUI7UUFyQlEsY0FBUyxHQUFHLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxDQUFDO1FBRy9DLE9BQUUsR0FBVyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBSTVCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLHFCQUFnQixHQUFHLE1BQU0sQ0FBQztRQUMxQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxLQUFLLENB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O0lBQzdCLENBQUM7OztZQTVHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDJoQ0FBd0M7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3JDOzs7OztzQkFFRSxTQUFTLFNBQUMsT0FBTztvQkFJakIsS0FBSztpQkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSztvQkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBQ0wsS0FBSzs0QkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzsrQkFDTCxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUVMLE1BQU07MkJBTU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs4QkFNaEMsWUFBWSxTQUFDLGdCQUFnQjs7OztJQS9COUIsb0NBQWlDOzs7OztJQUVqQyxzQ0FBd0Q7O0lBRXhELGtDQUF1Qjs7SUFDdkIsK0JBQXFDOztJQUNyQyxxQ0FBMkI7O0lBQzNCLGlDQUFzQjs7SUFDdEIsa0NBQXVCOztJQUN2QixvQ0FBeUI7O0lBQ3pCLHFDQUEwQjs7SUFDMUIsMENBQStCOztJQUMvQixxQ0FBMkI7O0lBQzNCLG9DQUF5Qjs7SUFDekIsNkNBQW1DOztJQUNuQyxvQ0FBeUI7O0lBQ3pCLG1DQUF3Qjs7SUFDeEIscUNBQTBCOztJQUUxQixtQ0FBMEY7Ozs7O0lBRTFGLDRDQUFpRDs7SUErRGpELHFDQUEwQjs7SUFDMUIsc0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIGZvcndhcmRSZWYsXG4gIFZpZXdDaGlsZCxcbiAgSW5wdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEhvc3RMaXN0ZW5lcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBjb25zdCBDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2hlY2tib3hDb21wb25lbnQpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxubGV0IGRlZmF1bHRJZE51bWJlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBNZGJDaGVja2JveENoYW5nZSB7XG4gIGVsZW1lbnQ6IENoZWNrYm94Q29tcG9uZW50O1xuICBjaGVja2VkOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItY2hlY2tib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnM6IFtDSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXRFbDogYW55O1xuXG4gIHByaXZhdGUgZGVmYXVsdElkID0gYG1kYi1jaGVja2JveC0keysrZGVmYXVsdElkTnVtYmVyfWA7XG5cbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9IHRoaXMuZGVmYXVsdElkO1xuICBASW5wdXQoKSByZXF1aXJlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSB2YWx1ZTogc3RyaW5nO1xuICBASW5wdXQoKSBjaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpbGxlZEluID0gZmFsc2U7XG4gIEBJbnB1dCgpIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvdW5kZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgY2hlY2tib3hQb3NpdGlvbiA9ICdsZWZ0JztcbiAgQElucHV0KCkgZGVmYXVsdCA9IGZhbHNlO1xuICBASW5wdXQoKSBpbmxpbmUgPSBmYWxzZTtcbiAgQElucHV0KCkgdGFiSW5kZXg6IG51bWJlcjtcblxuICBAT3V0cHV0KCkgY2hhbmdlOiBFdmVudEVtaXR0ZXI8TWRiQ2hlY2tib3hDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcjxNZGJDaGVja2JveENoYW5nZT4oKTtcblxuICBwcml2YXRlIGNoZWNrYm94Q2xpY2tlZCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25MYWJlbENsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmNoZWNrYm94Q2xpY2tlZC5uZXh0KHRydWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snKVxuICBvbkRvY3VtZW50Q2xpY2soKSB7XG4gICAgdGhpcy5jaGVja2JveENsaWNrZWQubmV4dChmYWxzZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5pbmRldGVybWluYXRlICYmICF0aGlzLmZpbGxlZEluICYmICF0aGlzLnJvdW5kZWQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbC5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ2NoZWNrZWQnKSkge1xuICAgICAgdGhpcy5jaGVja2VkID0gY2hhbmdlcy5jaGVja2VkLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2hhbmdlRXZlbnQoKSB7XG4gICAgY29uc3QgbmV3Q2hhbmdlRXZlbnQgPSBuZXcgTWRiQ2hlY2tib3hDaGFuZ2UoKTtcbiAgICBuZXdDaGFuZ2VFdmVudC5lbGVtZW50ID0gdGhpcztcbiAgICBuZXdDaGFuZ2VFdmVudC5jaGVja2VkID0gdGhpcy5jaGVja2VkO1xuICAgIHJldHVybiBuZXdDaGFuZ2VFdmVudDtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xuICB9XG5cbiAgb25DaGVja2JveENsaWNrKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnRvZ2dsZSgpO1xuICB9XG5cbiAgb25DaGVja2JveENoYW5nZShldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLmNoYW5nZUV2ZW50KTtcbiAgfVxuXG4gIG9uQmx1cigpIHtcbiAgICB0aGlzLmNoZWNrYm94Q2xpY2tlZC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh2YWwgPT4ge1xuICAgICAgaWYgKCF2YWwpIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIENvbnRyb2wgVmFsdWUgQWNjZXNzb3IgTWV0aG9kc1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jaGVja2VkID0gISF2YWx1ZTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIl19