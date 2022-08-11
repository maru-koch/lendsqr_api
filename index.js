require('dotenv').config()
require('./config/knexConfig')
const app = require('./app')

const port = process.env.PORT;

process.on('uncaughtException',(error)=>{
    console.log('uncaught exception', error.name, error.stack, error.message)
});

app.listen(port, ()=>{
    console.log("App running on port", port)
});

process.on('unhandledRejection',(error)=>{
    console.log('uncaught exception', error.name, error.stack, error.message)
});