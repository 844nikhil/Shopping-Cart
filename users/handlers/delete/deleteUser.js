const repository = require('../../dbRepo/repository')

exports.deleteHandler = async (req, res) => {
    try {
        await repository.deleteUser(req.params.id);
        res.send({ "status": "200 OK" });
    }
    catch (err) {
        res.send(err);
    }
}
