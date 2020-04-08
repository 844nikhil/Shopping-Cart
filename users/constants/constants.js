//read the env variable for port or use 8000 if not defined
const port = process.env.port || 8000

// Version of the API
const version = "v1"

module.exports = {
    port,version
}
