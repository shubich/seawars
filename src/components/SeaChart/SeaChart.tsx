import * as React from 'react';
import { ISeaChartProps, ISeaBlock } from './types';

import './SeaChart.scss';

function getInitialState() {
  const initialState: ISeaBlock[][] = [];
  const defaultSeaBlock: ISeaBlock = {
    hasFire: false,
    hasShip: false,
  };

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (j === 0) {
        initialState[i] = [];
      }

      initialState[i][j] = { ...defaultSeaBlock };
    }
  }

  return initialState;
}

function renderBlock(block: ISeaBlock) {
  return <div className="Block" />;
}

function renderRow(row: ISeaBlock[]) {
  const Row = row.map(renderBlock);
  return <div className="Row">{Row}</div>;
}

const SeaChart = ({ seaChart = getInitialState() }: ISeaChartProps) => {
  const Sea = seaChart.map(renderRow);
  return <div className="SeaChart">{Sea}</div>;
};

export default SeaChart;
