import { useEffect, useState } from 'react';
import { NEO } from '../shared/classes/NEO';
import { NEOList } from '../shared/classes/NEOList';
import './App.css';
import BarChart from './barChart/barChart';
import Filter from './filter/filter';
import Table from './table/table';

const App = () => {
    const [currentNEO, setCurrentNEO] = useState<NEOList>(new NEOList());
    const [filter, setFilter] = useState('');
    const [displayedNEO, setDisplayedNEO] = useState<Array<NEO>>([]);
    const [displayTable, setDisplayTable] = useState(false);

    useEffect(() => {
        currentNEO.refreshNEO();
        setCurrentNEO(new NEOList(currentNEO.objects));
    }, [])

    useEffect(() => {
        setDisplayedNEO(currentNEO.getFilteredNEO(filter));
    }, [filter, currentNEO])

    return (
        <div className="App-header">
            <button onClick={() => setDisplayTable(!displayTable)}>Change display</button>
            <Filter filter={filter} setState={setFilter} orbitingBodys={currentNEO.getOrbitingBodyList()} />
            {
                displayTable ? 
                <Table NEOArray={displayedNEO} />
                : <BarChart NEOArray={displayedNEO} />
            }
        </div>
    );
}

export default App;
