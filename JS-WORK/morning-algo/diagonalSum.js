const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
function diagonalDifference(sqrMatrix) {
//your code goes here
    let sumRight = 0;
    let sumLeft = 0;

    for(let i = 0; i < sqrMatrix.length; i ++){
        for(let j = 0; j < sqrMatrix.length; j ++){
            if(i == j){
                sumRight += sqrMatrix[i][j];
            }
            if(i + j == sqrMatrix.length - 1){
                // console.log(i)
                // console.log(j)
                sumLeft += sqrMatrix[i][j];
            }
        }
    }
    console.log(sumRight)
    console.log(sumLeft)
    return Math.abs(sumRight - sumLeft)
}

console.log(diagonalDifference(squareMatrix1))