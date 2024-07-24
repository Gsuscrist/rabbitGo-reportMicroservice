import {IAnswerRepository} from "../../domain/repository/IAnswerRepository";

export class DeleteAnswerUseCase{
    constructor(readonly repository:IAnswerRepository) {
    }

    async run(id:string){
        try {
            await this.repository.delete(id);
        }catch(err){
            console.log("error: ",err)
            throw new Error("Error during executing DeleteAnswerUseCase");
        }
    }
}