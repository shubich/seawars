import * as React from 'react';
import SeaChart from 'components/SeaChart';
import seaReducer from 'reducers/sea/seaReducer';
import { getInitialSeaState } from 'reducers/sea/helpers';
import { fireToCoordinates, AIFireToCoordinates } from 'actions/sea/seaActions';
import AIShot from 'utils/AI/AIShot';
import { ICoordinates } from 'types/seaTypes';

import './Game.scss';

const { useState, useEffect, useReducer, useCallback, useMemo } = React;

const Game: React.FC = () => {
  const [state, dispatch] = useReducer(seaReducer, getInitialSeaState());
  const [winner, setWinner] = useState<string | null>(null);

  useEffect(() => {
    if (state.playerKills === 10) {
      setWinner('Player');
    } else if (state.enemyKills === 10) {
      setWinner('AI');
    }
  }, [state]);

  const aiMove = useCallback(() => {
    dispatch(
      AIFireToCoordinates(AIShot(state.playerSea, state.playerShipInProgress)),
    );
  }, [state]);

  useEffect(() => {
    if (winner) return;
    if (state.isPlayerTurn) return;

    setTimeout(aiMove, 1000);
  }, [winner, state]);

  const playerMove = useCallback(
    (coordinates: ICoordinates) => {
      if (winner) return;
      if (!state.isPlayerTurn) return;

      dispatch(fireToCoordinates(coordinates));
    },
    [winner, state],
  );

  const renderManagePanel = useMemo(() => {
    if (winner) {
      return <h1>{winner} won</h1>;
    }

    return <h1>{state.isPlayerTurn ? 'Player' : 'AI'} turn</h1>;
  }, [winner, state]);

  return (
    <div className="Game">
      <div className="Game-Manage">{renderManagePanel}</div>
      <div className="Game-Sea">
        <SeaChart sea={state.playerSea} />
        <SeaChart isEnemy={true} sea={state.enemySea} fire={playerMove} />
      </div>
    </div>
  );
};

export default Game;
