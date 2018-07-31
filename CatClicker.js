//let button = document.getElementById("btn");
let list = document.getElementById("list-container");
let clickTimes = document.getElementById("timesClicked");
clickTimes.innerHTML = "0";
let catName = document.getElementById("name");
const buttonDiv = document.getElementById("button-div");
let prevCatEnt = 0;

function Cat(num){
  this.catNumber = num;
  //create element for name to be displayd when cat name clicked
  this.kittyName = "Kitty "+num;
  this.timesClicked = 0;
}

const numCats = [1,2,3,4,5];
let cats = [];
let buttons = [];
let imgs = [];

function setCat(c,num){
  catName.innerHTML = c.kittyName;
  //button.innerHTML = "Click for Kitty "+c.catNumber+"!";
  clickTimes.innerHTML=c.timesClicked;
  buttons[prevCatEnt].style.display = "none";
  buttons[num].style.display = "block";
  return num;
}

function createListEnt(num){
  let entry = document.createElement("BUTTON");
  let text = document.createTextNode("Kitty"+num);
  entry.appendChild(text);
  entry.addEventListener('click',function(){
    prevCatEnt = setCat(cats[num-1],num-1);
  },false)
  list.appendChild(entry);
}

//initialize the list
for (let i = 1; i < numCats.length+1; i++) {
  let tempCat = new Cat(i);
  cats.push(tempCat);
  //create the button
  let entry = document.createElement("BUTTON");
  let text = document.createTextNode("Click for Kitty "+i+"!");
  entry.appendChild(text);
  entry.addEventListener('click',function(){
    //MAY NEED TO CHANGE TO I-1
    cats[i-1].timesClicked++;
    clickTimes.innerHTML=cats[i-1].timesClicked;
  },false)
  entry.style.display = "none";
  buttonDiv.appendChild(entry);
  buttons.push(entry);
  //create the list entry
  createListEnt(i);
  //create img entry
  //img.push("<img src='img/cat"+i+".jpg'");
}
prevCatEnt = setCat(cats[0],0);
