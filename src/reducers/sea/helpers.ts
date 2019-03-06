import { ISeaState } from './types';
import { ISeaBlock } from 'types/seaTypes';
import getSeaWithRandomShips from 'utils/getSeaWithRandomShips';
import getEmptySea from 'utils/getEmptySea';

const getDefaultShipsToPlace = () => [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

export const getInitialSeaState = (): ISeaState => {
  return {
    mySea: getSeaWithRandomShips(),
    enemySea: getSeaWithRandomShips(),
    myShipsToPlace: getDefaultShipsToPlace(),
    enemyShipsToPlace: getDefaultShipsToPlace(),
  };
};
