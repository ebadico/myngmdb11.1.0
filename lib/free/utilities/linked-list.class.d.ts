export declare class LinkedList<T> {
    length: number;
    protected head: any;
    protected tail: any;
    protected current: any;
    protected asArray: T[];
    get(position: number): any;
    add(value: T, position?: number): void;
    remove(position?: number): void;
    set(position: number, value: T): void;
    toArray(): T[];
    findAll(fn: any): any[];
    push(...args: T[]): number;
    pop(): any;
    unshift(...args: T[]): number;
    shift(): any;
    forEach(fn: any): void;
    indexOf(value: T): number;
    some(fn: any): boolean;
    every(fn: any): boolean;
    toString(): string;
    find(fn: any): any;
    findIndex(fn: any): number | undefined;
    protected getNode(position: number): any;
    protected createInternalArrayRepresentation(): void;
}
//# sourceMappingURL=linked-list.class.d.ts.map