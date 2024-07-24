import {Complaint} from "../entity/complaint";

export interface IComplaintRepository {
    create(
        userId:string,
        type:string,
        complaint:string,
        score:number,
        stars:number,
        categories:[string],
        shuttleId?:string
    ):Promise<void>

    delete(id:string):Promise<void>

    getAllByType(type:string):Promise<Complaint[]|null>
    getAll():Promise<Complaint[]|null>
    getAllFrom(userId:string):Promise<Complaint[]|null>
    getByCategory(category:string):Promise<Complaint[]|null>
    getById(id:string):Promise<Complaint|null>
    getByShuttleId(shuttleId:string):Promise<Complaint[]|null>

    update(
        id:string,
        type:string,
        complaint:string,
        score:number,
        stars:number,
        categories:[string]
    ):Promise<Complaint|null>


}