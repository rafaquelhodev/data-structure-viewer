export interface DataStructure<Type> {
    addInPosition(value: number, pos: number): void;
    remove(pos: number): void;
}