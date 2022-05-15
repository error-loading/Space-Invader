//Specific page images
function introImages(){
  //intro images
  
  alienImgs() // I grouped this section of images for the alien sprites and themes
  
  introBackground = createImg("https://media.istockphoto.com/vectors/abstract-black-stripes-diagonal-background-vector-id1294603953?k=20&m=1294603953&s=612x612&w=0&h=KLAV73oMUFA2ucWMMTOdXT8Vn4LVUsh6NTiXRmlX5ZA=","",'anonymous') 
  introFullScreen = createImg("https://i.ibb.co/2ZHYbQW/Screenshot-2021-12-02-191655.png","",'anonymous') // image of the full screen in intro
  introThreeLine = createImg("https://i.ibb.co/RPJzhkD/Screenshot-2021-12-02-210119.png","",'anonymous') // image of the menu screen in intro
  
  //hiding these pictures
  introBackground.hide()
  introFullScreen.hide()
  introThreeLine.hide()
  
  // buffer screen images
  bufferScreenBackground = createImg("https://static.vecteezy.com/system/resources/previews/001/236/702/non_2x/diagonal-black-background-with-golden-lines-vector.jpg","","anonymous") // the background in bufferscreen
  
  bufferScreenBattery = createImg('https://i.ibb.co/WsFNwyN/Screenshot-2021-12-29-001435.png',"",'anonymous') // battery in buffer screen
  
  bufferScreenBatteryLoading = createImg('https://i.ibb.co/7yc0bpz/Screenshot-2021-12-29-002956.png',"",'anonymous') // the cells of the battery in buffer screen
  
  //hiding the pictures
  
  bufferScreenBackground.hide()
  
  bufferScreenBatteryLoading.hide()
  
  bufferScreenBattery.hide()
  //game images
  gameBattleshipImg = createImg("https://i.ibb.co/C5pHYky/output-onlinepngtools-19.png","",'anonymous') // image of the battleship
  
  gameBattleshipImg.hide()
  
  gameInvaderShield = createImg("https://i.ibb.co/xsjfDdN/2021-12-17-0je-Kleki.png","","anonymous") // image of the shield
  
  gameInvaderShield.hide()
  
  gameBackgroundImg = createImg('https://i.imgur.com/IeurJdx.jpg','','anonymous') // image of the background in the game
  
  gameBackgroundImg.hide()
  
  //endLose
  killedBattleshipImg = createImg('https://i.ibb.co/jzTg33y/ezgif-com-gif-maker-7.png',"","anonymous") // image of the killed ship 
  
  killedBattleshipImg.hide()
  
}

//Types of images in specific pages

function alienImgs(){
  //All the blue themed aliens in the game
  gameAlienBottom[0].push(createImg("https://i.ibb.co/ZT2v42C/ezgif-com-gif-maker-23.png","","anonymous"),createImg("https://i.ibb.co/BjBTcQr/ezgif-com-gif-maker-24.png","","anonymous"))
  gameAlienBottom[1].push(createImg("https://i.ibb.co/9m0zMd1/ezgif-com-gif-maker-17.png","","anonymous"),createImg("https://i.ibb.co/G0p6kbZ/ezgif-com-gif-maker-22.png","","anonymous"))
  gameAlienMiddle[0].push(createImg("https://i.ibb.co/sjr6KZr/ezgif-com-gif-maker-25.png","","anonymous"),createImg("https://i.ibb.co/kDyGhnv/ezgif-com-gif-maker-26.png",'',"anonymous"))
  gameAlienMiddle[1].push(createImg("https://i.ibb.co/4jkmtJz/ezgif-com-gif-maker-18.png","","anonymous"),createImg("https://i.ibb.co/NTB7Q8m/ezgif-com-gif-maker-21.png",'',"anonymous"))
  gameAlienTop[0].push(createImg("https://i.ibb.co/ZdsT8dD/ezgif-com-gif-maker-27.png","","anonymous"),createImg("https://i.ibb.co/1K2qsp3/ezgif-com-gif-maker-28.png",'',"anonymous"))
  gameAlienTop[1].push(createImg("https://i.ibb.co/PNRDMhL/ezgif-com-gif-maker-19.png","","anonymous"),createImg("https://i.ibb.co/YyswDhY/ezgif-com-gif-maker-20.png",'',"anonymous"))
  
  //All the gold theme images in game

  gameAlienBottomGold[0].push(createImg("https://i.ibb.co/P9QBJz0/tile008.png","","anonymous"),createImg("https://i.ibb.co/NFNSQyh/tile007.png","","anonymous"))
  gameAlienBottomGold[1].push(createImg("https://i.ibb.co/Zf9cCXR/tile015.png","","anonymous"),createImg("https://i.ibb.co/brsMbQ9/tile014.png","","anonymous"))
  gameAlienMiddleGold[0].push(createImg("https://i.ibb.co/qk1pdLj/tile010.png","","anonymous"),createImg("https://i.ibb.co/jJg5JpD/tile009.png",'',"anonymous"))
  gameAlienMiddleGold[1].push(createImg("https://i.ibb.co/JkG0ff7/tile017.png","","anonymous"),createImg("https://i.ibb.co/VSkvZwt/tile016.png",'',"anonymous"))
  gameAlienTopGold[0].push(createImg("https://i.ibb.co/H2x21m2/tile011.png","","anonymous"),createImg("https://i.ibb.co/vB5NBdT/tile012.png",'',"anonymous"))
  gameAlienTopGold[1].push(createImg("https://i.ibb.co/SvCM6TB/tile018.png","","anonymous"),createImg("https://i.ibb.co/vYBDTpB/tile019.png",'',"anonymous"))
  
  //All the grey theme aliens in game
   gameAlienBottomGrey.push(createImg("https://i.ibb.co/QF7Tjw0/ezgif-com-gif-maker-12.png","","anonymous"),createImg("https://i.ibb.co/DgFB9P0/ezgif-com-gif-maker-13.png","","anonymous"))
  gameAlienMiddleGrey.push(createImg("https://i.ibb.co/2SS7Mkb/ezgif-com-gif-maker-14.png","","anonymous"),createImg("https://i.ibb.co/Lr2TR7V/ezgif-com-gif-maker-15.png",'',"anonymous"))
  gameAlienTopGrey.push(createImg("https://i.ibb.co/5cQgwdK/ezgif-com-gif-makergrey.png","","anonymous"),createImg("https://i.ibb.co/bb6DK4T/ezgif-com-gif-maker-11.png",'',"anonymous"))
  
  
  killedAlienImg = createImg('https://i.ibb.co/DD0vH9J/tile027.png','','anonymous')
  
  killedAlienGoldImg = createImg('https://i.ibb.co/16hg59y/tile020.png','','anonymous')

  killedAlienGreyImg = createImg('https://i.ibb.co/mbsxTYf/tile006.png','','anonymous')
  
  introRedAllien = createImg('https://i.ibb.co/nb90V0Q/ezgif-com-gif-maker-8.png','','anonymous')
  
  introBigPointAlien = createImg('https://i.ibb.co/4KVDXyB/ezgif-com-gif-maker-9.png','','anonymous')
  
  gameGreyBigPointAlien = createImg('https://i.ibb.co/ky1nPWs/ezgif-com-gif-maker-16.png','','anonymous')
  
  
  //Hiding all of the images imported
  
  for(numOfNestArr=0;numOfNestArr<2;numOfNestArr++){
    for(numOfEleInArr=0;numOfEleInArr<2;numOfEleInArr++){
      gameAlienBottom[numOfNestArr][numOfEleInArr].hide()
      gameAlienMiddle[numOfNestArr][numOfEleInArr].hide()
      gameAlienTop[numOfNestArr][numOfEleInArr].hide()
      
      gameAlienBottomGold[numOfNestArr][numOfEleInArr].hide()
      gameAlienMiddleGold[numOfNestArr][numOfEleInArr].hide()
      gameAlienTopGold[numOfNestArr][numOfEleInArr].hide()
      
      gameAlienBottomGrey[numOfEleInArr].hide()
      gameAlienMiddleGrey[numOfEleInArr].hide()
      gameAlienTopGrey[numOfEleInArr].hide()
    }
  }
  // hiding other alien images
  killedAlienImg.hide()
  
  killedAlienGoldImg.hide()
  
  killedAlienGreyImg.hide()
  
  introBigPointAlien.hide()
  
  introRedAllien.hide()
  
  gameGreyBigPointAlien.hide()
  
}
