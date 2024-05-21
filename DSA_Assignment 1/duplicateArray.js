

var nums = [0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function(nums) {
    let k=1;
     for(i=0;i<nums.length-1;i++)
     {
         if(nums [i] !== nums[i+1])
         {
             nums [k] = nums [i+1];
             k++;
         }
     }
     return k;
};


var k = removeDuplicates(nums);
console.log("new length : ",k);
console.log("new array : ",nums.slice(0,k));


