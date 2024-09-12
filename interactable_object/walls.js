import { walls, player, game } from "../sketch.js";
import { checkWallCanyon } from "./canyons.js";
import { wallPushSound, loopAudio, stopAudio } from "../audio/audio.js";

export function createWall(x, y, length, height, isMovable){
	var wall = {
		x: x,
		y: y,
		length: length,
		height: height,
		isMovable: isMovable,
		gravity: true,
		draw: function(){
			let color1= color(80);
			let color2 = color(50);
			let	wallColor = color2
			if(this.isMovable){
				//creates blinking color effect on movable wall
				wallColor = lerpColor(color1, color2, random(0, 1));
			}
			push()
			fill(wallColor)
			stroke(1)
			strokeWeight(3)
			rect(this.x, this.y, this.length, this.height)
			rect(this.x + 10, this.y + 10, this.length - 20, this.height - 20)
			fill(190)
			pop()
		},
		//checks if player hits head on wall, returns botom wall y
		checkJump: function(){
			var isAbove = (player.y <= (this.y + height))
			var bottomWall = this.y + this.height
			var isInsideRight = ((player.x - player.length) < (this.x + this.length - 4))
			var isInsideLeft = (player.x + player.length) > this.x + 4
			var isInsideBottom = (player.y + player.height) < bottomWall
			var isInside = (isInsideLeft && isInsideRight)
			if(!isAbove && isInside && isInsideBottom){
				return bottomWall
			}
			else{
				return 0
			}
		},
		//checks if player is on wall
		checkAboveContact: function(){
			if(player.x - 4 > this.x - player.length && player.x + 4 < this.x + this.length + player.length){
				var distance = this.y - player.y
				if(distance >= 0 && distance < 5){
					return true
				}
			}
			return false
		},
		//checks if wall is on wall
		//Need this second function since gameCharY is centered but wallY is not
		checkAboveContactWall: function(x, y, length, height){
			if(x + length > this.x && x < this.x + this.length){
				var distance = (this.y) - (y + height)
				if(distance == 0){
					return true
				}
			}
			return false
		},
		//checks left and right contact of player/wall
		checkContact: function(){
			var distance = (this.y) - (player.y)
			var isUnder = (player.y + player.height) >= (this.y + this.height - 10)
			var isAbove = distance >= -2
			var distanceRight = dist((this.x + this.length), (this.y + this.height) , player.x, player.y)
			var distanceLeft = dist((this.x), (this.y + this.height), player.x, player.y)
			var isContactRight = player.x - player.length < (this.x + this.length)
			var isContactLeft = (player.x + player.length) > this.x 
			if(isAbove){
				return false
			}
			if(isUnder){
				return false
			}
			if(isContactRight && isContactLeft){
				//moving right
				if(distanceLeft < distanceRight){
					if(player.isRight){
						//the next line fixes a quick tap glith to go through walls
						player.x = this.x - player.length
						if(player.isLeft){
							return false
						}
						return true
					}
				}
				//moving left
				if(distanceLeft > distanceRight){
					if(player.isLeft){
						//the next line fixes a quick tap glith to go through walls
						player.x = this.x + this.length + player.length
						if(player.isRight){
							return false
						}
						return true
					}
				}
			}
			//this.isMoving = false
			return false
		},
		//checks left and right contact of wall/wall
		checkWallToWallContact: function(movingWall){
			var isUnder = (movingWall.y + movingWall.height > (this.y + this.height))
			var isAbove = movingWall.y + movingWall.height <= (this.y)
			var distanceRight = dist((this.x + this.length), (this.y + this.height) , movingWall.x, movingWall.y + movingWall.height)
			var distanceLeft = dist((this.x), (this.y + this.height), movingWall.x + movingWall.length, movingWall.y + movingWall.height)
			var isContactRight = (movingWall.x < (this.x + this.length))
			var isContactLeft = ((movingWall.x + movingWall.length) > this.x )
			if(isAbove){
				return false
			}
			if(isUnder){
				return false
			}
			if(isContactRight && isContactLeft){
				//moving right
				if(distanceLeft < distanceRight){
					if(player.isRight){
						//the next line fixes a quick tap glith to go through walls
						if(player.isLeft){
							return false
						}
					//	this.isMoving = true
						return true
					}
				}
				//moving left
				if(distanceLeft > distanceRight){
					if(player.isLeft){
						//the next line fixes a quick tap glith to go through walls
						if(player.isRight){
							return false
						}
						//this.isMoving = true
						return true
					}
				}
			}
			return false
		}
	}
	return wall
}
export function wallLogic(){
	for (let wall of walls) {
		wallsGravity(wall)
		playerWallCollision(wall)
	}
}
function wallToWallCollison(movingWall){
	//when moving a wall, checks if that wall hits a wall to stop movement
	for (let wall of walls) {
		var isColliding = wall.checkWallToWallContact(movingWall)
		if(isColliding && movingWall != wall){
			return true
		}
	}
	return false
}
function playerWallCollision(wall){
    var wallPushSpeed = 1
	var playerHitWall = false
	if(player.isLeft || player.isRight){
	//When hitting a wall, this decides if the wall moves(block), of if the player stops moving
		if(wall.checkContact(player)){
			if(wall.isMovable && !wall.gravity && !player.isFalling){
				var wallHitWall = wallToWallCollison(wall)
				if(wallHitWall){
					stopAudio(wallPushSound)
					return
				}
				if(player.isRight){
					wall.x += wallPushSpeed
					loopAudio(wallPushSound)
					return
				}
				if(player.isLeft){
					wall.x -= wallPushSpeed
					loopAudio(wallPushSound)
					return
				}
				return
			}
			stopAudio(wallPushSound)
			playerHitWall = true
			return
		}
		else{
			playerHitWall = false
		}
		}
	if(playerHitWall == true){
		player.speed = 0
		return
	}
	else if(playerHitWall == false){
		player.speed = 3
		return
	}
}
function wallsGravity(wall){
	//checks if wall is falling
	if(wall.isMovable){
		checkWallCanyon(wall)
		if(wall.y + wall.height == game.floorPos_y){
			wall.gravity = false
			return
		}
		for (let j = 0; j < walls.length; j++) {
			//if wall on wall, wall stops from falling
			if(walls[j].checkAboveContactWall(wall.x, wall.y, wall.length, wall.height)){
				wall.gravity = false
				break
			}
			else {
				wall.gravity = true
			}
		}
		if(wall.y + wall.height == game.floorPos_y){
			wall.gravity = false
		}
		if(wall.gravity == true){
			wall.y += player.gravitySpeed
		}
	}
}