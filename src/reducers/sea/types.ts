import { ISeaBlock } from 'types/seaTypes';

export interface ISeaState {
  mySea: ISeaBlock[][];
  enemySea: ISeaBlock[][];
  myShipsToPlace: number[];
  enemyShipsToPlace: number[];
}
