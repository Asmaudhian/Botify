import { NEO } from "./NEO";

interface apiResponse {
    links: Object;
    near_earth_objects: Array<NEO>;
    page: Object;
}

interface LocalData {
    objects: Array<NEO>;
    timestamp: number;
}

export class NEOList {

    public objects: Array<NEO>;
    constructor(objects: Array<NEO>) {
        this.objects = objects;
    }

    /**
     * Set / Reset data from NEO and set it in object
    */
    public async refreshNEO() {
        if (this.upToDateData()) {
            const localData: LocalData = this.getLocalData('NEO');
            this.objects = localData.objects;
        } else {
            const apiData = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY');
            const readableData: apiResponse = await apiData.json();
            this.objects = readableData.near_earth_objects;
            localStorage.setItem('NEO', JSON.stringify({ objects: this.objects, timestamp: new Date().getTime() / 1000 }));
        }
    }

    /**
        * Allow to refresh data if data is older than 24h.
    */
    private upToDateData(): boolean {
        if (!!localStorage.getItem('NEO')) {
            const localData: LocalData = this.getLocalData('NEO');
            return localData.timestamp - (new Date().getTime() / 1000) < 86400;
        } else {
            return false;
        }
    }

    /**
        * Get data from localstorage and return it formated as an Object.
    */
    private getLocalData(key: string): LocalData {
        return JSON.parse(localStorage.getItem(key) as string);
    }
}