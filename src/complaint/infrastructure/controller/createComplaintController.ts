import {Request, Response} from 'express';
import {CreateComplaintUseCase} from "../../application/useCase/createComplaintUseCase";

export class CreateComplaintController {
    constructor(readonly useCase:CreateComplaintUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            let {userId,type,complaint,shuttleId, score,stars,categories} = req.body
            await this.useCase.run(userId,type,complaint,score,stars,categories,shuttleId);

            return res.status(201).json({
                status:"Success",
                data:[],
                message:"Complaint successfully created",
            })

        }catch (e){
            return res.status(500).send({
                status: "Error",
                error: e
            });
        }
    }
}