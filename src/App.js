import React, { useState } from 'react';
import Login from './Login';
import NewsAggregator from './NewsAggregator';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <NewsAggregator /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;