/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { MDBUploaderService } from '../classes/mdb-uploader.class';
var MDBFileSelectDirective = /** @class */ (function () {
    function MDBFileSelectDirective(platform_id, elementRef) {
        var _this = this;
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = isPlatformServer(this.platform_id);
        this.fileListener = function () {
            _this.upload.handleFiles(_this.el.files);
        };
        this.upload = new MDBUploaderService();
        this.uploadOutput = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MDBFileSelectDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isServer) {
            return;
        }
        this.el = this.elementRef.nativeElement;
        this.el.addEventListener('change', this.fileListener, false);
        this.upload.serviceEvents.subscribe(function (event) {
            _this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
    };
    /**
     * @return {?}
     */
    MDBFileSelectDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.isServer) {
            return;
        }
        this.el.removeEventListener('change', this.fileListener, false);
        if (this.uploadInput) {
            this.uploadInput.unsubscribe();
        }
    };
    MDBFileSelectDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[mdbFileSelect]'
                },] }
    ];
    /** @nocollapse */
    MDBFileSelectDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef }
    ]; };
    MDBFileSelectDirective.propDecorators = {
        uploadInput: [{ type: Input }],
        uploadOutput: [{ type: Output }]
    };
    return MDBFileSelectDirective;
}());
export { MDBFileSelectDirective };
if (false) {
    /** @type {?} */
    MDBFileSelectDirective.prototype.uploadInput;
    /** @type {?} */
    MDBFileSelectDirective.prototype.uploadOutput;
    /** @type {?} */
    MDBFileSelectDirective.prototype.upload;
    /** @type {?} */
    MDBFileSelectDirective.prototype.isServer;
    /** @type {?} */
    MDBFileSelectDirective.prototype.el;
    /** @type {?} */
    MDBFileSelectDirective.prototype.fileListener;
    /**
     * @type {?}
     * @private
     */
    MDBFileSelectDirective.prototype.platform_id;
    /**
     * @type {?}
     * @private
     */
    MDBFileSelectDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZpbGUtc2VsZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZmlsZS1pbnB1dC9kaXJlY3RpdmVzL21kYi1maWxlLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0IsTUFBTSwrQkFBK0IsQ0FBQztBQUVqRjtJQVlFLGdDQUF5QyxXQUFnQixFQUFVLFVBQXNCO1FBQXpGLGlCQUdDO1FBSHdDLGdCQUFXLEdBQVgsV0FBVyxDQUFLO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUp6RixhQUFRLEdBQVksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBc0N2RCxpQkFBWSxHQUFHO1lBQ2IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUE7UUFuQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQUEsaUJBZUM7UUFkQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQW1CO1lBQ3RELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxJQUFJLENBQUMsV0FBVyxZQUFZLFlBQVksRUFBRTtZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFaEUsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDOztnQkE1Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOzs7O2dEQVVjLE1BQU0sU0FBQyxXQUFXO2dCQWhCYixVQUFVOzs7OEJBUTNCLEtBQUs7K0JBQ0wsTUFBTTs7SUE0Q1QsNkJBQUM7Q0FBQSxBQWpERCxJQWlEQztTQTlDWSxzQkFBc0I7OztJQUNqQyw2Q0FBd0M7O0lBQ3hDLDhDQUFtRDs7SUFFbkQsd0NBQTJCOztJQUMzQiwwQ0FBdUQ7O0lBRXZELG9DQUEyQjs7SUFvQzNCLDhDQUVDOzs7OztJQXBDVyw2Q0FBNkM7Ozs7O0lBQUUsNENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQsIE9uSW5pdCwgT25EZXN0cm95LCBQTEFURk9STV9JRCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1EQlVwbG9hZGVyU2VydmljZSwgVXBsb2FkT3V0cHV0IH0gZnJvbSAnLi4vY2xhc3Nlcy9tZGItdXBsb2FkZXIuY2xhc3MnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiRmlsZVNlbGVjdF0nXG59KVxuZXhwb3J0IGNsYXNzIE1EQkZpbGVTZWxlY3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHVwbG9hZElucHV0OiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQE91dHB1dCgpIHVwbG9hZE91dHB1dDogRXZlbnRFbWl0dGVyPFVwbG9hZE91dHB1dD47XG5cbiAgdXBsb2FkOiBNREJVcGxvYWRlclNlcnZpY2U7XG4gIGlzU2VydmVyOiBib29sZWFuID0gaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtX2lkKTtcbiAgLy8gZWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gIGVsOiBIVE1MSW5wdXRFbGVtZW50IHwgYW55O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1faWQ6IGFueSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy51cGxvYWQgPSBuZXcgTURCVXBsb2FkZXJTZXJ2aWNlKCk7XG4gICAgdGhpcy51cGxvYWRPdXRwdXQgPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZE91dHB1dD4oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmlzU2VydmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5maWxlTGlzdGVuZXIsIGZhbHNlKTtcblxuICAgIHRoaXMudXBsb2FkLnNlcnZpY2VFdmVudHMuc3Vic2NyaWJlKChldmVudDogVXBsb2FkT3V0cHV0KSA9PiB7XG4gICAgICB0aGlzLnVwbG9hZE91dHB1dC5lbWl0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnVwbG9hZElucHV0IGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgICB0aGlzLnVwbG9hZC5pbml0SW5wdXRFdmVudHModGhpcy51cGxvYWRJbnB1dCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaXNTZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuZmlsZUxpc3RlbmVyLCBmYWxzZSk7XG5cbiAgICBpZiAodGhpcy51cGxvYWRJbnB1dCkge1xuICAgICAgdGhpcy51cGxvYWRJbnB1dC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZpbGVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB0aGlzLnVwbG9hZC5oYW5kbGVGaWxlcyh0aGlzLmVsLmZpbGVzKTtcbiAgfVxufVxuIl19