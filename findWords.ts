import { range, reverseOf } from './util';

export function findWords(targets: string[], puzzleText: string): { [key: string]: number[] } {
  if (puzzleText.includes('|')) {
    throw new Error('The puzzleText must not include the "pipe" ( | ) character');
  }
  const result: { [key: string]: number[] } = {};
  let mutablePuzzleText = puzzleText;

  for (const word of targets.sort(isLongerThan)) {
    mutablePuzzleText = findWordAndReplaceWithSymbols(word, mutablePuzzleText);
  }

  return result;

  function findWordAndReplaceWithSymbols(word: string, text: string): string {
    if (text.includes(word)) {
      addToResult({ reverse: false });
      return text.replace(word, '|'.repeat(word.length));
    } else if (text.includes(reverseOf(word))) {
      addToResult({ reverse: true });
      return text.replace(reverseOf(word), '|'.repeat(word.length));
    }
    return text;

    function addToResult({ reverse = false }): void {
      const wordStartIndex = text.search(reverse ? reverseOf(word) : word);
      const wordIndexRange = reverse
        ? range(wordStartIndex, wordStartIndex + word.length).reverse()
        : range(wordStartIndex, wordStartIndex + word.length);
      result[word] = wordIndexRange;
    }
  }
}

function isLongerThan(a: string, b: string): number {
  return b.length - a.length;
}
