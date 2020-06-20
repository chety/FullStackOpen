import React from 'react';
import ReactDOM from 'react-dom';
import { ClickCounter } from './components/clickCounter/ClickCounter';
import { Content } from './components/course/Content';
import { Header } from './components/course/Header';
import { Total } from './components/course/Total';
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  const totalExercises = course.parts.reduce(
    (acc, curr) => acc + curr.exercises,
    0
  );
  return (
    <div>
      <Header course={course.name} />
      <Content exerciseArr={course.parts} />
      <Total numberOfExercises={totalExercises} />
    </div>
  );
};

ReactDOM.render(<ClickCounter />, document.getElementById('root'));
