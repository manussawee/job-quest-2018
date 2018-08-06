const express       = require('express')
const bodyParser    = require('body-parser')
const cookieSession = require('cookie-session')

const app = express()

// connect database
const connectDatabase = require('./config/mongoose')
connectDatabase()

// setup body and session parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieSession({
    name: 'session',
    keys: ['please, let me work with you <3'],
    maxAge: 60 * 60 * 1000 // 1 hour
}))

// get and use controllers
const homeController = require('./controllers/home-controller')
app.use('/', homeController)

app.listen(3000)
