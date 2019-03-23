import * as React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC<{}> = () => {
  return (
    <div className="Main">
      <h1>Sea wars!</h1>
      <h2>Start a new game:</h2>
      <ul>
        <li>
          <Link to="/game/player_vs_ai">Player VS AI</Link>
        </li>
        <li>
          <Link to="/game/ai_vs_ai">AI VS AI</Link>
        </li>
        <li>Player VS Player (not available)</li>
      </ul>
    </div>
  );
};

export default Main;
