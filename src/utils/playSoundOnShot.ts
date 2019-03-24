import * as SOUNDS from 'constants/sounds';
import playSound from 'utils/playSound';

const playSoundOnShot = (
  wounded: boolean,
  killed: boolean,
  win: boolean,
  lose?: boolean,
) => {
  if (killed) {
    playSound(SOUNDS.killed);

    if (win) {
      playSound(SOUNDS.win);
    } else if (lose) {
      playSound(SOUNDS.lose);
    }
  } else if (wounded) {
    playSound(SOUNDS.wounded);
  } else {
    playSound(SOUNDS.missed);
  }
};

export default playSoundOnShot;
