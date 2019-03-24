const PLAYER_NAME = 'PLAYER_NAME';
const DEFAULT_PLAYER_NAME = 'Player';

export const getPlayerName = () => {
  return localStorage.getItem(PLAYER_NAME) || DEFAULT_PLAYER_NAME;
};

export const setPlayerName = (value: string) => {
  localStorage.setItem(PLAYER_NAME, value);
};
