import React from 'react';
import ReactDOM from 'react-dom';
import { PhoneBook } from './part2/phonebook/PhoneBook';
const App = () => {
  return <PhoneBook />;
};

ReactDOM.render(<App />, document.getElementById('root'));
