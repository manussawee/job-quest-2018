const mongoose = require('mongoose')
const env      = require('../env')

const connectDatabase = _ => {
    mongoose.connect(`mongodb://${env.database.username}:${env.database.password}@${env.database.host}:27017/${env.database.database}`, { useNewUrlParser: true })
        .then(_ => {
            console.log('Database connection successful')
        })
        .catch(err => {
            console.warn('Database connection error')
        })
}

module.exports = connectDatabase
