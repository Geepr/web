import React from "react";

class formTextAreaInputData {
    public id : string = "";
    public name : string = "";
    public value : string | undefined;
    public rows : number = 5;
    public maxLength? : number = 1000;
    public minLength? : number = 0;
    public required? : boolean = false;
    public placeholder? : string = "";
    public title? : string = "";
    public onChange : ((e : React.ChangeEvent<HTMLTextAreaElement>) => void) = (_) => {};
}

export default function FormTextAreaInput(props : Readonly<formTextAreaInputData>) {
    return <div className='col-12 col-sm-10'>
        <textarea className='form-control' rows={props.rows} maxLength={props.maxLength} minLength={props.minLength} required={props.required} placeholder={props.placeholder} id={props.id} name={props.name} value={props.value} onChange={props.onChange} title={props.title}/>
    </div>
}
