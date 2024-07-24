import {IComplaintRepository} from "../../domain/repository/IComplaintRepository";
import {VerifyShuttleProducer} from "../../infrastructure/brocker/producer/verifyShuttleProducer";
import {VerifyUserProducer} from "../../infrastructure/brocker/producer/verifyUserProducer";

export class CreateComplaintUseCase{
    constructor(readonly repository:IComplaintRepository) {
    }

    async run (
        userId:string,
        type:string,
        complaint:string,
        score:number,
        stars:number,
        categories:[string],
        shuttleId?:string
    ) {
        try {
            const verifyUser = await VerifyUserProducer(userId);
            if (!verifyUser) {
                throw new Error("Error during execution CreateComplaintUseCase\n")
            }
            if (shuttleId){
                const verifyShuttle = await VerifyShuttleProducer(shuttleId)
                if (verifyShuttle){
                    await this.repository.create(userId,type,complaint,score,stars,categories,shuttleId);
                }else{
                    throw new Error("Error during execution CreateComplaintUseCase")
                }
            }
            else await this.repository.create(userId,type,complaint,score,stars,categories);
        }catch(error){
            console.log(error)
            throw new Error("Error during execution CreateComplaintUseCase")
        }
    }
}