//intro variables
var settingsMusicX=225

//background images
var introBackground
var introRedAllien
var introFullScreen
var introThreeLine

//bools to show the aliens
var introTopBool=false
var introMidBool = false
var introBottomBool = false
var introBigPointBool = false

//same for the words
var introTopWordBool=false
var introMidWordBool = false
var introBottomWordBool = false
var introBigPointWordBool = false



//This is where all the functions from the draw functions are being called
function intro(){
  createCanvas(introCanvasX,introCanvasY)
  introShowAliens()
  introBackgroundPic()
  introTitle()
  introAlliensAndPoints()
  introButtonFunctions()
  introFullScreenButton()
  introMenuButton()
  introThemeSong()
  //Hiding the forms from setting so it doesn't appear anywhere other then settings
  settingsSliderForSound.hide()
  themeRadio.hide()
  inp.hide()
}



//Intro functions
function introBackgroundPic(){
  image(introBackground,0,0,800,600) // background img
}

//This function displays the title on the intro screen
function introTitle(){
  textFont(Fauna) // using a downloaded font
  textSize(50)
  fill(255)
  textAlign(CENTER,CENTER) // aligning it so that everything starts in the center
  text("SPACE",introCanvasX/2,50)
  fill(218,165,32)
  text("INVADERS",introCanvasX/2,100)
}

//this function is dedicated to make the effect of the imgs slowly appearing in intro page through flags
function introShowAliens(){
  //they all increase by 60 for that timing effect
  if(frameCount%60==0){
    introBottomBool=true
  }
  if(frameCount%120==0){
    introMidBool =true
  }
  if(frameCount%180==0){
    introTopBool=true
  }
  if(frameCount%240==0){
    introBigPointBool =true
  }
  
  if(frameCount%90==0){
    introBottomWordBool=true
  }
  if(frameCount%150==0){
    introMidWordBool =true
  }
  if(frameCount%210==0){
    introTopWordBool=true
  }
  if(frameCount%270==0){
    introBigPointWordBool =true
  }
  
}
//This function displays all the aliens in the Space Invaders Intro Screen
function introAlliensAndPoints(){
  textFont(introGameFont)
  textSize(40)
  //displaying the aliens with specific themes on the intro page
  // self note, remember to change it into a nested nested array so that there are not that many if statements
  
  //if that bool before is true, than show the images. This causes that effect
  if(introBottomBool){
    if(themeVal=='Gold'){
      image(gameAlienBottomGold[1][0],260,180,60,50)
    }
    else if(themeVal=="Grey"){
      image(gameAlienBottomGrey[0],260,180,50,45)
    }
    else{
      image(gameAlienBottom[1][0],260,180,50,45)
    }
    if(introBottomWordBool){
      text("10 PTS",460,202)
      textFont("Times New Roman")
      text("=",350,210)
    }
  }
  //if the intro mid bool is true
  if(introMidBool){
    textFont(introGameFont) // downloaded font
    if(themeVal=='Gold'){ // checks gold theme
      image(gameAlienMiddleGold[1][0],260,248,60,50)
    }
    else if(themeVal=="Grey"){ 
      image(gameAlienMiddleGrey[0],260,248,60,45)
    }
    else{
      image(gameAlienMiddle[1][0],260,248,60,45)
    }
    if(introMidWordBool){
      text("20PTS",460,272)
      textFont("Times New Roman")
      text("=",350,280)
    }
  }
  if(introTopBool){
    textFont(introGameFont)
    if(themeVal=='Gold'){
      image(gameAlienTopGold[1][0],260,308,60,50)
    }
    else if(themeVal=="Grey"){
      image(gameAlienTopGrey[0],260,308,60,55)
    }
    else{
      image(gameAlienTop[1][0],260,308,60,50)
    }
    if(introTopWordBool){
      text("40PTS",460,332)
      textFont("Times New Roman")
      text("=",350,340)
    }
  }
  
  if(introBigPointBool){
    textFont(introGameFont)
    if(themeVal=="Gold"){
      image(introBigPointAlien,270,380,50,35)
    }
    else if(themeVal=="Grey"){
      image(gameGreyBigPointAlien,270,380,50,35)
    }
    else{
      image(introRedAllien,270,380,50,35)
    }
    if(introBigPointWordBool){
      text("100PTS",460,392)
      textFont("Times New Roman")
      text("=",350,400)
    }
  }
}

//displaying the texts that forward to the settings and the game
function introButtonFunctions(){
  if (mouInRect(202,439,393,22) && page=="intro"){
    fill(33,40,69)
    textFont(introGameFont)
    text("Play Space Invaders",introCanvasX/2,450)
    //if mousIsPressed and the animation is done
    if(mouseIsPressed && introTopWordBool && introMidWordBool && introBottomWordBool && introBigPointWordBool && introTopBool && introMidBool && introBottomBool && introBigPointBool){
      page="fixPage"
    }
  }
  else{
    fill(255)
    textFont(introGameFont)
    text("Play Space Invaders",introCanvasX/2,450)
  }
  //if mouse is in the rect of settings
  if (mouInRect(314,488,263,30) && page=="intro"){
    fill(33,40,69)
    textFont(introGameFont)
    text("Setting",introCanvasX/2,500)
    //if mousIsPressed and the animation is done
    if(mouseIsPressed && introTopWordBool && introMidWordBool && introBottomWordBool && introBigPointWordBool && introTopBool && introMidBool && introBottomBool && introBigPointBool){
      page="settings"
    }
  }
  //else display a white collor
  else{
    fill(255)
    textFont(introGameFont)
    text("Setting",introCanvasX/2,500)
  }
}


//This function displays the fullscreen button and its functionality.
function introFullScreenButton(){
  image(introFullScreen,introCanvasX-100,5,100,100)
  if (mouInRect(introCanvasX-100,5,100,100)&& page=="intro"){
    cursor("grab")
  }
  else{
    cursor("auto")
  }
}

//This function plays the themesong
function introThemeSong(){
  //plays or pauses the song according to what is chosen in settings
  if(settingsMusicX==225){
    themeSong.play()
  }
  else{
    themeSong.pause()
  }
}

//This function displays the menu button its functionality
function introMenuButton(){
  image(introThreeLine,20,20,50,50)
 
  if (mouInRect(20,20,50,50) && page=="intro" && mouseIsPressed && introTopWordBool && introMidWordBool && introBottomWordBool && introBigPointWordBool && introTopBool && introMidBool && introBottomBool && introBigPointBool){
    page="moreGames"
  }
}

function mousePressed(){
  if(mouInRect(introCanvasX-100,5,100,100) && page=="intro"){
    let fs=fullscreen()
    fullscreen(!fs)
  }
}