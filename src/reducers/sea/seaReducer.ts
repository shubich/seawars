import { ActionTypesSea, ISeaActions } from 'actions/sea/types';
import { getInitialState } from './helpers';

const initialState = getInitialState();

export default function seaReducer(state = initialState, action: ISeaActions) {
  switch (action.type) {
    case ActionTypesSea.PLACE_SHIP:
      return state;
    case ActionTypesSea.FIRE_TO_COORDINATES:
      return state;
    case ActionTypesSea.RESET_SEA:
      return getInitialState();
    default:
      return state;
  }
}
