/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NavbarService } from './navbar.service';
import { Component, ElementRef, ViewChild, Input, Renderer2, HostListener, ContentChild } from '@angular/core';
import { LinksComponent } from './links.component';
export class NavbarComponent {
    /**
     * @param {?} renderer
     * @param {?} _navbarService
     */
    constructor(renderer, _navbarService) {
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this.containerInside = true;
        this.collapseId = 'navbarCollapse';
        this.shown = false;
        this.duration = 350; // ms
        // ms
        this.collapse = true;
        this.showClass = false;
        this.collapsing = false;
        this._itemsLength = 0;
        this.ariaExpanded = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe((/**
         * @param {?} navbarLinkClicks
         * @return {?}
         */
        navbarLinkClicks => {
            this.closeNavbarOnClick(navbarLinkClicks);
        }));
    }
    /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    closeNavbarOnClick(navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    addTogglerIconClasses() {
        if (this.iconBackground) {
            if (Array.isArray(this.iconBackground)) {
                this.iconBackground.forEach((/**
                 * @param {?} iconClass
                 * @return {?}
                 */
                (iconClass) => {
                    this.renderer.addClass(this.toggler.nativeElement, iconClass);
                }));
            }
            else {
                this.renderer.addClass(this.toggler.nativeElement, this.iconBackground);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.containerInside) {
            /** @type {?} */
            const childrens = Array.from(this.container.nativeElement.children);
            childrens.forEach((/**
             * @param {?} child
             * @return {?}
             */
            child => {
                this.renderer.appendChild(this.navbar.nativeElement, child);
                this.container.nativeElement.remove();
            }));
        }
        if (this.el.nativeElement.children.length === 0) {
            this.el.nativeElement.remove();
        }
        this.addTogglerIconClasses();
    }
    /**
     * @return {?}
     */
    toggle() {
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    }
    /**
     * @return {?}
     */
    show() {
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        this.ariaExpanded = true;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.height = this.el.nativeElement.scrollHeight;
            this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px');
        }), 0);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.collapsing = false;
            this.collapse = true;
            this.showClass = true;
        }), this.duration);
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.shown) {
            this.shown = false;
            this.collapse = false;
            this.showClass = false;
            this.collapsing = true;
            this.ariaExpanded = false;
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
            }), 0);
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.collapsing = false;
                this.collapse = true;
            }), this.duration);
        }
    }
    /**
     * @return {?}
     */
    get displayStyle() {
        if (!this.containerInside) {
            return 'flex';
        }
        else {
            return '';
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        /** @type {?} */
        let breakpoit = 0;
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
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.height = this.el.nativeElement.scrollHeight;
                    this.collapse = true;
                    this.renderer.setStyle(this.el.nativeElement, 'opacity', '');
                }), 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.ariaExpanded = false;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    }
    /**
     * @return {?}
     */
    onScroll() {
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            if (window.pageYOffset > 120) {
                this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
            else {
                this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        if (this.el.nativeElement.firstElementChild) {
            if (this._itemsLength !== this.el.nativeElement.firstElementChild.firstElementChild.children.length) {
                this.height = this.el.nativeElement.firstElementChild.firstElementChild.clientHeight;
                this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px');
            }
            this._itemsLength = this.el.nativeElement.firstElementChild.firstElementChild.children.length;
        }
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-navbar',
                template: "<nav class=\"{{SideClass}}\" #nav>\n  <div [ngClass]=\"{'container': containerInside}\" [ngStyle]=\"{'display': displayStyle}\" #container>\n      <ng-content select=\"mdb-navbar-brand\"></ng-content>\n      <ng-content select=\"logo\"></ng-content>\n      <ng-content></ng-content>\n    <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content>\n    <div *ngIf=\"this.doubleNav == false\">\n      <button #toggler class=\"navbar-toggler\" type=\"button\" [attr.aria-controls]=\"collapseId\" [attr.aria-expanded]=\"ariaExpanded\" aria-label=\"Toggle navigation\" (click)=\"toggle(); $event.preventDefault()\" mdbWavesEffect *ngIf=\"this.el.nativeElement.children.length !== 0\">\n        <span class=\"navbar-toggler-icon\">\n        </span>\n      </button>\n    </div>\n    <div #navbar [attr.id]=\"collapseId\" [style.height]=\"height\" class=\"navbar-collapse collapse\" [ngClass]=\"{'collapse': collapse, 'show': showClass, 'collapsing': collapsing}\">\n      <ng-content select=\"links\"></ng-content>\n    </div>\n  </div>\n</nav>\n"
            }] }
];
/** @nocollapse */
NavbarComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NavbarService }
];
NavbarComponent.propDecorators = {
    iconBackground: [{ type: Input }],
    SideClass: [{ type: Input }],
    containerInside: [{ type: Input }],
    collapseId: [{ type: Input }],
    el: [{ type: ViewChild, args: ['navbar',] }],
    mobile: [{ type: ViewChild, args: ['mobile',] }],
    navbar: [{ type: ViewChild, args: ['nav',] }],
    container: [{ type: ViewChild, args: ['container',] }],
    toggler: [{ type: ViewChild, args: ['toggler',] }],
    links: [{ type: ContentChild, args: [LinksComponent,] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
    onScroll: [{ type: HostListener, args: ['document:scroll',] }]
};
if (false) {
    /** @type {?} */
    NavbarComponent.prototype.iconBackground;
    /** @type {?} */
    NavbarComponent.prototype.SideClass;
    /** @type {?} */
    NavbarComponent.prototype.containerInside;
    /** @type {?} */
    NavbarComponent.prototype.collapseId;
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
    /**
     * @type {?}
     * @private
     */
    NavbarComponent.prototype._itemsLength;
    /** @type {?} */
    NavbarComponent.prototype.ariaExpanded;
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
    NavbarComponent.prototype.links;
    /** @type {?} */
    NavbarComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NavbarComponent.prototype._navbarService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL25hdmJhcnMvbmF2YmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUVULFlBQVksRUFFWixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBT2pELE1BQU0sT0FBTyxlQUFlOzs7OztJQTRCMUIsWUFBbUIsUUFBbUIsRUFBVSxjQUE2QjtRQUExRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUF6QnBFLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxnQkFBZ0IsQ0FBQztRQUd2QyxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBSVAsYUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUs7O1FBRXJCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRXpCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBVW5CLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUN6RixJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsa0JB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QUNyQyxvQ0FBOEM7O0lBQzlDLGtDQUEwQzs7SUFDMUMsZ0NBQW9EOztJQUV4QyxtQ0FBMEI7Ozs7O0lBQUUseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOYXZiYXJTZXJ2aWNlfSBmcm9tICcuL25hdmJhci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBBZnRlclZpZXdJbml0LFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbiAgQ29udGVudENoaWxkLCBBZnRlckNvbnRlbnRDaGVja2VkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtMaW5rc0NvbXBvbmVudH0gZnJvbSAnLi9saW5rcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItbmF2YmFyJyxcbiAgdGVtcGxhdGVVcmw6ICduYXZiYXIuY29tcG9uZW50Lmh0bWwnLFxufSlcblxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGljb25CYWNrZ3JvdW5kOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgU2lkZUNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbnRhaW5lckluc2lkZSA9IHRydWU7XG4gIEBJbnB1dCgpIGNvbGxhcHNlSWQgPSAnbmF2YmFyQ29sbGFwc2UnO1xuICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgbmF2YmFyTGlua0NsaWNrczogYW55O1xuICBzaG93biA9IGZhbHNlO1xuXG4gIHB1YmxpYyBkb3VibGVOYXY6IGJvb2xlYW47XG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcbiAgcHVibGljIGR1cmF0aW9uID0gMzUwOyAvLyBtc1xuXG4gIHB1YmxpYyBjb2xsYXBzZSA9IHRydWU7XG4gIHB1YmxpYyBzaG93Q2xhc3MgPSBmYWxzZTtcbiAgcHVibGljIGNvbGxhcHNpbmcgPSBmYWxzZTtcblxuICBwcml2YXRlIF9pdGVtc0xlbmd0aCA9IDA7XG5cbiAgYXJpYUV4cGFuZGVkID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnbmF2YmFyJykgZWw6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21vYmlsZScpIG1vYmlsZTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnbmF2JykgbmF2YmFyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKSBjb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RvZ2dsZXInKSB0b2dnbGVyOiBFbGVtZW50UmVmO1xuICBAQ29udGVudENoaWxkKExpbmtzQ29tcG9uZW50KSBsaW5rczogTGlua3NDb21wb25lbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgX25hdmJhclNlcnZpY2U6IE5hdmJhclNlcnZpY2UpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLl9uYXZiYXJTZXJ2aWNlLmdldE5hdmJhckxpbmtDbGlja3MoKS5zdWJzY3JpYmUobmF2YmFyTGlua0NsaWNrcyA9PiB7XG4gICAgICB0aGlzLmNsb3NlTmF2YmFyT25DbGljayhuYXZiYXJMaW5rQ2xpY2tzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlTmF2YmFyT25DbGljayhuYXZiYXJMaW5rQ2xpY2tzOiBhbnkpIHtcbiAgICB0aGlzLm5hdmJhckxpbmtDbGlja3MgPSBuYXZiYXJMaW5rQ2xpY2tzO1xuICAgIGlmICh0aGlzLnNob3dDbGFzcykge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVG9nZ2xlckljb25DbGFzc2VzKCkge1xuICAgIGlmICh0aGlzLmljb25CYWNrZ3JvdW5kKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmljb25CYWNrZ3JvdW5kKSkge1xuICAgICAgICB0aGlzLmljb25CYWNrZ3JvdW5kLmZvckVhY2goKGljb25DbGFzcykgPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy50b2dnbGVyLm5hdGl2ZUVsZW1lbnQsIGljb25DbGFzcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRvZ2dsZXIubmF0aXZlRWxlbWVudCwgdGhpcy5pY29uQmFja2dyb3VuZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc3QgaXNEb3VibGVOYXYgPSB0aGlzLlNpZGVDbGFzcy5zcGxpdCgnICcpO1xuICAgIGlmIChpc0RvdWJsZU5hdi5pbmRleE9mKCdkb3VibGUtbmF2JykgIT09IC0xKSB7XG4gICAgICB0aGlzLmRvdWJsZU5hdiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG91YmxlTmF2ID0gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lckluc2lkZSkge1xuICAgICAgY29uc3QgY2hpbGRyZW5zID0gQXJyYXkuZnJvbSh0aGlzLmNvbnRhaW5lci5uYXRpdmVFbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgIGNoaWxkcmVucy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLm5hdmJhci5uYXRpdmVFbGVtZW50LCBjaGlsZCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5yZW1vdmUoKTtcbiAgICB9XG4gICAgdGhpcy5hZGRUb2dnbGVySWNvbkNsYXNzZXMoKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICBpZiAoIXRoaXMuY29sbGFwc2luZykge1xuICAgICAgaWYgKHRoaXMuc2hvd24pIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuc2hvd24gPSB0cnVlO1xuICAgIHRoaXMuY29sbGFwc2UgPSBmYWxzZTtcbiAgICB0aGlzLmNvbGxhcHNpbmcgPSB0cnVlO1xuICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmhlaWdodCArICdweCcpO1xuICAgIH0sIDApO1xuXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2xsYXBzZSA9IHRydWU7XG4gICAgICB0aGlzLnNob3dDbGFzcyA9IHRydWU7XG4gICAgfSwgdGhpcy5kdXJhdGlvbik7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLnNob3duKSB7XG4gICAgICB0aGlzLnNob3duID0gZmFsc2U7XG4gICAgICB0aGlzLmNvbGxhcHNlID0gZmFsc2U7XG4gICAgICB0aGlzLnNob3dDbGFzcyA9IGZhbHNlO1xuICAgICAgdGhpcy5jb2xsYXBzaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXJpYUV4cGFuZGVkID0gZmFsc2U7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCAnMHB4Jyk7XG4gICAgICB9LCAwKTtcblxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jb2xsYXBzaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sbGFwc2UgPSB0cnVlO1xuICAgICAgfSwgdGhpcy5kdXJhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGRpc3BsYXlTdHlsZSgpIHtcbiAgICBpZiAoIXRoaXMuY29udGFpbmVySW5zaWRlKSB7XG4gICAgICByZXR1cm4gJ2ZsZXgnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pIG9uUmVzaXplKGV2ZW50OiBhbnkpIHtcbiAgICBsZXQgYnJlYWtwb2l0ID0gMDtcblxuICAgIGlmICh0aGlzLlNpZGVDbGFzcy5pbmNsdWRlcygnbmF2YmFyLWV4cGFuZC14bCcpKSB7XG4gICAgICBicmVha3BvaXQgPSAxMjAwO1xuICAgIH0gZWxzZSBpZiAodGhpcy5TaWRlQ2xhc3MuaW5jbHVkZXMoJ25hdmJhci1leHBhbmQtbGcnKSkge1xuICAgICAgYnJlYWtwb2l0ID0gOTkyO1xuICAgIH0gZWxzZSBpZiAodGhpcy5TaWRlQ2xhc3MuaW5jbHVkZXMoJ25hdmJhci1leHBhbmQtbWQnKSkge1xuICAgICAgYnJlYWtwb2l0ID0gNzY4O1xuICAgIH0gZWxzZSBpZiAodGhpcy5TaWRlQ2xhc3MuaW5jbHVkZXMoJ25hdmJhci1leHBhbmQtc20nKSkge1xuICAgICAgYnJlYWtwb2l0ID0gNTc2O1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVha3BvaXQgPSBldmVudC50YXJnZXQuaW5uZXJXaWR0aCArIDE7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoIDwgYnJlYWtwb2l0KSB7XG4gICAgICBpZiAoIXRoaXMuc2hvd24pIHtcbiAgICAgICAgdGhpcy5jb2xsYXBzZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICcwcHgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdvcGFjaXR5JywgJzAnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgICAgIHRoaXMuY29sbGFwc2UgPSB0cnVlO1xuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb3BhY2l0eScsICcnKTtcbiAgICAgICAgfSwgNCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sbGFwc2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93biA9IGZhbHNlO1xuICAgICAgdGhpcy5zaG93Q2xhc3MgPSBmYWxzZTtcbiAgICAgIHRoaXMuY29sbGFwc2UgPSB0cnVlO1xuICAgICAgdGhpcy5hcmlhRXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgJycpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnNjcm9sbCcpIG9uU2Nyb2xsKCkge1xuICAgIGlmICh0aGlzLm5hdmJhci5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2Nyb2xsaW5nLW5hdmJhcicpKSB7XG4gICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMTIwKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5uYXZiYXIubmF0aXZlRWxlbWVudCwgJ3RvcC1uYXYtY29sbGFwc2UnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5uYXZiYXIubmF0aXZlRWxlbWVudCwgJ3RvcC1uYXYtY29sbGFwc2UnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgaWYgKHRoaXMuX2l0ZW1zTGVuZ3RoICE9PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCB0aGlzLmhlaWdodCArICdweCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pdGVtc0xlbmd0aCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgfVxuICB9XG59XG4iXX0=