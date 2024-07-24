
import express from 'express';
import {Response,Request} from 'express';
import {Signale} from 'signale';
import {complaintRouter} from "./complaint/infrastructure/route/complaintRouter";
import {answerRouter} from "./answer/infrastructure/route/answerRouter";

//TODO: add validate userId
// this goes 4 create n update method in COMPLAINT

const app = express();
const signale = new Signale();

app.use(express.json())
app.use('/health', (req: Request, res: Response) => {
    res.status(200).send({
        status: "Success",
        data: [],
        message: "Health ok!"
    });
});

app.use('/answer',answerRouter);
app.use('/complaint',complaintRouter);



app.listen(8081,()=>{
    signale.success("Server on line in port: 8081")
})
