import {Request, Response} from 'express';
import {GetByIdComplaintUseCase} from "../../application/useCase/getByIdComplaintUseCase";

export class GetByIdComplaintController {
    constructor(readonly useCase:GetByIdComplaintUseCase) {
    }

    async execute(req: Request, res: Response){
        try {
            let id = req.params.id;
            const complaint = await this.useCase.run(id)
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