var buttonColors = ["red", "blue","green","yellow"];
var userClickedPattern = [];
var gamePattern = [];
var gameLevel = 1;

$("body").keydown(function (){
    if ($("h1").text() === "Press Any Key To Start")
    {        
        $("h1").text("Level " + gameLevel);
        nextSequence();
    } 
})

function getRandomColor() {
    var randomNumber = Math.random()*4;
    randomNumber = Math.floor(randomNumber);
    return buttonColors[randomNumber];
}

function playSound(color){
    var audio = new Audio("./sounds/"+color+".mp3");
    audio.play();
}; 

function nextSequence() {
    color = getRandomColor();
    playSound(color);
    $("#"+color).fadeIn(100).fadeOut(100).fadeIn(100);
    gamePattern.push(color);
}

$(".btn").click(function(event) {
    var userChosenColour = event.target.id;
    $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(userChosenColour);
    // alert(userChosenColour);
    userClickedPattern.push(userChosenColour);
    alert(userClickedPattern.length);
    alert(gamePattern.length);

    if (userClickedPattern.length === gamePattern.length) {    
        if (JSON.stringify(gamePattern) === JSON.stringify(userClickedPattern))
        {
            gameLevel = gameLevel + 1;
            $("h1").text("Level " + gameLevel);

            nextSequence();
        }
        else {
            $("h1").text("You Lose!!!");
            console.log(gamePattern);
            console.log(userClickedPattern);
            userClickedPattern = [];
    
    
        }
    }
})

