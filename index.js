
var randomNumber1=Math.random();
randomNumber1=Math.floor((randomNumber1*6)+1);
var randomNumber2=Math.random();
randomNumber2=Math.floor((randomNumber2*6)+1);
var images1 = "images/dice"+ randomNumber1 +".png";
var images2="images/dice"+ randomNumber2 +".png";

if(randomNumber1>randomNumber2){
    result="player1 wins!";
}
else if(randomNumber2>randomNumber1){
    result="player2 wins!";
}
else{
    result="Draw.";
}

document.querySelector(".img1").setAttribute("src",images1);
document.querySelector(".img2").setAttribute("src",images2);
document.querySelector("h1").innerHTML=result;