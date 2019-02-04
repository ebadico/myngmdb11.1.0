/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ElementRef, EventEmitter, HostListener, PLATFORM_ID, Inject, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// import * as screenfull from 'screenfull/dist/screenfull';
// import 'hammerjs';
var ImageModalComponent = /** @class */ (function () {
    function ImageModalComponent(platformId, element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.opened = false;
        this.loading = false;
        this.showRepeat = false;
        this.isMobile = null;
        this.clicked = false;
        this.isBrowser = false;
        this.zoomed = 'inactive';
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this.smooth = true;
        this.cancelEvent = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
        this._element = this.element.nativeElement;
        if (this.isBrowser) {
            this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        }
    }
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.toggleZoomed = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var imgRef = this.element.nativeElement.lastElementChild.lastElementChild.firstElementChild;
        if (!this.clicked) {
            this.renderer.setStyle(imgRef, 'transform', 'scale(1.0, 1.0');
            this.renderer.setStyle(imgRef, 'animate', '300ms ease-out');
            this.renderer.setStyle(imgRef, 'cursor', 'zoom-out');
            this.clicked = true;
        }
        else if (this.clicked) {
            this.renderer.setStyle(imgRef, 'transform', 'scale(0.9, 0.9');
            this.renderer.setStyle(imgRef, 'animate', '300ms ease-in');
            this.renderer.setStyle(imgRef, 'cursor', 'zoom-in');
            this.clicked = false;
        }
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.toggleRestart = /**
     * @return {?}
     */
    function () {
        this.zoomed = (this.zoomed === 'inactive') ? 'active' : 'inactive';
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showRepeat = false;
            this.openGallery(this.imagePointer);
        }
        else {
            this.showRepeat = true;
        }
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.closeGallery = /**
     * @return {?}
     */
    function () {
        this.zoom = false;
        if (screenfull.enabled) {
            screenfull.exit();
        }
        this.opened = false;
        this.cancelEvent.emit(null);
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.prevImage = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.modalImages.length - 1;
        }
        this.openGallery(this.currentImageIndex);
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.nextImage = /**
     * @return {?}
     */
    function () {
        this.loading = true;
        this.currentImageIndex++;
        if (this.modalImages.length === this.currentImageIndex) {
            this.currentImageIndex = 0;
        }
        this.openGallery(this.currentImageIndex);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ImageModalComponent.prototype.openGallery = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (!index) {
            this.currentImageIndex = 1;
        }
        this.currentImageIndex = index;
        this.opened = true;
        for (var i = 0; i < this.modalImages.length; i++) {
            if (i === this.currentImageIndex) {
                this.imgSrc = this.modalImages[i].img;
                this.caption = this.modalImages[i].caption;
                this.loading = false;
                break;
            }
        }
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.fullScreen = /**
     * @return {?}
     */
    function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    };
    Object.defineProperty(ImageModalComponent.prototype, "is_iPhone_or_iPod", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.isBrowser) {
                if (navigator && navigator.userAgent && navigator.userAgent != null) {
                    /** @type {?} */
                    var strUserAgent = navigator.userAgent.toLowerCase();
                    /** @type {?} */
                    var arrMatches = strUserAgent.match(/ipad/);
                    if (arrMatches != null) {
                        return true;
                    }
                }
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ImageModalComponent.prototype.keyboardControl = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.opened) {
            if (event.keyCode === 39) {
                this.nextImage();
            }
            if (event.keyCode === 37) {
                this.prevImage();
            }
            if (event.keyCode === 27) {
                this.closeGallery();
            }
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    ImageModalComponent.prototype.swipe = /**
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.prevImage();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextImage();
        }
    };
    ImageModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-image-modal',
                    template: "<div class=\"ng-gallery mdb-lightbox {{ type }}\" *ngIf=\"modalImages && showRepeat\">\n  <figure class=\"col-md-4\" *ngFor=\"let i of modalImages; let index = index\">\n    <img src=\"{{ !i.thumb ? i.img : i.thumb }}\" class=\"ng-thumb\" (click)=\"openGallery(index)\"\n         alt=\"Image {{ index + 1 }}\"/>\n  </figure>\n</div>\n<div tabindex=\"0\" class=\"ng-overlay\" [class.hide_lightbox]=\"opened == false\">\n  <div class=\"top-bar\" style='z-index: 100000'>\n    <span *ngIf=\"modalImages\" class=\"info-text\">{{ currentImageIndex + 1 }}/{{ modalImages.length }}</span>\n    <a class=\"close-popup\" (click)=\"closeGallery()\" (click)=\"toggleRestart()\"></a>\n    <a *ngIf=\"!is_iPhone_or_iPod\" class=\"fullscreen-toogle\" [class.toggled]='fullscreen' (click)=\"fullScreen()\"></a>\n    <a class=\"zoom-toogle\" [class.zoom]='zoom' (click)=\"toggleZoomed()\" *ngIf=\"!isMobile\"></a>\n  </div>\n  <div class=\"ng-gallery-content\">\n    <img *ngIf=\"!loading\" src=\"{{imgSrc}}\" [class.smooth]='smooth' class=\"effect\" (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\" (click)=\"toggleZoomed()\" style=\"\"/>\n\n    <div class=\"uil-ring-css\" *ngIf=\"loading\">\n      <div></div>\n    </div>\n    <a class=\"nav-left\" *ngIf=\"modalImages && modalImages.length >1 && !isMobile\" (click)=\"prevImage()\">\n      <span></span>\n    </a>\n    <a class=\"nav-right\" *ngIf=\"modalImages && modalImages.length >1 && !isMobile\" (click)=\"nextImage()\">\n      <span></span>\n    </a>\n  </div>\n  <div class=\"row\" *ngIf=\"caption\">\n    <div class=\"col-md-12 mx-auto bottom-bar text-center\">\n      <figcaption class=\"text-white lightbox-caption\">{{caption}}</figcaption>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"openModalWindow\">\n  <mdb-image-modal [imagePointer]=\"imagePointer\"></mdb-image-modal>\n</div>\n",
                    styles: ['.bottom-bar {z-index: 100000; position: absolute; bottom: 2rem; left: 0; right: 0; width: 100%;} ']
                }] }
    ];
    /** @nocollapse */
    ImageModalComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ImageModalComponent.propDecorators = {
        modalImages: [{ type: Input, args: ['modalImages',] }],
        imagePointer: [{ type: Input, args: ['imagePointer',] }],
        fullscreen: [{ type: Input, args: ['fullscreen',] }],
        zoom: [{ type: Input, args: ['zoom',] }],
        smooth: [{ type: Input, args: ['smooth',] }],
        type: [{ type: Input, args: ['type',] }],
        cancelEvent: [{ type: Output, args: ['cancelEvent',] }],
        keyboardControl: [{ type: HostListener, args: ['document:keyup', ['$event'],] }]
    };
    return ImageModalComponent;
}());
export { ImageModalComponent };
if (false) {
    /** @type {?} */
    ImageModalComponent.prototype._element;
    /** @type {?} */
    ImageModalComponent.prototype.opened;
    /** @type {?} */
    ImageModalComponent.prototype.imgSrc;
    /** @type {?} */
    ImageModalComponent.prototype.currentImageIndex;
    /** @type {?} */
    ImageModalComponent.prototype.loading;
    /** @type {?} */
    ImageModalComponent.prototype.showRepeat;
    /** @type {?} */
    ImageModalComponent.prototype.openModalWindow;
    /** @type {?} */
    ImageModalComponent.prototype.caption;
    /** @type {?} */
    ImageModalComponent.prototype.isMobile;
    /** @type {?} */
    ImageModalComponent.prototype.clicked;
    /** @type {?} */
    ImageModalComponent.prototype.isBrowser;
    /** @type {?} */
    ImageModalComponent.prototype.zoomed;
    /** @type {?} */
    ImageModalComponent.prototype.SWIPE_ACTION;
    /** @type {?} */
    ImageModalComponent.prototype.modalImages;
    /** @type {?} */
    ImageModalComponent.prototype.imagePointer;
    /** @type {?} */
    ImageModalComponent.prototype.fullscreen;
    /** @type {?} */
    ImageModalComponent.prototype.zoom;
    /** @type {?} */
    ImageModalComponent.prototype.smooth;
    /** @type {?} */
    ImageModalComponent.prototype.type;
    /** @type {?} */
    ImageModalComponent.prototype.cancelEvent;
    /** @type {?} */
    ImageModalComponent.prototype.element;
    /** @type {?} */
    ImageModalComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2xpZ2h0Ym94L2ltYWdlLXBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBVSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQU1wRDtJQWtDRSw2QkFBaUMsVUFBa0IsRUFBUyxPQUFtQixFQUFTLFFBQW1CO1FBQS9DLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBMUJwRyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2YsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSTFCLGFBQVEsR0FBUSxJQUFJLENBQUM7UUFDckIsWUFBTyxHQUFRLEtBQUssQ0FBQztRQUNyQixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBQ3ZCLFdBQU0sR0FBRyxVQUFVLENBQUM7UUFFcEIsaUJBQVksR0FBRyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxDQUFDO1FBT2xDLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFJZixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFHM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLDJCQUEy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LFNBQUMsWUFBWTt1QkFDbEIsS0FBSyxTQUFDLE1BQU07eUJBQ1osS0FBSyxTQUFDLFFBQVE7dUJBQ2QsS0FBSyxTQUFDLE1BQU07OEJBR1osTUFBTSxTQUFDLGFBQWE7a0NBd0dwQixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBMEI1QywwQkFBQztDQUFBLEFBbEtELElBa0tDO1NBNUpZLG1CQUFtQjs7O0lBQzlCLHVDQUFxQjs7SUFDckIscUNBQXNCOztJQUN0QixxQ0FBc0I7O0lBQ3RCLGdEQUFpQzs7SUFDakMsc0NBQXVCOztJQUN2Qix5Q0FBMEI7O0lBQzFCLDhDQUE0Qjs7SUFDNUIsc0NBQXVCOztJQUV2Qix1Q0FBcUI7O0lBQ3JCLHNDQUFxQjs7SUFDckIsd0NBQXVCOztJQUN2QixxQ0FBb0I7O0lBRXBCLDJDQUEwRDs7SUFFMUQsMENBQThDOztJQUM5QywyQ0FBbUQ7O0lBRW5ELHlDQUFnRDs7SUFDaEQsbUNBQW9DOztJQUNwQyxxQ0FBc0M7O0lBQ3RDLG1DQUFtQzs7SUFHbkMsMENBQTZEOztJQUVSLHNDQUEwQjs7SUFBRSx1Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBIb3N0TGlzdGVuZXIsIFBMQVRGT1JNX0lELCBJbmplY3QsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuZGVjbGFyZSB2YXIgc2NyZWVuZnVsbDogYW55O1xuLy8gaW1wb3J0ICogYXMgc2NyZWVuZnVsbCBmcm9tICdzY3JlZW5mdWxsL2Rpc3Qvc2NyZWVuZnVsbCc7XG4vLyBpbXBvcnQgJ2hhbW1lcmpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItaW1hZ2UtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ2ltYWdlLXBvcHVwLmh0bWwnLFxuICBzdHlsZXM6IFsnLmJvdHRvbS1iYXIge3otaW5kZXg6IDEwMDAwMDsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDJyZW07IGxlZnQ6IDA7IHJpZ2h0OiAwOyB3aWR0aDogMTAwJTt9ICddXG59KVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHB1YmxpYyBfZWxlbWVudDogYW55O1xuICBwdWJsaWMgb3BlbmVkID0gZmFsc2U7XG4gIHB1YmxpYyBpbWdTcmM6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRJbWFnZUluZGV4OiBudW1iZXI7XG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93UmVwZWF0ID0gZmFsc2U7XG4gIHB1YmxpYyBvcGVuTW9kYWxXaW5kb3c6IGFueTtcbiAgcHVibGljIGNhcHRpb246IHN0cmluZztcblxuICBpc01vYmlsZTogYW55ID0gbnVsbDtcbiAgY2xpY2tlZDogYW55ID0gZmFsc2U7XG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gIHpvb21lZCA9ICdpbmFjdGl2ZSc7XG5cbiAgU1dJUEVfQUNUSU9OID0geyBMRUZUOiAnc3dpcGVsZWZ0JywgUklHSFQ6ICdzd2lwZXJpZ2h0JyB9O1xuXG4gIEBJbnB1dCgnbW9kYWxJbWFnZXMnKSBwdWJsaWMgbW9kYWxJbWFnZXM6IGFueTtcbiAgQElucHV0KCdpbWFnZVBvaW50ZXInKSBwdWJsaWMgaW1hZ2VQb2ludGVyOiBudW1iZXI7XG5cbiAgQElucHV0KCdmdWxsc2NyZWVuJykgcHVibGljIGZ1bGxzY3JlZW46IGJvb2xlYW47XG4gIEBJbnB1dCgnem9vbScpIHB1YmxpYyB6b29tOiBib29sZWFuO1xuICBASW5wdXQoJ3Ntb290aCcpIHB1YmxpYyBzbW9vdGggPSB0cnVlO1xuICBASW5wdXQoJ3R5cGUnKSBwdWJsaWMgdHlwZTogU3RyaW5nO1xuXG5cbiAgQE91dHB1dCgnY2FuY2VsRXZlbnQnKSBjYW5jZWxFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZywgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlWm9vbWVkKCkge1xuICAgIGNvbnN0IGltZ1JlZiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIGlmICghdGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltZ1JlZiwgJ3RyYW5zZm9ybScsICdzY2FsZSgxLjAsIDEuMCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWdSZWYsICdhbmltYXRlJywgJzMwMG1zIGVhc2Utb3V0Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltZ1JlZiwgJ2N1cnNvcicsICd6b29tLW91dCcpO1xuICAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWdSZWYsICd0cmFuc2Zvcm0nLCAnc2NhbGUoMC45LCAwLjknKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW1nUmVmLCAnYW5pbWF0ZScsICczMDBtcyBlYXNlLWluJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltZ1JlZiwgJ2N1cnNvcicsICd6b29tLWluJyk7XG4gICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuXG4gIHRvZ2dsZVJlc3RhcnQoKSB7XG4gICAgdGhpcy56b29tZWQgPSAodGhpcy56b29tZWQgPT09ICdpbmFjdGl2ZScpID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLmltYWdlUG9pbnRlciA+PSAwKSB7XG4gICAgICB0aGlzLnNob3dSZXBlYXQgPSBmYWxzZTtcbiAgICAgIHRoaXMub3BlbkdhbGxlcnkodGhpcy5pbWFnZVBvaW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dSZXBlYXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlR2FsbGVyeSgpIHtcbiAgICB0aGlzLnpvb20gPSBmYWxzZTtcbiAgICBpZiAoc2NyZWVuZnVsbC5lbmFibGVkKSB7XG4gICAgICBzY3JlZW5mdWxsLmV4aXQoKTtcbiAgICB9XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhbmNlbEV2ZW50LmVtaXQobnVsbCk7XG4gIH1cblxuICBwcmV2SW1hZ2UoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4LS07XG4gICAgaWYgKHRoaXMuY3VycmVudEltYWdlSW5kZXggPCAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gdGhpcy5tb2RhbEltYWdlcy5sZW5ndGggLSAxO1xuICAgIH1cbiAgICB0aGlzLm9wZW5HYWxsZXJ5KHRoaXMuY3VycmVudEltYWdlSW5kZXgpO1xuICB9XG5cbiAgbmV4dEltYWdlKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCsrO1xuICAgIGlmICh0aGlzLm1vZGFsSW1hZ2VzLmxlbmd0aCA9PT0gdGhpcy5jdXJyZW50SW1hZ2VJbmRleCkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMub3BlbkdhbGxlcnkodGhpcy5jdXJyZW50SW1hZ2VJbmRleCk7XG4gIH1cblxuICBvcGVuR2FsbGVyeShpbmRleDogYW55KSB7XG4gICAgaWYgKCFpbmRleCkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDE7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGFsSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gdGhpcy5jdXJyZW50SW1hZ2VJbmRleCkge1xuICAgICAgICB0aGlzLmltZ1NyYyA9IHRoaXMubW9kYWxJbWFnZXNbaV0uaW1nO1xuICAgICAgICB0aGlzLmNhcHRpb24gPSB0aGlzLm1vZGFsSW1hZ2VzW2ldLmNhcHRpb247XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdWxsU2NyZWVuKCk6IGFueSB7XG4gICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xuICAgICAgc2NyZWVuZnVsbC50b2dnbGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNfaVBob25lX29yX2lQb2QoKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0clVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgYXJyTWF0Y2hlcyA9IHN0clVzZXJBZ2VudC5tYXRjaCgvaXBhZC8pO1xuICAgICAgICBpZiAoYXJyTWF0Y2hlcyAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pXG4gIGtleWJvYXJkQ29udHJvbChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIHRoaXMubmV4dEltYWdlKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgdGhpcy5wcmV2SW1hZ2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICB0aGlzLmNsb3NlR2FsbGVyeSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN3aXBlKGFjdGlvbjogU3RyaW5nID0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQpIHtcbiAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCkge1xuICAgICAgdGhpcy5wcmV2SW1hZ2UoKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5MRUZUKSB7XG4gICAgICB0aGlzLm5leHRJbWFnZSgpO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==