import { findWords } from './findWords';

describe('the findWords function', () => {
  it('will return the index ranges of the target strings if it is contained in the input', () => {
    const targets = ['word', 'string'];
    const puzzleText = 'stringwithwordinit';

    expect(findWords(targets, puzzleText)).toEqual({ word: [10, 11, 12, 13], string: [0, 1, 2, 3, 4, 5] });
  });
});
