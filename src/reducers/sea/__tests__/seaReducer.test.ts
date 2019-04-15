jest.mock('reducers/sea/getInitialSeaState');
jest.mock('utils/playSoundOnShot', jest.fn());
jest.mock('utils/settings/sound', () => ({
  getSound: jest.fn(),
  SoundValues: jest.requireActual('utils/settings/sound').SoundValues,
}));

import seaReducer from 'reducers/sea/seaReducer';
import { ActionTypesSea } from 'actions/sea/types';
import getInitialSeaState from 'reducers/sea/getInitialSeaState';
import { ISeaBlock, ICoordinates } from 'types/seaTypes';
import { ISeaState } from '../types';

describe('seaReducer', () => {
  // double click for highlight
  const EB: ISeaBlock = { hasFire: false, hasShip: false }; // EB === emptyBlock
  const SB: ISeaBlock = { hasFire: false, hasShip: true }; // SB === shipBlock
  const SK: ISeaBlock = { hasFire: true, hasShip: true }; // SB === shipKilled
  const EK: ISeaBlock = { hasFire: true, hasShip: false }; // EK === emptyKilled

  let initialState: ISeaState;

  beforeEach(() => {
    initialState = getInitialSeaState();
  });

  test('FIRE_TO_COORDINATES kill', () => {
    const fakeSea: ISeaBlock[][] = [
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, SB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
    ];

    const expectedSea = [
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EK, EK, EK, EB, EB, EB, EB, EB, EB],
      [EB, EK, SK, EK, EB, EB, EB, EB, EB, EB],
      [EB, EK, EK, EK, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
    ];

    const coordinates: ICoordinates = { x: 2, y: 2 };

    initialState.enemySea = fakeSea;
    initialState.playerSea = fakeSea;

    const expectedStatePlayerFire: ISeaState = {
      ...initialState,
      playerKills: 1,
      enemySea: expectedSea,
      enemyShipInProgress: null,
      isPlayerTurn: true,
    };

    const expectedStateEnemyFire: ISeaState = {
      ...initialState,
      enemyKills: 1,
      playerSea: expectedSea,
      playerShipInProgress: null,
      isPlayerTurn: false,
    };

    expect(
      seaReducer(initialState, {
        coordinates,
        type: ActionTypesSea.PLAYER_FIRE_TO_COORDINATES,
      }),
    ).toEqual(expectedStatePlayerFire);

    expect(
      seaReducer(initialState, {
        coordinates,
        type: ActionTypesSea.ENEMY_FIRE_TO_COORDINATES,
      }),
    ).toEqual(expectedStateEnemyFire);
  });

  test('FIRE_TO_COORDINATES wounded', () => {
    const fakeSea: ISeaBlock[][] = [
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, SB, SB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
    ];

    const expectedSea = [
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, SK, SB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
    ];

    const coordinates: ICoordinates = { x: 2, y: 2 };

    initialState.enemySea = fakeSea;
    initialState.playerSea = fakeSea;

    const expectedStatePlayerFire: ISeaState = {
      ...initialState,
      playerKills: 0,
      enemySea: expectedSea,
      enemyShipInProgress: coordinates,
      isPlayerTurn: true,
    };

    const expectedStateEnemyFire: ISeaState = {
      ...initialState,
      enemyKills: 0,
      playerSea: expectedSea,
      playerShipInProgress: coordinates,
      isPlayerTurn: false,
    };

    expect(
      seaReducer(initialState, {
        coordinates,
        type: ActionTypesSea.PLAYER_FIRE_TO_COORDINATES,
      }),
    ).toEqual(expectedStatePlayerFire);

    expect(
      seaReducer(initialState, {
        coordinates,
        type: ActionTypesSea.ENEMY_FIRE_TO_COORDINATES,
      }),
    ).toEqual(expectedStateEnemyFire);
  });

  test('FIRE_TO_COORDINATES missed', () => {
    const fakeSea: ISeaBlock[][] = [
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, SB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
    ];

    const expectedSea = [
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, SB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EK, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
      [EB, EB, EB, EB, EB, EB, EB, EB, EB, EB],
    ];

    const coordinates: ICoordinates = { x: 3, y: 3 };

    initialState.enemySea = fakeSea;
    initialState.playerSea = fakeSea;

    const expectedStatePlayerFire: ISeaState = {
      ...initialState,
      playerKills: 0,
      enemySea: expectedSea,
      enemyShipInProgress: null,
      isPlayerTurn: false,
    };

    const expectedStateEnemyFire: ISeaState = {
      ...initialState,
      enemyKills: 0,
      playerSea: expectedSea,
      playerShipInProgress: null,
      isPlayerTurn: true,
    };

    expect(
      seaReducer(initialState, {
        coordinates,
        type: ActionTypesSea.PLAYER_FIRE_TO_COORDINATES,
      }),
    ).toEqual(expectedStatePlayerFire);

    expect(
      seaReducer(initialState, {
        coordinates,
        type: ActionTypesSea.ENEMY_FIRE_TO_COORDINATES,
      }),
    ).toEqual(expectedStateEnemyFire);
  });

  test('RESET_SEA', () => {
    expect(
      seaReducer(undefined, {
        type: ActionTypesSea.RESET_SEA,
      }),
    ).toEqual(getInitialSeaState());
  });

  test('Non-ActionTypesSea', () => {
    expect(
      seaReducer(initialState, {
        type: '' as any,
      }),
    ).toEqual(initialState);
  });
});
