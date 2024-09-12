import { player, canyons, game } from "../sketch.js";
import { freezePlayer } from "../player_and_levels/player.js";

export function createCanyon(x, size){
	var canyon = {
		x: x,
		width: size,
		depth: 144,
		draw: function(){
			noStroke();
			fill(80);
			rect(this.x, game.floorPos_y, this.width, this.depth);
		},
		checkContact: function(x, width){
			if (x > this.x && (x + width) < (this.x + this.width)) {
				return true
			}
			else{
				return false
			}
		}
	}
	return canyon
}
export function checkPlayerCanyon(){
	//checks if player is in canyon
	for (let i = 0; i < canyons.length; i++) {
		var isContact = canyons[i].checkContact(player.x, 0)
		if(isContact){
			if (player.y >= game.floorPos_y) {
				player.isPlummeting = true;
				player.y += player.gravitySpeed
				freezePlayer()
			}
		}
	}
}
export function checkWallCanyon(wall){
	//checks if wall is in canyon
	wall = wall
	for (let i = 0; i < canyons.length; i++) {
		var isContact = canyons[i].checkContact(wall.x, wall.length)
		if(isContact){
			if(wall.y + wall.height >= game.floorPos_y)
			wall.y += player.gravitySpeed
		}
	}
}