import { useEffect, useState } from 'react';
import { NEO } from '../shared/classes/NEO';
import { NEOList } from '../shared/classes/NEOList';
import './App.css';
import BarChart from './barChart/barChart';
import Filter from './filter/filter';

const App = () => {
    const [currentNEO, setCurrentNEO] = useState<NEOList>(new NEOList());
    const [filter, setFilter] = useState('');
    const [displayedNEO, setDisplayedNEO] = useState<Array<NEO>>([]);

    useEffect(() => {
        currentNEO.refreshNEO();
        setCurrentNEO(new NEOList(currentNEO.objects));
    }, [])

    useEffect(() => {
        setDisplayedNEO(currentNEO.getFilteredNEO(filter));
    }, [filter, currentNEO])

    return (
        <div className="App-header">
            <Filter filter={filter} setState={setFilter} orbitingBodys={currentNEO.getOrbitingBodyList()} />
            <BarChart NEOArray={displayedNEO}></BarChart>
        </div>
    );
}

export default App;
