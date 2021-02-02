import {RootStore} from "../rootStore";
import {action, computed, makeAutoObservable, makeObservable, observable, runInAction} from "mobx";
import {EventToken, IDataSource} from "../../data/IDataSource";
import {MemDataSource} from "../../data/memDataSource";
import { IUnit } from "../../../app/models/Unit/IUnit";

export class NsStore
{
    rootStore: RootStore;
    dataSource : IDataSource;
    unitEventToken : EventToken | undefined;


    constructor(rootStore : RootStore) {
        //makeAutoObservable(this);
        makeObservable(this);
        this.rootStore = rootStore
        this.dataSource = new MemDataSource()
        this.dataSource.subscribeUnitEvents(this.handleUnitEvent).then(token=> this.unitEventToken = token);
    }

    @observable nsUnitMap = new Map();
    @observable nsFuncMap = new Map();
    @observable nsRelMap = new Map();
    @observable loading = false

    @action loadNs = async () => {
        this.loading = true;
        try{
            await runInAction(async ()=>{
                const units = await this.dataSource.getUnits();
                console.log(units)
                units.forEach(unit=> this.nsUnitMap.set(unit.unitId, unit));
                this.loading = false;
                console.log(this.nsUnitMap);
            });
        }catch (error) {
            this.loading = false;
        }
    }

    @action handleUnitEvent = (eventName:string, unitId:string) => {
        console.log(`${eventName} ${unitId}`)
        switch (eventName) {
            case 'ADD':
                this.loadNs()
                break;
        }
    };

    @action addUnit = async (unit:IUnit) => {
        console.log(unit)
        await this.dataSource.addUnit(unit);
    }

    @computed get UnitList(){
        return Array.from(this.nsUnitMap.values());
    }
};