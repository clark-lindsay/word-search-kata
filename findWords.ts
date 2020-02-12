import { range } from './util';

export function findWords(targets: string[], puzzleText: string): object {
  const result = {};
  for (const word of targets) {
    if (puzzleText.includes(word)) {
      const wordStartIndex = puzzleText.search(word);
      result[word] = range(wordStartIndex, wordStartIndex + word.length);
    }
  }
  return result;
}
