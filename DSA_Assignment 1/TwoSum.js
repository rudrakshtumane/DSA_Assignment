var twoSum = function (nums, target)
 {
    for (i = 0; i <= nums.length; i++) 
    {
        for (j = i + 1; j <= nums.length; j++)
         {
            const sum = Number(nums[i]) + Number(nums[j]);
            if (sum === target) 
            {
                return [i, j];
            }
        }
    }
};

var nums = [2,3,18,4];
var target = 20;
var result = twoSum(nums, target);
console.log(result);