import {Button, Form, Input, List } from "antd";
import { observer } from "mobx-react";
import React, {useContext, useEffect} from "react";
import {RootStoreContext} from "../../../shared/stores/rootStore";

const UnitSearch: React.FC = () => {

    const rootStore = useContext(RootStoreContext);
    const { nsStore } = rootStore;

    return (
        <>
            <Input/>
        </>
    )
}

export default observer(UnitSearch)