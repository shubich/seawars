import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import SeaBlock from './SeaBlock.tsx';
import { Button } from '@storybook/react/demo';


const friendlyBlock = {
  isEnemy: false,
  fire: null,
};

const enemyBlock = {
  ...friendlyBlock,
  isEnemy: true,
};

const emptyBlock = {
  hasFire: false, hasShip: false,
};

const missedBlock = {
  hasFire: true, hasShip: false,
};

const shipBlock = {
  hasFire: false, hasShip: true,
};

const killedBlock = {
  hasFire: true, hasShip: true,
};

storiesOf('SeaBlock', module)
  .add('friendly empty block', () => (
    <SeaBlock
      block={emptyBlock}
      {...friendlyBlock}
    />
  ))
  .add('friendly missed block', () => (
    <SeaBlock
      block={missedBlock}
      {...friendlyBlock}
    />
  ))
  .add('friendly ship block', () => (
    <SeaBlock
      block={shipBlock}
      {...friendlyBlock}
    />
  ))
  .add('friendly killed block', () => (
    <SeaBlock
      block={killedBlock}
      {...friendlyBlock}
    />
  ))

  .add('enemy empty block', () => (
    <SeaBlock
      block={emptyBlock}
      {...enemyBlock}
    />
  ))
  .add('enemy missed block', () => (
    <SeaBlock
      block={missedBlock}
      {...enemyBlock}
    />
  ))
  .add('enemy ship block', () => (
    <SeaBlock
      block={shipBlock}
      {...enemyBlock}
    />
  ))
  .add('enemy killed block', () => (
    <SeaBlock
      block={killedBlock}
      {...enemyBlock}
    />
  ))

