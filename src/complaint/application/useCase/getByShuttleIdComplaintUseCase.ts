import {IComplaintRepository} from "../../domain/repository/IComplaintRepository";

export class GetByShuttleIdComplaintUseCase {
    constructor(readonly repository:IComplaintRepository) {
    }

    async run(shuttleId:string){
        try {
            return await this.repository.getByShuttleId(shuttleId);
        }catch(err){
            console.log(err)
            throw new Error("Error during execution GetByIdComplaintUseCase");
        }
    }
}