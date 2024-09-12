import { drawThis } from "../player_and_levels/game_functions.js"
import { drawBackgroundText } from "./text.js"
import { game } from "../sketch.js"

var clouds = []
var mountains = []
var trees = []
var forest = []

//creates objects for arrays and draws them
export function createBackground(cameraPosX, floorPos_y){
	if(mountains.length == 0){
		renderMountains(floorPos_y)
	}
	if(clouds.length == 0){
		createClouds()
	}
	if(trees.length == 0){
		renderTrees(floorPos_y)
		renderForest()
	}
	background(170)
	infiniteClouds()

	push()
	translate(-cameraPosX, 0);
	drawMountains(cameraPosX)
	drawTrees()
	drawThis(clouds)
	pop()

	drawFloor()

	push();
	translate(-cameraPosX, 0)
	drawBackgroundText()
	pop()
}

//clouds
function Cloud(x){
    this.x = x,
    this.y = random(60, 220),
    this.size = random(60, 90),
    this.size_2 = random(10,30),
    this.currentX = x
    this.inc = 1.2

    this.update = function(){
		//creates movement
        this.currentX -= this.inc
    }
    this.draw = function(){
        this.update()
        noStroke()
        fill(255, 255, 255)
        ellipse(this.currentX, this.y, this.size, this.size_2)
        ellipse(this.currentX + 10, this.y - 10, this.size - 10, this.size_2 - 10)
        ellipse(this.currentX - 10, this.y + 10, this.size + 10, this.size_2 + 10)
        ellipse(this.currentX + 10, this.y + 10, this.size + 10, this.size_2 + 10)
        ellipse(this.currentX - 10, this.y - 10, this.size + 10, this.size_2 + 10)
    }
}
function createClouds(){
	//initializes clouds array
    for (let i = 0; i < 9; i++) {
        if(clouds.length == 0){
            clouds.push(new Cloud(200))	
        }
        let previousX = clouds[i].currentX
        clouds.push(new Cloud(previousX + 400))
    }
 }
function infiniteClouds(){
	//removes first cloud in array and creates a new one at the end
	let numberOfClouds = 40
	if(clouds[0].currentX < -2000){
		clouds.shift()
	}
	if (clouds.length < numberOfClouds){
		clouds.push(new Cloud(clouds[clouds.length - 1].currentX + 400))
	}
}

//mountains
function renderMountains(floorPos_y){
	mountains = [
		{
			x: 1800,
			y: floorPos_y - 100,
			length: 1400,
			height: 400,
		},
		{
			x: 1100,
			y: floorPos_y,
			length: 1000,
			height: 500,
		},
		{
			x: 1200,
			y: floorPos_y + 200,
			length: 800,
			height: 800,
		},
		{
			x: 700,
			y: floorPos_y + 100,
			length: 1000,
			height: 300,
		}
	]
}
function drawMountains(cameraPosX){
	for (let i = 0; i < 20; i++) {
		for (let j = 0; j < mountains.length; j++) {
			push();
			translate(cameraPosX / 3 * (0.2*j), 0);
			noStroke()
			fill(150 - (j*15))
			ellipse(i * mountains[j].x, mountains[j].y, mountains[j].length, mountains[j].height)
			pop();
		}
	}
}

//trees
function renderTrees(floorPos_Y){
	trees = [
		
		{
			x: 100,
			y: floorPos_Y - 130,
			height: 130,
			length: 10
		},
		{
			x: 200,
			y: floorPos_Y - 150,
			height: 150,
			length: 13
		},
		{
			x: 300,
			y: floorPos_Y - 170,
			height: 170,
			length: 17
		},
		{
			x: 400,
			y: floorPos_Y - 80,
			height: 80,
			length: 9
		},

	]
}
function renderForest(){
	//creates an array of copies of trees in random orders
	for (let i = 0; i < 40; i++) {
		let randomNumber = round(random(0, trees.length - 1))
		forest.push(trees[randomNumber])
	}
}
function drawTrees(){
	for (let i = 0; i < forest.length; i++) {
		push()
		stroke(1)
		strokeWeight(2)
		fill(72, 60, 50)
		//branches
		rect(forest[i].x + (i * 400), forest[i].y + 10, forest[i].length + 40, 10)
		rect((forest[i].x + (i * 400) - 30), forest[i].y + 50, forest[i].length + 30, 11)
		//Trunk
		rect(forest[i].x + (i * 400), forest[i].y, forest[i].length, forest[i].height)
		pop()
	}
	
}

//floor
function drawFloor(){
	fill(0);
	noStroke();
	fill(50);
	rect(0, game.floorPos_y, width, height - game.floorPos_y);
}