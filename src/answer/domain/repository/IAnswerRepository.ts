import {Answer} from "../entity/answer";

export interface IAnswerRepository {

    create(
        complaintId:string,
        answer:string,
    ):Promise<void>
    delete(id:string):Promise<void>

    getAll():Promise<Answer[]|null>
    getByComplaintId(complaintId:string):Promise<Answer|null>
    getById(id:string):Promise<Answer|null>

    update(
        id:string,
        complaintId:string,
        answer:string,
    ):Promise<Answer|null>

}