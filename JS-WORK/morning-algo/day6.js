// function d6() {
//     var roll= Math.floor(6 * Math.random());
//     return roll;
//     // or can also be -->
//     var roll = Math.random();
//     roll*=6
//     roll+=1
//     roll=Math.floor(roll)
//     return roll;
// }
// var playerRoll = d6();
// console.log("The player rolled: " + playerRoll);
    

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];
function pick(arr){
    var i = Math.floor(lifesAnswers.length * Math.random());
    return arr[i];
}
function Answer(){
    console.log(pick(lifesAnswers));
}
Answer();


