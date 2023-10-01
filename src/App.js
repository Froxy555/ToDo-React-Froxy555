import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO List</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
      {}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          fontSize: '1.5rem',
        }}
      >
        LifeChanger
      </div>
      {}
      <div
        style={{
          position: 'absolute',
          top: '30px',
          right: '10px',
          fontSize: '1.1rem',
        }}
      >
        Froxy555
      </div>
    </>
  );
}

export default App;
