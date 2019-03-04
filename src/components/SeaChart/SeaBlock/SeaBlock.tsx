import * as React from 'react';
import { ISeaBlock } from 'types/seaTypes';
import * as classNames from 'classnames';

import './SeaBlock.scss';

const SeaBlock: React.FC<{ block: ISeaBlock; fire: () => void }> = ({
  block,
  fire,
}) => {
  const seaBlockClassname = classNames('SeaBlock', {
    'SeaBlock-Ship': block.hasShip,
    'SeaBlock-Fire': block.hasFire,
  });

  return <div className={seaBlockClassname} onClick={fire} />;
};

export default SeaBlock;
