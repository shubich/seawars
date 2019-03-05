import { ISeaBlock, ICoordinates } from 'types/seaTypes';

const isShipKilled = (
  sea: ISeaBlock[][],
  shipCoordinates: ICoordinates[],
): boolean => {
  return shipCoordinates.every(coordinates => {
    const { x, y } = coordinates;
    const seaBlock = sea[y][x];

    return seaBlock.hasFire;
  });
};

export default isShipKilled;
