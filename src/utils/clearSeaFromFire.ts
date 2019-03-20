import { ISeaBlock } from 'types/seaTypes';
import deepCopyOfObject from './deepCopyOfObject';

const clearSeaFromFire = (sea: ISeaBlock[][]): ISeaBlock[][] => {
  const newSea = deepCopyOfObject(sea);

  newSea.forEach(row => {
    row.forEach(column => {
      column.hasFire = false;
    });
  });

  return newSea;
};

export default clearSeaFromFire;
