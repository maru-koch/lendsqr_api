
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const morgan = require('morgan');

// ROUTERS
const userRouter = require('./routes/userRouter')
const accountRouter = require('./routes/accountRouter')
const transactionRouter = require('./routes/transactionRouter')

// // app.use(cors());
// // app.use(morgan('short'));
// // app.use(express.urlencoded({extended:true}))
// // app.use(express.json());

// // app.use("/user", userRouter);
// // app.use("/account", accountRouter);
// // app.use("/transaction", transactionRouter);

// module.exports = app;

const express = require('express')
const session = require('express-session')
const KnexStore = require('connect-session-knex')(session)
const db = require('./config/db')
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const PORT = process.env.PORT || 8080
const sessionStore = new KnexStore({knex: db})
const app = express()


if (process.env.NODE_ENV === 'test') {
  after('close the session store', () => sessionStore.stopExpiringSessions())
}

app.use("/user", userRouter);
app.use("/account", accountRouter);
app.use("/transaction", transactionRouter);

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'my best friend is Marley',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
)

app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))

module.exports = app