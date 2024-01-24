const express = require("express");
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
//we r creating route so that all request starts from 
// /api/v1/user(xyz)

//as our routes may also contains
//api/v1/user/signin
//api/v1/user/signup
//api/v1/user/changePassword...


//api/v1/account/transferMoney
//api/v1/account/balance

//so why not two more routes

const rootRouter=require('./routes/index');
const userRouter=require('./routes/users')
const accountRouter = require("./routes/account");
app.use('/api/v1',rootRouter)
app.use('/api/v1/users',userRouter);
app.use('/api/v1/account',accountRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
