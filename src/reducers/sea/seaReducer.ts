import { ActionTypesSea, ISeaActions } from 'actions/sea/types';
import { getInitialSeaState, getStateAfterShot } from './helpers';
import { ISeaState } from './types';
import playSoundOnShot from 'utils/playSoundOnShot';
import { getSound, SoundValues } from 'utils/settings/sound';

const initialState = getInitialSeaState();

export default function seaReducer(
  state = initialState,
  action: ISeaActions,
): ISeaState {
  switch (action.type) {
    case ActionTypesSea.PLACE_SHIP:
      return state;
    case ActionTypesSea.PLAYER_FIRE_TO_COORDINATES: {
      const { sea, shipInProgress, wounded, killedShip } = getStateAfterShot(
        state.enemySea,
        action.coordinates,
        state.enemyShipInProgress,
      );

      const playerKills = killedShip
        ? state.playerKills + 1
        : state.playerKills;

      if (getSound() === SoundValues.ON) {
        playSoundOnShot(wounded, Boolean(killedShip), playerKills === 10);
      }

      return {
        ...state,
        playerKills,
        enemySea: sea,
        enemyShipInProgress: shipInProgress,
        isPlayerTurn: wounded,
      };
    }
    case ActionTypesSea.ENEMY_FIRE_TO_COORDINATES: {
      const { sea, shipInProgress, wounded, killedShip } = getStateAfterShot(
        state.playerSea,
        action.coordinates,
        state.playerShipInProgress,
      );

      const enemyKills = killedShip ? state.enemyKills + 1 : state.enemyKills;

      if (getSound() === SoundValues.ON) {
        playSoundOnShot(wounded, Boolean(killedShip), false, enemyKills === 10);
      }

      return {
        ...state,
        enemyKills,
        playerSea: sea,
        playerShipInProgress: shipInProgress,
        isPlayerTurn: !wounded,
      };
    }
    case ActionTypesSea.RESET_SEA:
      return getInitialSeaState();
    default:
      return state;
  }
}
