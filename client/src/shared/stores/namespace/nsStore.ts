import {RootStore} from "../rootStore";
import {action, computed, observable, reaction} from "mobx";
import {IDataSource} from "../../data/IDataSource";
import {MemDataSource} from "../../data/memDataSource";

export class NsStore
{
    rootStore: RootStore
    dataSource : IDataSource

    constructor(rootStore : RootStore) {
        this.rootStore = rootStore
        this.dataSource = new MemDataSource()
    }

    @observable nsUnitMap = new Map();
    @observable nsFuncMap = new Map();
    @observable nsRelMap = new Map();
    @observable loading = false

    @action loadNs = async () => {
        this.loading = true;
        try{
            const units = await this.dataSource.getUnits();
            console.log(units)
            units.forEach(unit=> this.nsUnitMap.set(unit.unitId, unit));
            this.loading = false;
            console.log(this.nsUnitMap);
        }catch (error) {
            this.loading = false;
        }
    }

    @computed get UnitList(){
        return Array.from(this.nsUnitMap.values());
    }
};