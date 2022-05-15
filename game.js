//variables
var gameCanvasX = 950
var gameCanvasY = 750
//images
var killedAlienImg
var killedAlienGoldImg
var killedAlienGreyImg
var gameBackgroundImg
var gameBigPointAlien
var gameGreyBigPointAlien

//Battleship variables
var gameBattleshipX = 400
var vx = 0.0 // velocity x of the battleship
var gameLineY = 550  //The shot y value of the battleship
var gameLineBool=false
var gameBSX2
var gameBScounter = 0
var gameBattleship // Image of battleship

//Information
var gameScore = 0   // Score-> calculated with aliens hit
var gameUserLives = 3 // # of lives left 
var gameLivesX = [700,750,800]
var gameAlienLineSpeed=10
var gameAlienMoveDownBool = false
var c // var for what color the alien bullet is
var bsC  // var for what color the ship bullet is

//sound
var explosion
var invaderKilled

// Arrays
var gameAliensBool = [[false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false]] // This array is for all the aliens, some value will turn true if it has been shot
//Aliens

var gameAliensX = [100,160,220,280,340,400,460,520,580,640,700]//The x value for all the columns
var gameAliensY = [80,140,200,260,320] // The y value for all the rows

//Alien Sprite -> There the arrays for all the themes and sprites of all the invaders. Better way that I realized I could've done after was to put everything in a nested nested array so that I wouldn't have to put all the if statements
var gameAlienBottom = [[],[]]
var gameAlienMiddle = [[],[]]
var gameAlienTop = [[],[]]
var gameAlienBottomGold = [[],[]]
var gameAlienMiddleGold = [[],[]]
var gameAlienTopGold = [[],[]]
var gameAlienBottomGrey = []
var gameAlienMiddleGrey = []
var gameAlienTopGrey = []
//Other alien variables
var gameAlienKilled = 0 //Num of aliens killed, used to see if the user has beat all the invaders
var gameAlienLineY // The y value of the aliens shot 
var gameAlienLineX // The x value of the aliens shot
var gameAlienSpeed = 10 // Speed of the alien
var gameRedAlienX = 3000  // x value of the top alien (the one that gives you 100 pts)
var gameAlienRandInt // Random integer for aliens shots
var gameAlienShotBool =false // Bool so that only one aliens shoots at a time
var gameAlienKilledBool = false

var playAgainBool = false //second level bool

//constants
const keys = [] // putting false for all the keys available
const UP = 38, RIGHTK = 39, LEFTK = 37, DOWN = 40 // keycodes


// To keep myself more organized, I created function for every part of the game. This is where everything is being called
function game(){
  gameBattleship()
  gameBuildingTheShields()
  gameBattleshipLine()
  gameShipBulletShield()
  gameAliensMove()
  gameRedAlien()
  gameDisappear()
  gameInformation()
  gameAliensShot()
  gameAliensShotShield()
  gameLivesTaken()
  gameEnd()
  gameAliens()
  gameAliensHeightCheck()
}

//These are all the functions for different parts

//This is displaying and moving the battleship
function gameBattleship(){
  createCanvas(gameCanvasX,gameCanvasY)
  image(gameBackgroundImg,0,0) // the background img
  image(gameBattleshipImg,gameBattleshipX,gameCanvasY-100,50,70) // the ship img
  
  if((gameBattleshipX+vx)>=-10 &&(gameBattleshipX+vx)<=900){ // checks if it isn't touching the two ends 
    gameBattleshipX += vx // you increase the x value of the ship by velocity x for a better effect
  }
  else{
    vx=0 // if it is touching the end, the mke velocity x 0
  }
  
  //increasing or decreasing the vx
  if(keys[LEFTK]){
    vx -= 0.2
  }
  if(keys[RIGHTK]){
    vx += 0.2
  }
}

//This is the function for the battle ship shooting ability
function gameBattleshipLine(){
  if(gameLineBool){ // this checks if the game line bool is true or is not on the screen right now (since you don't want them able to shoot when a bullet is on the screen already)
    stroke(255)
    strokeWeight(4)
    bsC = get(gameBSX2+25,gameLineY+94) // this is checking the color of the line. It is used to check if it is touching the shield 
    line(gameBSX2+25,gameLineY+105,gameBSX2+25,gameLineY+95)
    gameLineY-=10
    if(gameLineY==-20){
      gameLineBool=false
      gameLineY=550
    }
  }

}

//This is the function that displays the aliens and change its sprites
function gameAliens(){
  var fr = int(frameCount/40) % 2 // this keep changing numbers between 0 and 1 which allows us to keep changing the sprite
  for(gameAlienRow=0;gameAlienRow<5;gameAlienRow++){
    for(gameAlienCollumns=0;gameAlienCollumns<11;gameAlienCollumns++){
      if(!gameAliensBool[gameAlienRow][gameAlienCollumns]){ // checks if the alien has not been shot
        noStroke()
        // checking what theme it is
        if(themeVal=='Blue'){
          //the first row is the top aliens
          if(gameAlienRow==0){
            //gameAlienTop[gameAlienCollumns%2][fr] - [gameAlienCOllumns %2] - changes the themes according to the collumns [fr] changing its sprites
            image(gameAlienTop[gameAlienCollumns%2][fr],gameAliensX[gameAlienCollumns],gameAliensY[gameAlienRow],50,45)
          }
          else if(gameAlienRow==1 || gameAlienRow==2){
            image(gameAlienMiddle[gameAlienCollumns%2][fr],gameAliensX[gameAlienCollumns],gameAliensY[gameAlienRow],50,45)
          }
          else if(gameAlienRow==3 || gameAlienRow==4){
            image(gameAlienBottom[gameAlienCollumns%2][fr],gameAliensX[gameAlienCollumns],gameAliensY[gameAlienRow],50,45)
          }
        }
        else if(themeVal=='Grey'){
          if(gameAlienRow==0){
            image(gameAlienTopGrey[fr],gameAliensX[gameAlienCollumns],gameAliensY[gameAlienRow],50,45)
          }
          else if(gameAlienRow==1 || gameAlienRow==2){
            image(gameAlienMiddleGrey[fr],gameAliensX[gameAlienCollumns],gameAliensY[gameAlienRow],60,45)
          }
          else if(gameAlienRow==3 || gameAlienRow==4){
            image(gameAlienBottomGrey[fr],gameAliensX[gameAlienCollumns],gameAliensY[gameAlienRow],50,40)
          }
        }
        else{
          if(gameAlienRow==0){
            image(gameAlienTopGold[gameAlienCollumns%2][fr],gameAliensX[gameAlienCollumns],gameAliensY[gameAlienRow],50,40)
          }
          else if(gameAlienRow==1 || gameAlienRow==2){
            image(gameAlienMiddleGold[gameAlienCollumns%2][fr],gameAliensX[gameAlienCollumns],gameAliensY[gameAlienRow],50,30)
          }
          else if(gameAlienRow==3 || gameAlienRow==4){
            image(gameAlienBottomGold[gameAlienCollumns%2][fr],gameAliensX[gameAlienCollumns],gameAliensY[gameAlienRow],50,40)
          }
        }
      }
    }
  }
}

//This is the function that moves the aliens
function gameAliensMove(){
  for (aliensMoving = 0; aliensMoving<11;aliensMoving++){
    if(frameCount%40 == 0){
      if(gameAliensX[0]==0){ //if they touch the left of the screen, you reverse the direfction
        gameAlienSpeed=10
        gameAliensX[0]+=20
        gameAlienMoveDownBool=true // you make this bool true so that they can go down by 20 px
      }
      else if(gameAliensX[0]==280){ // same thing with the right hand side
        gameAlienSpeed=-10
        gameAlienMoveDownBool=true
        gameAliensX[0]-=20
      }
      gameAliensX[aliensMoving]+=gameAlienSpeed // fixing a bug in the game
    }
  }
  if(gameAlienMoveDownBool==true){
    for(aliensMoveDown=0;aliensMoveDown<5;aliensMoveDown++){
      gameAliensY[aliensMoveDown]+=20 // move all of the rows down by 20 px
    }
    gameAlienMoveDownBool=false // making it false so that it only does this once
  }

  
}


//Displaying and giving function to the hundred point alien
function gameRedAlien(){
  //checking the theme and putting the according img
  if(themeVal=="Grey"){
    image(gameGreyBigPointAlien, gameRedAlienX,20,50,35)
  }
  else if(themeVal=="Gold"){
    image(introBigPointAlien, gameRedAlienX,20,50,35)
  }
  else{
    image(introRedAllien, gameRedAlienX,20,50,35)
  }
  gameRedAlienX-=3 // decreasing the x value by 3 so that it keeps moving left
  if(gameRedAlienX==-3000){ // if it touches -3000, then move it back to 3000
    gameRedAlienX=3000
  }

  // if the battleships bullet touches the alien, you play the killed invader music, increase the score, return the alien x to 3000, and make the ships bool false and move its y value
  if(gameLineBool == true && gameBSX2>gameRedAlienX-10 && gameRedAlienX+45>gameBSX2&& gameLineY < 55 &&  gameLineY>20){
    gameLineBool=false
    gameLineY=550
    gameRedAlienX=3000
    gameScore+=100
    invaderKilled.play()
  }
  
}

//Functionality of the aliens shooting
function gameAliensShot(){
  stroke(255)
  //If another aliens shot isn't still on the screen and the alien chosen is not killed, then you make the shot bool true and fix values for the lines X and Y
  if (gameAlienShotBool==false && gameAliensBool[gameAlienRandInt%5][gameAlienRandInt%11]==false){
    gameAlienLineX= gameAliensX[gameAlienRandInt%11]+20
    gameAlienLineY=gameAliensY[gameAlienRandInt%5]+30
    gameAlienShotBool=true
  }
  // if the alien was shot, then choose another number
  else if(gameAlienShotBool==false && gameAliensBool[gameAlienRandInt%5][gameAlienRandInt%11]==true){
    gameAlienRandInt = Math.floor(random(1,56))
  }
  // if the shot bool is true, y coordinated is not off the screen, then show the line
  if(gameAlienShotBool==true && gameAlienLineY>0 && gameAlienLineY<gameCanvasY && gameAliensBool[gameAlienRandInt%5][gameAlienRandInt%11]==false){
    strokeWeight(4)
    line(gameAlienLineX,gameAlienLineY,gameAlienLineX,gameAlienLineY+10)
  }
  
  for(gameAlienYIncrease=0; gameAlienYIncrease<gameAlienLineSpeed;gameAlienYIncrease++){
    gameAlienLineY+=1 // increase by 1 according to the line speed
  }
  //if the line is off the screen, repeat the process
  if(gameAlienLineY>gameCanvasY){
    gameAlienRandInt = Math.floor(random(1,56))
    gameAlienShotBool=false
    gameAlienLineY=-2
  }

}
//this is a function to detect if the bullet touches the shield
function gameAliensShotShield(){
  c = get(gameAlienLineX,gameAlienLineY+11)
  if(c[0]==255 || c[0]==254){
    pock1(shield1,gameAlienLineX,gameAlienLineY)
  } 
}
     
// function that makes the aliens disappear at the end
function gameDisappear(){
  for(i=0;i<5;i++){
    for(k=0;k<11;k++){
      // if the bullet is shot, if it is in the coordinated of an invader, and that invader is still alive, then make that alien true(which means that it has been shot) and reset everything
      if(gameLineBool == true && gameAliensX[k]-15<gameBSX2 && gameAliensX[k]+40>gameBSX2 && gameLineY > gameAliensY[i] && gameLineY < gameAliensY[i]+40 && gameAliensBool[i][k]==false){
        gameAliensBool[i][k]=true
        gameAlienKilledBool=true
        gameLineBool=false
        gameLineY=550
        gameAlienKilled+=1
        //points according to what aliens is shot
        if(i==0){
          gameScore+=40
        }
        else if(i==1 || i==2){
          gameScore+=20
        }
        else{
          gameScore+=10
        }
        invaderKilled.play() // killed invader music
        //the effect after an invader is killed
        if(gameAlienKilledBool==true){
          if(themeVal=="Blue"){
            image(killedAlienImg,gameAliensX[k],gameAliensY[i],50,50)
          }
          else if(themeVal=="Grey"){
            image(killedAlienGreyImg,gameAliensX[k],gameAliensY[i],50,50)
          }
          else{
            image(killedAlienGoldImg,gameAliensX[k],gameAliensY[i],50,50)
          }
          gameAlienKilledBool=false
        }
      }    
    }
  }
}

//Function for the information at the top of the game screen
function gameInformation(){
  textFont(introGameFont)
  noStroke()
  strokeWeight(1)
  textSize(30)
  fill(255)
  if(gameScore==0){
    text('Score',100,40)
  }
  else{
    text("Score\t\t"+gameScore,100,40)
  }
  if(h!=null){
    text("Time " + h + ":" + minute(),400,40)
  }
  else{
    text("Time " + hour() + ":\t" + minute(),400,40)
  }
  text("Lives",600,40)
  //number of live indicated by the ships
  for (gameLiveLoop = 0; gameLiveLoop<gameUserLives; gameLiveLoop++){
    image(gameBattleshipImg,gameLivesX[gameLiveLoop],10,30,50)
  }
   

}

//function checking if the aliens bullet has hit the ship
function gameLivesTaken(){
  //this if statements checks if it the aliens bullet is in between all four points of the ship
  if(gameAlienLineX>gameBattleshipX && gameAlienLineX<gameBattleshipX+50 && gameAlienLineY>600 && gameAlienLineY<670){
    //if true, reset everything
    gameUserLives-=1
    gameAlienLineY=-2
    // if the user doesn't have one life left, the change the x value of the battleship to 0 or the left side of the screen. You don't want it to work with the last live for more effect
    if(gameUserLives!=0){
      gameBattleshipX=0
    }
    //play music for the ship being hit
    explosion.play()
  }
  //checks if there is no lives left and change game to endlose and reset everything if true
  if(gameUserLives==0){
    gamedisplayshipBool=false
    gameUserLives=3
    playAgainBool=false
    page='endLose'
    resettingGame()
    for(gameArraySections = 0; gameArraySections<5;gameArraySections++){
      for(changingBack2false=0;changingBack2false<11;changingBack2false++){
        gameAliensBool[gameArraySections][changingBack2false]=true
      }
    }
  }
}

//Function that creates the shield by calling the image that was built before
function gameBuildingTheShields(){
  image(shield1, 75, 450)
}

//Checks if all the invaders/aliens were killed and reset the game if true
function gameEnd(){
  if(gameAlienKilled==55){
    page="endWin"
    playAgainBool=true
    resettingGame()
    for(gameArraySections = 0; gameArraySections<5;gameArraySections++){
      for(changingBack2false=0;changingBack2false<11;changingBack2false++){
        gameAliensBool[gameArraySections][changingBack2false]=false
      }
    }
  }
}

//this function checks if the bullet shot by the ship touches the shield by using the get() function 
function gameShipBulletShield(){
  if(bsC!=null && (bsC[0]==255 || bsC[0]==254)){
    pock2(shield1,gameBSX2+25,gameLineY+94) // this is a function that puts the holes in the shield
  }
}


//This is the function that puts the holes when an invader hits it
function pock1(img,x,y) { // the function calls the img (which I notice is not needed anymore), and the x and y, where it detects the shield
  img.loadPixels() // Load the pixels of the img
  for(px=x-75; px<x-65; px++){
    for(py=y-440; py<y-430; py++){ // loop through the the size of the img
      img.set(px, py, color(0,0,0,0)); // the set value of the imgs to transparent (which is done by making the alpha value 0 that last paramater in the color function). I did it four times for a better effect
      img.set(px+15,py,color(0,0,0,0))
      img.set(px+11,py+7,color(0,0,0,0))
      img.set(px-7,py+5,color(0,0,0,0))
    }
  }
  img.updatePixels(); // update all the new changes on the img
  gameAlienLineY=750 // move the alien line y below the screen so that its algorithm can reset
}

//the same thing is used for pock2 but its for the battleship
function pock2(img,x,y) {
  img.loadPixels()
  for(px=x-75; px<x-60; px++){
    for(py=y-450; py<y-425; py++){
      img.set(px, py, color(0,0,0,0));
    }
  }
  img.updatePixels();

  gameLineBool=false
  gameLineY=550

}

//This function is the one that resets everything that is common from the three ways to beat/lose the game.
function resettingGame(){
  vx=0 // make the velocity x 0 so that it does not keep moving
  gameAlienKilled=0 // number of aliens killed to 0 so that the code can check if the game is beaten the next time
  gameRedAlienX = 3000
  let countingIndex=0  // these two local variables are used to reset all the x and y values of the aliens
  let countingIndexY=0

  for(resetX=100;resetX<=700;resetX+=60){
    gameAliensX[countingIndex] = resetX
    countingIndex+=1
  }
  for(resetYVal=80;resetYVal<=320;resetYVal+=60){
    gameAliensY[countingIndexY]=resetYVal
    countingIndexY+=1
  }

}

//This function checks if the y value of an alive alien touches the top part of the shield. If true, the game will be finished and the user would be sent to endLose
function gameAliensHeightCheck(){
  for(x = 0; x<5;x++){
    for(y=0;y<11;y++){
      if(gameAliensBool[x][y]==false && gameAliensY[x]>410){
        page='endLose'
        playAgainBool=false
        resettingGame()
      }
    }
  }
}
