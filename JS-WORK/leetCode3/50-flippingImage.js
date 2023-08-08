/* 
Example 1:
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
                [0,1,1],[1,0,1],[0,0,0] reverse row
                [1,0,0],[0,1,0],[1,1,1] invert img
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

Example 2:
Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
*/
/* 
    --BRAINSTORM--
    1-first I need to revert the order of the arrays
        I can loop through the array, and then reverse()
    2- then every 0 needs to become 1, and every 1 needs to become 0
*/

let image1 = [[1,1,0],[1,0,1],[0,0,0]]; //[[1,0,0],[0,1,0],[1,1,1]]
let image2 = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]] //[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
//see that after trip
var flipAndInvertImage = function(image) {
    for(let i = 0; i < image.length; i++){
        image[i].reverse();
        for(let j = 0; j < image[i].length; j++){
            if(image[i][j] === 0){
                image[i][j] = 1;
            }else{
                image[i][j] = 0;
            }
        }
    }
    return image;
};
console.log(flipAndInvertImage(image2));