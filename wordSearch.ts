import { findWords } from './findWords';

export function wordSearch(targets: string[], puzzleGrid: string[]): { [key: string]: number[][] } {
  let result: { [key: string]: number[][] } = {};
  searchRows();
  searchColumns();
  return result;

  function searchRows() {
    for (const [index, row] of puzzleGrid.entries()) {
      const match = findWords(targets, row.split(',').join(''));
      for (const [word, indexRange] of Object.entries(match)) {
        result[word] = indexRange.map(xCoordinate => [xCoordinate, index]);
      }
    }
  }
  function searchColumns() {
    const columns = getColumns();
    for (const [index, col] of columns.entries()) {
      const match = findWords(targets, col.split(',').join(''));
      for (const [word, indexRange] of Object.entries(match)) {
        result[word] = indexRange.map(yCoordinate => [index, yCoordinate]);
      }
    }

    function getColumns(): string[] {
      let columns: string[] = Array(puzzleGrid.length).fill('');
      for (const row of puzzleGrid) {
        for (const [index, char] of row.split(',').entries()) {
          columns[index] += char;
        }
      }
      return columns;
    }
  }
}
