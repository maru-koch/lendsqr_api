require('dotenv').config()
require('./config/knexfile')
const app = require('./app')

const port = process.env.EXPRESS_PORT

process.on('uncaughtException',(error)=>{
    console.log('uncaught exception', error.name, error.stack, error.message)
});

app.listen(port, ()=>{
    console.log("App running on port", port)
});

process.on('unhandledRejection',(error)=>{
    console.log('uncaught exception', error.name, error.stack, error.message)
});``