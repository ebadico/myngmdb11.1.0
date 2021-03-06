import { ElementRef, Renderer2, AfterViewInit, AfterViewChecked } from '@angular/core';
export declare class MdbInput implements AfterViewChecked, AfterViewInit {
    private el;
    private _renderer;
    elLabel: ElementRef | any;
    elIcon: Element | any;
    focusCheckbox: boolean;
    focusRadio: boolean;
    isBrowser: any;
    isClicked: boolean;
    element: any;
    constructor(el: ElementRef, _renderer: Renderer2, platformId: string);
    onfocus(): void;
    onblur(): void;
    onchange(): void;
    onkeydown(event: any): void;
    oncut(): void;
    onpaste(): void;
    ondrop(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    resize(): void;
    delayedResize(): void;
    initComponent(): void;
    private checkValue;
}
//# sourceMappingURL=input.directive.d.ts.map