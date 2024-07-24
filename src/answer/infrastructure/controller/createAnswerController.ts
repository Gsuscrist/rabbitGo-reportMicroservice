import {Request, Response} from 'express';
import {CreateAnswerUseCase} from "../../application/useCase/createAnswerUseCase";

export class CreateAnswerController {
    constructor(readonly useCase:CreateAnswerUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            let {complaintId,answer} = req.body;
            await this.useCase.run(complaintId,answer);
            return res.status(201).send({
                status:"Success",
                data:[],
                message:"Answer successfully created",
            })
        }catch (e){
            console.log("error: ",e)
            return res.status(500).send({
                status:"Error",
                error: e
            })
        }
    }
}