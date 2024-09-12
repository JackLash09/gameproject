//import { checkWallAudio } from "../interactable_object/walls.js"

export var batterySound = {
    isPlaying: false,
    audio: undefined
}
export var wallPushSound = {
    isPlaying: false,
    audio: undefined
}
export var flagpoleSound = {
    isPlaying: false,
    audio: undefined
}
export var hoverSound = {
    isPlaying: false,
    audio: undefined
}
export var soundtrack = {
    isPlaying: false,
    audio: undefined
}
export var enemyHitSound = {
    isPlaying: false,
    audio: undefined
}
export var canyonSound = {
    isPlaying: false,
    audio: undefined
}
export var gameoverSound = {
    isPlaying: false,
    audio: undefined
}
export var coinSound = {
    isPlaying: false,
    audio: undefined
}

export function renderSounds(){
    batterySound.audio = loadSound('./audio/battery.wav');
    wallPushSound.audio = loadSound('./audio/wallPush.wav');
    soundtrack.audio = loadSound('./audio/soundtrack.wav');
    hoverSound.audio = loadSound('./audio/hover.wav');
    gameoverSound.audio = loadSound('./audio/gameover.wav');
    enemyHitSound.audio = loadSound('./audio/enemyHit.wav');
    canyonSound.audio = loadSound('./audio/canyon.wav');
    flagpoleSound.audio = loadSound('./audio/flagpole.wav');
    coinSound.audio = loadSound('./audio/coin.wav');
}

export function playAudio(sound){
    if(!sound.isPlaying){
        sound.audio.play()
        sound.isPlaying = true
    }
}

export function playAudioOnce(sound){
        sound.audio.play()
}

export function stopAudio(sound){
    if(sound.isPlaying){
        sound.audio.stop()
        sound.isPlaying = false
    }
}

export function loopAudio(sound){
    if(!sound.isPlaying){
        sound.audio.loop()
        sound.isPlaying = true
    }
}

export function stopAllAudio(){
    stopAudio(batterySound)
    stopAudio(wallPushSound)
    stopAudio(flagpoleSound)
    stopAudio(hoverSound)
    stopAudio(soundtrack)
    stopAudio(enemyHitSound)
    stopAudio(canyonSound)
    stopAudio(gameoverSound)
    stopAudio(coinSound)
}