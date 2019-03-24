import * as React from 'react';
import './Settings.scss';
import { Link } from 'react-router-dom';

const Settings: React.FC<{}> = ({}) => {
  return (
    <div className="Settings">
      <label className="Settings-Label Settings-Name">
        <span>Your name: </span>
        <input type="text" defaultValue="Player" />
      </label>
      <label className="Settings-Label Settings-Delay">
        <span>AI delay: (ms)</span>
        <input
          className="Settings-DelayRange"
          type="range"
          min="0"
          max="1000"
          value={500}
          onChange={() => {
            /*onDelayChange*/
          }}
        />
      </label>
      <Link to="/">
        <button>Back to main menu</button>
      </Link>
    </div>
  );
};

export default Settings;
