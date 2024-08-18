import express from 'express';
import  products  from './routes/products.js';
import cors from 'cors'
import {connection} from './db/connection.js'
import signup from './routes/user.js';

const app= express();
app.use(express.json())
app.use(cors())

app.use('/user',signup)
connection.then(()=>{
    console.log("Connected")
}).catch((err)=>{
    console.log("Error: ",err)
})


app.use('/products',products)


app.listen(5000,()=>{
    console.log("server.......");
});