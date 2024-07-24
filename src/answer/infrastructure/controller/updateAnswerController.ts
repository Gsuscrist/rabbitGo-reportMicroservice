import {Request, Response} from 'express';
import {UpdateAnswerUseCase} from "../../application/useCase/updateAnswerUseCase";

export class UpdateAnswerController {
    constructor(readonly useCase:UpdateAnswerUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            let id = req.params.id;
            let {complaintId,answer} = req.body;
            const updateAnswer = await this.useCase.run(id,complaintId,answer)
            if (updateAnswer) {
                return res.status(200).send({
                    status:"Success",
                    data:updateAnswer,
                    message:"Answer successfully updated",
                })
            }
            return res.status(417).send({
                status:"Error",
                data:[],
                message:"Answer not found",
            })
        }catch (e){
            return res.status(500).send({
                status:"Error",
                error: e
            })
        }
    }
}