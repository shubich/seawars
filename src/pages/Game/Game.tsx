import * as React from 'react';
import SeaChart from 'components/SeaChart';
import seaReducer from 'reducers/sea/seaReducer';
import { getInitialSeaState } from 'reducers/sea/helpers';
import { fireToCoordinates, AIFireToCoordinates } from 'actions/sea/seaActions';
import AIShot from 'utils/AI/AIShot';
import { ICoordinates } from 'types/seaTypes';

import './Game.scss';

const { useEffect, useReducer, useCallback } = React;

const Game: React.FC = () => {
  const [state, dispatch] = useReducer(seaReducer, getInitialSeaState());

  const aiMove = useCallback(() => {
    dispatch(
      AIFireToCoordinates(AIShot(state.playerSea, state.playerShipInProgress)),
    );
  }, [state]);

  useEffect(() => {
    if (!state.isPlayerTurn) {
      setTimeout(aiMove, 1000);
    }
  }, [state]);

  const playerMove = useCallback(
    (coordinates: ICoordinates) => {
      if (state.isPlayerTurn) {
        dispatch(fireToCoordinates(coordinates));
      }
    },
    [state],
  );

  return (
    <div className="Game">
      <div className="Game-Manage">
        <h1>{state.isPlayerTurn ? 'Player' : 'AI'} turn</h1>
      </div>
      <div className="Game-Sea">
        <SeaChart sea={state.playerSea} />
        <SeaChart isEnemy={true} sea={state.enemySea} fire={playerMove} />
      </div>
    </div>
  );
};

export default Game;
