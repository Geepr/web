import React from "react";

class formTextInputData {
    public id : string = "";
    public name : string = "";
    public value : string | undefined;
    public maxLength? : number = 1000;
    public minLength? : number = 0;
    public required? : boolean = false;
    public placeholder? : string = "";
    public title? : string = "";
    public onChange : ((e : React.ChangeEvent<HTMLInputElement>) => void) = (_) => {};
}

export default function FormTextInput(props : Readonly<formTextInputData>) {
    return <div className='col-12 col-sm-10'>
        <input type='text' className='form-control' maxLength={props.maxLength} minLength={props.minLength} required={props.required} placeholder={props.placeholder} id={props.id} name={props.name} value={props.value} onChange={props.onChange} title={props.title}/>
    </div>
}
