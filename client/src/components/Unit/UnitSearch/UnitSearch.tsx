import {Input} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";
import React, {useState} from "react";
import {IUnitFilter} from "../../../app/models/Unit/IUnitFilter";

interface ISearchProps {
    filterChanged: (filter: IUnitFilter) => void
}


const UnitSearch: React.FC<ISearchProps> = (props) => {

    const [filter, setFilter] = useState({ nameContent:""});

    const onChange = (inputStr: string) => {
        const newFilter:IUnitFilter = {nameContent: inputStr};
        setFilter(newFilter);
        props.filterChanged(newFilter);
    }

    return (
        <>
            <Input addonAfter={<SearchOutlined/>} value={filter.nameContent} onChange={(eventArgs)=>onChange(eventArgs.target.value)}/>
        </>
    )
}

export default observer(UnitSearch)