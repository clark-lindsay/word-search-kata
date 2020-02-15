import { range, reverseOf } from './util';

export function findWords(targets: string[], puzzleText: string): { [key: string]: number[] } {
  if (puzzleText.includes('|')) {
    throw new Error('The puzzleText must not include the "pipe" ( | ) character');
  }
  const result: { [key: string]: number[] } = {};

  for (const word of targets) {
    if (puzzleText.includes(word)) {
      addToResult({ word, reverse: false });
    } else if (puzzleText.includes(reverseOf(word))) {
      addToResult({ word, reverse: true });
    }
  }

  return result;

  function addToResult({ word, reverse = false }: addToResultProps): void {
    const wordStartIndex = puzzleText.search(reverse ? reverseOf(word) : word);
    const wordIndexRange = reverse
      ? range(wordStartIndex, wordStartIndex + word.length).reverse()
      : range(wordStartIndex, wordStartIndex + word.length);
    result[word] = wordIndexRange;
  }

  interface addToResultProps {
    word: string;
    reverse: boolean;
  }
}
