import * as React from 'react';
import { Link } from 'react-router-dom';
import seaReducer from 'reducers/sea/seaReducer';
import getInitialSeaState from 'reducers/sea/getInitialSeaState';
import {
  playerFireToCoordinates,
  enemyFireToCoordinates,
  resetSea,
} from 'actions/sea/seaActions';
import { AutoShot } from 'types/seaTypes';
import { ISeaActions } from 'actions/sea/types';
import { ISeaState } from 'reducers/sea/types';
import { getAIDelay } from 'utils/settings/AIDelay';

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
  const [AIDelay, setAIDelay] = useState(getAIDelay());

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
    }, Number(AIDelay));

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
    }, Number(AIDelay));

    return () => {
      clearTimeout(timeoutID);
    };
  }, [winner, state, AIDelay]);

  const gameStatus = useMemo(() => {
    if (winner) {
      return `${winner} won!`;
    }

    if (Number(AIDelay) < 100) {
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
      setAIDelay(e.target.value);
    },
    [setAIDelay],
  );

  return (
    <div className="min-h-screen w-full max-w-full bg-navy-gradient bg-navy-950 px-4 py-6 md:px-6 md:py-8 overflow-x-hidden">
      {/* Control bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-12">
        <div className="flex items-center gap-3">
          <button
            onClick={() => startNewGame()}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-medium
              hover:bg-white/15 hover:border-brass/50 transition-all duration-200"
          >
            New game
          </button>
          <Link to="/">
            <button
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 font-medium
                hover:bg-white/10 hover:text-white transition-all duration-200"
            >
              Exit
            </button>
          </Link>
        </div>

        <h1
          className="flex-1 min-w-0 text-center font-display text-2xl md:text-3xl text-white truncate"
          title={gameStatus}
        >
          {gameStatus}
        </h1>

        <label className="hidden md:flex flex-col gap-1 min-w-[200px]">
          <span className="text-white/70 text-sm">AI delay: {AIDelay}ms</span>
          <input
            type="range"
            min="0"
            max="1000"
            value={AIDelay}
            onChange={onSpeedChange}
            className="w-full h-2 rounded-lg appearance-none bg-white/10"
            style={{ accentColor: '#c9a227' }}
          />
        </label>
      </div>

      {/* Game boards - column when narrow, side-by-side only when enough space (lg+); equal-sized cells */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full max-w-full overflow-x-hidden lg:min-h-[calc(100vh-180px)] place-items-center lg:place-items-end">
        {renderSea(state, dispatch)}
      </div>
    </div>
  );
};

export default Game;
