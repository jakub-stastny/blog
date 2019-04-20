// Alternative implementation
// https://gist.github.com/aolde/8104861
const fs = require('fs')
const path = require('path')
const url = require('url')
const http = require('http')
// https://nodejs.org/api/esm.html
// import http from 'http'
const port = process.env.PORT || 8080

const mimeTypes = {
  "html": "text/html",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "png": "image/png",
  "ico": "image/x-icon",
  "js": "text/javascript",
  "css": "text/css"
}

process.on('SIGINT', function() {
  console.log("Caught interrupt signal")
  process.exit()
})

function serveFile(response, path, uri) {
  fs.readFile(path, (err, data) => {
    const mimeType = mimeTypes[path.split('.').pop()] || 'text/plain'
    console.log("~ " + uri + " -> " + path + " served as " + mimeType)
    response.writeHead(200, {"Content-Type": mimeType})
    response.write(data)
    response.end()
  })
}
console.log("~ Starting server on port " + port)
http.createServer(function (req, res) {
  const uri = url.parse(req.url).pathname
  const filename = uri.match(/\/$/) ? path.join(process.cwd(), uri, 'index.html') : path.join(process.cwd(), uri)
  fs.existsSync(filename) ? serveFile(res, filename, uri) : serveFile(res, 'index.html', uri)
}).listen(parseInt(port), '0.0.0.0'); //the server object listens on port 8080
