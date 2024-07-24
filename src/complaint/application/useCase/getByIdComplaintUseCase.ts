import {IComplaintRepository} from "../../domain/repository/IComplaintRepository";

export class GetByIdComplaintUseCase{
    constructor(readonly repository:IComplaintRepository) {
    }

    async run(id:string){
        try {
            return await this.repository.getById(id);
        }catch(err){
            console.log("error:\n",err)
            throw new Error("Error during execution GetByIdComplaintUseCase");
        }
    }
}