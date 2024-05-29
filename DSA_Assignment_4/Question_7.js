function isSubset(arr1, arr2) {
    let set = new Set(arr1);
    for (let i = 0; i < arr2.length; i++) {
        if (!set.has(arr2[i])) {
            return false; 
        }
    }
    return true;
}

let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11,3,7,1];

if (isSubset(arr1, arr2)) {
    console.log("arr2[] is a subset of arr1[]")
} else {
    console.log("arr2[] is not a subset of arr1[]");
}