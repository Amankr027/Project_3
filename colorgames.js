var numCircles = 6;
var colors = generaterandomColors(numCircles);
var circles = document.querySelectorAll(".circle");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numCircles = 3 : numCircles = 6;

        reset();

    });
}

function reset() {
    colors = generaterandomColors(numCircles);
    pickedcolor = pickcolor();

    colordisplay.textContent = pickedcolor;
    resetButton.textContent = "New Colors";
    messagedisplay.textContent = "";
    for (var i = 0; i < circles.length; i++) {
        if (colors[i]) {
            circles[i].style.display = "block";
            circles[i].style.backgroundColor = colors[i];
        }
        else {
            circles[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


/*
easyBtn.addEventListener("click" , function(){
    hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numCircles = 3;
  colors = generaterandomColors(3);
  pickedcolor = pickcolor();
  colordisplay.textContent = pickedcolor;
  for(var i = 0 ; i<circles.length;i++){
      if(colors[i]){
          circles[i].style,backgroundColor = colors[i];
      }
      else{
          circles[i].style.display = "none";
      }
  }
});   
  

hardBtn.addEventListener("click" , function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numCircles = 6;
    colors = generaterandomColors(6);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    for(var i = 0 ; i<circles.length;i++){
      
            circles[i].style,backgroundColor = colors[i];
        
            circles[i].style.display = "block";
        
    }
});

*/

resetButton.addEventListener("click", function () {
    reset();
})
/*
 colors = generaterandomColors(numCircles);
 pickedcolor = pickcolor();

 colordisplay.textContent = pickedcolor;
 this.textContent = "New Colors";
 messagedisplay.textContent = "";
 for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i]; 
}
h1.style.backgroundColor = "steelblue";

})
*/

colordisplay.textContent = pickedcolor;

for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];

    circles[i].addEventListener("click", function () {
        var clickedcolor = this.style.backgroundColor;

        console.log(clickedcolor, pickedcolor);
        if (clickedcolor === pickedcolor) {
            messagedisplay.textContent = "Correct !";
            resetButton.textContent = "Play Again?"
            changecolors(clickedcolor);
            h1.style.backgroundColor = clickedcolor;

        }
        else {
            this.style.backgroundColor = "#232323";
            messagedisplay.textContent = "TRY AGAIN!";
        }
    });
}     

function changecolors(color) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = color;

    }
}

function pickcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generaterandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    "rgb(r,g,b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}