import { ActionTypesSea } from './types';

export const placeShip = (shipSize: number, x: number, y: number) => ({
  x,
  y,
  shipSize,
  type: ActionTypesSea.PLACE_SHIP,
});

export const fireToCoordinates = (x: number, y: number) => ({
  x,
  y,
  type: ActionTypesSea.FIRE_TO_COORDINATES,
});

export const resetSea = () => ({
  type: ActionTypesSea.RESET_SEA,
});
