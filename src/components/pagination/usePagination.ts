import {useState} from "react";

export class PaginationData {
    public Page : number = 1;
    public TotalPages : number = 0;
    public PageSize : number = 0;

    constructor(page : number, totalPages : number, pageSize : number) {
        this.Page = page;
        this.TotalPages = totalPages;
        this.PageSize = pageSize
    }
}

export function usePagination() {
    const [paginationData, setPaginationData] = useState<PaginationData>(new PaginationData(0, 0, 0));
    const readPaginationDataFromJson = function (json : any) {
        setPaginationData(_ => {
            return new PaginationData(json.page, json.totalPages, json.pageSize);
        })
    }

    return {paginationData, readPaginationDataFromJson};
}
