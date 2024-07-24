import {IAnswerRepository} from "../../domain/repository/IAnswerRepository";

export class GetByIdAnswerUseCase{
    constructor(readonly repository:IAnswerRepository) {
    }

    async run(id:string){
        try {
            return await this.repository.getById(id)
        }catch(err){
            console.log("error: ",err)
            throw new Error("Error during executing GetByIdAnswerUseCase");
        }
    }
}