import { Menu } from "antd";
import { observer } from "mobx-react";
import React from "react";
import {IUnitFilter} from "../../../app/models/Unit/IUnitFilter";
import {IUnit} from "../../../app/models/Unit/IUnit";

interface UnitListProps {
    filter:IUnitFilter|null,
    unitList:IUnit[],
    loading:Boolean,
    onSelect:(unitId:string) => void
}

const UnitList: React.FC<UnitListProps> = (props:UnitListProps) =>
{
    const onItemSelect = (itemId:any) => {
        props.onSelect(itemId as string);
    }

   if(props.loading) return (<h5>Loading...</h5>)
    return <>
        <Menu onSelect={(args)=>onItemSelect(args.key)}>
            {props.unitList.filter((unit)=> {
                return unit.unitName.includes(props.filter?.nameContent??"");
            }).map((unit, i) => {
                    return <Menu.Item key={unit.unitId}>{unit.unitName}</Menu.Item>;
            })}
        </Menu>
    </>;
};

export default observer(UnitList)