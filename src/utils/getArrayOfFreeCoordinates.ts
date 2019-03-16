import { ISeaBlock, ICoordinates } from 'types/seaTypes';

const getArrayOfFreeCoordinates = (sea: ISeaBlock[][]): ICoordinates[] => {
  return sea.reduce((accRow: ICoordinates[], seaRow, indexRow) => {
    const resultRow = seaRow.reduce((accCol, seaCol, indexCol) => {
      if (seaCol.hasFire) {
        return accCol;
      }

      return [
        ...accCol,
        {
          x: indexCol,
          y: indexRow,
        },
      ];
    }, []);

    return [...accRow, ...resultRow];
  }, []);
};

export default getArrayOfFreeCoordinates;
