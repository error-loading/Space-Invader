//Function that fixes the shields and resets everything before the game starts
function fixPage(){
  background(0)
  //if they want to play again, the shield has to be the same as before, also the speed increases if you play more then 2 times
  if(playAgainBool){
    fixShields()  
    gameAlienLineSpeed=10
    gameAlienSpeed = 10
  }
  else{
    gameAlienLineSpeed=15
    gameAlienSpeed = 15
  }
  page="bufferScreen"
  resettingGame() // resetting everything
  //making all the aliens false to display them
  for(gameArraySections = 0; gameArraySections<5;gameArraySections++){
    for(changingBack2false=0;changingBack2false<11;changingBack2false++){
      gameAliensBool[gameArraySections][changingBack2false]=false
    }
  }
  //resetting other things
  gameBattleshipX=400
  gameLineBool=false
  gameLineY = 550 
}