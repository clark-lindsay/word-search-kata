import { findWords } from './findWords';

export function wordSearch(targets: string[], puzzleGrid: string[]): { [key: string]: number[][] } {
  let result: { [key: string]: number[][] } = {};
  for (const row of puzzleGrid) {
    const match = findWords(targets, row.split(',').join(''));
    for (const [word, indexRange] of Object.entries(match)) {
      result[word] = indexRange.map(num => [0, num]);
    }
  }
  return result;
}
