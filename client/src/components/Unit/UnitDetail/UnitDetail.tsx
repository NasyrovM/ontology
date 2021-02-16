import {Button, Form, Input } from "antd";
import { observer } from "mobx-react";
import React, {useContext, useEffect} from "react";
import {RootStoreContext} from "../../../shared/stores/rootStore";

const UnitDetail: React.FC = () => {

    const rootStore = useContext(RootStoreContext);
    const { nsStore } = rootStore;
    const { addUnit} = nsStore;


    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 8,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 4,
            span: 8,
        },
    };

    return (
        <>
            <Form
                {...layout}
                onFinish={addUnit}
            >
                <Form.Item
                    label="Unit name"
                    name = "unitName"
                    rules={[{
                        required: true,
                        message: "Please input unit name"
                    },]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="Unit description"
                    name = "unitDescription"
                >
                    <Input/>
                </Form.Item>
                <Form.Item {...tailLayout} >
                    <Button type="primary" htmlType="submit">
                        Add Unit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default observer(UnitDetail)