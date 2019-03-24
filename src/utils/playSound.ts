const playSound = (sound: HTMLAudioElement): void => {
  sound.load();
  sound.play();
};

export default playSound;
