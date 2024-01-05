import React, {ReactElement, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";

export class CreatorChildData<FormData> {
    public formData : FormData = undefined!;
    public handleInputChange : (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void = undefined!;
}

class creatorData<FormData> {
    public initialData : FormData = undefined!;
    public submit : (data : FormData) => Promise<{success : boolean,  id : any | undefined}> = undefined!;
    public onSuccess : ((id : any | undefined) => void) = undefined!;
    public renderFormBody : (data : Readonly<CreatorChildData<FormData>>) => ReactElement = undefined!;
}

export default function Creator<FormData>(data : Readonly<creatorData<FormData>>) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(data.initialData);
    const [submitInProgress, setSubmitInProgress] = useState(false);

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        setSubmitInProgress(true)
        try {
            const result = await data.submit(formData);
            if (!result.success)
                alert('Something went wrong, please try again.');
            else
                data.onSuccess(result.id);
        }
        catch {
            alert('Something went wrong, please try again.');
        }
        finally {
            setSubmitInProgress(false);
        }
    }
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    return <>
        <div className='row mb-4'>
            <div className='col-12 col-sm-1 d-flex'>
                <button className='btn btn-dark d-flex flex-fill' onClick={() => navigate(-1)}><FontAwesomeIcon className='d-flex flex-fill' icon={faAngleLeft}/></button>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={'row'}>
                {data.renderFormBody({formData, handleInputChange})}
                <div className='row'>
                    <div className='d-flex col-12 col-sm-2 offset-sm-10'>
                        <input className='btn btn-primary flex-fill' type='submit' disabled={submitInProgress} value='Save'/>
                    </div>
                </div>
            </div>
        </form>
    </>
}
