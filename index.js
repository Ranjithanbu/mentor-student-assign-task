import Express from "express";
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from "./Database/config.js";
import MainRouter from "./Router/router.js";


dotenv.config()
const app=Express()
app.use(cors())
app.use(Express.json())
const port=process.env.PORT
connectDB()

app.get('/',(req,res)=>{

 res.status(200).json({message:'site is working'})   
})
app.use('/api',MainRouter)
app.listen(port,()=>{
    console.log("app is listening on the port-",port);
})