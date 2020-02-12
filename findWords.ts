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
      mutablePuzzleText = replaceFirstSubstringOccurenceWithChars(mutablePuzzleText, word, '|');
    }
  }
  return result;
}

function replaceFirstSubstringOccurenceWithChars(
  text: string,
  substring: string,
  replacementChar: string = '|'
): string {
  const substringStartIndex = text.indexOf(substring);
  return (
    text.substring(0, substringStartIndex) +
    replacementChar.repeat(substring.length) +
    text.substring(substringStartIndex + substring.length)
  );
}
