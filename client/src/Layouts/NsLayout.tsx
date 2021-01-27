import React from "react";
import Props from "./Props";


const NsLayout : React.FC<Props> = ({children}) => (
    <div>
        <h1>Ns Layout</h1>
        <div>
            {children}
        </div>
    </div>
)

export default NsLayout