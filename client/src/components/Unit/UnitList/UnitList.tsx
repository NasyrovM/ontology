import { List, Menu } from "antd";
import { observer } from "mobx-react";
import React, {useContext, useEffect} from "react";
import {RootStoreContext} from "../../../shared/stores/rootStore";
import {IUnitFilter} from "../../../app/models/Unit/IUnitFilter";
import {IUnit} from "../../../app/models/Unit/IUnit";

interface UnitListProps {
    filter:IUnitFilter,
    onSelect:(unit:IUnit) => void
}

const UnitList: React.FC<UnitListProps> = (props:UnitListProps) =>
{
    const rootStore = useContext(RootStoreContext);
    const { nsStore } = rootStore;
    const { UnitList, loadNs, loading} = nsStore;

    useEffect(() => {
        loadNs()
    }, [loadNs]);

    const onItemSelect = (itemId:any) => {
        let item = UnitList.find((unit)=>unit.unitId==itemId);
        props.onSelect(item);
    }

   if(loading) return (<h5>Loading...</h5>)
    return <>
        <Menu onSelect={(args)=>onItemSelect(args.key)}>
            {UnitList.filter((unit)=> {
                return unit.unitName.includes(props.filter.nameContent);
            }).map((unit, i) => {
                    return <Menu.Item key={unit.unitId}>{unit.unitName}</Menu.Item>;
            })}
        </Menu>
    </>;
};

export default observer(UnitList)