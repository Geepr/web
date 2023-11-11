import {useGamesFetch} from "../../clients/gameClient";
import {GameList} from "./gameList";
import {useState} from "react";

export function GameListDisplayer() {
    const [page, setPage] = useState(1)
    const {games, loading, hasPrevPage, hasNextPage, totalPages} = useGamesFetch(page);
    
    if (loading) {
        return <div>Loading...</div>
    }
    //todo: most paging controls should be extracted someplace else
    return <>
        <GameList games={games}/>
        <nav aria-label='Page navigation'>
            <ul className='pagination'>
                {hasPrevPage && <li className='page-item'><button className='page-link' onClick={() => setPage(page - 1)}>Previous</button></li>}
                {page > 1 && <li className='page-item'><button className='page-link'>1</button></li>}
                {page > 2 && <li className='page-item'><button disabled className='page-link'>&hellip;</button></li> }
                <li className='page-item active' aria-current='page'>
                    <button className='page-link'>{page}</button>
                </li>
                {page < totalPages - 1 && <li className='page-item'><button disabled className='page-link'>&hellip;</button></li> }
                {page !== totalPages && <li className="page-item"><button className="page-link">{totalPages}</button></li>}
                {hasNextPage && <li className="page-item"><button className="page-link" onClick={() => setPage(page + 1)}>Next</button></li>}
            </ul>
        </nav>
    </>;
}
