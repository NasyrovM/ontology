import {Button, Form, Input } from "antd";
import { observer } from "mobx-react";
import React from "react";
import {IUnit} from "../../../app/models/Unit/IUnit";
import "./UnitDetail.scss";

const { TextArea } = Input;

interface UnitDetailProps {
    unit: IUnit|undefined,
    onUnitChange: (unit:IUnit) => void
}

const UnitDetail: React.FC<UnitDetailProps> = (props) => {

    const onNameChange = (name:string) => {
        const oldUnit:IUnit = (props.unit as IUnit);
        const newUnit:IUnit = {...oldUnit, unitName: name};
        props.onUnitChange(newUnit)
    }

    return (
        <>
            <Form
                labelCol={{span:4}}
                wrapperCol={{span:14}}
                layout="horizontal"
            >
                <Form.Item label="Name">
                    <Input value={props.unit?.unitName} onChange={(event)=>onNameChange(event.target.value)}/>
                </Form.Item>
                <Form.Item label="Description">
                    <TextArea value={props.unit?.unitDescription} aria-multiline={"true"}
                           autoSize={{ minRows: 3, maxRows: 5 }}/>
                </Form.Item>
                <Form.Item wrapperCol= {{offset:4,span: 8}}>
                    <Button htmlType="button" type="primary" disabled={true}>Update</Button>
                    <Button htmlType="button">Delete</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default observer(UnitDetail)