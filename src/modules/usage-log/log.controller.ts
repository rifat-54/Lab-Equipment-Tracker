import { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";



const createUsageLog:RequestHandler=async(req,res)=>{
   try {
     const payload=req.body
     console.log(payload);
    const log=await prisma.usageLog.create({
        data:payload
    })
    res.send({
        message:"log added",
        data:log
    })
   } catch (error) {
        res.send({
            message:"log creation error",
            error
        })
   }
     
}

const getUsageLog:RequestHandler=async(req,res)=>{
   try {
    const log=await prisma.usageLog.findMany({
        include:{
            user:true,
            equipment:true
        }
    })
    res.send({
        message:"logs",
        data:log
    })
   } catch (error) {
        res.send({
            message:"log error",
            error
        })
   }
     
}

export const logControler={
    createUsageLog,
    getUsageLog
}
