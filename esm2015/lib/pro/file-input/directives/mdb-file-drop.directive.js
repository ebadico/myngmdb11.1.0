import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, OnDestroy, OnInit, Output, PLATFORM_ID, ViewEncapsulation, } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { MDBUploaderService, } from '../classes/mdb-uploader.class';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let MDBFileDropDirective = 
// tslint:disable-next-line:component-class-suffix
class MDBFileDropDirective {
    constructor(platform_id, elementRef) {
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this._destroy$ = new Subject();
        this.isServer = isPlatformServer(this.platform_id);
        this.stopEvent = (e) => {
            e.stopPropagation();
            e.preventDefault();
        };
        this.uploadOutput = new EventEmitter();
    }
    ngOnInit() {
        if (this.isServer) {
            return;
        }
        const concurrency = (this.options && this.options.concurrency) || Number.POSITIVE_INFINITY;
        const allowedContentTypes = (this.options && this.options.allowedContentTypes) || ['*'];
        const maxUploads = (this.options && this.options.maxUploads) || Number.POSITIVE_INFINITY;
        this.upload = new MDBUploaderService(concurrency, allowedContentTypes, maxUploads);
        this.el = this.elementRef.nativeElement;
        this.upload.serviceEvents.pipe(takeUntil(this._destroy$)).subscribe((event) => {
            this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
        this.el.addEventListener('drop', this.stopEvent, false);
        this.el.addEventListener('dragenter', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
    }
    ngOnDestroy() {
        if (this.isServer) {
            return;
        }
        if (this.uploadInput) {
            this.uploadInput.unsubscribe();
        }
        this._destroy$.next();
        this._destroy$.complete();
    }
    onDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        const event = { type: 'drop' };
        this.uploadOutput.emit(event);
        this.upload.handleFiles(e.dataTransfer.files);
    }
    onDragOver(e) {
        if (!e) {
            return;
        }
        const event = { type: 'dragOver' };
        this.uploadOutput.emit(event);
    }
    onDragLeave(e) {
        if (!e) {
            return;
        }
        const event = { type: 'dragOut' };
        this.uploadOutput.emit(event);
    }
};
MDBFileDropDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef }
];
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], MDBFileDropDirective.prototype, "uploadInput", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MDBFileDropDirective.prototype, "options", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MDBFileDropDirective.prototype, "uploadOutput", void 0);
__decorate([
    HostListener('drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MDBFileDropDirective.prototype, "onDrop", null);
__decorate([
    HostListener('dragover', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], MDBFileDropDirective.prototype, "onDragOver", null);
__decorate([
    HostListener('dragleave', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Event]),
    __metadata("design:returntype", void 0)
], MDBFileDropDirective.prototype, "onDragLeave", null);
MDBFileDropDirective = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: '[mdbFileDrop]',
        template: '<ng-content></ng-content>',
        encapsulation: ViewEncapsulation.None,
        styles: [".file-field{position:relative;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.file-field .file-path-wrapper{padding-left:10px;height:2.5rem;overflow:visible;display:-webkit-box;display:flex;-webkit-box-flex:1;flex-grow:1}.file-field input[type=file]::-webkit-file-upload-button{display:none}.file-field .file-path-wrapper:after{content:\"\";clear:both}.file-field input.file-path{background-color:transparent;border:none;border-bottom:1px solid #ccc;border-radius:0;outline:0;height:2.1rem;width:100%;font-size:1rem;box-shadow:none;box-sizing:content-box;-webkit-transition:.3s;transition:.3s}.file-field .btn{position:relative;display:-webkit-box;display:flex;float:none}.file-field .btn:hover{cursor:pointer}.file-field .btn input[type=file]{height:100%}.file-field .btn input[type=file] :hover,.file-field span{cursor:pointer}.file-field input[type=file]{opacity:0;position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:1px;cursor:pointer;opacity:0}.file-field input[type=file]::-ms-value{display:none}.file-field input[type=file]::-ms-browse{width:100%}.btn-file{padding-top:1px}"]
    })
    // tslint:disable-next-line:component-class-suffix
    ,
    __param(0, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [Object, ElementRef])
], MDBFileDropDirective);
export { MDBFileDropDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZpbGUtZHJvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2ZpbGUtaW5wdXQvZGlyZWN0aXZlcy9tZGItZmlsZS1kcm9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbkQsT0FBTyxFQUNMLGtCQUFrQixHQUluQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVTNDLElBQWEsb0JBQW9CO0FBRGpDLGtEQUFrRDtBQUNsRCxNQUFhLG9CQUFvQjtJQVcvQixZQUF5QyxXQUFnQixFQUFVLFVBQXNCO1FBQWhELGdCQUFXLEdBQVgsV0FBVyxDQUFLO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQU5qRixjQUFTLEdBQWtCLElBQUksT0FBTyxFQUFFLENBQUM7UUFHakQsYUFBUSxHQUFZLGdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQThDdkQsY0FBUyxHQUFHLENBQUMsQ0FBUSxFQUFFLEVBQUU7WUFDdkIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUM7UUE3Q0EsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztJQUN2RCxDQUFDO0lB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QUFDO0lBR00sV0FBVyxDQUFDLENBQVE7UUFDekIsSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNOLE9BQU87U0FDUjtRQUVELE1BQU0sS0FBSyxHQUFpQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0YsQ0FBQTs7NENBN0VjLE1BQU0sU0FBQyxXQUFXO1lBQWdELFVBQVU7O0FBVmhGO0lBQVIsS0FBSyxFQUFFOzhCQUFjLFlBQVk7eURBQWM7QUFDdkM7SUFBUixLQUFLLEVBQUU7O3FEQUEwQjtBQUN4QjtJQUFULE1BQU0sRUFBRTs4QkFBZSxZQUFZOzBEQUFlO0FBeURuRDtJQURDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztrREFRaEM7QUFHRDtJQURDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7cUNBQ2hCLEtBQUs7O3NEQU96QjtBQUdEO0lBREMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztxQ0FDaEIsS0FBSzs7dURBTzFCO0FBdkZVLG9CQUFvQjtJQVJoQyxTQUFTLENBQUM7UUFDVCw4Q0FBOEM7UUFDOUMsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFLDJCQUEyQjtRQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztJQUNGLGtEQUFrRDs7SUFZbkMsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7NkNBQStDLFVBQVU7R0FYOUUsb0JBQW9CLENBd0ZoQztTQXhGWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBQTEFURk9STV9JRCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBNREJVcGxvYWRlclNlcnZpY2UsXG4gIFVwbG9hZGVyT3B0aW9ucyxcbiAgVXBsb2FkSW5wdXQsXG4gIFVwbG9hZE91dHB1dCxcbn0gZnJvbSAnLi4vY2xhc3Nlcy9tZGItdXBsb2FkZXIuY2xhc3MnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ1ttZGJGaWxlRHJvcF0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi8uLi9maWxlLWlucHV0LW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1jbGFzcy1zdWZmaXhcbmV4cG9ydCBjbGFzcyBNREJGaWxlRHJvcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdXBsb2FkSW5wdXQ6IEV2ZW50RW1pdHRlcjxVcGxvYWRJbnB1dD47XG4gIEBJbnB1dCgpIG9wdGlvbnM6IFVwbG9hZGVyT3B0aW9ucztcbiAgQE91dHB1dCgpIHVwbG9hZE91dHB1dDogRXZlbnRFbWl0dGVyPFVwbG9hZE91dHB1dD47XG5cbiAgcHJpdmF0ZSBfZGVzdHJveSQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuXG4gIHVwbG9hZDogTURCVXBsb2FkZXJTZXJ2aWNlO1xuICBpc1NlcnZlcjogYm9vbGVhbiA9IGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybV9pZCk7XG4gIGVsOiBIVE1MSW5wdXRFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1faWQ6IGFueSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy51cGxvYWRPdXRwdXQgPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZE91dHB1dD4oKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLmlzU2VydmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29uY3VycmVuY3kgPSAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5jb25jdXJyZW5jeSkgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIGNvbnN0IGFsbG93ZWRDb250ZW50VHlwZXMgPSAodGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5hbGxvd2VkQ29udGVudFR5cGVzKSB8fCBbJyonXTtcbiAgICBjb25zdCBtYXhVcGxvYWRzID0gKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMubWF4VXBsb2FkcykgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgIHRoaXMudXBsb2FkID0gbmV3IE1EQlVwbG9hZGVyU2VydmljZShjb25jdXJyZW5jeSwgYWxsb3dlZENvbnRlbnRUeXBlcywgbWF4VXBsb2Fkcyk7XG5cbiAgICB0aGlzLmVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICB0aGlzLnVwbG9hZC5zZXJ2aWNlRXZlbnRzLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSkuc3Vic2NyaWJlKChldmVudDogVXBsb2FkT3V0cHV0KSA9PiB7XG4gICAgICB0aGlzLnVwbG9hZE91dHB1dC5lbWl0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnVwbG9hZElucHV0IGluc3RhbmNlb2YgRXZlbnRFbWl0dGVyKSB7XG4gICAgICB0aGlzLnVwbG9hZC5pbml0SW5wdXRFdmVudHModGhpcy51cGxvYWRJbnB1dCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5zdG9wRXZlbnQsIGZhbHNlKTtcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuc3RvcEV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuc3RvcEV2ZW50LCBmYWxzZSk7XG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuc3RvcEV2ZW50LCBmYWxzZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5pc1NlcnZlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVwbG9hZElucHV0KSB7XG4gICAgICB0aGlzLnVwbG9hZElucHV0LnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBzdG9wRXZlbnQgPSAoZTogRXZlbnQpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJvcChlOiBhbnkpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGV2ZW50OiBVcGxvYWRPdXRwdXQgPSB7IHR5cGU6ICdkcm9wJyB9O1xuICAgIHRoaXMudXBsb2FkT3V0cHV0LmVtaXQoZXZlbnQpO1xuICAgIHRoaXMudXBsb2FkLmhhbmRsZUZpbGVzKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgcHVibGljIG9uRHJhZ092ZXIoZTogRXZlbnQpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudDogVXBsb2FkT3V0cHV0ID0geyB0eXBlOiAnZHJhZ092ZXInIH07XG4gICAgdGhpcy51cGxvYWRPdXRwdXQuZW1pdChldmVudCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkcmFnbGVhdmUnLCBbJyRldmVudCddKVxuICBwdWJsaWMgb25EcmFnTGVhdmUoZTogRXZlbnQpIHtcbiAgICBpZiAoIWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBldmVudDogVXBsb2FkT3V0cHV0ID0geyB0eXBlOiAnZHJhZ091dCcgfTtcbiAgICB0aGlzLnVwbG9hZE91dHB1dC5lbWl0KGV2ZW50KTtcbiAgfVxufVxuIl19