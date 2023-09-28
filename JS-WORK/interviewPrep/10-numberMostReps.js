// Algo that I thought 

    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [1, 2, 1, 0, 2, 1, 2];
    let arr3 = [4, 4, 4, 4];

    //my version
const mostReps = (arr) => {
    //we will have 3 var, count, tempCount and resut
    let count = 0; 
    let result = 0;
    //we gonna make a double loop
    for(let i = 0; i < arr.length; i++){
        let tempCount = 0;
        for(let j = i+1; j < arr.length; j++){
            //if i and j are equal we make tempCount++
            if(arr[i] == arr[j]){
                tempCount++
            }
            //if tempCount becomer greater than Count we set result = arr[i]
            if(tempCount > count){
                count = tempCount;
                result = arr[i];
            }
        }
    }
    // if(count = 0){
    //     result = 0;
    // }
    return result;
}
console.log(mostReps(arr3));

//version with the help of AI
function findMostFrequentElement(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const elementCount = {};
    let mostFrequent = 0;
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        // If the element is encountered for the first time, initialize its count to 1
        if (!elementCount[element]) {
            elementCount[element] = 1;
        } else {
            // If the element has been encountered before, increment its count
            elementCount[element]++;
        }

        // Check if the current element has a count equal to the current max count
        if (elementCount[element] === maxCount) {
            mostFrequent = 0; // Set to 0 in case of a tie
        } else if (elementCount[element] > maxCount) {
            // If the current element has a count greater than the current max count, update mostFrequent
            mostFrequent = element;
            maxCount = elementCount[element];
        }
    }

    return mostFrequent;
}

console.log(findMostFrequentElement(arr1));// 0
console.log(findMostFrequentElement(arr2));// 1
console.log(findMostFrequentElement(arr3));// 4
