import { findWords } from './findWords';
import { removeCommas, reverseOf } from './util';

export function wordSearch(targets: string[], puzzleGrid: string[]): { [key: string]: number[][] } {
  if (puzzleGrid.length < 2) {
    return {};
  }
  let result: { [key: string]: number[][] } = {};
  for (const gridElement of ['rows', 'columns', 'diagonals']) {
    result = Object.assign(result, targetsInGrid(gridElement));
  }
  return result;

  function targetsInGrid(gridElementToSearch: string): { [key: string]: number[][] } {
    let result: { [key: string]: number[][] } = {};

    for (const [index, gridElement] of getElements(gridElementToSearch).entries()) {
      const match = findWords(targets, removeCommas(gridElement));
      for (const [word, indexRange] of Object.entries(match)) {
        const mappingFunction = getCoordinateMappingFunction(gridElementToSearch);
        result[word] = indexRange.map(indexInElement => mappingFunction(index, indexInElement));
      }
    }

    return result;
  }

  function getElements(gridElementToSearch: string): string[] {
    if (gridElementToSearch === 'rows') return getRows();
    else if (gridElementToSearch === 'columns') return getColumns();
    else if (gridElementToSearch === 'diagonals') return getDiagonals();
    else throw new Error('gridElementToSearch must be one of ["rows", "columns", "diagonals"');
  }

  function getCoordinateMappingFunction(gridElementToSearch: string) {
    if (gridElementToSearch === 'rows')
      return (elementNumber: number, indexInElement: number) => [indexInElement, elementNumber];
    else if (gridElementToSearch === 'columns')
      return (elementNumber: number, indexInElement: number) => [elementNumber, indexInElement];
    else if (gridElementToSearch === 'diagonals')
      return (elementNumber: number, indexInElement: number) => {
        const yCoordinate = indexInElement;
        const xCoordinate =
          elementNumber <= puzzleGrid.length * 2
            ? elementNumber - indexInElement
            : Math.abs((elementNumber % (puzzleGrid.length * 2 - 1)) - (puzzleGrid.length - 1)) + indexInElement;
        return [xCoordinate, yCoordinate];
      };
    else throw new Error('gridElementToSearch must be one of ["rows", "columns", "diagonals"');
  }

  function getRows(): string[] {
    return puzzleGrid;
  }

  function getColumns(): string[] {
    let columns: string[] = Array(puzzleGrid.length).fill('');
    for (const row of puzzleGrid) {
      for (const [index, char] of row.split(',').entries()) {
        columns[index] += char;
      }
    }
    return columns;
  }

  function getDiagonals(): string[] {
    let diagonals = Array(puzzleGrid.length * 2 - 1).fill('');
    for (const [xCoordinate, row] of puzzleGrid.entries()) {
      for (const [yCoordinate, char] of row.split(',').entries()) {
        diagonals[xCoordinate + yCoordinate] += char;
      }
    }

    let mirroredDiagonals = Array(puzzleGrid.length * 2 - 1).fill('');
    const mirroredPuzzleGrid = puzzleGrid.map(str => reverseOf(str));
    for (const [xCoordinate, row] of mirroredPuzzleGrid.entries()) {
      for (const [yCoordinate, char] of row.split(',').entries()) {
        mirroredDiagonals[xCoordinate + yCoordinate] += char;
      }
    }

    return diagonals.concat(mirroredDiagonals.reverse());
  }
}
