import {Request, Response} from 'express';
import {GetAllComplaintUseCase} from "../../application/useCase/getAllComplaintUseCase";

export class GetAllComplaintController {
    constructor(readonly useCase:GetAllComplaintUseCase) {
    }

    async execute(req:Request, res:Response) {
        try {
            const complaints = await this.useCase.run()
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
                error: e
            })
        }
    }
}