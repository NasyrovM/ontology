import {IDataSource, IUnitEvent, EventToken} from "./IDataSource";
import {IUnit} from "../../app/models/Unit/IUnit";


export class MemDataSource implements IDataSource {
    private units : IUnit[] = [
        {unitId:'1', unitName:"one", unitDescription:"one description"},
        {unitId:'2', unitName:"two", unitDescription:"two description"},
        {unitId:'3', unitName:"three", unitDescription:"three description"},
        {unitId:'4', unitName:"four", unitDescription:"four description"},
        ];
    private tokens : EventToken[] = []
    private unitObjType = "UNIT"

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
        this.units.push(unit)
        let calls = this.tokens.filter(tk => tk.objType === this.unitObjType).map(tk=>tk.callback)
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
}