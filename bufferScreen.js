// variable
//images
var bufferScreenBackground
var bufferScreenBatteryLoading
//Other variables
var bufferScreenLoadingX=0
var bufferScreenAlienX=10
var bufferScreenAlienY=400
var bufferScreenAlienYSpeed=1
var acceleration = 5/60


//calling all the functions here
function bufferScreen(){
  bufferScreenText()
  bufferScreenBatteryFunction()
  bufferScreenNext()
  bufferScreenAnimation()
}

//specific functions that are being called in bufferScreen 

//This is the text and background img in buffer screen
function bufferScreenText(){
  createCanvas(400,500)
  fill(255)
  textSize(40)
  image(bufferScreenBackground,0,0,800) // background img
  textFont(Fauna)
  text("SPACE\nINVADERS",200,75)
  textFont(introGameFont)
  text("LOADING",200,150)
  textFont('Times New Roman')
  text('...',295,155)
}

// This is the function for the battery in the buffer screen
function bufferScreenBatteryFunction(){
  image(bufferScreenBattery,75,200,230,150) // battery img
  
  //every second another cell of the battery is being added
  if(frameCount%60==0 && bufferScreenLoadingX<6){
    bufferScreenLoadingX+=1
  }
  //loops through num of cells, and displays them 
  for(numOfLoad = 0; numOfLoad<bufferScreenLoadingX; numOfLoad++){
    image(bufferScreenBatteryLoading,130+20*numOfLoad,250,20,40)
  }
}

//function to change pages
function bufferScreenNext(){
  //if the num of cells equals 6, then the page changes to game
  if(bufferScreenLoadingX==6){
    page="game"
    gameBattleshipXBool=true
    bufferScreenLoadingX=0
    bufferScreenAlienX=-30
    bufferScreenAlienY=400
    bufferScreenAlienYSpeed=1
  }
}

// the animation of the invader moving 
function bufferScreenAnimation(){
  var fr = int(frameCount/10) % 2 // fr keeps changing between 0 and 1 which can be used to change the sprites
  image(gameAlienBottomGrey[fr],bufferScreenAlienX,bufferScreenAlienY,50,40) // calling the image
  if (int(frameCount/10)%2==0 || int(frameCount/10)%2==1 ){ // constraints to move the x val of the alien
    bufferScreenAlienX+=2
  }
  if(bufferScreenAlienY>350 && bufferScreenAlienX>150){ // when it reaches a specific x val, increase the y val in a parabola sort of shape. The y>350 so it doesn't go of the screen and stops there
    bufferScreenAlienY-=bufferScreenAlienYSpeed
    bufferScreenAlienYSpeed+=acceleration
  }
  if(bufferScreenAlienX>350){ // to make it come back to the start
    bufferScreenAlienX=-30
    bufferScreenAlienY=400
    bufferScreenAlienYSpeed=1
  }
}