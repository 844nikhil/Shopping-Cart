// Importing required modules and packages
const {port} = require("./constants/constants")
const router = require("./routers/router")
const morgan = require("morgan")
const cors = require('cors')
const bodyParser = require('body-parser') //body-parser for reading json bodies
const express = require("express")
const app = express() //initialize app object for handling requests
const dotenv = require('dotenv')
dotenv.config() // load env variables

// Using middleware
app.use(cors()) // allow cross origin resource sharing
app.use(morgan("dev")) //to keep track of http requests
app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support urlencoded

require("./config/dbconfig")(app) //creating mongodb connection
// const fun = require("./config/dbconfig")
// fun(app)

// routing requests
app.use("/v1/users/", router)

// listening on port
app.listen(port, () => console.log(`Listening on port ${port}`))
