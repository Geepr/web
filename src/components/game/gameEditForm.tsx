import React, {useState} from "react";
import {Game} from "../../models/game";
import GameEditDto from "../../models/gameEditDto";
import {submitGameEdit} from "../../clients/gameClient";

class GameEditFormData {
    public game : Game;

    public constructor(game : Game) {
        this.game = game;
    }
}

export default function GameEditForm(gameData : Readonly<GameEditFormData>) {
    const [formData, setFormData] = useState(new GameEditDto(gameData.game));
    const [submitSuccess, setSubmitSuccess] = useState<boolean | undefined>();
    const [submitInProgress, setSubmitInProgress] = useState(false);

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        setSubmitSuccess(undefined);
        setSubmitInProgress(true);
        try {
            setSubmitSuccess(await submitGameEdit(gameData.game.id, formData));
        }
        finally {
            setSubmitInProgress(false);
        }
    }
    function handleInputChange (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }
    function handleArchivedClick() {
        setFormData(prevState => ({...prevState, archived: !prevState.archived}));
    }

    return <div className='row'>
        {submitSuccess === false && <div className='col-12 mb-3 border border-danger'>Saving game failed, please try again...</div>}
        {submitSuccess === true && <div className='col-12 mb-3 border border-success'>Changes saved!</div> }
        <div className='col-12'>
            <form onSubmit={handleSubmit}>
                <div className='row mb-2'>
                    <div className='col-12 col-sm-2 my-auto'>
                        <label htmlFor='title'>Title</label>
                    </div>
                    <div className='col-12 col-sm-10'>
                        <input type='text' maxLength={200} required={true} className='form-control' id='title' name='title' value={formData?.title} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col-12 col-sm-2 my-auto'>
                        <label htmlFor='description'>Description</label>
                    </div>
                    <div className='col-12 col-sm-10'>
                        <textarea className='form-control' maxLength={2000} rows={5} id='description' name='description' value={formData?.description} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='row mb-2 form-check'>
                    <div className='col offset-sm-2'>
                        <input className='form-check-input' type='checkbox' id='archived' name='archived' checked={formData.archived} onChange={handleArchivedClick} value='true'/>
                        <label className='form-check-label' htmlFor='archived'>Archived</label>
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
