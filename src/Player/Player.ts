import { PlayerClass } from "./PlayerClasses";
import { PlayerClassSelector } from "./PlayerClassSelector";

export class PlayerData{
    name: string;
    level: number;
    health: number;
    attack: number;
    xpBar: number;
    classType: PlayerClass;
    
    constructor(name: string, className: string, level: number, health: number, attack: number, xpBar: number){
        this.name = name;
        this.classType = PlayerClassSelector.Select(className)!;
        this.level = level;
        this.health = health;
        this.attack = attack;
        this.xpBar = xpBar;
    }
}