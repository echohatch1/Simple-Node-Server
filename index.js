const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('content-type', 'text/html')
        res.setHeader('Landon', 'I am the best')
        res.write('<html>')
        res.write('<head><title>Testing Server</title></head>')
        res.write('<body><h1>Welcome to my server page</h1></body>')
        res.write('</html>')
        return res.end();
    }
    if (req.url === '/api') {
        console.log(req.rawHeader);
        const tom = {
            topGun: 'Maveric',
            mi: 'Ethan Hunt',
            lastSamurai: 'Nathan Algren'
        }
        res.setHeader('Content-Type', 'application/json')
        res.write(JSON.stringify(tom))
        return res.end()
    }
    if (req.url === 'user') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody.split('=')[1])
        })
    }
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
})

server.listen(5000)