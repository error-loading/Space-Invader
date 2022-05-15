var shield1 // shield in game
var page = "intro" // variable for changing from one page to another

//canvas dimension variables
var introCanvasX=800
var introCanvasY=600

//variables for font names
var introGameFont // This is the font for the intro title
var Fauna
//variables for music
var themeSong
var gameBSBullet

//variables for the best score in moreGames
var bestScore4
var bestScoreName4

var playAgainBool = false //second level bool


function setup() {
  createCanvas(introCanvasX, introCanvasY);
  frameRate(60) // so that I can do time after
  introImages() // Function with all the images are being called
  
  //Code for sound slider
  settingsSliderForSound = createSlider(0.1,0.9,0.5,0.001) 
  settingsSliderForSound.position(50,140) // position of the slider
  settingsSliderForSound.style('width', '300px') // width of the slider
  settingsSliderForSound.hide() // hiding so that it doesn't appear everywhere
  
  //code for theme selection radio
  themeRadio = createRadio()
  themeRadio.option('Gold','Gold&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp') //options gold blue and grey
  themeRadio.option('Blue','Blue&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp')
  themeRadio.option('Grey','Grey&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp')
  themeRadio.position(100,510) // position of radio buttons
  themeRadio.style('width','400px') // width
  themeRadio.style('color','white') // color
  themeRadio.hide()
  
  
  //Code for username input
  inp = createInput('')
  inp.position(100,600)
  inp.size(200)
  inp.input(settingCheckName) // to get the value
  inp.hide()
  
  //Background song
  themeSong.play()
  themeSong.loop() // looping the song so it never stops and set the volume to 0.5
  themeSong.volume(0.5)


  //code for best score, got help from Mr. McKenzie
  bestScore4= getItem('bestScore4') 
  if(bestScore4===null){ 
    bestScore4=[0,0,0,0,0,0,0,0,0,0]
  }
  bestScoreName4 = getItem('bestScoreName4')
  if(bestScoreName4===null){
    bestScoreName4=['','','','','','','','','','']
  }
  //Putting all the values of keys into an array as false. They turn true if that value is pressed
  for(boolValForKeys=0;boolValForKeys<255;boolValForKeys++){
    keys.push = false
  }
  

  //Game aliens randInt for their shots
  gameAlienRandInt = Math.floor(random(1,56))

}

function preload(){
  //loaded fonts
  introGameFont = loadFont("resources/fonts/Equinox Regular.otf")
  Fauna = loadFont("resources/fonts/Fauna.ttf")
  //loaded music
  themeSong = createAudio("resources/sounds/spaceinvaders1.mpeg") // themesong 
  gameBSBullet = loadSound("resources/sounds/shoot.wav") // battleship bullet song
  endWinVid = createVideo('resources/other/Blender.mov') // the gif at endWin page
  endWinVid.position(0,50) // setting its position
  endWinVid.style("width","850px") // width
  endWinVid.loop() // looping it so it never stops
  endWinVid.hide() // hiding it so that I can show it only at the end
  explosion = loadSound("resources/sounds/explosion.wav") // loading the killed battleship sound
  invaderKilled = loadSound("resources/sounds/invaderkilled.wav") // loading the invader killed sound
}



function draw() {
  
  //This draw function will check what page it is and call its respective function
  if (page=="intro"){
    intro()
  }
  else if (page=="moreGames"){
    moreGames()
  }
  else if (page=="bufferScreen"){
    bufferScreen()
  }
  else if (page=="settings"){
    settings()
  }
  else if (page=="game"){
    game()
  }
  else if (page=='endLose'){
    endLose()
  }
  else if(page=='endWin'){
    endWin()
  }
  else if(page=="fixPage"){
    fixPage()
  }
}
//Useful Functions
//this code checks if the cursor is in this rect
function mouInRect(rx,ry,rw,rh){
  return mouseX > rx && mouseX <(rx+rw) && mouseY > ry && mouseY<ry+rh
}


//Key functions -> When a key is pressed, the ascii value of it in the keys array will turn true and when it is released, it will return to being false
function keyPressed() {
  keys[keyCode] = true 
  // If the space button is pressed and the page is game, then you do the code for the line that the battleship presents
  if(page=="game" && keyCode==32 && gameLineBool==false){
    gameLineBool=true
    gameBSX2=gameBattleshipX  
    gameBSBullet.play()
  }
}

function keyReleased() {
  keys[keyCode] = false
}

//function to fix the shields at the end
function fixShields(){
  //Code for the shield. In this part, first the image for the shield is being called. Then I create an image with the same witdh and height and load its pixels. Then I loop through all the x and y values, get the all the colors. If that color is white, then you set the shield1 as that color, any other color is turned transparent by making the alpha value 0
  let someShield = createImg("https://i.ibb.co/vQG5F3r/Screenshot-2021-12-30-152900.png",'','anonymous')
  image(someShield,0,0,800,146)
  shield1 = createImage(800,146)
  shield1.loadPixels();
  for(x=0; x<800; x++){
    for(y=0;y<146;y++){
      c = get(x,y)

      if(c[0]==255){
        shield1.set(x,y,color(c[0], c[1], c[2]))
      }
      else{
        shield1.set(x,y,color(0,0,0,0))
      }
    }
    shield1.updatePixels()

  }
  someShield.hide()
  fill(0,0,0,0)
  rect(0,0,800,146)
}