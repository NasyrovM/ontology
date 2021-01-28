import React from "react";
import Props from "./Props";

const SimpleLayout : React.FC<Props> = ({children})  =>
    (
        <div>
            <h1>Simple layout</h1>
            {children}
        </div>
    )

export default SimpleLayout