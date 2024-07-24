import {IAnswerRepository} from "../../domain/repository/IAnswerRepository";

export class CreateAnswerUseCase {
    constructor(readonly repository:IAnswerRepository) {
    }
    async run(
        complaintId:string,
        answer:string
    ){
        try {
            await this.repository.create(complaintId,answer);
        }catch(error){
            console.log("error: ",error)
            throw new Error("Error during execution CreateComplaintUseCase")
        }
    }

}