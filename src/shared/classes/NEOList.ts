import { NEO } from "./NEO";

interface apiResponse {
    links: Object;
    near_earth_objects: Array<NEO>;
    page: Object;
}

export class NEOList {

    public objects: Array<NEO>
    constructor(objects: Array<NEO>){
        this.objects = objects
    }

    public async refreshNEO() {
        const apiData = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY');
        const readableData: apiResponse = await apiData.json();
        this.objects = readableData.near_earth_objects;
    }
}