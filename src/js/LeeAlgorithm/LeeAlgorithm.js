export class LeeAlgorithm {
  
  static getRoute(matrix, x1, y1, x2, y2) {

    return this._backtrace(...this._pathfinder(matrix, x1, y1, x2, y2));
  
  }

  static _pathfinder(matrix, x1, y1, x2, y2) {
    
    let step = 1;
    matrix[y1][x1] = step;
    
    while (step < matrix.length * matrix[0].length) {
      for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[0].length; y++) {
          if (matrix[x][y] == step) {
            // right
            if (x + 1 < matrix.length && matrix[x + 1][y] == 0) {
              matrix[x + 1][y] = step + 1;
            }
            // left
            if (x - 1 >= 0 && matrix[x - 1][y] == 0) {
              matrix[x - 1][y] = step + 1;
            }
            // up
            if (y + 1 < matrix[0].length && matrix[x][y + 1] == 0) {
              matrix[x][y + 1] = step + 1;
            }
            // down
            if (y - 1 >= 0 && matrix[x][y - 1] == 0) {
              matrix[x][y - 1] = step + 1;
            }
          }
        }
      }
      step++;
    }

    return [ matrix, x2, y2];
  
  };

  static _backtrace(matrix, x2, y2) { 
    if (matrix[y2][x2]) {

      let previousValue = matrix[y2][x2];
      const successfulRoute = [];

      let x = x2;
      let y = y2;

      successfulRoute.push([x, y]);
      while (previousValue != 1) {
        
        if (x + 1 < matrix[0].length && matrix[y][x] - matrix[y][x + 1] == 1) {
    
          // right
          x++;
    
        } else if (x - 1 >= 0 && matrix[y][x] - matrix[y][x - 1] == 1) {
    
          // left
          x--;
    
        } else if (y - 1 >= 0 && matrix[y][x] - matrix[y - 1][x] == 1) {
    
          // up
          y--;
    
        } else if (y + 1 < matrix.length && matrix[y][x] - matrix[y + 1][x] == 1) {
    
          // down
          y++;
    
        }
        successfulRoute.push([x, y]);
        previousValue--;
    
      }
      return successfulRoute.reverse(); // Reverse the array so it's at the start
    
    } else {
    
      return [];
    
    }
  
  };

  static _neighbourCheck(matrix, x, y, x1, y1, i, j, value) {
  
    return matrix[i] && (matrix[i][j] === value) && // If array x array defined and the matrix value is 0
    !(i === x && j === y) && // If it's not the center square
    !(i === x - 1 && (j === y + 1 || j === y - 1)) && // If it's not the right or left top corner
    !(i === x + 1 && (j === y + 1 || j === y - 1)) && // If it's not the right or left bottom corner
    !(i === x1 && j === y1); // If it's not the first square
  
  };

}