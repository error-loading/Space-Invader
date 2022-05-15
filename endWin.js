var endWinVid //background video
var playAgainBool = true // if the user wants to play again

//calling all the functions here
function endWin(){
  endWinImg()
  endWinInfo()
  endWinReturn()
}

//All the imgs/videos in the end win page
function endWinImg(){
  createCanvas(850,700)
  background(0)
  endWinVid.show()
}

//All the information at the top of the end win page
function endWinInfo(){
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
    text("Time " + h + ":" + minute(),300,40)
  }
  else{
    text("Time " + hour() + ":\t" + minute(),300,40)
  }
  text("Lives",600,40)
  fill(255)
  textSize(80)
  text("GAME OVER",850/2,100)
  
  //displaying num of lives left
  for (gameLiveLoop = 0; gameLiveLoop<gameUserLives; gameLiveLoop++){
    image(gameBattleshipImg,gameLivesX[gameLiveLoop],10,30,50)
  }
   
}

//Function to return back to the intro from the end win page
function endWinReturn(){
  textSize(40)
  textAlign(CENTER,CENTER)
  if(mouInRect(195,583,258,33)){
    fill(218,165,32)
    text("RETURN TO MAIN SCREEN",850/2,600)
    if(mouseIsPressed){
      page="intro" 
      playAgainBool=true 
      gameScoreChecker() // checks if the score is greater then one of best scores
      gameScore=0
      gameUserLives=3
      endWinVid.hide()
    }
  }
  else{
    text("RETURN TO MAIN SCREEN",850/2,600)
  }
  if(mouInRect(308,635,236,32)){
    fill(218,165,32)
    text("PLAY AGAIN",850/2,650)
    if(mouseIsPressed){
      page="fixPage"
      endWinVid.hide()
      playAgainBool=false
    }
  }
  else{
    fill(255)
    text("PLAY AGAIN",850/2,650)
  }
}