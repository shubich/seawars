import deepCopyOfObject from './deepCopyOfObject';
import { ISeaBlock, ICoordinates } from 'types/seaTypes';
import getShipCoordinates from './getShipCoordinates';
import isShipKilled from './isShipKilled';
import highlightKilledShip from './highlightKilledShip';

const updateSeaAfterShot = (sea: ISeaBlock[][], coordinates: ICoordinates) => {
  let newSea = deepCopyOfObject(sea);
  const { x, y } = coordinates;

  newSea[y][x].hasFire = true;

  if (newSea[y][x].hasShip) {
    const shipCoordinates = getShipCoordinates(newSea, coordinates);

    if (isShipKilled(newSea, shipCoordinates)) {
      newSea = highlightKilledShip(newSea, shipCoordinates);
    }
  }

  return newSea;
};

export default updateSeaAfterShot;
