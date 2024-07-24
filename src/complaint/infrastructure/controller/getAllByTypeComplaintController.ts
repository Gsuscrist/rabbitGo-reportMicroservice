import { Request, Response } from 'express';
import {GetAllByTypeComplaintUseCase} from "../../application/useCase/getAllByTypeComplaintUseCase";

export class GetAllByTypeComplaintController {
    constructor(readonly useCase:GetAllByTypeComplaintUseCase) {
    }

    async execute(req:Request, res:Response) {
        try {
            let type = req.params.type;
            const complaints = await this.useCase.run(type)
            if (complaints) {
                return res.status(200).send({
                    status:"Success",
                    data:complaints,
                    message:"Complaint successfully retrieve",
                })
            }
            return res.status(417).send({
                status:"Error",
                data:[],
                message:"Complaint(s) not found",
            })
        }catch (e){
            return res.status(500).send({
                status:"error",
                error: e
            })
        }
    }
}