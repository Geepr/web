import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import GameCreateDto from "../../models/gameCreateDto";
import {createGame} from "../../clients/gameClient";

export default function GameCreator() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(new GameCreateDto());
    const [submitInProgress, setSubmitInProgress] = useState(false);

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        setSubmitInProgress(true)
        try {
            const result = await createGame(formData);
            if (!result.success)
                alert('Something went wrong, please try again.');
            else
                navigate(`/games/${result.id}`);
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
                        <label htmlFor='title'>Title</label>
                    </div>
                    <div className='col-12 col-sm-10'>
                        <input type='text' maxLength={200} required={true} placeholder='Title of your new game...' className='form-control' id='title' name='title' value={formData?.title} onChange={handleInputChange}/>
                    </div>
                </div>
                <div className='row mb-2'>
                    <div className='col-12 col-sm-2 my-auto'>
                        <label htmlFor='description'>Description</label>
                    </div>
                    <div className='col-12 col-sm-10'>
                        <textarea className='form-control' maxLength={2000} rows={5} id='description' placeholder="A brief description to say what it's about..." name='description' value={formData?.description} onChange={handleInputChange}/>
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
