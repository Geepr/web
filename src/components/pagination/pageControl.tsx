import React, {Dispatch} from "react";

export class PageControlData {
    public Page : number = 1;
    public TotalPages : number = 0;
    public SetPage : Function = null!;

    constructor(page : number, totalPages : number, setPage : Dispatch<React.SetStateAction<number>>) {
        this.Page = page;
        this.TotalPages = totalPages;
        this.SetPage = setPage;
    }
}

export function PageControl(props : Readonly<PageControlData>) {
    return (
    <nav aria-label='Page navigation'>
        <ul className='pagination'>
            {props.Page > 1 && <li className='page-item'><button className='page-link' onClick={() => props.SetPage(props.Page - 1)}>Previous</button></li>}
            {props.Page > 1 && <li className='page-item'><button className='page-link' onClick={() => props.SetPage(1)}>1</button></li>}
            {props.Page > 2 && <li className='page-item'><button disabled className='page-link'>&hellip;</button></li> }
            <li className='page-item active' aria-current='page'>
                <button className='page-link'>{props.Page}</button>
            </li>
            {props.Page < props.TotalPages - 1 && <li className='page-item'><button disabled className='page-link'>&hellip;</button></li> }
            {props.Page !== props.TotalPages && <li className="page-item"><button className="page-link" onClick={() => props.SetPage(props.TotalPages)}>{props.TotalPages}</button></li>}
            {props.Page !== props.TotalPages && <li className="page-item"><button className="page-link" onClick={() => props.SetPage(props.Page + 1)}>Next</button></li>}
        </ul>
    </nav>
    );
}
