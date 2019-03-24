import * as React from 'react';
import './Settings.scss';
import { Link } from 'react-router-dom';
import { getPlayerName, setPlayerName } from 'utils/settings/playerName';
import { getAIDelay, setAIDelay } from 'utils/settings/AIDelay';
import { getSound, setSound, SoundValues } from 'utils/settings/sound';

const { useState, useCallback } = React;

const Settings: React.FC<{}> = ({}) => {
  const [name, setName] = useState(getPlayerName());
  const [delay, setDelay] = useState(getAIDelay());
  const [soundCheckmark, setSoundCheckmark] = useState(getSound());

  const handleNameChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setName(value);
      setPlayerName(value);
    },
    [setName],
  );

  const handleDelayChange = useCallback(
    ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setDelay(value);
      setAIDelay(value);
    },
    [setName],
  );

  const handleSoundChange = useCallback(
    ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
      const result = checked ? SoundValues.ON : SoundValues.OFF;
      setSoundCheckmark(result);
      setSound(result);
    },
    [setSoundCheckmark],
  );

  return (
    <div className="Settings">
      <label className="Settings-Label Settings-Name">
        <span>Your name: </span>
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label className="Settings-Label Settings-Delay">
        <span>AI delay: {delay} (ms)</span>
        <input
          className="Settings-DelayInput"
          type="range"
          min="0"
          max="1000"
          value={delay}
          onChange={handleDelayChange}
        />
      </label>
      <label className="Settings-Label Settings-Sound">
        <span>Sound: </span>
        <input
          type="checkbox"
          checked={soundCheckmark === SoundValues.ON}
          onChange={handleSoundChange}
        />
      </label>
      <Link to="/">
        <button>Back to main menu</button>
      </Link>
    </div>
  );
};

export default Settings;
