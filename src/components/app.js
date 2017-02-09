import React from 'react';
import message from '../message';

const sayMessage = (m) => {
  return message.formatMessage(m);
}

const App = (props) => {
  return(
    <h1 className="message">
     {sayMessage('React.. loading')}
     </h1>
  );
}

export default App;
