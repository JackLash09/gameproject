import { game, player } from "../sketch.js";

export let flagpole = {
	isReached: false,
	x: undefined,

	draw(){
		push();
		strokeWeight(5);
		stroke(25);
		line(this.x, game.floorPos_y, this.x, game.floorPos_y - 150);
		fill(255, 0, 255)
		if(this.isReached){
			rect(this.x, game.floorPos_y - 150, 60, 30)
		}
		else{
			rect(this.x, game.floorPos_y - 30, 60, 30)
		}
		pop();
	}
}
export function checkFlagpoleIsReached(){
	if(abs(player.x - flagpole.x) < 20){
		flagpole.isReached = true
		return true
	}
}