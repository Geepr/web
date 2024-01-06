import React from "react";
import {useNavigate} from "react-router-dom";
import GameCreateDto from "../../models/gameCreateDto";
import {createGame} from "../../clients/gameClient";
import Creator, {CreatorChildData} from "../utils/creator";
import FormGroup from "../forms/formGroup";
import FormLabel from "../forms/formLabel";
import FormTextInput from "../forms/formTextInput";
import FormTextAreaInput from "../forms/formTextAreaInput";

function gameCreatorFormControls(props : Readonly<CreatorChildData<GameCreateDto>>) {
    const {formData, handleInputChange} = props;

    return <>
        <FormGroup>
            <FormLabel forId={'title'}>Title</FormLabel>
            <FormTextInput id={'title'} name={'title'} value={formData?.title} onChange={handleInputChange} maxLength={200} required={true} placeholder={'Title of your new game...'}/>
        </FormGroup>
        <FormGroup>
            <FormLabel forId={'description'}>Description</FormLabel>
            <FormTextAreaInput maxLength={2000} rows={5} id='description' placeholder="A brief description to say what it's about..." name='description' value={formData?.description} onChange={handleInputChange}/>
        </FormGroup>
    </>
}

export default function GameCreator() {
    const navigate = useNavigate();
    return <Creator<GameCreateDto> initialData={new GameCreateDto()} submit={createGame} onSuccess={(id : string) => (navigate(`/game/${id}`))} renderFormBody={gameCreatorFormControls}/>
}
