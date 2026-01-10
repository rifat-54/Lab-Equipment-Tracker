import { Router } from "express";
import { logControler } from "./log.controller";


const logRouter=Router()

logRouter.post("/",logControler.createUsageLog)
logRouter.get("/",logControler.getUsageLog)

export default logRouter;
