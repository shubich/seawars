import { ISeaState } from './types';
import getSeaWithRandomShips from 'utils/getSeaWithRandomShips';
import getDefaultShipsToPlace from 'utils/getDefaultShipsToPlace';

const getInitialSeaState = (): ISeaState => {
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

export default getInitialSeaState;
