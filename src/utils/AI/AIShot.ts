import getShipCoordinates from 'utils/getShipCoordinates';
import { ISeaBlock, ICoordinates } from 'types/seaTypes';
import { getRandomInteger } from 'utils/random';
import randomShot from 'utils/AI/randomShot';
import getAVBLCoordsWithKnownDir from './getAVBLCoordsWithKnownDir';
import getAVBLCoordsWithUnknownDir from './getAVBLCoordsWithUnknownDir';

const AIShot = (
  seaToAttack: ISeaBlock[][],
  shipInProgressCoordinates: ICoordinates | null,
): ICoordinates => {
  if (shipInProgressCoordinates) {
    const shipCoordinates = getShipCoordinates(
      seaToAttack,
      shipInProgressCoordinates,
    );

    const deadBlocksCount = shipCoordinates.reduce((counter, coordinates) => {
      const { x, y } = coordinates;

      if (seaToAttack[y][x].hasFire) {
        return counter + 1;
      }

      return counter;
    }, 0);

    const availableCoordinates: ICoordinates[] =
      deadBlocksCount > 1
        ? getAVBLCoordsWithKnownDir(
            seaToAttack,
            shipInProgressCoordinates,
            shipCoordinates,
          )
        : getAVBLCoordsWithUnknownDir(seaToAttack, shipInProgressCoordinates);

    if (!availableCoordinates.length) {
      throw new Error('Unable to find free coordinates');
    }

    if (availableCoordinates.some(({ x, y }) => seaToAttack[y][x].hasFire)) {
      throw new Error('Fire to the coordinates more than once');
    }

    const randomIndex = getRandomInteger(0, availableCoordinates.length - 1);

    return availableCoordinates[randomIndex];
  }

  return randomShot(seaToAttack);
};

export default AIShot;
