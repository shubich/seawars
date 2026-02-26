import { ICoordinates } from 'types/seaTypes';

const getShipCollisionCoordinates = (
  shipCoordinates: ICoordinates[],
): ICoordinates[] => {
  const result: ICoordinates[] = [];
  const normalizedCoordinates = [...shipCoordinates];
  const lastShipCoordsIndex = normalizedCoordinates.length - 1;

  const isHorizontalShip =
    normalizedCoordinates[0].y === normalizedCoordinates[lastShipCoordsIndex].y;
  const isNormalDirection = isHorizontalShip
    ? normalizedCoordinates[0].x < normalizedCoordinates[lastShipCoordsIndex].x
    : normalizedCoordinates[0].y < normalizedCoordinates[lastShipCoordsIndex].y;

  if (!isNormalDirection) {
    normalizedCoordinates.reverse();
  }

  const firstBlock = normalizedCoordinates[0];
  const lastBlock = normalizedCoordinates[lastShipCoordsIndex];

  const left = firstBlock.x - 1;
  const right = lastBlock.x + 1;
  const top = firstBlock.y - 1;
  const bottom = lastBlock.y + 1;

  const isLeftAble = left >= 0;
  const isRightAble = right <= 9;
  const isTopAble = top >= 0;
  const isBottomAble = bottom <= 9;

  if (isHorizontalShip) {
    if (isLeftAble) {
      result.push({ y: firstBlock.y, x: left });
    }
    if (isRightAble) {
      result.push({ y: firstBlock.y, x: right });
    }
  } else {
    if (isTopAble) {
      result.push({ y: top, x: firstBlock.x });
    }
    if (isBottomAble) {
      result.push({ y: bottom, x: firstBlock.x });
    }
  }

  if (isTopAble && isLeftAble) {
    result.push({ y: top, x: left });
  }

  if (isTopAble && isRightAble) {
    result.push({ y: top, x: right });
  }

  if (isBottomAble && isLeftAble) {
    result.push({ y: bottom, x: left });
  }

  if (isBottomAble && isRightAble) {
    result.push({ y: bottom, x: right });
  }

  normalizedCoordinates.forEach(coordinates => {
    const { y, x } = coordinates;

    if (isHorizontalShip) {
      if (isTopAble) {
        result.push({ x, y: top });
      }
      if (isBottomAble) {
        result.push({ x, y: bottom });
      }
    } else {
      if (isLeftAble) {
        result.push({ y, x: left });
      }
      if (isRightAble) {
        result.push({ y, x: right });
      }
    }
  });

  return result;
};

export default getShipCollisionCoordinates;
