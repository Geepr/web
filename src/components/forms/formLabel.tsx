import React, {ReactNode} from "react";

class formLabelData {
    public forId : string;
    public children : ReactNode;

    constructor(forId : string, children : ReactNode) {
        this.forId = forId;
        this.children = children;
    }
}

export default function FormLabel(data : Readonly<formLabelData>) {
    return <div className='col-12 col-sm-2 my-auto'>
        <label htmlFor={data.forId}>{data.children}</label>
    </div>
}
