import React from "react";
import Props from "../../layouts/Props";
import UnitList from "../../components/Unit/UnitList/UnitList";
import {Col, Row } from "antd";
import UnitSearch from "../../components/Unit/UnitSearch/UnitSearch";


const NsOverview : React.FC<Props> = () => (
    <>
        <Row>
            <Col span={24}>
                <h2>NsOverview</h2>
            </Col>
        </Row>
        <Row>
            <Col span={8}>
                <UnitSearch/>
                <UnitList/>
            </Col>
            <Col span={16}>

            </Col>
        </Row>
    </>
)

export default NsOverview