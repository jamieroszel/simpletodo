//////////////
// Import Dependencies
//////////////
require('dotenv').config() // loads my env variable into process.env
const express = require('express') // framework
const morgan = require('morgan') // logger
// const {log} = require('mercedlogger') // colorful logging
const methodOverride = require('method-override') //overriding methods
const HomeRouter = require('./routes/home')
const TodoRouter = require('./routes/todo')

///////////////
// Other Variables
//////////////
const PORT = process.env.PORT

////////////////
// Set Up Application Object
///////////////////
const app = express()

//////////////////
// Set the View
////////////////
app.set('view engine', 'ejs')

///////////////
// Middleware
///////////////
app.use(express.static('public')) // server the public folder as static
app.use(express.urlencoded({extended:true})) // parse data coming in from forms
app.us(methodOverride('_method')) // looks for ?_method=put
app.use(morgan('tiny')) // logging

/////////////////
// Routes
/////////////////

app.use('/', HomeRouter) // for our home page '/'
app.use('/todos', TodoRouter) // all our routes for '/todos'

/////////////////
// Server Listener
/////////////////
app.listen(PORT, log.green('SERVER STATUS', `Listening on ${PORT}`))