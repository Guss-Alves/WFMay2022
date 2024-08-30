

//  i          j
// [1, 3, 5], [2, 4, 6]
// Expected Output: [1, 2, 3, 4, 5, 6]

const mergeSortedArrays = (arr1, arr2) => {
    let i = 0;
    let j = 0;
    let output = [];

    // Merge the arrays while maintaining sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
    }

    // If there are any remaining elements in arr1
    while (i < arr1.length) {
        output.push(arr1[i]);
        i++;
    }

    // If there are any remaining elements in arr2
    while (j < arr2.length) {
        output.push(arr2[j]);
        j++;
    }

    return output;
};


// Test cases
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Expected Output: [1, 2, 3, 4, 5, 6]
// console.log(mergeSortedArrays([1, 2], [3, 4])); // Expected Output: [1, 2, 3, 4]
// console.log(mergeSortedArrays([], [1, 2, 3])); // Expected Output: [1, 2, 3]


const removeDuplicates = arr => {
    // Your code here
    let output = [];
    arr.sort((a,b) => a - b);
    // console.log(arr)
    let keepTrack = arr[0];
    output.push(arr[0]);
    for(let i = 1; i < arr.length; i++){
        if( arr[i] !== keepTrack ){
            output.push(arr[i]);
            keepTrack = arr[i];
        }
    }
    return output;
};

// Test cases
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates([1, 1, 1, 1, 1])); // Expected Output: [1]
// console.log(removeDuplicates([3, 5, 3, 7, 8, 5])); // Expected Output: [3, 5, 7, 8]

const isValidParentheses = (s) => {
    //create an array to keep track of the used brakets in the string
    let braketsTracker = [];
    //create an object for the logic of a braket have a correct pair
    let pairs = {
        '(' : ')',
        '{' : '}',
        '[' : ']',
    }
    //iterate through the string
    for(let i = 0; i < s.length; i++){
        let current = s[i];
        if(pairs[current]){
            braketsTracker.push(current);
        }else{
            let removedElement = braketsTracker.pop();
            // console.log(removedElement);
            if(pairs[removedElement] !== current){
                return false;
            }
        }
    }
    if(braketsTracker.length === 0) return true;
};
// Examples and Expected Outputs
// console.log(isValidParentheses("()"));        // true
// console.log(isValidParentheses("()[]{}"));    // true
// console.log(isValidParentheses("(]"));        // false
// console.log(isValidParentheses("([)]"));      // false
// console.log(isValidParentheses("{[]}"));      // true


const twoSum = (nums, target) => {
    // Your code here
    let output = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                output.push(i,j);
            }
        }
    }
    return output;
};

// Example calls:
console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Expected output: [1, 2]
console.log(twoSum([3, 3], 6));         // Expected output: [0, 1]

