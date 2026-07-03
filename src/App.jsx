import { useState } from 'react';

const possibleRuns = [0, 1, 2, 3, 4, 6];

function App() {
  const [balls, setBalls] = useState(0);
  const [runs, setRuns] = useState(0);

  const isGameOver = balls >= 6;

  const hitBall = () => {
    if (isGameOver) return;
    const scored = possibleRuns[Math.floor(Math.random() * possibleRuns.length)];
    setRuns((current) => current + scored);
    setBalls((current) => current + 1);
  };

  const resetGame = () => {
    setBalls(0);
    setRuns(0);
  };

  return (
    <div className="app-shell">
      <section className="scoreboard">
        <h1>Cricket Score Board</h1>
        <div className="score-row">
          <span>Balls :</span>
          <strong>{balls}</strong>
        </div>
        <div className="score-row">
          <span>Runs :</span>
          <strong>{runs}</strong>
        </div>
      </section>

      <p className="instructions">
        You get a total of 6 balls (1 over). The button gets disabled after that.
      </p>

      <div className="controls">
        <button onClick={hitBall} disabled={isGameOver}>
          Click to hit the ball
        </button>
        <button onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;
