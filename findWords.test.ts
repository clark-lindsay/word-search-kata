import { findWords } from './findWords';

describe('the findWords functinon', () => {
  it('will return the index range of the target string if it is contained in the input', () => {
    const targets = ['word'];
    const puzzleText = 'stringwithwordinit'.split('');

    expect(findWords(targets, puzzleText)).toEqual({ word: [[10, 11, 12, 13]] });
  });
});
