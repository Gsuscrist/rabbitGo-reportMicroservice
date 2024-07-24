import {IAnswerRepository} from "../../domain/repository/IAnswerRepository";

export class GetByComplaintIdAnswerUseCase{
    constructor(readonly repository:IAnswerRepository) {
    }

    async run(complaintId:string){
        try {
            return await this.repository.getByComplaintId(complaintId);
        }catch(err){
            console.log("error: ",err)
            throw new Error("Error during executing GetByComplaintIdAnswerUseCase");
        }
    }
}