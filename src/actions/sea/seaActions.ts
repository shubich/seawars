import {
  ActionTypesSea,
  IPlaceShip,
  IFireToCoordinates,
  IResetSea,
} from './types';

export const placeShip = (
  shipSize: number,
  x: number,
  y: number,
): IPlaceShip => ({
  x,
  y,
  shipSize,
  type: ActionTypesSea.PLACE_SHIP,
});

export const fireToCoordinates = (
  x: number,
  y: number,
): IFireToCoordinates => ({
  x,
  y,
  type: ActionTypesSea.FIRE_TO_COORDINATES,
});

export const resetSea = (): IResetSea => ({
  type: ActionTypesSea.RESET_SEA,
});
