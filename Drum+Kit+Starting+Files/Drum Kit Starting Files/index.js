// document.querySelector(".drum").addEventListener("click", handleClick);

var drumButtons = document.querySelectorAll(".drum")

for (var i = 0; i < drumButtons.length; i++)
{
    drumButtons[i].addEventListener("click", function () {
        playSound(this.innerHTML)
    })

}

function playSound(sname) {
    // console.log(sname);

    var activeButton = document.querySelector("."+sname);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)

    switch(sname) {
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
    // activeButton.classList.remove("pressed");

}

document.addEventListener("keydown", function(event) {
    // console.log(event.key);
    playSound(event.key);
})