const LOGGER = require('log4js').getLogger();

function createUser(req, res) {
    const body = req.body;

    LOGGER.info(req);
    console.log("herheee");
    console.log(body);
    res.status(200).send("Hello");
}

module.exports = {
    createUser: createUser,
}