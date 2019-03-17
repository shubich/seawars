import { ActionTypesSea, ISeaActions } from 'actions/sea/types';
import { getInitialSeaState, getStateAfterShot } from './helpers';
import { ISeaState } from './types';

const initialState = getInitialSeaState();

export default function seaReducer(
  state = initialState,
  action: ISeaActions,
): ISeaState {
  switch (action.type) {
    case ActionTypesSea.PLACE_SHIP:
      return state;
    case ActionTypesSea.FIRE_TO_COORDINATES: {
      const { sea, shipInProgress } = getStateAfterShot(
        state.enemySea,
        action.coordinates,
        null,
      );

      return {
        ...state,
        enemySea: sea,
        enemyShipInProgress: shipInProgress,
      };
    }
    case ActionTypesSea.AI_FIRE_TO_COORDINATES: {
      const { sea, shipInProgress } = getStateAfterShot(
        state.playerSea,
        action.coordinates,
        state.playerShipInProgress,
      );

      return {
        ...state,
        playerSea: sea,
        playerShipInProgress: shipInProgress,
      };
    }
    case ActionTypesSea.RESET_SEA:
      return getInitialSeaState();
    default:
      return state;
  }
}
