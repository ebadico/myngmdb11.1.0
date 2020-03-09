import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, OnInit, Output, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { window } from '../../free/utils/facade/browser';
let ImageModalComponent = class ImageModalComponent {
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
    toggleZoomed() {
        if (!this.clicked) {
            this.renderer.setStyle(this.galleryImg.nativeElement, 'transform', 'scale(1.0, 1.0)');
            this.renderer.setStyle(this.galleryImg.nativeElement, 'animate', '300ms ease-out');
            this.renderer.setStyle(this.galleryImg.nativeElement, 'cursor', 'zoom-out');
            this.clicked = true;
        }
        else if (this.clicked) {
            this.renderer.setStyle(this.galleryImg.nativeElement, 'transform', 'scale(0.9, 0.9)');
            this.renderer.setStyle(this.galleryImg.nativeElement, 'animate', '300ms ease-in');
            this.renderer.setStyle(this.galleryImg.nativeElement, 'cursor', 'zoom-in');
            this.clicked = false;
        }
    }
    toggleRestart() {
        this.zoomed = this.zoomed === 'inactive' ? 'active' : 'inactive';
    }
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
    closeGallery() {
        this.zoom = false;
        if (screenfull.enabled) {
            screenfull.exit();
        }
        this.opened = false;
        this.cancelEvent.emit(null);
    }
    prevImage() {
        this.loading = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.modalImages.length - 1;
        }
        this.openGallery(this.currentImageIndex);
    }
    nextImage() {
        this.loading = true;
        this.currentImageIndex++;
        if (this.modalImages.length === this.currentImageIndex) {
            this.currentImageIndex = 0;
        }
        this.openGallery(this.currentImageIndex);
    }
    openGallery(index) {
        // There was a problem, that with opened lightbox, if user have pressed the back button
        // (both physical device button and browser button)
        // the lightbox was not closed, but the whole application was closed (because of changing the URL).
        if (typeof history.pushState === 'function') {
            history.pushState('newstate', '', null);
            window.onpopstate = () => {
                if (this.opened) {
                    this.closeGallery();
                }
            };
        }
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
        setTimeout(() => {
            if (this.galleryDescription) {
                const descriptionHeight = this.galleryDescription.nativeElement.clientHeight;
                this.renderer.setStyle(this.galleryImg.nativeElement, 'max-height', `calc(100% - ${descriptionHeight + 25}px)`);
            }
        }, 0);
    }
    fullScreen() {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    }
    get is_iPhone_or_iPod() {
        if (this.isBrowser) {
            if (navigator && navigator.userAgent && navigator.userAgent != null) {
                const strUserAgent = navigator.userAgent.toLowerCase();
                const arrMatches = strUserAgent.match(/ipad/);
                if (arrMatches != null) {
                    return true;
                }
            }
            return false;
        }
    }
    keyboardControl(event) {
        if (this.opened) {
            // tslint:disable-next-line: deprecation
            if (event.keyCode === 39) {
                this.nextImage();
            }
            // tslint:disable-next-line: deprecation
            if (event.keyCode === 37) {
                this.prevImage();
            }
            // tslint:disable-next-line: deprecation
            if (event.keyCode === 27) {
                this.closeGallery();
            }
        }
    }
    swipe(action = this.SWIPE_ACTION.RIGHT) {
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.prevImage();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextImage();
        }
    }
};
ImageModalComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageModalComponent.prototype, "modalImages", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ImageModalComponent.prototype, "imagePointer", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ImageModalComponent.prototype, "fullscreen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ImageModalComponent.prototype, "zoom", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ImageModalComponent.prototype, "smooth", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ImageModalComponent.prototype, "type", void 0);
__decorate([
    ViewChild('galleryImg'),
    __metadata("design:type", ElementRef)
], ImageModalComponent.prototype, "galleryImg", void 0);
__decorate([
    ViewChild('galleryDescription'),
    __metadata("design:type", ElementRef)
], ImageModalComponent.prototype, "galleryDescription", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ImageModalComponent.prototype, "cancelEvent", void 0);
__decorate([
    HostListener('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], ImageModalComponent.prototype, "keyboardControl", null);
ImageModalComponent = __decorate([
    Component({
        selector: 'mdb-image-modal',
        template: "<div class=\"ng-gallery mdb-lightbox {{ type }}\" *ngIf=\"modalImages && showRepeat\">\n  <figure class=\"col-md-4\" *ngFor=\"let i of modalImages; let index = index\">\n    <img\n      src=\"{{ !i.thumb ? i.img : i.thumb }}\"\n      class=\"ng-thumb\"\n      (click)=\"openGallery(index)\"\n      alt=\"Image {{ index + 1 }}\"\n    />\n  </figure>\n</div>\n<div tabindex=\"0\" class=\"ng-overlay\" [class.hide_lightbox]=\"opened == false\">\n  <div class=\"top-bar\" style=\"z-index: 100000\">\n    <span *ngIf=\"modalImages\" class=\"info-text\"\n      >{{ currentImageIndex + 1 }}/{{ modalImages.length }}</span\n    >\n    <a class=\"close-popup\" (click)=\"closeGallery()\" (click)=\"toggleRestart()\"></a>\n    <a\n      *ngIf=\"!is_iPhone_or_iPod\"\n      class=\"fullscreen-toogle\"\n      [class.toggled]=\"fullscreen\"\n      (click)=\"fullScreen()\"\n    ></a>\n    <a class=\"zoom-toogle\" [class.zoom]=\"zoom\" (click)=\"toggleZoomed()\" *ngIf=\"!isMobile\"></a>\n  </div>\n  <div class=\"ng-gallery-content\">\n    <img\n      #galleryImg\n      *ngIf=\"!loading\"\n      src=\"{{ imgSrc }}\"\n      [class.smooth]=\"smooth\"\n      class=\"effect\"\n      (swipeleft)=\"swipe($event.type)\"\n      (swiperight)=\"swipe($event.type)\"\n      (click)=\"toggleZoomed()\"\n      style=\"\"\n    />\n\n    <div class=\"uil-ring-css\" *ngIf=\"loading\">\n      <div></div>\n    </div>\n    <a\n      class=\"nav-left\"\n      *ngIf=\"modalImages && modalImages.length > 1 && !isMobile\"\n      (click)=\"prevImage()\"\n    >\n      <span></span>\n    </a>\n    <a\n      class=\"nav-right\"\n      *ngIf=\"modalImages && modalImages.length > 1 && !isMobile\"\n      (click)=\"nextImage()\"\n    >\n      <span></span>\n    </a>\n  </div>\n  <div class=\"row\" *ngIf=\"caption\">\n    <div class=\"col-md-12 mx-auto bottom-bar text-center\">\n      <figcaption #galleryDescription class=\"text-white lightbox-caption\">{{ caption }}</figcaption>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"openModalWindow\">\n  <mdb-image-modal [imagePointer]=\"imagePointer\"></mdb-image-modal>\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        styles: [".bottom-bar{z-index:100000;position:absolute;left:0;right:0;width:100%;bottom:0!important}mdb-image-modal{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}mdb-image-modal .no-margin [class*=col-]{padding:0;margin:0}mdb-image-modal .hide_lightbox{display:none}mdb-image-modal .ng-gallery{display:-webkit-box;display:flex;width:auto;flex-wrap:wrap}mdb-image-modal img.ng-thumb{width:100%;height:100%;float:none;display:block;cursor:-webkit-zoom-in;cursor:zoom-in;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}mdb-image-modal img.ng-thumb:hover{opacity:.85}mdb-image-modal .ng-overlay{outline:0;position:fixed;top:0;left:0;width:100%;height:100%;background:#000;opacity:1;z-index:9999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}mdb-image-modal .ng-overlay .ng-gallery-content{position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000;text-align:center;overflow:hidden}mdb-image-modal .ng-overlay .ng-gallery-content>a.close-popup{font-size:42px;float:right;color:#fff;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:20px;right:0}mdb-image-modal .ng-overlay .ng-gallery-content>a.download-image{font-size:42px;float:right;color:#fff;text-decoration:none;margin:0 30px 0 0;cursor:pointer;position:absolute;top:20px;right:63px}mdb-image-modal .ng-overlay .ng-gallery-content .nav-left span{display:block;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-left span:before{content:\" \";display:block;width:32px;height:30px;background-position:-138px -44px;opacity:.75;-webkit-transition:opacity .2s;transition:opacity .2s;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-left:hover span:before{opacity:1}mdb-image-modal .ng-overlay .ng-gallery-content .nav-right span{display:block;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-right span:before{content:\" \";display:block;width:32px;height:30px;background-position:-94px -44px;opacity:.75;-webkit-transition:opacity .2s;transition:opacity .2s;background-color:transparent}mdb-image-modal .ng-overlay .ng-gallery-content .nav-right:hover span:before{opacity:1}mdb-image-modal .ng-overlay .ng-gallery-content>img{max-width:100%!important;max-width:1600px;max-height:1067px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none;position:absolute;margin:auto;top:0;left:0;right:0;bottom:0}mdb-image-modal .ng-overlay .ng-gallery-content>img.smooth{-webkit-transition:.2s;transition:.2s}mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-left,mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-right{color:#fff;text-decoration:none;font-size:60px;cursor:pointer;outline:0}mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-left{position:fixed;left:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mdb-image-modal .ng-overlay .ng-gallery-content>a.nav-right{position:fixed;right:10px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}mdb-image-modal .ng-overlay .ng-gallery-content>img.effect{-webkit-animation:.5s fadeIn;animation:.5s fadeIn}mdb-image-modal .ng-overlay .ng-gallery-content>span.info-text{color:#fff;display:inline-block;width:100%;height:20px;font-weight:700;text-align:center;position:fixed;left:0;right:0;bottom:100px;font-size:16px}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper{width:400px;height:70px;text-align:center;position:fixed;bottom:20px;left:0;right:0;margin-left:auto;margin-right:auto;overflow-x:hidden}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails{width:4000px;height:70px}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img{width:auto;height:70px;float:left;margin-right:10px;cursor:pointer;opacity:.6}mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img.active,mdb-image-modal .ng-overlay .ng-gallery-content>.ng-thumbnails-wrapper>.ng-thumbnails>div>img:hover{-webkit-transition:opacity .25s;transition:opacity .25s;opacity:.6}@-webkit-keyframes fadeIn{from{opacity:.3}to{opacity:1}}@keyframes fadeIn{from{opacity:.3}to{opacity:1}}.lightbox-caption{font-size:13px;max-height:50px}.effect{-webkit-transform:scale(.9,.9);transform:scale(.9,.9)}.top-bar{position:absolute;top:0;left:0;right:0;height:44px;width:100%;z-index:10001}.top-bar .info-text{position:absolute;height:44px;top:0;left:0;font-size:16px;line-height:44px;color:#fff;opacity:.75;padding:0 10px}.top-bar .close-popup{position:relative;float:right;background-size:264px 88px;display:block;width:44px;height:44px;background-position:0 -44px;opacity:.75;-webkit-transition:opacity .2s;transition:opacity .2s}.top-bar .close-popup:hover{opacity:1}.top-bar .fullscreen-toogle{position:relative;float:right;background-size:264px 88px;display:block;width:44px;height:44px;opacity:.75;-webkit-transition:opacity .2s;transition:opacity .2s}.top-bar .fullscreen-toogle.toggled{background-position:-44px 0}.top-bar .fullscreen-toogle:hover{opacity:1}.top-bar .zoom-toogle{position:relative;float:right;background-size:264px 88px;display:block;width:44px;height:44px;background-position:-88px 0;opacity:.75;-webkit-transition:opacity .2s;transition:opacity .2s}.top-bar .zoom-toogle.zoom{background-position:-132px 0}.top-bar .zoom-toogle:hover{opacity:1}"]
    }),
    __param(0, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [String, ElementRef,
        Renderer2])
], ImageModalComponent);
export { ImageModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtcG9wdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2xpZ2h0Ym94L2ltYWdlLXBvcHVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNULFNBQVMsRUFDVCxpQkFBaUIsR0FDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBVXpELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBNkI5QixZQUN1QixVQUFrQixFQUNoQyxPQUFtQixFQUNuQixRQUFtQjtRQURuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVc7UUE5QnJCLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFHZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJMUIsYUFBUSxHQUFRLElBQUksQ0FBQztRQUNyQixZQUFPLEdBQVEsS0FBSyxDQUFDO1FBQ3JCLGNBQVMsR0FBUSxLQUFLLENBQUM7UUFDdkIsV0FBTSxHQUFHLFVBQVUsQ0FBQztRQUVwQixpQkFBWSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFNakQsV0FBTSxHQUFHLElBQUksQ0FBQztRQU1iLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQU85QyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FB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L0IsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7SUErQkcsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7NkNBQ0osVUFBVTtRQUNULFNBQVM7R0FoQ2pCLG1CQUFtQixDQW9ML0I7U0FwTFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuLi8uLi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcblxuZGVjbGFyZSB2YXIgc2NyZWVuZnVsbDogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItaW1hZ2UtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ2ltYWdlLXBvcHVwLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saWdodGJveC1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIF9lbGVtZW50OiBhbnk7XG4gIHB1YmxpYyBvcGVuZWQgPSBmYWxzZTtcbiAgcHVibGljIGltZ1NyYzogc3RyaW5nO1xuICBwdWJsaWMgY3VycmVudEltYWdlSW5kZXg6IG51bWJlcjtcbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcbiAgcHVibGljIHNob3dSZXBlYXQgPSBmYWxzZTtcbiAgcHVibGljIG9wZW5Nb2RhbFdpbmRvdzogYW55O1xuICBwdWJsaWMgY2FwdGlvbjogc3RyaW5nO1xuXG4gIGlzTW9iaWxlOiBhbnkgPSBudWxsO1xuICBjbGlja2VkOiBhbnkgPSBmYWxzZTtcbiAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcbiAgem9vbWVkID0gJ2luYWN0aXZlJztcblxuICBTV0lQRV9BQ1RJT04gPSB7IExFRlQ6ICdzd2lwZWxlZnQnLCBSSUdIVDogJ3N3aXBlcmlnaHQnIH07XG5cbiAgQElucHV0KCkgbW9kYWxJbWFnZXM6IGFueTtcbiAgQElucHV0KCkgaW1hZ2VQb2ludGVyOiBudW1iZXI7XG4gIEBJbnB1dCgpIGZ1bGxzY3JlZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIHpvb206IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNtb290aCA9IHRydWU7XG4gIEBJbnB1dCgpIHR5cGU6IFN0cmluZztcblxuICBAVmlld0NoaWxkKCdnYWxsZXJ5SW1nJykgZ2FsbGVyeUltZzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZ2FsbGVyeURlc2NyaXB0aW9uJykgZ2FsbGVyeURlc2NyaXB0aW9uOiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSBjYW5jZWxFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHRoaXMuaXNNb2JpbGUgPSAvaVBob25lfGlQYWR8aVBvZHxBbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVab29tZWQoKSB7XG4gICAgaWYgKCF0aGlzLmNsaWNrZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5nYWxsZXJ5SW1nLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAnc2NhbGUoMS4wLCAxLjApJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZ2FsbGVyeUltZy5uYXRpdmVFbGVtZW50LCAnYW5pbWF0ZScsICczMDBtcyBlYXNlLW91dCcpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdhbGxlcnlJbWcubmF0aXZlRWxlbWVudCwgJ2N1cnNvcicsICd6b29tLW91dCcpO1xuICAgICAgdGhpcy5jbGlja2VkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY2xpY2tlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmdhbGxlcnlJbWcubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICdzY2FsZSgwLjksIDAuOSknKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5nYWxsZXJ5SW1nLm5hdGl2ZUVsZW1lbnQsICdhbmltYXRlJywgJzMwMG1zIGVhc2UtaW4nKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5nYWxsZXJ5SW1nLm5hdGl2ZUVsZW1lbnQsICdjdXJzb3InLCAnem9vbS1pbicpO1xuICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlUmVzdGFydCgpIHtcbiAgICB0aGlzLnpvb21lZCA9IHRoaXMuem9vbWVkID09PSAnaW5hY3RpdmUnID8gJ2FjdGl2ZScgOiAnaW5hY3RpdmUnO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pbWFnZVBvaW50ZXIgPj0gMCkge1xuICAgICAgdGhpcy5zaG93UmVwZWF0ID0gZmFsc2U7XG4gICAgICB0aGlzLm9wZW5HYWxsZXJ5KHRoaXMuaW1hZ2VQb2ludGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93UmVwZWF0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBjbG9zZUdhbGxlcnkoKSB7XG4gICAgdGhpcy56b29tID0gZmFsc2U7XG4gICAgaWYgKHNjcmVlbmZ1bGwuZW5hYmxlZCkge1xuICAgICAgc2NyZWVuZnVsbC5leGl0KCk7XG4gICAgfVxuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gICAgdGhpcy5jYW5jZWxFdmVudC5lbWl0KG51bGwpO1xuICB9XG5cbiAgcHJldkltYWdlKCkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleC0tO1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZUluZGV4IDwgMCkge1xuICAgICAgdGhpcy5jdXJyZW50SW1hZ2VJbmRleCA9IHRoaXMubW9kYWxJbWFnZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgdGhpcy5vcGVuR2FsbGVyeSh0aGlzLmN1cnJlbnRJbWFnZUluZGV4KTtcbiAgfVxuXG4gIG5leHRJbWFnZSgpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXgrKztcbiAgICBpZiAodGhpcy5tb2RhbEltYWdlcy5sZW5ndGggPT09IHRoaXMuY3VycmVudEltYWdlSW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudEltYWdlSW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLm9wZW5HYWxsZXJ5KHRoaXMuY3VycmVudEltYWdlSW5kZXgpO1xuICB9XG5cbiAgb3BlbkdhbGxlcnkoaW5kZXg6IGFueSkge1xuICAgIC8vIFRoZXJlIHdhcyBhIHByb2JsZW0sIHRoYXQgd2l0aCBvcGVuZWQgbGlnaHRib3gsIGlmIHVzZXIgaGF2ZSBwcmVzc2VkIHRoZSBiYWNrIGJ1dHRvblxuICAgIC8vIChib3RoIHBoeXNpY2FsIGRldmljZSBidXR0b24gYW5kIGJyb3dzZXIgYnV0dG9uKVxuICAgIC8vIHRoZSBsaWdodGJveCB3YXMgbm90IGNsb3NlZCwgYnV0IHRoZSB3aG9sZSBhcHBsaWNhdGlvbiB3YXMgY2xvc2VkIChiZWNhdXNlIG9mIGNoYW5naW5nIHRoZSBVUkwpLlxuICAgIGlmICh0eXBlb2YgaGlzdG9yeS5wdXNoU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGhpc3RvcnkucHVzaFN0YXRlKCduZXdzdGF0ZScsICcnLCBudWxsKTtcbiAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlR2FsbGVyeSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gMTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRJbWFnZUluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tb2RhbEltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT09IHRoaXMuY3VycmVudEltYWdlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5pbWdTcmMgPSB0aGlzLm1vZGFsSW1hZ2VzW2ldLmltZztcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gdGhpcy5tb2RhbEltYWdlc1tpXS5jYXB0aW9uO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2FsbGVyeURlc2NyaXB0aW9uKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSGVpZ2h0ID0gdGhpcy5nYWxsZXJ5RGVzY3JpcHRpb24ubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoXG4gICAgICAgICAgdGhpcy5nYWxsZXJ5SW1nLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ21heC1oZWlnaHQnLFxuICAgICAgICAgIGBjYWxjKDEwMCUgLSAke2Rlc2NyaXB0aW9uSGVpZ2h0ICsgMjV9cHgpYFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sIDApO1xuICB9XG5cbiAgZnVsbFNjcmVlbigpOiBhbnkge1xuICAgIGlmIChzY3JlZW5mdWxsLmVuYWJsZWQpIHtcbiAgICAgIHNjcmVlbmZ1bGwudG9nZ2xlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzX2lQaG9uZV9vcl9pUG9kKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdHJVc2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGFyck1hdGNoZXMgPSBzdHJVc2VyQWdlbnQubWF0Y2goL2lwYWQvKTtcbiAgICAgICAgaWYgKGFyck1hdGNoZXMgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKVxuICBrZXlib2FyZENvbnRyb2woZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSkge1xuICAgICAgICB0aGlzLm5leHRJbWFnZSgpO1xuICAgICAgfVxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvblxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIHRoaXMucHJldkltYWdlKCk7XG4gICAgICB9XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgdGhpcy5jbG9zZUdhbGxlcnkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzd2lwZShhY3Rpb246IFN0cmluZyA9IHRoaXMuU1dJUEVfQUNUSU9OLlJJR0hUKSB7XG4gICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uUklHSFQpIHtcbiAgICAgIHRoaXMucHJldkltYWdlKCk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbiA9PT0gdGhpcy5TV0lQRV9BQ1RJT04uTEVGVCkge1xuICAgICAgdGhpcy5uZXh0SW1hZ2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==