// Move all zeros to end

const arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];

function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
            nonZeroIndex++;
        }
    }

    return arr;
}

const result = moveZerosToEnd(arr);
console.log(result);