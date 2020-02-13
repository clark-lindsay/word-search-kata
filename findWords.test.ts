import { findWords } from './findWords';

describe('the findWords function', () => {
  it('will return the index ranges of the target strings if it is contained, verbatim, in the input', () => {
    const targets = ['word', 'string'];
    const puzzleText = 'stringwithwordinit';

    expect(findWords(targets, puzzleText)).toEqual({ word: [10, 11, 12, 13], string: [0, 1, 2, 3, 4, 5] });
  });

  it('will return an empty object if none of the targets appear in the puzzle text', () => {
    const targets = ['word', 'string'];
    const puzzleText = 'totallydifferenttext';

    expect(findWords(targets, puzzleText)).toEqual({});
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

  it('will find words both backwards and forwards', () => {
    const targets = ['target', 'sdrawkcab', 'racecar'];
    const puzzleText = 'some of these targets are backwards, but not racecar';

    expect(findWords(targets, puzzleText)).toEqual({
      target: [14, 15, 16, 17, 18, 19],
      sdrawkcab: [26, 27, 28, 29, 30, 31, 32, 33, 34],
      racecar: [45, 46, 47, 48, 49, 50, 51]
    });
  });
});
