import * as React from 'react';
import SeaChart from 'components/SeaChart';
import Game from 'pages/Game';
import { ISeaState } from 'reducers/sea/types';
import AIShot from 'utils/AI/AIShot';
import { History } from 'history';

const { useCallback } = React;

const AIVsAI: React.FC<{ history: History }> = ({ history }) => {
  const renderSea = useCallback((state: ISeaState) => {
    return (
      <React.Fragment>
        <SeaChart sea={state.playerSea} />
        <SeaChart sea={state.enemySea} />
      </React.Fragment>
    );
  }, []);

  const handleExit = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Game
      playerName="PC 1"
      enemyName="PC 2"
      renderSea={renderSea}
      playerMove={AIShot}
      enemyMove={AIShot}
      onExit={handleExit}
    />
  );
};

export default AIVsAI;
