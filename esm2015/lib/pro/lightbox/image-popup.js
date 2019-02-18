/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ElementRef, EventEmitter, HostListener, PLATFORM_ID, Inject, Renderer2, ViewChild } from '@angular/core';
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
    ngAfterViewInit() {
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
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const descriptionHeight = this.galleryDescription.nativeElement.clientHeight;
            this.renderer.setStyle(this.galleryImg.nativeElement, 'max-height', `calc(100% - ${descriptionHeight + 25}px)`);
        }), 0);
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
                template: "<div class=\"ng-gallery mdb-lightbox {{ type }}\" *ngIf=\"modalImages && showRepeat\">\n  <figure class=\"col-md-4\" *ngFor=\"let i of modalImages; let index = index\">\n    <img src=\"{{ !i.thumb ? i.img : i.thumb }}\" class=\"ng-thumb\" (click)=\"openGallery(index)\"\n         alt=\"Image {{ index + 1 }}\"/>\n  </figure>\n</div>\n<div tabindex=\"0\" class=\"ng-overlay\" [class.hide_lightbox]=\"opened == false\">\n  <div class=\"top-bar\" style='z-index: 100000'>\n    <span *ngIf=\"modalImages\" class=\"info-text\">{{ currentImageIndex + 1 }}/{{ modalImages.length }}</span>\n    <a class=\"close-popup\" (click)=\"closeGallery()\" (click)=\"toggleRestart()\"></a>\n    <a *ngIf=\"!is_iPhone_or_iPod\" class=\"fullscreen-toogle\" [class.toggled]='fullscreen' (click)=\"fullScreen()\"></a>\n    <a class=\"zoom-toogle\" [class.zoom]='zoom' (click)=\"toggleZoomed()\" *ngIf=\"!isMobile\"></a>\n  </div>\n  <div class=\"ng-gallery-content\">\n    <img #galleryImg *ngIf=\"!loading\" src=\"{{imgSrc}}\" [class.smooth]='smooth' class=\"effect\" (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\" (click)=\"toggleZoomed()\" style=\"\"/>\n\n    <div class=\"uil-ring-css\" *ngIf=\"loading\">\n      <div></div>\n    </div>\n    <a class=\"nav-left\" *ngIf=\"modalImages && modalImages.length >1 && !isMobile\" (click)=\"prevImage()\">\n      <span></span>\n    </a>\n    <a class=\"nav-right\" *ngIf=\"modalImages && modalImages.length >1 && !isMobile\" (click)=\"nextImage()\">\n      <span></span>\n    </a>\n  </div>\n  <div class=\"row\" *ngIf=\"caption\">\n    <div class=\"col-md-12 mx-auto bottom-bar text-center\">\n      <figcaption #galleryDescription class=\"text-white lightbox-caption\">{{caption}}</figcaption>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"openModalWindow\">\n  <mdb-image-modal [imagePointer]=\"imagePointer\"></mdb-image-modal>\n</div>\n",
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
    galleryImg: [{ type: ViewChild, args: ['galleryImg',] }],
    galleryDescription: [{ type: ViewChild, args: ['galleryDescription',] }],
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
    ImageModalComponent.prototype.galleryImg;
    /** @type {?} */
    ImageModalComponent.prototype.galleryDescription;
    /** @type {?} */
    ImageModalComponent.prototype.cancelEvent;
    /** @type {?} */
    ImageModalComponent.prototype.element;
    /** @type {?} */
    ImageModalComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2xpZ2h0Ym94L2ltYWdlLXBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFlBQVksRUFFWixZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFZcEQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBOEI5QixZQUFpQyxVQUFrQixFQUFTLE9BQW1CLEVBQVMsUUFBbUI7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7UUE1QnBHLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJMUIsYUFBUSxHQUFRLElBQUksQ0FBQztRQUNyQixZQUFPLEdBQVEsS0FBSyxDQUFDO1FBQ3JCLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFDdkIsV0FBTSxHQUFHLFVBQVUsQ0FBQztRQUVwQixpQkFBWSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFPbEMsV0FBTSxHQUFHLElBQUksQ0FBQztRQU1mLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUczRCxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFF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QUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzM0RBQStCO3lCQUN0QixtR0FBbUc7YUFDN0c7Ozs7eUNBZ0NjLE1BQU0sU0FBQyxXQUFXO1lBbkQvQixVQUFVO1lBTVYsU0FBUzs7OzBCQWdDUixLQUFLLFNBQUMsYUFBYTsyQkFDbkIsS0FBSyxTQUFDLGNBQWM7eUJBRXBCLEtBQUssU0FBQyxZQUFZO21CQUNsQixLQUFLLFNBQUMsTUFBTTtxQkFDWixLQUFLLFNBQUMsUUFBUTttQkFDZCxLQUFLLFNBQUMsTUFBTTt5QkFFWixTQUFTLFNBQUMsWUFBWTtpQ0FDdEIsU0FBUyxTQUFDLG9CQUFvQjswQkFFOUIsTUFBTSxTQUFDLGFBQWE7OEJBaUhwQixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUE1STFDLHVDQUFxQjs7SUFDckIscUNBQXNCOztJQUN0QixxQ0FBc0I7O0lBQ3RCLGdEQUFpQzs7SUFDakMsc0NBQXVCOztJQUN2Qix5Q0FBMEI7O0lBQzFCLDhDQUE0Qjs7SUFDNUIsc0NBQXVCOztJQUV2Qix1Q0FBcUI7O0lBQ3JCLHNDQUFxQjs7SUFDckIsd0NBQXVCOztJQUN2QixxQ0FBb0I7O0lBRXBCLDJDQUEwRDs7SUFFMUQsMENBQThDOztJQUM5QywyQ0FBbUQ7O0lBRW5ELHlDQUFnRDs7SUFDaEQsbUNBQW9DOztJQUNwQyxxQ0FBc0M7O0lBQ3RDLG1DQUFtQzs7SUFFbkMseUNBQWdEOztJQUNoRCxpREFBZ0U7O0lBRWhFLDBDQUE2RDs7SUFFUixzQ0FBMEI7O0lBQUUsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgSG9zdExpc3RlbmVyLFxuICBQTEFURk9STV9JRCxcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmRlY2xhcmUgdmFyIHNjcmVlbmZ1bGw6IGFueTtcbi8vIGltcG9ydCAqIGFzIHNjcmVlbmZ1bGwgZnJvbSAnc2NyZWVuZnVsbC9kaXN0L3NjcmVlbmZ1bGwnO1xuLy8gaW1wb3J0ICdoYW1tZXJqcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWltYWdlLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdpbWFnZS1wb3B1cC5odG1sJyxcbiAgc3R5bGVzOiBbJy5ib3R0b20tYmFyIHt6LWluZGV4OiAxMDAwMDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAycmVtOyBsZWZ0OiAwOyByaWdodDogMDsgd2lkdGg6IDEwMCU7fSAnXVxufSlcblxuZXhwb3J0IGNsYXNzIEltYWdlTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgX2VsZW1lbnQ6IGFueTtcbiAgcHVibGljIG9wZW5lZCA9IGZhbHNlO1xuICBwdWJsaWMgaW1nU3JjOiBzdHJpbmc7XG4gIHB1YmxpYyBjdXJyZW50SW1hZ2VJbmRleDogbnVtYmVyO1xuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1JlcGVhdCA9IGZhbHNlO1xuICBwdWJsaWMgb3Blbk1vZGFsV2luZG93OiBhbnk7XG4gIHB1YmxpYyBjYXB0aW9uOiBzdHJpbmc7XG5cbiAgaXNNb2JpbGU6IGFueSA9IG51bGw7XG4gIGNsaWNrZWQ6IGFueSA9IGZhbHNlO1xuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuICB6b29tZWQgPSAnaW5hY3RpdmUnO1xuXG4gIFNXSVBFX0FDVElPTiA9IHsgTEVGVDogJ3N3aXBlbGVmdCcsIFJJR0hUOiAnc3dpcGVyaWdodCcgfTtcblxuICBASW5wdXQoJ21vZGFsSW1hZ2VzJykgcHVibGljIG1vZGFsSW1hZ2VzOiBhbnk7XG4gIEBJbnB1dCgnaW1hZ2VQb2ludGVyJykgcHVibGljIGltYWdlUG9pbnRlcjogbnVtYmVyO1xuXG4gIEBJbnB1dCgnZnVsbHNjcmVlbicpIHB1YmxpYyBmdWxsc2NyZWVuOiBib29sZWFuO1xuICBASW5wdXQoJ3pvb20nKSBwdWJsaWMgem9vbTogYm9vbGVhbjtcbiAgQElucHV0KCdzbW9vdGgnKSBwdWJsaWMgc21vb3RoID0gdHJ1ZTtcbiAgQElucHV0KCd0eXBlJykgcHVibGljIHR5cGU6IFN0cmluZztcblxuICBAVmlld0NoaWxkKCdnYWxsZXJ5SW1nJykgZ2FsbGVyeUltZzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZ2FsbGVyeURlc2NyaXB0aW9uJykgZ2FsbGVyeURlc2NyaXB0aW9uOiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoJ2NhbmNlbEV2ZW50JykgY2FuY2VsRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5pc01vYmlsZSA9IC9pUGhvbmV8aVBhZHxpUG9kfEFuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVpvb21lZCgpIHtcbiAgICBjb25zdCBpbWdSZWYgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICBpZiAoIXRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWdSZWYsICd0cmFuc2Zvcm0nLCAnc2NhbGUoMS4wLCAxLjAnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW1nUmVmLCAnYW5pbWF0ZScsICczMDBtcyBlYXNlLW91dCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWdSZWYsICdjdXJzb3InLCAnem9vbS1vdXQnKTtcbiAgICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW1nUmVmLCAndHJhbnNmb3JtJywgJ3NjYWxlKDAuOSwgMC45Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltZ1JlZiwgJ2FuaW1hdGUnLCAnMzAwbXMgZWFzZS1pbicpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWdSZWYsICdjdXJzb3InLCAnem9vbS1pbicpO1xuICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuICB0b2dnbGVSZXN0YXJ0KCkge1xuICAgIHRoaXMuem9vbWVkID0gKHRoaXMuem9vbWVkID09PSAnaW5hY3RpdmUnKSA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJztcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGlmICh0aGlzLmltYWdlUG9pbnRlciA+PSAwKSB7XG4gICAgICB0aGlzLnNob3dSZXBlYXQgPSBmYWxzZTtcbiAgICAgIHRoaXMub3BlbkdhbGxlcnkodGhpcy5pbWFnZVBvaW50ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dSZXBlYXQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlR2FsbGVyeSgpIHtcbiAgICB0aGlzLnpvb20gPSBmYWxzZTtcbiAgICBpZiAoc2NyZWVuZnVsbC5lbmFibGVkKSB7XG4gICAgICBzY3JlZW5mdWxsLmV4aXQoKTtcbiAgICB9XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNhbmNlbEV2ZW50LmVtaXQobnVsbCk7XG4gIH1cblxuICBwcmV2SW1hZ2UoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4LS07XG4gICAgaWYgKHRoaXMuY3VycmVudEltYWdlSW5kZXggPCAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gdGhpcy5tb2RhbEltYWdlcy5sZW5ndGggLSAxO1xuICAgIH1cbiAgICB0aGlzLm9wZW5HYWxsZXJ5KHRoaXMuY3VycmVudEltYWdlSW5kZXgpO1xuICB9XG5cbiAgbmV4dEltYWdlKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCsrO1xuICAgIGlmICh0aGlzLm1vZGFsSW1hZ2VzLmxlbmd0aCA9PT0gdGhpcy5jdXJyZW50SW1hZ2VJbmRleCkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMub3BlbkdhbGxlcnkodGhpcy5jdXJyZW50SW1hZ2VJbmRleCk7XG4gIH1cblxuICBvcGVuR2FsbGVyeShpbmRleDogYW55KSB7XG4gICAgaWYgKCFpbmRleCkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IDE7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IGluZGV4O1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubW9kYWxJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChpID09PSB0aGlzLmN1cnJlbnRJbWFnZUluZGV4KSB7XG4gICAgICAgIHRoaXMuaW1nU3JjID0gdGhpcy5tb2RhbEltYWdlc1tpXS5pbWc7XG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IHRoaXMubW9kYWxJbWFnZXNbaV0uY2FwdGlvbjtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSGVpZ2h0ID0gdGhpcy5nYWxsZXJ5RGVzY3JpcHRpb24ubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2FsbGVyeUltZy5uYXRpdmVFbGVtZW50LCAnbWF4LWhlaWdodCcsIGBjYWxjKDEwMCUgLSAke2Rlc2NyaXB0aW9uSGVpZ2h0ICsgMjV9cHgpYCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBmdWxsU2NyZWVuKCk6IGFueSB7XG4gICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xuICAgICAgc2NyZWVuZnVsbC50b2dnbGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNfaVBob25lX29yX2lQb2QoKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBpZiAobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0clVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgYXJyTWF0Y2hlcyA9IHN0clVzZXJBZ2VudC5tYXRjaCgvaXBhZC8pO1xuICAgICAgICBpZiAoYXJyTWF0Y2hlcyAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cCcsIFsnJGV2ZW50J10pXG4gIGtleWJvYXJkQ29udHJvbChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgIHRoaXMubmV4dEltYWdlKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcpIHtcbiAgICAgICAgdGhpcy5wcmV2SW1hZ2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgICAgICB0aGlzLmNsb3NlR2FsbGVyeSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN3aXBlKGFjdGlvbjogU3RyaW5nID0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQpIHtcbiAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCkge1xuICAgICAgdGhpcy5wcmV2SW1hZ2UoKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aW9uID09PSB0aGlzLlNXSVBFX0FDVElPTi5MRUZUKSB7XG4gICAgICB0aGlzLm5leHRJbWFnZSgpO1xuICAgIH1cblxuICB9XG5cbn1cbiJdfQ==