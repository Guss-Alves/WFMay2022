//check if 2 nums sum si 100, or if one of them is 100

const is100 = (x, y)=>{

    if(x === 100){
        return true;
    }
    else if(y === 100){
        return true;
    }
    else if(x + y ===100){
        return true;
    }
    else{
        return false;
    }
}
console.log(is100( 75, 25))
