import {Request, Response} from 'express';
import {GetByShuttleIdComplaintUseCase} from "../../application/useCase/getByShuttleIdComplaintUseCase";

export class GetByShuttleIdComplaintController {
    constructor(readonly useCase:GetByShuttleIdComplaintUseCase) {
    }

    async execute(req:Request, res:Response) {
        try {
            let shuttleId = req.params.shuttleId;
            const complaints= await this.useCase.run(shuttleId)
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
            console.log("error: ",e)
            res.status(500).send({
                status:"Error",
                error: e
            })
        }
    }
}