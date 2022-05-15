//variables in settings
var settingsSliderForSound
var settingsTimeX=225
var settingsThemeX=225
let h;
var themeVal = 'Blue'
var nameVal

//this is where the specific pages for settings is being called
function settings(){
  settingsTitle()
  settingsSlider1()
  settingMusic()
  settingTime()
  settingTheme()
  settingName()
  settingReturn()
}
//This function does the background and the title. It also offsets everything else from other pages
function settingsTitle(){
  createCanvas(400,700)
  textAlign(CENTER,TOP)
  background(0)
  textFont(Fauna)
  textSize(30)
  fill(218,165,32)
  text("SETTINGS",200,50)
}

//This function displays and gives the functionality for the volume slider
function settingsSlider1(){
  noStroke()
  fill(255)
  textFont(introGameFont)
  text("VOLUME",200,100)
  settingsSliderForSound.show() // This lines show the slider created in setup
  let settingsliderValue = settingsSliderForSound.value()
  themeSong.volume(settingsliderValue)
}

//This function displays and gives the functionality to the music button
function settingMusic(){
  textAlign(CENTER,TOP)
  textSize(23)
  textFont(introGameFont)
  fill(255)
  text("MUSIC",200,180)
  fill(218,165,32)
  circle(175,250,50)
  circle(225,250,50)
  rect(175,225,50,50)
  fill(255)
  textFont('times new roman')
  circle(settingsMusicX,250,46)
  textSize(23)
  text("YES",176,237)
  text("NO",225,235)
  if(mouseIsPressed && mouInRect(202,227,46,46)){
    settingsMusicX=175
  }
  else if(mouseIsPressed && mouInRect(152,227,46,46)){
    settingsMusicX=225
  }
  if(settingsMusicX==225){
    themeSong.play()
  }
  else{
    themeSong.pause()
  }
}


//code for the option for the time
function settingTime(){
  h = hour()
  textFont(introGameFont)
  text('TIME',200,300)
  fill(218,165,32)
  circle(175,375,50)
  circle(225,375,50)
  rect(175,350,50,50)
  textFont('times new roman')
  fill(255)
  textSize(15)
  text('Nor-\nmal',176,360)
  text('Mil-\ntary',225,360)
  circle(settingsTimeX,375,46)
  
  if(mouseIsPressed && mouInRect(202,352,46,46)){
    settingsTimeX=175
  }
  else if(mouseIsPressed && mouInRect(152,352,46,46)){
    settingsTimeX=225
  }
  if(settingsTimeX==175 && h>12){
    h-=12
  }
}

//code for the theme
function settingTheme(){
  textFont(introGameFont)
  textSize(20)
  text('THEME',200,425)
  image(gameAlienBottomGold[1][0],75,465)
  image(gameAlienBottom[1][0],175,465)
  image(gameAlienBottomGrey[0],275,465)
  fill(255)
  themeRadio.show()
  let placeValue = themeRadio.value()
  if(placeValue){
    themeVal=placeValue
  }
}

//code for the name
function settingName(){
  textFont(introGameFont)
  text('USERNAME',200,550)
  inp.show()
}

//getting the value for the input
function settingCheckName(){
  nameVal=inp.value()
}

//code to go back to the intro page
function settingReturn(){
  if(mouInRect(325,618,55,16)){
    fill(218,165,32)
    textFont(introGameFont)
    text("BACK",350,620)
    if(mouseIsPressed){
      page='intro'
    }
  }
  else{
    fill(255)
    textFont(introGameFont)
    text("BACK",350,620)
  }
}