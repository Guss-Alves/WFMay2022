

var count = 9;
var countElement = document.querySelector('#count');
console.log(countElement);

function add1(){
    count++;
    countElement.innerText = count + ' like(s)'
    console.log(count);
}

var count2 = 12;
var count2Element = document.querySelector('#count2')
console.log(count2Element);

function add2(){
    count2++;
    count2Element.innerText = count2 + " like(s)";
    console.log(count2)
}

var plus = 9;
var plusElement = document.querySelector('#plus');
console.log(plusElement);

function add3(){
    plus++;
    plusElement.innerText = plus + ' like(s)'
    console.log(plus);
}