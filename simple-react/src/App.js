import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './componets/PageHeader';
import BasicsList from './componets/BasicsList';
import TipsList from './componets/TipsList';
import PageFooter from './componets/PageFooter';

function App() {
  return (
      <div>
        <PageHeader />
          <main>
           <BasicsList />
           <TipsList />
          </main>
          <PageFooter />
      </div>
  )
}

export default App;
