import {Slime} from './Enemies/EnemyGenerator'
import {PlayerData} from './Player/Player'

let player: PlayerData = new PlayerData('Player', 100, 100, 10, 0)
let slime: Slime = new Slime("Slime", player.level)


document.querySelector<HTMLDivElement>('#app')!.innerHTML = 
`
<div>
    <h1>${slime.name}</h1>
    <p>Level: ${slime.level}</p>
    <p>Health: ${slime.health}</p>
    <p>XP Drop: ${slime.xpDrop}</p>
</div>
`
