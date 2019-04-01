import getShipCoordinates from 'utils/getShipCoordinates';
import { ICoordinates, ISeaBlock } from 'types/seaTypes';

describe('getShipCoordinates', () => {
  // double click for highlight
  const EB: ISeaBlock = { hasFire: false, hasShip: false }; // EB === emptyBlock
  const SB: ISeaBlock = { hasFire: false, hasShip: true }; // SB === shipBlock

  const testCoords = (sea: ISeaBlock[][], coords: ICoordinates[]) => {
    for (let i = 0; i < coords.length; i += 1) {
      const result = getShipCoordinates(sea, coords[i]);
      expect(result.length).toEqual(coords.length);

      for (let j = 0; j < result.length; j += 1) {
        expect(result).toContainEqual(coords[j]);
      }
    }
  };

  test('single ship', () => {
    const sea: ISeaBlock[][] = [
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, SB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
    ];

    const coords: ICoordinates[] = [{ x: 2, y: 2 }];

    testCoords(sea, coords);
  });

  test('2block ship', () => {
    const sea: ISeaBlock[][] = [
      [SB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [SB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
    ];

    const coords: ICoordinates[] = [{ x: 0, y: 0 }, { x: 0, y: 1 }];

    testCoords(sea, coords);
  });

  test('3block ship', () => {
    const sea: ISeaBlock[][] = [
      [EB, EB, SB, SB, SB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
    ];

    const coords: ICoordinates[] = [
      { x: 2, y: 0 },
      { x: 3, y: 0 },
      { x: 4, y: 0 },
    ];

    testCoords(sea, coords);
  });

  test('4block ship', () => {
    const sea: ISeaBlock[][] = [
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, SB, SB, SB, SB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
    ];

    const coords: ICoordinates[] = [
      { x: 1, y: 4 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
    ];

    testCoords(sea, coords);
  });
});
