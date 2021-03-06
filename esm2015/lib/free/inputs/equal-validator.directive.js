import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
export class EqualValidatorDirective {
    constructor(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    get isReverse() {
        if (!this.reverse) {
            return false;
        }
        return this.reverse === 'true' ? true : false;
    }
    validate(c) {
        // self value (e.g. retype password)
        const v = c.value;
        // control value (e.g. password)
        const e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false,
            });
        }
        // return null;
        return null;
    }
}
EqualValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true },
                ],
            },] }
];
EqualValidatorDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['validateEqual',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXVpa2l0LXByby1zdGFuZGFyZC9zcmMvbGliL2ZyZWUvaW5wdXRzL2VxdWFsLXZhbGlkYXRvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBOEIsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTM0UsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUNxQyxhQUFxQixFQUMzQixPQUFlO1FBRFQsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUMzQyxDQUFDO0lBRUosSUFBWSxTQUFTO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNoRCxDQUFDO0lBRUQsUUFBUSxDQUFDLENBQWtCO1FBQ3pCLG9DQUFvQztRQUNwQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBRWxCLGdDQUFnQztRQUNoQyxNQUFNLENBQUMsR0FBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFOUMsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ3RCLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDakM7UUFFRCwwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDakMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQjtTQUNGO1FBRUQsOEJBQThCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDeEMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDVixhQUFhLEVBQUUsS0FBSzthQUNyQixDQUFDLENBQUM7U0FDSjtRQUVELGVBQWU7UUFDZixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUNOLDRGQUE0RjtnQkFDOUYsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtpQkFDaEc7YUFDRjs7O3lDQUdJLFNBQVMsU0FBQyxlQUFlO3lDQUN6QixTQUFTLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlxuICAgICdbbWRiLXZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sTmFtZV0sW3ZhbGlkYXRlRXF1YWxdW2Zvcm1Db250cm9sXSxbdmFsaWRhdGVFcXVhbF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVxdWFsVmFsaWRhdG9yRGlyZWN0aXZlKSwgbXVsdGk6IHRydWUgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRXF1YWxWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBAQXR0cmlidXRlKCd2YWxpZGF0ZUVxdWFsJykgcHVibGljIHZhbGlkYXRlRXF1YWw6IHN0cmluZyxcbiAgICBAQXR0cmlidXRlKCdyZXZlcnNlJykgcHVibGljIHJldmVyc2U6IHN0cmluZ1xuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXQgaXNSZXZlcnNlKCkge1xuICAgIGlmICghdGhpcy5yZXZlcnNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJldmVyc2UgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsIHtcbiAgICAvLyBzZWxmIHZhbHVlIChlLmcuIHJldHlwZSBwYXNzd29yZClcbiAgICBjb25zdCB2ID0gYy52YWx1ZTtcblxuICAgIC8vIGNvbnRyb2wgdmFsdWUgKGUuZy4gcGFzc3dvcmQpXG4gICAgY29uc3QgZTogYW55ID0gYy5yb290LmdldCh0aGlzLnZhbGlkYXRlRXF1YWwpO1xuXG4gICAgLy8gdmFsdWUgbm90IGVxdWFsXG4gICAgaWYgKGUgJiYgdiAhPT0gZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIHsgdmFsaWRhdGVFcXVhbDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICAvLyB2YWx1ZSBlcXVhbCBhbmQgcmV2ZXJzZVxuICAgIGlmIChlICYmIHYgPT09IGUudmFsdWUgJiYgdGhpcy5pc1JldmVyc2UpIHtcbiAgICAgIGRlbGV0ZSBlLmVycm9yc1sndmFsaWRhdGVFcXVhbCddO1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhlLmVycm9ycykubGVuZ3RoKSB7XG4gICAgICAgIGUuc2V0RXJyb3JzKG51bGwpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhbHVlIG5vdCBlcXVhbCBhbmQgcmV2ZXJzZVxuICAgIGlmIChlICYmIHYgIT09IGUudmFsdWUgJiYgdGhpcy5pc1JldmVyc2UpIHtcbiAgICAgIGUuc2V0RXJyb3JzKHtcbiAgICAgICAgdmFsaWRhdGVFcXVhbDogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl19