import React from "react";
import {observer} from "mobx-react";
import './CreateUnit.scss';
import { Button } from "antd";

interface CreateUnitProps {
    unitName: string;
    onUnitCreate:(unitName: string)=>void
}

const CreateUnit: React.FC<CreateUnitProps> = (props:CreateUnitProps) =>
{
    const IsVisible:Boolean = props.unitName.length > 0;

    const onCreateButtonClick = () =>
        props.onUnitCreate(props.unitName)

    if(IsVisible){ return (
      <>
          <Button type="primary" className="create-unit-box" onClick={onCreateButtonClick}>create element '{props.unitName}'</Button>
      </>
    )} else return (<></>);

}

export default observer(CreateUnit)