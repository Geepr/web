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

export function readPaginationDataFromJson (json : any) {
    return new PaginationData(json.page, json.totalPages, json.pageSize);
}
