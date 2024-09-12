import { enemyHitSound, playAudio } from "../audio/audio.js"
import { player, game, enemies } from "../sketch.js"

export function Enemy(x, y, rangeX, rangeY, speed){
	this.x = x
	this.y = y
	this.rangeX = rangeX
	this.rangeY = rangeY
	this.currentX = x
	this.currentY = y
	this.speed = speed
	this.inc = this.speed

	this.update = function(){
		if(this.rangeX != 0){
			this.currentX += this.inc
			if(this.currentX >= this.x + this.rangeX){
				this.inc = -this.speed
			}
			else if (this.currentX < this.x){
				this.inc = this.speed
			}
		}
		if(this.rangeY != 0){
			this.currentY += this.inc
			if(this.currentY >= this.y + this.rangeY){
				this.inc = -this.speed
			}
			else if (this.currentY < this.y){
				this.inc = this.speed
			}
		}
		
	}
	this.draw = function(){
		this.update()
		push()
		fill(random(180,255), 0, 0)
		stroke(1)
		strokeWeight(2)
		ellipse(this.currentX, this.currentY, 20, 20)
		pop()
	}
	this.checkContact = function(player){
		var downHit = this.currentY - 13 < player.y
		var upHit = this.currentY + 12 > player.y + player.height
		var leftHit = this.currentX + 12 > player.x - player.length
		var rightHit = this.currentX - 8 < player.x + player.length
		if(upHit && downHit && leftHit && rightHit){
			return true
		}
		else {
			return false
		}
	}
}
export function enemyLogic(){
	//checks if player hits enemy
	for (let enemy of enemies) {
		var isContact = enemy.checkContact(player)
		// removes 1 life and makes player invincible for a brief moment
		if(isContact && player.isInvincible == false && game.playerLives > 0){
			playAudio(enemyHitSound)
			game.playerLives -= 1
			player.isInvincible = true
			player.invincibleTimer = 80
		}
	}
}