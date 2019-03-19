import getEmptySea from 'utils/getEmptySea';

const getRandomShipPositions = (): (0 | 1)[][] => [
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
];

const getSeaWithRandomShips = () => {
  const sea = getEmptySea();
  const randomShipPositions = getRandomShipPositions();

  sea.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (randomShipPositions[rowIndex][columnIndex]) {
        sea[rowIndex][columnIndex].hasShip = true;
      }
    });
  });

  return sea;
};

export default getSeaWithRandomShips;
