function diagonalSums(matrix) {
 
    let mainSum = 0, secondarySum = 0;
    let sub ; 
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    console.log(Math.abs(sub = mainSum - secondarySum));
}
 
diagonalSums([
              [20, 40 , 60],
              [10, 60 , 30],
              [20, 15, 30] 
             ]);