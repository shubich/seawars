import { ISeaBlock, ICoordinates } from 'types/seaTypes';

const getAVBLCoordsWithKnownDir = (
  seaToAttack: ISeaBlock[][],
  shipInProgressCoordinates: ICoordinates,
  shipCoordinates: ICoordinates[],
): ICoordinates[] => {
  const availableCoordinates: ICoordinates[] = [];
  const { x, y } = shipInProgressCoordinates;
  const isHorizontalShip = shipCoordinates[0].y === shipCoordinates[1].y;
  const isVerticalShip = !isHorizontalShip;

  if (isHorizontalShip) {
    let tmpX = x + 1;

    while (tmpX <= 9 && seaToAttack[y][tmpX].hasFire) {
      tmpX += 1;
    }

    if (tmpX <= 9 && seaToAttack[y][tmpX - 1].hasShip) {
      availableCoordinates.push({ y, x: tmpX });
    }

    tmpX = x - 1;

    while (tmpX >= 0 && seaToAttack[y][tmpX].hasFire) {
      tmpX -= 1;
    }

    if (tmpX >= 0 && seaToAttack[y][tmpX + 1].hasShip) {
      availableCoordinates.push({ y, x: tmpX });
    }
  } else if (isVerticalShip) {
    let tmpY = y + 1;

    while (tmpY <= 9 && seaToAttack[tmpY][x].hasFire) {
      tmpY += 1;
    }

    if (tmpY <= 9 && seaToAttack[tmpY - 1][x].hasShip) {
      availableCoordinates.push({ x, y: tmpY });
    }

    tmpY = y - 1;

    while (tmpY >= 0 && seaToAttack[tmpY][x].hasFire) {
      tmpY -= 1;
    }

    if (tmpY >= 0 && seaToAttack[tmpY + 1][x].hasShip) {
      availableCoordinates.push({ x, y: tmpY });
    }
  }

  return availableCoordinates;
};

export default getAVBLCoordsWithKnownDir;
