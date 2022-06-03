var arr = [ [1,2,3],
            [4,5,6] ];
            
console.log(arr[0][2]);

function flatten(arr){
    var flat = [];
    flat = (arr.flat());
    return flat;
}
var result = flatten([ [1,2,3], [4,5,6] ] );
console.log(result);