console.log("page loaded...");

// var count = 'Jane Doe';
var count = document.querySelector('#count');
console.log(count);

function addName(){
    count.innerText = 'Gustavo Alves';
    console.log(count);
}

var friend = {};
var friendElement = document.querySelector('#friend');
console.log(friendElement);

function hide(){
    friendElement.remove();
}

var amigo = {}
var amigoElement = document.querySelector('#amigo');
console.log(amigo.element);

function bye(){
    amigoElement.remove();
}

var number = 2;
var numberElement = document.querySelector('#number');
console.log(numberElement);

function ghost(){
    number--;
    numberElement.innerText = number;
    console.log(number);
}
var number =2;
var numberElement = document.querySelector('#number');
console.log(numberElement);

function sub(){
    number--;
    numberElement.innerText = number;
    console.log(number);
}
