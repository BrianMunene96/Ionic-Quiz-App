import './App.css';
import { useState } from 'react';
import { questions } from './assets/questions';
import { FinalResults } from './components/FinalResults';
import { QuestionsCard } from './components/QuestionsCard';
import { Header } from './components/Header';

function App() {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [display, setDisplay] = useState(true);

  // Helper Function
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      setDisplay(false);
    }
  };

  const restartGame = () => {
    setShowResults(false);
    setCurrentQuestion(0);
    setScore(0);
    setDisplay(true);
  };

  return (
    <div className="App">
      <Header score={score} display={display} />

      {showResults ? (
        /* Final Results Card */
        <FinalResults
          score={score}
          questions={questions}
          restartGame={restartGame}
        />
      ) : (
        /* 3. Question Card */
        <QuestionsCard
          currentQuestion={currentQuestion}
          questions={questions}
          optionClicked={optionClicked}
        />
      )}
    </div>
  );
}

export default App;
