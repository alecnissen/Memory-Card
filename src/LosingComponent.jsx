/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';

export default function LosingComponent({
  userCardInput,
  setUserCardInput,
  setHasUserLost,
  setClickedCards,
  value,
  setValue
}) {
  return (
    <>
      <div className="losing-msg-container">
        <h1>Game Over, Play Again?</h1>
        <label>How many cards for next game?</label>
        <input
          type="number"
          min="0"
          max="52"
          className="card-input-field"
          defaultValue={userCardInput}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="restart-btn-flex-container">
        <Button
          id="restart-btn-losing-component"
          variant="primary"
          size="lg"
          onClick={() => {
            setUserCardInput(value);
            setHasUserLost(false);
            setClickedCards([]);
          }}>
          Restart
        </Button>
      </div>
    </>
  );
}
