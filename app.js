const http = require('http');

http.createServer((req, res) => {
res.write("On the wat to being a full snack engineer!");
res.end();
}).listen(3000);

console.log("Server started on PORT 3000");
