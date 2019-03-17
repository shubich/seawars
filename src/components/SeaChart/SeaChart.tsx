import * as React from 'react';
import { ISeaBlock, ICoordinates } from 'types/seaTypes';
import SeaBlock from './SeaBlock';

import './SeaChart.scss';

const SeaChart: React.FC<{
  isEnemy?: boolean;
  sea: ISeaBlock[][];
  fire?: (coordinates: ICoordinates) => void;
}> = ({ sea, fire, isEnemy = false }) => {
  const renderRow = (row: ISeaBlock[], rowIndex: number) => {
    const Row = row.map((block, blockIndex) => {
      const handleFire = () => {
        if (fire) {
          const coordinates = { x: blockIndex, y: rowIndex };
          fire(coordinates);
        }
      };

      return (
        <SeaBlock
          key={`${rowIndex}-${blockIndex}`}
          block={block}
          isEnemy={isEnemy}
          fire={handleFire}
        />
      );
    });

    return (
      <div key={rowIndex} className="SeaChart-Row">
        {Row}
      </div>
    );
  };

  const Sea = sea.map(renderRow);
  return <div className="SeaChart">{Sea}</div>;
};

export default SeaChart;
