var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");

var clickNum1 = 0;
var clickNum2 = 0;

var display1 = document.getElementById("timesClicked1");
var display2 = document.getElementById("timesClicked2");

var name1 = document.getElementById("kitty1Name");
name1.innerHTML = "Kitty 1";
var name2 = document.getElementById("kitty2Name");
name2.innerHTML = "Kitty 2";

if(button1){
  button1.addEventListener('click',function(){
    clickNum1+=1;
    display1.innerHTML=clickNum1;
  },false);
}

if(button2){
  button2.addEventListener('click',function(){
    clickNum2+=1;
    display2.innerHTML=clickNum2;
  },false);
}
