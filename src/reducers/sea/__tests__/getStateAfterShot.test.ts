import getStateAfterShot from 'reducers/sea/getStateAfterShot';
import { ISeaBlock, ICoordinates } from 'types/seaTypes';

describe('getStateAfterShot', () => {
  // double click for highlight
  const EB: ISeaBlock = { hasFire: false, hasShip: false }; // EB === emptyBlock

  test('Fire to the coordinates more than once', () => {
    const fakeSea: ISeaBlock[][] = [
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
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

    const coordinates: ICoordinates = { x: 0, y: 0 };

    const { sea: newFakeSea } = getStateAfterShot(fakeSea, coordinates, null);

    expect(() => getStateAfterShot(newFakeSea, coordinates, null)).toThrow(
      new Error('Fire to the coordinates more than once'),
    );
  });
});
