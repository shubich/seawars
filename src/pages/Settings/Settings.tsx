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
    <div className="Settings min-h-screen w-full bg-navy-gradient bg-navy-950 flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-[280px] space-y-4">
        <label className="Settings-Label Settings-Name block">
          <span className="text-white/80 block mb-1">Your name:</span>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full px-4 py-2 rounded-lg bg-white border border-white/40 text-navy-950 placeholder-gray-500 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/30"
            style={{ WebkitTextFillColor: '#0a1628' }}
          />
        </label>
        <label className="Settings-Label Settings-Delay block">
          <span className="text-white/80 block mb-1">AI delay: {delay} (ms)</span>
          <input
            type="range"
            min="0"
            max="1000"
            value={delay}
            onChange={handleDelayChange}
            className="w-full h-2 rounded-lg appearance-none bg-white/10 accent-brass"
            style={{ accentColor: '#c9a227' }}
          />
        </label>
        <label className="Settings-Label Settings-Sound flex items-center gap-2">
          <span className="text-white/80">Sound:</span>
          <input
            type="checkbox"
            checked={soundCheckmark === SoundValues.ON}
            onChange={handleSoundChange}
            className="w-4 h-4 rounded accent-brass"
            style={{ accentColor: '#c9a227' }}
          />
        </label>
        <Link to="/" className="block mt-6">
          <button className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/15 hover:border-brass/50 transition-all">
            Back to main menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
