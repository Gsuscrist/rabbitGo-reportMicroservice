import {Request, Response} from 'express'
import {DeleteAnswerUseCase} from "../../application/useCase/deleteAnswerUseCase";

export class DeleteAnswerController {
    constructor(readonly useCase:DeleteAnswerUseCase) {
    }

    async execute(req:Request, res:Response){
        try {
            let id = req.params.id;
            await this.useCase.run(id);
            return res.status(204).send({
                status:"Success",
                data:[],
                message:"Answer deleted successfully",
            })
        }catch(err){
            console.log("error: ",err)
            return res.status(500).send({
                status:"error",
                error:err
            })
        }
    }
}