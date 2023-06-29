/* 
Example 1:
Input: gain = [-5,1,5,0,-7]
Output: 1
Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.

                    HERE IS THE BRAINSTORM 
                        altitude = 1
                        count = -6;
                        gain[i] = -7
                        if count > altitude { altitude = count  }
                        return altitude
Example 2:
Input: gain = [-4,-3,-2,-1,4,3,2]
Output: 0
Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.
*/
let gain1 = [-5,1,5,0,-7]; // Output: 1
let gain2 = [-4,-3,-2,-1,4,3,2]; // Output: 0

const largestAltitude = (gain)=>{
    let altitude = 0;
    let count = 0;
    for(let i = 0; i < gain.length; i++){
        count+= gain[i];
        if(count > altitude){
            altitude = count;
        }
    }
    return altitude;
}
console.log(largestAltitude(gain2));