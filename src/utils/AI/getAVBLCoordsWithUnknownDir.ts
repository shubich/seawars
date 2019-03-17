import { ISeaBlock, ICoordinates } from 'types/seaTypes';

const getAVBLCoordsWithUnknownDir = (
  seaToAttack: ISeaBlock[][],
  shipInProgressCoordinates: ICoordinates,
): ICoordinates[] => {
  const availableCoordinates: ICoordinates[] = [];
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

  return availableCoordinates;
};

export default getAVBLCoordsWithUnknownDir;
