import { platforms, player, game } from "../sketch.js"

export function createPlatform(x, y, length, height, range){
	var platform = {
		x: x,
		y: y,
		length: length,
		height: height,
		range: range,
		currentX: x,
		inc: 0.9,

		update: function(){
			if(range == 0){
				this.inc = 0
				return
			}
			//For platforms that first move Left
			if(range < 0){
				this.currentX += this.inc
				if(this.currentX <= this.x + this.range){
					this.inc = 0.9
				}
				else if(this.currentX > this.x){
					this.inc = -0.9
				}
			}
			//For platforms that first move Right
			if(range > 0){
				this.currentX += this.inc
				if(this.currentX >= this.x + this.range){
					this.inc = -0.9
				}
				else if (this.currentX < this.x){
					this.inc = 0.9
				}
			}
		},
		draw: function(){
			platform.update()
			push()
			strokeWeight(3)
			stroke(10)
			fill(200)
			rect(this.currentX, this.y, this.length, this.height)
			pop()
		},
		checkContact: function(){
			if(player.x > this.currentX - 17 && player.x < this.currentX + this.length + 17){
				var distance = this.y - player.y
				if(distance >= 0 && distance < 5){
					return true
				}
			}
			return false
		}
	}
	return platform
}
export function checkPlayerPlatform(){
	//checks if player is on platform
	for (let platform of platforms) {
		if(platform.checkContact(player.x, player.y)){
			game.newFloorPos_y = platform.y
			return true
		}
	}
}