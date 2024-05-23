// find intersection of two arrays

const array1 = [1, 2, 2, 1];
const array2 = [2, 2];

function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const intersectionArray = arr2.filter((item) => set1.has(item));
    return [...new Set(intersectionArray)];
}


const result = intersection(array1, array2);
console.log(result);