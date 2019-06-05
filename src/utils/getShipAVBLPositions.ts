import { ICoordinates, ISeaBlock } from 'types/seaTypes';
import Sequence from 'utils/Sequence';

const getShipAVBLPositions = (sea: ISeaBlock[][], shipSize: number) => {
  const shipAVBLPositions: ICoordinates[][] = [];

  sea.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column.hasShip || column.isCollision) return; // initial column is busy

      const right = columnIndex + shipSize - 1;
      const bottom = rowIndex + shipSize - 1;

      const xSequence = new Sequence(columnIndex, right).items;
      const ySequence = new Sequence(rowIndex, bottom).items;

      if (
        right <= 9 &&
        xSequence.every(
          x => !sea[rowIndex][x].hasShip && !sea[rowIndex][x].isCollision,
        )
      ) {
        const shipAVBLCoords: ICoordinates[] = [];

        xSequence.forEach(x => {
          shipAVBLCoords.push({ x, y: rowIndex });
        });

        shipAVBLPositions.push(shipAVBLCoords);
      }

      if (
        bottom <= 9 &&
        ySequence.every(
          y => !sea[y][columnIndex].hasShip && !sea[y][columnIndex].isCollision,
        )
      ) {
        const shipAVBLCoords: ICoordinates[] = [];

        ySequence.forEach(y => {
          shipAVBLCoords.push({ y, x: columnIndex });
        });

        shipAVBLPositions.push(shipAVBLCoords);
      }
    });
  });

  return shipAVBLPositions;
};

export default getShipAVBLPositions;
