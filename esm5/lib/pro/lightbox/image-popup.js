/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, ElementRef, EventEmitter, HostListener, PLATFORM_ID, Inject, Renderer2, ViewChild } from '@angular/core';
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
    ImageModalComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
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
        var _this = this;
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
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var descriptionHeight = _this.galleryDescription.nativeElement.clientHeight;
            _this.renderer.setStyle(_this.galleryImg.nativeElement, 'max-height', "calc(100% - " + (descriptionHeight + 25) + "px)");
        }), 0);
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
                    template: "<div class=\"ng-gallery mdb-lightbox {{ type }}\" *ngIf=\"modalImages && showRepeat\">\n  <figure class=\"col-md-4\" *ngFor=\"let i of modalImages; let index = index\">\n    <img src=\"{{ !i.thumb ? i.img : i.thumb }}\" class=\"ng-thumb\" (click)=\"openGallery(index)\"\n         alt=\"Image {{ index + 1 }}\"/>\n  </figure>\n</div>\n<div tabindex=\"0\" class=\"ng-overlay\" [class.hide_lightbox]=\"opened == false\">\n  <div class=\"top-bar\" style='z-index: 100000'>\n    <span *ngIf=\"modalImages\" class=\"info-text\">{{ currentImageIndex + 1 }}/{{ modalImages.length }}</span>\n    <a class=\"close-popup\" (click)=\"closeGallery()\" (click)=\"toggleRestart()\"></a>\n    <a *ngIf=\"!is_iPhone_or_iPod\" class=\"fullscreen-toogle\" [class.toggled]='fullscreen' (click)=\"fullScreen()\"></a>\n    <a class=\"zoom-toogle\" [class.zoom]='zoom' (click)=\"toggleZoomed()\" *ngIf=\"!isMobile\"></a>\n  </div>\n  <div class=\"ng-gallery-content\">\n    <img #galleryImg *ngIf=\"!loading\" src=\"{{imgSrc}}\" [class.smooth]='smooth' class=\"effect\" (swipeleft)=\"swipe($event.type)\"\n         (swiperight)=\"swipe($event.type)\" (click)=\"toggleZoomed()\" style=\"\"/>\n\n    <div class=\"uil-ring-css\" *ngIf=\"loading\">\n      <div></div>\n    </div>\n    <a class=\"nav-left\" *ngIf=\"modalImages && modalImages.length >1 && !isMobile\" (click)=\"prevImage()\">\n      <span></span>\n    </a>\n    <a class=\"nav-right\" *ngIf=\"modalImages && modalImages.length >1 && !isMobile\" (click)=\"nextImage()\">\n      <span></span>\n    </a>\n  </div>\n  <div class=\"row\" *ngIf=\"caption\">\n    <div class=\"col-md-12 mx-auto bottom-bar text-center\">\n      <figcaption #galleryDescription class=\"text-white lightbox-caption\">{{caption}}</figcaption>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"openModalWindow\">\n  <mdb-image-modal [imagePointer]=\"imagePointer\"></mdb-image-modal>\n</div>\n",
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
        galleryImg: [{ type: ViewChild, args: ['galleryImg',] }],
        galleryDescription: [{ type: ViewChild, args: ['galleryDescription',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2xpZ2h0Ym94L2ltYWdlLXBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFlBQVksRUFFWixZQUFZLEVBQ1osV0FBVyxFQUNYLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFNcEQ7SUFvQ0UsNkJBQWlDLFVBQWtCLEVBQVMsT0FBbUIsRUFBUyxRQUFtQjtRQUEvQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQTVCcEcsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUdmLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUkxQixhQUFRLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLFlBQU8sR0FBUSxLQUFLLENBQUM7UUFDckIsY0FBUyxHQUFRLEtBQUssQ0FBQztRQUN2QixXQUFNLEdBQUcsVUFBVSxDQUFDO1FBRXBCLGlCQUFZLEdBQUcsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsQ0FBQztRQU9sQyxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBTWYsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRzNELElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEs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XG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25Jbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3QsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuZGVjbGFyZSB2YXIgc2NyZWVuZnVsbDogYW55O1xuLy8gaW1wb3J0ICogYXMgc2NyZWVuZnVsbCBmcm9tICdzY3JlZW5mdWxsL2Rpc3Qvc2NyZWVuZnVsbCc7XG4vLyBpbXBvcnQgJ2hhbW1lcmpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItaW1hZ2UtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ2ltYWdlLXBvcHVwLmh0bWwnLFxuICBzdHlsZXM6IFsnLmJvdHRvbS1iYXIge3otaW5kZXg6IDEwMDAwMDsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDJyZW07IGxlZnQ6IDA7IHJpZ2h0OiAwOyB3aWR0aDogMTAwJTt9ICddXG59KVxuXG5leHBvcnQgY2xhc3MgSW1hZ2VNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHB1YmxpYyBfZWxlbWVudDogYW55O1xuICBwdWJsaWMgb3BlbmVkID0gZmFsc2U7XG4gIHB1YmxpYyBpbWdTcmM6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRJbWFnZUluZGV4OiBudW1iZXI7XG4gIHB1YmxpYyBsb2FkaW5nID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93UmVwZWF0ID0gZmFsc2U7XG4gIHB1YmxpYyBvcGVuTW9kYWxXaW5kb3c6IGFueTtcbiAgcHVibGljIGNhcHRpb246IHN0cmluZztcblxuICBpc01vYmlsZTogYW55ID0gbnVsbDtcbiAgY2xpY2tlZDogYW55ID0gZmFsc2U7XG4gIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG4gIHpvb21lZCA9ICdpbmFjdGl2ZSc7XG5cbiAgU1dJUEVfQUNUSU9OID0geyBMRUZUOiAnc3dpcGVsZWZ0JywgUklHSFQ6ICdzd2lwZXJpZ2h0JyB9O1xuXG4gIEBJbnB1dCgnbW9kYWxJbWFnZXMnKSBwdWJsaWMgbW9kYWxJbWFnZXM6IGFueTtcbiAgQElucHV0KCdpbWFnZVBvaW50ZXInKSBwdWJsaWMgaW1hZ2VQb2ludGVyOiBudW1iZXI7XG5cbiAgQElucHV0KCdmdWxsc2NyZWVuJykgcHVibGljIGZ1bGxzY3JlZW46IGJvb2xlYW47XG4gIEBJbnB1dCgnem9vbScpIHB1YmxpYyB6b29tOiBib29sZWFuO1xuICBASW5wdXQoJ3Ntb290aCcpIHB1YmxpYyBzbW9vdGggPSB0cnVlO1xuICBASW5wdXQoJ3R5cGUnKSBwdWJsaWMgdHlwZTogU3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2dhbGxlcnlJbWcnKSBnYWxsZXJ5SW1nOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdnYWxsZXJ5RGVzY3JpcHRpb24nKSBnYWxsZXJ5RGVzY3JpcHRpb246IEVsZW1lbnRSZWY7XG5cbiAgQE91dHB1dCgnY2FuY2VsRXZlbnQnKSBjYW5jZWxFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZywgcHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLmlzTW9iaWxlID0gL2lQaG9uZXxpUGFkfGlQb2R8QW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlWm9vbWVkKCkge1xuICAgIGNvbnN0IGltZ1JlZiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQubGFzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIGlmICghdGhpcy5jbGlja2VkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltZ1JlZiwgJ3RyYW5zZm9ybScsICdzY2FsZSgxLjAsIDEuMCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWdSZWYsICdhbmltYXRlJywgJzMwMG1zIGVhc2Utb3V0Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltZ1JlZiwgJ2N1cnNvcicsICd6b29tLW91dCcpO1xuICAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWdSZWYsICd0cmFuc2Zvcm0nLCAnc2NhbGUoMC45LCAwLjknKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW1nUmVmLCAnYW5pbWF0ZScsICczMDBtcyBlYXNlLWluJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGltZ1JlZiwgJ2N1cnNvcicsICd6b29tLWluJyk7XG4gICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuXG4gIHRvZ2dsZVJlc3RhcnQoKSB7XG4gICAgdGhpcy56b29tZWQgPSAodGhpcy56b29tZWQgPT09ICdpbmFjdGl2ZScpID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMuaW1hZ2VQb2ludGVyID49IDApIHtcbiAgICAgIHRoaXMuc2hvd1JlcGVhdCA9IGZhbHNlO1xuICAgICAgdGhpcy5vcGVuR2FsbGVyeSh0aGlzLmltYWdlUG9pbnRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd1JlcGVhdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VHYWxsZXJ5KCkge1xuICAgIHRoaXMuem9vbSA9IGZhbHNlO1xuICAgIGlmIChzY3JlZW5mdWxsLmVuYWJsZWQpIHtcbiAgICAgIHNjcmVlbmZ1bGwuZXhpdCgpO1xuICAgIH1cbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FuY2VsRXZlbnQuZW1pdChudWxsKTtcbiAgfVxuXG4gIHByZXZJbWFnZSgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXgtLTtcbiAgICBpZiAodGhpcy5jdXJyZW50SW1hZ2VJbmRleCA8IDApIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSB0aGlzLm1vZGFsSW1hZ2VzLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHRoaXMub3BlbkdhbGxlcnkodGhpcy5jdXJyZW50SW1hZ2VJbmRleCk7XG4gIH1cblxuICBuZXh0SW1hZ2UoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4Kys7XG4gICAgaWYgKHRoaXMubW9kYWxJbWFnZXMubGVuZ3RoID09PSB0aGlzLmN1cnJlbnRJbWFnZUluZGV4KSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gMDtcbiAgICB9XG4gICAgdGhpcy5vcGVuR2FsbGVyeSh0aGlzLmN1cnJlbnRJbWFnZUluZGV4KTtcbiAgfVxuXG4gIG9wZW5HYWxsZXJ5KGluZGV4OiBhbnkpIHtcbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gMTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RhbEltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IHRoaXMuY3VycmVudEltYWdlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5pbWdTcmMgPSB0aGlzLm1vZGFsSW1hZ2VzW2ldLmltZztcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gdGhpcy5tb2RhbEltYWdlc1tpXS5jYXB0aW9uO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb25IZWlnaHQgPSB0aGlzLmdhbGxlcnlEZXNjcmlwdGlvbi5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5nYWxsZXJ5SW1nLm5hdGl2ZUVsZW1lbnQsICdtYXgtaGVpZ2h0JywgYGNhbGMoMTAwJSAtICR7ZGVzY3JpcHRpb25IZWlnaHQgKyAyNX1weClgKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGZ1bGxTY3JlZW4oKTogYW55IHtcbiAgICBpZiAoc2NyZWVuZnVsbC5lbmFibGVkKSB7XG4gICAgICBzY3JlZW5mdWxsLnRvZ2dsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc19pUGhvbmVfb3JfaVBvZCgpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmIChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICE9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RyVXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBhcnJNYXRjaGVzID0gc3RyVXNlckFnZW50Lm1hdGNoKC9pcGFkLyk7XG4gICAgICAgIGlmIChhcnJNYXRjaGVzICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwJywgWyckZXZlbnQnXSlcbiAga2V5Ym9hcmRDb250cm9sKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgdGhpcy5uZXh0SW1hZ2UoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICB0aGlzLnByZXZJbWFnZSgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgIHRoaXMuY2xvc2VHYWxsZXJ5KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3dpcGUoYWN0aW9uOiBTdHJpbmcgPSB0aGlzLlNXSVBFX0FDVElPTi5SSUdIVCkge1xuICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hUKSB7XG4gICAgICB0aGlzLnByZXZJbWFnZSgpO1xuICAgIH1cblxuICAgIGlmIChhY3Rpb24gPT09IHRoaXMuU1dJUEVfQUNUSU9OLkxFRlQpIHtcbiAgICAgIHRoaXMubmV4dEltYWdlKCk7XG4gICAgfVxuXG4gIH1cblxufVxuIl19