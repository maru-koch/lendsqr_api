
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// ROUTERS
const userRouter = require('./routes/userRouter')
const accountRouter = require('./routes/accountRouter')
// const transactionRouter = require('./routes/transactionRouter')
const app = express();

app.use(cors());
app.use(morgan('short'));
app.use(express.urlencoded({extended:true}))
app.use(express.json());

// // app.use("/user", userRouter);
// // app.use("/account", accountRouter);
// // app.use("/transaction", transactionRouter);

// module.exports = app;


// const session = require('express-session')
// const KnexStore = require('connect-session-knex')(session)
// const db = require('./config/db')
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
// const sessionStore = new KnexStore({knex: db})



if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}

app.use("/api/v1/user", userRouter);
app.use("/api/v1/account", accountRouter);
// app.use("/transaction", transactionRouter);

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || 'lendersqr',
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false,
//   })
// )

module.exports = app