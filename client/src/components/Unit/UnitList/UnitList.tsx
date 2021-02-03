import {Button, Form, Input, List } from "antd";
import { observer } from "mobx-react";
import React, {useContext, useEffect} from "react";
import {RootStoreContext} from "../../../shared/stores/rootStore";
import {render} from "react-dom";

const UnitList: React.FC = () =>
{
    const rootStore = useContext(RootStoreContext);
    const { nsStore } = rootStore;
    const { UnitList, loadNs, loading, addUnit, nsUnitMap } = nsStore;

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

    useEffect(() => {
        loadNs()
    }, [loadNs]);

   if(loading) return (<h5>Loading...</h5>)

    return (
        <>
            <List
                size="small"
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                dataSource={UnitList}
                renderItem={item=>(
                    <List.Item key={item.unitId}>
                        {item.unitName}
                    </List.Item>
                )}
            />
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
    );
};

export default observer(UnitList)