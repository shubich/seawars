import * as React from 'react';
import SeaChart from 'components/SeaChart';
import Game from 'pages/Game';
import { ISeaState } from 'reducers/sea/types';
import AIShot from 'utils/AI/AIShot';

const { useCallback } = React;

const AIVsAI: React.FC = () => {
  const renderSea = useCallback(
    (state: ISeaState) => {
      return (
        <React.Fragment>
          <div className="flex flex-col items-center gap-2 w-full max-w-[400px]">
            <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
              PC 1
            </span>
            <SeaChart sea={state.playerSea} isActive={!state.isPlayerTurn} />
          </div>
          <div className="flex flex-col items-center gap-2 w-full max-w-[400px]">
            <span className="text-white/70 text-sm font-medium uppercase tracking-wider">
              PC 2
            </span>
            <SeaChart sea={state.enemySea} isActive={state.isPlayerTurn} />
          </div>
        </React.Fragment>
      );
    },
    [],
  );

  return (
    <Game
      playerName="PC 1"
      enemyName="PC 2"
      renderSea={renderSea}
      playerMove={AIShot}
      enemyMove={AIShot}
    />
  );
};

export default AIVsAI;
