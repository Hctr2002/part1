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

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = (props) => {
  const Total = props.good + props.neutral + props.bad

  const Average = ((props.good - props.bad) / (props.good + props.neutral + props.bad))

  const Positive = (props.good / (props.good + props.neutral + props.bad)) * 100

  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="Total" value={Total} />
      <StatisticLine text="Average" value={Average} />
      <StatisticLine text="Positive" value={Positive + '%'} />
      </tbody>
    </table>
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