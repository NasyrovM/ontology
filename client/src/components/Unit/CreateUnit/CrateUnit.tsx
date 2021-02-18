import React from "react";
import {observer} from "mobx-react";

interface CreateUnitProps {
    unitName: string;
}

const CreateUnit: React.FC<CreateUnitProps> = (props:CreateUnitProps) => {
    return (
      <>
          {props.unitName}
      </>
    );
}

export default observer(CreateUnit)