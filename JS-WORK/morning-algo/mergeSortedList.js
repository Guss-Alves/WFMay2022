/**
* Merge Two Sorted Lists.
*
* You are given the heads of two sorted linked lists list1 and list2.
* Merge the two lists in a one sorted list. The list should be made by splicing 
* together the nodes of the first two lists.
* Example: 
* ArrA = [1,2,6] 
* ArrB = [1,5,7,8] 
*
* Result -> [1,1,2,5,6,7,8]
*/
const ArrA = [1,2,6] 
const ArrB = [1,5,7,8] 

const mergeSortedList = (arrA, arrB)=>{
	let result = arrA.concat(arrB);
    console.log(result);
    for(let i = 0; i< result.length; i ++){
        for(let j = 0; j < result.length; j++){
            if(result[j] > result[j+ 1]){
                [result[j], result[j + 1]] = [result[j + 1], result[j]];
            }
        }
    }
    return result;
}
console.log(mergeSortedList(ArrA, ArrB));