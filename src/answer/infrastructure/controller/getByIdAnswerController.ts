import {Request, Response} from 'express';
import {GetByIdAnswerUseCase} from "../../application/useCase/getByIdAnswerUseCase";

export class GetByIdAnswerController {
    constructor(readonly useCase:GetByIdAnswerUseCase) {
    }

    async execute(req:Request, res:Response){
        try {
            let id = req.params.id;
            const answer = await this.useCase.run(id)
            if (answer){
                return res.status(200).send({
                    status:"Success",
                    data:answer,
                    message:"Answer successfully obtained",
                })
            }
            return res.status(417).send({
                status:"Error",
                data:[],
                message:"Answer not found",
            })
        }catch (e){
            console.log("Error:",e)
            return res.status(500).send({
                status:"Error",
                error: e
            })
        }
    }
}