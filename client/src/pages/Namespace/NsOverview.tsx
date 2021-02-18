import React, { useState } from "react";
import Props from "../../layouts/Props";
import UnitList from "../../components/Unit/UnitList/UnitList";
import {Col, Row } from "antd";
import UnitSearch from "../../components/Unit/UnitSearch/UnitSearch";
import {IUnitFilter} from "../../app/models/Unit/IUnitFilter";
import UnitDetail from "../../components/Unit/UnitDetail/UnitDetail";
import {IUnit} from "../../app/models/Unit/IUnit";
import CreateUnit from "../../components/Unit/CreateUnit/CrateUnit";


const NsOverview : React.FC<Props> = () => {
    const [filter, setFilter] = useState<IUnitFilter|null>(null);
    const [unit, setUnit] = useState<IUnit|null>(null);

    return (
        <>
            <Row>
                <Col span={24}>
                    <h2>NsOverview</h2>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <UnitSearch filterChanged={(filter:IUnitFilter)=>setFilter(filter)}/>
                    <CreateUnit unitName={filter?.nameContent??""}/>
                    <UnitList filter={filter} onSelect={(unit:IUnit|null)=> {
                        setUnit(unit)
                    }}/>
                </Col>
                <Col span={16}>
                    <UnitDetail unit={unit}/>
                </Col>
            </Row>
        </>
    );
}

export default NsOverview