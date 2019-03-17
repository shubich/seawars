import { ISeaBlock, ICoordinates } from 'types/seaTypes';

export interface ISeaState {
  playerSea: ISeaBlock[][];
  enemySea: ISeaBlock[][];
  playerShipsToPlace: number[];
  enemyShipsToPlace: number[];
  playerShipInProgress: ICoordinates | null; // when enemy wounded player
  enemyShipInProgress: ICoordinates | null; // when player wounded enemy
  isPlayerTurn: boolean;
}
