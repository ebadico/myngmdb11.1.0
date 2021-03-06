import { NavbarService } from './navbar.service';
import { AfterContentInit, ElementRef, QueryList, EventEmitter, Renderer2 } from '@angular/core';
export declare class LinksComponent implements AfterContentInit {
    private _navbarService;
    private renderer;
    links: QueryList<ElementRef>;
    linkClick: EventEmitter<any>;
    constructor(_navbarService: NavbarService, renderer: Renderer2);
    ngAfterContentInit(): void;
}
//# sourceMappingURL=links.component.d.ts.map