const http = require("http")

const puerto = 3033

const servidor = http.createServer((request, response) => {
  console.log("Método recibido:", request.method)
  console.log("Ruta solicitada:", request.url)

  
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
    response.write("propuesta: Bienbenidos a mi servidor compañeros y compañeras.")
    response.end()
    
  })

 

servidor.listen(puerto, () => {
  console.log("Servidor funcionando en http://localhost:" + puerto)
  console.log("Puedes abrir http://localhost:" + puerto + " en el navegador.")
})
