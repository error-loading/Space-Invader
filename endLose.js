//this is the page when the user loses the game
function endLose(){
  endLoseImgs()
  endLoseInfo()
  endLoseReturn()
}

//All the specific endLose functions

//This is a img of all the pictures in endLose screen
function endLoseImgs(){
  createCanvas(gameCanvasX,gameCanvasY)
  image(gameBackgroundImg,0,0)
  image(shield1, 100, 450)
  image(killedBattleshipImg,gameBattleshipX,gameCanvasY-100,73,36)
}

//All the information at the top of the screen
function endLoseInfo(){
  textFont(introGameFont)
  playAgainBool=true
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
    text("Time " + h + ":" + minute(),350,40)
  }
  else{
    text("Time " + hour() + ":" + minute(),350,40)
  }
  text("Lives",600,40)
  textSize(80)
  text("GAME OVER",475,200)
}

//Function to return back to intro screen
function endLoseReturn(){
  textSize(40)
  textAlign(CENTER,CENTER)
  if(mouInRect(235,336,481,30)){
    fill(218,165,32)
    text("RETURN TO MAIN SCREEN",475,350)
    if(mouseIsPressed){
      page="intro"
      gameScoreChecker()
      gameScore=0
    }
  }
  else{
    text("RETURN TO MAIN SCREEN",475,350)
  }
}

// This function checks if the score is greater then any of the best scores
function gameScoreChecker(){
  for(i=0;i<10;i++){ // loop through the # of elements in that best score array
    if(bestScore4[i]<=gameScore){ // if gameScore is greater then that value
      bestScore4.splice(i,0,gameScore) // add gameScore at that index
      bestScoreName4.splice(i,0,nameVal) // add that persons name at that index
      bestScore4.pop() // remove the last index 
      bestScoreName4.pop() // remove the last index
      storeItem('bestScore4',bestScore4) // store it permanently
      storeItem('bestScoreName4',bestScoreName4) // sotre it permanently
      break
    }
  }
}