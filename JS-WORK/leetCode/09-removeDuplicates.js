
//example 1
nums = [1, 1, 2];
// output = 2 which is the number of elements present in the array , nums = [ 1, 2 ];

//exemple 2
nums2 = [0,0,1,1,1,2,2,3,3,4];
// output = 5 which is the number of elements present in the array , nums = [ 0, 1, 2, 3, 4 ]

//exemple 3
nums3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//create function
const noDuplicates = (arr)=>{
    //loop through the array
    for(let i = 0; i < arr.length; i++){
        //create a new loop so we can keep track and check the element of i + 1
        for(let j = i + 1; j < arr.length; j++){
            //check if the current index is the same as the one in front of it
            if(arr[i] === arr[j]){
                //if they are the same remove the index + 1 from the main array
                arr.splice(i, 1);
                i--;
            }
        }
    }
    //create a varible named k, which will have as value the array length
    let k = arr.length;
    console.log(k);
    return arr;
}
console.log(noDuplicates(nums3));




// const newnums = nums.splice(2, 1);
// console.log(newnums);
// console.log(nums);