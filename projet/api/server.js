// server.js é responsável por conter as configurações do servidor
const express = require('express')

var cors = require('cors')

const server = express()

const EXPRESS_PORT = 3000

server.use(cors())

// initServer => Método responsável por executar o servidor quando for executado.

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