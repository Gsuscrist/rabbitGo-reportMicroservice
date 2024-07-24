import { Request, Response } from 'express';
import {GetAllFromUserComplaintUseCase} from "../../application/useCase/getAllFromUserComplaintUseCase";

export class GetAllFromUserComplaintController {
    constructor(readonly useCase:GetAllFromUserComplaintUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            let userId = req.params.userId;
            const complaints = await this.useCase.run(userId)
            if (complaints) {
                return res.status(200).send({
                    status:"Success",
                    data:complaints,
                    message:"Complaint(s) successfully retrieve",
                })
            }
            return res.status(417).send({
                status:"Error",
                data:[],
                message:"Complaint(s) not found",
            })
        }catch (e){
            return res.status(500).send({
                status:"Error",
                error:e
            })
        }
    }
}