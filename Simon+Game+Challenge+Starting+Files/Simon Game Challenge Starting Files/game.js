var buttonColors = ["red", "blue","green","yellow"];
var userClickedPattern = [];
var gamePattern = [];

function playSound(color){
    var audio = new Audio("./sounds/"+color+".mp3");
    audio.play();
}; 


$(".btn").click(function(event) {
    var userChosenColour = event.target.id;
    $("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
})

function nextSequence() {
    var randomNumber = Math.random()*4;
    var randomChosenColour = buttonColors[randomNumber];
    randomNumber = Math.floor(randomNumber);
//    alert(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);
}


$("body").keydown(function (){
    // alert("Key pressed");
    nextSequence();
})
// console.log(userClickedPattern);

