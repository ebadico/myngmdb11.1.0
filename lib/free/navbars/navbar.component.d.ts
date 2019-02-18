import { NavbarService } from './navbar.service';
import { ElementRef, Renderer2, AfterViewInit, OnInit, AfterContentChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { LinksComponent } from "./links.component";
export declare class NavbarComponent implements AfterViewInit, OnInit, AfterContentChecked {
    renderer: Renderer2;
    private _navbarService;
    iconBackground: string | string[];
    SideClass: string;
    containerInside: boolean;
    subscription: Subscription;
    navbarLinkClicks: any;
    shown: boolean;
    doubleNav: boolean;
    height: number;
    duration: number;
    collapse: boolean;
    showClass: boolean;
    collapsing: boolean;
    private _itemsLength;
    el: ElementRef;
    mobile: ElementRef;
    navbar: ElementRef;
    container: ElementRef;
    toggler: ElementRef;
    links: LinksComponent;
    constructor(renderer: Renderer2, _navbarService: NavbarService);
    closeNavbarOnClick(navbarLinkClicks: any): void;
    addTogglerIconClasses(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggle(): void;
    show(): void;
    hide(): void;
    readonly displayStyle: "" | "flex";
    onResize(event: any): void;
    onScroll(): void;
    ngAfterContentChecked(): void;
}
