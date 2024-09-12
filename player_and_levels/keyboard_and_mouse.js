import { player, game } from "../sketch.js"
import { flagpole } from "../interactable_object/flagpole.js"
import { nextLevel } from "./game_functions.js"

export function keyPressed() {
	//Checks if player is in the air to prevent double jump
	var inAir = (abs(player.y - game.newFloorPos_y) > 5)
	// if statements to control the animation of the character when keys are pressed.
	if (!player.isPlummeting && !flagpole.isReached) {
		//move left
		if (keyCode == 65) {
			player.isLeft = true
			player.speed = 4
		}
		//move right
		else if (keyCode == 68) {
			player.isRight = true
			player.speed = 4
		}
		//jump
		if (keyCode == 87 && player.isFalling == false && !inAir) {
			player.jumpSensitivity = true;
			player.isFalling = true;
			player.isJumping = true;
		}
		//hover
		if(keyCode == 32 || keyCode == 32 && !player.isHover&& player.energy != 0){
			player.isHover= true
		}
	}
	//triggers next level
	if(flagpole.isReached && keyCode == 32 || game.gameOver && keyCode == 32){
		nextLevel()	
	}
}

export function keyReleased() {
	// if statements to control the animation of the character when keys are released.
	if (keyCode == 65) {
		player.isLeft = false
	}
	else if (keyCode == 68) {
		player.isRight = false
	}
	if (keyCode == 87) {
		player.jumpSensitivity = false;
		player.jumpSensitivityCounter = player.minJump;
	}
	if (keyCode == 32){
		player.isHover= false
	}
}