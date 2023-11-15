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
          <p>{t('translations:greeting')}</p>
          <p>{t('translations:quotes.bennett')}</p>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('translations:learn')}
        </a>
      </header>
    </div>
  );
}

export default App;
