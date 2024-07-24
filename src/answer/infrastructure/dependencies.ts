import {MySqlAnswerRepository} from "./repository/mysqlAnswerRepository";
import {CreateAnswerUseCase} from "../application/useCase/createAnswerUseCase";
import {CreateAnswerController} from "./controller/createAnswerController";
import {DeleteAnswerUseCase} from "../application/useCase/deleteAnswerUseCase";
import {DeleteAnswerController} from "./controller/deleteAnswerController";
import {GetAllAnswerUseCase} from "../application/useCase/getAllAnswerUseCase";
import {GetAllAnswerController} from "./controller/getAllAnswerController";
import {GetByComplaintIdAnswerUseCase} from "../application/useCase/getByComplaintIdAnswerUseCase";
import {GetByComplaintIdAnswerController} from "./controller/getByComplaintIdAnswerController";
import {GetByIdAnswerController} from "./controller/getByIdAnswerController";
import {GetByIdAnswerUseCase} from "../application/useCase/getByIdAnswerUseCase";
import {UpdateAnswerUseCase} from "../application/useCase/updateAnswerUseCase";
import {UpdateAnswerController} from "./controller/updateAnswerController";

const database = new MySqlAnswerRepository()

const createAnswerUseCase = new CreateAnswerUseCase(database)
export const createAnswerController = new CreateAnswerController(createAnswerUseCase)

const deleteAnswerUseCase = new DeleteAnswerUseCase(database)
export const deleteAnswerController = new DeleteAnswerController(deleteAnswerUseCase)

const getAllAnswerUseCase = new GetAllAnswerUseCase(database)
export const getAllAnswerController = new GetAllAnswerController(getAllAnswerUseCase)

const getByComplaintIdUseCase = new GetByComplaintIdAnswerUseCase(database)
export const getByComplaintIdController = new GetByComplaintIdAnswerController(getByComplaintIdUseCase)

const getByIdAnswerUseCase = new GetByIdAnswerUseCase(database)
export const getByIdAnswerController = new GetByIdAnswerController(getByIdAnswerUseCase)

const updateAnswerUseCase = new UpdateAnswerUseCase(database)
export const updateAnswerController = new UpdateAnswerController(updateAnswerUseCase)