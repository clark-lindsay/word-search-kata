import { range, removeCommas, reverseOf } from './util';

describe('the range function', () => {
  it('returns a range from the given start to the given end value, inclusive-exclusive', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    expect(range(10, 15)).toEqual([10, 11, 12, 13, 14]);
  });

  it('throws an error if the end value is greater than the start', () => {
    expect(() => range(10, 9)).toThrow();
  });

  it('throws an error if the start or end is negative', () => {
    expect(() => range(-1, 4)).toThrow();
    expect(() => range(0, -5)).toThrow();
  });
});

describe('the reverseOf function', () => {
  it('will return a backwards version of whatever string it is given', () => {
    expect(reverseOf('butter')).toEqual('rettub');
    expect(reverseOf('word')).toEqual('drow');
    expect(reverseOf('a')).toEqual('a');
  });

  it('will return an empty string if it is given an empty string', () => {
    expect(reverseOf('')).toEqual('');
  });
});

describe('the removeCommas function', () => {
  it('will return the same string, but with the commas removed', () => {
    expect(removeCommas('comma,separated,values')).toEqual('commaseparatedvalues');
  });

  it('will return an empty string when it is given one, or a string made only of commas', () => {
    expect(removeCommas('')).toEqual('');
    expect(removeCommas(',,,')).toEqual('');
  });

  it('will not alter existing whitespace', () => {
    expect(removeCommas('a string, but...\n with white,,space')).toEqual('a string but...\n with whitespace');
  });
});
