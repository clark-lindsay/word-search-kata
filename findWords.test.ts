import { findWords } from './findWords';

describe('the findWords function', () => {
  it('will return the index ranges of the target strings if it is contained in the input', () => {
    const targets = ['word', 'string'];
    const puzzleText = 'stringwithwordinit';

    expect(findWords(targets, puzzleText)).toEqual({ word: [10, 11, 12, 13], string: [0, 1, 2, 3, 4, 5] });
  });

  it('will favor the longer words when target strings have overlapping indices in the puzzle text', () => {
    const targets = ['word', 'or'];
    const puzzleText = 'stringwithwordinit';

    expect(findWords(targets, puzzleText)).toEqual({ word: [10, 11, 12, 13] });
  });

  it('will throw an error if the puzzleText includes the pipe character ( | ) since this is used in internal calculations', () => {
    const targets = ['word', 'or'];
    const puzzleText = 'stringwith|pipes|intit';

    expect(() => findWords(targets, puzzleText)).toThrow();
  });
});
