import { flagpole } from "../interactable_object/flagpole.js"
import { game, player, coins } from "../sketch.js"

export function drawText(){
	if(game.gameOver){
		drawGameOver()
	}
	if(!flagpole.isReached){
		drawScore()
		drawLevel()
		drawLives()
		drawEnergyBar()
	}
	if(flagpole.isReached && game.level == 2 && flagpole.x > 0){
		gameCompletelText()
	}
	else if(flagpole.isReached){
		levelCompleteText()
		drawCollectedCoins()
	}
}
export function drawBackgroundText(){
	if(game.level == 0){
		drawTutorialText()
	}
	if(game.level == 100 && !flagpole.isReached){
		textSize(50)
        fill(0)
        text("Unlimited energy",  350, game.floorPos_y - 200)
	}
}
function gameCompletelText(){
	push()
	stroke(1)
	strokeWeight(2)
	background(0, 255, 0, 50)
	fill(0)
	textSize(80)
	text("YOU WIN ", player.x - 170, game.floorPos_y - 290)
	textSize(30)
	text("Score: "+ game.gameScore, player.x - 50, game.floorPos_y - 240)
	textSize(30)
	text("Highscore: 215 ", player.x - 90, game.floorPos_y - 200)
	textSize(30)
	fill(0)
	text("press spacebar to try again", player.x - 180, game.floorPos_y - 160)
	pop()
}
function drawTutorialText(){
	if(game.level == 0){
		push()
		textSize(30)
		stroke(1)
		strokeWeight(3)
		fill(255)
		text("<----A",  350, game.floorPos_y - 50)
		text("W",  464, game.floorPos_y - 100)
		text("|",  474, game.floorPos_y - 130)
		text("^",  469, game.floorPos_y - 150)
		text("D---->",  520, game.floorPos_y - 50)
		text("spacebar",  1070, game.floorPos_y - 100)

		//Outline battery
		stroke(1)
		noFill()
		rect(1100, game.floorPos_y - 220, 60, 60)
		pop()
    }
}
function drawGameOver(){
	push()
	stroke(1)
	strokeWeight(2)
	background(100, 0, 0, 100)
	fill(0)
	textSize(80)
	text("GAME OVER ", player.x - 240, game.floorPos_y - 290)
	textSize(30)
	text("Score: "+ game.gameScore, player.x - 50, game.floorPos_y - 240)
	textSize(30)
	fill(0)
	text("press spacebar to try again", player.x - 180, game.floorPos_y - 200)
	pop()
}
function levelCompleteText(){
	push()
	stroke(1)
	strokeWeight(2)
	fill(0)
	textSize(80)
	text("LEVEL COMPLETE ", player.x - 310, game.floorPos_y - 350)
	textSize(30)
	text("Score: "+ game.gameScore, player.x - 40, game.floorPos_y - 240)
	textSize(30)
	fill(0)
	text("press space to continue", player.x - 150, game.floorPos_y - 200)
	pop()
}
function drawCollectedCoins(){
	//draws coins and missed coins at level complete screen
	for (let i = 0; i < coins.length; i++) {
		let x = (player.x - 90 + (50 * i))
		let y = (game.floorPos_y - 300)
		
		if(game.level != 100){
			push()
			stroke(1)
			strokeWeight(3)
			fill(255, 255, 255, 100)
			ellipse(x, y, 40, 40)
			pop()
			if(coins[i].isFound){
				coins[i].x = x
				coins[i].y = y
			}
		}
		else{
			coins[i].x = -1000
			coins[i].y = -1000
		}
	}	
}
function drawScore(){
	push()
	textSize(15)
	fill(255)
	stroke(1)
	strokeWeight(3)
	text("Score: "+ (game.tempScore), player.x - 490, game.floorPos_y - 415)
	pop()
}
function drawLevel(){
	push()
	textSize(15)
	fill(255)
	stroke(1)
	strokeWeight(3)
	text("Level: "+ game.level, player.x - 490, game.floorPos_y - 435)
	pop()
}
function drawLives(){
	for (let i = 0; i < game.playerLives; i++) {
		push()
		stroke(1)
		strokeWeight(3)
		fill(255, 0, 0)
		rect(player.x - 490 + i * 42, game.floorPos_y - 390, 36, 16)
		rect(player.x - 480 + i * 42, game.floorPos_y - 400, 16, 36)
		noStroke()
		rect(player.x - 488 + i * 42, game.floorPos_y - 389, 33, 14)
		pop()
	}
}
function drawEnergyBar(){
	push()
	strokeWeight(2)
	stroke(1)
	fill(100, 155, 255, 50)
	rect(player.x - 490, game.floorPos_y - 350, 30, player.maxEnergy)
	fill(0, 255, 0)
	rect(player.x - 490, game.floorPos_y - 350, 30, player.energy)
	pop()
}

