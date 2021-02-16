import {Button, Col, Form, Input, Row } from "antd";
import { observer } from "mobx-react";
import React, {useContext, useEffect} from "react";
import {RootStoreContext} from "../../../shared/stores/rootStore";
import {IUnit} from "../../../app/models/Unit/IUnit";

interface UnitDetailProps {
    unit: IUnit|null,
}

const UnitDetail: React.FC<UnitDetailProps> = (props) => {

    const rootStore = useContext(RootStoreContext);
    const { nsStore } = rootStore;
    const { addUnit} = nsStore;

    return (
        <>
            <Row>
                <Col span={4}>Unit Name</Col>
                <Col span={8}><Input value={props.unit?.unitName}/></Col>
            </Row>
            <Row>
                <Col span={4}>Unit Description</Col>
                <Col span={8}><Input value={props.unit?.unitDescription} aria-multiline={"true"}/></Col>
            </Row>
        </>
    )
}

export default observer(UnitDetail)