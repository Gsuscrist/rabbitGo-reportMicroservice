import {MysqlComplaintRepository} from "./repository/mysqlComplaintRepository";
import {CreateComplaintUseCase} from "../application/useCase/createComplaintUseCase";
import {CreateComplaintController} from "./controller/createComplaintController";
import {DeleteComplaintUseCase} from "../application/useCase/deleteComplaintUseCase";
import {DeleteComplaintController} from "./controller/deleteComplaintController";
import {GetAllByTypeComplaintUseCase} from "../application/useCase/getAllByTypeComplaintUseCase";
import {GetAllByTypeComplaintController} from "./controller/getAllByTypeComplaintController";
import {GetAllComplaintUseCase} from "../application/useCase/getAllComplaintUseCase";
import {GetAllComplaintController} from "./controller/getAllComplaintController";
import {GetAllFromUserComplaintUseCase} from "../application/useCase/getAllFromUserComplaintUseCase";
import {GetAllFromUserComplaintController} from "./controller/getAllFromUserComplaintController";
import {GetByIdComplaintUseCase} from "../application/useCase/getByIdComplaintUseCase";
import {GetByIdComplaintController} from "./controller/getByIdComplaintController";
import {UpdateComplaintUseCase} from "../application/useCase/updateComplaintUseCase";
import {UpdateComplaintController} from "./controller/updateComplaintController";
import {GetByCategoryComplaintUseCase} from "../application/useCase/getByCategoryComplaintUseCase";
import {GetByCategoryComplaintController} from "./controller/getByCategoryComplaintController";
import {GetByShuttleIdComplaintUseCase} from "../application/useCase/getByShuttleIdComplaintUseCase";
import {GetByShuttleIdComplaintController} from "./controller/getByShuttleIdComplaintController";

const repository = new MysqlComplaintRepository()

const createComplaintUseCase = new CreateComplaintUseCase(repository)
export const createComplaintController = new CreateComplaintController(createComplaintUseCase)

const deleteComplaintUseCase = new DeleteComplaintUseCase(repository)
export const deleteComplaintController = new DeleteComplaintController(deleteComplaintUseCase)

const getAllByTypeComplaintUseCase = new GetAllByTypeComplaintUseCase(repository)
export const getAllByTypeComplaintController = new GetAllByTypeComplaintController(getAllByTypeComplaintUseCase)

const getAllComplaintUseCase = new GetAllComplaintUseCase(repository)
export const getAllComplaintController = new GetAllComplaintController(getAllComplaintUseCase)

const getAllFromUserComplaintUseCase = new GetAllFromUserComplaintUseCase(repository)
export const getAllFromUserComplaintController = new GetAllFromUserComplaintController(getAllFromUserComplaintUseCase)

const getByCategoryUseCase = new GetByCategoryComplaintUseCase(repository)
export const getByCategoryComplaintController = new GetByCategoryComplaintController(getByCategoryUseCase)

const getByIdComplaintUseCase = new GetByIdComplaintUseCase(repository)
export const getByIdComplaintController = new GetByIdComplaintController(getByIdComplaintUseCase)

const getByShuttleUseCase = new GetByShuttleIdComplaintUseCase(repository)
export const getByShuttleComplaintController = new GetByShuttleIdComplaintController(getByShuttleUseCase)

const updateComplaintUseCase = new UpdateComplaintUseCase(repository)
export const updateComplaintController = new UpdateComplaintController(updateComplaintUseCase)