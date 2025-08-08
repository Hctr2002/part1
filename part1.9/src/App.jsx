import { useState } from 'react'

const History = (props) => {
  if (props.good + props.neutral + props.bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <Statistics good={props.good} neutral={props.neutral} bad={props.bad} />
  )
} 

const Statistics = (props) => {
  const Total = ({ good, neutral, bad }) => {
    return (
      <div>
        <p>Total: {good + neutral + bad}</p>
      </div>
    )
  }

  const Average = ({ good, neutral, bad }) => {
    return (
      <div>
        <p>Average: {((good - bad) / (good + neutral + bad))}</p>
      </div>
    )
  }

  const Positive = ({ good, neutral, bad }) => {
    return (
      <div>
        <p>Positive: {((good / (good + neutral + bad)) * 100)} %</p>
      </div>
    )
  }

  return (
    <div>
      <p>good: {props.good}</p>
      <p>neutral: {props.neutral}</p>
      <p>bad: {props.bad}</p>
      <Total good={props.good} neutral={props.neutral} bad={props.bad} />
      <Average good={props.good} neutral={props.neutral} bad={props.bad} />
      <Positive good={props.good} neutral={props.neutral} bad={props.bad} />
    </div>
  )

}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const neutralClick = () => {
      const updatedNeutral = neutral + 1
      setNeutral(updatedNeutral)
    }
  const badClick = () => {
      const updatedBad = bad + 1
      setBad(updatedBad)
  }

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <button onClick={goodClick}>good</button>
        <button onClick={neutralClick}>neutral</button>
        <button onClick={badClick}>bad</button>
        <h1>Statistics</h1>
        <History good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App