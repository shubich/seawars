import getEmptySea from 'utils/getEmptySea';
import { ISeaBlock } from 'types/seaTypes';
import { getRandomInteger } from 'utils/random';
import getShipCollisionCoordinates from './getShipCollisionCoordinates';
import getDefaultShipsToPlace from 'utils/getDefaultShipsToPlace';
import getShipAVBLPositions from 'utils/getShipAVBLPositions';

const getSeaWithRandomShips = (): ISeaBlock[][] => {
  const sea = getEmptySea();
  const shipsToPlace = getDefaultShipsToPlace();

  shipsToPlace.forEach(shipSize => {
    const shipAVBLPositions = getShipAVBLPositions(sea, shipSize);

    const randomPositionIndex = getRandomInteger(
      0,
      shipAVBLPositions.length - 1,
    );

    const randomPosition = shipAVBLPositions[randomPositionIndex];

    randomPosition.forEach(coordinates => {
      const { x, y } = coordinates;
      sea[y][x].hasShip = true;
    });

    getShipCollisionCoordinates(randomPosition).forEach(({ x, y }) => {
      const block = sea[y][x];
      block.isCollision = true;
      // block.collisionDegree = block.collisionDegree
      //   ? block.collisionDegree + 1
      //   : 1;
    });
  });

  return sea;
};

export default getSeaWithRandomShips;
