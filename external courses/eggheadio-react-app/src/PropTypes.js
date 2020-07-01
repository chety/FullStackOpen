import React from 'react';
import PropTypes from 'prop-types'

function App({text,count}) {
  return (
   <p><b> {text} repeats {count} times </b></p>
  );
}
App.propTypes = {
  text: PropTypes.string,
  count: PropTypes.number.isRequired
}

App.defaultProps = {
  text: "Chety clooney is best",
  count: 49
}

export default App;
