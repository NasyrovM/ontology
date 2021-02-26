import {IDataSource, IUnitEvent, EventToken} from "./IDataSource";
import {IUnit} from "../../app/models/Unit/IUnit";


export class MemDataSource implements IDataSource {

    private units: IUnit[] = [];

    constructor() {
        this.InitUnits();
    }

    private InitUnits = () => {  this.units = [
        {unitId:'1', unitName:"one", unitDescription:"one description"},
        {unitId:'2', unitName:"two", unitDescription:"two description"},
        {unitId:'3', unitName:"three", unitDescription:"three description"},
        {unitId:'4', unitName:"four", unitDescription:"four description"},
        {unitId:'5', unitName:"five", unitDescription:"five desc"},
        {unitId:'6', unitName:"six", unitDescription:"six description"},
        {unitId:'7', unitName:"seven", unitDescription:"seven description"},
        {unitId:'8', unitName:"eight", unitDescription:"eight description"},
        ]};

    private tokens : EventToken[] = []
    private unitObjType = "UNIT"
    private unitCounter = 9

    async subscribeUnitEvents(callback: IUnitEvent): Promise<EventToken> {
        let token = new EventToken()
        token.objType = this.unitObjType
        token.callback = callback
        await this.tokens.push(token)
        return token
    }

    async unsubscribe(token: EventToken): Promise<void> {
        this.tokens = this.tokens.filter(tk=>tk !== token)
    }

    async addUnit(unit: IUnit): Promise<void> {
        console.log("mem data source addUnit");
        console.log(unit);
        this.unitCounter++;
        unit.unitId = `${this.unitCounter}`;
        this.units.push(unit);
        console.log(this.units);
        //ищем подписчиков на этот список
        let calls = this.tokens.filter(tk => tk.objType === this.unitObjType).map(tk=>tk.callback)
        //транслируем событие
        calls.forEach((call) => call('ADD', unit.unitId))
    }

    async delUnit(unit: IUnit): Promise<void> {
        this.units = this.units.filter(u=>u !== unit)

        let calls = this.tokens.filter(tk => tk.objType === this.unitObjType).map(tk=>tk.callback)
        calls.forEach((call) => call('DEL', unit.unitId))
    }

    async getUnits(): Promise<IUnit[]> {
        return this.units
    }

    updUnit(unit: IUnit): Promise<void> {
        console.log(unit);
        var itemIndex = this.units.findIndex(item=>item.unitId == unit.unitId);
        console.log(itemIndex);
        if(itemIndex!==-1){
            this.units.splice(itemIndex, 1, unit);
        }
        //ищем подписчиков на этот список
        let calls = this.tokens.filter(tk => tk.objType === this.unitObjType).map(tk=>tk.callback)
        //транслируем событие
        calls.forEach((call) => call('UPD', unit.unitId))
        console.log(this.units);
        return Promise.resolve(undefined);
    }
}