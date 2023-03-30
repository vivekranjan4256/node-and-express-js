const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req.method)
    // console.log(req.url)
    const url = req.url
    //home page
    if(url === '/'){
    res.writeHead(200,{'content_type': 'text/html'})
    res.write('<h1>home page</h1>')
    res.end()
    }
    // about page
    else if(url === '/about'){
        res.writeHead(200,{'content_type': 'text/html'})
        res.write('<h1>about page</h1>')
        res.end()
    }
    else{
        res.writeHead(404,{'content_type' : 'text/html'})
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)