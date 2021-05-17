import React, { useState, useEffect } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);

  const [mostVotes, setMostVotes] = useState(0);

  const newAnecdote = () => {
    let randIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randIndex);
  }

  const vote = () => {
    setVotes(votes.map((vote, index) => {
      if (index === selected) return vote + 1
      return vote
    }))
  }

  useEffect(() => {
    let mostVotes = Math.max(...votes);
    let mostIndex = votes.indexOf(mostVotes);
    setMostVotes(mostIndex);
  })

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>
        {anecdotes[selected]}
      </p>
      <p>has {votes[selected]} votes</p>
      <div>
        <button onClick={vote}>vote</button>
        <button onClick={newAnecdote}>next anecdote</button>
      </div>

      <h2>Anecdote with the most votes</h2>
      <p>
        {anecdotes[mostVotes]}
      </p>
      <p>has {votes[mostVotes]} votes</p>

    </div>
  )
}

export default App