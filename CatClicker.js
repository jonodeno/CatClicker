let prevCatEnt = 0;
const totalCats = 5;

function Cat(num,url){
  //create element for name to be displayd when cat name clicked
  this.kittyName = "Kitty "+(num+1);
  this.timesClicked = 0;
  this.imgURL=url;
}

//model, only holds data
let model = {
  cats: []
};

//octopus, interface between data and view
const octopus = {
  //function to get a cat
  getCat: function(num){
    return model.cats[num];
  },
  //function to change to the newest cat
  setCat: function(num){
    return function(){
      catView.render(num);
    }
  },
  //increments a cat's number of times clicked
  incCat: function(i){
    return function(){
      model.cats[i].timesClicked++;
      catView.render(i);
    }
  },
  init: function(){
    //initialize array of cats
    for (var i = 0; i < totalCats; i++) {
      model.cats.push(new Cat(i,"img/cat"+(i+1)+".jpg"))
    };

    //initialize list of buttons
    listView.init();
    //initialize cat img area
    catView.init();
    //initialize admin view area
    adminView.init();
  }
};

//view for list of cat buttons
let listView = {
  //html element
  list: document.getElementById("list-container"),

  //creates a button for each cat in the list of cats
  render: function (num){
    let entry = document.createElement("BUTTON");
    let text = document.createTextNode("Kitty"+(num+1));
    entry.appendChild(text);
    entry.addEventListener('click',octopus.setCat(num),false)
    this.list.appendChild(entry);
  },

  //initialize list of buttons
  init: function(){
    for (var i = 0; i < totalCats; i++) {
      this.render(i);
    }
  }
};

//view for cat image area
let catView = {
  //html
  img: document.getElementById("cat-img"),
  clickTimes: document.getElementById("timesClicked"),
  catName: document.getElementById("name"),
  buttonDiv: document.getElementById("button-div"),

  //properties
  buttons: [],

  render: function(num){
    let c = model.cats[num];
    this.img.src = c.imgURL;
    this.catName.innerHTML = c.kittyName;
    this.clickTimes.innerHTML=c.timesClicked;
    this.buttons[prevCatEnt].style.display = "none";
    this.buttons[num].style.display = "block";
    prevCatEnt = num;
  },
  updateTimesClicked: function(num){
    this.clickTimes.innerHTML = num;
  },
  init: function(){
    //make buttons
    for (var i = 0; i < totalCats; i++) {
      let entry = document.createElement("BUTTON");
      let text = document.createTextNode("Click for Kitty "+(i+1)+"!");
      entry.appendChild(text);
      entry.addEventListener('click',octopus.incCat(i),false)
      entry.style.display = "none";
      this.buttonDiv.appendChild(entry);
      this.buttons.push(entry);
    }

    this.clickTimes.innerHTML = "0";
    this.render(0);
  }
}

//view for admin area
let adminView = {
  adminDiv: document.getElementById("admin-space"),
  rendered: 0,
  createInputs: function(){

  },

  render: function(){
    let adminButton = document.createElement("BUTTON");
    let text = document.createTextNode("ADMIN");
    adminButton.appendChild(text);
    adminButton.addEventListener('click',function(){
      if (adminView.rendered === 0) {
        //get current cat to fill in data
        let currCat = octopus.getCat(prevCatEnt);
        //add inputs to view
        //name text
        let n = document.createElement("P");
        n.appendChild(document.createTextNode("Name:"));
        adminView.adminDiv.appendChild(n);
        //name
        let nameInp = document.createElement("INPUT");
        nameInp.setAttribute("type", "text");
        nameInp.value = currCat.kittyName;
        nameInp.label = "name";
        adminView.adminDiv.appendChild(nameInp);
        //url text
        let i = document.createElement("P");
        i.appendChild(document.createTextNode("Image URL:"));
        adminView.adminDiv.appendChild(i);
        //imgURL
        let urlInp = document.createElement("INPUT");
        urlInp.setAttribute("type", "text");
        urlInp.value = currCat.imgURL;
        adminView.adminDiv.appendChild(urlInp);
        //clicks text
        let c = document.createElement("P");
        c.appendChild(document.createTextNode("Number of Times Clicked:"));
        adminView.adminDiv.appendChild(c);
        //noClicks
        let clickNumInp = document.createElement("INPUT");
        clickNumInp.setAttribute("type", "text");
        clickNumInp.value = currCat.timesClicked;
        clickNumInp.style.display = "block";
        adminView.adminDiv.appendChild(clickNumInp);
        //save button
        let entry = document.createElement("BUTTON");
        let text = document.createTextNode("Save");
        entry.appendChild(text);
        entry.addEventListener('click',function(){
          //update all fields for the cat with data from inputs
        },false)
        //entry.style.display = "inline";
        adminView.adminDiv.appendChild(entry);
        //cancel button
        entry = document.createElement("BUTTON");
        text = document.createTextNode("Cancel");
        entry.appendChild(text);
        entry.addEventListener('click',function(){
          //make admin area dissappear
        },false)
        //entry.style.display = "block";
        adminView.adminDiv.appendChild(entry);

        adminView.rendered = 1;
      }
    },false);
    this.adminDiv.appendChild(adminButton);
  },
  init: function(){
    this.render();
  }
};
octopus.init();
