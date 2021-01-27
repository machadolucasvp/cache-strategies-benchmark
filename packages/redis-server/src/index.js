require('dotenv').config()
const Mongo = require('./config/mongodb')
const app = require('./config/express')

Mongo.bootstrap()
app.listen(process.env.API_PORT, () => console.log(`listening on ${process.env.API_PORT}`))

module.exports = app
