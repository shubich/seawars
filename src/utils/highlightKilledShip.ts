import { ICoordinates, ISeaBlock } from 'types/seaTypes';
import deepCopyOfObject from './deepCopyOfObject';

const highlightKilledShip = (
  sea: ISeaBlock[][],
  shipCoordinates: ICoordinates[],
): ISeaBlock[][] => {
  const newSea = deepCopyOfObject(sea);

  shipCoordinates.forEach(coordinates => {
    const { x, y } = coordinates;

    const left = x - 1;
    const right = x + 1;
    const top = y - 1;
    const bottom = y + 1;

    const isLeftAble = x > 0;
    const isRightAble = x < 9;
    const isTopAble = y > 0;
    const isBottomAble = y < 9;

    if (isLeftAble) {
      newSea[y][left].hasFire = true;
    }

    if (isRightAble) {
      newSea[y][right].hasFire = true;
    }

    if (isTopAble) {
      newSea[top][x].hasFire = true;
    }

    if (isBottomAble) {
      newSea[bottom][x].hasFire = true;
    }

    if (isTopAble && isLeftAble) {
      newSea[top][left].hasFire = true;
    }

    if (isTopAble && isRightAble) {
      newSea[top][right].hasFire = true;
    }

    if (isBottomAble && isLeftAble) {
      newSea[bottom][left].hasFire = true;
    }

    if (isBottomAble && isRightAble) {
      newSea[bottom][right].hasFire = true;
    }
  });

  return newSea;
};

export default highlightKilledShip;
