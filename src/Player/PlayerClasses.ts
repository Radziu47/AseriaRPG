export interface PlayerClass{
    name: string;
    bonusTypes: string[];
    bonusAmounts: number[];
    skill: null;
}

export class TestClass implements PlayerClass {
    name: string = "TestClass";
    bonusTypes: string[] = ["attack"];
    bonusAmounts: number[] = [5];
    skill: null = null;
}