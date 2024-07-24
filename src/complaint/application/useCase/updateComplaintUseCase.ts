import {IComplaintRepository} from "../../domain/repository/IComplaintRepository";

export class UpdateComplaintUseCase{
    constructor(readonly repository:IComplaintRepository) {
    }

    async run(
        id:string,
        type:string,
        complaint:string,
        score:number,
        stars:number,
        categories:[string]
    ){
        try {
            return await this.repository.update(id,type,complaint,score,stars,categories)
        }catch(err){
            console.log("error:\n",err)
            throw new Error("Error during execution UpdateComplaintUseCase");
        }
    }
}