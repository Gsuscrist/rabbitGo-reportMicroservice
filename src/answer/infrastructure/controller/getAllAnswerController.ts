import {Request, Response} from "express";
import {GetAllAnswerUseCase} from "../../application/useCase/getAllAnswerUseCase";

export class GetAllAnswerController {
    constructor(readonly useCase:GetAllAnswerUseCase) {
    }

    async execute(req: Request, res: Response) {
        try {
            const answers = await this.useCase.run()
            if (answers){
                return res.status(200).send({
                    status:"Success",
                    data: answers,
                    message:"Answers successfully obtained"
                })
            }
            return res.status(417).send({
                status:"Error",
                data:[],
                message:"Answers not found",
            })
        }catch (e){
            console.log("error: ",e)
            return res.status(500).send({
                status:"error",
                error: e
            })
        }
    }
}