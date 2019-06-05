import { ISeaBlock, ICoordinates } from 'types/seaTypes';

const getShipCoordinates = (
  sea: ISeaBlock[][],
  coordinates: ICoordinates,
): ICoordinates[] => {
  const { x, y } = coordinates;

  if (!sea[y][x].hasShip) throw new Error('Where is no ship');

  const result = [coordinates];

  let nextSeaBlock: ISeaBlock | null;
  let nextX: number;
  let nextY: number;

  // check left
  if (x > 0) {
    nextX = x - 1;
    nextSeaBlock = sea[y][nextX];

    while (nextSeaBlock && nextSeaBlock.hasShip) {
      result.push({ y, x: nextX });
      nextX -= 1;
      nextSeaBlock = nextX >= 0 ? sea[y][nextX] : null;
    }
  }

  // check right
  if (x < 9) {
    nextX = x + 1;
    nextSeaBlock = sea[y][nextX];

    while (nextSeaBlock && nextSeaBlock.hasShip) {
      result.push({ y, x: nextX });
      nextX += 1;
      nextSeaBlock = nextX <= 9 ? sea[y][nextX] : null;
    }
  }

  // check top
  if (y > 0) {
    nextY = y - 1;
    nextSeaBlock = sea[nextY][x];

    while (nextSeaBlock && nextSeaBlock.hasShip) {
      result.push({ x, y: nextY });
      nextY -= 1;
      nextSeaBlock = nextY >= 0 ? sea[nextY][x] : null;
    }
  }

  // check bottom
  if (y < 9) {
    nextY = y + 1;
    nextSeaBlock = sea[nextY][x];

    while (nextSeaBlock && nextSeaBlock.hasShip) {
      result.push({ x, y: nextY });
      nextY += 1;
      nextSeaBlock = nextY <= 9 ? sea[nextY][x] : null;
    }
  }

  return result;
};

export default getShipCoordinates;
