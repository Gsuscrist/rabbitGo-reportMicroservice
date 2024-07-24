import {IComplaintRepository} from "../../domain/repository/IComplaintRepository";

export class GetAllByTypeComplaintUseCase{
    constructor(readonly repository:IComplaintRepository) {
    }

    async run(type:string){
        try {
            return await this.repository.getAllByType(type);
        }catch(err){
            console.log("error:\n",err)
            throw new Error("Error during execution GetAllByTypeComplaintUseCase");
        }
    }
}