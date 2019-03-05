import { ActionTypesSea, ISeaActions } from 'actions/sea/types';
import { getInitialSeaState } from './helpers';
import updateSeaAfterShot from 'utils/updateSeaAfterShot';

const initialState = getInitialSeaState();

export default function seaReducer(state = initialState, action: ISeaActions) {
  switch (action.type) {
    case ActionTypesSea.PLACE_SHIP:
      return state;
    case ActionTypesSea.FIRE_TO_COORDINATES:
      return {
        ...state,
        mySea: updateSeaAfterShot(state.mySea, action.coordinates),
      };
    case ActionTypesSea.RESET_SEA:
      return getInitialSeaState();
    default:
      return state;
  }
}
