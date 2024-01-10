import React, {ReactNode} from "react";

class formLabelData {
    public forId : string = undefined!;
    public children : ReactNode;
}

export default function FormLabel(props : Readonly<formLabelData>) {
    return <div className='col-12 col-sm-2 my-auto'>
        <label htmlFor={props.forId}>{props.children}</label>
    </div>
}
