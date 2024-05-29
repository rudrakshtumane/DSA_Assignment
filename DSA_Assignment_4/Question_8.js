
const matrix = [
    [1, 2, 3],
    [5, 6, 7],
    [1, 2, 3]
];

function printBoundaryElements(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === m - 1) {
                console.log(matrix[i][j]);
            }
        }
    }
}

printBoundaryElements(matrix);