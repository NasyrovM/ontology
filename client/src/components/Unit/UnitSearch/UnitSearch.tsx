import {Input} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { observer } from "mobx-react";
import {IUnitFilter} from "../../../app/models/Unit/IUnitFilter";

interface ISearchProps {
    filter: IUnitFilter|null,
    filterChanged: (filter: IUnitFilter) => void
}


const UnitSearch: React.FC<ISearchProps> = (props) => {

    const onChange = (inputStr: string) => {
        const newFilter:IUnitFilter = { ...props.filter, nameContent: inputStr};
        props.filterChanged(newFilter);
    }

    return (
        <>
            <Input addonAfter={<SearchOutlined/>}
                   value={props.filter?.nameContent}
                   onChange={(eventArgs)=>onChange(eventArgs.target.value)}
            />
        </>
    )
}

export default observer(UnitSearch)