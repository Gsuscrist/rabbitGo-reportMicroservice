import express from "express";
import {
    createAnswerController,
    deleteAnswerController,
    getAllAnswerController,
    getByComplaintIdController, getByIdAnswerController, updateAnswerController
} from "../dependencies";
import {authenticateMiddleware, authorizeRole, sanitizeMiddleware} from "../../../middleware/authenticator";

export const answerRouter = express.Router();

answerRouter.post('/',authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),createAnswerController.execute.bind(createAnswerController));
answerRouter.delete('/:id',authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),deleteAnswerController.execute.bind(deleteAnswerController));

answerRouter.get('/',authenticateMiddleware,sanitizeMiddleware,getAllAnswerController.execute.bind(getAllAnswerController));
answerRouter.get('/from/:complaintId',authenticateMiddleware,sanitizeMiddleware,getByComplaintIdController.execute.bind(getByComplaintIdController))
answerRouter.get('/:id',authenticateMiddleware,sanitizeMiddleware,getByIdAnswerController.execute.bind(getByIdAnswerController));

answerRouter.put('/:id',authenticateMiddleware,sanitizeMiddleware,authorizeRole("admin"),updateAnswerController.execute.bind(updateAnswerController));