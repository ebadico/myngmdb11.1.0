import { __decorate, __metadata, __param } from "tslib";
import { AfterViewInit, Component, ElementRef, HostListener, Inject, Input, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewChild, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { window } from './../../free/utils/facade/browser';
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(platformId, el, renderer, _cdRef) {
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
    Object.defineProperty(SidenavComponent.prototype, "side", {
        get: function () {
            return this._side;
        },
        set: function (position) {
            if (position === 'left') {
                this._sidenavTransform = 'translateX(-100%)';
                this.renderer.removeClass(this.sideNav.nativeElement, 'side-nav-right');
            }
            else {
                this._sidenavTransform = 'translateX(100%)';
                this.renderer.addClass(this.sideNav.nativeElement, 'side-nav-right');
            }
            this._side = position;
        },
        enumerable: true,
        configurable: true
    });
    SidenavComponent.prototype.ngOnInit = function () {
        if (this.sidenavBreakpoint && this.sidenavBreakpoint >= window.innerWidth) {
            this.hide();
        }
    };
    SidenavComponent.prototype.ngAfterViewInit = function () {
        if (this._side === 'right') {
            this.renderer.addClass(this.sideNav.nativeElement, 'side-nav-right');
        }
        if (this.isBrowser) {
            var sidenav = this.el.nativeElement;
            var sidenavChildren = sidenav.children[0].children;
            var sidenavMask = this.el.nativeElement.querySelector('.sidenav-bg');
            var sidenavChildrenHeight = 0;
            if (sidenavMask) {
                for (var i = 0; i < sidenavChildren.length; i++) {
                    if (sidenavChildren[i].classList.contains('sidenav-bg')) {
                        continue;
                    }
                    else {
                        for (var j = 0; j < sidenavChildren[i].children.length; j++) {
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
    };
    SidenavComponent.prototype.windwosResize = function () {
        if (this.isBrowser) {
            var currentWidth = this.windwosWidth;
            this.windwosWidth = window.innerWidth;
            if (this.sidenavBreakpoint) {
                if (this.fixed) {
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
    };
    SidenavComponent.prototype.show = function () {
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
    };
    SidenavComponent.prototype.hide = function () {
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
    };
    SidenavComponent.prototype.toggle = function () {
        if (this.shown) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    SidenavComponent.prototype.toggleSlim = function () {
        var _this = this;
        var sidenavOverlay = this.el.nativeElement.querySelector('.sidenav-bg');
        var linksHeading = this.el.nativeElement.querySelectorAll('mdb-accordion-item-head');
        this.slimSidenav = !this.slimSidenav;
        linksHeading.forEach(function (el) {
            if (_this.slimSidenav) {
                _this.renderer.addClass(el, 'overflow-hidden');
            }
            else {
                _this.renderer.removeClass(el, 'overflow-hidden');
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
    };
    SidenavComponent.prototype.showOverlay = function () {
        var _this = this;
        this.renderer.setStyle(this.overlay.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.renderer.setStyle(_this.overlay.nativeElement, 'opacity', '1');
        }, 0);
    };
    SidenavComponent.prototype.hideOverlay = function () {
        var _this = this;
        this.renderer.setStyle(this.overlay.nativeElement, 'opacity', '0');
        setTimeout(function () {
            _this.renderer.setStyle(_this.overlay.nativeElement, 'display', 'none');
        }, 200);
    };
    SidenavComponent.prototype.setShown = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.shown = value;
        }, 510);
    };
    SidenavComponent.prototype.ngOnDestroy = function () {
        if (document.body.classList.contains('hidden-sn')) {
            this.renderer.removeClass(document.body, 'hidden-sn');
        }
        else if (document.body.classList.contains('fixed-sn')) {
            this.renderer.removeClass(document.body, 'fixed-sn');
        }
    };
    SidenavComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: ElementRef },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
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
    ], SidenavComponent.prototype, "windwosResize", null);
    SidenavComponent = __decorate([
        Component({
            selector: 'mdb-sidenav, mdb-side-nav',
            template: "<ul #sidenav id=\"slide-out\" class=\"{{ class }} side-nav\">\n  <ng-content></ng-content>\n</ul>\n\n<div\n  (click)=\"hide()\"\n  (touchstart)=\"hide()\"\n  #overlay\n  id=\"sidenav-overlay\"\n  style=\"display: none;\"\n></div>\n",
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".sn-bg-1{background-image:url(https://mdbootstrap.com/img/Photos/Others/sidenav1.jpg)}.sn-bg-2{background-image:url(https://mdbootstrap.com/img/Photos/Others/sidenav2.jpg)}.sn-bg-3{background-image:url(https://mdbootstrap.com/img/Photos/Others/sidenav3.jpg)}.sn-bg-4{background-image:url(https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg)}.side-nav{position:fixed;width:15rem;left:0;top:0;margin:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);height:100%;background-size:cover;background-repeat:no-repeat;background-position:center;z-index:1040;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;will-change:transform;backface-visibility:hidden;list-style-type:none;padding:0;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.side-nav.wide{width:15rem}.side-nav.wide .logo-wrapper.sn-ad-avatar-wrapper{height:5rem;padding:19px 10px;border-bottom:1px solid rgba(255,255,255,.65)}.side-nav.wide .logo-wrapper.sn-ad-avatar-wrapper a{line-height:2.6rem;color:#fff}.side-nav.wide .logo-wrapper.sn-ad-avatar-wrapper a span{padding-left:.7rem;margin-top:-1rem}.side-nav.wide .logo-wrapper.sn-ad-avatar-wrapper a img{max-width:2.5rem;padding:0}.side-nav.wide .collapsible a{padding-left:23px;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.side-nav.wide .collapsible a .sv-normal{opacity:1;-webkit-transition:.1s linear;transition:.1s linear}.side-nav.wide .collapsible a .sv-slim{opacity:0;display:none;-webkit-transition:.1s linear;transition:.1s linear}.side-nav.wide .collapsible .sv-slim-icon{padding-left:0;width:30px;height:36px;text-align:left;margin-right:0}.side-nav.wide .collapsible-body a{padding-left:47px}.side-nav.wide .fa-angle-down.rotate-icon{opacity:1;display:block}.side-nav.wide.slim{width:3.75rem;-webkit-transition-property:top,bottom,width;transition-property:top,bottom,width;-webkit-transition-duration:.2s,.2s,.35s;transition-duration:.2s,.2s,.35s;-webkit-transition-timing-function:linear,linear,ease;transition-timing-function:linear,linear,ease;right:3.75rem}.side-nav.wide.slim .collapsible a{padding-left:23px;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.side-nav.wide.slim .collapsible a .sv-normal{opacity:0;-webkit-transition:.1s linear;transition:.1s linear}.side-nav.wide.slim .collapsible a .sv-slim{display:block;opacity:1;-webkit-transition:.1s linear;transition:.1s linear}.side-nav.wide.slim .collapsible .sv-slim-icon{padding-left:0;width:30px;height:36px;text-align:left;margin-right:0}.side-nav.wide.slim .fa-angle-down.rotate-icon{opacity:0;display:none}.side-nav>ul{max-height:100vh}.side-nav ul{list-style:none;padding-left:0}.side-nav ul li{padding:0}.side-nav.right-aligned{right:0;left:auto;-webkit-transform:translateX(100%);transform:translateX(100%)}.side-nav.side-nav-light .logo-wrapper{border-bottom:1px solid rgba(153,153,153,.3)}.side-nav.side-nav-light .logo-wrapper.sn-ad-avatar-wrapper{color:#555}.side-nav.side-nav-light .about{border-bottom:1px solid rgba(153,153,153,.3)}.side-nav.side-nav-light .about p{color:#555}.side-nav.side-nav-light .social{border-bottom:1px solid rgba(153,153,153,.3)}.side-nav.side-nav-light .social .fab,.side-nav.side-nav-light .social .far,.side-nav.side-nav-light .social .fas{color:#555}.side-nav.side-nav-light .search-form input[type=text]{border-bottom-color:rgba(153,153,153,.3);color:#555!important}.side-nav.side-nav-light .search-form input[type=text]::-webkit-input-placeholder{color:#555!important}.side-nav.side-nav-light .search-form input[type=text]::-moz-placeholder{color:#555!important}.side-nav.side-nav-light .search-form input[type=text]::-ms-input-placeholder{color:#555!important}.side-nav.side-nav-light .search-form input[type=text]::placeholder{color:#555!important}.side-nav.side-nav-light .collapsible a{color:#555}.side-nav.side-nav-light .collapsible-body a{background-color:rgba(0,0,0,.1)}.side-nav.side-nav-light .collapsible li .collapsible-header:hover{background-color:rgba(0,0,0,.05)}.side-nav.side-nav-light .collapsible li .collapsible-header.active{color:#4285f4;background-color:transparent}.side-nav.fixed{left:0;-webkit-transform:translateX(0);transform:translateX(0);position:fixed}.side-nav.fixed.right-aligned{right:0;left:auto}@media only screen and (max-width :1440px){.side-nav.fixed{-webkit-transform:translateX(-105%);transform:translateX(-105%)}.side-nav.fixed.right-aligned{-webkit-transform:translateX(105%);transform:translateX(105%)}}.side-nav .collapsible{margin:1rem 0 0;padding:0}.side-nav .collapsible li a:hover{background-color:rgba(0,0,0,.15)}.side-nav .collapsible>li{border-radius:2px}.side-nav .collapsible>li a.collapsible-header.active,.side-nav .collapsible>li a.collapsible-header:hover{background-color:rgba(255,255,255,.15)}.side-nav .collapsible ul{padding:0;list-style-type:none}.side-nav .collapsible a{color:#fff;font-weight:300;font-size:.8rem;height:36px;line-height:36px}.side-nav .collapsible a.active,.side-nav .collapsible a:hover{border-radius:2px}.side-nav .collapsible .fab,.side-nav .collapsible .far,.side-nav .collapsible .fas{font-size:.8rem;margin-right:13px}.side-nav .collapsible-body a{padding-left:47px;height:36px;line-height:36px;background-color:rgba(0,0,0,.15)}.side-nav a{display:block;font-size:1rem;height:56px;line-height:56px;padding-left:20px}.side-nav .fa-angle-down.rotate-icon{position:absolute;right:0;top:.8rem;margin-right:1.25rem}.side-nav .sidenav-bg{top:0;bottom:0;left:0;right:0;width:15rem;z-index:-1;background-attachment:fixed;position:fixed}.side-nav .sidenav-bg:after{width:100%;display:block;content:\"\";position:absolute;height:100%;top:0;left:0;bottom:0;z-index:-1;margin-bottom:-99999px;padding-bottom:99999px}.side-nav .logo-wrapper{border-bottom:1px solid rgba(153,153,153,.3);height:8.75rem}.side-nav .logo-wrapper a{height:8.75rem;width:15rem;padding:0}.side-nav .logo-wrapper img{height:auto;padding:20% 50px}@media (max-height:992px){.side-nav .logo-wrapper,.side-nav .logo-wrapper a{height:80px}.side-nav .logo-wrapper img{padding-top:7%;padding-bottom:7%}}.side-nav .logo-wrapper.sn-avatar-wrapper{padding:10% 33%}.side-nav .logo-wrapper.sn-avatar-wrapper img{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);margin:0;padding:0;max-width:90px}@media only screen and (max-height:992px){.side-nav .logo-wrapper.sn-avatar-wrapper{padding-left:40%;padding-right:40%}.side-nav .logo-wrapper.sn-avatar-wrapper img{max-width:50px}}.side-nav .logo-wrapper.sn-ad-avatar-wrapper{height:auto;margin-bottom:0}.side-nav .logo-wrapper.sn-ad-avatar-wrapper img{max-width:3.75rem;padding:1.25rem .63rem;float:left}.side-nav .logo-wrapper.sn-ad-avatar-wrapper p{font-size:.94rem;padding-top:1.25rem;padding-bottom:1.25rem;margin:0}.side-nav .about{padding:1rem;border-bottom:1px solid rgba(255,255,255,.65)}.side-nav .about p{margin-bottom:0;text-align:center}.side-nav .social{padding-top:0;text-align:center;border-bottom:1px solid rgba(255,255,255,.65)}.side-nav .social li{display:inline-block;padding-top:.6rem;padding-bottom:.6rem;margin:0}.side-nav .social a{margin:0;padding:0}.side-nav .social .fab,.side-nav .social .far,.side-nav .social .fas{font-size:.9rem;padding-right:.6rem;padding-left:.6rem;color:#dbe4e7;-webkit-transition:.3s;transition:.3s}.side-nav .social .fab:hover,.side-nav .social .far:hover,.side-nav .social .fas:hover{color:#afc4cb;-webkit-transition:.3s;transition:.3s}.side-nav .search-form{padding:0}.side-nav .search-form input[type=text]{border-bottom:1px solid rgba(255,255,255,.65);font-weight:300;padding-left:1.88rem}.side-nav .search-form input[type=text]::-webkit-input-placeholder{color:#fff}.side-nav .search-form input[type=text]::-moz-placeholder{color:#fff}.side-nav .search-form input[type=text]::-ms-input-placeholder{color:#fff}.side-nav .search-form input[type=text]::placeholder{color:#fff}.side-nav .search-form .form-control{color:#fff;margin-bottom:0}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}#sidenav-overlay{position:fixed;top:0;left:0;right:0;height:120vh;background-color:rgba(0,0,0,.5);z-index:997;will-change:opacity;-webkit-transition:.5s;transition:.5s}.transform-fix-input{-webkit-transform:translateX(0)!important;transform:translateX(0)!important}.side-nav{-webkit-transition:.5s;transition:.5s;background-color:#2c2f34;overflow-y:auto}.side-nav .sidenav-bg::after{margin-bottom:unset;padding-bottom:unset}.side-nav.side-nav-right{left:auto;right:0!important}.side-nav.side-nav-light{background-color:#e5e5e5}.side-nav.side-nav-light .collapsible .card .card-header a h5{color:#555}.side-nav.side-nav-light .collapsible .card .card-header a:hover{background-color:rgba(0,0,0,.05)}.side-nav.side-nav-light .collapsible .card.active .card-header a{background-color:transparent}.side-nav.side-nav-light .collapsible .card.active .card-header a h5,.side-nav.side-nav-light .collapsible .card.active .card-header a h5 i{color:#4285f4}.side-nav.side-nav-light .collapsible .card-body li a{color:#555;background-color:rgba(0,0,0,.1)}.side-nav.side-nav-light .collapsible .card-body li a:hover{background-color:rgba(0,0,0,.15)}.side-nav.side-nav-light a{color:#555;font-weight:400}.side-nav.side-nav-light a .fa{color:#555}.side-nav.side-nav-light input[type=text]{border-bottom-color:rgba(153,153,153,.3);color:#555!important}.side-nav.side-nav-light input[type=text]::-webkit-input-placeholder{color:#555!important}.side-nav.side-nav-light input[type=text]::-moz-placeholder{color:#555!important}.side-nav.side-nav-light input[type=text]:-ms-input-placeholder{color:#555!important}.side-nav.side-nav-light input[type=text]:-moz-placeholder{color:#555!important}.side-nav::-webkit-scrollbar{width:4px;height:4px}.side-nav::-webkit-scrollbar-button:end:increment,.side-nav::-webkit-scrollbar-button:start:decrement{display:block;height:0;background-color:transparent}.side-nav::-webkit-scrollbar-track-piece{background-color:transparent;border-radius:0 0 4px 4px}.side-nav::-webkit-scrollbar-thumb:vertical{height:50px;background-color:#999;border-radius:4px}.side-nav input[type=text]:focus:not([readonly]){border-bottom:1px solid #4285f4;box-shadow:0 1px 0 0 #4285f4}.side-nav .collapsible .no-collase .rotate-icon{display:none}.side-nav .collapsible .card{background-color:transparent;border-bottom:0!important}.side-nav .collapsible .card .card-header{padding:0!important}.side-nav .collapsible .card .card-header a{-webkit-transition:.3s;transition:.3s;height:40px;line-height:40px;border-radius:2px;padding:0}.side-nav .collapsible .card .card-header a h5{padding-left:20px;font-size:.8rem;line-height:40px;font-weight:300;position:relative;color:#fff}.side-nav .collapsible .card .card-header a .fa{font-size:.8rem;margin-right:13px;padding:0}.side-nav .collapsible .card .card-header a .rotate-icon{top:13px;margin-right:20px}.side-nav .collapsible .card.active>mdb-accordion-item-head{background:rgba(255,255,255,.15)}.side-nav .collapsible .card.active .card-header a h5{font-weight:300}.side-nav .collapsible .card-body{padding:0!important}.side-nav .collapsible .card-body li a{background-color:rgba(0,0,0,.15);font-size:.8rem;line-height:32px;height:32px;padding-left:47px;font-weight:300;color:#fff;display:block}.side-nav .collapsible .card-body li:first-of-type{border-top:0!important;margin-top:0}.side-nav.wide{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.2s,.2s,.35s;transition-duration:.2s,.2s,.35s;-webkit-transition-timing-function:linear,linear,ease;transition-timing-function:linear,linear,ease}.side-nav.wide .slim{width:3.75rem;-webkit-transition-property:top,bottom,width;transition-property:top,bottom,width;-webkit-transition-duration:.2s,.2s,.35s;transition-duration:.2s,.2s,.35s;-webkit-transition-timing-function:linear,linear,ease;transition-timing-function:linear,linear,ease;right:3.75rem}.side-nav.wide .slim .collapsible a{padding-left:23px;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}.side-nav.wide .slim .collapsible a .sv-normal{opacity:0;-webkit-transition:.1s linear;transition:.1s linear}.side-nav.wide .slim .collapsible a .sv-slim{display:block;opacity:1;-webkit-transition:.1s linear;transition:.1s linear}.side-nav.wide .slim .collapsible .sv-slim-icon{padding-left:0;width:30px;height:36px;text-align:left;margin-right:0}.side-nav.wide .slim .fa-angle-down.rotate-icon{opacity:0;display:none}.slim .mdb-accordion-indicator{display:none}doublenavbar #sidenav-overlay,doublenavbar .side-nav{-webkit-transition:.2s;transition:.2s}doublenavbar links,doublenavbar navlinks{display:-webkit-box;display:flex}header{height:0!important}@media all and (min-width:992px){.double-nav logo{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center!important;align-items:center!important;align-self:center!important;width:100%!important}.double-nav .navbar-brand img{margin-top:2px}}@media (max-width:1440px){.double-nav .button-collapse{display:block;left:10px;top:25%;font-size:1.4rem;margin-top:-2px!important;margin-right:10px;margin-left:10px}}.double-nav .button-collapse-non-fixed{left:10px;font-size:1.5rem}@media (min-width:1440px){.double-nav .button-collapse-non-fixed{display:none}}@media all and (max-width:599px){.double-nav .button-collapse-non-fixed{margin-top:-6px}}@media (max-width:1440px){.double-nav .button-collapse-non-fixed{display:block;left:10px;top:15px;font-size:1.4rem;margin-right:10px;margin-left:10px}}.double-nav .hidden-nav-button-collapse{display:block!important}@media all and (min-width:600px) and (max-width:993px){.double-nav .button-collapse-non-fixed{top:10px;margin-top:5px}.double-nav .button-collapse-non-fixed.hidden-nav>i{top:5px!important;margin-top:-5px!important}.double-nav .hidden-nav-button-collapse{top:25%;margin-top:-3px}}@media all and (min-width:994px){.double-nav .hidden-nav-button-collapse{margin-top:-3px}}.double-nav .hidden-nav{display:block;top:13px;left:10px;font-size:1.5rem;margin-left:10px}.double-nav .dropdown .dropdown-menu{margin-left:-68px;display:none;position:absolute;-webkit-transform:translate3d(6px,49px,0);transform:translate3d(6px,49px,0);top:0;left:0;will-change:transform}.double-nav .mega-menu{margin-left:0!important;left:240px!important;width:calc(100% - 240px)!important}@media (max-width:1440px){.double-nav .mega-menu{left:0!important;width:100%!important}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ie-hidden-double-nav{box-sizing:content-box;max-height:40.5px}.breadcrumbs{margin-left:25px!important;margin-top:2px}.breadcrumbs img{margin-left:20px}.ie-double-nav{position:absolute;top:30%;right:0}nav.double-nav{min-height:50px!important}.nav-link{padding-top:0!important;padding-bottom:0!important}.button-collapse,.button-collapse-non-fixed{position:absolute;top:30%!important}.hidden-nav-button-collapse{position:absolute}}@media all and (-ms-high-contrast:none) and (max-width:599px),(-ms-high-contrast:active) and (max-width:599px){.ie-double-nav{margin-top:-4px}.ie-hidden-double-nav .ie-double-nav{margin-top:0}.button-collapse,.button-collapse-non-fixed{top:5px!important;margin-left:0!important;margin-right:0!important}}@media all and (-ms-high-contrast:none) and (min-width:600px) and (max-width:992px),(-ms-high-contrast:active) and (min-width:600px) and (max-width:992px){.button-collapse-non-fixed{margin-top:-4px!important}.button-collapse{margin-top:-6px!important}.ie-double-nav{margin-top:0!important}.hidden-nav-button-collapse i{margin-top:10px!important}.breadcrumbs p{margin-top:-8px!important}}@media all and (-ms-high-contrast:none) and (min-width:993px) and (max-width:1441px),(-ms-high-contrast:active) and (min-width:993px) and (max-width:1441px){.button-collapse,.button-collapse-non-fixed{margin-top:-6px!important}.breadcrumbs>p{margin-top:-2px!important}.navbar-brand>img{margin-top:-2px}.breadcrumbs-non-fixed p{margin-top:2px!important}.hidden-nav-button-collapse{position:absolute!important;margin-left:10px!important}}@media all and (-ms-high-contrast:none) and (min-width:1441px),(-ms-high-contrast:active) and (min-width:1441px){.hidden-nav-button-collapse{position:absolute!important;margin-left:10px!important}.button-collapse-non-fixed{margin-top:-5px}.breadcrumbs>.navbar-brand img{margin-top:-2px}}@supports (-ms-ime-align:auto){.ie-hidden-double-nav{box-sizing:content-box;max-height:40.5px}.breadcrumbs{margin-left:25px!important;margin-top:2px}.breadcrumbs img{margin-left:20px}.ie-double-nav{position:absolute;top:30%;right:0}nav.double-nav{min-height:50px!important}.nav-link{padding-top:0!important;padding-bottom:0!important}.button-collapse,.button-collapse-non-fixed{position:absolute;top:30%!important}.hidden-nav-button-collapse{position:absolute}@media all and (max-width:599px){.ie-double-nav{margin-top:-4px}.ie-hidden-double-nav .ie-double-nav{margin-top:0}.button-collapse,.button-collapse-non-fixed{top:5px!important;margin-left:0!important;margin-right:0!important}}@media all and (min-width:600px) and (max-width:992px){.button-collapse-non-fixed{margin-top:-4px!important}.button-collapse{margin-top:-6px!important}.ie-double-nav{margin-top:0!important}.hidden-nav-button-collapse i{margin-top:10px!important}.breadcrumbs p{margin-top:-8px!important}}@media all and (min-width:993px) and (max-width:1441px){.button-collapse,.button-collapse-non-fixed{margin-top:-6px!important}.breadcrumbs>p{margin-top:-2px!important}.breadcrumbs>.navbar-brand>img{margin-top:-2px}.breadcrumbs-non-fixed p{margin-top:2px!important}.hidden-nav-button-collapse{position:absolute!important;margin-left:10px!important}}@media all and (min-width:1441px){.hidden-nav-button-collapse{position:absolute!important;margin-left:10px!important}.button-collapse-non-fixed{margin-top:-5px}.breadcrumbs>.navbar-brand img{margin-top:-2px}}}"]
        }),
        __param(0, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [String, ElementRef,
            Renderer2,
            ChangeDetectorRef])
    ], SidenavComponent);
    return SidenavComponent;
}());
export { SidenavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVMzRDtJQWdDRSwwQkFDdUIsVUFBa0IsRUFDaEMsRUFBYyxFQUNkLFFBQW1CLEVBQ2xCLE1BQXlCO1FBRjFCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBakM1QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixjQUFTLEdBQVEsS0FBSyxDQUFDO1FBRXRCLHNCQUFpQixHQUFHLG1CQUFtQixDQUFDO1FBR2hDLFVBQUssR0FBRyxJQUFJLENBQUM7UUFtQnJCLFVBQUssR0FBRyxNQUFNLENBQUM7UUFVckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBMUJELHNCQUFJLGtDQUFJO2FBQVI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQUVELFVBQVMsUUFBZ0I7WUFDdkIsSUFBSSxRQUFRLEtBQUssTUFBTSxFQUFFO2dCQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsbUJBQW1CLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7YUFDekU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGtCQUFrQixDQUFDO2dCQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2FBQ3RFO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDeEIsQ0FBQzs7O09BWEE7SUEwQkQsbUNBQVEsR0FBUjtRQUNFLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3pFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7U0FDdEU7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDdEMsSUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDckQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXZFLElBQUkscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO1lBRTlCLElBQUksV0FBVyxFQUFFO2dCQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMvQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFO3dCQUN2RCxTQUFTO3FCQUNWO3lCQUFNO3dCQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs0QkFDM0QscUJBQXFCLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7eUJBQ3RFO3FCQUNGO2lCQUNGO2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUscUJBQXFCLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ3RGO1lBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBRXRDLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFFbEQsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBRTt3QkFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUN4RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQ25GLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3RCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUNsRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDckI7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUN4RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ25GLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RCO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBRWxELElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUU7d0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN0Qjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQzdFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3JCO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7b0JBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBR0Qsd0NBQWEsR0FBYjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN0QyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNkLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7d0JBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN0QjtvQkFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTt3QkFDN0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUM3RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3JCO3lCQUFNLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTt3QkFDdEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUM3RSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7d0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3JCO2lCQUNGO3FCQUFNO29CQUNMLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTt3QkFDL0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUN4RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQ25GLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdEI7aUJBQ0Y7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxZQUFZLEVBQUU7b0JBQ3BELElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUU7d0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN0QjtvQkFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7d0JBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUNsRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDN0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3dCQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNyQjt5QkFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxFQUFFO3dCQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQzdFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDckI7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLFlBQVksRUFBRTt3QkFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUN4RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQ25GLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdEI7aUJBQ0Y7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDZCxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO3dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQzdFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztxQkFDcEI7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNyQjtpQkFDRjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7b0JBQzdFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDcEI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRTt3QkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7d0JBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7cUJBQ3BCO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO3dCQUNsRixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDckI7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixDQUFDLENBQUM7b0JBQ2xGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3BCO2FBQ0Y7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtvQkFDZCxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO3dCQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQ3hGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDbkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO3FCQUNwQjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQ3hGLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQzt3QkFDbkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdEI7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUN4RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7b0JBQ25GLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDcEI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ2QsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRTt3QkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUN4RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQ25GLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztxQkFDcEI7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO3dCQUN4RixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7d0JBQ25GLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDeEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7aUJBQ3BCO2FBQ0Y7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELGlDQUFNLEdBQU47UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRU0scUNBQVUsR0FBakI7UUFBQSxpQkF3QkM7UUF2QkMsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFFLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFFckMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQU87WUFDM0IsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzthQUMvQztpQkFBTTtnQkFDTCxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQzthQUNsRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUV0RSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbkQ7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkUsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDbkUsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3hFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsS0FBYztRQUF2QixpQkFJQztRQUhDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN2RDthQUFNLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs2Q0FuU0UsTUFBTSxTQUFDLFdBQVc7Z0JBQ1IsVUFBVTtnQkFDSixTQUFTO2dCQUNWLGlCQUFpQjs7SUE1QjFCO1FBQVIsS0FBSyxFQUFFOzttREFBc0I7SUFDckI7UUFBUixLQUFLLEVBQUU7O21EQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs7K0RBQXdCO0lBR2hDO1FBREMsS0FBSyxFQUFFOzs7Z0RBR1A7SUFjdUM7UUFBdkMsU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBaUIsVUFBVTtxREFBQztJQUMzQjtRQUF2QyxTQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOztxREFBcUI7SUFzRjVEO1FBREMsWUFBWSxDQUFDLGVBQWUsQ0FBQzs7Ozt5REE2RDdCO0lBaExVLGdCQUFnQjtRQVA1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLG1QQUFxQztZQUVyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQztRQWtDRyxXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtpREFDVCxVQUFVO1lBQ0osU0FBUztZQUNWLGlCQUFpQjtPQXBDeEIsZ0JBQWdCLENBcVU1QjtJQUFELHVCQUFDO0NBQUEsQUFyVUQsSUFxVUM7U0FyVVksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBQTEFURk9STV9JRCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi8uLi8uLi9mcmVlL3V0aWxzL2ZhY2FkZS9icm93c2VyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNpZGVuYXYsIG1kYi1zaWRlLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NpZGVuYXYtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIHB1YmxpYyB3aW5kd29zV2lkdGg6IG51bWJlcjtcbiAgcHVibGljIHNob3duOiBib29sZWFuO1xuICBwdWJsaWMgc2xpbVNpZGVuYXYgPSBmYWxzZTtcbiAgcHVibGljIGlzQnJvd3NlcjogYW55ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfc2lkZW5hdlRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0xMDAlKSc7XG5cbiAgQElucHV0KCkgcHVibGljIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBmaXhlZCA9IHRydWU7XG4gIEBJbnB1dCgpIHNpZGVuYXZCcmVha3BvaW50OiBhbnk7XG5cbiAgQElucHV0KClcbiAgZ2V0IHNpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NpZGU7XG4gIH1cblxuICBzZXQgc2lkZShwb3NpdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKHBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMTAwJSknO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3NpZGUtbmF2LXJpZ2h0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgxMDAlKSc7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAnc2lkZS1uYXYtcmlnaHQnKTtcbiAgICB9XG4gICAgdGhpcy5fc2lkZSA9IHBvc2l0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2lkZSA9ICdsZWZ0JztcbiAgQFZpZXdDaGlsZCgnc2lkZW5hdicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBzaWRlTmF2OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdvdmVybGF5JywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIG92ZXJsYXk6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuc2lkZW5hdkJyZWFrcG9pbnQgJiYgdGhpcy5zaWRlbmF2QnJlYWtwb2ludCA+PSB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLl9zaWRlID09PSAncmlnaHQnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAnc2lkZS1uYXYtcmlnaHQnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBzaWRlbmF2ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgY29uc3Qgc2lkZW5hdkNoaWxkcmVuID0gc2lkZW5hdi5jaGlsZHJlblswXS5jaGlsZHJlbjtcbiAgICAgIGNvbnN0IHNpZGVuYXZNYXNrID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlbmF2LWJnJyk7XG5cbiAgICAgIGxldCBzaWRlbmF2Q2hpbGRyZW5IZWlnaHQgPSAwO1xuXG4gICAgICBpZiAoc2lkZW5hdk1hc2spIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWRlbmF2Q2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoc2lkZW5hdkNoaWxkcmVuW2ldLmNsYXNzTGlzdC5jb250YWlucygnc2lkZW5hdi1iZycpKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaWRlbmF2Q2hpbGRyZW5baV0uY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgc2lkZW5hdkNoaWxkcmVuSGVpZ2h0ICs9IHNpZGVuYXZDaGlsZHJlbltpXS5jaGlsZHJlbltqXS5zY3JvbGxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoc2lkZW5hdk1hc2ssICdtaW4taGVpZ2h0Jywgc2lkZW5hdkNoaWxkcmVuSGVpZ2h0ICsgMTYgKyAncHgnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy53aW5kd29zV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgaWYgKHRoaXMuc2lkZW5hdkJyZWFrcG9pbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdmaXhlZC1zbicpO1xuXG4gICAgICAgICAgaWYgKHRoaXMud2luZHdvc1dpZHRoIDwgK3RoaXMuc2lkZW5hdkJyZWFrcG9pbnQgKyAxKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bihmYWxzZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdoaWRkZW4tc24nKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICB0aGlzLnNldFNob3duKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdmaXhlZC1zbicpO1xuXG4gICAgICAgICAgaWYgKHRoaXMud2luZHdvc1dpZHRoIDwgMTQ0MSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24oZmFsc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bih0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5ib2R5LCAnaGlkZGVuLXNuJyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgdGhpcy5zZXRTaG93bihmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgd2luZHdvc1Jlc2l6ZSgpIHtcbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IHRoaXMud2luZHdvc1dpZHRoO1xuICAgICAgdGhpcy53aW5kd29zV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgIGlmICh0aGlzLnNpZGVuYXZCcmVha3BvaW50KSB7XG4gICAgICAgIGlmICh0aGlzLmZpeGVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMud2luZHdvc1dpZHRoIDwgK3RoaXMuc2lkZW5hdkJyZWFrcG9pbnQgKyAxKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bihmYWxzZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMud2luZHdvc1dpZHRoID4gK3RoaXMuc2lkZW5hdkJyZWFrcG9pbnQgJiYgdGhpcy5zaG93bikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24odHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLndpbmR3b3NXaWR0aCA+ICt0aGlzLnNpZGVuYXZCcmVha3BvaW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bih0cnVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMud2luZHdvc1dpZHRoID4gK3RoaXMuc2lkZW5hdkJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKGZhbHNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmZpeGVkICYmIHRoaXMud2luZHdvc1dpZHRoICE9PSBjdXJyZW50V2lkdGgpIHtcbiAgICAgICAgICBpZiAodGhpcy53aW5kd29zV2lkdGggPCAxNDQxKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bihmYWxzZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMud2luZHdvc1dpZHRoID4gMTQ0MCAmJiB0aGlzLnNob3duKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bih0cnVlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMud2luZHdvc1dpZHRoID4gMTQ0MCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24odHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLndpbmR3b3NXaWR0aCA+IDE0NDAgJiYgdGhpcy53aW5kd29zV2lkdGggIT09IGN1cnJlbnRXaWR0aCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24oZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBpZiAodGhpcy5zaWRlbmF2QnJlYWtwb2ludCkge1xuICAgICAgICBpZiAodGhpcy5maXhlZCkge1xuICAgICAgICAgIGlmICh0aGlzLndpbmR3b3NXaWR0aCA8ICt0aGlzLnNpZGVuYXZCcmVha3BvaW50ICsgMSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24odHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNob3dPdmVybGF5KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICB0aGlzLnNldFNob3duKHRydWUpO1xuICAgICAgICAgIHRoaXMuc2hvd092ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy53aW5kd29zV2lkdGggPCAxNDQxKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMCUpJyk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bih0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd092ZXJsYXkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24odHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWCgwJSknKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsICd0cmFuc2xhdGVYKDAlKScpO1xuICAgICAgICAgIHRoaXMuc2V0U2hvd24odHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zaG93T3ZlcmxheSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgaWYgKHRoaXMuc2lkZW5hdkJyZWFrcG9pbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZml4ZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy53aW5kd29zV2lkdGggPCArdGhpcy5zaWRlbmF2QnJlYWtwb2ludCArIDEpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3duKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24oZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICB0aGlzLnNldFNob3duKGZhbHNlKTtcbiAgICAgICAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmZpeGVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMud2luZHdvc1dpZHRoIDwgMTQ0MSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvd24oZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5oaWRlT3ZlcmxheSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAndHJhbnNmb3JtJywgdGhpcy5fc2lkZW5hdlRyYW5zZm9ybSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG93bihmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCB0aGlzLl9zaWRlbmF2VHJhbnNmb3JtKTtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3RyYW5zZm9ybScsIHRoaXMuX3NpZGVuYXZUcmFuc2Zvcm0pO1xuICAgICAgICAgIHRoaXMuc2V0U2hvd24oZmFsc2UpO1xuICAgICAgICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICh0aGlzLnNob3duKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZVNsaW0oKSB7XG4gICAgY29uc3Qgc2lkZW5hdk92ZXJsYXkgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVuYXYtYmcnKTtcbiAgICBjb25zdCBsaW5rc0hlYWRpbmcgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbWRiLWFjY29yZGlvbi1pdGVtLWhlYWQnKTtcbiAgICB0aGlzLnNsaW1TaWRlbmF2ID0gIXRoaXMuc2xpbVNpZGVuYXY7XG5cbiAgICBsaW5rc0hlYWRpbmcuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2xpbVNpZGVuYXYpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbCwgJ292ZXJmbG93LWhpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgJ292ZXJmbG93LWhpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnNpZGVOYXYubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93LWhpZGRlbicpO1xuXG4gICAgaWYgKHRoaXMuc2xpbVNpZGVuYXYpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5zaWRlTmF2Lm5hdGl2ZUVsZW1lbnQsICdzbGltJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHNpZGVuYXZPdmVybGF5LCAnc2xpbScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuc2lkZU5hdi5uYXRpdmVFbGVtZW50LCAnc2xpbScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhzaWRlbmF2T3ZlcmxheSwgJ3NsaW0nKTtcbiAgICB9XG5cbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHNob3dPdmVybGF5KCkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5vdmVybGF5Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheS5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcxJyk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBoaWRlT3ZlcmxheSgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheS5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcwJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheS5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIHNldFNob3duKHZhbHVlOiBib29sZWFuKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNob3duID0gdmFsdWU7XG4gICAgfSwgNTEwKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLXNuJykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2hpZGRlbi1zbicpO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpeGVkLXNuJykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2ZpeGVkLXNuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=