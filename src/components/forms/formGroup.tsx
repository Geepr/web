import React, {ReactNode} from "react";

class formGroupData {
    public children : ReactNode;
}

export default function FormGroup(data : Readonly<formGroupData>) {
    return <div className={'row mb-2'}>
        {data.children}
    </div>
}
