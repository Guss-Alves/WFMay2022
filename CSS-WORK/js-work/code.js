// var countPositives = 0;
// var numbers = [3, 4, -2, 7, 16, -8, 0];
    
// for(var i=0; i < numbers.length; i++){
//     if(numbers[i] > 0){
//         countPositives++;
//     }
// }
    
// console.log("there are " + countPositives + " positive values");
// var number = 1;
// var letters = ["A", "B", "C", "D", "E"]
// function compute(){
//     for(var i = 0; i < letters.length; i++){
//         if(i == 1){
//             number = number + number * number
//             return number + letters[i]
//         }
//     }
//     return number + letters[i]
// }
// var answer = compute();
// console.log(answer);
function Something(arr){
    var result = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 10){
            console.log("We got a big one!");
        } else {
            result+=arr[i]
        }
    }
    if(result < 10){
        console.log("You're killin' me, Smalls");
    } else {
        return "You're gonna need a bigger funcion!";
    }
}
Something([1,8,21,-11,12,2,9,15,7]);