
export class Answer{
    constructor(
        readonly id:string,
        readonly complaintId:string,
        readonly answer:string,
        readonly deletedAt: Date | null
    ) {
    }
}