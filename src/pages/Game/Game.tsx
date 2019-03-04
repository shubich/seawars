import * as React from 'react';
import SeaChart from 'components/SeaChart';
// import PlacementShips from 'components/PlacementShips';

const Game = () => {
  return (
    <div className="Game">
      <SeaChart />
      {/* <PlacementShips shipsToPlace={[1, 1, 1, 1, 2, 2, 2, 3, 3, 4].reverse()} /> */}
    </div>
  );
};

export default Game;
