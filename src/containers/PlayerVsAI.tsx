import * as React from 'react';
import SeaChart from 'components/SeaChart';
import Game from 'pages/Game';
import { ICoordinates } from 'types/seaTypes';
import { ISeaActions } from 'actions/sea/types';
import { ISeaState } from 'reducers/sea/types';
import { fireToCoordinates } from 'actions/sea/seaActions';
import AIShot from 'utils/AI/AIShot';

const { useCallback } = React;

const PlayerVsAI: React.FC = () => {
  const renderSea = useCallback(
    (state: ISeaState, dispatch: React.Dispatch<ISeaActions>) => {
      const playerMove = (coordinates: ICoordinates) => {
        if (!state.isPlayerTurn) return;
        if (state.playerKills >= 10) return;
        dispatch(fireToCoordinates(coordinates));
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

  return (
    <Game
      playerName="Andrei"
      enemyName="PC"
      renderSea={renderSea}
      enemyMove={AIShot}
    />
  );
};

export default PlayerVsAI;
