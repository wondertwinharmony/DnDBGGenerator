import React from 'react';
import PropTypes from 'prop-types';

function App({ children }) {
  return (
    <div className="container">
      <h1>D&D Character Background Generator</h1>
      {children}
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
