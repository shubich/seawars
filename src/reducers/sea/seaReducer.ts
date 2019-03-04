import { ActionTypesSea, ISeaActions } from 'actions/sea/types';
import { getInitialSeaState } from './helpers';
import deepCopyOfObject from 'utils/deepCopyOfObject';

const initialState = getInitialSeaState();

export default function seaReducer(state = initialState, action: ISeaActions) {
  switch (action.type) {
    case ActionTypesSea.PLACE_SHIP:
      return state;
    case ActionTypesSea.FIRE_TO_COORDINATES: {
      // @TODO: Highlight
      const sea = deepCopyOfObject(state.mySea);
      sea[action.x][action.y].hasFire = true;

      return {
        ...state,
        mySea: sea,
      };
    }
    case ActionTypesSea.RESET_SEA:
      return getInitialSeaState();
    default:
      return state;
  }
}
