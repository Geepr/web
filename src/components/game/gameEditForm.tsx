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

    async function handleSubmit(e : React.FormEvent) {
        e.preventDefault();
        await submitGameEdit(gameData.game.id, formData);
    }
    function handleInputChange (e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    }

    return <>
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' value={formData?.title} onChange={handleInputChange}/>
            <input type='hidden' name='archived' value='0'/>
            <input type='submit' value='Save'/>
        </form>
    </>
}
