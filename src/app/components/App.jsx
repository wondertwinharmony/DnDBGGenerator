import React from 'react';
import PropTypes from 'prop-types';

function App({ children }) {
  return (
    <div className="container">
      <h1 className='appHeader'>Dungeons & Dragons Character Generator</h1>
      {children}
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
