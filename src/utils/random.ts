// This JavaScript function always returns a random number between min and max (both included):
export const getRandomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomBoolean = (): boolean => {
  return Boolean(getRandomInteger(0, 1));
};
