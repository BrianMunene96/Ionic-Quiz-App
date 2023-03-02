export function FinalResults({ score, questions, restartGame }) {
  return (
    <div className="final-result">
      <h2>Final Result</h2>
      <h3>
        {score} out of {questions.length} correct - (
        {(score / questions.length) * 100}%)
      </h3>
      <button onClick={() => restartGame()}>Restart Game</button>
    </div>
  );
}
