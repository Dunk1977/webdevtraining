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





// console.log(userClickedPattern);

