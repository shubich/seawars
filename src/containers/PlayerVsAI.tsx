import * as React from 'react';
import SeaChart from 'components/SeaChart';
import Game from 'pages/Game';
import { ICoordinates } from 'types/seaTypes';
import { ISeaActions } from 'actions/sea/types';
import { ISeaState } from 'reducers/sea/types';
import { playerFireToCoordinates } from 'actions/sea/seaActions';
import AIShot from 'utils/AI/AIShot';
import { History } from 'history';

const { useCallback } = React;

const PlayerVsAI: React.FC<{ history: History }> = ({ history }) => {
  const renderSea = useCallback(
    (state: ISeaState, dispatch: React.Dispatch<ISeaActions>) => {
      const playerMove = (coordinates: ICoordinates) => {
        if (!state.isPlayerTurn) return;
        if (state.playerKills >= 10) return;
        dispatch(playerFireToCoordinates(coordinates));
      };

      return (
        <React.Fragment>
          <SeaChart sea={state.playerSea} />
          <SeaChart isEnemy={true} sea={state.enemySea} fire={playerMove} />
        </React.Fragment>
      );
    },
    [],
  );

  const handleExit = useCallback(() => {
    history.push('/');
  }, [history]);

  return (
    <Game
      playerName="Andrei"
      enemyName="PC"
      renderSea={renderSea}
      enemyMove={AIShot}
      onExit={handleExit}
    />
  );
};

export default PlayerVsAI;
