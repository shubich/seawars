import * as React from 'react';
import * as classNames from 'classnames';
import { ISeaBlock, ICoordinates } from 'types/seaTypes';
import SeaBlock from './SeaBlock';

import './SeaChart.scss';

const { useMemo } = React;

const SeaChart: React.FC<{
  isEnemy?: boolean;
  sea: ISeaBlock[][];
  className?: string;
  isActive: boolean;
  fire?: (coordinates: ICoordinates) => void;
}> = ({ sea, fire, className, isActive, isEnemy = false }) => {
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

  const seaClassname = useMemo(() => {
    return classNames('SeaChart', className, {
      SeaChart_inactive: !isActive,
    });
  }, [className, isActive]);

  return <div className={seaClassname}>{Sea}</div>;
};

export default SeaChart;
