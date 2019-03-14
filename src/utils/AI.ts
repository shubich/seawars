import { ICoordinates, ISeaBlock } from 'types/seaTypes';
import { getRandomInteger, getRandomBoolean } from 'utils/random';
import getShipCoordinates from 'utils/getShipCoordinates';

const getFirstFreeCoordinates = (sea: ISeaBlock[][]): ICoordinates => {
  for (let y = 0; y < 10; y += 1) {
    for (let x = 0; x < 10; x += 1) {
      if (!sea[y][x].hasFire) {
        return { x, y };
      }
    }
  }

  throw new Error("The target sea hasn't free block");
};

const getLastFreeCoordinates = (sea: ISeaBlock[][]): ICoordinates => {
  for (let y = 9; y >= 0; y -= 1) {
    for (let x = 9; x >= 0; x -= 1) {
      if (!sea[y][x].hasFire) {
        return { x, y };
      }
    }
  }

  throw new Error("The target sea hasn't free block");
};

const randomShot = (seaToAttack: ISeaBlock[][]): ICoordinates => {
  let triesCount = 0;
  let x: number;
  let y: number;

  while (triesCount < 20) {
    triesCount += 1;
    x = getRandomInteger(0, 9);
    y = getRandomInteger(0, 9);

    if (!seaToAttack[y][x].hasFire) {
      return { x, y };
    }
  }

  // @TOTO: we also can use a range of free coordinates to make random shot
  if (getRandomBoolean()) {
    return getFirstFreeCoordinates(seaToAttack);
  }

  return getLastFreeCoordinates(seaToAttack);
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

      if (isHorizontalShip) {
        const { x, y } = shipInProgressCoordinates;
        let tmpX = x + 1;

        while (tmpX <= 9 && seaToAttack[y][tmpX].hasFire) {
          tmpX += 1;
        }

        if (tmpX <= 9) {
          availableCoordinates.push({ y, x: tmpX });
        }

        tmpX = x - 1;

        while (tmpX >= 0 && seaToAttack[y][tmpX].hasFire) {
          tmpX -= 1;
        }

        if (tmpX >= 0) {
          availableCoordinates.push({ y, x: tmpX });
        }
      } else if (isVerticalShip) {
        const { x, y } = shipInProgressCoordinates;
        let tmpY = y + 1;

        while (tmpY <= 9 && seaToAttack[tmpY][x].hasFire) {
          tmpY += 1;
        }

        if (tmpY <= 9) {
          availableCoordinates.push({ x, y: tmpY });
        }

        tmpY = y - 1;

        while (tmpY >= 0 && seaToAttack[tmpY][x].hasFire) {
          tmpY -= 1;
        }

        if (tmpY >= 0) {
          availableCoordinates.push({ x, y: tmpY });
        }
      }
    } else {
      const { x, y } = shipInProgressCoordinates;

      if (x < 9) {
        availableCoordinates.push({ y, x: x + 1 });
      }

      if (x > 0) {
        availableCoordinates.push({ y, x: x - 1 });
      }

      if (y < 9) {
        availableCoordinates.push({ x, y: y + 1 });
      }

      if (y > 0) {
        availableCoordinates.push({ x, y: y - 1 });
      }
    }

    const randomIndex = getRandomInteger(0, availableCoordinates.length - 1);

    return availableCoordinates[randomIndex];
  }

  return randomShot(seaToAttack);
};