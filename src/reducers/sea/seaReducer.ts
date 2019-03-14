import { ActionTypesSea, ISeaActions } from 'actions/sea/types';
import { getInitialSeaState, getStateAfterShot } from './helpers';

const initialState = getInitialSeaState();

export default function seaReducer(state = initialState, action: ISeaActions) {
  switch (action.type) {
    case ActionTypesSea.PLACE_SHIP:
      return state;
    case ActionTypesSea.FIRE_TO_COORDINATES: {
      const { sea } = getStateAfterShot(
        state.enemySea,
        action.coordinates,
        null,
      );

      return {
        ...state,
        enemySea: sea,
      };
    }
    case ActionTypesSea.AI_FIRE_TO_COORDINATES: {
      const { sea, shipInProgress } = getStateAfterShot(
        state.mySea,
        action.coordinates,
        state.AIShipInProgress,
      );

      return {
        ...state,
        mySea: sea,
        AIShipInProgress: shipInProgress,
      };
    }
    case ActionTypesSea.RESET_SEA:
      return getInitialSeaState();
    default:
      return state;
  }
}
