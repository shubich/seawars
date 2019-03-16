import { ICoordinates, ISeaBlock } from 'types/seaTypes';
import { getRandomInteger, getRandomBoolean } from 'utils/random';
import getShipCoordinates from 'utils/getShipCoordinates';
import getArrayOfFreeCoordinates from 'utils/getArrayOfFreeCoordinates';

export const randomShot = (seaToAttack: ISeaBlock[][]): ICoordinates => {
  const arrayOfFreeCoordinates = getArrayOfFreeCoordinates(seaToAttack);

  if (!arrayOfFreeCoordinates.length) {
    throw new Error('Unable to find free coordinates');
  }

  const randomIndex = getRandomInteger(0, arrayOfFreeCoordinates.length - 1);

  return arrayOfFreeCoordinates[randomIndex];
};

export const AIShot = (
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

    const availableCoordinates: ICoordinates[] = [];

    if (deadBlocksCount > 1) {
      const isHorizontalShip = shipCoordinates[0].y === shipCoordinates[1].y;
      const isVerticalShip = !isHorizontalShip;
      const { x, y } = shipInProgressCoordinates;

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
    } else {
      const { x, y } = shipInProgressCoordinates;

      const left = x - 1;
      const right = x + 1;
      const top = y - 1;
      const bottom = y + 1;

      if (x < 9 && !seaToAttack[y][right].hasFire) {
        availableCoordinates.push({ y, x: right });
      }

      if (x > 0 && !seaToAttack[y][left].hasFire) {
        availableCoordinates.push({ y, x: left });
      }

      if (y < 9 && !seaToAttack[bottom][x].hasFire) {
        availableCoordinates.push({ x, y: bottom });
      }

      if (y > 0 && !seaToAttack[top][x].hasFire) {
        availableCoordinates.push({ x, y: top });
      }
    }

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
