/*
http is a module in Node.js

It provides:

1. http.createServer() → function belongs to http module; 
not global function
   - creates a Server object

2. http.Server (class)
   - has methods:
     - listen()
     - close()

3. http.ServerResponse (class)
   - has methods:
     - write()
     - end()

4. http.IncomingMessage (class)
   - represents req object
*/
const { warn } = require("console");
const http = require("http");// require:built-in global function 

const ser = http.createServer((req, res) => {
  res.write("Hello from my computer server!");
  res.end();
});

ser.listen(3000, () => {//console: built-in global object
  console.log("Server running on http://localhost:3000");
});
//console has a method: log, warn, error, table

// is a method coz dependent on object
// class Person {
//   greet() {
//     console.log("Hello");
//   }
// }
// is a function coz not dependent on object
// function hello() {
//   console.log("Hi");
// }