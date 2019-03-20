import getEmptySea from 'utils/getEmptySea';
import { ICoordinates, ISeaBlock } from 'types/seaTypes';
import Sequence from 'utils/Sequence';
import { getRandomInteger } from 'utils/random';
import highlightKilledShip from './highlightKilledShip';
import clearSeaFromFire from './clearSeaFromFire';
import getDefaultShipsToPlace from 'utils/getDefaultShipsToPlace';

const getSeaWithRandomShips = (): ISeaBlock[][] => {
  let sea = getEmptySea();
  const shipsToPlace = getDefaultShipsToPlace();

  shipsToPlace.forEach(shipSize => {
    const shipAVBLPositions: ICoordinates[][] = [];

    sea.forEach((row, rowIndex) => {
      row.forEach((column, columnIndex) => {
        if (column.hasShip || column.hasFire) return; // initial column is busy

        const right = columnIndex + shipSize - 1;
        const bottom = rowIndex + shipSize - 1;

        const xSequence = new Sequence(columnIndex, right).items;
        const ySequence = new Sequence(rowIndex, bottom).items;

        if (
          right <= 9 &&
          xSequence.every(
            x => !sea[rowIndex][x].hasShip && !sea[rowIndex][x].hasFire,
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
            y => !sea[y][columnIndex].hasShip && !sea[y][columnIndex].hasFire,
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

    const randomPositionIndex = getRandomInteger(
      0,
      shipAVBLPositions.length - 1,
    );

    const randomPosition = shipAVBLPositions[randomPositionIndex];

    randomPosition.forEach(coordinates => {
      const { x, y } = coordinates;
      sea[y][x].hasShip = true;
    });

    sea = highlightKilledShip(sea, randomPosition);
  });

  sea = clearSeaFromFire(sea);

  return sea;
};

export default getSeaWithRandomShips;
