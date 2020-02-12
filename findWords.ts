import { range } from './util';

export function findWords(targets: string[], puzzleText: string): object {
  if (puzzleText.includes('|')) {
    throw new Error('The puzzleText must not include the "pipe" ( | ) character');
  }
  const result = {};
  let mutablePuzzleText = puzzleText;

  for (const word of targets.sort(isLongerThan)) {
    if (mutablePuzzleText.includes(word)) {
      const wordStartIndex = mutablePuzzleText.search(word);
      result[word] = range(wordStartIndex, wordStartIndex + word.length);
      mutablePuzzleText = mutablePuzzleText.replace(word, '|'.repeat(word.length));
    }
  }

  return result;
}

function isLongerThan(a: string, b: string): number {
  return b.length - a.length;
}
