export interface DataStructure<Type> {
    add(arg: Type): void;
    addInPosition(value: number, pos: number): void;
    remove(pos: number): void;
}