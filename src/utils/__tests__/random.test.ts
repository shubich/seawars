import { getRandomInteger, getRandomBoolean } from '../random';

describe('random', () => {
  test('random integer, 0-1', () => {
    const result = getRandomInteger(0, 1);

    expect(result).not.toBeGreaterThan(1);
    expect(result).not.toBeLessThan(0);
  });

  test('random integer, 0-100', () => {
    const result = getRandomInteger(0, 100);

    expect(result).not.toBeGreaterThan(100);
    expect(result).not.toBeLessThan(0);
  });

  test('random integer, 10-100', () => {
    const result = getRandomInteger(10, 100);

    expect(result).not.toBeGreaterThan(100);
    expect(result).not.toBeLessThan(10);
  });

  test('random integer, -50-50', () => {
    const result = getRandomInteger(-50, 50);

    expect(result).not.toBeGreaterThan(50);
    expect(result).not.toBeLessThan(-50);
  });

  test('random integer, -150-(-50)', () => {
    const result = getRandomInteger(-150, -50);

    expect(result).not.toBeGreaterThan(-50);
    expect(result).not.toBeLessThan(-150);
  });

  test('random bool', () => {
    const result = getRandomBoolean();

    expect(result).toBeDefined();
  });
});
