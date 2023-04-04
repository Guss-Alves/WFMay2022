haystack1 = "sadbutsad";
needle1 = "sad"
//Output: 0 "sad" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0.

haystack2 = "leetcode";
needle2 = "leeto"
//Output: -1 "leeto" did not occur in "leetcode", so we return -1.

var strStr = function(haystack, needle) {
    //I want to create 3 vars, i for haystack, j for needle, and index for index
    let index = 0;
    let i = 0;
    let j = 0;
    while(i < haystack.length){
        //while haystack[i] === needle[j] we increment i and j
        while(haystack[i] === needle[j]){
            i++;
            j++;
            //if we get to the end of needle its everything correct and we returj i 
            if(j == needle.length) return index;
            //if we get to the end of haystack length we return -1
            if(i == haystack.length) return -1;
        }
        if(haystack[i] !== needle[j]){
            index++;
            i = index;
            j = 0
        }
    }
    return -1;
};
console.log(strStr(haystack2, needle2));