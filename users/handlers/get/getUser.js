const repository = require('../../dbRepo/repository')

exports.getSingleHandler = async (req, res) => {
    try {
        const user = await repository.getUserById(req.params.id);
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
}
