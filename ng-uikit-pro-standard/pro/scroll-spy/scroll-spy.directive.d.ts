import { AfterViewInit, QueryList } from '@angular/core';
import { ScrollSpyLinkDirective } from './scroll-spy-link.directive';
import { ScrollSpyService } from './scroll-spy.service';
export declare class ScrollSpyDirective implements AfterViewInit {
    private scrollSpyService;
    links: QueryList<ScrollSpyLinkDirective>;
    id: string;
    private _id;
    constructor(scrollSpyService: ScrollSpyService);
    ngAfterViewInit(): void;
}
