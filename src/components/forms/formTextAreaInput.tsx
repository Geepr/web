import React from "react";

class formTextAreaInputData {
    public id : string = undefined!;
    public name : string = undefined!;
    public value : string = undefined!;
    public rows : number = undefined!;
    public maxLength? : number;
    public minLength? : number;
    public required? : boolean;
    public placeholder? : string;
    public title? : string;
    public onChange : ((e : React.ChangeEvent<HTMLTextAreaElement>) => void) = undefined!;
}

export default function FormTextAreaInput({ id, name, value, rows = 5, maxLength = 1000, minLength = 0, required = false, placeholder = "", title = "", onChange } : Readonly<formTextAreaInputData>) {
    return <div className='col-12 col-sm-10'>
        <textarea className='form-control' rows={rows} maxLength={maxLength} minLength={minLength} required={required} placeholder={placeholder} id={id} name={name} value={value} onChange={onChange} title={title}/>
    </div>
}
