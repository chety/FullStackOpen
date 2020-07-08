import React, { useState } from 'react';
import './app.css';

export function Anecdote({ anecdotes }) {
  const [selectedAnecdote, setSelectedAnecdote] = useState(null);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [maxIndex, setMaxIndex] = useState(null);

  function getRandomAnecdote() {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelectedAnecdote(randomNumber);
  }
  function vote() {
    const voteArr = votes.slice();
    voteArr[selectedAnecdote] += 1;
    const maxVote = Math.max.apply(null, voteArr);
    setMaxIndex(voteArr.findIndex((item) => item === maxVote));
    setVotes(voteArr);
  }
  return (
    <div className='anecdote-container'>
      {selectedAnecdote != null && anecdotes?.length > 0 ? (
        <div className='anecdote'>
          <h2>Anecdote of the day</h2>
          <p className='sentence'>{anecdotes[selectedAnecdote]}</p>
          <p className='result'>
            has <span className='score'>{votes[selectedAnecdote]}</span> votes
          </p>
        </div>
      ) : (
        <p>Let start by click feeling lucky</p>
      )}
      <input
        type='button'
        value='vote'
        onClick={vote}
        disabled={selectedAnecdote == null}
      />
      <input type='button' value='next anecdote' onClick={getRandomAnecdote} />

      {maxIndex != null ? (
        <div className='anecdote'>
          <h2>Anecdote with most votes</h2>
          <p className='sentence'>{anecdotes[maxIndex]}</p>
          <p className='result'>
            has <span className='score'>{votes[maxIndex]}</span> votes
          </p>
        </div>
      ) : null}
    </div>
  );
}
