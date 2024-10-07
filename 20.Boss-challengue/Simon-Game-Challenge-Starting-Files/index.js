let randomChosenColour = ""
const buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []
let userClickedPattern = []
let level = 0

function nextSequence(){
    let randomNumber = Math.floor(Math.random()*4)
    randomChosenColour = buttonColours[randomNumber]
    gamePattern = [...gamePattern, randomChosenColour]
    userClickedPattern=[]

    playSound(randomChosenColour)
    $(`div#${randomChosenColour}`).fadeOut().fadeIn()
    $("h1").text("Level " + level)
}

function userSequence(e){
    let correctos = 0
    let userChosenColour = e.target.id
    userClickedPattern = [...userClickedPattern, userChosenColour]

    playSound(userChosenColour)
    animatePress(userChosenColour)

    userClickedPattern.forEach((step, index) => {
        if(userClickedPattern[index] === gamePattern[index]){
            correctos ++
            nextStep(correctos,gamePattern)
            
        }else{
            gameOver()
        }
    });
}

function gameOver(){
    playSound("wrong")
    $("body").addClass("game-over")
    setTimeout(()=>{
        $("body").removeClass("game-over")
    },200)
    localStorage.removeItem("firstKeyPress")
    userClickedPattern=[]
    gamePattern=[]
    level= 0
    $("h1").text("Game Over, Press Any Key to Restart")
    correctos=0
}

function nextStep(correctos,gamePattern){
    let lengthGamePattern = gamePattern.length 
    if(correctos === lengthGamePattern){
        setTimeout(()=>{nextSequence()}, 1000)
        level ++ 
    } 
    return
}

function playSound(color){
    $("audio").attr("src",`./sounds/${color}.mp3`)
    document.querySelector("audio").play()
}

function animatePress(currentColour){
    $(`div#${currentColour}`).addClass("pressed")
    setInterval(()=>{
        $(`div#${currentColour}`).removeClass("pressed")
    },100)
}

$(document).keypress(function(){
    if(localStorage.getItem("firstKeyPress")){

    }else{
        localStorage.setItem("firstKeyPress", "first");
        nextSequence();
        level = 0
    }
})

$("div.btn").click(function(e){
    userSequence(e);
})

$(document).ready(function(){
    localStorage.removeItem("firstKeyPress")
})