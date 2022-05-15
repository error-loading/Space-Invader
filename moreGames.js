var moreGamesRectX = 0 // x val of the gold rect

//calling all the functions in more games
function moreGames(){
  moreGamesAll()
}

//This function has everything for the moregames section
function moreGamesAll(){
  //code for the rect appearing
  noStroke()
  fill(218,165,32)
  rect(0,0,moreGamesRectX,600)
  //if the x is less then 200, and they don't press the x, then increase the rect x
  if(moreGamesRectX<=200 && !mouInRect(140,20,180,60) && !mouseIsPressed){
    moreGamesRectX+=10
  }
  if(moreGamesRectX>=200){
    //code for title
    stroke(0)
    strokeWeight(1)
    textAlign(LEFT,TOP)
    rect(15,80,165,30)
    fill(0)
    textAlign(CENTER,TOP)
    textSize(20)
    textFont(introGameFont)
    text("Best Scores",100,85)
    
    //code for the scores
    textSize(18)
    //looping through all the elements in that array
    for(i=0;i<10;i++){
      //if they didn't enter anyy name, then put there name as anonymous
      if(bestScoreName4[i]==null || bestScoreName4[i] == "" && bestScore4[i]!=0){
        text(bestScore4[i]+"\t-\tanonymous",100,150+i*30)
      }
      //else, display score and name
      else{
       text(bestScore4[i]+"\t-\t" +bestScoreName4[i],100,150+i*30) 
      }
    }
    //code for the x
    strokeWeight(5)
    line(140,20,180,60)
    line(140,60,180,20)
    //if they press the x, go back to the intro page
    if(mouInRect(140,20,180,60) && mouseIsPressed){
      moreGamesRectX=0
      page="intro"
    }
  }
}



