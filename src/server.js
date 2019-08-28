const http = require('http')
const fs = require('fs')

const server = http.createServer(function (req, res) {

    const page = 'index.html'
    if (request.url != '/') {
        page = request.url + '.html'
    }

    fs.readFile('../public/' + page, function (err, data) {
        const headStatus = 200
        if (err) {
            const headStatus = 404
            data = fs.readFileSync('../error/404.html')
        }

        response.writeHead(headStatus, { 'Content-type': 'text/html; charset="utf-8' })
        response.write(data)
        response.end()
    })

})

server.listen(3000)