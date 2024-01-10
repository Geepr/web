import React from "react";
import Platform from "../../models/platform";
import PlatformEditDto from "../../models/platformEditDto";
import {submitPlatformEdit} from "../../clients/platformClient";
import Form, {FormChildData} from "../utils/form";
import FormGroup from "../forms/formGroup";
import FormLabel from "../forms/formLabel";
import FormTextInput from "../forms/formTextInput";

class PlatformEditFormData {
    public platform : Platform;

    public constructor(platform : Platform) {
        this.platform = platform;
    }
}

function platformEditorFormControls({formData, handleInputChange} : Readonly<FormChildData<PlatformEditDto>>) {
    return <>
        <FormGroup>
            <FormLabel forId={'name'}>Name</FormLabel>
            <FormTextInput id={'name'} name={'name'} value={formData.name} onChange={handleInputChange} maxLength={200} required={true} placeholder={'Name of your new platform...'}/>
        </FormGroup>
        <FormGroup>
            <FormLabel forId={'shortName'}>Short name</FormLabel>
            <FormTextInput id={'shortName'} name={'shortName'} maxLength={10} required={true} placeholder={'Short name of your new platform...'} value={formData.shortName} onChange={handleInputChange}/>
        </FormGroup>
    </>
}

export default function PlatformEditForm(props : Readonly<PlatformEditFormData>) {
    return <Form<PlatformEditDto> initialData={new PlatformEditDto(props.platform)} submit={submitPlatformEdit} renderFormBody={platformEditorFormControls}/>
}
