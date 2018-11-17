var i,r,g,b,color,ans,difficulty;
var boxes =[];
var colors =[];
var header = document.querySelector("header");
var result = document.querySelector("#result");
var color = document.querySelector("#displayColor");

function generateColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function setup() {
    header.classList.add("is-primary" ,"is-bold");
    result.innerHTML = "";
    if (difficulty == easy){
        document.querySelector("#hardoptions").classList.add("is-hidden");
        boxes =   document.querySelectorAll('#easyoptions .tile');
        colors = [generateColor(), generateColor(), generateColor() ];
        for (i=0 ; i<boxes.length ; i++){
            boxes[i].style.backgroundColor = colors[i];
            boxes[i].classList.remove("is-invisible");
        }
        ans =  Math.floor(Math.random() * 3);
    }
    else {
        document.querySelector("#hardoptions").classList.remove("is-hidden");
        boxes =   document.querySelectorAll('.tile');
        colors = [generateColor(), generateColor(), generateColor(), generateColor(), generateColor(), generateColor()];
        for (i=0 ; i<boxes.length ; i++){
            boxes[i].style.backgroundColor = colors[i];
            boxes[i].classList.remove("is-invisible");
        }
        ans =  Math.floor(Math.random() * 6);
    }
    color.innerHTML = colors[ans];
    run();
}

function run(){
    for (i=0 ; i<boxes.length ; i++)
        boxes[i].addEventListener("click", function() {
            if (this == boxes[ans] )
                correct();
            else{
                wrong(this);
            }
        });
}

function correct() {
    result.innerHTML = "Correct Answer";
    header.classList.remove("is-primary" ,"is-bold");
    header.style.backgroundColor = colors[ans];
    for (i=0 ; i<boxes.length ; i++){
        boxes[i].style.backgroundColor = colors[ans];
        boxes[i].classList.remove("is-invisible");
    }
}

function wrong(e) {
    result.innerHTML = "Try Again";
    e.classList.add("is-invisible");
}

difficulty = easy;
setup();

document.querySelector('#reset').addEventListener("click", setup);
document.querySelector('#easy').addEventListener("click", function(){
    difficulty = easy;
    setup();
});
document.querySelector('#hard').addEventListener("click", function(){
    difficulty = hard;
    setup();
});
