import { useEffect, useState } from 'react';
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
    </div>
  );
}

export default App;
