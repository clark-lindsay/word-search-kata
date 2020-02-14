export function range(start: number, end: number): number[] {
  if (end < start || start < 0 || end < 0) {
    throw Error('The start and end values of a range must be positive, with end >= start');
  }
  return Array.from(new Array(end - start), (_, i) => i + start);
}

export function removeCommas(str: string): string {
  return str.split(',').join('');
}

export function reverseOf(str: string) {
  return str
    .split('')
    .reverse()
    .join('');
}
