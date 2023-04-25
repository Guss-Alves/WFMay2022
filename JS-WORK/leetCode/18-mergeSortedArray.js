//example 1
let num1 = [1,2,3,0,0,0];
let m1 = 3;
let nums2 = [2,5,6];
let n1 = 3;
//Output: [1,2,2,3,5,6]

//example 2
let nums3 = [1];
let m2 = 1;
let nums4 = [];
let n2 = 0;
//Output: [1]

//example 3
let nums5 = [0];
let m3 = 0;
let nums6 = [1];
let n3 = 1
//Output: [1]
/**
    We want to merge this 2 arrays into one single array;
    it will go only until the element indicated from vars 'm' and 'n';
    once is merged into 1 array we sort it from lowest to highest value
 */
//THE SOLUTION BELOW WORKS, AND IT'S THE ONE I CAME UP WITH, BUT LEETCODE WONT ACCEPT BECAUSE I CHANGED A COUPLE THINGS INCLUDING VARIABLE NAMES;
var merge = function(array1, m, array2, n) {
    let i = 0; let j = 0; let resultArr = [];

    while(i < m){
        resultArr.push(array1[i]);
        i++;
    }
    while(j < n){
        resultArr.push(array2[j]);
        j++;
    }
    if(resultArr.length > 1){
        for(let k = 0; k < resultArr.length; k++){
            if(resultArr[k] > resultArr[k + 1]){
                [resultArr[k + 1], resultArr[k]] = [resultArr[k], resultArr[k + 1]];
            }
        }
    }
    return resultArr;
};
console.log(merge(num1, m1, nums2, n1));

//HERE IS GONNA BE ANOTHER SOLUTION, THAT WILL BE ACCEPTED BY LEETCODE;
var merge = function(nums1, m, nums2, n) {
    let first = m -1;
    let second = n - 1;
    let i = n + m - 1;

    while(second >= 0 ){
        let fVal = nums1[first];
        let sVal = nums2[second];

        if(fVal > sVal){
            nums1[i] = fVal;
            i--;
            first--;
        }else{
            nums1[i] = sVal;
            i--;
            second--
        }
    }

};
