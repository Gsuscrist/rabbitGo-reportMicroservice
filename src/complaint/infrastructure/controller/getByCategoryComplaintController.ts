import {Request, Response} from 'express';
import {GetByCategoryComplaintUseCase} from "../../application/useCase/getByCategoryComplaintUseCase";

export class GetByCategoryComplaintController {
    constructor(readonly useCase:GetByCategoryComplaintUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            let category = req.params.category;
            const complaint = await this.useCase.run(category)
            if (complaint) {
                return res.status(200).send({
                    status:"Success",
                    data:complaint,
                    message:"Complaint(s) successfully retrieve",
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
                message:e
            });
        }
    }
}