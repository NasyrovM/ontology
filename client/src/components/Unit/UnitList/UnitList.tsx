import { observer } from "mobx-react";
import React, {useContext, useEffect} from "react";
import {RootStoreContext} from "../../../shared/stores/rootStore";


const UnitList: React.FC = () =>
{
    const rootStore = useContext(RootStoreContext);
    const { nsStore } = rootStore;
    const { UnitList, loadNs } = nsStore;

    useEffect(() => {
        loadNs();
        }, [loadNs]);

    return (
        <>
            <h6>list start</h6>
            {UnitList.map( unit=>
                (<p>
                - {unit.unitName}
            </p>))}
            <h6>list end</h6>
        </>
    );
};

export default observer(UnitList)