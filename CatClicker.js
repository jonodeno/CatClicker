
let prevCatEnt = 0;
const totalCats = 5;

function Cat(num,url){
  this.catNumber = num;
  //create element for name to be displayd when cat name clicked
  this.kittyName = "Kitty "+num;
  this.timesClicked = 0;
  this.imgURL=url;
}

//model, only holds data
let model = {
  lastId: 0,
  cats: []
};

//octopus, interface between data and view
const octopus = {
  //function to change to the newest cat
  setCat: function(c,num){
    catName.innerHTML = c.kittyName;
    clickTimes.innerHTML=c.timesClicked;
    buttons[prevCatEnt].style.display = "none";
    buttons[num].style.display = "block";
    return num;
  },
  //increments a cat's number of times clicked
  incCat: function(catNum){
    model.cats[catNum].timesClicked++;
  },
  init: function(){
    //initialize array of cats
    for (var i = 1; i <= totalCats; i++) {
      model.cats.push(new Cat(i,"img/cat"+i+".jpg"))
    };

    //initialize list of buttons
    listView.init();
  }
};

//view for list of cat buttons
let listView = {
  //html element
  list: document.getElementById("list-container"),

  //creates a button for each cat in the list of cats
  render: function (num){
    let entry = document.createElement("BUTTON");
    let text = document.createTextNode("Kitty"+num);
    entry.appendChild(text);
    entry.addEventListener('click',function(){
      prevCatEnt = octopus.setCat(cats[num-1],num-1);
    },false)
    this.list.appendChild(entry);
  },

  //initialize list of buttons
  init: function(){
    for (var i = 1; i <= totalCats; i++) {
      this.render(i);
    }
  }
};

//view for cat image area
let catView = {
  //html
  this.img = document.getElementById("cat-img");
  this.clickTimes = document.getElementById("timesClicked");
  clickTimes.innerHTML = "0";
  this.catName = document.getElementById("name");
  this.buttonDiv = document.getElementById("button-div");
}

octopus.init();
/*
const numCats = [1,2,3,4,5];
let cats = [];
let buttons = [];
let imgs = [];

function setCat(c,num){
  img.src = imgs[num];
  catName.innerHTML = c.kittyName;
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
    cats[i-1].timesClicked++;
    clickTimes.innerHTML=cats[i-1].timesClicked;
  },false)
  entry.style.display = "none";
  buttonDiv.appendChild(entry);
  buttons.push(entry);
  //create the list entry
  createListEnt(i);
  //create img entry
  imgs.push("img/cat"+i+".jpg");
}
prevCatEnt = setCat(cats[0],0);
*/
