import * as React from 'react';
import * as classNames from 'classnames';
import { ISeaBlock } from 'types/seaTypes';

import './SeaBlock.scss';

const { useMemo } = React;

const SeaBlock: React.FC<{
  block: ISeaBlock;
  isEnemy: boolean;
  className?: string;
  fire: () => void;
}> = ({ block, fire, className, isEnemy }) => {
  const seaBlockClassname = useMemo(
    () =>
      classNames('SeaBlock', className, {
        'SeaBlock-Ship': block.hasShip,
        'SeaBlock-Ship_enemy': isEnemy,
        'SeaBlock-Fire': block.hasFire,
      }),
    [className, block, isEnemy],
  );

  return <div className={seaBlockClassname} onClick={() => fire()} />;
};

export default SeaBlock;
