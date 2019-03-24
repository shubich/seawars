import { ICoordinates } from 'types/seaTypes';
import {
  ActionTypesSea,
  IPlaceShip,
  IPlayerFireToCoordinates,
  IEnemyFireToCoordinates,
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

export const playerFireToCoordinates = (
  coordinates: ICoordinates,
): IPlayerFireToCoordinates => ({
  coordinates,
  type: ActionTypesSea.PLAYER_FIRE_TO_COORDINATES,
});

export const enemyFireToCoordinates = (
  coordinates: ICoordinates,
): IEnemyFireToCoordinates => ({
  coordinates,
  type: ActionTypesSea.ENEMY_FIRE_TO_COORDINATES,
});

export const resetSea = (): IResetSea => ({
  type: ActionTypesSea.RESET_SEA,
});
