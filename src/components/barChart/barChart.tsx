import React, { useEffect, useState } from 'react';
import { NEO } from '../../shared/classes/NEO';
import useGoogleCharts from '../../shared/hooks/useGoogleCharts';

interface chartProps{
    NEOArray: Array<NEO>;
}

const BarChart = (props: chartProps) => {
    const google = useGoogleCharts();
    useEffect(() => {
        if (google) {
        }
    }, [google, props])

  return (
    <div id='barChart'></div>
  );
}

export default BarChart;
