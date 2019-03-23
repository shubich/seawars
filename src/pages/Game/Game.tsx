import * as React from 'react';
import seaReducer from 'reducers/sea/seaReducer';
import { getInitialSeaState } from 'reducers/sea/helpers';
import {
  fireToCoordinates,
  AIFireToCoordinates,
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
  onExit: () => void;
  renderSea: (
    state: ISeaState,
    dispatch: React.Dispatch<ISeaActions>,
  ) => JSX.Element;
}> = ({ playerName, enemyName, playerMove, enemyMove, onExit, renderSea }) => {
  const [state, dispatch] = useReducer(seaReducer, getInitialSeaState());
  const [winner, setWinner] = useState<string | null>(null);
  const [speed, setSpeed] = useState(500); // ms

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
        AIFireToCoordinates(
          enemyMove(state.playerSea, state.playerShipInProgress),
        ),
      );
    }, speed);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [winner, state, speed]);

  // Auto player move
  useEffect(() => {
    if (!playerMove) return;

    if (winner) return;
    if (!state.isPlayerTurn) return;

    const timeoutID = setTimeout(() => {
      dispatch(
        fireToCoordinates(
          playerMove(state.enemySea, state.enemyShipInProgress),
        ),
      );
    }, speed);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [winner, state, speed]);

  const gameStatus = useMemo(() => {
    if (winner) {
      return `${winner} won!`;
    }

    if (speed < 100) {
      return '...';
    }

    return `${state.isPlayerTurn ? playerName : enemyName} turn`;
  }, [winner, state, speed]);

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
          <div>AI Speed: {speed} (ms)</div>
          <input
            className="Game-SpeedRange"
            type="range"
            min="0"
            max="1000"
            value={speed}
            onChange={onSpeedChange}
          />
        </label>
        <h1 className="Game-Status">{gameStatus}</h1>
        <button onClick={() => onExit()}>Exit</button>
      </div>
      <div className="Game-Sea">{renderSea(state, dispatch)}</div>
    </div>
  );
};

export default Game;
