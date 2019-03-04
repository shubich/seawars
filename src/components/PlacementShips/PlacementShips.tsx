import * as React from 'react';
import { IProps } from './types';

import './PlacementShips.scss';

const PlacementShips = (props: IProps) => {
  const renderShip = (shipSize: number) => {
    const shipBlocks: JSX.Element[] = [];

    let remainingBlocks = shipSize;

    while (remainingBlocks) {
      shipBlocks.push(<div className="PlacementShips-ShipBlock" />);
      remainingBlocks -= 1;
    }

    return <div className="PlacementShips-Ship">{shipBlocks}</div>;
  };

  const renderShips = (shipsToPlace: number[]) => {
    const ships = shipsToPlace.map(renderShip);

    return <div className="PlacementShips-Ships">{ships}</div>;
  };

  return (
    <div className="PlacementShips">
      <span>PlacementShips</span>
      {renderShips(props.shipsToPlace)}
    </div>
  );
};

export default PlacementShips;
