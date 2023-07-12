for( i=1; i<101; i++){
    //remember that the more specific it gets, earlier it needs to be called in a function
    if(i % 15 == 0){
        console.log('FizzBuzz')
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}
