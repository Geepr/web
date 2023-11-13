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

export function PageControl(data : Readonly<PageControlData>) {
    return (
    <nav aria-label='Page navigation'>
        <ul className='pagination'>
            {data.Page > 1 && <li className='page-item'><button className='page-link' onClick={() => data.SetPage(data.Page - 1)}>Previous</button></li>}
            {data.Page > 1 && <li className='page-item'><button className='page-link' onClick={() => data.SetPage(1)}>1</button></li>}
            {data.Page > 2 && <li className='page-item'><button disabled className='page-link'>&hellip;</button></li> }
            <li className='page-item active' aria-current='page'>
                <button className='page-link'>{data.Page}</button>
            </li>
            {data.Page < data.TotalPages - 1 && <li className='page-item'><button disabled className='page-link'>&hellip;</button></li> }
            {data.Page !== data.TotalPages && <li className="page-item"><button className="page-link" onClick={() => data.SetPage(data.TotalPages)}>{data.TotalPages}</button></li>}
            {data.Page !== data.TotalPages && <li className="page-item"><button className="page-link" onClick={() => data.SetPage(data.Page + 1)}>Next</button></li>}
        </ul>
    </nav>
    );
}
