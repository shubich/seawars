const AI_DELAY = 'AI_DELAY';
const DEFAULT_AI_DELAY = '500'; // ms

export const getAIDelay = () => {
  return localStorage.getItem(AI_DELAY) || DEFAULT_AI_DELAY;
};

export const setAIDelay = (value: string) => {
  localStorage.setItem(AI_DELAY, value);
};
