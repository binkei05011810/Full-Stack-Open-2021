import React, { useState } from 'react'
import Statistics from './Components/Statistics.js'
import Buttons from './Components/Buttons.js'

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  const calculate = () => {
    let all = good + neutral + bad;
    let average = (good * 1 + neutral * 0 + bad * (-1)) / all;
    let positive = `${(good / all) * 100} %`;

    return [all, average, positive]
  }

  return (
    <div className="App">
      <h2>give feedback</h2>
      <Buttons handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad} />
      <h2>statistics</h2>
      <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={calculate()[0]}
          average={calculate()[1]}
          positive={calculate()[2]} />
      </div>
    </div>
  );
}

export default App;
