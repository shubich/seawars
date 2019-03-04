import { ISeaBlock } from 'types/seaTypes';

const getEmptySea = () => {
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

export default getEmptySea;
