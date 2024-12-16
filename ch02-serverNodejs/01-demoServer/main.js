const http = require('http');
// console.log(http);
const PORT = 4000
//create server
const server = http.createServer((req, res) => {
    // res.end('oh my god motherfucker')
    res.setHeader("Content-type", "application/json");
    res.end('{"msg": "hello everyone"}')
});
//after create server, it will run on PORT 4000
server.listen(PORT, () => {
    console.log("server are running on PORT" + PORT);
})