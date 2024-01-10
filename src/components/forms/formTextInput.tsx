import React from "react";

class formTextInputData {
    public id : string = "";
    public name : string = "";
    public value : string = "";
    public maxLength? : number = 1000;
    public minLength? : number = 0;
    public required? : boolean = false;
    public placeholder? : string = "";
    public title? : string = "";
    public onChange : ((e : React.ChangeEvent<HTMLInputElement>) => void) = (_) => {};
}

export default function FormTextInput({ id, name, value, maxLength = 1000, minLength = 0, required = false, placeholder = "", title = "", onChange } : Readonly<formTextInputData>) {
    return <div className='col-12 col-sm-10'>
        <input type='text' className='form-control' maxLength={maxLength} minLength={minLength} required={required} placeholder={placeholder} id={id} name={name} value={value} onChange={onChange} title={title}/>
    </div>
}
