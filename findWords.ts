import { range } from './util';

export function findWords(targets: string[], puzzleText: string): object {
  if (puzzleText.includes('|')) {
    throw new Error('The puzzleText must not include the "pipe" ( | ) character');
  }
  const result = {};
  let mutablePuzzleText = puzzleText;
  for (const word of targets.sort((a, b) => b.length - a.length)) {
    if (mutablePuzzleText.includes(word)) {
      const wordStartIndex = mutablePuzzleText.search(word);
      result[word] = range(wordStartIndex, wordStartIndex + word.length);
      mutablePuzzleText =
        mutablePuzzleText.substring(0, wordStartIndex) +
        '|'.repeat(word.length) +
        mutablePuzzleText.substring(wordStartIndex + word.length);
    }
  }
  return result;
}
