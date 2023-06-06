/* 
example 1
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

example 2
Input: height = [1,1]
Output: 1
 */
let height1 = [1,8,6,2,5,4,8,3,7];
            // l               r
let height2 = [1,1];

//this one I came up with after some explanation, but is not efficient
var maxArea1 = function(height) {
    let maxVolume = 0;
    for(let i = 0; i < height.length; i++){
        for(let j = height.length - 1; j > 0; j--){
        let width = Math.abs(i - j);
        let altura = Math.min(height[i], height[j]);
        let maxima = width * altura;
        if(maxima > maxVolume){
            maxVolume = maxima;
        }
    }
}
return maxVolume;
};
// console.log(maxArea1(height1));

//better version
var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let maxima = 0;

    while(left < right){
        let width = Math.abs(left - right);
        let maxArea = Math.min(height[left], height[right]) * width;

        if( maxima < maxArea){
            maxima = maxArea;
        }
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxima;
};
console.log(maxArea(height1));