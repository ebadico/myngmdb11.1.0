import { QueryList, AfterContentInit } from '@angular/core';
import { SBItemComponent } from './sb-item';
export declare class SqueezeBoxComponent implements AfterContentInit {
    multiple: boolean;
    items: QueryList<SBItemComponent>;
    constructor();
    didItemToggled(item: SBItemComponent): void;
    ngAfterContentInit(): void;
}
