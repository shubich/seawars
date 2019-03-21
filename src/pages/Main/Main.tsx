import * as React from 'react';
import PlayerVsAI from 'containers/PlayerVsAI';
import AIVsAI from 'containers/AIVsAI';

const { useState } = React;

enum GameModes {
  PLAYER_VS_AI = 'PLAYER_VS_AI',
  AI_VS_AI = 'AI_VS_AI',
}

const Main: React.FC<{}> = () => {
  const [mode, setMode] = useState<GameModes>();

  if (mode === GameModes.PLAYER_VS_AI) {
    return <PlayerVsAI />;
  }

  if (mode === GameModes.AI_VS_AI) {
    return <AIVsAI />;
  }

  return (
    <div className="Main">
      <h1>Sea wars!</h1>
      <h2>Start a new game:</h2>
      <ul>
        <li>
          <a
            href={`#${GameModes.PLAYER_VS_AI}`}
            onClick={() => setMode(GameModes.PLAYER_VS_AI)}
          >
            Player VS AI
          </a>
        </li>
        <li>
          <a
            href={`#${GameModes.AI_VS_AI}`}
            onClick={() => setMode(GameModes.AI_VS_AI)}
          >
            AI VS AI
          </a>
        </li>
        <li>Player VS Player (not available)</li>
      </ul>
    </div>
  );
};

export default Main;
