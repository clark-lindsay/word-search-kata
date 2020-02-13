import { findWords } from './findWords';

export function wordSearch(targets: string[], puzzleGrid: string[]): { [key: string]: number[][] } {
  let result: { [key: string]: number[][] } = {};
  searchRows();
  return result;

  function searchRows() {
    for (const [index, row] of puzzleGrid.entries()) {
      const match = findWords(targets, row.split(',').join(''));
      for (const [word, indexRange] of Object.entries(match)) {
        result[word] = indexRange
          .map(xCoordinate => [xCoordinate, index])
          .sort()
          .reverse();
      }
    }
  }
}
