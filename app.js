
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// ROUTERS
// const userRouter = require('./routes/userRouter')
// const accountRouter = require('./routes/accountRouter')
// const transactionRouter = require('./routes/transactionRouter')

// app.use(cors());
// app.use(morgan('short'));
// app.use(express.urlencoded({extended:true}))
// app.use(express.json());

// app.use("/user", userRouter);
// app.use("/account", accountRouter);
// app.use("/transaction", transactionRouter);

module.exports = app;