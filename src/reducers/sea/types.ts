import { ISeaBlock, ICoordinates } from 'types/seaTypes';

export interface ISeaState {
  mySea: ISeaBlock[][];
  enemySea: ISeaBlock[][];
  myShipsToPlace: number[];
  enemyShipsToPlace: number[];
  AIShipInProgress: ICoordinates | null;
}
