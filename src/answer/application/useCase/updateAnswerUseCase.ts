import {IAnswerRepository} from "../../domain/repository/IAnswerRepository";

export class UpdateAnswerUseCase {
    constructor(readonly repository:IAnswerRepository) {
    }
    async run(
        id: string,
        complaintId:string,
        answer:string
    ){
        try {
            return await this.repository.update(id,complaintId,answer);
        }catch(error){
            console.log("error: ",error)
            throw new Error("Error during execution UpdateComplaintUseCase")
        }
    }

}