/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ElementRef, ViewChild, Input, Renderer2, HostListener } from '@angular/core';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(renderer, _navbarService) {
        var _this = this;
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this.containerInside = true;
        this.shown = false;
        this.duration = 350; // ms
        // ms
        this.collapse = true;
        this.showClass = false;
        this.collapsing = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(function (navbarLinkClicks) { _this.closeNavbarOnClick(navbarLinkClicks); });
    }
    /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    NavbarComponent.prototype.closeNavbarOnClick = /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    function (navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.addTogglerIconClasses = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.iconBackground) {
            if (Array.isArray(this.iconBackground)) {
                this.iconBackground.forEach(function (iconClass) {
                    _this.renderer.addClass(_this.toggler.nativeElement, iconClass);
                });
            }
            else {
                this.renderer.addClass(this.toggler.nativeElement, this.iconBackground);
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.containerInside) {
            /** @type {?} */
            var childrens = Array.from(this.container.nativeElement.children);
            childrens.forEach(function (child) {
                _this.renderer.appendChild(_this.navbar.nativeElement, child);
                _this.container.nativeElement.remove();
            });
        }
        if (this.el.nativeElement.children.length === 0) {
            this.el.nativeElement.remove();
        }
        this.addTogglerIconClasses();
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.show = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.height = _this.el.nativeElement.scrollHeight;
            _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
        }, 0);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
            _this.showClass = true;
        }, this.duration);
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.hide = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.shown = false;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
        }, 0);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
        }, this.duration);
    };
    Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.containerInside) {
                return 'flex';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        /** @type {?} */
        var breakpoit = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoit = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoit = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoit = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoit = 576;
        }
        else {
            breakpoit = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoit) {
            if (!this.shown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout(function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.collapse = true;
                    _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
                }, 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.onScroll = /**
     * @return {?}
     */
    function () {
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            if (window.pageYOffset > 120) {
                this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
            else {
                this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
        }
    };
    NavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mdb-navbar',
                    template: "<nav class=\"{{SideClass}}\" #nav>\n  <div [ngClass]=\"{'container': containerInside}\" [ngStyle]=\"{'display': displayStyle}\" #container>\n    <ng-content select=\"mdb-navbar-brand\"></ng-content>\n    <ng-content select=\"logo\"></ng-content>\n    <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content>\n    <div *ngIf=\"this.doubleNav == false\">\n      <button #toggler class=\"navbar-toggler\" type=\"button\" (click)=\"toggle(); $event.preventDefault()\" mdbWavesEffect *ngIf=\"this.el.nativeElement.children.length !== 0\">\n        <span class=\"navbar-toggler-icon\">\n        </span>\n      </button>\n    </div>\n    <div #navbar [style.height]=\"height\" class=\"navbar-collapse collapse\" [ngClass]=\"{'collapse': collapse, 'show': showClass, 'collapsing': collapsing}\">\n      <ng-content select=\"links\"></ng-content>\n    </div>\n  </div>\n</nav>"
                }] }
    ];
    /** @nocollapse */
    NavbarComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NavbarService }
    ]; };
    NavbarComponent.propDecorators = {
        iconBackground: [{ type: Input }],
        SideClass: [{ type: Input }],
        containerInside: [{ type: Input }],
        el: [{ type: ViewChild, args: ['navbar',] }],
        mobile: [{ type: ViewChild, args: ['mobile',] }],
        navbar: [{ type: ViewChild, args: ['nav',] }],
        container: [{ type: ViewChild, args: ['container',] }],
        toggler: [{ type: ViewChild, args: ['toggler',] }],
        onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
        onScroll: [{ type: HostListener, args: ['document:scroll',] }]
    };
    return NavbarComponent;
}());
export { NavbarComponent };
if (false) {
    /** @type {?} */
    NavbarComponent.prototype.iconBackground;
    /** @type {?} */
    NavbarComponent.prototype.SideClass;
    /** @type {?} */
    NavbarComponent.prototype.containerInside;
    /** @type {?} */
    NavbarComponent.prototype.subscription;
    /** @type {?} */
    NavbarComponent.prototype.navbarLinkClicks;
    /** @type {?} */
    NavbarComponent.prototype.shown;
    /** @type {?} */
    NavbarComponent.prototype.doubleNav;
    /** @type {?} */
    NavbarComponent.prototype.height;
    /** @type {?} */
    NavbarComponent.prototype.duration;
    /** @type {?} */
    NavbarComponent.prototype.collapse;
    /** @type {?} */
    NavbarComponent.prototype.showClass;
    /** @type {?} */
    NavbarComponent.prototype.collapsing;
    /** @type {?} */
    NavbarComponent.prototype.el;
    /** @type {?} */
    NavbarComponent.prototype.mobile;
    /** @type {?} */
    NavbarComponent.prototype.navbar;
    /** @type {?} */
    NavbarComponent.prototype.container;
    /** @type {?} */
    NavbarComponent.prototype.toggler;
    /** @type {?} */
    NavbarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NavbarComponent.prototype._navbarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL25hdmJhcnMvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFpQixZQUFZLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHeEg7SUEwQkUseUJBQW1CLFFBQW1CLEVBQVUsY0FBNkI7UUFBN0UsaUJBR0M7UUFIa0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBbEJwRSxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUdoQyxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBSVAsYUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUs7O1FBRXJCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBUXhCLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxnQkFBZ0IsSUFBTSxLQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlJLENBQUM7Ozs7O0lBRUQsNENBQWtCOzs7O0lBQWxCLFVBQW1CLGdCQUFxQjtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFDekMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OztJQUVE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O0lBQ3RCLGdDQUFjOztJQUVkLG9DQUEwQjs7SUFDMUIsaUNBQXNCOztJQUN0QixtQ0FBc0I7O0lBRXRCLG1DQUF1Qjs7SUFDdkIsb0NBQXlCOztJQUN6QixxQ0FBMEI7O0lBQzFCLDZCQUFvQzs7SUFDcEMsaUNBQXdDOztJQUN4QyxpQ0FBcUM7O0lBQ3JDLG9DQUE4Qzs7SUFDOUMsa0NBQTBDOztJQUU5QixtQ0FBMEI7Ozs7O0lBQUUseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyU2VydmljZSB9IGZyb20gJy4vbmF2YmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIElucHV0LCBSZW5kZXJlcjIsIEFmdGVyVmlld0luaXQsIEhvc3RMaXN0ZW5lciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLW5hdmJhcicsXG4gIHRlbXBsYXRlVXJsOiAnbmF2YmFyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBOYXZiYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuICBASW5wdXQoKSBpY29uQmFja2dyb3VuZDogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIFNpZGVDbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBjb250YWluZXJJbnNpZGUgPSB0cnVlO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgbmF2YmFyTGlua0NsaWNrczogYW55O1xuICBzaG93biA9IGZhbHNlO1xuXG4gIHB1YmxpYyBkb3VibGVOYXY6IGJvb2xlYW47XG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgcHVibGljIGR1cmF0aW9uID0gMzUwOyAvLyBtc1xuXG4gIHB1YmxpYyBjb2xsYXBzZSA9IHRydWU7XG4gIHB1YmxpYyBzaG93Q2xhc3MgPSBmYWxzZTtcbiAgcHVibGljIGNvbGxhcHNpbmcgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgnbmF2YmFyJykgZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21vYmlsZScpIG1vYmlsZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbmF2JykgbmF2YmFyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RvZ2dsZXInKSB0b2dnbGVyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIF9uYXZiYXJTZXJ2aWNlOiBOYXZiYXJTZXJ2aWNlKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5fbmF2YmFyU2VydmljZS5nZXROYXZiYXJMaW5rQ2xpY2tzKCkuc3Vic2NyaWJlKG5hdmJhckxpbmtDbGlja3MgPT4geyB0aGlzLmNsb3NlTmF2YmFyT25DbGljayhuYXZiYXJMaW5rQ2xpY2tzKTsgfSk7XG4gIH1cblxuICBjbG9zZU5hdmJhck9uQ2xpY2sobmF2YmFyTGlua0NsaWNrczogYW55KSB7XG4gICAgdGhpcy5uYXZiYXJMaW5rQ2xpY2tzID0gbmF2YmFyTGlua0NsaWNrcztcbiAgICBpZiAodGhpcy5zaG93Q2xhc3MpIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvZ2dsZXJJY29uQ2xhc3NlcygpIHtcbiAgICBpZiAodGhpcy5pY29uQmFja2dyb3VuZCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5pY29uQmFja2dyb3VuZCkpIHtcbiAgICAgICAgdGhpcy5pY29uQmFja2dyb3VuZC5mb3JFYWNoKChpY29uQ2xhc3MpID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMudG9nZ2xlci5uYXRpdmVFbGVtZW50LCBpY29uQ2xhc3MpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50b2dnbGVyLm5hdGl2ZUVsZW1lbnQsIHRoaXMuaWNvbkJhY2tncm91bmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGlzRG91YmxlTmF2ID0gdGhpcy5TaWRlQ2xhc3Muc3BsaXQoJyAnKTtcbiAgICBpZiAoaXNEb3VibGVOYXYuaW5kZXhPZignZG91YmxlLW5hdicpICE9PSAtMSkge1xuICAgICAgdGhpcy5kb3VibGVOYXYgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvdWJsZU5hdiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lckluc2lkZSkge1xuICAgICAgICBjb25zdCBjaGlsZHJlbnMgPSBBcnJheS5mcm9tKHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICBjaGlsZHJlbnMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLm5hdmJhci5uYXRpdmVFbGVtZW50LCBjaGlsZCk7XG4gICAgICAgICAgdGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgdGhpcy5hZGRUb2dnbGVySWNvbkNsYXNzZXMoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoIXRoaXMuY29sbGFwc2luZykge1xuICAgICAgaWYgKHRoaXMuc2hvd24pIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuc2hvd24gPSB0cnVlO1xuICAgIHRoaXMuY29sbGFwc2UgPSBmYWxzZTtcbiAgICB0aGlzLmNvbGxhcHNpbmcgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgJ3B4Jyk7XG4gICAgfSwgMCk7XG5cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbGxhcHNlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2hvd0NsYXNzID0gdHJ1ZTtcbiAgICB9LCB0aGlzLmR1cmF0aW9uKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5zaG93biA9IGZhbHNlO1xuICAgIHRoaXMuY29sbGFwc2UgPSBmYWxzZTtcbiAgICB0aGlzLnNob3dDbGFzcyA9IGZhbHNlO1xuICAgIHRoaXMuY29sbGFwc2luZyA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICcwcHgnKTtcbiAgICB9LCAwKTtcblxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbGxhcHNpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sbGFwc2UgPSB0cnVlO1xuICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlTdHlsZSgpIHtcbiAgICBpZiAoIXRoaXMuY29udGFpbmVySW5zaWRlKSB7XG4gICAgICByZXR1cm4gJ2ZsZXgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pIG9uUmVzaXplKGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgYnJlYWtwb2l0ID0gMDtcblxuICAgIGlmICh0aGlzLlNpZGVDbGFzcy5pbmNsdWRlcygnbmF2YmFyLWV4cGFuZC14bCcpKSB7XG4gICAgICBicmVha3BvaXQgPSAxMjAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5TaWRlQ2xhc3MuaW5jbHVkZXMoJ25hdmJhci1leHBhbmQtbGcnKSkge1xuICAgICAgYnJlYWtwb2l0ID0gOTkyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5TaWRlQ2xhc3MuaW5jbHVkZXMoJ25hdmJhci1leHBhbmQtbWQnKSkge1xuICAgICAgYnJlYWtwb2l0ID0gNzY4O1xuICAgIH0gZWxzZSBpZiAodGhpcy5TaWRlQ2xhc3MuaW5jbHVkZXMoJ25hdmJhci1leHBhbmQtc20nKSkge1xuICAgICAgYnJlYWtwb2l0ID0gNTc2O1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVha3BvaXQgPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aCArIDE7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoIDwgYnJlYWtwb2l0KSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd24pIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICcwcHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdvcGFjaXR5JywgJzAnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgIHRoaXMuY29sbGFwc2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcnKTtcbiAgICAgICAgfSwgNCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93Q2xhc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sbGFwc2UgPSB0cnVlO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnJyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6c2Nyb2xsJykgb25TY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMubmF2YmFyLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzY3JvbGxpbmctbmF2YmFyJykpIHtcbiAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPiAxMjApIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLm5hdmJhci5uYXRpdmVFbGVtZW50LCAndG9wLW5hdi1jb2xsYXBzZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLm5hdmJhci5uYXRpdmVFbGVtZW50LCAndG9wLW5hdi1jb2xsYXBzZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19