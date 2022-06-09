const mosca = require('mosca')

const settings = {
  port: 1883,
  http: {
    port: 3000,
    bundle: true
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

function ready() {
  console.log('Mosca server is up and running')
}

module.exports = mqttServ
