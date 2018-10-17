const http = require('http')

const port = 3000

http.createServer((request, response) => {
    let htmlResponse = `
        <h1>
            El servidor Node actual dice "Hola Mundo"
        </h1>`
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(htmlResponse)
}).listen(port)

console.log('Server ejecutándose en http://localhost:' + port)

