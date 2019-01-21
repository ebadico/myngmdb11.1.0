import { QueryList } from '@angular/core';
import { ScrollSpyLinkDirective } from './scroll-spy-link.directive';
export interface ScrollSpy {
    id: string;
    links: QueryList<ScrollSpyLinkDirective>;
}
export declare class ScrollSpyService {
    private scrollSpys;
    private activeSubject;
    active$: import("rxjs/internal/Observable").Observable<ScrollSpyLinkDirective>;
    addScrollSpy(scrollSpy: ScrollSpy): void;
    removeScrollSpy(scrollSpyId: string): void;
    updateActiveState(scrollSpyId: string, activeLinkId: string): void;
    removeActiveState(scrollSpyId: string, activeLinkId: string): void;
    setActiveLink(activeLink: ScrollSpyLinkDirective | any): void;
    removeActiveLinks(scrollSpyId: string): void;
}
