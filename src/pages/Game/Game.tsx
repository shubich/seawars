import * as React from 'react';
import SeaChart from 'components/SeaChart';
import seaReducer from 'reducers/sea/seaReducer';
import { getInitialSeaState } from 'reducers/sea/helpers';
import { fireToCoordinates, AIFireToCoordinates } from 'actions/sea/seaActions';
import AIShot from 'utils/AI/AIShot';

import './Game.scss';

const Game: React.FC = () => {
  const [state, dispatch] = React.useReducer(seaReducer, getInitialSeaState());

  // const aiMove = React.useCallback(() => {
  //   dispatch(
  //     AIFireToCoordinates(AIShot(state.playerSea, state.playerShipInProgress)),
  //   );
  // }, [state]);

  // React.useEffect(() => {
  //   const intervalId = setInterval(aiMove, 500);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [state]);

  return (
    <div className="Game">
      <div className="Game-Manage">
        <button
          // tslint:disable-next-line: jsx-no-multiline-js
          onClick={() => {
            dispatch(
              AIFireToCoordinates(
                AIShot(state.playerSea, state.playerShipInProgress),
              ),
            );
          }}
        >
          AI attack
        </button>
      </div>
      <div className="Game-Sea">
        <SeaChart sea={state.playerSea} />
        <SeaChart
          isEnemy={true}
          sea={state.enemySea}
          fire={coordinates => dispatch(fireToCoordinates(coordinates))}
        />
      </div>
    </div>
  );
};

export default Game;
