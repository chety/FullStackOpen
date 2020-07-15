import React from 'react';
import Loader from 'react-loader-spinner';

export function CustomLoader() {
  return (
    <div
      style={{
        width: '100%',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Loader type='Audio' color='#00BFFF' height={80} width={80} />
    </div>
  );
}
