const { WebSocketServer } = require("ws") // importando o servidor WSS
const dotenv = require("dotenv") // importando o ENV, onde está a porta de acesso

dotenv.config()

const wss = new WebSocketServer({ port: process.env.PORT || 8080 }) // Determina a porta do servidor vindo de uma variavel de ambiente ".env"

// ws = cliente que se conecta no servidor
wss.on("connection", (ws) => {
    // caso haja algum problema na conexão, log de erro
    ws.on("error", console.error)
    // enviar mensagem e receber a mensagem

    ws.on("message", (data) => {
       // devolver a mensagem para todos os user conectados
       wss.clients.forEach((client) => client.send(data.toString()))              
    })

    console.log("client connected")

})