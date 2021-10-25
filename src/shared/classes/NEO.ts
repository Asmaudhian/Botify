export class NEO {
    
    public id: number;
    public name: string;
    public name_limited: string;
    public minDiameter: number;
    public maxDiameter: number;
    public avgDiameter: number;

    constructor(
        id: number,
        name: string,
        name_limited: string,
        minDiameter: number,
        maxDiameter: number,
    ){
        this.id = id;
        this.name = name;
        this.name_limited = name_limited;
        this.minDiameter = minDiameter;
        this.maxDiameter = maxDiameter;
        this.avgDiameter = (maxDiameter + minDiameter) / 2;
    }
}