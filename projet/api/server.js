const express = require('express')

var cors = require('cors')

const server = express()

const EXPRESS_PORT = 3000

server.use(cors())

// initServer => método responsável por executar o servidor quando for iniciado
module.exports = {
  initServer(callback) {
    server.listen(EXPRESS_PORT, () => {
      console.log(`Listening on port ${EXPRESS_PORT}`);

      if (callback) {
        callback(server)
      }
    })
  }
}