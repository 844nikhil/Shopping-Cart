const repository = require('../../dbRepo/repository')

// POST Handler to create an new user
exports.postHandler = async (req, res) => {
    try {
        const savedUser = await repository.createUser(req.body);
        console.log(req.body)
        console.log("hello ", savedUser)
        res.send({ "status": "200 Ok" })
    } catch (err) {
        res.send(err);
    }
}
