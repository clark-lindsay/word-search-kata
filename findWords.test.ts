import { findWords } from './findWords';

describe('the findWords function', () => {
  it('will return the index ranges of the target strings if they are contained, verbatim, in the input', () => {
    const targets = ['word', 'string'];
    const puzzleText = 'stringwithwordinit';

    expect(findWords(targets, puzzleText)).toEqual({ word: [10, 11, 12, 13], string: [0, 1, 2, 3, 4, 5] });
  });

  it('will find words both backwards and forwards', () => {
    const targets = ['target', 'sdrawkcab', 'racecar'];
    const puzzleText = 'some of these targets are backwards, but not racecar';

    expect(findWords(targets, puzzleText)).toEqual({
      target: [14, 15, 16, 17, 18, 19],
      sdrawkcab: [34, 33, 32, 31, 30, 29, 28, 27, 26],
      racecar: [45, 46, 47, 48, 49, 50, 51]
    });
  });

  it('will only return one index range for a word, even if that word appears twice in the puzzle text', () => {
    const targets = ['target'];
    const puzzleText = 'the word target is a target in this text';

    expect(findWords(targets, puzzleText)).toEqual({
      target: [9, 10, 11, 12, 13, 14]
    });
  });

  it('will return an empty object if none of the targets appear in the puzzle text', () => {
    const targets = ['word', 'string'];
    const puzzleText = 'totallydifferenttext';

    expect(findWords(targets, puzzleText)).toEqual({});
  });

  it('when two targets overlap, they will both be found', () => {
    const targets = ['word', 'or'];
    const puzzleText = 'stringwithwordinit';

    expect(findWords(targets, puzzleText)).toEqual({ word: [10, 11, 12, 13], or: [11, 12] });
  });

  it('will throw an error if the puzzleText includes the pipe character ( | ) since this is used in internal calculations', () => {
    const targets = ['word', 'or'];
    const puzzleText = 'stringwith|pipes|intit';

    expect(() => findWords(targets, puzzleText)).toThrow();
  });
});
