import { TemplateRef, ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
export declare class MdbStepComponent implements OnInit, OnChanges {
    el: ElementRef;
    content: TemplateRef<any>;
    editable: boolean;
    name: string;
    label: string;
    stepForm: FormGroup;
    _onChanges: Subject<void>;
    constructor(el: ElementRef);
    get isDone(): boolean;
    set isDone(value: boolean);
    private _isDone;
    get isWrong(): boolean;
    set isWrong(value: boolean);
    private _isWrong;
    get isActive(): boolean;
    set isActive(value: boolean);
    private _isActive;
    private _removeClasses;
    reset(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
//# sourceMappingURL=step.component.d.ts.map