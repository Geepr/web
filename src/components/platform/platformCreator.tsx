import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import PlatformCreateDto from "../../models/platformCreateDto";
import {createPlatform} from "../../clients/platformClient";

export default function PlatformCreator() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(new PlatformCreateDto());
    const [submitInProgress, setSubmitInProgress] = useState(false);

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        setSubmitInProgress(true)
        try {
            const result = await createPlatform(formData);
            if (!result.success)
                alert('Something went wrong, please try again.');
            else
                navigate(-1);
        }
        catch {
            alert('Something went wrong, please try again.');
        }
        finally {
            setSubmitInProgress(false);
        }
    }
    function handleInputChange (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
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
            <div className='row'>
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
            </div>
        </form>
    </>
}
