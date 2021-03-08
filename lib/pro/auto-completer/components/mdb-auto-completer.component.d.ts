import { AfterContentInit, ElementRef, EventEmitter, Renderer2, QueryList, OnDestroy } from '@angular/core';
import { MdbOptionComponent } from './mdb-option.component';
import { ISelectedOption } from '../interfaces/selected-option.interface';
import { Observable, Subject } from 'rxjs';
export declare type AutocompleteDropdownPosition = 'below' | 'above' | 'auto';
export declare class MdbAutoCompleterComponent implements AfterContentInit, OnDestroy {
    private renderer;
    private el;
    textNoResults: string;
    clearButton: boolean;
    clearButtonTabIndex: number;
    appendToBody: boolean;
    dropdownPosition: AutocompleteDropdownPosition;
    disabled: boolean;
    get visibleOptions(): number;
    set visibleOptions(value: number);
    _visibleOptions: number;
    get optionHeight(): any;
    set optionHeight(value: any);
    _optionHeight: number;
    get dropdownHeight(): number;
    set dropdownHeight(value: number);
    _dropdownHeight: number;
    displayValue: ((value: any) => string) | null;
    select: EventEmitter<{
        text: string;
        element: any;
    }>;
    selected: EventEmitter<{
        text: string;
        element: any;
    }>;
    optionList: Array<any>;
    mdbOptions: QueryList<MdbOptionComponent>;
    dropdown: ElementRef;
    noResultsEl: ElementRef;
    private _destroy;
    private utils;
    origin: ElementRef;
    parameters: {
        left: number;
        top: number;
        width: number;
        bottom: number;
        inputHeight: number;
    };
    readonly _isDropdownOpen: Subject<any>;
    private _allItems;
    private _isOpen;
    private _selectedItemIndex;
    private _selectedItem;
    private _selectedItemChanged;
    private _isBrowser;
    constructor(renderer: Renderer2, el: ElementRef, platformId: string);
    private _listenToOptionClick;
    private _handleOptionClick;
    setSelectedItem(item: ISelectedOption): void;
    getSelectedItem(): ISelectedOption;
    selectedItemChanged(): Observable<any>;
    isOpen(): boolean;
    _calculatePosition(): void;
    private _calculateAppendPosition;
    show(): void;
    hide(): void;
    isDropdownOpen(): Observable<any>;
    removeHighlight(index: number): void;
    highlightRow(index: number): void;
    navigateUsingKeyboard(event: any): void;
    moveHighlightedIntoView(type: string): void;
    updatePosition(parameters: {
        left: number;
        top: number;
        width: number;
        bottom: number;
    }): void;
    appendDropdown(): void;
    setSingleOptionHeight(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
//# sourceMappingURL=mdb-auto-completer.component.d.ts.map