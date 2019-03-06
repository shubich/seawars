import * as React from 'react';
import SeaChart from 'components/SeaChart';
import seaReducer from 'reducers/sea/seaReducer';
import { getInitialSeaState } from 'reducers/sea/helpers';
import { fireToCoordinates } from 'actions/sea/seaActions';

import './Game.scss';

const Game: React.FC = () => {
  const [state, dispatch] = React.useReducer(seaReducer, getInitialSeaState());

  return (
    <div className="Game">
      <SeaChart sea={state.mySea} />
      <SeaChart
        isEnemy={true}
        sea={state.enemySea}
        fire={coordinates => dispatch(fireToCoordinates(coordinates))}
      />
    </div>
  );
};

export default Game;
