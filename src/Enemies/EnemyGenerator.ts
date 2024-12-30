import { Enemy } from '../Enemies/Enemy';

function Generate(statStatic: number, playerLevel: number): number {
    let x: number = Math.floor((Math.floor(Math.random() * playerLevel) + 1) + (statStatic * playerLevel)/2);
    console.log(x);
    return x;
}

export class Slime implements Enemy {
    name: string;
    staticPoint: number = 5;
    health: number;
    level: number;
    xpDrop: number;

    constructor(name: string, playerLevel: number){
        this.name = name;
        this.level = Generate(this.staticPoint, playerLevel);
        this.health = Generate(this.staticPoint*2, playerLevel);
        this.xpDrop = Generate(this.staticPoint*3, playerLevel);
    }
    
}