import * as React from 'react';
import SeaChart from 'components/SeaChart';
import Game from 'pages/Game';
import { ICoordinates } from 'types/seaTypes';
import { ISeaActions } from 'actions/sea/types';
import { ISeaState } from 'reducers/sea/types';
import { playerFireToCoordinates } from 'actions/sea/seaActions';
import AIShot from 'utils/AI/AIShot';
import { getPlayerName } from 'utils/settings/playerName';

const { useRef, useCallback } = React;

const PlayerVsAI: React.FC = () => {
  const playerName = useRef(getPlayerName());

  const renderSea = useCallback(
    (state: ISeaState, dispatch: React.Dispatch<ISeaActions>) => {
      const playerMove = (coordinates: ICoordinates) => {
        if (!state.isPlayerTurn) return;
        if (state.playerKills >= 10) return;
        dispatch(playerFireToCoordinates(coordinates));
      };

      return (
        <React.Fragment>
          <div className="flex flex-col items-center gap-2 w-full max-w-[400px]">
            <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
              Your fleet
            </span>
            <SeaChart sea={state.playerSea} isActive={!state.isPlayerTurn} />
          </div>
          <div className="flex flex-col items-center gap-2 w-full max-w-[400px]">
            <span className="text-brass text-sm font-medium uppercase tracking-wider">
              Enemy waters
            </span>
            <SeaChart
              isEnemy={true}
              sea={state.enemySea}
              fire={playerMove}
              isActive={state.isPlayerTurn}
            />
          </div>
        </React.Fragment>
      );
    },
    [],
  );

  return (
    <Game
      playerName={playerName.current}
      enemyName="PC"
      renderSea={renderSea}
      enemyMove={AIShot}
    />
  );
};

export default PlayerVsAI;
