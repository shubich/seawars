import * as React from 'react';
import { ISeaChartProps } from './types';
import { ISeaBlock } from 'types/seaTypes';
import seaReducer from 'reducers/sea/seaReducer';
import { getInitialSeaState } from 'reducers/sea/helpers';
import SeaBlock from './SeaBlock';
import { fireToCoordinates } from 'actions/sea/seaActions';

import './SeaChart.scss';

const SeaChart: React.FC = () => {
  const [state, dispatch] = React.useReducer(seaReducer, getInitialSeaState());

  function renderRow(row: ISeaBlock[], rowIndex: number) {
    const Row = row.map((block, blockIndex) => {
      return (
        <SeaBlock
          key={`${rowIndex}-${blockIndex}`}
          block={block}
          // tslint:disable-next-line:jsx-no-lambda
          fire={() => dispatch(fireToCoordinates(rowIndex, blockIndex))}
        />
      );
    });

    return <div className="SeaChart-Row">{Row}</div>;
  }

  const Sea = state.mySea.map(renderRow);
  return <div className="SeaChart">{Sea}</div>;
};

export default SeaChart;
