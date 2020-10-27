export class MatchesDeleter{
  static _getMatchesInRow(gridCells) {
    const resultRows = [];
    
    for (let y = 0; y < gridCells.length; y++) {
    
      let matchesInRow = [];
      let previous = gridCells[y][0].firstElementChild?.classList[0];
    
      for (let x = 0; x < gridCells[0].length; x++) {
        
        const current  = gridCells[y][x].firstElementChild?.classList[0];
  
        if (current != previous) {
  
          if (matchesInRow[0].firstElementChild  && matchesInRow.length >= 5) {
  
            resultRows.push(matchesInRow);
  
          }
  
          matchesInRow = [];
  
        }
  
        matchesInRow.push(gridCells[y][x]);
        previous = current;
  
      }
  
      if (matchesInRow[0].firstElementChild && matchesInRow.length >= 5) {
  
        resultRows.push(matchesInRow);
  
      }
  
    }

    return resultRows;
  
  }

  static _getMatchesInColumn(gridCells) {
    const resultColumns = [];
    
    for (let x = 0; x < gridCells.length; x++) {
    
      let matchesInRow = [];
      let previous = gridCells[0][x].firstElementChild?.classList[0];
    
      for (let y = 0; y < gridCells[0].length; y++) {
        
        const current  = gridCells[y][x].firstElementChild?.classList[0];
        
        if (current != previous) {
        
          if (matchesInRow[0].firstElementChild  && matchesInRow.length >= 5) {
        
            resultColumns.push(matchesInRow);
        
          }
        
          matchesInRow = [];
        
        }
        
        matchesInRow.push(gridCells[y][x]);
        previous = current;
      
      }
      
      if (matchesInRow[0].firstElementChild && matchesInRow.length >= 5) {
      
        resultColumns.push(matchesInRow);
      
      }
    
    }
    
    return resultColumns;
  
  }

  static deleteMatches(gridCells) {

    let ballsIsDeleted = 0;

    const resultColumns = this._getMatchesInColumn(gridCells);
    resultColumns.forEach(row => {
    
      row.forEach(item => {
    
        if (item.firstElementChild) {
    
          ballsIsDeleted++;
          item.firstElementChild.remove();
    
        }
    
      });
    
    });
    
    const resultRows = this._getMatchesInRow(gridCells);
    resultRows.forEach(row => {
    
      row.forEach(item => {
    
        if (item.firstElementChild) {
    
          ballsIsDeleted++;
          item.firstElementChild.remove();
    
        }
    
      });
    
    });

    return ballsIsDeleted;
  }
}