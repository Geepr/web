import React from "react";
import {Game} from "../../models/game";
import GameEditDto from "../../models/gameEditDto";
import {submitGameEdit} from "../../clients/gameClient";
import Form, {FormChildData} from "../utils/form";
import FormGroup from "../forms/formGroup";
import FormLabel from "../forms/formLabel";
import FormTextInput from "../forms/formTextInput";
import FormTextAreaInput from "../forms/formTextAreaInput";

class GameEditFormData {
    public game : Game;

    public constructor(game : Game) {
        this.game = game;
    }
}

function gameEditFormControls({formData, handleInputChange} : Readonly<FormChildData<GameEditDto>>) {
    return <>
        <FormGroup>
            <FormLabel forId={'title'}>Title</FormLabel>
            <FormTextInput id={'title'} name={'title'} value={formData?.title} onChange={handleInputChange} maxLength={200} required={true} placeholder={'Title of your new game...'}/>
        </FormGroup>
        <FormGroup>
            <FormLabel forId={'description'}>Description</FormLabel>
            <FormTextAreaInput maxLength={2000} rows={5} id='description' placeholder="A brief description to say what it's about..." name='description' value={formData.description} onChange={handleInputChange}/>
        </FormGroup>
    </>
}

export default function GameEditForm(props : Readonly<GameEditFormData>) {
    return <Form<GameEditDto> initialData={new GameEditDto(props.game)} submit={submitGameEdit} renderFormBody={gameEditFormControls}/>
}
