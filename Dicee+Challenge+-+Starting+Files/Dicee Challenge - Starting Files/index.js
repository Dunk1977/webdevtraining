function getRandomNumber(){
    var randomNumber1 = Math.random();
    randomNumber1 = (randomNumber1 * 6)+1;
    randomNumber1 = Math.floor(randomNumber1);

    return randomNumber1;
}

Player1 = getRandomNumber();
Player2 = getRandomNumber();
document.querySelector(".img1").setAttribute("src", ("./images/dice"+Player1+".png"));
document.querySelector(".img2").setAttribute("src", ("./images/dice"+Player2+".png"));

if (Player1 > Player2) {
    document.querySelector("h1").innerHTML = "Player1 Wins!";
}
else if (Player2 > Player1) {
    document.querySelector("h1").innerHTML = "Player2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}


// console.log(randomNumber1);