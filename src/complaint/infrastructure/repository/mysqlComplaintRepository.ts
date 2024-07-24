import { Complaint } from "../../domain/entity/complaint";
import {IComplaintRepository} from "../../domain/repository/IComplaintRepository";
import {PrismaClient} from '@prisma/client'
import {v4 as uuidv4} from 'uuid'
const prisma = new PrismaClient()

export class MysqlComplaintRepository implements IComplaintRepository {

    async verifyType(type:string){
        switch(type){
            case "Resolved":
                type="Resolved";
                break;
            case "Closed":
                type="Resolved";
                break;
            case "Received":
                type="Received";
                break;
            default:
                type = "Received";
                break;
        }
        return type;
    }

    async create(userId: string, type: string, complaint: string, score:number,stars:number,categories:[string],shuttleId?: string | undefined): Promise<void> {
        try {
            await prisma.complaint.create({
                data:{
                    id: uuidv4(),
                    userId:userId,
                    type:await this.verifyType(type),
                    complaint:complaint,
                    score:score,
                    stars:stars,
                    categories:Array.from(categories),
                    shuttleId:shuttleId||null,
                    creationDate:new Date()
                }
            })
        }catch (e){
            console.log("Error:\n",e)
            throw new Error("Error during creating complaint");
        }
    }
    async delete(id: string): Promise<void> {
        try {
            await prisma.complaint.update({
                where:{id:id,AND:{deletedAt:null}},
                data:{
                    deletedAt:new Date()
                }
            })
        }catch (e){
            console.log("Error:\n",e)
            throw new Error("Error during deleting complaint");
        }
    }

    async getAllByType(type: string): Promise<Complaint[] | null> {
        try {
            const complaints = await prisma.complaint.findMany({
                where:{type:type,AND:{deletedAt:null}},
                include:{
                    answer:true
                }
            })
            if(complaints){
                return complaints.map(complaint=>{
                    return new Complaint(
                        complaint.id,
                        complaint.userId,
                        complaint.type,
                        complaint.complaint,
                        complaint.shuttleId,
                        complaint.score,
                        complaint.stars,
                        complaint.categories as [string],
                        null,
                        complaint.creationDate,
                        complaint.answer
                    )
                })
            }else{
                return null
            }
        }catch (e){
            console.log("Error:\n",e)
            throw new Error("Error during getAllByType");
        }
    }

    async getAll(): Promise<Complaint[] | null> {
        try {
            const complaints = await prisma.complaint.findMany({
                where:{deletedAt:null},
                include:{
                    answer:true
                }
            })
            if(complaints){
                return complaints.map(complaint=>{
                    return new Complaint(
                        complaint.id,
                        complaint.userId,
                        complaint.type,
                        complaint.complaint,
                        complaint.shuttleId,
                        complaint.score,
                        complaint.stars,
                        complaint.categories as [string],
                        null,
                        complaint.creationDate,
                        complaint.answer
                    )
                })
            }else{
                return null
            }
        }catch (e){
            console.log("Error:\n",e)
            throw new Error("Error during getAll");
        }
    }

    async getAllFrom(userId: string): Promise<Complaint[] | null> {
        try {
            const complaints = await prisma.complaint.findMany({
                where:{userId:userId,AND:{deletedAt:null}},
                include:{
                    answer:true
                }
            })
            if(complaints){
                return complaints.map(complaint=>{
                    return new Complaint(
                        complaint.id,
                        complaint.userId,
                        complaint.type,
                        complaint.complaint,
                        complaint.shuttleId,
                        complaint.score,
                        complaint.stars,
                        complaint.categories as [string],
                        null,
                        complaint.creationDate,
                        complaint.answer
                    )
                })
            }else{
                return null
            }
        }catch (e){
            console.log("Error:\n",e)
            throw new Error("Error during getAllFromUser");
        }
    }

    async getByCategory(category: string): Promise<Complaint[] | null> {
        try {
            const complaints = await prisma.complaint.findMany({
                where:{
                    categories:{
                        array_contains:[category]
                    },
                    AND:{
                        deletedAt:null
                    }
                },
                include:{
                    answer:true
                }
            })

            if (complaints){
                return complaints.map(complaint => {
                    return new Complaint(
                        complaint.id,
                        complaint.userId,
                        complaint.type,
                        complaint.complaint,
                        complaint.shuttleId,
                        complaint.score,
                        complaint.stars,
                        complaint.categories as [string],
                        null,
                        complaint.creationDate,
                        complaint.answer
                    );
                });
            }
            return  null
        }catch (e){
            console.log("Error: ",e)
            throw new Error("Error during getByCategory")
        }
    }

    async getById(id: string): Promise<Complaint | null> {
        try {
            const complaint = await prisma.complaint.findUnique({
                where:{id:id,AND:{deletedAt:null}},
                include:{
                    answer:true
                }
            })
            if (complaint){
                return new Complaint(complaint.id,complaint.userId,complaint.type,complaint.complaint,complaint.shuttleId,complaint.score,complaint.stars,complaint.categories as [string],null,complaint.creationDate,complaint.answer)
            }else{
                return null
            }
        }catch (e){
            console.log("Error:\n",e)
            throw new Error("Error during getById");
        }
    }

    async getByShuttleId(shuttleId:string): Promise<Complaint[] | null> {
        try {
            const complaints = await prisma.complaint.findMany({
                where:{shuttleId:shuttleId,AND:{deletedAt:null}},
                include:{
                    answer:true
                }
            })
            if(complaints){
                return complaints.map(complaint=>{
                    return new Complaint(
                        complaint.id,
                        complaint.userId,
                        complaint.type,
                        complaint.complaint,
                        complaint.shuttleId,
                        complaint.score,
                        complaint.stars,
                        complaint.categories as [string],
                        null,
                        complaint.creationDate,
                        complaint.answer
                    )
                })
            }else{
                return null
            }
        }catch (e){
            console.log("Error:\n",e)
            throw new Error("Error during getByShuttleId");
        }
    }

    async update(id: string, type: string, complaint: string,score:number,stars:number,categories:[string]): Promise<Complaint | null> {
        try {
            const complaints = await prisma.complaint.update({
                where:{id:id,AND:{deletedAt:null}},
                data:{
                    type:await this.verifyType(type),
                    complaint:complaint,
                    score:score,
                    stars:stars,
                    categories:Array.from(categories),

                }
            })
            return new Complaint(complaints.id,complaints.userId,complaints.type,complaints.complaint,complaints.shuttleId,complaints.score,complaints.stars,complaints.categories as [string],null,complaints.creationDate)
        }catch (e){
            console.log("Error:\n",e)
            throw new Error("Error during update")
        }
    }

}