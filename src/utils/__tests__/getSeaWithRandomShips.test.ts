import getSeaWithRandomShips from '../getSeaWithRandomShips';
import getShipCoordinates from 'utils/getShipCoordinates';
import { ICoordinates } from 'types/seaTypes';

describe('getSeaWithRandomShips', () => {
  test('sea must have 20 ship blocks', () => {
    const sea = getSeaWithRandomShips();
    const result = sea.reduce((accRow, row) => {
      return (
        accRow +
        row.reduce((accCol, col) => (col.hasShip ? accCol + 1 : accCol), 0)
      );
    }, 0);

    expect(result).toEqual(20);
  });

  test('sea must have 80 empty blocks', () => {
    const sea = getSeaWithRandomShips();
    const result = sea.reduce((accRow, row) => {
      return (
        accRow +
        row.reduce(
          (accCol, col) => (!col.hasShip && !col.hasFire ? accCol + 1 : accCol),
          0,
        )
      );
    }, 0);

    expect(result).toEqual(80);
  });

  test('sea must have 10 ships', () => {
    const sea = getSeaWithRandomShips();
    const result = sea.reduce((accRow: ICoordinates[][], row, indexRow) => {
      const rowRez = row.reduce((accCol: ICoordinates[][], col, indexCol) => {
        if (col.hasShip) {
          const isExist = (c2: ICoordinates[]) =>
            c2.some(c => c.y === indexRow && c.x === indexCol);

          if (!accCol.some(isExist) && !accRow.some(isExist)) {
            const shipCoordinates = getShipCoordinates(sea, {
              x: indexCol,
              y: indexRow,
            });

            return [...accCol, shipCoordinates];
          }
        }

        return [...accCol];
      }, []);

      return [...accRow, ...rowRez];
    }, []);

    expect(result.length).toEqual(10);
  });
});
