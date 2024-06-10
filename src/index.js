// require('dotenv').config()

import dotenv from 'dotenv'
import connectDB from "./db/index.js";


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

connectDB();