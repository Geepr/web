import React from "react";
import Creator, {CreatorChildData} from "../utils/creator";
import PlatformCreateDto from "../../models/platformCreateDto";
import {createPlatform} from "../../clients/platformClient";
import {useNavigate} from "react-router-dom";
import FormGroup from "../forms/formGroup";
import FormLabel from "../forms/formLabel";
import FormTextInput from "../forms/formTextInput";

function platformCreatorFormControls(data : Readonly<CreatorChildData<PlatformCreateDto>>) {
    const {formData, handleInputChange} = data;

    return <>
        <FormGroup>
            <FormLabel forId={'name'}>Name</FormLabel>
            <FormTextInput id={'name'} name={'name'} maxLength={200} required={true} placeholder={'Name of your new platform'} value={formData?.name} onChange={handleInputChange}/>
        </FormGroup>
        <FormGroup>
            <FormLabel forId={'shortName'}>Short name</FormLabel>
            <FormTextInput id={'shortName'} name={'shortName'} maxLength={10} required={true} placeholder={'Short name of your new platform...'} value={formData?.shortName} onChange={handleInputChange}/>
        </FormGroup>
    </>
}

export default function PlatformCreator() {
    const navigate = useNavigate();
    return <Creator<PlatformCreateDto> initialData={new PlatformCreateDto()} submit={createPlatform} renderFormBody={platformCreatorFormControls} onSuccess={() => (navigate(-1))}/>
}
