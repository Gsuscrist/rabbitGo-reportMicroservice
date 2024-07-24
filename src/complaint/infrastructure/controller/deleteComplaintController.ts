import {Request, Response} from 'express';
import {DeleteComplaintUseCase} from "../../application/useCase/deleteComplaintUseCase";

export class DeleteComplaintController {
    constructor(readonly useCase:DeleteComplaintUseCase) {
    }

    async execute(req:Request, res:Response){
        try {
            let id = req.params.id;
            await this.useCase.run(id)
            return res.status(204).json({
                status:"Success",
                data:[],
                message:"Complaints deleted successfully",
            })
        }catch(err){
            res.status(500).send({
                status:"error",
                error:err
            })
        }
    }
}