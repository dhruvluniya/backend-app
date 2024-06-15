// require('dotenv').config()

import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path:'./env'
})

// ( async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     } catch (error) {
//         console.error("ERR:",error)
//         throw error
//     }
// })

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000,() => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO DB connection failed !!!",err);
})