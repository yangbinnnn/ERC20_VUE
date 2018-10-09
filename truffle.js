// Allows us to use ES6 in our migrations and tests.
require('babel-register')
require('dotenv').config()

var PrivateKeyProvider = require('truffle-privatekey-provider')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 9545,
      network_id: '*'
    },
    kovan: {
      provider: function () {
        return new PrivateKeyProvider(
          process.env.KOVAN_PRIVATEKEY,
          `https://kovan.infura.io/${process.env.INFURA_KEY}`
        )
      },
      network_id: '42'
    }
  }
}
