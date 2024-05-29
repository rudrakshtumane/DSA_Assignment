function findSaddlePoint(matrix) {
    let numRows = matrix.length;
    let numCols = matrix[0].length;
    let saddlePoints = [];

    for (let i = 0; i < numRows; i++) {
        let rowMin = matrix[i][0];
        let colIndex = 0;
        for (let j = 1; j < numCols; j++) {
            if (matrix[i][j] < rowMin) {
                rowMin = matrix[i][j];
                colIndex = j;
            }
        }
        let isSaddlePoint = true;
        for (let k = 0; k < numRows; k++) {
            if (matrix[k][colIndex] > rowMin) {
                isSaddlePoint = false;
                break;
            }
        }

        if (isSaddlePoint) {
            saddlePoints.push({ value: rowMin, row: i, column: colIndex });
        }
    }

    return saddlePoints;
}

let matrix = [[1,2,3],[4,5,6],[7,8,9]];

let saddlePoints = findSaddlePoint(matrix);

if (saddlePoints.length > 0) {
    console.log("Saddle points found:");
    saddlePoints.forEach(point => {
        console.log(`Value: ${point.value}, Position: (${point.row}, ${point.column})`);
    });
} else {
    console.log("No saddle points found.");
}