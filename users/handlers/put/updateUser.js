const repository = require('../../dbRepo/repository')

exports.putHandler = async (req, res) => {
    try {
        const user = await repository.getUserById(req.params.id);
        const editedUser = await repository.editUser(user, req.body);
        res.send({ "status": "200 OK" });
    }
    catch (err) {
        res.send(err)
    }
}
