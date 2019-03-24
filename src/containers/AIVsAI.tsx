import * as React from 'react';
import SeaChart from 'components/SeaChart';
import Game from 'pages/Game';
import { ISeaState } from 'reducers/sea/types';
import AIShot from 'utils/AI/AIShot';

const { useCallback } = React;

const AIVsAI: React.FC = () => {
  const renderSea = useCallback((state: ISeaState) => {
    return (
      <React.Fragment>
        <SeaChart sea={state.playerSea} isActive={!state.isPlayerTurn} />
        <SeaChart sea={state.enemySea} isActive={state.isPlayerTurn} />
      </React.Fragment>
    );
  }, []);

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
