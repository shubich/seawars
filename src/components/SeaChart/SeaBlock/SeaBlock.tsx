import * as React from 'react';
import * as classNames from 'classnames';
import { ISeaBlock } from 'types/seaTypes';

import './SeaBlock.scss';

const { useMemo, useCallback } = React;

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

  const handleFire = useCallback(() => {
    if (!block.hasFire) fire();
  }, [block, fire]);

  return <div className={seaBlockClassname} onClick={handleFire} />;
};

export default SeaBlock;
