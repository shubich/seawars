import * as React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

const Main: React.FC<{}> = () => {
  return (
    <div className="Main">
      <h1>Sea wars</h1>

      <ul className="Main-Menu">
        <li className="Main-MenuItem">
          <span>New game</span>
          <ul>
            <li className="Main-SubMenuItem">
              <Link to="/game/player_vs_ai">Player VS AI</Link>
            </li>
            <li className="Main-SubMenuItem">
              <Link to="/game/ai_vs_ai">AI VS AI</Link>
            </li>
            <li className="Main-SubMenuItem">
              Player VS Player (not available)
            </li>
          </ul>
        </li>
        <li className="Main-MenuItem">
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default Main;
