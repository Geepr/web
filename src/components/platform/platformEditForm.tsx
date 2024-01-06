import React, {useState} from "react";
import Platform from "../../models/platform";
import PlatformEditDto from "../../models/platformEditDto";
import {submitPlatformEdit} from "../../clients/platformClient";

class PlatformEditFormData {
    public platform : Platform;

    public constructor(platform : Platform) {
        this.platform = platform;
    }
}

export default function PlatformEditForm(props : Readonly<PlatformEditFormData>) {
    const [formData, setFormData] = useState(new PlatformEditDto(props.platform));
    const [submitSuccess, setSubmitSuccess] = useState<boolean | undefined>();
    const [submitInProgress, setSubmitInProgress] = useState(false);

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        setSubmitSuccess(undefined);
        setSubmitInProgress(true);
        try {
            setSubmitSuccess(await submitPlatformEdit(props.platform.id, formData));
        }
        finally {
            setSubmitInProgress(false);
        }
    }
    function handleInputChange (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    return <div className='row'>
        {submitSuccess === false && <div className='col-12 mb-3 border border-danger'>Saving platform failed, please try again...</div>}
        {submitSuccess === true && <div className='col-12 mb-3 border border-success'>Changes saved!</div> }
        <div className='col-12'>
            <form onSubmit={handleSubmit}>
                <div className='row mb-2'>
                    <div className='col-12 col-sm-2 my-auto'>
                        <label htmlFor='name'>Name</label>
                    </div>
                    <div className='col-12 col-sm-10'>
                        <input type='text' maxLength={200} required={true} placeholder='Name of your new platform...' className='form-control' id='name' name='name' value={formData?.name} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col-12 col-sm-2 my-auto'>
                        <label htmlFor='shortName'>Short name</label>
                    </div>
                    <div className='col-12 col-sm-10'>
                        <input type='text' maxLength={10} required={true} placeholder='Short name of your new platform...' className='form-control' id='shortName' name='shortName' value={formData?.shortName} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='d-flex col-12 col-sm-2 offset-sm-10'>
                        <input className='btn btn-primary flex-fill' type='submit' disabled={submitInProgress} value='Save'/>
                    </div>
                </div>
            </form>
        </div>
    </div>
}
