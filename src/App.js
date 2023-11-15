import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [])

  const lng = navigator.language;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{maxWidth: 640}}>
          <p>{t('greeting')}</p>
          <p>{t('quotes.bennett')}</p>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
