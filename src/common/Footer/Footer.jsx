import React from 'react';

export function Footer({ appName }) {
  const footerStyle = {
    color: 'black',
    fontSize: '1.5em',
    fontWeight: 'bold',
    border: '2px solid black',
    position: 'fixed',
    background: 'yellowgreen',
    bottom: 0,
    margin: 5,
    padding: 5,
    width: '96%',
  };
  return (
    <footer style={footerStyle}>
      <em>{appName} by Chety Clooney</em>
    </footer>
  );
}
