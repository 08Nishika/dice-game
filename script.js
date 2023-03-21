var randomNumber1=Math.floor(Math.random()*6)+1;//generates random no. from 1 to 6
var randomDiceImage="dice"+randomNumber1+".png";//dice1.png to dice6.png
var randomImageSource="./img/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;//generates random no. from 1 to 6
var randomDiceImage1="dice"+randomNumber2+".png";//dice1.png to dice6.png
var randomImageSource1="./img/"+randomDiceImage1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource1);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML=" player 1 WINS :)"
  document.getElementById("heading").style.color="white";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML=" player 2 WINS :)"
    document.getElementById("heading").style.color="yellow";
}
else{
  document.querySelector("h1").innerHTML=" DRAW :)";
    document.getElementById("heading").style.color="cyan";
  
}