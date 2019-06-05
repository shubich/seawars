import { ISeaBlock, ICoordinates } from 'types/seaTypes';
import deepCopyOfObject from 'utils/deepCopyOfObject';
import getShipCoordinates from 'utils/getShipCoordinates';
import isShipKilled from 'utils/isShipKilled';
import getShipCollisionCoordinates from 'utils/getShipCollisionCoordinates';

const getStateAfterShot = (
  sea: ISeaBlock[][],
  coordinates: ICoordinates,
  shipInProgress: ICoordinates | null,
): {
  sea: ISeaBlock[][];
  shipInProgress: ICoordinates | null;
  killedShip: ICoordinates[] | null;
  wounded: boolean;
} => {
  const { x, y } = coordinates;

  if (sea[y][x].hasFire) {
    throw new Error('Fire to the coordinates more than once');
  }

  const newSea = deepCopyOfObject(sea);
  let newShipInProgress = deepCopyOfObject(shipInProgress);
  let killedShip: ICoordinates[] | null = null;
  let wounded = false;

  newSea[y][x].hasFire = true;

  if (newSea[y][x].hasShip) {
    wounded = true;
    const shipCoordinates = getShipCoordinates(newSea, coordinates);

    if (isShipKilled(newSea, shipCoordinates)) {
      getShipCollisionCoordinates(shipCoordinates).forEach(({ x, y }) => {
        newSea[y][x].hasFire = true;
      });
      newShipInProgress = null;
      killedShip = shipCoordinates;
    } else {
      newShipInProgress = coordinates;
    }
  }

  return {
    wounded,
    killedShip,
    sea: newSea,
    shipInProgress: newShipInProgress,
  };
};

export default getStateAfterShot;
