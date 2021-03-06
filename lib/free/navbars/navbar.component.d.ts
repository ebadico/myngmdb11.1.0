import { NavbarService } from './navbar.service';
import { AfterContentChecked, AfterViewInit, ElementRef, OnInit, Renderer2, ChangeDetectorRef, NgZone, OnDestroy, EventEmitter } from '@angular/core';
import { LinksComponent } from './links.component';
export declare class NavbarComponent implements AfterViewInit, OnInit, AfterContentChecked, OnDestroy {
    renderer: Renderer2;
    private _navbarService;
    private _cdRef;
    private _ngZone;
    private _document;
    iconBackground: string | string[];
    SideClass: string;
    containerInside: boolean;
    collapseId: string;
    scrollSensitivity: number;
    scrollableNavbar: boolean;
    shown: EventEmitter<any>;
    hidden: EventEmitter<any>;
    private _destroy$;
    navbarLinkClicks: any;
    isShown: boolean;
    doubleNav: boolean;
    height: number;
    duration: number;
    collapse: boolean;
    showClass: boolean;
    collapsing: boolean;
    private _itemsLength;
    ariaExpanded: boolean;
    el: ElementRef;
    mobile: ElementRef;
    navbar: ElementRef;
    container: ElementRef;
    toggler: ElementRef;
    links: LinksComponent;
    constructor(renderer: Renderer2, _navbarService: NavbarService, _cdRef: ChangeDetectorRef, _ngZone: NgZone, _document: any);
    closeNavbarOnClick(navbarLinkClicks: any): void;
    addTogglerIconClasses(): void;
    private _listenToScroll;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggle(): void;
    show(): void;
    hide(): void;
    get displayStyle(): "" | "flex";
    onResize(event: any): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
}
//# sourceMappingURL=navbar.component.d.ts.map