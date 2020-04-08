// Importing required modules and packages
require("../model/model.js")            //it is required to load the model

// creating router to route requests
const router = require('express').Router()

var api = require('../handlers/api/api.js')
var post = require('../handlers/post/postUser.js')
var get = require('../handlers/get/getUser.js')
var put = require('../handlers/put/updateUser.js')
var del = require('../handlers/delete/deleteUser.js')

// routing all http requests
router.get("/ping", api.pingHandler)
router.get("/version", api.versionHandler)
router.post("/", post.postHandler)
router.get("/:id", get.getSingleHandler)
router.put("/:id", put.putHandler)
router.delete("/:id", del.deleteHandler)

module.exports = router
