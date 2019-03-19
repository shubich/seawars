import * as React from 'react';
import SeaChart from 'components/SeaChart';
import seaReducer from 'reducers/sea/seaReducer';
import { getInitialSeaState } from 'reducers/sea/helpers';
import {
  fireToCoordinates,
  AIFireToCoordinates,
  resetSea,
} from 'actions/sea/seaActions';
import AIShot from 'utils/AI/AIShot';
import { ICoordinates } from 'types/seaTypes';

import './Game.scss';

const { useState, useEffect, useReducer, useCallback, useMemo } = React;

const Game: React.FC = () => {
  const [state, dispatch] = useReducer(seaReducer, getInitialSeaState());
  const [winner, setWinner] = useState<string | null>(null);
  const [speed, setSpeed] = useState(500); // ms

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

    const timeoutID = setTimeout(aiMove, speed);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [winner, state, speed]);

  // AI play player role
  useEffect(() => {
    if (winner) return;
    if (!state.isPlayerTurn) return;

    const timeoutID = setTimeout(() => {
      dispatch(
        fireToCoordinates(AIShot(state.enemySea, state.enemyShipInProgress)),
      );
    }, speed);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [winner, state, speed]);

  const playerMove = useCallback(
    (coordinates: ICoordinates) => {
      if (winner) return;
      if (!state.isPlayerTurn) return;

      dispatch(fireToCoordinates(coordinates));
    },
    [winner, state],
  );

  const gameStatus = useMemo(() => {
    if (winner) {
      return `${winner} won!`;
    }

    return `${state.isPlayerTurn ? 'Player' : 'AI'} turn`;
  }, [winner, state]);

  const startNewGame = useCallback(() => {
    dispatch(resetSea());
    setWinner(null);
  }, []);

  const onSpeedChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSpeed(Number(e.target.value));
    },
    [setSpeed],
  );

  return (
    <div className="Game">
      <div className="Game-Control">
        <button onClick={() => startNewGame()}>New game</button>
        <label className="Game-Speed">
          <div>Speed: {speed} (ms)</div>
          <input
            type="range"
            min="0"
            max="1000"
            value={speed}
            onChange={onSpeedChange}
          />
        </label>
        <h1 className="Game-Status">{gameStatus}</h1>
      </div>
      <div className="Game-Sea">
        <SeaChart sea={state.playerSea} />
        <SeaChart isEnemy={true} sea={state.enemySea} fire={playerMove} />
      </div>
    </div>
  );
};

export default Game;
