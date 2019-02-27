import { ISeaState } from './types';
import { ISeaBlock } from 'types/seaTypes';

const getDefaultSea = () => {
  const sea: ISeaBlock[][] = [];
  const defaultSeaBlock: ISeaBlock = {
    hasFire: false,
    hasShip: false,
  };

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (j === 0) {
        sea[i] = [];
      }

      sea[i][j] = { ...defaultSeaBlock };
    }
  }

  return sea;
};

const getDefaultShipsToPlace = () => [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

export const getInitialState = (): ISeaState => {
  return {
    mySea: getDefaultSea(),
    enemySea: getDefaultSea(),
    myShipsToPlace: getDefaultShipsToPlace(),
    enemyShipsToPlace: getDefaultShipsToPlace(),
  };
};
