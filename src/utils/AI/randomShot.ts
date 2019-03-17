import { ICoordinates, ISeaBlock } from 'types/seaTypes';
import { getRandomInteger } from 'utils/random';
import getArrayOfFreeCoordinates from 'utils/getArrayOfFreeCoordinates';

const randomShot = (seaToAttack: ISeaBlock[][]): ICoordinates => {
  const arrayOfFreeCoordinates = getArrayOfFreeCoordinates(seaToAttack);

  if (!arrayOfFreeCoordinates.length) {
    throw new Error('Unable to find free coordinates');
  }

  const randomIndex = getRandomInteger(0, arrayOfFreeCoordinates.length - 1);

  return arrayOfFreeCoordinates[randomIndex];
};

export default randomShot;
