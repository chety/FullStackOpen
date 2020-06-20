import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FeedBack } from './unicafe/FeedBack';
import { Statistic } from './unicafe/Statistic';
const App = () => {
  const [feedBack, setFeedBack] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onHandleClick = (prop) => {
    if (prop === 'reset') {
      setFeedBack({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    } else {
      setFeedBack({ ...feedBack, [prop]: feedBack[prop] + 1 });
    }
  };
  const averageTotal = () =>
    Object.entries(feedBack).reduce((acc, curr) => {
      const [key, value] = curr;
      if (key === 'good') {
        acc += value;
      } else if (key === 'bad') {
        acc -= value;
      }
      return acc;
    }, 0);
  const { good, neutral, bad } = feedBack;
  const total = good + neutral + bad;
  return (
    <div>
      <FeedBack feedBack={feedBack} onButtonClicked={onHandleClick} />
      <Statistic
        result={[
          {
            text: 'good',
            value: good,
          },
          {
            text: 'neutral',
            value: neutral,
          },
          {
            text: 'bad',
            value: bad,
          },
          {
            text: 'total',
            value: total,
          },
          {
            text: 'averageTotal',
            value: averageTotal(),
          },
          {
            text: 'positive',
            value: ((good * 100) / total).toFixed(2),
          },
        ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
