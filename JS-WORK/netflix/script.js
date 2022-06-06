var displayimg = document.querySelector('.img-banner');
function pickOne(){
    displayimg.src = "img/strange4.jpeg";
}
function pickTwo(){
    displayimg.src = "img/daredevil.jpg";
}

var number = 0;
var addElement = document.querySelector(".number");
function add1(){
    number++;
    addElement.innerText = number;
}

var puf = document.querySelector('#puf');

function bye(){
    puf.remove();
}

