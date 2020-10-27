export class LeeAlgorithm {
  
  static getRoute(matrix, x1, y1, x2, y2) {

    return this._backtrace(...this._pathfinder(matrix, x1, y1, x2, y2));
  
  }

  static _pathfinder(matrix, x1, y1, x2, y2) {
    
    const toVisit = [[x1, y1]]; // Initialise at the start square
    let step = 1;

    while(toVisit.length) { // While there are still squares to visit

      let x = toVisit[0][0];
      let y = toVisit[0][1];

      for (let i = x - 1; i < x + 2; i++)  {  // -1, 0, 1
        
        for (let j = y - 1; j < y + 2; j++) { // -1, 0, 1

          if (this._neighbourCheck(matrix, x, y, x1, y1, i, j, 0)) {

            matrix[i][j] = step++;
            toVisit.push([i, j]);

          }

        }
      
      }
      
      toVisit.shift();
      
    }

    return [ matrix, x2, y2, step ];
  
  };

  static _backtrace(matrix, x2, y2) { 
    if (matrix[x2][y2]) {

      let previousValue = matrix[x2][y2];
      const successfulRoute = [];

      let x = x2;
      let y = y2;

      while (previousValue) {
        
        if (y + 1 < matrix[0].length && matrix[x][y] - matrix[x][y + 1] == 1) {
    
          // right
          y++;
    
        } else if (y - 1 >= 0 && matrix[x][y] - matrix[x][y - 1] == 1) {
    
          // left
          y--;
    
        } else if (x - 1 >= 0 && matrix[x][y] - matrix[x - 1][y] == 1) {
    
          // up
          x--;
    
        } else if (x + 1 < matrix.length && matrix[x][y] - matrix[x + 1][y] == 1) {
    
          // down
          x++;
    
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