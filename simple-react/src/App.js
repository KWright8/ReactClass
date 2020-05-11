import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageHeader from './componets/PageHeader';
import BasicsList from './componets/BasicsList';
import TipsList from './componets/TipsList';
import PageFooter from './componets/PageFooter';
import CheckBox from './InteractiveComponets/CheckBox';

function App() {
  return (
      <div>
        <PageHeader />
        <BasicsList />
        <TipsList />
        <CheckBox />
        <PageFooter />
      </div>
  )
}

export default App;
