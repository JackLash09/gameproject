import { game, startGame, player } from "../sketch.js";
import { platforms } from "../sketch.js";
import { walls } from "../sketch.js";
import { loopAudio, stopAudio, hoverSound, wallPushSound, enemyHitSound, stopAllAudio } from "../audio/audio.js";
import { flagpole } from "../interactable_object/flagpole.js";
import { checkPlayerCanyon } from "../interactable_object/canyons.js";
import { checkPlayerPlatform } from "../interactable_object/platforms.js";

export function playerLogic(){
	checkPlayerActions()
	checkPlayerPlatform()
	checkPlayerCanyon()
	checkPlayerInvincible()
	checkPlayerDie()
	checkPlayerSounds()
}
export function drawPlayer(){
	push()
	strokeWeight(1.5)
	//character jumping left
	if (player.isLeft && player.isFalling || player.isLeft && player.isHover) {
		//Mullet
		stroke(0)
		fill(0)
		rect(player.x + 8, player.y - 70, 11, 35)
		rect(player.x - 13, player.y - 70, 32, 11)
		ellipse(player.x + 9, player.y - 70, 20, 5)
		ellipse(player.x - 4, player.y - 69, 22, 12)
		ellipse(player.x - 4, player.y - 67, 22, 9)

		//Head
		stroke(0)
		fill(255)
		rect(player.x - 11, player.y - 64, 23, 23, 1)

		//Sunglasses
		stroke(1)
		rect(player.x - 9, player.y - 58, 11, 2)
		fill(0, 0, 0)
		arc(player.x - 3.5, player.y - 56, 10, 11, 0, PI, CHORD);

		//Frames
		line(player.x + 11, player.y - 56, player.x - 11, player.y - 56)

		//Sunglass glare
		beginShape();
		noStroke()
		fill(255)
		vertex(player.x - 7, player.y - 56);
		vertex(player.x - 4, player.y - 56);
		vertex(player.x + 1, player.y - 52);
		vertex(player.x - 1.5, player.y - 50.9);
		endShape(CLOSE);

		//Mouth
		stroke(1)
		rect(player.x - 5, player.y - 48, 4, 3, 1);

		//Shoulders
		rect(player.x - 16, player.y - 37, 32, 3, 1)

		// Neck
		rect(player.x - 3, player.y - 41, 7, 8)

		//Body
		rect(player.x - 12, player.y - 35, 24, 16)
		rect(player.x - 12, player.y - 19, 24, 4)
		line(player.x, player.y - 33, player.x, player.y - 19)
		ellipse(player.x + 3, player.y - 29, 3)
		ellipse(player.x + 3, player.y - 24, 3)

		//Left Arm
		rect(player.x - 16, player.y - 34, 4, 20)
		ellipse(player.x - 16, player.y - 12, 10, 4)
		stroke('white')
		line(player.x - 12, player.y - 33.3, player.x - 12, player.y - 30);

		//Right Arm
		stroke(1)
		rect(player.x + 12, player.y - 34, 4, 20)
		ellipse(player.x + 16, player.y - 12, 10, 4)
		stroke('white')
		line(player.x + 12, player.y - 33.3, player.x + 12, player.y - 30);

		//Legs
		stroke(1)
		fill(255)
		rect(player.x - 8, player.y - 13, 20, 2)
		rect(player.x - 5, player.y - 10, 16, 2)
		rect(player.x, player.y - 5, 10, 2)
		rect(player.x + 5, player.y, 4, 2)

		if(player.isHover && player.energy > 0){
			fill(255)
			//Left Hover
			ellipse(player.x - 14, player.y - 10, 8 ,3)
			ellipse(player.x - 14, player.y - 5, 10 ,3)
			ellipse(player.x - 14, player.y, 12 ,3)
			ellipse(player.x - 14, player.y + 5 , 14 ,3)
			//Right Hover
			ellipse(player.x + 14, player.y - 10, 8 ,3)
			ellipse(player.x + 14, player.y - 5, 10 ,3)
			ellipse(player.x + 14, player.y, 12 ,3)
			ellipse(player.x + 14, player.y + 5 , 14 ,3)
			
		}
	}

	//character jumping-right
	else if (player.isRight && player.isFalling || player.isRight && player.isHover) {
		//Mullet
		stroke(1)
		fill(0)
		rect(player.x - 19, player.y - 70, 11, 35)
		rect(player.x - 19, player.y - 70, 32, 11)
		ellipse(player.x - 9, player.y - 70, 20, 5)
		ellipse(player.x + 4, player.y - 69, 22, 12)
		ellipse(player.x + 4, player.y - 67, 22, 9)

		//Head
		stroke(5)
		fill(255)
		rect(player.x - 12, player.y - 64, 23, 23, 1)

		//Sunglasses
		stroke(1)
		rect(player.x - 2, player.y - 58, 11, 2)
		fill(0, 0, 0)
		arc(player.x + 3.5, player.y - 56, 10, 11, 0, PI, CHORD);

		//Frames
		line(player.x + 11, player.y - 56, player.x - 13, player.y - 56)

		//Sunglass glare
		beginShape();
		noStroke()
		fill(255)
		vertex(player.x + 7, player.y - 56);
		vertex(player.x + 4, player.y - 56);
		vertex(player.x - 0.5, player.y - 52);
		vertex(player.x + 1.5, player.y - 50.9);
		endShape(CLOSE);

		//Mouth
		stroke(1)
		rect(player.x + 2, player.y - 48, 4, 3, 1);

		//Shoulders
		rect(player.x - 16, player.y - 37, 32, 3, 1)

		// Neck
		rect(player.x - 3, player.y - 41, 7, 8)

		//Body
		rect(player.x - 12, player.y - 35, 24, 16)
		rect(player.x - 12, player.y - 19, 24, 4)
		line(player.x, player.y - 33, player.x, player.y - 19)
		ellipse(player.x + 3, player.y - 29, 3)
		ellipse(player.x + 3, player.y - 24, 3)

		//Left Arm
		rect(player.x - 16, player.y - 34, 4, 20)
		ellipse(player.x - 16, player.y - 12, 10, 4)
		stroke('white')
		line(player.x - 12, player.y - 33.3, player.x - 12, player.y - 30);

		//Right Arm
		stroke(1)
		rect(player.x + 12, player.y - 34, 4, 20)
		ellipse(player.x + 16, player.y - 12, 10, 4)
		stroke('white')
		line(player.x + 12, player.y - 33.3, player.x + 12, player.y - 30);

		//Legs
		stroke(1)
		rect(player.x - 10, player.y - 13, 20, 2)
		rect(player.x - 9, player.y - 10, 16, 2)
		rect(player.x - 8, player.y - 5, 10, 2)
		rect(player.x - 7, player.y, 4, 2)

		if(player.isHover && player.energy > 0){
			fill(255)
			//Left Hover
			ellipse(player.x - 14, player.y - 10, 8 ,3)
			ellipse(player.x - 14, player.y - 5, 10 ,3)
			ellipse(player.x - 14, player.y, 12 ,3)
			ellipse(player.x - 14, player.y + 5 , 14 ,3)
			//Right Hover
			ellipse(player.x + 14, player.y - 10, 8 ,3)
			ellipse(player.x + 14, player.y - 5, 10 ,3)
			ellipse(player.x + 14, player.y, 12 ,3)
			ellipse(player.x + 14, player.y + 5 , 14 ,3)
		
		}
	}
	//character front facing 1
	else if(player.isLeft && player.isRight) {
		//Mullet
		stroke(1)
		fill(0)
		rect(player.x - 19, player.y - 70, 16, 35)
		rect(player.x - 19, player.y - 70, 32, 11)
		ellipse(player.x - 9, player.y - 70, 20, 5)
		ellipse(player.x + 4, player.y - 69, 22, 12)
		ellipse(player.x + 4, player.y - 67, 22, 9)

		//Head
		stroke(5)
		fill(255)
		rect(player.x - 12, player.y - 64, 23, 23, 1)

		//Sunglasses
		stroke(1)
		rect(player.x - 4, player.y - 58, 11, 2)
		fill(0, 0, 0)
		arc(player.x + 1.5, player.y - 56, 10, 11, 0, PI, CHORD);

		//Frames
		line(player.x + 11, player.y - 56, player.x - 13, player.y - 56)

		//Sunglass glare
		beginShape();
		noStroke()
		fill(255)
		vertex(player.x + 5, player.y - 56);
		vertex(player.x + 2, player.y - 56);
		vertex(player.x - 2.5, player.y - 52);
		vertex(player.x - 0.5, player.y - 50.9);
		endShape(CLOSE);

		//Mouth
		stroke(1)
		rect(player.x - 3, player.y - 48, 9, 3);

		//Shoulders
		rect(player.x - 16, player.y - 37, 32, 3, 1)

		// Neck
		rect(player.x - 3, player.y - 41, 7, 8)

		//Body
		rect(player.x - 12, player.y - 35, 24, 16)
		rect(player.x - 12, player.y - 19, 24, 4)
		line(player.x, player.y - 33, player.x, player.y - 19)
		ellipse(player.x + 3, player.y - 29, 3)
		ellipse(player.x + 3, player.y - 24, 3)

		//Left Arm
		rect(player.x - 16, player.y - 34, 4, 20)
		ellipse(player.x - 14, player.y - 14, 6, 4)
		stroke('white')
		line(player.x - 12, player.y - 33.3, player.x - 12, player.y - 30);

		//Right Arm
		stroke(1)
		rect(player.x + 12, player.y - 34, 4, 20)
		ellipse(player.x + 14, player.y - 14, 6, 4)
		stroke('white')
		line(player.x + 12, player.y - 33.3, player.x + 12, player.y - 30);

		//Legs
		stroke(1)
		rect(player.x - 10, player.y - 13, 20, 2)
		rect(player.x - 8, player.y - 9, 16, 2)
		rect(player.x - 5, player.y - 5, 10, 2)
		rect(player.x - 2, player.y - 1, 4, 2)
	}
	//character walking left
	else if (player.isLeft) {
		//Mullet
		stroke(1)
		fill(0)
		rect(player.x + 8, player.y - 70, 11, 35)
		rect(player.x - 13, player.y - 70, 32, 11)
		ellipse(player.x + 9, player.y - 70, 20, 5)
		ellipse(player.x - 4, player.y - 69, 22, 12)
		ellipse(player.x - 4, player.y - 67, 22, 9)

		//Head
		stroke(5)
		fill(255)
		rect(player.x - 11, player.y - 64, 23, 23, 1)

		//Sunglasses
		stroke(1)
		rect(player.x - 9, player.y - 58, 11, 2)
		fill(0, 0, 0)
		arc(player.x - 3.5, player.y - 56, 10, 11, 0, PI, CHORD);

		//Frames
		line(player.x + 11, player.y - 56, player.x - 11, player.y - 56)

		//Sunglass glare
		beginShape();
		noStroke()
		fill(255)
		vertex(player.x - 7, player.y - 56);
		vertex(player.x - 4, player.y - 56);
		vertex(player.x + 1, player.y - 52);
		vertex(player.x - 1.5, player.y - 50.9);
		endShape(CLOSE);

		fill(255)

		//Mouth
		stroke(1)
		rect(player.x - 9, player.y - 48, 9, 3);

		//Shoulders
		rect(player.x - 14, player.y - 37, 32, 3, 1)

		// Neck
		rect(player.x - 3, player.y - 41, 7, 8)

		//Body
		rect(player.x - 10, player.y - 35, 24, 16)
		rect(player.x - 10, player.y - 19, 24, 4)
		line(player.x, player.y - 33, player.x, player.y - 19)
		ellipse(player.x + 3, player.y - 29, 3)
		ellipse(player.x + 3, player.y - 24, 3)

		//Left Armx
		rect(player.x - 14, player.y - 34, 4, 20)
		ellipse(player.x - 12, player.y - 14, 6, 4)
		stroke('white')
		line(player.x - 10, player.y - 33.3, player.x - 10, player.y - 30);

		//Right Arm
		stroke(1)
		rect(player.x + 14, player.y - 34, 4, 20)
		ellipse(player.x + 16, player.y - 14, 6, 4)
		stroke('white')
		line(player.x + 14, player.y - 33.3, player.x + 14, player.y - 30);

		//Legs
		stroke(1)
		rect(player.x - 8, player.y - 13, 20, 2)
		rect(player.x - 5, player.y - 9, 16, 2)
		rect(player.x, player.y - 5, 10, 2)
		rect(player.x + 5, player.y - 1, 4, 2)
	}

	//character walking right
	else if (player.isRight) {
		//Mullet
		stroke(1)
		fill(0)
		rect(player.x - 19, player.y - 70, 11, 35)
		rect(player.x - 19, player.y - 70, 32, 11)
		ellipse(player.x - 9, player.y - 70, 20, 5)
		ellipse(player.x + 4, player.y - 69, 22, 12)
		ellipse(player.x + 4, player.y - 67, 22, 9)

		//Head
		stroke(5)
		fill(255)
		rect(player.x - 12, player.y - 64, 23, 23, 1)

		//Sunglasses
		stroke(1)
		rect(player.x - 2, player.y - 58, 11, 2)
		fill(0, 0, 0)
		arc(player.x + 3.5, player.y - 56, 10, 11, 0, PI, CHORD);

		//Frames
		line(player.x + 11, player.y - 56, player.x - 13, player.y - 56)

		//Sunglass glare
		beginShape();
		noStroke()
		fill(255)
		vertex(player.x + 7, player.y - 56);
		vertex(player.x + 4, player.y - 56);
		vertex(player.x - 0.5, player.y - 52);
		vertex(player.x + 1.5, player.y - 50.9);
		endShape(CLOSE);

		//Mouth
		stroke(1)
		rect(player.x, player.y - 48, 9, 3);

		//Shoulders
		rect(player.x - 16, player.y - 37, 32, 3, 1)

		// Neck
		rect(player.x - 3, player.y - 41, 7, 8)

		//Body
		rect(player.x - 12, player.y - 35, 24, 16)
		rect(player.x - 12, player.y - 19, 24, 4)
		line(player.x, player.y - 33, player.x, player.y - 19)
		ellipse(player.x + 3, player.y - 29, 3)
		ellipse(player.x + 3, player.y - 24, 3)

		//Left Arm
		rect(player.x - 16, player.y - 34, 4, 20)
		ellipse(player.x - 14, player.y - 14, 6, 4)
		stroke('white')
		line(player.x - 12, player.y - 33.3, player.x - 12, player.y - 30);

		//Right Arm
		stroke(1)
		rect(player.x + 12, player.y - 34, 4, 20)
		ellipse(player.x + 14, player.y - 14, 6, 4)
		stroke('white')
		line(player.x + 12, player.y - 33.3, player.x + 12, player.y - 30);

		//Legs
		stroke(1)
		rect(player.x - 10, player.y - 13, 20, 2)
		rect(player.x - 9, player.y - 9, 16, 2)
		rect(player.x - 8, player.y - 5, 10, 2)
		rect(player.x - 7, player.y - 1, 4, 2)
	}

	//character jumping facing forwards code
	else if (player.isFalling || player.isPlummeting || player.isHover) {
		//Mullet
		stroke(1)
		fill(0)
		rect(player.x - 19, player.y - 70, 16, 35)
		rect(player.x - 19, player.y - 70, 32, 11)
		ellipse(player.x - 9, player.y - 70, 20, 5)
		ellipse(player.x + 4, player.y - 69, 22, 12)
		ellipse(player.x + 4, player.y - 67, 22, 9)

		//Head
		stroke(5)
		fill(255)
		rect(player.x - 12, player.y - 64, 23, 23, 1)

		//Sunglasses
		stroke(1)
		rect(player.x - 4, player.y - 58, 11, 2)
		fill(0, 0, 0)
		arc(player.x + 1.5, player.y - 56, 10, 11, 0, PI, CHORD);

		//Frames
		line(player.x + 11, player.y - 56, player.x - 13, player.y - 56)

		//Sunglass glare
		beginShape();
		noStroke()
		fill(255)
		vertex(player.x + 5, player.y - 56);
		vertex(player.x + 2, player.y - 56);
		vertex(player.x - 2.5, player.y - 52);
		vertex(player.x - 0.5, player.y - 50.9);
		endShape(CLOSE);

		//Mouth
		stroke(1)
		rect(player.x - 3, player.y - 48, 4, 3, 1);

		//Shoulders
		rect(player.x - 16, player.y - 37, 32, 3, 1)

		// Neck
		rect(player.x - 3, player.y - 41, 7, 8)

		//Body
		rect(player.x - 12, player.y - 35, 24, 16)
		rect(player.x - 12, player.y - 19, 24, 4)
		line(player.x, player.y - 33, player.x, player.y - 19)
		ellipse(player.x + 3, player.y - 29, 3)
		ellipse(player.x + 3, player.y - 24, 3)

		//Left Arm
		rect(player.x - 16, player.y - 34, 4, 20)
		ellipse(player.x - 16, player.y - 12, 10, 4)
		stroke('white')
		line(player.x - 12, player.y - 33.3, player.x - 12, player.y - 30);

		//Right Arm
		stroke(1)
		rect(player.x + 12, player.y - 34, 4, 20)
		ellipse(player.x + 16, player.y - 12, 10, 4)

		stroke('white')
		line(player.x + 12, player.y - 33.3, player.x + 12, player.y - 30);

		//Legs
		stroke(1)
		rect(player.x - 10, player.y - 13, 20, 2)
		rect(player.x - 8, player.y - 10, 16, 2)
		rect(player.x - 5, player.y - 5, 10, 2)
		rect(player.x - 2, player.y, 4, 2)

		if(player.isHover && player.energy > 0){
			fill(255)
			//Left Hover
			ellipse(player.x - 14, player.y - 10, 8 ,3)
			ellipse(player.x - 14, player.y - 5, 10 ,3)
			ellipse(player.x - 14, player.y, 12 ,3)
			ellipse(player.x - 14, player.y + 5 , 14 ,3)
			//Right Hover
			ellipse(player.x + 14, player.y - 10, 8 ,3)
			ellipse(player.x + 14, player.y - 5, 10 ,3)
			ellipse(player.x + 14, player.y, 12 ,3)
			ellipse(player.x + 14, player.y + 5 , 14 ,3)
			
		}
	}

	//character front facing 1
	else {

		//Mullet
		stroke(1)
		fill(0)
		rect(player.x - 19, player.y - 70, 16, 35)
		rect(player.x - 19, player.y - 70, 32, 11)
		ellipse(player.x - 9, player.y - 70, 20, 5)
		ellipse(player.x + 4, player.y - 69, 22, 12)
		ellipse(player.x + 4, player.y - 67, 22, 9)

		//Head
		stroke(5)
		fill(255)
		rect(player.x - 12, player.y - 64, 23, 23, 1)

		//Sunglasses
		stroke(1)
		rect(player.x - 4, player.y - 58, 11, 2)
		fill(0, 0, 0)
		arc(player.x + 1.5, player.y - 56, 10, 11, 0, PI, CHORD);

		//Frames
		line(player.x + 11, player.y - 56, player.x - 13, player.y - 56)

		//Sunglass glare
		beginShape();
		noStroke()
		fill(255)
		vertex(player.x + 5, player.y - 56);
		vertex(player.x + 2, player.y - 56);
		vertex(player.x - 2.5, player.y - 52);
		vertex(player.x - 0.5, player.y - 50.9);
		endShape(CLOSE);

		//Mouth
		stroke(1)
		rect(player.x - 3, player.y - 48, 9, 3);

		//Shoulders
		rect(player.x - 16, player.y - 37, 32, 3, 1)

		// Neck
		rect(player.x - 3, player.y - 41, 7, 8)

		//Body
		rect(player.x - 12, player.y - 35, 24, 16)
		rect(player.x - 12, player.y - 19, 24, 4)
		line(player.x, player.y - 33, player.x, player.y - 19)
		ellipse(player.x + 3, player.y - 29, 3)
		ellipse(player.x + 3, player.y - 24, 3)

		//Left Arm
		rect(player.x - 16, player.y - 34, 4, 20)
		ellipse(player.x - 14, player.y - 14, 6, 4)
		stroke('white')
		line(player.x - 12, player.y - 33.3, player.x - 12, player.y - 30);

		//Right Arm
		stroke(1)
		rect(player.x + 12, player.y - 34, 4, 20)
		ellipse(player.x + 14, player.y - 14, 6, 4)
		stroke('white')
		line(player.x + 12, player.y - 33.3, player.x + 12, player.y - 30);

		//Legs
		stroke(0)
		fill(255)
		rect(player.x - 10, player.y - 13, 20, 2)
		rect(player.x - 8, player.y - 9, 16, 2)
		rect(player.x - 5, player.y - 5, 10, 2)
		rect(player.x - 2, player.y - 1, 4, 2)
	}
	pop()
}
export function freezePlayer(){
	player.isLeft = false
	player.isRight = false
	player.isHover = false
	player.isJumping = false
}
export function resetPlayerSettings(){
	player.x = width / 2
	player.y = game.floorPos_y
	player.height = -75
	player.length =  21
	player.isLeft = false
	player.isRight = false
	player.isHover = false
	player.isInvincible = false
	player.isJumping = false
	player.isFalling = false
	player.isPlummeting = false
	player.speed = 5
	player.jumpSpeed = 4
	player.minJump = 50
	player.maxJumpConst = game.floorPos_y - 132
	player.maxJump = game.floorPos_y - 132
	player.jumpSensitivity = false
	player.jumpSensitivityCounter = 50
	player.invincibleTimer = 0
	player.hoverEnergyCost = 0.3
	player.energy = 0
	player.maxEnergy = 100
	player.gravitySpeed = 4
}
function checkPlayerActions(){
	//movement direction
	if (player.isLeft) {
		player.x -= player.speed
	}
	if (player.isRight) {
		player.x += player.speed
	}

	//jump sensitivity, determines jump height when holding "W"
	if ( player.jumpSensitivity) {
		if ( player.jumpSensitivityCounter >= player.maxJump) {
			 player.jumpSensitivity = false;
			 player.jumpSensitivityCounter = player.minJump
		}
		else {
			 player.jumpSensitivityCounter += 10
		}
	}

	//resets jumpSensitivityCounter
	if (!player.jumpSensitivity){
		player.jumpSensitivityCounter = player.minJump
	}

	//jumping
	if ((player.isFalling || player.y < game.floorPos_y)) {
		var onPlatform = false

		//sets new player landing y position based on platforms and walls
		for (let platform of platforms) {
			if(platform.checkContact(player.x, player.y)){
				onPlatform = true
				game.newFloorPos_y = platform.y
				break
			}
		}
		for (let wall of walls) {
			if(wall.checkAboveContact(player.x, player.y, player.length, player.height)){
				onPlatform = true
				game.newFloorPos_y = wall.y
				break
			}
		}

		//jumping upwards motions
		if (player.isJumping) {
			if (player.y < game.newFloorPos_y -  player.jumpSensitivityCounter) {
				player.isJumping = false;
			}
			else {
				player.y -= player.jumpSpeed
			}
		}
		//prevents jumping while plumetting
		else if (player.y >= game.floorPos_y) {
			player.isFalling = false
		}
		// maked player fall and resets newFloorPos_y as floorPos_y for jumping
		else if(!onPlatform) {
			player.y += player.gravitySpeed
			game.newFloorPos_y = game.floorPos_y
		}
		
		//disables isFalling when playing lands on plaform
		else if(onPlatform && !player.isJumping){
			player.isFalling = false
		}
	}

	// check if player hits head on wall
	if (player.isFalling || player.isHover) {
		var bottomWall = 0
		for (let i = 0; i < walls.length; i++) {
			bottomWall = walls[i].checkJump()
			if (bottomWall > 0){
				break
			}
		}
		if(bottomWall > 0){
			player.isJumping = false
			player.isHover= false
			//player.speed = 4
		}
		else{
			player.maxJump = player.maxJumpConst
		}
	}

	//hover
	if(player.isHover && player.energy > 0){
		player.isJumping = false
		player.y -= 8
		player.energy -= player.hoverEnergyCost	
	}
}
function checkPlayerInvincible(){
	//makes player invincible when hit by enemy for a breif moment
	if(player.isInvincible == true){
		background(255, 0, 0, random(60, 250))
		if(player.invincibleTimer == 0){
			player.isInvincible = false
			stopAudio(enemyHitSound)
		}
		else{
			player.invincibleTimer -= 1
			
		}
	}
}
function checkPlayerDie(){
	//checks if player looses a life
	if(player.y >= height + 100){
		//avoids loosing life on secret level
		if(game.level == 100){
			flagpole.isReached = true
		}
		if(game.level != 100){
			if(!player.isInvincible){
				game.playerLives -= 1
			}
			if(game.playerLives > 0){
				stopAllAudio()
				startGame()
			}
		}
	}
}
function checkPlayerSounds(){
	if(player.isHover && player.energy > 0){
		loopAudio(hoverSound)
	}
	if(!player.isHover || player.energy <= 0){
		stopAudio(hoverSound)
	}
	if(!player.isLeft && !player.isRight){
		stopAudio(wallPushSound)
	}
	if(player.isLeft && player.isRight){
		stopAudio(wallPushSound)
	}

}
