import { EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
export declare class MdbTreeComponent implements OnInit {
    private _cdRef;
    checked: EventEmitter<any>;
    checkedKeys: EventEmitter<any>;
    nodesChanged: EventEmitter<any>;
    nodes: any;
    textField: string;
    childrenField: string;
    checkboxesField: string;
    set expandAll(value: boolean);
    checkboxes: boolean;
    toggleOnTitleClick: boolean;
    private _expandAll;
    checkedValues: string[];
    toggle: any;
    constructor(_cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    toggleExpandAll(): void;
    expandAllNodes(): void;
    closeAllNodes(): void;
    private _expandAllChildren;
    private _closeAllChildren;
    private _setInitialCheckedKeys;
    private _hasInitialCheckedKeysChildren;
    toggleByNode(i: string): void;
    private _childrenToggleByNode;
    onKeydownCheckbox(e: KeyboardEvent, node: any, i: string): void;
    onKeydown(e: KeyboardEvent, i: string): void;
    checkNodes(node: any): void;
    private _checkChildNodes;
    updateNodesCheckedValues(node: any, idx: string): void;
    private _updateChildNodesCheckedValues;
}
//# sourceMappingURL=tree-view.component.d.ts.map