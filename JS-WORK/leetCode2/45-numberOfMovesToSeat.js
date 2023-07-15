/* 
Example 1:
Input: seats = [3,1,5], students = [2,7,4]
Output: 4
Explanation: The students are moved as follows:
- The first student is moved from from position 2 to position 1 using 1 move.
- The second student is moved from from position 7 to position 5 using 2 moves.
- The third student is moved from from position 4 to position 3 using 1 move.
In total, 1 + 2 + 1 = 4 moves were used.

Example 2:
Input: seats = [4,1,5,9], students = [1,3,2,6]
Output: 7
*/
// let seats1 = [3,1,5]; let students1 = [2,7,4];
let seats1 = [3,1,5]; let students1 = [2,7,4];

var minMovesToSeat = function(seats, students) {
    //the idea is to make the min amount of moves, the easiest way to do that is first sort both arrays in increase order
    //we can start by sorting the arrays, using the sort() methoad, for simpliticy
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);
    //having variables i and j, one for each array, and var count to keep track of output
    let i = 0; let j = 0; let count = 0;
    //once we got the arrays sorted we will want to create a while loop as long as j is less than students.length
    while(j < students.length){
        //if seats[i] === students[j] we increment both variables
        if(seats[i] == students[j]){
            i++;
            j++;
        }
        //if seats[i] > students[j] we increment students[j] and add 1 to count
        if(seats[i] > students[j]){
            students[j]++;
            count++;
        }
        //if seats[i] < students[j] we decrement students[j] and add 1 to count
        else if(seats[i] < students[j]){
            students[j]--;
            count++;
        }
    }
    //once they are the same both will be incremented, and once it gets out of bounds, we return count
    return count;
};

console.log(minMovesToSeat(seats1, students1));