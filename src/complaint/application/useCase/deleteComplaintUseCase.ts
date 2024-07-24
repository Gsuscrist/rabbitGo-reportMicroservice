import {IComplaintRepository} from "../../domain/repository/IComplaintRepository";

export class DeleteComplaintUseCase{
    constructor(readonly repository:IComplaintRepository) {
    }

    async run(id:string){
        try {
            await this.repository.delete(id)
        }catch(err){
            console.log("error:\n",err)
            throw new Error("Error during execution DeleteComplaintController");
        }
    }
}