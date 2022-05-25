const app = require('./app')
const mqttServ = require('./broker')

const port = process.env.PORT || 5555

// Attach HTTP to MQTT server
mqttServ.attachHttpServer(app)

app.listen(port, () => console.log(`Servidor aberto em: http://localhost:${port}/`))
