import {Slime} from './Enemies/EnemyGenerator'
import {PlayerData} from './Player/Player'

let player: PlayerData = new PlayerData('Player',"TestClass", 1, 100, 10, 0)
let slime: Slime = new Slime("Slime", player.level)


document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
`
<div>
    <h1>Slime</h1>
    <h2>${slime.name}</h2>
    <p>Level: ${slime.level}</p>
    <p>Health: ${slime.health}</p>
    <p>XP Drop: ${slime.xpDrop}</p>
    <br>
    <h1>Player</h1>
    <h2>${player.name}</h2>
    <p>Level: ${player.level}</p>
    <p>Health: ${player.health}</p>
    <p>Attack: ${player.attack}</p>
    <p>XP: ${player.xpBar}</p>
    <p>Class: ${player.classType.name}</p>
    <p>Bonus Types: ${player.classType.bonusTypes}</p>
    <p>Bonus Amounts: ${player.classType.bonusAmounts}</p>
</div>
`
