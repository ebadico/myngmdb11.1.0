import { __decorate, __metadata, __param } from "tslib";
import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { window } from './../../free/utils/facade/browser';
let SidenavComponent = class SidenavComponent {
    constructor(platformId, el, renderer, _cdRef) {
        this.el = el;
        this.renderer = renderer;
        this._cdRef = _cdRef;
        this.slimSidenav = false;
        this.isBrowser = false;
        this._sidenavTransform = 'translateX(-100%)';
        this.fixed = true;
        this._side = 'left';
        this.isBrowser = isPlatformBrowser(platformId);
    }
    get side() {
        return this._side;
    }
    set side(position) {
        if (position === 'left') {
            this._sidenavTransform = 'translateX(-100%)';
            this.renderer.removeClass(this.sideNav.nativeElement, 'side-nav-right');
        }
        else {
            this._sidenavTransform = 'translateX(100%)';
            this.renderer.addClass(this.sideNav.nativeElement, 'side-nav-right');
        }
        this._side = position;
    }
    ngOnInit() {
        if (this.sidenavBreakpoint && this.sidenavBreakpoint >= window.innerWidth) {
            this.hide();
        }
    }
    ngAfterViewInit() {
        if (this._side === 'right') {
            this.renderer.addClass(this.sideNav.nativeElement, 'side-nav-right');
        }
        if (this.isBrowser) {
            const sidenav = this.el.nativeElement;
            const sidenavChildren = sidenav.children[0].children;
            const sidenavMask = this.el.nativeElement.querySelector('.sidenav-bg');
            let sidenavChildrenHeight = 0;
            if (sidenavMask) {
                for (let i = 0; i < sidenavChildren.length; i++) {
                    if (sidenavChildren[i].classList.contains('sidenav-bg')) {
                        continue;
                    }
                    else {
                        for (let j = 0; j < sidenavChildren[i].children.length; j++) {
                            sidenavChildrenHeight += sidenavChildren[i].children[j].scrollHeight;
                        }
                    }
                }
                this.renderer.setStyle(sidenavMask, 'min-height', sidenavChildrenHeight + 16 + 'px');
            }
            this.windwosWidth = window.innerWidth;
            if (this.sidenavBreakpoint) {
                if (this.fixed) {
                    this.renderer.addClass(document.body, 'fixed-sn');
                    if (this.windwosWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                }
                else {
                    this.renderer.addClass(document.body, 'hidden-sn');
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                    this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                    this.setShown(false);
                }
            }
            else {
                if (this.fixed) {
                    this.renderer.addClass(document.body, 'fixed-sn');
                    if (this.windwosWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                }
                else {
                    this.renderer.addClass(document.body, 'hidden-sn');
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                    this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                    this.setShown(false);
                }
            }
        }
    }
    windowsResize() {
        if (this.isBrowser) {
            const currentWidth = this.windwosWidth;
            this.windwosWidth = window.innerWidth;
            if (this.sidenavBreakpoint) {
                if (this.fixed && this.windwosWidth !== currentWidth) {
                    if (this.windwosWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    }
                    if (this.windwosWidth > +this.sidenavBreakpoint && this.shown) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    }
                    else if (this.windwosWidth > +this.sidenavBreakpoint) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    }
                }
                else {
                    if (this.windwosWidth > +this.sidenavBreakpoint) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.hideOverlay();
                        this.setShown(false);
                    }
                }
            }
            else {
                if (this.fixed && this.windwosWidth !== currentWidth) {
                    if (this.windwosWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    }
                    if (this.windwosWidth > 1440 && this.shown) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    }
                    else if (this.windwosWidth > 1440) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.hideOverlay();
                        this.setShown(true);
                    }
                }
                else {
                    if (this.windwosWidth > 1440 && this.windwosWidth !== currentWidth) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.hideOverlay();
                        this.setShown(false);
                    }
                }
            }
        }
    }
    show() {
        if (this.isBrowser) {
            if (this.sidenavBreakpoint) {
                if (this.fixed) {
                    if (this.windwosWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                        this.showOverlay();
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                }
                else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                    this.setShown(true);
                    this.showOverlay();
                }
            }
            else {
                if (this.fixed) {
                    if (this.windwosWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                        this.showOverlay();
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                        this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                        this.setShown(true);
                    }
                }
                else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                    this.setShown(true);
                    this.showOverlay();
                }
            }
            this._cdRef.markForCheck();
        }
    }
    hide() {
        if (this.isBrowser) {
            if (this.sidenavBreakpoint) {
                if (this.fixed) {
                    if (this.windwosWidth < +this.sidenavBreakpoint + 1) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                        this.hideOverlay();
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    }
                }
                else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                    this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                    this.setShown(false);
                    this.hideOverlay();
                }
            }
            else {
                if (this.fixed) {
                    if (this.windwosWidth < 1441) {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                        this.hideOverlay();
                    }
                    else {
                        this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                        this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                        this.setShown(false);
                    }
                }
                else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', this._sidenavTransform);
                    this.renderer.setStyle(this.el.nativeElement, 'transform', this._sidenavTransform);
                    this.setShown(false);
                    this.hideOverlay();
                }
            }
            this._cdRef.markForCheck();
        }
    }
    toggle() {
        if (this.shown) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    toggleSlim() {
        const sidenavOverlay = this.el.nativeElement.querySelector('.sidenav-bg');
        const linksHeading = this.el.nativeElement.querySelectorAll('mdb-accordion-item-head');
        this.slimSidenav = !this.slimSidenav;
        linksHeading.forEach((el) => {
            if (this.slimSidenav) {
                this.renderer.addClass(el, 'overflow-hidden');
            }
            else {
                this.renderer.removeClass(el, 'overflow-hidden');
            }
        });
        this.renderer.addClass(this.sideNav.nativeElement, 'overflow-hidden');
        if (this.slimSidenav) {
            this.renderer.addClass(this.sideNav.nativeElement, 'slim');
            this.renderer.addClass(sidenavOverlay, 'slim');
        }
        else {
            this.renderer.removeClass(this.sideNav.nativeElement, 'slim');
            this.renderer.removeClass(sidenavOverlay, 'slim');
        }
        this._cdRef.markForCheck();
    }
    showOverlay() {
        this.renderer.setStyle(this.overlay.nativeElement, 'display', 'block');
        setTimeout(() => {
            this.renderer.setStyle(this.overlay.nativeElement, 'opacity', '1');
        }, 10);
    }
    hideOverlay() {
        this.renderer.setStyle(this.overlay.nativeElement, 'opacity', '0');
        setTimeout(() => {
            this.renderer.setStyle(this.overlay.nativeElement, 'display', 'none');
        }, 200);
    }
    setShown(value) {
        setTimeout(() => {
            this.shown = value;
        }, 510);
    }
    ngOnDestroy() {
        if (document.body.classList.contains('hidden-sn')) {
            this.renderer.removeClass(document.body, 'hidden-sn');
        }
        else if (document.body.classList.contains('fixed-sn')) {
            this.renderer.removeClass(document.body, 'fixed-sn');
        }
    }
};
SidenavComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], SidenavComponent.prototype, "class", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SidenavComponent.prototype, "fixed", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SidenavComponent.prototype, "sidenavBreakpoint", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], SidenavComponent.prototype, "side", null);
__decorate([
    ViewChild('sidenav', { static: true }),
    __metadata("design:type", ElementRef)
], SidenavComponent.prototype, "sideNav", void 0);
__decorate([
    ViewChild('overlay', { static: true }),
    __metadata("design:type", Object)
], SidenavComponent.prototype, "overlay", void 0);
__decorate([
    HostListener('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SidenavComponent.prototype, "windowsResize", null);
SidenavComponent = __decorate([
    Component({
        selector: 'mdb-sidenav, mdb-side-nav',
        template: "<ul #sidenav id=\"slide-out\" class=\"{{ class }} side-nav\">\n  <ng-content></ng-content>\n</ul>\n\n<div\n  (click)=\"hide()\"\n  (touchstart)=\"hide()\"\n  #overlay\n  id=\"sidenav-overlay\"\n  style=\"display: none; opacity: 0\"\n></div>\n",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".sn-bg-1{background-image:url(https://mdbootstrap.com/img/Photos/Others/sidenav1.jpg)}.sn-bg-2{background-image:url(https://mdbootstrap.com/img/Photos/Others/sidenav2.jpg)}.sn-bg-3{background-image:url(https://mdbootstrap.com/img/Photos/Others/sidenav3.jpg)}.sn-bg-4{background-image:url(https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg)}.side-nav{position:fixed;width:15rem;left:0;top:0;margin:0;transform:translateX(-100%);height:100%;background-size:cover;background-repeat:no-repeat;background-position:center;z-index:1040;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;will-change:transform;backface-visibility:hidden;list-style-type:none;padding:0;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);transition:.5s;background-color:#2c2f34;overflow-y:auto}.side-nav.wide{width:15rem;transition-property:all;transition-duration:.2s,.2s,.35s;transition-timing-function:linear,linear,ease}.side-nav.wide .logo-wrapper.sn-ad-avatar-wrapper{height:5rem;padding:19px 10px;border-bottom:1px solid rgba(255,255,255,.65)}.side-nav.wide .logo-wrapper.sn-ad-avatar-wrapper a{line-height:2.6rem;color:#fff}.side-nav.wide .logo-wrapper.sn-ad-avatar-wrapper a span{padding-left:.7rem;margin-top:-1rem}.side-nav.wide .logo-wrapper.sn-ad-avatar-wrapper a img{max-width:2.5rem;padding:0}.side-nav.wide .collapsible a{padding-left:23px;transition:.3s ease-in-out}.side-nav.wide .collapsible a .sv-normal{opacity:1;transition:.1s linear}.side-nav.wide .collapsible a .sv-slim{opacity:0;display:none;transition:.1s linear}.side-nav.wide .collapsible .sv-slim-icon{padding-left:0;width:30px;height:36px;text-align:left;margin-right:0}.side-nav.wide .collapsible-body a{padding-left:47px}.side-nav.wide .fa-angle-down.rotate-icon{opacity:1;display:block}.side-nav.wide.slim{width:3.75rem;transition-property:top,bottom,width;transition-duration:.2s,.2s,.35s;transition-timing-function:linear,linear,ease;right:3.75rem}.side-nav.wide.slim .collapsible a{padding-left:23px;transition:.3s ease-in-out}.side-nav.wide.slim .collapsible a .sv-normal{opacity:0;transition:.1s linear}.side-nav.wide.slim .collapsible a .sv-slim{display:block;opacity:1;transition:.1s linear}.side-nav.wide.slim .collapsible .sv-slim-icon{padding-left:0;width:30px;height:36px;text-align:left;margin-right:0}.side-nav.wide.slim .fa-angle-down.rotate-icon{opacity:0;display:none}.side-nav>ul{max-height:100vh}.side-nav ul{list-style:none;padding-left:0}.side-nav ul li{padding:0}.side-nav.right-aligned{right:0;left:auto;transform:translateX(100%)}.side-nav.side-nav-light .logo-wrapper{border-bottom:1px solid rgba(153,153,153,.3)}.side-nav.side-nav-light .logo-wrapper.sn-ad-avatar-wrapper{color:#555}.side-nav.side-nav-light .about{border-bottom:1px solid rgba(153,153,153,.3)}.side-nav.side-nav-light .about p{color:#555}.side-nav.side-nav-light .social{border-bottom:1px solid rgba(153,153,153,.3)}.side-nav.side-nav-light .social .fab,.side-nav.side-nav-light .social .far,.side-nav.side-nav-light .social .fas{color:#555}.side-nav.side-nav-light .search-form input[type=text]{border-bottom-color:rgba(153,153,153,.3);color:#555!important}.side-nav.side-nav-light .search-form input[type=text]::-webkit-input-placeholder{color:#555!important}.side-nav.side-nav-light .search-form input[type=text]::-moz-placeholder{color:#555!important}.side-nav.side-nav-light .search-form input[type=text]::-ms-input-placeholder{color:#555!important}.side-nav.side-nav-light .search-form input[type=text]::placeholder{color:#555!important}.side-nav.side-nav-light .collapsible a{color:#555}.side-nav.side-nav-light .collapsible-body a{background-color:rgba(0,0,0,.1)}.side-nav.side-nav-light .collapsible li .collapsible-header:hover{background-color:rgba(0,0,0,.05)}.side-nav.side-nav-light .collapsible li .collapsible-header.active{color:#4285f4;background-color:transparent}.side-nav.fixed{left:0;transform:translateX(0);position:fixed}.side-nav.fixed.right-aligned{right:0;left:auto}@media only screen and (max-width :1440px){.side-nav.fixed{transform:translateX(-105%)}.side-nav.fixed.right-aligned{transform:translateX(105%)}}.side-nav .collapsible{margin:1rem 0 0;padding:0}.side-nav .collapsible li a:hover{background-color:rgba(0,0,0,.15)}.side-nav .collapsible>li{border-radius:2px}.side-nav .collapsible>li a.collapsible-header.active,.side-nav .collapsible>li a.collapsible-header:hover{background-color:rgba(255,255,255,.15)}.side-nav .collapsible ul{padding:0;list-style-type:none}.side-nav .collapsible a{color:#fff;font-weight:300;font-size:.8rem;height:36px;line-height:36px}.side-nav .collapsible a.active,.side-nav .collapsible a:hover{border-radius:2px}.side-nav .collapsible .fab,.side-nav .collapsible .far,.side-nav .collapsible .fas{font-size:.8rem;margin-right:13px}.side-nav .collapsible-body a{padding-left:47px;height:36px;line-height:36px;background-color:rgba(0,0,0,.15)}.side-nav a{display:block;font-size:1rem;height:56px;line-height:56px;padding-left:20px}.side-nav .fa-angle-down.rotate-icon{position:absolute;right:0;top:.8rem;margin-right:1.25rem}.side-nav .sidenav-bg{top:0;bottom:0;left:0;right:0;width:15rem;z-index:-1;background-attachment:fixed;position:fixed}.side-nav .sidenav-bg:after{width:100%;display:block;content:\"\";position:absolute;height:100%;top:0;left:0;bottom:0;z-index:-1;margin-bottom:-99999px;padding-bottom:99999px}.side-nav .logo-wrapper{border-bottom:1px solid rgba(153,153,153,.3);height:8.75rem}.side-nav .logo-wrapper a{height:8.75rem;width:15rem;padding:0}.side-nav .logo-wrapper img{height:auto;padding:20% 50px}@media (max-height:992px){.side-nav .logo-wrapper,.side-nav .logo-wrapper a{height:80px}.side-nav .logo-wrapper img{padding-top:7%;padding-bottom:7%}}.side-nav .logo-wrapper.sn-avatar-wrapper{padding:10% 33%}.side-nav .logo-wrapper.sn-avatar-wrapper img{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);margin:0;padding:0;max-width:90px}@media only screen and (max-height:992px){.side-nav .logo-wrapper.sn-avatar-wrapper{padding-left:40%;padding-right:40%}.side-nav .logo-wrapper.sn-avatar-wrapper img{max-width:50px}}.side-nav .logo-wrapper.sn-ad-avatar-wrapper{height:auto;margin-bottom:0}.side-nav .logo-wrapper.sn-ad-avatar-wrapper img{max-width:3.75rem;padding:1.25rem .63rem;float:left}.side-nav .logo-wrapper.sn-ad-avatar-wrapper p{font-size:.94rem;padding-top:1.25rem;padding-bottom:1.25rem;margin:0}.side-nav .about{padding:1rem;border-bottom:1px solid rgba(255,255,255,.65)}.side-nav .about p{margin-bottom:0;text-align:center}.side-nav .social{padding-top:0;text-align:center;border-bottom:1px solid rgba(255,255,255,.65)}.side-nav .social li{display:inline-block;padding-top:.6rem;padding-bottom:.6rem;margin:0}.side-nav .social a{margin:0;padding:0}.side-nav .social .fab,.side-nav .social .far,.side-nav .social .fas{font-size:.9rem;padding-right:.6rem;padding-left:.6rem;color:#dbe4e7;transition:.3s}.side-nav .social .fab:hover,.side-nav .social .far:hover,.side-nav .social .fas:hover{color:#afc4cb;transition:.3s}.side-nav .search-form{padding:0}.side-nav .search-form input[type=text]{border-bottom:1px solid rgba(255,255,255,.65);font-weight:300;padding-left:1.88rem}.side-nav .search-form input[type=text]::-webkit-input-placeholder{color:#fff}.side-nav .search-form input[type=text]::-moz-placeholder{color:#fff}.side-nav .search-form input[type=text]::-ms-input-placeholder{color:#fff}.side-nav .search-form input[type=text]::placeholder{color:#fff}.side-nav .search-form .form-control{color:#fff;margin-bottom:0}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}#sidenav-overlay{position:fixed;top:0;left:0;right:0;height:120vh;background-color:rgba(0,0,0,.5);z-index:997;will-change:opacity;transition:.5s}.transform-fix-input{transform:translateX(0)!important}.side-nav .sidenav-bg::after{margin-bottom:unset;padding-bottom:unset}.side-nav.side-nav-right{left:auto;right:0!important}.side-nav.side-nav-light{background-color:#e5e5e5}.side-nav.side-nav-light .collapsible .card .card-header a h5{color:#555}.side-nav.side-nav-light .collapsible .card .card-header a:hover{background-color:rgba(0,0,0,.05)}.side-nav.side-nav-light .collapsible .card.active .card-header a{background-color:transparent}.side-nav.side-nav-light .collapsible .card.active .card-header a h5,.side-nav.side-nav-light .collapsible .card.active .card-header a h5 i{color:#4285f4}.side-nav.side-nav-light .collapsible .card-body li a{color:#555;background-color:rgba(0,0,0,.1)}.side-nav.side-nav-light .collapsible .card-body li a:hover{background-color:rgba(0,0,0,.15)}.side-nav.side-nav-light a{color:#555;font-weight:400}.side-nav.side-nav-light a .fa{color:#555}.side-nav.side-nav-light input[type=text]{border-bottom-color:rgba(153,153,153,.3);color:#555!important}.side-nav.side-nav-light input[type=text]::-webkit-input-placeholder{color:#555!important}.side-nav.side-nav-light input[type=text]::-moz-placeholder{color:#555!important}.side-nav.side-nav-light input[type=text]:-ms-input-placeholder{color:#555!important}.side-nav.side-nav-light input[type=text]:-moz-placeholder{color:#555!important}.side-nav::-webkit-scrollbar{width:4px;height:4px}.side-nav::-webkit-scrollbar-button:end:increment,.side-nav::-webkit-scrollbar-button:start:decrement{display:block;height:0;background-color:transparent}.side-nav::-webkit-scrollbar-track-piece{background-color:transparent;border-radius:0 0 4px 4px}.side-nav::-webkit-scrollbar-thumb:vertical{height:50px;background-color:#999;border-radius:4px}.side-nav input[type=text]:focus:not([readonly]){border-bottom:1px solid #4285f4;box-shadow:0 1px 0 0 #4285f4}.side-nav .collapsible .no-collase .rotate-icon{display:none}.side-nav .collapsible .card{background-color:transparent;border-bottom:0!important}.side-nav .collapsible .card .card-header{padding:0!important}.side-nav .collapsible .card .card-header a{transition:.3s;height:40px;line-height:40px;border-radius:2px;padding:0}.side-nav .collapsible .card .card-header a h5{padding-left:20px;font-size:.8rem;line-height:40px;font-weight:300;position:relative;color:#fff}.side-nav .collapsible .card .card-header a .fa{font-size:.8rem;margin-right:13px;padding:0}.side-nav .collapsible .card .card-header a .rotate-icon{top:13px;margin-right:20px}.side-nav .collapsible .card.active>mdb-accordion-item-head{background:rgba(255,255,255,.15)}.side-nav .collapsible .card.active .card-header a h5{font-weight:300}.side-nav .collapsible .card-body{padding:0!important}.side-nav .collapsible .card-body li a{background-color:rgba(0,0,0,.15);font-size:.8rem;line-height:32px;height:32px;padding-left:47px;font-weight:300;color:#fff;display:block}.side-nav .collapsible .card-body li:first-of-type{border-top:0!important;margin-top:0}.side-nav.wide .slim{width:3.75rem;transition-property:top,bottom,width;transition-duration:.2s,.2s,.35s;transition-timing-function:linear,linear,ease;right:3.75rem}.side-nav.wide .slim .collapsible a{padding-left:23px;transition:.3s ease-in-out}.side-nav.wide .slim .collapsible a .sv-normal{opacity:0;transition:.1s linear}.side-nav.wide .slim .collapsible a .sv-slim{display:block;opacity:1;transition:.1s linear}.side-nav.wide .slim .collapsible .sv-slim-icon{padding-left:0;width:30px;height:36px;text-align:left;margin-right:0}.side-nav.wide .slim .fa-angle-down.rotate-icon{opacity:0;display:none}.slim .mdb-accordion-indicator{display:none}doublenavbar #sidenav-overlay,doublenavbar .side-nav{transition:.2s}doublenavbar links,doublenavbar navlinks{display:flex}header{height:0!important}@media all and (min-width:992px){.double-nav logo{display:flex;flex-direction:row;align-items:center!important;align-self:center!important;width:100%!important}.double-nav .navbar-brand img{margin-top:2px}}@media (max-width:1440px){.double-nav .button-collapse{display:block;left:10px;top:25%;font-size:1.4rem;margin-top:-2px!important;margin-right:10px;margin-left:10px}}.double-nav .button-collapse-non-fixed{left:10px;font-size:1.5rem}@media (min-width:1440px){.double-nav .button-collapse-non-fixed{display:none}}@media all and (max-width:599px){.double-nav .button-collapse-non-fixed{margin-top:-6px}}@media (max-width:1440px){.double-nav .button-collapse-non-fixed{display:block;left:10px;top:15px;font-size:1.4rem;margin-right:10px;margin-left:10px}}.double-nav .hidden-nav-button-collapse{display:block!important}@media all and (min-width:600px) and (max-width:993px){.double-nav .button-collapse-non-fixed{top:10px;margin-top:5px}.double-nav .button-collapse-non-fixed.hidden-nav>i{top:5px!important;margin-top:-5px!important}.double-nav .hidden-nav-button-collapse{top:25%;margin-top:-3px}}@media all and (min-width:994px){.double-nav .hidden-nav-button-collapse{margin-top:-3px}}.double-nav .hidden-nav{display:block;top:13px;left:10px;font-size:1.5rem;margin-left:10px}.double-nav .dropdown .dropdown-menu{margin-left:-68px;display:none;position:absolute;transform:translate3d(6px,49px,0);top:0;left:0;will-change:transform}.double-nav .mega-menu{margin-left:0!important;left:240px!important;width:calc(100% - 240px)!important}@media (max-width:1440px){.double-nav .mega-menu{left:0!important;width:100%!important}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ie-hidden-double-nav{box-sizing:content-box;max-height:40.5px}.breadcrumbs{margin-left:25px!important;margin-top:2px}.breadcrumbs img{margin-left:20px}.ie-double-nav{position:absolute;top:30%;right:0}nav.double-nav{min-height:50px!important}.nav-link{padding-top:0!important;padding-bottom:0!important}.button-collapse,.button-collapse-non-fixed{position:absolute;top:30%!important}.hidden-nav-button-collapse{position:absolute}}@media all and (-ms-high-contrast:none) and (max-width:599px),(-ms-high-contrast:active) and (max-width:599px){.ie-double-nav{margin-top:-4px}.ie-hidden-double-nav .ie-double-nav{margin-top:0}.button-collapse,.button-collapse-non-fixed{top:5px!important;margin-left:0!important;margin-right:0!important}}@media all and (-ms-high-contrast:none) and (min-width:600px) and (max-width:992px),(-ms-high-contrast:active) and (min-width:600px) and (max-width:992px){.button-collapse-non-fixed{margin-top:-4px!important}.button-collapse{margin-top:-6px!important}.ie-double-nav{margin-top:0!important}.hidden-nav-button-collapse i{margin-top:10px!important}.breadcrumbs p{margin-top:-8px!important}}@media all and (-ms-high-contrast:none) and (min-width:993px) and (max-width:1441px),(-ms-high-contrast:active) and (min-width:993px) and (max-width:1441px){.button-collapse,.button-collapse-non-fixed{margin-top:-6px!important}.breadcrumbs>p{margin-top:-2px!important}.navbar-brand>img{margin-top:-2px}.breadcrumbs-non-fixed p{margin-top:2px!important}.hidden-nav-button-collapse{position:absolute!important;margin-left:10px!important}}@media all and (-ms-high-contrast:none) and (min-width:1441px),(-ms-high-contrast:active) and (min-width:1441px){.hidden-nav-button-collapse{position:absolute!important;margin-left:10px!important}.button-collapse-non-fixed{margin-top:-5px}.breadcrumbs>.navbar-brand img{margin-top:-2px}}@supports (-ms-ime-align:auto){.ie-hidden-double-nav{box-sizing:content-box;max-height:40.5px}.breadcrumbs{margin-left:25px!important;margin-top:2px}.breadcrumbs img{margin-left:20px}.ie-double-nav{position:absolute;top:30%;right:0}nav.double-nav{min-height:50px!important}.nav-link{padding-top:0!important;padding-bottom:0!important}.button-collapse,.button-collapse-non-fixed{position:absolute;top:30%!important}.hidden-nav-button-collapse{position:absolute}@media all and (max-width:599px){.ie-double-nav{margin-top:-4px}.ie-hidden-double-nav .ie-double-nav{margin-top:0}.button-collapse,.button-collapse-non-fixed{top:5px!important;margin-left:0!important;margin-right:0!important}}@media all and (min-width:600px) and (max-width:992px){.button-collapse-non-fixed{margin-top:-4px!important}.button-collapse{margin-top:-6px!important}.ie-double-nav{margin-top:0!important}.hidden-nav-button-collapse i{margin-top:10px!important}.breadcrumbs p{margin-top:-8px!important}}@media all and (min-width:993px) and (max-width:1441px){.button-collapse,.button-collapse-non-fixed{margin-top:-6px!important}.breadcrumbs>p{margin-top:-2px!important}.breadcrumbs>.navbar-brand>img{margin-top:-2px}.breadcrumbs-non-fixed p{margin-top:2px!important}.hidden-nav-button-collapse{position:absolute!important;margin-left:10px!important}}@media all and (min-width:1441px){.hidden-nav-button-collapse{position:absolute!important;margin-left:10px!important}.button-collapse-non-fixed{margin-top:-5px}.breadcrumbs>.navbar-brand img{margin-top:-2px}}}"]
    }),
    __param(0, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [String, ElementRef,
        Renderer2,
        ChangeDetectorRef])
], SidenavComponent);
export { SidenavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVMzRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQWdDM0IsWUFDdUIsVUFBa0IsRUFDaEMsRUFBYyxFQUNkLFFBQW1CLEVBQ2xCLE1BQXlCO1FBRjFCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBakM1QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBRXRCLHNCQUFpQixHQUFHLG1CQUFtQixDQUFDO1FBR2hDLFVBQUssR0FBRyxJQUFJLENBQUM7UUFtQnJCLFVBQUssR0FBRyxNQUFNLENBQUM7UUFVckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBMUJELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMsUUFBZ0I7UUFDdkIsSUFBSSxRQUFRLEtBQUss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VUFBVTtpREFBQztBQUMzQjtJQUF2QyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOztpREFBcUI7QUFzRjVEO0lBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQzs7OztxREE2RDdCO0FBaExVLGdCQUFnQjtJQVA1QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLDhQQUFxQztRQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztJQWtDRyxXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTs2Q0FDVCxVQUFVO1FBQ0osU0FBUztRQUNWLGlCQUFpQjtHQXBDeEIsZ0JBQWdCLENBcVU1QjtTQXJVWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFBMQVRGT1JNX0lELFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyB3aW5kb3cgfSBmcm9tICcuLy4uLy4uL2ZyZWUvdXRpbHMvZmFjYWRlL2Jyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItc2lkZW5hdiwgbWRiLXNpZGUtbmF2JyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lkZW5hdi1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcHVibGljIHdpbmR3b3NXaWR0aDogbnVtYmVyO1xuICBwdWJsaWMgc2hvd246IGJvb2xlYW47XG4gIHB1YmxpYyBzbGltU2lkZW5hdiA9IGZhbHNlO1xuICBwdWJsaWMgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcblxuICBwcml2YXRlIF9zaWRlbmF2VHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTEwMCUpJztcblxuICBASW5wdXQoKSBwdWJsaWMgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgcHVibGljIGZpeGVkID0gdHJ1ZTtcbiAgQElucHV0KCkgc2lkZW5hdkJyZWFrcG9pbnQ6IGFueTtcblxuICBASW5wdXQoKVxuICBnZXQgc2lkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2lkZTtcbiAgfVxuXG4gIHNldCBzaWRlKHBvc2l0aW9uOiBzdHJpbmcpIHtcbiAgICBpZiAocG9zaXRpb24gPT09ICdsZWZ0Jykge1xuICAgICAgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSc7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAnc2lkZS1uYXYtcmlnaHQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDEwMCUpJztcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICdzaWRlLW5hdi1yaWdodCcpO1xuICAgIH1cbiAgICB0aGlzLl9zaWRlID0gcG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIF9zaWRlID0gJ2xlZnQnO1xuICBAVmlld0NoaWxkKCdzaWRlbmF2JywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIHNpZGVOYXY6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXknLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgb3ZlcmxheTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zaWRlbmF2QnJlYWtwb2ludCAmJiB0aGlzLnNpZGVuYXZCcmVha3BvaW50ID49IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuX3NpZGUgPT09ICdyaWdodCcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICdzaWRlLW5hdi1yaWdodCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IHNpZGVuYXYgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjb25zdCBzaWRlbmF2Q2hpbGRyZW4gPSBzaWRlbmF2LmNoaWxkcmVuWzBdLmNoaWxkcmVuO1xuICAgICAgY29uc3Qgc2lkZW5hdk1hc2sgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVuYXYtYmcnKTtcblxuICAgICAgbGV0IHNpZGVuYXZDaGlsZHJlbkhlaWdodCA9IDA7XG5cbiAgICAgIGlmIChzaWRlbmF2TWFzaykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpZGVuYXZDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChzaWRlbmF2Q2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlbmF2LWJnJykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpZGVuYXZDaGlsZHJlbltpXS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICBzaWRlbmF2Q2hpbGRyZW5IZWlnaHQgKz0gc2lkZW5hdkNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdLnNjcm9sbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShzaWRlbmF2TWFzaywgJ21pbi1oZWlnaHQnLCBzaWRlbmF2Q2hpbGRyZW5IZWlnaHQgKyAxNiArICdweCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLndpbmR3b3NXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICBpZiAodGhpcy5zaWRlbmF2QnJlYWtwb2ludCkge1xuICAgICAgICBpZiAodGhpcy5maXhlZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2ZpeGVkLXNuJyk7XG5cbiAgICAgICAgICBpZiAodGhpcy53aW5kd29zV2lkdGggPCArdGhpcy5zaWRlbmF2QnJlYWtwb2ludCArIDEpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKGZhbHNlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24odHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2hpZGRlbi1zbicpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgIHRoaXMuc2V0U2hvd24oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5maXhlZCkge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2ZpeGVkLXNuJyk7XG5cbiAgICAgICAgICBpZiAodGhpcy53aW5kd29zV2lkdGggPCAxNDQxKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bihmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdoaWRkZW4tc24nKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICB0aGlzLnNldFNob3duKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICB3aW5kb3dzUmVzaXplKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gdGhpcy53aW5kd29zV2lkdGg7XG4gICAgICB0aGlzLndpbmR3b3NXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgaWYgKHRoaXMuc2lkZW5hdkJyZWFrcG9pbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQgJiYgdGhpcy53aW5kd29zV2lkdGggIT09IGN1cnJlbnRXaWR0aCkge1xuICAgICAgICAgIGlmICh0aGlzLndpbmR3b3NXaWR0aCA8ICt0aGlzLnNpZGVuYXZCcmVha3BvaW50ICsgMSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24oZmFsc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLndpbmR3b3NXaWR0aCA+ICt0aGlzLnNpZGVuYXZCcmVha3BvaW50ICYmIHRoaXMuc2hvd24pIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKHRydWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy53aW5kd29zV2lkdGggPiArdGhpcy5zaWRlbmF2QnJlYWtwb2ludCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24odHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLndpbmR3b3NXaWR0aCA+ICt0aGlzLnNpZGVuYXZCcmVha3BvaW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bihmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5maXhlZCAmJiB0aGlzLndpbmR3b3NXaWR0aCAhPT0gY3VycmVudFdpZHRoKSB7XG4gICAgICAgICAgaWYgKHRoaXMud2luZHdvc1dpZHRoIDwgMTQ0MSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24oZmFsc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLndpbmR3b3NXaWR0aCA+IDE0NDAgJiYgdGhpcy5zaG93bikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24odHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLndpbmR3b3NXaWR0aCA+IDE0NDApIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy53aW5kd29zV2lkdGggPiAxNDQwICYmIHRoaXMud2luZHdvc1dpZHRoICE9PSBjdXJyZW50V2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHRoaXMuc2lkZW5hdkJyZWFrcG9pbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy53aW5kd29zV2lkdGggPCArdGhpcy5zaWRlbmF2QnJlYWtwb2ludCArIDEpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bih0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgdGhpcy5zZXRTaG93bih0cnVlKTtcbiAgICAgICAgICB0aGlzLnNob3dPdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmZpeGVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMud2luZHdvc1dpZHRoIDwgMTQ0MSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24odHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNob3dPdmVybGF5KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICB0aGlzLnNldFNob3duKHRydWUpO1xuICAgICAgICAgIHRoaXMuc2hvd092ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICh0aGlzLnNpZGVuYXZCcmVha3BvaW50KSB7XG4gICAgICAgIGlmICh0aGlzLmZpeGVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMud2luZHdvc1dpZHRoIDwgK3RoaXMuc2lkZW5hdkJyZWFrcG9pbnQgKyAxKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bihmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgdGhpcy5zZXRTaG93bihmYWxzZSk7XG4gICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5maXhlZCkge1xuICAgICAgICAgIGlmICh0aGlzLndpbmR3b3NXaWR0aCA8IDE0NDEpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24oZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICB0aGlzLnNldFNob3duKGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5zaG93bikge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVTbGltKCkge1xuICAgIGNvbnN0IHNpZGVuYXZPdmVybGF5ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlbmF2LWJnJyk7XG4gICAgY29uc3QgbGlua3NIZWFkaW5nID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ21kYi1hY2NvcmRpb24taXRlbS1oZWFkJyk7XG4gICAgdGhpcy5zbGltU2lkZW5hdiA9ICF0aGlzLnNsaW1TaWRlbmF2O1xuXG4gICAgbGlua3NIZWFkaW5nLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmICh0aGlzLnNsaW1TaWRlbmF2KSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWwsICdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsICdvdmVyZmxvdy1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICdvdmVyZmxvdy1oaWRkZW4nKTtcblxuICAgIGlmICh0aGlzLnNsaW1TaWRlbmF2KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAnc2xpbScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzaWRlbmF2T3ZlcmxheSwgJ3NsaW0nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3NsaW0nKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Moc2lkZW5hdk92ZXJsYXksICdzbGltJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBzaG93T3ZlcmxheSgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheS5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdibG9jaycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLm92ZXJsYXkubmF0aXZlRWxlbWVudCwgJ29wYWNpdHknLCAnMScpO1xuICAgIH0sIDEwKTtcbiAgfVxuXG4gIGhpZGVPdmVybGF5KCkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vdmVybGF5Lm5hdGl2ZUVsZW1lbnQsICdvcGFjaXR5JywgJzAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vdmVybGF5Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgc2V0U2hvd24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd24gPSB2YWx1ZTtcbiAgICB9LCA1MTApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4tc24nKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnaGlkZGVuLXNuJyk7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnZml4ZWQtc24nKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnZml4ZWQtc24nKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==