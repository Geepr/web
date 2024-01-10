import React, {ReactElement, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";

export class FormChildData<FormData> {
    public formData : FormData = undefined!;
    public handleInputChange : (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void = undefined!;
}

class formData<FormData> {
    public initialData : FormData = undefined!;
    public submit : (data : FormData) => Promise<{success : boolean,  id : string | undefined}> = undefined!;
    public onSuccess? : ((id : string | undefined) => void) = undefined!;
    public onError? : () => void = undefined!;
    public renderFormBody : (data : Readonly<FormChildData<FormData>>) => ReactElement = undefined!;
}

export default function Form<FormData>(
    {
        initialData,
        submit,
        onSuccess = () => {},
        onError = () => {},
        renderFormBody
    } : Readonly<formData<FormData>>) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialData);
    const [submitInProgress, setSubmitInProgress] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState<boolean | undefined>();

    function failSubmit() {
        onError();
        setSubmitInProgress(false);
        setSubmitSuccess(false);
    }
    function completeSubmit(id: string | undefined) {
        onSuccess(id);
        setSubmitInProgress(false);
        setSubmitSuccess(true);
    }

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        setSubmitInProgress(true)
        setSubmitSuccess(undefined);
        try {
            const result = await submit(formData);
            if (!result.success)
                failSubmit();
            else
                completeSubmit(result.id);
        }
        catch {
            failSubmit()
        }
        finally {
            // this will most likely be called somewhere before, but call it here anyway to never leave the form in a weird state
            setSubmitInProgress(false);
        }
    }
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    return <>
        {submitSuccess === false && <div className='col-12 mb-3 border border-danger'>Saving failed, please try again...</div>}
        {submitSuccess === true && <div className='col-12 mb-3 border border-success'>Changes saved!</div> }
        <div className='row mb-4'>
            <div className='col-12 col-sm-1 d-flex'>
                <button className='btn btn-dark d-flex flex-fill' onClick={() => navigate(-1)}><FontAwesomeIcon className='d-flex flex-fill' icon={faAngleLeft}/></button>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <div className={'row'}>
                {renderFormBody({formData, handleInputChange})}
                <div className='row'>
                    <div className='d-flex col-12 col-sm-2 offset-sm-10'>
                        <input className='btn btn-primary flex-fill' type='submit' disabled={submitInProgress} value='Save'/>
                    </div>
                </div>
            </div>
        </form>
    </>
}
