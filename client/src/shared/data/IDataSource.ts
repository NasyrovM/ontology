import {IUnit} from "../../app/models/Unit/IUnit";

export interface IUnitEvent { (eventName:string, unitId:string):void }

export class EventToken {
    public objType: string = "";
    public callback: any;
}

export interface IDataSource {
    getUnits():Promise<IUnit[]>;
    addUnit(unit:IUnit):Promise<void>;
    delUnit(unit:IUnit):Promise<void>;
    subscribeUnitEvents(callback:IUnitEvent):Promise<EventToken>;
    unsubscribe(token:EventToken):Promise<void>;
}


