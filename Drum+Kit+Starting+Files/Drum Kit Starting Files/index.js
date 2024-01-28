// document.querySelector(".drum").addEventListener("click", handleClick);

var drumButtons = document.querySelectorAll(".drum")

for (var i = 0; i < drumButtons.length; i++)
{
    drumButtons[i].addEventListener("click", handleClick);
}

function handleClick() {
    // console.log(this.innerHTML);

    switch(this.innerHTML) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            break;

        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            break;

        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            break;
    
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            break;

        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            break;
        
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            break;

        default:
            console.log(this.innerHTML);
        }
    // var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
}


// switch (expression) {
//     case value1:
//       // Code to be executed if expression matches value1
//       break;
//     case value2:
//       // Code to be executed if expression matches value2
//       break;
//     // Additional cases can be added as needed
//     default:
//       // Code to be executed if none of the cases match the expression
//   }
  
// document.querySelector(".w").addEventListener("click", function(){
//     var audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
// })

// document.querySelector(".a").addEventListener("click", function(){
//     var audio = new Audio("./sounds/tom-2.mp3");
//     audio.play()
// })

// document.querySelector(".s").addEventListener("click", function(){
//     var audio = new Audio("./sounds/tom-3.mp3");
//     audio.play();
// })

// document.querySelector(".d").addEventListener("click", function(){
//     var audio = new Audio("./sounds/tom-4.mp3");
//     audio.play();
// })

// document.querySelector(".j").addEventListener("click", function(){
//     var audio = new Audio("./sounds/crash.mp3");
//     audio.play();
// })

// document.querySelector(".k").addEventListener("click", function(){
//     var audio = new Audio("./sounds/kick-bass.mp3");
//     audio.play();
// })

// document.querySelector(".l").addEventListener("click", function(){
//     var audio = new Audio("./sounds/snare.mp3");
//     audio.play();
// })