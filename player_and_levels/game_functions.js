import { loopAudio, playAudio, stopAllAudio, flagpoleSound, soundtrack, stopAudio, gameoverSound, canyonSound } from "../audio/audio.js";
import { player, startGame, game, batteries, coins} from "../sketch.js";
import { checkFlagpoleIsReached, flagpole } from "../interactable_object/flagpole.js";
import { freezePlayer, resetPlayerSettings } from "./player.js";
import { createBattery } from "../interactable_object/collectables.js";
import { secretWall } from "./createLevel.js";
import { walls } from "../sketch.js";

export function gameLogic(){
	checkGameSounds()
    checkLevelSecretFunctions()
	checkLevelComplete()
	checkGameOver()
	
}
export function drawThis(items){
    for(let item of items){
        item.draw()
    }
}
export function nextLevel(){
    if(game.gameOver || game.level == 2 && flagpole.x > 0){
		game.playerLives = 4,
		game.level = 0,
		game.gameScore= 0,
		game.tempScore= 0,
		game.level2SecretLocked= false,
		game.gameOver= false,
		game.secretTrigger= false,
        stopAllAudio()
		resetPlayerSettings()
        startGame()
        return
    }
    //secret level
    if(game.level == 2 && flagpole.x < 0){
        game.level = 100
        stopAllAudio()
		resetPlayerSettings()
        startGame()
        return
}
    else if(game.level == 100){
        game.level = 2
        game.level2SecretLocked = true
        stopAllAudio()
		resetPlayerSettings()
        startGame()
        return
    }
    else{
        game.level += 1
        stopAllAudio()
		resetPlayerSettings()
        startGame()
        return
    }	
}
function checkGameSounds(){
    if(game.gameOver){
        stopAudio(soundtrack)
        loopAudio(gameoverSound)
    }
    else if(player.isPlummeting){
        stopAudio(soundtrack)
        playAudio(canyonSound)
    }
    //starts soundtrack once player moves
    else if(player.isLeft && !game.gameOver && !flagpole.isReached 
         || player.isRight && !game.gameOver && !flagpole.isReached
         || player.isJumping && !game.gameOver && !flagpole.isReached){
        loopAudio(soundtrack)
    }
    else if(flagpole.isReached){
        stopAudio(soundtrack)
        playAudio(flagpoleSound)
    }
}
function checkLevelSecretFunctions(){
	//tutorial battery
	if(game.level == 0){
		if(player.energy < 1 && !batteries[0]){
			batteries.push(createBattery(1120, game.floorPos_y - 200))
		}
		//to stop battery from flickering
		else if(player.energy > 10) {
			batteries.pop()
		}
	}
	// when coin is found, transforms a block to movable and falls to reveal secret coin
	if(game.level == 1){
		secretWall(1800, game.floorPos_y - 460 ,100, 360)
		if(!game.secretTrigger && coins[1].isFound){
			for (let i = 0; i < walls.length; i++) {
				if(walls[i].x == 1800 && walls[i].y == game.floorPos_y -200){
					walls[i].isMovable = true
				}
			}
		game.secretTrigger = true
		}
		else{
		}
	}
	//changes flagpole location based on player x position
	if(game.level == 2){
		if(game.level2SecretLocked){
			for (let i = 0; i < walls.length; i++) {
				200, game.floorPos_y - 100, 100, 100, true
				if(walls[i].x == 200 && walls[i].y == game.floorPos_y - 100){
					walls[i].isMovable = false
				}
				
			}
			200, game.floorPos_y - 100, 100, 100, true
		}
		var flagX
		if(player.x < -500){
			flagpole.x = -1500
		}
		else{
			flagpole.x = 6000
		}
	}
	//unlimited energy
	if(game.level == 100){
		player.energy = 100
	}

}
function checkLevelComplete(){
    let levelComplete = checkFlagpoleIsReached()
	if(levelComplete){
        addLevelScore()
		player.isLeft = false
		player.isRight = false
		player.isHover = false
	}
}
function checkGameOver() {
    if(game.playerLives == 0){
        game.gameOver = true
        freezePlayer()
    }
}
function addLevelScore(){
    if(game.gameScore != game.tempScore){
        game.gameScore = game.tempScore
    }
}
// export function setFirstLevel(){
//     game.level = 100
// }




