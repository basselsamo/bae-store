"use strict"
const routeResponseMap = {
    "/home": "<h1>Home Page</h1>",
    "/women": "<h1>Women Mode</h1>",
    "/men": "<h1>Men Mode</h1>",
    "/kids": "<h1>Kids Mode</h1>",
    "/support": "<h1>Support & Contact</h1>"
};

const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const app = http.createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html"
});

if (routeResponseMap[req.url]) {
    res.end(routeResponseMap[req.url]);
  } else {
    res.end("<h1>Welcome to BAE Store!</h1>");
  }
});
app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);