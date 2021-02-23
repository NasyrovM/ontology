import {RootStore} from "../rootStore";
import {action, computed, makeObservable, observable} from "mobx";
import {EventToken, IDataSource} from "../../data/IDataSource";
import {MemDataSource} from "../../data/memDataSource";
import { IUnit } from "../../../app/models/Unit/IUnit";

export class NsStore
{
    rootStore: RootStore;
    dataSource : IDataSource;
    unitEventToken : EventToken | undefined;


    constructor(rootStore : RootStore) {
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
        console.log('loadNs');
        await this.setLoading(true);
        try{
            const units = await this.dataSource.getUnits();
            //console.log(units)
            await this.setNsUnitMap(units);
            //console.log(this.nsUnitMap);
        }catch (error) {
            await this.setLoading(false);
        }finally {
            await this.setLoading(false);
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
    @action setLoading = async (val:boolean) => {
        this.loading = val;
    }

    @action addUnit = async (unit:IUnit) => {
        console.log(unit)
        await this.dataSource.addUnit(unit);
    }

    @action updUnit = async (unit:IUnit) => {
        await this.dataSource.updUnit(unit);
    }

    @action setNsUnitMap = async (units:IUnit[]) => {
        units.forEach(unit=> this.nsUnitMap.set(unit.unitId, unit));
    }

    @computed get unitList(){
        return Array.from(this.nsUnitMap.values());
    }
};