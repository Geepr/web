import React from "react";
import Creator, {CreatorChildData} from "../utils/creator";
import PlatformCreateDto from "../../models/platformCreateDto";
import {createPlatform} from "../../clients/platformClient";
import {useNavigate} from "react-router-dom";

function platformCreatorFormControls(data : Readonly<CreatorChildData<PlatformCreateDto>>) {
    const {formData, handleInputChange} = data;

    return <>
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
    </>
}

export default function PlatformCreator() {
    const navigate = useNavigate();
    return <Creator<PlatformCreateDto> initialData={new PlatformCreateDto()} submit={createPlatform} renderFormBody={platformCreatorFormControls} onSuccess={() => (navigate(-1))}/>
}
