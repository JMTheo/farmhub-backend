const mosca = require('mosca')

// Define connection to MongoDB
const mongoCon = process.env.MONGO_ONLINE_URI

// This settings is required to enable persistent session feature.
// All messages will be stored in MongoDB
const ascoltatore = {
  type: 'mongo',
  url: mongoCon,
  pubsubCollection: 'ascoltatori',
  mongo: {}
}

// Final settings for Mosca MQTT broker
const settings = {
  port: 1883,
  backend: ascoltatore,
  persistence: {
    factory: mosca.persistence.Mongo,
    url: mongoCon
  }
}

// Define HTTP and MQTT servers
const mqttServ = new mosca.Server(settings)

// Triggers when mqtt server is ready to accept requests
mqttServ.on('ready', ready)

// Triggers when new message is published
mqttServ.on('published', function (packet, client) {
  console.log(packet.topic + ': ' + packet.payload)
})

function ready () {
  console.log('Mosca server is up and running')
}

module.exports = mqttServ
