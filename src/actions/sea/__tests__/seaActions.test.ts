import {
  playerFireToCoordinates,
  enemyFireToCoordinates,
  resetSea,
} from 'actions/sea/seaActions';
import { ActionTypesSea } from 'actions/sea/types';
import { ICoordinates } from 'types/seaTypes';

describe('seaActions', () => {
  test('action creator playerFireToCoordinates', () => {
    const coordinates: ICoordinates = {
      x: 1,
      y: 1,
    };

    const expectedAction = {
      coordinates,
      type: ActionTypesSea.PLAYER_FIRE_TO_COORDINATES,
    };

    const result = playerFireToCoordinates({ ...coordinates });

    expect(result).toEqual(expectedAction);
  });

  test('action creator enemyFireToCoordinates', () => {
    const coordinates: ICoordinates = {
      x: 0,
      y: 2,
    };

    const expectedAction = {
      coordinates,
      type: ActionTypesSea.ENEMY_FIRE_TO_COORDINATES,
    };

    const result = enemyFireToCoordinates(coordinates);

    expect(result).toEqual(expectedAction);
  });

  test('action creator resetSea', () => {
    const expectedAction = {
      type: ActionTypesSea.RESET_SEA,
    };

    const result = resetSea();

    expect(result).toEqual(expectedAction);
  });
});
