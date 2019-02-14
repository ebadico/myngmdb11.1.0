/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { MDBUploaderService } from '../classes/mdb-uploader.class';
export class MDBFileSelectDirective {
    /**
     * @param {?} platform_id
     * @param {?} elementRef
     */
    constructor(platform_id, elementRef) {
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = isPlatformServer(this.platform_id);
        this.fileListener = (/**
         * @return {?}
         */
        () => {
            this.upload.handleFiles(this.el.files);
        });
        this.upload = new MDBUploaderService();
        this.uploadOutput = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isServer) {
            return;
        }
        this.el = this.elementRef.nativeElement;
        this.el.addEventListener('change', this.fileListener, false);
        this.upload.serviceEvents.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.uploadOutput.emit(event);
        }));
        if (this.uploadInput instanceof EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isServer) {
            return;
        }
        this.el.removeEventListener('change', this.fileListener, false);
        if (this.uploadInput) {
            this.uploadInput.unsubscribe();
        }
    }
}
MDBFileSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbFileSelect]'
            },] }
];
/** @nocollapse */
MDBFileSelectDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef }
];
MDBFileSelectDirective.propDecorators = {
    uploadInput: [{ type: Input }],
    uploadOutput: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZpbGUtc2VsZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZmlsZS1pbnB1dC9kaXJlY3RpdmVzL21kYi1maWxlLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFxQixXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBZ0IsTUFBTSwrQkFBK0IsQ0FBQztBQUtqRixNQUFNLE9BQU8sc0JBQXNCOzs7OztJQVNqQyxZQUF5QyxXQUFnQixFQUFVLFVBQXNCO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFLO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUp6RixhQUFRLEdBQVksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBc0N2RCxpQkFBWTs7O1FBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFBO1FBbkNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLEtBQW1CLEVBQUUsRUFBRTtZQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztRQUVILElBQUksSUFBSSxDQUFDLFdBQVcsWUFBWSxZQUFZLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVoRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztJQUNILENBQUM7OztZQTVDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjthQUM1Qjs7Ozs0Q0FVYyxNQUFNLFNBQUMsV0FBVztZQWhCYixVQUFVOzs7MEJBUTNCLEtBQUs7MkJBQ0wsTUFBTTs7OztJQURQLDZDQUF3Qzs7SUFDeEMsOENBQW1EOztJQUVuRCx3Q0FBMkI7O0lBQzNCLDBDQUF1RDs7SUFFdkQsb0NBQTJCOztJQW9DM0IsOENBRUM7Ozs7O0lBcENXLDZDQUE2Qzs7Ozs7SUFBRSw0Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIFBMQVRGT1JNX0lELCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTURCVXBsb2FkZXJTZXJ2aWNlLCBVcGxvYWRPdXRwdXQgfSBmcm9tICcuLi9jbGFzc2VzL21kYi11cGxvYWRlci5jbGFzcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJGaWxlU2VsZWN0XSdcbn0pXG5leHBvcnQgY2xhc3MgTURCRmlsZVNlbGVjdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdXBsb2FkSW5wdXQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBAT3V0cHV0KCkgdXBsb2FkT3V0cHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkT3V0cHV0PjtcblxuICB1cGxvYWQ6IE1EQlVwbG9hZGVyU2VydmljZTtcbiAgaXNTZXJ2ZXI6IGJvb2xlYW4gPSBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm1faWQpO1xuICAvLyBlbDogSFRNTElucHV0RWxlbWVudDtcbiAgZWw6IEhUTUxJbnB1dEVsZW1lbnQgfCBhbnk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybV9pZDogYW55LCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLnVwbG9hZCA9IG5ldyBNREJVcGxvYWRlclNlcnZpY2UoKTtcbiAgICB0aGlzLnVwbG9hZE91dHB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkT3V0cHV0PigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuaXNTZXJ2ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmZpbGVMaXN0ZW5lciwgZmFsc2UpO1xuXG4gICAgdGhpcy51cGxvYWQuc2VydmljZUV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBVcGxvYWRPdXRwdXQpID0+IHtcbiAgICAgIHRoaXMudXBsb2FkT3V0cHV0LmVtaXQoZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMudXBsb2FkSW5wdXQgaW5zdGFuY2VvZiBFdmVudEVtaXR0ZXIpIHtcbiAgICAgIHRoaXMudXBsb2FkLmluaXRJbnB1dEV2ZW50cyh0aGlzLnVwbG9hZElucHV0KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5pc1NlcnZlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5maWxlTGlzdGVuZXIsIGZhbHNlKTtcblxuICAgIGlmICh0aGlzLnVwbG9hZElucHV0KSB7XG4gICAgICB0aGlzLnVwbG9hZElucHV0LnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgZmlsZUxpc3RlbmVyID0gKCkgPT4ge1xuICAgIHRoaXMudXBsb2FkLmhhbmRsZUZpbGVzKHRoaXMuZWwuZmlsZXMpO1xuICB9XG59XG4iXX0=