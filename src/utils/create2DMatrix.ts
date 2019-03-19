const create2DMatrix = <T>(
  rowsLength: number,
  colsLength: number,
  defaultValue: T,
  getDefaultValue?: (value: T) => T,
): T[][] => {
  const result: T[][] = [];

  for (let i = 0; i < rowsLength; i += 1) {
    for (let j = 0; j < colsLength; j += 1) {
      if (j === 0) {
        result[i] = [];
      }

      result[i][j] = getDefaultValue
        ? getDefaultValue(defaultValue)
        : defaultValue;
    }
  }

  return result;
};

export default create2DMatrix;
