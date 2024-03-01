const express = require('express');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/User')


dotenv.config();
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected Successfully'))
.catch((err) => { throw err});
const jwtSecret = process.env.JWT_SECRET


const app = express();
app.use(express.json())

app.use(cors({
    credentials: true,
    origin: process.env.CHATAPP_URL,
}))


app.get('/test', (req,res) => {
    res.json('test ok');
});

app.post('/register', async (req,res) => {
 const {username,password} = req.body;
 try{
    const createdUser = await User.create({username,password});
    jwt.sign({userId:createdUser._id},jwtSecret, {} ,(err,token) => {
        if (err) throw err;
        res.cookie('token', token).status(201).json({
            _id: createdUser._id
        });
     });
 }catch(err){
    if(err) throw err
    res.status(500).json('error')
 }
 
});

app.listen(4000, ()=>{
    console.log('Server is running on port 4000')
})

