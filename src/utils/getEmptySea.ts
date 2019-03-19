import { ISeaBlock } from 'types/seaTypes';
import create2DMatrix from 'utils/create2DMatrix';

const getEmptySea = () => {
  const defaultSeaBlock: ISeaBlock = {
    hasFire: false,
    hasShip: false,
  };

  const sea = create2DMatrix(10, 10, defaultSeaBlock, seaBlock => ({
    ...seaBlock,
  }));

  return sea;
};

export default getEmptySea;
