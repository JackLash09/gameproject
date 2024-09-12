import { player, game} from "../sketch.js"
import { coinSound, batterySound } from "../audio/audio.js"
import { flagpole } from "./flagpole.js"


export function createCoin(x, y){
	var collectable = {
		x: x,
		y: y,
		size: 50,
		isFound: false,
		draw: function(){
			if (!this.isFound || this.isFound && flagpole.isReached) {
				push()
				strokeWeight(2)
				//outline
				fill(218, 165, 32)
				stroke(100)
				ellipse(this.x, this.y, this.size - 10, this.size - 10)
				//inner cirle
				noStroke()
				fill(255, 215, 0)
				ellipse(this.x, this.y, this.size - 20, this.size - 20)
				//symbol
				stroke(100)
				line(this.x - 5, this.y, this.x + 5, this.y)
				line(this.x, this.y - 5, this.x, this.y + 5)
				pop()
			};
		},
		checkContact: function(player){
			if(!this.isFound){
				var downHit = this.y - 24 < player.y
				var upHit = this.y + 22 > player.y + player.height
				var leftHit = this.x + 19 > player.x - player.length
				var rightHit = this.x - 17 < player.x + player.length
				if (downHit && upHit && leftHit && rightHit) {
					this.isFound = true;
                    return true
				}
			}
		}
	}
	return collectable
}

export function createBattery(x, y){
	var battery = {
		x: x,
		y: y,
		size: 50,
		isFound: false,
		draw: function(){
			if (!this.isFound) {
				push()
				strokeWeight(2)
				//battery
				fill(8,255,8)
				stroke(10)
				rect(this.x, this.y, this.size - 30, this.size - 19)
				rect(this.x + 15, this.y , this.size - 60, this.size - 60)
				//stripe
				stroke(10)
				fill(0,212,0)
				rect(this.x, this.y + 10, this.size - 30, this.size - 39)
				pop()
			}
		},
		checkContact: function(player){
			if(!this.isFound){
				var downHit = this.y - 14 < player.y
				var upHit = this.y + 34 > player.y + player.height
				var leftHit = this.x + 21 > player.x - player.length
				var rightHit = this.x + 1 < player.x + player.length
				if (downHit && upHit && leftHit && rightHit) {
					this.isFound = true;
                    return true
				}
			}
		}
	}
	return battery
}

export function coinLogic(coins){
	//checks if coin is collected and adds score
	for (let coin of coins) {
		let addPoints = coin.checkContact(player)
		if (addPoints){
			coinSound.audio.play()
			game.tempScore += 1
		}
	}
}

export function batteryLogic(batteries){
	//checks if battery is collected and adds energy
	for (let battery of batteries) {
		let addEnergy = battery.checkContact(player)
		if (addEnergy && player.energy < 75){
			batterySound.audio.play()
			if(player.energy < 75){
				player.energy += 25
			}
			else if (addEnergy){
				player.energy = 100
			}
		}
	}
}