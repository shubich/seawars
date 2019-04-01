import create2DMatrix from 'utils/create2DMatrix';

describe('create2DMatrix', () => {
  test('matrix with primitive default values', () => {
    const result = create2DMatrix(2, 3, 0);
    const expected = [[0, 0, 0], [0, 0, 0]];

    expect(result).toEqual(expected);
  });

  test('matrix with non primitive default values', () => {
    const defaultValue = { a: 'b' };
    const result = create2DMatrix(2, 3, defaultValue, value => ({ ...value }));
    const expected = [
      [{ ...defaultValue }, { ...defaultValue }, { ...defaultValue }],
      [{ ...defaultValue }, { ...defaultValue }, { ...defaultValue }],
    ];

    expect(result).toEqual(expected);
  });
});
