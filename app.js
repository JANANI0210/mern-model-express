const http = require("http");
const PORT = 3500;
const server = http.createServer((req, res) => {
  const URL = req.url;
  const METHOD = req.method;

  if (URL === "/") {
    if (METHOD === "GET") {
      res.write(`GET request from server `);
      res.end();
    } else if (METHOD === "POST") {
      res.write(`POST request from server`);
      res.end();
    } else if (METHOD === "PUT") {
      res.write(`PUT request`);
      res.end();
    } else if (METHOD === "DELETE") {
      res.write(`DELETE request`);
      res.end();
    }
  } else {
    res.write("Invalid url");
    res.end();
  }
});

// if (url === "/") {
//   res.writeHead(200, { "content-type": "text/html" });
//   res.write(homePage);
//   res.end();
// } else {
//   res.writeHead(200, { "content-type": "text/html" });
//   res.write("<h1>Page not found</h1>");
//   res.end();
// }
server.listen(3500);
