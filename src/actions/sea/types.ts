import { ICoordinates } from 'types/seaTypes';

export enum ActionTypesSea {
  PLACE_SHIP = 'PLACE_SHIP',
  FIRE_TO_COORDINATES = 'FIRE_TO_COORDINATES',
  RESET_SEA = 'RESET_SEA',
}

export interface IPlaceShip {
  coordinates: ICoordinates;
  shipSize: number;
  type: ActionTypesSea.PLACE_SHIP;
}

export interface IFireToCoordinates {
  coordinates: ICoordinates;
  type: ActionTypesSea.FIRE_TO_COORDINATES;
}

export interface IResetSea {
  type: ActionTypesSea.RESET_SEA;
}

export type ISeaActions = IPlaceShip | IFireToCoordinates | IResetSea;
