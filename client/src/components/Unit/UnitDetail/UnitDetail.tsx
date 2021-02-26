import {Button, Form, Input } from "antd";
import { observer } from "mobx-react";
import React, {useEffect, useState} from "react";
import {IUnit} from "../../../app/models/Unit/IUnit";
import "./UnitDetail.scss";

const { TextArea } = Input;

interface UnitDetailProps {
    unitList : IUnit[],
    unitId: string|undefined,
    onUnitChange: (unit:IUnit) => void,
}

const UnitDetail: React.FC<UnitDetailProps> = (props) => {
    const [unit, setUnit] = useState<IUnit|undefined>();
    const [isChanged, setIsChanged] = useState<boolean|undefined>(false);

    useEffect(() => {
        //mounting component with new props
        if(props.unitId==unit?.unitId){
            console.log('props unchanged')
        }else{
            console.log('props changed');
            let unitClone = props.unitList.find(item=>item.unitId == props.unitId);
            setUnit(unitClone);
            console.log(unit);
            return () => {
                //unmounting component
                console.log('Effect result')
                console.log(unit);
                setIsChanged(false);
            }
        }
    }, [unit, isChanged])

    function updateUnit(event: React.MouseEvent<HTMLElement>) {
        if(unit) props.onUnitChange(unit as IUnit);
        setUnit(undefined);
    }

    return (
        <>
            <Form
                labelCol={{span:4}}
                wrapperCol={{span:14}}
                layout="horizontal"
            >
                <Form.Item label="Name">
                    <Input value={unit?.unitName}
                            onChange={(event)=> {
                                setUnit({...unit as IUnit, unitName: event.target.value});
                                setIsChanged(true);
                            }}
                    />
                </Form.Item>
                <Form.Item label="Description">
                    <TextArea value={unit?.unitDescription} aria-multiline={"true"}
                              onChange={(event)=> {
                                  setUnit({...unit as IUnit, unitDescription: event.target.value});
                                  setIsChanged(true);
                              }}
                              autoSize={{ minRows: 3, maxRows: 5 }}/>
                </Form.Item>
                <Form.Item wrapperCol= {{offset:4,span: 8}}>
                    <Button htmlType="button" type="primary" disabled={!isChanged} onClick={event => updateUnit(event)}>Update</Button>
                    <Button htmlType="button">Delete</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default observer(UnitDetail)