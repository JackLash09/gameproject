import { enemies, player, game, canyons, walls, platforms, coins, batteries } from "../sketch.js"
import { createCoin, createBattery } from "../interactable_object/collectables.js"
import { createPlatform } from "../interactable_object/platforms.js"
import { createCanyon } from "../interactable_object/canyons.js"
import { createWall } from "../interactable_object/walls.js"
import { Enemy } from "../interactable_object/enemies.js"
import { flagpole } from "../interactable_object/flagpole.js"


export function createLevel(level){

	if(level == 0){
		player.x = 480
		player.y = game.floorPos_y - 10

		canyons.push(createCanyon(-2000, 1800))

		//floor
		createWallGrid(-200, game.floorPos_y, 20, 1)

		//floor
		createWallGrid(2500, game.floorPos_y, 20, 1)

		//Secret Platforms
		platforms.push(createPlatform(-200, game.floorPos_y - 100, 200, 20, 0))
		platforms.push(createPlatform(-200, game.floorPos_y - 200, 200, 20, 0))
		platforms.push(createPlatform(-200, game.floorPos_y - 300, 200, 20, 0))
		platforms.push(createPlatform(-200, game.floorPos_y - 400, 200, 20, 0))

		//Main wall and roof
		walls.push(createWall(-100, game.floorPos_y - 500, 2100, 50,))
		createWallGrid(-100, game.floorPos_y - 500, 3, 5)

		//Tree platform
		platforms.push(createPlatform(700, game.floorPos_y - 100, 100, 20, 0))
		platforms.push(createPlatform(700, game.floorPos_y  - 200, 100, 20, 0))
		platforms.push(createPlatform(700, game.floorPos_y - 300, 100, 20, 0))
		walls.push(createWall(800, game.floorPos_y - 360, 100, 360))
		
		//reverse tree platform
		platforms.push(createPlatform(1300, game.floorPos_y  - 200, 300, 20, 0))
		platforms.push(createPlatform(1300, game.floorPos_y - 300, 300, 20, 0))
		walls.push(createWall(1400, game.floorPos_y - 460, 100, 360))

		//movable wall
		walls.push(createWall(1400, game.floorPos_y - 100, 100, 100, true))

		canyons.push(createCanyon(1800, 700))

		//stairs
		createWallGrid(1900, game.floorPos_y - 200, 1, 3)
		createWallGrid(2000, game.floorPos_y - 300, 1, 4)

		//moving platform
		platforms.push(createPlatform(2200, game.floorPos_y  - 280, 100, 20, 200))

		// 5 coins from left to right
		coins.push(createCoin(-150, game.floorPos_y - 50))
		coins.push(createCoin(477, game.floorPos_y - 230, 100, 400))
		coins.push(createCoin(1350, game.floorPos_y - 340, 100, 400))
		coins.push(createCoin(1550, game.floorPos_y - 340, 100, 400))
		coins.push(createCoin(2550, game.floorPos_y - 440, 100, 400))

		flagpole.isReached = false 
        flagpole.x = 2700
	}
	if(level == 1) {
		player.x = 300
		player.y = game.floorPos_y - 210

		canyons.push(createCanyon(-400, 2000))

		createWallGrid(-400, game.floorPos_y - 500, 6, 6)
		createWallGrid( 200, game.floorPos_y - 200, 2, 3)
		createWallGrid(200, game.floorPos_y - 500, 10, 1)

		platforms.push(createPlatform(885, game.floorPos_y - 80, 200, 20, -325))
		platforms.push(createPlatform(1085, game.floorPos_y - 80, 200, 20, 325))

		enemies.push(new Enemy(1085, game.floorPos_y - 210, 0, 200, 1))
		enemies.push(new Enemy(505, game.floorPos_y - 110, 400, 0, 1))

		platforms.push(createPlatform(1300, game.floorPos_y - 340, 100, 20, 350))

		//floor
		createWallGrid(1600, game.floorPos_y, 5, 1)
		canyons.push(createCanyon(2100, 110))
		createWallGrid(2200, game.floorPos_y, 14, 1)

		//movable block
		walls.push(createWall(1800, game.floorPos_y - 100 ,100, 100, true))
		
		//secret block
		walls.push(createWall(1800, game.floorPos_y - 200 ,100, 100))
	
		//Secret wall ouline for collision
		walls.push(createWall(1800, game.floorPos_y - 460 ,10, 360))
		walls.push(createWall(1890, game.floorPos_y - 460 ,10, 360))
		walls.push(createWall(1800, game.floorPos_y - 460 ,100, 10))

		//platforms.push(createPlatform(1700, game.floorPos_y - 220, 100, 20))
		walls.push(createWall(1650, game.floorPos_y - 220, 150, 20))
		walls.push(createWall(1900, game.floorPos_y - 400, 100, 20))

		platforms.push(createPlatform(2100, game.floorPos_y - 200, 100, 20))

		//stairs
		createPyramid(2200, game.floorPos_y - 100, 3, 3, 1, -1)

		//collectables
		coins.push(createCoin(1084, game.floorPos_y - 280))
		coins.push(createCoin(1250, game.floorPos_y - 430))
		coins.push(createCoin(1750, game.floorPos_y - 270))
		coins.push(createCoin(1850, game.floorPos_y - 150))
		coins.push(createCoin(1950, game.floorPos_y - 450))

		flagpole.isReached = false 
        flagpole.x = 2800
	}
	if(level == 2){
		player.x = 650
		player.y = game.floorPos_y - 10

		canyons.push(createCanyon(-1200, 1400))
		canyons.push(createCanyon(700, 5100))

		//floor
		createWallGrid(-2000, game.floorPos_y, 8, 1)
		createWallGrid(200, game.floorPos_y, 5, 1)
		createWallGrid(5800, game.floorPos_y, 10, 1)

		//roof
		createWallGrid(-2000, game.floorPos_y - 570, 90, 1)

		//blocking wall
		createWallGrid(200, game.floorPos_y - 500, 1, 4)

		//movable wall
		walls.push(createWall(200, game.floorPos_y - 100, 100, 100, true))

		walls.push(createWall(500, game.floorPos_y - 100, 100, 100))
		walls.push(createWall(300, game.floorPos_y - 200, 100, 100))
		walls.push(createWall(500, game.floorPos_y - 300, 100, 100))
		walls.push(createWall(300, game.floorPos_y - 400, 100, 100))
		

		//randomize spacing between walls
		var wallX = 900
		var topWallY = game.floorPos_y - 500
		var topLimit = random(150, 375)
		
		for (let i = 0; i < 10; i++) {
			//creates 2 enemeies between each wall with 2 different speeds
			for (let j = 0; j < 2; j++) {
				enemies.push(new Enemy(wallX + 280, game.floorPos_y - 400, 0, 450, 1.5 + (j*0.5)))
			}
			//alternates between coin+platform and battery between walls
			if((i%2) == 0){
				coins.push(createCoin(wallX + 280, topWallY + topLimit + 61))
				platforms.push(createPlatform(wallX + 50, game.floorPos_y - random(100, 400), 100, 20, 350))
			}
			else{
				batteries.push(createBattery(wallX + 280, topWallY + topLimit + 56))
				
			}
			//flappy birds type wall
			walls.push(createWall(wallX, topWallY, 50, topLimit))
			walls.push(createWall(wallX, topWallY + topLimit + 125, 50, 600))
			wallX += 500
			var topLimit = random(150, 375)
		}

		//start batteries
		batteries.push(createBattery(540, game.floorPos_y - 140))
		batteries.push(createBattery(340, game.floorPos_y - 240))
		batteries.push(createBattery(540, game.floorPos_y - 340))

		flagpole.isReached = false
        flagpole.x = 6000
		
	}
	if(level == 100){
		player.x = 500
		player.y = game.floorPos_y - 10

		canyons.push(createCanyon(-1200, 1400))
		canyons.push(createCanyon(700, 5100))

		//floor
		createWallGrid(200, game.floorPos_y, 5, 1)
		createWallGrid(5800, game.floorPos_y, 10, 1)

		//wall
		createWallGrid(200, game.floorPos_y - 500, 1, 6)

		//coins coins coins
		for (let i = 0; i < 50; i++) {
			for (let j = 0; j < 4; j++) {
				coins.push(createCoin(800 + i * 100, game.floorPos_y - 430 + (j * 100)))
			}
		}

		//roof
		createWallGrid(-2000, game.floorPos_y - 570, 90, 1)
		flagpole.isReached = false,
		flagpole.x = 6100
		
	}
	/////////////////////////
	///////TEST LEVELS///////
	/////////////////////////
	if(level == 8) {
		//Full Test
		walls.push(createWall(600, game.floorPos_y - 100, 100, 100))
		walls.push(createWall(600, game.floorPos_y - 300, 100, 100))

//		canyons.push(createCanyon(650, 200))
		flagpole.isReached = false,
		flagpole.x = 1000
		}
	if(level == 9) {
		//Full Test
	//	canyons.push(createCanyon(100, 150))
		walls.push(createWall(600, game.floorPos_y - 110, 100, 100,))
		// walls.push(createWall(700, game.floorPos_y - 150, 100, 150,))
		// walls.push(createWall(800, game.floorPos_y - 250, 100, 250,))
		// walls.push(createWall(900, game.floorPos_y - 350, 100, 350,))
//		canyons.push(createCanyon(650, 200))
		flagpole.isReached = false,
		flagpole.x = 1000
		
	}
	if(level == 10) {
		//Full Test
		canyons.push(createCanyon(100, 150))
	//	walls.push(createWall(200, game.floorPos_y - 100 , 100, 100))
		walls.push(createWall(150, game.floorPos_y - 200 , 100, 100,true))
		walls.push(createWall(800, game.floorPos_y - 100 , 100, 100))
		walls.push(createWall(800, game.floorPos_y - 200 , 100, 100,true))
		walls.push(createWall(800, game.floorPos_y - 380 , 100, 100,true))
		walls.push(createWall(600, game.floorPos_y - 100 , 100, 100))
		walls.push(createWall(350, game.floorPos_y - 100 , 100, 100 , true))
		walls.push(createWall(400, game.floorPos_y - 200 , 100, 100 , true))

		// in Between Test
		// walls.push(createWall(600, game.floorPos_y - 100 , 100, 100))
		// //walls.push(createWall(700, game.floorPos_y - 100 , 100, 100))
		// walls.push(createWall(650, game.floorPos_y - 200 , 100, 100, true))
		// walls.push(createWall(800, game.floorPos_y - 100 , 100, 100))

		//push test
		// walls.push(createWall(800, game.floorPos_y - 100 , 100, 100))
		// walls.push(createWall(600, game.floorPos_y - 200 , 100, 100, true))
		// walls.push(createWall(250, game.floorPos_y - 100 , 100, 100))
		// walls.push(createWall(400, game.floorPos_y - 200 , 100, 100, true))

		//Under Long Block Glitch
		//walls.push(createWall(300, game.floorPos_y - 200 , 500, 100))

		//on small block
		// var wallX = 700
		// var topWallY = game.floorPos_y - 500
		// var topLimit = round(random(150, 375))
		// walls.push(createWall(wallX, topWallY, 50, topLimit))
		// walls.push(createWall((wallX), (topWallY + topLimit + 125), 500, 600))

		// walls.push(createWall(400, game.floorPos_y - 100 , 100, 100,true))

	//	walls.push(createWall(700, game.floorPos_y - 500 , 100, 100 , true))
		// walls.push(createWall(700, game.floorPos_y - 300 , 100, 100, true))
		// walls.push(createWall(600, game.floorPos_y - 100 , 400, 100, true))
//		canyons.push(createCanyon(100, 200))
//		canyons.push(createCanyon(650, 200))
		flagpole.isReached = false,
		flagpole.x = 1000
		
	}
	if(level == 11) {
		//Full Test
		canyons.push(createCanyon(100, 299))

		walls.push(createWall(150, game.floorPos_y - 200 , 100, 100,true))
		walls.push(createWall(800, game.floorPos_y - 100 , 100, 100))
		walls.push(createWall(800, game.floorPos_y - 200 , 100, 100,true))
		walls.push(createWall(800, game.floorPos_y - 380 , 100, 100,true))
		walls.push(createWall(600, game.floorPos_y - 100 , 100, 100))
		walls.push(createWall(350, game.floorPos_y - 100 , 100, 100 , true))
		walls.push(createWall(400, game.floorPos_y - 200 , 100, 100 , true))

		// in Between Test
		// walls.push(createWall(600, game.floorPos_y - 100 , 100, 100))
		// //walls.push(createWall(700, game.floorPos_y - 100 , 100, 100))
		// walls.push(createWall(650, game.floorPos_y - 200 , 100, 100, true))
		// walls.push(createWall(800, game.floorPos_y - 100 , 100, 100))

		//push test
		// walls.push(createWall(800, game.floorPos_y - 100 , 100, 100))
		// walls.push(createWall(600, game.floorPos_y - 200 , 100, 100, true))
		// walls.push(createWall(250, game.floorPos_y - 100 , 100, 100))
		// walls.push(createWall(400, game.floorPos_y - 200 , 100, 100, true))

		//Under Long Block Glitch
		//walls.push(createWall(300, game.floorPos_y - 200 , 500, 100))

		//on small block
		// var wallX = 700
		// var topWallY = game.floorPos_y - 500
		// var topLimit = round(random(150, 375))
		// walls.push(createWall(wallX, topWallY, 50, topLimit))
		// walls.push(createWall((wallX), (topWallY + topLimit + 125), 500, 600))

		// walls.push(createWall(400, game.floorPos_y - 100 , 100, 100,true))

	//	walls.push(createWall(700, game.floorPos_y - 500 , 100, 100 , true))
		// walls.push(createWall(700, game.floorPos_y - 300 , 100, 100, true))
		// walls.push(createWall(600, game.floorPos_y - 100 , 400, 100, true))
//		canyons.push(createCanyon(100, 200))
//		canyons.push(createCanyon(650, 200))
		flagpole.isReached = false,
		flagpole.x = 1000
		
	}
	if(level == 12) {
		// in Between Test
		walls.push(createWall(350, game.floorPos_y - 200 , 100, 100, true))
		walls.push(createWall(600, game.floorPos_y - 100 , 100, 100))
		//walls.push(createWall(700, game.floorPos_y - 100 , 100, 100))
		walls.push(createWall(650, game.floorPos_y - 200 , 100, 100, true))
		walls.push(createWall(800, game.floorPos_y - 100 , 100, 100))

		//push test
		// walls.push(createWall(800, game.floorPos_y - 100 , 100, 100))
		// walls.push(createWall(600, game.floorPos_y - 200 , 100, 100, true))
		// walls.push(createWall(250, game.floorPos_y - 100 , 100, 100))
		// walls.push(createWall(400, game.floorPos_y - 200 , 100, 100, true))

		//Under Long Block Glitch
		//walls.push(createWall(300, game.floorPos_y - 200 , 500, 100))

		//on small block
		// var wallX = 700
		// var topWallY = game.floorPos_y - 500
		// var topLimit = round(random(150, 375))
		// walls.push(createWall(wallX, topWallY, 50, topLimit))
		// walls.push(createWall((wallX), (topWallY + topLimit + 125), 500, 600))

		// walls.push(createWall(400, game.floorPos_y - 100 , 100, 100,true))

	//	walls.push(createWall(700, game.floorPos_y - 500 , 100, 100 , true))
		// walls.push(createWall(700, game.floorPos_y - 300 , 100, 100, true))
		// walls.push(createWall(600, game.floorPos_y - 100 , 400, 100, true))
//		canyons.push(createCanyon(100, 200))
//		canyons.push(createCanyon(650, 200))
		flagpole.isReached = false,
		flagpole.x = 1000
		
	}
	if(level == 13) {
		//push test
		walls.push(createWall(800, game.floorPos_y - 100 , 100, 100))
		walls.push(createWall(600, game.floorPos_y - 200 , 100, 100, true))
		walls.push(createWall(250, game.floorPos_y - 100 , 100, 100))
		walls.push(createWall(400, game.floorPos_y - 200 , 100, 100, true))

		//Under Long Block Glitch
		//walls.push(createWall(300, game.floorPos_y - 200 , 500, 100))

		//on small block
		// var wallX = 700
		// var topWallY = game.floorPos_y - 500
		// var topLimit = round(random(150, 375))
		// walls.push(createWall(wallX, topWallY, 50, topLimit))
		// walls.push(createWall((wallX), (topWallY + topLimit + 125), 500, 600))

		// walls.push(createWall(400, game.floorPos_y - 100 , 100, 100,true))

	//	walls.push(createWall(700, game.floorPos_y - 500 , 100, 100 , true))
		// walls.push(createWall(700, game.floorPos_y - 300 , 100, 100, true))
		// walls.push(createWall(600, game.floorPos_y - 100 , 400, 100, true))
//		canyons.push(createCanyon(100, 200))
//		canyons.push(createCanyon(650, 200))
		flagpole.isReached = false,
		flagpole.x = 1000
		
	}
	if(level == 14) {

		//Under Long Block Glitch
		walls.push(createWall(300, game.floorPos_y - 200 , 500, 100))

		//on small block
		// var wallX = 700
		// var topWallY = game.floorPos_y - 500
		// var topLimit = round(random(150, 375))
		// walls.push(createWall(wallX, topWallY, 50, topLimit))
		// walls.push(createWall((wallX), (topWallY + topLimit + 125), 500, 600))

		// walls.push(createWall(400, game.floorPos_y - 100 , 100, 100,true))

	//	walls.push(createWall(700, game.floorPos_y - 500 , 100, 100 , true))
		// walls.push(createWall(700, game.floorPos_y - 300 , 100, 100, true))
		// walls.push(createWall(600, game.floorPos_y - 100 , 400, 100, true))
//		canyons.push(createCanyon(100, 200))
//		canyons.push(createCanyon(650, 200))
		flagpole.isReached = false,
		flagpole.x = 1000
		
	}
	if(level == 15) {

		//Under Long Block Glitch
		platforms.push(createPlatform(340, game.floorPos_y - 20 , 50, 10))

		flagpole.isReached = false,
		flagpole.x = 1000
		
	}
	if(level == 16) {
		//on small block
		var wallX = 700
		var topWallY = game.floorPos_y - 500
		var topLimit = round(random(150, 375))
		walls.push(createWall(wallX, topWallY, 50, topLimit))
		walls.push(createWall((wallX), (topWallY + topLimit + 125), 500, 600))

		// walls.push(createWall(400, game.floorPos_y - 100 , 100, 100,true))

	//	walls.push(createWall(700, game.floorPos_y - 500 , 100, 100 , true))
		// walls.push(createWall(700, game.floorPos_y - 300 , 100, 100, true))
		// walls.push(createWall(600, game.floorPos_y - 100 , 400, 100, true))
//		canyons.push(createCanyon(100, 200))
//		canyons.push(createCanyon(650, 200))
		flagpole.isReached = false,
		flagpole.x = 1000	
	}
	//enemy hitbox
	if (level == 17) {
		enemies.push(new Enemy(479, game.floorPos_y - 110, 0, 80, 1))
		enemies.push(new Enemy(543, game.floorPos_y - 110, 0, 80, 1))
		enemies.push(new Enemy(490, game.floorPos_y - 87, 80, 0, 1))
		enemies.push(new Enemy(490, game.floorPos_y + 13, 80, 0, 1))

		flagpole.isReached = false,
		flagpole.x = 1000
	}
	//battery hitbox
	if (level == 18) {
		batteries.push(createBattery(500, game.floorPos_y + 14))
		batteries.push(createBattery(500, game.floorPos_y - 109))
		batteries.push(createBattery(532, game.floorPos_y - 50))
		batteries.push(createBattery(470, game.floorPos_y - 50))
//		canyons.push(createCanyon(650, 200))
		flagpole.isReached = false,
		flagpole.x = 1000	
	}
	//coin hitbox
	if (level == 19) {
		coins.push(createCoin(511, game.floorPos_y + 24))
		coins.push(createCoin(511, game.floorPos_y - 97))
		coins.push(createCoin(550, game.floorPos_y - 30))
		coins.push(createCoin(472, game.floorPos_y - 30))
//		canyons.push(createCanyon(650, 200))
		flagpole.isReached = false,
		flagpole.x = 1000
		
	}
	//add coins
	if (level == 20) {
		coins.push(createCoin(511, game.floorPos_y + 24))
		coins.push(createCoin(511, game.floorPos_y - 97))
		coins.push(createCoin(550, game.floorPos_y - 30))
		coins.push(createCoin(472, game.floorPos_y - 30))
//		canyons.push(createCanyon(650, 200))
		flagpole.isReached = false,
		flagpole.x = 1000
	}
	//level complete
	if (level == 21) {
		coins.push(createCoin(1511, game.floorPos_y + 24))
		coins.push(createCoin(1511, game.floorPos_y + 24))
		coins.push(createCoin(1511, game.floorPos_y - 97))
		coins.push(createCoin(1550, game.floorPos_y - 30))
		coins.push(createCoin(1472, game.floorPos_y - 30))

		flagpole.isReached = false,
		flagpole.x = 532
    }
}
export function secretWall(x, y, length, height){
	push()
	fill(color(50))
	stroke(1)
	strokeWeight(3)
	rect(x, y, length, height)
	rect(x + 10, y + 10, length - 20, height - 20)
	pop()
}
function createWallGrid(x, y, length, height){
	//format: createWallGrid(600, game.floorPos_y - 300, 6, 1)
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < length; j++) {
			walls.push(createWall(x + (j * 100), y + (i * 100) , 100, 100))
		}
	}
}
function createPyramid(x, y, length, height, directionOrSpacing, flipOrStepLength){
	//format: createPyramid(500, game.floorPos_y - 100, 3, 3, -1, -1)
	//-1 direction for up stairs, +1 for down stairs
	length = length
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < length; j++) {
			walls.push(createWall(x + ((j * 100)* directionOrSpacing), y - (i * 100) , 100, 100))
		}
		length += flipOrStepLength
	}
}