/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostBinding } from '@angular/core';
/** @type {?} */
let defaultIdNumber = 0;
export class MdbErrorDirective {
    constructor() {
        this.id = `mdb-error-${defaultIdNumber++}`;
        this.errorMsg = true;
        this.messageId = this.id;
    }
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
if (false) {
    /** @type {?} */
    MdbErrorDirective.prototype.id;
    /** @type {?} */
    MdbErrorDirective.prototype.errorMsg;
    /** @type {?} */
    MdbErrorDirective.prototype.messageId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvaW5wdXQtdXRpbGl0aWVzL2Vycm9yLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQUUxRCxlQUFlLEdBQUcsQ0FBQztBQUt2QixNQUFNLE9BQU8saUJBQWlCO0lBSDlCO1FBSVcsT0FBRSxHQUFHLGFBQWEsZUFBZSxFQUFFLEVBQUUsQ0FBQztRQUVYLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDNUIsY0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2FBQ3RCOzs7aUJBRUUsS0FBSzt1QkFFTCxXQUFXLFNBQUMscUJBQXFCO3dCQUNqQyxXQUFXLFNBQUMsU0FBUzs7OztJQUh0QiwrQkFBK0M7O0lBRS9DLHFDQUFvRDs7SUFDcEQsc0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxubGV0IGRlZmF1bHRJZE51bWJlciA9IDA7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ21kYi1lcnJvcidcbn0pXG5leHBvcnQgY2xhc3MgTWRiRXJyb3JEaXJlY3RpdmUge1xuICBASW5wdXQoKSBpZCA9IGBtZGItZXJyb3ItJHtkZWZhdWx0SWROdW1iZXIrK31gO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZXJyb3ItbWVzc2FnZScpIGVycm9yTXNnID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJykgbWVzc2FnZUlkID0gdGhpcy5pZDtcbn1cbiJdfQ==