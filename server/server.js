const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  var teacher = {
	  "name": "hukamchand",
	  "village": "gurgachka",
	  "school": "primary school",
	  "age": 60,
	  "subject": ["math", "english", "physics"]
  }
  var str = JSON.stringify(teacher);
	 res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.end(str);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
