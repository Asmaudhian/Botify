import { CloseApproachData } from "./CloseAppraochData";

export class CloseApproachDataList {

    public closeApproachDataList: Array<CloseApproachData>;

    constructor(closeApproachDataList: Array<CloseApproachData>){
        this.closeApproachDataList = closeApproachDataList;
    }

    /**
     * Return the closest (in date) orbiting body.
    */
    public getCurrentOrbit(): string {
        const currentYear: number = new Date().getFullYear();
        const closeApproachDataLength = this.closeApproachDataList.length;
        for (let index = 0; index < closeApproachDataLength; index++) {
            const closeApproach: CloseApproachData = this.closeApproachDataList[index];
            const closeApproachYear: number = new Date(closeApproach.close_approach_date_full).getFullYear();
            if (closeApproachYear > currentYear) {
                return this.closeApproachDataList[index - 1].orbiting_body;
            }
        }
        return 'Not found'; // Security in case no CloseApproachData would be fed to the class.
    }
}