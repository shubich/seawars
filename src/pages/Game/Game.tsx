import * as React from 'react';
import SeaChart from 'components/SeaChart';
import seaReducer from 'reducers/sea/seaReducer';
import { getInitialSeaState } from 'reducers/sea/helpers';
import { fireToCoordinates, AIFireToCoordinates } from 'actions/sea/seaActions';
import { AIShot } from 'utils/AI';

import './Game.scss';

const Game: React.FC = () => {
  const [state, dispatch] = React.useReducer(seaReducer, getInitialSeaState());

  return (
    <div className="Game">
      <div className="Game-Manage">
        <button
          // tslint:disable-next-line: jsx-no-multiline-js
          onClick={() => {
            dispatch(
              AIFireToCoordinates(AIShot(state.mySea, state.AIShipInProgress)),
            );
          }}
        >
          AI attack
        </button>
      </div>
      <div className="Game-Sea">
        <SeaChart sea={state.mySea} />
        <SeaChart
          isEnemy={true}
          sea={state.enemySea}
          fire={coordinates => dispatch(fireToCoordinates(coordinates))}
        />
      </div>
    </div>
  );
};

export default Game;
