import {IComplaintRepository} from "../../domain/repository/IComplaintRepository";

export class GetAllFromUserComplaintUseCase{
    constructor(readonly repository:IComplaintRepository) {
    }

    async run(userId:string){
        try {
            return await this.repository.getAllFrom(userId)
        }catch(err){
            console.log("error:\n",err)
            throw new Error("Error during execution GetAllFromUserComplaintUseCase");
        }
    }
}