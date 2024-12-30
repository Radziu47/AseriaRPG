export class PlayerData{
    name: string;
    level: number;
    health: number;
    attack: number;
    xpBar: number;
    
    constructor(name: string, level: number, health: number, attack: number, xpBar: number){
        this.name = name;
        this.level = level;
        this.health = health;
        this.attack = attack;
        this.xpBar = xpBar;
    }
}