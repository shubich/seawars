import { ICoordinates } from 'types/seaTypes';
import {
  ActionTypesSea,
  IPlaceShip,
  IFireToCoordinates,
  IResetSea,
} from './types';

export const placeShip = (
  shipSize: number,
  coordinates: ICoordinates,
): IPlaceShip => ({
  shipSize,
  coordinates,
  type: ActionTypesSea.PLACE_SHIP,
});

export const fireToCoordinates = (
  coordinates: ICoordinates,
): IFireToCoordinates => ({
  coordinates,
  type: ActionTypesSea.FIRE_TO_COORDINATES,
});

export const resetSea = (): IResetSea => ({
  type: ActionTypesSea.RESET_SEA,
});
