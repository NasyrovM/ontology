import React, {useContext, useEffect, useState} from "react";
import UnitList from "../../components/Unit/UnitList/UnitList";
import {Col, Row } from "antd";
import UnitSearch from "../../components/Unit/UnitSearch/UnitSearch";
import {IUnitFilter} from "../../app/models/Unit/IUnitFilter";
import UnitDetail from "../../components/Unit/UnitDetail/UnitDetail";
import {IUnit} from "../../app/models/Unit/IUnit";
import CreateUnit from "../../components/Unit/CreateUnit/CrateUnit";
import {RootStoreContext} from "../../shared/stores/rootStore";
import {observer} from "mobx-react";


const NsOverview : React.FC = () => {
    const [filter, setFilter] = useState<IUnitFilter|null>(null);
    const [unitId, setUnitId] = useState<string>();

    const rootStore = useContext(RootStoreContext);
    const { nsStore } = rootStore;
    const { unitList, loadNs, loading, addUnit, updUnit} = nsStore;

    useEffect(() => { },[]);

    const createUnit = (unitName:string) => {
        let unit:IUnit = {
            unitDescription: "",
            unitId: "",
            unitName: unitName
        }
        addUnit(unit);
        setFilter({...filter, nameContent: ""});
    }

    function updateUnit(unit: IUnit) {
        updUnit(unit);
    }

    return (
        <>
            <Row>
                <Col span={24}>
                    <h2>NsOverview</h2>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <UnitSearch filter={filter} filterChanged={(filter:IUnitFilter)=>setFilter(filter)}/>
                    <CreateUnit unitName={filter?.nameContent??""} onUnitCreate={(unitName) => createUnit(unitName)}/>
                    <UnitList
                        filter={filter}
                        onSelect={(unitId:string) => setUnitId(unitId) }
                        unitList={unitList}
                        loading={loading}
                    />
                </Col>
                <Col span={16}>
                    <UnitDetail
                        unitId={unitId}
                        key={unitId}
                        unitList={unitList}
                        onUnitChange={(unit)=> updateUnit(unit)}/>
                </Col>
            </Row>
        </>
    );
}

export default observer(NsOverview)