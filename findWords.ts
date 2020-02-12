import { range } from './util';

export function findWords(targets: string[], puzzleText: string): object {
  if (puzzleText.includes('|')) {
    throw new Error('The puzzleText must not include the "pipe" ( | ) character');
  }
  const result = {};
  let mutablePuzzleText = puzzleText;

  for (const word of targets.sort(isLongerThan)) {
    mutablePuzzleText = findWordAndReplaceWithSymbols(word, mutablePuzzleText);
    mutablePuzzleText = findWordAndReplaceWithSymbols(word, mutablePuzzleText, true);
  }

  return result;

  function findWordAndReplaceWithSymbols(word: string, text: string, reverseWord?: boolean): string {
    let searchWord = reverseWord ? reverseOf(word) : word;
    if (text.includes(searchWord)) {
      const wordStartIndex = text.search(searchWord);
      result[word] = range(wordStartIndex, wordStartIndex + searchWord.length);
      return text.replace(searchWord, '|'.repeat(searchWord.length));
    }
    return text;
  }
}

function isLongerThan(a: string, b: string): number {
  return b.length - a.length;
}

function reverseOf(str: string) {
  return str
    .split('')
    .reverse()
    .join('');
}
