const data = [
    { id: 1, value: 30 },
    { id: 2, value: 30 },
    { id: 3, value: 30 },
];

const sumValuesInArrayOfObjects1 = (arrayOfObjects, key) => {
    let sum = 0;
    for (const obj of arrayOfObjects) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }

    return sum;
};


// const totalValue = sumValuesInArrayOfObjects1(data, 'value');
// console.log(totalValue); // Output: 60 (10 + 20 + 30)





const sumValuesInArrayOfObjects = (arr) => {
    // Check if the input is an array and not empty
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }

    // Use the reduce method to calculate the sum
    const totalSum = arr.reduce((accumulator, obj) => {
        // Check if the current object is a valid object and has an 'age' property
        if (typeof obj === 'object' && obj !== null) {
            // Check if the 'age' property value is a number and add it to the accumulator
            if (!isNaN(obj.score) && typeof obj.score === 'number') {
                accumulator += obj.score;
            }
        }
        return accumulator;
    }, 0);

    return totalSum;
};

// Example usage with an array of objects
const arrayOfObjects = [
    { name: 'John', age: 25, score: 80 },
    { name: 'Jane', age: 30, score: 90 },
    { name: 'Bob', age: 22, score: 70 },
];

const totalScore = sumValuesInArrayOfObjects(arrayOfObjects);
console.log(totalScore); // Output: 240 (80 + 90 + 70)


