import { ICoordinates } from 'types/seaTypes';
import {
  ActionTypesSea,
  IPlayerFireToCoordinates,
  IEnemyFireToCoordinates,
  IResetSea,
} from './types';

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
