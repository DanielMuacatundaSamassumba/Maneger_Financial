import fastify from 'fastify'

const app = fastify()
app.listen({ port: 3000, host: "localhost" }).then(function() {
     console.log("Servidor está rodando")
})
