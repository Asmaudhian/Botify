import { useEffect } from 'react';
import { NEO } from '../../shared/classes/NEO';
import useGoogleCharts from '../../shared/hooks/useGoogleCharts';
import './barChart.css'

interface chartProps {
    NEOArray: Array<NEO>;
}

const BarChart = (props: chartProps) => {
    const google = useGoogleCharts();
    useEffect(() => {
        if (google) {
            drawGraph();
        }
    }, [google, props]);

    /**
        * Draw the BarChart on the screen.
    */
    const drawGraph = () => {
        if (google) {
            const data = google.visualization.arrayToDataTable(formatData(props.NEOArray));
            const materialOptions = {
                chart: {
                    title: 'Near Earth Objects',
                    subtitle: "Based on NASA's API"
                },
                hAxis: {
                    title: 'Min/Max Estimated Diameter (km)',
                    minValue: 0,
                },
                vAxis: {
                    title: 'NEO Name'
                },
                bars: 'horizontal',
                axes: {
                    y: {
                        0: { side: 'right' }
                    }
                },
                height: 600
            };
            const materialChart = new google.visualization.BarChart(document.getElementById('barChart') as HTMLElement);
            materialChart.draw(data, materialOptions);
        }
    }

    /**
        * Format data before passing it to google charts.
    */
    const formatData = (NEOArray: Array<NEO>): Array<any> => {
        const headers = ['NEO Name', 'Min Estimated Diameter (km)', 'Max Estimated Diameter (km)'];
        const neoData = NEOArray.map((object: NEO) => [object.name, object.minDiameter, object.maxDiameter]);
        return [headers, ...neoData];
    }

    return (
        <div className='chart' id='barChart'></div>
    );
}

export default BarChart;
