/*
-------------------------------
-------The Game Project--------
---Created By: Jacques Bothé---
-------------2024--------------
-------------------------------
*/

import { keyPressed, keyReleased } from "./player_and_levels/keyboard_and_mouse.js"
import { createLevel } from "./player_and_levels/createLevel.js"
import { drawPlayer, playerLogic } from "./player_and_levels/player.js"
import { createBackground } from "./non_interactable_objects/background.js"
import { renderSounds } from "./audio/audio.js"
import { flagpole } from "./interactable_object/flagpole.js"
import { drawText, drawBackgroundText } from "./non_interactable_objects/text.js"
import { coinLogic, batteryLogic } from "./interactable_object/collectables.js"
import { enemyLogic } from "./interactable_object/enemies.js"
import { wallLogic } from "./interactable_object/walls.js"
import { drawThis, gameLogic } from "./player_and_levels/game_functions.js"


export var player
export var game
export var cameraPosX
export var walls
export var platforms
export var canyons
export var coins
export var batteries
export var enemies

function preload(){
	soundFormats('wav')
	renderSounds()
}

export function setup() {
	game = {
		floorPos_y: height * 10 / 2.1,
		newFloorPos_y: height * 10 / 2.1,
		playerLives: 4,
		level: 0,
		//gameScore = total of completed level scores
		gameScore: 0,
		//tempScore = gameScore + current level
		tempScore: 0,
		level2SecretLocked: false,
		gameOver: false,
		isComplete: false,
		secretTrigger: false,
	}
	createCanvas(1024, 576)
	startGame()
}

export function startGame(){
	player = {
		x: width / 2,
		y: game.floorPos_y,
		height: -75,
		length:  21,
		isLeft: false,
		isRight: false,
		isHover: false,
		isInvincible: false,
		isJumping: false,
		isFalling: false,
		isPlummeting: false,
		speed: 5,
		jumpSpeed: 4,
		minJump: 50,
		maxJumpConst: game.floorPos_y - 132,
		maxJump: game.floorPos_y - 132,
		jumpSensitivity: false,
		jumpSensitivityCounter: 50,
		invincibleTimer: 0,
		hoverEnergyCost: 0.3,
		energy: 0,
		maxEnergy: 100,
		gravitySpeed: 4,
	}

	coins = []
	batteries = []
	walls = []
	platforms  = []
	canyons = []
	enemies = []

	//tempScore gets either reset to what it was at start of level if player falls in canyon, 
	//or to the new gameScore at the start of a new level
	game.tempScore = game.gameScore
	cameraPosX = 0
	createLevel(game.level)
}
function draw() {
	cameraPosX = player.x - width / 2

	//creates and draws all non-interactables
	createBackground(cameraPosX, game.floorPos_y)

	//sidescrolling
	push();
	translate(-cameraPosX, 0);

	//draw images
	drawThis(platforms)
	drawThis(canyons)
	drawThis(enemies)
	drawThis(coins)
	drawThis(batteries)
	drawBackgroundText()
	drawPlayer()
	drawThis(walls)
	flagpole.draw()
	
	//game logic
	gameLogic()
	drawText()
	playerLogic()
	coinLogic(coins)
	batteryLogic(batteries)
	wallLogic(walls)
	enemyLogic()
	//UI

	
	pop()
}

//allows use of modules
window.setup = setup
window.draw = draw
window.keyPressed = keyPressed
window.keyReleased = keyReleased
window.preload = preload