import { findWords } from './findWords';
import { reverseOf } from './util';

export function wordSearch(targets: string[], puzzleGrid: string[]): { [key: string]: number[][] } {
  let result: { [key: string]: number[][] } = {};
  searchRows();
  searchColumns();
  searchDiagonals();
  return result;

  function searchRows(): void {
    for (const [index, row] of puzzleGrid.entries()) {
      const match = findWords(targets, row.split(',').join(''));
      for (const [word, indexRange] of Object.entries(match)) {
        result[word] = indexRange.map(xCoordinate => [xCoordinate, index]);
      }
    }
  }
  function searchColumns(): void {
    for (const [index, col] of getColumns().entries()) {
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

  function searchDiagonals(): void {
    for (const [initialXCoordinate, diagonal] of getDiagonals().entries()) {
      const match = findWords(targets, diagonal.split(',').join(''));
      for (const [word, indexRange] of Object.entries(match)) {
        result[word] = indexRange.map(indexInDiag => [initialXCoordinate - indexInDiag, indexInDiag]);
      }
    }

    function getDiagonals(): string[] {
      let diagonals = Array(puzzleGrid.length * 2).fill('');
      for (const [xCoordinate, row] of puzzleGrid.entries()) {
        for (const [yCoordinate, char] of row.split(',').entries()) {
          diagonals[xCoordinate + yCoordinate] += char;
        }
      }

      let mirroredDiagonals = Array(puzzleGrid.length * 2).fill('');
      const mirroredPuzzleGrid = puzzleGrid.map(str => reverseOf(str));
      for (const [xCoordinate, row] of mirroredPuzzleGrid.entries()) {
        for (const [yCoordinate, char] of row.split(',').entries()) {
          mirroredDiagonals[xCoordinate + yCoordinate] += char;
        }
      }

      return diagonals.concat(mirroredDiagonals);
    }
  }
}
