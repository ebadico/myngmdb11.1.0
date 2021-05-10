import { AfterViewInit, ElementRef, OnDestroy, OnInit, Renderer2, ChangeDetectorRef, EventEmitter } from '@angular/core';
export declare class SidenavComponent implements AfterViewInit, OnDestroy, OnInit {
    el: ElementRef;
    renderer: Renderer2;
    private _cdRef;
    private document;
    windwosWidth: number;
    isShown: boolean;
    slimSidenav: boolean;
    isBrowser: any;
    private _sidenavTransform;
    class: string;
    fixed: boolean;
    sidenavBreakpoint: any;
    get side(): string;
    set side(position: string);
    shown: EventEmitter<any>;
    hidden: EventEmitter<any>;
    private _side;
    sideNav: ElementRef;
    overlay: any;
    constructor(platformId: string, el: ElementRef, renderer: Renderer2, _cdRef: ChangeDetectorRef, document: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    windowsResize(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    toggleSlim(): void;
    showOverlay(): void;
    hideOverlay(): void;
    setShown(value: boolean): void;
    ngOnDestroy(): void;
}
//# sourceMappingURL=sidenav.component.d.ts.map