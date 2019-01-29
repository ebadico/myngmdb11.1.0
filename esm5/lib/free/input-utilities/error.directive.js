/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostBinding } from '@angular/core';
/** @type {?} */
var defaultIdNumber = 0;
var MdbErrorDirective = /** @class */ (function () {
    function MdbErrorDirective() {
        this.id = "mdb-error-" + defaultIdNumber++;
        this.errorMsg = true;
        this.messageId = this.id;
    }
    MdbErrorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdb-error'
                },] }
    ];
    MdbErrorDirective.propDecorators = {
        id: [{ type: Input }],
        errorMsg: [{ type: HostBinding, args: ['class.error-message',] }],
        messageId: [{ type: HostBinding, args: ['attr.id',] }]
    };
    return MdbErrorDirective;
}());
export { MdbErrorDirective };
if (false) {
    /** @type {?} */
    MdbErrorDirective.prototype.id;
    /** @type {?} */
    MdbErrorDirective.prototype.errorMsg;
    /** @type {?} */
    MdbErrorDirective.prototype.messageId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvaW5wdXQtdXRpbGl0aWVzL2Vycm9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUUxRCxlQUFlLEdBQUcsQ0FBQztBQUV2QjtJQUFBO1FBSVcsT0FBRSxHQUFHLGVBQWEsZUFBZSxFQUFJLENBQUM7UUFFWCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGNBQVMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzlDLENBQUM7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7OztxQkFFRSxLQUFLOzJCQUVMLFdBQVcsU0FBQyxxQkFBcUI7NEJBQ2pDLFdBQVcsU0FBQyxTQUFTOztJQUN4Qix3QkFBQztDQUFBLEFBUkQsSUFRQztTQUxZLGlCQUFpQjs7O0lBQzVCLCtCQUErQzs7SUFFL0MscUNBQW9EOztJQUNwRCxzQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5sZXQgZGVmYXVsdElkTnVtYmVyID0gMDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbWRiLWVycm9yJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJFcnJvckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGlkID0gYG1kYi1lcnJvci0ke2RlZmF1bHRJZE51bWJlcisrfWA7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5lcnJvci1tZXNzYWdlJykgZXJyb3JNc2cgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKSBtZXNzYWdlSWQgPSB0aGlzLmlkO1xufVxuIl19