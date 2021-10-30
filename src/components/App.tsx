import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import { NEO } from '../shared/classes/NEO';
import { NEOList } from '../shared/classes/NEOList';
import './App.css';
import BarChart from './barChart/barChart';

const App = () => {
  const [currentNEO, setCurrentNEO] = useState<NEOList>(new NEOList());

  useEffect(()=> {
    currentNEO.refreshNEO();
    setCurrentNEO(new NEOList(currentNEO.objects));
  }, [])

  return (
    <div className="App-header">
      <BarChart NEOArray={currentNEO.objects}></BarChart>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {
          currentNEO.objects.map((object: NEO) => {
            return <div>{object.id}</div>
          })
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
