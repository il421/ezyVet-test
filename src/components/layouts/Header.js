import React from 'react';
import logo from '../../assets/img/logo.png';
import '../../styles/layouts/header.css';

export const App = () => {
  return (
    <header className="header">
      <img src={ logo } className="header__logo" alt="EzyVet Logo" width="230" height="60" />
    </header>
  );
};

export default App;
