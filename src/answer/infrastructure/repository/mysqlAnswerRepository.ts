import { PrismaClient } from "@prisma/client";
import { Answer } from "../../domain/entity/answer";
import {IAnswerRepository} from "../../domain/repository/IAnswerRepository";
import {v4 as uuidv4} from "uuid";

const prisma = new PrismaClient()
export class MySqlAnswerRepository implements IAnswerRepository {

    async create(complaintId: string, answer: string): Promise<void> {
        try {
            let id = uuidv4()
            await prisma.answer.create({
                data:{
                    id:id,
                    complaintId:complaintId,
                    answer:answer
                }
            })
        }catch (e){
            console.log("error: ",e);
            throw new Error("Error during execution CreateAnswer");
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await prisma.answer.update({
                where:{id:id},
                data:{
                    deletedAt:new Date(),
                }
            })
        }catch(error){
            console.log("error: ",error)
            throw new Error("Error during execution DeleteAnswer");
        }
    }

    async getAll(): Promise<Answer[] | null> {
        try {
            const answers = await prisma.answer.findMany({
                where:{deletedAt:null},
            })
            if (answers){
                return answers.map(answer=>{
                    return new Answer(answer.id,answer.complaintId,answer.answer,answer.deletedAt)
                })
            }
            return null
        }catch (e){
            console.log("error: ",e);
            throw new Error("Error during execution GetAllAnswers");
        }
    }

    async getByComplaintId(complaintId: string): Promise<Answer | null> {
        try {
            const answer = await prisma.answer.findUnique({
                where:{
                    complaintId:complaintId,
                    AND:{deletedAt:null}
                },
            })

            if (answer){
                return new Answer(answer.id,answer.complaintId,answer.answer,answer.deletedAt)
            }
            return null
        }catch(error){
            console.log("error: ",error)
            throw new Error("Error during execution GetByComplaintId");
        }
    }

    async getById(id: string): Promise<Answer | null> {
        try {
            const answer = await prisma.answer.findUnique({
                where:{
                    id:id,
                    AND:{
                        deletedAt:null
                    }
                },
            })
            if (answer){
                return new Answer(answer.id,answer.complaintId,answer.answer,answer.deletedAt)
            }
            return null
        }catch (e){
            console.log("error: ",e);
            throw new Error("Error during execution GetById");
        }
    }

    async update(id: string, complaintId: string, answer: string): Promise<Answer | null> {
        try {
            const updateAnswer = await prisma.answer.update({
                where:{
                    id:id,
                    AND:{
                        deletedAt:null
                    }
                },
                data:{
                    complaintId:complaintId,
                    answer:answer
                }
            })
            if (updateAnswer){
                return new Answer(updateAnswer.id,updateAnswer.complaintId,updateAnswer.answer,updateAnswer.deletedAt)
            }
            return null
        }catch (e){
            console.log("error: ",e)
            throw new Error("Error during execution updateAnswer")
        }
    }

}