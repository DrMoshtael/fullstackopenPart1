import { useState } from 'react'

const Statistics = (props) => {
  if (props.all==0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState('')
  const [positive, setPositive] = useState('')


  const handleGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    const updatedAll = updatedGood + neutral + bad
    setAll(updatedAll)
    setAverage((updatedGood - bad) / (updatedAll))
    setPositive((updatedGood / updatedAll) * 100)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    const updatedAll = updatedNeutral + good + bad
    setAll(updatedAll)
    setAverage((good - bad) / (updatedAll))
    setPositive((good / updatedAll) * 100)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    const updatedAll = updatedBad + neutral + good
    setAll(updatedAll)
    setAverage((good - updatedBad) / (updatedAll))
    setPositive((good / updatedAll) * 100)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App