import {IAnswerRepository} from "../../domain/repository/IAnswerRepository";

export class GetAllAnswerUseCase {
    constructor(readonly repository:IAnswerRepository) {
    }

    async run(){
        try {
            return await this.repository.getAll()
        }catch(err){
            console.log("error: ",err)
            throw new Error("Error during executing GetAllAnswerUseCase");
        }
    }
}