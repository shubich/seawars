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
  const isInteractive = isEnemy && !block.hasFire;
  const seaBlockClassname = useMemo(() => {
    const { hasFire, hasShip } = block;
    return classNames('SeaBlock', className, {
      SeaBlock_missFire: !hasShip && hasFire,
      'SeaBlock-Ship': !isEnemy && hasShip,
      'SeaBlock-Ship_killed': hasShip && hasFire,
      SeaBlock_clickable: isInteractive,
    });
  }, [className, block, isEnemy, isInteractive]);

  const handleFire = useCallback(() => {
    if (isInteractive) fire();
  }, [isInteractive, fire]);

  return (
    <button
      type="button"
      className={seaBlockClassname}
      onClick={handleFire}
      disabled={!isInteractive}
      aria-label={isEnemy ? 'Enemy sea block' : 'Your sea block'}
    />
  );
};

export default SeaBlock;
