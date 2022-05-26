import React, { useState } from 'react';
import Dashboard from './components/login';
import Login from './components/login';

export const App = () => {
  const [message, setMessage] = useState('From React!');
  const [login, setLogin] = useState(false);

  function toggleLogin() {
    setLogin((prev) => !prev);
  }

  return (
    <>
      {login ? (
        <Login toggleLogin={toggleLogin} />
      ) : (
        <Dashboard toggleLogin={toggleLogin} />
      )}
    </>
  );
};

export default App;
