import {Request, Response} from "express";
import {GetByComplaintIdAnswerUseCase} from "../../application/useCase/getByComplaintIdAnswerUseCase";

export class GetByComplaintIdAnswerController {
    constructor(readonly useCase:GetByComplaintIdAnswerUseCase) {
    }

    async execute(req:Request, res:Response) {
        try{
            let complaintId = req.params.complaintId;
            const answer = await this.useCase.run(complaintId);
            if (answer){
                return res.status(200).send({
                    status:"Success",
                    data:answer,
                    message:"Answer successfully obtained",
                })
            }
            return res.status(4117).send({
                status:"Error",
                data:[],
                message:"Answer not found",
            })
        }catch(err){
            console.log("Error: ",err)
            return res.status(500).send({
                status:"Error",
                error:err
            })
        }
    }
}