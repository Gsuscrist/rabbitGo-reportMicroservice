import {Request, Response} from 'express';
import {UpdateComplaintUseCase} from "../../application/useCase/updateComplaintUseCase";

export class UpdateComplaintController {
    constructor(readonly useCase:UpdateComplaintUseCase) {
    }

    async execute(req:Request, res:Response) {
        try {
            let id = req.params.id;
            let {type,complaint,score,start,categories} = req.body
            const complaints = await this.useCase.run(id,type,complaint,score,start,categories)
            if (complaints) {
                return res.status(200).send({
                    status:"Success",
                    data:complaints,
                    message:"Complaint successfully update",
                })
            }else{
                return res.status(417).send({
                    status:"Error",
                    data:[],
                    message:"Complaint(s) not found",
                })
            }
        }catch (e){
            return res.status(500).send({
                status:"Error",
                error:e
            })
        }
    }
}