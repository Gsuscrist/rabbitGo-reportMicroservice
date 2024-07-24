import {IComplaintRepository} from "../../domain/repository/IComplaintRepository";

export class GetByCategoryComplaintUseCase{
    constructor(readonly repository:IComplaintRepository) {
    }

    async run(category:string){
        try {
            return await this.repository.getByCategory(category);
        }catch(error){
            console.log(error)
            throw new Error("Error during execution GetByCategoryComplaintUseCase");
        }
    }
}