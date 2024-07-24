import express from "express";
import {
    createComplaintController,
    deleteComplaintController,
    getAllByTypeComplaintController,
    getAllComplaintController,
    getAllFromUserComplaintController,
    getByCategoryComplaintController,
    getByIdComplaintController, getByShuttleComplaintController,
    updateComplaintController
} from "../dependencies";
import {authenticateMiddleware, sanitizeMiddleware} from "../../../middleware/authenticator";


export const complaintRouter = express.Router();

complaintRouter.post("/",authenticateMiddleware,sanitizeMiddleware,createComplaintController.execute.bind(createComplaintController))
complaintRouter.delete("/:id",authenticateMiddleware,sanitizeMiddleware,deleteComplaintController.execute.bind(deleteComplaintController))

complaintRouter.get('/type/:type',authenticateMiddleware,sanitizeMiddleware,getAllByTypeComplaintController.execute.bind(getAllByTypeComplaintController))
complaintRouter.get('/',authenticateMiddleware,sanitizeMiddleware,getAllComplaintController.execute.bind(getAllComplaintController))
complaintRouter.get('/from/user/:userId',authenticateMiddleware,sanitizeMiddleware,getAllFromUserComplaintController.execute.bind(getAllFromUserComplaintController))
complaintRouter.get('/category/:category',authenticateMiddleware,sanitizeMiddleware,getByCategoryComplaintController.execute.bind(getByCategoryComplaintController))
complaintRouter.get('/:id',authenticateMiddleware,sanitizeMiddleware,getByIdComplaintController.execute.bind(getByIdComplaintController))
complaintRouter.get('/from/shuttle/:shuttleId',authenticateMiddleware,sanitizeMiddleware,getByShuttleComplaintController.execute.bind(getByShuttleComplaintController))

complaintRouter.put('/:id',authenticateMiddleware,sanitizeMiddleware,updateComplaintController.execute.bind(updateComplaintController))