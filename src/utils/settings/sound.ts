export enum SoundValues {
  ON = 'ON',
  OFF = 'OFF',
}

const SOUND = 'SOUND';
const DEFAULT_SOUND = SoundValues.ON;

export const getSound = (): SoundValues => {
  return (localStorage.getItem(SOUND) as SoundValues) || DEFAULT_SOUND;
};

export const setSound = (value: SoundValues) => {
  localStorage.setItem(SOUND, value);
};
