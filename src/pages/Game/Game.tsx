import * as React from 'react';
import { Link } from 'react-router-dom';
import seaReducer from 'reducers/sea/seaReducer';
import { getInitialSeaState } from 'reducers/sea/helpers';
import {
  playerFireToCoordinates,
  enemyFireToCoordinates,
  resetSea,
} from 'actions/sea/seaActions';
import { AutoShot } from 'types/seaTypes';
import { ISeaActions } from 'actions/sea/types';
import { ISeaState } from 'reducers/sea/types';

import './Game.scss';

const { useState, useEffect, useReducer, useCallback, useMemo } = React;

const Game: React.FC<{
  playerName: string;
  enemyName: string;
  playerMove?: AutoShot;
  enemyMove?: AutoShot;
  renderSea: (
    state: ISeaState,
    dispatch: React.Dispatch<ISeaActions>,
  ) => JSX.Element;
}> = ({ playerName, enemyName, playerMove, enemyMove, renderSea }) => {
  const [state, dispatch] = useReducer(seaReducer, getInitialSeaState());
  const [winner, setWinner] = useState<string | null>(null);
  const [AIDelay, setAIDelay] = useState(500); // ms

  useEffect(() => {
    if (state.playerKills === 10) {
      setWinner(playerName);
    } else if (state.enemyKills === 10) {
      setWinner(enemyName);
    }
  }, [state]);

  // Auto enemy move
  useEffect(() => {
    if (!enemyMove) return;
    if (winner) return;
    if (state.isPlayerTurn) return;

    const timeoutID = setTimeout(() => {
      dispatch(
        enemyFireToCoordinates(
          enemyMove(state.playerSea, state.playerShipInProgress),
        ),
      );
    }, AIDelay);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [winner, state, AIDelay]);

  // Auto player move
  useEffect(() => {
    if (!playerMove) return;

    if (winner) return;
    if (!state.isPlayerTurn) return;

    const timeoutID = setTimeout(() => {
      dispatch(
        playerFireToCoordinates(
          playerMove(state.enemySea, state.enemyShipInProgress),
        ),
      );
    }, AIDelay);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [winner, state, AIDelay]);

  const gameStatus = useMemo(() => {
    if (winner) {
      return `${winner} won!`;
    }

    if (AIDelay < 100) {
      return '...';
    }

    return `${state.isPlayerTurn ? playerName : enemyName} turn`;
  }, [winner, state, AIDelay]);

  const startNewGame = useCallback(() => {
    dispatch(resetSea());
    setWinner(null);
  }, []);

  const onSpeedChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAIDelay(Number(e.target.value));
    },
    [setAIDelay],
  );

  return (
    <div className="Game">
      <div className="Game-Control">
        <button onClick={() => startNewGame()}>New game</button>
        <label className="Game-Speed">
          <div>AI delay: {AIDelay} (ms)</div>
          <input
            className="Game-SpeedRange"
            type="range"
            min="0"
            max="1000"
            value={AIDelay}
            onChange={onSpeedChange}
          />
        </label>
        <h1 className="Game-Status">{gameStatus}</h1>
        <Link to="/">
          <button>Exit</button>
        </Link>
      </div>
      <div className="Game-Sea">{renderSea(state, dispatch)}</div>
    </div>
  );
};

export default Game;
