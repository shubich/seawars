import { ISeaState } from './types';
import { ISeaBlock, ICoordinates } from 'types/seaTypes';
import getSeaWithRandomShips from 'utils/getSeaWithRandomShips';
import deepCopyOfObject from 'utils/deepCopyOfObject';
import getShipCoordinates from 'utils/getShipCoordinates';
import isShipKilled from 'utils/isShipKilled';
import highlightKilledShip from 'utils/highlightKilledShip';

const getDefaultShipsToPlace = () => [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

export const getInitialSeaState = (): ISeaState => {
  return {
    mySea: getSeaWithRandomShips(),
    enemySea: getSeaWithRandomShips(),
    myShipsToPlace: getDefaultShipsToPlace(),
    enemyShipsToPlace: getDefaultShipsToPlace(),
    AIShipInProgress: null,
  };
};

export const getStateAfterShot = (
  sea: ISeaBlock[][],
  coordinates: ICoordinates,
  shipInProgress: ICoordinates | null,
): { sea: ISeaBlock[][]; shipInProgress: ICoordinates | null } => {
  let newSea = deepCopyOfObject(sea);
  let newShipInProgress = deepCopyOfObject(shipInProgress);

  const { x, y } = coordinates;

  newSea[y][x].hasFire = true;

  if (newSea[y][x].hasShip) {
    const shipCoordinates = getShipCoordinates(newSea, coordinates);

    if (isShipKilled(newSea, shipCoordinates)) {
      newSea = highlightKilledShip(newSea, shipCoordinates);
      newShipInProgress = null;
    } else {
      newShipInProgress = coordinates;
    }
  }

  return {
    sea: newSea,
    shipInProgress: newShipInProgress,
  };
};
