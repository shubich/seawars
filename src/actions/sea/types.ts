export enum ActionTypesSea {
  PLACE_SHIP = 'PLACE_SHIP',
  FIRE_TO_COORDINATES = 'FIRE_TO_COORDINATES',
  RESET_SEA = 'RESET_SEA',
}

export interface IPlaceShip {
  x: number;
  y: number;
  shipSize: number;
  type: ActionTypesSea.PLACE_SHIP;
}

export interface IFireToCoordinates {
  x: number;
  y: number;
  type: ActionTypesSea.FIRE_TO_COORDINATES;
}

export interface IResetSea {
  type: ActionTypesSea.RESET_SEA;
}

export type ISeaActions = IPlaceShip | IFireToCoordinates | IResetSea;
