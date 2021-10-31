import { useEffect } from 'react';
import { NEO } from '../../shared/classes/NEO';
import useGoogleCharts from '../../shared/hooks/useGoogleCharts';
import './table.css'

interface chartProps {
    NEOArray: Array<NEO>;
}

const Table = (props: chartProps) => {
    const google = useGoogleCharts();
    useEffect(() => {
        if (google) {
            drawTable();
        }
    }, [google, props]);

    /**
        * Draw the table on the screen.
    */
    const drawTable = () => {
        if (google) {
            const table = new google.visualization.Table(document.getElementById('table') as HTMLElement);
            table.draw(formatData(props.NEOArray), { showRowNumber: true, width: '100%', height: '100%' });
        }
    }

    /**
        * Format data before passing it to google charts.
    */
    const formatData = (NEOArray: Array<NEO>): google.visualization.DataTable => {
        const table = new google.visualization.DataTable();
        table.addColumn('string', 'Name');
        table.addColumn('number', 'Min Estimated Diameter (km)');
        table.addColumn('number', 'Max Estimated Diameter (km)');
        table.addColumn('number', 'Avg Estimated Diameter (km)');
        table.addColumn('string', 'Orbiting Body');
        const neoData = NEOArray.map((object: NEO) => [object.name, object.minDiameter, object.maxDiameter, object.avgDiameter, object.orbitingBody]);
        table.addRows(neoData);
        return table;
    }

    return (
        <div className='table' id='table'></div>
    );
}

export default Table;
