import express from 'express';
import sequilize from './dbconfig/dbconfig.js';
import cors from 'cors';
import userRouter from "./routes/userRoutes.js"
import articaleRouter from "./routes/articaleRoutes.js"





const app= express();


app.use(express.json())
// middelware 
app.use(cors());
app.use('/api/user',userRouter)
app.use('/api/articale',articaleRouter)


sequilize.sync() 
app.listen(8000, ()=>{
   
    console.log("connected to the backend")
});