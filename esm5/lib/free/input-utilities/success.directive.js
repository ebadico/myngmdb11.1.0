/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, HostBinding } from '@angular/core';
/** @type {?} */
var defaultIdNumber = 0;
var MdbSuccessDirective = /** @class */ (function () {
    function MdbSuccessDirective() {
        this.id = "mdb-success-" + defaultIdNumber++;
        this.successMsg = true;
        this.messageId = this.id;
    }
    MdbSuccessDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'mdb-success'
                },] }
    ];
    MdbSuccessDirective.propDecorators = {
        id: [{ type: Input }],
        successMsg: [{ type: HostBinding, args: ['class.success-message',] }],
        messageId: [{ type: HostBinding, args: ['attr.id',] }]
    };
    return MdbSuccessDirective;
}());
export { MdbSuccessDirective };
if (false) {
    /** @type {?} */
    MdbSuccessDirective.prototype.id;
    /** @type {?} */
    MdbSuccessDirective.prototype.successMsg;
    /** @type {?} */
    MdbSuccessDirective.prototype.messageId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VjY2Vzcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pbnB1dC11dGlsaXRpZXMvc3VjY2Vzcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFFMUQsZUFBZSxHQUFHLENBQUM7QUFFdkI7SUFBQTtRQUlXLE9BQUUsR0FBRyxpQkFBZSxlQUFlLEVBQUksQ0FBQztRQUVYLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDaEMsY0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjs7O3FCQUVFLEtBQUs7NkJBRUwsV0FBVyxTQUFDLHVCQUF1Qjs0QkFDbkMsV0FBVyxTQUFDLFNBQVM7O0lBQ3hCLDBCQUFDO0NBQUEsQUFSRCxJQVFDO1NBTFksbUJBQW1COzs7SUFDOUIsaUNBQWlEOztJQUVqRCx5Q0FBd0Q7O0lBQ3hELHdDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmxldCBkZWZhdWx0SWROdW1iZXIgPSAwO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdtZGItc3VjY2Vzcydcbn0pXG5leHBvcnQgY2xhc3MgTWRiU3VjY2Vzc0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGlkID0gYG1kYi1zdWNjZXNzLSR7ZGVmYXVsdElkTnVtYmVyKyt9YDtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnN1Y2Nlc3MtbWVzc2FnZScpIHN1Y2Nlc3NNc2cgPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKSBtZXNzYWdlSWQgPSB0aGlzLmlkO1xufVxuIl19