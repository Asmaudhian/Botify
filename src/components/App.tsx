import { useEffect, useState } from 'react';
import { NEOList } from '../shared/classes/NEOList';
import './App.css';
import BarChart from './barChart/barChart';
import Filter from './filter/filter';

const App = () => {
    const [currentNEO, setCurrentNEO] = useState<NEOList>(new NEOList());
    const [filter, setFilter] = useState('');

    useEffect(() => {
        currentNEO.refreshNEO();
        setCurrentNEO(new NEOList(currentNEO.objects));
    }, [])

    return (
        <div className="App-header">
            <Filter filter={filter} setState={setFilter} orbitingBodys={currentNEO.getOrbitingBodyList()} />
            <BarChart NEOArray={currentNEO.objects}></BarChart>
        </div>
    );
}

export default App;
