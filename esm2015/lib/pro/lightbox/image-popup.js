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
            if (this.galleryDescription) {
                /** @type {?} */
                const descriptionHeight = this.galleryDescription.nativeElement.clientHeight;
                this.renderer.setStyle(this.galleryImg.nativeElement, 'max-height', `calc(100% - ${descriptionHeight + 25}px)`);
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2xpZ2h0Ym94L2ltYWdlLXBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFlBQVksRUFFWixZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7QUFhbEQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBOEI5QixZQUFpQyxVQUFrQixFQUFTLE9BQW1CLEVBQVMsUUFBbUI7UUFBL0MsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVc7UUE1QnBHLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJMUIsYUFBUSxHQUFRLElBQUksQ0FBQztRQUNyQixZQUFPLEdBQVEsS0FBSyxDQUFDO1FBQ3JCLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFDdkIsV0FBTSxHQUFHLFVBQVUsQ0FBQztRQUVwQixpQkFBWSxHQUFHLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDLENBQUM7UUFPaEMsV0FBTSxHQUFHLElBQUksQ0FBQztRQU1mLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUczRCxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFF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Q2xCO0lBRUgsQ0FBQzs7O1lBN0tGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzM0RBQStCO3lCQUN0QixtR0FBbUc7YUFDN0c7Ozs7eUNBZ0NjLE1BQU0sU0FBQyxXQUFXO1lBcEQvQixVQUFVO1lBTVYsU0FBUzs7OzBCQWlDUixLQUFLLFNBQUMsYUFBYTsyQkFDbkIsS0FBSyxTQUFDLGNBQWM7eUJBRXBCLEtBQUssU0FBQyxZQUFZO21CQUNsQixLQUFLLFNBQUMsTUFBTTtxQkFDWixLQUFLLFNBQUMsUUFBUTttQkFDZCxLQUFLLFNBQUMsTUFBTTt5QkFFWixTQUFTLFNBQUMsWUFBWTtpQ0FDdEIsU0FBUyxTQUFDLG9CQUFvQjswQkFFOUIsTUFBTSxTQUFDLGFBQWE7OEJBbUhwQixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUE5STFDLHVDQUFxQjs7SUFDckIscUNBQXNCOztJQUN0QixxQ0FBc0I7O0lBQ3RCLGdEQUFpQzs7SUFDakMsc0NBQXVCOztJQUN2Qix5Q0FBMEI7O0lBQzFCLDhDQUE0Qjs7SUFDNUIsc0NBQXVCOztJQUV2Qix1Q0FBcUI7O0lBQ3JCLHNDQUFxQjs7SUFDckIsd0NBQXVCOztJQUN2QixxQ0FBb0I7O0lBRXBCLDJDQUF3RDs7SUFFeEQsMENBQThDOztJQUM5QywyQ0FBbUQ7O0lBRW5ELHlDQUFnRDs7SUFDaEQsbUNBQW9DOztJQUNwQyxxQ0FBc0M7O0lBQ3RDLG1DQUFtQzs7SUFFbkMseUNBQWdEOztJQUNoRCxpREFBZ0U7O0lBRWhFLDBDQUE2RDs7SUFFUixzQ0FBMEI7O0lBQUUsdUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgSG9zdExpc3RlbmVyLFxuICBQTEFURk9STV9JRCxcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmRlY2xhcmUgdmFyIHNjcmVlbmZ1bGw6IGFueTtcbi8vIGltcG9ydCAqIGFzIHNjcmVlbmZ1bGwgZnJvbSAnc2NyZWVuZnVsbC9kaXN0L3NjcmVlbmZ1bGwnO1xuLy8gaW1wb3J0ICdoYW1tZXJqcyc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLWltYWdlLW1vZGFsJyxcbiAgdGVtcGxhdGVVcmw6ICdpbWFnZS1wb3B1cC5odG1sJyxcbiAgc3R5bGVzOiBbJy5ib3R0b20tYmFyIHt6LWluZGV4OiAxMDAwMDA7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAycmVtOyBsZWZ0OiAwOyByaWdodDogMDsgd2lkdGg6IDEwMCU7fSAnXVxufSlcblxuZXhwb3J0IGNsYXNzIEltYWdlTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBwdWJsaWMgX2VsZW1lbnQ6IGFueTtcbiAgcHVibGljIG9wZW5lZCA9IGZhbHNlO1xuICBwdWJsaWMgaW1nU3JjOiBzdHJpbmc7XG4gIHB1YmxpYyBjdXJyZW50SW1hZ2VJbmRleDogbnVtYmVyO1xuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1JlcGVhdCA9IGZhbHNlO1xuICBwdWJsaWMgb3Blbk1vZGFsV2luZG93OiBhbnk7XG4gIHB1YmxpYyBjYXB0aW9uOiBzdHJpbmc7XG5cbiAgaXNNb2JpbGU6IGFueSA9IG51bGw7XG4gIGNsaWNrZWQ6IGFueSA9IGZhbHNlO1xuICBpc0Jyb3dzZXI6IGFueSA9IGZhbHNlO1xuICB6b29tZWQgPSAnaW5hY3RpdmUnO1xuXG4gIFNXSVBFX0FDVElPTiA9IHtMRUZUOiAnc3dpcGVsZWZ0JywgUklHSFQ6ICdzd2lwZXJpZ2h0J307XG5cbiAgQElucHV0KCdtb2RhbEltYWdlcycpIHB1YmxpYyBtb2RhbEltYWdlczogYW55O1xuICBASW5wdXQoJ2ltYWdlUG9pbnRlcicpIHB1YmxpYyBpbWFnZVBvaW50ZXI6IG51bWJlcjtcblxuICBASW5wdXQoJ2Z1bGxzY3JlZW4nKSBwdWJsaWMgZnVsbHNjcmVlbjogYm9vbGVhbjtcbiAgQElucHV0KCd6b29tJykgcHVibGljIHpvb206IGJvb2xlYW47XG4gIEBJbnB1dCgnc21vb3RoJykgcHVibGljIHNtb290aCA9IHRydWU7XG4gIEBJbnB1dCgndHlwZScpIHB1YmxpYyB0eXBlOiBTdHJpbmc7XG5cbiAgQFZpZXdDaGlsZCgnZ2FsbGVyeUltZycpIGdhbGxlcnlJbWc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2dhbGxlcnlEZXNjcmlwdGlvbicpIGdhbGxlcnlEZXNjcmlwdGlvbjogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCdjYW5jZWxFdmVudCcpIGNhbmNlbEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nLCBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVab29tZWQoKSB7XG4gICAgY29uc3QgaW1nUmVmID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZC5sYXN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgaWYgKCF0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW1nUmVmLCAndHJhbnNmb3JtJywgJ3NjYWxlKDEuMCwgMS4wJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltZ1JlZiwgJ2FuaW1hdGUnLCAnMzAwbXMgZWFzZS1vdXQnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW1nUmVmLCAnY3Vyc29yJywgJ3pvb20tb3V0Jyk7XG4gICAgICB0aGlzLmNsaWNrZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltZ1JlZiwgJ3RyYW5zZm9ybScsICdzY2FsZSgwLjksIDAuOScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWdSZWYsICdhbmltYXRlJywgJzMwMG1zIGVhc2UtaW4nKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW1nUmVmLCAnY3Vyc29yJywgJ3pvb20taW4nKTtcbiAgICAgIHRoaXMuY2xpY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG5cbiAgdG9nZ2xlUmVzdGFydCgpIHtcbiAgICB0aGlzLnpvb21lZCA9ICh0aGlzLnpvb21lZCA9PT0gJ2luYWN0aXZlJykgPyAnYWN0aXZlJyA6ICdpbmFjdGl2ZSc7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pbWFnZVBvaW50ZXIgPj0gMCkge1xuICAgICAgdGhpcy5zaG93UmVwZWF0ID0gZmFsc2U7XG4gICAgICB0aGlzLm9wZW5HYWxsZXJ5KHRoaXMuaW1hZ2VQb2ludGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93UmVwZWF0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUdhbGxlcnkoKSB7XG4gICAgdGhpcy56b29tID0gZmFsc2U7XG4gICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xuICAgICAgc2NyZWVuZnVsbC5leGl0KCk7XG4gICAgfVxuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5jYW5jZWxFdmVudC5lbWl0KG51bGwpO1xuICB9XG5cbiAgcHJldkltYWdlKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleC0tO1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZUluZGV4IDwgMCkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IHRoaXMubW9kYWxJbWFnZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgdGhpcy5vcGVuR2FsbGVyeSh0aGlzLmN1cnJlbnRJbWFnZUluZGV4KTtcbiAgfVxuXG4gIG5leHRJbWFnZSgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXgrKztcbiAgICBpZiAodGhpcy5tb2RhbEltYWdlcy5sZW5ndGggPT09IHRoaXMuY3VycmVudEltYWdlSW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLm9wZW5HYWxsZXJ5KHRoaXMuY3VycmVudEltYWdlSW5kZXgpO1xuICB9XG5cbiAgb3BlbkdhbGxlcnkoaW5kZXg6IGFueSkge1xuICAgIGlmICghaW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAxO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGFsSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA9PT0gdGhpcy5jdXJyZW50SW1hZ2VJbmRleCkge1xuICAgICAgICB0aGlzLmltZ1NyYyA9IHRoaXMubW9kYWxJbWFnZXNbaV0uaW1nO1xuICAgICAgICB0aGlzLmNhcHRpb24gPSB0aGlzLm1vZGFsSW1hZ2VzW2ldLmNhcHRpb247XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nYWxsZXJ5RGVzY3JpcHRpb24pIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25IZWlnaHQgPSB0aGlzLmdhbGxlcnlEZXNjcmlwdGlvbi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdhbGxlcnlJbWcubmF0aXZlRWxlbWVudCwgJ21heC1oZWlnaHQnLCBgY2FsYygxMDAlIC0gJHtkZXNjcmlwdGlvbkhlaWdodCArIDI1fXB4KWApO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgZnVsbFNjcmVlbigpOiBhbnkge1xuICAgIGlmIChzY3JlZW5mdWxsLmVuYWJsZWQpIHtcbiAgICAgIHNjcmVlbmZ1bGwudG9nZ2xlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzX2lQaG9uZV9vcl9pUG9kKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdHJVc2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGFyck1hdGNoZXMgPSBzdHJVc2VyQWdlbnQubWF0Y2goL2lwYWQvKTtcbiAgICAgICAgaWYgKGFyck1hdGNoZXMgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxuICBrZXlib2FyZENvbnRyb2woZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICB0aGlzLm5leHRJbWFnZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIHRoaXMucHJldkltYWdlKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgdGhpcy5jbG9zZUdhbGxlcnkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzd2lwZShhY3Rpb246IFN0cmluZyA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hUKSB7XG4gICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQpIHtcbiAgICAgIHRoaXMucHJldkltYWdlKCk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCkge1xuICAgICAgdGhpcy5uZXh0SW1hZ2UoKTtcbiAgICB9XG5cbiAgfVxuXG59XG4iXX0=