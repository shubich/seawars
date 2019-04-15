import { ISeaState } from 'reducers/sea/types';

const getInitialSeaState = (): ISeaState => {
  return {
    playerSea: [[]],
    enemySea: [[]],
    playerShipsToPlace: [1],
    enemyShipsToPlace: [1],
    playerShipInProgress: null,
    enemyShipInProgress: null,
    playerKills: 0,
    enemyKills: 0,
    isPlayerTurn: true,
  };
};

export default getInitialSeaState;
