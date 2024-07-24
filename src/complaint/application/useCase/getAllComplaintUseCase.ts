import {IComplaintRepository} from "../../domain/repository/IComplaintRepository";

export class GetAllComplaintUseCase{
    constructor(readonly repository:IComplaintRepository) {
    }

    async run(){
        try {
            return await this.repository.getAll()
        }catch(error){
            console.log("error:\n",error)
            throw new Error("Error during execution GetAllComplaintUseCase")
        }
    }
}