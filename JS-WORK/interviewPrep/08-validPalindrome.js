/*  valid palindrome
Example 1:
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Explanation: "raceacar" is not a palindrome.

Example 3:
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/
let s1 = "A man, a plan, a canal: Panama"; //true
let test = "BARACATUCA";
let s2 = "race a car"; //false
let s3 = " "; //true
let s4 = ".,";

var isPalindrome = function(s) {
    //first I will use a few methods to make sure that
    //test case of a empty array
    if(s.length === 1) return true;
    //every sentence is lower case
    //we joined all characters so no more spaces
    //and made sure to replace any non-alphanumeric character
    s = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    //create var i and j i starting in the beginning and j starting at the end
    let i = 0; let j = s.length -1;
    //once we get that, we can have 2 points in a while loop, as long as i and j are not the same
    while(i < j){
        //every time they are equal we do i++ and j--
        if(s[i] == s[j]){
            i++;
            j--;
        }else{
            //if they are not the same we return false
            return false
        }
    }
    //once all of them are the same we return true
    return true;
};
console.log(isPalindrome(s4));