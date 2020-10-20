const app = require('./app')
const mqttServ = require('./broker')

// Attach HTTP to MQTT server
mqttServ.attachHttpServer(app)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Servidor aberto em: http://localhost:${port}/`))
