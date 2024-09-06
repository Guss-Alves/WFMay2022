

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



//MY SOLUTION
// const twoSum = (nums, target) => {
//     // Your code here
//     let output = [];
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] == target){
//                 output.push(i,j);
//             }
//         }
//     }
//     return output;
// };

//better solution 
const twoSum = (nums, target) => {
    let map = {}; // Initialize an empty hash map
    for (let i = 0; i < nums.length; i++) { // Loop through the array
        let complement = target - nums[i]; // Calculate the complement
        if (map[complement] !== undefined) { // Check if the complement is in the map
            return [map[complement], i]; // Return the indices if found
        }
        map[nums[i]] = i; // Store the current number and its index in the map
    }
    return map;
};

// Example calls:
// console.log(twoSum([2, 7, 11, 15], 9)); // Expected output: [0, 1]
// console.log(twoSum([3, 2, 4], 6));      // Expected output: [1, 2]
// console.log(twoSum([3, 3], 6));         // Expected output: [0, 1]

const lengthOfLongestSubstring = (s) => {
    let seen = []; //we create an array to keep track of the characters that we've seen so far
    let longestLength = 0; //we create a variable to keep track of the longest length
    let startOfSub = 0; //we create a variable to know where to start to count for new sub strings

    //we loop through s 
    for(let end = 0; end < s.length; end++){
        //when we find an character that is already in the array
        while(seen.includes(s[end])){
            seen.shift(); //we want to keep removing elements until we remove the duplicate
            startOfSub++; //and increase the start to calculate the length
        }
        seen.push(s[end]);//here we going to keep adding the current element to the array
        //here we know that we are not keeping duplicates in the array, and we can constently check if we get a larger length
        if(longestLength < end - startOfSub +1){
            longestLength = end - startOfSub + 1;
        }
        // console.log(longestLength);
        // console.log(seen);
    }
    return longestLength;
};

// Example calls:
// console.log(lengthOfLongestSubstring("abcabcbb")); // Expected output: 3 ("abc")
// console.log(lengthOfLongestSubstring("bbbbb"));    // Expected output: 1 ("b")
// console.log(lengthOfLongestSubstring("pwwkew"));   // Expected output: 3 ("wke")
// console.log(lengthOfLongestSubstring(""));         // Expected output: 0 ("")

//next challenge
const mergeIntervals = (intervals) => {
    // Step 1: Sort the intervals by the starting points
    intervals.sort((a, b) => a[0] - b[0]);

    // Step 2: Initialize an empty array to hold merged intervals
    let merged = [];

    // Step 3: Loop through the intervals
    for (let i = 0; i < intervals.length; i++) {
        // If merged array is empty or current interval does not overlap with the last one in merged
        if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
            // Push the current interval into the merged array
            merged.push(intervals[i]);
        } else {
            // If intervals overlap, merge them by updating the end value
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
        }
    }

    // Step 4: Return the merged intervals
    return merged;
};

// Example calls:
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // Output: [[1, 6], [8, 10], [15, 18]]
console.log(mergeIntervals([[1, 4], [4, 5]]));                    // Output: [[1, 5]]

