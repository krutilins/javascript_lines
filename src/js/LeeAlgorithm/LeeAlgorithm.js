export class LeeAlgorithm {
  constructor(matrix, x1, y1, x2, y2) {
    this.matrix = matrix;
    this.x1 = x1;
    this.y1= y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  
  pathfinder() {
    const toVisit = [[this.x1, this.y1]]; // Initialise at the start square

    while(toVisit.length) { // While there are still squares to visit

      this.x = toVisit[0][0];
      this.y = toVisit[0][1];

      for (let i = this.x - 1; i < this.x + 2; i++)  {  // -1, 0, 1
        for (let j = this.y - 1; j < this.y + 2; j++) { // -1, 0, 1

          if (this._neighbourCheck(i, j, 0)) {

            this.matrix[i][j] = this.matrix[this.x][this.y] + 1;
            toVisit.push([i, j]);

          }

        }
      }
      
      toVisit.shift();
      
    }

    this.distance = this.matrix[this.x2][this.y2];
    return [this.matrix, this.distance];
  };

  backtrace() { 
    if (this.distance) {

      let previousValue = this.distance;
      const successfulRoute = [];

      this.x = this.x2;
      this.y = this.y2;

      while (previousValue) {
        
        if (this.y + 1 < this.matrix[0].length && this.matrix[this.x][this.y] - this.matrix[this.x][this.y + 1] == 1) {
          // right
          this.y++;
        } else if (this.y - 1 >= 0 && this.matrix[this.x][this.y] - this.matrix[this.x][this.y - 1] == 1) {
          // left
          this.y--;
        } else if (this.x - 1 >= 0 && this.matrix[this.x][this.y] - this.matrix[this.x - 1][this.y] == 1) {
          // up
          this.x--;
        } else if (this.x + 1 >= this.matrix.length && this.matrix[this.x][this.y] - this.matrix[this.x + 1][this.y] == 1) {
          // down
          this.x++;
        }
        
        successfulRoute.push([this.x, this.y]);
        previousValue--;
      }
      return successfulRoute.reverse(); // Reverse the array so it's at the start
    } else {
      return [];
    }
  };

  _neighbourCheck(i, j, value) {
    return this.matrix[i] && (this.matrix[i][j] === value) && // If array x array defined and the matrix value is 0
    !(i === this.x && j === this.y) && // If it's not the center square
    !(i === this.x - 1 && (j === this.y + 1 || j === this.y - 1)) && // If it's not the right or left top corner
    !(i === this.x + 1 && (j === this.y + 1 || j === this.y - 1)) && // If it's not the right or left bottom corner
    !(i === this.x1 && j === this.y1); // If it's not the first square
  };
}