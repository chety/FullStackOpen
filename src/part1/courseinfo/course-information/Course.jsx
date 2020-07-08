import React from 'react';
import { Content } from './Content';
import { Header } from './Header';
import { Total } from './Total';

export function Course({ course }) {
  const { parts } = course;
  const totalCourse = parts.reduce(
    (result, course) => result + course.exercises,
    0
  );
  return (
    <React.StrictMode>
      <Header course={course.name} />
      <Content exerciseArr={parts} />
      <Total numberOfExercises={totalCourse} />
    </React.StrictMode>
  );
}
