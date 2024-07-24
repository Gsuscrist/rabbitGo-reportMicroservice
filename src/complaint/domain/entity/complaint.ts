import {ValidatableEntity} from "../validation/validatableEntity";
import {Answer} from "@prisma/client";

export class Complaint implements ValidatableEntity{
    constructor(
        readonly id:string,
        readonly userId:string,
        readonly type:string,
        readonly complaint: string,
        readonly shuttleId:string | null,
        readonly score: number,
        readonly starts: number,
        readonly categories:[string],
        readonly deletedAt:Date | null,
        readonly creationDate:Date,
        readonly answer?:Answer|null,
    ) {
    }

    async validate() {
        return Promise.resolve();
    }
}