/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ElementRef, EventEmitter, HostListener, PLATFORM_ID, Inject, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// import * as screenfull from 'screenfull/dist/screenfull';
// import 'hammerjs';
export class ImageModalComponent {
    /**
     * @param {?} platformId
     * @param {?} element
     * @param {?} renderer
     */
    constructor(platformId, element, renderer) {
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
    toggleZoomed() {
        /** @type {?} */
        const imgRef = this.element.nativeElement.lastElementChild.lastElementChild.firstElementChild;
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
    }
    /**
     * @return {?}
     */
    toggleRestart() {
        this.zoomed = (this.zoomed === 'inactive') ? 'active' : 'inactive';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showRepeat = false;
            this.openGallery(this.imagePointer);
        }
        else {
            this.showRepeat = true;
        }
    }
    /**
     * @return {?}
     */
    closeGallery() {
        this.zoom = false;
        if (screenfull.enabled) {
            screenfull.exit();
        }
        this.opened = false;
        this.cancelEvent.emit(null);
    }
    /**
     * @return {?}
     */
    prevImage() {
        this.loading = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.modalImages.length - 1;
        }
        this.openGallery(this.currentImageIndex);
    }
    /**
     * @return {?}
     */
    nextImage() {
        this.loading = true;
        this.currentImageIndex++;
        if (this.modalImages.length === this.currentImageIndex) {
            this.currentImageIndex = 0;
        }
        this.openGallery(this.currentImageIndex);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    openGallery(index) {
        if (!index) {
            this.currentImageIndex = 1;
        }
        this.currentImageIndex = index;
        this.opened = true;
        for (let i = 0; i < this.modalImages.length; i++) {
            if (i === this.currentImageIndex) {
                this.imgSrc = this.modalImages[i].img;
                this.caption = this.modalImages[i].caption;
                this.loading = false;
                break;
            }
        }
    }
    /**
     * @return {?}
     */
    fullScreen() {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    }
    /**
     * @return {?}
     */
    get is_iPhone_or_iPod() {
        if (this.isBrowser) {
            if (navigator && navigator.userAgent && navigator.userAgent != null) {
                /** @type {?} */
                const strUserAgent = navigator.userAgent.toLowerCase();
                /** @type {?} */
                const arrMatches = strUserAgent.match(/ipad/);
                if (arrMatches != null) {
                    return true;
                }
            }
            return false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyboardControl(event) {
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
    }
    /**
     * @param {?=} action
     * @return {?}
     */
    swipe(action = this.SWIPE_ACTION.RIGHT) {
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.prevImage();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextImage();
        }
    }
}
ImageModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-image-modal',
                template: "<div class=\"ng-gallery mdb-lightbox {{ type }}\" *ngIf=\"modalImages && showRepeat\">\n  <figure class=\"col-md-4\" *ngFor=\"let i of modalImages; let index = index\">\n    <img src=\"{{ !i.thumb ? i.img : i.thumb }}\" class=\"ng-thumb\" (click)=\"openGallery(index)\"\n         alt=\"Image {{ index + 1 }}\"/>\n  </figure>\n</div>\n<div tabindex=\"0\" class=\"ng-overlay\" [class.hide_lightbox]=\"opened == false\">\n  <div class=\"top-bar\" style='z-index: 100000'>\n    <span *ngIf=\"modalImages\" class=\"info-text\">{{ currentImageIndex + 1 }}/{{ modalImages.length }}</span>\n    <a class=\"close-popup\" (click)=\"closeGallery()\" (click)=\"toggleRestart()\"></a>\n    <a *ngIf=\"!is_iPhone_or_iPod\" class=\"fullscreen-toogle\" [class.toggled]='fullscreen' (click)=\"fullScreen()\"></a>\n    <a class=\"zoom-toogle\" [class.zoom]='zoom' (click)=\"toggleZoomed()\" *ngIf=\"!isMobile\"></a>\n  </div>\n  <div class=\"ng-gallery-content\">\n    <img *ngIf=\"!loading\" src=\"{{imgSrc}}\" [class.smooth]='smooth' class=\"effect\" (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\" (click)=\"toggleZoomed()\" style=\"\"/>\n\n    <div class=\"uil-ring-css\" *ngIf=\"loading\">\n      <div></div>\n    </div>\n    <a class=\"nav-left\" *ngIf=\"modalImages && modalImages.length >1 && !isMobile\" (click)=\"prevImage()\">\n      <span></span>\n    </a>\n    <a class=\"nav-right\" *ngIf=\"modalImages && modalImages.length >1 && !isMobile\" (click)=\"nextImage()\">\n      <span></span>\n    </a>\n  </div>\n  <div class=\"row\" *ngIf=\"caption\">\n    <div class=\"col-md-12 mx-auto bottom-bar text-center\">\n      <figcaption class=\"text-white lightbox-caption\">{{caption}}</figcaption>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"openModalWindow\">\n  <mdb-image-modal [imagePointer]=\"imagePointer\"></mdb-image-modal>\n</div>\n",
                styles: ['.bottom-bar {z-index: 100000; position: absolute; bottom: 2rem; left: 0; right: 0; width: 100%;} ']
            }] }
];
/** @nocollapse */
ImageModalComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: Renderer2 }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2xpZ2h0Ym94L2ltYWdlLXBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBVSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekksT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQVlwRCxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUE0QjlCLFlBQWlDLFVBQWtCLEVBQVMsT0FBbUIsRUFBUyxRQUFtQjtRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTFCcEcsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdmLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUkxQixhQUFRLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBUSxLQUFLLENBQUM7UUFDckIsY0FBUyxHQUFRLEtBQUssQ0FBQztRQUN2QixXQUFNLEdBQUcsVUFBVSxDQUFDO1FBRXBCLGlCQUFZLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQztRQU9sQyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBSWYsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRzNELElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFB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WUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBakkxQyx1Q0FBcUI7O0lBQ3JCLHFDQUFzQjs7SUFDdEIscUNBQXNCOztJQUN0QixnREFBaUM7O0lBQ2pDLHNDQUF1Qjs7SUFDdkIseUNBQTBCOztJQUMxQiw4Q0FBNEI7O0lBQzVCLHNDQUF1Qjs7SUFFdkIsdUNBQXFCOztJQUNyQixzQ0FBcUI7O0lBQ3JCLHdDQUF1Qjs7SUFDdkIscUNBQW9COztJQUVwQiwyQ0FBMEQ7O0lBRTFELDBDQUE4Qzs7SUFDOUMsMkNBQW1EOztJQUVuRCx5Q0FBZ0Q7O0lBQ2hELG1DQUFvQzs7SUFDcEMscUNBQXNDOztJQUN0QyxtQ0FBbUM7O0lBR25DLDBDQUE2RDs7SUFFUixzQ0FBMEI7O0lBQUUsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgSG9zdExpc3RlbmVyLCBQTEFURk9STV9JRCwgSW5qZWN0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmRlY2xhcmUgdmFyIHNjcmVlbmZ1bGw6IGFueTtcbi8vIGltcG9ydCAqIGFzIHNjcmVlbmZ1bGwgZnJvbSAnc2NyZWVuZnVsbC9kaXN0L3NjcmVlbmZ1bGwnO1xuLy8gaW1wb3J0ICdoYW1tZXJqcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWltYWdlLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdpbWFnZS1wb3B1cC5odG1sJyxcbiAgc3R5bGVzOiBbJy5ib3R0b20tYmFyIHt6LWluZGV4OiAxMDAwMDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAycmVtOyBsZWZ0OiAwOyByaWdodDogMDsgd2lkdGg6IDEwMCU7fSAnXVxufSlcblxuZXhwb3J0IGNsYXNzIEltYWdlTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgX2VsZW1lbnQ6IGFueTtcbiAgcHVibGljIG9wZW5lZCA9IGZhbHNlO1xuICBwdWJsaWMgaW1nU3JjOiBzdHJpbmc7XG4gIHB1YmxpYyBjdXJyZW50SW1hZ2VJbmRleDogbnVtYmVyO1xuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1JlcGVhdCA9IGZhbHNlO1xuICBwdWJsaWMgb3Blbk1vZGFsV2luZG93OiBhbnk7XG4gIHB1YmxpYyBjYXB0aW9uOiBzdHJpbmc7XG5cbiAgaXNNb2JpbGU6IGFueSA9IG51bGw7XG4gIGNsaWNrZWQ6IGFueSA9IGZhbHNlO1xuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuICB6b29tZWQgPSAnaW5hY3RpdmUnO1xuXG4gIFNXSVBFX0FDVElPTiA9IHsgTEVGVDogJ3N3aXBlbGVmdCcsIFJJR0hUOiAnc3dpcGVyaWdodCcgfTtcblxuICBASW5wdXQoJ21vZGFsSW1hZ2VzJykgcHVibGljIG1vZGFsSW1hZ2VzOiBhbnk7XG4gIEBJbnB1dCgnaW1hZ2VQb2ludGVyJykgcHVibGljIGltYWdlUG9pbnRlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgnZnVsbHNjcmVlbicpIHB1YmxpYyBmdWxsc2NyZWVuOiBib29sZWFuO1xuICBASW5wdXQoJ3pvb20nKSBwdWJsaWMgem9vbTogYm9vbGVhbjtcbiAgQElucHV0KCdzbW9vdGgnKSBwdWJsaWMgc21vb3RoID0gdHJ1ZTtcbiAgQElucHV0KCd0eXBlJykgcHVibGljIHR5cGU6IFN0cmluZztcblxuXG4gIEBPdXRwdXQoJ2NhbmNlbEV2ZW50JykgY2FuY2VsRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5pc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVpvb21lZCgpIHtcbiAgICBjb25zdCBpbWdSZWYgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICBpZiAoIXRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWdSZWYsICd0cmFuc2Zvcm0nLCAnc2NhbGUoMS4wLCAxLjAnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW1nUmVmLCAnYW5pbWF0ZScsICczMDBtcyBlYXNlLW91dCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWdSZWYsICdjdXJzb3InLCAnem9vbS1vdXQnKTtcbiAgICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW1nUmVmLCAndHJhbnNmb3JtJywgJ3NjYWxlKDAuOSwgMC45Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltZ1JlZiwgJ2FuaW1hdGUnLCAnMzAwbXMgZWFzZS1pbicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWdSZWYsICdjdXJzb3InLCAnem9vbS1pbicpO1xuICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuICB0b2dnbGVSZXN0YXJ0KCkge1xuICAgIHRoaXMuem9vbWVkID0gKHRoaXMuem9vbWVkID09PSAnaW5hY3RpdmUnKSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJztcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pbWFnZVBvaW50ZXIgPj0gMCkge1xuICAgICAgdGhpcy5zaG93UmVwZWF0ID0gZmFsc2U7XG4gICAgICB0aGlzLm9wZW5HYWxsZXJ5KHRoaXMuaW1hZ2VQb2ludGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93UmVwZWF0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUdhbGxlcnkoKSB7XG4gICAgdGhpcy56b29tID0gZmFsc2U7XG4gICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xuICAgICAgc2NyZWVuZnVsbC5leGl0KCk7XG4gICAgfVxuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5jYW5jZWxFdmVudC5lbWl0KG51bGwpO1xuICB9XG5cbiAgcHJldkltYWdlKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleC0tO1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZUluZGV4IDwgMCkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IHRoaXMubW9kYWxJbWFnZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgdGhpcy5vcGVuR2FsbGVyeSh0aGlzLmN1cnJlbnRJbWFnZUluZGV4KTtcbiAgfVxuXG4gIG5leHRJbWFnZSgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXgrKztcbiAgICBpZiAodGhpcy5tb2RhbEltYWdlcy5sZW5ndGggPT09IHRoaXMuY3VycmVudEltYWdlSW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLm9wZW5HYWxsZXJ5KHRoaXMuY3VycmVudEltYWdlSW5kZXgpO1xuICB9XG5cbiAgb3BlbkdhbGxlcnkoaW5kZXg6IGFueSkge1xuICAgIGlmICghaW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAxO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RhbEltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IHRoaXMuY3VycmVudEltYWdlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5pbWdTcmMgPSB0aGlzLm1vZGFsSW1hZ2VzW2ldLmltZztcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gdGhpcy5tb2RhbEltYWdlc1tpXS5jYXB0aW9uO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVsbFNjcmVlbigpOiBhbnkge1xuICAgIGlmIChzY3JlZW5mdWxsLmVuYWJsZWQpIHtcbiAgICAgIHNjcmVlbmZ1bGwudG9nZ2xlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzX2lQaG9uZV9vcl9pUG9kKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdHJVc2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGFyck1hdGNoZXMgPSBzdHJVc2VyQWdlbnQubWF0Y2goL2lwYWQvKTtcbiAgICAgICAgaWYgKGFyck1hdGNoZXMgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxuICBrZXlib2FyZENvbnRyb2woZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICB0aGlzLm5leHRJbWFnZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIHRoaXMucHJldkltYWdlKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgdGhpcy5jbG9zZUdhbGxlcnkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzd2lwZShhY3Rpb246IFN0cmluZyA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hUKSB7XG4gICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQpIHtcbiAgICAgIHRoaXMucHJldkltYWdlKCk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCkge1xuICAgICAgdGhpcy5uZXh0SW1hZ2UoKTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=