import { ElementRef } from '@angular/core';
export declare class MdbMovableDirective {
    private el;
    private elementPosition;
    private startingPosition;
    constructor(el: ElementRef);
    movable: boolean;
    private isElementMoving;
    onStartMove(event: any): void;
    onMove(event: any): void;
    onEndMove(event: any): void;
    private startMoving(event);
    private movingOver(event);
    private endMoving(event);
    private updatePosition();
}
