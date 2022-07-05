// Implement binarySearch(arr, target), a function that takes in two arguments -
// an array (of integers, sorted) to search and a target (an integer) to search for.
// Have the function return true if the item is present in the array and false otherwise.

// This can be done with a linear search (i.e. checking each item in the
// array one by one), but this is slow - O(n) time. We can do it much faster -
// specifically, O(log n) time - as long as we do it carefully.

// needs some other parameters to work properly... probably?
function binarySearch(input, target, left = 0, right = input.lenght - 1) {
    if (target == input[Math.floor(input.length/2)]){
        return true
    }
    else if (target < input[Math.floor(input.length/2)]){
        return true
    }
    else if (target > input[Math.floor(input.length/2)]){
        return true
    }

    return false

}

console.log(binarySearch([1,2,3,4,5,6,7], 2))