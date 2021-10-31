import { useEffect, useState } from "react";

declare global {
    interface Window {
        google: typeof google;
    }
}

/**
    * Download and apply google chart script to the app's head.
*/
function useGoogleCharts() {
    const [googleScript, setGoogle] = useState<typeof google>();

    useEffect(() => {
        if (!googleScript) {
            const head = document.head;
            let script = document.getElementById('googleChartsScript') as HTMLScriptElement;
            if (!script) {
                script = document.createElement('script');
                script.src = 'https://www.gstatic.com/charts/loader.js';
                script.id = 'googleChartsScript';
                script.onload = () => {
                    if (window.google && window.google.charts) {
                        window.google.charts.load('current', { 'packages': ['corechart'] });

                        window.google.charts.setOnLoadCallback(() => setGoogle(window.google))
                    }
                };
                head.appendChild(script);
            } else if (window.google && window.google.charts && window.google.visualization) {
                setGoogle(window.google);
            }
        }
        return () => {
            const script: HTMLScriptElement = document.getElementById('googleChartsScript') as HTMLScriptElement;
            if (script) {
                script.remove();
            }
        }
    }, [googleScript]);

    return googleScript;
}

export default useGoogleCharts;