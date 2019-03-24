import { ISeaState } from './types';
import { ISeaBlock, ICoordinates } from 'types/seaTypes';
import getSeaWithRandomShips from 'utils/getSeaWithRandomShips';
import deepCopyOfObject from 'utils/deepCopyOfObject';
import getShipCoordinates from 'utils/getShipCoordinates';
import isShipKilled from 'utils/isShipKilled';
import highlightKilledShip from 'utils/highlightKilledShip';
import getDefaultShipsToPlace from 'utils/getDefaultShipsToPlace';

export const getInitialSeaState = (): ISeaState => {
  return {
    playerSea: getSeaWithRandomShips(),
    enemySea: getSeaWithRandomShips(),
    playerShipsToPlace: getDefaultShipsToPlace(),
    enemyShipsToPlace: getDefaultShipsToPlace(),
    playerShipInProgress: null,
    enemyShipInProgress: null,
    playerKills: 0,
    enemyKills: 0,
    isPlayerTurn: true,
  };
};

export const getStateAfterShot = (
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

  let newSea = deepCopyOfObject(sea);
  let newShipInProgress = deepCopyOfObject(shipInProgress);
  let killedShip: ICoordinates[] | null = null;
  let wounded = false;

  newSea[y][x].hasFire = true;

  if (newSea[y][x].hasShip) {
    wounded = true;
    const shipCoordinates = getShipCoordinates(newSea, coordinates);

    if (isShipKilled(newSea, shipCoordinates)) {
      newSea = highlightKilledShip(newSea, shipCoordinates);
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
