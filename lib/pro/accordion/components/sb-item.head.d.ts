import { AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SBItemComponent } from './sb-item';
export declare class SBItemHeadComponent implements AfterViewInit {
    private sbItem;
    private _cdRef;
    isDisabled: boolean;
    customClass: string;
    indicator: boolean;
    id: string;
    ariaExpanded: boolean;
    ariaControls: string;
    constructor(sbItem: SBItemComponent, _cdRef: ChangeDetectorRef);
    onKeyDown(event: KeyboardEvent): void;
    toggleClick(event: any): void;
    ngAfterViewInit(): void;
}
