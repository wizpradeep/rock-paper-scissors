console.log("Hello, World!")

let playerScore = 0;
let computerScore = 0;

const rePlay = document.getElementById("rePlay")

const userOpt = Array.from(document.querySelectorAll(".userOpt"))
const computerOpt = Array.from(document.querySelectorAll(".computerOpt"))
let computer;
let user;
let result;

document.getElementById("message").innerHTML = "Choose one" 


//function to make all black
function makeAllBlack(element){
  userOpt.forEach((element)=>{
    element.style.color = "black"
  })
}

//function to make computer option blue
function chooseComputer(){
  const randomNumber = Math.floor(Math.random() * 3);

  for (let i = 0; i < computerOpt.length; i++) {
    computerOpt[randomNumber].style.color = "blue"
  }

   //  computer choice evaluation
   if(computerOpt[0].style.color == "blue"){
     computer = "rock"
   }
   else if(computerOpt[1].style.color == "blue"){
     computer = "paper"
   }
   else if(computerOpt[2].style.color == "blue"){
     computer = "scissor"
   }


  // user  choice evaluation
  if(userOpt[0].style.color == "blue"){
    user = "rock"
  }
  else if(userOpt[1].style.color == "blue"){
    user = "paper"
  }
  else if(userOpt[2].style.color == "blue"){
    user = "scissor"
  }

  resultEval(user,computer)

  console.clear()
  console.log("user = ",user)
  console.log("computer = ",computer)

  document.getElementById("playerScore").innerHTML = playerScore
  document.getElementById("computerScore").innerHTML = computerScore
  

  document.getElementById("message").innerHTML = result + `</br> Click Replay to play again`

}


//function to make all computer option black
function makeAllComputerBlack(){
  computerOpt.forEach((element)=>{
    element.style.color = "black"
  })
}


//fuction to make pointer event none
function makePointerEventNone(){
  userOpt.forEach((element)=>{
    element.style.pointerEvents = "none"
  })
}


//fuction to make pointer event auto
function makePointerEventAuto(){
  userOpt.forEach((element)=>{
    element.style.pointerEvents = "auto"
  })
}

//result evaluation function
function resultEval(user,computer){
  if(user == computer){
    result = "Draw"
  }
  else if(user == "rock"){
    if(computer == "paper"){
      result = "Computer Won"
      computerScore += 1
    }
    else{
      result = "You Won"
      playerScore += 1
    }
  }
  else if(user == "paper"){
    if(computer == "rock"){
      result = "You Won"
      playerScore += 1
    }
    else{
      result = "Computer Won"
      computerScore += 1
    }
  }
  else if(user == "scissor"){
    if(computer == "paper"){
      result = "You Won"
      playerScore += 1
    }
    else{
      result = "Computer Won"
      computerScore += 1
    }
  }
  result = result.toString()
  message = result
}

// on click icons
userOpt.forEach((element)=>{
  element.addEventListener("click",function(){  

    element.style.pointerEvents = "none";

    makeAllBlack()

    makePointerEventNone()

    element.style.color = "blue"

  setTimeout(chooseComputer,1000)  

    // updating score
  document.getElementById("playerScore").innerHTML  =  playerScore 
  document.getElementById("computerScore").innerHTML  =  computerScore 


  })
})


//function to replayGame
function replayGame(){
  makeAllBlack()  
  makeAllComputerBlack()  
  makePointerEventAuto() 

  document.getElementById("message").innerHTML = "Choose one" 
}

//on click rePlay
rePlay.addEventListener("click",function(){
  replayGame()
})

if(document.body.style.width < "600px"){
  userOpt.forEach((element)=>{
    element.classList.remove("fa-4x ")
    element.classList.add("fa-3x ")
  })
}  
