var constant = require('../../constants/constants')

//ping the api to check if it returns 200 OK response
exports.pingHandler = (req, res) => {
    res.send({ "status": "200 Ok" })
}

//returns the version of the api
exports.versionHandler = (req, res) => {
    res.send({ "version": constant.version })
}
