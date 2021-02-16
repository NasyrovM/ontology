import { List, Menu } from "antd";
import { observer } from "mobx-react";
import React, {useContext, useEffect} from "react";
import {RootStoreContext} from "../../../shared/stores/rootStore";

const UnitList: React.FC = () =>
{
    const rootStore = useContext(RootStoreContext);
    const { nsStore } = rootStore;
    const { UnitList, loadNs, loading} = nsStore;

    useEffect(() => {
        loadNs()
    }, [loadNs]);

   if(loading) return (<h5>Loading...</h5>)

    return <>
        <Menu>
            {UnitList.map((unit, i) => {
                    return <Menu.Item key={unit.unitId}>{unit.unitName}</Menu.Item>;
            })}
        </Menu>
    </>;
};

export default observer(UnitList)