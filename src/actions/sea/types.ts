import { ICoordinates } from 'types/seaTypes';

export enum ActionTypesSea {
  PLACE_SHIP = 'PLACE_SHIP',
  PLAYER_FIRE_TO_COORDINATES = 'PLAYER_FIRE_TO_COORDINATES',
  ENEMY_FIRE_TO_COORDINATES = 'ENEMY_FIRE_TO_COORDINATES',
  RESET_SEA = 'RESET_SEA',
}

// @TODO
export interface IPlaceShip {
  coordinates: ICoordinates;
  shipSize: number;
  type: ActionTypesSea.PLACE_SHIP;
}

export interface IPlayerFireToCoordinates {
  coordinates: ICoordinates;
  type: ActionTypesSea.PLAYER_FIRE_TO_COORDINATES;
}

export interface IEnemyFireToCoordinates {
  coordinates: ICoordinates;
  type: ActionTypesSea.ENEMY_FIRE_TO_COORDINATES;
}

export interface IResetSea {
  type: ActionTypesSea.RESET_SEA;
}

export type ISeaActions =
  | IPlaceShip
  | IPlayerFireToCoordinates
  | IEnemyFireToCoordinates
  | IResetSea;
