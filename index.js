var randomNum1=Math.floor(Math.random()*6)+1;
var randomNum2=Math.floor(Math.random()*6)+1;

document.getElementsByClassName("img1")[0].src="images/dice"+randomNum1+'.png';
document.getElementsByClassName("img2")[0].src="images/dice"+randomNum2+'.png';

if(randomNum1>randomNum2){
    document.getElementsByTagName("h1")[0].innerHTML='&#128681 Palyer 1 Wins!';
}else if(randomNum2>randomNum1){
    document.getElementsByTagName("h1")[0].innerHTML='Palyer 2 Wins! &#128681';
}else{
    document.getElementsByTagName("h1")[0].innerHTML='Draw!';
}