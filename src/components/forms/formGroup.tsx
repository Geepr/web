import React, {ReactNode} from "react";

class formGroupData {
    public children : ReactNode;
}

export default function FormGroup(props : Readonly<formGroupData>) {
    return <div className={'row mb-2'}>
        {props.children}
    </div>
}
